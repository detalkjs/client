(()=>{var t={874:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([t.id,".detalk-container .input-data {\n\tdisplay: flex;\n\tflex-direction: row;\n}\n.detalk-container .avatar img {\n\tborder-radius: 6px;\n\tflex-shrink: 0;\n\theight: 2.5rem;\n\twidth: 2.5rem;\n\toverflow: hidden;\n\ttext-align: center;\n\tborder-radius: 5px;\n    user-select: none;\n}\n\n.detalk-container .input-data .input-area {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-left: 0.5rem;\n}\n\n.detalk-container .border_error {\n\tborder: 1px solid red!important;\n}\n.detalk-container .input-data .input-area input {\n\tmargin-bottom: 0.5rem;\n\tborder-top-left-radius: 0;\n\tborder-bottom-left-radius: 0;\n\theight: 32px;\n\tline-height: 32px;\n\tcolor: currentColor;\n\tbackground-color: transparent;\n\tborder-color: rgba(144, 147, 153, 0.31);\n\t-webkit-appearance: none;\n\tbackground-color: #fff;\n\tborder-radius: 4px;\n\tborder: 1px solid #dcdfe6;\n\tbox-sizing: border-box;\n\tcolor: rgba(0, 0, 0, 0.8);\n\tdisplay: inline-block;\n\theight: 40px;\n\tline-height: 40px;\n\toutline: 0;\n\tpadding: 0 15px;\n\ttransition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n\twidth: 100%;\n    font-family: monospace;\n}\n\n/* @media screen and (min-width: 568px) {\n    .detalk-container .input-data .input-area input {\n        width: 32%!important;\n    }\n    .detalk-container .input-data .input-area {\n        display: inline;\n    }\n    .detalk-container .input-data .input-area .mgr-2p {\n        margin-right: 1.5%;\n    }\n} */\n\n.detalk-container ::-webkit-scrollbar {\n    width: 1px;\n    height: 3px;\n}\n\n.detalk-container ::-webkit-scrollbar-thumb {\n    border-radius: 2px;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n    background: rgba(0, 0, 0, 0.2);\n}\n\n.detalk-container ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);\n    border-radius: 0;\n    background: rgba(0, 0, 0, 0.1);\n}\n\n.detalk-container .reply {\n\tdisplay: flex;\n}\n.detalk-container .input-data .input-area textarea {\n    margin-bottom: 0.5rem;\n\tborder-top-left-radius: 0;\n\tborder-bottom-left-radius: 0;\n\theight: 32px;\n\tcolor: currentColor;\n\tbackground-color: transparent;\n\tborder-color: rgba(144, 147, 153, 0.31);\n\t-webkit-appearance: none;\n\tbackground-color: #fff;\n\tborder-radius: 4px;\n\tborder: 1px solid #dcdfe6;\n\tbox-sizing: border-box;\n\tcolor: rgba(0, 0, 0, 0.8);\n\tdisplay: inline-block;\n\theight: 40px;\n\tline-height: 40px;\n\toutline: 0;\n\tpadding: 5px 15px;\n\ttransition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\n\twidth: 100%;\n    resize: vertical;\n    font-family: monospace;\n    line-height: 1.2rem;\n}\n\n\n.detalk-container .action-btn-group {\n\tposition: relative;\n\tmargin-top: 0;\n\tmargin-bottom: 1rem;\n\tmargin-left: 3.5rem;\n\talign-items: center;\n\tjustify-content: flex-end;\n\tdisplay: flex;\n}\n\n.detalk-container .action-btn-group .action-btn .sec-btn {\n\tbackground-color: rgba(144, 147, 153, 0.063);\n\tborder-color: rgba(144, 147, 153, 0.31);\n    border-radius: 6px;\n}\n\n.detalk-container .action-btn-group .action-btn .word-limit {\n    text-align: end;\n    opacity: 0.7;\n    font-size: 0.9rem;\n    margin-right: 0.4rem;\n}\n.detalk-container .action-btn-group .action-btn .fst-btn.disabled {\n\tcolor: rgba(255, 255, 255, 0.8);\n\tbackground-color: rgba(64, 158, 255, 0.5);\n\tborder-color: transparent;\n    border-radius: 6px;\n    cursor: not-allowed;\n}\n\n.detalk-container .action-btn-group .action-btn .fst-btn.enabled {\n\tcolor: rgba(255, 255, 255, 1);\n\tbackground-color: rgba(64, 158, 255, 1);\n\tborder-color: transparent;\n    border-radius: 6px;\n    cursor: pointer;\n}\n\n.detalk-container .cm-btn {\n\tpadding: 9px 15px;\n\tfont-size: 12px;\n\tborder-radius: 3px;\n\tdisplay: inline-block;\n\tline-height: 1;\n\twhite-space: nowrap;\n\tcursor: pointer;\n\tbackground: #fff;\n\tborder: 1px solid #dcdfe6;\n\tcolor: #606266;\n\t-webkit-appearance: none;\n\ttext-align: center;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\toutline: 0;\n\tmargin: 0;\n\t-webkit-transition: 0.1s;\n\ttransition: 0.1s;\n\tfont-weight: 500;\n    user-select: none;\n\tpadding: 12px 20px;\n\tfont-size: 14px;\n\tborder-radius: 4px;\n}\n\n.detalk-container .mr-cmt {\n\tmargin-top: 1rem;\n\tdisplay: flex;\n\tflex-direction: row;\n\tword-break: break-all;\n    padding: 10px;\n    border-radius: 6px;\n    transition: all .3s;\n}\n.detalk-container .mr-cmt:hover {\n    background: rgba(0, 0, 0, 0.05);\n    cursor: pointer;\n}\n.detalk-container .hover_show {\n\topacity: 0;\n\ttransition: all .3s;\n}\n.detalk-container .mr-cmt:hover .hover_show {\n    opacity: 0.6;\n}\n\n.detalk-container .mr-cmt .cmt-main {\n\tmargin-left: 1rem;\n\tflex: 1;\n\twidth: 0;\n}\n\n.detalk-container .mr-cmt .cmt-main .cmt-data {\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n    user-select: none;\n}\n\n.detalk-container .mr-cmt .cmt-main .cmt-content {\n    margin-top: 0.3rem;\n\topacity: 0.8;\n}\n\n.comment-container._detalk_loading_container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 45px;\n}\n\n.detalk-container .filter {\n\topacity: 0.65;\n\tpadding-left: 3rem;\n\tcursor: pointer;\n\t/* opacity: 0; */\n\ttransition: all .3s;\n}\n.detalk-container .cmt_date {\n\topacity: 0.65;\n}\n.detalk-container hr {\n\tmargin-top: 20px;\n    margin-bottom: 20px;\n}",""]);const s=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var d=0;d<t.length;d++){var c=[].concat(t[d]);r&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),a&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=a):c[4]="".concat(a)),e.push(c))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",a="minute",i="hour",o="day",s="week",l="month",d="quarter",c="year",u="date",m="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,l),i=n-a<0,o=e.clone().add(r+(i?-1:1),l);return+(-(r+(n-a)/(i?a-o:o-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:c,w:s,d:o,D:u,h:i,m:a,s:r,ms:n,Q:d}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",_={};_[b]=h;var k=function(t){return t instanceof $},y=function t(e,n,r){var a;if(!e)return b;if("string"==typeof e){var i=e.toLowerCase();_[i]&&(a=i),n&&(_[i]=n,a=i);var o=e.split("-");if(!a&&o.length>1)return t(o[0])}else{var s=e.name;_[s]=e,a=s}return!r&&a&&(b=a),a||!r&&b},x=function(t,e){if(k(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new $(n)},w=v;w.l=y,w.i=k,w.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var $=function(){function h(t){this.$L=y(t.locale,null,!0),this.parse(t)}var g=h.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return w},g.isValid=function(){return!(this.$d.toString()===m)},g.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return x(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<x(t)},g.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,d=!!w.u(e)||e,m=w.p(t),p=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return d?r:r.endOf(o)},f=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},h=this.$W,g=this.$M,v=this.$D,b="set"+(this.$u?"UTC":"");switch(m){case c:return d?p(1,0):p(31,11);case l:return d?p(1,g):p(0,g+1);case s:var _=this.$locale().weekStart||0,k=(h<_?h+7:h)-_;return p(d?v-k:v+(6-k),g);case o:case u:return f(b+"Hours",0);case i:return f(b+"Minutes",1);case a:return f(b+"Seconds",2);case r:return f(b+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var s,d=w.p(t),m="set"+(this.$u?"UTC":""),p=(s={},s[o]=m+"Date",s[u]=m+"Date",s[l]=m+"Month",s[c]=m+"FullYear",s[i]=m+"Hours",s[a]=m+"Minutes",s[r]=m+"Seconds",s[n]=m+"Milliseconds",s)[d],f=d===o?this.$D+(e-this.$W):e;if(d===l||d===c){var h=this.clone().set(u,1);h.$d[p](f),h.init(),this.$d=h.set(u,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](f);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[w.p(t)]()},g.add=function(n,d){var u,m=this;n=Number(n);var p=w.p(d),f=function(t){var e=x(m);return w.w(e.date(e.date()+Math.round(t*n)),m)};if(p===l)return this.set(l,this.$M+n);if(p===c)return this.set(c,this.$y+n);if(p===o)return f(1);if(p===s)return f(7);var h=(u={},u[a]=t,u[i]=e,u[r]=1e3,u)[p]||1,g=this.$d.getTime()+n*h;return w.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var r=t||"YYYY-MM-DDTHH:mm:ssZ",a=w.z(this),i=this.$H,o=this.$m,s=this.$M,l=n.weekdays,d=n.months,c=function(t,n,a,i){return t&&(t[n]||t(e,r))||a[n].slice(0,i)},u=function(t){return w.s(i%12||12,t,"0")},p=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:w.s(s+1,2,"0"),MMM:c(n.monthsShort,s,d,3),MMMM:c(d,s),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,l,2),ddd:c(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:w.s(i,2,"0"),h:u(1),hh:u(2),a:p(i,o,!0),A:p(i,o,!1),m:String(o),mm:w.s(o,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:a};return r.replace(f,(function(t,e){return e||h[t]||a.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,u,m){var p,f=w.p(u),h=x(n),g=(h.utcOffset()-this.utcOffset())*t,v=this-h,b=w.m(this,h);return b=(p={},p[c]=b/12,p[l]=b,p[d]=b/3,p[s]=(v-g)/6048e5,p[o]=(v-g)/864e5,p[i]=v/e,p[a]=v/t,p[r]=v/1e3,p)[f]||v,m?b:w.a(b)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return _[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return w.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},h}(),E=$.prototype;return x.prototype=E,[["$ms",n],["$s",r],["$m",a],["$H",i],["$W",o],["$M",l],["$y",c],["$D",u]].forEach((function(t){E[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,$,x),t.$i=!0),x},x.locale=y,x.isDayjs=k,x.unix=function(t){return x(1e3*t)},x.en=_[b],x.Ls=_,x.p={},x}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},o=[],s=0;s<t.length;s++){var l=t[s],d=r.base?l[0]+r.base:l[0],c=i[d]||0,u="".concat(d," ").concat(c);i[d]=c+1;var m=n(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=a(p,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var i=r(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<i.length;o++){var s=n(i[o]);e[s].references--}for(var l=r(t,a),d=0;d<i.length;d++){var c=n(i[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),a=n.n(r),i=n(569),o=n.n(i),s=n(565),l=n.n(s),d=n(216),c=n.n(d),u=n(589),m=n.n(u),p=n(874),f={};f.styleTagTransform=m(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=c(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var h=n(484),g=n.n(h);async function v(t,e,n=1){document.getElementById("_detalk_detail").classList.add("_detalk_loading_container"),document.getElementById("_detalk_detail").innerHTML='<svg width="30px" height="30px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">\n    <g>\n        <animateTransform attributeName="transform" type="rotate" values="0 33 33;270 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform>\n        <circle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30" stroke-dasharray="187" stroke-dashoffset="610">\n            <animate attributeName="stroke" values="#4285F4;#DE3E35;#F7C223;#1B9A59;#4285F4" begin="0s" dur="5.6s" fill="freeze" repeatCount="indefinite"></animate>\n            <animateTransform attributeName="transform" type="rotate" values="0 33 33;135 33 33;450 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform>\n            <animate attributeName="stroke-dashoffset" values="187;46.75;187" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animate>\n        </circle>\n    </g>\n    </svg>';let r=await fetch(t+"/_api/comment?id="+e,{method:"GET"}).then((t=>t.json()));r=r.value;let a=0,i=[];if(n){for(let t=r.length-1;t>=0;t--)if(!r[t].deleted&&(a++,i.push(r[t]),r[t].replies))for(let e in r[t].replies)r[t].replies[e].deleted||a++}else for(let t in r)if(!r[t].deleted&&(a++,i.push(r[t]),r[t].replies))for(let e in r[t].replies)r[t].replies[e].deleted||a++;document.getElementById("_detalk_detail").innerHTML=function(t,e,n){let r="";for(let t in e){let n="";if(e[t].replies){n+="<hr/>";for(let r of e[t].replies)r.deleted||(n+=`\n                    <div class="reply">\n                        <div class="avatar">\n                            <img src="${r.avatar||"https://cravatar.cn/avatar/?d=mp"}" class="avatar-img">\n                        </div>\n                        <div class="cmt-main" style="display: inline;">\n                            <div class="cmt-data">\n                                <span><strong>${r.nickname}</strong> · <span class="cmt_date">${g()(r.timestamp).format("YYYY-MM-DD HH:mm")}</span></span>\n                                <span class="hover_show" onclick="detalk.delete('${e[t].rpid}')">删除</span>\n                            </div>\n                            <div class="cmt-content">\n                                ${r.content}\n                            </div>\n                        </div>\n                    </div>`)}r+=`\n            <div class="mr-cmt" onclick="detalk.reply('${e[t].rpid}', '${e[t].nickname}')">\n                <div class="avatar">\n                    <img src="${"https://cravatar.cn/avatar/"+e[t].email+"?d=mp"||0}" class="avatar-img">\n                </div>\n                <div class="cmt-main">\n                    <div class="cmt-data">\n                        <span><strong><a href="${e[t].url||"#"} target="_blank" style="color: unset;text-decoration:none;">${e[t].nickname}</a></strong> · <span class="cmt_date">${g()(e[t].timestamp).format("YYYY-MM-DD HH:mm")}</span></span>\n                        <span class="hover_show" onclick="detalk.delete('${e[t].rpid}')">删除</span>\n                    </div>\n                    <div class="cmt-content">\n                        ${e[t].content}\n                    </div>\n                    <div class="replies">\n                        ${n}\n                    </div>\n                </div>\n            </div>`}return`\n    <div class="comment-title">\n        <h3>共 ${t} 条评论<span class="filter" onclick="detalk.load('${n.url}','${n.path}',${n.mode?0:1});">${n.mode?"正序":"倒序"}</span></h3>\n    </div>\n    <div class="comment-list">\n        ${r}\n    </div>\n    `}(a,i,{mode:n,url:t,path:e}),document.getElementById("_detalk_detail").classList.remove("_detalk_loading_container")}window.detalk={init:async function(t={}){if(!t.url)throw new Error("Backend URL is required!");let e=new URL(t.url).protocol+"//"+new URL(t.url).host,n=document.querySelector(t.el),r=t.path;if(!n)throw new Error("Element is required!");return r||(r=window.DETALK_PATH||window.location.pathname),window.DETALK_INIT={url:e,el:t.el,path:r},n.innerHTML='\n<div class="input-data">\n    <div class="avatar">\n        <img src="https://cravatar.cn/avatar/45ead422ade450468bc1d3c8fb543a4?d=mp" class="avatar-img">\n    </div>\n    <div class="input-area">\n        <div class="inline-input">\n            <input id="detalk_input_nickname" placeholder="昵称" type="text" class="mgr-2p" oninput="detalk.oninput(this, \'nickname\')">\n            <input id="detalk_input_email" placeholder="邮箱" type="email" class="mgr-2p" oninput="detalk.oninput(this, \'email\')">\n            <input id="detalk_input_link" placeholder="网址" type="url" oninput="detalk.oninput(this, \'link\')">\n        </div>\n        <div class="comment-text">\n            <textarea oninput="detalk.oninput(this, \'content\')" autocomplete="off" placeholder="" maxlength="500" style="min-height: 75px; height: 75px;" id="detalk_input_content"></textarea>\n        </div>\n    </div>\n\n</div>\n<div class="action-btn-group">\n    <div class="action-btn">\n        <p class="word-limit"><span id="_detalk_word_limit">0</span> / 500</p>\n        <button class="sec-btn cm-btn" id="_detalk_preview">预览</button>\n        <button onclick="detalk.send();" class="fst-btn cm-btn disabled" id="_detalk_submit">发送</button>\n    </div>\n</div>\n\n<div class="comment-container _detalk_loading_container" id="_detalk_detail">\n</div>\n',n.classList.add("detalk-container"),v(e,r),localStorage.getItem("DETALK_AUTH")||localStorage.setItem("DETALK_AUTH","xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))),document.getElementById("detalk_input_nickname").value=localStorage.getItem("DETALK_NICKNAME")||"",document.getElementById("detalk_input_email").value=localStorage.getItem("DETALK_EMAIL")||"",document.getElementById("detalk_input_link").value=localStorage.getItem("DETALK_LINK")||"",!0},send:async function(t,e){document.getElementById("_detalk_submit").disabled=!0,document.getElementById("_detalk_submit").classList.add("disabled"),document.getElementById("_detalk_submit").classList.remove("enabled"),t||(t=window.DETALK_INIT);let n=new URL(t.url).protocol+"//"+new URL(t.url).host,r=(document.querySelector(t.el),t.path),a=document.getElementById("detalk_input_nickname").value,i=document.getElementById("detalk_input_email").value,o=document.getElementById("detalk_input_link").value,s=document.getElementById("detalk_input_content").value;if(!a||!i||!s||a.length>=15||s.length>=500||i.length>=50||o.length>=100)return!1;localStorage.setItem("DETALK_NICKNAME",a),localStorage.setItem("DETALK_EMAIL",i),o.startsWith("#ReplyTo:")||localStorage.setItem("DETALK_LINK",o);let l=localStorage.getItem("DETALK_AUTH"),d=await fetch(n+"/_api/comment",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:a,email:i,id:r,url:o,replyTo:e||null,content:s,auth:l})}).then((t=>t.json()));d.success?v(n,r):alert(d.message),document.getElementById("_detalk_submit").disabled=!1,document.getElementById("_detalk_submit").classList.remove("disabled"),document.getElementById("_detalk_submit").classList.add("enabled"),e&&d.success&&(document.getElementById("detalk_input_content").value="",document.getElementById("_detalk_submit").setAttribute("onclick","detalk.send(null)"),document.getElementById("_detalk_submit").innerText="发送",document.getElementById("_detalk_preview").innerText="预览",document.getElementById("_detalk_preview").setAttribute("onclick","detalk.preview()"))},reply:async function(t,e){if(!t)return!1;location.hash="#detalk_input_content",document.getElementById("detalk_input_content").value=`回复 @${e}: `,document.getElementById("detalk_input_content").focus(),document.getElementById("detalk_input_link").value=`#ReplyTo:${t}`,document.getElementById("_detalk_submit").setAttribute("onclick",`detalk.send(null, '${t}')`),document.getElementById("_detalk_submit").innerText="回复",document.getElementById("_detalk_preview").innerText="取消",document.getElementById("_detalk_preview").setAttribute("onclick",'document.getElementById("detalk_input_link").value="";detalk.send(null);document.getElementById("_detalk_submit").innerText="发送";document.getElementById("_detalk_preview").innerText="预览";document.getElementById("_detalk_preview").setAttribute("onclick", "detalk.preview()");')},load:v,oninput:function(t,e){"content"==e&&(document.getElementById("_detalk_word_limit").innerText=t.value.length,t.value.length>0&&t.value.length<500?(t.classList.remove("border_error"),window.TEMP_CONTENT=!0):t.classList.add("border_error")),"nickname"==e&&(document.getElementById("_detalk_word_limit").innerText=t.value.length,t.value.length>0&&t.value.length<15?(t.classList.remove("border_error"),window.TEMP_NICKNAME=!0):t.classList.add("border_error")),"email"==e&&(!t.value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)||t.value.length>50?t.classList.add("border_error"):(t.classList.remove("border_error"),window.TEMP_EMAIL=!0)),"link"==e&&(t.value.length>100?t.classList.add("border_error"):t.classList.remove("border_error")),window.TEMP_NICKNAME&&window.TEMP_EMAIL&&window.TEMP_CONTENT?(document.getElementById("_detalk_submit").classList.remove("disabled"),document.getElementById("_detalk_submit").classList.add("enabled")):(document.getElementById("_detalk_submit").classList.remove("enabled"),document.getElementById("_detalk_submit").classList.add("disabled"))},delete:async function(t,e=localStorage.getItem("DETALK_AUTH")){if(!t)return!1;if(!confirm("即将删除 ID: "+t+" 评论，是否继续？"))return!1;let n=window.DETALK_INIT.url,r=window.DETALK_INIT.path,a=await fetch(n+`/_api/comment?id=${r}&rpid=${t}&auth=${e}`,{method:"DELETE"}).then((t=>t.json()));a.success?(alert(a.message),v(n,r)):alert(a.error)}}})()})();