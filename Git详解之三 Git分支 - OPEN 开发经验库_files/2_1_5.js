/*! 4494 2013-12-3 20:13:23 */
var requirejs,require,define;if(function(global){function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var n;for(n=0;n<e.length&&(!e[n]||!t(e[n],n,e));n+=1);}}function eachReverse(e,t){if(e){var n;for(n=e.length-1;n>-1&&(!e[n]||!t(e[n],n,e));n-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var n;for(n in e)if(hasProp(e,n)&&t(e[n],n))break}function mixin(e,t,n,i){return t&&eachProp(t,function(t,r){(n||!hasProp(e,r))&&(i&&"string"!=typeof t?(e[r]||(e[r]={}),mixin(e[r],t,n,i)):e[r]=t)}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,n,i){var r=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return r.requireType=e,r.requireModules=i,n&&(r.originalError=n),r}function newContext(e){function t(e){var t,n;for(t=0;e[t];t+=1)if(n=e[t],"."===n)e.splice(t,1),t-=1;else if(".."===n){if(1===t&&(".."===e[2]||".."===e[0]))break;t>0&&(e.splice(t-1,2),t-=2)}}function n(e,n,i){var r,o,a,s,c,d,l,u,f,p,m,h=n&&n.split("/"),g=h,v=_.map,y=v&&v["*"];if(e&&"."===e.charAt(0)&&(n?(g=getOwn(_.pkgs,n)?h=[n]:h.slice(0,h.length-1),e=g.concat(e.split("/")),t(e),o=getOwn(_.pkgs,r=e[0]),e=e.join("/"),o&&e===r+"/"+o.main&&(e=r)):0===e.indexOf("./")&&(e=e.substring(2))),i&&v&&(h||y)){for(s=e.split("/"),c=s.length;c>0;c-=1){if(l=s.slice(0,c).join("/"),h)for(d=h.length;d>0;d-=1)if(a=getOwn(v,h.slice(0,d).join("/")),a&&(a=getOwn(a,l))){u=a,f=c;break}if(u)break;!p&&y&&getOwn(y,l)&&(p=getOwn(y,l),m=c)}!u&&p&&(u=p,f=m),u&&(s.splice(0,f,u),e=s.join("/"))}return e}function i(e){isBrowser&&each(scripts(),function(t){return t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===w.contextName?(t.parentNode.removeChild(t),!0):void 0})}function r(e){var t=getOwn(_.paths,e);return t&&isArray(t)&&t.length>1?(i(e),t.shift(),w.require.undef(e),w.require([e]),!0):void 0}function o(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function a(e,t,i,r){var a,s,c,d,l=null,u=t?t.name:null,f=e,p=!0,m="";return e||(p=!1,e="_@r"+(q+=1)),d=o(e),l=d[0],e=d[1],l&&(l=n(l,u,r),s=getOwn(O,l)),e&&(l?m=s&&s.normalize?s.normalize(e,function(e){return n(e,u,r)}):n(e,u,r):(m=n(e,u,r),d=o(m),l=d[0],m=d[1],i=!0,a=w.nameToUrl(m))),c=!l||s||i?"":"_unnormalized"+(A+=1),{prefix:l,name:m,parentMap:t,unnormalized:!!c,url:a,originalName:f,isDefine:p,id:(l?l+"!"+m:m)+c}}function s(e){var t=e.id,n=getOwn(S,t);return n||(n=S[t]=new w.Module(e)),n}function c(e,t,n){var i=e.id,r=getOwn(S,i);!hasProp(O,i)||r&&!r.defineEmitComplete?s(e).on(t,n):"defined"===t&&n(O[i])}function d(e,t){var n=e.requireModules,i=!1;t?t(e):(each(n,function(t){var n=getOwn(S,t);n&&(n.error=e,n.events.error&&(i=!0,n.emit("error",e)))}),i||req.onError(e))}function l(){globalDefQueue.length&&(apsp.apply(T,[T.length-1,0].concat(globalDefQueue)),globalDefQueue=[])}function u(e){delete S[e],delete k[e]}function f(e,t,n){var i=e.map.id;e.error?e.emit("error",e.error):(t[i]=!0,each(e.depMaps,function(i,r){var o=i.id,a=getOwn(S,o);!a||e.depMatched[r]||n[o]||(getOwn(t,o)?(e.defineDep(r,O[o]),e.check()):f(a,t,n))}),n[i]=!0)}function p(){var e,t,n,o,a=1e3*_.waitSeconds,s=a&&w.startTime+a<(new Date).getTime(),c=[],l=[],u=!1,m=!0;if(!y){if(y=!0,eachProp(k,function(n){if(e=n.map,t=e.id,n.enabled&&(e.isDefine||l.push(n),!n.error))if(!n.inited&&s)r(t)?(o=!0,u=!0):(c.push(t),i(t));else if(!n.inited&&n.fetched&&e.isDefine&&(u=!0,!e.prefix))return m=!1}),s&&c.length)return n=makeError("timeout","Load timeout for modules: "+c,null,c),n.contextName=w.contextName,d(n);m&&each(l,function(e){f(e,{},{})}),s&&!o||!u||!isBrowser&&!isWebWorker||E||(E=setTimeout(function(){E=0,p()},50)),y=!1}}function m(e){hasProp(O,e[0])||s(a(e[0],null,!0)).init(e[1],e[2])}function h(e,t,n,i){e.detachEvent&&!isOpera?i&&e.detachEvent(i,t):e.removeEventListener(n,t,!1)}function g(e){var t=e.currentTarget||e.srcElement;return h(t,w.onScriptLoad,"load","onreadystatechange"),h(t,w.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function v(){var e;for(l();T.length;){if(e=T.shift(),null===e[0])return d(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));m(e)}}var y,b,w,x,E,_={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},config:{}},S={},k={},P={},T=[],O={},C={},q=1,A=1;return x={require:function(e){return e.require?e.require:e.require=w.makeRequire(e.map)},exports:function(e){return e.usingExports=!0,e.map.isDefine?e.exports?e.exports:e.exports=O[e.map.id]={}:void 0},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return _.config&&getOwn(_.config,e.map.id)||{}},exports:O[e.map.id]}}},b=function(e){this.events=getOwn(P,e.id)||{},this.map=e,this.shim=getOwn(_.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},b.prototype={init:function(e,t,n,i){i=i||{},this.inited||(this.factory=t,n?this.on("error",n):this.events.error&&(n=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=i.ignore,i.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,w.startTime=(new Date).getTime();var e=this.map;return this.shim?(w.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})),void 0):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;C[e]||(C[e]=!0,w.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,n=this.map.id,i=this.depExports,r=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error)try{r=w.execCb(n,o,i,r)}catch(a){e=a}else r=w.execCb(n,o,i,r);if(this.map.isDefine&&(t=this.module,t&&void 0!==t.exports&&t.exports!==this.exports?r=t.exports:void 0===r&&this.usingExports&&(r=this.exports)),e)return e.requireMap=this.map,e.requireModules=[this.map.id],e.requireType="define",d(this.error=e)}else r=o;this.exports=r,this.map.isDefine&&!this.ignore&&(O[n]=r,req.onResourceLoad&&req.onResourceLoad(w,this.map,this.depMaps)),u(n),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,i=a(e.prefix);this.depMaps.push(i),c(i,"defined",bind(this,function(i){var r,o,l,f=this.map.name,p=this.map.parentMap?this.map.parentMap.name:null,m=w.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(i.normalize&&(f=i.normalize(f,function(e){return n(e,p,!0)})||""),o=a(e.prefix+"!"+f,this.map.parentMap),c(o,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),l=getOwn(S,o.id),l&&(this.depMaps.push(o),this.events.error&&l.on("error",bind(this,function(e){this.emit("error",e)})),l.enable()),void 0):(r=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),r.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(S,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&u(e.map.id)}),d(e)}),r.fromText=bind(this,function(n,i){var o=e.name,c=a(o),l=useInteractive;i&&(n=i),l&&(useInteractive=!1),s(c),hasProp(_.config,t)&&(_.config[o]=_.config[t]);try{req.exec(n)}catch(u){return d(makeError("fromtexteval","fromText eval for "+t+" failed: "+u,u,[t]))}l&&(useInteractive=!0),this.depMaps.push(c),w.completeLoad(o),m([o],r)}),i.load(e.name,m,r,_),void 0)})),w.enable(i,this),this.pluginMaps[i.id]=i},enable:function(){k[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var n,i,r;if("string"==typeof e){if(e=a(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,r=getOwn(x,e.id))return this.depExports[t]=r(this),void 0;this.depCount+=1,c(e,"defined",bind(this,function(e){this.defineDep(t,e),this.check()})),this.errback&&c(e,"error",this.errback)}n=e.id,i=S[n],hasProp(x,n)||!i||i.enabled||w.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(S,e.id);t&&!t.enabled&&w.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},w={config:_,contextName:e,registry:S,defined:O,urlFetched:C,defQueue:T,Module:b,makeModuleMap:a,nextTick:req.nextTick,onError:d,configure:function(e){e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/");var t=_.pkgs,n=_.shim,i={paths:!0,config:!0,map:!0};eachProp(e,function(e,t){i[t]?"map"===t?(_.map||(_.map={}),mixin(_[t],e,!0,!0)):mixin(_[t],e,!0):_[t]=e}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=w.makeShimExports(e)),n[t]=e}),_.shim=n),e.packages&&(each(e.packages,function(e){var n;e="string"==typeof e?{name:e}:e,n=e.location,t[e.name]={name:e.name,location:n||e.name,main:(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}),_.pkgs=t),eachProp(S,function(e,t){e.inited||e.map.unnormalized||(e.map=a(t))}),(e.deps||e.callback)&&w.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,i){function r(n,o,c){var l,u,f;return i.enableBuildCallback&&o&&isFunction(o)&&(o.__requireJsBuild=!0),"string"==typeof n?isFunction(o)?d(makeError("requireargs","Invalid require call"),c):t&&hasProp(x,n)?x[n](S[t.id]):req.get?req.get(w,n,t,r):(u=a(n,t,!1,!0),l=u.id,hasProp(O,l)?O[l]:d(makeError("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(v(),w.nextTick(function(){v(),f=s(a(null,t)),f.skipMap=i.skipMap,f.init(n,o,c,{enabled:!0}),p()}),r)}return i=i||{},mixin(r,{isBrowser:isBrowser,toUrl:function(e){var i,r=e.lastIndexOf("."),o=e.split("/")[0],a="."===o||".."===o;return-1!==r&&(!a||r>1)&&(i=e.substring(r,e.length),e=e.substring(0,r)),w.nameToUrl(n(e,t&&t.id,!0),i,!0)},defined:function(e){return hasProp(O,a(e,t,!1,!0).id)},specified:function(e){return e=a(e,t,!1,!0).id,hasProp(O,e)||hasProp(S,e)}}),t||(r.undef=function(e){l();var n=a(e,t,!0),i=getOwn(S,e);delete O[e],delete C[n.url],delete P[e],i&&(i.events.defined&&(P[e]=i.events),u(e))}),r},enable:function(e){var t=getOwn(S,e.id);t&&s(e).enable()},completeLoad:function(e){var t,n,i,o=getOwn(_.shim,e)||{},a=o.exports;for(l();T.length;){if(n=T.shift(),null===n[0]){if(n[0]=e,t)break;t=!0}else n[0]===e&&(t=!0);m(n)}if(i=getOwn(S,e),!t&&!hasProp(O,e)&&i&&!i.inited){if(!(!_.enforceDefine||a&&getGlobal(a)))return r(e)?void 0:d(makeError("nodefine","No define call for "+e,null,[e]));m([e,o.deps||[],o.exportsFn])}p()},nameToUrl:function(e,t,n){var i,r,o,a,s,c,d,l,u;if(req.jsExtRegExp.test(e))l=e+(t||"");else{for(i=_.paths,r=_.pkgs,s=e.split("/"),c=s.length;c>0;c-=1){if(d=s.slice(0,c).join("/"),o=getOwn(r,d),u=getOwn(i,d)){isArray(u)&&(u=u[0]),s.splice(0,c,u);break}if(o){a=e===o.name?o.location+"/"+o.main:o.location,s.splice(0,c,a);break}}l=s.join("/"),l+=t||(/\?/.test(l)||n?"":".js"),l=("/"===l.charAt(0)||l.match(/^[\w\+\.\-]+:/)?"":_.baseUrl)+l}return _.urlArgs?l+((-1===l.indexOf("?")?"?":"&")+_.urlArgs):l},load:function(e,t){req.load(w,e,t)},execCb:function(e,t,n,i){return t.apply(i,n)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=g(e);w.completeLoad(t.id)}},onScriptError:function(e){var t=g(e);return r(t.id)?void 0:d(makeError("scripterror","Script error",e,[t.id]))}},w.require=w.makeRequire(),w}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){return"interactive"===e.readyState?interactiveScript=e:void 0}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.5",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!("undefined"==typeof window||!navigator||!document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,n,i){var r,o,a=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=n,n=i):e=[]),o&&o.context&&(a=o.context),r=getOwn(contexts,a),r||(r=contexts[a]=req.s.newContext(a)),o&&r.configure(o),r.require(e,t,n)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=function(e){throw e},req.load=function(e,t,n){var i,r=e&&e.config||{};if(isBrowser)return i=r.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),i.type=r.scriptType||"text/javascript",i.charset="utf-8",i.async=!0,i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),!i.attachEvent||i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0||isOpera?(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)),i.src=n,currentlyAddingScript=i,baseElement?head.insertBefore(i,baseElement):head.appendChild(i),currentlyAddingScript=null,i;if(isWebWorker)try{importScripts(n),e.completeLoad(t)}catch(o){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+n,o,[t]))}},isBrowser&&eachReverse(scripts(),function(e){return head||(head=e.parentNode),dataMain=e.getAttribute("data-main"),dataMain?(cfg.baseUrl||(src=dataMain.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath,dataMain=mainScript),dataMain=dataMain.replace(jsSuffixRegExp,""),cfg.deps=cfg.deps?cfg.deps.concat(dataMain):[dataMain],!0):void 0}),define=function(e,t,n){var i,r;"string"!=typeof e&&(n=t,t=e,e=null),isArray(t)||(n=t,t=[]),!t.length&&isFunction(n)&&n.length&&(n.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,n){t.push(n)}),t=(1===n.length?["require"]:["require","exports","module"]).concat(t)),useInteractive&&(i=currentlyAddingScript||getInteractiveScript(),i&&(e||(e=i.getAttribute("data-requiremodule")),r=contexts[i.getAttribute("data-requirecontext")])),(r?r.defQueue:globalDefQueue).push([e,t,n])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this),!console)var console={log:function(){}};!function(){var e="http://s.wenzhang.baidu.com/js/";requirejs.config({baseUrl:e,urlArgs:"v=05435",map:{"*":{"lib/jquery/1_9":e+"lib/jquery/1_9_1.js"}}})}();