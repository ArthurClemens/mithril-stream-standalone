(function(p,s){typeof exports=="object"&&typeof module!="undefined"?module.exports=s():typeof define=="function"&&define.amd?define(s):(p=typeof globalThis!="undefined"?globalThis:p||self,p.mithrilStream=s())})(this,function(){"use strict";function p(t){return d(function(){return t.map(function(e){return e()})},t)}function s(t,e,u){var n=u.map(function(c){var o=t(e,c);return o!==r.SKIP&&(e=o),o});return n(e),n}function h(t,e){var u=t.map(function(c){return c[0]}),n=d(function(){var c=arguments[arguments.length-1];return u.forEach(function(o,i){c.indexOf(o)>-1&&(e=t[i][1](e,o()))}),e},u);return n(e),n}function l(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return p(e).map(function(u){return t.apply(void 0,u)})}function g(t){return t._state==="pending"||t._state==="active"||t._state==="changing"}var r=function(t){var e=[],u=[];function n(i){return arguments.length&&i!==r.SKIP&&(t=i,g(n)&&(n._changing(),n._state="active",e.slice().forEach(function(a,f){g(a)&&a(this[f](t))},u.slice()))),t}n.constructor=r,n._state=arguments.length&&t!==r.SKIP?"active":"pending",n._parents=[],n._changing=function(){g(n)&&(n._state="changing"),e.forEach(function(i){i._changing()})},n._map=function(i,a){var f=a?r():r(i(t));return f._parents.push(n),e.push(f),u.push(i),f},n.map=function(i){return n._map(i,n._state!=="active")};var c;function o(){return c=r(),c.map(function(i){return i===!0&&(n._parents.forEach(function(a){a._unregisterChild(n)}),n._state="ended",n._parents.length=e.length=u.length=0),i}),c}return n.toJSON=function(){return t!=null&&typeof t.toJSON=="function"?t.toJSON():t},n["fantasy-land/map"]=n.map,n["fantasy-land/ap"]=function(i){return d(function(a,f){return a()(f())},[i,n])},n._unregisterChild=function(i){var a=e.indexOf(i);a!==-1&&(e.splice(a,1),u.splice(a,1))},Object.defineProperty(n,"end",{get:function(){return c||o()}}),n};function d(t,e){var u=e.every(function(a){if(a.constructor!==r)throw new Error("Ensure that each item passed to stream.combine/stream.merge/lift is a stream.");return a._state==="active"}),n=u?r(t.apply(null,e.concat([e]))):r(),c=[],o=e.map(function(a){return a._map(function(f){return c.push(a),(u||e.every(function(_){return _._state!=="pending"}))&&(u=!0,n(t.apply(null,e.concat([c]))),c=[]),f},!0)}),i=n.end.map(function(a){a===!0&&(o.forEach(function(f){f.end(!0)}),i.end(!0))});return n}r.SKIP={},r.lift=l,r.scan=s,r.merge=p,r.combine=d,r.scanMerge=h,r["fantasy-land/of"]=r;var m=!1;return Object.defineProperty(r,"HALT",{get:function(){return m||console.log("HALT is deprecated and has been renamed to SKIP"),m=!0,r.SKIP}}),r});
//# sourceMappingURL=mithril-stream-standalone.umd.js.map
