parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"mD6a":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../../../mixins/interface"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return o(t)||i(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var s={name:"interface-checkboxes",mixins:[t.default],computed:{selection:function(){if(null==this.value)return[];var t=r("string"===this.type?this.value.split(","):this.value);return this.options.wrap&&t.length>2&&(t.pop(),t.shift()),t}},methods:{updateValue:function(t){var e=r(this.selection);e.includes(t)?e.splice(e.indexOf(t),1):e.push(t),e=e.join(","),this.options.wrap&&e.length>0&&(e=",".concat(e,",")),"array"===this.type&&(e=e.split(",")),this.$emit("input",e)}}};exports.default=s;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"interface-checkboxes"},e._l(e.options.choices,function(t,c){return n("v-checkbox",{key:t,attrs:{id:t,value:c,disabled:e.readonly,label:t,checked:e.selection.includes(c)},on:{change:function(t){e.updateValue(c,t)}}})}),1)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-a29732",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["mD6a"], "__DirectusExtension__")