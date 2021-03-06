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
 *
 * Plugin FeatureEdition
 * 
 * Allow user to delete feature individually from
 * an editable layer
 *
 * @param {MapshupObject} M
 */
(function(M) {
    
    M.Plugins.FeatureEdition = function() {
        
        /*
         * Only one FeatureEdition object instance is created
         */
        if (M.Plugins.FeatureEdition._o) {
            return M.Plugins.FeatureEdition._o;
        }
        
        /**
         * Init plugin
         * 
         * @param {Object} options
         */
        this.init = function(options) {
  
            /*
             * Init options
             */
            this.options = options || {};
            
            return this;
            
        };

        /**
         * This method is called by FeatureInfo tools popup
         * 
         * @param {OpenLayers.Feature} feature
         */
        this.getFeatureActions = function(feature) {
            
            if (feature.layer["_M"].editable) {
                return {
                    id:M.Util.getId(),
                    icon:"trash.png",
                    title:"Remove",
                    callback:function(a, f) {

                        M.Util.askFor({
                            title:M.Util._("Delete feature"),
                            content:M.Util._("Do you really want to remove this feature ?"),
                            dataType:"list",
                            value:[{
                                title:M.Util._("Yes"), 
                                value:"y"
                            },
                            {
                                title:M.Util._("No"), 
                                value:"n"
                            }
                            ],
                            callback:function(v){
                                if (v === "y") {
                                    
                                    /*
                                     * Remove feature
                                     */
                                    var l = f.layer;
                                    M.Map.featureInfo.unselect(f);
                                    l.removeFeatures(f);
                                    M.Map.events.trigger("layersend", {
                                        action:"features",
                                        layer:l
                                    });
                                    
                                }
                            }
                        });

                    }
                };
            }
            
            return null;
        };
        
        /*
         * Set unique instance
         */
        M.Plugins.FeatureEdition._o = this;
        
        return this;
        
    };
})(window.M);