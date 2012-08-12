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
 * DrawBox plugin.
 * Allow user to draw a Box 
 */
(function(msp) {
    
    msp.Plugins.DrawBox = function() {
        
        /*
         * Only one DrawBox object instance is created
         */
        if (msp.Plugins.DrawBox._o) {
            return msp.Plugins.DrawBox._o;
        }
        
        /*
         * Init plugin
         */
        this.init = function(options) {
            
            var self = this;
            
            /**
             * Init options
             */
            self.options = options || {};
            $.extend(self.options,{
                title:options.title || "Draw box",
                icon:options.icon || "drawbox.png",
                callback:options.callback
            });
            
            /*
             * Add "DrawBox" item in menu
             */
            if (msp.menu) {
                msp.menu.add([
                {
                    id:msp.Util.getId(),
                    ic:self.options.icon,
                    ti:self.options.title,
                    cb:function() {
                        self.draw();
                    }
                }
                ]);
            }
           
            self.layer = new OpenLayers.Layer.Vector("__LAYER_DRAWINGBOX__", {
                projection:msp.Map.pc,
                displayInLayerSwitcher:false,
                styleMap:new OpenLayers.StyleMap({
                    'default':{
                        pointRadius:5,
                        strokeColor:'white',
                        strokeWidth: 1,
                        fillColor:'black',
                        fillOpacity: 0.3
                    }
                })
            });

            /**
             * Add Drawing layer to Map object
             */
            msp.Map.addLayer({
                type:"Generic",
                title:self.layer.name,
                unremovable:true,
                mspLayer:true,
                layer:self.layer
            });

            /**
             * Event on sketchcomplete
             */
            self.layer.events.on({
                "sketchcomplete": function(event) {
                    
                    var g;
                    
                    /*
                     * Return feature and BBOX in Lat/Lon
                     */
                    if (event.feature && $.isFunction(self.options.callback)) {
                        g = event.feature.geometry.getBounds().clone();
                        self.options.callback(event.feature, msp.Map.Util.p2d(g).toBBOX());
                    }
                    
                    /*
                    * Switch back to Map default control
                    */
                    msp.Map.resetControl(self.control);

                }
            });

            /*
             * Set box control
             */
            self.control = new OpenLayers.Control.DrawFeature(self.layer,
                OpenLayers.Handler.RegularPolygon, {
                    handlerOptions: {
                        sides: 4,
                        irregular: true
                    }
                });
                
            /*
             * Add box control to Map.map object
             */
            msp.Map.map.addControl(self.control);
            
            msp.Map.events.register("layersend", self, function(action, layer, scope) {
                
                /*
                 * Each time a layer is added make sure Drawing layer is on top
                 */
                if (action === "add" && scope.layer) {
                    msp.Map.Util.setLayerOnTop(scope.layer);
                }
            });

            return self;
            
        };
        
        /**
         * Enter drawing mode
         */
        this.draw = function() {

            var self = this;

            /*
            * Empty the drawing layer
            */
            if (self.layer) {
                self.layer.destroyFeatures();
            }
            
            /*
             * First reset control
             */
            msp.Map.resetControl(self.control);
            self.control.activate();
            
        };
        
        /*
         * Set unique instance
         */
        msp.Plugins.DrawBox._o = this;
        
        return this;
    };
})(window.msp);