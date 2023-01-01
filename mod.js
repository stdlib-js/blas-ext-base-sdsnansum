// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var c,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(a.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=c):r[t]=e.value),s="get"in e,p="set"in e,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var c=t;function l(r,t,e){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function s(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}function p(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}var y=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,b=function(r){return y.exec(r).slice(1)};function v(){for(var r="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var n=e>=0?arguments[e]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,t="/"===n.charAt(0))}return(t?"/":"")+(r=p(A(r.split("/"),(function(r){return!!r})),!t).join("/"))||"."}function d(r){var t=g(r),e="/"===E(r,-1);return(r=p(A(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&e&&(r+="/"),(t?"/":"")+r}function g(r){return"/"===r.charAt(0)}function m(){var r=Array.prototype.slice.call(arguments,0);return d(A(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function h(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=v(r).substr(1),t=v(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),u=Math.min(n.length,o.length),i=u,a=0;a<u;a++)if(n[a]!==o[a]){i=a;break}var f=[];for(a=i;a<n.length;a++)f.push("..");return(f=f.concat(o.slice(i))).join("/")}function j(r){var t=b(r),e=t[0],n=t[1];return e||n?(n&&(n=n.substr(0,n.length-1)),e+n):"."}function w(r,t){var e=b(r)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e}function _(r){return b(r)[3]}var O={extname:_,basename:w,dirname:j,sep:"/",delimiter:":",relative:h,join:m,isAbsolute:g,normalize:d,resolve:v};function A(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}var E="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)},S=s(Object.freeze({__proto__:null,resolve:v,normalize:d,isAbsolute:g,join:m,relative:h,sep:"/",delimiter:":",dirname:j,basename:w,extname:_,default:O}));var P=/./;function F(r){return"boolean"==typeof r}var T="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function x(){return T&&"symbol"==typeof Symbol.toStringTag}var k=Object.prototype.toString;var B=Object.prototype.hasOwnProperty;var M,I="function"==typeof Symbol?Symbol.toStringTag:"";M=x()?function(r){var t,e,n,o,u;if(null==r)return k.call(r);e=r[I],u=I,t=null!=(o=r)&&B.call(o,u);try{r[I]=void 0}catch(t){return k.call(r)}return n=k.call(r),t?r[I]=e:delete r[I],n}:function(r){return k.call(r)};var N=M,V=Boolean.prototype.toString;var q=x();function C(r){return"object"==typeof r&&(r instanceof Boolean||(q?function(r){try{return V.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===N(r)))}function z(r){return F(r)||C(r)}function G(){return new Function("return this;")()}l(z,"isPrimitive",F),l(z,"isObject",C);var L="object"==typeof self?self:null,R="object"==typeof window?window:null,D="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},J="object"==typeof D?D:null;var U=function(r){if(arguments.length){if(!F(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return G()}if(L)return L;if(R)return R;if(J)return J;throw new Error("unexpected error. Unable to resolve global object.")}(),X=U.document&&U.document.childNodes,Y=Int8Array;function $(){return/^\s*function\s*([^(]*)/i}var H,K=/^\s*function\s*([^(]*)/i;l($,"REGEXP",K),H=Array.isArray?Array.isArray:function(r){return"[object Array]"===N(r)};var Q=H;function W(r){return null!==r&&"object"==typeof r}var Z=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!Q(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(W);function rr(r){var t,e,n,o;if(("Object"===(e=N(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=K.exec(n.toString()))return t[1]}return W(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(W,"isObjectLikeArray",Z);var tr="function"==typeof P||"object"==typeof Y||"function"==typeof X?function(r){return rr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?rr(r).toLowerCase():t};var er,nr,or=Object.getPrototypeOf;nr=Object.getPrototypeOf,er="function"===tr(nr)?or:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===N(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ur=er;function ir(r){return null==r?null:(r=Object(r),ur(r))}function ar(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===N(r))return!0;r=ir(r)}return!1}var fr="function"==typeof Math.fround?Math.fround:null,cr="function"==typeof Float32Array;var lr=Number.POSITIVE_INFINITY,sr="function"==typeof Float32Array?Float32Array:null;var pr,yr="function"==typeof Float32Array?Float32Array:void 0;pr=function(){var r,t;if("function"!=typeof sr)return!1;try{r=function(r){return cr&&r instanceof Float32Array||"[object Float32Array]"===N(r)}(t=new sr([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===lr}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var br=new pr(1);var vr="function"==typeof fr?fr:function(r){return br[0]=r,br[0]};function dr(r){return r!=r}var gr=Math.floor;function mr(r,t,e,n){var o,u,i,a,f,c,l,s,p,y,b,v,d;if(r<=0)return 0;if(1===r||0===e)return dr(t[n])?0:t[n];if(o=n,r<8){for(b=0,d=0;d<r;d++)!1===dr(t[o])&&(b+=t[o]),o+=e;return vr(b)}if(r<=128){for(u=dr(t[o])?0:t[o],i=dr(t[o+=e])?0:t[o],a=dr(t[o+=e])?0:t[o],f=dr(t[o+=e])?0:t[o],c=dr(t[o+=e])?0:t[o],l=dr(t[o+=e])?0:t[o],s=dr(t[o+=e])?0:t[o],p=dr(t[o+=e])?0:t[o],o+=e,y=r%8,d=8;d<r-y;d+=8)u+=dr(t[o])?0:t[o],i+=dr(t[o+=e])?0:t[o],a+=dr(t[o+=e])?0:t[o],f+=dr(t[o+=e])?0:t[o],c+=dr(t[o+=e])?0:t[o],l+=dr(t[o+=e])?0:t[o],s+=dr(t[o+=e])?0:t[o],p+=dr(t[o+=e])?0:t[o],o+=e;for(b=u+i+(a+f)+(c+l+(s+p));d<r;d++)!1===dr(t[o])&&(b+=t[o]),o+=e;return vr(b)}return v=gr(r/2),vr(mr(v-=v%8,t,e,o)+mr(r-v,t,e,o+v*e))}function hr(r,t,e){var n,o,u;if(r<=0)return 0;if(1===r||0===e)return dr(t[0])?0:t[0];if(n=e<0?(1-r)*e:0,r<8){for(o=0,u=0;u<r;u++)!1===dr(t[n])&&(o+=t[n]),n+=e;return vr(o)}return mr(r,t,e,n)}l(hr,"ndarray",mr);var jr,wr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return ar(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,S.join)("/home/runner/work/blas-ext-base-sdsnansum/blas-ext-base-sdsnansum/node_modules/@stdlib/blas-ext-base-sdsnansumpw/lib","./native.js")),_r=jr=ar(wr)?hr:wr;const{ndarray:Or}=jr;function Ar(r,t,e){return _r(r,t,e)}function Er(r,t,e,n){return Or(r,t,e,n)}l(Ar,"ndarray",Er);export{Ar as default,Er as ndarray};
//# sourceMappingURL=mod.js.map
