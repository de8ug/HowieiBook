/*! 3237 2013-9-17 14:8:14 */
define(function(){var count=0,timer,callback,cross_msg={};if("object"!=typeof JSON){var JSON={};!function(){"use strict";function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,i,o,r,s,a=gap,l=t[e];switch("function"==typeof rep&&(l=rep.call(t,e,l)),typeof l){case"string":return quote(l);case"number":return isFinite(l)?String(l):"null";case"boolean":case"null":return String(l);case"object":if(!l)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(l)){for(r=l.length,n=0;r>n;n+=1)s[n]=str(n,l)||"null";return o=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+a+"]":"["+s.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(r=rep.length,n=0;r>n;n+=1)"string"==typeof rep[n]&&(i=rep[n],o=str(i,l),o&&s.push(quote(i)+(gap?": ":":")+o));else for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(o=str(i,l),o&&s.push(quote(i)+(gap?": ":":")+o));return o=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+a+"}":"{"+s.join(",")+"}",gap=a,o}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,n){var i;if(gap="",indent="","number"==typeof n)for(i=0;n>i;i+=1)indent+=" ";else"string"==typeof n&&(indent=n);return rep=t,!t||"function"==typeof t||"object"==typeof t&&"number"==typeof t.length?str("",{"":e}):"JSON.stringify 对象无法被转为JSON字符串"}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,i,o=e[t];if(o&&"object"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(i=walk(o,n),void 0!==i?o[n]=i:delete o[n]);return reviver.call(e,t,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){if(""===text)return text;try{j=eval("("+text+")")}catch(e){return text}return"function"==typeof reviver?walk({"":j},""):j}throw new SyntaxError("JSON.parse")})}()}var init=function(){window.postMessage?window.addEventListener?window.addEventListener("message",messageHanlder,!1):window.attachEvent&&window.attachEvent("onmessage",messageHanlder):messagePoll(window,"name")},messagePoll=function(e,t){function n(e){var t=e.split("^").pop().split("&");return{domain:t[0],data:window.unescape(t[1])}}function i(){var i=e[t];i!=o&&(o=i,messageHanlder(n(i)))}var o="";timer=setInterval(i,50)},messageHanlder=function(e){e=JSON.parse(unescape(e.data)),callback&&callback({data:e.data,origin:e.origin,timeStamp:e.timeStamp})};return init(),cross_msg.postMessage=function(e,t,n){if(n=n||"*",e&&"object"==typeof e){var i={data:t,origin:location.protocol+"//"+location.host,timeStamp:+new Date},i=JSON.stringify(i);i=escape(i),window.postMessage?e.postMessage(i,n):e.name=(new Date).getTime()+count++ +"^"+document.domain+"&"+i}},cross_msg.listenMessage=function(e){callback=e},cross_msg});