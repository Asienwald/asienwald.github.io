(this["webpackJsonpPortfolio-Website"]=this["webpackJsonpPortfolio-Website"]||[]).push([[0],[,,,,,,,,,,function(e,a,t){},,,,,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(18),i=t.n(l),r=(t(25),t(8)),s=t(1),m=(t(26),t(27),t(5));t(28);var o=function(e){var a=Object(n.useState)(e.isCenter),t=Object(m.a)(a,2),l=t[0],i=(t[1],Object(n.useState)(e.isRunning)),r=Object(m.a)(i,2),s=r[0],o=(r[1],Object(n.useState)(e.invert)),d=Object(m.a)(o,2),u=d[0];return d[1],c.a.createElement("div",{className:l?"player center-middle":"player",style:{animationName:s?"animate-running":"animate-idle",transform:"scaleX(".concat(u?-1:1.1,")")}})};t(29);var d=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],i=t[1],r=Object(n.useState)(e.moving),s=Object(m.a)(r,2),o=s[0],d=(s[1],function(e){return o?c.a.createElement("div",{className:"ground position-absolute",style:{right:"".concat(e,"vw"),animationPlayState:"running"}}):c.a.createElement("div",{className:"ground position-absolute",style:{animationPlayState:"paused",right:"0vw"}})}),u=function(){var e=[];e.push(d(0)),e.push(d(-100)),i(e)};return Object(n.useEffect)((function(){u()}),[]),Object(n.useEffect)((function(){u()}),[o]),c.a.createElement("div",{className:"text-center"},l,c.a.createElement("div",{className:"position-absolute text-white text-center footer size-20"},c.a.createElement("p",{className:"m-0 p-0"},"designed and coded by me in reactjs :D"),c.a.createElement("p",null,"\xa9 2020 Loh Kar Wei All Rights Reserved")))};t(30);var u=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],i=t[1],r=Object(n.useState)(e.moving),s=Object(m.a)(r,2),o=s[0],d=(s[1],function(a){return o?c.a.createElement("div",{className:"parallax",style:{right:"".concat(a,"vw"),backgroundImage:"url('".concat(e.image,"')"),animationDuration:"".concat(e.index,"s"),animationPlayState:"running"}}):c.a.createElement("div",{className:"parallax",style:{right:"".concat(a,"vw"),backgroundImage:"url('".concat(e.image,"')"),animationPlayState:"paused"}})});return Object(n.useEffect)((function(){!function(){var e=[];e.push(d(0)),e.push(d(-100)),i(e)}()}),[]),c.a.createElement("div",{className:"w-100 h-100"},l)};var v=function(e){return c.a.createElement("div",null,c.a.createElement(u,{image:"/assets/forest_bg.png",index:0,moving:!1}),c.a.createElement(u,{image:"/assets/forest_parallax_2_small.png",index:24,moving:e.moving}),c.a.createElement(u,{image:"/assets/forest_parallax_3_small.png",index:16,moving:e.moving}),c.a.createElement(u,{image:"/assets/forest_parallax_4_med.png",index:10,moving:e.moving}))};var E=function(e){return c.a.createElement("div",null,c.a.createElement(d,{moving:e.moving}),c.a.createElement(v,{moving:e.moving}))};t(15),t(10);var p=function(e){var a=Object(s.f)(),t=Object(n.useState)(c.a.createElement("a",{className:"start-btn size-40 mb-2 mt-3",onClick:function(){o()}},"start")),l=Object(m.a)(t,2),i=l[0],r=l[1],o=function(){r(c.a.createElement("a",{className:"start-btn size-40 mb-2 mt-3 blink",onAnimationEnd:function(){a.push("/worldmap")}},"start"))};return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-md-10 col-lg-5 mx-auto position-relative home-panel"},c.a.createElement("div",{className:"h-100 w-100 d-flex flex-column justify-content-end text-white p-0"},c.a.createElement("h1",{className:"size-60"},"Hello World"),c.a.createElement("p",{className:"size-40 mb-3 mt-4"},"my name is ",c.a.createElement("span",{className:"color-red"},"kar wei")," and learning is my passion"),c.a.createElement("p",{className:"mt-3 size-30 color-orange"},"click here to find out more about me!"),i))))};var f=function(e){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(o,{isCenter:!0,isRunning:!0}),c.a.createElement(E,{moving:!0}))};var N=function(e){var a=Object(s.f)();return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-md-10 col-lg-5 mx-auto position-relative home-panel not-found-panel"},c.a.createElement("div",{className:"h-100 w-100 d-flex flex-column justify-content-end text-white p-0"},c.a.createElement("h1",{className:"size-60 color-red"},"Not found!"),c.a.createElement("p",{className:"size-40 mb-3 mt-4"},"The page you are looking for is either in progress or don't exist!"),c.a.createElement("button",{className:"start-btn size-40 mb-2 mt-3",onClick:function(){a.push("/worldmap")}},"back to worldmap")))))};var h=function(e){return c.a.createElement("div",null,c.a.createElement(N,null),c.a.createElement(o,{isCenter:!0,isRunning:!1,invert:!1}),c.a.createElement(E,{moving:!1}))};t(17),t(36);var g=function(e){var a=Object(s.f)(),t=function(e){a.push("/".concat(e))};return c.a.createElement("div",{className:"h-100"},c.a.createElement("h1",{className:"color-red size-50 title"},"World Map"),c.a.createElement("div",{className:"position-relative h-100 big-screens"},c.a.createElement("div",{className:"circle-point education-circle"},c.a.createElement("div",{className:"circle-point-inside"}),c.a.createElement("p",{className:"size-45"},"education")),c.a.createElement("div",{className:"circle-point experience-circle"},c.a.createElement("div",{className:"circle-point-inside"}),c.a.createElement("p",{className:"size-45"},"experience")),c.a.createElement("div",{className:"circle-point about-circle",onClick:function(){t("aboutme")}},c.a.createElement("div",{className:"circle-point-inside"}),c.a.createElement("p",{className:"size-45"},"about me")),c.a.createElement("div",{className:"circle-point achievements-circle"},c.a.createElement("div",{className:"circle-point-inside"}),c.a.createElement("p",{className:"size-45"},"achievements")),c.a.createElement("div",{className:"circle-point projects-circle"},c.a.createElement("div",{className:"circle-point-inside"}),c.a.createElement("p",{className:"size-45"},"projects")),c.a.createElement("div",{className:"circle-point about-site-circle"},c.a.createElement("div",{className:"circle-point-inside"}),c.a.createElement("p",{className:"size-45"},"about this site")),c.a.createElement("div",{className:"circle-point find-circle"},c.a.createElement("div",{className:"circle-point-inside"}),c.a.createElement("p",{className:"size-45"},"find me")),c.a.createElement("div",{className:"horizontal-line horizontal-line-1"}),c.a.createElement("div",{className:"horizontal-line horizontal-line-2"}),c.a.createElement("div",{className:"horizontal-line horizontal-line-3"}),c.a.createElement("div",{className:"horizontal-line horizontal-line-4"}),c.a.createElement("div",{className:"horizontal-line horizontal-line-5"}),c.a.createElement("div",{className:"horizontal-line horizontal-line-6"}),c.a.createElement("div",{className:"horizontal-line horizontal-line-7"}),c.a.createElement("div",{className:"horizontal-line horizontal-line-8"}),c.a.createElement("div",{className:"vertical-line vertical-line-1"}),c.a.createElement("div",{className:"vertical-line vertical-line-2"}),c.a.createElement("div",{className:"vertical-line vertical-line-3"}),c.a.createElement("div",{className:"vertical-line vertical-line-4"})),c.a.createElement("div",{className:"small-screens row h-100"},c.a.createElement("div",{className:"col-10 mx-auto mt-3"},c.a.createElement("div",{className:"d-flex flex-row text-center mb-3 map-link",onClick:function(){t("aboutme")}},c.a.createElement("div",{className:"circle-point"},c.a.createElement("div",{className:"circle-point-inside"})),c.a.createElement("p",{className:"size-45 ml-3 my-auto"},"about me")),c.a.createElement("div",{className:"d-flex flex-row text-center mb-3 map-link",onClick:function(){t("education")}},c.a.createElement("div",{className:"circle-point"},c.a.createElement("div",{className:"circle-point-inside"})),c.a.createElement("p",{className:"size-45 ml-3 my-auto"},"education")),c.a.createElement("div",{className:"d-flex flex-row text-center mb-3 map-link",onClick:function(){t("experience")}},c.a.createElement("div",{className:"circle-point"},c.a.createElement("div",{className:"circle-point-inside"})),c.a.createElement("p",{className:"size-45 ml-3 my-auto"},"experience")),c.a.createElement("div",{className:"d-flex flex-row text-center mb-3 map-link",onClick:function(){t("achievements")}},c.a.createElement("div",{className:"circle-point"},c.a.createElement("div",{className:"circle-point-inside"})),c.a.createElement("p",{className:"size-45 ml-3 my-auto"},"achievements")),c.a.createElement("div",{className:"d-flex flex-row text-center mb-3 map-link",onClick:function(){t("projects")}},c.a.createElement("div",{className:"circle-point"},c.a.createElement("div",{className:"circle-point-inside"})),c.a.createElement("p",{className:"size-45 ml-3 my-auto"},"projects")),c.a.createElement("div",{className:"d-flex flex-row text-center mb-3 map-link",onClick:function(){t("aboutthissite")}},c.a.createElement("div",{className:"circle-point"},c.a.createElement("div",{className:"circle-point-inside"})),c.a.createElement("p",{className:"size-45 ml-3 my-auto"},"about this site")),c.a.createElement("div",{className:"d-flex flex-row text-center mb-3 map-link",onClick:function(){t("findme")}},c.a.createElement("div",{className:"circle-point"},c.a.createElement("div",{className:"circle-point-inside"})),c.a.createElement("p",{className:"size-45 ml-3 my-auto"},"find me")))))};var b=function(e){return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"col-12 col-md-10 col-lg-8 offset-lg-3 mr-lg-auto big-panel"},c.a.createElement("div",{className:"h-100 w-100 d-flex flex-column justify-content-start text-white p-0"},c.a.createElement(g,null))))};var x=function(e){return c.a.createElement("div",null,c.a.createElement(E,{moving:!1}),c.a.createElement(o,{isCenter:!1,isRunning:!1,invert:!0}),c.a.createElement(b,null))};var z=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(r.a,{basename:""},c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:f}),c.a.createElement(s.a,{exact:!0,path:"/worldmap",component:x}),c.a.createElement(s.a,{component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.fb5d8309.chunk.js.map