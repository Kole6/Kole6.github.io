(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c54a12a"],{"1c57":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"teachEval"},[a("div",{attrs:{id:"infoSearch"}},[a("div",{staticClass:"search-top"},[a("div",{staticClass:"search-frame"},[a("div",{staticClass:"top-frame"},[t._m(0),a("div",{staticClass:"input"},[a("el-select",{attrs:{size:"small",placeholder:"请选择实训基地",clearable:""},model:{value:t.search.trainBase,callback:function(e){t.$set(t.search,"trainBase",e)},expression:"search.trainBase"}},t._l(t.sxjdList,function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1)],1)])]),a("div",{staticClass:"search-btn"},[a("div",{staticClass:"btns liColor-green",on:{click:function(e){return t.queryTable(1,10)}}},[t._v("查询")])])])]),a("div",{attrs:{id:"infoTable"}},[a("div",{staticClass:"info-table"},[a("div",{staticClass:"table-header"},[t._m(1),a("div",{staticClass:"header-right"},[a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.addData}},[t._v("新增")]),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.up.upShow=!0}}},[t._v("导入")]),a("el-button",{attrs:{type:"primary",size:"small",plain:""},on:{click:t.handleDeleteMore}},[t._v("批量删除")])],1)]),a("hr"),a("div",{staticClass:"table-com"},[a("el-table",{attrs:{size:"mini",data:t.tableData,stripe:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"40"}}),a("el-table-column",{attrs:{type:"index",label:"序号"}}),a("el-table-column",{attrs:{prop:"trainPost",label:"实训岗位"}}),a("el-table-column",{attrs:{prop:"trainBase",label:"实训基地",formatter:t.sxjdShow}}),a("el-table-column",{attrs:{minWidth:"50",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("table-icon",{attrs:{icon:"查看"},on:{click:function(a){return t.viewRow(e.row)}}}),a("table-icon",{attrs:{icon:"编辑"},on:{click:function(a){return t.setEdit(e.row)}}}),a("table-icon",{attrs:{icon:"删除"},on:{click:function(a){return t.handleDelete(e.row)}}})]}}])})],1),a("paging",{attrs:{total:t.total},on:{handlePaging:t.handlePaging}})],1)])]),a("el-dialog",{attrs:{title:t.diologTitle,visible:t.dialogVisible1,width:"1000px",center:""},on:{"update:visible":function(e){t.dialogVisible1=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"180px",inline:"",size:"small"}},[a("el-form-item",{attrs:{label:"实训基地",prop:"trainBase"}},[a("el-select",{attrs:{placeholder:"请选择实训基地"},model:{value:t.form.trainBase,callback:function(e){t.$set(t.form,"trainBase",e)},expression:"form.trainBase"}},t._l(t.sxjdList,function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})}),1)],1),a("el-form-item",{attrs:{label:"实训岗位",prop:"trainPost"}},[a("el-input",{attrs:{maxlength:"50",placeholder:"请输入实训岗位",clearable:""},model:{value:t.form.trainPost,callback:function(e){t.$set(t.form,"trainPost",e)},expression:"form.trainPost"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger",size:"medium"},on:{click:function(e){t.dialogVisible1=!1}}},[t._v("返 回")]),"查看"!=t.diologTitle?a("el-button",{attrs:{id:"confirmLabel",type:"primary",size:"medium"},on:{click:function(e){return t.addOrUpdate()}}},[t._v("确 定")]):t._e()],1)],1),a("el-dialog",{attrs:{title:"文件上传",visible:t.up.upShow,width:"600px"},on:{"update:visible":function(e){return t.$set(t.up,"upShow",e)}}},[a("upload",{attrs:{upUrl:t.up.upUrl,params:t.up.params,example:t.up.example},on:{uploadSuccess:t.uploadSuccess}})],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"word"},[a("span",[t._v("实训基地：")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-left"},[t._v("\n          列表\n          "),a("div",{staticClass:"header-top"})])}],l=(a("386d"),a("775b")),n=a("9af6"),o=(a("3022"),{components:{upload:n["a"]},data:function(){return{search:{trainBase:""},tableData:[{}],total:0,form:{},deleteArrayIds:[],diologTitle:"",dialogVisible1:!1,formRules:{trainBase:[{required:!0,message:"请选择实训基地"}],trainPost:[{required:!0,message:"请输入实训岗位"}]},up:{upShow:!1,upUrl:"/api/baseInfo/sysManageTrainPost/importexcel",params:{type:""},example:l["e"]+"/实训岗位管理.xls"},sxjdList:[]}},mounted:function(){this.$HttpCommon.getAllDict(["sxjd"],function(t){this.sxjdList=t.sxjd}.bind(this)),this.initAll()},methods:{initAll:function(){this.queryTable(1,10)},queryTable:function(t,e){var a={};a=this.search,a.limt=e,a.page=t,this.$HTTP.api({url:"api/baseInfo/sysManageTrainPost/list",method:"POST",params:a,successCallback:function(t){"0"==t.code?(this.tableData=t.data.list,this.total=t.data.totalCount):this.$message({type:"error",message:t.msg})}.bind(this)})},addOrUpdateTableData:function(){var t="";"新增"==this.diologTitle?t="api/baseInfo/sysManageTrainPost/save":"编辑"==this.diologTitle&&(t="/api/baseInfo/sysManageTrainPost/update"),this.$HTTP.api({url:t,method:"POST",params:this.form,successCallback:function(t){"0"==t.code?(this.dialogVisible1=!1,this.queryTable(1,10),this.$message({type:"success",message:"操作成功!"})):this.$message({type:"error",message:t.msg})}.bind(this)})},queryInfoById:function(t){this.$HTTP.api({url:"api/baseInfo/sysManageTrainPost/info/"+t,method:"POST",successCallback:function(t){"0"==t.code?this.form=t.data:this.$message({type:"error",message:t.msg})}.bind(this)})},delInfos:function(t){var e=this;this.$confirm("此操作将永久删除已选中的数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$HTTP.api({url:"api/baseInfo/sysManageTrainPost/delete",method:"POST",params:t,successCallback:function(t){"0"==t.code?(this.$message({type:"success",message:"操作成功！"}),this.queryTable(1,10)):this.$message({type:"error",message:t.msg})}.bind(e)})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handlePaging:function(t,e){this.queryTable(t,e)},handleDelete:function(t){this.delInfos([t.id])},handleDeleteMore:function(){this.delInfos(this.deleteArrayIds)},handleSelectionChange:function(t){var e=[];for(var a in t)e.push(t[a].id);this.deleteArrayIds=e},addData:function(){this.diologTitle="新增",this.form={},this.dialogVisible1=!0},addOrUpdate:function(){this.addOrUpdateTableData()},setEdit:function(t){this.diologTitle="编辑",this.queryInfoById(t.id),this.dialogVisible1=!0},viewRow:function(t){this.diologTitle="查看",this.queryInfoById(t.id),this.dialogVisible1=!0},uploadSuccess:function(t){this.up.upShow=!1,"0"==t.code?(this.$message({type:"success",message:"导入成功！"}),this.queryTable(1,10)):this.$message({type:"error",message:t.msg})},sxjdShow:function(t,e){return this.$HttpCommon.getTableFormat(t,e,this.sxjdList)},resetSearch:function(){this.search={trainBase:""}}}}),r=o,c=(a("2ba8"),a("2877")),d=Object(c["a"])(r,s,i,!1,null,"9260a1dc",null);e["default"]=d.exports},"2ba8":function(t,e,a){"use strict";var s=a("4d4a"),i=a.n(s);i.a},"4d4a":function(t,e,a){}}]);