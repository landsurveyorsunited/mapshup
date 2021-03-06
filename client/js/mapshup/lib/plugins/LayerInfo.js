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
(function(M) {
    
    M.Plugins.LayerInfo = function() {
        
        /*
         * Only one BackgroundsManager object instance is created
         */
        if (M.Plugins.LayerInfo._o) {
            return M.Plugins.LayerInfo._o;
        }
        
        /*
         * Init plugin
         */
        this.init = function(options) {
        
            /**
             * Init options
             */
            this.options = options || {};
            
            return this;
        };
        
        /**
         * This method is called by LayersManager plugin
         */
        this.getLayerActions = function(layer) {

            var scope = this;

            return {
                id:M.Util.getId(),
                icon:"info.png",
                title:"Info",
                tt:"Layer information",
                callback:function() {
                    scope.displayInfo(layer);
                }
            }
        };
        
        /**
         * Display layer information
         */
        this.displayInfo = function(layer) {

            /*
             * Initialize title with layer name
             */
            var value,
                key,
                html = M.Util.shorten(M.Util._(layer.name), 40);

            /*
             * Intialize table with properties
             */
            html += '<table style="text-align:left;">';

            /*
             * Number of features
             */
            html += '<tr><td>'+M.Util._("entities")+'</td><td> : '+(layer.features ? layer.features.length : "-");

            /*
             * Unique id MID
             */
            html += '<tr><td>'+M.Util._("MID")+'</td><td> : '+ layer["_M"].MID;

            /*
             * Roll over properties
             */
            for (key in layer["_M"].layerDescription) {

                /*
                 * Some properties are not displayed
                 */
                if (key === "title" || key === "featureInfo" || key === "ol" || key === "hasIconAttribute") {
                    continue;
                }

                value = layer["_M"].layerDescription[key];

                /*
                 * url is a special key that must be transformed into link
                 */
                value = M.Util.isUrl(value) ? '<a href="'+value+'" title="'+value+'" target="_blank">'+M.Util.shorten(value, 100)+'</a>' : M.Util._(value);
               
                html += '<tr><td>'+M.Util._(key)+'</td><td> : ' + value + '</td></tr>';

            }

            html +="</table>";

            /*
             * Display layer information within jMessage
             */
            M.Util.message(html, -1);

        };

        /*
         * Set unique instance
         */
        M.Plugins.LayerInfo._o = this;
        
        return this;
        
    };
})(window.M);