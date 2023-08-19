// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).sdsnansum=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&f&&f.call(r,t,n.set),r};var l=n;function y(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var p=/./;function s(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var m,_="function"==typeof Symbol?Symbol.toStringTag:"";m=v()?function(r){var t,n,e,o,u;if(null==r)return d.call(r);n=r[_],u=_,t=null!=(o=r)&&j.call(o,u);try{r[_]=void 0}catch(t){return d.call(r)}return e=d.call(r),t?r[_]=n:delete r[_],e}:function(r){return d.call(r)};var g=m,w=Boolean.prototype.toString;var h=v();function O(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function A(r){return s(r)||O(r)}function E(){return new Function("return this;")()}y(A,"isPrimitive",s),y(A,"isObject",O);var S="object"==typeof self?self:null,F="object"==typeof window?window:null,P="object"==typeof global?global:null;var T=function(r){if(arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return E()}if(S)return S;if(F)return F;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),B=T.document&&T.document.childNodes,q=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var x,M=/^\s*function\s*([^(]*)/i;y(I,"REGEXP",M),x=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var N=x;function V(r){return null!==r&&"object"==typeof r}var k=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!N(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(V);function C(r){var t,n,e,o;if(("Object"===(n=g(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=M.exec(e.toString()))return t[1]}return V(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}y(V,"isObjectLikeArray",k);var G="function"==typeof p||"object"==typeof q||"function"==typeof B?function(r){return C(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?C(r).toLowerCase():t};var L,R,$=Object.getPrototypeOf;R=Object.getPrototypeOf,L="function"===G(R)?$:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===g(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=L;function J(r){return null==r?null:(r=Object(r),D(r))}function U(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===g(r))return!0;r=J(r)}return!1}var X="function"==typeof Math.fround?Math.fround:null,Y="function"==typeof Float32Array;var z=Number.POSITIVE_INFINITY,H="function"==typeof Float32Array?Float32Array:null;var K,Q="function"==typeof Float32Array?Float32Array:void 0;K=function(){var r,t;if("function"!=typeof H)return!1;try{r=function(r){return Y&&r instanceof Float32Array||"[object Float32Array]"===g(r)}(t=new H([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===z}catch(t){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var W=new K(1);var Z="function"==typeof X?X:function(r){return W[0]=r,W[0]};function rr(r){return r!=r}var tr=Math.floor;function nr(r,t,n,e){var o,u,i,f,a,c,l,y,p,s,b,v,d;if(r<=0)return 0;if(1===r||0===n)return rr(t[e])?0:t[e];if(o=e,r<8){for(b=0,d=0;d<r;d++)!1===rr(t[o])&&(b+=t[o]),o+=n;return Z(b)}if(r<=128){for(u=rr(t[o])?0:t[o],i=rr(t[o+=n])?0:t[o],f=rr(t[o+=n])?0:t[o],a=rr(t[o+=n])?0:t[o],c=rr(t[o+=n])?0:t[o],l=rr(t[o+=n])?0:t[o],y=rr(t[o+=n])?0:t[o],p=rr(t[o+=n])?0:t[o],o+=n,s=r%8,d=8;d<r-s;d+=8)u+=rr(t[o])?0:t[o],i+=rr(t[o+=n])?0:t[o],f+=rr(t[o+=n])?0:t[o],a+=rr(t[o+=n])?0:t[o],c+=rr(t[o+=n])?0:t[o],l+=rr(t[o+=n])?0:t[o],y+=rr(t[o+=n])?0:t[o],p+=rr(t[o+=n])?0:t[o],o+=n;for(b=u+i+(f+a)+(c+l+(y+p));d<r;d++)!1===rr(t[o])&&(b+=t[o]),o+=n;return Z(b)}return v=tr(r/2),Z(nr(v-=v%8,t,n,o)+nr(r-v,t,n,o+v*n))}function er(r,t,n){var e,o,u;if(r<=0)return 0;if(1===r||0===n)return rr(t[0])?0:t[0];if(e=n<0?(1-r)*n:0,r<8){for(o=0,u=0;u<r;u++)!1===rr(t[e])&&(o+=t[e]),e+=n;return Z(o)}return nr(r,t,n,e)}y(er,"ndarray",nr);var or,ur=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return U(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),ir=or=U(ur)?er:ur;const{ndarray:fr}=or;function ar(r,t,n){return ir(r,t,n)}return y(ar,"ndarray",(function(r,t,n,e){return fr(r,t,n,e)})),ar}));
//# sourceMappingURL=index.js.map
