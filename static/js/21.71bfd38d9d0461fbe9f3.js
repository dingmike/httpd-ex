webpackJsonp([21],{"2uXK":function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"own-content",staticStyle:{"overflow-x":"hidden"}},[e("div",{staticStyle:{"background-color":"#fff","border-bottom":"1px solid #ccc"}},[e("flexbox",{nativeOn:{click:function(t){n.goDetail(n.list._id)}}},[e("flexbox-item",{attrs:{span:4}},[e("div",{staticStyle:{width:"100px",height:"100px",padding:"10px"}},[e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:n.redeemGift.giftIcon}})])]),n._v(" "),e("flexbox-item",{attrs:{span:8}},[e("div",[e("div",{staticClass:"product-title"},[e("p",{staticClass:"new-gift-title"},[n._v(n._s(n.redeemGift.giftTitle))])]),n._v(" "),e("div",[e("span",{class:n.isSended?"own-blue":"own-grey",staticStyle:{"font-size":"14px"}},[n._v(n._s(n._f("isSended")(n.isSended)))]),n._v("\n                 \n            ")]),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.isSended,expression:"isSended"}]},[e("span",{staticClass:"font-gray",staticStyle:{"font-size":"14px"}},[e("span",[n._v("发货时间：")]),n._v(n._s(n.isSended?n.sendDatetime:""))])])])])],1)],1),n._v(" "),e("div",{staticStyle:{"background-color":"#fff",padding:"10px","border-bottom":"1px solid #ccc"}},[e("p",[n._v("收件人："),e("span",[n._v(n._s(n.creator.realName))])]),n._v(" "),e("p",[n._v("手机号："),e("span",[n._v(n._s(n.creator.phone))])]),n._v(" "),e("p",[n._v("快递到："),e("span",[n._v(n._s(n.creator.address)+" "+n._s(n.creator.realAddress))])])]),n._v(" "),e("div",{attrs:{align:"left"}},[e("p",{staticClass:"subtitle-box",attrs:{align:"center"}},[n._v("内容简介  · · · · · ·")]),n._v(" "),e("img",{staticStyle:{width:"100%"},attrs:{src:n.redeemGift.giftIcon,alt:""}}),n._v(" "),e("box",{attrs:{gap:"10px 10px"}},[e("div",{domProps:{innerHTML:n._s(n.redeemGift.giftDetail)}})])],1)]),n._v(" "),e("divider",{staticStyle:{"margin-top":"40px"}},[n._v("English Hobby")])],1)},staticRenderFns:[]}},Elm1:function(n,t,e){e("w0Bu");var a=e("VU/8")(e("b6pC"),e("2uXK"),"data-v-6f53ac86",null);n.exports=a.exports},FHvQ:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"\nh1[data-v-6f53ac86], h2[data-v-6f53ac86] {\n  font-weight: normal;\n}\nul[data-v-6f53ac86] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-6f53ac86] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-6f53ac86] {\n  color: #000000;\n}\n.red[data-v-6f53ac86] {\n  color: #17adff;\n  font-weight: 600;\n}\n.font-orange[data-v-6f53ac86] {\n  color: orangered;\n}\n.redeem-coins[data-v-6f53ac86] {\n  margin-top: 6px;\n}\n.font-gray[data-v-6f53ac86] {\n  color: #555555;\n}\n.line-cancel[data-v-6f53ac86] {\n  text-decoration: line-through;\n}\n.product-name h2[data-v-6f53ac86] {\n  font-weight: 600;\n  margin-left: 10px\n}\n.own-grey[data-v-6f53ac86]{\n  color: #000000;\n}\n.own-blue[data-v-6f53ac86]{\n  color: #17adff;\n}\n.vux-x-dialog-absolute .weui-dialog[data-v-6f53ac86] {\n  position: fixed !important;\n}\n.address-info p[data-v-6f53ac86] {\n  color: #000;\n  padding: 2px 0;\n  font-size: 14px;\n}\n.font-s-noraml[data-v-6f53ac86] {\n  font-size: 14px;\n}\n.new-gift-title[data-v-6f53ac86]{\n  line-height: 20px;\n  width: 92%;\n  font-size: 14px;\n  word-wrap: break-word;\n  word-break: normal;\n}\n.subtitle-box[data-v-6f53ac86] {\n  font-size: 14px;\n  padding: 10px 6px;\n}\n","",{version:3,sources:["/Users/mikezhangding/Documents/webstormProjects/EnglishHobby/src/components/ProductRedeemDetail.vue"],names:[],mappings:";AACA;EACE,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,eAAe;CAChB;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,kBAAkB;CACnB",file:"ProductRedeemDetail.vue",sourcesContent:["\nh1[data-v-6f53ac86], h2[data-v-6f53ac86] {\n  font-weight: normal;\n}\nul[data-v-6f53ac86] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-6f53ac86] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-6f53ac86] {\n  color: #000000;\n}\n.red[data-v-6f53ac86] {\n  color: #17adff;\n  font-weight: 600;\n}\n.font-orange[data-v-6f53ac86] {\n  color: orangered;\n}\n.redeem-coins[data-v-6f53ac86] {\n  margin-top: 6px;\n}\n.font-gray[data-v-6f53ac86] {\n  color: #555555;\n}\n.line-cancel[data-v-6f53ac86] {\n  text-decoration: line-through;\n}\n.product-name h2[data-v-6f53ac86] {\n  font-weight: 600;\n  margin-left: 10px\n}\n.own-grey[data-v-6f53ac86]{\n  color: #000000;\n}\n.own-blue[data-v-6f53ac86]{\n  color: #17adff;\n}\n.vux-x-dialog-absolute .weui-dialog[data-v-6f53ac86] {\n  position: fixed !important;\n}\n.address-info p[data-v-6f53ac86] {\n  color: #000;\n  padding: 2px 0;\n  font-size: 14px;\n}\n.font-s-noraml[data-v-6f53ac86] {\n  font-size: 14px;\n}\n.new-gift-title[data-v-6f53ac86]{\n  line-height: 20px;\n  width: 92%;\n  font-size: 14px;\n  word-wrap: break-word;\n  word-break: normal;\n}\n.subtitle-box[data-v-6f53ac86] {\n  font-size: 14px;\n  padding: 10px 6px;\n}\n"],sourceRoot:""}])},b6pC:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("63CM"),o=e.n(a),i=e("ABCa"),s=e.n(i),d=e("2sLL"),r=e.n(d),c=e("QTi7"),l=e.n(c),f=e("pDNl"),A=e.n(f),p=e("rHil"),u=e.n(p),g=e("1DHf"),v=e.n(g),C=e("rLAy"),x=e.n(C),m=e("UIMx"),h=e.n(m),B=e("dgEa"),w=e.n(B),E=e("YxJB"),b=e.n(E),_=e("3Lt7"),D=e.n(_),y=e("rGqP"),S=e.n(y),k=e("FYUJ"),I=e.n(k),j=e("fBcm"),T=e.n(j),z=e("b+jt"),G=e.n(z),H=e("62KO"),F=e.n(H),P=e("aTeQ"),$=e.n(P),L=e("UNGY"),R=e.n(L),X=e("uqwL"),O=e.n(X),N=e("odqc"),Q=e.n(N),U=e("Znkm"),Y=e.n(U),q=e("cHu4"),M=e.n(q),V=e("1sNz"),W=e.n(V);t.default={directives:{TransferDom:o.a},components:{ViewBox:W.a,XHeader:s.a,XButton:r.a,Box:l.a,XInput:A.a,Group:u.a,Cell:v.a,Toast:x.a,Tabbar:h.a,TabbarItem:w.a,Flexbox:b.a,FlexboxItem:D.a,Divider:S.a,Countup:I.a,Swiper:T.a,SwiperItem:G.a,Confirm:F.a,XSwitch:$.a,Datetime:R.a,Blur:O.a,Tab:Q.a,TabItem:Y.a,XAddress:M.a},filters:{feeFormat:function(n){if(!n)return"包邮"},isSended:function(n){return!0===n?"已发货":"待发货"}},mounted:function(){this.userId=window.localStorage.getItem("userId"),this.$vux.loading.show({text:"loading"}),this.getRedeemedGift()},data:function(){return{title:"兑换",redeemGift:{},creator:{},createAt:"",sendDatetime:"",counts:0,isSended:!1,userId:"",ownPic:"../assets/dialog/01.jpg",url:"../assets/dialog/01.jpg",showConfirmBox:!1,computeDaysValue:"",index:0,picListIndex:0,giftPics:[],picList:[{url:"javascript:",img:"https://static.vux.li/demo/1.jpg"},{url:"javascript:",img:"https://static.vux.li/demo/2.jpg"},{url:"javascript:",img:"https://static.vux.li/demo/5.jpg",fallbackImg:"https://static.vux.li/demo/3.jpg"}],mobile:"",iconType:"",successText:"",changeSuccessShow:!1,changeFailureShow:!1,failureText:"",placeHolderValue:"填写配送地址"}},methods:{onCancelback:function(){},onPicIndexChange:function(){},goRedeemDetail:function(){this.$router.push("setting")},goStruction:function(){this.$router.push("setting")},goQuestion:function(){this.showConfirmBox=!0},onIndexChange:function(n,t){console.log(n,t)},onCancel:function(){},onShow:function(){},onHide:function(){},change:function(n){console.log("on change",n)},onBlur:function(n){console.log("on blur",n)},onFocus:function(n,t){console.log("on focus",n,t)},onEnter:function(n){console.log("click enter!",n)},getRedeemedGift:function(){var n=this,t=this.$route.query.giftOrderId;this.$http.post(this.$apis.getRedeemOrderById,{giftOrderId:t}).then(function(t){200===t.code?(n.createAt=t.data.createAt,t.data.sendDatetime&&(n.sendDatetime=t.data.sendDatetime),n.counts=t.data.counts,n.isSended=t.data.isSended,n.redeemGift=t.data._giftProduct,n.creator=t.data._creator,n.$vux.loading.hide()):n.$vux.loading.hide()}).catch(function(t){console.log("Error: "+t),n.$vux.loading.hide()})}}}},w0Bu:function(n,t,e){var a=e("FHvQ");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e("rjj0")("a110331e",a,!0)}});
//# sourceMappingURL=21.71bfd38d9d0461fbe9f3.js.map