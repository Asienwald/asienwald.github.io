(this["webpackJsonpasienwald.github.io"]=this["webpackJsonpasienwald.github.io"]||[]).push([[0],[,,,,,,,function(e,a,t){},,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){e.exports=t(55)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(13),i=t.n(c),r=(t(30),t(9)),m=t(1),s=(t(31),t(32),t(5));t(33);var o=function(e){var a=Object(n.useState)(e.isCenter),t=Object(s.a)(a,2),c=t[0],i=(t[1],Object(n.useState)(e.isRunning)),r=Object(s.a)(i,2),m=r[0],o=(r[1],Object(n.useState)(e.invert)),u=Object(s.a)(o,2),d=u[0];return u[1],l.a.createElement("div",{className:c?"player center-middle":"player",style:{animationName:m?"animate-running":"animate-idle",transform:"scaleX(".concat((function(){return d?-1:d&&m?1:1.1}),")")}})};t(34);var u=function(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),c=t[0],i=t[1],r=Object(n.useState)(e.moving),m=Object(s.a)(r,2),o=m[0],u=(m[1],function(e){return o?l.a.createElement("div",{className:"ground position-fixed",style:{right:"".concat(e,"vw"),animationPlayState:"running"}}):l.a.createElement("div",{className:"ground position-fixed",style:{animationPlayState:"paused",right:"0vw"}})}),d=function(){var e=[];e.push(u(0)),e.push(u(-100)),i(e)};return Object(n.useEffect)((function(){d()}),[]),Object(n.useEffect)((function(){d()}),[o]),l.a.createElement("div",{className:"text-center"},c,l.a.createElement("div",{className:"position-fixed text-white text-center footer size-20"},l.a.createElement("p",{className:"m-0 p-0"},"designed and coded by me in reactjs :D"),l.a.createElement("p",null,"\xa9 2020 Loh Kar Wei All Rights Reserved")))};t(35);var d=function(e){var a=Object(n.useState)([]),t=Object(s.a)(a,2),c=t[0],i=t[1],r=Object(n.useState)(e.moving),m=Object(s.a)(r,2),o=m[0],u=(m[1],function(a){return o?l.a.createElement("div",{className:"parallax",style:{right:"".concat(a,"vw"),backgroundImage:"url('".concat(e.image,"')"),animationDuration:"".concat(e.index,"s"),animationPlayState:"running"}}):l.a.createElement("div",{className:"parallax",style:{right:"".concat(a,"vw"),backgroundImage:"url('".concat(e.image,"')"),animationPlayState:"paused"}})});return Object(n.useEffect)((function(){!function(){var e=[];e.push(u(0)),e.push(u(-100)),i(e)}()}),[]),l.a.createElement("div",{className:"w-100 h-100"},c)};var E=function(e){return l.a.createElement("div",null,l.a.createElement(d,{image:"/assets/forest_bg.png",index:0,moving:!1}),l.a.createElement(d,{image:"/assets/forest_parallax_2_small.png",index:24,moving:e.moving}),l.a.createElement(d,{image:"/assets/forest_parallax_3_small.png",index:16,moving:e.moving}),l.a.createElement(d,{image:"/assets/forest_parallax_4_med.png",index:10,moving:e.moving}))};t(7);var v=function(e){var a=Object(m.f)(),t=Object(m.g)();return Object(n.useEffect)((function(){}),[t]),l.a.createElement("div",{className:"back-world"},l.a.createElement("div",{onClick:function(){a.push("/worldmap")},className:e.showBack?"d-flex flex-row text-white show":"d-flex flex-row text-white hide"},l.a.createElement("div",{className:"back-world-icon"}),l.a.createElement("p",{className:"size-30 my-auto text-left ml-3"},"back to world map")))};var p=function(e){return l.a.createElement("div",{className:"w-100 h-100"},l.a.createElement(v,{showBack:e.showBack}),l.a.createElement(u,{moving:e.moving}),l.a.createElement(E,{moving:e.moving}))};t(18);var f=function(e){var a=Object(m.f)(),t=Object(n.useState)(l.a.createElement("a",{className:"start-btn size-40 mb-2 mt-3",onClick:function(){r()}},"start")),c=Object(s.a)(t,2),i=c[0],r=(c[1],function(){a.push("/worldmap")});return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-10 col-lg-5 mx-auto position-relative home-panel"},l.a.createElement("div",{className:"h-100 w-100 d-flex flex-column justify-content-end text-white p-0"},l.a.createElement("h1",{className:"size-60"},"Hello World"),l.a.createElement("p",{className:"size-40 mb-3 mt-4"},"my name is ",l.a.createElement("span",{className:"color-red"},"kar wei")," and learning is my passion"),l.a.createElement("p",{className:"mt-3 size-30 color-orange"},"click here to find out more about me!"),i))))};var N=function(e){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(o,{isCenter:!0,isRunning:!0}),l.a.createElement(p,{moving:!0}))};var g=function(e){var a=Object(m.f)();return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-10 col-lg-5 mx-auto position-relative home-panel not-found-panel"},l.a.createElement("div",{className:"h-100 w-100 d-flex flex-column justify-content-end text-white p-0"},l.a.createElement("h1",{className:"size-60 color-red"},":("),l.a.createElement("h1",{className:"size-60 color-red"},"Not found!"),l.a.createElement("p",{className:"size-40 mb-3 mt-4"},"The page you are looking for is either in progress or don't exist!"),l.a.createElement("button",{className:"start-btn size-40 mb-2 mt-3",onClick:function(){a.push("/worldmap")}},"back to worldmap")))))};var h=function(e){return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(o,{isCenter:!0,isRunning:!1,invert:!1}),l.a.createElement(p,{moving:!1}))};t(19),t(20);t(41);var x=function(e){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-11 col-md-10 col-lg-8 ml-auto menu"},e.children)))},w={backgroundColor:"#E0E0E0",borderRadius:"50%",display:"inline-block",position:"relative",height:"4vw",width:"4vw"};var b=function(e){var a=Object(m.f)(),t=function(e){a.push("/".concat(e))};return l.a.createElement("div",{className:"map"},l.a.createElement("h1",{className:"mt-5 size-50 color-red"},"world map"),l.a.createElement("div",{className:"row text-white mx-5 map-links"},l.a.createElement("div",{className:"col-12 col-lg-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"d-flex flex-row map-link mt-4",onClick:function(){t("")}},l.a.createElement("div",{className:"circle-point",style:w},l.a.createElement("div",{className:"circle-point-inside"})),l.a.createElement("p",{className:"size-45 my-auto ml-4"},"Home")),l.a.createElement("div",{className:"d-flex flex-row map-link mt-4",onClick:function(){t("aboutme")}},l.a.createElement("div",{className:"circle-point"},l.a.createElement("div",{className:"circle-point-inside"})),l.a.createElement("p",{className:"size-45 my-auto ml-4"},"about me")),l.a.createElement("div",{className:"d-flex flex-row map-link mt-4",onClick:function(){t("education")}},l.a.createElement("div",{className:"circle-point"},l.a.createElement("div",{className:"circle-point-inside"})),l.a.createElement("p",{className:"size-45 my-auto ml-4"},"education")),l.a.createElement("div",{className:"d-flex flex-row map-link mt-4",onClick:function(){t("experience")}},l.a.createElement("div",{className:"circle-point"},l.a.createElement("div",{className:"circle-point-inside"})),l.a.createElement("p",{className:"size-45 my-auto ml-4"},"experience")),l.a.createElement("div",{className:"d-flex flex-row map-link mt-4",onClick:function(){t("achievements")}},l.a.createElement("div",{className:"circle-point"},l.a.createElement("div",{className:"circle-point-inside"})),l.a.createElement("p",{className:"size-45 my-auto ml-4"},"achievements"))))),l.a.createElement("div",{className:"col-12 col-lg-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"d-flex flex-row map-link mt-4",onClick:function(){t("projects")}},l.a.createElement("div",{className:"circle-point"},l.a.createElement("div",{className:"circle-point-inside"})),l.a.createElement("p",{className:"size-45 my-auto ml-4"},"projects")),l.a.createElement("div",{className:"d-flex flex-row map-link mt-4",onClick:function(){t("aboutthissite")}},l.a.createElement("div",{className:"circle-point"},l.a.createElement("div",{className:"circle-point-inside"})),l.a.createElement("p",{className:"size-45 my-auto ml-4"},"about this site")),l.a.createElement("div",{className:"d-flex flex-row map-link mt-4",onClick:function(){t("findme")}},l.a.createElement("div",{className:"circle-point"},l.a.createElement("div",{className:"circle-point-inside"})),l.a.createElement("p",{className:"size-45 my-auto ml-4"},"find me")))))))},k=t(24),y=t.n(k),j=(t(53),function(e){return function(a){return l.a.createElement("div",null,l.a.createElement(y.a,{transitionAppear:!0,transitionAppearTimeout:600,transitionEnterTimeout:600,transitionLeaveTimeout:200,transitionName:"SlideIn"},l.a.createElement(e,a)))}});var z=function(e){var a=j(x);return l.a.createElement("div",null,l.a.createElement(a,null,l.a.createElement(b,null)),l.a.createElement(p,{moving:!1}),l.a.createElement(o,{isCenter:!1,isRunning:!1,invert:!0}))};t(54);var O=function(e){return l.a.createElement("div",null,l.a.createElement("h1",{className:"color-orange size-50 text-left mb-3 title"},e.text))};var C=function(e){return l.a.createElement("div",{className:"player-stat"},l.a.createElement(O,{text:"player stats"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-lg-4 text-center"},l.a.createElement(o,{isCenter:!1,isRunning:!1,className:"red"}),l.a.createElement("p",{className:"mt-4 size-50 color-red"},"Lv. 1")),l.a.createElement("div",{className:"col-12 col-lg-8"},l.a.createElement("div",{className:"orange-panel size-30 red text-white text-left"},l.a.createElement("p",null,"player name: kar wei"),l.a.createElement("div",{className:"d-flex flex-row"},l.a.createElement("p",null,"sex: f"),l.a.createElement("p",{className:"tab"},"age: 18")),l.a.createElement("p",null,"occupation: it student at singapore polytechnic"),l.a.createElement("p",null,"current status:",l.a.createElement("br",null),l.a.createElement("span",{className:"size-25"},"fragile, handle with care"))))),l.a.createElement("div",{className:"row mt-3 second-row"},l.a.createElement("div",{className:"col-12 col-lg-4 text-center"},l.a.createElement("div",{className:"row orange-panel size-25 text-white text-left p-3 m-0"},l.a.createElement("div",{className:"col-12 col-md-6 col-lg-12"},l.a.createElement("p",{className:"size-35 color-green mb-1"},"likes"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("ul",{className:""},l.a.createElement("li",null,"mentaiko sushi"),l.a.createElement("li",null,"JROCK"),l.a.createElement("li",null,"guitars"),l.a.createElement("li",null,"cats"))))),l.a.createElement("div",{className:"col-12 col-md-6 col-lg-12"},l.a.createElement("p",{className:"size-35 color-purple mb-1 mt-3"},"dislikes"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("ul",{className:""},l.a.createElement("li",null,"bugs"))))))),l.a.createElement("div",{className:"col-12 col-lg-8"},l.a.createElement("div",{className:"orange-panel size-25 red text-white text-left p-3 player-skills"},l.a.createElement("p",{className:"color-lightblue size-35 mb-0 ml-3"},"skills"),l.a.createElement("div",{className:"row px-3"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("ul",null,l.a.createElement("li",null,"reactjs"),l.a.createElement("li",null,"ui/ux design"),l.a.createElement("li",null,"android studio"),l.a.createElement("li",null,"unity"),l.a.createElement("li",null,"nodejs"),l.a.createElement("li",null,"python"))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("ul",null,l.a.createElement("li",null,"infocomm security"),l.a.createElement("li",null,"ethical hacking"),l.a.createElement("li",null,"project management"),l.a.createElement("li",null,"leadership"))))))))};var S=function(e){var a=j(x);return l.a.createElement("div",null,l.a.createElement(a,null,l.a.createElement(C,null)),l.a.createElement(o,{isCenter:!1,isRunning:!0}),l.a.createElement(p,{moving:!0,showBack:!0}))};var R=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(r.a,{basename:""},l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",component:N}),l.a.createElement(m.a,{exact:!0,path:"/worldmap",component:z}),l.a.createElement(m.a,{exact:!0,path:"/aboutme",component:S}),l.a.createElement(m.a,{component:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.6afd54bf.chunk.js.map