(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"013f":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row flex justify-center items-center content-center fullscreen bg-login"},[a("div",{staticClass:"bg-form col-6 flex column justify-center items-center content-center q-pa-xl rounded-borders"},[a("img",{staticStyle:{width:"150px"},attrs:{src:"img/logo.png",alt:""}}),a("div",{staticClass:"text-white text-h4 q-my-lg text-black"},[e._v("Bienvenido")]),a("div",{staticClass:"flex justify-center items-center content-center column q-mb-md q-py-sm rounded-borders",staticStyle:{background:"rgb(255 255 255 / 32%)",width:"350px"}},[a("span",[e._v("Ingresar como")]),a("div",{staticClass:"q-gutter-sm"},[a("q-radio",{attrs:{val:"line",label:"Médico"},model:{value:e.shape,callback:function(t){e.shape=t},expression:"shape"}}),a("q-radio",{attrs:{val:"rectangle",label:"Paciente"},model:{value:e.shape,callback:function(t){e.shape=t},expression:"shape"}})],1)]),a("q-input",{staticClass:"flex q-mb-lg inp-login",staticStyle:{"min-width":"350px"},attrs:{"label-color":"black",filled:"",type:"email",label:"Usuario",color:"white","stack-label":"","input-style":"color:black;"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("q-input",{staticClass:"flex q-mb-lg inp-login",staticStyle:{"min-width":"350px"},attrs:{"label-color":"black",filled:"",type:e.isPwd?"password":"text",label:"Contraseña","stack-label":"",color:"black","input-style":"color:black;"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("q-btn",{staticClass:"q-py-sm q-px-lg",attrs:{unelevated:"",rounded:"",color:"dark",label:"Ingresar",size:"md",to:"/"}})],1)])},l={name:"Login",data(){return{password:"",isPwd:!0,email:"",shape:""}}},i=l,n=(a("10a0"),a("b9a6")),c=a.n(n);const o=c()(i,[["render",s]]);t["default"]=o},"10a0":function(e,t,a){"use strict";a("f78b")},f78b:function(e,t,a){}}]);