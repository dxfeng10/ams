(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1070:function(e,t,s){"use strict";s.r(t);var l,i=s(133),a=s(155),o={defaultList:{type:"list",resource:{fields:{text:{label:"文本",type:"text"},inputnumber:{type:"inputnumber",label:"数字输入"},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}}}},data:{list:[{text:"双11活动",inputnumber:3,select:"a,b,c"},{text:"双11活动2",inputnumber:4,select:"b,c"},{text:"双11活动3",inputnumber:5,select:"a,b,c"},{text:"双11活动4",inputnumber:6,select:"c"}]}},indexList:{type:"list",resource:{fields:{text:{label:"文本",type:"text"},inputnumber:{type:"inputnumber",label:"数字输入"},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}}}},data:{list:[{text:"双11活动",inputnumber:3,select:"a,b,c"},{text:"双11活动2",inputnumber:4,select:"b,c"},{text:"双11活动3",inputnumber:5,select:"a,b,c"},{text:"双11活动4",inputnumber:6,select:"c"}]},props:{type:"index"}},pagesList:{type:"list",resource:{api:{prefix:"https://easy-mock.com/mock/5a0023effbbb09615044cb82/",list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID",props:{width:50}},testText:{type:"text",label:"名称"},testTextarea:{type:"textarea",label:"文本框"},testDate:{type:"datetime",label:"创建时间"},testSwitch:{type:"switch",label:"开关"}}},events:{init:"@list"}},simulatePagesList:{type:"list",resource:{api:{prefix:"https://easy-mock.com/mock/5a0023effbbb09615044cb82/",list:"list-pagination"},fields:{id:{type:"text",label:"ID"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"}}},events:{init:"@list"},pageSize:10,props:{pagination:"simulate"}},filtersList:{type:"list",resource:{api:{prefix:"https://easy-mock.com/mock/5a0023effbbb09615044cb82/",list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID",props:{width:100}},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称"},testTextarea:{type:"textarea",label:"文本框"},testDate:{type:"datetime",label:"创建时间"}}},filters:{testSelect:{multiple:!0,remote:!0}},sorts:{id:!0},events:{init:"@list"}},searchsList:{type:"list",resource:{api:{prefix:"https://easy-mock.com/mock/5a0023effbbb09615044cb82/",list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID"},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称",props:{placeholder:"请输入名词"}}}},data:{list:[{id:3,testText:"双11活动",testSelect:"a,b,c"},{id:4,testText:"双11活动2",testSelect:"b,c"},{id:5,testText:"双11活动3",testSelect:"a,b,c"},{id:6,testText:"双11活动4",testSelect:"c"}]},operations:{testText:{slot:"searchs",type:"field",label:"名称"},testSelect:{slot:"searchs",type:"field",label:"类型"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list:1"}}},multipleSelectList:{type:"list",resource:{fields:{id:{type:"text",label:"ID"},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称",props:{placeholder:"请输入名词"}}}},data:{list:[{id:3,testText:"双11活动",testSelect:"a,b,c"},{id:4,testText:"双11活动2",testSelect:"b,c"},{id:5,testText:"双11活动3",testSelect:"a,b,c"},{id:6,testText:"双11活动4",testSelect:"c"}],total:100},options:{multipleSelect:!0},operations:{selectMulti:{slot:"multipleSelect",type:"field",field:"testSelect"},buttonMulti:{slot:"multipleSelect",type:"button",label:"删除",event:"multi"}},actions:{multi:function(e){this.$message("你点击了删除按钮！"),console.log("multipleSelect action",e.$prevReturn)}}},slotBlocksList:{type:"list",resource:{fields:{id:{type:"text",label:"ID"},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称",props:{placeholder:"请输入名词"}}}},data:{list:[{id:3,testText:"双11活动",testSelect:"a,b,c"},{id:4,testText:"双11活动2",testSelect:"b,c"},{id:5,testText:"双11活动3",testSelect:"a,b,c"},{id:6,testText:"双11活动4",testSelect:"c"}],total:100},operations:{testText:{slot:"searchs",type:"field"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list:1"}},blocks:{listTop:{type:"component",options:{is:"div",text:"我是列表区块最顶部的插槽内容！！"},style:{padding:"20px",marginBottom:"20px",border:"1px solid #3eaf7c"},slot:"top"},listTableTop:{type:"component",options:{is:"div",text:"我是列表区块表格顶部的插槽内容！！"},style:{padding:"20px",border:"1px solid #f60"},slot:"tableTop"}}},operationsList:{type:"list",resource:{fields:{text:{label:"文本",type:"text"},inputnumber:{type:"inputnumber",label:"数字输入"},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}}}},data:{list:[{text:"双11活动",inputnumber:3,select:"a,b,c"},{text:"双11活动2",inputnumber:4,select:"b,c"},{text:"双11活动3",inputnumber:5,select:"a,b,c"},{text:"双11活动4",inputnumber:6,select:"c"}]},operations:(l={testNewInput:{slot:"searchs",type:"field",field:{type:"text",props:{placeholder:"折"},style:{width:"100px"}}},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"}},Object(a.a)(l,"search",{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"}),Object(a.a)(l,"reset",{slot:"searchs",type:"reset",label:"重置"}),Object(a.a)(l,"addItem",{type:"button",label:"新建",props:{type:"primary"},slot:"searchs"}),Object(a.a)(l,"editItem",{type:"button",label:"编辑",props:{type:"primary",icon:"el-icon-edit"}}),Object(a.a)(l,"removeItem",{type:"button",props:{type:"danger",icon:"el-icon-delete",circle:!0}}),l),actions:{addItem:function(){this.$message("这是”新建“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")},editItem:function(){this.$message("这是”编辑“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")},removeItem:function(){this.$message("这是”删除“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")},reset:function(){this.$message("这是”重置“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")}}},editList:{type:"list",ctx:"edit",props:{type:"index"},resource:{fields:{a:{type:"text",label:"指标",props:{width:"170px"}},b:{type:"text",label:"连续次数"},c1:{type:"unitselect",label:"时间段",units:["分钟","小时"],defaultUnit:"分钟"},e:{type:"select",label:"对比",props:{multiple:!1,options:{0:"昨天",5:"不对比"}}},f:{type:"select",label:"条件",props:{multiple:!1,options:{0:"同比下降",1:"同比上升"}},changeConfig:function(e,t){return t&&"5"===t.e&&(e.props.options={">":">",">=":">=","<":"<","<=":"<=","==":"=="}),!e.props.options[t.f]&&(t.f=""),e}}}},data:{list:[{a:"大促指标",b:"12",c1:"12",e:"0",f:"0"}]},operations:{removeItem:{type:"button",label:"删除",props:{type:"danger",icon:"el-icon-delete"}},addItem1:{type:"button",label:"新增规则",props:{type:"primary"},slot:"searchs",event:"addItem"},addItem2:{type:"button",label:"右上",props:{type:"primary"},slot:"rightTop",event:"addItem"},addItem3:{type:"button",label:"左下",props:{type:"primary"},slot:"leftBottom",event:"addItem"},addItem4:{type:"button",label:"右下1",props:{type:"primary"},slot:"rightBottom",event:"addItem"},addItem5:{type:"button",label:"右下2",props:{type:"primary"},slot:"rightBottom",event:"addItem"},saveItem:{type:"button",label:"保存",props:{type:"primary"},slot:"searchs"}},actions:{addItem:function(){this.data.list.push({a:"",b:"",c1:"",e:"",f:""})},saveItem:function(){alert("你点击了保存按钮")}}}},p=s(151),c=s.n(p),n=s(147),r=s.n(n),d={mixins:[i.a],mounted:function(){var e=c()(o[this.blockName]);this.configCode=r()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,o[this.blockName]),this.init=!0)}},b=s(1),u=Object(b.a)(d,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?s("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),s("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[s("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),s("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[s("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n    ")])],1)}),[],!1,null,null,null);t.default=u.exports},127:function(e,t,s){"use strict";var l=s(0),i=(s(134),s(132)),a=s.n(i),o=s(128),p=s(139),c=s(135),n=s.n(c),r=(s(136),s(137)),d=s.n(r),b=s(138),u=s.n(b);l.default.use(a.a),l.default.use(o.default),console.log("ams init config"),l.default.use(d.a),l.default.use(u.a),"undefined"!=typeof window&&(window.Vue=l.default),l.default.use(p.a,{languages:{javascript:n.a}}),o.default.config({resource:{api:{withCredentials:!1}}})},133:function(e,t,s){"use strict";s(127);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String},methods:{toggleDemoCofig:function(){this.showConfig=!this.showConfig}}}}}]);