(function(e){function t(t){for(var i,r,s=t[0],a=t[1],o=t[2],p=0,u=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&u.push(c[r][0]),c[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);d&&d(t);while(u.length)u.shift()();return l.push.apply(l,o||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],i=!0,s=1;s<n.length;s++){var a=n[s];0!==c[a]&&(i=!1)}i&&(l.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},c={app:0},l=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/explorer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var d=a;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"359d":function(e,t,n){"use strict";n("860c")},5350:function(e,t,n){"use strict";n("9c4c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),c=(n("9911"),Object(i["g"])("div",{class:"dec"},null,-1)),l=Object(i["g"])("div",{class:"dec"},null,-1),r=Object(i["g"])("div",{class:"dec"},null,-1),s={class:"container"},a=Object(i["g"])("h2",{class:"title"},"Simple Local Files Explorer",-1),o={class:"menu-bar"},d=Object(i["g"])("div",{class:"menu-item"},"All Files",-1),p=Object(i["g"])("div",{class:"menu-item"},"Images",-1),u=Object(i["g"])("div",{class:"menu-item"},"Folders",-1),f={class:"main"},h={key:0,class:"current-url"};function b(e,t,n,b,g,j){var O=Object(i["o"])("FolderView");return Object(i["k"])(),Object(i["f"])(i["a"],null,[c,l,r,Object(i["g"])("div",s,[a,Object(i["g"])("div",o,[Object(i["g"])("div",{class:"menu-item",onClick:t[0]||(t[0]=function(){return j.resetChanges&&j.resetChanges.apply(j,arguments)})},"Reset"),d,p,u]),Object(i["g"])("div",f,[g.link?(Object(i["k"])(),Object(i["f"])("div",h,"Current link: "+Object(i["p"])(g.link),1)):Object(i["e"])("",!0),Object(i["h"])(O,{name:"root",folders:g.folders,files:g.files,depth:g.depth+1,current:g.current_depth,onClicked:j.changeFolder,key:g.current_depth,link:g.link},null,8,["folders","files","depth","current","onClicked","link"])])])],64)}n("ac1f"),n("1276"),n("a15b"),n("a434"),n("b0c0");Object(i["m"])("data-v-a07c7b3e");var g={class:"wrapper"},j=Object(i["g"])("div",{class:"decor"},null,-1),O={class:"folder"};function m(e,t,n,c,l,r){var s=Object(i["o"])("FileView"),a=Object(i["o"])("FolderView",!0);return Object(i["k"])(),Object(i["f"])("div",g,[Object(i["g"])("div",{class:"folder-field",style:Object(i["j"])({"padding-left":70*n.depth+"px"})},[Object(i["g"])("div",{class:Object(i["i"])(["folder-container",{active:r.isNotCurrent(n.name)}]),onClick:t[0]||(t[0]=function(t){return e.$emit("clicked",{folder:t.target.textContent,depth:n.depth})})},[j,Object(i["g"])("p",O,Object(i["p"])(n.name),1)],2),Object(i["g"])("div",{class:"files-container",style:Object(i["j"])({"padding-left":70*(n.depth?n.depth-1:1)+"px"})},[(Object(i["k"])(!0),Object(i["f"])(i["a"],null,Object(i["n"])(n.files,(function(e,t){return Object(i["k"])(),Object(i["d"])(i["b"],{key:t,name:"fade"},{default:Object(i["r"])((function(){return[Object(i["s"])(Object(i["h"])(s,{name:e.name,type:e.type,length:e.length},null,8,["name","type","length"]),[[i["q"],r.isContain(n.name)&&r.isNotCurrent(n.name)]])]})),_:2},1024)})),128))],4)],4),(Object(i["k"])(!0),Object(i["f"])(i["a"],null,Object(i["n"])(n.folders,(function(c,l){return Object(i["k"])(),Object(i["d"])(i["b"],{key:l,name:"fade"},{default:Object(i["r"])((function(){return[r.isContain(n.name)?(Object(i["k"])(),Object(i["d"])(a,{key:0,name:c.name,folders:c.folders,files:c.files,depth:n.depth+1,current:n.current,link:r.checkLink(),onClicked:t[1]||(t[1]=function(t){return e.$emit("clicked",t)})},null,8,["name","folders","files","depth","current","link"])):Object(i["e"])("",!0)]})),_:2},1024)})),128))])}Object(i["l"])();n("a9e3");Object(i["m"])("data-v-3dfbf492");var k={class:"file-item"},v={class:"specs"},y={class:"file"},x={class:"type"},C={class:"length"},w={class:"ext"};function _(e,t,n,c,l,r){return Object(i["k"])(),Object(i["f"])("div",k,[Object(i["g"])("div",{class:Object(i["i"])(["picture",r.extChecker()])},null,2),Object(i["g"])("div",v,[Object(i["g"])("p",y,Object(i["p"])(n.name),1),Object(i["g"])("p",x,"file type: "+Object(i["p"])(n.type),1),Object(i["g"])("p",C,"length: "+Object(i["p"])(n.length),1),Object(i["g"])("p",w,"extension: "+Object(i["p"])(r.extChecker()),1)])])}Object(i["l"])();var F={name:"FileView",props:{name:String,type:String,length:String},methods:{extChecker:function(){return this.name.split(".").pop()}}};n("624e");F.render=_,F.__scopeId="data-v-3dfbf492";var S=F,P={name:"FolderView",components:{FileView:S},emits:["clicked"],props:{name:String,folders:Array,files:Array,depth:Number,current:Number,link:String},methods:{childEvent:function(){this.$emit("clicked",this.$event)},checkLink:function(){return this.isContain(this.name)||(this.link+="/".concat(this.name)),this.link},isContain:function(e){if(this.link){var t=this.link,n=t.split("/").indexOf(e);return!(n<0)}},isNotCurrent:function(e){if(this.link){var t=this.link;return t=t.indexOf("/")<0?this.link.split():this.link.split("/"),t[t.length-1]==e}}}};n("359d");P.render=m,P.__scopeId="data-v-a07c7b3e";var V=P,N={folders:[{name:"assets",folders:[{name:"icons",folders:[],files:[{name:"close.svg",type:"image/svg",length:"1024"},{name:"open.svg",type:"image/svg",length:"1024"},{name:"exit.svg",type:"image/svg",length:"1024"},{name:"relocat.svg",type:"image/svg",length:"1024"}]},{name:"backgrounds",folders:[],files:[{name:"common.jpeg",type:"image/jpeg",length:"1024"},{name:"secondary.jpg",type:"image/jpeg",length:"1024"},{name:"overlay.png",type:"image/png",length:"1024"}]}],files:[]}],files:[{name:".browserslistrc",type:"application/octet-stream",length:"1024"},{name:".gitignore",type:"text/plain",length:"231"},{name:"babel.config.js",type:"application/javascript",length:"73"},{name:"package-lock.json",type:"application/json",length:"47941"}]},A={name:"App",components:{FolderView:V},data:function(){return{folders:N.folders,files:N.files,depth:-1,current_depth:-1,link:null}},methods:{changeFolder:function(e){if(this.link){var t=this.link;t=t.indexOf("/")<0?t.split():t.split("/"),this.isContain(t,e.folder)?(t.length=e.depth+1,t.indexOf("/")<0?this.link=t.join("/"):this.link=t.join("")):t.length-1<e.depth?this.link+="/".concat(e.folder):t.length-1==e.depth&&(t.pop(),this.link=t.join("/"),this.link+="/".concat(e.folder))}else this.link="".concat(e.folder)},isContain:function(e,t){var n=e.indexOf(t);return!(n<0)},removeEl:function(){var e=this.link.split("/").indexOf("backgrounds"),t=this.link;e>=0&&(t=t.split("/"),t.splice(e,1),t=t.join("/"),this.link=t)},resetChanges:function(){this.link=null,this.depth=-1,this.current_depth=-1}}};n("5350");A.render=b;var M=A;Object(i["c"])(M).mount("#app")},"624e":function(e,t,n){"use strict";n("6cee")},"6cee":function(e,t,n){},"860c":function(e,t,n){},"9c4c":function(e,t,n){}});
//# sourceMappingURL=app.06cad8c3.js.map