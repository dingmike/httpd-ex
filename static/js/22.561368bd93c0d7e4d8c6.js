webpackJsonp([22],{"1/BC":function(n,a,t){a=n.exports=t("FZ+f")(!0),a.push([n.i,"\n.red[data-v-72f0da6c] {\n  color: blue;\n}\n.bg-border[data-v-72f0da6c] {\n  border-bottom: 1px solid #000;\n}\n.forget-pwd[data-v-72f0da6c] {\n  float: right;\n  color: #176fc7;\n}\n.input-box[data-v-72f0da6c] {\n  width: 80%;\n  margin: 0 auto;\n}\n.green[data-v-72f0da6c] {\n  color: green;\n}\n.bg-black[data-v-72f0da6c] {\n  background: black;\n}\n.bg-red[data-v-72f0da6c] {\n  background: red;\n}\n.font-white[data-v-72f0da6c] {\n  color: #fff;\n}\n.head-title-box[data-v-72f0da6c] {\n  border: 1px solid #c0c0c0;\n  color: #f0f0f0;\n  background: #f08a0a;\n  padding: 30px 0;\n}\n","",{version:3,sources:["F:/WEBpROJECTS/EnglishHobby/src/components/Login.vue"],names:[],mappings:";AACA;EACE,YAAY;CACb;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,aAAa;EACb,eAAe;CAChB;AACD;EACE,WAAW;EACX,eAAe;CAChB;AACD;EACE,aAAa;CACd;AACD;EACE,kBAAkB;CACnB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,eAAe;EACf,oBAAoB;EACpB,gBAAgB;CACjB",file:"Login.vue",sourcesContent:["\n.red[data-v-72f0da6c] {\n  color: blue;\n}\n.bg-border[data-v-72f0da6c] {\n  border-bottom: 1px solid #000;\n}\n.forget-pwd[data-v-72f0da6c] {\n  float: right;\n  color: #176fc7;\n}\n.input-box[data-v-72f0da6c] {\n  width: 80%;\n  margin: 0 auto;\n}\n.green[data-v-72f0da6c] {\n  color: green;\n}\n.bg-black[data-v-72f0da6c] {\n  background: black;\n}\n.bg-red[data-v-72f0da6c] {\n  background: red;\n}\n.font-white[data-v-72f0da6c] {\n  color: #fff;\n}\n.head-title-box[data-v-72f0da6c] {\n  border: 1px solid #c0c0c0;\n  color: #f0f0f0;\n  background: #f08a0a;\n  padding: 30px 0;\n}\n"],sourceRoot:""}])},"1o2G":function(n,a,t){var o=t("1/BC");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("rjj0")("77eeda08",o,!0,{})},"5lwa":function(n,a){n.exports={render:function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"login"},[t("box",{attrs:{gap:"10px 10px"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.showHead,expression:"showHead"}],staticClass:"head-title-box"},[t("h2",{attrs:{align:"center"}},[n._v("Welcome to "),t("span",[n._v("English Hobby")]),n._v("!")])])]),n._v(" "),t("div",{staticStyle:{"margin-top":"40px"}},[t("box",{attrs:{gap:"20px 10px"}},[t("x-input",{staticClass:"bg-border",attrs:{name:"username",placeholder:"Account",type:"text"},model:{value:n.username,callback:function(a){n.username="string"==typeof a?a.trim():a},expression:"username"}})],1),n._v(" "),t("box",{attrs:{gap:"20px 10px"}},[t("x-input",{staticClass:"bg-border",attrs:{name:"password",type:"password",placeholder:"Password",min:6,max:20},on:{"on-change":n.change},model:{value:n.password,callback:function(a){n.password="string"==typeof a?a.trim():a},expression:"password"}})],1),n._v(" "),t("box",{attrs:{gap:"10px 10px 30px 10px"},nativeOn:{click:function(a){n.goForgetPwd(a)}}},[t("span",{staticClass:"forget-pwd"},[n._v("忘记密码?")])]),n._v(" "),t("box",{attrs:{gap:"80px 10px 20px 10px"}},[t("x-button",{staticClass:"bg-black font-white",attrs:{text:n.loginSubmit,disabled:n.LoginDisable},nativeOn:{click:function(a){n.loginAction(a)}}})],1),n._v(" "),t("box",{attrs:{gap:"30px 10px"}},[t("x-button",{attrs:{text:n.signUpSubmit,link:n.signUpLink,plain:""}})],1),n._v(" "),t("toast",{attrs:{type:"warn",text:n.failureText},model:{value:n.changeFailureShow,callback:function(a){n.changeFailureShow=a},expression:"changeFailureShow"}}),n._v(" "),t("toast",{attrs:{time:1e3,text:n.successText},model:{value:n.changeSuccessShow,callback:function(a){n.changeSuccessShow=a},expression:"changeSuccessShow"}}),n._v(" "),t("toast",{attrs:{time:1e3,text:n.successText},on:{"on-hide":n.onHide},model:{value:n.loginSuccessShow,callback:function(a){n.loginSuccessShow=a},expression:"loginSuccessShow"}})],1)],1)},staticRenderFns:[]}},xJsL:function(n,a,t){t("1o2G");var o=t("VU/8")(t("xv3V"),t("5lwa"),"data-v-72f0da6c",null);n.exports=o.exports},xv3V:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=t("ABCa"),e=t.n(o),s=t("2sLL"),c=t.n(s),i=t("QTi7"),r=t.n(i),d=t("pDNl"),l=t.n(d),u=t("rHil"),p=t.n(u),g=t("1DHf"),f=t.n(g),h=t("rLAy"),A=t.n(h),x=t("Bfwr"),b=t.n(x),v=t("m9kF");a.default={components:{XHeader:e.a,XButton:c.a,Box:r.a,XInput:l.a,Group:p.a,Cell:f.a,Toast:A.a,Loading:b.a},mounted:function(){this.failureShowToast=!1,this.changeSuccessShow=!1,this.showHeadTitle()},data:function(){return{showtest:!1,title:"Login",username:"",password:"",iconType:"",failureText:"请重新登录！",showHead:!0,showHead2:!1,successText:"",changeSuccessShow:!1,changeFailureShow:!1,loginSuccessShow:!1,loginSubmit:"登 录",signUpSubmit:"注 册",signUpLink:"/signUp",LoginDisable:!1}},methods:{showHeadTitle:function(){},goForgetPwd:function(){this.$router.push("updatePassword")},change:function(n){},onBlur:function(n){},onFocus:function(n,a){console.log("on focus",n,a)},onEnter:function(n){},onHide:function(){this.$router.push("/home")},loginAction:function(){var n=this;this.$vux.loading.show({text:"loading"}),this.$http.post(this.$apis.login,{username:this.username,password:this.password}).then(function(a){n.$vux.loading.hide(),200===a.code?(n.$store.commit(v.b,a.data.token),n.$store.commit(v.h,a.data.userId),n.successText=a.msg,n.loginSuccessShow=!0):(n.changeFailureShow=!0,n.failureText=a.msg)}).catch(function(n){this.$vux.loading.hide(),console.log("Error: "+n)})}}}}});
//# sourceMappingURL=22.561368bd93c0d7e4d8c6.js.map