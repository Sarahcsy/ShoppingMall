webpackJsonp([8],{"4cjj":function(t,e,n){"use strict";e.b=function(t){return Object(a.a)({url:"/pro/coupon/getList",method:"get",params:t})},e.c=function(t){return Object(a.a)({url:"/coupon/"+t,method:"get"})},e.a=function(t){return Object(a.a)({url:"/coupon/delete/"+t,method:"post"})};var a=n("vLgD")},plLZ:function(t,e){},w8Vk:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("woOf"),l=n.n(a),i=n("4cjj"),r=n("xT6B"),s={pageindex:0,pagesize:20,name:null,type:null},o=[{label:"全场赠券",value:0},{label:"会员赠券",value:1},{label:"购物赠券",value:2},{label:"注册赠券",value:3}],u={name:"couponList",data:function(){return{listQuery:l()({},s),typeOptions:l()({},o),list:null,total:null,listLoading:!1,multipleSelection:[]}},created:function(){this.getList()},filters:{formatType:function(t){for(var e=0;e<o.length;e++)if(t===o[e].value)return o[e].label;return""},formatUseType:function(t){return 0===t?"全场通用":1===t?"指定分类":"指定商品"},formatDate:function(t){if(null==t||""===t)return"N/A";var e=new Date(t);return Object(r.a)(e,"yyyy-MM-dd")},formatStatus:function(t){return t>(new Date).getTime()?"未过期":"已过期"}},methods:{handleResetSearch:function(){this.listQuery=l()({},s)},handleSearchList:function(){this.listQuery.pageindex=0,this.listQuery.pagesize=20,this.getList()},handleSelectionChange:function(t){this.multipleSelection=t},handleSizeChange:function(t){this.listQuery.pageindex=0,this.listQuery.pagesize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageindex=t,this.getList()},handleAdd:function(){this.$router.push({path:"/sms/addCoupon"})},handleView:function(t,e){this.$router.push({path:"/sms/couponHistory",query:{id:e.id}})},handleUpdate:function(t,e){this.$router.push({path:"/sms/updateCoupon",query:{id:e.id}})},handleDelete:function(t,e){var n=this;this.$confirm("是否进行删除操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.a)(e.id).then(function(t){n.$message({type:"success",message:"删除成功!"}),n.getList()})})},getList:function(){var t=this;this.listLoading=!0,Object(i.b)(this.listQuery).then(function(e){t.listLoading=!1,t.list=e.data,t.total=e.data.total})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"filter-container",staticStyle:{background:"#f2f2f2"},attrs:{shadow:"never"}},[n("div",[n("i",{staticClass:"el-icon-search"}),t._v(" "),n("span",[t._v("筛选搜索")]),t._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSearchList()}}},[t._v("\n        查询搜索\n      ")]),t._v(" "),n("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(e){return t.handleResetSearch()}}},[t._v("\n        重置\n      ")])],1),t._v(" "),n("div",{staticStyle:{"margin-top":"15px"}},[n("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[n("el-form-item",{attrs:{label:"优惠券名称："}},[n("el-input",{staticClass:"input-width",attrs:{placeholder:"优惠券名称"},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"优惠券类型："}},[n("el-select",{staticClass:"input-width",attrs:{placeholder:"全部",clearable:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},t._l(t.typeOptions,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)],1)],1)]),t._v(" "),n("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[n("i",{staticClass:"el-icon-tickets"}),t._v(" "),n("span",[t._v("数据列表")]),t._v(" "),n("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(e){return t.handleAdd()}}},[t._v("添加")])],1),t._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"couponTable",staticStyle:{width:"100%"},attrs:{"highlight-current-row":"","header-cell-style":{background:"#f2f2f2",color:"#606266","border-bottom":"1px rgb(103, 194, 58) solid"},data:t.list,border:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"编号",width:"60",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.couponId))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"优惠劵名称",width:"130",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"优惠券类型",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatType")(e.row.type)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"可使用商品",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatUseType")(e.row.useType)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"使用门槛",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("满"+t._s(e.row.useCondition)+"元可用")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"发行量",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.amount))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"剩余量",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remainingQuantity))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"面值",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.faceValue)+"元")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"图片",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatPlatform")(e.row.imageUrl)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"有效期",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatDate")(e.row.startTime))+"至"+t._s(t._f("formatDate")(e.row.endTime)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatStatus")(e.row.status)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.handleView(e.$index,e.row)}}},[t._v("查看")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.handleUpdate(e.$index,e.row)}}},[t._v("\n            编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),n("div",{staticClass:"Pagination",staticStyle:{"text-align":"left","margin-top":"10px"}},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":20,layout:" prev, pager, next",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var d=n("VU/8")(u,c,!1,function(t){n("plLZ")},"data-v-4c042ec0",null);e.default=d.exports}});
//# sourceMappingURL=8.bad039d4e7f3c1cd2a0a.js.map