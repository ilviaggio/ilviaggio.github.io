webpackJsonp([6],{39:function(e,t,a){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),s=a.n(r),l=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),c=function(e){function t(){i(this,t);var e=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.consoleEvent=function(e){console.log(e)},e.onLinkChange=function(t){var a=document.getElementById("imgSfondoImg"),i=document.getElementById("avatar").files[0],n=new FileReader;n.addEventListener("load",function(){a.src=n.result},!1),i?n.readAsDataURL(i):a.src="";var o=t.target.value.indexOf("fakepath");e.setState({link:t.target.value.slice(o+9)})},e.onTagChange=function(t){e.setState({tag:t.target.value})},e.onSubmitFoto=function(){if(""===e.state.link||""===e.state.tag);else{var t=0;t=e.state.tag.search("nascondi")>=0?-1*(e.props.lastRobotId()+1):1*(e.props.lastRobotId()+1),fetch("https://agile-forest-45123.herokuapp.com/fotoput",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({link:"https://dolfo.altervista.org/verso/images/"+e.state.link,tag:"show "+e.state.tag,robotsLength:t})}).then(function(t){e.props.fetchFoto()})}},e.funzioneKBEventEccolo=function(t){"mobile"===e.state.type&&"negato"!==e.state.access&&13===t.which&&window.barracerca.blur()},e.showCaricamento=function(t){""===e.state.link||""===e.state.tag||(e.setState({caric:"displayInline"}),"Annulla"!==window.buttonInvia.innerHTML?window.buttonInvia.innerHTML="Annulla":(window.buttonInvia.innerHTML="Invia",setTimeout(e.props.nonCarica,500)),window.divfiglio.classList.contains("bg-white-30")||window.divfiglio.classList.toggle("bg-white-30"))},e.nonCaricaLate=function(t){"abort"!==t&&e.onSubmitFoto(),window.avatar.value=null,window.lastname.value=null,setTimeout(e.cleanBar,500)},e.cleanBar=function(){window.divfiglio.innerHTML="",window.divfiglio.style.width="0%"},e.freimCaricato=function(t){""===e.state.link||""===e.state.tag||(e.onSubmitFoto(),e.props.nonCarica())},e.divfiglioCaricato=function(e){console.log(e)},e.formSubmit=function(t){if("0%"===window.divfiglio.style.width){var a=function(e){l.abort(),window.divfiglio.innerHTML="annullato",c("abort"),console.log("caricamento annullato")},i=function(e){window.divfiglio.innerHTML="caricamento completato",window.buttonInvia.innerHTML="Invia",document.getElementById("imgSfondoImg").src="",console.log("caricamento completato")},n=function(e){window.divfiglio.innerHTML="errore nel caricamento",console.log("errore nel caricamento")},o=function(e){var t=e.loaded/e.total*100;window.divfiglio.style.width=t+"%",100===Math.round(t)?window.divfiglio.innerHTML="99%":window.divfiglio.innerHTML=Math.round(t)+"%"},r=document.forms.namedItem("fileinfo");console.log("nuovo xhr");var s=new FormData(r),l=new XMLHttpRequest;l.open("POST","https://dolfo.altervista.org/verso/carica.php",!0),l.upload.addEventListener("progress",o,!1),l.addEventListener("error",n,!1),l.addEventListener("abort",a,!1),l.addEventListener("load",i,!1);var c=e.nonCaricaLate;l.addEventListener("load",c,!1),window.buttonInvia.addEventListener("click",function(){l.abort()}),l.send(s),t.preventDefault()}},e.maximize=function(){var t=document.getElementById("caricaWindow"),a=document.getElementById("imgSfondo");t.classList.contains("caricaWindowMinimizedMobile")?t.classList.remove("caricaWindowMinimizedMobile"):t.classList.add("caricaWindowMinimizedMobile"),a.classList.contains("imgSfondoDrop")?a.classList.remove("imgSfondoDrop"):a.classList.add("imgSfondoDrop"),e.setState({minimized:!1})},e.minimize=function(){var t=document.getElementById("caricaWindow"),a=document.getElementById("imgSfondo");t.classList.contains("caricaWindowMinimizedMobile")?t.classList.remove("caricaWindowMinimizedMobile"):t.classList.add("caricaWindowMinimizedMobile"),a.classList.contains("imgSfondoDrop")?a.classList.remove("imgSfondoDrop"):a.classList.add("imgSfondoDrop"),e.setState({minimized:!0})},e.closeW=function(){document.getElementById("caricaWindow").classList.add("caricaWindowOpenMobile"),e.setState({minimized:!1})},e.state={link:"",tag:"",stato:null,caric:"displayNone",minimized:!1},e}return o(t,e),l(t,[{key:"componentDidMount",value:function(){window.divfiglio.addEventListener("change",this.divfiglioCaricato),window.addEventListener("load",this.consoleEvent),document.forms.namedItem("fileinfo").addEventListener("submit",this.formSubmit,!1)}}]),l(t,[{key:"render",value:function(){return window.innerWidth>=1057&&"desk"===this.props.state.type?s.a.createElement("div",{id:"caricaWindow",className:"caricaWindowStartDesk caricaWindowOpenMobile "},s.a.createElement("form",{name:"fileinfo",id:"eccol",encType:"multipart/form-data",action:"https://dolfo.altervista.org/verso/carica.php",method:"POST",target:"iframe_a",className:""},s.a.createElement("div",{className:" black-80  ba b--transparent"},s.a.createElement("div",{className:" black-80  ba b--transparent alignRight"},this.state.minimized?s.a.createElement("img",{onClick:this.maximize,id:"maximize",src:"https://dolfo.altervista.org/verso/images/ilviaggio/maximize.png",alt:"",height:"20px",width:"20px"}):s.a.createElement("img",{onClick:this.minimize,id:"minimize",src:"https://dolfo.altervista.org/verso/images/ilviaggio/minimize.png",alt:"",height:"20px",width:"20px"}),s.a.createElement("img",{onClick:this.closeW,id:"closeW",src:"https://dolfo.altervista.org/verso/images/ilviaggio/closeW.png",alt:"",height:"20px",width:"20px"})),s.a.createElement("div",{id:"imgSfondo",className:"imgSfondo"},s.a.createElement("img",{id:"imgSfondoImg",src:"",alt:""})),s.a.createElement("div",{style:{lineHeight:"0.01"},id:"divpapa",className:"  barraCaricamentoMobile"},s.a.createElement("div",{id:"divfiglio",style:{width:"0%",padding:"10px"},className:" figlioBorder b"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("input",{onChange:this.onLinkChange,type:"file",name:"avatar",required:!0,id:"avatar",className:" w-80 pa2 input-reset pointer ba bg-transparent form-control"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"lastname"},"Tag"),s.a.createElement("input",{onChange:this.onTagChange,type:"text",name:"lastname",required:!0,id:"lastname",className:"w-90 mb3 ph3 pv2 input-reset ba b--black bg-transparent dib btn btn-primary form-control"})),s.a.createElement("div",{className:"form-group col-md-6"},s.a.createElement("button",{id:"buttonInvia",onClick:this.showCaricamento,className:"b ph3 mr2 w-40 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib btn btn-primary"},"Invia"))),s.a.createElement("iframe",{src:"",id:"freim",className:"h4 w-90 displayNone",name:"iframe_a",title:"This is a second title"}))):s.a.createElement("div",{id:"caricaWindow",className:"caricaWindowStartMobile caricaWindowOpenMobile "},s.a.createElement("form",{name:"fileinfo",id:"eccol",encType:"multipart/form-data",action:"https://dolfo.altervista.org/verso/carica.php",method:"POST",target:"iframe_a",className:""},s.a.createElement("div",{className:" black-80  ba b--transparent"},s.a.createElement("div",{className:" black-80  ba b--transparent alignRight"},this.state.minimized?s.a.createElement("img",{onClick:this.maximize,id:"maximize",src:"https://dolfo.altervista.org/verso/images/ilviaggio/maximize.png",alt:"",height:"20px",width:"20px"}):s.a.createElement("img",{onClick:this.minimize,id:"minimize",src:"https://dolfo.altervista.org/verso/images/ilviaggio/minimize.png",alt:"",height:"20px",width:"20px"}),s.a.createElement("img",{onClick:this.closeW,id:"closeW",src:"https://dolfo.altervista.org/verso/images/ilviaggio/closeW.png",alt:"",height:"20px",width:"20px"})),s.a.createElement("div",{id:"imgSfondo",className:"imgSfondo"},s.a.createElement("img",{id:"imgSfondoImg",src:"",alt:""})),s.a.createElement("div",{style:{lineHeight:"0.01"},id:"divpapa",className:"  barraCaricamentoMobile"},s.a.createElement("div",{id:"divfiglio",style:{width:"0%",padding:"10px"},className:" figlioBorder b"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("input",{onChange:this.onLinkChange,type:"file",name:"avatar",required:!0,id:"avatar",className:" w-80 pa2 input-reset pointer ba bg-transparent form-control"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"lastname"},"Tag"),s.a.createElement("input",{onChange:this.onTagChange,type:"text",name:"lastname",required:!0,id:"lastname",className:"w-90 mb3 ph3 pv2 input-reset ba b--black bg-transparent dib btn btn-primary form-control"})),s.a.createElement("div",{className:"form-group col-md-6"},s.a.createElement("button",{id:"buttonInvia",onClick:this.showCaricamento,className:"b ph3 mr2 w-40 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib btn btn-primary"},"Invia"))),s.a.createElement("iframe",{src:"",id:"freim",className:"h4 w-90 displayNone",name:"iframe_a",title:"This is a second title"})))}}]),t}(s.a.Component);t.default=c}});
//# sourceMappingURL=6.7aefbfe4.chunk.js.map