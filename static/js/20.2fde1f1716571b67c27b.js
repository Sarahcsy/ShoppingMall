webpackJsonp([20],{PHuB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("woOf"),l=a.n(n),r=a("vLgD");var i={pageNum:1,pageSize:10,user:null,productCode:null,productName:""},s={data:function(){return{total:null,offset:0,limit:20,count:0,currentPage:1,listQuery:l()({},i),list:[{productCode:"12987122",userName:"张三",productName:"帽子",title:"评论帽子",content:"荷兰优质淡奶，奶香浓而不腻",secondContent:"好滋好味鸡蛋仔",commentTime:"2010-9-9"},{productCode:"12987122",userName:"张三",productName:"帽子",title:"评论帽子",content:"荷兰优质淡奶，奶香浓而不腻",secondContent:"好滋好味鸡蛋仔",commentTime:"2010-9-9"}]}},methods:{getSearchList:function(){var t,e=this;this.listLoading=!0,(t=this.listQuery,Object(r.a)({url:"/pro/comment/list_admin",method:"get",params:t})).then(function(t){e.listLoading=!1,e.list=t.data.list,e.total=t.data.total})},handleSearchList:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getSearchList()},handleResetSearch:function(){this.listQuery=l()({},i)},handleDelete:function(t,e){var a=[];a.push(e.commentId),this.deleteComment(a)},deleteComment:function(t){var e=this;this.$confirm("是否要进行该删除操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t;(t=e.commentId,Object(r.a)({url:"/pro/comment/delete",method:"get",params:t})).then(function(t){e.$message({message:"删除成功！",type:"success",duration:1e3}),e.listQuery.pageNum=1})})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticClass:"filter-container",staticStyle:{background:"#f2f2f2"},attrs:{shadow:"never"}},[a("div",[a("i",{staticClass:"el-icon-search"}),t._v(" "),a("span",[t._v("筛选搜索")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSearchList()}}},[t._v("\n        查询\n      ")]),t._v(" "),a("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(e){return t.handleResetSearch()}}},[t._v("\n        重置\n      ")])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"15px"}},[a("el-form",{attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"140px"}},[a("el-form-item",{attrs:{label:"商品名称："}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"商品名称"},model:{value:t.listQuery.productName,callback:function(e){t.$set(t.listQuery,"productName",e)},expression:"listQuery.productName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品货号："}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"商品货号"},model:{value:t.listQuery.productCode,callback:function(e){t.$set(t.listQuery,"productCode",e)},expression:"listQuery.productCode"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户名称："}},[a("el-input",{staticClass:"input-width",attrs:{placeholder:"评论用户名称"},model:{value:t.listQuery.userName,callback:function(e){t.$set(t.listQuery,"userName",e)},expression:"listQuery.userName"}})],1)],1)],1)]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,"highlight-current-row":"","header-cell-style":{background:"#f2f2f2",color:"#606266","border-bottom":"1px rgb(103, 194, 58) solid"}}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:"","label-width":"100px"}},[a("el-form-item",{attrs:{label:"标题:"}},[a("span",[t._v(t._s(e.row.title))])]),t._v(" "),a("el-form-item",{attrs:{label:"评论内容:"}},[a("span",[t._v(t._s(e.row.content))])]),t._v(" "),a("el-form-item",{attrs:{label:"重复评论内容:"}},[a("span",[t._v(t._s(e.row.secondContent))])]),t._v(" "),a("el-form-item",{attrs:{label:"评论时间:"}},[a("span",[t._v(t._s(e.row.commentTime))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商品货号",align:"center",prop:"productCode"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品名称",align:"center",prop:"productName"}}),t._v(" "),a("el-table-column",{attrs:{label:"评价用户",align:"center",prop:"userName"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除\n          ")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"",layout:"total,sizes,prev, pager, next,jumper","current-page":t.listQuery.pageNum,"page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:current-page":function(e){return t.$set(t.listQuery,"pageNum",e)}}})],1)],1)},staticRenderFns:[]};var u=a("VU/8")(s,o,!1,function(t){a("vp0K")},"data-v-2d8beed2",null);e.default=u.exports},vp0K:function(t,e){}});
//# sourceMappingURL=20.2fde1f1716571b67c27b.js.map