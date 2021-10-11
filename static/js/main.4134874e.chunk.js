(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{163:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(50),c=a.n(s),l=(a(45),a(18)),i=a(3),o=a(19),d=(a(163),a(1));function u(e){var t=Object(n.useState)({real:void 0,imaginary:void 0,frequency:50,absolute:void 0,angle:void 0}),a=Object(l.a)(t,2),r=a[0],s=a[1];return Object(d.jsxs)("div",{className:"flex flex-col justify-center mb-10 items-center",children:[Object(d.jsx)("h2",{className:"text-l md:text-2xl mb-5 my-3",children:"Eingabe von Wechselgr\xf6\xdfen:"}),Object(d.jsxs)("ul",{className:"grid grid-cols-5 list-none justify-center items-center max-w-xl",children:[Object(d.jsx)("h3",{className:"col-span-2 md:text-2xl align-middle",style:{height:"min-content"},children:"Frequenz:"}),Object(d.jsx)("input",{type:"text",placeholder:"in Hz",value:r.frequency,className:"p-2 h-5/6 bg-gray-900 hover:bg-gray-700",onChange:function(e){s((function(t){return Object(i.a)(Object(i.a)({},t),{},{frequency:e.target.value})}))}}),Object(d.jsx)("span",{className:"md:text-2xl align-middle",children:"Hz"}),Object(d.jsx)("button",{type:"button",className:"md:ml-5 input-btn p-2",onClick:function(){console.log(r),e.dispatch({type:O.SET_FREQUENCY,payload:r.frequency})},children:"\xc4ndern"}),Object(d.jsx)("h3",{className:"mb-4 md:text-xl md:mt-2 col-span-5",children:"In der Komponentenform:"}),Object(d.jsx)("input",{type:"text",placeholder:"Realteil",className:"p-2 h-5/6 bg-gray-900 hover:bg-gray-700",onChange:function(e){s((function(t){return Object(i.a)(Object(i.a)({},t),{},{real:e.target.value})}))}}),Object(d.jsx)("span",{className:"m-2",children:"+"}),Object(d.jsx)("input",{type:"text",placeholder:"Imagin\xe4rteil",className:"p-2 h-5/6 bg-gray-900 hover:bg-gray-700",onChange:function(e){s((function(t){return Object(i.a)(Object(i.a)({},t),{},{imaginary:e.target.value})}))}}),Object(d.jsx)("span",{className:"m-2",children:"* i"}),Object(d.jsx)("button",{type:"button",className:"md:ml-5 input-btn p-2",onClick:function(){console.log(r),e.dispatch({type:O.ADD_ZEIGER,payload:{type:"kartesisch",real:r.real,imaginary:r.imaginary}}),e.dispatch({type:O.SET_FREQUENCY,payload:r.frequency})},children:"Eingabe"}),Object(d.jsx)("h3",{className:"mb-4 md:mt-2 md:text-xl col-span-5",children:"In der Polarform:"}),Object(d.jsx)("input",{type:"text",placeholder:"Betrag",className:"p-2 h-5/6 bg-gray-900 hover:bg-gray-700",onChange:function(e){s((function(t){return Object(i.a)(Object(i.a)({},t),{},{absolute:e.target.value})}))}}),Object(d.jsx)("span",{className:"m-2",children:"&"}),Object(d.jsx)("input",{type:"text",placeholder:"Winkel in Grad",className:"p-2 h-5/6 bg-gray-900 hover:bg-gray-700 col-span-2",onChange:function(e){s((function(t){return Object(i.a)(Object(i.a)({},t),{},{angle:e.target.value*Math.PI/180})}))}}),Object(d.jsx)("button",{type:"button",className:"md:ml-5 input-btn p-2",onClick:function(){console.log(r),e.dispatch({type:O.ADD_ZEIGER,payload:{type:"polar",absolute:r.absolute,angle:r.angle}}),e.dispatch({type:O.SET_FREQUENCY,payload:r.frequency})},children:"Eingabe"})]})]})}var g=a(2),p=a(183);function j(e){var t=g.d(e.store.zeigerarray,(function(e){return e.absolute})),a=g.f().domain([-1*t-.1*t,t+.1*t]).range([0,600]),r=g.f().domain([t+.1*t,-1*t-.1*t]).range([0,600]),s=g.a().scale(a),c=g.b().scale(r),l=Object(n.useRef)(null);return Object(n.useEffect)((function(){g.h(".axis-zeiger").remove(),g.g("#zeiger-svg").append("g").attr("class","axis-zeiger").attr("transform","translate(0, 300)").call(s),g.g("#zeiger-svg").append("g").attr("class","axis-zeiger").attr("transform","translate(300, 0)").call(c),g.g("#zeiger-svg").append("text").attr("x",240).attr("y",30).style("fill","white").text("Im"),g.g("#zeiger-svg").append("text").attr("x",550).attr("y",330).style("fill","white").text("Re")}),[e.store,c,s]),Object(d.jsx)("div",{className:"flex flex-col items-center mb-20",children:Object(d.jsxs)("div",{className:"relative",style:{width:600,height:600},children:[e.store.zeigerarray.map((function(e,t){return Object(d.jsxs)(p.a.div,{initial:{rotate:"0rad"},animate:{rotate:"-".concat(e.angle,"rad")},className:"absolute",style:{width:a(e.absolute)-300,top:297.5,left:300,height:5,backgroundColor:e.color,transformOrigin:"left"},children:[Object(d.jsx)("div",{className:"absolute right-0",style:{width:0,height:0,borderTop:"15px solid transparent",borderBottom:"15px solid transparent",borderLeft:"25px solid ".concat(e.color),transform:"translate(3.5px, -12.5px)"}}),Object(d.jsxs)("div",{className:"absolute right-0 -top-14 font-bold text-2xl",style:{transform:"rotate(".concat(e.angle,"rad)"),color:e.color},children:[Object(d.jsx)("u",{children:"U"}),Object(d.jsx)("sub",{children:e.nummer})]})]},t)})),Object(d.jsx)("svg",{id:"zeiger-svg",height:"600px",width:"600px",ref:l})]})})}var h=a(5);function b(e){var t=g.d(e.store.zeigerarray,(function(e){return e.absolute})),a=e.store.frequency,r=g.f().domain([-1*t-.1*t,t+.1*t]).range([600,0]),s=g.b().scale(r),c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var t=g.f().domain([0,.02]).range([50,c.current.getBoundingClientRect().width]),n=g.a().scale(t);g.h(".axis-spannung").remove(),g.h(".spannung-zeit-path").remove(),g.g("#spannung-svg").append("g").attr("class","axis-spannung").attr("transform","translate(0, 300)").call(n),g.g("#spannung-svg").append("g").attr("class","axis-spannung").attr("transform","translate(".concat(50,", 0)")).call(s),g.g("#spannung-svg").append("text").attr("x",0).attr("y",30).style("fill","white").text("U [V]"),g.g("#spannung-svg").append("text").attr("x",c.current.getBoundingClientRect().width-60).attr("y",350).style("fill","white").text("t [ms]");var l,i=Object(h.a)(e.store.zeigerarray);try{var o=function(){var e=l.value,n=g.e(0,.02,1e-4).map((function(t){return[t,e.absolute*Math.sin(2*Math.PI*a*t+e.angle)]})),s=g.c().context(null).x((function(e){return t(e[0])})).y((function(e){return r(e[1])}));g.g("#spannung-svg").append("g").attr("class","spannung-zeit-path").append("path").attr("d",s(n)).attr("stroke",e.color).attr("fill","none").attr("stroke-width","5")};for(i.s();!(l=i.n()).done;)o()}catch(d){i.e(d)}finally{i.f()}}),[e.store,a,r,s]),Object(d.jsx)("div",{className:"flex flex-col items-center",children:Object(d.jsx)("svg",{id:"spannung-svg",className:"w-full",height:600,ref:c})})}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return isNaN(+(Math.round(e+"e".concat(t))+"e-".concat(t)))?0:+(Math.round(e+"e".concat(t))+"e-".concat(t))};function x(e){return Object(d.jsxs)("div",{className:"my-10",children:[Object(d.jsxs)("ul",{className:"grid w-full gap-y-2",style:{gridTemplateColumns:"1fr 1fr 1fr 1fr min-content"},children:[Object(d.jsx)("strong",{children:"Zeigernummer"}),Object(d.jsx)("span",{children:"Spitzenspannung in Volt"}),Object(d.jsx)("span",{children:"Winkel in Grad"}),Object(d.jsx)("span",{children:"Komponentendarstellung"}),Object(d.jsx)("span",{className:"w-8"}),e.store.zeigerarray.map((function(t){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsxs)("strong",{children:[Object(d.jsx)("u",{children:"U"}),Object(d.jsx)("sub",{children:t.nummer})]}),Object(d.jsxs)("span",{children:[m(t.absolute,4)," V"]}),Object(d.jsx)("span",{children:m(180*t.angle/Math.PI,3)}),Object(d.jsxs)("span",{children:[m(t.real,3)," + ",m(t.imaginary,3)," * i"]}),Object(d.jsx)("span",{className:"w-8",children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"rounded-xl p-1 cursor-pointer input-btn",fill:"currentColor",viewBox:"0 0 16 16",onClick:function(){e.dispatch({type:O.DELETE_ZEIGER,payload:t.nummer})},children:[Object(d.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(d.jsx)("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})})]},t.nummer)}))]}),Object(d.jsxs)("button",{className:"mt-10 p-5 danger-btn",onClick:function(){e.dispatch({type:O.RESET})},children:[Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"inline w-10 mr-2",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{fillRule:"evenodd",d:"M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"}),Object(d.jsx)("path",{d:"M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"})]}),Object(d.jsx)("span",{children:"Reset"})]})]})}var f=a(51),y=a.n(f)()({count:100}),O={ADD_ZEIGER:"add-zeiger",SET_FREQUENCY:"set-frequency",DELETE_ZEIGER:"delete-zeiger",RESET:"reset"};var v=function(){var e=Object(n.useReducer)((function(e,t){switch(t.type){case O.ADD_ZEIGER:var a=Object(g.d)(e.zeigerarray,(function(e){return e.nummer}))+1;if(isNaN(a)&&(a=0),"kartesisch"===t.payload.type){var n=t.payload.real,r=t.payload.imaginary,s=Math.sqrt(Math.pow(n,2)+Math.pow(r,2)),c=Math.atan(r/n);return n>0&&r<0?c=Math.atan(r/n)+2*Math.PI:n<0&&(c=Math.atan(r/n)+Math.PI),{zeigerarray:[].concat(Object(o.a)(e.zeigerarray),[{nummer:a,real:n,imaginary:r,absolute:s,angle:c,color:y[a+1].hex()}])}}if("polar"===t.payload.type){var l=parseFloat(t.payload.absolute),d=parseFloat(t.payload.angle),u=Math.sin(d)*l,p=Math.cos(d)*l;return{zeigerarray:[].concat(Object(o.a)(e.zeigerarray),[{nummer:a,real:p,imaginary:u,absolute:l,angle:d,color:y[a+1].hex()}])}}break;case O.SET_FREQUENCY:return Object(i.a)(Object(i.a)({},e),{},{frequency:t.payload});case O.DELETE_ZEIGER:var j=void 0;for(var h in e.zeigerarray)e.zeigerarray[h].nummer===t.payload&&(j=h);var b=Object(o.a)(e.zeigerarray);return b.splice(j,1),Object(i.a)(Object(i.a)({},e),{},{zeigerarray:b});case O.RESET:return{zeigerarray:[],frequenz:void 0};default:return e}}),{zeigerarray:[],frequenz:void 0}),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"backgroundElement h-full w-full absolute"}),Object(d.jsxs)("div",{className:"App flex flex-col justify-center md:my-10 p-2 md:p-10 relative w-screen md:w-none",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{className:"text-xl md:text-3xl",children:"Addition frequenzgleicher Wechselgr\xf6\xdfen - Visualisierer"})}),Object(d.jsxs)("main",{children:[Object(d.jsx)(u,{dispatch:r}),Object(d.jsx)(j,{store:a,dispatch:r}),Object(d.jsx)(b,{store:a,dispatch:r}),Object(d.jsx)(x,{store:a,dispatch:r})]}),Object(d.jsx)("footer",{children:"\xa92021 by Julian Szigethy"})]})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,184)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),E()},45:function(e,t,a){}},[[180,1,2]]]);
//# sourceMappingURL=main.4134874e.chunk.js.map