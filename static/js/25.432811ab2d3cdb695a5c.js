webpackJsonp([25],{Ky2h:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("woOf"),i=a.n(n),r=a("mRsl"),l=a("DQey"),s={pageindex:0,pagesize:20,id:null},o={created:function(){this.getList(),this.getProductCateList()},data:function(){return{listQuery:i()({},s),productCateOptions:[],list:null,listLoading:!1}},methods:{getProductCateList:function(){var t=this;Object(r.e)().then(function(e){for(var a=e.data,n=function(e){Object(r.d)(a[e].categoryId).then(function(n){a[e].children=n.data;var i=[];if(null!=a[e].children&&a[e].children.length>0)for(var r=0;r<a[e].children.length;r++)i.push({label:a[e].children[r].categoryName,value:a[e].children[r].categoryId});t.productCateOptions.push({label:a[e].categoryName,value:a[e].categoryId,children:i})})},i=0;i<a.length;i++)n(i)})},getList:function(){var t=this;Object(l.b)(this.listQuery).then(function(e){t.listLoading=!1,t.list=e.data})},handleSearchList:function(){var t=this;Object(l.b)(this.listQuery.id).then(function(e){t.listLoading=!1,t.list=e.data})},getSummaries:function(t){var e=t.columns,a=t.data,n=[];return e.forEach(function(t,e){if(0!==e){var i=a.map(function(e){return Number(e[t.property])});i.every(function(t){return isNaN(t)})?n[e]="":(n[e]=i.reduce(function(t,e){var a=Number(e);return isNaN(a)?t:t+e},0),n[e]+=" 元")}else n[e]="合计"}),n}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{staticStyle:{background:"#f2f2f2"},attrs:{shadow:"never"}},[a("svg-icon",{staticClass:"S-icon",attrs:{"icon-class":"Smoney"}}),t._v(" "),a("span",{staticClass:"title-font"},[t._v("商品统计")]),t._v(" "),a("div",{staticClass:"pro-form"},[a("el-form",{ref:"productCateFrom",staticStyle:{"margin-top":"10px","margin-bottom":"0px"},attrs:{inline:!0,model:t.listQuery,size:"small","label-width":"100px"}},[a("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"商品分类："}},[a("el-cascader",{staticStyle:{width:"203px"},attrs:{placeholder:"please selete","expand-trigger":"click",clearable:"",options:t.productCateOptions,"change-on-select":""},model:{value:t.listQuery.id,callback:function(e){t.$set(t.listQuery,"id",e)},expression:"listQuery.id"}}),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small"},on:{click:t.handleSearchList}},[t._v("\n                            查询\n                        ")])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"productTable",staticStyle:{width:"100%"},attrs:{"highlight-current-row":"","header-cell-style":{background:"#f2f2f2",color:"#606266","border-bottom":"1px rgb(103, 194, 58) solid"},data:t.list,fixed:"","show-summary":"","summary-method":t.getSummaries,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"No.",width:"60",type:"index",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.userLogin.productName))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"销量",sortable:"",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.userLogin.Quantity))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"销售额",sortable:"",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.money))]}}])})],1),t._v(" "),a("div",{staticClass:"Pagination",staticStyle:{"text-align":"left","margin-top":"10px"}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":20,layout:" prev, pager, next",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]};var u=a("VU/8")(o,c,!1,function(t){a("W+nJ")},"data-v-3eb33f88",null);e.default=u.exports},"W+nJ":function(t,e){}});
//# sourceMappingURL=25.432811ab2d3cdb695a5c.js.map