webpackJsonp([1],{JPXC:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},n,!1,function(t){s("xI1R")},null,null).exports,r=s("/ocq"),i=s("NYxO"),c=s("mvHQ"),l=s.n(c),u=s("woOf"),d=s.n(u),p=s("xrTZ").Base64,m=function(t){return p.encode(t)},f=function(t){return p.decode(t)},g=s("Zrlr"),v=s.n(g),h=s("wxAW"),w=s.n(h),_=new(function(){function t(){v()(this,t),this.prefix="dialog",this.type,this.message,this.callback,this.isShow=!0,this.btns={value:"default",label:"确认"},this.Dialog=document.createElement("div")}return w()(t,[{key:"init",value:function(t){this.type=t.type||"default",this.message=t.message||"这是一条提示信息",this.callback=t.callback||null,this.createDOM()}},{key:"createDOM",value:function(){var t=document.createElement("div"),e=this.createHeader(),s=this.createBody(),a=this.createFooter();this.Dialog.className="pull-"+this.prefix,t.className=this.prefix+"-content",t.append(e,s,a),this.Dialog.append(t),this.Dialog.style.display=this.isShow?"block":"none",document.body.append(this.Dialog)}},{key:"createHeader",value:function(){var t=document.createElement("div"),e=document.createElement("span");return t.className=this.prefix+"-header",e.innerText="提示",t.append(e),t}},{key:"createBody",value:function(){var t=document.createElement("div"),e=document.createElement("i"),s=document.createElement("p");return t.className=this.prefix+"-body",e.className="icon-"+this.type,s.innerText=this.message,t.append(e,s),t}},{key:"createFooter",value:function(){var t=document.createElement("div");t.className=this.prefix+"-footer";var e=document.createElement("button");return e.className="btn-"+this.btns.value,e.innerText=this.btns.label,t.append(e),this.handleClick(e),t}},{key:"handleClick",value:function(t){var e=this;t.addEventListener("click",function(){e.callback&&e.callback(),e.btnClick()},!1)}},{key:"btnClick",value:function(){var t=document.querySelector(".pull-dialog");this.type="",this.message="",t.remove()}}]),t}()),b={name:"login-box",data:function(){return{formData:{account:"",password:""},telMsg:"",psdMsg:""}},watch:{"formData.account":function(t){var e=""===t?"账号不能为空":/^[1][3,5,7,8,9][0-9]{9}$/.test(t)?"":"输入账号有误";this.telMsg=e},"formData.password":function(t){var e=""===t?"密码不能为空":/^[A-Za-z0-9]{8,21}$/.test(t)?"":"密码格式错误";this.psdMsg=e}},methods:{change:function(){this.$store.dispatch("changeLogin",!0)},login:function(){var t=this;if(this.telMsg||this.psdMsg)_.init({type:"warn",message:"您的登录信息有误"});else{var e=d()({},this.formData);e.password=m(e.password),this.$store.dispatch("login",e).then(function(e){var s=t;localStorage.setItem("userInfo",l()(e.data)),t.psdBool=!1,_.init({type:"success",message:e.msg,callback:function(){s.$router.replace("home")}})}).catch(function(t){_.init({type:"error",message:t.msg})})}}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inner-box"},[s("div",{staticClass:"form-header"},[t._v("登录")]),t._v(" "),s("form",{staticClass:"form-body"},[s("div",{staticClass:"row-input",class:{mistakeClasses:""!==t.telMsg}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.account,expression:"formData.account"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.formData.account},on:{input:function(e){e.target.composing||t.$set(t.formData,"account",e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.telMsg))])]),t._v(" "),s("div",{staticClass:"row-input",class:{mistakeClasses:""!==t.psdMsg}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码8~21位数字或字母"},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.psdMsg))])]),t._v(" "),s("div",{staticClass:"btn-row"},[s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.login(e)}}},[t._v("登录")])])]),t._v(" "),s("div",{staticClass:"form-footer"},[s("button",{staticClass:"btn",on:{click:t.change}},[t._v("没账号？ 去注册")])])])},staticRenderFns:[]},y=s("VU/8")(b,D,!1,null,null,null).exports,C=s("//Fk"),x=s.n(C),k={name:"register-box",data:function(){return{formData:{account:"",password:"",repassword:""},showLoading:!1,telMsg:"",psdMsg:"",repsdMsg:""}},watch:{"formData.account":function(t){var e=""===t?"账号不能为空":/^[1][3,5,7,8,9][0-9]{9}$/.test(t)?"":"输入账号有误";this.telMsg=e},"formData.password":function(t){var e=""===t?"密码不能为空":/^[A-Za-z0-9]{8,21}$/.test(t)?"":"密码格式错误";this.psdMsg=e},"formData.repassword":function(t){var e=this.formData.password,s=""===t?"确认密码不能为空":e!==t?"两次密码输入不一致":"";this.repsdMsg=s}},methods:{change:function(){this.$store.dispatch("changeLogin",!1)},signUpAccount:function(){var t=this;if(this.telMsg||this.psdMsg||this.repsdMsg)_.init({type:"warn",message:"注册信息有误"});else{this.showLoading=!0;var e=d()({},this.formData);e.password=m(e.password),e.repassword=m(e.repassword),this.$store.dispatch("signUpUserInfo",e).then(function(e){var s=t;t.showLoading=!1,_.init({type:"success",message:e.msg,callback:function(){s.$store.dispatch("changeLogin",!1)}})}).catch(function(e){t.showLoading=!1,_.init({type:"error",message:e.msg})})}}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"inner-box register",attrs:{loading:t.showLoading}},[s("div",{staticClass:"form-header"},[t._v("注册")]),t._v(" "),s("form",{staticClass:"form-body",attrs:{id:"formData"}},[s("div",{staticClass:"row-input",class:{mistakeClasses:t.telMsg.length}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.account,expression:"formData.account"}],attrs:{type:"text",placeholder:"手机号"},domProps:{value:t.formData.account},on:{input:function(e){e.target.composing||t.$set(t.formData,"account",e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.telMsg))])]),t._v(" "),s("div",{staticClass:"row-input",class:{mistakeClasses:t.psdMsg.length}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码8~21位数字或字母"},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.psdMsg))])]),t._v(" "),s("div",{staticClass:"row-input",class:{mistakeClasses:t.repsdMsg.length}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.repassword,expression:"formData.repassword"}],attrs:{type:"password",placeholder:"再次确认密码"},domProps:{value:t.formData.repassword},on:{input:function(e){e.target.composing||t.$set(t.formData,"repassword",e.target.value)}}}),t._v(" "),s("span",[t._v(t._s(t.repsdMsg))])]),t._v(" "),s("div",{staticClass:"btn-row"},[s("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.signUpAccount(e)}}},[t._v("保存")])])]),t._v(" "),s("div",{staticClass:"form-footer"},[s("button",{staticClass:"btn",on:{click:t.change}},[t._v("已有账号")])])])},staticRenderFns:[]},$=s("VU/8")(k,M,!1,null,null,null).exports,L=s("nrvK"),E=s.n(L),I={name:"form-box",components:{Login:y,Register:$},computed:Object(i.b)({status:function(t){return t.login.status}}),data:function(){return{beauty:E.a}}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-box"},[e("div",{staticClass:"bgImg"},[e("img",{attrs:{src:this.beauty,alt:"beauty"}})]),this._v(" "),e("div",{staticClass:"form"},[e("Transition",{attrs:{name:"login"}},[this.status?e("register"):e("login")],1)],1)])},staticRenderFns:[]};var F={name:"HelloWorld",components:{loginForm:s("VU/8")(I,N,!1,function(t){s("hImF")},null,null).exports}},U={render:function(){var t=this.$createElement;return(this._self._c||t)("login-form")},staticRenderFns:[]},P=s("VU/8")(F,U,!1,null,null,null).exports,R={name:"home",data:function(){return{showLoading:!1}},methods:{signOut:function(){var t=this;this.showLoading=!0,setTimeout(function(){t.showLoading=!1,localStorage.removeItem("userInfo"),t.$router.replace("/")},2e3)}}},A={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("div",{staticClass:"tips"},[s("i",{staticClass:"icon-success"}),t._v(" "),s("p",[t._v("恭喜，登录成功")]),t._v(" "),s("button",{staticClass:"btn",on:{click:t.signOut}},[t._v("退出登录")])]),t._v(" "),s("div",{staticClass:"loading",style:{transform:"scale("+(t.showLoading?1:0)+")"}},[t._v("加载中...")])])},staticRenderFns:[]},O=s("VU/8")(R,A,!1,null,null,null).exports;a.a.use(r.a);var S=new r.a({routes:[{path:"/",name:"HelloWorld",component:P},{path:"/home",name:"home",component:O}]}),T=s("sax8"),H=s.n(T),V={namespace:!0,state:{status:!1,userList:[]},getters:{},actions:{changeLogin:function(t,e){var s=t.commit;t.state;s("changeStatus",e)},signUpUserInfo:function(t,e){var s=t.commit,a=(t.state,new Date);return e.createDate=a,e.id=parseInt(1e10*Math.random()),new x.a(function(t,a){var n=2e3*Math.random();setTimeout(function(){100*Math.random()<70?(t({data:e,msg:"注册成功，请直接登录"}),s("userInfo",e)):a({data:null,msg:"网络超时"})},n)})},login:function(t,e){var s=t.commit,a=t.state,n=new Date,o=a.userList.filter(function(t){return t.account===e.account}),r=a.userList.filter(function(t){return t.account===e.account&&f(t.password)===f(e.password)});return o.createDate=n,o.isLogin=!0,new x.a(function(t,e){o.length?r.length?(t({data:o,msg:"登录成功"}),s("upDataInfo",o)):e({data:null,msg:"密码错误"}):e({data:null,msg:"未注册，请先注册"})})}},mutations:{changeStatus:function(t,e){t.status=e},userInfo:function(t,e){t.userList.push(e)},upDataInfo:function(t,e){t.userList.forEach(function(t){t.id===e.id&&(t.createDate=e.createDate)})}}};a.a.use(i.a);var B=new i.a.Store({plugins:[H()()],modules:{login:V}});s("JPXC");a.a.config.productionTip=!1,new a.a({el:"#app",router:S,store:B,components:{App:o},template:"<App/>"})},hImF:function(t,e){},nrvK:function(t,e,s){t.exports=s.p+"static/img/beauty.4e87aa4.jpg"},xI1R:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f302c07e5f1c2836781f.js.map