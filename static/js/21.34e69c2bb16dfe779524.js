webpackJsonp([21],{"5ICJ":function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"own-content"},[e("swiper",{attrs:{loop:"",auto:"",list:n.picList,height:"180px",index:n.picListIndex,"show-dots":!1},on:{"on-index-change":n.onPicIndexChange}}),n._v(" "),e("div",{staticClass:"product-name"},[e("h2",{staticStyle:{"font-size":"18px"}},[n._v(n._s(n.giftTitle))])]),n._v(" "),e("flexbox",{staticClass:"redeem-coins font-s-noraml"},[e("flexbox-item",{attrs:{span:7}},[e("div",{staticStyle:{padding:"0 11px"}},[e("i",{staticClass:"fa fa-btc red"}),n._v(" "),e("span",[n._v(n._s(n.giftScore))]),n._v("  + "),e("span",{staticClass:"font-orange"},[n._v("0")]),n._v(" 元\n            "),e("span",{staticClass:"font-gray line-cancel"},[n._v("￥"),e("span",[n._v(n._s(n.originalPrice))])]),e("br"),n._v(" "),e("span",{staticClass:"font-gray"},[n._v("库存："+n._s(n.stock))])])]),n._v(" "),e("flexbox-item",{staticStyle:{"font-size":"14px",color:"#7f7f7f"},attrs:{span:3,align:"right"}},[n._v("\n        运费："),e("span",[n._v(n._s(n._f("feeFormat")(n.expressFee)))])])],1),n._v(" "),e("group",[e("cell",{staticClass:"line-item",staticStyle:{"font-size":"14px"},attrs:{title:"配送地址",value:n.placeHolderValue,link:{path:"/addressInfo"},"is-link":""}})],1),n._v(" "),e("div",{attrs:{align:"left"}},[e("p",{staticClass:"subtitle-box",attrs:{align:"center"}},[n._v("内容简介  · · · · · ·")]),n._v(" "),e("p",{staticClass:"subtitle-box",attrs:{align:"left"}},[n._v(n._s(n.giftSubtitle))]),n._v(" "),e("img",{staticStyle:{width:"100%"},attrs:{src:n.giftIcon,alt:""}}),n._v(" "),e("box",{attrs:{gap:"10px 10px"}},[e("div",{domProps:{innerHTML:n._s(n.giftDetail)}})])],1),n._v(" "),e("divider",{staticStyle:{"margin-top":"40px"}},[n._v("English Hobby")])],1),n._v(" "),e("div",{staticClass:"redeem-b-btn",on:{click:n.redeemClick}},[n._v("\n    兑 换\n  ")]),n._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("confirm",{attrs:{title:"确认收货信息","confirm-text":"确定","hide-on-blur":!1,"cancel-text":"取消"},on:{"on-cancel":n.onCancel,"on-confirm":n.onConfirm,"on-show":n.onShow,"on-hide":n.onHide},model:{value:n.showConfirmBox,callback:function(t){n.showConfirmBox=t},expression:"showConfirmBox"}},[e("div",{staticClass:"address-info",attrs:{align:"left"}},[e("p",[n._v("收货人："),e("span",[n._v(n._s(n.realName))])]),n._v(" "),e("p",[n._v("电话："),e("span",[n._v(n._s(n.phone))])]),n._v(" "),e("p",[n._v("地址："),e("span",[n._v(n._s(n.addressAll))])]),n._v(" "),e("p",[n._v("支付价格："),e("span",[n._v(n._s(n.giftScore))]),n._v("阅读积分+"),e("span",[n._v("0")]),n._v("元("),e("span",[n._v(n._s(n._f("feeFormat")(n.expressFee)))]),n._v(")")])])])],1),n._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("confirm",{attrs:{title:"还没有快递信息！","confirm-text":"去填写","hide-on-blur":!1,"cancel-text":"取消"},on:{"on-cancel":n.onCancelback,"on-confirm":n.goAddAddress,"on-show":n.onShow,"on-hide":n.onHide},model:{value:n.isNoAddress,callback:function(t){n.isNoAddress=t},expression:"isNoAddress"}})],1)])},staticRenderFns:[]}},ItiW:function(n,t,e){e("TCk9");var a=e("VU/8")(e("SkuT"),e("5ICJ"),"data-v-ac918dfe",null);n.exports=a.exports},SkuT:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("63CM"),o=e.n(a),i=e("ABCa"),s=e.n(i),d=e("2sLL"),r=e.n(d),c=e("QTi7"),l=e.n(c),f=e("pDNl"),p=e.n(f),A=e("rHil"),g=e.n(A),u=e("1DHf"),h=e.n(u),x=e("rLAy"),v=e.n(x),C=e("UIMx"),m=e.n(C),B=e("dgEa"),b=e.n(B),E=e("YxJB"),_=e.n(E),w=e("3Lt7"),I=e.n(w),k=e("rGqP"),y=e.n(k),S=e("FYUJ"),D=e.n(S),T=e("fBcm"),$=e.n(T),j=e("b+jt"),P=e.n(j),F=e("62KO"),H=e.n(F),N=e("aTeQ"),z=e.n(N),L=e("UNGY"),G=e.n(L),V=e("uqwL"),U=e.n(V),W=e("odqc"),X=e.n(W),Y=e("Znkm"),q=e.n(Y),J=e("cHu4"),M=e.n(J),Z=e("1sNz"),O=e.n(Z);t.default={directives:{TransferDom:o.a},components:{ViewBox:O.a,XHeader:s.a,XButton:r.a,Box:l.a,XInput:p.a,Group:g.a,Cell:h.a,Toast:v.a,Tabbar:m.a,TabbarItem:b.a,Flexbox:_.a,FlexboxItem:I.a,Divider:y.a,Countup:D.a,Swiper:$.a,SwiperItem:P.a,Confirm:H.a,XSwitch:z.a,Datetime:G.a,Blur:U.a,Tab:X.a,TabItem:q.a,XAddress:M.a},computed:{leftOptions:function(){return{showBack:!0,backText:""}},rightOptions:function(){return{showMore:!1}}},filters:{feeFormat:function(n){if(!n)return"包邮"}},mounted:function(){this.userId=window.localStorage.getItem("userId"),this.failureShowToast=!1,this.changeSuccessShow=!1,this.onlyGetAddress(),this.$vux.loading.show({text:"loading"}),this.getGift()},data:function(){return{title:"兑换",giftTitle:"工程师开小差了！",realName:"",phone:"",addressAll:"",isNoAddress:!1,originalPrice:0,expressFee:0,giftIcon:"",giftScore:0,stock:0,giftDetail:"",giftSubtitle:"暂时没有简介",userId:"",ownPic:"../assets/dialog/01.jpg",url:"../assets/dialog/01.jpg",showConfirmBox:!1,computeDaysValue:"",index:0,picListIndex:0,giftPics:[],picList:[{url:"javascript:",img:"https://static.vux.li/demo/1.jpg"},{url:"javascript:",img:"https://static.vux.li/demo/2.jpg"},{url:"javascript:",img:"https://static.vux.li/demo/5.jpg",fallbackImg:"https://static.vux.li/demo/3.jpg"}],mobile:"",iconType:"",successText:"",changeSuccessShow:!1,changeFailureShow:!1,failureText:"",placeHolderValue:"填写配送地址"}},methods:{onlyGetAddress:function(){var n=this;this.$http.post(this.$apis.getExpressInfo,{userId:this.userId}).then(function(t){200===t.code?n.placeHolderValue=t.data.address:n.$vux.loading.hide()}).catch(function(n){console.log("Error: "+n),this.$vux.loading.hide()})},getExpressInfo:function(){var n=this;this.$http.post(this.$apis.getExpressInfo,{userId:this.userId}).then(function(t){200===t.code?(n.realName=t.data.realName,n.phone=t.data.phone,n.placeHolderValue=t.data.address,n.addressAll=t.data.address+t.data.realAddress+"",n.$vux.loading.hide(),n.showConfirmBox=!0):(n.$vux.loading.hide(),n.isNoAddress=!0)}).catch(function(t){console.log("Error: "+t),n.$vux.loading.hide()})},redeemClick:function(){document.body.scrollTop=0,this.$vux.loading.show({text:"loading"}),this.getExpressInfo()},onCancelback:function(){},onPicIndexChange:function(){},goRedeemDetail:function(){this.$router.push("setting")},goStruction:function(){this.$router.push("setting")},goQuestion:function(){this.showConfirmBox=!0},onIndexChange:function(n,t){console.log(n,t)},onCancel:function(){},onConfirm:function(){this.$router.push({name:"Paygift",query:{giftId:this.$route.query.giftId}})},goAddAddress:function(){this.$router.push("addressInfo")},onShow:function(){},onHide:function(){},change:function(n){console.log("on change",n)},onBlur:function(n){console.log("on blur",n)},onFocus:function(n,t){console.log("on focus",n,t)},onEnter:function(n){console.log("click enter!",n)},getGift:function(){var n=this,t=this.$route.query.giftId;this.$http.post(this.$apis.getGiftById,{giftId:t}).then(function(t){if(200===t.code){var e=[],a={url:"javascript:",img:t.data.giftIcon};e.push(a),e.push(a),n.picList=e,console.log(e),n.giftTitle=t.data.giftTitle,n.giftPics=t.data.giftPics,n.expressFee=t.data.expressFee,n.giftScore=t.data.giftScore,n.originalPrice=t.data.originalPrice,n.giftDetail=t.data.giftDetail,n.giftIcon=t.data.giftIcon,n.giftSubtitle=t.data.giftSubtitle,n.stock=t.data.stock,n.$vux.loading.hide()}else n.$vux.loading.hide()}).catch(function(t){console.log("Error: "+t),n.$vux.loading.hide()})}}}},TCk9:function(n,t,e){var a=e("p6px");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("46a53a38",a,!0)},p6px:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"\nh1[data-v-ac918dfe], h2[data-v-ac918dfe] {\n  font-weight: normal;\n}\nul[data-v-ac918dfe] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-ac918dfe] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-ac918dfe] {\n  color: #000000;\n}\n.red[data-v-ac918dfe] {\n  color: #17adff;\n  font-weight: 600;\n}\n.font-orange[data-v-ac918dfe] {\n  color: orangered;\n}\n.redeem-coins[data-v-ac918dfe] {\n  margin-top: 6px;\n}\n.font-gray[data-v-ac918dfe] {\n  color: #555555;\n}\n.line-cancel[data-v-ac918dfe] {\n  text-decoration: line-through;\n}\n.product-name h2[data-v-ac918dfe] {\n  font-weight: 600;\n  margin-left: 10px\n}\n.font-white[data-v-ac918dfe] {\n  color: #fff !important;\n}\n.redeem-b-btn[data-v-ac918dfe] {\n  position: fixed;\n  top: 55px;\n  right: 6px;\n  color: #fff;\n  font-weight: 600;\n  background-color: #f76c10;\n  border-radius: 4px;\n  vertical-align: middle;\n  text-align: center;\n  height: 52px;\n  line-height: 52px;\n  width: 16%;\n  padding: 10px 0;\n  box-shadow: 2px 2px 10px rgba(0, 25, 51, 0.77);\n  -webkit-box-shadow: 2px 2px 10px #002040;\n}\n.vux-x-dialog-absolute .weui-dialog[data-v-ac918dfe] {\n  position: fixed !important;\n}\n.address-info[data-v-ac918dfe] {\n  padding: 0 14px;\n}\n.address-info p[data-v-ac918dfe] {\n  color: #000;\n  padding: 2px 0;\n  font-size: 14px;\n}\n.font-s-noraml[data-v-ac918dfe] {\n  font-size: 14px;\n}\n.subtitle-box[data-v-ac918dfe] {\n  font-size: 14px;\n  padding: 10px 6px;\n}\n","",{version:3,sources:["/Users/mikezhangding/Documents/webstormProjects/EnglishHobby/src/components/ProductDetail.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,0BAA0B;EAC1B,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,+CAA+C;EAC/C,yCAAyC;CAC1C;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,kBAAkB;CACnB",file:"ProductDetail.vue",sourcesContent:["\nh1[data-v-ac918dfe], h2[data-v-ac918dfe] {\n  font-weight: normal;\n}\nul[data-v-ac918dfe] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-ac918dfe] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-ac918dfe] {\n  color: #000000;\n}\n.red[data-v-ac918dfe] {\n  color: #17adff;\n  font-weight: 600;\n}\n.font-orange[data-v-ac918dfe] {\n  color: orangered;\n}\n.redeem-coins[data-v-ac918dfe] {\n  margin-top: 6px;\n}\n.font-gray[data-v-ac918dfe] {\n  color: #555555;\n}\n.line-cancel[data-v-ac918dfe] {\n  text-decoration: line-through;\n}\n.product-name h2[data-v-ac918dfe] {\n  font-weight: 600;\n  margin-left: 10px\n}\n.font-white[data-v-ac918dfe] {\n  color: #fff !important;\n}\n.redeem-b-btn[data-v-ac918dfe] {\n  position: fixed;\n  top: 55px;\n  right: 6px;\n  color: #fff;\n  font-weight: 600;\n  background-color: #f76c10;\n  border-radius: 4px;\n  vertical-align: middle;\n  text-align: center;\n  height: 52px;\n  line-height: 52px;\n  width: 16%;\n  padding: 10px 0;\n  box-shadow: 2px 2px 10px rgba(0, 25, 51, 0.77);\n  -webkit-box-shadow: 2px 2px 10px #002040;\n}\n.vux-x-dialog-absolute .weui-dialog[data-v-ac918dfe] {\n  position: fixed !important;\n}\n.address-info[data-v-ac918dfe] {\n  padding: 0 14px;\n}\n.address-info p[data-v-ac918dfe] {\n  color: #000;\n  padding: 2px 0;\n  font-size: 14px;\n}\n.font-s-noraml[data-v-ac918dfe] {\n  font-size: 14px;\n}\n.subtitle-box[data-v-ac918dfe] {\n  font-size: 14px;\n  padding: 10px 6px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=21.34e69c2bb16dfe779524.js.map