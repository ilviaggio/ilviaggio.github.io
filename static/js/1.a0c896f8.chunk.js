webpackJsonp([1],{33:function(e,a,t){"use strict";function i(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function o(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function l(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var n=t(0),r=t.n(n),c=t(45),s=function(){function e(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(a,t,i){return t&&e(a.prototype,t),i&&e(a,i),a}}(),m=function(e){function a(){var e,t,l,n;i(this,a);for(var r=arguments.length,c=Array(r),s=0;s<r;s++)c[s]=arguments[s];return t=l=o(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(c))),l.reloadPage=function(){window.location.reload(!0)},l.mostraCerca=function(){window.barracerca.classList.contains("opacitynullSearch")?(window.barracerca.classList.replace("opacitynullSearch","opacitytopSearch"),window.titoloTop.classList.replace("opacitytopTitolo","opacitynullTitolo"),window.barracerca.focus()):(window.barracerca.classList.replace("opacitytopSearch","opacitynullSearch"),window.titoloTop.classList.replace("opacitynullTitolo","opacitytopTitolo"),window.barracerca.blur())},n=t,o(l,n)}return l(a,e),s(a,[{key:"render",value:function(){var e=void 0;e=!0!==this.props.amIOffline&&window.clientInformation.onLine?window.clientInformation.connection.effectiveType:"sei offline";var a=e,t=this.props,i="titolo";t.props.titoloLoaded&&(i="");var o="opacitytopTitolo";return window.barracerca&&window.barracerca.classList.contains("opacitytopSearch")&&(o="opacitynullTitolo"),0===t.props.check&&"mobile"!==t.props.type?(console.log("0&&!==mobile"),r.a.createElement("div",{id:"topWrapper",className:"Row "},r.a.createElement("div",{id:"imgCarica",onClick:t.mostraMenu,className:"z-1 absolute top-1 left-2"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/menu.png",alt:"Menu",height:"69",width:"69"})),r.a.createElement("div",{id:"menu",className:"absolute widthmenunull menu"},r.a.createElement("div",{id:"imgMenuX",onClick:t.mostraMenu,className:"z-1 absolute top-1 left-2"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/close.png",alt:"close",height:"69",width:"69"})),r.a.createElement("div",{id:"caricaUl",onClick:function(){t.mostraFormCaricaImmagine()},className:"caricaUl opacitynullII"},r.a.createElement("h1",{className:"f3 pointer underline-hover"}," Carica Immagine ")),r.a.createElement("div",{id:"versione",className:"versione opacitynullII"},r.a.createElement("h4",{onClick:this.reloadPage,style:{margin:"4%"}},"Versione ","4.2.2"),r.a.createElement("h4",{onClick:this.reloadPage,style:{margin:"4%"}},"Connessione: ",a))),r.a.createElement("div",{onClick:t.mostraMenu,id:"menuComplementare",className:"absolute menuComplementare bg-black"}),r.a.createElement("div",{className:" displayInline Column alignCenter "},r.a.createElement("h1",{id:"titoloTop",className:"z-0 "+o+" f2 "+i}," Verso l'infinito... E oltre ")),r.a.createElement("div",{id:"searchBox",style:{top:"1.5em"},className:" right-0 left-0 absolute top-2  Column alignCenter"},r.a.createElement(c.a,{type:!0,nome:t.props.user.nome,onsearchChange:t.searchChange})),r.a.createElement("div",{id:"imgCerca",onClick:this.mostraCerca,className:"z-1 absolute top-2 right-2"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/search.png",alt:"Cerca",height:"49",width:"49"})))):"mobile"===t.props.type?0===t.props.check?(console.log("0&&===mobile"),r.a.createElement("div",{id:"topWrapper",className:"rowFixed "},r.a.createElement("div",{id:"imgCarica",onClick:t.mostraMenu,className:"z-1 absolute top14 left-1"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/menu.png",alt:"Menu",height:"41",width:"41"})),r.a.createElement("div",{id:"menu",className:"absolute widthmenunull menu"},r.a.createElement("div",{id:"imgMenuX",onClick:t.mostraMenu,className:"z-1 absolute top14 left-1"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/close.png",alt:"close",height:"41",width:"41"})),r.a.createElement("div",{id:"caricaUl",onClick:function(){t.mostraFormCaricaImmagine()},className:"caricaUl opacitynullII"},r.a.createElement("h1",{className:"f3 pointer underline-hover"}," Carica Immagine ")),r.a.createElement("div",{id:"versione",className:"versione opacitynullII"},r.a.createElement("h4",{onClick:this.reloadPage,style:{margin:"4%"}},"Versione ","4.2.2"),r.a.createElement("h4",{onClick:this.reloadPage,style:{margin:"4%"}},"Connessione: ",a))),r.a.createElement("div",{onTouchStart:t.mostraMenu,id:"menuComplementare",className:"absolute menuComplementare bg-black"}),r.a.createElement("div",{className:" displayInline Column alignCenter "},r.a.createElement("h2",{id:"titoloTop",className:"z-0 "+o+" "+i},"  Verso l'infinito... E oltre ")),r.a.createElement("div",{style:{top:"1em"},id:"searchBox",className:" right-0 left-0 absolute top-2  Column alignCenter"},r.a.createElement(c.a,{type:!0,nome:t.props.user.nome,onsearchChange:t.searchChange})),r.a.createElement("div",{id:"imgCerca",onClick:this.mostraCerca,className:"z-1 top21 absolute right-1"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/search.png",alt:"Cerca",height:"27",width:"27"})))):(console.log("1&&===mobile"),r.a.createElement("div",{id:"topWrapper",className:"rowFixed "},r.a.createElement("div",{id:"imgCarica",onClick:t.mostraMenu,className:"z-1 absolute top14 left-1"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/menu.png",alt:"Menu",height:"41",width:"41"})),r.a.createElement("div",{id:"menu",className:"absolute widthmenunull menu"},r.a.createElement("div",{id:"imgMenuX",onClick:t.mostraMenu,className:"z-1 absolute top14 left-1"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/close.png",alt:"close",height:"41",width:"41"})),r.a.createElement("div",{id:"caricaUl",onClick:function(){t.mostraFormCaricaImmagine()},className:"caricaUl opacitynullII"},r.a.createElement("h1",{className:"f3 pointer underline-hover"}," Carica Immagine ")),r.a.createElement("div",{id:"versione",className:"versione opacitynullII"},r.a.createElement("h4",{onClick:this.reloadPage,style:{margin:"4%"}},"Versione ","4.2.2"),r.a.createElement("h4",{onClick:this.reloadPage,style:{margin:"4%"}},"Connessione: ",a))),r.a.createElement("div",{onTouchStart:t.mostraMenu,id:"menuComplementare",className:"absolute menuComplementare bg-black"}),r.a.createElement("div",{className:" displayInline Column alignCenter "},r.a.createElement("h2",{id:"titoloTop",className:"z-0 "+o+" "+i},"  Verso l'infinito... E oltre ")),r.a.createElement("div",{style:{top:"1em"},id:"searchBox",className:"  right-0 left-0 absolute   Column alignCenter"},r.a.createElement(c.a,{type:!0,nome:t.props.user.nome,onsearchChange:t.searchChange})),r.a.createElement("div",{id:"imgCerca",onClick:this.mostraCerca,className:"z-1 top21 absolute right-2"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/search.png",alt:"Cerca",height:"27",width:"27"})))):window.innerWidth>=1057?(console.log("0&&!==mobile>=1057"),r.a.createElement("div",{id:"topWrapper",className:"Row "},r.a.createElement("div",{className:"Column alignCenter"},r.a.createElement("h1",{className:"f3 pointer underline-hover displayInline",onClick:function(){t.mostraFormCaricaImmagine()}},"Carica Immagine")),r.a.createElement("div",{className:"Column alignCenter"},r.a.createElement("h1",{id:"titoloTop",className:"f2 "+i}," Verso l'infinito... E oltre ")),r.a.createElement("div",{className:"Column alignCenter"},r.a.createElement(c.a,{type:!1,nome:t.props.user.nome,onsearchChange:t.searchChange})))):(console.log("1&&!==mobile<=1057"),r.a.createElement("div",{id:"topWrapper",className:"Row "},r.a.createElement("div",{id:"imgCarica",onClick:t.mostraMenu,className:"z-1 absolute top-1 left-2"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/menu.png",alt:"Menu",height:"69",width:"69"})),r.a.createElement("div",{id:"menu",className:"absolute widthmenunull menu"},r.a.createElement("div",{id:"imgMenuX",onClick:t.mostraMenu,className:"z-1 absolute top-1 left-2"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/close.png",alt:"close",height:"69",width:"69"})),r.a.createElement("div",{id:"caricaUl",onClick:function(){t.mostraFormCaricaImmagine()},className:"caricaUl opacitynullII"},r.a.createElement("h1",{className:"f3 pointer underline-hover"}," Carica Immagine ")),r.a.createElement("div",{id:"versione",className:"versione opacitynullII"},r.a.createElement("h4",{className:"pointer",onClick:this.reloadPage,style:{margin:"4%"}},"Versione ","4.2.2"),r.a.createElement("h4",{onClick:this.reloadPage,style:{margin:"4%"}},"Connessione: ",a))),r.a.createElement("div",{onClick:t.mostraMenu,id:"menuComplementare",className:"absolute menuComplementare bg-black"}),r.a.createElement("div",{className:" displayInline Column alignCenter "},r.a.createElement("h1",{id:"titoloTop",className:"z-0 "+o+" f2 "+i}," Verso l'infinito... E oltre ")),r.a.createElement("div",{id:"searchBox",style:{top:"1.5em"},className:"  right-0 left-0 absolute top-2 Column alignCenter"},r.a.createElement(c.a,{type:!0,nome:t.props.user.nome,onsearchChange:t.searchChange})),r.a.createElement("div",{id:"imgCerca",onClick:this.mostraCerca,className:"z-1 absolute top-2 right-2"},r.a.createElement("img",{src:"https://dolfo.altervista.org/verso/images/ilviaggio/search.png",alt:"Cerca",height:"49",width:"49"}))))}}]),a}(r.a.Component);a.default=m},45:function(e,a,t){"use strict";var i=t(0),o=t.n(i),l=function(e){var a=e.type,t=e.nome,i=(e.searchfield,e.onsearchChange),l="";l="Broccola"===t||"broccola"===t?"Ciao Broccola \u2665":"Ciao "+t;var n="opacitynullSearch";return!1===a&&(n=""),o.a.createElement("input",{id:"barracerca",className:"zIndexlow tc b--green bg-lightest-blue padding4rem "+n,type:"search",placeholder:l,onChange:i})};a.a=l}});
//# sourceMappingURL=1.a0c896f8.chunk.js.map