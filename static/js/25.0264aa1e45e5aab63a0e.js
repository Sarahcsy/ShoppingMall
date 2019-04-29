webpackJsonp([25],{"8T4b":function(t,e){},"9Lr3":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l("woOf"),s=l.n(a),n=l("xT6B"),r=l("4cjj"),i=l("vLgD");var o=[{label:"全场赠券",value:0},{label:"会员赠券",value:1},{label:"购物赠券",value:2},{label:"注册赠券",value:3}],u={pageNum:1,pageSize:10,useStatus:null,orderSn:null,couponId:null},c=[{label:"未使用",value:0},{label:"已使用",value:1},{label:"已过期",value:2}],p={name:"couponHistoryList",data:function(){return{coupon:{},listQuery:s()({},u),useTypeOptions:s()({},c),list:null,total:null,listLoading:!1}},created:function(){var t=this;Object(r.d)(this.$route.query.id).then(function(e){t.coupon=e.data}),this.listQuery.couponId=this.$route.query.id,this.getList()},filters:{formatType:function(t){for(var e=0;e<o.length;e++)if(t===o[e].value)return o[e].label;return""},formatUseType:function(t){return 0===t?"全场通用":1===t?"指定分类":"指定商品"},formatPlatform:function(t){return 1===t?"移动平台":2===t?"PC平台":"全平台"},formatDate:function(t){if(null==t||""===t)return"N/A";var e=new Date(t);return Object(n.a)(e,"yyyy-MM-dd")},formatStatus:function(t){return t>(new Date).getTime()?"未过期":"已过期"},formatGetType:function(t){return 1===t?"主动获取":"后台赠送"},formatCouponHistoryUseType:function(t){return 0===t?"未使用":1===t?"已使用":"已过期"},formatTime:function(t){if(null==t||""===t)return"N/A";var e=new Date(t);return Object(n.a)(e,"yyyy-MM-dd hh:mm:ss")}},methods:{getList:function(){var t,e=this;(t=this.listQuery,Object(i.a)({url:"/couponHistory/list",method:"get",params:t})).then(function(t){e.listLoading=!1,e.list=t.data.list,e.total=t.data.total})},handleResetSearch:function(){this.listQuery=s()({},u),this.listQuery.couponId=this.$route.query.id},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()}}},_={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"app-container"},[l("div",{staticClass:"table-layout"},[l("el-row",[l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("名称")]),t._v(" "),l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("优惠券类型")]),t._v(" "),l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("可使用商品")]),t._v(" "),l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("使用门槛")]),t._v(" "),l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("面值")]),t._v(" "),l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("状态")])],1),t._v(" "),l("el-row",[l("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.coupon.name))]),t._v(" "),l("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t._f("formatType")(t.coupon.type)))]),t._v(" "),l("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t._f("formatUseType")(t.coupon.useType)))]),t._v(" "),l("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v("满"+t._s(t.coupon.minPoint)+"元可用")]),t._v(" "),l("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.coupon.amount)+"元")]),t._v(" "),l("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t._f("formatStatus")(t.coupon.endTime)))])],1),t._v(" "),l("el-row",[l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("有效期")]),t._v(" "),l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("总发行量")]),t._v(" "),l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("已领取")]),t._v(" "),l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("待领取")]),t._v(" "),l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("已使用")]),t._v(" "),l("el-col",{staticClass:"table-cell-title",attrs:{span:4}},[t._v("未使用")])],1),t._v(" "),l("el-row",[l("el-col",{staticClass:"table-cell",staticStyle:{"font-size":"13px"},attrs:{span:4}},[t._v("\n        "+t._s(t._f("formatDate")(t.coupon.startTime))+"至"+t._s(t._f("formatDate")(t.coupon.endTime))+"\n      ")]),t._v(" "),l("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.coupon.publishCount))]),t._v(" "),l("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.coupon.receiveCount))]),t._v(" "),l("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.coupon.publishCount-t.coupon.receiveCount))]),t._v(" "),l("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.coupon.useCount))]),t._v(" "),l("el-col",{staticClass:"table-cell",attrs:{span:4}},[t._v(t._s(t.coupon.publishCount-t.coupon.useCount))])],1)],1),t._v(" "),l("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[l("div",[l("i",{staticClass:"el-icon-search"}),t._v(" "),l("span",[t._v("筛选搜索")]),t._v(" "),l("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSearchList()}}},[t._v("\n        查询搜索\n      ")]),t._v(" "),l("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(e){return t.handleResetSearch()}}},[t._v("\n        重置\n      ")])],1),t._v(" "),l("div",{staticStyle:{"margin-top":"15px"}},[l("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[l("el-form-item",{attrs:{label:"使用状态："}},[l("el-select",{staticClass:"input-width",attrs:{placeholder:"全部",clearable:""},model:{value:t.listQuery.useStatus,callback:function(e){t.$set(t.listQuery,"useStatus",e)},expression:"listQuery.useStatus"}},t._l(t.useTypeOptions,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),l("el-form-item",{attrs:{label:"订单编号："}},[l("el-input",{staticClass:"input-width",attrs:{placeholder:"订单编号"},model:{value:t.listQuery.orderSn,callback:function(e){t.$set(t.listQuery,"orderSn",e)},expression:"listQuery.orderSn"}})],1)],1)],1)]),t._v(" "),l("div",{staticClass:"table-container"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"couponHistoryTable",staticStyle:{width:"100%"},attrs:{"highlight-current-row":"",data:t.list,border:""}},[l("el-table-column",{attrs:{label:"优惠码",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.couponCode))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"领取会员",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.memberNickname))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"领取方式",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatGetType")(e.row.getType)))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"领取时间",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatTime")(e.row.createTime)))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"当前状态",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatCouponHistoryUseType")(e.row.useStatus)))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"使用时间",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("formatTime")(e.row.useTime)))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"订单编号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(null===e.row.orderSn?"N/A":e.row.orderSn))]}}])})],1)],1),t._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","current-page":t.listQuery.pageNum,"page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:current-page":function(e){return t.$set(t.listQuery,"pageNum",e)}}})],1)],1)},staticRenderFns:[]};var v=l("VU/8")(p,_,!1,function(t){l("8T4b")},"data-v-17d1e728",null);e.default=v.exports}});
//# sourceMappingURL=25.0264aa1e45e5aab63a0e.js.map