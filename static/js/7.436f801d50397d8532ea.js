webpackJsonp([7],{"3idm":function(t,e,a){"use strict";e.a=function(t){return Object(r.a)({url:"/pro/attribute/addProductAttributeKey",method:"post",params:t})},e.b=function(t){return Object(r.a)({url:"/pro/attribute/addProductAttributeValue",method:"post",params:t})},e.c=function(t){return Object(r.a)({url:"/pro/attribute/getProductAttributeKeyByIdAndName",method:"get",params:t})},e.e=function(t){return Object(r.a)({url:"/pro/attribute/getProductAttributeKeyByCategoryID?id="+t,method:"get"})},e.d=function(t){return Object(r.a)({url:"/pro/attribute/getProductAttributeKeyList",method:"get",params:t})};var r=a("vLgD")},"FA//":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("woOf"),l=a.n(r),i=a("mRsl"),n=a("3idm"),o=(a("DQey"),a("xT6B")),d={pageindex:0,pagesize:20,id:null,name:null,categoryName:null},s={categoryId:null,attrName:null,attrKeyId:null,attrValue:null},u={pageindex:0,pagesize:20,attrKeyId:null,attrValue:null},c={data:function(){return{dialogAddAttrKeyVisible:!1,dialogAddAttrValueVisible:!1,productCateOptions:[],z:0,valueList:null,AttrNameOptions:[],productCate:l()({},d),AddAttrKey:l()({},s),AddAttrValue:l()({},u),selectProductCateList:[],rules:{attrName:[{required:!0,message:"请输入分类名称",trigger:"blur"},{min:2,max:14,message:"长度在 2 到 14 个字符",trigger:"blur"}]},list:null,offset:0,limit:20,count:0,currentPage:1}},created:function(){this.getProductCateList(),this.getList(),this.getAttrValueList()},filters:{dateFormatter:function(t){var e=new Date(t);return Object(o.a)(e,"MM.dd.yyyy hh:mm:ss")}},methods:{getList:function(){var t=this;this.listLoading=!0,Object(n.e)(3).then(function(e){t.listLoading=!1,t.list=e.data})},handleResetSearch:function(){this.productCate=l()({},d)},handleConfirm:function(){},getAttrKeyList:function(){var t=this;this.listLoading=!0,Object(n.c)(this.productCate).then(function(e){t.listLoading=!1,t.list=e.data})},getAttrValueList:function(){},getProductCateList:function(){var t=this;Object(i.c)().then(function(e){for(var a=e.data,r=function(e){Object(i.b)(a[e].categoryId).then(function(r){a[e].children=r.data;for(var l=[],i=0;i<a[e].children.length;i++)l.push({label:a[e].children[i].categoryName,value:a[e].children[i].categoryId});t.productCateOptions.push({label:a[e].categoryName,value:a[e].categoryId,children:l})}).catch(function(t){this.$message({message:"406",type:"warning",duration:1e3})})},l=0;l<a.length;l++)r(l)})},refreshList:function(){this.productCate=l()({},d),this.getList()},handleSearchList:function(){var t=this;this.productCate.pageindex=null,this.productCate.pagesize=null,Object(n.e)(this.productCate.productCategoryId).then(function(e){t.listLoading=!1,t.list=e.data})},getAllAttrName:function(){var t=this;Object(n.d)(this.AddAttrValue).then(function(e){t.AttrNameOptions=e.data})},handleAddAttrValue:function(){this.dialogAddAttrValueVisible=!0,this.getAllAttrName()},handleAddAttrKey:function(){this.dialogAddAttrKeyVisible=!0},handleAddAttrKeyConfirm:function(){var t=this;null!=this.AddAttrKey.attrName&&""!=this.AddAttrKey.attrName?Object(n.a)(AddAttrValue).then(function(e){t.list=e.data,t.$message({message:"添加成功",type:"success",duration:1e3})}):this.$message({message:"属性名称不能为空",type:"warning",duration:1e3})},handleAddProductAttrValue:function(){var t=this;null!=this.AddAttrValue.attrValue&&""!=this.AddAttrValue.attrValue?(Object(n.b)(this.AddAttrValue.categoryId,this.AddAttrValue.attrName).then(function(e){t.list=e.data}),this.AddAttrKey.ProductAttrValue=null):this.$message({message:"属性值不能为空",type:"warning",duration:1e3})},resetcategoryId:function(){null!=this.$route.query.categoryId?this.categoryId=this.$route.query.categoryId:this.categoryId=0},handleShowNextLevel:function(t,e){this.$router.push({path:"/product/product_cate/add_cate",categoryId:e.id})},handleUpdate:function(t,e){var a=this;getProductCate(this.categoryId).then(function(t){a.productCate=t.data})},handleDelete:function(t,e){},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.currentPage=t,this.offset=(t-1)*this.limit}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-card",{attrs:{shadow:"never"}},[a("el-form",{ref:"productCateFrom",staticStyle:{"margin-bottom":"0px"},attrs:{inline:!0,size:"small","label-width":"100px",model:t.productCate,rules:t.rules}},[a("el-form-item",{attrs:{label:"商品分类："}},[a("el-cascader",{staticStyle:{width:"203px"},attrs:{placeholder:"please selete","expand-trigger":"click",clearable:"",options:t.productCateOptions,"show-all-levels":!1},model:{value:t.productCate.id,callback:function(e){t.$set(t.productCate,"id",e)},expression:"productCate.id"}})],1),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleSearchList("productCateFrom")}}},[t._v("Search")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.refreshList()}}},[t._v("Refresh")]),t._v(" "),a("el-button",{staticClass:"btn-add",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleAddAttrKey()}}},[t._v("添加属性")]),t._v(" "),a("el-button",{staticClass:"btn-add",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleAddAttrValue()}}},[t._v("添加属性值")])],1)],1),t._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{ref:"productTable",staticStyle:{width:"100%"},attrs:{"highlight-current-row":"","header-cell-style":{background:"#f2f2f2",color:"#606266","border-bottom":"1px rgb(103, 194, 58) solid"},data:t.list,border:""}},[a("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"编号",width:"60",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.keyId))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"属性名称",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"primary"}},[t._v(t._s(e.row.attrName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"属性值",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleUpdate(e.$index,e.row)}}},[t._v("编辑\n                        ")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除\n                        ")])]}}])})],1),t._v(" "),a("div",{staticClass:"Pagination",staticStyle:{"text-align":"left","margin-top":"10px"}},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":20,layout:"total, prev, pager, next",total:t.count},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"添加商品属性",visible:t.dialogAddAttrKeyVisible,width:"35%",height:"100%"},on:{"update:visible":function(e){t.dialogAddAttrKeyVisible=e}}},[a("el-form",{ref:"DetailForm",attrs:{model:t.AddAttrKey,inline:!0,size:"small","label-width":"100px"}},[a("el-form-item",{attrs:{label:"商品分类："}},[a("el-cascader",{staticStyle:{width:"203px"},attrs:{placeholder:"please selete","expand-trigger":"click",clearable:"",options:t.productCateOptions,"show-all-levels":!1},model:{value:t.AddAttrKey.categoryId,callback:function(e){t.$set(t.AddAttrKey,"categoryId",e)},expression:"AddAttrKey.categoryId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"属性名称："}},[a("el-input",{staticStyle:{width:"203px"},model:{value:t.AddAttrKey.attrName,callback:function(e){t.$set(t.AddAttrKey,"attrName",e)},expression:"AddAttrKey.attrName"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.dialogAddAttrKeyVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleAddAttrKeyConfirm}},[t._v("保 存")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"添加属性信息",visible:t.dialogAddAttrValueVisible,width:"35%",height:"100%"},on:{"update:visible":function(e){t.dialogAddAttrValueVisible=e}}},[a("el-form",{ref:"DetailForm",attrs:{model:t.AddAttrValue,inline:!0,size:"small","label-width":"100px"}},[a("el-form-item",{attrs:{label:"属性名称："}},[a("el-select",{staticClass:"input-width",staticStyle:{width:"203px"},attrs:{placeholder:"All",clearable:""},model:{value:t.AddAttrValue.attrName,callback:function(e){t.$set(t.AddAttrValue,"attrName",e)},expression:"AddAttrValue.attrName"}},t._l(t.AttrNameOptions,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"属性值："}},[a("el-input",{staticStyle:{width:"203px"},model:{value:t.AddAttrValue.attrValue,callback:function(e){t.$set(t.AddAttrValue,"attrValue",e)},expression:"AddAttrValue.attrValue"}}),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.handleAddProductAttrValue()}}},[t._v("添加")])],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.dialogAddAttrValueVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.handleConfirm}},[t._v("保 存")])],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(c,h,!1,function(t){a("XC/Q")},"data-v-6ba6b6c6",null);e.default=p.exports},"XC/Q":function(t,e){}});
//# sourceMappingURL=7.436f801d50397d8532ea.js.map