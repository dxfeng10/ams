(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{125:function(e,t,a){"use strict";var o=a(0),l=(a(131),a(130)),s=a.n(l),r=a(128),i=a.n(r),n=a(136),c=a(132),p=a.n(c),d=(a(133),a(134)),u=a.n(d),f=a(135),b=a.n(f);o.default.use(s.a),o.default.use(i.a),console.log("ams init config"),o.default.use(u.a),o.default.use(b.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(n.a,{languages:{javascript:p.a}}),i.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,t,a){"use strict";a(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}},157:function(e,t,a){var o=a(20).f,l=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in l||a(10)&&o(l,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},226:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var o=a(227),l=a.n(o);function s(e,t,a){return t in e?l()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},227:function(e,t,a){e.exports=a(228)},228:function(e,t,a){a(229);var o=a(4).Object;e.exports=function(e,t,a){return o.defineProperty(e,t,a)}},229:function(e,t,a){var o=a(39);o(o.S+o.F*!a(11),"Object",{defineProperty:a(23).f})},980:function(e,t,a){"use strict";a.r(t);var o,l=a(126),s=(a(157),a(226)),r={formEditAll:{type:"form",resource:{fields:{text:{label:"新文本",type:"text"},date:{type:"date",label:"日期"},password:{type:"password",label:"密码"}}},ctx:"edit",props:{"label-width":"200px"}},formBtton:{type:"form",resource:{fields:{text:{type:"text",label:"文本",rules:[{required:!0,message:"请输入文本",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],props:{placeholder:"请输入字符，长度在 3 到 5 个","suffix-icon":"el-icon-service"}},date:{type:"date",label:"日期"},password:{type:"password",label:"密码"}}},ctx:"edit",operations:{submit:{type:"button",label:"提交",props:{type:"primary"}},cancel:{type:"button",label:"取消"}},events:{submit:"@validate @confirm:确认提交吗? @update"},actions:{cancel:function(){this.$message.success("取消成功")},update:function(){this.$message.success("提交成功")}}},formData:{type:"form",resource:{fields:{text:{label:"新文本1",type:"text",default:"我是resource里定义的默认值"},text2:{label:"新文本2",type:"text",dafault:"我是resource里定义的默认值"},date:{type:"date",label:"日期"},password:{type:"password",label:"密码"}}},ctx:"edit",data:{text2:"我是data里定义的默认值",date:1539792e6}},formLayout:{type:"form",resource:{fields:{text:{label:"新文本1",type:"text",default:"我是resource里定义的默认值",props:{inline:!0}},text2:{label:"新文本2",type:"text",dafault:"我是resource里定义的默认值",props:{inline:!0}},date:{type:"date",label:"日期"},select:{type:"select",label:"选项",props:{inline:!0,options:{vip:"唯品会",jd:"京东"}}},password:{type:"password",label:"密码",props:{inline:!0,formItemWidth:"60%"}}}},ctx:"edit",data:{text2:"我是data里定义的默认值",date:1539792e6}},formInline:{type:"form",resource:{fields:{text:{label:"新文本1",type:"text",default:"我是resource里定义的默认值"},date:{type:"date",label:"日期"},password:{type:"password",label:"密码"}}},ctx:"edit",props:{inline:!0}},formViewAll:(o={type:"form",resource:"form",ctx:"view"},Object(s.a)(o,"resource",{fields:{text:{label:"文本",type:"text"},date:{type:"switch",label:"开关"},textarea:{type:"textarea",label:"内容"},color:{type:"color",label:"颜色"},rate:{type:"rate",label:"评分"},radio:{type:"radio",label:"单选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},checkbox:{type:"checkbox",label:"多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}}}}),Object(s.a)(o,"data",{text:"双11活动",switch:1,textarea:"双11活动双11活动双11活动双11活动双11活动双11活动双11活动双11活动双11活动",color:"#f00",rate:3.7,radio:"d",checkbox:"b,c"}),o),formSlot:{type:"form",resource:{fields:{text:{label:"文本",type:"text"},date:{type:"switch",label:"开关"},textarea:{type:"textarea",label:"内容"},color:{type:"color",label:"颜色"},rate:{type:"rate",label:"评分"}}},ctx:"edit",events:{init:"@console",submit:"@validate @confirm:确认提交吗? @update"},actions:{fieldChange:function(e){var t=e.name,a=e.value;"testSwitch"===t&&(this.block.fields.testPassword.props.disabled=!a)}},operations:{submit:{type:"button",label:"提交",props:{type:"primary"}},cancel:{type:"button",label:"取消"}},blocks:{formSlotTitle:{type:"title",options:{title:"其它表单"},style:{marginLeft:"50px"},slot:"field:textarea"}}},formSlotTop:{type:"form",resource:{fields:{text:{label:"新文本",type:"text"},date:{type:"date",label:"日期"},password:{type:"password",label:"密码"}}},ctx:"edit",blocks:{title1:{type:"title",options:{title:"主标题"},slot:"top"}}},enterForm:{type:"form",resource:{fields:{text:{label:"新文本",type:"text"},date:{type:"date",label:"日期"},password:{type:"password",label:"密码"}}},ctx:"edit",on:{keyupEnter:function(e){console.log("keyup.enter.native",this,e),alert("你触发enter了")}}}},i=a(138),n=a.n(i),c=a(137),p=a.n(c),d={mixins:[l.a],mounted:function(){var e=n()(r[this.blockName]);this.configCode=p()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block("".concat(this.blockName),r[this.blockName]),this.init=!0)}},u=a(1),f=Object(u.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?a("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),a("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[a("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),a("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[a("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?a("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=f.exports}}]);