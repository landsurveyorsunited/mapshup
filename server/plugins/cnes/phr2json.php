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

include_once '../../config.php';
include_once '../../functions/general.php';
include_once '../../functions/magicutils.php';
include_once '../../functions/geometry.php';

/* ======================== FUNCTIONS =========================== */
function toGeoJSON($resultFileURI) {

    $doc = new DOMDocument();
    $doc->load($resultFileURI);
    $rootName = strtolower(removeNamespace($doc->documentElement->nodeName));

    $type = getPHRTypeFromRootName($rootName);

    /*
     * Initialize GeoJSON
     */
    $geojson = array(
        'type' => 'FeatureCollection',
        'features' => array()
    );


    if ($type == "phr_inventory_plan") {

        $stations = $doc->getElementsByTagname('STATION');

        foreach ($stations as $station) {
            $passes = $station->getElementsByTagname('PASS');
            foreach ($passes as $pass) {
                $Features = $pass->getElementsByTagname('DATASTRIP');
                foreach ($Features as $datastrip) {
                    $dsids = $datastrip->getElementsByTagName('OBMM_FILE_NUMBER');
                    $corners = $datastrip->getElementsByTagName('CORNER');
                    $poslist = '';
                    $isFirst = 1;
                    foreach ($corners as $corner) {
                        $LAT = $corner->getElementsByTagName('LATITUDE')->item(0)->nodeValue;
                        $LON = $corner->getElementsByTagName('LONGITUDE')->item(0)->nodeValue;
                        $longitude = $LON;
                        $latitude = $LAT;
                        $poslist .= $latitude . ' ' . $longitude . ' ';
                        if ($isFirst == 1) {
                            $latitude1 = $latitude;
                            $longitude1 = $longitude;
                            $isFirst = 0;
                        }
                    }
                    $poslist .= $latitude1 . ' ' . $longitude1;

                    /**
                     * Add feature
                     */
                    $feature = array(
                        'type' => 'Feature',
                        'geometry' => posListToGeoJSONGeometry($poslist, LATLON),
                        'crs' => array(
                            'type' => 'EPSG',
                            'properties' => array('code' => '4326')
                        ),
                        'properties' => array(
                            'identifier' => $dsids->item(0)->nodeValue
                        )
                    );

                    // Add feature array to feature collection array
                    array_push($geojson['features'], $feature);
                }
            }
        }
    } else if ($type == "phr_dimap_document") {

        $scenes = $doc->getElementsByTagname('Scene');
        foreach ($scenes as $scene) {
            $scids = $scene->getElementsByTagname('SCENE_ID');
            $vertices = $scene->getElementsByTagname('Vertex');
            $poslist = '';
            $isFirst = 1;
            foreach ($vertices as $vertex) {
                $latitude = $vertex->getElementsByTagName('LAT')->item(0)->nodeValue;
                $longitude = $vertex->getElementsByTagName('LON')->item(0)->nodeValue;
                $poslist .= $latitude . " " . $longitude . " ";
                if ($isFirst == 1) {
                    $latitude1 = $latitude;
                    $longitude1 = $longitude;
                    $isFirst = 0;
                }
            }
            $poslist .= $latitude1 . ' ' . $longitude1;

            /**
             * Add feature
             */
            $feature = array(
                'type' => 'Feature',
                'geometry' => posListToGeoJSONGeometry($poslist, LATLON),
                'crs' => array(
                    'type' => 'EPSG',
                    'properties' => array('code' => '4326')
                ),
                'properties' => array(
                    'identifier' => $scids->item(0)->nodeValue
                )
            );

            // Add feature array to feature collection array
            array_push($geojson['features'], $feature);
        }
    } else if ($type == "mask") {

        $masks = $doc->getElementsByTagname('MaskFeature');
        foreach ($masks as $mask) {
            $id = $mask->getAttribute('gml:id');
            $exterior = $mask->getElementsByTagName('exterior')->item(0);

            /**
             * Add feature
             */
            $feature = array(
                'type' => 'Feature',
                'geometry' => posListToGeoJSONGeometry($exterior->getElementsByTagName('posList')->item(0)->nodeValue, LATLON),
                'crs' => array(
                    'type' => 'EPSG',
                    'properties' => array('code' => '4326')
                ),
                'properties' => array(
                    'identifier' => $id
                )
            );

            // Add feature array to feature collection array
            array_push($geojson['features'], $feature);

            $holes = $mask->getElementsByTagName('interior');
            $count = 0;
            foreach ($holes as $hole) {

                /**
                 * Add feature
                 */
                $feature = array(
                    'type' => 'Feature',
                    'geometry' => posListToGeoJSONGeometry($hole->getElementsByTagName('posList')->item(0)->nodeValue, LATLON),
                    'crs' => array(
                        'type' => 'EPSG',
                        'properties' => array('code' => '4326')
                    ),
                    'properties' => array(
                        'identifier' => $id . " -> HOLE " . $count++
                    )
                );

                // Add feature array to feature collection array
                array_push($geojson['features'], $feature);

            }
        }
    }

    return json_encode($geojson);
}
/* ============================ END FUNCTIONS ======================== */

/**
 * This script returns JSON
 */
header("Pragma: no-cache");
header("Expires: 0");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Content-type: application/json; charset=utf-8");

/**
 * Get input values url
 */
$url = isset($_REQUEST["url"]) ? $_REQUEST["url"] : null;

/**
 * No Url specified => returns empty result
 */
if ($url == null) {
    die('{"success":false"}');
}

/**
 * Get data and stream it to GeoJSON
 */
echo toGeoJSON(saveFile(getRemoteData($url, null, false), MSP_UPLOAD_DIR . "phr_" . createPassword(10) . ".xml"));
?>