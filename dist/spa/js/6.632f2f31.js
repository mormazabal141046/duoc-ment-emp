(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0783":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"col-12 flex justify-between items-center content-center q-mb-md"},[t("div",{staticClass:"text-h5"},[e._v("Pacientes")]),t("q-btn",{attrs:{unelevated:"",rounded:"",color:"primary",label:"Nuevo Paciente"},on:{click:function(a){e.persistent=!0}}})],1),t("q-table",{attrs:{data:e.data,columns:e.columns,"row-key":"name","rows-per-page-label":"Resultados por página",pagination:e.pagination}}),t("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:e.persistent,callback:function(a){e.persistent=a},expression:"persistent"}},[t("q-card",{staticClass:"bg-primary text-white",staticStyle:{width:"300px"}},[t("q-card-section",[t("div",{staticClass:"text-h6"},[e._v("Nuevo Paciente")])]),t("q-card-section",{staticClass:" bg-white"},[t("q-input",{staticClass:"q-mt-md",attrs:{rounded:"",outlined:"",label:"Nombres","stack-label":"",dense:""},model:{value:e.text,callback:function(a){e.text=a},expression:"text"}}),t("q-input",{staticClass:"q-mt-md",attrs:{rounded:"",outlined:"",label:"Apellidos","stack-label":"",dense:""},model:{value:e.text,callback:function(a){e.text=a},expression:"text"}}),t("q-select",{staticClass:"q-mt-md",attrs:{rounded:"",outlined:"",options:e.options,label:"Previsión",dense:""},model:{value:e.model,callback:function(a){e.model=a},expression:"model"}}),t("q-input",{staticClass:"q-mt-md",attrs:{rounded:"",outlined:"",label:"Tutor","stack-label":"",dense:""},model:{value:e.text,callback:function(a){e.text=a},expression:"text"}}),t("q-toggle",{staticClass:"text-primary",attrs:{icon:"las la-check-circle",label:"Estado"},model:{value:e.first,callback:function(a){e.first=a},expression:"first"}})],1),t("q-card-actions",{staticClass:"bg-white text-primary",attrs:{align:"right"}},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Ingresar"}})],1)],1)],1)],1)},n=[],o={name:"Pacientes",data(){return{first:!1,text:"",model:"Seleccione",options:["Fonasa","Isapre"],persistent:!1,pagination:{rowsPerPage:"12"},columns:[{name:"name",required:!0,label:"Nombres",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0,classes:"bg-grey-2 ellipsis",style:"max-width: 100px",headerClasses:"bg-primary text-white"},{name:"lastname",align:"center",label:"Apellidos",field:"lastname",sortable:!0},{name:"age",label:"Edad",field:"age",sortable:!0},{name:"prev",label:"Previsión",field:"prev"},{name:"tutor",label:"Tutor/a",field:"tutor"},{name:"state",label:"Estado",field:"state"},{name:"advance",label:"Avance Tratamiento",field:"advance",sortable:!0,sort:(e,a)=>parseInt(e,10)-parseInt(a,10)},{name:"options",label:"Opciones",field:"options",sortable:!0,sort:(e,a)=>parseInt(e,10)-parseInt(a,10)}],data:[{name:"Pedro Alonso",lastname:"Guitierrez Paz",age:25,prev:"Fonasa",tutor:"N/A",state:"Activo",advance:"51%",options:""},{name:"Jorge gabriel",lastname:"Mendez Gonzalez",age:18,prev:"Isapre",tutor:"N/A",state:"Activo",advance:"12%",options:""},{name:"Mario Esteban",lastname:"Bross Alegui",age:48,prev:"Fonasa",tutor:"N/A",state:"Activo",advance:"35%",options:""},{name:"Alexis Persival",lastname:"Sanchez Sanchez",age:25,prev:"Fonasa",tutor:"N/A",state:"Activo",advance:"11%",options:""},{name:"Arturo Erasmo",lastname:"Vidal Bravo",age:25,prev:"Fonasa",tutor:"N/A",state:"Activo",advance:"38%",options:""},{name:"Caludio Andres",lastname:"Bravo Jola",age:25,prev:"Isapre",tutor:"N/A",state:"Inactivo",advance:"0%",options:""},{name:"Angelo Josuelo",lastname:"Sagal Paraquetetraje",age:25,prev:"Fonasa",tutor:"N/A",state:"Activo",advance:"1%",options:""},{name:"Pedro Alonso",lastname:"Guitierrez Paz",age:25,prev:"Fonasa",tutor:"N/A",state:"Activo",advance:"51%",options:""},{name:"Jorge gabriel",lastname:"Mendez Gonzalez",age:18,prev:"Isapre",tutor:"N/A",state:"Activo",advance:"12%",options:""},{name:"Mario Esteban",lastname:"Bross Alegui",age:48,prev:"Fonasa",tutor:"N/A",state:"Activo",advance:"35%",options:""},{name:"Alexis Persival",lastname:"Sanchez Sanchez",age:25,prev:"Fonasa",tutor:"N/A",state:"Activo",advance:"11%",options:""},{name:"Arturo Erasmo",lastname:"Vidal Bravo",age:25,prev:"Fonasa",tutor:"N/A",state:"Activo",advance:"38%",options:""},{name:"Caludio Andres",lastname:"Bravo Jola",age:25,prev:"Isapre",tutor:"N/A",state:"Inactivo",advance:"0%",options:""},{name:"Angelo Josuelo",lastname:"Sagal Paraquetetraje",age:25,prev:"Fonasa",tutor:"N/A",state:"Activo",advance:"1%",options:""}]}}},l=o,i=t("42e1"),r=Object(i["a"])(l,s,n,!1,null,null,null);a["default"]=r.exports}}]);