<?php

/*
 * mapshup - Webmapping made easy
 * http://mapshup.info
 *
 * Copyright Jérôme Gasperi, 2011.12.08
 *
 * jerome[dot]gasperi[at]gmail[dot]com
 *
 * This software is a computer program whose purpose is a webmapping application
 * to display and manipulate geographical data.
 *
 * This software is governed by the CeCILL-B license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL-B
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 *
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 *
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 *
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL-B license and that you accept its terms.
 */
/*
  Pleiades catalog connector (i.e. WFS getFeatures service)

  Allowed filters :

  $bbox
  $DSID - If set then $bbox is discarded
  $startDate/$completionDate
  $archivingDate
  $catalogUrl -  The Url to the Pleiades catalog GetFeature service
  $operateur - A valid Pleiades operator name

  $cursor = 1;
  $maxResults = 10;

 */


include_once '../../../config.php';
include_once '../../../functions/general.php';
include_once '../../../functions/geometry.php';

/* ===================== FUNCTIONS ================================= */

/*
 * Get NumberOfResults from a WFS GetFeatures "hits" request 
 */

function getNbOfResults($theData) {
    $doc = new DOMDocument();
    $doc->loadXML($theData);
    $collection = $doc->getElementsByTagname('FeatureCollection');
    if ($collection->item(0) !== null) {
        return $collection->item(0)->getAttribute('numberOfFeatures');
    }
    return "0";
}

/*
 * Load a PHR WFS result document
 */

function loadQuicklook($theData, $operateur, $result = "") {
    $doc = new DOMDocument();
    $doc->loadXML($theData);
    $datastrips = $doc->getElementsByTagname('DataStrip');
    foreach ($datastrips as $ds) {
        $dsid = $ds->getElementsByTagName('identifier')->item(0)->nodeValue;
        $browseInformations = $ds->getElementsByTagname('BrowseInformation');
        foreach ($browseInformations as $browseInformation) {
            if ($browseInformation->getElementsByTagName('type')->item(0)->nodeValue == "THUMBNAIL") {
                $quicklookNode = $browseInformation->getElementsByTagName('fileName')->item(0);
            }
        }
        $curl = curl_init();

        // Retrieve quicklooks
        $qlurl = $quicklookNode->nodeValue;
        curl_setopt($curl, CURLOPT_URL, $qlurl);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($curl, CURLOPT_HTTPHEADER, Array("REMOTE_USER: " . $operateur));
        $theQuicklook = curl_exec($curl);
        curl_close($curl);

        // Quicklooks are stored with the MSP_UPLOAD_DIR directory
        $handle = fopen(MSP_UPLOAD_DIR . $dsid . ".jpg", "w");
        fwrite($handle, $theQuicklook);
        fclose($handle);

        // Quicklooks are streamed through the MSP_GETFILE_URL service 
        $ds->getElementsByTagName('fileName')->item(0)->nodeValue = MSP_GETFILE_URL . $dsid . ".jpg&amp;stream=true";
    }
    return $doc->saveXML();
}

/*
 * Return a GeoJSON version of the WFS GetFeature result return
 */

function outputToGeoJSON($theData, $nbOfResults) {

    // Load the GetFeature result document
    $doc = new DOMDocument();
    $doc->loadXML($theData);
    
    /*
     * Initialiaze GeoJSON
     */
    $geojson = array(
        'type' => 'FeatureCollection',
        'totalResults' => $nbOfResults,
        'features' => array()
    );

    // Check root element
    if ($doc->getElementsByTagname('FeatureCollection')->item(0) === null) {

        /*
         * Send an error
         */
        $geojson = array(
            'error' => array(
                'message' => "Invalid response from server"
            )
        );
        return json_encode($geojson);
    }

    // Get the DataStrip root element
    $dataObjects = $doc->getElementsByTagname('DataStrip');

    // Roll over each feature
    foreach ($dataObjects as $dataObject) {

        // Initialize empty properties array
        $properties = array();

        $properties["identifier"] = $dataObject->getElementsByTagName('identifier')->item(0)->nodeValue;
        $properties["startDate"] = $dataObject->getElementsByTagName('startDate')->item(0)->nodeValue;
        $properties["completionDate"] = $dataObject->getElementsByTagName('completionDate')->item(0)->nodeValue;
        $properties["acquisitionSubType"] = $dataObject->getElementsByTagName('acquisitionSubType')->item(0)->nodeValue;
        $properties["serialIdentifier"] = $dataObject->getElementsByTagName('serialIdentifier')->item(0)->nodeValue;
        $properties["orbitNumber"] = $dataObject->getElementsByTagName('orbitNumber')->item(0)->nodeValue;
        $properties["cloudCoverPercentage"] = $dataObject->getElementsByTagName('cloudCoverPercentage')->item(0)->nodeValue;
        $properties["archivingCenter"] = $dataObject->getElementsByTagName('archivingCenter')->item(0)->nodeValue;
        $posList = $dataObject->getElementsByTagName('posList')->item(0)->nodeValue;
        
        // Album, quicklook and thumbnails
        $browses = $dataObject->getElementsByTagName('BrowseInformation');
        foreach ($browses as $browse) {
            $type = $browse->getElementsByTagName('type')->item(0)->nodeValue;
            $properties[strtolower($type)] = $browse->getElementsByTagName('fileName')->item(0)->nodeValue;
        }
        
        // Masks
        $masks = $dataObject->getElementsByTagName('MaskInformation');
        foreach ($masks as $mask) {
            $type = $mask->getElementsByTagName('type')->item(0)->nodeValue;
            if ($mask->getElementsByTagName('referenceSystemIdentifier')->item(0)->nodeValue === "4326") {
                $properties[strtolower($type)] = $mask->getElementsByTagName('fileName')->item(0)->nodeValue;
            }
        }
        
        /*
         * Add feature
         */
        $feature = array(
            'type' => 'Feature',
            'geometry' => posListToGeoJSONGeometry($posList, LATLON),
            'properties' => $properties
        );

        /*
         * Add feature array to feature collection array
         */
        array_push($geojson['features'], $feature);
    }

    return json_encode($geojson);
}

/** =========================== END FUNCTIONS ========================= */
// This script returns JSON data
header("Pragma: no-cache");
header("Expires: 0");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Content-type: application/json; charset=utf-8");

// No Url specified => returns empty result
$url = isset($_REQUEST["catalogUrl"]) ? $_REQUEST["catalogUrl"] : null;
if ($url == null) {
    die('{"error":{"message":"Catalog url is empty"}}');
}

// Set cursor. Default is 1
$cursor = isset($_REQUEST["nextRecord"]) ? $_REQUEST["nextRecord"] : 1;
if (!is_numeric($cursor)) {
    $cursor = 1;
}

// Set maxRecords. Default is MSP_RESULTS_PER_PAGE
$maxResults = isset($_REQUEST["numRecordsPerPage"]) ? $_REQUEST["numRecordsPerPage"] : MSP_RESULTS_PER_PAGE;
if (!is_numeric($maxResults)) {
    $maxResults = MSP_RESULTS_PER_PAGE;
}

// !! Cursor value must be transformed into page value
if (intval($maxResults) != 0) {
    $cursor = intval((intval($cursor) / intval($maxResults)) + 1);
}

// By default, no search filter is set
$nbOfFilters = 0;

$useGeo = 0;
// bbox is optional (Structure is lllon,lllat,urlon,urlat)
if (isset($_REQUEST['bbox']) && $_REQUEST['bbox'] != "") {
    $bbox = preg_split('/,/', $_REQUEST['bbox']);
    $latmin = $bbox[1];
    $lonmin = $bbox[0];
    $latmax = $bbox[3];
    $lonmax = $bbox[2];
    $useGeo = 1;
    $nbOfFilters++;
}

// $dates is an array of two dates (startDate and completionDate) that are retrieved from startDate interval
$dates = getDatesFromInterval(isset($_REQUEST["startDate"]) ? $_REQUEST["startDate"] : null);

// Archiving date
$archivingDate = isset($_REQUEST["archivingDate"]) ? addTimeToDate($_REQUEST["archivingDate"]) : null;

// Datastrip ID
$DSID = isset($_REQUEST["DSID"]) ? $_REQUEST["DSID"] : null;

// PHR operateur name
$operateur = isset($_REQUEST["operateur"]) ? $_REQUEST["operateur"] : null;

// If DatastripID is set, do not use geographical coordinates
if ($DSID) {
    $useGeo = 0;
}

// Compute number of filters (used to determine if a <ogc:And> property is needed)
if ($dates["startDate"]) {
    $nbOfFilters++;
}
if ($dates["completionDate"]) {
    $nbOfFilters++;
}
if ($archivingDate) {
    $nbOfFilters++;
}

// Prepare REQUEST
$requestResults = '<wfs:GetFeature outputFormat="text/xml; subtype=gml/3.1.1" service="WFS" version="1.1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:ows="http://www.opengis.net/ows" xmlns:ohr="http://earth.esa.int/ohr" xmlns:hma="http://earth.esa.int/hma" xmlns:phr="http://hma.cnes.fr/phr" xmlns:wfs="http://www.opengis.net/wfs" resultType="results" presentation="full" traverseXlinkDepth="0" cursor="' . $cursor . '" maxFeatures="' . $maxResults . '">';
$requestHits = '<wfs:GetFeature outputFormat="text/xml; subtype=gml/3.1.1" service="WFS" version="1.1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:ows="http://www.opengis.net/ows" xmlns:ohr="http://earth.esa.int/ohr" xmlns:hma="http://earth.esa.int/hma" xmlns:phr="http://hma.cnes.fr/phr" xmlns:wfs="http://www.opengis.net/wfs" resultType="hits" traverseXlinkDepth="0">';

$request = '<wfs:Query typeName="phr:DataStrip"><ogc:Filter>';

if ($nbOfFilters > 1) {
    $request .= '<ogc:And>';
}
if ($useGeo == 1) {
    $request .= '<ogc:Intersects><ogc:PropertyName>gml:extentOf</ogc:PropertyName><gml:Polygon srsName="EPSG:4326"><gml:exterior><gml:LinearRing>';
    $request .= '<gml:posList>' . $latmin . ' ' . $lonmin . ' ' . $latmax . ' ' . $lonmin . ' ' . $latmax . ' ' . $lonmax . ' ' . $latmin . ' ' . $lonmax . ' ' . $latmin . ' ' . $lonmin . '</gml:posList>';
    $request .= '</gml:LinearRing></gml:exterior></gml:Polygon></ogc:Intersects>';
}

if ($dates["startDate"]) {
    $request .= '<ogc:PropertyIsGreaterThanOrEqualTo>';
    $request .= '<ogc:PropertyName>hma:startDate</ogc:PropertyName>';
    $request .= '<ogc:Literal>' . $dates["startDate"] . '.0Z</ogc:Literal>';
    $request .= '</ogc:PropertyIsGreaterThanOrEqualTo>';
}

if ($dates["completionDate"]) {
    $request .= '<ogc:PropertyIsLessThanOrEqualTo>';
    $request .= '<ogc:PropertyName>hma:completionDate</ogc:PropertyName>';
    $request .= '<ogc:Literal>' . $dates["completionDate"] . '.0Z</ogc:Literal>';
    $request .= '</ogc:PropertyIsLessThanOrEqualTo>';
}

if ($archivingDate) {
    $request .= '<ogc:PropertyIsGreaterThanOrEqualTo>';
    $request .= '<ogc:PropertyName>hma:archivedIn/hma:ArchivingInformation/hma:archivingDate</ogc:PropertyName>';
    $request .= '<ogc:Literal>' . $archivingDate . '.0Z</ogc:Literal>';
    $request .= '</ogc:PropertyIsGreaterThanOrEqualTo>';
}

if ($DSID) {
    $request .= '<ogc:PropertyIsLike wildCard="*" singleChar="!" escapeChar="|">';
    $request .= '<ogc:PropertyName>hma:identifier</ogc:PropertyName>';
    $request .= '<ogc:Literal>' . $DSID . '</ogc:Literal>';
    $request .= '</ogc:PropertyIsLike>';
}

if ($nbOfFilters > 1) {
    $request .= '</ogc:And>';
}
$request .= '</ogc:Filter></wfs:Query></wfs:GetFeature>';

// Send HITS request
$theData = postRemoteData($url, $requestHits . $request, Array("REMOTE_USER: " . $operateur, "Content-Type: text/xml"));

// Store request and response
if (MSP_DEBUG) {
    $tmp = createPassword(10);
    saveFile($request, MSP_UPLOAD_DIR . "csw_" . $tmp . "_request.xml");
    saveFile($theData, MSP_UPLOAD_DIR . "csw_" . $tmp . "_response.xml");
}

// Get the number of results
$nbOfResults = getNbOfResults($theData);

// Send RESULTS request
$theData = postRemoteData($url, $requestResults . $request, Array("REMOTE_USER: " . $operateur, "Content-Type: text/xml"));

// Store request and response
if (MSP_DEBUG) {
    $tmp = createPassword(10);
    saveFile($request, MSP_UPLOAD_DIR . "csw_" . $tmp . "_request.xml");
    saveFile($theData, MSP_UPLOAD_DIR . "csw_" . $tmp . "_response.xml");
}

//  Check if a SOAP Fault occured
$error = OWSExceptionToJSON($theData);
if ($error) {
    echo $error;
} else {

    // Stream result
    echo outputToGeoJSON($theData, $nbOfResults);
}
?>