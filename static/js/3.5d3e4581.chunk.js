webpackJsonp([3],{34:function(o,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r=e(0),l=e.n(r),a=function(o){if(window.Scrollamelo){var i=0,e=void 0;window.Scrollamelo.addEventListener("scroll",function(o){var r=window.Scrollamelo.scrollHeight-window.Scrollamelo.offsetHeight,l=Math.round(o.target.scrollTop/r*100);window.progressScrollingfiglio.style.width=l+"%";var a=window.Scrollamelo.scrollTop;e>a?++i>10&&(e=o.target.scrollTop,window.goToTop&&0!==window.Scrollamelo.scrollTop&&window.caricaWindow.classList.contains("caricaWindowOpenMobile")?(window.goToTop.classList.remove("goToTopHide"),window.arrowUp&&window.arrowUp.classList.remove("arrowUpHide")):(i=0,window.goToTop.classList.add("goToTopHide"),window.arrowUp&&window.arrowUp.classList.add("arrowUpHide"))):(i=0,window.goToTop.classList.add("goToTopHide"),window.arrowUp&&window.arrowUp.classList.add("arrowUpHide"),e=o.target.scrollTop),(e-a>3e3||void 0===e)&&(e=o.target.scrollTop)})}return window.caricaWindow&&window.caricaWindow.classList.contains("caricaWindowOpenMobile")?l.a.createElement("div",null,l.a.createElement("div",{id:"progressScrollingpadre",className:"progressScrollingpadre"},l.a.createElement("div",{id:"progressScrollingfiglio",className:"bg-white-30 progressScrollingfiglio"})),l.a.createElement("div",{onAnimationEnd:function(){window.goToTop.classList.remove("goToTopClick")},onClick:function(){window.goToTop.classList.add("goToTopClick"),window.Scrollamelo.scroll({top:0,behavior:"smooth"})},id:"goToTop",className:"goToTop goToTopShow goToTopHide "},l.a.createElement("div",{id:"arrowUp",className:"arrowUp arrowUpHide"}))):l.a.createElement("div",null,l.a.createElement("div",{id:"progressScrollingpadre",className:"progressScrollingpadre"},l.a.createElement("div",{id:"progressScrollingfiglio",className:"bg-white-30 progressScrollingfiglio"})),l.a.createElement("div",{id:"goToTop"}))};i.default=a}});
//# sourceMappingURL=3.5d3e4581.chunk.js.map