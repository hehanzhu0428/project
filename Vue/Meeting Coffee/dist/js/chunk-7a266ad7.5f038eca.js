(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a266ad7"],{"2f14":function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));o("99af"),o("fb6a");var n=o("d4ec"),a=o("bee2"),s=function(){function e(){Object(n["a"])(this,e)}return Object(a["a"])(e,[{key:"queryString",value:function(e){var t="";for(var o in e)t+="".concat(o,"=").concat(e[o],"&");return t.slice(0,-1)}}]),e}(),r=new s},8418:function(e,t,o){"use strict";var n=o("c04e"),a=o("9bf2"),s=o("5c6c");e.exports=function(e,t,o){var r=n(t);r in e?a.f(e,r,s(0,o)):e[r]=o}},"99af":function(e,t,o){"use strict";var n=o("23e7"),a=o("d039"),s=o("e8b5"),r=o("861d"),i=o("7b0b"),c=o("50c4"),l=o("8418"),f=o("65f0"),u=o("1dde"),d=o("b622"),g=o("2d00"),p=d("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",b=g>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),w=u("concat"),m=function(e){if(!r(e))return!1;var t=e[p];return void 0!==t?!!t:s(e)},y=!b||!w;n({target:"Array",proto:!0,forced:y},{concat:function(e){var t,o,n,a,s,r=i(this),u=f(r,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(s=-1===t?r:arguments[t],m(s)){if(a=c(s.length),d+a>v)throw TypeError(h);for(o=0;o<a;o++,d++)o in s&&l(u,d,s[o])}else{if(d>=v)throw TypeError(h);l(u,d++,s)}return u.length=d,u}})},"9d64":function(e,t,o){e.exports=o.p+"img/logo.fd50cf13.png"},a55b:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("van-nav-bar",{on:{"click-right":e.goindex},scopedSlots:e._u([{key:"left",fn:function(){return[o("div",{staticClass:"login-title"},[e._v("Meeting Coffee")])]},proxy:!0},{key:"right",fn:function(){return[e._v("Home")]},proxy:!0}])}),e._m(0),o("div",{staticClass:"login-form"},[o("van-form",[o("van-field",{attrs:{label:"手机号",placeholder:"请输入手机号"},model:{value:e.loginInfo.phone,callback:function(t){e.$set(e.loginInfo,"phone",t)},expression:"loginInfo.phone"}}),o("van-field",{attrs:{type:e.isPassword?"password":"text",label:"密码",placeholder:"请输入密码","right-icon":e.isPassword?"closed-eye":"eye-o"},on:{"click-right-icon":e.showPassword},model:{value:e.loginInfo.password,callback:function(t){e.$set(e.loginInfo,"password",t)},expression:"loginInfo.password"}}),o("div",{staticClass:"forget clearfix"},[o("span",{staticClass:"fr",on:{click:e.goForget}},[e._v("忘记密码?")])]),o("div",{staticClass:"login-btn"},[o("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:e.login}},[e._v("登录")])],1),o("div",{staticClass:"regist-btn"},[o("div",{staticClass:"regist-contents"},[e._v(" 没有账号? "),o("span",{on:{click:e.showPopup}},[e._v("立即注册")])]),o("van-popup",{style:{height:"50%"},attrs:{round:"",position:"bottom",closeable:""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[o("div",{staticClass:"regist-content"},[o("div",{staticClass:"regist-title"},[o("h1",[e._v("注册")])]),o("div",{staticClass:"regist-mes"},[o("van-form",[o("van-field",{attrs:{label:"昵称",placeholder:"请输入1-4位昵称"},model:{value:e.registInfo.nickName,callback:function(t){e.$set(e.registInfo,"nickName",t)},expression:"registInfo.nickName"}}),o("van-field",{attrs:{label:"手机号",placeholder:"请输入11位手机号"},model:{value:e.registInfo.phone,callback:function(t){e.$set(e.registInfo,"phone",t)},expression:"registInfo.phone"}}),o("van-field",{attrs:{type:e.isPassword?"password":"text",label:"密码",placeholder:"请输入6-16位且为字母开头的密码","right-icon":e.isPassword?"closed-eye":"eye-o"},on:{"click-right-icon":e.showPassword},model:{value:e.registInfo.password,callback:function(t){e.$set(e.registInfo,"password",t)},expression:"registInfo.password"}}),o("div",{staticClass:"regist-btn2"},[o("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"},on:{click:e.regist}},[e._v("注册")])],1)],1)],1)])])],1)],1)],1)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-welcome"},[n("h3",[n("img",{staticClass:"auto-img",attrs:{src:o("9d64"),alt:""}})]),n("p",[e._v("Meeting is Fate")])])}],s=(o("c25d"),o("e3a8")),r=o("2f14"),i={data:function(){return{loginInfo:{phone:"",password:""},registInfo:{phone:"",password:"",nickName:""},isPassword:!0,show:!1}},methods:{goindex:function(){this.$router.push({name:"Index"})},goForget:function(){var e=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),setTimeout((function(){e.$toast.clear(),e.$router.push({name:"Forgetpassword"})}),1e3)},showPassword:function(){this.isPassword=!this.isPassword},showPopup:function(){this.show=!0},regist:function(){var e=this,t=this.registInfo,o={nickName:{value:t.nickName,reg:/^[\w\u4e00-\u9fa5]{1,4}$/,errorMsg:"昵称格式不正确"},password:{value:t.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"密码格式不正确"},phone:{value:t.phone,reg:/^1[3-9]\d{9}$/,errorMsg:"手机号格式不正确"}};if(s["a"].valid(o)){this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner",duration:0});var n=Object.assign({},t);n.appkey=this.appkey;var a=r["a"].queryString(n);this.axios({method:"post",url:"/register",data:a}).then((function(o){if(e.$toast.clear(),102==o.data.code&&e.$notify({message:o.data.msg,color:"#fff",background:"#3585f9"}),100==o.data.code)for(var n in e.$notify({message:o.data.msg,color:"#fff",background:"#3585f9"}),e.show=!1,t)t[n]="";else e.$notify({message:o.data.msg,color:"#fff",background:"#3585f9"})})).catch((function(t){e.$toast.clear()}))}},login:function(){var e=this,t=this.loginInfo,o={phone:{value:t.phone,reg:/^1[3-9]\d{9}$/,errorMsg:"手机号格式不正确"},password:{value:t.password,reg:/^[A-Za-z]\w{5,15}$/,errorMsg:"密码格式不正确"}};if(s["a"].valid(o)){this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner",duration:0});var n=Object.assign({},t);n.appkey=this.appkey;var a=r["a"].queryString(n);this.axios({method:"post",url:"/login",data:a}).then((function(t){e.$toast.clear(),200==t.data.code?(localStorage.setItem("WTPTK",t.data.token),e.$notify({message:t.data.msg,color:"#fff",background:"#3585f9",duration:800}),e.$router.push({name:"Index"})):e.$notify({message:t.data.msg,color:"#fff",background:"#3585f9"})})).catch((function(t){e.$toast.clear()}))}}}},c=i,l=o("2877"),f=Object(l["a"])(c,n,a,!1,null,null,null);t["default"]=f.exports},bee2:function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}o.d(t,"a",(function(){return a}))},c25d:function(e,t,o){},d4ec:function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}o.d(t,"a",(function(){return n}))},e3a8:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var n=o("d4ec"),a=o("bee2"),s=(o("9a83"),o("f564")),r=o("2b0e");r["a"].use(s["a"]);var i=function(){function e(){Object(n["a"])(this,e)}return Object(a["a"])(e,[{key:"valid",value:function(e){for(var t in e)if(!e[t].reg.test(e[t].value))return Object(s["a"])({message:e[t].errorMsg,color:"#fff",background:"#3585f9"}),!1;return!0}}]),e}(),c=new i},fb6a:function(e,t,o){"use strict";var n=o("23e7"),a=o("861d"),s=o("e8b5"),r=o("23cb"),i=o("50c4"),c=o("fc6a"),l=o("8418"),f=o("b622"),u=o("1dde"),d=o("ae40"),g=u("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),v=f("species"),h=[].slice,b=Math.max;n({target:"Array",proto:!0,forced:!g||!p},{slice:function(e,t){var o,n,f,u=c(this),d=i(u.length),g=r(e,d),p=r(void 0===t?d:t,d);if(s(u)&&(o=u.constructor,"function"!=typeof o||o!==Array&&!s(o.prototype)?a(o)&&(o=o[v],null===o&&(o=void 0)):o=void 0,o===Array||void 0===o))return h.call(u,g,p);for(n=new(void 0===o?Array:o)(b(p-g,0)),f=0;g<p;g++,f++)g in u&&l(n,f,u[g]);return n.length=f,n}})}}]);
//# sourceMappingURL=chunk-7a266ad7.5f038eca.js.map