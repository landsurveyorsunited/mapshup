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
 * Includes parts of code under the following licenses:
 *
 *
 * --- json2.js by Douglas Crockford
 * --- https://github.com/douglascrockford/JSON-js/blob/master/json2.js
 * --- Release under Public Domain
 *
 *
 * --- Checksum function
 * --- (c) 2006 Andrea Ercolino
 * --- http://noteslog.com/post/crc32-for-javascript/
 * --- Released under the MIT License
 * --- http://www.opensource.org/licenses/mit-license.php
 *
 */

/*
 * Uses icons under the following licenses :
 *
 * --- GeoSilk icon set by Rolando Peate
 * --- http://projects.opengeo.org/geosilk
 * --- Released under Creative Commons Attribution 3.0 License.
 * --- http://creativecommons.org/licenses/by/3.0/)
 *
 *
 * --- Iconic icon set
 * --- http://somerandomdude.com/projects/iconic/
 * --- Release under Creative Commons Attribution-Share Alike 3.0 license
 * --- http://creativecommons.org/licenses/by-sa/3.0/us/
 * 
 */

/*
 * Uses libraries under the following licences
 *
 * --- OpenLayers.js -- OpenLayers Map Viewer Library
 * --- Copyright 2005-2010 OpenLayers Contributors
 * --- Released under the Clear BSD license
 * --- http://svn.openlayers.org/trunk/openlayers/license.txt
 *
 *
 * --- jQuery JavaScript Library v1.4.4
 * --- http://jquery.com/
 * ---
 * --- Copyright 2010, John Resig
 * --- Released under the MIT license.
 * --- http://jquery.org/license
 *
 *
 * --- jqPlot
 * --- Copyright (c) 2009 - 2010 Chris Leonello
 * --- Released under the MIT license
 * --- http://www.opensource.org/licenses/mit-license.php
 *
 */

/**
 * mapshup.js : mapshup core library
 *
 * @requires js/mapshup/lang/en.js
 * @requires js/mapshup/config/default.js
 *
 *
 * Tips and tricks :
 * 
 *  - z-indexes :
 *      map                         :   1 (or something like that :)
 *      OpenLayers objects          :   2 to something << 10000
 *      coords                      :   10000
 *      hiliteFeature               :   10000
 *      msplogo                     :   10000
 *      menu                        :   10000
 *
 *      whereami                    :   10100   (plugins/Geonames.js)
 *      featureinfo                 :   10150
 *      distance                    :   10150   (plugins/Distance.js)
 *      map3d                       :   10200   (plugins/Toolbar_GoogleEarth.js)
 *      drawinginfo                 :   10300   (plugins/Drawing.js)
 *      jUserManagementPanel        :   10700   (plugins/UserManagement.js)
 *      jUserManagementPanelTab     :   11000   (plugins/UserManagement.js)
 *      jCatalogConfiguration       :   11000   (plugins/Catalog.js)
 *      welcome                     :   12000   (plugins/Welcome.js)
 *      .pn                         :   20000   (core/Panel.js)
 *      ddzone                      :   34000   (plugins/AddLayer.js)
 *      wheader                     :   34500
 *      mask                        :   35000
 *      tooltip                     :   36000
 *      popup                       :   38000 
 *      message                     :   38000 
 *      drawingAsk                  :   38000   (plugins/Drawing.js)
 *      drawingDesc                 :   38000   (plugins/Drawing.js)
 *      activity                    :   38500
 *      
 */

/**
 * Create the util object for mapshup
 */
(function(window,navigator) {
    
    /**
     * Create mapshup msp object with properties and functions
     */
    window.msp = {
        
        VERSION_NUMBER:'mapshup 1.5',
        
        /**
         * Plugin objects are defined within msp.Plugins
         */
        Plugins:{},
        
        /**
         * This is the main entry point to mapshup
         * This function must be called after document has been fully loaded
         * through the jquery .ready() i.e.
         * 
         *      $(document).ready(function() {
         *          msp.load();
         *      });
         * 
         */
        load:function() {
            
            var ctx = null,
            self = this,
            kvp = (function () {
                return self.Util.extractKVP(window.location.href);
            })();
                
            
            /**
             * If msp.Config is not defined, everything stops !
             */
            if (self.Config === undefined) {
                alert("GRAVE : no configuration file defined. Load aborted");
                exit();
            }

            /**
             * Initialize #map reference
             */
            self.$map = $('#map');
            
            /**
             * Create header structure
             * 
             * <div id="theBar">
             *      <div class="container">
             *          <div class="logo hover"></div>
             *          <div class="searchBar"></div>
             *          <div class="leftBar"></div>
             *          <div class="rightBar"></div>
             *      </div>
             * </div>
             */
            self.$header = self.Util.$$('#theBar', $('#mwrapper')).html('<div class="container"><div class="logo hover"><a href="http://www.mapshup.info" target="_blank">mapshup</a></div><div class="searchBar"></div><div class="leftBar"></div><div class="rightBar"></div></div>');
            
            /**
             * Initialize map container reference
             */
            self.$mcontainer = self.$map.parent();
            
            /**
             * Initialize #wcontainer reference
             */
            self.$container = $('#wcontainer');
            
            /**
             * Initialize events
             */
            self.events = new self.Events();

            /**
             * Initialize tooltip
             */
            self.tooltip = new self.Tooltip();

            /**
             * Initialize activity
             */
            self.activity = new self.Activity();

            /**
             * Initialize mask
             */
            self.mask = new self.Mask();
            
            /**
             * Initialize timeLine
             */
            self.timeLine = new self.TimeLine(self.Config["general"].displayTimeLine);
            
            /*
             * If kvp got a "uid" key, then the corresponding context
             * is retrieved from the server
             */
            if (kvp["uid"]) {
                
                self.Util.ajax({
                    url:self.Util.proxify(self.Util.getAbsoluteUrl(self.Config["general"].getContextServiceUrl)+kvp["uid"]),
                    async:true,
                    dataType:"json",
                    success: function(data) {

                        /*
                         * Parse result
                         */
                        if (data && data.contexts) {

                            /*
                             * Retrieve the first context
                             * contexts[
                             *      {
                             *          context:
                             *          location:
                             *          utc:
                             *      },
                             *      ...
                             * ]
                             */
                            if (data.contexts[0]) {
                                ctx = JSON.parse(data.contexts[0].context);
                            }
                        }
                        
                        /*
                         * Continue initialization - set lang
                         */
                        self.setLang(kvp, ctx);
                        
                    },
                    error: function(data) {
                        self.Util.message("Error : context is not loaded");
                        
                        /*
                         * Continue initialization - set lang
                         */
                        self.setLang(kvp);
                        
                    }
                }, {
                    title:self.Util._("Load context"),
                    cancel:true
                });
                
            }
            /*
             * If there is no kvp["uid"] defined, then go the next initialization step,
             * i.e. set mapshup lang
             */
            else {
                self.setLang(kvp);
            }
            
        },
        
        /**
         * Retrieve mapshup default lang file
         * 
         * @input kvp: Key value pair object.
         *             If kvp["lang"] is defined, it superseed the default lang configuration
         * 
         * @input ctx: Context
         */
        setLang:function(kvp, ctx) {
            
            /*
             * Read KVP from URL if any
             */
            var i,
            check = -1,
            check2 = -1,
            self = this,
            c = self.Config["i18n"];

            /*
             * Set lang from kvp
             */
            if (kvp.lang) {
                c.lang = kvp.lang;
            }
            
            /*
             * Internationalisation (i18n)
             * lang is defined as follow :
             *  - msp.defaultLang
             *  - superseed by msp.Config.lang (if defined)
             *  - superseed by kvp.lang (if defined)
             */
            c.langs = c.langs || ['en', 'fr'];
            
            /*
             * Set the i18n array
             */
            self.i18n = [];
            
            if (!c.lang || c.lang === 'auto') {
                try{
                    c.lang = navigator.language;
                }catch(e){
                    c.lang = navigator.browserLanguage; //IE
                }
            }

            /**
             * Determine browser language.
             * Since indexOf method on Arrays is not supported by
             * all browsers (e.g. Internet Explorer) this is a bit
             * tricky
             */
            for (i = c.langs.length;i--;) {
                if (c.langs[i] === c.lang) {
                    check = 0;
                    break;
                }
            }
            if (check === -1){
                check2 = -1;
                // Avoid country indicator
                if (c.lang !== undefined) {
                    c.lang = c.lang.substring(0,2);
                }
                for (i = c.langs.length;i--;) {
                    if (c.langs[i] === c.lang) {
                        check2 = 0;
                        break;
                    }
                }
                if (check2 === -1){
                    c.lang = c.langs[0];
                }
            }

            /**
             * Asynchronous call : load the lang file
             */
            $.ajax({
                url:self.Config["general"].rootUrl + c.path+"/"+c.lang+".js",
                async:true,
                dataType:"script",
                success:function() {
                    self.init(kvp, ctx);
                },
                /* Lang does not exist - load english */
                error:function() {
                    $.ajax({
                        url:c["general"].rootUrl + c["i18n"].path+"/en.js",
                        async:true,
                        dataType:"script",
                        success:function() {
                            c.lang = "en";
                            self.init(kvp, ctx);
                        }
                    });
                }
            });
            
        },
        
        /*
         * mapshup initialisation
         * 
         * @input kvp : Key Value pair object
         *              If kvp["lat"] && kvp["lon"] is defined, it superseed the default location configuration
         * 
         * @input ctx: Context
         */
        init:function(kvp, ctx) {
            
            var bg,fn,i,l,name,options,plugin,
            self = this,
            c = self.Config;
            
            /*
             * Update location from context
             */
            if (ctx && ctx.location) {
                c["general"].location = ctx.location;
            }
            
            /*
             * Superseed location from input kvp
             */
            if (kvp) {
                c["general"].location = {
                    bg:self.Util.getPropertyValue(kvp, "bg", c["general"].location.bg),
                    lon:self.Util.getPropertyValue(kvp, "lon", c["general"].location.lon),
                    lat:self.Util.getPropertyValue(kvp, "lat", c["general"].location.lat),
                    zoom:self.Util.getPropertyValue(kvp, "zoom", c["general"].location.zoom)
                };
            }
            
            /**
             * Initialize menu
             */
            self.menu = new self.Menu();
            
            /**
             * Map initialization
             */
            self.Map.init(c);
            
            /**
             * Update configuration
             */
            if (ctx && ctx.layers) {
                c.update(ctx.layers);
            }
            
            /*
             * Initialize South panel
             */
            self.sp = (new self.SouthPanel({
                over:c.panel.s.over,
                h:c.panel.s.h
            }));
            
            /*
             * Plugins initialization
             * Roll over msp.plugins hash table
             * and remove all entries that are not defined
             * within the msp.Config.plugins object
             */
            self.plugins = [];
            for (i = 0, l = c.plugins.length; i < l; i++) {
                name = c.plugins[i].name;
                options = c.plugins[i].options || {};
                plugin = (new Function('return msp.Plugins.'+name+' ? new msp.Plugins.'+name+'() : null;'))();
                
                /*
                 * Plugin exists and is successfully initialized
                 * => add it to the self.plugins array
                 */
                if (plugin && plugin.init(options)) {
                    self.plugins[name] = plugin;
                }
            }
            
            /*
             *
             * Add layers read from config
             *
             * The code evaluate the OpenLayers class name and the corresponding options both defined
             * within the "layers" array in the configuration file.
             */
            for (i = 0, l = c.layers.length; i < l; i++) {
                
                if (c.layers[i].type && self.Map.layerTypes[c.layers[i].type]) {
                
                    /*
                     * Add layer to the map
                     */
                    self.Map.addLayer(c.layers[i], {
                        noDeletionCheck:true,
                        initialLayer:true
                    });
                   
                }
            }

            /*
             * Set background
             */
            if (c["general"].location.bg) {
                bg = self.Map.Util.getLayerByMspID(c["general"].location.bg);
                if (bg && bg.isBaseLayer) {
                    self.Map.map.setBaseLayer(bg);
                }
            }
            
            /*
             * Detect window resize
             *   On window resizing, div position and dimension
             *   are modified to reflect map new size
             *   Plugins must register a "resizeend" event to
             *   resize
             */
            
            /* Store current window size */
            self._wd = {
                w:window.innerWidth,
                h:window.innerHeight
            };
            
            /* Force msp.$mcontainer dimensions to pixels values (avoid computation problem with %) */
            self.$mcontainer.css({
                'width':self.$mcontainer.width(),
                'height':self.$mcontainer.height()
            });
            
            $(window).bind('resize', function(){
                
                /*
                 * Trick to avoid too many resize events
                 * that could alter performance
                 */
                clearTimeout(fn);
                fn = setTimeout(function(){
                    
                    /*
                     * Resize msp.$map container div following window resize
                     */
                    self.$mcontainer.css({
                        'width':self.$mcontainer.width() + (window.innerWidth - self._wd.w),
                        'height':self.$mcontainer.height() + (window.innerHeight - self._wd.h)
                    });

                    /*
                     * Set  msp._ww andreference to the new window size
                     */
                    self._wd = {
                        w:window.innerWidth,
                        h:window.innerHeight
                    }

                    /*
                     * Propagate resizeend event
                     */
                    self.events.trigger('resizeend');
                }, 100);

            });
            
            /**
             * Force mapshup resize
             */
            setTimeout(function(){
                self.events.trigger('resizeend');
            }, 100);
            
            
        },
        
        /**
         * Remove object from the mapshup context
         */
        remove: function(obj) {

            if (!obj) {
                return false;
            }
            
            /*
             * Check for jquery $d main object
             * and remove it from the DOM
             */
            if (obj.$d) {
                obj.$d.remove();
            }
            
            /*
             * Remove attached events
             */
            this.events.unRegister(obj);
            this.Map.events.unRegister(obj);
            
            /*
             * Remove all object properties
             */
            for (var p in obj) {
                if (obj.hasOwnProperty(p)) {
                    delete obj[p];
                }
            }
            
            /*
             * Nullify object - TODO remove it from
             * the global hash table
             */
            obj = null;
            
            return true;
            
        }
        
    };

})(window, navigator);