(function(l,i){typeof exports=="object"&&typeof module<"u"?i(exports,require("element-ui")):typeof define=="function"&&define.amd?define(["exports","element-ui"],i):(l=typeof globalThis<"u"?globalThis:l||self,i(l.zoneUi={},l.elementUi))})(this,function(l,i){"use strict";const g="data:image/png;base64,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";function r(s,e,t,Y,a,u,d,O){var n=typeof s=="function"?s.options:s;e&&(n.render=e,n.staticRenderFns=t,n._compiled=!0),Y&&(n.functional=!0),u&&(n._scopeId="data-v-"+u);var A;if(d?(A=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__<"u"&&(o=__VUE_SSR_CONTEXT__),a&&a.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(d)},n._ssrRegister=A):a&&(A=O?function(){a.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:a),A)if(n.functional){n._injectStyles=A;var I=n.render;n.render=function(k,f){return A.call(f),I(k,f)}}else{var h=n.beforeCreate;n.beforeCreate=h?[].concat(h,A):[A]}return{exports:s,options:n}}const p={};var v=function(){var e=this,t=e._self._c;return t("svg",{staticClass:"icon",attrs:{t:"1657703352736",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5647",width:"200",height:"200"}},[t("path",{attrs:{d:"M853.333333 725.034667v64H170.666667v-64h682.666666z m-149.333333-309.333334l149.333333 106.666667-149.333333 106.666667v-213.333334z m-85.333333 74.666667v64H170.666667v-64h448zM853.333333 256v64H170.666667v-64h682.666666z","p-id":"5648"}})])},m=[],M=r(p,v,m,!1,null,null,null,null);const C=M.exports,w={};var z=function(){var e=this,t=e._self._c;return t("svg",{staticClass:"icon",attrs:{t:"1657703420766",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"7325",width:"200",height:"200"}},[t("path",{attrs:{d:"M853.333333 714.666667v64H170.666667v-64h682.666666zM320 405.333333v213.333334l-149.333333-106.666667 149.333333-106.666667z m533.333333 85.333334v64H405.333333v-64h448z m0-234.666667v64H170.666667v-64h682.666666z","p-id":"7326"}})])},D=[],F=r(w,z,D,!1,null,null,null,null);const R=F.exports,U="",B={name:"VcMenu",components:{ElMenu:i.Menu,ElMenuItem:i.MenuItem,IconClose:R,IconOpen:C},props:{title:{type:String},logo:{type:String,default:g},collapse:{type:Boolean,default:!1},url:{type:String}},computed:{_collapse:{get(){return this.collapse},set(s){this.$emit("update:collapse",s)}}},methods:{toggle(){this._collapse=!this._collapse},onTitleClick(){this.$router&&this.url&&this.$router.push(this.url)}}};var J=function(){var e=this,t=e._self._c;return t("div",{staticClass:"zone-menu-wrapper"},[t("el-menu",e._b({staticClass:"zone-menu",attrs:{collapse:e._collapse}},"el-menu",e.$attrs,!1),[e.title?t("el-menu-item",{staticClass:"zone-menu-title",attrs:{index:"title"},on:{click:e.onTitleClick}},[t("i",{staticClass:"el-icon zone-icon-logo"},[t("img",{staticClass:"zone-logo",attrs:{src:e.logo}})]),t("span",{staticClass:"zone-title",attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.title))])]):e._e(),e._t("default")],2),t("div",{staticClass:"zone-trigger"},[t("i",{staticClass:"el-icon el-icon-trigger",staticStyle:{display:"inline-block"},on:{click:e.toggle}},[e.collapse?t("icon-open"):t("icon-close")],1)])],1)},G=[],K=r(B,J,G,!1,null,null,null,null);const c=K.exports;c.install=function(s){s.component(c.name,c)};const T=c;l.ZoneMenu=T,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});