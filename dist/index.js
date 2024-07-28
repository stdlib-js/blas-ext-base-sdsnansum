"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=a(function(b,u){
var c=require('@stdlib/blas-ext-base-sdsnansumpw/dist');function y(e,r,s){return c(e,r,s)}u.exports=y
});var v=a(function(g,t){
var x=require('@stdlib/blas-ext-base-sdsnansumpw/dist').ndarray;function f(e,r,s,p){return x(e,r,s,p)}t.exports=f
});var m=a(function(h,q){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=i(),l=v();j(d,"ndarray",l);q.exports=d
});var w=require("path").join,R=require('@stdlib/utils-try-require/dist'),_=require('@stdlib/assert-is-error/dist'),E=m(),n,o=R(w(__dirname,"./native.js"));_(o)?n=E:n=o;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
