webpackJsonp([19],{"1+m+":function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"own-content"},[e("flexbox",{staticClass:"redeem-coins"},[e("flexbox-item",{attrs:{span:8}},[e("span",{staticStyle:{"font-size":"16px",padding:"0 20px"}},[t._v("我的成就积分")]),t._v(" "),e("i",{staticClass:"fa fa-btc red"}),t._v(" "),e("span",[t._v(t._s(t.totalScore))])]),t._v(" "),e("flexbox-item",{attrs:{span:4}},[e("div",{staticClass:"detail-btn",on:{click:t.goRedeemInstruction}},[t._v("兑换说明 "),e("i",{staticClass:"fa fa-angle-right"})]),t._v(" "),e("div",{staticClass:"detail-btn",staticStyle:{"margin-top":"4px","background-color":"#fa7f01"},on:{click:t.goRedeemDetail}},[t._v("我的兑换 "),e("i",{staticClass:"fa fa-angle-right"})])])],1),t._v(" "),e("div",[e("scroller",{ref:"scroller",staticClass:"small-font",attrs:{"lock-x":"","scrollbar-y":"","use-pullup":"","use-pulldown":"",height:"400px","pulldown-config":{content:"下拉刷新",height:80,autoRefresh:!1,downContent:"wechat：newscnn",upContent:"❤要有梦想，人生才有意义❤️",loadingContent:"Loading...",clsPrefix:"xs-plugin-pulldown-"}},on:{"on-pullup-loading":t.loadMore,"on-pulldown-loading":t.refresh},model:{value:t.status,callback:function(n){t.status=n},expression:"status"}},[e("x-table",{staticStyle:{"background-color":"#fff","font-size":"12px"},attrs:{"cell-bordered":!0,"content-bordered":!0}},t._l(t.lists,function(n){return e("flexbox",{key:n._id,staticClass:"redeem-product",nativeOn:{click:function(e){t.goDetail(n._id)}}},[e("flexbox-item",{attrs:{span:4}},[e("div",{staticStyle:{height:"100px",padding:"10px"}},[e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:n.giftIcon}})])]),t._v(" "),e("flexbox-item",{attrs:{span:8}},[e("div",[e("div",{staticClass:"product-title"},[e("p",{staticClass:"new-gift-title"},[e("span",{staticClass:"new-icon"},[t._v("新品")]),t._v(t._s(n.giftTitle))]),t._v(" "),e("p",{staticClass:"new-gift-subtitle"},[t._v(t._s(n.giftSubtitle))])]),t._v(" "),e("div",{staticClass:"third-title-price"},[e("i",{staticClass:"fa fa-btc red"}),t._v(" "),e("span",[t._v(t._s(n.giftScore))]),e("span",{staticClass:"font-gray"},[t._v("   库存："+t._s(n.stock))])])])])],1)})),t._v(" "),e("div",{staticClass:"xs-plugin-pullup-container xs-plugin-pullup-up",staticStyle:{position:"absolute",width:"100%",height:"40px",bottom:"-40px","text-align":"center"},attrs:{slot:"pullup"},slot:"pullup"},[e("span",{directives:[{name:"show",rawName:"v-show",value:"default"===t.status.pullupStatus,expression:"status.pullupStatus === 'default'"}]}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"down"===t.status.pullupStatus||"up"===t.status.pullupStatus,expression:"status.pullupStatus === 'down' || status.pullupStatus === 'up'"}],staticClass:"pullup-arrow small-font",class:{rotate:"up"===t.status.pullupStatus}},[t._v("😄😄👉wechat:newscnn👈😄😄")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status.pullupStatus,expression:"status.pullupStatus === 'loading'"}]},[e("spinner",{attrs:{type:"lines"}})],1)])],1)],1)],1)])},staticRenderFns:[]}},"2J2y":function(t,n,e){e("U5pH");var a=e("VU/8")(e("e7a+"),e("1+m+"),"data-v-3b93cbea",null);t.exports=a.exports},PrNM:function(t,n,e){n=t.exports=e("FZ+f")(!0),n.push([t.i,"\nh1[data-v-3b93cbea], h2[data-v-3b93cbea] {\n  font-weight: normal;\n}\nul[data-v-3b93cbea] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-3b93cbea] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-3b93cbea] {\n  color: #000000;\n}\n.middle-font[data-v-3b93cbea] {\n  font-size: 0.8rem;\n}\n.red[data-v-3b93cbea] {\n  color: #17adff;\n  font-weight: 600;\n}\n.redeem-title[data-v-3b93cbea] {\n  padding: 2px 20px;\n  font-size: 24px;\n  font-weight: 600;\n}\n.redeem-coins[data-v-3b93cbea] {\n  padding: 8px 0;\n}\n.redeem-product[data-v-3b93cbea] {\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.detail-btn[data-v-3b93cbea] {\n  width: 80px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  color: #fff;\n  font-size: 14px;\n  background: #0a9ff7;\n  border-radius: 14px\n}\n.new-icon[data-v-3b93cbea] {\n  display: inline-block;\n  background: orangered;\n  color: #fff;\n  font-size: 12px;\n  width: 34px;\n  height: 24px;\n  text-align: center;\n  line-height: 24px;\n  margin: 0 5px 0 0;\n  border-radius: 4px;\n}\n.third-title-price[data-v-3b93cbea]{\n  height: 28px;\n  line-height: 28px;\n}\n.new-gift-title[data-v-3b93cbea]{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 28px;\n  line-height: 28px;\n  width: 85%;\n}\n.new-gift-subtitle[data-v-3b93cbea]{\n  height: 42px;\n  line-height: 14px;\n  width: 90%;\n  color: #999;\n}\n.small-font[data-v-3b93cbea] {\n  font-size: 0.6rem;\n}\n","",{version:3,sources:["F:/WEBpROJECTS/EnglishHobby/src/components/Redeem.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,8BAA8B;CAC/B;AACD;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,WAAW;CACZ;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,YAAY;CACb;AACD;EACE,kBAAkB;CACnB",file:"Redeem.vue",sourcesContent:["\nh1[data-v-3b93cbea], h2[data-v-3b93cbea] {\n  font-weight: normal;\n}\nul[data-v-3b93cbea] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-3b93cbea] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-3b93cbea] {\n  color: #000000;\n}\n.middle-font[data-v-3b93cbea] {\n  font-size: 0.8rem;\n}\n.red[data-v-3b93cbea] {\n  color: #17adff;\n  font-weight: 600;\n}\n.redeem-title[data-v-3b93cbea] {\n  padding: 2px 20px;\n  font-size: 24px;\n  font-weight: 600;\n}\n.redeem-coins[data-v-3b93cbea] {\n  padding: 8px 0;\n}\n.redeem-product[data-v-3b93cbea] {\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.detail-btn[data-v-3b93cbea] {\n  width: 80px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  color: #fff;\n  font-size: 14px;\n  background: #0a9ff7;\n  border-radius: 14px\n}\n.new-icon[data-v-3b93cbea] {\n  display: inline-block;\n  background: orangered;\n  color: #fff;\n  font-size: 12px;\n  width: 34px;\n  height: 24px;\n  text-align: center;\n  line-height: 24px;\n  margin: 0 5px 0 0;\n  border-radius: 4px;\n}\n.third-title-price[data-v-3b93cbea]{\n  height: 28px;\n  line-height: 28px;\n}\n.new-gift-title[data-v-3b93cbea]{\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 28px;\n  line-height: 28px;\n  width: 85%;\n}\n.new-gift-subtitle[data-v-3b93cbea]{\n  height: 42px;\n  line-height: 14px;\n  width: 90%;\n  color: #999;\n}\n.small-font[data-v-3b93cbea] {\n  font-size: 0.6rem;\n}\n"],sourceRoot:""}])},U5pH:function(t,n,e){var a=e("PrNM");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("da915b9e",a,!0,{})},"e7a+":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("63CM"),i=e.n(a),o=e("ABCa"),s=e.n(o),l=e("2sLL"),c=e.n(l),r=e("QTi7"),d=e.n(r),u=e("pDNl"),p=e.n(u),A=e("rHil"),h=e.n(A),g=e("1DHf"),f=e.n(g),b=e("rLAy"),C=e.n(b),x=e("UIMx"),v=e.n(x),B=e("dgEa"),m=e.n(B),w=e("YxJB"),E=e.n(w),S=e("3Lt7"),k=e.n(S),_=e("rGqP"),D=e.n(_),y=e("FYUJ"),$=e.n(y),T=e("fBcm"),I=e.n(T),z=e("b+jt"),F=e.n(z),P=e("62KO"),Y=e.n(P),N=e("aTeQ"),R=e.n(N),H=e("UNGY"),L=e.n(H),Z=e("uqwL"),j=e.n(Z),M=e("odqc"),U=e.n(M),W=e("Znkm"),X=e.n(W),q=e("S8Wg"),G=e.n(q),J=e("4FCr"),O=e.n(J),Q=e("jOlP"),V=e.n(Q),K=e("ignk"),tt=e.n(K),nt=e("1sNz"),et=e.n(nt);n.default={directives:{TransferDom:i.a},components:{ViewBox:et.a,XHeader:s.a,XButton:c.a,Box:d.a,XInput:p.a,Group:h.a,Cell:f.a,Toast:C.a,Tabbar:v.a,TabbarItem:m.a,Flexbox:E.a,FlexboxItem:k.a,Divider:D.a,Countup:$.a,Swiper:I.a,SwiperItem:F.a,Confirm:Y.a,XSwitch:R.a,Datetime:L.a,Blur:j.a,Tab:U.a,TabItem:X.a,Scroller:G.a,LoadMore:O.a,Spinner:V.a,XTable:tt.a},mounted:function(){this.failureShowToast=!1,this.changeSuccessShow=!1,this.$vux.loading.show({text:"loading"}),this.getUserInfo(),this.loadData()},data:function(){return{title:"礼品",ownPic:"../assets/dialog/01.jpg",url:"../assets/dialog/01.jpg",showConfirmBox:!1,computeDaysValue:"",lists:[],index:0,totalScore:0,computeHoursFunction:function(t,n,e){return n?e((new Date).getHours(),23):e(0,23)},computeDaysFunction:function(t,n){return[t.month]},mobile:"",password:"",iconType:"",successText:"",changeSuccessShow:!1,changeFailureShow:!1,startCount:0,endCount:0,totalPages:0,stock:0,failureText:"",noContentShow:!1,onFetching:!1,noContentText:"没有更多数据了！",pullupEnabled:!0,pageSize:5,giftId:"",status:{pullupStatus:"default",pulldownStatus:"default"}}},methods:{loadMore:function(){var t=this;if(console.log(this.lists[this.lists.length-1]._id),this.onFetching);else{this.onFetching=!0;var n={giftId:this.lists[this.lists.length-1]._id,pages:this.pageSize,sortNum:-1,isTodayGift:!0};this.$http.post(this.$apis.giftList,n).then(function(n){200===n.code&&0!==n.data.length?(t.lists=t.lists.concat(n.data),t.onFetching=!1,setTimeout(function(){t.$refs.scroller.donePullup()},10)):0===n.data.length&&(console.log(n.data.length),t.noContentShow=!0,t.onFetching=!1,setTimeout(function(){t.$refs.scroller.donePullup()},10))}).catch(function(t){console.log(t)})}},loadData:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{giftId:"",pages:this.pageSize,sortNum:-1,isTodayGift:!0};this.$http.post(this.$apis.giftList,n).then(function(n){200===n.code&&(console.log("res.data:"+n.data),t.lists=n.data,t.$vux.loading.hide())}).catch(function(t){console.log(t),this.$vux.loading.hide()})},refresh:function(){var t=this;this.loadData(),this.$nextTick(function(){setTimeout(function(){t.$refs.scroller.donePulldown(),t.pullupEnabled&&t.$refs.scroller.enablePullup()},20)})},goDetail:function(t){this.$router.push({name:"ProductDetail",query:{giftId:t}})},goRedeemDetail:function(){this.$router.push("redeemDetail")},goRedeemInstruction:function(){this.$router.push("redeemInstruction")},goStruction:function(){this.$router.push("setting")},goQuestion:function(){this.showConfirmBox=!0},onIndexChange:function(t,n){console.log(t,n)},onCancel:function(){},onConfirm:function(){this.$router.push("question")},onShow:function(){},onHide:function(){},change:function(t){console.log("on change",t)},onBlur:function(t){console.log("on blur",t)},onEnter:function(t){console.log("click enter!",t)},getUserInfo:function(){var t=this,n=window.localStorage.getItem("userId");this.$http.post(this.$apis.userInfo,{userId:n}).then(function(n){200===n.code?(t.totalPages=n.data.readPages,t.totalScore=n.data.score,t.$vux.loading.hide()):(console.log(n.msg),t.$vux.loading.hide())}).catch(function(t){console.log(t),this.$vux.loading.hide()})}}}}});
//# sourceMappingURL=19.8c3f8f018a18fdb311bc.js.map