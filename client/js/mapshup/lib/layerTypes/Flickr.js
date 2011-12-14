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

/**
 * Flickr layer type
 */
(function (msp, Map){
    
    Map.layerTypes["Flickr"] = {

        /**
         * MANDATORY
         */
        forceReload:true,

        /**
         * MANDATORY
         */
        icon:"flickr.png",

        /**
         * Flickr return EPSG:4326 data
         */
        projection:Map.epsg4326,

        /**
         * MANDATORY
         */
        removeOnEmpty:true,

        /**
         * MANDATORY
         */
        selectable:true,

        /**
         * MANDATORY
         *
         * layerDescription = {
         *      type:"Flickr",
         *      title:,
         *      userID:,
         *      q:,
         *      machineTags:,
         *      fromOpenSearch:,
         *      bbox:
         *  };
         */
        add: function(layerDescription, options) {

            var flickr = msp.plugins["Flickr"];

            /**
             * flickr is null ?
             * Perhaps plugin is not initialized yet...In this case
             * try to get options directly from the config file
             *
             * This case should only occurs if a flickr layer is defined
             * within the msp.Config.layers object. In this case it
             * is loaded before the plugins initialization
             */
            if (!flickr) {
                for (var i = 0, l = msp.plugins.length; i < l; i++) {
                    var plugin = msp.plugins[i];
                    if (plugin.name === "Flickr") {
                        flickr = plugin;
                        flickr.options = flickr.options || {};
                        flickr.options.url = flickr.options.url || "/plugins/flickr/search.php?"
                        break;
                    }
                }
                if (!flickr) {
                    return null;
                }
            }

            /*
             * Check if bbox is defined in layerDescription
             */
            layerDescription.bbox = msp.Util.getPropertyValue(layerDescription, "bbox", Map.getBBOX());

            /*
             * Set an empty search term value if not set
             */
            layerDescription.q = msp.Util.getPropertyValue(layerDescription, "q", "");

            /*
             * Extend options object with Flickr specific properties
             */
            $.extend(options,
            {
                /*
                 * Fixed StyleMap : point with icon made from flickr thumbnail
                 */
                styleMap:new OpenLayers.StyleMap({
                    "default": new OpenLayers.Style({
                        externalGraphic: "${icon}",
                        pointRadius : 25
                    }),
                    "select": new OpenLayers.Style({
                        pointRadius: 35
                    })
                }),

                /*
                 * Features are loaded entirely at first
                 */
                strategies: [new OpenLayers.Strategy.Fixed()],

                /*
                 * HTTP protocol initialization
                 */
                protocol:new OpenLayers.Protocol.HTTP({
                    url:msp.Util.getAbsoluteUrl(flickr.options.url),
                    params: {
                        maxfeatures: 20,
                        tag_mode:"all",
                        sort:"relevance",
                        bbox:layerDescription.bbox,
                        q:layerDescription.q,
                        machine_tags:layerDescription.machineTags,
                        user_id:layerDescription.userID
                    },
                    format: new OpenLayers.Format.GeoJSON()
                })
            });

            /**
             * Layer creation
             */
            var newLayer = new OpenLayers.Layer.Vector(layerDescription.title, options);

            /*
             * Add a featuresadded event
             */
            newLayer.events.register("featuresadded", newLayer, function() {
                Map.onFeaturesAdded(this);
            });

            return newLayer;

        },

        appendDescription: function(feature, div) {

            /*
             * Photo page url :
             *      http://www.flickr.com/photos/{user-id}/{photo-id}
             *
             * (see http://www.flickr.com/services/api/misc.urls.html)
             */
            div.append('<div class="west"><a target="_blank" href="http://www.flickr.com/photos/'+feature.attributes['owner']+'/'+feature.attributes['identifier']+'" class="image"><img src="'+feature.attributes['thumbnail']+'" class="padded"/></a></div><div class="east"><div class="padded">'+feature.attributes['description']+'<br/><div class="tags"></div></div></div>');
            var tagsdiv = $('.tags', div);
            if (feature.attributes["tags"]) {
                var tags = feature.attributes["tags"].split(' ');
                for (var i = 0, l = tags.length ; i < l; i++) {
                    (function(tag) {
                        tagsdiv.append('<a href="#" id="t_'+tag+'">'+tag+'</a> ');
                        $('#t_' + tag).click(function(){
                            Map.addLayer({
                                type:"Flickr",
                                title:tag,
                                q:tag
                            });
                            return false;
                        });
                    })(tags[i]);
                }
            }
        },

        appendOpenSearchDescription: function(feature, id, $d) {
            $d.append('<a style="padding:5px 0px 0px 5px;" href="#" class="image '+id+'"><img src="'+feature.attributes['icon']+'" title="'+feature.attributes['name']+'"/></a>');
            (function(id, feature) {
                $('.'+id, $d).click(function() {
                    Map.zoomTo(feature.geometry.getBounds());
                });
            })(id, feature);

        },

        /**
         * MANDATORY
         * Compute an unique mspID based on layerDescription
         */
        getMspID:function(layerDescription) {
            return msp.Util.crc32(layerDescription.type + (layerDescription.title || "") + (layerDescription.userID || "") + (layerDescription.q || "") + (layerDescription.machineTags || ""));
        }
    }
})(window.msp, window.msp.Map);
