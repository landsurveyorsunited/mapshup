/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;return!b.href||!g||f.nodeName.toLowerCase()!=="map"?!1:(h=a("img[usemap=#"+g+"]")[0],!!h&&d(h))}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.8.21",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));c.offsetHeight,a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!d||!a.element[0].parentNode)return;for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){return c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}}),d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;return e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e,f&&e.charAt(0)==="_"?h:(f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b)return h=f,!1}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))}),h)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}return this._setOptions(e),this},_setOptions:function(b){var c=this;return a.each(b,function(a,b){c._setOption(a,b)}),this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);;/*! jQuery UI - v1.8.21 - 2012-06-05
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.draggable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.21"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);;/* idTabs ~ Sean Catchpole - Version 2.2 - MIT/GPL */
(function(){var dep={"jQuery":"http://code.jquery.com/jquery-latest.min.js"};var init=function(){(function($){$.fn.idTabs=function(){var s={};for(var i=0;i<arguments.length;++i){var a=arguments[i];switch(a.constructor){case Object:$.extend(s,a);break;case Boolean:s.change=a;break;case Number:s.start=a;break;case Function:s.click=a;break;case String:if(a.charAt(0)=='.')s.selected=a;else if(a.charAt(0)=='!')s.event=a;else s.start=a;break;}}
if(typeof s['return']=="function")
s.change=s['return'];return this.each(function(){$.idTabs(this,s);});}
$.idTabs=function(tabs,options){var meta=($.metadata)?$(tabs).metadata():{};var s=$.extend({},$.idTabs.settings,meta,options);if(s.selected.charAt(0)=='.')s.selected=s.selected.substr(1);if(s.event.charAt(0)=='!')s.event=s.event.substr(1);if(s.start==null)s.start=-1;var showId=function(){if($(this).is('.'+s.selected))
return s.change;var id="#"+this.href.split('#')[1];var aList=[];var idList=[];$("a",tabs).each(function(){if(this.href.match(/#/)){aList.push(this);idList.push("#"+this.href.split('#')[1]);}});if(s.click&&!s.click.apply(this,[id,idList,tabs,s]))return s.change;for(i in aList)$(aList[i]).removeClass(s.selected);for(i in idList)$(idList[i]).hide();$(this).addClass(s.selected);$(id).show();return s.change;}
var list=$("a[href*='#']",tabs).unbind(s.event,showId).bind(s.event,showId);list.each(function(){$("#"+this.href.split('#')[1]).hide();});var test=false;if((test=list.filter('.'+s.selected)).length);else if(typeof s.start=="number"&&(test=list.eq(s.start)).length);else if(typeof s.start=="string"&&(test=list.filter("[href*='#"+s.start+"']")).length);if(test){test.removeClass(s.selected);test.trigger(s.event);}
return s;}
$.idTabs.settings={start:0,change:false,click:null,selected:".selected",event:"!click"};$.idTabs.version="2.2";$(function(){$(".idTabs").idTabs();});})(jQuery);}
var check=function(o,s){s=s.split('.');while(o&&s.length)o=o[s.shift()];return o;}
var head=document.getElementsByTagName("head")[0];var add=function(url){var s=document.createElement("script");s.type="text/javascript";s.src=url;head.appendChild(s);}
var s=document.getElementsByTagName('script');var src=s[s.length-1].src;var ok=true;for(d in dep){if(check(this,d))continue;ok=false;add(dep[d]);}if(ok)return init();add(src);})();
/**
 * Copyright (c) 2009 - 2010 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot  or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * jqPlot includes date instance methods and printf/sprintf functions by other authors:
 *
 * Date instance methods contained in jqplot.dateMethods.js:
 *
 *     author Ken Snyder (ken d snyder at gmail dot com)
 *     date 2008-09-10
 *     version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 *     license Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * JavaScript printf/sprintf functions contained in jqplot.sprintf.js:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function(B){var l;B.jqplot=function(W,T,R){var S,Q;if(R==null){if(T instanceof Array){S=T;Q=null}else{if(T.constructor==Object){S=null;Q=T}}}else{S=T;Q=R}var V=new F();B("#"+W).removeClass("jqplot-error");if(B.jqplot.config.catchErrors){try{V.init(W,S,Q);V.draw();V.themeEngine.init.call(V);return V}catch(U){var X=B.jqplot.config.errorMessage||U.message;B("#"+W).append('<div class="jqplot-error-message">'+X+"</div>");B("#"+W).addClass("jqplot-error");document.getElementById(W).style.background=B.jqplot.config.errorBackground;document.getElementById(W).style.border=B.jqplot.config.errorBorder;document.getElementById(W).style.fontFamily=B.jqplot.config.errorFontFamily;document.getElementById(W).style.fontSize=B.jqplot.config.errorFontSize;document.getElementById(W).style.fontStyle=B.jqplot.config.errorFontStyle;document.getElementById(W).style.fontWeight=B.jqplot.config.errorFontWeight}}else{V.init(W,S,Q);V.draw();V.themeEngine.init.call(V);return V}};B.jqplot.debug=1;B.jqplot.config={debug:1,enablePlugins:false,defaultHeight:300,defaultWidth:400,UTCAdjust:false,timezoneOffset:new Date(new Date().getTimezoneOffset()*60000),errorMessage:"",errorBackground:"",errorBorder:"",errorFontFamily:"",errorFontSize:"",errorFontStyle:"",errorFontWeight:"",catchErrors:false,defaultTickFormatString:"%.1f"};B.jqplot.enablePlugins=B.jqplot.config.enablePlugins;B.jqplot.preInitHooks=[];B.jqplot.postInitHooks=[];B.jqplot.preParseOptionsHooks=[];B.jqplot.postParseOptionsHooks=[];B.jqplot.preDrawHooks=[];B.jqplot.postDrawHooks=[];B.jqplot.preDrawSeriesHooks=[];B.jqplot.postDrawSeriesHooks=[];B.jqplot.preDrawLegendHooks=[];B.jqplot.addLegendRowHooks=[];B.jqplot.preSeriesInitHooks=[];B.jqplot.postSeriesInitHooks=[];B.jqplot.preParseSeriesOptionsHooks=[];B.jqplot.postParseSeriesOptionsHooks=[];B.jqplot.eventListenerHooks=[];B.jqplot.preDrawSeriesShadowHooks=[];B.jqplot.postDrawSeriesShadowHooks=[];B.jqplot.ElemContainer=function(){this._elem;this._plotWidth;this._plotHeight;this._plotDimensions={height:null,width:null}};B.jqplot.ElemContainer.prototype.createElement=function(T,V,R,S,W){this._offsets=V;var Q=R||"jqplot";var U=document.createElement(T);this._elem=B(U);this._elem.addClass(Q);this._elem.css(S);this._elem.attr(W);return this._elem};B.jqplot.ElemContainer.prototype.getWidth=function(){if(this._elem){return this._elem.outerWidth(true)}else{return null}};B.jqplot.ElemContainer.prototype.getHeight=function(){if(this._elem){return this._elem.outerHeight(true)}else{return null}};B.jqplot.ElemContainer.prototype.getPosition=function(){if(this._elem){return this._elem.position()}else{return{top:null,left:null,bottom:null,right:null}}};B.jqplot.ElemContainer.prototype.getTop=function(){return this.getPosition().top};B.jqplot.ElemContainer.prototype.getLeft=function(){return this.getPosition().left};B.jqplot.ElemContainer.prototype.getBottom=function(){return this._elem.css("bottom")};B.jqplot.ElemContainer.prototype.getRight=function(){return this._elem.css("right")};function o(Q){B.jqplot.ElemContainer.call(this);this.name=Q;this._series=[];this.show=false;this.tickRenderer=B.jqplot.AxisTickRenderer;this.tickOptions={};this.labelRenderer=B.jqplot.AxisLabelRenderer;this.labelOptions={};this.label=null;this.showLabel=true;this.min=null;this.max=null;this.autoscale=false;this.pad=1.2;this.padMax=null;this.padMin=null;this.ticks=[];this.numberTicks;this.tickInterval;this.renderer=B.jqplot.LinearAxisRenderer;this.rendererOptions={};this.showTicks=true;this.showTickMarks=true;this.showMinorTicks=true;this.useSeriesColor=false;this.borderWidth=null;this.borderColor=null;this._dataBounds={min:null,max:null};this._offsets={min:null,max:null};this._ticks=[];this._label=null;this.syncTicks=null;this.tickSpacing=75;this._min=null;this._max=null;this._tickInterval=null;this._numberTicks=null;this.__ticks=null}o.prototype=new B.jqplot.ElemContainer();o.prototype.constructor=o;o.prototype.init=function(){this.renderer=new this.renderer();this.tickOptions.axis=this.name;if(this.label==null||this.label==""){this.showLabel=false}else{this.labelOptions.label=this.label}if(this.showLabel==false){this.labelOptions.show=false}if(this.pad==0){this.pad=1}if(this.padMax==0){this.padMax=1}if(this.padMin==0){this.padMin=1}if(this.padMax==null){this.padMax=(this.pad-1)/2+1}if(this.padMin==null){this.padMin=(this.pad-1)/2+1}this.pad=this.padMax+this.padMin-1;if(this.min!=null||this.max!=null){this.autoscale=false}if(this.syncTicks==null&&this.name.indexOf("y")>-1){this.syncTicks=true}else{if(this.syncTicks==null){this.syncTicks=false}}this.renderer.init.call(this,this.rendererOptions)};o.prototype.draw=function(Q){return this.renderer.draw.call(this,Q)};o.prototype.set=function(){this.renderer.set.call(this)};o.prototype.pack=function(R,Q){if(this.show){this.renderer.pack.call(this,R,Q)}if(this._min==null){this._min=this.min;this._max=this.max;this._tickInterval=this.tickInterval;this._numberTicks=this.numberTicks;this.__ticks=this._ticks}};o.prototype.reset=function(){this.renderer.reset.call(this)};o.prototype.resetScale=function(){this.min=null;this.max=null;this.numberTicks=null;this.tickInterval=null};function g(Q){B.jqplot.ElemContainer.call(this);this.show=false;this.location="ne";this.labels=[];this.showLabels=true;this.showSwatches=true;this.placement="insideGrid";this.xoffset=0;this.yoffset=0;this.border;this.background;this.textColor;this.fontFamily;this.fontSize;this.rowSpacing="0.5em";this.renderer=B.jqplot.TableLegendRenderer;this.rendererOptions={};this.preDraw=false;this.marginTop=null;this.marginRight=null;this.marginBottom=null;this.marginLeft=null;this.escapeHtml=false;this._series=[];B.extend(true,this,Q)}g.prototype=new B.jqplot.ElemContainer();g.prototype.constructor=g;g.prototype.setOptions=function(Q){B.extend(true,this,Q);if(this.placement=="inside"){this.placement="insideGrid"}if(this.xoffset>0){if(this.placement=="insideGrid"){switch(this.location){case"nw":case"w":case"sw":if(this.marginLeft==null){this.marginLeft=this.xoffset+"px"}this.marginRight="0px";break;case"ne":case"e":case"se":default:if(this.marginRight==null){this.marginRight=this.xoffset+"px"}this.marginLeft="0px";break}}else{if(this.placement=="outside"){switch(this.location){case"nw":case"w":case"sw":if(this.marginRight==null){this.marginRight=this.xoffset+"px"}this.marginLeft="0px";break;case"ne":case"e":case"se":default:if(this.marginLeft==null){this.marginLeft=this.xoffset+"px"}this.marginRight="0px";break}}}this.xoffset=0}if(this.yoffset>0){if(this.placement=="outside"){switch(this.location){case"sw":case"s":case"se":if(this.marginTop==null){this.marginTop=this.yoffset+"px"}this.marginBottom="0px";break;case"ne":case"n":case"nw":default:if(this.marginBottom==null){this.marginBottom=this.yoffset+"px"}this.marginTop="0px";break}}else{if(this.placement=="insideGrid"){switch(this.location){case"sw":case"s":case"se":if(this.marginBottom==null){this.marginBottom=this.yoffset+"px"}this.marginTop="0px";break;case"ne":case"n":case"nw":default:if(this.marginTop==null){this.marginTop=this.yoffset+"px"}this.marginBottom="0px";break}}}this.yoffset=0}};g.prototype.init=function(){this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions)};g.prototype.draw=function(R){for(var Q=0;Q<B.jqplot.preDrawLegendHooks.length;Q++){B.jqplot.preDrawLegendHooks[Q].call(this,R)}return this.renderer.draw.call(this,R)};g.prototype.pack=function(Q){this.renderer.pack.call(this,Q)};function p(Q){B.jqplot.ElemContainer.call(this);this.text=Q;this.show=true;this.fontFamily;this.fontSize;this.textAlign;this.textColor;this.renderer=B.jqplot.DivTitleRenderer;this.rendererOptions={}}p.prototype=new B.jqplot.ElemContainer();p.prototype.constructor=p;p.prototype.init=function(){this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions)};p.prototype.draw=function(Q){return this.renderer.draw.call(this,Q)};p.prototype.pack=function(){this.renderer.pack.call(this)};function G(){B.jqplot.ElemContainer.call(this);this.show=true;this.xaxis="xaxis";this._xaxis;this.yaxis="yaxis";this._yaxis;this.gridBorderWidth=2;this.renderer=B.jqplot.LineRenderer;this.rendererOptions={};this.data=[];this.gridData=[];this.label="";this.showLabel=true;this.color;this.lineWidth=2.5;this.shadow=true;this.shadowAngle=45;this.shadowOffset=1.25;this.shadowDepth=3;this.shadowAlpha="0.1";this.breakOnNull=false;this.markerRenderer=B.jqplot.MarkerRenderer;this.markerOptions={};this.showLine=true;this.showMarker=true;this.index;this.fill=false;this.fillColor;this.fillAlpha;this.fillAndStroke=false;this.disableStack=false;this._stack=false;this.neighborThreshold=4;this.fillToZero=false;this.fillToValue=0;this.fillAxis="y";this.useNegativeColors=true;this._stackData=[];this._plotData=[];this._plotValues={x:[],y:[]};this._intervals={x:{},y:{}};this._prevPlotData=[];this._prevGridData=[];this._stackAxis="y";this._primaryAxis="_xaxis";this.canvas=new B.jqplot.GenericCanvas();this.shadowCanvas=new B.jqplot.GenericCanvas();this.plugins={};this._sumy=0;this._sumx=0}G.prototype=new B.jqplot.ElemContainer();G.prototype.constructor=G;G.prototype.init=function(S,W,U){this.index=S;this.gridBorderWidth=W;var V=this.data;var R=[],T;for(T=0;T<V.length;T++){if(!this.breakOnNull){if(V[T]==null||V[T][0]==null||V[T][1]==null){continue}else{R.push(V[T])}}else{R.push(V[T])}}this.data=R;if(!this.fillColor){this.fillColor=this.color}if(this.fillAlpha){var Q=B.jqplot.normalize2rgb(this.fillColor);var Q=B.jqplot.getColorComponents(Q);this.fillColor="rgba("+Q[0]+","+Q[1]+","+Q[2]+","+this.fillAlpha+")"}this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions,U);this.markerRenderer=new this.markerRenderer();if(!this.markerOptions.color){this.markerOptions.color=this.color}if(this.markerOptions.show==null){this.markerOptions.show=this.showMarker}this.showMarker=this.markerOptions.show;this.markerRenderer.init(this.markerOptions)};G.prototype.draw=function(W,T,V){var R=(T==l)?{}:T;W=(W==l)?this.canvas._ctx:W;for(var Q=0;Q<B.jqplot.preDrawSeriesHooks.length;Q++){B.jqplot.preDrawSeriesHooks[Q].call(this,W,R)}if(this.show){this.renderer.setGridData.call(this,V);if(!R.preventJqPlotSeriesDrawTrigger){B(W.canvas).trigger("jqplotSeriesDraw",[this.data,this.gridData])}var U=[];if(R.data){U=R.data}else{if(!this._stack){U=this.data}else{U=this._plotData}}var S=R.gridData||this.renderer.makeGridData.call(this,U,V);this.renderer.draw.call(this,W,S,R,V)}for(var Q=0;Q<B.jqplot.postDrawSeriesHooks.length;Q++){B.jqplot.postDrawSeriesHooks[Q].call(this,W,R)}};G.prototype.drawShadow=function(W,T,V){var R=(T==l)?{}:T;W=(W==l)?this.shadowCanvas._ctx:W;for(var Q=0;Q<B.jqplot.preDrawSeriesShadowHooks.length;Q++){B.jqplot.preDrawSeriesShadowHooks[Q].call(this,W,R)}if(this.shadow){this.renderer.setGridData.call(this,V);var U=[];if(R.data){U=R.data}else{if(!this._stack){U=this.data}else{U=this._plotData}}var S=R.gridData||this.renderer.makeGridData.call(this,U,V);this.renderer.drawShadow.call(this,W,S,R)}for(var Q=0;Q<B.jqplot.postDrawSeriesShadowHooks.length;Q++){B.jqplot.postDrawSeriesShadowHooks[Q].call(this,W,R)}};G.prototype.toggleDisplay=function(R){var Q,S;if(R.data.series){Q=R.data.series}else{Q=this}if(R.data.speed){S=R.data.speed}if(S){if(Q.canvas._elem.is(":hidden")){if(Q.shadowCanvas._elem){Q.shadowCanvas._elem.fadeIn(S)}Q.canvas._elem.fadeIn(S);Q.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+Q.index).fadeIn(S)}else{if(Q.shadowCanvas._elem){Q.shadowCanvas._elem.fadeOut(S)}Q.canvas._elem.fadeOut(S);Q.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+Q.index).fadeOut(S)}}else{if(Q.canvas._elem.is(":hidden")){if(Q.shadowCanvas._elem){Q.shadowCanvas._elem.show()}Q.canvas._elem.show();Q.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+Q.index).show()}else{if(Q.shadowCanvas._elem){Q.shadowCanvas._elem.hide()}Q.canvas._elem.hide();Q.canvas._elem.nextAll(".jqplot-point-label.jqplot-series-"+Q.index).hide()}}};function C(){B.jqplot.ElemContainer.call(this);this.drawGridlines=true;this.gridLineColor="#cccccc";this.gridLineWidth=1;this.background="#fffdf6";this.borderColor="#999999";this.borderWidth=2;this.drawBorder=true;this.shadow=true;this.shadowAngle=45;this.shadowOffset=1.5;this.shadowWidth=3;this.shadowDepth=3;this.shadowColor=null;this.shadowAlpha="0.07";this._left;this._top;this._right;this._bottom;this._width;this._height;this._axes=[];this.renderer=B.jqplot.CanvasGridRenderer;this.rendererOptions={};this._offsets={top:null,bottom:null,left:null,right:null}}C.prototype=new B.jqplot.ElemContainer();C.prototype.constructor=C;C.prototype.init=function(){this.renderer=new this.renderer();this.renderer.init.call(this,this.rendererOptions)};C.prototype.createElement=function(Q){this._offsets=Q;return this.renderer.createElement.call(this)};C.prototype.draw=function(){this.renderer.draw.call(this)};B.jqplot.GenericCanvas=function(){B.jqplot.ElemContainer.call(this);this._ctx};B.jqplot.GenericCanvas.prototype=new B.jqplot.ElemContainer();B.jqplot.GenericCanvas.prototype.constructor=B.jqplot.GenericCanvas;B.jqplot.GenericCanvas.prototype.createElement=function(U,S,R){this._offsets=U;var Q="jqplot";if(S!=l){Q=S}var T;if(this._elem){T=this._elem.get(0)}else{T=document.createElement("canvas")}if(R!=l){this._plotDimensions=R}T.width=this._plotDimensions.width-this._offsets.left-this._offsets.right;T.height=this._plotDimensions.height-this._offsets.top-this._offsets.bottom;this._elem=B(T);this._elem.css({position:"absolute",left:this._offsets.left,top:this._offsets.top});this._elem.addClass(Q);if(B.browser.msie){window.G_vmlCanvasManager.init_(document);T=window.G_vmlCanvasManager.initElement(T)}return this._elem};B.jqplot.GenericCanvas.prototype.setContext=function(){this._ctx=this._elem.get(0).getContext("2d");return this._ctx};B.jqplot.HooksManager=function(){this.hooks=[]};B.jqplot.HooksManager.prototype.addOnce=function(R){var S=false,Q;for(Q=0;Q<this.hooks.length;Q++){if(this.hooks[Q][0]==R){S=true}}if(!S){this.hooks.push(R)}};B.jqplot.HooksManager.prototype.add=function(Q){this.hooks.push(Q)};B.jqplot.EventListenerManager=function(){this.hooks=[]};B.jqplot.EventListenerManager.prototype.addOnce=function(T,S){var U=false,R,Q;for(Q=0;Q<this.hooks.length;Q++){R=this.hooks[Q];if(R[0]==T&&R[1]==S){U=true}}if(!U){this.hooks.push([T,S])}};B.jqplot.EventListenerManager.prototype.add=function(R,Q){this.hooks.push([R,Q])};function F(){this.data=[];this.targetId=null;this.target=null;this.defaults={axesDefaults:{},axes:{xaxis:{},yaxis:{},x2axis:{},y2axis:{},y3axis:{},y4axis:{},y5axis:{},y6axis:{},y7axis:{},y8axis:{},y9axis:{}},seriesDefaults:{},gridPadding:{top:10,right:10,bottom:23,left:10},series:[]};this.series=[];this.axes={xaxis:new o("xaxis"),yaxis:new o("yaxis"),x2axis:new o("x2axis"),y2axis:new o("y2axis"),y3axis:new o("y3axis"),y4axis:new o("y4axis"),y5axis:new o("y5axis"),y6axis:new o("y6axis"),y7axis:new o("y7axis"),y8axis:new o("y8axis"),y9axis:new o("y9axis")};this.grid=new C();this.legend=new g();this.baseCanvas=new B.jqplot.GenericCanvas();this.seriesStack=[];this.previousSeriesStack=[];this.eventCanvas=new B.jqplot.GenericCanvas();this._width=null;this._height=null;this._plotDimensions={height:null,width:null};this._gridPadding={top:10,right:10,bottom:10,left:10};this.syncXTicks=true;this.syncYTicks=true;this.seriesColors=["#4bb2c5","#EAA228","#c5b47f","#579575","#839557","#958c12","#953579","#4b5de4","#d8b83f","#ff5800","#0085cc","#c747a3","#cddf54","#FBD178","#26B4E3","#bd70c7"];this.negativeSeriesColors=["#498991","#C08840","#9F9274","#546D61","#646C4A","#6F6621","#6E3F5F","#4F64B0","#A89050","#C45923","#187399","#945381","#959E5C","#C7AF7B","#478396","#907294"];this.sortData=true;var S=0;this.textColor;this.fontFamily;this.fontSize;this.title=new p();this.options={};this.stackSeries=false;this.defaultAxisStart=1;this._stackData=[];this._plotData=[];this.plugins={};this._drawCount=0;this.drawIfHidden=false;this.captureRightClick=false;this.themeEngine=new B.jqplot.ThemeEngine();this._sumy=0;this._sumx=0;this.preInitHooks=new B.jqplot.HooksManager();this.postInitHooks=new B.jqplot.HooksManager();this.preParseOptionsHooks=new B.jqplot.HooksManager();this.postParseOptionsHooks=new B.jqplot.HooksManager();this.preDrawHooks=new B.jqplot.HooksManager();this.postDrawHooks=new B.jqplot.HooksManager();this.preDrawSeriesHooks=new B.jqplot.HooksManager();this.postDrawSeriesHooks=new B.jqplot.HooksManager();this.preDrawLegendHooks=new B.jqplot.HooksManager();this.addLegendRowHooks=new B.jqplot.HooksManager();this.preSeriesInitHooks=new B.jqplot.HooksManager();this.postSeriesInitHooks=new B.jqplot.HooksManager();this.preParseSeriesOptionsHooks=new B.jqplot.HooksManager();this.postParseSeriesOptionsHooks=new B.jqplot.HooksManager();this.eventListenerHooks=new B.jqplot.EventListenerManager();this.preDrawSeriesShadowHooks=new B.jqplot.HooksManager();this.postDrawSeriesShadowHooks=new B.jqplot.HooksManager();this.colorGenerator=B.jqplot.ColorGenerator;this.init=function(ab,aa,X){for(var Y=0;Y<B.jqplot.preInitHooks.length;Y++){B.jqplot.preInitHooks[Y].call(this,ab,aa,X)}for(var Y=0;Y<this.preInitHooks.hooks.length;Y++){this.preInitHooks.hooks[Y].call(this,ab,aa,X)}this.targetId="#"+ab;this.target=B("#"+ab);this.target.removeClass("jqplot-error");if(!this.target.get(0)){throw"No plot target specified"}if(this.target.css("position")=="static"){this.target.css("position","relative")}if(!this.target.hasClass("jqplot-target")){this.target.addClass("jqplot-target")}if(!this.target.height()){var Z;if(X&&X.height){Z=parseInt(X.height,10)}else{if(this.target.attr("data-height")){Z=parseInt(this.target.attr("data-height"),10)}else{Z=parseInt(B.jqplot.config.defaultHeight,10)}}this._height=Z;this.target.css("height",Z+"px")}else{this._height=this.target.height()}if(!this.target.width()){var U;if(X&&X.width){U=parseInt(X.width,10)}else{if(this.target.attr("data-width")){U=parseInt(this.target.attr("data-width"),10)}else{U=parseInt(B.jqplot.config.defaultWidth,10)}}this._width=U;this.target.css("width",U+"px")}else{this._width=this.target.width()}this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;this.grid._plotDimensions=this._plotDimensions;this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Canvas dimension not set"}if(aa==null){throw {name:"DataError",message:"No data to plot."}}if(aa.constructor!=Array||aa.length==0||aa[0].constructor!=Array||aa[0].length==0){throw {name:"DataError",message:"No data to plot."}}this.data=aa;this.parseOptions(X);if(this.textColor){this.target.css("color",this.textColor)}if(this.fontFamily){this.target.css("font-family",this.fontFamily)}if(this.fontSize){this.target.css("font-size",this.fontSize)}this.title.init();this.legend.init();this._sumy=0;this._sumx=0;for(var Y=0;Y<this.series.length;Y++){this.seriesStack.push(Y);this.previousSeriesStack.push(Y);this.series[Y].shadowCanvas._plotDimensions=this._plotDimensions;this.series[Y].canvas._plotDimensions=this._plotDimensions;for(var W=0;W<B.jqplot.preSeriesInitHooks.length;W++){B.jqplot.preSeriesInitHooks[W].call(this.series[Y],ab,aa,this.options.seriesDefaults,this.options.series[Y],this)}for(var W=0;W<this.preSeriesInitHooks.hooks.length;W++){this.preSeriesInitHooks.hooks[W].call(this.series[Y],ab,aa,this.options.seriesDefaults,this.options.series[Y],this)}this.populatePlotData(this.series[Y],Y);this.series[Y]._plotDimensions=this._plotDimensions;this.series[Y].init(Y,this.grid.borderWidth,this);for(var W=0;W<B.jqplot.postSeriesInitHooks.length;W++){B.jqplot.postSeriesInitHooks[W].call(this.series[Y],ab,aa,this.options.seriesDefaults,this.options.series[Y],this)}for(var W=0;W<this.postSeriesInitHooks.hooks.length;W++){this.postSeriesInitHooks.hooks[W].call(this.series[Y],ab,aa,this.options.seriesDefaults,this.options.series[Y],this)}this._sumy+=this.series[Y]._sumy;this._sumx+=this.series[Y]._sumx}for(var V in this.axes){this.axes[V]._plotDimensions=this._plotDimensions;this.axes[V].init()}if(this.sortData){Q(this.series)}this.grid.init();this.grid._axes=this.axes;this.legend._series=this.series;for(var Y=0;Y<B.jqplot.postInitHooks.length;Y++){B.jqplot.postInitHooks[Y].call(this,ab,aa,X)}for(var Y=0;Y<this.postInitHooks.hooks.length;Y++){this.postInitHooks.hooks[Y].call(this,ab,aa,X)}};this.resetAxesScale=function(X){var W=(X!=l)?X:this.axes;if(W===true){W=this.axes}if(W.constructor===Array){for(var V=0;V<W.length;V++){this.axes[W[V]].resetScale()}}else{if(W.constructor===Object){for(var U in W){this.axes[U].resetScale()}}}};this.reInitialize=function(){if(!this.target.height()){var X;if(options&&options.height){X=parseInt(options.height,10)}else{if(this.target.attr("data-height")){X=parseInt(this.target.attr("data-height"),10)}else{X=parseInt(B.jqplot.config.defaultHeight,10)}}this._height=X;this.target.css("height",X+"px")}else{this._height=this.target.height()}if(!this.target.width()){var U;if(options&&options.width){U=parseInt(options.width,10)}else{if(this.target.attr("data-width")){U=parseInt(this.target.attr("data-width"),10)}else{U=parseInt(B.jqplot.config.defaultWidth,10)}}this._width=U;this.target.css("width",U+"px")}else{this._width=this.target.width()}if(this._height<=0||this._width<=0||!this._height||!this._width){throw"Target dimension not set"}this._plotDimensions.height=this._height;this._plotDimensions.width=this._width;this.grid._plotDimensions=this._plotDimensions;this.title._plotDimensions=this._plotDimensions;this.baseCanvas._plotDimensions=this._plotDimensions;this.eventCanvas._plotDimensions=this._plotDimensions;this.legend._plotDimensions=this._plotDimensions;for(var Y in this.axes){this.axes[Y]._plotWidth=this._width;this.axes[Y]._plotHeight=this._height}this.title._plotWidth=this._width;if(this.textColor){this.target.css("color",this.textColor)}if(this.fontFamily){this.target.css("font-family",this.fontFamily)}if(this.fontSize){this.target.css("font-size",this.fontSize)}this._sumy=0;this._sumx=0;for(var W=0;W<this.series.length;W++){this.populatePlotData(this.series[W],W);this.series[W]._plotDimensions=this._plotDimensions;this.series[W].canvas._plotDimensions=this._plotDimensions;this._sumy+=this.series[W]._sumy;this._sumx+=this.series[W]._sumx}for(var V in this.axes){this.axes[V]._plotDimensions=this._plotDimensions;this.axes[V]._ticks=[];this.axes[V].renderer.init.call(this.axes[V],{})}if(this.sortData){Q(this.series)}this.grid._axes=this.axes;this.legend._series=this.series};function Q(Y){var ac,ad,ae,U,ab;for(var Z=0;Z<Y.length;Z++){var V;var aa=[Y[Z].data,Y[Z]._stackData,Y[Z]._plotData,Y[Z]._prevPlotData];for(var W=0;W<4;W++){V=true;ac=aa[W];if(Y[Z]._stackAxis=="x"){for(var X=0;X<ac.length;X++){if(typeof(ac[X][1])!="number"){V=false;break}}if(V){ac.sort(function(ag,af){return ag[1]-af[1]})}}else{for(var X=0;X<ac.length;X++){if(typeof(ac[X][0])!="number"){V=false;break}}if(V){ac.sort(function(ag,af){return ag[0]-af[0]})}}}}}this.populatePlotData=function(Y,Z){this._plotData=[];this._stackData=[];Y._stackData=[];Y._plotData=[];var ac={x:[],y:[]};if(this.stackSeries&&!Y.disableStack){Y._stack=true;var aa=Y._stackAxis=="x"?0:1;var ab=aa?0:1;var ad=B.extend(true,[],Y.data);var ae=B.extend(true,[],Y.data);for(var W=0;W<Z;W++){var U=this.series[W].data;for(var V=0;V<U.length;V++){ad[V][0]+=U[V][0];ad[V][1]+=U[V][1];ae[V][aa]+=U[V][aa]}}for(var X=0;X<ae.length;X++){ac.x.push(ae[X][0]);ac.y.push(ae[X][1])}this._plotData.push(ae);this._stackData.push(ad);Y._stackData=ad;Y._plotData=ae;Y._plotValues=ac}else{for(var X=0;X<Y.data.length;X++){ac.x.push(Y.data[X][0]);ac.y.push(Y.data[X][1])}this._stackData.push(Y.data);this.series[Z]._stackData=Y.data;this._plotData.push(Y.data);Y._plotData=Y.data;Y._plotValues=ac}if(Z>0){Y._prevPlotData=this.series[Z-1]._plotData}Y._sumy=0;Y._sumx=0;for(X=Y.data.length-1;X>-1;X--){Y._sumy+=Y.data[X][1];Y._sumx+=Y.data[X][0]}};this.getNextSeriesColor=(function(V){var U=0;var W=V.seriesColors;return function(){if(U<W.length){return W[U++]}else{U=0;return W[U++]}}})(this);this.parseOptions=function(ac){for(var Z=0;Z<this.preParseOptionsHooks.hooks.length;Z++){this.preParseOptionsHooks.hooks[Z].call(this,ac)}for(var Z=0;Z<B.jqplot.preParseOptionsHooks.length;Z++){B.jqplot.preParseOptionsHooks[Z].call(this,ac)}this.options=B.extend(true,{},this.defaults,ac);this.stackSeries=this.options.stackSeries;if(this.options.seriesColors){this.seriesColors=this.options.seriesColors}if(this.options.negativeSeriesColors){this.negativeSeriesColors=this.options.negativeSeriesColors}if(this.options.captureRightClick){this.captureRightClick=this.options.captureRightClick}this.defaultAxisStart=(ac&&ac.defaultAxisStart!=null)?ac.defaultAxisStart:this.defaultAxisStart;var U=new this.colorGenerator(this.seriesColors);B.extend(true,this._gridPadding,this.options.gridPadding);this.sortData=(this.options.sortData!=null)?this.options.sortData:this.sortData;for(var V in this.axes){var X=this.axes[V];B.extend(true,X,this.options.axesDefaults,this.options.axes[V]);X._plotWidth=this._width;X._plotHeight=this._height}if(this.data.length==0){this.data=[];for(var Z=0;Z<this.options.series.length;Z++){this.data.push(this.options.series.data)}}var aa=function(ag,ae,ah){var ad=[];var af;ae=ae||"vertical";if(!(ag[0] instanceof Array)){for(af=0;af<ag.length;af++){if(ae=="vertical"){ad.push([ah+af,ag[af]])}else{ad.push([ag[af],ah+af])}}}else{B.extend(true,ad,ag)}return ad};for(var Z=0;Z<this.data.length;Z++){var ab=new G();for(var Y=0;Y<B.jqplot.preParseSeriesOptionsHooks.length;Y++){B.jqplot.preParseSeriesOptionsHooks[Y].call(ab,this.options.seriesDefaults,this.options.series[Z])}for(var Y=0;Y<this.preParseSeriesOptionsHooks.hooks.length;Y++){this.preParseSeriesOptionsHooks.hooks[Y].call(ab,this.options.seriesDefaults,this.options.series[Z])}B.extend(true,ab,{seriesColors:this.seriesColors,negativeSeriesColors:this.negativeSeriesColors},this.options.seriesDefaults,this.options.series[Z]);var W="vertical";if(ab.renderer.constructor==B.jqplot.barRenderer&&ab.rendererOptions&&ab.rendererOptions.barDirection=="horizontal"){W="horizontal"}ab.data=aa(this.data[Z],W,this.defaultAxisStart);switch(ab.xaxis){case"xaxis":ab._xaxis=this.axes.xaxis;break;case"x2axis":ab._xaxis=this.axes.x2axis;break;default:break}ab._yaxis=this.axes[ab.yaxis];ab._xaxis._series.push(ab);ab._yaxis._series.push(ab);if(ab.show){ab._xaxis.show=true;ab._yaxis.show=true}if(!ab.color&&ab.show!=false){ab.color=U.next()}if(!ab.label){ab.label="Series "+(Z+1).toString()}this.series.push(ab);for(var Y=0;Y<B.jqplot.postParseSeriesOptionsHooks.length;Y++){B.jqplot.postParseSeriesOptionsHooks[Y].call(this.series[Z],this.options.seriesDefaults,this.options.series[Z])}for(var Y=0;Y<this.postParseSeriesOptionsHooks.hooks.length;Y++){this.postParseSeriesOptionsHooks.hooks[Y].call(this.series[Z],this.options.seriesDefaults,this.options.series[Z])}}B.extend(true,this.grid,this.options.grid);for(var V in this.axes){var X=this.axes[V];if(X.borderWidth==null){X.borderWidth=this.grid.borderWidth}if(X.borderColor==null){if(V!="xaxis"&&V!="x2axis"&&X.useSeriesColor===true&&X.show){X.borderColor=X._series[0].color}else{X.borderColor=this.grid.borderColor}}}if(typeof this.options.title=="string"){this.title.text=this.options.title}else{if(typeof this.options.title=="object"){B.extend(true,this.title,this.options.title)}}this.title._plotWidth=this._width;this.legend.setOptions(this.options.legend);for(var Z=0;Z<B.jqplot.postParseOptionsHooks.length;Z++){B.jqplot.postParseOptionsHooks[Z].call(this,ac)}for(var Z=0;Z<this.postParseOptionsHooks.hooks.length;Z++){this.postParseOptionsHooks.hooks[Z].call(this,ac)}};this.replot=function(V){var W=(V!=l)?V:{};var U=(W.clear!=l)?W.clear:true;var X=(W.resetAxes!=l)?W.resetAxes:false;this.target.trigger("jqplotPreReplot");if(U){this.target.empty()}if(X){this.resetAxesScale(X)}this.reInitialize();this.draw();this.target.trigger("jqplotPostReplot")};this.redraw=function(U){U=(U!=null)?U:true;this.target.trigger("jqplotPreRedraw");if(U){this.target.empty()}for(var W in this.axes){this.axes[W]._ticks=[]}for(var V=0;V<this.series.length;V++){this.populatePlotData(this.series[V],V)}this._sumy=0;this._sumx=0;for(V=0;V<this.series.length;V++){this._sumy+=this.series[V]._sumy;this._sumx+=this.series[V]._sumx}this.draw();this.target.trigger("jqplotPostRedraw")};this.draw=function(){if(this.drawIfHidden||this.target.is(":visible")){this.target.trigger("jqplotPreDraw");var aa,Z;for(aa=0;aa<B.jqplot.preDrawHooks.length;aa++){B.jqplot.preDrawHooks[aa].call(this)}for(aa=0;aa<this.preDrawHooks.hooks.length;aa++){this.preDrawHooks.hooks[aa].call(this)}this.target.append(this.baseCanvas.createElement({left:0,right:0,top:0,bottom:0},"jqplot-base-canvas"));this.baseCanvas.setContext();this.target.append(this.title.draw());this.title.pack({top:0,left:0});var af=this.legend.draw();var ae={top:0,left:0,bottom:0,right:0};if(this.legend.placement=="outsideGrid"){this.target.append(af);switch(this.legend.location){case"n":ae.top+=this.legend.getHeight();break;case"s":ae.bottom+=this.legend.getHeight();break;case"ne":case"e":case"se":ae.right+=this.legend.getWidth();break;case"nw":case"w":case"sw":ae.left+=this.legend.getWidth();break;default:ae.right+=this.legend.getWidth();break}af=af.detach()}var U=this.axes;for(var W in U){this.target.append(U[W].draw(this.baseCanvas._ctx));U[W].set()}if(U.yaxis.show){ae.left+=U.yaxis.getWidth()}var X=["y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];var V=[0,0,0,0,0,0,0,0];var ac=0;var Y;for(Y=0;Y<8;Y++){if(U[X[Y]].show){ac+=U[X[Y]].getWidth();V[Y]=ac}}ae.right+=ac;if(U.x2axis.show){ae.top+=U.x2axis.getHeight()}if(this.title.show){ae.top+=this.title.getHeight()}if(U.xaxis.show){ae.bottom+=U.xaxis.getHeight()}var ab=["top","bottom","left","right"];for(var Y in ab){if(ae[ab[Y]]){this._gridPadding[ab[Y]]=ae[ab[Y]]}}var ad=(this.legend.placement=="outsideGrid")?{top:this.title.getHeight(),left:0,right:0,bottom:0}:this._gridPadding;U.xaxis.pack({position:"absolute",bottom:this._gridPadding.bottom-U.xaxis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right});U.yaxis.pack({position:"absolute",top:0,left:this._gridPadding.left-U.yaxis.getWidth(),height:this._height},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top});U.x2axis.pack({position:"absolute",top:this._gridPadding.top-U.x2axis.getHeight(),left:0,width:this._width},{min:this._gridPadding.left,max:this._width-this._gridPadding.right});for(aa=8;aa>0;aa--){U[X[aa-1]].pack({position:"absolute",top:0,right:this._gridPadding.right-V[aa-1]},{min:this._height-this._gridPadding.bottom,max:this._gridPadding.top})}this.target.append(this.grid.createElement(this._gridPadding));this.grid.draw();for(aa=0;aa<this.series.length;aa++){Z=this.seriesStack[aa];this.target.append(this.series[Z].shadowCanvas.createElement(this._gridPadding,"jqplot-series-shadowCanvas"));this.series[Z].shadowCanvas.setContext();this.series[Z].shadowCanvas._elem.data("seriesIndex",Z)}for(aa=0;aa<this.series.length;aa++){Z=this.seriesStack[aa];this.target.append(this.series[Z].canvas.createElement(this._gridPadding,"jqplot-series-canvas"));this.series[Z].canvas.setContext();this.series[Z].canvas._elem.data("seriesIndex",Z)}this.target.append(this.eventCanvas.createElement(this._gridPadding,"jqplot-event-canvas"));this.eventCanvas.setContext();this.eventCanvas._ctx.fillStyle="rgba(0,0,0,0)";this.eventCanvas._ctx.fillRect(0,0,this.eventCanvas._ctx.canvas.width,this.eventCanvas._ctx.canvas.height);this.bindCustomEvents();if(this.legend.preDraw){this.eventCanvas._elem.before(af);this.legend.pack(ad);if(this.legend._elem){this.drawSeries({legendInfo:{location:this.legend.location,placement:this.legend.placement,width:this.legend.getWidth(),height:this.legend.getHeight(),xoffset:this.legend.xoffset,yoffset:this.legend.yoffset}})}else{this.drawSeries()}}else{this.drawSeries();B(this.series[this.series.length-1].canvas._elem).after(af);this.legend.pack(ad)}for(var aa=0;aa<B.jqplot.eventListenerHooks.length;aa++){this.eventCanvas._elem.bind(B.jqplot.eventListenerHooks[aa][0],{plot:this},B.jqplot.eventListenerHooks[aa][1])}for(var aa=0;aa<this.eventListenerHooks.hooks.length;aa++){this.eventCanvas._elem.bind(this.eventListenerHooks.hooks[aa][0],{plot:this},this.eventListenerHooks.hooks[aa][1])}for(var aa=0;aa<B.jqplot.postDrawHooks.length;aa++){B.jqplot.postDrawHooks[aa].call(this)}for(var aa=0;aa<this.postDrawHooks.hooks.length;aa++){this.postDrawHooks.hooks[aa].call(this)}if(this.target.is(":visible")){this._drawCount+=1}this.target.trigger("jqplotPostDraw",[this])}};this.bindCustomEvents=function(){this.eventCanvas._elem.bind("click",{plot:this},this.onClick);this.eventCanvas._elem.bind("dblclick",{plot:this},this.onDblClick);this.eventCanvas._elem.bind("mousedown",{plot:this},this.onMouseDown);this.eventCanvas._elem.bind("mousemove",{plot:this},this.onMouseMove);this.eventCanvas._elem.bind("mouseenter",{plot:this},this.onMouseEnter);this.eventCanvas._elem.bind("mouseleave",{plot:this},this.onMouseLeave);if(this.captureRightClick){this.eventCanvas._elem.bind("mouseup",{plot:this},this.onRightClick);this.eventCanvas._elem.get(0).oncontextmenu=function(){return false}}else{this.eventCanvas._elem.bind("mouseup",{plot:this},this.onMouseUp)}};function R(ac){var ab=ac.data.plot;var X=ab.eventCanvas._elem.offset();var aa={x:ac.pageX-X.left,y:ac.pageY-X.top};var Y={xaxis:null,yaxis:null,x2axis:null,y2axis:null,y3axis:null,y4axis:null,y5axis:null,y6axis:null,y7axis:null,y8axis:null,y9axis:null};var Z=["xaxis","yaxis","x2axis","y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];var U=ab.axes;var V,W;for(V=11;V>0;V--){W=Z[V-1];if(U[W].show){Y[W]=U[W].series_p2u(aa[W.charAt(0)])}}return{offsets:X,gridPos:aa,dataPos:Y}}function T(U,V){var Z=V.series;var aD,aC,aB,aw,ax,aq,ap,ae,ac,ag,ah,ar;var aA,aE,ay,aa,ao,au;var W,av;for(aB=V.seriesStack.length-1;aB>=0;aB--){aD=V.seriesStack[aB];aw=Z[aD];switch(aw.renderer.constructor){case B.jqplot.BarRenderer:aq=U.x;ap=U.y;for(aC=aw.gridData.length-1;aC>=0;aC--){ao=aw._barPoints[aC];if(aq>ao[0][0]&&aq<ao[2][0]&&ap>ao[2][1]&&ap<ao[0][1]){return{seriesIndex:aw.index,pointIndex:aC,gridData:ay,data:aw.data[aC],points:aw._barPoints[aC]}}}break;case B.jqplot.DonutRenderer:ag=aw.startAngle/180*Math.PI;aq=U.x-aw._center[0];ap=U.y-aw._center[1];ax=Math.sqrt(Math.pow(aq,2)+Math.pow(ap,2));if(aq>0&&-ap>=0){ae=2*Math.PI-Math.atan(-ap/aq)}else{if(aq>0&&-ap<0){ae=-Math.atan(-ap/aq)}else{if(aq<0){ae=Math.PI-Math.atan(-ap/aq)}else{if(aq==0&&-ap>0){ae=3*Math.PI/2}else{if(aq==0&&-ap<0){ae=Math.PI/2}else{if(aq==0&&ap==0){ae=0}}}}}}if(ag){ae-=ag;if(ae<0){ae+=2*Math.PI}else{if(ae>2*Math.PI){ae-=2*Math.PI}}}ac=aw.sliceMargin/180*Math.PI;if(ax<aw._radius&&ax>aw._innerRadius){for(aC=0;aC<aw.gridData.length;aC++){ah=(aC>0)?aw.gridData[aC-1][1]+ac:ac;ar=aw.gridData[aC][1];if(ae>ah&&ae<ar){return{seriesIndex:aw.index,pointIndex:aC,gridData:aw.gridData[aC],data:aw.data[aC]}}}}break;case B.jqplot.PieRenderer:ag=aw.startAngle/180*Math.PI;aq=U.x-aw._center[0];ap=U.y-aw._center[1];ax=Math.sqrt(Math.pow(aq,2)+Math.pow(ap,2));if(aq>0&&-ap>=0){ae=2*Math.PI-Math.atan(-ap/aq)}else{if(aq>0&&-ap<0){ae=-Math.atan(-ap/aq)}else{if(aq<0){ae=Math.PI-Math.atan(-ap/aq)}else{if(aq==0&&-ap>0){ae=3*Math.PI/2}else{if(aq==0&&-ap<0){ae=Math.PI/2}else{if(aq==0&&ap==0){ae=0}}}}}}if(ag){ae-=ag;if(ae<0){ae+=2*Math.PI}else{if(ae>2*Math.PI){ae-=2*Math.PI}}}ac=aw.sliceMargin/180*Math.PI;if(ax<aw._radius){for(aC=0;aC<aw.gridData.length;aC++){ah=(aC>0)?aw.gridData[aC-1][1]+ac:ac;ar=aw.gridData[aC][1];if(ae>ah&&ae<ar){return{seriesIndex:aw.index,pointIndex:aC,gridData:aw.gridData[aC],data:aw.data[aC]}}}}break;case B.jqplot.BubbleRenderer:aq=U.x;ap=U.y;var am=null;if(aw.show){for(var aC=0;aC<aw.gridData.length;aC++){ay=aw.gridData[aC];aE=Math.sqrt((aq-ay[0])*(aq-ay[0])+(ap-ay[1])*(ap-ay[1]));if(aE<=ay[2]&&(aE<=aA||aA==null)){aA=aE;am={seriesIndex:aD,pointIndex:aC,gridData:ay,data:aw.data[aC]}}}if(am!=null){return am}}break;case B.jqplot.FunnelRenderer:aq=U.x;ap=U.y;var at=aw._vertices,Y=at[0],X=at[at.length-1],ab,al;function az(aH,aJ,aI){var aG=(aJ[1]-aI[1])/(aJ[0]-aI[0]);var aF=aJ[1]-aG*aJ[0];var aK=aH+aJ[1];return[(aK-aF)/aG,aK]}ab=az(ap,Y[0],X[3]);al=az(ap,Y[1],X[2]);for(aC=0;aC<at.length;aC++){cv=at[aC];if(ap>=cv[0][1]&&ap<=cv[3][1]&&aq>=ab[0]&&aq<=al[0]){return{seriesIndex:aw.index,pointIndex:aC,gridData:null,data:aw.data[aC]}}}break;case B.jqplot.LineRenderer:aq=U.x;ap=U.y;ax=aw.renderer;if(aw.show){if(aw.fill){var af=false;if(aq>aw._boundingBox[0][0]&&aq<aw._boundingBox[1][0]&&ap>aw._boundingBox[1][1]&&ap<aw._boundingBox[0][1]){var ak=aw._areaPoints.length;var an;var aC=ak-1;for(var an=0;an<ak;an++){var aj=[aw._areaPoints[an][0],aw._areaPoints[an][1]];var ai=[aw._areaPoints[aC][0],aw._areaPoints[aC][1]];if(aj[1]<ap&&ai[1]>=ap||ai[1]<ap&&aj[1]>=ap){if(aj[0]+(ap-aj[1])/(ai[1]-aj[1])*(ai[0]-aj[0])<aq){af=!af}}aC=an}}if(af){return{seriesIndex:aD,pointIndex:null,gridData:aw.gridData,data:aw.data,points:aw._areaPoints}}break}else{av=aw.markerRenderer.size/2+aw.neighborThreshold;W=(av>0)?av:0;for(var aC=0;aC<aw.gridData.length;aC++){ay=aw.gridData[aC];if(ax.constructor==B.jqplot.OHLCRenderer){if(ax.candleStick){var ad=aw._yaxis.series_u2p;if(aq>=ay[0]-ax._bodyWidth/2&&aq<=ay[0]+ax._bodyWidth/2&&ap>=ad(aw.data[aC][2])&&ap<=ad(aw.data[aC][3])){return{seriesIndex:aD,pointIndex:aC,gridData:ay,data:aw.data[aC]}}}else{if(!ax.hlc){var ad=aw._yaxis.series_u2p;if(aq>=ay[0]-ax._tickLength&&aq<=ay[0]+ax._tickLength&&ap>=ad(aw.data[aC][2])&&ap<=ad(aw.data[aC][3])){return{seriesIndex:aD,pointIndex:aC,gridData:ay,data:aw.data[aC]}}}else{var ad=aw._yaxis.series_u2p;if(aq>=ay[0]-ax._tickLength&&aq<=ay[0]+ax._tickLength&&ap>=ad(aw.data[aC][1])&&ap<=ad(aw.data[aC][2])){return{seriesIndex:aD,pointIndex:aC,gridData:ay,data:aw.data[aC]}}}}}else{if(ay[0]!=null&&ay[1]!=null){aE=Math.sqrt((aq-ay[0])*(aq-ay[0])+(ap-ay[1])*(ap-ay[1]));if(aE<=W&&(aE<=aA||aA==null)){aA=aE;return{seriesIndex:aD,pointIndex:aC,gridData:ay,data:aw.data[aC]}}}}}}}break;default:aq=U.x;ap=U.y;ax=aw.renderer;if(aw.show){av=aw.markerRenderer.size/2+aw.neighborThreshold;W=(av>0)?av:0;for(var aC=0;aC<aw.gridData.length;aC++){ay=aw.gridData[aC];if(ax.constructor==B.jqplot.OHLCRenderer){if(ax.candleStick){var ad=aw._yaxis.series_u2p;if(aq>=ay[0]-ax._bodyWidth/2&&aq<=ay[0]+ax._bodyWidth/2&&ap>=ad(aw.data[aC][2])&&ap<=ad(aw.data[aC][3])){return{seriesIndex:aD,pointIndex:aC,gridData:ay,data:aw.data[aC]}}}else{if(!ax.hlc){var ad=aw._yaxis.series_u2p;if(aq>=ay[0]-ax._tickLength&&aq<=ay[0]+ax._tickLength&&ap>=ad(aw.data[aC][2])&&ap<=ad(aw.data[aC][3])){return{seriesIndex:aD,pointIndex:aC,gridData:ay,data:aw.data[aC]}}}else{var ad=aw._yaxis.series_u2p;if(aq>=ay[0]-ax._tickLength&&aq<=ay[0]+ax._tickLength&&ap>=ad(aw.data[aC][1])&&ap<=ad(aw.data[aC][2])){return{seriesIndex:aD,pointIndex:aC,gridData:ay,data:aw.data[aC]}}}}}else{aE=Math.sqrt((aq-ay[0])*(aq-ay[0])+(ap-ay[1])*(ap-ay[1]));if(aE<=W&&(aE<=aA||aA==null)){aA=aE;return{seriesIndex:aD,pointIndex:aC,gridData:ay,data:aw.data[aC]}}}}}break}}return null}this.onClick=function(W){var V=R(W);var Y=W.data.plot;var X=T(V.gridPos,Y);var U=jQuery.Event("jqplotClick");U.pageX=W.pageX;U.pageY=W.pageY;B(this).trigger(U,[V.gridPos,V.dataPos,X,Y])};this.onDblClick=function(W){var V=R(W);var Y=W.data.plot;var X=T(V.gridPos,Y);var U=jQuery.Event("jqplotDblClick");U.pageX=W.pageX;U.pageY=W.pageY;B(this).trigger(U,[V.gridPos,V.dataPos,X,Y])};this.onMouseDown=function(W){var V=R(W);var Y=W.data.plot;var X=T(V.gridPos,Y);var U=jQuery.Event("jqplotMouseDown");U.pageX=W.pageX;U.pageY=W.pageY;B(this).trigger(U,[V.gridPos,V.dataPos,X,Y])};this.onMouseUp=function(W){var V=R(W);var U=jQuery.Event("jqplotMouseUp");U.pageX=W.pageX;U.pageY=W.pageY;B(this).trigger(U,[V.gridPos,V.dataPos,null,W.data.plot])};this.onRightClick=function(W){var V=R(W);var Y=W.data.plot;var X=T(V.gridPos,Y);if(Y.captureRightClick){if(W.which==3){var U=jQuery.Event("jqplotRightClick");U.pageX=W.pageX;U.pageY=W.pageY;B(this).trigger(U,[V.gridPos,V.dataPos,X,Y])}else{var U=jQuery.Event("jqplotMouseUp");U.pageX=W.pageX;U.pageY=W.pageY;B(this).trigger(U,[V.gridPos,V.dataPos,X,Y])}}};this.onMouseMove=function(W){var V=R(W);var Y=W.data.plot;var X=T(V.gridPos,Y);var U=jQuery.Event("jqplotMouseMove");U.pageX=W.pageX;U.pageY=W.pageY;B(this).trigger(U,[V.gridPos,V.dataPos,X,Y])};this.onMouseEnter=function(W){var V=R(W);var X=W.data.plot;var U=jQuery.Event("jqplotMouseEnter");U.pageX=W.pageX;U.pageY=W.pageY;B(this).trigger(U,[V.gridPos,V.dataPos,null,X])};this.onMouseLeave=function(W){var V=R(W);var X=W.data.plot;var U=jQuery.Event("jqplotMouseLeave");U.pageX=W.pageX;U.pageY=W.pageY;B(this).trigger(U,[V.gridPos,V.dataPos,null,X])};this.drawSeries=function(W,U){var Y,X,V;U=(typeof(W)=="number"&&U==null)?W:U;W=(typeof(W)=="object")?W:{};if(U!=l){X=this.series[U];V=X.shadowCanvas._ctx;V.clearRect(0,0,V.canvas.width,V.canvas.height);X.drawShadow(V,W,this);V=X.canvas._ctx;V.clearRect(0,0,V.canvas.width,V.canvas.height);X.draw(V,W,this);if(X.renderer.constructor==B.jqplot.BezierCurveRenderer){if(U<this.series.length-1){this.drawSeries(U+1)}}}else{for(Y=0;Y<this.series.length;Y++){X=this.series[Y];V=X.shadowCanvas._ctx;V.clearRect(0,0,V.canvas.width,V.canvas.height);X.drawShadow(V,W,this);V=X.canvas._ctx;V.clearRect(0,0,V.canvas.width,V.canvas.height);X.draw(V,W,this)}}};this.moveSeriesToFront=function(V){V=parseInt(V,10);var Y=B.inArray(V,this.seriesStack);if(Y==-1){return}if(Y==this.seriesStack.length-1){this.previousSeriesStack=this.seriesStack.slice(0);return}var U=this.seriesStack[this.seriesStack.length-1];var X=this.series[V].canvas._elem.detach();var W=this.series[V].shadowCanvas._elem.detach();this.series[U].shadowCanvas._elem.after(W);this.series[U].canvas._elem.after(X);this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack.splice(Y,1);this.seriesStack.push(V)};this.moveSeriesToBack=function(V){V=parseInt(V,10);var Y=B.inArray(V,this.seriesStack);if(Y==0||Y==-1){return}var U=this.seriesStack[0];var X=this.series[V].canvas._elem.detach();var W=this.series[V].shadowCanvas._elem.detach();this.series[U].shadowCanvas._elem.before(W);this.series[U].canvas._elem.before(X);this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack.splice(Y,1);this.seriesStack.unshift(V)};this.restorePreviousSeriesOrder=function(){var Y,X,W,V,U;if(this.seriesStack==this.previousSeriesStack){return}for(Y=1;Y<this.previousSeriesStack.length;Y++){move=this.previousSeriesStack[Y];keep=this.previousSeriesStack[Y-1];W=this.series[move].canvas._elem.detach();V=this.series[move].shadowCanvas._elem.detach();this.series[keep].shadowCanvas._elem.after(V);this.series[keep].canvas._elem.after(W)}U=this.seriesStack.slice(0);this.seriesStack=this.previousSeriesStack.slice(0);this.previousSeriesStack=U};this.restoreOriginalSeriesOrder=function(){var W,V,U=[];for(W=0;W<this.series.length;W++){U.push(W)}if(this.seriesStack==U){return}this.previousSeriesStack=this.seriesStack.slice(0);this.seriesStack=U;for(W=1;W<this.seriesStack.length;W++){serelem=this.series[W].canvas._elem.detach();shadelem=this.series[W].shadowCanvas._elem.detach();this.series[W-1].shadowCanvas._elem.after(shadelem);this.series[W-1].canvas._elem.after(serelem)}};this.activateTheme=function(U){this.themeEngine.activate(this,U)}}B.jqplot.computeHighlightColors=function(R){var T;if(typeof(R)=="array"){T=[];for(var V=0;V<R.length;V++){var U=B.jqplot.getColorComponents(R[V]);var Q=[U[0],U[1],U[2]];var W=Q[0]+Q[1]+Q[2];for(var S=0;S<3;S++){Q[S]=(W>570)?Q[S]*0.8:Q[S]+0.3*(255-Q[S]);Q[S]=parseInt(Q[S],10)}T.push("rgb("+Q[0]+","+Q[1]+","+Q[2]+")")}}else{var U=B.jqplot.getColorComponents(R);var Q=[U[0],U[1],U[2]];var W=Q[0]+Q[1]+Q[2];for(var S=0;S<3;S++){Q[S]=(W>570)?Q[S]*0.8:Q[S]+0.3*(255-Q[S]);Q[S]=parseInt(Q[S],10)}T="rgb("+Q[0]+","+Q[1]+","+Q[2]+")"}return T};B.jqplot.ColorGenerator=function(R){var Q=0;this.next=function(){if(Q<R.length){return R[Q++]}else{Q=0;return R[Q++]}};this.previous=function(){if(Q>0){return R[Q--]}else{Q=R.length-1;return R[Q]}};this.get=function(T){var S=T-R.length*Math.floor(T/R.length);return R[S]};this.setColors=function(S){R=S};this.reset=function(){Q=0}};B.jqplot.hex2rgb=function(S,Q){S=S.replace("#","");if(S.length==3){S=S[0]+S[0]+S[1]+S[1]+S[2]+S[2]}var R;R="rgba("+parseInt(S.slice(0,2),16)+", "+parseInt(S.slice(2,4),16)+", "+parseInt(S.slice(4,6),16);if(Q){R+=", "+Q}R+=")";return R};B.jqplot.rgb2hex=function(U){var S=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *(?:, *[0-9.]*)?\)/;var Q=U.match(S);var T="#";for(i=1;i<4;i++){var R;if(Q[i].search(/%/)!=-1){R=parseInt(255*Q[i]/100,10).toString(16);if(R.length==1){R="0"+R}}else{R=parseInt(Q[i],10).toString(16);if(R.length==1){R="0"+R}}T+=R}return T};B.jqplot.normalize2rgb=function(R,Q){if(R.search(/^ *rgba?\(/)!=-1){return R}else{if(R.search(/^ *#?[0-9a-fA-F]?[0-9a-fA-F]/)!=-1){return B.jqplot.hex2rgb(R,Q)}else{throw"invalid color spec"}}};B.jqplot.getColorComponents=function(U){U=B.jqplot.colorKeywordMap[U]||U;var T=B.jqplot.normalize2rgb(U);var S=/rgba?\( *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *, *([0-9]{1,3}\.?[0-9]*%?) *,? *([0-9.]* *)?\)/;var Q=T.match(S);var R=[];for(i=1;i<4;i++){if(Q[i].search(/%/)!=-1){R[i-1]=parseInt(255*Q[i]/100,10)}else{R[i-1]=parseInt(Q[i],10)}}R[3]=parseFloat(Q[4])?parseFloat(Q[4]):1;return R};B.jqplot.colorKeywordMap={aliceblue:"rgb(240, 248, 255)",antiquewhite:"rgb(250, 235, 215)",aqua:"rgb( 0, 255, 255)",aquamarine:"rgb(127, 255, 212)",azure:"rgb(240, 255, 255)",beige:"rgb(245, 245, 220)",bisque:"rgb(255, 228, 196)",black:"rgb( 0, 0, 0)",blanchedalmond:"rgb(255, 235, 205)",blue:"rgb( 0, 0, 255)",blueviolet:"rgb(138, 43, 226)",brown:"rgb(165, 42, 42)",burlywood:"rgb(222, 184, 135)",cadetblue:"rgb( 95, 158, 160)",chartreuse:"rgb(127, 255, 0)",chocolate:"rgb(210, 105, 30)",coral:"rgb(255, 127, 80)",cornflowerblue:"rgb(100, 149, 237)",cornsilk:"rgb(255, 248, 220)",crimson:"rgb(220, 20, 60)",cyan:"rgb( 0, 255, 255)",darkblue:"rgb( 0, 0, 139)",darkcyan:"rgb( 0, 139, 139)",darkgoldenrod:"rgb(184, 134, 11)",darkgray:"rgb(169, 169, 169)",darkgreen:"rgb( 0, 100, 0)",darkgrey:"rgb(169, 169, 169)",darkkhaki:"rgb(189, 183, 107)",darkmagenta:"rgb(139, 0, 139)",darkolivegreen:"rgb( 85, 107, 47)",darkorange:"rgb(255, 140, 0)",darkorchid:"rgb(153, 50, 204)",darkred:"rgb(139, 0, 0)",darksalmon:"rgb(233, 150, 122)",darkseagreen:"rgb(143, 188, 143)",darkslateblue:"rgb( 72, 61, 139)",darkslategray:"rgb( 47, 79, 79)",darkslategrey:"rgb( 47, 79, 79)",darkturquoise:"rgb( 0, 206, 209)",darkviolet:"rgb(148, 0, 211)",deeppink:"rgb(255, 20, 147)",deepskyblue:"rgb( 0, 191, 255)",dimgray:"rgb(105, 105, 105)",dimgrey:"rgb(105, 105, 105)",dodgerblue:"rgb( 30, 144, 255)",firebrick:"rgb(178, 34, 34)",floralwhite:"rgb(255, 250, 240)",forestgreen:"rgb( 34, 139, 34)",fuchsia:"rgb(255, 0, 255)",gainsboro:"rgb(220, 220, 220)",ghostwhite:"rgb(248, 248, 255)",gold:"rgb(255, 215, 0)",goldenrod:"rgb(218, 165, 32)",gray:"rgb(128, 128, 128)",grey:"rgb(128, 128, 128)",green:"rgb( 0, 128, 0)",greenyellow:"rgb(173, 255, 47)",honeydew:"rgb(240, 255, 240)",hotpink:"rgb(255, 105, 180)",indianred:"rgb(205, 92, 92)",indigo:"rgb( 75, 0, 130)",ivory:"rgb(255, 255, 240)",khaki:"rgb(240, 230, 140)",lavender:"rgb(230, 230, 250)",lavenderblush:"rgb(255, 240, 245)",lawngreen:"rgb(124, 252, 0)",lemonchiffon:"rgb(255, 250, 205)",lightblue:"rgb(173, 216, 230)",lightcoral:"rgb(240, 128, 128)",lightcyan:"rgb(224, 255, 255)",lightgoldenrodyellow:"rgb(250, 250, 210)",lightgray:"rgb(211, 211, 211)",lightgreen:"rgb(144, 238, 144)",lightgrey:"rgb(211, 211, 211)",lightpink:"rgb(255, 182, 193)",lightsalmon:"rgb(255, 160, 122)",lightseagreen:"rgb( 32, 178, 170)",lightskyblue:"rgb(135, 206, 250)",lightslategray:"rgb(119, 136, 153)",lightslategrey:"rgb(119, 136, 153)",lightsteelblue:"rgb(176, 196, 222)",lightyellow:"rgb(255, 255, 224)",lime:"rgb( 0, 255, 0)",limegreen:"rgb( 50, 205, 50)",linen:"rgb(250, 240, 230)",magenta:"rgb(255, 0, 255)",maroon:"rgb(128, 0, 0)",mediumaquamarine:"rgb(102, 205, 170)",mediumblue:"rgb( 0, 0, 205)",mediumorchid:"rgb(186, 85, 211)",mediumpurple:"rgb(147, 112, 219)",mediumseagreen:"rgb( 60, 179, 113)",mediumslateblue:"rgb(123, 104, 238)",mediumspringgreen:"rgb( 0, 250, 154)",mediumturquoise:"rgb( 72, 209, 204)",mediumvioletred:"rgb(199, 21, 133)",midnightblue:"rgb( 25, 25, 112)",mintcream:"rgb(245, 255, 250)",mistyrose:"rgb(255, 228, 225)",moccasin:"rgb(255, 228, 181)",navajowhite:"rgb(255, 222, 173)",navy:"rgb( 0, 0, 128)",oldlace:"rgb(253, 245, 230)",olive:"rgb(128, 128, 0)",olivedrab:"rgb(107, 142, 35)",orange:"rgb(255, 165, 0)",orangered:"rgb(255, 69, 0)",orchid:"rgb(218, 112, 214)",palegoldenrod:"rgb(238, 232, 170)",palegreen:"rgb(152, 251, 152)",paleturquoise:"rgb(175, 238, 238)",palevioletred:"rgb(219, 112, 147)",papayawhip:"rgb(255, 239, 213)",peachpuff:"rgb(255, 218, 185)",peru:"rgb(205, 133, 63)",pink:"rgb(255, 192, 203)",plum:"rgb(221, 160, 221)",powderblue:"rgb(176, 224, 230)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",rosybrown:"rgb(188, 143, 143)",royalblue:"rgb( 65, 105, 225)",saddlebrown:"rgb(139, 69, 19)",salmon:"rgb(250, 128, 114)",sandybrown:"rgb(244, 164, 96)",seagreen:"rgb( 46, 139, 87)",seashell:"rgb(255, 245, 238)",sienna:"rgb(160, 82, 45)",silver:"rgb(192, 192, 192)",skyblue:"rgb(135, 206, 235)",slateblue:"rgb(106, 90, 205)",slategray:"rgb(112, 128, 144)",slategrey:"rgb(112, 128, 144)",snow:"rgb(255, 250, 250)",springgreen:"rgb( 0, 255, 127)",steelblue:"rgb( 70, 130, 180)",tan:"rgb(210, 180, 140)",teal:"rgb( 0, 128, 128)",thistle:"rgb(216, 191, 216)",tomato:"rgb(255, 99, 71)",turquoise:"rgb( 64, 224, 208)",violet:"rgb(238, 130, 238)",wheat:"rgb(245, 222, 179)",white:"rgb(255, 255, 255)",whitesmoke:"rgb(245, 245, 245)",yellow:"rgb(255, 255, 0)",yellowgreen:"rgb(154, 205, 50)"};B.jqplot.log=function(){if(window.console&&B.jqplot.debug){if(arguments.length==1){console.log(arguments[0])}else{console.log(arguments)}}};var e=B.jqplot.log;B.jqplot.AxisLabelRenderer=function(Q){B.jqplot.ElemContainer.call(this);this.axis;this.show=true;this.label="";this.fontFamily=null;this.fontSize=null;this.textColor=null;this._elem;this.escapeHTML=false;B.extend(true,this,Q)};B.jqplot.AxisLabelRenderer.prototype=new B.jqplot.ElemContainer();B.jqplot.AxisLabelRenderer.prototype.constructor=B.jqplot.AxisLabelRenderer;B.jqplot.AxisLabelRenderer.prototype.init=function(Q){B.extend(true,this,Q)};B.jqplot.AxisLabelRenderer.prototype.draw=function(){this._elem=B('<div style="position:absolute;" class="jqplot-'+this.axis+'-label"></div>');if(Number(this.label)){this._elem.css("white-space","nowrap")}if(!this.escapeHTML){this._elem.html(this.label)}else{this._elem.text(this.label)}if(this.fontFamily){this._elem.css("font-family",this.fontFamily)}if(this.fontSize){this._elem.css("font-size",this.fontSize)}if(this.textColor){this._elem.css("color",this.textColor)}return this._elem};B.jqplot.AxisLabelRenderer.prototype.pack=function(){};B.jqplot.AxisTickRenderer=function(Q){B.jqplot.ElemContainer.call(this);this.mark="outside";this.axis;this.showMark=true;this.showGridline=true;this.isMinorTick=false;this.size=4;this.markSize=6;this.show=true;this.showLabel=true;this.label="";this.value=null;this._styles={};this.formatter=B.jqplot.DefaultTickFormatter;this.prefix="";this.formatString="";this.fontFamily;this.fontSize;this.textColor;this._elem;B.extend(true,this,Q)};B.jqplot.AxisTickRenderer.prototype.init=function(Q){B.extend(true,this,Q)};B.jqplot.AxisTickRenderer.prototype=new B.jqplot.ElemContainer();B.jqplot.AxisTickRenderer.prototype.constructor=B.jqplot.AxisTickRenderer;B.jqplot.AxisTickRenderer.prototype.setTick=function(Q,S,R){this.value=Q;this.axis=S;if(R){this.isMinorTick=true}return this};B.jqplot.AxisTickRenderer.prototype.draw=function(){if(!this.label){this.label=this.formatter(this.formatString,this.value)}if(this.prefix&&!this.formatString){this.label=this.prefix+this.label}style='style="position:absolute;';if(Number(this.label)){style+="white-space:nowrap;"}style+='"';this._elem=B("<div "+style+' class="jqplot-'+this.axis+'-tick">'+this.label+"</div>");for(var Q in this._styles){this._elem.css(Q,this._styles[Q])}if(this.fontFamily){this._elem.css("font-family",this.fontFamily)}if(this.fontSize){this._elem.css("font-size",this.fontSize)}if(this.textColor){this._elem.css("color",this.textColor)}return this._elem};B.jqplot.DefaultTickFormatter=function(Q,R){if(typeof R=="number"){if(!Q){Q=B.jqplot.config.defaultTickFormatString}return B.jqplot.sprintf(Q,R)}else{return String(R)}};B.jqplot.AxisTickRenderer.prototype.pack=function(){};B.jqplot.CanvasGridRenderer=function(){this.shadowRenderer=new B.jqplot.ShadowRenderer()};B.jqplot.CanvasGridRenderer.prototype.init=function(R){this._ctx;B.extend(true,this,R);var Q={lineJoin:"miter",lineCap:"round",fill:false,isarc:false,angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.shadowWidth,closePath:false,strokeStyle:this.shadowColor};this.renderer.shadowRenderer.init(Q)};B.jqplot.CanvasGridRenderer.prototype.createElement=function(){var S=document.createElement("canvas");var Q=this._plotDimensions.width;var R=this._plotDimensions.height;S.width=Q;S.height=R;this._elem=B(S);this._elem.addClass("jqplot-grid-canvas");this._elem.css({position:"absolute",left:0,top:0});if(B.browser.msie){window.G_vmlCanvasManager.init_(document)}if(B.browser.msie){S=window.G_vmlCanvasManager.initElement(S)}this._top=this._offsets.top;this._bottom=R-this._offsets.bottom;this._left=this._offsets.left;this._right=Q-this._offsets.right;this._width=this._right-this._left;this._height=this._bottom-this._top;return this._elem};B.jqplot.CanvasGridRenderer.prototype.draw=function(){this._ctx=this._elem.get(0).getContext("2d");var ag=this._ctx;var Z=this._axes;ag.save();ag.clearRect(0,0,this._plotDimensions.width,this._plotDimensions.height);ag.fillStyle=this.backgroundColor||this.background;ag.fillRect(this._left,this._top,this._width,this._height);if(this.drawGridlines){ag.save();ag.lineJoin="miter";ag.lineCap="butt";ag.lineWidth=this.gridLineWidth;ag.strokeStyle=this.gridLineColor;var ab,Y;var Q=["xaxis","yaxis","x2axis","y2axis"];for(var V=4;V>0;V--){var R=Q[V-1];var T=Z[R];var ac=T._ticks;if(T.show){for(var U=ac.length;U>0;U--){var af=ac[U-1];if(af.show){var aa=Math.round(T.u2p(af.value))+0.5;switch(R){case"xaxis":if(af.showGridline){X(aa,this._top,aa,this._bottom)}if(af.showMark&&af.mark){s=af.markSize;m=af.mark;var aa=Math.round(T.u2p(af.value))+0.5;switch(m){case"outside":ab=this._bottom;Y=this._bottom+s;break;case"inside":ab=this._bottom-s;Y=this._bottom;break;case"cross":ab=this._bottom-s;Y=this._bottom+s;break;default:ab=this._bottom;Y=this._bottom+s;break}if(this.shadow){this.renderer.shadowRenderer.draw(ag,[[aa,ab],[aa,Y]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:this.gridLineWidth*0.75,depth:2,fill:false,closePath:false})}X(aa,ab,aa,Y)}break;case"yaxis":if(af.showGridline){X(this._right,aa,this._left,aa)}if(af.showMark&&af.mark){s=af.markSize;m=af.mark;var aa=Math.round(T.u2p(af.value))+0.5;switch(m){case"outside":ab=this._left-s;Y=this._left;break;case"inside":ab=this._left;Y=this._left+s;break;case"cross":ab=this._left-s;Y=this._left+s;break;default:ab=this._left-s;Y=this._left;break}if(this.shadow){this.renderer.shadowRenderer.draw(ag,[[ab,aa],[Y,aa]],{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})}X(ab,aa,Y,aa,{strokeStyle:T.borderColor})}break;case"x2axis":if(af.showGridline){X(aa,this._bottom,aa,this._top)}if(af.showMark&&af.mark){s=af.markSize;m=af.mark;var aa=Math.round(T.u2p(af.value))+0.5;switch(m){case"outside":ab=this._top-s;Y=this._top;break;case"inside":ab=this._top;Y=this._top+s;break;case"cross":ab=this._top-s;Y=this._top+s;break;default:ab=this._top-s;Y=this._top;break}if(this.shadow){this.renderer.shadowRenderer.draw(ag,[[aa,ab],[aa,Y]],{lineCap:"butt",lineWidth:this.gridLineWidth,offset:this.gridLineWidth*0.75,depth:2,fill:false,closePath:false})}X(aa,ab,aa,Y)}break;case"y2axis":if(af.showGridline){X(this._left,aa,this._right,aa)}if(af.showMark&&af.mark){s=af.markSize;m=af.mark;var aa=Math.round(T.u2p(af.value))+0.5;switch(m){case"outside":ab=this._right;Y=this._right+s;break;case"inside":ab=this._right-s;Y=this._right;break;case"cross":ab=this._right-s;Y=this._right+s;break;default:ab=this._right;Y=this._right+s;break}if(this.shadow){this.renderer.shadowRenderer.draw(ag,[[ab,aa],[Y,aa]],{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})}X(ab,aa,Y,aa,{strokeStyle:T.borderColor})}break;default:break}}}}}Q=["y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];for(var V=7;V>0;V--){var T=Z[Q[V-1]];var ac=T._ticks;if(T.show){var ae=ac[T.numberTicks-1];var W=ac[0];var S=T.getLeft();var ad=[[S,ae.getTop()+ae.getHeight()/2],[S,W.getTop()+W.getHeight()/2+1]];if(this.shadow){this.renderer.shadowRenderer.draw(ag,ad,{lineCap:"butt",fill:false,closePath:false})}X(ad[0][0],ad[0][1],ad[1][0],ad[1][1],{lineCap:"butt",strokeStyle:T.borderColor,lineWidth:T.borderWidth});for(var U=ac.length;U>0;U--){var af=ac[U-1];s=af.markSize;m=af.mark;var aa=Math.round(T.u2p(af.value))+0.5;if(af.showMark&&af.mark){switch(m){case"outside":ab=S;Y=S+s;break;case"inside":ab=S-s;Y=S;break;case"cross":ab=S-s;Y=S+s;break;default:ab=S;Y=S+s;break}ad=[[ab,aa],[Y,aa]];if(this.shadow){this.renderer.shadowRenderer.draw(ag,ad,{lineCap:"butt",lineWidth:this.gridLineWidth*1.5,offset:this.gridLineWidth*0.75,fill:false,closePath:false})}X(ab,aa,Y,aa,{strokeStyle:T.borderColor})}}}}ag.restore()}function X(al,ak,ai,ah,aj){ag.save();aj=aj||{};if(aj.lineWidth==null||aj.lineWidth!=0){B.extend(true,ag,aj);ag.beginPath();ag.moveTo(al,ak);ag.lineTo(ai,ah);ag.stroke();ag.restore()}}if(this.shadow){var ad=[[this._left,this._bottom],[this._right,this._bottom],[this._right,this._top]];this.renderer.shadowRenderer.draw(ag,ad)}if(this.borderWidth!=0&&this.drawBorder){X(this._left,this._top,this._right,this._top,{lineCap:"round",strokeStyle:Z.x2axis.borderColor,lineWidth:Z.x2axis.borderWidth});X(this._right,this._top,this._right,this._bottom,{lineCap:"round",strokeStyle:Z.y2axis.borderColor,lineWidth:Z.y2axis.borderWidth});X(this._right,this._bottom,this._left,this._bottom,{lineCap:"round",strokeStyle:Z.xaxis.borderColor,lineWidth:Z.xaxis.borderWidth});X(this._left,this._bottom,this._left,this._top,{lineCap:"round",strokeStyle:Z.yaxis.borderColor,lineWidth:Z.yaxis.borderWidth})}ag.restore()};var v=24*60*60*1000;var K=function(Q,R){Q=String(Q);while(Q.length<R){Q="0"+Q}return Q};var w={millisecond:1,second:1000,minute:60*1000,hour:60*60*1000,day:v,week:7*v,month:{add:function(S,Q){w.year.add(S,Math[Q>0?"floor":"ceil"](Q/12));var R=S.getMonth()+(Q%12);if(R==12){R=0;S.setYear(S.getFullYear()+1)}else{if(R==-1){R=11;S.setYear(S.getFullYear()-1)}}S.setMonth(R)},diff:function(U,S){var Q=U.getFullYear()-S.getFullYear();var R=U.getMonth()-S.getMonth()+(Q*12);var T=U.getDate()-S.getDate();return R+(T/30)}},year:{add:function(R,Q){R.setYear(R.getFullYear()+Math[Q>0?"floor":"ceil"](Q))},diff:function(R,Q){return w.month.diff(R,Q)/12}}};for(var J in w){if(J.substring(J.length-1)!="s"){w[J+"s"]=w[J]}}var y=function(T,S){if(Date.prototype.strftime.formatShortcuts[S]){return T.strftime(Date.prototype.strftime.formatShortcuts[S])}else{var Q=(Date.prototype.strftime.formatCodes[S]||"").split(".");var R=T["get"+Q[0]]?T["get"+Q[0]]():"";if(Q[1]){R=K(R,Q[1])}return R}};var r={succ:function(Q){return this.clone().add(1,Q)},add:function(S,R){var Q=w[R]||w.day;if(typeof Q=="number"){this.setTime(this.getTime()+(Q*S))}else{Q.add(this,S)}return this},diff:function(R,U,Q){R=Date.create(R);if(R===null){return null}var S=w[U]||w.day;if(typeof S=="number"){var T=(this.getTime()-R.getTime())/S}else{var T=S.diff(this,R)}return(Q?T:Math[T>0?"floor":"ceil"](T))},strftime:function(R){var T=R||"%Y-%m-%d",Q="",S;while(T.length>0){if(S=T.match(Date.prototype.strftime.formatCodes.matcher)){Q+=T.slice(0,S.index);Q+=(S[1]||"")+y(this,S[2]);T=T.slice(S.index+S[0].length)}else{Q+=T;T=""}}return Q},getShortYear:function(){return this.getYear()%100},getMonthNumber:function(){return this.getMonth()+1},getMonthName:function(){return Date.MONTHNAMES[this.getMonth()]},getAbbrMonthName:function(){return Date.ABBR_MONTHNAMES[this.getMonth()]},getDayName:function(){return Date.DAYNAMES[this.getDay()]},getAbbrDayName:function(){return Date.ABBR_DAYNAMES[this.getDay()]},getDayOrdinal:function(){return Date.ORDINALNAMES[this.getDate()%10]},getHours12:function(){var Q=this.getHours();return Q>12?Q-12:(Q==0?12:Q)},getAmPm:function(){return this.getHours()>=12?"PM":"AM"},getUnix:function(){return Math.round(this.getTime()/1000,0)},getGmtOffset:function(){var Q=this.getTimezoneOffset()/60;var R=Q<0?"+":"-";Q=Math.abs(Q);return R+K(Math.floor(Q),2)+":"+K((Q%1)*60,2)},getTimezoneName:function(){var Q=/(?:\((.+)\)$| ([A-Z]{3}) )/.exec(this.toString());return Q[1]||Q[2]||"GMT"+this.getGmtOffset()},toYmdInt:function(){return(this.getFullYear()*10000)+(this.getMonthNumber()*100)+this.getDate()},clone:function(){return new Date(this.getTime())}};for(var n in r){Date.prototype[n]=r[n]}var A={create:function(Q){if(Q instanceof Date){return Q}if(typeof Q=="number"){return new Date(Q)}var V=String(Q).replace(/^\s*(.+)\s*$/,"$1"),R=0,S=Date.create.patterns.length,T;var U=V;while(R<S){ms=Date.parse(U);if(!isNaN(ms)){return new Date(ms)}T=Date.create.patterns[R];if(typeof T=="function"){obj=T(U);if(obj instanceof Date){return obj}}else{U=V.replace(T[0],T[1])}R++}return NaN},MONTHNAMES:"January February March April May June July August September October November December".split(" "),ABBR_MONTHNAMES:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAYNAMES:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ABBR_DAYNAMES:"Sun Mon Tue Wed Thu Fri Sat".split(" "),ORDINALNAMES:"th st nd rd th th th th th th".split(" "),ISO:"%Y-%m-%dT%H:%M:%S.%N%G",SQL:"%Y-%m-%d %H:%M:%S",daysInMonth:function(Q,R){if(R==2){return new Date(Q,1,29).getDate()==29?29:28}return[l,31,l,31,30,31,30,31,31,30,31,30,31][R]}};for(var n in A){Date[n]=A[n]}Date.prototype.strftime.formatCodes={matcher:/()%(#?(%|[a-z]))/i,Y:"FullYear",y:"ShortYear.2",m:"MonthNumber.2","#m":"MonthNumber",B:"MonthName",b:"AbbrMonthName",d:"Date.2","#d":"Date",e:"Date",A:"DayName",a:"AbbrDayName",w:"Day",o:"DayOrdinal",H:"Hours.2","#H":"Hours",I:"Hours12.2","#I":"Hours12",p:"AmPm",M:"Minutes.2","#M":"Minutes",S:"Seconds.2","#S":"Seconds",s:"Unix",N:"Milliseconds.3","#N":"Milliseconds",O:"TimezoneOffset",Z:"TimezoneName",G:"GmtOffset"};Date.prototype.strftime.formatShortcuts={F:"%Y-%m-%d",T:"%H:%M:%S",X:"%H:%M:%S",x:"%m/%d/%y",D:"%m/%d/%y","#c":"%a %b %e %H:%M:%S %Y",v:"%e-%b-%Y",R:"%H:%M",r:"%I:%M:%S %p",t:"\t",n:"\n","%":"%"};Date.create.patterns=[[/-/g,"/"],[/st|nd|rd|th/g,""],[/(3[01]|[0-2]\d)\s*\.\s*(1[0-2]|0\d)\s*\.\s*([1-9]\d{3})/,"$2/$1/$3"],[/([1-9]\d{3})\s*-\s*(1[0-2]|0\d)\s*-\s*(3[01]|[0-2]\d)/,"$2/$3/$1"],function(T){var R=T.match(/^(?:(.+)\s+)?([012]?\d)(?:\s*\:\s*(\d\d))?(?:\s*\:\s*(\d\d(\.\d*)?))?\s*(am|pm)?\s*$/i);if(R){if(R[1]){var S=Date.create(R[1]);if(isNaN(S)){return}}else{var S=new Date();S.setMilliseconds(0)}var Q=parseFloat(R[2]);if(R[6]){Q=R[6].toLowerCase()=="am"?(Q==12?0:Q):(Q==12?12:Q+12)}S.setHours(Q,parseInt(R[3]||0,10),parseInt(R[4]||0,10),((parseFloat(R[5]||0))||0)*1000);return S}else{return T}},function(T){var R=T.match(/^(?:(.+))[T|\s+]([012]\d)(?:\:(\d\d))(?:\:(\d\d))(?:\.\d+)([\+\-]\d\d\:\d\d)$/i);if(R){if(R[1]){var S=Date.create(R[1]);if(isNaN(S)){return}}else{var S=new Date();S.setMilliseconds(0)}var Q=parseFloat(R[2]);S.setHours(Q,parseInt(R[3],10),parseInt(R[4],10),parseFloat(R[5])*1000);return S}else{return T}},function(U){var S=U.match(/^([0-3]?\d)\s*[-\/.\s]{1}\s*([a-zA-Z]{3,9})\s*[-\/.\s]{1}\s*([0-3]?\d)$/);if(S){var T=new Date();var V=parseFloat(String(T.getFullYear()).slice(2,4));var W=parseInt(String(T.getFullYear())/100,10)*100;var Y=1;var Z=parseFloat(S[1]);var X=parseFloat(S[3]);var R,Q,aa;if(Z>31){Q=S[3];if(Z<V+Y){R=W+Z}else{R=W-100+Z}}else{Q=S[1];if(X<V+Y){R=W+X}else{R=W-100+X}}var aa=B.inArray(S[2],Date.ABBR_MONTHNAMES);if(aa==-1){aa=B.inArray(S[2],Date.MONTHNAMES)}T.setFullYear(R,aa,Q);T.setHours(0,0,0,0);return T}else{return U}}];if(B.jqplot.config.debug){B.date=Date.create}B.jqplot.DivTitleRenderer=function(){};B.jqplot.DivTitleRenderer.prototype.init=function(Q){B.extend(true,this,Q)};B.jqplot.DivTitleRenderer.prototype.draw=function(){var S=this.renderer;if(!this.text){this.show=false;this._elem=B('<div class="jqplot-title" style="height:0px;width:0px;"></div>')}else{if(this.text){var R;if(this.color){R=this.color}else{if(this.textColor){R=this.textColor}}var Q="position:absolute;top:0px;left:0px;";Q+=(this._plotWidth)?"width:"+this._plotWidth+"px;":"";Q+=(this.fontSize)?"font-size:"+this.fontSize+";":"";Q+=(this.textAlign)?"text-align:"+this.textAlign+";":"text-align:center;";Q+=(R)?"color:"+R+";":"";Q+=(this.paddingBottom)?"padding-bottom:"+this.paddingBottom+";":"";this._elem=B('<div class="jqplot-title" style="'+Q+'">'+this.text+"</div>");if(this.fontFamily){this._elem.css("font-family",this.fontFamily)}}}return this._elem};B.jqplot.DivTitleRenderer.prototype.pack=function(){};B.jqplot.LineRenderer=function(){this.shapeRenderer=new B.jqplot.ShapeRenderer();this.shadowRenderer=new B.jqplot.ShadowRenderer()};B.jqplot.LineRenderer.prototype.init=function(R,V){R=R||{};var T={highlightMouseOver:R.highlightMouseOver,highlightMouseDown:R.highlightMouseDown,highlightColor:R.highlightColor};delete (R.highlightMouseOver);delete (R.highlightMouseDown);delete (R.highlightColor);B.extend(true,this.renderer,R);var U={lineJoin:"round",lineCap:"round",fill:this.fill,isarc:false,strokeStyle:this.color,fillStyle:this.fillColor,lineWidth:this.lineWidth,closePath:this.fill};this.renderer.shapeRenderer.init(U);if(this.lineWidth>2.5){var S=this.shadowOffset*(1+(Math.atan((this.lineWidth/2.5))/0.785398163-1)*0.6)}else{var S=this.shadowOffset*Math.atan((this.lineWidth/2.5))/0.785398163}var Q={lineJoin:"round",lineCap:"round",fill:this.fill,isarc:false,angle:this.shadowAngle,offset:S,alpha:this.shadowAlpha,depth:this.shadowDepth,lineWidth:this.lineWidth,closePath:this.fill};this.renderer.shadowRenderer.init(Q);this._areaPoints=[];this._boundingBox=[[],[]];if(!this.isTrendline&&this.fill){this.highlightMouseOver=true;this.highlightMouseDown=false;this.highlightColor=null;if(T.highlightMouseDown&&T.highlightMouseOver==null){T.highlightMouseOver=false}B.extend(true,this,{highlightMouseOver:T.highlightMouseOver,highlightMouseDown:T.highlightMouseDown,highlightColor:T.highlightColor});if(!this.highlightColor){this.highlightColor=B.jqplot.computeHighlightColors(this.fillColor)}if(this.highlighter){this.highlighter.show=false}V.postInitHooks.addOnce(q);V.postDrawHooks.addOnce(P);V.eventListenerHooks.addOnce("jqplotMouseMove",d);V.eventListenerHooks.addOnce("jqplotMouseDown",a);V.eventListenerHooks.addOnce("jqplotMouseUp",O);V.eventListenerHooks.addOnce("jqplotClick",c);V.eventListenerHooks.addOnce("jqplotRightClick",j)}};B.jqplot.LineRenderer.prototype.setGridData=function(V){var R=this._xaxis.series_u2p;var U=this._yaxis.series_u2p;var S=this._plotData;var T=this._prevPlotData;this.gridData=[];this._prevGridData=[];for(var Q=0;Q<this.data.length;Q++){if(S[Q][0]!=null&&S[Q][1]!=null){this.gridData.push([R.call(this._xaxis,S[Q][0]),U.call(this._yaxis,S[Q][1])])}else{if(S[Q][0]==null){this.gridData.push([null,U.call(this._yaxis,S[Q][1])])}else{if(S[Q][1]==null){this.gridData.push([R.call(this._xaxis,S[Q][0]),null])}}}if(T[Q]!=null&&T[Q][0]!=null&&T[Q][1]!=null){this._prevGridData.push([R.call(this._xaxis,T[Q][0]),U.call(this._yaxis,T[Q][1])])}else{if(T[Q]!=null&&T[Q][0]==null){this._prevGridData.push([null,U.call(this._yaxis,T[Q][1])])}else{if(T[Q]!=null&&T[Q][0]!=null&&T[Q][1]==null){this._prevGridData.push([R.call(this._xaxis,T[Q][0]),null])}}}}};B.jqplot.LineRenderer.prototype.makeGridData=function(T,V){var S=this._xaxis.series_u2p;var U=this._yaxis.series_u2p;var R=[];var W=[];for(var Q=0;Q<T.length;Q++){if(T[Q][0]!=null&&T[Q][1]!=null){R.push([S.call(this._xaxis,T[Q][0]),U.call(this._yaxis,T[Q][1])])}else{if(T[Q][0]==null){R.push([null,U.call(this._yaxis,T[Q][1])])}else{if(T[Q][1]==null){R.push([S.call(this._xaxis,T[Q][0]),null])}}}}return R};B.jqplot.LineRenderer.prototype.draw=function(af,ao,R){var aj;var Z=(R!=l)?R:{};var T=(Z.shadow!=l)?Z.shadow:this.shadow;var ap=(Z.showLine!=l)?Z.showLine:this.showLine;var ai=(Z.fill!=l)?Z.fill:this.fill;var Q=(Z.fillAndStroke!=l)?Z.fillAndStroke:this.fillAndStroke;var aa,ag,ad,ak;af.save();if(ao.length){if(ap){if(ai){if(this.fillToZero){var U=new B.jqplot.ColorGenerator(this.negativeSeriesColors);var al=U.get(this.index);if(!this.useNegativeColors){al=Z.fillStyle}var X=false;var Y=Z.fillStyle;if(Q){var an=ao.slice(0)}if(this.index==0||!this._stack){var ae=[];this._areaPoints=[];var am=this._yaxis.series_u2p(this.fillToValue);var S=this._xaxis.series_u2p(this.fillToValue);if(this.fillAxis=="y"){ae.push([ao[0][0],am]);this._areaPoints.push([ao[0][0],am]);for(var aj=0;aj<ao.length-1;aj++){ae.push(ao[aj]);this._areaPoints.push(ao[aj]);if(this._plotData[aj][1]*this._plotData[aj+1][1]<0){if(this._plotData[aj][1]<0){X=true;Z.fillStyle=al}else{X=false;Z.fillStyle=Y}var W=ao[aj][0]+(ao[aj+1][0]-ao[aj][0])*(am-ao[aj][1])/(ao[aj+1][1]-ao[aj][1]);ae.push([W,am]);this._areaPoints.push([W,am]);if(T){this.renderer.shadowRenderer.draw(af,ae,Z)}this.renderer.shapeRenderer.draw(af,ae,Z);ae=[[W,am]]}}if(this._plotData[ao.length-1][1]<0){X=true;Z.fillStyle=al}else{X=false;Z.fillStyle=Y}ae.push(ao[ao.length-1]);this._areaPoints.push(ao[ao.length-1]);ae.push([ao[ao.length-1][0],am]);this._areaPoints.push([ao[ao.length-1][0],am])}if(T){this.renderer.shadowRenderer.draw(af,ae,Z)}this.renderer.shapeRenderer.draw(af,ae,Z)}else{var ac=this._prevGridData;for(var aj=ac.length;aj>0;aj--){ao.push(ac[aj-1])}if(T){this.renderer.shadowRenderer.draw(af,ao,Z)}this._areaPoints=ao;this.renderer.shapeRenderer.draw(af,ao,Z)}}else{if(Q){var an=ao.slice(0)}if(this.index==0||!this._stack){var V=af.canvas.height;ao.unshift([ao[0][0],V]);len=ao.length;ao.push([ao[len-1][0],V])}else{var ac=this._prevGridData;for(var aj=ac.length;aj>0;aj--){ao.push(ac[aj-1])}}this._areaPoints=ao;if(T){this.renderer.shadowRenderer.draw(af,ao,Z)}this.renderer.shapeRenderer.draw(af,ao,Z)}if(Q){var ah=B.extend(true,{},Z,{fill:false,closePath:false});this.renderer.shapeRenderer.draw(af,an,ah);if(this.markerRenderer.show){for(aj=0;aj<an.length;aj++){this.markerRenderer.draw(an[aj][0],an[aj][1],af,Z.markerOptions)}}}}else{if(T){this.renderer.shadowRenderer.draw(af,ao,Z)}this.renderer.shapeRenderer.draw(af,ao,Z)}}var aa=ad=ag=ak=null;for(aj=0;aj<this._areaPoints.length;aj++){var ab=this._areaPoints[aj];if(aa>ab[0]||aa==null){aa=ab[0]}if(ak<ab[1]||ak==null){ak=ab[1]}if(ad<ab[0]||ad==null){ad=ab[0]}if(ag>ab[1]||ag==null){ag=ab[1]}}this._boundingBox=[[aa,ak],[ad,ag]];if(this.markerRenderer.show&&!ai){for(aj=0;aj<ao.length;aj++){if(ao[aj][0]!=null&&ao[aj][1]!=null){this.markerRenderer.draw(ao[aj][0],ao[aj][1],af,Z.markerOptions)}}}}af.restore()};B.jqplot.LineRenderer.prototype.drawShadow=function(Q,S,R){};function q(S,R,Q){for(i=0;i<this.series.length;i++){if(this.series[i].renderer.constructor==B.jqplot.LineRenderer){if(this.series[i].highlightMouseOver){this.series[i].highlightMouseDown=false}}}this.target.bind("mouseout",{plot:this},function(T){M(T.data.plot)})}function P(){this.plugins.lineRenderer={highlightedSeriesIndex:null};this.plugins.lineRenderer.highlightCanvas=new B.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.lineRenderer.highlightCanvas.createElement(this._gridPadding,"jqplot-lineRenderer-highlight-canvas",this._plotDimensions));var Q=this.plugins.lineRenderer.highlightCanvas.setContext()}function N(W,V,T,S){var R=W.series[V];var Q=W.plugins.lineRenderer.highlightCanvas;Q._ctx.clearRect(0,0,Q._ctx.canvas.width,Q._ctx.canvas.height);R._highlightedPoint=T;W.plugins.lineRenderer.highlightedSeriesIndex=V;var U={fillStyle:R.highlightColor};R.renderer.shapeRenderer.draw(Q._ctx,S,U)}function M(S){var Q=S.plugins.lineRenderer.highlightCanvas;Q._ctx.clearRect(0,0,Q._ctx.canvas.width,Q._ctx.canvas.height);for(var R=0;R<S.series.length;R++){S.series[R]._highlightedPoint=null}S.plugins.lineRenderer.highlightedSeriesIndex=null;S.target.trigger("jqplotDataUnhighlight")}function d(U,T,X,W,V){if(W){var S=[W.seriesIndex,W.pointIndex,W.data];var R=jQuery.Event("jqplotDataMouseOver");R.pageX=U.pageX;R.pageY=U.pageY;V.target.trigger(R,S);if(V.series[S[0]].highlightMouseOver&&!(S[0]==V.plugins.lineRenderer.highlightedSeriesIndex)){var Q=jQuery.Event("jqplotDataHighlight");Q.pageX=U.pageX;Q.pageY=U.pageY;V.target.trigger(Q,S);N(V,W.seriesIndex,W.pointIndex,W.points)}}else{if(W==null){M(V)}}}function a(T,S,W,V,U){if(V){var R=[V.seriesIndex,V.pointIndex,V.data];if(U.series[R[0]].highlightMouseDown&&!(R[0]==U.plugins.lineRenderer.highlightedSeriesIndex)){var Q=jQuery.Event("jqplotDataHighlight");Q.pageX=T.pageX;Q.pageY=T.pageY;U.target.trigger(Q,R);N(U,V.seriesIndex,V.pointIndex,V.points)}}else{if(V==null){M(U)}}}function O(S,R,V,U,T){var Q=T.plugins.lineRenderer.highlightedSeriesIndex;if(Q!=null&&T.series[Q].highlightMouseDown){M(T)}}function c(T,S,W,V,U){if(V){var R=[V.seriesIndex,V.pointIndex,V.data];var Q=jQuery.Event("jqplotDataClick");Q.pageX=T.pageX;Q.pageY=T.pageY;U.target.trigger(Q,R)}}function j(U,T,X,W,V){if(W){var S=[W.seriesIndex,W.pointIndex,W.data];var Q=V.plugins.lineRenderer.highlightedSeriesIndex;if(Q!=null&&V.series[Q].highlightMouseDown){M(V)}var R=jQuery.Event("jqplotDataRightClick");R.pageX=U.pageX;R.pageY=U.pageY;V.target.trigger(R,S)}}B.jqplot.LinearAxisRenderer=function(){};B.jqplot.LinearAxisRenderer.prototype.init=function(S){B.extend(true,this,S);var Q=this._dataBounds;for(var T=0;T<this._series.length;T++){var U=this._series[T];var V=U._plotData;for(var R=0;R<V.length;R++){if(this.name=="xaxis"||this.name=="x2axis"){if((V[R][0]!=null&&V[R][0]<Q.min)||Q.min==null){Q.min=V[R][0]}if((V[R][0]!=null&&V[R][0]>Q.max)||Q.max==null){Q.max=V[R][0]}}else{if((V[R][1]!=null&&V[R][1]<Q.min)||Q.min==null){Q.min=V[R][1]}if((V[R][1]!=null&&V[R][1]>Q.max)||Q.max==null){Q.max=V[R][1]}}}}};B.jqplot.LinearAxisRenderer.prototype.draw=function(Q){if(this.show){this.renderer.createTicks.call(this);var W=0;var R;if(this._elem){this._elem.empty()}this._elem=B('<div class="jqplot-axis jqplot-'+this.name+'" style="position:absolute;"></div>');if(this.name=="xaxis"||this.name=="x2axis"){this._elem.width(this._plotDimensions.width)}else{this._elem.height(this._plotDimensions.height)}this.labelOptions.axis=this.name;this._label=new this.labelRenderer(this.labelOptions);if(this._label.show){var V=this._label.draw(Q);V.appendTo(this._elem)}if(this.showTicks){var U=this._ticks;for(var T=0;T<U.length;T++){var S=U[T];if(S.showLabel&&(!S.isMinorTick||this.showMinorTicks)){var V=S.draw(Q);V.appendTo(this._elem)}}}}return this._elem};B.jqplot.LinearAxisRenderer.prototype.reset=function(){this.min=this._min;this.max=this._max;this.tickInterval=this._tickInterval;this.numberTicks=this._numberTicks};B.jqplot.LinearAxisRenderer.prototype.set=function(){var X=0;var S;var R=0;var W=0;var Q=(this._label==null)?false:this._label.show;if(this.show&&this.showTicks){var V=this._ticks;for(var U=0;U<V.length;U++){var T=V[U];if(T.showLabel&&(!T.isMinorTick||this.showMinorTicks)){if(this.name=="xaxis"||this.name=="x2axis"){S=T._elem.outerHeight(true)}else{S=T._elem.outerWidth(true)}if(S>X){X=S}}}if(Q){R=this._label._elem.outerWidth(true);W=this._label._elem.outerHeight(true)}if(this.name=="xaxis"){X=X+W;this._elem.css({height:X+"px",left:"0px",bottom:"0px"})}else{if(this.name=="x2axis"){X=X+W;this._elem.css({height:X+"px",left:"0px",top:"0px"})}else{if(this.name=="yaxis"){X=X+R;this._elem.css({width:X+"px",left:"0px",top:"0px"});if(Q&&this._label.constructor==B.jqplot.AxisLabelRenderer){this._label._elem.css("width",R+"px")}}else{X=X+R;this._elem.css({width:X+"px",right:"0px",top:"0px"});if(Q&&this._label.constructor==B.jqplot.AxisLabelRenderer){this._label._elem.css("width",R+"px")}}}}}};B.jqplot.LinearAxisRenderer.prototype.createTicks=function(){var at=this._ticks;var am=this.ticks;var ad=this.name;var af=this._dataBounds;var Q,U;var aF,ak;var W,V;var aD,aA;var aj=this.min;var aE=this.max;var aw=this.numberTicks;var aI=this.tickInterval;if(am.length){for(aA=0;aA<am.length;aA++){var ap=am[aA];var au=new this.tickRenderer(this.tickOptions);if(ap.constructor==Array){au.value=ap[0];au.label=ap[1];if(!this.showTicks){au.showLabel=false;au.showMark=false}else{if(!this.showTickMarks){au.showMark=false}}au.setTick(ap[0],this.name);this._ticks.push(au)}else{au.value=ap;if(!this.showTicks){au.showLabel=false;au.showMark=false}else{if(!this.showTickMarks){au.showMark=false}}au.setTick(ap,this.name);this._ticks.push(au)}}this.numberTicks=am.length;this.min=this._ticks[0].value;this.max=this._ticks[this.numberTicks-1].value;this.tickInterval=(this.max-this.min)/(this.numberTicks-1)}else{if(ad=="xaxis"||ad=="x2axis"){Q=this._plotDimensions.width}else{Q=this._plotDimensions.height}if(!this.autoscale&&this.min!=null&&this.max!=null&&this.numberTicks!=null){this.tickInterval=null}aF=((this.min!=null)?this.min:af.min);ak=((this.max!=null)?this.max:af.max);if(aF==ak){var R=0.05;if(aF>0){R=Math.max(Math.log(aF)/Math.LN10,0.05)}aF-=R;ak+=R}var ab=ak-aF;var aq,ac;var Z;if(this.autoscale&&this.min==null&&this.max==null){var S,T,Y;var ag=false;var ao=false;var ae={min:null,max:null,average:null,stddev:null};for(var aA=0;aA<this._series.length;aA++){var av=this._series[aA];var ah=(av.fillAxis=="x")?av._xaxis.name:av._yaxis.name;if(this.name==ah){var ar=av._plotValues[av.fillAxis];var ai=ar[0];var aB=ar[0];for(var az=1;az<ar.length;az++){if(ar[az]<ai){ai=ar[az]}else{if(ar[az]>aB){aB=ar[az]}}}var aa=(aB-ai)/aB;if(av.renderer.constructor==B.jqplot.BarRenderer){if(ai>=0&&(av.fillToZero||aa>0.1)){ag=true}else{ag=false;if(av.fill&&av.fillToZero&&ai<0&&aB>0){ao=true}else{ao=false}}}else{if(av.fill){if(ai>=0&&(av.fillToZero||aa>0.1)){ag=true}else{if(ai<0&&aB>0&&av.fillToZero){ag=false;ao=true}else{ag=false;ao=false}}}else{if(ai<0){ag=false}}}}}if(ag){this.numberTicks=2+Math.ceil((Q-(this.tickSpacing-1))/this.tickSpacing);this.min=0;aj=0;T=ak/(this.numberTicks-1);Z=Math.pow(10,Math.abs(Math.floor(Math.log(T)/Math.LN10)));if(T/Z==parseInt(T/Z,10)){T+=Z}this.tickInterval=Math.ceil(T/Z)*Z;this.max=this.tickInterval*(this.numberTicks-1)}else{if(ao){this.numberTicks=2+Math.ceil((Q-(this.tickSpacing-1))/this.tickSpacing);var al=Math.ceil(Math.abs(aF)/ab*(this.numberTicks-1));var aH=this.numberTicks-1-al;T=Math.max(Math.abs(aF/al),Math.abs(ak/aH));Z=Math.pow(10,Math.abs(Math.floor(Math.log(T)/Math.LN10)));this.tickInterval=Math.ceil(T/Z)*Z;this.max=this.tickInterval*aH;this.min=-this.tickInterval*al}else{if(this.numberTicks==null){if(this.tickInterval){this.numberTicks=3+Math.ceil(ab/this.tickInterval)}else{this.numberTicks=2+Math.ceil((Q-(this.tickSpacing-1))/this.tickSpacing)}}if(this.tickInterval==null){T=ab/(this.numberTicks-1);if(T<1){Z=Math.pow(10,Math.abs(Math.floor(Math.log(T)/Math.LN10)))}else{Z=1}this.tickInterval=Math.ceil(T*Z*this.pad)/Z}else{Z=1/this.tickInterval}S=this.tickInterval*(this.numberTicks-1);Y=(S-ab)/2;if(this.min==null){this.min=Math.floor(Z*(aF-Y))/Z}if(this.max==null){this.max=this.min+S}}}}else{aq=(this.min!=null)?this.min:aF-ab*(this.padMin-1);ac=(this.max!=null)?this.max:ak+ab*(this.padMax-1);this.min=aq;this.max=ac;ab=this.max-this.min;if(this.numberTicks==null){if(this.tickInterval!=null){this.numberTicks=Math.ceil((this.max-this.min)/this.tickInterval)+1;this.max=this.min+this.tickInterval*(this.numberTicks-1)}else{if(Q>100){this.numberTicks=parseInt(3+(Q-100)/75,10)}else{this.numberTicks=2}}}if(this.tickInterval==null){this.tickInterval=ab/(this.numberTicks-1)}}if(this.renderer.constructor==B.jqplot.LinearAxisRenderer){ab=this.max-this.min;var aG=new this.tickRenderer(this.tickOptions);var an=aG.formatString||B.jqplot.config.defaultTickFormatString;var an=an.match(B.jqplot.sprintf.regex)[0];var aC=0;if(an){if(an.search(/[fFeEgGpP]/)>-1){var ay=an.match(/\%\.(\d{0,})?[eEfFgGpP]/);if(ay){aC=parseInt(ay[1],10)}else{aC=6}}else{if(an.search(/[di]/)>-1){aC=0}}var X=Math.pow(10,-aC);if(this.tickInterval<X){if(aw==null&&aI==null){this.tickInterval=X;if(aE==null&&aj==null){this.min=Math.floor(this._dataBounds.min/X)*X;if(this.min==this._dataBounds.min){this.min=this._dataBounds.min-this.tickInterval}this.max=Math.ceil(this._dataBounds.max/X)*X;if(this.max==this._dataBounds.max){this.max=this._dataBounds.max+this.tickInterval}var ax=(this.max-this.min)/this.tickInterval;ax=ax.toFixed(11);ax=Math.ceil(ax);this.numberTicks=ax+1}else{if(aE==null){var ax=(this._dataBounds.max-this.min)/this.tickInterval;ax=ax.toFixed(11);this.numberTicks=Math.ceil(ax)+2;this.max=this.min+this.tickInterval*(this.numberTicks-1)}else{if(aj==null){var ax=(this.max-this._dataBounds.min)/this.tickInterval;ax=ax.toFixed(11);this.numberTicks=Math.ceil(ax)+2;this.min=this.max-this.tickInterval*(this.numberTicks-1)}else{this.numberTicks=Math.ceil((aE-aj)/this.tickInterval)+1;this.min=Math.floor(aj*Math.pow(10,aC))/Math.pow(10,aC);this.max=Math.ceil(aE*Math.pow(10,aC))/Math.pow(10,aC);this.numberTicks=Math.ceil((this.max-this.min)/this.tickInterval)+1}}}}}}}for(var aA=0;aA<this.numberTicks;aA++){aD=this.min+aA*this.tickInterval;var au=new this.tickRenderer(this.tickOptions);if(!this.showTicks){au.showLabel=false;au.showMark=false}else{if(!this.showTickMarks){au.showMark=false}}au.setTick(aD,this.name);this._ticks.push(au)}}};B.jqplot.LinearAxisRenderer.prototype.pack=function(Z,U){var ac=this._ticks;var aa=this.max;var W=this.min;var T=U.max;var ag=U.min;var X=(this._label==null)?false:this._label.show;for(var Q in Z){this._elem.css(Q,Z[Q])}this._offsets=U;var S=T-ag;var af=aa-W;this.p2u=function(ah){return(ah-ag)*af/S+W};this.u2p=function(ah){return(ah-W)*S/af+ag};if(this.name=="xaxis"||this.name=="x2axis"){this.series_u2p=function(ah){return(ah-W)*S/af};this.series_p2u=function(ah){return ah*af/S+W}}else{this.series_u2p=function(ah){return(ah-aa)*S/af};this.series_p2u=function(ah){return ah*af/S+aa}}if(this.show){if(this.name=="xaxis"||this.name=="x2axis"){for(i=0;i<ac.length;i++){var ae=ac[i];if(ae.show&&ae.showLabel){var V;if(ae.constructor==B.jqplot.CanvasAxisTickRenderer&&ae.angle){var ad=(this.name=="xaxis")?1:-1;switch(ae.labelPosition){case"auto":if(ad*ae.angle<0){V=-ae.getWidth()+ae._textRenderer.height*Math.sin(-ae._textRenderer.angle)/2}else{V=-ae._textRenderer.height*Math.sin(ae._textRenderer.angle)/2}break;case"end":V=-ae.getWidth()+ae._textRenderer.height*Math.sin(-ae._textRenderer.angle)/2;break;case"start":V=-ae._textRenderer.height*Math.sin(ae._textRenderer.angle)/2;break;case"middle":V=-ae.getWidth()/2+ae._textRenderer.height*Math.sin(-ae._textRenderer.angle)/2;break;default:V=-ae.getWidth()/2+ae._textRenderer.height*Math.sin(-ae._textRenderer.angle)/2;break}}else{V=-ae.getWidth()/2}var R=this.u2p(ae.value)+V+"px";ae._elem.css("left",R);ae.pack()}}if(X){var ab=this._label._elem.outerWidth(true);this._label._elem.css("left",ag+S/2-ab/2+"px");if(this.name=="xaxis"){this._label._elem.css("bottom","0px")}else{this._label._elem.css("top","0px")}this._label.pack()}}else{for(i=0;i<ac.length;i++){var ae=ac[i];if(ae.show&&ae.showLabel){var V;if(ae.constructor==B.jqplot.CanvasAxisTickRenderer&&ae.angle){var ad=(this.name=="yaxis")?1:-1;switch(ae.labelPosition){case"auto":case"end":if(ad*ae.angle<0){V=-ae._textRenderer.height*Math.cos(-ae._textRenderer.angle)/2}else{V=-ae.getHeight()+ae._textRenderer.height*Math.cos(ae._textRenderer.angle)/2}break;case"start":if(ae.angle>0){V=-ae._textRenderer.height*Math.cos(-ae._textRenderer.angle)/2}else{V=-ae.getHeight()+ae._textRenderer.height*Math.cos(ae._textRenderer.angle)/2}break;case"middle":V=-ae.getHeight()/2;break;default:V=-ae.getHeight()/2;break}}else{V=-ae.getHeight()/2}var R=this.u2p(ae.value)+V+"px";ae._elem.css("top",R);ae.pack()}}if(X){var Y=this._label._elem.outerHeight(true);this._label._elem.css("top",T-S/2-Y/2+"px");if(this.name=="yaxis"){this._label._elem.css("left","0px")}else{this._label._elem.css("right","0px")}this._label.pack()}}}};B.jqplot.MarkerRenderer=function(Q){this.show=true;this.style="filledCircle";this.lineWidth=2;this.size=9;this.color="#666666";this.shadow=true;this.shadowAngle=45;this.shadowOffset=1;this.shadowDepth=3;this.shadowAlpha="0.07";this.shadowRenderer=new B.jqplot.ShadowRenderer();this.shapeRenderer=new B.jqplot.ShapeRenderer();B.extend(true,this,Q)};B.jqplot.MarkerRenderer.prototype.init=function(Q){B.extend(true,this,Q);var S={angle:this.shadowAngle,offset:this.shadowOffset,alpha:this.shadowAlpha,lineWidth:this.lineWidth,depth:this.shadowDepth,closePath:true};if(this.style.indexOf("filled")!=-1){S.fill=true}if(this.style.indexOf("ircle")!=-1){S.isarc=true;S.closePath=false}this.shadowRenderer.init(S);var R={fill:false,isarc:false,strokeStyle:this.color,fillStyle:this.color,lineWidth:this.lineWidth,closePath:true};if(this.style.indexOf("filled")!=-1){R.fill=true}if(this.style.indexOf("ircle")!=-1){R.isarc=true;R.closePath=false}this.shapeRenderer.init(R)};B.jqplot.MarkerRenderer.prototype.drawDiamond=function(S,R,V,U,X){var Q=1.2;var Y=this.size/2/Q;var W=this.size/2*Q;var T=[[S-Y,R],[S,R+W],[S+Y,R],[S,R-W]];if(this.shadow){this.shadowRenderer.draw(V,T)}this.shapeRenderer.draw(V,T,X)};B.jqplot.MarkerRenderer.prototype.drawPlus=function(T,S,W,V,Z){var R=1;var aa=this.size/2*R;var X=this.size/2*R;var Y=[[T,S-X],[T,S+X]];var U=[[T+aa,S],[T-aa,S]];var Q=B.extend(true,{},this.options,{closePath:false});if(this.shadow){this.shadowRenderer.draw(W,Y,{closePath:false});this.shadowRenderer.draw(W,U,{closePath:false})}this.shapeRenderer.draw(W,Y,Q);this.shapeRenderer.draw(W,U,Q)};B.jqplot.MarkerRenderer.prototype.drawX=function(T,S,W,V,Z){var R=1;var aa=this.size/2*R;var X=this.size/2*R;var Q=B.extend(true,{},this.options,{closePath:false});var Y=[[T-aa,S-X],[T+aa,S+X]];var U=[[T-aa,S+X],[T+aa,S-X]];if(this.shadow){this.shadowRenderer.draw(W,Y,{closePath:false});this.shadowRenderer.draw(W,U,{closePath:false})}this.shapeRenderer.draw(W,Y,Q);this.shapeRenderer.draw(W,U,Q)};B.jqplot.MarkerRenderer.prototype.drawDash=function(S,R,V,U,X){var Q=1;var Y=this.size/2*Q;var W=this.size/2*Q;var T=[[S-Y,R],[S+Y,R]];if(this.shadow){this.shadowRenderer.draw(V,T)}this.shapeRenderer.draw(V,T,X)};B.jqplot.MarkerRenderer.prototype.drawSquare=function(S,R,V,U,X){var Q=1;var Y=this.size/2/Q;var W=this.size/2*Q;var T=[[S-Y,R-W],[S-Y,R+W],[S+Y,R+W],[S+Y,R-W]];if(this.shadow){this.shadowRenderer.draw(V,T)}this.shapeRenderer.draw(V,T,X)};B.jqplot.MarkerRenderer.prototype.drawCircle=function(R,X,T,W,U){var Q=this.size/2;var S=2*Math.PI;var V=[R,X,Q,0,S,true];if(this.shadow){this.shadowRenderer.draw(T,V)}this.shapeRenderer.draw(T,V,U)};B.jqplot.MarkerRenderer.prototype.draw=function(Q,T,R,S){S=S||{};if(S.show==null||S.show!=false){if(S.color&&!S.fillStyle){S.fillStyle=S.color}if(S.color&&!S.strokeStyle){S.strokeStyle=S.color}switch(this.style){case"diamond":this.drawDiamond(Q,T,R,false,S);break;case"filledDiamond":this.drawDiamond(Q,T,R,true,S);break;case"circle":this.drawCircle(Q,T,R,false,S);break;case"filledCircle":this.drawCircle(Q,T,R,true,S);break;case"square":this.drawSquare(Q,T,R,false,S);break;case"filledSquare":this.drawSquare(Q,T,R,true,S);break;case"x":this.drawX(Q,T,R,true,S);break;case"plus":this.drawPlus(Q,T,R,true,S);break;case"dash":this.drawDash(Q,T,R,true,S);break;default:this.drawDiamond(Q,T,R,false,S);break}}};B.jqplot.ShadowRenderer=function(Q){this.angle=45;this.offset=1;this.alpha=0.07;this.lineWidth=1.5;this.lineJoin="miter";this.lineCap="round";this.closePath=false;this.fill=false;this.depth=3;this.strokeStyle="rgba(0,0,0,0.1)";this.isarc=false;B.extend(true,this,Q)};B.jqplot.ShadowRenderer.prototype.init=function(Q){B.extend(true,this,Q)};B.jqplot.ShadowRenderer.prototype.draw=function(Z,X,ab){Z.save();var Q=(ab!=null)?ab:{};var Y=(Q.fill!=null)?Q.fill:this.fill;var W=(Q.closePath!=null)?Q.closePath:this.closePath;var T=(Q.offset!=null)?Q.offset:this.offset;var R=(Q.alpha!=null)?Q.alpha:this.alpha;var V=(Q.depth!=null)?Q.depth:this.depth;var aa=(Q.isarc!=null)?Q.isarc:this.isarc;Z.lineWidth=(Q.lineWidth!=null)?Q.lineWidth:this.lineWidth;Z.lineJoin=(Q.lineJoin!=null)?Q.lineJoin:this.lineJoin;Z.lineCap=(Q.lineCap!=null)?Q.lineCap:this.lineCap;Z.strokeStyle=Q.strokeStyle||this.strokeStyle||"rgba(0,0,0,"+R+")";Z.fillStyle=Q.fillStyle||this.fillStyle||"rgba(0,0,0,"+R+")";for(var S=0;S<V;S++){Z.translate(Math.cos(this.angle*Math.PI/180)*T,Math.sin(this.angle*Math.PI/180)*T);Z.beginPath();if(aa){Z.arc(X[0],X[1],X[2],X[3],X[4],true)}else{Z.moveTo(X[0][0],X[0][1]);for(var U=1;U<X.length;U++){if(X[U][0]!=null&&X[U][1]!=null){Z.lineTo(X[U][0],X[U][1])}else{U++;if(U<X.length){Z.moveTo(X[U][0],X[U][1])}}}}if(W){Z.closePath()}if(Y){Z.fill()}else{Z.stroke()}}Z.restore()};B.jqplot.ShapeRenderer=function(Q){this.lineWidth=1.5;this.lineJoin="miter";this.lineCap="round";this.closePath=false;this.fill=false;this.isarc=false;this.fillRect=false;this.strokeRect=false;this.clearRect=false;this.strokeStyle="#999999";this.fillStyle="#999999";B.extend(true,this,Q)};B.jqplot.ShapeRenderer.prototype.init=function(Q){B.extend(true,this,Q)};B.jqplot.ShapeRenderer.prototype.draw=function(Y,W,aa){Y.save();var Q=(aa!=null)?aa:{};var X=(Q.fill!=null)?Q.fill:this.fill;var U=(Q.closePath!=null)?Q.closePath:this.closePath;var V=(Q.fillRect!=null)?Q.fillRect:this.fillRect;var S=(Q.strokeRect!=null)?Q.strokeRect:this.strokeRect;var R=(Q.clearRect!=null)?Q.clearRect:this.clearRect;var Z=(Q.isarc!=null)?Q.isarc:this.isarc;Y.lineWidth=Q.lineWidth||this.lineWidth;Y.lineJoin=Q.lineJoing||this.lineJoin;Y.lineCap=Q.lineCap||this.lineCap;Y.strokeStyle=(Q.strokeStyle||Q.color)||this.strokeStyle;Y.fillStyle=Q.fillStyle||this.fillStyle;Y.beginPath();if(Z){Y.arc(W[0],W[1],W[2],W[3],W[4],true);if(U){Y.closePath()}if(X){Y.fill()}else{Y.stroke()}Y.restore();return}else{if(R){Y.clearRect(W[0],W[1],W[2],W[3]);Y.restore();return}else{if(V||S){if(V){Y.fillRect(W[0],W[1],W[2],W[3])}if(S){Y.strokeRect(W[0],W[1],W[2],W[3]);Y.restore();return}}else{Y.moveTo(W[0][0],W[0][1]);for(var T=1;T<W.length;T++){if(W[T][0]!=null&&W[T][1]!=null){Y.lineTo(W[T][0],W[T][1])}else{T++;if(T<W.length){Y.moveTo(W[T][0],W[T][1])}}}if(U){Y.closePath()}if(X){Y.fill()}else{Y.stroke()}}}}Y.restore()};B.jqplot.TableLegendRenderer=function(){};B.jqplot.TableLegendRenderer.prototype.init=function(Q){B.extend(true,this,Q)};B.jqplot.TableLegendRenderer.prototype.addrow=function(T,R,W,S){var Q=(W)?this.rowSpacing:"0";if(S){var V=B('<tr class="jqplot-table-legend"></tr>').prependTo(this._elem)}else{var V=B('<tr class="jqplot-table-legend"></tr>').appendTo(this._elem)}if(this.showSwatches){B('<td class="jqplot-table-legend" style="text-align:center;padding-top:'+Q+';"><div><div class="jqplot-table-legend-swatch" style="background-color:'+R+";border-color:"+R+';"></div></div></td>').appendTo(V)}if(this.showLabels){var U=B('<td class="jqplot-table-legend" style="padding-top:'+Q+';"></td>');U.appendTo(V);if(this.escapeHtml){U.text(T)}else{U.html(T)}}};B.jqplot.TableLegendRenderer.prototype.draw=function(){var X=this;if(this.show){var U=this._series;var Z="position:absolute;";Z+=(this.background)?"background:"+this.background+";":"";Z+=(this.border)?"border:"+this.border+";":"";Z+=(this.fontSize)?"font-size:"+this.fontSize+";":"";Z+=(this.fontFamily)?"font-family:"+this.fontFamily+";":"";Z+=(this.textColor)?"color:"+this.textColor+";":"";Z+=(this.marginTop!=null)?"margin-top:"+this.marginTop+";":"";Z+=(this.marginBottom!=null)?"margin-bottom:"+this.marginBottom+";":"";Z+=(this.marginLeft!=null)?"margin-left:"+this.marginLeft+";":"";Z+=(this.marginRight!=null)?"margin-right:"+this.marginRight+";":"";this._elem=B('<table class="jqplot-table-legend" style="'+Z+'"></table>');var Q=false,W=false;for(var V=0;V<U.length;V++){s=U[V];if(s._stack||s.renderer.constructor==B.jqplot.BezierCurveRenderer){W=true}if(s.show&&s.showLabel){var T=this.labels[V]||s.label.toString();if(T){var R=s.color;if(W&&V<U.length-1){Q=true}else{if(W&&V==U.length-1){Q=false}}this.renderer.addrow.call(this,T,R,Q,W);Q=true}for(var S=0;S<B.jqplot.addLegendRowHooks.length;S++){var Y=B.jqplot.addLegendRowHooks[S].call(this,s);if(Y){this.renderer.addrow.call(this,Y.label,Y.color,Q);Q=true}}}}}return this._elem};B.jqplot.TableLegendRenderer.prototype.pack=function(S){if(this.show){if(this.placement=="insideGrid"){switch(this.location){case"nw":var R=S.left;var Q=S.top;this._elem.css("left",R);this._elem.css("top",Q);break;case"n":var R=(S.left+(this._plotDimensions.width-S.right))/2-this.getWidth()/2;var Q=S.top;this._elem.css("left",R);this._elem.css("top",Q);break;case"ne":var R=S.right;var Q=S.top;this._elem.css({right:R,top:Q});break;case"e":var R=S.right;var Q=(S.top+(this._plotDimensions.height-S.bottom))/2-this.getHeight()/2;this._elem.css({right:R,top:Q});break;case"se":var R=S.right;var Q=S.bottom;this._elem.css({right:R,bottom:Q});break;case"s":var R=(S.left+(this._plotDimensions.width-S.right))/2-this.getWidth()/2;var Q=S.bottom;this._elem.css({left:R,bottom:Q});break;case"sw":var R=S.left;var Q=S.bottom;this._elem.css({left:R,bottom:Q});break;case"w":var R=S.left;var Q=(S.top+(this._plotDimensions.height-S.bottom))/2-this.getHeight()/2;this._elem.css({left:R,top:Q});break;default:var R=S.right;var Q=S.bottom;this._elem.css({right:R,bottom:Q});break}}else{if(this.placement=="outside"){switch(this.location){case"nw":var R=this._plotDimensions.width-S.left;var Q=S.top;this._elem.css("right",R);this._elem.css("top",Q);break;case"n":var R=(S.left+(this._plotDimensions.width-S.right))/2-this.getWidth()/2;var Q=this._plotDimensions.height-S.top;this._elem.css("left",R);this._elem.css("bottom",Q);break;case"ne":var R=this._plotDimensions.width-S.right;var Q=S.top;this._elem.css({left:R,top:Q});break;case"e":var R=this._plotDimensions.width-S.right;var Q=(S.top+(this._plotDimensions.height-S.bottom))/2-this.getHeight()/2;this._elem.css({left:R,top:Q});break;case"se":var R=this._plotDimensions.width-S.right;var Q=S.bottom;this._elem.css({left:R,bottom:Q});break;case"s":var R=(S.left+(this._plotDimensions.width-S.right))/2-this.getWidth()/2;var Q=this._plotDimensions.height-S.bottom;this._elem.css({left:R,top:Q});break;case"sw":var R=this._plotDimensions.width-S.left;var Q=S.bottom;this._elem.css({right:R,bottom:Q});break;case"w":var R=this._plotDimensions.width-S.left;var Q=(S.top+(this._plotDimensions.height-S.bottom))/2-this.getHeight()/2;this._elem.css({right:R,top:Q});break;default:var R=S.right;var Q=S.bottom;this._elem.css({right:R,bottom:Q});break}}else{switch(this.location){case"nw":this._elem.css({left:0,top:S.top});break;case"n":var R=(S.left+(this._plotDimensions.width-S.right))/2-this.getWidth()/2;this._elem.css({left:R,top:S.top});break;case"ne":this._elem.css({right:0,top:S.top});break;case"e":var Q=(S.top+(this._plotDimensions.height-S.bottom))/2-this.getHeight()/2;this._elem.css({right:S.right,top:Q});break;case"se":this._elem.css({right:S.right,bottom:S.bottom});break;case"s":var R=(S.left+(this._plotDimensions.width-S.right))/2-this.getWidth()/2;this._elem.css({left:R,bottom:S.bottom});break;case"sw":this._elem.css({left:S.left,bottom:S.bottom});break;case"w":var Q=(S.top+(this._plotDimensions.height-S.bottom))/2-this.getHeight()/2;this._elem.css({left:S.left,top:Q});break;default:this._elem.css({right:S.right,bottom:S.bottom});break}}}}};B.jqplot.ThemeEngine=function(){this.themes={};this.activeTheme=null};B.jqplot.ThemeEngine.prototype.init=function(){var T=new B.jqplot.Theme({_name:"Default"});var V,R;for(V in T.target){if(V=="textColor"){T.target[V]=this.target.css("color")}else{T.target[V]=this.target.css(V)}}if(this.title.show&&this.title._elem){for(V in T.title){if(V=="textColor"){T.title[V]=this.title._elem.css("color")}else{T.title[V]=this.title._elem.css(V)}}}for(V in T.grid){T.grid[V]=this.grid[V]}if(T.grid.backgroundColor==null&&this.grid.background!=null){T.grid.backgroundColor=this.grid.background}if(this.legend.show&&this.legend._elem){for(V in T.legend){if(V=="textColor"){T.legend[V]=this.legend._elem.css("color")}else{T.legend[V]=this.legend._elem.css(V)}}}var S;for(R=0;R<this.series.length;R++){S=this.series[R];if(S.renderer.constructor==B.jqplot.LineRenderer){T.series.push(new h())}else{if(S.renderer.constructor==B.jqplot.BarRenderer){T.series.push(new H())}else{if(S.renderer.constructor==B.jqplot.PieRenderer){T.series.push(new b())}else{if(S.renderer.constructor==B.jqplot.DonutRenderer){T.series.push(new x())}else{if(S.renderer.constructor==B.jqplot.FunnelRenderer){T.series.push(new L())}else{if(S.renderer.constructor==B.jqplot.MeterGaugeRenderer){T.series.push(new u())}else{T.series.push({})}}}}}}for(V in T.series[R]){T.series[R][V]=S[V]}}var Q,U;for(V in this.axes){U=this.axes[V];Q=T.axes[V]=new E();Q.borderColor=U.borderColor;Q.borderWidth=U.borderWidth;if(U._ticks&&U._ticks[0]){for(nn in Q.ticks){if(U._ticks[0].hasOwnProperty(nn)){Q.ticks[nn]=U._ticks[0][nn]}else{if(U._ticks[0]._elem){Q.ticks[nn]=U._ticks[0]._elem.css(nn)}}}}if(U._label&&U._label.show){for(nn in Q.label){if(U._label[nn]){Q.label[nn]=U._label[nn]}else{if(U._label._elem){if(nn=="textColor"){Q.label[nn]=U._label._elem.css("color")}else{Q.label[nn]=U._label._elem.css(nn)}}}}}}this.themeEngine._add(T);this.themeEngine.activeTheme=this.themeEngine.themes[T._name]};B.jqplot.ThemeEngine.prototype.get=function(Q){if(!Q){return this.activeTheme}else{return this.themes[Q]}};function D(R,Q){return R-Q}B.jqplot.ThemeEngine.prototype.getThemeNames=function(){var Q=[];for(var R in this.themes){Q.push(R)}return Q.sort(D)};B.jqplot.ThemeEngine.prototype.getThemes=function(){var R=[];var Q=[];for(var T in this.themes){R.push(T)}R.sort(D);for(var S=0;S<R.length;S++){Q.push(this.themes[R[S]])}return Q};B.jqplot.ThemeEngine.prototype.activate=function(ab,T){var ag=false;if(!T&&this.activeTheme&&this.activeTheme._name){T=this.activeTheme._name}if(!this.themes.hasOwnProperty(T)){throw new Error("No theme of that name")}else{var U=this.themes[T];this.activeTheme=U;var W,af=false,ac=false;var aa=["xaxis","x2axis","yaxis","y2axis"];for(Z=0;Z<aa.length;Z++){var S=aa[Z];if(U.axesStyles.borderColor!=null){ab.axes[S].borderColor=U.axesStyles.borderColor}if(U.axesStyles.borderWidth!=null){ab.axes[S].borderWidth=U.axesStyles.borderWidth}}for(axname in ab.axes){var X=ab.axes[axname];if(X.show){var ae=U.axes[axname]||{};var R=U.axesStyles;var Y=B.jqplot.extend(true,{},ae,R);W=(U.axesStyles.borderColor!=null)?U.axesStyles.borderColor:Y.borderColor;if(Y.borderColor!=null){X.borderColor=Y.borderColor;ag=true}W=(U.axesStyles.borderWidth!=null)?U.axesStyles.borderWidth:Y.borderWidth;if(Y.borderWidth!=null){X.borderWidth=Y.borderWidth;ag=true}if(X._ticks&&X._ticks[0]){for(nn in Y.ticks){W=Y.ticks[nn];if(W!=null){X.tickOptions[nn]=W;X._ticks=[];ag=true}}}if(X._label&&X._label.show){for(nn in Y.label){W=Y.label[nn];if(W!=null){X.labelOptions[nn]=W;ag=true}}}}}for(var V in U.grid){if(U.grid[V]!=null){ab.grid[V]=U.grid[V]}}if(!ag){ab.grid.draw()}if(ab.legend.show){for(V in U.legend){if(U.legend[V]!=null){ab.legend[V]=U.legend[V]}}}if(ab.title.show){for(V in U.title){if(U.title[V]!=null){ab.title[V]=U.title[V]}}}var Z;for(Z=0;Z<U.series.length;Z++){var Q={};var ad=false;for(V in U.series[Z]){W=(U.seriesStyles[V]!=null)?U.seriesStyles[V]:U.series[Z][V];if(W!=null){Q[V]=W;if(V=="color"){ab.series[Z].renderer.shapeRenderer.fillStyle=W;ab.series[Z].renderer.shapeRenderer.strokeStyle=W;ab.series[Z][V]=W}else{if(V=="lineWidth"){ab.series[Z].renderer.shapeRenderer.lineWidth=W;ab.series[Z][V]=W}else{if(V=="markerOptions"){I(ab.series[Z].markerOptions,W);I(ab.series[Z].markerRenderer,W)}else{ab.series[Z][V]=W}}}ag=true}}}if(ag){ab.target.empty();ab.draw()}for(V in U.target){if(U.target[V]!=null){ab.target.css(V,U.target[V])}}}};B.jqplot.ThemeEngine.prototype._add=function(R,Q){if(Q){R._name=Q}if(!R._name){R._name=Date.parse(new Date())}if(!this.themes.hasOwnProperty(R._name)){this.themes[R._name]=R}else{throw new Error("jqplot.ThemeEngine Error: Theme already in use")}};B.jqplot.ThemeEngine.prototype.remove=function(Q){if(Q=="Default"){return false}return delete this.themes[Q]};B.jqplot.ThemeEngine.prototype.newTheme=function(Q,S){if(typeof(Q)=="object"){S=S||Q;Q=null}if(S&&S._name){Q=S._name}else{Q=Q||Date.parse(new Date())}var R=this.copy(this.themes.Default._name,Q);B.jqplot.extend(R,S);return R};function t(S){if(S==null||typeof(S)!="object"){return S}var Q=new S.constructor();for(var R in S){Q[R]=t(S[R])}return Q}B.jqplot.clone=t;function I(S,R){if(R==null||typeof(R)!="object"){return}for(var Q in R){if(Q=="highlightColors"){S[Q]=t(R[Q])}if(R[Q]!=null&&typeof(R[Q])=="object"){if(!S.hasOwnProperty(Q)){S[Q]={}}I(S[Q],R[Q])}else{S[Q]=R[Q]}}}B.jqplot.merge=I;B.jqplot.extend=function(){var V=arguments[0]||{},T=1,U=arguments.length,Q=false,S;if(typeof V==="boolean"){Q=V;V=arguments[1]||{};T=2}if(typeof V!=="object"&&!toString.call(V)==="[object Function]"){V={}}for(;T<U;T++){if((S=arguments[T])!=null){for(var R in S){var W=V[R],X=S[R];if(V===X){continue}if(Q&&X&&typeof X==="object"&&!X.nodeType){V[R]=B.jqplot.extend(Q,W||(X.length!=null?[]:{}),X)}else{if(X!==l){V[R]=X}}}}}return V};B.jqplot.ThemeEngine.prototype.rename=function(R,Q){if(R=="Default"||Q=="Default"){throw new Error("jqplot.ThemeEngine Error: Cannot rename from/to Default")}if(this.themes.hasOwnProperty(Q)){throw new Error("jqplot.ThemeEngine Error: New name already in use.")}else{if(this.themes.hasOwnProperty(R)){var S=this.copy(R,Q);this.remove(R);return S}}throw new Error("jqplot.ThemeEngine Error: Old name or new name invalid")};B.jqplot.ThemeEngine.prototype.copy=function(Q,S,U){if(S=="Default"){throw new Error("jqplot.ThemeEngine Error: Cannot copy over Default theme")}if(!this.themes.hasOwnProperty(Q)){var R="jqplot.ThemeEngine Error: Source name invalid";throw new Error(R)}if(this.themes.hasOwnProperty(S)){var R="jqplot.ThemeEngine Error: Target name invalid";throw new Error(R)}else{var T=t(this.themes[Q]);T._name=S;B.jqplot.extend(true,T,U);this._add(T);return T}};B.jqplot.Theme=function(Q,R){if(typeof(Q)=="object"){R=R||Q;Q=null}Q=Q||Date.parse(new Date());this._name=Q;this.target={backgroundColor:null};this.legend={textColor:null,fontFamily:null,fontSize:null,border:null,background:null};this.title={textColor:null,fontFamily:null,fontSize:null,textAlign:null};this.seriesStyles={};this.series=[];this.grid={drawGridlines:null,gridLineColor:null,gridLineWidth:null,backgroundColor:null,borderColor:null,borderWidth:null,shadow:null};this.axesStyles={label:{},ticks:{}};this.axes={};if(typeof(R)=="string"){this._name=R}else{if(typeof(R)=="object"){B.jqplot.extend(true,this,R)}}};var E=function(){this.borderColor=null;this.borderWidth=null;this.ticks=new f();this.label=new k()};var f=function(){this.show=null;this.showGridline=null;this.showLabel=null;this.showMark=null;this.size=null;this.textColor=null;this.whiteSpace=null;this.fontSize=null;this.fontFamily=null};var k=function(){this.textColor=null;this.whiteSpace=null;this.fontSize=null;this.fontFamily=null;this.fontWeight=null};var h=function(){this.color=null;this.lineWidth=null;this.shadow=null;this.fillColor=null;this.showMarker=null;this.markerOptions=new z()};var z=function(){this.show=null;this.style=null;this.lineWidth=null;this.size=null;this.color=null;this.shadow=null};var H=function(){this.color=null;this.seriesColors=null;this.lineWidth=null;this.shadow=null;this.barPadding=null;this.barMargin=null;this.barWidth=null;this.highlightColors=null};var b=function(){this.seriesColors=null;this.padding=null;this.sliceMargin=null;this.fill=null;this.shadow=null;this.startAngle=null;this.lineWidth=null;this.highlightColors=null};var x=function(){this.seriesColors=null;this.padding=null;this.sliceMargin=null;this.fill=null;this.shadow=null;this.startAngle=null;this.lineWidth=null;this.innerDiameter=null;this.thickness=null;this.ringMargin=null;this.highlightColors=null};var L=function(){this.color=null;this.lineWidth=null;this.shadow=null;this.padding=null;this.sectionMargin=null;this.seriesColors=null;this.highlightColors=null};var u=function(){this.padding=null;this.backgroundColor=null;this.ringColor=null;this.tickColor=null;this.ringWidth=null;this.intervalColors=null;this.intervalInnerRadius=null;this.intervalOuterRadius=null;this.hubRadius=null;this.needleThickness=null;this.needlePad=null};B.jqplot.sprintf=function(){function V(ab,X,Y,aa){var Z=(ab.length>=X)?"":Array(1+X-ab.length>>>0).join(Y);return aa?ab+Z:Z+ab}function S(ac,ab,ae,Z,aa,Y){var ad=Z-ac.length;if(ad>0){var X=" ";if(Y){X="&nbsp;"}if(ae||!aa){ac=V(ac,Z,X,ae)}else{ac=ac.slice(0,ab.length)+V("",ad,"0",true)+ac.slice(ab.length)}}return ac}function W(af,Y,ad,Z,X,ac,ae,ab){var aa=af>>>0;ad=ad&&aa&&{"2":"0b","8":"0","16":"0x"}[Y]||"";af=ad+V(aa.toString(Y),ac||0,"0",false);return S(af,ad,Z,X,ae,ab)}function Q(ab,ac,Z,X,aa,Y){if(X!=null){ab=ab.slice(0,X)}return S(ab,"",ac,Z,aa,Y)}var R=arguments,T=0,U=R[T++];return U.replace(B.jqplot.sprintf.regex,function(aq,ad,ae,ah,at,ao,ab){if(aq=="%%"){return"%"}var ai=false,af="",ag=false,ap=false,ac=false;for(var an=0;ae&&an<ae.length;an++){switch(ae.charAt(an)){case" ":af=" ";break;case"+":af="+";break;case"-":ai=true;break;case"0":ag=true;break;case"#":ap=true;break;case"&":ac=true;break}}if(!ah){ah=0}else{if(ah=="*"){ah=+R[T++]}else{if(ah.charAt(0)=="*"){ah=+R[ah.slice(1,-1)]}else{ah=+ah}}}if(ah<0){ah=-ah;ai=true}if(!isFinite(ah)){throw new Error("$.jqplot.sprintf: (minimum-)width must be finite")}if(!ao){ao="fFeE".indexOf(ab)>-1?6:(ab=="d")?0:void (0)}else{if(ao=="*"){ao=+R[T++]}else{if(ao.charAt(0)=="*"){ao=+R[ao.slice(1,-1)]}else{ao=+ao}}}var ak=ad?R[ad.slice(0,-1)]:R[T++];switch(ab){case"s":if(ak==null){return""}return Q(String(ak),ai,ah,ao,ag,ac);case"c":return Q(String.fromCharCode(+ak),ai,ah,ao,ag,ac);case"b":return W(ak,2,ap,ai,ah,ao,ag,ac);case"o":return W(ak,8,ap,ai,ah,ao,ag,ac);case"x":return W(ak,16,ap,ai,ah,ao,ag,ac);case"X":return W(ak,16,ap,ai,ah,ao,ag,ac).toUpperCase();case"u":return W(ak,10,ap,ai,ah,ao,ag,ac);case"i":var Z=parseInt(+ak,10);if(isNaN(Z)){return""}var am=Z<0?"-":af;ak=am+V(String(Math.abs(Z)),ao,"0",false);return S(ak,am,ai,ah,ag,ac);case"d":var Z=Math.round(+ak);if(isNaN(Z)){return""}var am=Z<0?"-":af;ak=am+V(String(Math.abs(Z)),ao,"0",false);return S(ak,am,ai,ah,ag,ac);case"e":case"E":case"f":case"F":case"g":case"G":var Z=+ak;if(isNaN(Z)){return""}var am=Z<0?"-":af;var aa=["toExponential","toFixed","toPrecision"]["efg".indexOf(ab.toLowerCase())];var ar=["toString","toUpperCase"]["eEfFgG".indexOf(ab)%2];ak=am+Math.abs(Z)[aa](ao);return S(ak,am,ai,ah,ag,ac)[ar]();case"p":case"P":var Z=+ak;if(isNaN(Z)){return""}var am=Z<0?"-":af;var aj=String(Number(Math.abs(Z)).toExponential()).split(/e|E/);var Y=(aj[0].indexOf(".")!=-1)?aj[0].length-1:aj[0].length;var al=(aj[1]<0)?-aj[1]-1:0;if(Math.abs(Z)<1){if(Y+al<=ao){ak=am+Math.abs(Z).toPrecision(Y)}else{if(Y<=ao-1){ak=am+Math.abs(Z).toExponential(Y-1)}else{ak=am+Math.abs(Z).toExponential(ao-1)}}}else{var X=(Y<=ao)?Y:ao;ak=am+Math.abs(Z).toPrecision(X)}var ar=["toString","toUpperCase"]["pP".indexOf(ab)%2];return S(ak,am,ai,ah,ag,ac)[ar]();case"n":return"";default:return aq}})};B.jqplot.sprintf.regex=/%%|%(\d+\$)?([-+#0& ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([nAscboxXuidfegpEGP])/g})(jQuery);/**
 * Copyright (c) 2009 - 2010 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot  or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * jqPlot includes date instance methods and printf/sprintf functions by other authors:
 *
 * Date instance methods contained in jqplot.dateMethods.js:
 *
 *     author Ken Snyder (ken d snyder at gmail dot com)
 *     date 2008-09-10
 *     version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 *     license Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * JavaScript printf/sprintf functions contained in jqplot.sprintf.js:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function(a){a.jqplot.CanvasTextRenderer=function(b){this.fontStyle="normal";this.fontVariant="normal";this.fontWeight="normal";this.fontSize="10px";this.fontFamily="sans-serif";this.fontStretch=1;this.fillStyle="#666666";this.angle=0;this.textAlign="start";this.textBaseline="alphabetic";this.text;this.width;this.height;this.pt2px=1.28;a.extend(true,this,b);this.normalizedFontSize=this.normalizeFontSize(this.fontSize);this.setHeight()};a.jqplot.CanvasTextRenderer.prototype.init=function(b){a.extend(true,this,b);this.normalizedFontSize=this.normalizeFontSize(this.fontSize);this.setHeight()};a.jqplot.CanvasTextRenderer.prototype.normalizeFontSize=function(b){b=String(b);n=parseFloat(b);if(b.indexOf("px")>-1){return n/this.pt2px}else{if(b.indexOf("pt")>-1){return n}else{if(b.indexOf("em")>-1){return n*12}else{if(b.indexOf("%")>-1){return n*12/100}else{return n/this.pt2px}}}}};a.jqplot.CanvasTextRenderer.prototype.fontWeight2Float=function(b){if(Number(b)){return b/400}else{switch(b){case"normal":return 1;break;case"bold":return 1.75;break;case"bolder":return 2.25;break;case"lighter":return 0.75;break;default:return 1;break}}};a.jqplot.CanvasTextRenderer.prototype.getText=function(){return this.text};a.jqplot.CanvasTextRenderer.prototype.setText=function(c,b){this.text=c;this.setWidth(b);return this};a.jqplot.CanvasTextRenderer.prototype.getWidth=function(b){return this.width};a.jqplot.CanvasTextRenderer.prototype.setWidth=function(c,b){if(!b){this.width=this.measure(c,this.text)}else{this.width=b}return this};a.jqplot.CanvasTextRenderer.prototype.getHeight=function(b){return this.height};a.jqplot.CanvasTextRenderer.prototype.setHeight=function(b){if(!b){this.height=this.normalizedFontSize*this.pt2px}else{this.height=b}return this};a.jqplot.CanvasTextRenderer.prototype.letter=function(b){return this.letters[b]};a.jqplot.CanvasTextRenderer.prototype.ascent=function(){return this.normalizedFontSize};a.jqplot.CanvasTextRenderer.prototype.descent=function(){return 7*this.normalizedFontSize/25};a.jqplot.CanvasTextRenderer.prototype.measure=function(d,f){var e=0;var b=f.length;for(i=0;i<b;i++){var g=this.letter(f.charAt(i));if(g){e+=g.width*this.normalizedFontSize/25*this.fontStretch}}return e};a.jqplot.CanvasTextRenderer.prototype.draw=function(t,o){var s=0;var p=this.height*0.72;var q=0;var l=o.length;var k=this.normalizedFontSize/25;t.save();var h,f;if((-Math.PI/2<=this.angle&&this.angle<=0)||(Math.PI*3/2<=this.angle&&this.angle<=Math.PI*2)){h=0;f=-Math.sin(this.angle)*this.width}else{if((0<this.angle&&this.angle<=Math.PI/2)||(-Math.PI*2<=this.angle&&this.angle<=-Math.PI*3/2)){h=Math.sin(this.angle)*this.height;f=0}else{if((-Math.PI<this.angle&&this.angle<-Math.PI/2)||(Math.PI<=this.angle&&this.angle<=Math.PI*3/2)){h=-Math.cos(this.angle)*this.width;f=-Math.sin(this.angle)*this.width-Math.cos(this.angle)*this.height}else{if((-Math.PI*3/2<this.angle&&this.angle<Math.PI)||(Math.PI/2<this.angle&&this.angle<Math.PI)){h=Math.sin(this.angle)*this.height-Math.cos(this.angle)*this.width;f=-Math.cos(this.angle)*this.height}}}}t.strokeStyle=this.fillStyle;t.fillStyle=this.fillStyle;t.translate(h,f);t.rotate(this.angle);t.lineCap="round";var u=(this.normalizedFontSize>30)?2:2+(30-this.normalizedFontSize)/20;t.lineWidth=u*k*this.fontWeight2Float(this.fontWeight);for(var g=0;g<l;g++){var m=this.letter(o.charAt(g));if(!m){continue}t.beginPath();var e=1;var b=0;for(var d=0;d<m.points.length;d++){var r=m.points[d];if(r[0]==-1&&r[1]==-1){e=1;continue}if(e){t.moveTo(s+r[0]*k*this.fontStretch,p-r[1]*k);e=false}else{t.lineTo(s+r[0]*k*this.fontStretch,p-r[1]*k)}}t.stroke();s+=m.width*k*this.fontStretch}t.restore();return q};a.jqplot.CanvasTextRenderer.prototype.letters={" ":{width:16,points:[]},"!":{width:10,points:[[5,21],[5,7],[-1,-1],[5,2],[4,1],[5,0],[6,1],[5,2]]},'"':{width:16,points:[[4,21],[4,14],[-1,-1],[12,21],[12,14]]},"#":{width:21,points:[[11,25],[4,-7],[-1,-1],[17,25],[10,-7],[-1,-1],[4,12],[18,12],[-1,-1],[3,6],[17,6]]},"$":{width:20,points:[[8,25],[8,-4],[-1,-1],[12,25],[12,-4],[-1,-1],[17,18],[15,20],[12,21],[8,21],[5,20],[3,18],[3,16],[4,14],[5,13],[7,12],[13,10],[15,9],[16,8],[17,6],[17,3],[15,1],[12,0],[8,0],[5,1],[3,3]]},"%":{width:24,points:[[21,21],[3,0],[-1,-1],[8,21],[10,19],[10,17],[9,15],[7,14],[5,14],[3,16],[3,18],[4,20],[6,21],[8,21],[10,20],[13,19],[16,19],[19,20],[21,21],[-1,-1],[17,7],[15,6],[14,4],[14,2],[16,0],[18,0],[20,1],[21,3],[21,5],[19,7],[17,7]]},"&":{width:26,points:[[23,12],[23,13],[22,14],[21,14],[20,13],[19,11],[17,6],[15,3],[13,1],[11,0],[7,0],[5,1],[4,2],[3,4],[3,6],[4,8],[5,9],[12,13],[13,14],[14,16],[14,18],[13,20],[11,21],[9,20],[8,18],[8,16],[9,13],[11,10],[16,3],[18,1],[20,0],[22,0],[23,1],[23,2]]},"'":{width:10,points:[[5,19],[4,20],[5,21],[6,20],[6,18],[5,16],[4,15]]},"(":{width:14,points:[[11,25],[9,23],[7,20],[5,16],[4,11],[4,7],[5,2],[7,-2],[9,-5],[11,-7]]},")":{width:14,points:[[3,25],[5,23],[7,20],[9,16],[10,11],[10,7],[9,2],[7,-2],[5,-5],[3,-7]]},"*":{width:16,points:[[8,21],[8,9],[-1,-1],[3,18],[13,12],[-1,-1],[13,18],[3,12]]},"+":{width:26,points:[[13,18],[13,0],[-1,-1],[4,9],[22,9]]},",":{width:10,points:[[6,1],[5,0],[4,1],[5,2],[6,1],[6,-1],[5,-3],[4,-4]]},"-":{width:18,points:[[6,9],[12,9]]},".":{width:10,points:[[5,2],[4,1],[5,0],[6,1],[5,2]]},"/":{width:22,points:[[20,25],[2,-7]]},"0":{width:20,points:[[9,21],[6,20],[4,17],[3,12],[3,9],[4,4],[6,1],[9,0],[11,0],[14,1],[16,4],[17,9],[17,12],[16,17],[14,20],[11,21],[9,21]]},"1":{width:20,points:[[6,17],[8,18],[11,21],[11,0]]},"2":{width:20,points:[[4,16],[4,17],[5,19],[6,20],[8,21],[12,21],[14,20],[15,19],[16,17],[16,15],[15,13],[13,10],[3,0],[17,0]]},"3":{width:20,points:[[5,21],[16,21],[10,13],[13,13],[15,12],[16,11],[17,8],[17,6],[16,3],[14,1],[11,0],[8,0],[5,1],[4,2],[3,4]]},"4":{width:20,points:[[13,21],[3,7],[18,7],[-1,-1],[13,21],[13,0]]},"5":{width:20,points:[[15,21],[5,21],[4,12],[5,13],[8,14],[11,14],[14,13],[16,11],[17,8],[17,6],[16,3],[14,1],[11,0],[8,0],[5,1],[4,2],[3,4]]},"6":{width:20,points:[[16,18],[15,20],[12,21],[10,21],[7,20],[5,17],[4,12],[4,7],[5,3],[7,1],[10,0],[11,0],[14,1],[16,3],[17,6],[17,7],[16,10],[14,12],[11,13],[10,13],[7,12],[5,10],[4,7]]},"7":{width:20,points:[[17,21],[7,0],[-1,-1],[3,21],[17,21]]},"8":{width:20,points:[[8,21],[5,20],[4,18],[4,16],[5,14],[7,13],[11,12],[14,11],[16,9],[17,7],[17,4],[16,2],[15,1],[12,0],[8,0],[5,1],[4,2],[3,4],[3,7],[4,9],[6,11],[9,12],[13,13],[15,14],[16,16],[16,18],[15,20],[12,21],[8,21]]},"9":{width:20,points:[[16,14],[15,11],[13,9],[10,8],[9,8],[6,9],[4,11],[3,14],[3,15],[4,18],[6,20],[9,21],[10,21],[13,20],[15,18],[16,14],[16,9],[15,4],[13,1],[10,0],[8,0],[5,1],[4,3]]},":":{width:10,points:[[5,14],[4,13],[5,12],[6,13],[5,14],[-1,-1],[5,2],[4,1],[5,0],[6,1],[5,2]]},";":{width:10,points:[[5,14],[4,13],[5,12],[6,13],[5,14],[-1,-1],[6,1],[5,0],[4,1],[5,2],[6,1],[6,-1],[5,-3],[4,-4]]},"<":{width:24,points:[[20,18],[4,9],[20,0]]},"=":{width:26,points:[[4,12],[22,12],[-1,-1],[4,6],[22,6]]},">":{width:24,points:[[4,18],[20,9],[4,0]]},"?":{width:18,points:[[3,16],[3,17],[4,19],[5,20],[7,21],[11,21],[13,20],[14,19],[15,17],[15,15],[14,13],[13,12],[9,10],[9,7],[-1,-1],[9,2],[8,1],[9,0],[10,1],[9,2]]},"@":{width:27,points:[[18,13],[17,15],[15,16],[12,16],[10,15],[9,14],[8,11],[8,8],[9,6],[11,5],[14,5],[16,6],[17,8],[-1,-1],[12,16],[10,14],[9,11],[9,8],[10,6],[11,5],[-1,-1],[18,16],[17,8],[17,6],[19,5],[21,5],[23,7],[24,10],[24,12],[23,15],[22,17],[20,19],[18,20],[15,21],[12,21],[9,20],[7,19],[5,17],[4,15],[3,12],[3,9],[4,6],[5,4],[7,2],[9,1],[12,0],[15,0],[18,1],[20,2],[21,3],[-1,-1],[19,16],[18,8],[18,6],[19,5]]},A:{width:18,points:[[9,21],[1,0],[-1,-1],[9,21],[17,0],[-1,-1],[4,7],[14,7]]},B:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[13,21],[16,20],[17,19],[18,17],[18,15],[17,13],[16,12],[13,11],[-1,-1],[4,11],[13,11],[16,10],[17,9],[18,7],[18,4],[17,2],[16,1],[13,0],[4,0]]},C:{width:21,points:[[18,16],[17,18],[15,20],[13,21],[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5]]},D:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[11,21],[14,20],[16,18],[17,16],[18,13],[18,8],[17,5],[16,3],[14,1],[11,0],[4,0]]},E:{width:19,points:[[4,21],[4,0],[-1,-1],[4,21],[17,21],[-1,-1],[4,11],[12,11],[-1,-1],[4,0],[17,0]]},F:{width:18,points:[[4,21],[4,0],[-1,-1],[4,21],[17,21],[-1,-1],[4,11],[12,11]]},G:{width:21,points:[[18,16],[17,18],[15,20],[13,21],[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5],[18,8],[-1,-1],[13,8],[18,8]]},H:{width:22,points:[[4,21],[4,0],[-1,-1],[18,21],[18,0],[-1,-1],[4,11],[18,11]]},I:{width:8,points:[[4,21],[4,0]]},J:{width:16,points:[[12,21],[12,5],[11,2],[10,1],[8,0],[6,0],[4,1],[3,2],[2,5],[2,7]]},K:{width:21,points:[[4,21],[4,0],[-1,-1],[18,21],[4,7],[-1,-1],[9,12],[18,0]]},L:{width:17,points:[[4,21],[4,0],[-1,-1],[4,0],[16,0]]},M:{width:24,points:[[4,21],[4,0],[-1,-1],[4,21],[12,0],[-1,-1],[20,21],[12,0],[-1,-1],[20,21],[20,0]]},N:{width:22,points:[[4,21],[4,0],[-1,-1],[4,21],[18,0],[-1,-1],[18,21],[18,0]]},O:{width:22,points:[[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5],[19,8],[19,13],[18,16],[17,18],[15,20],[13,21],[9,21]]},P:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[13,21],[16,20],[17,19],[18,17],[18,14],[17,12],[16,11],[13,10],[4,10]]},Q:{width:22,points:[[9,21],[7,20],[5,18],[4,16],[3,13],[3,8],[4,5],[5,3],[7,1],[9,0],[13,0],[15,1],[17,3],[18,5],[19,8],[19,13],[18,16],[17,18],[15,20],[13,21],[9,21],[-1,-1],[12,4],[18,-2]]},R:{width:21,points:[[4,21],[4,0],[-1,-1],[4,21],[13,21],[16,20],[17,19],[18,17],[18,15],[17,13],[16,12],[13,11],[4,11],[-1,-1],[11,11],[18,0]]},S:{width:20,points:[[17,18],[15,20],[12,21],[8,21],[5,20],[3,18],[3,16],[4,14],[5,13],[7,12],[13,10],[15,9],[16,8],[17,6],[17,3],[15,1],[12,0],[8,0],[5,1],[3,3]]},T:{width:16,points:[[8,21],[8,0],[-1,-1],[1,21],[15,21]]},U:{width:22,points:[[4,21],[4,6],[5,3],[7,1],[10,0],[12,0],[15,1],[17,3],[18,6],[18,21]]},V:{width:18,points:[[1,21],[9,0],[-1,-1],[17,21],[9,0]]},W:{width:24,points:[[2,21],[7,0],[-1,-1],[12,21],[7,0],[-1,-1],[12,21],[17,0],[-1,-1],[22,21],[17,0]]},X:{width:20,points:[[3,21],[17,0],[-1,-1],[17,21],[3,0]]},Y:{width:18,points:[[1,21],[9,11],[9,0],[-1,-1],[17,21],[9,11]]},Z:{width:20,points:[[17,21],[3,0],[-1,-1],[3,21],[17,21],[-1,-1],[3,0],[17,0]]},"[":{width:14,points:[[4,25],[4,-7],[-1,-1],[5,25],[5,-7],[-1,-1],[4,25],[11,25],[-1,-1],[4,-7],[11,-7]]},"\\":{width:14,points:[[0,21],[14,-3]]},"]":{width:14,points:[[9,25],[9,-7],[-1,-1],[10,25],[10,-7],[-1,-1],[3,25],[10,25],[-1,-1],[3,-7],[10,-7]]},"^":{width:16,points:[[6,15],[8,18],[10,15],[-1,-1],[3,12],[8,17],[13,12],[-1,-1],[8,17],[8,0]]},_:{width:16,points:[[0,-2],[16,-2]]},"`":{width:10,points:[[6,21],[5,20],[4,18],[4,16],[5,15],[6,16],[5,17]]},a:{width:19,points:[[15,14],[15,0],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},b:{width:19,points:[[4,21],[4,0],[-1,-1],[4,11],[6,13],[8,14],[11,14],[13,13],[15,11],[16,8],[16,6],[15,3],[13,1],[11,0],[8,0],[6,1],[4,3]]},c:{width:18,points:[[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},d:{width:19,points:[[15,21],[15,0],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},e:{width:18,points:[[3,8],[15,8],[15,10],[14,12],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},f:{width:12,points:[[10,21],[8,21],[6,20],[5,17],[5,0],[-1,-1],[2,14],[9,14]]},g:{width:19,points:[[15,14],[15,-2],[14,-5],[13,-6],[11,-7],[8,-7],[6,-6],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},h:{width:19,points:[[4,21],[4,0],[-1,-1],[4,10],[7,13],[9,14],[12,14],[14,13],[15,10],[15,0]]},i:{width:8,points:[[3,21],[4,20],[5,21],[4,22],[3,21],[-1,-1],[4,14],[4,0]]},j:{width:10,points:[[5,21],[6,20],[7,21],[6,22],[5,21],[-1,-1],[6,14],[6,-3],[5,-6],[3,-7],[1,-7]]},k:{width:17,points:[[4,21],[4,0],[-1,-1],[14,14],[4,4],[-1,-1],[8,8],[15,0]]},l:{width:8,points:[[4,21],[4,0]]},m:{width:30,points:[[4,14],[4,0],[-1,-1],[4,10],[7,13],[9,14],[12,14],[14,13],[15,10],[15,0],[-1,-1],[15,10],[18,13],[20,14],[23,14],[25,13],[26,10],[26,0]]},n:{width:19,points:[[4,14],[4,0],[-1,-1],[4,10],[7,13],[9,14],[12,14],[14,13],[15,10],[15,0]]},o:{width:19,points:[[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3],[16,6],[16,8],[15,11],[13,13],[11,14],[8,14]]},p:{width:19,points:[[4,14],[4,-7],[-1,-1],[4,11],[6,13],[8,14],[11,14],[13,13],[15,11],[16,8],[16,6],[15,3],[13,1],[11,0],[8,0],[6,1],[4,3]]},q:{width:19,points:[[15,14],[15,-7],[-1,-1],[15,11],[13,13],[11,14],[8,14],[6,13],[4,11],[3,8],[3,6],[4,3],[6,1],[8,0],[11,0],[13,1],[15,3]]},r:{width:13,points:[[4,14],[4,0],[-1,-1],[4,8],[5,11],[7,13],[9,14],[12,14]]},s:{width:17,points:[[14,11],[13,13],[10,14],[7,14],[4,13],[3,11],[4,9],[6,8],[11,7],[13,6],[14,4],[14,3],[13,1],[10,0],[7,0],[4,1],[3,3]]},t:{width:12,points:[[5,21],[5,4],[6,1],[8,0],[10,0],[-1,-1],[2,14],[9,14]]},u:{width:19,points:[[4,14],[4,4],[5,1],[7,0],[10,0],[12,1],[15,4],[-1,-1],[15,14],[15,0]]},v:{width:16,points:[[2,14],[8,0],[-1,-1],[14,14],[8,0]]},w:{width:22,points:[[3,14],[7,0],[-1,-1],[11,14],[7,0],[-1,-1],[11,14],[15,0],[-1,-1],[19,14],[15,0]]},x:{width:17,points:[[3,14],[14,0],[-1,-1],[14,14],[3,0]]},y:{width:16,points:[[2,14],[8,0],[-1,-1],[14,14],[8,0],[6,-4],[4,-6],[2,-7],[1,-7]]},z:{width:17,points:[[14,14],[3,0],[-1,-1],[3,14],[14,14],[-1,-1],[3,0],[14,0]]},"{":{width:14,points:[[9,25],[7,24],[6,23],[5,21],[5,19],[6,17],[7,16],[8,14],[8,12],[6,10],[-1,-1],[7,24],[6,22],[6,20],[7,18],[8,17],[9,15],[9,13],[8,11],[4,9],[8,7],[9,5],[9,3],[8,1],[7,0],[6,-2],[6,-4],[7,-6],[-1,-1],[6,8],[8,6],[8,4],[7,2],[6,1],[5,-1],[5,-3],[6,-5],[7,-6],[9,-7]]},"|":{width:8,points:[[4,25],[4,-7]]},"}":{width:14,points:[[5,25],[7,24],[8,23],[9,21],[9,19],[8,17],[7,16],[6,14],[6,12],[8,10],[-1,-1],[7,24],[8,22],[8,20],[7,18],[6,17],[5,15],[5,13],[6,11],[10,9],[6,7],[5,5],[5,3],[6,1],[7,0],[8,-2],[8,-4],[7,-6],[-1,-1],[8,8],[6,6],[6,4],[7,2],[8,1],[9,-1],[9,-3],[8,-5],[7,-6],[5,-7]]},"~":{width:24,points:[[3,6],[3,8],[4,11],[6,12],[8,12],[10,11],[14,8],[16,7],[18,7],[20,8],[21,10],[-1,-1],[3,8],[4,10],[6,11],[8,11],[10,10],[14,7],[16,6],[18,6],[20,7],[21,10],[21,12]]}};a.jqplot.CanvasFontRenderer=function(b){b=b||{};if(!b.pt2px){b.pt2px=1.5}a.jqplot.CanvasTextRenderer.call(this,b)};a.jqplot.CanvasFontRenderer.prototype=new a.jqplot.CanvasTextRenderer({});a.jqplot.CanvasFontRenderer.prototype.constructor=a.jqplot.CanvasFontRenderer;a.jqplot.CanvasFontRenderer.prototype.measure=function(c,e){var d=this.fontSize+" "+this.fontFamily;c.save();c.font=d;var b=c.measureText(e).width;c.restore();return b};a.jqplot.CanvasFontRenderer.prototype.draw=function(e,g){var c=0;var h=this.height*0.72;e.save();var d,b;if((-Math.PI/2<=this.angle&&this.angle<=0)||(Math.PI*3/2<=this.angle&&this.angle<=Math.PI*2)){d=0;b=-Math.sin(this.angle)*this.width}else{if((0<this.angle&&this.angle<=Math.PI/2)||(-Math.PI*2<=this.angle&&this.angle<=-Math.PI*3/2)){d=Math.sin(this.angle)*this.height;b=0}else{if((-Math.PI<this.angle&&this.angle<-Math.PI/2)||(Math.PI<=this.angle&&this.angle<=Math.PI*3/2)){d=-Math.cos(this.angle)*this.width;b=-Math.sin(this.angle)*this.width-Math.cos(this.angle)*this.height}else{if((-Math.PI*3/2<this.angle&&this.angle<Math.PI)||(Math.PI/2<this.angle&&this.angle<Math.PI)){d=Math.sin(this.angle)*this.height-Math.cos(this.angle)*this.width;b=-Math.cos(this.angle)*this.height}}}}e.strokeStyle=this.fillStyle;e.fillStyle=this.fillStyle;var f=this.fontSize+" "+this.fontFamily;e.font=f;e.translate(d,b);e.rotate(this.angle);e.fillText(g,c,h);e.restore()}})(jQuery);/**
 * Copyright (c) 2009 - 2010 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot  or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * jqPlot includes date instance methods and printf/sprintf functions by other authors:
 *
 * Date instance methods contained in jqplot.dateMethods.js:
 *
 *     author Ken Snyder (ken d snyder at gmail dot com)
 *     date 2008-09-10
 *     version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 *     license Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * JavaScript printf/sprintf functions contained in jqplot.sprintf.js:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function(a){a.jqplot.CanvasAxisLabelRenderer=function(b){this.angle=0;this.axis;this.show=true;this.showLabel=true;this.label="";this.fontFamily='"Trebuchet MS", Arial, Helvetica, sans-serif';this.fontSize="11pt";this.fontWeight="normal";this.fontStretch=1;this.textColor="#666666";this.enableFontSupport=true;this.pt2px=null;this._elem;this._ctx;this._plotWidth;this._plotHeight;this._plotDimensions={height:null,width:null};a.extend(true,this,b);if(b.angle==null&&this.axis!="xaxis"&&this.axis!="x2axis"){this.angle=-90}var c={fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily};if(this.pt2px){c.pt2px=this.pt2px}if(this.enableFontSupport){function d(){return !!(document.createElement("canvas").getContext&&typeof document.createElement("canvas").getContext("2d").fillText=="function")}if(d()){this._textRenderer=new a.jqplot.CanvasFontRenderer(c)}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)}}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)}};a.jqplot.CanvasAxisLabelRenderer.prototype.init=function(b){a.extend(true,this,b);this._textRenderer.init({fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily})};a.jqplot.CanvasAxisLabelRenderer.prototype.getWidth=function(d){if(this._elem){return this._elem.outerWidth(true)}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.sin(f.angle)*e)+Math.abs(Math.cos(f.angle)*c);return b}};a.jqplot.CanvasAxisLabelRenderer.prototype.getHeight=function(d){if(this._elem){return this._elem.outerHeight(true)}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.cos(f.angle)*e)+Math.abs(Math.sin(f.angle)*c);return b}};a.jqplot.CanvasAxisLabelRenderer.prototype.getAngleRad=function(){var b=this.angle*Math.PI/180;return b};a.jqplot.CanvasAxisLabelRenderer.prototype.draw=function(c){var e=document.createElement("canvas");this._textRenderer.setText(this.label,c);var b=this.getWidth(c);var d=this.getHeight(c);e.width=b;e.height=d;e.style.width=b;e.style.height=d;e.style.position="absolute";this._domelem=e;this._elem=a(e);this._elem.addClass("jqplot-"+this.axis+"-label");return this._elem};a.jqplot.CanvasAxisLabelRenderer.prototype.pack=function(){if(a.browser.msie){window.G_vmlCanvasManager.init_(document);this._domelem=window.G_vmlCanvasManager.initElement(this._domelem)}var b=this._elem.get(0).getContext("2d");this._textRenderer.draw(b,this.label)}})(jQuery);/**
 * Copyright (c) 2009 - 2010 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot  or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * jqPlot includes date instance methods and printf/sprintf functions by other authors:
 *
 * Date instance methods contained in jqplot.dateMethods.js:
 *
 *     author Ken Snyder (ken d snyder at gmail dot com)
 *     date 2008-09-10
 *     version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 *     license Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * JavaScript printf/sprintf functions contained in jqplot.sprintf.js:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function(a){a.jqplot.CanvasAxisTickRenderer=function(b){this.mark="outside";this.showMark=true;this.showGridline=true;this.isMinorTick=false;this.angle=0;this.markSize=4;this.show=true;this.showLabel=true;this.labelPosition="auto";this.label="";this.value=null;this._styles={};this.formatter=a.jqplot.DefaultTickFormatter;this.formatString="";this.prefix="";this.fontFamily='"Trebuchet MS", Arial, Helvetica, sans-serif';this.fontSize="10pt";this.fontWeight="normal";this.fontStretch=1;this.textColor="#666666";this.enableFontSupport=true;this.pt2px=null;this._elem;this._ctx;this._plotWidth;this._plotHeight;this._plotDimensions={height:null,width:null};a.extend(true,this,b);var c={fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily};if(this.pt2px){c.pt2px=this.pt2px}if(this.enableFontSupport){function d(){return !!(document.createElement("canvas").getContext&&typeof document.createElement("canvas").getContext("2d").fillText=="function")}if(d()){this._textRenderer=new a.jqplot.CanvasFontRenderer(c)}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)}}else{this._textRenderer=new a.jqplot.CanvasTextRenderer(c)}};a.jqplot.CanvasAxisTickRenderer.prototype.init=function(b){a.extend(true,this,b);this._textRenderer.init({fontSize:this.fontSize,fontWeight:this.fontWeight,fontStretch:this.fontStretch,fillStyle:this.textColor,angle:this.getAngleRad(),fontFamily:this.fontFamily})};a.jqplot.CanvasAxisTickRenderer.prototype.getWidth=function(d){if(this._elem){return this._elem.outerWidth(true)}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.sin(f.angle)*e)+Math.abs(Math.cos(f.angle)*c);return b}};a.jqplot.CanvasAxisTickRenderer.prototype.getHeight=function(d){if(this._elem){return this._elem.outerHeight(true)}else{var f=this._textRenderer;var c=f.getWidth(d);var e=f.getHeight(d);var b=Math.abs(Math.cos(f.angle)*e)+Math.abs(Math.sin(f.angle)*c);return b}};a.jqplot.CanvasAxisTickRenderer.prototype.getAngleRad=function(){var b=this.angle*Math.PI/180;return b};a.jqplot.CanvasAxisTickRenderer.prototype.setTick=function(b,d,c){this.value=b;if(c){this.isMinorTick=true}return this};a.jqplot.CanvasAxisTickRenderer.prototype.draw=function(c){if(!this.label){this.label=this.formatter(this.formatString,this.value)}if(this.prefix&&!this.formatString){this.label=this.prefix+this.label}var e=document.createElement("canvas");this._textRenderer.setText(this.label,c);var b=this.getWidth(c);var d=this.getHeight(c);e.width=b;e.height=d;e.style.width=b;e.style.height=d;e.style.textAlign="left";e.style.position="absolute";this._domelem=e;this._elem=a(e);this._elem.css(this._styles);this._elem.addClass("jqplot-"+this.axis+"-tick");return this._elem};a.jqplot.CanvasAxisTickRenderer.prototype.pack=function(){if(a.browser.msie){window.G_vmlCanvasManager.init_(document);this._domelem=window.G_vmlCanvasManager.initElement(this._domelem)}var b=this._elem.get(0).getContext("2d");this._textRenderer.draw(b,this.label)}})(jQuery);/**
 * Copyright (c) 2009 - 2010 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot  or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * jqPlot includes date instance methods and printf/sprintf functions by other authors:
 *
 * Date instance methods contained in jqplot.dateMethods.js:
 *
 *     author Ken Snyder (ken d snyder at gmail dot com)
 *     date 2008-09-10
 *     version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 *     license Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * JavaScript printf/sprintf functions contained in jqplot.sprintf.js:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function(b){b.jqplot.eventListenerHooks.push(["jqplotMouseMove",c]);b.jqplot.Highlighter=function(e){this.show=b.jqplot.config.enablePlugins;this.markerRenderer=new b.jqplot.MarkerRenderer({shadow:false});this.showMarker=true;this.lineWidthAdjust=2.5;this.sizeAdjust=5;this.showTooltip=true;this.tooltipLocation="nw";this.fadeTooltip=true;this.tooltipFadeSpeed="fast";this.tooltipOffset=2;this.tooltipAxes="both";this.tooltipSeparator=", ";this.useAxesFormatters=true;this.tooltipFormatString="%.5P";this.formatString=null;this.yvalues=1;this.bringSeriesToFront=false;this._tooltipElem;this.isHighlighting=false;b.extend(true,this,e)};b.jqplot.Highlighter.init=function(h,g,f){var e=f||{};this.plugins.highlighter=new b.jqplot.Highlighter(e.highlighter)};b.jqplot.Highlighter.parseOptions=function(f,e){this.showHighlight=true};b.jqplot.Highlighter.postPlotDraw=function(){this.plugins.highlighter.highlightCanvas=new b.jqplot.GenericCanvas();this.eventCanvas._elem.before(this.plugins.highlighter.highlightCanvas.createElement(this._gridPadding,"jqplot-highlight-canvas",this._plotDimensions));var f=this.plugins.highlighter.highlightCanvas.setContext();var e=this.plugins.highlighter;e._tooltipElem=b('<div class="jqplot-highlighter-tooltip" style="position:absolute;display:none"></div>');this.eventCanvas._elem.before(e._tooltipElem)};b.jqplot.preInitHooks.push(b.jqplot.Highlighter.init);b.jqplot.preParseSeriesOptionsHooks.push(b.jqplot.Highlighter.parseOptions);b.jqplot.postDrawHooks.push(b.jqplot.Highlighter.postPlotDraw);function a(j,l){var g=j.plugins.highlighter;var m=j.series[l.seriesIndex];var e=m.markerRenderer;var f=g.markerRenderer;f.style=e.style;f.lineWidth=e.lineWidth+g.lineWidthAdjust;f.size=e.size+g.sizeAdjust;var i=b.jqplot.getColorComponents(e.color);var k=[i[0],i[1],i[2]];var h=(i[3]>=0.6)?i[3]*0.6:i[3]*(2-i[3]);f.color="rgba("+k[0]+","+k[1]+","+k[2]+","+h+")";f.init();f.draw(m.gridData[l.pointIndex][0],m.gridData[l.pointIndex][1],g.highlightCanvas._ctx)}function d(s,m,j){var g=s.plugins.highlighter;var v=g._tooltipElem;if(g.useAxesFormatters){var q=m._xaxis._ticks[0].formatter;var e=m._yaxis._ticks[0].formatter;var w=m._xaxis._ticks[0].formatString;var n=m._yaxis._ticks[0].formatString;var r;var o=q(w,j.data[0]);var h=[];for(var t=1;t<g.yvalues+1;t++){h.push(e(n,j.data[t]))}if(g.formatString){switch(g.tooltipAxes){case"both":case"xy":h.unshift(o);h.unshift(g.formatString);r=b.jqplot.sprintf.apply(b.jqplot.sprintf,h);break;case"yx":h.push(o);h.unshift(g.formatString);r=b.jqplot.sprintf.apply(b.jqplot.sprintf,h);break;case"x":r=b.jqplot.sprintf.apply(b.jqplot.sprintf,[g.formatString,o]);break;case"y":h.unshift(g.formatString);r=b.jqplot.sprintf.apply(b.jqplot.sprintf,h);break;default:h.unshift(o);h.unshift(g.formatString);r=b.jqplot.sprintf.apply(b.jqplot.sprintf,h);break}}else{switch(g.tooltipAxes){case"both":case"xy":r=o;for(var t=0;t<h.length;t++){r+=g.tooltipSeparator+h[t]}break;case"yx":r="";for(var t=0;t<h.length;t++){r+=h[t]+g.tooltipSeparator}r+=o;break;case"x":r=o;break;case"y":r="";for(var t=0;t<h.length;t++){r+=h[t]+g.tooltipSeparator}break;default:r=o;for(var t=0;t<h.length;t++){r+=g.tooltipSeparator+h[t]}break}}}else{var r;if(g.tooltipAxes=="both"||g.tooltipAxes=="xy"){r=b.jqplot.sprintf(g.tooltipFormatString,j.data[0])+g.tooltipSeparator+b.jqplot.sprintf(g.tooltipFormatString,j.data[1])}else{if(g.tooltipAxes=="yx"){r=b.jqplot.sprintf(g.tooltipFormatString,j.data[1])+g.tooltipSeparator+b.jqplot.sprintf(g.tooltipFormatString,j.data[0])}else{if(g.tooltipAxes=="x"){r=b.jqplot.sprintf(g.tooltipFormatString,j.data[0])}else{if(g.tooltipAxes=="y"){r=b.jqplot.sprintf(g.tooltipFormatString,j.data[1])}}}}}v.html(r);var u={x:j.gridData[0],y:j.gridData[1]};var p=0;var f=0.707;if(m.markerRenderer.show==true){p=(m.markerRenderer.size+g.sizeAdjust)/2}switch(g.tooltipLocation){case"nw":var l=u.x+s._gridPadding.left-v.outerWidth(true)-g.tooltipOffset-f*p;var k=u.y+s._gridPadding.top-g.tooltipOffset-v.outerHeight(true)-f*p;break;case"n":var l=u.x+s._gridPadding.left-v.outerWidth(true)/2;var k=u.y+s._gridPadding.top-g.tooltipOffset-v.outerHeight(true)-p;break;case"ne":var l=u.x+s._gridPadding.left+g.tooltipOffset+f*p;var k=u.y+s._gridPadding.top-g.tooltipOffset-v.outerHeight(true)-f*p;break;case"e":var l=u.x+s._gridPadding.left+g.tooltipOffset+p;var k=u.y+s._gridPadding.top-v.outerHeight(true)/2;break;case"se":var l=u.x+s._gridPadding.left+g.tooltipOffset+f*p;var k=u.y+s._gridPadding.top+g.tooltipOffset+f*p;break;case"s":var l=u.x+s._gridPadding.left-v.outerWidth(true)/2;var k=u.y+s._gridPadding.top+g.tooltipOffset+p;break;case"sw":var l=u.x+s._gridPadding.left-v.outerWidth(true)-g.tooltipOffset-f*p;var k=u.y+s._gridPadding.top+g.tooltipOffset+f*p;break;case"w":var l=u.x+s._gridPadding.left-v.outerWidth(true)-g.tooltipOffset-p;var k=u.y+s._gridPadding.top-v.outerHeight(true)/2;break;default:var l=u.x+s._gridPadding.left-v.outerWidth(true)-g.tooltipOffset-f*p;var k=u.y+s._gridPadding.top-g.tooltipOffset-v.outerHeight(true)-f*p;break}v.css("left",l);v.css("top",k);if(g.fadeTooltip){v.stop(true,true).fadeIn(g.tooltipFadeSpeed)}else{v.show()}}function c(h,g,k,j,i){var e=i.plugins.highlighter;var l=i.plugins.cursor;if(e.show){if(j==null&&e.isHighlighting){var f=e.highlightCanvas._ctx;f.clearRect(0,0,f.canvas.width,f.canvas.height);if(e.fadeTooltip){e._tooltipElem.fadeOut(e.tooltipFadeSpeed)}else{e._tooltipElem.hide()}if(e.bringSeriesToFront){i.restorePreviousSeriesOrder()}e.isHighlighting=false}if(j!=null&&i.series[j.seriesIndex].showHighlight&&!e.isHighlighting){e.isHighlighting=true;if(e.showMarker){a(i,j)}if(e.showTooltip&&(!l||!l._zoom.started)){d(i,i.series[j.seriesIndex],j)}if(e.bringSeriesToFront){i.moveSeriesToFront(j.seriesIndex)}}}}})(jQuery);/**
 * Copyright (c) 2009 - 2010 Chris Leonello
 * jqPlot is currently available for use in all personal or commercial projects 
 * under both the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL 
 * version 2.0 (http://www.gnu.org/licenses/gpl-2.0.html) licenses. This means that you can 
 * choose the license that best suits your project and use it accordingly. 
 *
 * Although not required, the author would appreciate an email letting him 
 * know of any substantial use of jqPlot.  You can reach the author at: 
 * chris at jqplot  or see http://www.jqplot.com/info.php .
 *
 * If you are feeling kind and generous, consider supporting the project by
 * making a donation at: http://www.jqplot.com/donate.php .
 *
 * jqPlot includes date instance methods and printf/sprintf functions by other authors:
 *
 * Date instance methods contained in jqplot.dateMethods.js:
 *
 *     author Ken Snyder (ken d snyder at gmail dot com)
 *     date 2008-09-10
 *     version 2.0.2 (http://kendsnyder.com/sandbox/date/)     
 *     license Creative Commons Attribution License 3.0 (http://creativecommons.org/licenses/by/3.0/)
 *
 * JavaScript printf/sprintf functions contained in jqplot.sprintf.js:
 *
 *     version 2007.04.27
 *     author Ash Searle
 *     http://hexmen.com/blog/2007/03/printf-sprintf/
 *     http://hexmen.com/js/sprintf.js
 *     The author (Ash Searle) has placed this code in the public domain:
 *     "This code is unrestricted: you are free to use it however you like."
 * 
 */
(function(j){j.jqplot.Cursor=function(r){this.style="crosshair";this.previousCursor="auto";this.show=j.jqplot.config.enablePlugins;this.showTooltip=true;this.followMouse=false;this.tooltipLocation="se";this.tooltipOffset=6;this.showTooltipGridPosition=false;this.showTooltipUnitPosition=true;this.showTooltipDataPosition=false;this.tooltipFormatString="%.4P, %.4P";this.useAxesFormatters=true;this.tooltipAxisGroups=[];this.zoom=false;this.zoomProxy=false;this.zoomTarget=false;this.clickReset=false;this.dblClickReset=true;this.showVerticalLine=false;this.showHorizontalLine=false;this.constrainZoomTo="none";this.shapeRenderer=new j.jqplot.ShapeRenderer();this._zoom={start:[],end:[],started:false,zooming:false,isZoomed:false,axes:{start:{},end:{}},gridpos:{},datapos:{}};this._tooltipElem;this.zoomCanvas;this.cursorCanvas;this.intersectionThreshold=2;this.showCursorLegend=false;this.cursorLegendFormatString=j.jqplot.Cursor.cursorLegendFormatString;this._oldHandlers={onselectstart:null,ondrag:null,onmousedown:null};this.constrainOutsideZoom=true;this.showTooltipOutsideZoom=false;this.onGrid=false;j.extend(true,this,r)};j.jqplot.Cursor.cursorLegendFormatString="%s x:%s, y:%s";j.jqplot.Cursor.init=function(v,u,t){var r=t||{};this.plugins.cursor=new j.jqplot.Cursor(r.cursor);var w=this.plugins.cursor;if(w.show){j.jqplot.eventListenerHooks.push(["jqplotMouseEnter",b]);j.jqplot.eventListenerHooks.push(["jqplotMouseLeave",f]);j.jqplot.eventListenerHooks.push(["jqplotMouseMove",i]);if(w.showCursorLegend){t.legend=t.legend||{};t.legend.renderer=j.jqplot.CursorLegendRenderer;t.legend.formatString=this.plugins.cursor.cursorLegendFormatString;t.legend.show=true}if(w.zoom){j.jqplot.eventListenerHooks.push(["jqplotMouseDown",a]);if(w.clickReset){j.jqplot.eventListenerHooks.push(["jqplotClick",k])}if(w.dblClickReset){j.jqplot.eventListenerHooks.push(["jqplotDblClick",c])}}this.resetZoom=function(){var z=this.axes;if(!w.zoomProxy){for(var y in z){z[y].reset()}this.redraw()}else{var x=this.plugins.cursor.zoomCanvas._ctx;x.clearRect(0,0,x.canvas.width,x.canvas.height)}this.plugins.cursor._zoom.isZoomed=false;this.target.trigger("jqplotResetZoom",[this,this.plugins.cursor])};if(w.showTooltipDataPosition){w.showTooltipUnitPosition=false;w.showTooltipGridPosition=false;if(r.cursor.tooltipFormatString==undefined){w.tooltipFormatString=j.jqplot.Cursor.cursorLegendFormatString}}}};j.jqplot.Cursor.postDraw=function(){var y=this.plugins.cursor;y.zoomCanvas=new j.jqplot.GenericCanvas();this.eventCanvas._elem.before(y.zoomCanvas.createElement(this._gridPadding,"jqplot-zoom-canvas",this._plotDimensions));var x=y.zoomCanvas.setContext();y._tooltipElem=j('<div class="jqplot-cursor-tooltip" style="position:absolute;display:none"></div>');y.zoomCanvas._elem.before(y._tooltipElem);if(y.showVerticalLine||y.showHorizontalLine){y.cursorCanvas=new j.jqplot.GenericCanvas();this.eventCanvas._elem.before(y.cursorCanvas.createElement(this._gridPadding,"jqplot-cursor-canvas",this._plotDimensions));var x=y.cursorCanvas.setContext()}if(y.showTooltipUnitPosition){if(y.tooltipAxisGroups.length===0){var u=this.series;var v;var r=[];for(var t=0;t<u.length;t++){v=u[t];var w=v.xaxis+","+v.yaxis;if(j.inArray(w,r)==-1){r.push(w)}}for(var t=0;t<r.length;t++){y.tooltipAxisGroups.push(r[t].split(","))}}}};j.jqplot.Cursor.zoomProxy=function(x,t){var r=x.plugins.cursor;var w=t.plugins.cursor;r.zoomTarget=true;r.zoom=true;r.style="auto";r.dblClickReset=false;w.zoom=true;w.zoomProxy=true;t.target.bind("jqplotZoom",v);t.target.bind("jqplotResetZoom",u);function v(z,y,B,A,C){r.doZoom(y,B,x,C)}function u(y,z,A){x.resetZoom()}};j.jqplot.Cursor.prototype.resetZoom=function(w,x){var v=w.axes;var u=x._zoom.axes;if(!w.plugins.cursor.zoomProxy&&x._zoom.isZoomed){for(var t in v){v[t]._ticks=[];v[t].min=u[t].min;v[t].max=u[t].max;v[t].numberTicks=u[t].numberTicks;v[t].tickInterval=u[t].tickInterval;v[t].daTickInterval=u[t].daTickInterval}w.redraw();x._zoom.isZoomed=false}else{var r=x.zoomCanvas._ctx;r.clearRect(0,0,r.canvas.width,r.canvas.height)}w.target.trigger("jqplotResetZoom",[w,x])};j.jqplot.Cursor.resetZoom=function(r){r.resetZoom()};j.jqplot.Cursor.prototype.doZoom=function(y,v,z,D){var B=D;var A=z.axes;var t=B._zoom.axes;var u=t.start;var w=t.end;var x,C;var E=z.plugins.cursor.zoomCanvas._ctx;if((B.constrainZoomTo=="none"&&Math.abs(y.x-B._zoom.start[0])>6&&Math.abs(y.y-B._zoom.start[1])>6)||(B.constrainZoomTo=="x"&&Math.abs(y.x-B._zoom.start[0])>6)||(B.constrainZoomTo=="y"&&Math.abs(y.y-B._zoom.start[1])>6)){if(!z.plugins.cursor.zoomProxy){for(var r in v){if(B._zoom.axes[r]==undefined){B._zoom.axes[r]={};B._zoom.axes[r].numberTicks=A[r].numberTicks;B._zoom.axes[r].tickInterval=A[r].tickInterval;B._zoom.axes[r].daTickInterval=A[r].daTickInterval;B._zoom.axes[r].min=A[r].min;B._zoom.axes[r].max=A[r].max}if((B.constrainZoomTo=="none")||(B.constrainZoomTo=="x"&&r.charAt(0)=="x")||(B.constrainZoomTo=="y"&&r.charAt(0)=="y")){dp=v[r];if(dp!=null){if(dp>u[r]){A[r].min=u[r];A[r].max=dp}else{span=u[r]-dp;A[r].max=u[r];A[r].min=dp}A[r].tickInterval=null;A[r].daTickInterval=null;A[r]._ticks=[]}}}E.clearRect(0,0,E.canvas.width,E.canvas.height);z.redraw();B._zoom.isZoomed=true}z.target.trigger("jqplotZoom",[y,v,z,D])}};j.jqplot.preInitHooks.push(j.jqplot.Cursor.init);j.jqplot.postDrawHooks.push(j.jqplot.Cursor.postDraw);function e(F,t,C){var H=C.plugins.cursor;var x="";var L=false;if(H.showTooltipGridPosition){x=F.x+", "+F.y;L=true}if(H.showTooltipUnitPosition){var E;for(var D=0;D<H.tooltipAxisGroups.length;D++){E=H.tooltipAxisGroups[D];if(L){x+="<br />"}if(H.useAxesFormatters){var B=C.axes[E[0]]._ticks[0].formatter;var r=C.axes[E[1]]._ticks[0].formatter;var I=C.axes[E[0]]._ticks[0].formatString;var w=C.axes[E[1]]._ticks[0].formatString;x+=B(I,t[E[0]])+", "+r(w,t[E[1]])}else{x+=j.jqplot.sprintf(H.tooltipFormatString,t[E[0]],t[E[1]])}L=true}}if(H.showTooltipDataPosition){var v=C.series;var K=d(C,F.x,F.y);var L=false;for(var D=0;D<v.length;D++){if(v[D].show){var z=v[D].index;var u=v[D].label.toString();var G=j.inArray(z,K.indices);var A=undefined;var y=undefined;if(G!=-1){var J=K.data[G].data;if(H.useAxesFormatters){var B=v[D]._xaxis._ticks[0].formatter;var r=v[D]._yaxis._ticks[0].formatter;var I=v[D]._xaxis._ticks[0].formatString;var w=v[D]._yaxis._ticks[0].formatString;A=B(I,J[0]);y=r(w,J[1])}else{A=J[0];y=J[1]}if(L){x+="<br />"}x+=j.jqplot.sprintf(H.tooltipFormatString,u,A,y);L=true}}}}H._tooltipElem.html(x)}function g(E,C){var G=C.plugins.cursor;var B=G.cursorCanvas._ctx;B.clearRect(0,0,B.canvas.width,B.canvas.height);if(G.showVerticalLine){G.shapeRenderer.draw(B,[[E.x,0],[E.x,B.canvas.height]])}if(G.showHorizontalLine){G.shapeRenderer.draw(B,[[0,E.y],[B.canvas.width,E.y]])}var I=d(C,E.x,E.y);if(G.showCursorLegend){var t=j(C.targetId+" td.jqplot-cursor-legend-label");for(var D=0;D<t.length;D++){var x=j(t[D]).data("seriesIndex");var v=C.series[x];var u=v.label.toString();var F=j.inArray(x,I.indices);var z=undefined;var y=undefined;if(F!=-1){var J=I.data[F].data;if(G.useAxesFormatters){var A=v._xaxis._ticks[0].formatter;var r=v._yaxis._ticks[0].formatter;var H=v._xaxis._ticks[0].formatString;var w=v._yaxis._ticks[0].formatString;z=A(H,J[0]);y=r(w,J[1])}else{z=J[0];y=J[1]}}if(C.legend.escapeHtml){j(t[D]).text(j.jqplot.sprintf(G.cursorLegendFormatString,u,z,y))}else{j(t[D]).html(j.jqplot.sprintf(G.cursorLegendFormatString,u,z,y))}}}}function d(A,F,E){var B={indices:[],data:[]};var G,w,u,C,v,t;var z;var D=A.plugins.cursor;for(var w=0;w<A.series.length;w++){G=A.series[w];t=G.renderer;if(G.show){z=D.intersectionThreshold;if(G.showMarker){z+=G.markerRenderer.size/2}for(var v=0;v<G.gridData.length;v++){p=G.gridData[v];if(D.showVerticalLine){if(Math.abs(F-p[0])<=z){B.indices.push(w);B.data.push({seriesIndex:w,pointIndex:v,gridData:p,data:G.data[v]})}}}}}return B}function n(t,v){var z=v.plugins.cursor;var u=z._tooltipElem;switch(z.tooltipLocation){case"nw":var r=t.x+v._gridPadding.left-u.outerWidth(true)-z.tooltipOffset;var w=t.y+v._gridPadding.top-z.tooltipOffset-u.outerHeight(true);break;case"n":var r=t.x+v._gridPadding.left-u.outerWidth(true)/2;var w=t.y+v._gridPadding.top-z.tooltipOffset-u.outerHeight(true);break;case"ne":var r=t.x+v._gridPadding.left+z.tooltipOffset;var w=t.y+v._gridPadding.top-z.tooltipOffset-u.outerHeight(true);break;case"e":var r=t.x+v._gridPadding.left+z.tooltipOffset;var w=t.y+v._gridPadding.top-u.outerHeight(true)/2;break;case"se":var r=t.x+v._gridPadding.left+z.tooltipOffset;var w=t.y+v._gridPadding.top+z.tooltipOffset;break;case"s":var r=t.x+v._gridPadding.left-u.outerWidth(true)/2;var w=t.y+v._gridPadding.top+z.tooltipOffset;break;case"sw":var r=t.x+v._gridPadding.left-u.outerWidth(true)-z.tooltipOffset;var w=t.y+v._gridPadding.top+z.tooltipOffset;break;case"w":var r=t.x+v._gridPadding.left-u.outerWidth(true)-z.tooltipOffset;var w=t.y+v._gridPadding.top-u.outerHeight(true)/2;break;default:var r=t.x+v._gridPadding.left+z.tooltipOffset;var w=t.y+v._gridPadding.top+z.tooltipOffset;break}z._tooltipElem.css("left",r);z._tooltipElem.css("top",w)}function m(w){var u=w._gridPadding;var x=w.plugins.cursor;var v=x._tooltipElem;switch(x.tooltipLocation){case"nw":var t=u.left+x.tooltipOffset;var r=u.top+x.tooltipOffset;v.css("left",t);v.css("top",r);break;case"n":var t=(u.left+(w._plotDimensions.width-u.right))/2-v.outerWidth(true)/2;var r=u.top+x.tooltipOffset;v.css("left",t);v.css("top",r);break;case"ne":var t=u.right+x.tooltipOffset;var r=u.top+x.tooltipOffset;v.css({right:t,top:r});break;case"e":var t=u.right+x.tooltipOffset;var r=(u.top+(w._plotDimensions.height-u.bottom))/2-v.outerHeight(true)/2;v.css({right:t,top:r});break;case"se":var t=u.right+x.tooltipOffset;var r=u.bottom+x.tooltipOffset;v.css({right:t,bottom:r});break;case"s":var t=(u.left+(w._plotDimensions.width-u.right))/2-v.outerWidth(true)/2;var r=u.bottom+x.tooltipOffset;v.css({left:t,bottom:r});break;case"sw":var t=u.left+x.tooltipOffset;var r=u.bottom+x.tooltipOffset;v.css({left:t,bottom:r});break;case"w":var t=u.left+x.tooltipOffset;var r=(u.top+(w._plotDimensions.height-u.bottom))/2-v.outerHeight(true)/2;v.css({left:t,top:r});break;default:var t=u.right-x.tooltipOffset;var r=u.bottom+x.tooltipOffset;v.css({right:t,bottom:r});break}}function k(t,r,x,w,v){t.preventDefault();t.stopImmediatePropagation();var y=v.plugins.cursor;if(y.clickReset){y.resetZoom(v,y)}var u=window.getSelection;if(document.selection&&document.selection.empty){document.selection.empty()}else{if(u&&!u().isCollapsed){u().collapse()}}return false}function c(t,r,x,w,v){t.preventDefault();t.stopImmediatePropagation();var y=v.plugins.cursor;if(y.dblClickReset){y.resetZoom(v,y)}var u=window.getSelection;if(document.selection&&document.selection.empty){document.selection.empty()}else{if(u&&!u().isCollapsed){u().collapse()}}return false}function f(y,v,r,B,w){var x=w.plugins.cursor;x.onGrid=false;if(x.show){j(y.target).css("cursor",x.previousCursor);if(x.showTooltip&&!(x._zoom.zooming&&x.showTooltipOutsideZoom&&!x.constrainOutsideZoom)){x._tooltipElem.hide()}if(x.zoom){x._zoom.gridpos=v;x._zoom.datapos=r}if(x.showVerticalLine||x.showHorizontalLine){var D=x.cursorCanvas._ctx;D.clearRect(0,0,D.canvas.width,D.canvas.height)}if(x.showCursorLegend){var C=j(w.targetId+" td.jqplot-cursor-legend-label");for(var u=0;u<C.length;u++){var A=j(C[u]).data("seriesIndex");var t=w.series[A];var z=t.label.toString();if(w.legend.escapeHtml){j(C[u]).text(j.jqplot.sprintf(x.cursorLegendFormatString,z,undefined,undefined))}else{j(C[u]).html(j.jqplot.sprintf(x.cursorLegendFormatString,z,undefined,undefined))}}}}}function b(t,r,w,v,u){var x=u.plugins.cursor;x.onGrid=true;if(x.show){x.previousCursor=t.target.style.cursor;t.target.style.cursor=x.style;if(x.showTooltip){e(r,w,u);if(x.followMouse){n(r,u)}else{m(u)}x._tooltipElem.show()}if(x.showVerticalLine||x.showHorizontalLine){g(r,u)}}}function i(u,t,x,w,v){var y=v.plugins.cursor;var r=y.zoomCanvas._ctx;if(y.show){if(y.showTooltip){e(t,x,v);if(y.followMouse){n(t,v)}}if(y.showVerticalLine||y.showHorizontalLine){g(t,v)}}}function o(A){var z=A.data.plot;var v=z.eventCanvas._elem.offset();var y={x:A.pageX-v.left,y:A.pageY-v.top};var w={xaxis:null,yaxis:null,x2axis:null,y2axis:null,y3axis:null,y4axis:null,y5axis:null,y6axis:null,y7axis:null,y8axis:null,y9axis:null};var x=["xaxis","yaxis","x2axis","y2axis","y3axis","y4axis","y5axis","y6axis","y7axis","y8axis","y9axis"];var r=z.axes;var t,u;for(t=11;t>0;t--){u=x[t-1];if(r[u].show){w[u]=r[u].series_p2u(y[u.charAt(0)])}}return{offsets:v,gridPos:y,dataPos:w}}function h(B){var z=B.data.plot;var A=z.plugins.cursor;if(A.show&&A.zoom&&A._zoom.started&&!A.zoomTarget){var D=A.zoomCanvas._ctx;var x=o(B);var y=x.gridPos;var v=x.dataPos;A._zoom.gridpos=y;A._zoom.datapos=v;A._zoom.zooming=true;var w=y.x;var u=y.y;var C=D.canvas.height;var r=D.canvas.width;if(A.showTooltip&&!A.onGrid&&A.showTooltipOutsideZoom){e(y,v,z);if(A.followMouse){n(y,z)}}if(A.constrainZoomTo=="x"){A._zoom.end=[w,C]}else{if(A.constrainZoomTo=="y"){A._zoom.end=[r,u]}else{A._zoom.end=[w,u]}}var t=window.getSelection;if(document.selection&&document.selection.empty){document.selection.empty()}else{if(t&&!t().isCollapsed){t().collapse()}}l.call(A)}}function a(y,u,t,z,v){var x=v.plugins.cursor;j(document).one("mouseup.jqplot_cursor",{plot:v},q);var w=v.axes;if(document.onselectstart!=undefined){x._oldHandlers.onselectstart=document.onselectstart;document.onselectstart=function(){return false}}if(document.ondrag!=undefined){x._oldHandlers.ondrag=document.ondrag;document.ondrag=function(){return false}}if(document.onmousedown!=undefined){x._oldHandlers.onmousedown=document.onmousedown;document.onmousedown=function(){return false}}if(x.zoom){if(!x.zoomProxy){var A=x.zoomCanvas._ctx;A.clearRect(0,0,A.canvas.width,A.canvas.height)}if(x.constrainZoomTo=="x"){x._zoom.start=[u.x,0]}else{if(x.constrainZoomTo=="y"){x._zoom.start=[0,u.y]}else{x._zoom.start=[u.x,u.y]}}x._zoom.started=true;for(var r in t){x._zoom.axes.start[r]=t[r]}j(document).bind("mousemove.jqplotCursor",{plot:v},h)}}function q(A){var x=A.data.plot;var z=x.plugins.cursor;if(z.zoom&&z._zoom.zooming&&!z.zoomTarget){var w=z._zoom.gridpos.x;var t=z._zoom.gridpos.y;var v=z._zoom.datapos;var B=z.zoomCanvas._ctx.canvas.height;var r=z.zoomCanvas._ctx.canvas.width;var y=x.axes;if(z.constrainOutsideZoom&&!z.onGrid){if(w<0){w=0}else{if(w>r){w=r}}if(t<0){t=0}else{if(t>B){t=B}}for(var u in v){if(v[u]){if(u.charAt(0)=="x"){v[u]=y[u].series_p2u(w)}else{v[u]=y[u].series_p2u(t)}}}}if(z.constrainZoomTo=="x"){t=B}else{if(z.constrainZoomTo=="y"){w=r}}z._zoom.end=[w,t];z._zoom.gridpos={x:w,y:t};z.doZoom(z._zoom.gridpos,v,x,z)}z._zoom.started=false;z._zoom.zooming=false;j(document).unbind("mousemove.jqplotCursor",h);if(document.onselectstart!=undefined&&z._oldHandlers.onselectstart!=null){document.onselectstart=z._oldHandlers.onselectstart;z._oldHandlers.onselectstart=null}if(document.ondrag!=undefined&&z._oldHandlers.ondrag!=null){document.ondrag=z._oldHandlers.ondrag;z._oldHandlers.ondrag=null}if(document.onmousedown!=undefined&&z._oldHandlers.onmousedown!=null){document.onmousedown=z._oldHandlers.onmousedown;z._oldHandlers.onmousedown=null}}function l(){var A=this._zoom.start;var x=this._zoom.end;var v=this.zoomCanvas._ctx;var u,y,z,r;if(x[0]>A[0]){u=A[0];r=x[0]-A[0]}else{u=x[0];r=A[0]-x[0]}if(x[1]>A[1]){y=A[1];z=x[1]-A[1]}else{y=x[1];z=A[1]-x[1]}v.fillStyle="rgba(0,0,0,0.2)";v.strokeStyle="#999999";v.lineWidth=1;v.clearRect(0,0,v.canvas.width,v.canvas.height);v.fillRect(0,0,v.canvas.width,v.canvas.height);v.clearRect(u,y,r,z);v.strokeRect(u,y,r,z)}j.jqplot.CursorLegendRenderer=function(r){j.jqplot.TableLegendRenderer.call(this,r);this.formatString="%s"};j.jqplot.CursorLegendRenderer.prototype=new j.jqplot.TableLegendRenderer();j.jqplot.CursorLegendRenderer.prototype.constructor=j.jqplot.CursorLegendRenderer;j.jqplot.CursorLegendRenderer.prototype.draw=function(){if(this.show){var w=this._series;this._elem=j('<table class="jqplot-legend jqplot-cursor-legend" style="position:absolute"></table>');var z=false;for(var v=0;v<w.length;v++){s=w[v];if(s.show){var r=j.jqplot.sprintf(this.formatString,s.label.toString());if(r){var t=s.color;if(s._stack&&!s.fill){t=""}x.call(this,r,t,z,v);z=true}for(var u=0;u<j.jqplot.addLegendRowHooks.length;u++){var y=j.jqplot.addLegendRowHooks[u].call(this,s);if(y){x.call(this,y.label,y.color,z);z=true}}}}}function x(D,C,F,A){var B=(F)?this.rowSpacing:"0";var E=j('<tr class="jqplot-legend jqplot-cursor-legend"></tr>').appendTo(this._elem);E.data("seriesIndex",A);j('<td class="jqplot-legend jqplot-cursor-legend-swatch" style="padding-top:'+B+';"><div style="border:1px solid #cccccc;padding:0.2em;"><div class="jqplot-cursor-legend-swatch" style="background-color:'+C+';"></div></div></td>').appendTo(E);var G=j('<td class="jqplot-legend jqplot-cursor-legend-label" style="vertical-align:middle;padding-top:'+B+';"></td>');G.appendTo(E);G.data("seriesIndex",A);if(this.escapeHtml){G.text(D)}else{G.html(D)}}return this._elem}})(jQuery);/**
 * jQRangeSlider
 * A javascript slider selector that supports dates
 *
 * Copyright (C) Guillaume Gautreau 2012
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

 (function($, undefined){

 	"use strict";

 	$.widget("ui.rangeSliderMouseTouch", $.ui.mouse, {

 		_mouseInit: function(){
 			var that = this;
 			$.ui.mouse.prototype._mouseInit.apply(this);
 			this._mouseDownEvent = false;

 			this.element.bind('touchstart.' + this.widgetName, function(event) {
				return that._touchStart(event);
			});
 		},

 		_mouseDestroy: function(){
 			$(document)
 				.unbind('touchmove.' + this.widgetName, this._touchMoveDelegate)
				.unbind('touchend.' + this.widgetName, this._touchEndDelegate);
 			
 			$.ui.mouse.prototype._mouseDestroy.apply(this);
 		},

 		_touchStart: function(event){
 			event.which = 1;
 			event.preventDefault();

 			this._fillTouchEvent(event);

 			var that = this,
 				downEvent = this._mouseDownEvent;

 			this._mouseDown(event);

 			if (downEvent !== this._mouseDownEvent){

 				this._touchEndDelegate = function(event){
 					that._touchEnd(event);
 				}

 				this._touchMoveDelegate = function(event){
 					that._touchMove(event);
 				}

 				$(document)
					.bind('touchmove.' + this.widgetName, this._touchMoveDelegate)
					.bind('touchend.' + this.widgetName, this._touchEndDelegate);
 			}
 		},

 		_touchEnd: function(event){
 			this._fillTouchEvent(event);
 			this._mouseUp(event);

 			$(document)
				.unbind('touchmove.' + this.widgetName, this._touchMoveDelegate)
				.unbind('touchend.' + this.widgetName, this._touchEndDelegate);

			this._mouseDownEvent = false;

			// No other choice to reinitialize mouseHandled
			$(document).trigger("mouseup");
 		},

 		_touchMove: function(event){
 			event.preventDefault();
 			this._fillTouchEvent(event);

 			return this._mouseMove(event);
 		},

 		_fillTouchEvent: function(event){
 			var touch;

 			if (typeof event.targetTouches === "undefined" && typeof event.changedTouches === "undefined"){
 				touch = event.originalEvent.targetTouches[0] || event.originalEvent.changedTouches[0];
 			} else {
 				touch = event.targetTouches[0] || event.changedTouches[0];
 			}

 			event.pageX = touch.pageX;
 			event.pageY = touch.pageY;
 		}
 	});
 })(jQuery);/**
 * jQRangeSlider
 * A javascript slider selector that supports dates
 *
 * Copyright (C) Guillaume Gautreau 2012
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

 (function($, undefined){
 	"use strict";

 	$.widget("ui.rangeSliderDraggable", $.ui.rangeSliderMouseTouch, {
 		cache: null,

 		options: {
 			containment: null
 		},

 		_create: function(){
 			setTimeout($.proxy(this._initElement, this), 10);
 		},

 		_initElement: function(){
 			this._mouseInit();
 			this._cache();
 		},

 		_setOption: function(key, value){
 			if (key == "containment"){
 				if (value === null || $(value).length == 0){
 					this.options.containment = null
 				}else{
 					this.options.containment = $(value);
 				}
 			}
 		},

 		/*
 		 * UI mouse widget
 		 */

 		_mouseStart: function(event){
 			this._cache();
 			this.cache.click = {
 					left: event.pageX,
 					top: event.pageY
 			};

 			this.cache.initialOffset = this.element.offset();

 			this._triggerMouseEvent("mousestart");

 			return true;
 		},

 		_mouseDrag: function(event){
 			var position = event.pageX - this.cache.click.left;

 			position = this._constraintPosition(position + this.cache.initialOffset.left);

 			this._applyPosition(position);

 			this._triggerMouseEvent("drag");

 			return false;
 		},

 		_mouseStop: function(event){
 			this._triggerMouseEvent("stop");
 		},

 		/*
 		 * To be overriden
 		 */

 		_constraintPosition: function(position){
 			if (this.element.parent().length !== 0){
 				position = Math.min(position, 
 					this.cache.parent.offset.left + this.cache.parent.width - this.cache.width.outer);
 				position = Math.max(position, this.cache.parent.offset.left);
 			}

 			return position;
 		},

 		_applyPosition: function(position){
 			var offset = {
 				top: this.cache.offset.top,
 				left: position
 			}

 			this.element.offset({left:position});

 			this.cache.offset = offset;
 		},

 		/*
 		 * Private utils
 		 */

 		_cacheIfNecessary: function(){
 			if (this.cache === null){
 				this._cache();
 			}
 		},

 		_cache: function(){
 			this.cache = {};

 			this._cacheMargins();
 			this._cacheParent();
 			this._cacheDimensions();

 			this.cache.offset = this.element.offset();
 		},

 		_cacheMargins: function(){
 			this.cache.margin = {
 				left: this._parsePixels(this.element, "marginLeft"),
 				right: this._parsePixels(this.element, "marginRight"),
 				top: this._parsePixels(this.element, "marginTop"),
 				bottom: this._parsePixels(this.element, "marginBottom")
 			};
 		},

 		_cacheParent: function(){
 			if (this.options.parent !== null){
 				var container = this.element.parent();

	 			this.cache.parent = {
	 				offset: container.offset(),
	 				width: container.width()
	 			}
 			}else{
 				this.cache.parent = null;
 			}
 		},

 		_cacheDimensions: function(){
 			this.cache.width = {
 				outer: this.element.outerWidth(),
 				inner: this.element.width()
 			}
 		},

 		_parsePixels: function(element, string){
 			return parseInt(element.css(string), 10) || 0;
 		},

 		_triggerMouseEvent: function(event){
 			var data = this._prepareEventData();

 			this.element.trigger(event, data);
 		},

 		_prepareEventData: function(){
 			return {
 				element: this.element,
 				offset: this.cache.offset || null
 			};
 		}
 	});
	
 })(jQuery);/**
 * jQRangeSlider
 * A javascript slider selector that supports dates
 *
 * Copyright (C) Guillaume Gautreau 2012
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */


 (function($, undefined){
	"use strict";

	$.widget("ui.rangeSliderHandle", $.ui.rangeSliderDraggable, {
		currentMove: null,
		margin: 0,
		parentElement: null,

		options: {
			isLeft: true,
			bounds: {min:0, max:100},
			range: false,
			value: 0,
			step: false
		},

		_value: 0,
		_left: 0,

		_create: function(){
			$.ui.rangeSliderDraggable.prototype._create.apply(this);

			this.element
				.css("position", "absolute")
				.css("top", 0)
				.addClass("ui-rangeSlider-handle")
				.toggleClass("ui-rangeSlider-leftHandle", this.options.isLeft)
				.toggleClass("ui-rangeSlider-rightHandle", !this.options.isLeft);

			this._value = this.options.value;
		},

		_setOption: function(key, value){
			if (key === "isLeft" && (value === true || value === false) && value != this.options.isLeft){
				this.options.isLeft = value;

				this.element
					.toggleClass("ui-rangeSlider-leftHandle", this.options.isLeft)
					.toggleClass("ui-rangeSlider-rightHandle", !this.options.isLeft);

				this._position(this._value);

				this.element.trigger("switch", this.options.isLeft);
			} else if (key === "step" && this._checkStep(value)){
				this.options.step = value;
				this.update();
			} else if (key === "bounds"){
				this.options.bounds = value;
				this.update();
			}else if (key === "range" && this._checkRange(value)){
				this.options.range = value;
				this.update();
			}

			$.ui.draggable.prototype._setOption.apply(this, [key, value]);
		},

		_checkRange: function(range){
			return range === false ||
				((typeof range.min === "undefined" || range.min === false || parseFloat(range.min) === range.min)
					&& (typeof range.max === "undefined" || range.max === false || parseFloat(range.max) === range.max));
		},

		_checkStep: function(step){
			return (step === false || parseFloat(step) == step);
		},

		_initElement: function(){
			$.ui.rangeSliderDraggable.prototype._initElement.apply(this);
			
			if (this.cache.parent.width === 0 || this.cache.parent.width === null){
				setTimeout($.proxy(this._initElement, this), 500);
			}else{
				this._position(this.options.value);
				this._triggerMouseEvent("initialize");
			}
		},

		_bounds: function(){
			return this.options.bounds;
		},

		/*
		 * From draggable
		 */

		_cache: function(){
			$.ui.rangeSliderDraggable.prototype._cache.apply(this);

			this._cacheParent();
		},

		_cacheParent: function(){
			var parent = this.element.parent();

			this.cache.parent = {
				element: parent,
				offset: parent.offset(),
				padding: {
					left: this._parsePixels(parent, "paddingLeft")
				},
				width: parent.width()
			}
		},

		_position: function(value){
			var left = this._getPositionForValue(value);

			this._applyPosition(left);
		},

		_constraintPosition: function(position){
			var value = this._getValueForPosition(position);

			return this._getPositionForValue(value);
		},

		_applyPosition: function(left){
			$.ui.rangeSliderDraggable.prototype._applyPosition.apply(this, [left]);

			this._left = left;
			this._setValue(this._getValueForPosition(left));
			this._triggerMouseEvent("moving");
		},

		_prepareEventData: function(){
			var data = $.ui.rangeSliderDraggable.prototype._prepareEventData.apply(this);

			data.value = this._value;

			return data;
		},

		/*
		 * Value
		 */
		_setValue: function(value){
			if (value != this._value){
				this._value = value;
			}
		},

		_constraintValue: function(value){
			value = Math.min(value, this._bounds().max);
			value = Math.max(value, this._bounds().min);
		
			value = this._round(value);

			if (this.options.range !== false){
				var min = this.options.range.min || false,
					max = this.options.range.max || false;

				if (min !== false){
					value = Math.max(value, this._round(min));
				}

				if (max !== false){
					value = Math.min(value, this._round(max));
				}
			}

			return value;
		},

		_round: function(value){
			if (this.options.step !== false && this.options.step > 0){
				return Math.round(value / this.options.step) * this.options.step;
			}

			return value;
		},

		_getPositionForValue: function(value){
			if (this.cache.parent.offset == null){
				return 0;
			}

			value = this._constraintValue(value);

			var ratio = (value - this.options.bounds.min) / (this.options.bounds.max - this.options.bounds.min),
				position = this.cache.parent.offset.left;

			if (!this.options.isLeft){
				position -= this.cache.width.outer;
			}


			return position + ratio * this.cache.parent.width;
		},

		_getValueForPosition: function(position){
			if (!this.options.isLeft){
				position += this.cache.width.outer;
			}

			var ratio = (position - this.cache.parent.offset.left) / this.cache.parent.width,
				raw = ratio * (this.options.bounds.max - this.options.bounds.min) + this.options.bounds.min;

			return this._constraintValue(raw);
		},

		/*
		 * Public
		 */

		value: function(value){
			if (typeof value != "undefined"){
				this._cache();

				value = this._constraintValue(value);

				this._position(value);
			}

			return this._value;
		},

		update: function(){
			this._cache();
			var value = this._constraintValue(this._value),
				position = this._getPositionForValue(value);

			if (value != this._value){
				this._position(value);
				this._triggerMouseEvent("update");
			}else if (position != this.cache.offset.left){
				this._position(value);
				this._triggerMouseEvent("update");
			}
		},

		position: function(position){
			if (typeof position != "undefined"){
				this._cache();
				
				position = this._constraintPosition(position);
				this._applyPosition(position);
			}

			return this._left;
		},

		add: function(value, step){
			return value + step;
		},

		substract: function(value, step){
			return value - step;
		},

		stepsBetween: function(val1, val2){
			if (this.options.step === false){
				return val2 - val1;
			}

			return (val2 - val1) / this.options.step;
		},

		multiplyStep: function(step, factor){
			return step * factor;
		},

		moveRight: function(quantity){
			var previous;

			if (this.options.step == false){
				previous = this._left;
				this.position(this._left + quantity);

				return this._left - previous;
			}
			
			previous = this._value;
			this.value(this.add(previous, this.multiplyStep(this.options.step, quantity)));

			return this.stepsBetween(previous, this._value);
		},

		moveLeft: function(quantity){
			return -this.moveRight(-quantity);
		},

		stepRatio: function(){
			if (this.options.step == false){
				return 1;
			}else{
				var steps = (this.options.bounds.max - this.options.bounds.min) / this.options.step;
				return this.cache.parent.width / steps;
			}
		}
	});
 })(jQuery);/**
 * jQRangeSlider
 * A javascript slider selector that supports dates
 *
 * Copyright (C) Guillaume Gautreau 2012
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

(function($, undefined){
	"use strict";

	$.widget("ui.rangeSliderBar", $.ui.rangeSliderDraggable, {
		options: {
			leftHandle: null,
			rightHandle: null,
			bounds: {min: 0, max: 100},
			type: "rangeSliderHandle",
			range: false,
			drag: function() {},
			stop: function() {},
			values: {min: 0, max:20},
			wheelSpeed: 4,
			wheelMode: null
		},

		_values: {min: 0, max: 20},
		_waitingToInit: 2,
		_wheelTimeout: false,

		_create: function(){
			$.ui.rangeSliderDraggable.prototype._create.apply(this);

			this.element
				.css("position", "absolute")
                                /* Remove jrom
				.css("top", 0)
                                */
				.addClass("ui-rangeSlider-bar");

			this.options.leftHandle
				.bind("initialize", $.proxy(this._onInitialized, this))
				.bind("mousestart", $.proxy(this._cache, this))
				.bind("stop", $.proxy(this._onHandleStop, this));

			this.options.rightHandle
				.bind("initialize", $.proxy(this._onInitialized, this))
				.bind("mousestart", $.proxy(this._cache, this))
				.bind("stop", $.proxy(this._onHandleStop, this));

			this._bindHandles();

			this._values = this.options.values;
		},

		_setOption: function(key, value){
			if (key === "range"){
				this._setRangeOption(value);
			} else if (key === "wheelSpeed"){
				this._setWheelSpeedOption(value);
			} else if (key === "wheelMode"){
				this._setWheelModeOption(value);
			}
		},

		_setRangeOption: function(value){
			if (typeof value != "object" || value === null){
				value = false;
			}

			if (value === false && this.options.range === false){
				return;
			}

			if (value !== false){
				var min = typeof value.min === "undefined" ? this.options.range.min || false : value.min,
					max = typeof value.max === "undefined" ? this.options.range.max || false : value.max;

				this.options.range = {
					min: min,
					max: max
				};
			}else{
				this.options.range = false;
			}

			this._setLeftRange();
			this._setRightRange();
		},

		_setWheelSpeedOption: function(value){
			if (typeof value === "number" && value > 0){
				this.options.wheelSpeed = value;
			}
		},

		_setWheelModeOption: function(value){
			if (value === null || value === false || value === "zoom" || value === "scroll"){
				if (this.options.wheelMode !== value){
					this.element.parent().unbind("mousewheel.bar");
				}

				this._bindMouseWheel(value);
				this.options.wheelMode = value;
			}
		},

		_bindMouseWheel: function(mode){
			if (mode === "zoom"){
				this.element.parent().bind("mousewheel.bar", $.proxy(this._mouseWheelZoom, this));
			}else if (mode === "scroll"){
				this.element.parent().bind("mousewheel.bar", $.proxy(this._mouseWheelScroll, this));
			}
		},

		_setLeftRange: function(){
			if (this.options.range == false){
				return false;
			}

			var rightValue = this._values.max,
				leftRange = {min: false, max: false};

			if ((this.options.range.min || false) !== false){
				leftRange.max = this._leftHandle("substract", rightValue, this.options.range.min);
			}else{
				leftRange.max = false;
			}

			if ((this.options.range.max || false) !== false){
				leftRange.min = this._leftHandle("substract", rightValue, this.options.range.max);
			}else{
				leftRange.min = false;
			}

			this._leftHandle("option", "range", leftRange);
		},

		_setRightRange: function(){
			var leftValue = this._values.min,
				rightRange = {min: false, max:false};

			if ((this.options.range.min || false) !== false){
				rightRange.min = this._rightHandle("add", leftValue, this.options.range.min);
			}else {
				rightRange.min = false;
			}

			if ((this.options.range.max || false) !== false){
				rightRange.max = this._rightHandle("add", leftValue, this.options.range.max);
			}else{
				rightRange.max = false;
			}

			this._rightHandle("option", "range", rightRange);
		},

		_deactivateRange: function(){
			this._leftHandle("option", "range", false);
			this._rightHandle("option", "range", false);
		},

		_reactivateRange: function(){
			this._setRangeOption(this.options.range);
		},

		_onInitialized: function(){
			this._waitingToInit--;

			if (this._waitingToInit === 0){
				this._initMe();
			}
		},

		_initMe: function(){
			this._cache();
			this.min(this.options.values.min);
			this.max(this.options.values.max);

			var left = this._leftHandle("position"),
				right = this._rightHandle("position") + this.options.rightHandle.width();

			this.element.offset({
				left: left
			});

			this.element.css("width", right - left);
		},

		_leftHandle: function(){
			return this._handleProxy(this.options.leftHandle, arguments);
		},

		_rightHandle: function(){
			return this._handleProxy(this.options.rightHandle, arguments);
		},

		_handleProxy: function(element, args){
			var array = Array.prototype.slice.call(args);

			return element[this.options.type].apply(element, array);
		},

		/*
		 * Draggable
		 */

		_cache: function(){
			$.ui.rangeSliderDraggable.prototype._cache.apply(this);

			this._cacheHandles();
		},

		_cacheHandles: function(){
			this.cache.rightHandle = {};
			this.cache.rightHandle.width = this.options.rightHandle.width();
			this.cache.rightHandle.offset = this.options.rightHandle.offset();

			this.cache.leftHandle = {};
			this.cache.leftHandle.offset = this.options.leftHandle.offset();
		},

		_mouseStart: function(event){
			$.ui.rangeSliderDraggable.prototype._mouseStart.apply(this, [event]);

			this._deactivateRange();
		},

		_mouseStop: function(event){
			$.ui.rangeSliderDraggable.prototype._mouseStop.apply(this, [event]);

			this._cacheHandles();

			this._values.min = this._leftHandle("value");
			this._values.max = this._rightHandle("value");
			this._reactivateRange();

			this._leftHandle().trigger("stop");
			this._rightHandle().trigger("stop");
		},

		/*
		 * Event binding
		 */

		_onDragLeftHandle: function(event, ui){
			this._cacheIfNecessary();

			if (this._switchedValues()){
				this._switchHandles();
				this._onDragRightHandle(event, ui);
				return;
			}

			this._values.min = ui.value;
			this.cache.offset.left = ui.offset.left;
			this.cache.leftHandle.offset = ui.offset;

			this._positionBar();
		},

		_onDragRightHandle: function(event, ui){
			this._cacheIfNecessary();

			if (this._switchedValues()){
				this._switchHandles(),
				this._onDragLeftHandle(event, ui);
				return;
			}

			this._values.max = ui.value;
			this.cache.rightHandle.offset = ui.offset;

			this._positionBar();
		},

		_positionBar: function(){
			var width = this.cache.rightHandle.offset.left + this.cache.rightHandle.width - this.cache.leftHandle.offset.left;
			this.cache.width.inner = width;

			this.element
				.css("width", width)
				.offset({left: this.cache.leftHandle.offset.left});
		},

		_onHandleStop: function(){
			this._setLeftRange();
			this._setRightRange();
		},

		_switchedValues: function(){
			if (this.min() > this.max()){
				var temp = this._values.min;
				this._values.min = this._values.max;
				this._values.max = temp;

				return true;
			}

			return false;
		},

		_switchHandles: function(){
			var temp = this.options.leftHandle;

			this.options.leftHandle = this.options.rightHandle;
			this.options.rightHandle = temp;

			this._leftHandle("option", "isLeft", true);
			this._rightHandle("option", "isLeft", false);

			this._bindHandles();
			this._cacheHandles();
		},

		_bindHandles: function(){
			this.options.leftHandle
				.unbind(".bar")
				.bind("drag.bar update.bar moving.bar", $.proxy(this._onDragLeftHandle, this));

			this.options.rightHandle
				.unbind(".bar")
				.bind("drag.bar update.bar moving.bar", $.proxy(this._onDragRightHandle, this));
		},

		_constraintPosition: function(left){
			var position = {},
				right;

			position.left = $.ui.rangeSliderDraggable.prototype._constraintPosition.apply(this, [left]);

			position.left = this._leftHandle("position", position.left);

			right = this._rightHandle("position", position.left + this.cache.width.outer - this.cache.rightHandle.width);
			position.width = right - position.left + this.cache.rightHandle.width;

			return position;
		},

		_applyPosition: function(position){
			$.ui.rangeSliderDraggable.prototype._applyPosition.apply(this, [position.left]);
			this.element.width(position.width);
		},

		/*
		 * Mouse wheel
		 */

		_mouseWheelZoom: function(event, delta, deltaX, deltaY){
			var middle = this._values.min + (this._values.max - this._values.min) / 2,
				leftRange = {},
				rightRange = {};

			if (this.options.range === false || this.options.range.min === false){
				leftRange.max = middle;
				rightRange.min = middle;
			} else {
				leftRange.max = middle - this.options.range.min / 2;
				rightRange.min = middle + this.options.range.min / 2;
			}

			if (this.options.range !== false && this.options.range.max !== false){
				leftRange.min = middle - this.options.range.max / 2;
				rightRange.max = middle + this.options.range.max / 2;
			}

			this._leftHandle("option", "range", leftRange);
			this._rightHandle("option", "range", rightRange);

			clearTimeout(this._wheelTimeout);
			this._wheelTimeout = setTimeout($.proxy(this._wheelStop, this), 200);

			this.zoomOut(deltaY * this.options.wheelSpeed);

			return false;
		},

		_mouseWheelScroll: function(event, delta, deltaX, deltaY){
			if (this._wheelTimeout === false){
				this.startScroll();
			} else {
				clearTimeout(this._wheelTimeout);
			}

			this._wheelTimeout = setTimeout($.proxy(this._wheelStop, this), 200);

			this.scrollLeft(deltaY * this.options.wheelSpeed);
			return false;
		},

		_wheelStop: function(){
			this.stopScroll();
			this._wheelTimeout = false;
		},

		/*
		 * Public
		 */

		min: function(value){
			return this._leftHandle("value", value);
		},

		max: function(value){
			return this._rightHandle("value", value);
		},

		startScroll: function(){
			this._deactivateRange();
		},

		stopScroll: function(){
			this._reactivateRange();
			this._triggerMouseEvent("stop");
		},

		scrollLeft: function(quantity){
			quantity = quantity || 1;

			if (quantity < 0){
				return this.scrollRight(-quantity);
			}

			quantity = this._leftHandle("moveLeft", quantity);
			this._rightHandle("moveLeft", quantity);

			this.update();
			this._triggerMouseEvent("scroll");
		},

		scrollRight: function(quantity){
			quantity = quantity || 1;

			if (quantity < 0){
				return this.scrollLeft(-quantity);
			}

			quantity = this._rightHandle("moveRight", quantity);
			this._leftHandle("moveRight", quantity);

			this.update();
			this._triggerMouseEvent("scroll");
		},

		zoomIn: function(quantity){
			quantity = quantity || 1;

			if (quantity < 0){
				return this.zoomOut(-quantity);
			}

			var newQuantity = this._rightHandle("moveLeft", quantity);

			if (quantity > newQuantity){
				newQuantity = newQuantity / 2;
				this._rightHandle("moveRight", newQuantity);
			}

			this._leftHandle("moveRight", newQuantity);

			this.update();
			this._triggerMouseEvent("zoom");
		},

		zoomOut: function(quantity){
			quantity = quantity || 1;

			if (quantity < 0){
				return this.zoomIn(-quantity);
			}

			var newQuantity = this._rightHandle("moveRight", quantity);

			if (quantity > newQuantity){
				newQuantity = newQuantity / 2;
				this._rightHandle("moveLeft", newQuantity);
			}

			this._leftHandle("moveLeft", newQuantity);

			this.update();
			this._triggerMouseEvent("zoom");
		},

		values: function(min, max){
			if (typeof min !== "undefined" && typeof max !== "undefined")
			{
				var minValue = Math.min(min, max),
					maxValue = Math.max(min, max);

				this._deactivateRange();
				this.options.leftHandle.unbind(".bar");
				this.options.rightHandle.unbind(".bar");

				this._values.min = this._leftHandle("value", minValue);
				this._values.max = this._rightHandle("value", maxValue);

				this._bindHandles();
				this._reactivateRange();

				this.update();
			}

			return {
				min: this._values.min,
				max: this._values.max
			};
		},

		update: function(){
			this._values.min = this.min();
			this._values.max = this.max();

			this._cache();
			this._positionBar();
		}

	});

})(jQuery);/**
 * jQRangeSlider
 * A javascript slider selector that supports dates
 *
 * Copyright (C) Guillaume Gautreau 2012
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

(function($, undefined){
	
	"use strict";

	$.widget("ui.rangeSliderLabel", $.ui.rangeSliderMouseTouch, {
		options: {
			handle: null,
			formatter: false,
			handleType: "rangeSliderHandle",
			show: "show",
			durationIn: 0,
			durationOut: 500,
			delayOut: 500,
			isLeft: false
		},

		cache: null,
		_positionner: null,
		_valueContainer:null,
		_innerElement:null,

		_create: function(){
			this.options.isLeft = this._handle("option", "isLeft");

			this.element
				.addClass("ui-rangeSlider-label")
				.css("position", "absolute")
				.css("display", "block");

			this._valueContainer = $("<div class='ui-rangeSlider-label-value' />")
				.appendTo(this.element);

			this._innerElement = $("<div class='ui-rangeSlider-label-inner' />")
				.appendTo(this.element);

			this._toggleClass();

			this.options.handle
				.bind("moving", $.proxy(this._onMoving, this))
				.bind("update", $.proxy(this._onUpdate, this))
				.bind("switch", $.proxy(this._onSwitch, this));

			if (this.options.show !== "show"){
				this.element.hide();
			}

			this._mouseInit();
		},

		_handle: function(){
			var args = Array.prototype.slice.apply(arguments);

			return this.options.handle[this.options.handleType].apply(this.options.handle, args);
		},

		_setOption: function(key, value){
			if (key === "show"){
				this._updateShowOption(value);
			} else if (key === "durationIn" || key === "durationOut" || key === "delayOut"){
				this._updateDurations(key, value);
			}
		},

		_updateShowOption: function(value){
			this.options.show = value;

			if (this.options.show !== "show"){
				this.element.hide();
			}else{
				this.element.show();
				this._display(this.options.handle[this.options.handleType]("value"));
				this._positionner.PositionLabels();
			}
			
			this._positionner.options.show = this.options.show;
		},

		_updateDurations: function(key, value){
			if (parseInt(value) !== value) return;

			this._positionner.options[key] = value;
			this.options[key] = value;
		},

		_display: function(value){
			if (this.options.formatter == false){
				this._displayText(Math.round(value));
			}else{
				this._displayText(this.options.formatter(value));
			}
		},

		_displayText: function(text){
			this._valueContainer.text(text);
		},

		_toggleClass: function(){
			this.element.toggleClass("ui-rangeSlider-leftLabel", this.options.isLeft)
				.toggleClass("ui-rangeSlider-rightLabel", !this.options.isLeft);
		},

		/*
		 * Mouse touch redirection
		 */
		_mouseDown: function(event){
			this.options.handle.trigger(event);
		},

		_mouseUp: function(event){
			this.options.handle.trigger(event);
		},

		_mouseMove: function(event){
			this.options.handle.trigger(event);
		},

		/*
		 * Event binding
		 */
		_onMoving: function(event, ui){
			this._display(ui.value);
		},

		_onUpdate: function(event, ui){
			if (this.options.show === "show"){
				this._display(ui.value);
			}
		},

		_onSwitch: function(event, isLeft){
			this.options.isLeft = isLeft;
			
			this._toggleClass();
			this._positionner.PositionLabels();
		},

		/*
		 * Label pair
		 */
		pair: function(label){
			if (this._positionner != null) return;

			this._positionner = new LabelPositioner(this.element, label, this.widgetName, {
				show: this.options.show,
				durationIn: this.options.durationIn,
				durationOut: this.options.durationOut,
				delayOut: this.options.delayOut
			});

			label[this.widgetName]("positionner", this._positionner);
		},

		positionner: function(pos){
			if (typeof pos !== "undefined"){
				this._positionner = pos;
			}

			return this._positionner;
		},

		update: function(){
			this._display(this._handle("value"));
			this._positionner.PositionLabels();
		}
	});

	function LabelPositioner(label1, label2, type, options){
		this.label1 = label1;
		this.label2 = label2;
		this.type = type;
		this.options = options;
		this.handle1 = this.label1[this.type]("option", "handle");
		this.handle2 = this.label2[this.type]("option", "handle");
		this.cache = null;
		this.left = label1;
		this.right = label2;
		this.moving = false;

		this.Init = function(){
			this.BindHandle(this.handle1);
			this.BindHandle(this.handle2);

			if (this.options.show === "show"){
				setTimeout($.proxy(this.PositionLabels, this), 1);
			}
		}

		this.Cache = function(){
			this.cache = {};
			this.cache.label1 = {};
			this.cache.label2 = {};
			this.cache.handle1 = {};
			this.cache.handle2 = {};

			this.CacheElement(this.label1, this.cache.label1);
			this.CacheElement(this.label2, this.cache.label2);
			this.CacheElement(this.handle1, this.cache.handle1);
			this.CacheElement(this.handle2, this.cache.handle2);
		}

		this.CacheIfNecessary = function(){
			if (this.cache === null){
				this.Cache();
			}else{
				this.CacheWidth(this.label1, this.cache.label1);
				this.CacheWidth(this.label2, this.cache.label2);
				this.CacheHeight(this.label1, this.cache.label1);
				this.CacheHeight(this.label2, this.cache.label2);
			}
		}

		this.CacheElement = function(label, cache){
			this.CacheWidth(label, cache);
			this.CacheHeight(label, cache);

			cache.offset = label.offset();
			cache.margin = {
				left: this.ParsePixels("marginLeft", label),
				right: this.ParsePixels("marginRight", label)
			};

			cache.border = {
				left: this.ParsePixels("borderLeftWidth", label),
				right: this.ParsePixels("borderRightWidth", label)
			};

			cache.outerWidth = cache.width + cache.margin.left + cache.margin.right + cache.border.left + cache.border.right;
		}

		this.CacheWidth = function(label, cache){
			cache.width = label.width();
			cache.outerWidth = label.outerWidth();
		}

		this.CacheHeight = function(label, cache){
			cache.outerHeightMargin = label.outerHeight(true);
		},

		this.ParsePixels = function(name, element){
			return parseInt(element.css(name), 10) || 0;
		}

		this.BindHandle = function(handle){
			handle.bind("moving update", $.proxy(this.onHandleMoving, this));
			handle.bind("stop", $.proxy(this.onHandleStop, this));
		}

		this.PositionLabels = function(){
			this.CacheIfNecessary();

			var label1Pos = this.GetRawPosition(this.cache.label1, this.cache.handle1),
				label2Pos = this.GetRawPosition(this.cache.label2, this.cache.handle2);

			this.ConstraintPositions(label1Pos, label2Pos);

			this.label1.offset({left:label1Pos.left});
			this.label2.offset({left:label2Pos.left});
		}

		this.ConstraintPositions = function(pos1, pos2){
			if (pos1.center < pos2.center && pos1.outerRight > pos2.outerLeft){
				pos1 = this.getLeftPosition(pos1, pos2);
				pos2 = this.getRightPosition(pos1, pos2);
			}else if (pos1.center > pos2.center && pos2.outerRight > pos1.outerLeft){
				pos2 = this.getLeftPosition(pos2, pos1);
				pos1 = this.getRightPosition(pos2, pos1);
			}
		}

		this.getLeftPosition = function(left, right){
			var center = (right.center + left.center) / 2,
				leftPos = center - left.cache.outerWidth - left.cache.margin.right + left.cache.border.left;

			left.left = leftPos;

			return left;
		}

		this.getRightPosition = function(left, right){
			var center = (right.center + left.center) / 2;

			right.left = center + right.cache.margin.left + right.cache.border.left;

			return right;
		}

		this.ShowIfNecessary = function(){
			if (this.options.show === "show" || this.moving) return;

			this.label1.stop().fadeIn(this.options.durationIn || 0);
			this.label2.stop().fadeIn(this.options.durationIn || 0);
			this.moving = true;
		},

		this.HideIfNeeded = function(lastMove){
			if (this.moving === true){
				this.label1.stop().delay(this.options.delayOut || 0).fadeOut(this.options.durationOut || 0);
				this.label2.stop().delay(this.options.delayOut || 0).fadeOut(this.options.durationOut || 0);
				this.moving = false;
			}
		},

		this.onHandleMoving = function(event, ui){
			this.CacheIfNecessary();
			this.ShowIfNecessary();
			this.UpdateHandlePosition(ui);

			this.PositionLabels();
		}

		this.onHandleStop = function(event, ui){
			this.HideIfNeeded();
		},

		this.UpdateHandlePosition = function(ui){
			if (ui.element[0] == this.handle1[0]){
				this.UpdatePosition(ui, this.cache.handle1);
			}else{
				this.UpdatePosition(ui, this.cache.handle2);
			}
		}

		this.UpdatePosition = function(element, cache){
			cache.offset = element.offset;
		}

		this.GetRawPosition = function(labelCache, handleCache){
			var handleCenter = handleCache.offset.left + handleCache.outerWidth / 2,
				labelLeft = handleCenter - labelCache.outerWidth / 2,
				labelRight = labelLeft + labelCache.outerWidth - labelCache.border.left - labelCache.border.right,
				outerLeft = labelLeft - labelCache.margin.left - labelCache.border.left,
				top = handleCache.offset.top - labelCache.outerHeightMargin;

			return {
				left: labelLeft,
				outerLeft: outerLeft,
				top: top,
				right: labelRight,
				outerRight: outerLeft + labelCache.outerWidth + labelCache.margin.left + labelCache.margin.right,
				cache: labelCache,
				center: handleCenter
			}
		}

		this.Init();
	}

})(jQuery);


/**
 * jQRangeSlider
 * A javascript slider selector that supports dates
 *
 * Copyright (C) Guillaume Gautreau 2012
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

(function ($, undefined) {
    "use strict";

    $.widget("ui.rangeSlider", {
        options: {
            bounds: {
                min:0, 
                max:100
            },
            defaultValues: {
                min:20, 
                max:50
            },
            wheelMode: null,
            wheelSpeed: 4,
            arrows: true,
            valueLabels: "show",
            formatter: null,
            durationIn: 0,
            durationOut: 400,
            delayOut: 200,
            range: {
                min: false, 
                max: false
            },
            step: false
        },

        _values: null,
        _valuesChanged: false,

        // Created elements
        bar: null,
        leftHandle: null,
        rightHandle: null,
        innerBar: null,
        container: null,
        arrows: null,
        labels: null,
        changing: {
            min:false, 
            max:false
        },
        changed: {
            min:false, 
            max:false
        },
                
        _create: function(){
            this._values = {
                min: this.options.defaultValues.min,
                max: this.options.defaultValues.max
            };

            this.labels = {
                left: null, 
                right:null, 
                leftDisplayed:true, 
                rightDisplayed:true
            };
            this.arrows = {
                left:null, 
                right:null
            };
            this.changing = {
                min:false, 
                max:false
            };
            this.changed = {
                min:false, 
                max:false
            };

            if (this.element.css("position") !== "absolute"){
                this.element.css("position", "relative");
            }

            this.container = $("<div class='ui-rangeSlider-container' />").appendTo(this.element);
            this.innerBar = $("<div class='ui-rangeSlider-innerBar' />");
                       
            this.leftHandle = this._createHandle({
                isLeft: true,
                bounds: this.options.bounds,
                value: this.options.defaultValues.min,
                step: this.options.step
            }).appendTo(this.container);
	
            this.rightHandle = this._createHandle({
                isLeft: false,
                bounds: this.options.bounds,
                value: this.options.defaultValues.max,
                step: this.options.step
            }).appendTo(this.container);

            this._createBar();

            this.container.prepend(this.innerBar);

            this.arrows.left = this._createArrow("left");
            this.arrows.right = this._createArrow("right");

            this.element.addClass("ui-rangeSlider");

            if (!this.options.arrows){
                this.arrows.left.css("display", "none");
                this.arrows.right.css("display", "none");
                this.element.addClass("ui-rangeSlider-noArrow");
            }else{
                this.element.addClass("ui-rangeSlider-withArrows");
            }
            if (this.options.valueLabels !== "hide"){
                this._createLabels();
            }else{
                this._destroyLabels();
            }

            this._bindResize();

            setTimeout($.proxy(this.resize, this), 1);
            setTimeout($.proxy(this._initValues, this), 1);
        },

        _bindResize: function(){
            var that = this;

            this._resizeProxy = function(e){
                that.resize(e);
            };

            $(window).resize(this._resizeProxy);
        },

        _initWidth: function(){
            this.container.css("width", this.element.width() - this.container.outerWidth(true) + this.container.width());
            this.innerBar.css("width", this.container.width() - this.innerBar.outerWidth(true) + this.innerBar.width());
                        
        },

        _initValues: function(){
            this.values(this.options.defaultValues.min, this.options.defaultValues.max);
        },

        _setOption: function(key, value) {
            var option = this.options;
			
            if (key === "defaultValues")
            {
                if ((typeof value.min !== "undefined") && (typeof value.max !== "undefined") && parseFloat(value.min) === value.min && parseFloat(value.max) === value.max)
                {
                    this.options.defaultValues = value;
                }
            }else if (key === "wheelMode" || key === "wheelSpeed"){
                this._bar("option", key, value);
                this.options[key] = this._bar("option", key);
            }else if (key === "arrows" && (value === true || value === false) && value !== this.options.arrows){
                this._setArrowsOption(value);
            }else if (key === "valueLabels"){
                this._setLabelsOption(value);
            }else if (key === "durationIn" || key === "durationOut" || key === "delayOut"){
                this._setLabelsDurations(key, value);
            }else if (key === "formatter" && value !== null && typeof value === "function"){
                this.options.formatter = value;
				
                if (this.options.valueLabels !== "hide"){
                    this._destroyLabels();
                    this._createLabels();
                }
            }else if (key === "bounds" && typeof value.min !== "undefined" && typeof value.max !== "undefined"){
                this.bounds(value.min, value.max);
            }else if (key === "range"){
                this._bar("option", "range", value);
                this.options.range = this._bar("option", "range");
                this._changed(true);
            }else if (key === "step"){
                this.options.step = value;
                this._leftHandle("option", "step", value);
                this._rightHandle("option", "step", value);
                this._changed(true);
            }
        },

        _validProperty: function(object, name, defaultValue){
            if (object === null || typeof object[name] === "undefined"){
                return defaultValue;
            }

            return object[name];
        },

        _setLabelsOption: function(value){
            if (value !== "hide" && value !== "show" && value !== "change"){
                return;
            }

            this.options.valueLabels = value;

            if (value !== "hide"){
                this._createLabels();
                this._leftLabel("update");
                this._rightLabel("update");
            }else{
                this._destroyLabels();
            }
        },

        _setArrowsOption: function(value){
            if (value === true){
                this.element
                .removeClass("ui-rangeSlider-noArrow")
                .addClass("ui-rangeSlider-withArrows");
                this.arrows.left.css("display", "block");
                this.arrows.right.css("display", "block");
                this.options.arrows = true;
            }else if (value === false){
                this.element
                .addClass("ui-rangeSlider-noArrow")
                .removeClass("ui-rangeSlider-withArrows");
                this.arrows.left.css("display", "none");
                this.arrows.right.css("display", "none");
                this.options.arrows = false;
            }

            this._initWidth();
        },

        _setLabelsDurations: function(key, value){
            if (parseInt(value, 10) !== value) return;

            if (this.labels.left !== null){
                this._leftLabel("option", key, value);
            }

            if (this.labels.right !== null){
                this._rightLabel("option", key, value);
            }

            this.options[key] = value;
        },

        _createHandle: function(options){
            return $("<div />")
            [this._handleType()](options)
            .bind("drag", $.proxy(this._changing, this))
            .bind("stop", $.proxy(this._changed, this));
        },
		
        _createBar: function(){
            this.bar = $("<div />")
            .prependTo(this.container)
            .bind("drag scroll zoom", $.proxy(this._changing, this))
            .bind("stop", $.proxy(this._changed, this));
			
            this._bar({
                leftHandle: this.leftHandle,
                rightHandle: this.rightHandle,
                values: {
                    min: this.options.defaultValues.min, 
                    max: this.options.defaultValues.max
                    },
                type: this._handleType(),
                range: this.options.range
            });

            this.options.range = this._bar("option", "range");
        },

        _createArrow: function(whichOne){
            var arrow = $("<div class='ui-rangeSlider-arrow' />")
            .append("<div class='ui-rangeSlider-arrow-inner' />")
            .addClass("ui-rangeSlider-" + whichOne + "Arrow")
            .css("position", "absolute")
            .css(whichOne, 0)
            .appendTo(this.element),
            target;

            if (whichOne === "right"){
                target = $.proxy(this._scrollRightClick, this);
            }else{
                target = $.proxy(this._scrollLeftClick, this);
            }

            arrow.bind("mousedown touchstart", target);

            return arrow;
        },

        _proxy: function(element, type, args){
            var array = Array.prototype.slice.call(args);

            return element[type].apply(element, array);
        },

        _handleType: function(){
            return "rangeSliderHandle";
        },

        _barType: function(){
            return "rangeSliderBar";
        },

        _bar: function(){
            return this._proxy(this.bar, this._barType(), arguments);
        },

        _labelType: function(){
            return "rangeSliderLabel";
        },

        _leftLabel: function(){
            return this._proxy(this.labels.left, this._labelType(), arguments);
        },

        _rightLabel: function(){
            return this._proxy(this.labels.right, this._labelType(), arguments);
        },

        _leftHandle: function(){
            return this._proxy(this.leftHandle, this._handleType(), arguments);
        },

        _rightHandle: function(){
            return this._proxy(this.rightHandle, this._handleType(), arguments);
        },

        _getValue: function(position, handle){
            if (handle === this.rightHandle){	
                position = position - handle.outerWidth();
            }
			
            return position * (this.options.bounds.max - this.options.bounds.min) / (this.container.innerWidth() - handle.outerWidth(true)) + this.options.bounds.min;
        },

        _trigger: function(eventName){
            var that = this;

            setTimeout(function(){
                that.element.trigger(eventName, {
                    label: that.element,
                    values: that.values()
                });
            }, 1);
        },

        _changing: function(event, ui){
            if(this._updateValues()){
                this._trigger("valuesChanging");
                this._valuesChanged = true;
            }
        },

        _changed: function(isAutomatic){
            if (this._updateValues() || this._valuesChanged){
                this._trigger("valuesChanged");

                if (isAutomatic !== true){
                    this._trigger("userValuesChanged");					
                }

                this._valuesChanged = false;
            }
        },

        _updateValues: function(){
            var left = this._leftHandle("value"),
            right = this._rightHandle("value"),
            min = this._min(left, right),
            max = this._max(left, right),
            changing = (min !== this._values.min || max !== this._values.max);

            this._values.min = this._min(left, right);
            this._values.max = this._max(left, right);

            return changing;
        },

        _min: function(value1, value2){
            return Math.min(value1, value2);
        },

        _max: function(value1, value2){
            return Math.max(value1, value2);
        },

        /*
         * Value labels
         */
        _createLabel: function(label, handle){
            var params;

            if (label === null){
                params = this._getLabelConstructorParameters(label, handle);
                label = $("<div />")
                .appendTo(this.element)
                [this._labelType()](params);
            }else{
                params = this._getLabelRefreshParameters(label, handle);

                label[this._labelType()](params);
            }

            return label;
        },

        _getLabelConstructorParameters: function(label, handle){
            return {
                handle: handle,
                handleType: this._handleType(),
                formatter: this._getFormatter(),
                show: this.options.valueLabels,
                durationIn: this.options.durationIn,
                durationOut: this.options.durationOut,
                delayOut: this.options.delayOut
            };
        },

        _getLabelRefreshParameters: function(label, handle){
            return {
                formatter: this._getFormatter(),
                show: this.options.valueLabels,
                durationIn: this.options.durationIn,
                durationOut: this.options.durationOut,
                delayOut: this.options.delayOut
            };
        },

        _getFormatter: function(){
            if (this.options.formatter === false || this.options.formatter === null){
                return this._defaultFormatter;
            }

            return this.options.formatter;
        },

        _defaultFormatter: function(value){
            return Math.round(value);
        },

        _destroyLabel: function(label){
            if (label !== null){
                label.remove();
                label = null;
            }

            return label;
        },

        _createLabels: function(){
            this.labels.left = this._createLabel(this.labels.left, this.leftHandle);
            this.labels.right = this._createLabel(this.labels.right, this.rightHandle);

            this._leftLabel("pair", this.labels.right);
        },

        _destroyLabels: function(){
            this.labels.left = this._destroyLabel(this.labels.left);
            this.labels.right = this._destroyLabel(this.labels.right);
        },

        /*
         * Scrolling
         */
        _stepRatio: function(){
            return this._leftHandle("stepRatio");
        },

        _scrollRightClick: function(e){
            e.preventDefault();
            this._bar("startScroll");
            this._bindStopScroll();

            this._continueScrolling("scrollRight", 4 * this._stepRatio(), 1);
        },

        _continueScrolling: function(action, timeout, quantity, timesBeforeSpeedingUp){
            this._bar(action, quantity);
            timesBeforeSpeedingUp = timesBeforeSpeedingUp || 5;
            timesBeforeSpeedingUp--;

            var that = this,
            minTimeout = 16,
            maxQuantity = Math.max(1, 4 / this._stepRatio());

            this._scrollTimeout = setTimeout(function(){
                if (timesBeforeSpeedingUp === 0){
                    if (timeout > minTimeout){
                        timeout = Math.max(minTimeout, timeout / 1.5);	
                    } else {
                        quantity = Math.min(maxQuantity, quantity * 2);
                    }
					
                    timesBeforeSpeedingUp = 5;
                }

                that._continueScrolling(action, timeout, quantity, timesBeforeSpeedingUp);
            }, timeout);
        },

        _scrollLeftClick: function(e){
            e.preventDefault();

            this._bar("startScroll");
            this._bindStopScroll();

            this._continueScrolling("scrollLeft", 4 * this._stepRatio(), 1);
        },

        _bindStopScroll: function(){
            var that = this;
            this._stopScrollHandle = function(e){
                e.preventDefault();
                that._stopScroll();
            };

            $(document).bind("mouseup touchend", this._stopScrollHandle);
        },

        _stopScroll: function(){
            $(document).unbind("mouseup touchend", this._stopScrollHandle);
            this._bar("stopScroll");
            clearTimeout(this._scrollTimeout);
        },

        /*
         * Public methods
         */
        values: function(min, max){
            var val = this._bar("values", min, max);

            if (typeof min !== "undefined" && typeof max !== "undefined"){
                this._changed(false);
            }

            return val;
        },

        min: function(min){
            this._values.min = this.values(min, this._values.max).min;

            return this._values.min;
        },

        max: function(max){
            this._values.max = this.values(this._values.min, max).max;

            return this._values.max;
        },
		
        bounds: function(min, max){
            if ((typeof min !== "undefined") && (typeof max !== "undefined") 
                && parseFloat(min) === min && parseFloat(max) === max && min < max){
				
                this._setBounds(min, max);
                this._changed(true);
            }
			
            return this.options.bounds;
        },

        _setBounds: function(min, max){
            this.options.bounds = {
                min: min, 
                max: max
            };
            this._leftHandle("option", "bounds", this.options.bounds);
            this._rightHandle("option", "bounds", this.options.bounds);
            this._bar("option", "bounds", this.options.bounds);
        },

        zoomIn: function(quantity){
            this._bar("zoomIn", quantity)
        },

        zoomOut: function(quantity){
            this._bar("zoomOut", quantity);
        },

        scrollLeft: function(quantity){
            this._bar("startScroll");
            this._bar("scrollLeft", quantity);
            this._bar("stopScroll");
        },

        scrollRight: function(quantity){
            this._bar("startScroll");
            this._bar("scrollRight", quantity);
            this._bar("stopScroll");
        },
		
        /**
         * Resize
         */
        resize: function(){
            this._initWidth();
            this._leftHandle("update");
            this._rightHandle("update");
        },

        destroy: function(){
            this.element.removeClass("ui-rangeSlider-withArrows")
            .removeClass("ui-rangeSlider-noArrow");
            this.bar.detach();
            this.leftHandle.detach();
            this.rightHandle.detach();
            this.innerBar.detach();
            this.container.detach();
            this.arrows.left.detach();
            this.arrows.right.detach();
            this.element.removeClass("ui-rangeSlider");
            this._destroyLabels();
            delete this.options;

            $(window).unbind("resize", this._resizeProxy);

            $.Widget.prototype.destroy.apply(this, arguments);
        }
                
    });
})(jQuery);/**
 * jQRangeSlider
 * A javascript slider selector that supports dates
 *
 * Copyright (C) Guillaume Gautreau 2012
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

(function($, undefined){
	"use strict";

	$.widget("ui.dateRangeSliderHandle", $.ui.rangeSliderHandle, {
		_steps: false,
		_boundsValues: {},

		_create: function(){
			$.ui.rangeSliderHandle.prototype._create.apply(this);
			this._createBoundsValues();
		},

		_getValueForPosition: function(position){
			var min = this.options.bounds.min.valueOf(),
				max = this.options.bounds.max.valueOf();

			if (!this.options.isLeft){
				position += this.cache.width.outer;
			}

			var ratio = (position - this.cache.parent.offset.left) / this.cache.parent.width,
				raw = ratio * (max - min) + min;

			return this._constraintValue(new Date(raw));
		},

		_setOption: function(key, value){
			if (key === "step"){
				this.options.step = value;
				this._createSteps();
				this.update();
				return;
			}

			$.ui.rangeSliderHandle.prototype._setOption.apply(this, [key, value]);

			if (key === "bounds"){
				this._createBoundsValues();
			}
		},

		_createBoundsValues: function(){
			this._boundsValues = {
					min: this.options.bounds.min.valueOf(),
					max: this.options.bounds.max.valueOf()
			};
		},

		_bounds: function(){
			return this._boundsValues;
		},

		_createSteps: function(){
			if (this.options.step === false || !this._isValidStep()){
				this._steps = false;
				return;
			}

			var minDate = new Date(this.options.bounds.min),
				maxDate = new Date(this.options.bounds.max),
				stepDate = minDate,
				i = 0;

			this._steps = [];

			while (stepDate <= maxDate){
				this._steps.push(stepDate.valueOf());

				stepDate = this._addStep(minDate, i, this.options.step);
				i++;
			}
		},

		_isValidStep: function(){
			return typeof this.options.step === "object";
		},

		_addStep: function(reference, factor, step){
			var result = new Date(reference.valueOf());

			result = this._addThing(result, "FullYear", factor, step.years);
			result = this._addThing(result, "Month", factor, step.months);
			result = this._addThing(result, "Date", factor, step.days);
			result = this._addThing(result, "Hours", factor, step.hours);
			result = this._addThing(result, "Minutes", factor, step.minutes);
			result = this._addThing(result, "Seconds", factor, step.seconds);

			return result;
		},

		_addThing: function(date, thing, factor, base){
			if (factor === 0 || (base || 0) === 0){
				return date;
			}

			date["set" + thing](
				date["get" + thing]() + factor * (base || 0)
				);

			return date;
		},

		_round: function(value){
			if (this._steps === false){
				return value;
			}

			var max = this.options.bounds.max.valueOf(),
				min = this.options.bounds.min.valueOf(),
				ratio = (value - min) / (max - min),
				index = Math.floor(this._steps.length * ratio),
				before, after;

			while (this._steps[index] > value){
				index--;
			}

			while (index + 1 < this._steps.length && this._steps[index + 1] <= value){
				index++;
			}

			if (index >= this._steps.length - 1){
				return this._steps[this._steps.length - 1];
			} else if (index == 0){
				return this._steps[0];
			}

			before = this._steps[index];
			after = this._steps[index + 1];

			if (value - before < after - value){
				return before;
			}

			return after;
		},

		update: function(){
			this._createBoundsValues();
			this._createSteps();
			$.ui.rangeSliderHandle.prototype.update.apply(this);
		},

		add: function(date, step){
			return this._addStep(new Date(date), 1, step).valueOf();
		},

		substract: function(date, step){
			return this._addStep(new Date(date), -1, step).valueOf();
		},

		stepsBetween: function(date1, date2){
			if (this.options.step === false){
				return val2 - val1;
			}

			var min = Math.min(date1, date2),
				max = Math.max(date1, date2),
				steps = 0,
				negative = false,
				negativeResult = date1 > date2;

			if (this.add(min, this.options.step) - min < 0){
				negative = true;
			}

			while (min < max){
					if (negative){
						max = this.add(max, this.options.step);
					}else{
						min = this.add(min, this.options.step);	
					}
					
					steps++;
				}

			return negativeResult ? -steps : steps;
		},

		multiplyStep: function(step, factor){
			var result = {};

			for (var name in step){
				result[name] = step[name] * factor;
			}

			return result;
		},

		stepRatio: function(){
			if (this.options.step == false){
				return 1;
			}else{
				var steps = this._steps.length;
				return this.cache.parent.width / steps;
			}
		}
	});
})(jQuery);/**
 * jQRangeSlider
 * A javascript slider selector that supports dates
 *
 * Copyright (C) Guillaume Gautreau 2012
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Modified for mapshup -  (C) Jerome Gasperi 2012
 * Licensed under the CeCILL-B licence
 */
/*
 * Override of jQRangeSlider class for mapshup :
 *  - override _create() function
 *  - override _initWidth() function
 *  - add _getScaleValue() function
 *  - add _getScalePosition() function
 *  - add _positionScaleRight() function
 *  - add _createScale() function
 *
 */
(function ($, undefined) {
    "use strict";
	
    $.widget("ui.dateRangeSlider", $.ui.rangeSlider, {
        options: {
            bounds: {
                min: new Date(2000,0,1), 
                max: new Date(2012,0,1)
            },
            defaultValues: {
                min: new Date(2011,0,1), 
                max: new Date(2012,0,1)
            }
        },
        
        /* START mapshup */
        scaleBar:null,
        /* END mapshup */

        /*
         * Override jQRangeSlider _create function to support mapshup Date slider
         * This function add an implicit scaleBar
         */
        _create: function(){
            $.ui.rangeSlider.prototype._create.apply(this);

            /* Add scaleBar within the inner bar */
            this.scaleBar = $("<div class='ui-rangeSlider-scaleBar' />");
            this.innerBar.append(this.scaleBar);
                        
            this.element.addClass("ui-dateRangeSlider");
        },

        destroy: function(){
            this.element.removeClass("ui-dateRangeSlider");
            $.ui.rangeSlider.prototype.destroy.apply(this);
        },

        _setOption: function(key, value){
            if ((key === "defaultValues" || key === "bounds") && typeof value !== "undefined" && value !== null && typeof value.min !== "undefined" && typeof value.max !== "undefined" && value.min instanceof Date && value.max instanceof Date){
                $.ui.rangeSlider.prototype._setOption.apply(this, [key, {
                    min:value.min.valueOf(), 
                    max:value.max.valueOf()
                }]);
            }else{
                $.ui.rangeSlider.prototype._setOption.apply(this, this._toArray(arguments));
            }
        },

        _handleType: function(){
            return "dateRangeSliderHandle";
        },

        option: function(key, value){
            if (key === "bounds" || key === "defaultValues"){
                var result = $.ui.rangeSlider.prototype.option.apply(this, arguments);

                return {
                    min:new Date(result.min), 
                    max:new Date(result.max)
                };
            }

            return $.ui.rangeSlider.prototype.option.apply(this, this._toArray(arguments));
        },

        _defaultFormatter: function(value){
            var month = value.getMonth() + 1,
            day = value.getDate();

            return "" + value.getFullYear() + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day);
        },

        _getFormatter: function(){
            var formatter = this.options.formatter;

            if (this.options.formatter === false || this.options.formatter === null){
                formatter = this._defaultFormatter;
            }

            return (function(formatter){
                return function(value){
                    return formatter(new Date(value));
                }
            })(formatter);
        },
        
        /*
         * Override jQRangeSlider initWidth function to force initialisation
         * of mapshup scale bar
         */
        _initWidth: function(){
            $.ui.rangeSlider.prototype._initWidth.apply(this);
            this._createScale();
        },

        values: function(min, max){
            var values = null;
			
            if (typeof min !== "undefined" && typeof max !== "undefined" && min instanceof Date && max instanceof Date)
            {
                values = $.ui.rangeSlider.prototype.values.apply(this, [min.valueOf(), max.valueOf()]);
            }else{
                values = $.ui.rangeSlider.prototype.values.apply(this, this._toArray(arguments));
            }

            return {
                min: new Date(values.min), 
                max: new Date(values.max)
            };
        },

        min: function(min){
            if (typeof min !== "undefined" && min instanceof Date){
                return new Date($.ui.rangeSlider.prototype.min.apply(this, [min.valueOf()]));
            }

            return new Date($.ui.rangeSlider.prototype.min.apply(this));
        },

        max: function(max){
            if (typeof max !== "undefined" && max instanceof Date){
                return new Date($.ui.rangeSlider.prototype.max.apply(this, [max.valueOf()]));
            }

            return new Date($.ui.rangeSlider.prototype.max.apply(this));
        },
		
        _toArray: function(argsObject){
            return Array.prototype.slice.call(argsObject);
        },
        
        /* START mashup */
        _getScaleValue: function(position){
            return (position *  (this.options.bounds.max.getTime() - this.options.bounds.min.getTime()) / (this.scaleBar.width() - 1)) + this.options.bounds.min.getTime();
        },
        
        _getScalePosition: function(value){
            return (value.getTime() - this.options.bounds.min.getTime()) * (this.scaleBar.width() - 1) / (this.options.bounds.max.getTime() - this.options.bounds.min.getTime());
        },
       
        /*
         * Create a numerical scale with dates
         * The scale extends from min to max bounds
         * 
         */
        _createScale: function(){

            /* clear old scale */
            this.scaleBar.empty();
            
            /*
             * Cursor value goes from 0 to scaleBar width
             */
            var i, j, p1, w, m, mSteps,
            scaleUnit = "",
            minWidthPerYear = 150,
            scaleWidth = this.innerBar.width(),
            y1 = this.options.bounds.min.getFullYear(),
            y2 = this.options.bounds.max.getFullYear(),
            ySteps = ((((y2 - y1) * minWidthPerYear) / scaleWidth)|0) + 1;
            
            this.scaleBar.css("width", scaleWidth);

            /*
             * Create scaleUnit html
             * Do not use jQuery append to speed up things
             * 
             * First compute years
             */
            for (i = y1; i <= y2; i++) {
                
                /*
                 * Get date position
                 */
                p1 = this._getScalePosition(new Date(i, 0, 1));
                
                /*
                 * Compute year width
                 */
                w = this._getScalePosition(new Date(i+1, 0, 1)) - p1;
                
                /*
                 * Alternate background each year
                 */
                scaleUnit += '<span class="ui-rangeSlider-bgy" style="left:'+p1+'px;width:'+w+'px;background-color:rgba(255,255,255,'+(i % 2 === 0 ? "0" : "0.2")+');"></span>';
                
                /*
                 * Only display one year per ySteps
                 */
                if ((i / ySteps) % 1 === 0) {
                    scaleUnit += '<span class="ui-rangeSlider-bigScaleUnit" style="left:'+p1+'px;">'+i+'</span>';
                }
                
                /*
                 * Compute months
                 */
                for (j = 0; j < 12; j++) {
                    
                   /*
                    * Get month position
                    */
                    p1 = this._getScalePosition(new Date(i, j, 1));
                    
                    
                   /*
                    * Get month width
                    */
                    w = this._getScalePosition(new Date(i, j + 1, 1)) - p1;
                    
                    
                   /*
                    * Alternate background each month
                    */
                    scaleUnit += '<span class="ui-rangeSlider-bgm" style="left:'+p1+'px;width:'+w+'px;background-color:rgba(0,0,0,'+(j % 2 === 0 ? "0.1" : "0.2")+');"></span>';

                   /*
                    * Write month from 01 (january) to 12 (december)
                    */
                    m = j + 1 < 10 ? "0" + (j + 1) : j + 1;
                    mSteps = (((minWidthPerYear) / (12 * w))|0) + 1;
                    
                   /*
                    * Only display one month per mSteps
                    */
                    if ((j / mSteps) % 1 === 0) {
                        scaleUnit += '<span class="ui-rangeSlider-scaleUnit" style="left:'+p1+'px;">'+m+'</span>';
                    }
                }
                
            }
            
            /* One big append is better than several small ones :) */
            this.scaleBar.append(scaleUnit);
            
        },
         
        /*
         * Override bounds public method
         */
        bounds: function(min, max){
            var result;

            if (typeof min !== "undefined" && min instanceof Date
                && typeof max !== "undefined" && max instanceof Date) {
                result = $.ui.rangeSlider.prototype.bounds.apply(this, [min.valueOf(), max.valueOf()]);
            } else {
                result = $.ui.rangeSlider.prototype.bounds.apply(this, this._toArray(arguments));
            }

            this._setBounds(min, max);
            this._initWidth();
            this._changed(true);

            return {
                min: new Date(result.min), 
                max: new Date(result.max)
            };
        }
    /* END mapshup */
        
    });
})(jQuery);