webpackJsonp([3],{"3+Op":function(t,e){},H6Vf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("woOf"),i=a.n(n),r=a("WBHA"),s={components:{CountTo:a.n(r).a},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)},orders:function(){this.$router.push({path:"../../orders/list_orders"})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:35}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:10,sm:10,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.orders()}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-deliver"},[a("svg-icon",{attrs:{"icon-class":"deliver","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("To Be Delivered")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{startVal:0,endVal:1020,duration:2600}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:10,sm:10,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.orders()}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-Refund"},[a("svg-icon",{attrs:{"icon-class":"Refund","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("Pending Refund")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{startVal:0,endVal:130,duration:3600}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:10,sm:10,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.orders()}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-tight"},[a("svg-icon",{attrs:{"icon-class":"tight","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("Tight Inventory")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{startVal:0,endVal:90,duration:3200}})],1)])]),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:10,sm:10,lg:6}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.orders()}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-system"},[a("svg-icon",{attrs:{"icon-class":"system","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("System Error")]),t._v(" "),a("count-to",{staticClass:"card-panel-num",attrs:{startVal:0,endVal:3,duration:3600}})],1)])])],1)},staticRenderFns:[]};var o=a("VU/8")(s,l,!1,function(t){a("3+Op")},"data-v-3d449e32",null).exports,c={mounted:function(){this.initData(null)},data:function(){return{currentDay:1,currentMonth:1,currentYear:1970,currentWeek:1,days:[],visitor:"10378",order:"10378",money:"236284"}},methods:{initData:function(t){var e;if(t)e=new Date(t);else{var a=new Date;(r=new Date(this.formatDate(a.getFullYear(),a.getMonth(),1))).setDate(35),e=new Date(this.formatDate(r.getFullYear(),r.getMonth()+1,1))}this.currentDay=e.getDate(),this.currentYear=e.getFullYear(),this.currentMonth=e.getMonth()+1,this.currentWeek=e.getDay(),0==this.currentWeek&&(this.currentWeek=7);var n=this.formatDate(this.currentYear,this.currentMonth,this.currentDay);this.days.length=0;for(var i=this.currentWeek-1;i>=0;i--){(r=new Date(n)).setDate(r.getDate()-i),(s={}).day=r,this.days.push(s)}for(i=1;i<=35-this.currentWeek;i++){var r,s;(r=new Date(n)).setDate(r.getDate()+i),(s={}).day=r,this.days.push(s)}},pickPre:function(t,e){var a=new Date(this.formatDate(t,e,1));a.setDate(0),this.initData(this.formatDate(a.getFullYear(),a.getMonth()+1,1))},pickNext:function(t,e){var a=new Date(this.formatDate(t,e,1));a.setDate(35),this.initData(this.formatDate(a.getFullYear(),a.getMonth()+1,1))},pickYear:function(t,e){},formatDate:function(t,e,a){var n=e;n<10&&(n="0"+n);return a<10&&"0"+a,n+"/"+a+"/"+t}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"calendar"}},[a("div",{staticClass:"month"},[a("ul",[a("li",{staticClass:"arrow",on:{click:function(e){return t.pickPre(t.currentYear,t.currentMonth)}}},[t._v("❮")]),t._v(" "),a("li",{staticClass:"year-month",on:{click:function(e){return t.pickYear(t.currentYear,t.currentMonth)}}},[a("span",{staticClass:"choose-year"},[t._v(t._s(t.currentYear))]),t._v(" "),a("span",{staticClass:"choose-month"},[t._v(t._s(t.currentMonth)+"月")])]),t._v(" "),a("li",{staticClass:"arrow",on:{click:function(e){return t.pickNext(t.currentYear,t.currentMonth)}}},[t._v("❯")])])]),t._v(" "),t._m(0),t._v(" "),a("el-popover",{attrs:{placement:"top",width:"250","visible-arrow":"true",trigger:"click"}},[a("ul",{staticClass:"days",attrs:{slot:"reference"},slot:"reference"},t._l(t.days,function(e){return a("li",{key:e.item},[e.day.getMonth()+1!=t.currentMonth?a("span",{staticClass:"other-month"},[t._v(t._s(e.day.getDate()))]):a("span",[e.day.getFullYear()==(new Date).getFullYear()&&e.day.getMonth()==(new Date).getMonth()&&e.day.getDate()==(new Date).getDate()?a("span",{staticClass:"active"},[t._v(t._s(e.day.getDate()))]):a("span",[t._v(t._s(e.day.getDate()))])])])}),0),t._v(" "),a("div",{staticClass:"box icon-visitor"},[a("svg-icon",{attrs:{"icon-class":"visitorcard","class-name":"card-panel-icon"}}),t._v("\n            访问量："+t._s(t.visitor)+"\n        ")],1),t._v(" "),a("div",{staticClass:"box icon-visitor"},[a("svg-icon",{attrs:{"icon-class":"ordercard","class-name":"card-panel-icon"}}),t._v("\n            订单数："+t._s(t.order)+"\n        ")],1),t._v(" "),a("div",{staticClass:"box icon-visitor"},[a("svg-icon",{attrs:{"icon-class":"moneycard","class-name":"card-panel-icon"}}),t._v("\n            总金额："+t._s(t.money)+"\n        ")],1)])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"weekdays"},[a("li",[t._v("一")]),t._v(" "),a("li",[t._v("二")]),t._v(" "),a("li",[t._v("三")]),t._v(" "),a("li",[t._v("四")]),t._v(" "),a("li",[t._v("五")]),t._v(" "),a("li",{staticStyle:{color:"red"}},[t._v("六")]),t._v(" "),a("li",{staticStyle:{color:"red"}},[t._v("日")])])}]};var d=a("VU/8")(c,u,!1,function(t){a("lp+H")},"data-v-75f8fecc",null).exports,h=a("XLwt"),p=a.n(h),f={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"284px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{onsale:function(){this.$router.push({path:"../../statistics/statistic_product"})},initChart:function(){this.chart=p.a.init(this.$refs.myEchart),this.chart.setOption({color:["#19d4ae","#5ab1ef","#fa6e86","#ffb980","#c4b4e4","#d87a80","#0067a6"],title:{text:"商品分类销量",subtext:"按分类显示",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["外套","帽子","围巾","袜子","裤子"]},series:[{name:"商品分类销量",type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:"外套"},{value:310,name:"帽子"},{value:234,name:"围巾"},{value:135,name:"袜子"},{value:154,name:"裤子"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})}}},m={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"myEchart",class:t.className,style:{height:t.height,width:t.width},on:{click:function(e){return t.onsale()}}})},staticRenderFns:[]},v={newVisitis:{expectedData:[100,120,161,134,105,160,165],actualData:[120,82,91,154,162,140,145]},messages:{expectedData:[200,192,120,144,160,130,140],actualData:[180,160,151,106,145,150,130]},purchases:{expectedData:[80,100,121,104,105,90,100],actualData:[120,90,100,138,142,130,130]},shoppings:{expectedData:[130,140,141,142,145,150,160],actualData:[120,82,91,154,162,140,130]}},_={name:"home",components:{PanelGroup:o,calendar:d,onsale:a("VU/8")(f,m,!1,null,null,null).exports},data:function(){return{lineChartData:v.newVisitis}},methods:{handleSetLineChartData:function(t){this.lineChartData=v[t]},appVersionlStat:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments[2],r=appVersion;null!=t&&null!=a&&(r=i()({starttime:t,endtime:a},r)),this.mock&&(r=i()({statFunc:"appVersionlStat",type:0},r)),aggregate(r).then(function(t){e.app_version.title.text="APP 注册版本统计"+n;for(var a=0;a<t.length;a++){var i=t[a].num,r=t[a]._id.bluVer,s=t[a]._id.deviceType;1==s?(s="android",e.app_version.series[0].data.push({value:i,name:s+" "+r})):2==s&&(s="ios",e.app_version.series[1].data.push({value:i,name:s+" "+r})),e.app_version.legend.data.push(s+" "+r)}})}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home-container"},[e("el-row",{attrs:{gutter:35}},[e("el-col",{staticClass:"card-panel-col",attrs:{xs:10,sm:10,lg:8}},[e("calendar")],1),this._v(" "),e("el-col",{staticClass:"card-panel-col",attrs:{xs:14,sm:14,lg:16}},[e("el-card",{staticClass:"box-card"},[e("onsale")],1)],1)],1),this._v(" "),e("panel-group",{on:{handleSetLineChartData:this.handleSetLineChartData}})],1)},staticRenderFns:[]};var y=a("VU/8")(_,g,!1,function(t){a("PZB4")},"data-v-7594d848",null);e.default=y.exports},PZB4:function(t,e){},WBHA:function(t,e,a){var n;n=function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var n=a(4)(a(1),a(5),null,null);t.exports=n.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,n){return a*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),a=e[0],n=e.length>1?this.decimal+e[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(a(0));e.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),r=void 0,s=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=s=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=s=window.cancelAnimationFrame;for(var l=void 0,o=0;o<i.length&&(!r||!s);o++)l=i[o],e.requestAnimationFrame=r=r||window[l+"RequestAnimationFrame"],e.cancelAnimationFrame=s=s||window[l+"CancelAnimationFrame"]||window[l+"CancelRequestAnimationFrame"];r&&s||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-n)),i=window.setTimeout(function(){t(e+a)},a);return n=e+a,i},e.cancelAnimationFrame=s=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=s},function(t,e){t.exports=function(t,e,a,n){var i,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,r=t.default);var l="function"==typeof r?r.options:r;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),a&&(l._scopeId=a),n){var o=Object.create(l.computed||null);Object.keys(n).forEach(function(t){var e=n[t];o[t]=function(){return e}}),l.computed=o}return{esModule:i,exports:r,options:l}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},t.exports=n()},"lp+H":function(t,e){}});
//# sourceMappingURL=3.9d90501c9f96f6ccb1a6.js.map