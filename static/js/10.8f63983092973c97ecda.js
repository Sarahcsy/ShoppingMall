webpackJsonp([10],{Fh7B:function(t,e){},GD2S:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l("woOf"),n=l.n(a),r=l("mRsl"),i=l("UgCr"),s={pageNum:0,pageSize:20,productName:null,publishStatus:null,auditStatus:null,spu:null,discountRate:null,stock:null,score:null},o={data:function(){return{productCateOptions:[],listQuery:n()({},s),operateType:null,publishStatusOptions:[{label:"上架",value:0},{label:"下架",value:1}],verifyStatusOptions:[{label:"已通过",value:0},{label:"未通过",value:1}],operates:[{label:"全选",value:0},{label:"全部更改",value:1}],list:[{productName:"帽子",publishStatus:"上架",auditStatus:"审核",productCode:"1212324",pic:"无",price:"123",sale:1232,productSn:212322}],listLoading:!1,selectProductCateValue:null}},created:function(){this.getProductList(),this.getProductCateList()},watch:{selectProductCateValue:function(t){null!=t&&2==t.length?this.listQuery.productCategoryId=t[1]:this.listQuery.productCategoryId=null}},methods:{handleResetSearch:function(){this.selectProductCateValue=[],this.listQuery=n()({},s)},getProductList:function(){var t=this;Object(i.a)(this.listQuery).then(function(e){t.list=e.data})},handleView:function(t,e){this.$router.push({path:"/product/product_list/product_info",query:{id:e.productId}})},getProductCateList:function(){var t=this;Object(r.c)().then(function(e){for(var l=e.data,a=function(e){t.productCateOptions.push({label:l[e].categoryName,value:l[e].categoryId}),Object(r.b)(l[e].categoryId).then(function(a){l[e].children=a.data;var n=[];if(null!=l[e].children&&l[e].children.length>0)for(var r=0;r<l[e].children.length;r++)n.push({label:l[e].children[r].categoryName,value:l[e].children[r].categoryId});for(var i=l[e].categoryName,s=0;s<l.length;s++)l[s].categoryName==i&&t.productCateOptions.splice(s,1);t.productCateOptions.unshift({label:l[e].categoryName,value:l[e].categoryId,children:n})})},n=0;n<l.length;n++)a(n)})},handleAddProduct:function(){this.$router.push({path:"/product/add_product"})}}},u={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"app-container"},[l("el-card",{staticClass:"filter-container",staticStyle:{background:"#f2f2f2"},attrs:{shadow:"never"}},[l("div",[l("i",{staticClass:"el-icon-search"}),t._v(" "),l("span",[t._v("筛选搜索")]),t._v(" "),l("el-button",{staticStyle:{float:"right"},attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleAddProduct()}}},[t._v("\n        添加\n      ")]),t._v(" "),l("el-button",{staticStyle:{float:"right","margin-right":"10px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleResetSearch()}}},[t._v("\n        重置\n      ")]),t._v(" "),l("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSearchList()}}},[t._v("\n        查询\n      ")])],1),t._v(" "),l("div",{staticStyle:{"margin-top":"15px"}},[l("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"120px"}},[l("el-form-item",{attrs:{label:"商品名称："}},[l("el-input",{staticStyle:{width:"203px"},attrs:{placeholder:"商品名称"},model:{value:t.listQuery.productName,callback:function(e){t.$set(t.listQuery,"productName",e)},expression:"listQuery.productName"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"商品编号："}},[l("el-input",{staticStyle:{width:"203px"},attrs:{placeholder:"商品编号"},model:{value:t.listQuery.spu,callback:function(e){t.$set(t.listQuery,"spu",e)},expression:"listQuery.spu"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"上架状态："}},[l("el-select",{staticStyle:{width:"203px"},attrs:{placeholder:"全部",clearable:""},model:{value:t.listQuery.publishStatus,callback:function(e){t.$set(t.listQuery,"publishStatus",e)},expression:"listQuery.publishStatus"}},t._l(t.publishStatusOptions,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),l("el-form-item",{attrs:{label:"商品分类："}},[l("el-cascader",{staticStyle:{width:"203px"},attrs:{placeholder:"please selete","expand-trigger":"click",clearable:"",options:t.productCateOptions,"show-all-levels":!1},model:{value:t.listQuery.id,callback:function(e){t.$set(t.listQuery,"id",e)},expression:"listQuery.id"}})],1)],1)],1)]),t._v(" "),l("div",{staticClass:"table-container"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"productTable",attrs:{"highlight-current-row":"","header-cell-style":{background:"#f2f2f2",color:"#606266","border-bottom":"1px rgb(103, 194, 58) solid"},data:t.list,border:""}},[l("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),t._v(" "),l("el-table-column",{attrs:{label:"商品编号",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.spu))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"商品名称",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("p",[t._v(t._s(e.row.productName))])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"商品图片",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[l("img",{staticStyle:{height:"80px"},attrs:{src:t.row.mainImage}})]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"标签",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("div",[l("span",{staticStyle:{float:"left",width:"90px"}},[t._v("上架：")]),t._v(" "),l("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(l){return t.handlePublishStatusChange(e.$index,e.row)}},model:{value:e.row.publishStatus,callback:function(l){t.$set(e.row,"publishStatus",l)},expression:"scope.row.publishStatus"}})],1),t._v(" "),l("div",[l("span",{staticStyle:{float:"left",width:"90px"}},[t._v("推荐：")]),t._v(" "),l("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(l){return t.handleRecommendStatusChange(e.$index,e.row)}},model:{value:e.row.recommandStatus,callback:function(l){t.$set(e.row,"recommandStatus",l)},expression:"scope.row.recommandStatus"}})],1),t._v(" "),l("div",[l("span",{staticStyle:{float:"left",width:"90px"}},[t._v("可用优惠券：")]),t._v(" "),l("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(l){return t.handleNewStatusChange(e.$index,e.row)}},model:{value:e.row.newStatus,callback:function(l){t.$set(e.row,"newStatus",l)},expression:"scope.row.newStatus"}})],1)]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"SKU库存",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(l){return t.handleShowSkuEditDialog(e.$index,e.row)}}})]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"折扣比率",sortable:"",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.discountRate)+"%")]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"商品评分",sortable:"",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.score))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"商品库存",sortable:"",width:"140",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.stock))]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(l){return t.handleView(e.$index,e.row)}}},[t._v("查看")]),t._v(" "),l("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(l){return t.handleUpdate(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),l("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(l){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),l("div",{staticClass:"batch-operate-container"},[l("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:t.operateType,callback:function(e){t.operateType=e},expression:"operateType"}},t._l(t.operates,function(t){return l("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v(" "),l("el-button",{staticClass:"search-button",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleBatchOperate()}}},[t._v("\n      确定\n    ")])],1)],1)},staticRenderFns:[]};var c=l("VU/8")(o,u,!1,function(t){l("Fh7B")},"data-v-56686734",null);e.default=c.exports},UgCr:function(t,e,l){"use strict";e.a=function(t){return Object(a.a)({url:"/pro/info/getList",method:"get",params:t})},e.b=function(t){return Object(a.a)({url:"/pro/info/getDetail?id="+t,method:"get"})};var a=l("vLgD")}});
//# sourceMappingURL=10.8f63983092973c97ecda.js.map