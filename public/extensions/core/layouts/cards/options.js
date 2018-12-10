parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"vpUX":[function(require,module,exports) {
module.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:function(){return[]}},viewOptions:{type:Object,default:function(){return{}}},viewQuery:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:function(){return[]}},link:{type:String,default:null},sortField:{type:String,default:null}}};
},{}],"4ZlF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=i(require("../../../mixins/layout")),e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};function i(t){return t&&t.__esModule?t:{default:t}}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o={mixins:[t.default],computed:{titleFieldOptions:function(){return e({},this.$lodash.mapValues(this.fields,function(t){return t.name}))},fieldOptions:function(){return e({__none__:"(".concat(this.$t("dont_show"),")")},this.$lodash.mapValues(this.fields,function(t){return t.name}))},fileOptions:function(){var t=this.$lodash.filter(this.fields,function(t){return"file"===t.type.toLowerCase()}),i=this.$lodash.keyBy(t,"field"),n=e({__none__:"(".concat(this.$t("dont_show"),")")},this.$lodash.mapValues(i,function(t){return t.name}));if("data"in this.fields){var o=this.fields.data;"alias"===o.type.toLowerCase()&&"directus_files"===o.collection&&(n.data=this.$t("file"))}return n}},methods:{setOption:function(t,i){this.$emit("options",e({},this.viewOptions,n({},t,i)))}}};exports.default=o;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("form",{on:{submit:function(t){t.preventDefault()}}},[s("label",{staticClass:"style-3",attrs:{for:"title"}},[t._v(t._s(t.$t("layouts-cards-title")))]),t._v(" "),s("v-select",{attrs:{id:"title",value:t.viewOptions.title||this.primaryKeyField,options:t.titleFieldOptions},on:{input:function(n){t.setOption("title","__none__"===n?null:n)}}}),t._v(" "),s("label",{staticClass:"style-3",attrs:{for:"subtitle"}},[t._v(t._s(t.$t("layouts-cards-subtitle")))]),t._v(" "),s("v-select",{attrs:{id:"subtitle",value:t.viewOptions.subtitle||"__none__",options:t.fieldOptions},on:{input:function(n){t.setOption("subtitle","__none__"===n?null:n)}}}),t._v(" "),s("label",{staticClass:"style-3",attrs:{for:"src"}},[t._v(t._s(t.$t("layouts-cards-src")))]),t._v(" "),s("v-select",{attrs:{id:"src",value:t.viewOptions.src||"__none__",options:t.fileOptions},on:{input:function(n){t.setOption("src","__none__"===n?null:n)}}}),t._v(" "),s("label",{staticClass:"style-3",attrs:{for:"content"}},[t._v(t._s(t.$t("layouts-cards-content")))]),t._v(" "),s("v-select",{attrs:{id:"content",value:t.viewOptions.content||"__none__",options:t.fieldOptions},on:{input:function(n){t.setOption("content","__none__"===n?null:n)}}}),t._v(" "),s("label",{staticClass:"style-3",attrs:{for:"icon"}},[t._v("Fallback Icon")]),t._v(" "),s("v-input",{attrs:{value:t.viewOptions.icon||"photo"},on:{input:function(n){t.setOption("icon",n)}}})],1)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-42a91f",functional:void 0});})();
},{"../../../mixins/layout":"vpUX"}]},{},["4ZlF"], "__DirectusExtension__")