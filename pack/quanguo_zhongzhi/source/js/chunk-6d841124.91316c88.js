(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d841124"],{"2b6e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vuc loading_cube_3_0"},[n("div",{staticClass:"vuc-head"},e._l(e.lastMenu,function(t,a){return n("div",{key:a,class:["head-menu",t.url==e.$route.params.id?"headMenuClick":""],on:{click:function(n){return e.handleHeadMenu(t)}}},[e._v(e._s(t.name))])}),0),n("el-container",[e.menuShow?n("el-aside",{attrs:{width:"240px"}},[e.menuShow?n("pageMenu",{attrs:{menuObj:e.menuObj},on:{clickMenu:e.clickMenu}}):e._e()],1):e._e(),n("el-main",{attrs:{id:"pageRight"}},[e.breadShow?n("bread-box",{attrs:{breadListLast:e.breadListLast}}):e._e(),n("div",{class:["important-content",e.breadShow?"importantTop":""]},[n("router-view")],1)],1)],1)],1)},i=[],r=(n("7f7f"),n("ac4d"),n("8a81"),n("ac6a"),{name:"全国中职管理",list:[{name:"在校情况",url:"inSchool",icon:"&#xe641;",enName:"ZAI XIAO QING KUANG",menuFlag:"1",list:[{name:"在校情况",url:"/head/page/inSchool/inSchool"}]},{name:"数据采集",url:"collect",icon:"&#xe6d1;",enName:"SHU JU CAI JI",menuFlag:"1",list:[{name:"教学巡查",list:[{name:"学生异常情况",url:"/head/page/collect/info"},{name:"教师异常情况",url:"/head/page/collect/inSchool"},{name:"带队领导巡查情况",url:"/head/page/collect/changePwd"}]},{name:"校园安全满意度调查",url:"/head/page/collect/indexSjcjXyaqmyddc2"}]},{name:"用户",url:"relf",menuType:"relf",list:[{name:"个人信息",url:"/head/page/relf/info"},{name:"修改密码",url:"/head/page/relf/changePwd"}]}]}),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{attrs:{router:"","unique-opened":"","default-active":e.$route.path},on:{open:e.handleOpen,close:e.handleClose}},[e._l(e.$store.state.menuObj.list,function(t,a){return[null==t.list||void 0==t.list||0===t.list.length?n("el-menu-item",{key:a,attrs:{index:t.url},on:{click:function(n){return e.handClick(t)}}},[n("router-link",{staticClass:"routerActive activeOne",attrs:{tag:"div",to:t.url}},[e._v(e._s(t.name))])],1):n("el-submenu",{key:a+100,attrs:{index:a+100+"url"}},[n("template",{slot:"title"},[n("span",[e._v(e._s(t.name))])]),e._l(t.list,function(t,a){return[void 0!=t.list&&null!=t.list&&0!=t.list.length?n("el-submenu",{key:t.menuId||100*Math.random(),attrs:{index:t.menuId||100*Math.random()}},[n("template",{slot:"title"},[e._v(e._s(t.name))]),e._l(t.list,function(t,a){return n("el-menu-item",{key:a+1e4,attrs:{index:t.url},on:{click:function(n){return e.handClick(t)}}},[e._v(e._s(t.name))])})],2):n("el-menu-item",{key:a+1e3,attrs:{index:t.url},on:{click:function(n){return e.handClick(t)}}},[n("router-link",{staticClass:"routerActive activeTwo",attrs:{tag:"div",to:t.url}},[e._v(e._s(t.name))])],1)]})],2)]})],2)],1)},s=[],u={props:{menuObj:{type:Object,default:{}}},data:function(){return{}},methods:{handleOpen:function(e,t){},handleClose:function(e,t){},handClick:function(e){this.$emit("clickMenu",e)}}},o=u,c=n("2877"),d=Object(c["a"])(o,l,s,!1,null,"4809b6db",null),h=d.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bread"},[e._m(0),n("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.breadListLast,function(t,a){return n("el-breadcrumb-item",{key:a,attrs:{to:t.url}},[e._v(e._s(t.name))])}),1)],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tubiao"},[n("span",{staticClass:"icon iconfont"},[e._v("")])])}],p={props:{param:{type:String,default:"导航"},breadListLast:{type:Array,default:function(){return[]}}},data:function(){return{}}},v=p,b=(n("5f4c"),Object(c["a"])(v,m,f,!1,null,"7f88ace2",null)),_=b.exports,g={components:{breadBox:_,pageMenu:h},data:function(){return{menuObj:{},menuShow:!0,breadShow:!0,nav:"school",breadParam:"学校信息",lastMenu:[],breadListLast:[],firstUrl:""}},mounted:function(){this.handleNav(this.$route.params.id),this.breadListLast=this.getMenuList([this.$store.state.menuObj],this.$route.path)},watch:{$route:function(e,t){this.$Global.rightScrollTop(),e.params.id&&e.params.id!=t.params.id&&this.handleNav(e.params.id),this.breadListLast=this.getMenuList([this.$store.state.menuObj],e.path)}},methods:{handleNav:function(e){var t=this;this.menuShow=!1,this.lastMenu=menuMock?r.list:JSON.parse(localStorage.menuTrees);var n=!0,a=!1,i=void 0;try{for(var l,s=this.lastMenu[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var u=l.value;if(u.url==e){u.list&&u.list.length>1?(this.$nextTick(function(){t.menuShow=!0,t.breadShow=!0}),this.$store.commit("updateMenuObj",u)):this.breadShow=!1;break}}}catch(o){a=!0,i=o}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}},handleHeadMenu:function(e){e.list&&(e.list[0].list?this.handleHeadMenu(e.list[0]):this.$router.push({path:e.list[0].url}))},getFirstMenu:function(e){e.list&&(e.list[0].list?this.getFirstMenu(e.list[0]):this.firstUrl=e.list[0].url)},clickMenu:function(e){this.breadParam=e.name},getMenuList:function(e,t){var n=this.flattenMenu(e),a=[],i=-1;this.getFirstMenu(e[0]);for(var r=n.length-1;r>=0;r--)n[r].url==t?(i=n[r].level,a.push(n[r]),this.$store.commit("updateMenuClick",n[r])):n[r].level==i-1&&(n[r].url=this.firstUrl,a.splice(0,0,n[r]),i-=1);return a},flattenMenu:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.reduce(function(e,a){var i=a.name,r=a.url,l=a.menuId,s=a.list,u=void 0===s?[]:s;return e.concat([{level:n,name:i,url:r,menuId:l}],t.flattenMenu(u||[],n+1))},[])}}},k=g,M=(n("e03e"),Object(c["a"])(k,a,i,!1,null,"40cbf815",null));t["default"]=M.exports},"419e":function(e,t,n){},"5f4c":function(e,t,n){"use strict";var a=n("6cf4"),i=n.n(a);i.a},"6cf4":function(e,t,n){},e03e:function(e,t,n){"use strict";var a=n("419e"),i=n.n(a);i.a}}]);