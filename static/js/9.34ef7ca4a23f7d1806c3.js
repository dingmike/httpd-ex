webpackJsonp([9],{"31lu":function(n,t,o){o("xWnz");var e=o("VU/8")(o("Gqvi"),o("WrcS"),"data-v-3422bc39",null);n.exports=e.exports},Gqvi:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=o("63CM"),a=o.n(e),i=o("ABCa"),s=o.n(i),c=o("2sLL"),r=o.n(c),l=o("QTi7"),u=o.n(l),A=o("pDNl"),d=o.n(A),g=o("rHil"),f=o.n(g),h=o("1DHf"),b=o.n(h),p=o("rLAy"),C=o.n(p),x=o("UIMx"),m=o.n(x),v=o("dgEa"),w=o.n(v),B=o("YxJB"),E=o.n(B),k=o("3Lt7"),S=o.n(k),D=o("rGqP"),y=o.n(D),_=o("FYUJ"),$=o.n(_),T=o("fBcm"),j=o.n(T),I=o("b+jt"),F=o.n(I),z=o("62KO"),Y=o.n(z),H=o("aTeQ"),X=o.n(H),q=o("UNGY"),P=o.n(q),U=o("uqwL"),W=o.n(U),G=o("1sNz"),L=o.n(G),O=o("m9kF");t.default={directives:{TransferDom:a.a},components:{ViewBox:L.a,XHeader:s.a,XButton:r.a,Box:u.a,XInput:d.a,Group:f.a,Cell:b.a,Toast:C.a,Tabbar:m.a,TabbarItem:w.a,Flexbox:E.a,FlexboxItem:S.a,Divider:y.a,Countup:$.a,Swiper:j.a,SwiperItem:F.a,Confirm:Y.a,XSwitch:X.a,Datetime:P.a,Blur:W.a},mounted:function(){this.getUserInfo(),this.failureShowToast=!1,this.changeSuccessShow=!1,this.$navigation.once("back",function(n,t){"/groupchathide"===t.route.path&&location.reload()})},data:function(){return{title:"个人中心",ownPic:"../assets/dialog/01.jpg",url:"../assets/dialog/01.jpg",showConfirmBox:!1,computeDaysValue:"",successShow:!1,showText:"",username:"",score:0,computeHoursFunction:function(n,t,o){return t?o((new Date).getHours(),23):o(0,23)},computeDaysFunction:function(n,t){return[n.month]},mobile:"",password:"",iconType:"",successText:"",changeSuccessShow:!1,changeFailureShow:!1,startCount:0,endCount:100,totalPages:1002,failureText:""}},methods:{onHide:function(){this.$router.push("/")},goRegulation:function(){this.$router.push("regulation")},goQuestion:function(){this.showConfirmBox=!0},onIndexChange:function(n,t){console.log(n,t)},onCancel:function(){},onConfirm:function(){this.$router.push("question")},onShow:function(){},change:function(n){console.log("on change",n)},onBlur:function(n){console.log("on blur",n)},onFocus:function(n,t){console.log("on focus",n,t)},onEnter:function(n){console.log("click enter!",n)},getUserInfo:function(){var n=this;this.$vux.loading.show({text:"loading"});var t=window.localStorage.getItem("userId");this.$http.post(this.$apis.userInfo,{userId:t}).then(function(t){n.$vux.loading.hide(),200===t.code&&(n.score=t.data.score,n.username=t.data.username)}).catch(function(t){n.$vux.loading.hide(),console.log(t)})},logout:function(){var n=this;this.$vux.loading.show({text:"loading"}),this.$http.post(this.$apis.logout).then(function(t){n.$vux.loading.hide(),200===t.code?(n.$store.commit(O.c),n.showText=t.msg,n.successShow=!0):(n.showText=t.msg,n.successShow=!0)})}}}},WrcS:function(n,t,o){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"own-content"},[e("flexbox",{staticStyle:{background:"rgba(100,176,201,0.15)",padding:"20px 0px 10px 0px"}},[e("flexbox-item",{attrs:{span:3}},[e("div",{staticClass:"account-img"},[e("img",{attrs:{src:o("qdxO"),alt:""}})])]),n._v(" "),e("flexbox-item",[e("flexbox",{staticClass:"flex-demo box-right"},[e("flexbox-item",[e("span",{staticStyle:{"font-weight":"600"}},[n._v(n._s(n.username))])]),n._v(" "),e("flexbox-item")],1)],1)],1),n._v(" "),e("flexbox",{staticStyle:{"padding-top":"20px","border-top":"1px solid #d1d1d1"}},[e("flexbox-item",{staticStyle:{padding:"0 20px"},attrs:{span:6}},[e("span",{staticStyle:{"font-size":"16px"}},[n._v("我的阅读积分")])]),n._v(" "),e("flexbox-item",[e("i",{staticClass:"fa fa-btc own-big-font own-orange"}),n._v(" "),e("span",{staticClass:"own-big-font own-go"},[n._v(n._s(n.score))])])],1),n._v(" "),e("group",[e("cell",{staticClass:"line-item",attrs:{title:"兑换",link:{path:"/redeem"},"is-link":""}},[e("i",{staticClass:"fa fa-random own-cell-icon",attrs:{slot:"icon"},slot:"icon"})]),n._v(" "),e("cell",{staticClass:"line-item",attrs:{title:"兑换说明",link:{path:"/redeemInstruction"},"is-link":""}},[e("i",{staticClass:"fa fa-file own-cell-icon",attrs:{slot:"icon"},slot:"icon"})])],1),n._v(" "),e("box",{attrs:{gap:"30px 10px"}},[e("x-button",{staticClass:"bg-black font-white",attrs:{type:"default"},nativeOn:{click:function(t){n.logout(t)}}},[n._v("退出登录")])],1)],1),n._v(" "),e("toast",{attrs:{time:1e3,text:n.showText},on:{"on-hide":n.onHide},model:{value:n.successShow,callback:function(t){n.successShow=t},expression:"successShow"}})],1)},staticRenderFns:[]}},jXXF:function(n,t,o){t=n.exports=o("FZ+f")(!0),t.push([n.i,"\nh1[data-v-3422bc39], h2[data-v-3422bc39] {\n  font-weight: normal;\n}\nul[data-v-3422bc39] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-3422bc39] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-3422bc39] {\n  color: #42b983;\n}\n.account-img[data-v-3422bc39] {\n  height: 60px;\n  width: 60px;\n  border: 2px solid #ffffff;\n  margin: 6px 20px;\n  border-radius: 50%\n}\n.account-img img[data-v-3422bc39] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%\n}\n.own-cell-icon[data-v-3422bc39] {\n  font-size: 20px;\n  margin-right: 8px;\n  color: #00a9ff;\n  vertical-align: middle;\n}\n.own-green[data-v-3422bc39] {\n  color: #28cc87;\n}\n.own-grey[data-v-3422bc39] {\n  color: #888888;\n  margin-right: 12px;\n}\n.own-big-font[data-v-3422bc39] {\n  font-size: 22px;\n}\n.own-orange[data-v-3422bc39] {\n  color: #f9ba01;\n}\n.bg-black[data-v-3422bc39] {\n  background: black;\n}\n.font-white[data-v-3422bc39] {\n  color: #fff;\n}\n.own-go[data-v-3422bc39] {\n  font-weight: 600;\n  color: #7b7878;\n}\n","",{version:3,sources:["/Users/mikezhangding/Documents/webstormProjects/EnglishHobby/src/components/PersonCenter.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,aAAa;EACb,YAAY;EACZ,0BAA0B;EAC1B,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,YAAY;CACb;AACD;EACE,iBAAiB;EACjB,eAAe;CAChB",file:"PersonCenter.vue",sourcesContent:["\nh1[data-v-3422bc39], h2[data-v-3422bc39] {\n  font-weight: normal;\n}\nul[data-v-3422bc39] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-3422bc39] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-3422bc39] {\n  color: #42b983;\n}\n.account-img[data-v-3422bc39] {\n  height: 60px;\n  width: 60px;\n  border: 2px solid #ffffff;\n  margin: 6px 20px;\n  border-radius: 50%\n}\n.account-img img[data-v-3422bc39] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%\n}\n.own-cell-icon[data-v-3422bc39] {\n  font-size: 20px;\n  margin-right: 8px;\n  color: #00a9ff;\n  vertical-align: middle;\n}\n.own-green[data-v-3422bc39] {\n  color: #28cc87;\n}\n.own-grey[data-v-3422bc39] {\n  color: #888888;\n  margin-right: 12px;\n}\n.own-big-font[data-v-3422bc39] {\n  font-size: 22px;\n}\n.own-orange[data-v-3422bc39] {\n  color: #f9ba01;\n}\n.bg-black[data-v-3422bc39] {\n  background: black;\n}\n.font-white[data-v-3422bc39] {\n  color: #fff;\n}\n.own-go[data-v-3422bc39] {\n  font-weight: 600;\n  color: #7b7878;\n}\n"],sourceRoot:""}])},qdxO:function(n,t,o){n.exports=o.p+"static/img/englishicon.3af13a4.jpg"},xWnz:function(n,t,o){var e=o("jXXF");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);o("rjj0")("5ac2b743",e,!0)}});
//# sourceMappingURL=9.34ef7ca4a23f7d1806c3.js.map