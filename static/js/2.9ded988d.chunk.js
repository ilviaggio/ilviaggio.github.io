webpackJsonp([2],{36:function(t,r,e){"use strict";function o(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)}function s(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function i(t,r){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?t:r}function n(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(t,r):t.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var p=e(0),a=e.n(p),l=e(46),h=function(){function t(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(r,e,o){return e&&t(r.prototype,e),o&&t(r,o),r}}(),c=function(t){function r(){s(this,r);var t=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return t.reloadImages=function(){for(var r=document.getElementsByClassName("card"),e=0;e<r.length;e++)/\d/.test(r.item(e).id)&&(300===t.state.h?(r.item(e).style.height="300px",r.item(e).style.width="auto"):(r.item(e).style.height="auto",r.item(e).style.width="85%"))},t.numeri=function(r){t.setState(function(t){return{imgArrListNum:t.imgArrListNum+1}}),t.state.imgArrListTrue[t.state.imgArrListNum+1]?t.state.imgArrList[t.state.imgArrList.length-1].key!==t.state.imgArrListTrue[t.state.imgArrListNum+1].key?t.setState({imgArrList:[].concat(o(t.state.imgArrList),[t.state.imgArrListTrue[t.state.imgArrListNum+1]])}):t.setState({imgArrList:[].concat(o(t.state.imgArrList),[t.state.imgArrListTrue[t.state.imgArrListNum+2]])}):t.props.titoloLoaded(),t.props.changeImages(t.props.searchfield)},t.reloadimgArrList=function(r,e,o){if("add"===r){var s=a.a.createElement(l.a,{numeri:t.numeri,click:t.props.click,prop:t.props.prop,link:t.props.robots[t.props.robots.length-1].link,robots:t.props.robots,key:t.props.robots[t.props.robots.length-1].id,id:t.props.robots[t.props.robots.length-1].id,name:t.props.robots[t.props.robots.length-1].name,email:t.props.robots[t.props.robots.length-1].email,tag:t.props.robots[t.props.robots.length-1].tag});t.state.imgArrList.splice(0,0,s)}else t.state.imgArrList.splice(o,1)},t.state={imgArrListNum:0,imgArrList:[],imgArrListTrue:[],imgArrListFiltered:[],scroll:0,complete:!1,h:300},t}return n(r,t),h(r,[{key:"componentDidUpdate",value:function(){var t=this;if(this.state.h!==this.props.prop.h&&this.setState(function(r){return{h:t.props.prop.h}},function(){return t.reloadImages()}),this.props.robots.length!==this.state.imgArrList.length||0===this.props.robots.length||this.state.complete||this.setState(function(t){if(!1===t.complete)return{complete:!0}}),this.state.complete){document.getElementById("titoloTop").classList.remove("titolo")}}},{key:"render",value:function(){for(var t=[],r=[],e=this.props.robots.length-1;e>=0;e--)e===this.props.robots.length-1&&0===this.state.imgArrList.length&&this.state.imgArrList.push(a.a.createElement(l.a,{numeri:this.numeri,click:this.props.click,prop:this.props.prop,link:this.props.robots[e].link,robots:this.props.robots,key:this.props.robots[e].id,id:this.props.robots[e].id,name:this.props.robots[e].name,email:this.props.robots[e].email,tag:this.props.robots[e].tag})),t[this.props.robots.length-1-e]=this.props.robots[e],r.push(a.a.createElement(l.a,{numeri:this.numeri,click:this.props.click,prop:this.props.prop,link:this.props.robots[e].link,robots:this.props.robots,key:this.props.robots[e].id,id:this.props.robots[e].id,name:this.props.robots[e].name,email:this.props.robots[e].email,tag:this.props.robots[e].tag}));if(this.state.imgArrListTrue=r,this.props.robots.length>0)for(var o=0;o<=this.state.imgArrList.length;o++)if(void 0!==this.state.imgArrList[o]){if(Number(this.props.robots[this.props.robots.length-1-o].id)<Number(this.state.imgArrList[o].key)){var s=o,i=Number(this.props.robots[this.props.robots.length-1-o].id)+1;console.log("rimuovi "+i),this.reloadimgArrList("elimina",i,s),console.log(this.props.robots),console.log(this.state.imgArrList);break}if(Number(this.props.robots[this.props.robots.length-1-o].id)>Number(this.state.imgArrList[o].key)&&Number(this.state.imgArrList[0].key)!==Number(this.props.robots[this.props.robots.length-1].id)){console.log("aggiungi "+this.props.robots[this.props.robots.length-1-o].id),console.log(Number(this.props.robots[this.props.robots.length-1-o].id)),console.log(Number(this.state.imgArrList[o].key)),this.reloadimgArrList("add");break}}return a.a.createElement("div",{id:"galleria"},this.state.imgArrList)}}]),r}(a.a.Component);r.default=c},46:function(t,r,e){"use strict";function o(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function s(t,r){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?t:r}function i(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(t,r):t.__proto__=r)}var n=e(0),p=e.n(n),a=function(){function t(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(r,e,o){return e&&t(r.prototype,e),o&&t(r,o),r}}(),l=function(t){function r(){o(this,r);var t=s(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return t.funzioneOnLoad=function(){var r=document.getElementById("img"+t.props.id);r.classList.toggle("displayNone"),r.classList.add("dib"),r.classList.add("cardDib"),r.width>=t.props.prop.inWidth&&r.classList.add("cardFixed"),t.props.numeri(t.props)},t.state={},t}return i(r,t),a(r,[{key:"componentDidUpdate",value:function(){console.log("updated")}},{key:"render",value:function(){var t="grow";"mobile"===this.props.prop.type&&(t="growMobile");var r=!0,e=this.props.link,o=e.lastIndexOf("/"),s=e.slice(o,e.length);"gif"===s.slice(s.length-3,s.length)&&(r=!1);var i=e;if("mobile"!==this.props.prop.type);else if(r){var n=e.slice(0,o),a=e.slice(o,e.length);i=n+"/okMobile"+a}return p.a.createElement("div",{className:"dib"},p.a.createElement("img",{id:"img"+this.props.id,className:"card br3 ma2 "+t+" shadow-5 displayNone",height:this.props.prop.h,width:this.props.prop.w,alt:""+this.props.id,src:""+i,onClick:this.props.click,tag:this.props.tag,onLoad:this.funzioneOnLoad}))}}]),r}(p.a.Component);r.a=l}});
//# sourceMappingURL=2.9ded988d.chunk.js.map