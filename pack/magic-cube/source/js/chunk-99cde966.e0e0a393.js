(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99cde966"],{"231c":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"teachEval"},[l("div",{attrs:{id:"infoSearch"}},[l("div",{staticClass:"search-top"},[l("div",{staticClass:"search-frame"},[l("div",{staticClass:"top-frame"},[e._m(0),l("div",{staticClass:"input"},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{size:"small",type:"year","value-format":"yyyy",format:"yyyy",placeholder:"请选择学年",clearable:""},model:{value:e.search.xn,callback:function(t){e.$set(e.search,"xn",t)},expression:"search.xn"}})],1)]),l("div",{staticClass:"top-frame"},[e._m(1),l("div",{staticClass:"input"},[l("el-select",{attrs:{size:"small",placeholder:"请选择学期",clearable:""},model:{value:e.search.xqdm,callback:function(t){e.$set(e.search,"xqdm",t)},expression:"search.xqdm"}},e._l(e.xqList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1)]),l("div",{staticClass:"top-frame"},[e._m(2),l("div",{staticClass:"input"},[l("el-select",{attrs:{size:"small",placeholder:"请选择部门",clearable:""},model:{value:e.search.bmdm,callback:function(t){e.$set(e.search,"bmdm",t)},expression:"search.bmdm"}},e._l(e.bmList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1)]),l("div",{staticClass:"top-frame"},[e._m(3),l("div",{staticClass:"input"},[l("el-select",{attrs:{size:"small",placeholder:"请选择教科研类型",clearable:""},model:{value:e.search.jkylx,callback:function(t){e.$set(e.search,"jkylx",t)},expression:"search.jkylx"}},e._l(e.jkylxList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1)]),l("div",{staticClass:"top-frame"},[e._m(4),l("div",{staticClass:"input"},[l("el-select",{attrs:{size:"small",placeholder:"请选择获奖等次",clearable:""},model:{value:e.search.hjdc,callback:function(t){e.$set(e.search,"hjdc",t)},expression:"search.hjdc"}},e._l(e.hjdcList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1)]),l("div",{staticClass:"top-frame"},[e._m(5),l("div",{staticClass:"input"},[l("el-select",{attrs:{size:"small",placeholder:"请选择获奖级别",clearable:""},model:{value:e.search.hjjb,callback:function(t){e.$set(e.search,"hjjb",t)},expression:"search.hjjb"}},e._l(e.hjjbList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1)])]),l("div",{staticClass:"search-btn"},[l("div",{staticClass:"btns liColor-green",on:{click:function(t){return e.queryTable(1,10)}}},[e._v("查询")])])])]),l("div",{attrs:{id:"infoTable"}},[l("div",{staticClass:"info-table"},[l("div",{staticClass:"table-header"},[e._m(6),l("div",{staticClass:"header-right"},[l("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.addData}},[e._v("新增")]),l("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(t){e.up.upShow=!0}}},[e._v("导入")]),l("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.handleDeleteMore}},[e._v("批量删除")])],1)]),l("hr"),l("div",{staticClass:"table-com"},[l("el-table",{attrs:{size:"mini",data:e.tableData,stripe:""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"40"}}),l("el-table-column",{attrs:{type:"index",label:"序号"}}),l("el-table-column",{attrs:{prop:"xn",label:"学年"}}),l("el-table-column",{attrs:{prop:"xqdm",label:"学期",formatter:e.xqShow}}),l("el-table-column",{attrs:{prop:"bmdm",label:"部门",formatter:e.bmShow}}),l("el-table-column",{attrs:{prop:"zcr",label:"主持人"}}),l("el-table-column",{attrs:{prop:"zcrjgh",label:"主持人教工号"}}),l("el-table-column",{attrs:{prop:"cyr",label:"参与人"}}),l("el-table-column",{attrs:{prop:"jkylx",label:"教科研类型",formatter:e.jkylxShow}}),l("el-table-column",{attrs:{prop:"hjdc",label:"获奖等次",formatter:e.hjdcShow}}),l("el-table-column",{attrs:{prop:"hjjb",label:"获奖级别",formatter:e.hjjbShow}}),l("el-table-column",{attrs:{prop:"kymc",label:"科研名称"}}),l("el-table-column",{attrs:{prop:"jkycgmc",label:"教科研成果名称"}}),l("el-table-column",{attrs:{minWidth:"50",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("table-icon",{attrs:{icon:"查看"},on:{click:function(l){return e.viewRow(t.row)}}}),l("table-icon",{attrs:{icon:"编辑"},on:{click:function(l){return e.setEdit(t.row)}}}),l("table-icon",{attrs:{icon:"删除"},on:{click:function(l){return e.handleDelete(t.row)}}})]}}])})],1),l("paging",{attrs:{total:e.total},on:{handlePaging:e.handlePaging}})],1)])]),l("el-dialog",{attrs:{title:e.diologTitle,visible:e.dialogVisible1,width:"1000px",center:""},on:{"update:visible":function(t){e.dialogVisible1=t}}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"180px",inline:"",size:"small"}},[l("el-form-item",{attrs:{label:"学年"}},[l("el-date-picker",{attrs:{type:"year",placeholder:"请选择学年","value-format":"yyyy",format:"yyyy",clearable:""},model:{value:e.form.xn,callback:function(t){e.$set(e.form,"xn",t)},expression:"form.xn"}})],1),l("el-form-item",{attrs:{label:"学期"}},[l("el-select",{attrs:{placeholder:"请选择学期"},model:{value:e.form.xqdm,callback:function(t){e.$set(e.form,"xqdm",t)},expression:"form.xqdm"}},e._l(e.xqList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),l("el-form-item",{attrs:{label:"部门"}},[l("el-select",{attrs:{placeholder:"请选择部门"},model:{value:e.form.bmdm,callback:function(t){e.$set(e.form,"bmdm",t)},expression:"form.bmdm"}},e._l(e.bmList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),l("el-form-item",{attrs:{label:"主持人"}},[l("el-input",{attrs:{maxlength:"30",placeholder:"请输入主持人",clearable:""},model:{value:e.form.zcr,callback:function(t){e.$set(e.form,"zcr",t)},expression:"form.zcr"}})],1),l("el-form-item",{attrs:{label:"主持人教工号"}},[l("el-input",{attrs:{maxlength:"30",placeholder:"请输入主持人教工号",clearable:""},model:{value:e.form.zcrjgh,callback:function(t){e.$set(e.form,"zcrjgh",t)},expression:"form.zcrjgh"}})],1),l("el-form-item",{attrs:{label:"参与人"}},[l("el-input",{attrs:{maxlength:"100",placeholder:"请输入参与人",clearable:""},model:{value:e.form.cyr,callback:function(t){e.$set(e.form,"cyr",t)},expression:"form.cyr"}})],1),l("el-form-item",{attrs:{label:"教科研类型"}},[l("el-select",{attrs:{placeholder:"请选择教科研类型"},model:{value:e.form.jkylx,callback:function(t){e.$set(e.form,"jkylx",t)},expression:"form.jkylx"}},e._l(e.jkylxList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),l("el-form-item",{attrs:{label:"获奖等次"}},[l("el-select",{attrs:{placeholder:"请选择获奖等次"},model:{value:e.form.hjdc,callback:function(t){e.$set(e.form,"hjdc",t)},expression:"form.hjdc"}},e._l(e.hjdcList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),l("el-form-item",{attrs:{label:"获奖级别"}},[l("el-select",{attrs:{placeholder:"请选择获奖级别"},model:{value:e.form.hjjb,callback:function(t){e.$set(e.form,"hjjb",t)},expression:"form.hjjb"}},e._l(e.hjjbList,function(e,t){return l("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),l("el-form-item",{attrs:{label:"科研名称"}},[l("el-input",{attrs:{maxlength:"30",placeholder:"请输入科研名称",clearable:""},model:{value:e.form.kymc,callback:function(t){e.$set(e.form,"kymc",t)},expression:"form.kymc"}})],1),l("el-form-item",{attrs:{label:"教科研成果名称"}},[l("el-input",{attrs:{maxlength:"200",placeholder:"请输入教科研成果名称",clearable:""},model:{value:e.form.jkycgmc,callback:function(t){e.$set(e.form,"jkycgmc",t)},expression:"form.jkycgmc"}})],1)],1),l("span",{attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"danger",size:"medium"},on:{click:function(t){e.dialogVisible1=!1}}},[e._v("返 回")]),"查看"!=e.diologTitle?l("el-button",{attrs:{id:"confirmLabel",type:"primary",size:"medium"},on:{click:function(t){return e.addOrUpdate()}}},[e._v("确 定")]):e._e()],1)],1),l("el-dialog",{attrs:{title:"文件上传",visible:e.up.upShow,width:"600px"},on:{"update:visible":function(t){return e.$set(e.up,"upShow",t)}}},[l("upload",{attrs:{upUrl:e.up.upUrl,params:e.up.params,example:e.up.example},on:{uploadSuccess:e.uploadSuccess}})],1)],1)},s=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"word"},[l("span",[e._v("学年：")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"word"},[l("span",[e._v("学期：")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"word"},[l("span",[e._v("部门：")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"word"},[l("span",[e._v("教科研类型：")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"word"},[l("span",[e._v("获奖等次：")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"word"},[l("span",[e._v("获奖级别：")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"header-left"},[e._v("\n          列表\n          "),l("div",{staticClass:"header-top"})])}],i=(l("386d"),l("775b")),r=l("9af6"),o=(l("3022"),{components:{upload:r["a"]},data:function(){return{search:{xn:"",xqdm:"",bmdm:"",jkylx:"",hjdc:"",hjjb:""},tableData:[{}],total:0,form:{},deleteArrayIds:[],diologTitle:"",dialogVisible1:!1,up:{upShow:!1,upUrl:"/api/baseInfo/indexSjcjJkyqk/importexcel",params:{type:""},example:i["e"]+"/教科研情况.xls"},xqList:[],bmList:[],jkylxList:[],hjdcList:[],hjjbList:[]}},mounted:function(){this.$HttpCommon.getAllDict(["xq","bm","jkylx","hjdc","hjjb"],function(e){this.xqList=e.xq,this.bmList=e.bm,this.jkylxList=e.jkylx,this.hjdcList=e.hjdc,this.hjjbList=e.hjjb}.bind(this)),this.initAll()},methods:{initAll:function(){this.queryTable(1,10)},queryTable:function(e,t){var l={};l=this.search,l.limt=t,l.page=e,this.$HTTP.api({url:"api/baseInfo/indexSjcjJkyqk/list",method:"POST",params:l,successCallback:function(e){"0"==e.code?(this.tableData=e.data.list,this.total=e.data.totalCount):this.$message({type:"error",message:e.msg})}.bind(this)})},addOrUpdateTableData:function(){var e="";"新增"==this.diologTitle?e="api/baseInfo/indexSjcjJkyqk/save":"编辑"==this.diologTitle&&(e="/api/baseInfo/indexSjcjJkyqk/update"),this.$HTTP.api({url:e,method:"POST",params:this.form,successCallback:function(e){"0"==e.code?(this.dialogVisible1=!1,this.queryTable(1,10),this.$message({type:"success",message:"操作成功!"})):this.$message({type:"error",message:e.msg})}.bind(this)})},queryInfoById:function(e){this.$HTTP.api({url:"api/baseInfo/indexSjcjJkyqk/info/"+e,method:"POST",successCallback:function(e){"0"==e.code?this.form=e.data:this.$message({type:"error",message:e.msg})}.bind(this)})},delInfos:function(e){var t=this;this.$confirm("此操作将永久删除已选中的数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$HTTP.api({url:"api/baseInfo/indexSjcjJkyqk/delete",method:"POST",params:e,successCallback:function(e){"0"==e.code?(this.$message({type:"success",message:"操作成功！"}),this.queryTable(1,10)):this.$message({type:"error",message:e.msg})}.bind(t)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handlePaging:function(e,t){this.queryTable(e,t)},handleDelete:function(e){this.delInfos([e.id])},handleDeleteMore:function(){this.delInfos(this.deleteArrayIds)},handleSelectionChange:function(e){var t=[];for(var l in e)t.push(e[l].id);this.deleteArrayIds=t},addData:function(){this.diologTitle="新增",this.form={},this.dialogVisible1=!0},addOrUpdate:function(){this.addOrUpdateTableData()},setEdit:function(e){this.diologTitle="编辑",this.queryInfoById(e.id),this.dialogVisible1=!0},viewRow:function(e){this.diologTitle="查看",this.queryInfoById(e.id),this.dialogVisible1=!0},uploadSuccess:function(e){this.up.upShow=!1,"0"==e.code?(this.$message({type:"success",message:"导入成功！"}),this.queryTable(1,10)):this.$message({type:"error",message:e.msg})},xqShow:function(e,t){return this.$HttpCommon.getTableFormat(e,t,this.xqList)},bmShow:function(e,t){return this.$HttpCommon.getTableFormat(e,t,this.bmList)},jkylxShow:function(e,t){return this.$HttpCommon.getTableFormat(e,t,this.jkylxList)},hjdcShow:function(e,t){return this.$HttpCommon.getTableFormat(e,t,this.hjdcList)},hjjbShow:function(e,t){return this.$HttpCommon.getTableFormat(e,t,this.hjjbList)}}}),n=o,c=(l("2569"),l("2877")),m=Object(c["a"])(n,a,s,!1,null,"2ed4b2ed",null);t["default"]=m.exports},2569:function(e,t,l){"use strict";var a=l("4881"),s=l.n(a);s.a},4881:function(e,t,l){}}]);