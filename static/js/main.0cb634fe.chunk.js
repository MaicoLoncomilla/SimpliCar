(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a(0),c=a.n(i),s=a(10),r=a.n(s),o=a(11),l=a(16),j=a(26),d=a(53),m=a(32),u=a.n(m),O={headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer qwertyuiopasdfghjklzxcvbnm123456"}},b={GETCARS:"GETCARS",getCars:function(e){var t=this;return function(a){var n=u.a.get("/product/",O);t._dispatchPromise(n,t.GETCARS,a,"cars",e)}},GETDETAILS:"GETDETAILS",getDetails:function(e){var t=this;return function(a){var n=u.a.get("/product/".concat(e),O);t._dispatchPromise(n,t.GETDETAILS,a)}},SENDEMAIL:"SENDEMAIL",sendEmail:function(e,t){var a=this;return function(n){var i=u.a.post("/lead/".concat(e.product),e,O);a._dispatchPromise(i,a.SENDEMAIL,n,"email",t)}},_dispatchPromise:function(e,t,a,n,i){return e.then((function(e){var c=e.data;return"cars"===n?a({type:t,payload:c.results}):"email"===n?i.show(c.msg,{type:"success",timeout:5e3}):void a({type:t,payload:c})})).catch((function(e){e.response?i.show("Error! \n Status: ".concat(e.response.status," \n ").concat(e.response.data),{type:"error",timeout:2500}):i.show("Error! ".concat(e),{type:"error",timeout:2500})}))}},_=b.GETCARS,p=b.GETDETAILS,x=b.SENDEMAIL,h={cars:[],details:!1,sendEmail:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(n.a)(Object(n.a)({},e),{},{cars:t.payload});case p:return Object(n.a)(Object(n.a)({},e),{},{details:t.payload});case x:return Object(n.a)(Object(n.a)({},e),{},{sendEmail:t.payload});default:return Object(n.a)({},e)}},v=a(24),N=a(54),S=(a(95),a(5)),g=a(55),E=a.n(g),A=a(17),C=a.n(A),y=a(1);function L(){var e=window.location.pathname;return Object(y.jsxs)("div",{className:C.a.containerHeader,children:[Object(y.jsxs)("div",{className:C.a.containerLinks,children:[Object(y.jsx)(o.b,{to:"/SimpliCar/",className:C.a.Links,children:Object(y.jsx)("div",{className:C.a.containerSvg,children:Object(y.jsx)("img",{src:"https://libs.nissan-cdn.net/etc/designs/nissan_next_v3/21.02.2.NISSAN-13/common-assets/img/svg/nissan-next-logo.svg",alt:"logoNissan"})})}),Object(y.jsx)(o.b,{to:"/SimpliCar/store",className:"/SimpliCar/"===e?C.a.LinksHeader:C.a.Links,children:"VEH\xcdCULOS"}),Object(y.jsx)(o.b,{to:"/SimpliCar/",className:"/SimpliCar/"===e?C.a.LinksHeader:C.a.Links,children:"DESCRUBR\xcd NISSAN"})]}),Object(y.jsxs)("div",{className:C.a.containerSearch,children:[Object(y.jsx)(E.a,{}),Object(y.jsx)("input",{placeholder:"BUSCAR POR MODELO O VEH\xcdCULO.."})]})]})}var I=a(28),R=a.n(I);function T(e){var t=e.title,a=e.style,n=e.s;return Object(y.jsx)("h1",{style:a,className:R.a[n],children:t})}function D(e){var t=e.title,a=e.style,n=e.s;return Object(y.jsx)("h2",{style:a,className:R.a[n],children:t})}function H(e){var t=e.title,a=e.style,n=e.s;return Object(y.jsx)("h3",{style:a,className:R.a[n],children:t})}function k(e){var t=e.title,a=e.style,n=e.s;return Object(y.jsx)("h4",{style:a,className:R.a[n],children:t})}var F=a(56),P=a.n(F),V=a(57),M=a.n(V),w=a(58),G=a.n(w),U=a(59),z=a.n(U),B=a(60),q=a.n(B),W=a(14),X=a.n(W),Q=[{title:"COTIZACI\xd3N DE VEH\xcdCULOS",children:[{title:"informaci\xf3n Legal",icon:[Object(y.jsx)(P.a,{className:X.a.icons})]}]},{title:"RALITOR S.A",children:[{title:"nissan.com.uy",icon:[]},{title:"Pol\xedticas de Cookies",icon:[]}]},{title:"AYUDA AL CLIENTE",children:[{title:"Politicas de Privacidad",icon:[]}]},{title:"NISSAN SOCIAL",children:[{title:"",icon:[Object(y.jsx)(M.a,{className:X.a.icons}),Object(y.jsx)(G.a,{className:X.a.icons}),Object(y.jsx)(z.a,{className:X.a.icons}),Object(y.jsx)(q.a,{className:X.a.icons})]}]}];function Z(){return Object(y.jsxs)("div",{className:X.a.container,children:[Object(y.jsxs)("div",{className:X.a.containerFlex,children:[Object(y.jsx)(H,{title:"Nissan.",style:{color:"#fff",marginRight:5},s:"titleNissan"}),Object(y.jsx)(H,{title:"Innovation that excites.",s:"titleH3"})]}),Object(y.jsx)("div",{className:X.a.containerArray,children:Object(y.jsx)("div",{className:X.a.containerListArray,children:null===Q||void 0===Q?void 0:Q.map((function(e){return function(e){var t;return Object(y.jsxs)("div",{className:X.a.containerTitles,children:[Object(y.jsx)(k,{title:e.title,s:"titleFooter"}),null===(t=e.children)||void 0===t?void 0:t.map((function(e,t){return e.icon.length?Object(y.jsx)("div",{style:{display:"flex"},children:e.icon.map((function(t,a){return Object(y.jsxs)("div",{className:X.a.containerIconsTitle,children:[t,e.title&&Object(y.jsx)(k,{title:e.title,s:"subTitleFooter"})]},"".concat(e.title," ").concat(a))}))},"".concat(e.title," ").concat(t)):Object(y.jsx)(k,{title:e.title,s:"subTitleFooter"},"".concat(e.title," ").concat(t))}))]},e.title)}(e)}))})}),Object(y.jsx)("hr",{style:{borderColor:"#141414"}}),Object(y.jsx)(k,{title:"\xa9 2020 SIMPLICAR. Todos los derechos reservados.",s:"H4copyRight"})]})}a(99);var Y=a(37),J=a.n(Y);function K(e){var t=e.parrafo,a=e.s;return Object(y.jsx)("p",{className:J.a[a],children:t})}function $(e){var t=e.parrafo,a=e.s,n=e.style;return Object(y.jsx)("p",{style:n,className:J.a[a],children:t})}var ee=a(31),te=a.n(ee),ae=a(25),ne=a.n(ae);function ie(e){var t=e.el,a=e.index;return Object(y.jsxs)("div",{className:ne.a.containerCards,children:[Object(y.jsx)("img",{src:"".concat("https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com","/").concat(t.gallery[0].medium),alt:t.model}),Object(y.jsxs)("div",{className:ne.a.containerDescription,children:[Object(y.jsx)(T,{title:t.model,style:{textAlign:"center",marginBottom:20},s:"titleH1"}),Object(y.jsx)("hr",{style:{color:"#edecec"}}),Object(y.jsxs)("div",{className:ne.a.containerPrice,children:[Object(y.jsx)(k,{title:"PRECIO DESDE",style:{color:"#d0cace"}}),Object(y.jsx)(k,{title:"US$ ".concat(t.amount)})]}),Object(y.jsx)("hr",{style:{color:"#edecec"}}),Object(y.jsx)(o.b,{to:"/SimpliCar/detail/".concat(a),className:ne.a.Links,children:Object(y.jsxs)("div",{className:ne.a.containerVerDetalle,children:[Object(y.jsx)(k,{title:"VER DETALLES DE MODELO"}),Object(y.jsx)(te.a,{})]})}),Object(y.jsx)($,{parrafo:"Im\xe1genes meramente ilustrativas no reportando la realidad exacta, pudiendo existir variaciones en la percepci\xf3n.",s:"parrafo"})]})]},t.id)}var ce=a(7),se=a.n(ce),re=a(61),oe=a.n(re);function le(){return Object(y.jsx)("div",{className:oe.a.loader,children:Object(y.jsx)("span",{})})}function je(){var e=Object(l.c)((function(e){return e.cars})),t=Object(v.c)(),a=b.GETCARS,n=Object(l.b)();return Object(i.useEffect)((function(){e.length||n(b.getCars(t))}),[n,e,a]),Object(y.jsxs)("div",{className:se.a.containerNissanStore,children:[Object(y.jsx)("div",{className:se.a.containerProximoNissan,children:Object(y.jsx)(T,{title:"\xbfCU\xc1L VA A SER TU PR\xd3XIMO NISSAN?"})}),Object(y.jsx)(k,{title:"".concat(null===e||void 0===e?void 0:e.length," VEH\xcdCULOS"),s:"countCars"}),Object(y.jsxs)("div",{className:se.a.containerFilterAndCars,children:[Object(y.jsxs)("div",{className:se.a.containerFilters,children:[Object(y.jsx)("div",{children:de.map((function(e,t){return function(e,t){return Object(y.jsx)("select",{className:se.a.filters,children:e.map((function(e,t){return Object(y.jsx)("option",{children:e.title},t)}))},t)}(e,t)}))}),Object(y.jsxs)("div",{children:["Ordenar por",Object(y.jsx)("select",{onChange:function(t){return function(t){switch(t){case"masBajo":return n({type:a,payload:Object.values(e.sort((function(e,t){return e.amount-t.amount})))});case"masAlto":return n({type:a,payload:Object.values(e.sort((function(e,t){return t.amount-e.amount})))});default:return}}(t.target.value)},children:me.map((function(e,t){return Object(y.jsx)("option",{value:e.value,children:e.title},t)}))})]})]}),0===e.length?Object(y.jsx)(le,{}):Object(y.jsx)("div",{className:se.a.containerMainCars,children:e.map((function(e,t){return Object(y.jsx)(ie,{el:e,index:t},e.id)}))})]}),Object(y.jsx)($,{parrafo:"*Los precios expuestos en este catalogo son expresados en d\xf3lares americanos. Los mismos incluyen IVA y podr\xe1n variar en funci\xf3n al modelo y/o versi\xf3n elegida. El precio por unidad reflejado en este cat\xe1logo refiere a la unidad de versi\xf3n m\xe1s econ\xf3mica por cada modelo. RALITOR SA se reserva al derecho de modificar y actualizar los mismos en cualquier momento. Es responsabilidad del cliente confirmar al momento de su compra, el precio final que aparece en el cat\xe1logo. No se incluyen Gastos de empadronamiento ni cualquier tipo de costo municipal, as\xed como tampoco gastos de traslados, fletes o seguro del veh\xedculo. No incluye costos de instalaci\xf3n de accesorios.",s:"parrafoStore"})]})}var de=[[{title:"CARROCERIA"}],[{title:"MODELO"}],[{title:"PRECIO"}]],me=[{title:"Precio mas Bajo",value:"masBajo"},{title:"Precio mas Alto",value:"masAlto"}],ue=a(22),Oe=a.n(ue),be=a.p+"static/media/full.e577113b.jpg",_e=a.p+"static/media/movil.47656cda.jpg",pe=a.p+"static/media/tablet.58b586b5.jpg";function xe(){return Object(y.jsxs)("div",{className:Oe.a.containerNissanHome,children:[Object(y.jsxs)("picture",{children:[Object(y.jsx)("source",{srcSet:_e,media:"(max-width: 400px)"}),Object(y.jsx)("source",{srcSet:pe,media:"(max-width: 1200px)"}),Object(y.jsx)("source",{srcSet:be,media:"(max-width: 1200px)"}),Object(y.jsx)("img",{src:be,className:Oe.a.full,alt:"autoSentra"}),Object(y.jsx)("img",{src:_e,className:Oe.a.movil,alt:"autoSentra"}),Object(y.jsx)("img",{src:pe,className:Oe.a.tablet,alt:"autoSentra"})]}),Object(y.jsxs)("div",{className:Oe.a.containerAbsolute,children:[Object(y.jsx)(T,{title:"AHORA ES ONLINE",s:"titleHomeH1"}),Object(y.jsx)(K,{s:"parrafoHome",parrafo:"Con Nissan Store, pod\xe9s acceder a tu nuevo 0km con todos los servicios asociados desde la comodidad de tu sof\xe1. Probanos!"}),Object(y.jsx)(o.b,{to:"/SimpliCar/store",className:Oe.a.Links,children:Object(y.jsxs)("div",{className:Oe.a.containerIngresar,children:[Object(y.jsx)(H,{title:"INGRESAR A NISSAN STORE"}),Object(y.jsx)(te.a,{})]})})]})]})}var he=a(66),fe=a.n(he),ve=a(30),Ne=a(67),Se=a(62),ge=a.n(Se);function Ee(e){var t=e.s,a=e.style,n=e.title;return Object(y.jsx)("button",{className:ge.a[t],style:a,type:"submit",children:n})}var Ae=a(63),Ce=a.n(Ae);function ye(e){var t=e.placeholder,a=e.s,n=e.style,i=e.type,c=e.onChangeText,s=e.name,r=e.value;return Object(y.jsx)("input",{placeholder:t,onChange:function(e){return c(s,e.target.value)},className:Ce.a[a],style:n,type:i,value:r})}var Le=a(64),Ie=a.n(Le);function Re(e){var t=e.id,a=Object(l.b)(),c=Object(v.c)(),s=Object(i.useState)({fullname:"",email:"",phone:""}),r=Object(Ne.a)(s,2),o=r[0],j=r[1],d=function(e,t){j(Object(n.a)(Object(n.a)({},o),{},Object(ve.a)({},e,t)))};return Object(y.jsxs)("form",{className:Ie.a.containerForm,onSubmit:function(e){return function(e){if(e.preventDefault(),!o.email||!o.fullname||!o.phone)return c.show("llene los campos");if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(o.email))return c.show("No tiene un formato email");var n={fullname:o.fullname,email:o.email,phone:o.phone,product:t};a(b.sendEmail(n,c)),j({fullname:"",email:"",phone:""})}(e)},children:[Object(y.jsx)(D,{title:"INGRES\xc1 TUS DATOS"}),Object(y.jsx)($,{parrafo:"Por favor complet\xe1 el siguiente formulario para que uno de nuestros asesores se pueda contactar contigo.",s:"parrafo",style:{margin:"10px 0px"}}),Object(y.jsx)(ye,{placeholder:"NOMBRE Y APELLIDO",s:"inputForm",onChangeText:d,type:"text",value:o.fullname,name:"fullname"}),Object(y.jsx)(ye,{placeholder:"CORREO ELECTR\xd3NICO",s:"inputForm",onChangeText:d,type:"email",value:o.email,name:"email"}),Object(y.jsx)(ye,{placeholder:"TEL\xc9FONO",s:"inputForm",onChangeText:d,type:"text",value:o.phone,name:"phone"}),Object(y.jsx)(Ee,{title:"ENVIARME LA COTIZACI\xd3N POR MAIL",s:"buttonSend"})]})}var Te=a(65);a(105);function De(e){var t=e.galery;return Object(y.jsx)(Te.Carousel,{autoPlay:!0,showStatus:!1,renderIndicator:!1,infiniteLoop:!0,children:null===t||void 0===t?void 0:t.map((function(e){return Object(y.jsx)("div",{children:Object(y.jsx)("img",{alt:"",src:"".concat("https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com","/").concat(e.medium)})},e.large)}))})}function He(){var e=Object(S.f)().id,t=(b.GETDETAILS,Object(l.b)()),a=Object(l.c)((function(e){return e.details}));return Object(i.useEffect)((function(){t(b.getDetails(e))}),[t,e]),Object(y.jsx)(y.Fragment,{children:a?Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:se.a.containerLinkVolver,children:[Object(y.jsx)(o.b,{to:"/SimpliCar/store",className:se.a.Links,children:Object(y.jsxs)("div",{className:se.a.containerVolver,children:[Object(y.jsx)(fe.a,{}),Object(y.jsx)(k,{title:"VOLVER A LA TIENDA",style:{marginRight:5},s:"h4CarDetail"})]})}),Object(y.jsxs)("div",{className:se.a.containerNameAndSendEmail,children:[Object(y.jsx)("span",{children:"/"}),Object(y.jsx)(k,{title:a.model,style:{marginRight:5,marginLeft:5},s:"h4CarDetail"}),Object(y.jsx)("span",{children:"/"}),Object(y.jsx)(k,{title:"ENVIAR COTIZACI\xd3N POR MAIL",style:{marginLeft:5}})]})]}),Object(y.jsxs)("div",{className:se.a.containerCarouselFormEmail,children:[Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:se.a.containerDetailModel,children:[Object(y.jsx)(k,{title:"".concat(a.model," ").concat(a.sku)}),Object(y.jsx)(k,{title:"USD$ ".concat(a.amount)})]}),Object(y.jsx)(De,{galery:a.gallery}),Object(y.jsx)("hr",{style:{color:"#edecec"}}),Object(y.jsxs)("div",{className:se.a.containerCharacteristics,children:[Object(y.jsxs)("div",{className:se.a.contanerEngineWarranty,children:[Object(y.jsx)(k,{title:a.detail.characteristics.engine}),Object(y.jsx)(k,{title:a.detail.characteristics.gas_type})]}),Object(y.jsxs)("div",{className:se.a.contanerEngineWarranty,children:[Object(y.jsx)(k,{title:a.detail.characteristics.warranty}),Object(y.jsx)(k,{title:a.detail.characteristics.body})]})]}),Object(y.jsx)("hr",{style:{color:"#edecec"}}),Object(y.jsx)(k,{title:"VER TODAS LAS CARACTERR\xcdSTICAS | VER GALER\xcdA DE IM\xc1GENES",s:"titleRed"})]}),Object(y.jsx)(Re,{id:e})]})]}):Object(y.jsx)(le,{})})}var ke=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(S.c,{children:Object(y.jsx)(S.a,{path:"/SimpliCar/",render:function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(S.a,{path:"/SimpliCar/",component:L}),Object(y.jsx)(S.a,{exact:!0,path:"/SimpliCar/",component:xe}),Object(y.jsx)(S.a,{exact:!0,path:"/SimpliCar/store",component:je}),Object(y.jsx)(S.a,{exact:!0,path:"/SimpliCar/detail/:id",component:He}),Object(y.jsx)(S.a,{path:"/SimpliCar/",component:Z})]})}})})})},Fe=Object(j.c)(f,Object(j.a)(d.a)),Pe={position:v.b.TOP_RIGHT,timeout:5e3,offset:"30px"};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(l.a,{store:Fe,children:Object(y.jsx)(v.a,Object(n.a)(Object(n.a)({template:N.a},Pe),{},{children:Object(y.jsx)(o.a,{children:Object(y.jsx)(ke,{})})}))})}),document.getElementById("root"))},14:function(e,t,a){e.exports={container:"footer_container__37UvY",containerFlex:"footer_containerFlex__2SMkU",containerTitles:"footer_containerTitles__1z04V",containerArray:"footer_containerArray__2y_QF",containerListArray:"footer_containerListArray__1kSD9",icons:"footer_icons__3Nlss",containerIconsTitle:"footer_containerIconsTitle__2Nm9d"}},17:function(e,t,a){e.exports={containerHeader:"header_containerHeader__3fVHr",containerLinks:"header_containerLinks__3isG6",Links:"header_Links__XMpme",LinksHeader:"header_LinksHeader__3lKBQ",containerSvg:"header_containerSvg__2TyGB",containerSearch:"header_containerSearch__C-tg3"}},22:function(e,t,a){e.exports={containerNissanHome:"nissanHome_containerNissanHome__3rVZm",containerAbsolute:"nissanHome_containerAbsolute__QDa_o",Links:"nissanHome_Links__3PzQG",containerIngresar:"nissanHome_containerIngresar__Xph0s",full:"nissanHome_full__2vLim",tablet:"nissanHome_tablet__QpP8Y",movil:"nissanHome_movil__1WgGy"}},25:function(e,t,a){e.exports={containerCards:"card_containerCards__3YoX_",containerPrice:"card_containerPrice__15kqL",containerDescription:"card_containerDescription__10s9O",containerVerDetalle:"card_containerVerDetalle__1uVF9",Links:"card_Links__2mRGx"}},28:function(e,t,a){e.exports={titleH3:"titles_titleH3__9-vXh",titleNissan:"titles_titleNissan__32tvK",titleH1:"titles_titleH1__3dXLq",titleHomeH1:"titles_titleHomeH1__oufCr",titleH4:"titles_titleH4__3MS7r",countCars:"titles_countCars__3a_ai",h4CarDetail:"titles_h4CarDetail__2LiDX",titleFooter:"titles_titleFooter__2eCRn",subTitleFooter:"titles_subTitleFooter__24uyw",subTitleFooterWithIcon:"titles_subTitleFooterWithIcon__1EtMd",H4copyRight:"titles_H4copyRight__RIkrl",titleRed:"titles_titleRed__2lWCt"}},37:function(e,t,a){e.exports={parrafoHome:"p_parrafoHome__2sagK",parrafo:"p_parrafo__1ldAO",parrafoStore:"p_parrafoStore__2Uq4Y"}},61:function(e,t,a){e.exports={loader:"loading_loader__3Wxu2",button_loading_spinner:"loading_button_loading_spinner__3yuac"}},62:function(e,t,a){e.exports={buttonSend:"button_buttonSend__1VRSr"}},63:function(e,t,a){e.exports={inputForm:"input_inputForm__3JC1O"}},64:function(e,t,a){e.exports={containerForm:"form_containerForm__2nl7Q"}},7:function(e,t,a){e.exports={containerNissanStore:"container_containerNissanStore__QEgzu",containerFilterAndCars:"container_containerFilterAndCars__2TNmH",containerFilters:"container_containerFilters__1IlwD",filters:"container_filters__34RoL",containerProximoNissan:"container_containerProximoNissan__32Nfz",containerMainCars:"container_containerMainCars__2KyOw",containerLinkVolver:"container_containerLinkVolver__2NocI",Links:"container_Links__3vNA8",containerVolver:"container_containerVolver__3gHsc",containerNameAndSendEmail:"container_containerNameAndSendEmail__NJVCE",containerCarouselFormEmail:"container_containerCarouselFormEmail__17xLD",containerDetailModel:"container_containerDetailModel__2_q1r",containerCharacteristics:"container_containerCharacteristics__1chXr",contanerEngineWarranty:"container_contanerEngineWarranty__17GCe"}},95:function(e,t,a){},99:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.0cb634fe.chunk.js.map