(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{125:function(e,t,o){"use strict";var a=o(0),i=(o(131),o(130)),n=o.n(i),s=o(128),l=o.n(s),c=o(136),d=o(132),r=o.n(d),f=(o(133),o(134)),u=o.n(f),m=o(135),p=o.n(m);a.default.use(n.a),a.default.use(l.a),console.log("ams init config"),a.default.use(u.a),a.default.use(p.a),"undefined"!=typeof window&&(window.Vue=a.default),a.default.use(c.a,{languages:{javascript:r.a}}),l.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,t,o){"use strict";o(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}},966:function(e,t,o){"use strict";o.r(t);var a=o(126),i={dateField1:{type:"form",resource:{fields:{dateFieldA:{type:"date",label:"日期",props:{placeholder:"请选择日期"}},dateFieldB:{type:"date",label:"带默认值",default:1546272e6,props:{placeholder:"请选择日期"}},dateFieldC:{type:"date",label:"纯展示",default:1546272e6,ctx:"view"}}},ctx:"edit"}},n=o(138),s=o.n(n),l=o(137),c=o.n(l),d={mixins:[a.a],mounted:function(){var e=s()(i[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,i[this.blockName]),this.init=!0)}},r=o(1),f=Object(r.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?o("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),o("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[o("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),o("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[o("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?o("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=f.exports}}]);