(function(e){function n(n){for(var o,a,u=n[0],c=n[1],s=n[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(n);while(p.length)p.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,a=1;a<t.length;a++){var c=t[a];0!==i[c]&&(o=!1)}o&&(r.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},i={index:0},r=[];function a(e){return u.p+"static/js/"+({"pages-index-index":"pages-index-index"}[e]||e)+"."+{"pages-index-index":"67830f4f"}[e]+".js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=i[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=i[e]=[n,o]}));n.push(t[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(e);var s=new Error;r=function(n){c.onerror=c.onload=null,clearTimeout(l);var t=i[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,t[1](s)}i[e]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var f=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("f2ac")},"10ee":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){e("log","App Launch"," at App.vue:4")},onShow:function(){e("log","App Show"," at App.vue:7")},onHide:function(){e("log","App Hide"," at App.vue:10")}};n.default=t}).call(this,t("0de9")["log"])},"32b6":function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),e.exports=n},"477b":function(e,n,t){"use strict";var o;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o}));var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[]},5969:function(e,n,t){"use strict";t.r(n);var o=t("477b"),i=t("a50a");for(var r in i)"default"!==r&&function(e){t.d(n,e,(function(){return i[e]}))}(r);t("871c");var a,u=t("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);n["default"]=c.exports},"63a9":function(e,n,t){"use strict";t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.comRequest=void 0;var o="https://apis.bashe.cc/v99/",i=function(e){return new Promise((function(n,t){uni.request({url:o+e.url,method:e.Method||"GET",data:e.data||{},success:function(e){if(0!==e.data.status)return uni.showToast({title:"数据获取失败"});n(e)},fail:function(e){uni.showToast({title:"请求接口失败"}),t(e)}})}))};n.comRequest=i},"871c":function(e,n,t){"use strict";var o=t("dac5"),i=t.n(o);i.a},a50a:function(e,n,t){"use strict";t.r(n);var o=t("10ee"),i=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=i.a},da8f:function(e,n,t){"use strict";(function(e){var n=t("4ea4"),o=n(t("e143"));e["____A00E77E____"]=!0,delete e["____A00E77E____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"测试",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},e.__uniConfig.compilerVersion="3.1.22",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-index-index",(function(e){var n={component:t.e("pages-index-index").then(function(){return e(t("e1c2"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"测试",titleNView:!1})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))},dac5:function(e,n,t){var o=t("32b6");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=t("4f06").default;i("7566ab16",o,!0,{sourceMap:!1,shadowMode:!1})},f2ac:function(e,n,t){"use strict";var o=t("4ea4"),i=o(t("5530"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("da8f"),t("1c31");var r=o(t("e143")),a=o(t("5969")),u=t("63a9");r.default.config.productionTip=!1,a.default.mpType="app",r.default.prototype.$comRequest=u.comRequest;var c=new r.default((0,i.default)({},a.default));c.$mount()}});