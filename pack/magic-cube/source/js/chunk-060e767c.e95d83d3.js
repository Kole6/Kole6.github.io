(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-060e767c"],{2711:function(e,t,a){},"4a79":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"teachEval"},[a("div",{attrs:{id:"infoSearch"}},[a("div",{staticClass:"search-top"},[a("div",{staticClass:"search-frame"},[a("div",{staticClass:"top-frame"},[e._m(0),a("div",{staticClass:"input"},[a("el-select",{attrs:{size:"small",placeholder:"请选择班级",clearable:""},model:{value:e.search.bjdm,callback:function(t){e.$set(e.search,"bjdm",t)},expression:"search.bjdm"}},e._l(e.bjList,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1)]),a("div",{staticClass:"top-frame"},[e._m(1),a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"small",placeholder:"请输入姓名",clearable:""},model:{value:e.search.xm,callback:function(t){e.$set(e.search,"xm",t)},expression:"search.xm"}})],1)]),a("div",{staticClass:"top-frame"},[e._m(2),a("div",{staticClass:"input"},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{size:"small",type:"year","value-format":"yyyy",format:"yyyy",placeholder:"请选择学年",clearable:""},model:{value:e.search.xn,callback:function(t){e.$set(e.search,"xn",t)},expression:"search.xn"}})],1)]),a("div",{staticClass:"top-frame"},[e._m(3),a("div",{staticClass:"input"},[a("el-select",{attrs:{size:"small",placeholder:"请选择学期",clearable:""},model:{value:e.search.xqdm,callback:function(t){e.$set(e.search,"xqdm",t)},expression:"search.xqdm"}},e._l(e.xqList,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1)]),a("div",{staticClass:"top-frame"},[e._m(4),a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"small",placeholder:"请输入期中",clearable:""},model:{value:e.search.qz,callback:function(t){e.$set(e.search,"qz",t)},expression:"search.qz"}})],1)]),a("div",{staticClass:"top-frame"},[e._m(5),a("div",{staticClass:"input"},[a("el-input",{attrs:{size:"small",placeholder:"请输入期末",clearable:""},model:{value:e.search.qm,callback:function(t){e.$set(e.search,"qm",t)},expression:"search.qm"}})],1)])]),a("div",{staticClass:"search-btn"},[a("div",{staticClass:"btns liColor-green",on:{click:function(t){return e.queryTable(1,10)}}},[e._v("查询")])])])]),a("div",{attrs:{id:"infoTable"}},[a("div",{staticClass:"info-table"},[a("div",{staticClass:"table-header"},[e._m(6),a("div",{staticClass:"header-right"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.addData}},[e._v("新增")]),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(t){e.up.upShow=!0}}},[e._v("导入")]),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:e.handleDeleteMore}},[e._v("批量删除")])],1)]),a("hr"),a("div",{staticClass:"table-com"},[a("el-table",{attrs:{size:"mini",data:e.tableData,stripe:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"40"}}),a("el-table-column",{attrs:{type:"index",label:"序号"}}),a("el-table-column",{attrs:{prop:"bjdm",label:"班级",formatter:e.bjShow}}),a("el-table-column",{attrs:{prop:"rxbh",label:"入学编号"}}),a("el-table-column",{attrs:{prop:"xm",label:"姓名"}}),a("el-table-column",{attrs:{prop:"xn",label:"学年"}}),a("el-table-column",{attrs:{prop:"xqdm",label:"学期",formatter:e.xqShow}}),a("el-table-column",{attrs:{prop:"km",label:"科目"}}),a("el-table-column",{attrs:{prop:"ps",label:"平时"}}),a("el-table-column",{attrs:{prop:"qz",label:"期中"}}),a("el-table-column",{attrs:{prop:"qm",label:"期末"}}),a("el-table-column",{attrs:{prop:"zp",label:"总评"}}),a("el-table-column",{attrs:{prop:"bkcj",label:"补考成绩"}}),a("el-table-column",{attrs:{minWidth:"50",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("table-icon",{attrs:{icon:"查看"},on:{click:function(a){return e.viewRow(t.row)}}}),a("table-icon",{attrs:{icon:"编辑"},on:{click:function(a){return e.setEdit(t.row)}}}),a("table-icon",{attrs:{icon:"删除"},on:{click:function(a){return e.handleDelete(t.row)}}})]}}])})],1),a("paging",{attrs:{total:e.total},on:{handlePaging:e.handlePaging}})],1)])]),a("el-dialog",{attrs:{title:e.diologTitle,visible:e.dialogVisible1,width:"1000px",center:""},on:{"update:visible":function(t){e.dialogVisible1=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"180px",inline:"",size:"small"}},[a("el-form-item",{attrs:{label:"班级"}},[a("el-select",{attrs:{placeholder:"请选择班级"},model:{value:e.form.bjdm,callback:function(t){e.$set(e.form,"bjdm",t)},expression:"form.bjdm"}},e._l(e.bjList,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"入学编号"}},[a("el-input",{attrs:{maxlength:"30",placeholder:"请输入入学编号",clearable:""},model:{value:e.form.rxbh,callback:function(t){e.$set(e.form,"rxbh",t)},expression:"form.rxbh"}})],1),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{maxlength:"30",placeholder:"请输入姓名",clearable:""},model:{value:e.form.xm,callback:function(t){e.$set(e.form,"xm",t)},expression:"form.xm"}})],1),a("el-form-item",{attrs:{label:"学年"}},[a("el-date-picker",{attrs:{type:"year",placeholder:"请选择学年","value-format":"yyyy",format:"yyyy",clearable:""},model:{value:e.form.xn,callback:function(t){e.$set(e.form,"xn",t)},expression:"form.xn"}})],1),a("el-form-item",{attrs:{label:"学期"}},[a("el-select",{attrs:{placeholder:"请选择学期"},model:{value:e.form.xqdm,callback:function(t){e.$set(e.form,"xqdm",t)},expression:"form.xqdm"}},e._l(e.xqList,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"科目"}},[a("el-input",{attrs:{maxlength:"30",placeholder:"请输入科目",clearable:""},model:{value:e.form.km,callback:function(t){e.$set(e.form,"km",t)},expression:"form.km"}})],1),a("el-form-item",{attrs:{label:"平时"}},[a("el-input",{attrs:{maxlength:"30",placeholder:"请输入平时",clearable:""},model:{value:e.form.ps,callback:function(t){e.$set(e.form,"ps",t)},expression:"form.ps"}})],1),a("el-form-item",{attrs:{label:"期中"}},[a("el-input",{attrs:{maxlength:"30",placeholder:"请输入期中",clearable:""},model:{value:e.form.qz,callback:function(t){e.$set(e.form,"qz",t)},expression:"form.qz"}})],1),a("el-form-item",{attrs:{label:"期末"}},[a("el-input",{attrs:{maxlength:"30",placeholder:"请输入期末",clearable:""},model:{value:e.form.qm,callback:function(t){e.$set(e.form,"qm",t)},expression:"form.qm"}})],1),a("el-form-item",{attrs:{label:"总评"}},[a("el-input",{attrs:{maxlength:"30",placeholder:"请输入总评",clearable:""},model:{value:e.form.zp,callback:function(t){e.$set(e.form,"zp",t)},expression:"form.zp"}})],1),a("el-form-item",{attrs:{label:"补考成绩"}},[a("el-input",{attrs:{maxlength:"30",placeholder:"请输入补考成绩",clearable:""},model:{value:e.form.bkcj,callback:function(t){e.$set(e.form,"bkcj",t)},expression:"form.bkcj"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger",size:"medium"},on:{click:function(t){e.dialogVisible1=!1}}},[e._v("返 回")]),"查看"!=e.diologTitle?a("el-button",{attrs:{id:"confirmLabel",type:"primary",size:"medium"},on:{click:function(t){return e.addOrUpdate()}}},[e._v("确 定")]):e._e()],1)],1),a("el-dialog",{attrs:{title:"文件上传",visible:e.up.upShow,width:"600px"},on:{"update:visible":function(t){return e.$set(e.up,"upShow",t)}}},[a("upload",{attrs:{upUrl:e.up.upUrl,params:e.up.params,example:e.up.example},on:{uploadSuccess:e.uploadSuccess}})],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"word"},[a("span",[e._v("班级：")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"word"},[a("span",[e._v("姓名：")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"word"},[a("span",[e._v("学年：")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"word"},[a("span",[e._v("学期：")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"word"},[a("span",[e._v("期中：")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"word"},[a("span",[e._v("期末：")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-left"},[e._v("\n          列表\n          "),a("div",{staticClass:"header-top"})])}],i=(a("386d"),a("775b")),r=a("9af6"),o=(a("3022"),{components:{upload:r["a"]},data:function(){return{search:{bjdm:"",xm:"",xn:"",xqdm:"",qz:"",qm:""},tableData:[{}],total:0,form:{},deleteArrayIds:[],diologTitle:"",dialogVisible1:!1,up:{upShow:!1,upUrl:"/api/baseInfo/indexSjcjXscjgl/importexcel",params:{type:""},example:i["e"]+"/学生成绩管理.xls"},bjList:[],xqList:[]}},mounted:function(){this.$HttpCommon.getAllDict(["bj","xq"],function(e){this.bjList=e.bj,this.xqList=e.xq}.bind(this)),this.initAll()},methods:{initAll:function(){this.queryTable(1,10)},queryTable:function(e,t){var a={};a=this.search,a.limt=t,a.page=e,this.$HTTP.api({url:"api/baseInfo/indexSjcjXscjgl/list",method:"POST",params:a,successCallback:function(e){"0"==e.code?(this.tableData=e.data.list,this.total=e.data.totalCount):this.$message({type:"error",message:e.msg})}.bind(this)})},addOrUpdateTableData:function(){var e="";"新增"==this.diologTitle?e="api/baseInfo/indexSjcjXscjgl/save":"编辑"==this.diologTitle&&(e="/api/baseInfo/indexSjcjXscjgl/update"),this.$HTTP.api({url:e,method:"POST",params:this.form,successCallback:function(e){"0"==e.code?(this.dialogVisible1=!1,this.queryTable(1,10),this.$message({type:"success",message:"操作成功!"})):this.$message({type:"error",message:e.msg})}.bind(this)})},queryInfoById:function(e){this.$HTTP.api({url:"api/baseInfo/indexSjcjXscjgl/info/"+e,method:"POST",successCallback:function(e){"0"==e.code?this.form=e.data:this.$message({type:"error",message:e.msg})}.bind(this)})},delInfos:function(e){var t=this;this.$confirm("此操作将永久删除已选中的数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$HTTP.api({url:"api/baseInfo/indexSjcjXscjgl/delete",method:"POST",params:e,successCallback:function(e){"0"==e.code?(this.$message({type:"success",message:"操作成功！"}),this.queryTable(1,10)):this.$message({type:"error",message:e.msg})}.bind(t)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handlePaging:function(e,t){this.queryTable(e,t)},handleDelete:function(e){this.delInfos([e.id])},handleDeleteMore:function(){this.delInfos(this.deleteArrayIds)},handleSelectionChange:function(e){var t=[];for(var a in e)t.push(e[a].id);this.deleteArrayIds=t},addData:function(){this.diologTitle="新增",this.form={},this.dialogVisible1=!0},addOrUpdate:function(){this.addOrUpdateTableData()},setEdit:function(e){this.diologTitle="编辑",this.queryInfoById(e.id),this.dialogVisible1=!0},viewRow:function(e){this.diologTitle="查看",this.queryInfoById(e.id),this.dialogVisible1=!0},uploadSuccess:function(e){this.up.upShow=!1,"0"==e.code?(this.$message({type:"success",message:"导入成功！"}),this.queryTable(1,10)):this.$message({type:"error",message:e.msg})},bjShow:function(e,t){return this.$HttpCommon.getTableFormat(e,t,this.bjList)},xqShow:function(e,t){return this.$HttpCommon.getTableFormat(e,t,this.xqList)}}}),n=o,c=(a("9204"),a("2877")),m=Object(c["a"])(n,l,s,!1,null,"2a17a1da",null);t["default"]=m.exports},9204:function(e,t,a){"use strict";var l=a("2711"),s=a.n(l);s.a}}]);