(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{125:function(t,e,i){"use strict";var o=i(0),n=(i(131),i(130)),s=i.n(n),a=i(128),l=i.n(a),c=i(136),f=i(132),r=i.n(f),d=(i(133),i(134)),u=i.n(d),p=i(135),g=i.n(p);o.default.use(s.a),o.default.use(l.a),console.log("ams init config"),o.default.use(u.a),o.default.use(g.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(c.a,{languages:{javascript:r.a}}),l.a.config({resource:{api:{withCredentials:!1}}})},126:function(t,e,i){"use strict";i(125);e.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(t){"el-link--inner"!==t.target.className&&(this.showConfig=!this.showConfig)}}}},971:function(t,e,i){"use strict";i.r(e);var o=i(126),n={defaultTitle:{type:"title",options:{title:"标题文本标题文本"}},subTitle:{type:"title",options:{title:"标题文本标题文本",subTitle:"副标题"}},suffixInfoTitle:{blocks:{titleBlock2:{type:"title",options:{title:"标题类型的主标题"},props:{"suffix-info":"我是提示"}},titleBlock3:{type:"title",options:{title:"标题类型的主标题"},props:{"suffix-info-warning":"我是提示warning"}},titleBlock4:{type:"title",options:{title:"标题类型的主标题"},props:{"suffix-info-danger":"我是提示danger"}},titleBlock6:{type:"title",options:{title:"标题类型的主标题",subTitle:"标题类型的副标题"},props:{"suffix-info":"我是提示"}}}}},s=i(138),a=i.n(s),l=i(137),c=i.n(l),f={mixins:[o.a],mounted:function(){var t=a()(n[this.blockName]);this.configCode=c()(t,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,n[this.blockName]),this.init=!0)}},r=i(1),d=Object(r.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[t.init?i("ams-block",{staticClass:"demo-card-preview",attrs:{name:t.blockName}}):t._e(),t._v(" "),i("div",{class:"demo-card-config "+(t.showConfig?"open":"")},[i("highlight-code",{attrs:{lang:"javascript"}},[t._v("\n            "+t._s(t.configCode)+"\n        ")])],1),t._v(" "),i("div",{staticClass:"demo-card-config-btn",on:{click:t.toggleDemoCofig}},[i("i",{class:"el-icon-caret-"+(t.showConfig?"top":"bottom")}),t._v("\n         "+t._s(t.showConfig?"隐藏":"显示")+"配置\n        "),t.onlineDemo?i("el-link",{attrs:{href:t.onlineDemo,target:"_blank",type:"success"}},[t._v("在线运行")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);