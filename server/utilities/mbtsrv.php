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
 * Serves mbtiles (http://www.mbtiles.org) through
 * an OpenLayers XYZ layer request
 * 
 */
include_once '../config.php';
include_once '../functions/general.php';

/*
 * This script returns png
 */
header("Content-Type: image/png");

/*
 * Mandatory parameters
 */
$zxy = isset($_REQUEST["zxy"]) ? $_REQUEST["zxy"] : null;

/*
 * mbtiles file is supposed to be suffixed by ".mbtiles"
 */
$tile = isset($_REQUEST["t"]) ? MSP_MBTILES_DIR . $_REQUEST["t"] . ".mbtiles" : null;

/*
 * Process only valid requests
 */
if ($zxy && $tile) {
    
    /*
     * Get xyz triplet to get the right tiles
     */
    $zxy = explode("/", $zxy); 
    $z = $zxy[0]; 
    $x = $zxy[1]; 
    $y = $zxy[2];
    $y = pow(2, $z) - $y - 1;
    
    /*
     * Connect to mbtiles through PDO sqlite
     */
    $db = new PDO('sqlite:'.$tile) or die(); 

    $pngdata = @$db->prepare('select tile_data from tiles where zoom_level = '.$z.' and tile_column = '.$x.' and tile_row = '.$y.';'); 
    $pngdata->execute(); 
    $pngdata = $pngdata->fetchObject();
    
    /*
     * If $pngdata is empty, stream a predefined tile
     */
    if (!isset($pngdata->tile_data)) {
        readfile(MSP_MBTILES_DIR . 'nodata.png');
    }
    /*
     * Stream png result
     */
    else {
        echo $pngdata->tile_data;
    }
     
}
?>