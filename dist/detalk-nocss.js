/*! For license information please see detalk-nocss.js.LICENSE.txt */
(()=>{var __webpack_modules__={495:(module,exports,__webpack_require__)=>{var __WEBPACK_AMD_DEFINE_RESULT__;(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=__webpack_require__.g:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&module.exports,AMD=__webpack_require__.amdO,ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e){return function(t){return new Md5(!0).update(t)[e]()}},createMethod=function(){var e=createOutputMethod("hex");NODE_JS&&(e=nodeWrap(e)),e.create=function(){return new Md5},e.update=function(t){return e.create().update(t)};for(var t=0;t<OUTPUT_TYPES.length;++t){var a=OUTPUT_TYPES[t];e[a]=createOutputMethod(a)}return e},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(e){if("string"==typeof e)return crypto.createHash("md5").update(e,"utf8").digest("hex");if(null==e)throw ERROR;return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash("md5").update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod};function Md5(e){if(e)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var t=new ArrayBuffer(68);this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(e){if(!this.finalized){var t,a=typeof e;if("string"!==a){if("object"!==a)throw ERROR;if(null===e)throw ERROR;if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw ERROR;t=!0}for(var n,i,r=0,l=e.length,o=this.blocks,s=this.buffer8;r<l;){if(this.hashed&&(this.hashed=!1,o[0]=o[16],o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),t)if(ARRAY_BUFFER)for(i=this.start;r<l&&i<64;++r)s[i++]=e[r];else for(i=this.start;r<l&&i<64;++r)o[i>>2]|=e[r]<<SHIFT[3&i++];else if(ARRAY_BUFFER)for(i=this.start;r<l&&i<64;++r)(n=e.charCodeAt(r))<128?s[i++]=n:n<2048?(s[i++]=192|n>>6,s[i++]=128|63&n):n<55296||n>=57344?(s[i++]=224|n>>12,s[i++]=128|n>>6&63,s[i++]=128|63&n):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++r)),s[i++]=240|n>>18,s[i++]=128|n>>12&63,s[i++]=128|n>>6&63,s[i++]=128|63&n);else for(i=this.start;r<l&&i<64;++r)(n=e.charCodeAt(r))<128?o[i>>2]|=n<<SHIFT[3&i++]:n<2048?(o[i>>2]|=(192|n>>6)<<SHIFT[3&i++],o[i>>2]|=(128|63&n)<<SHIFT[3&i++]):n<55296||n>=57344?(o[i>>2]|=(224|n>>12)<<SHIFT[3&i++],o[i>>2]|=(128|n>>6&63)<<SHIFT[3&i++],o[i>>2]|=(128|63&n)<<SHIFT[3&i++]):(n=65536+((1023&n)<<10|1023&e.charCodeAt(++r)),o[i>>2]|=(240|n>>18)<<SHIFT[3&i++],o[i>>2]|=(128|n>>12&63)<<SHIFT[3&i++],o[i>>2]|=(128|n>>6&63)<<SHIFT[3&i++],o[i>>2]|=(128|63&n)<<SHIFT[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[t>>2]|=EXTRA[3&t],t>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var e,t,a,n,i,r,l=this.blocks;this.first?t=((t=((e=((e=l[0]-680876937)<<7|e>>>25)-271733879<<0)^(a=((a=(-271733879^(n=((n=(-1732584194^2004318071&e)+l[1]-117830708)<<12|n>>>20)+e<<0)&(-271733879^e))+l[2]-1126478375)<<17|a>>>15)+n<<0)&(n^e))+l[3]-1316259209)<<22|t>>>10)+a<<0:(e=this.h0,t=this.h1,a=this.h2,t=((t+=((e=((e+=((n=this.h3)^t&(a^n))+l[0]-680876936)<<7|e>>>25)+t<<0)^(a=((a+=(t^(n=((n+=(a^e&(t^a))+l[1]-389564586)<<12|n>>>20)+e<<0)&(e^t))+l[2]+606105819)<<17|a>>>15)+n<<0)&(n^e))+l[3]-1044525330)<<22|t>>>10)+a<<0),t=((t+=((e=((e+=(n^t&(a^n))+l[4]-176418897)<<7|e>>>25)+t<<0)^(a=((a+=(t^(n=((n+=(a^e&(t^a))+l[5]+1200080426)<<12|n>>>20)+e<<0)&(e^t))+l[6]-1473231341)<<17|a>>>15)+n<<0)&(n^e))+l[7]-45705983)<<22|t>>>10)+a<<0,t=((t+=((e=((e+=(n^t&(a^n))+l[8]+1770035416)<<7|e>>>25)+t<<0)^(a=((a+=(t^(n=((n+=(a^e&(t^a))+l[9]-1958414417)<<12|n>>>20)+e<<0)&(e^t))+l[10]-42063)<<17|a>>>15)+n<<0)&(n^e))+l[11]-1990404162)<<22|t>>>10)+a<<0,t=((t+=((e=((e+=(n^t&(a^n))+l[12]+1804603682)<<7|e>>>25)+t<<0)^(a=((a+=(t^(n=((n+=(a^e&(t^a))+l[13]-40341101)<<12|n>>>20)+e<<0)&(e^t))+l[14]-1502002290)<<17|a>>>15)+n<<0)&(n^e))+l[15]+1236535329)<<22|t>>>10)+a<<0,t=((t+=((n=((n+=(t^a&((e=((e+=(a^n&(t^a))+l[1]-165796510)<<5|e>>>27)+t<<0)^t))+l[6]-1069501632)<<9|n>>>23)+e<<0)^e&((a=((a+=(e^t&(n^e))+l[11]+643717713)<<14|a>>>18)+n<<0)^n))+l[0]-373897302)<<20|t>>>12)+a<<0,t=((t+=((n=((n+=(t^a&((e=((e+=(a^n&(t^a))+l[5]-701558691)<<5|e>>>27)+t<<0)^t))+l[10]+38016083)<<9|n>>>23)+e<<0)^e&((a=((a+=(e^t&(n^e))+l[15]-660478335)<<14|a>>>18)+n<<0)^n))+l[4]-405537848)<<20|t>>>12)+a<<0,t=((t+=((n=((n+=(t^a&((e=((e+=(a^n&(t^a))+l[9]+568446438)<<5|e>>>27)+t<<0)^t))+l[14]-1019803690)<<9|n>>>23)+e<<0)^e&((a=((a+=(e^t&(n^e))+l[3]-187363961)<<14|a>>>18)+n<<0)^n))+l[8]+1163531501)<<20|t>>>12)+a<<0,t=((t+=((n=((n+=(t^a&((e=((e+=(a^n&(t^a))+l[13]-1444681467)<<5|e>>>27)+t<<0)^t))+l[2]-51403784)<<9|n>>>23)+e<<0)^e&((a=((a+=(e^t&(n^e))+l[7]+1735328473)<<14|a>>>18)+n<<0)^n))+l[12]-1926607734)<<20|t>>>12)+a<<0,t=((t+=((r=(n=((n+=((i=t^a)^(e=((e+=(i^n)+l[5]-378558)<<4|e>>>28)+t<<0))+l[8]-2022574463)<<11|n>>>21)+e<<0)^e)^(a=((a+=(r^t)+l[11]+1839030562)<<16|a>>>16)+n<<0))+l[14]-35309556)<<23|t>>>9)+a<<0,t=((t+=((r=(n=((n+=((i=t^a)^(e=((e+=(i^n)+l[1]-1530992060)<<4|e>>>28)+t<<0))+l[4]+1272893353)<<11|n>>>21)+e<<0)^e)^(a=((a+=(r^t)+l[7]-155497632)<<16|a>>>16)+n<<0))+l[10]-1094730640)<<23|t>>>9)+a<<0,t=((t+=((r=(n=((n+=((i=t^a)^(e=((e+=(i^n)+l[13]+681279174)<<4|e>>>28)+t<<0))+l[0]-358537222)<<11|n>>>21)+e<<0)^e)^(a=((a+=(r^t)+l[3]-722521979)<<16|a>>>16)+n<<0))+l[6]+76029189)<<23|t>>>9)+a<<0,t=((t+=((r=(n=((n+=((i=t^a)^(e=((e+=(i^n)+l[9]-640364487)<<4|e>>>28)+t<<0))+l[12]-421815835)<<11|n>>>21)+e<<0)^e)^(a=((a+=(r^t)+l[15]+530742520)<<16|a>>>16)+n<<0))+l[2]-995338651)<<23|t>>>9)+a<<0,t=((t+=((n=((n+=(t^((e=((e+=(a^(t|~n))+l[0]-198630844)<<6|e>>>26)+t<<0)|~a))+l[7]+1126891415)<<10|n>>>22)+e<<0)^((a=((a+=(e^(n|~t))+l[14]-1416354905)<<15|a>>>17)+n<<0)|~e))+l[5]-57434055)<<21|t>>>11)+a<<0,t=((t+=((n=((n+=(t^((e=((e+=(a^(t|~n))+l[12]+1700485571)<<6|e>>>26)+t<<0)|~a))+l[3]-1894986606)<<10|n>>>22)+e<<0)^((a=((a+=(e^(n|~t))+l[10]-1051523)<<15|a>>>17)+n<<0)|~e))+l[1]-2054922799)<<21|t>>>11)+a<<0,t=((t+=((n=((n+=(t^((e=((e+=(a^(t|~n))+l[8]+1873313359)<<6|e>>>26)+t<<0)|~a))+l[15]-30611744)<<10|n>>>22)+e<<0)^((a=((a+=(e^(n|~t))+l[6]-1560198380)<<15|a>>>17)+n<<0)|~e))+l[13]+1309151649)<<21|t>>>11)+a<<0,t=((t+=((n=((n+=(t^((e=((e+=(a^(t|~n))+l[4]-145523070)<<6|e>>>26)+t<<0)|~a))+l[11]-1120210379)<<10|n>>>22)+e<<0)^((a=((a+=(e^(n|~t))+l[2]+718787259)<<15|a>>>17)+n<<0)|~e))+l[9]-343485551)<<21|t>>>11)+a<<0,this.first?(this.h0=e+1732584193<<0,this.h1=t-271733879<<0,this.h2=a-1732584194<<0,this.h3=n+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+a<<0,this.h3=this.h3+n<<0)},Md5.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,a=this.h2,n=this.h3;return HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,a=this.h2,n=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&t,t>>8&255,t>>16&255,t>>24&255,255&a,a>>8&255,a>>16&255,a>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),t=new Uint32Array(e);return t[0]=this.h0,t[1]=this.h1,t[2]=this.h2,t[3]=this.h3,e},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var e,t,a,n="",i=this.array(),r=0;r<15;)e=i[r++],t=i[r++],a=i[r++],n+=BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[63&(e<<4|t>>>4)]+BASE64_ENCODE_CHAR[63&(t<<2|a>>>6)]+BASE64_ENCODE_CHAR[63&a];return e=i[r],n+(BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[e<<4&63]+"==")};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var a=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](a,a.exports,__webpack_require__),a.exports}__webpack_require__.amdO={},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var a in t)__webpack_require__.o(t,a)&&!__webpack_require__.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var t=__webpack_require__.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})();var __webpack_exports__={};(()=>{"use strict";function e(e){let t=new Date(e),a=t.getFullYear(),n=t.getMonth()+1,i=t.getDate(),r=t.getHours(),l=t.getMinutes(),o=t.getSeconds(),s=window.DETALK_I18N.day,_=new Date;return _.getMinutes()==l&&_.getHours()==r&&_.getDate()==i&&_.getMonth()+1==n&&_.getFullYear()==a?s.justNow:_.getHours()==r&&_.getDate()==i&&_.getMonth()+1==n&&_.getFullYear()==a?s.minute.replace("[#TIME]",_.getMinutes()-l):_.getDate()==i&&_.getMonth()+1==n&&_.getFullYear()==a?s.hour.replace("[#TIME]",_.getHours()-r):_.getMonth()+1==n&&_.getDate()-i<14&&_.getFullYear()==a?s.day.replace("[#TIME]",_.getDate()-i):(n<10&&(n="0"+n),i<10&&(i="0"+i),r<10&&(r="0"+r),l<10&&(l="0"+l),o<10&&(o="0"+o),`${a}-${n}-${i} ${r}:${l}:${o}`)}function t(e,t,a){if(localStorage.getItem("DETALK_IS_ADMIN")&&a)return!0;for(let a of e)if(a==t)return!0;return!1}function a(a,n,i,r){window.DETALK_LOADED_LIST||(window.DETALK_LOADED_LIST=[]);let l="";for(let a in n){let i="";if(n[a].hide)continue;if(n[a]&&n[a].replies){i+="<hr/>";for(let r of n[a].replies)if(!r.deleted&&!r.hide){let l="";t(JSON.parse(localStorage.getItem("DETALK_CAN_DELETE")||"[]"),r.rpid,!0)&&(l=`<span class="hover_show" onclick="detalk.delete('${r.rpid}')">${window.DETALK_I18N.delete}</span>`);let o="";if(r&&r.label&&DETALK_INIT.label&&DETALK_INIT.label[r.label]&&(DETALK_INIT.label[r.label].class||(DETALK_INIT.label[r.label].class="label-green"),DETALK_INIT.label[r.label].name||(DETALK_INIT.label[r.label].name=""),o=`<span class="custom-label ${DETALK_INIT.label[r.label].class}">${DETALK_INIT.label[r.label].name}</span>`),!(r&&r.email&&r.nickname&&r.content))continue;i+=`\n                    <div class="reply">\n                        <div class="avatar">\n                            <img src="${"https://cravatar.cn/avatar/"+n[a].email+"?d=mp"||0}" class="avatar-img">\n                        </div>\n                        <div class="cmt-main" style="display: inline;">\n                            <div class="cmt-data">\n                                <span style="margin-right:1rem;"><strong><a href="${r.url||"#"}" target="_blank" style="color: unset;text-decoration:none;">${r.nickname}</a>${o}</strong> · <span class="cmt_date">${e(r.timestamp)}</span></span>\n                                <span class="hover_show" onclick="detalk.reply('${n[a].rpid}', '${r.nickname}')">${window.DETALK_I18N.reply}</span>\n                                ${l}\n                            </div>\n                            <div class="cmt-content">\n                                ${r.content}\n                            </div>\n                        </div>\n                    </div>`}}let r="";n[a]&&n[a].rpid&&t(JSON.parse(localStorage.getItem("DETALK_CAN_DELETE")||"[]"),n[a].rpid,!0)&&(r=`<span class="hover_show" onclick="detalk.delete('${n[a].rpid}')">${window.DETALK_I18N.delete}</span>`);let o="";n[a]&&n[a].label&&DETALK_INIT.label&&DETALK_INIT.label[n[a].label]&&(DETALK_INIT.label[n[a].label].class||(DETALK_INIT.label[n[a].label].class="label-green"),DETALK_INIT.label[n[a].label].name||(DETALK_INIT.label[n[a].label].name=""),o=`<span class="custom-label ${DETALK_INIT.label[n[a].label].class}">${DETALK_INIT.label[n[a].label].name}</span>`);let s="";n[a]&&n[a].top&&(s=`<span class="custom-label label-red" style="margin-left:0;">${window.DETALK_I18N.top}</span>`),n[a]&&n[a].email&&n[a].nickname&&n[a].content&&(t(window.DETALK_LOADED_LIST,n[a].rpid)||(l+=`\n            <div class="mr-cmt">\n                <div class="avatar">\n                    <img src="${"https://cravatar.cn/avatar/"+n[a].email+"?d=mp"||0}" class="avatar-img">\n                </div>\n                <div class="cmt-main">\n                    <div class="cmt-data">\n                        <span style="margin-right:1rem;"><strong><a href="${n[a].url||"#"}" target="_blank" style="color: unset;text-decoration:none;">${n[a].nickname}</a>${o}</strong> · <span class="cmt_date">${e(n[a].timestamp)}</span></span>\n                        <span class="hover_show" onclick="detalk.reply('${n[a].rpid}', '${n[a].nickname}')">${window.DETALK_I18N.reply}</span>\n                        ${r}\n                    </div>\n                    <div class="cmt-content">\n                        ${s}\n                        ${n[a].content}\n                    </div>\n                    <div class="replies">\n                        ${i}\n                    </div>\n                </div>\n            </div>`,window.DETALK_LOADED_LIST.push(n[a].rpid)))}n==[]&&(l=`<h3 style="text-align: center;opacity: 0.8;">${window.DETALK_I18N.noComment}</h3>`);let o=`<div class="comment-title">\n        <h3>${window.DETALK_I18N.total.replace("[#TOTAL]",a)}<span class="filter" onclick="detalk.load('${i.url}','${i.path}',${i.mode?0:1});">${i.mode?window.DETALK_I18N.up:window.DETALK_I18N.down}</span></h3>\n    </div>`;return r&&(o=""),`\n    ${o}\n    <div class="comment-list">\n        ${l}\n    </div>\n    `}function n(e){return document.getElementById(e)}__webpack_require__.p,__webpack_require__.p;var i='<svg width="30px" height="30px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><g><animateTransform attributeName="transform" type="rotate" values="0 33 33;270 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform>\n<circle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30" stroke-dasharray="187" stroke-dashoffset="610"><animate attributeName="stroke" values="#4285F4;#DE3E35;#F7C223;#1B9A59;#4285F4" begin="0s" dur="5.6s" fill="freeze" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" values="0 33 33;135 33 33;450 33 33" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animateTransform><animate attributeName="stroke-dashoffset" values="187;46.75;187" begin="0s" dur="1.4s" fill="freeze" repeatCount="indefinite"></animate>\n</circle></g></svg>';async function r(e,t,r=1,l=0,o=10){let s="";l>0?(s=n("_detalk_detail").innerHTML,n("_detalk_load_more").innerHTML=i):(n("_detalk_detail").innerHTML=i,n("_detalk_detail").classList.add("_detalk_loading_container")),r==window.DETALK_LOAD_TYPE&&0!=l||(window.DETALK_LOADED_LIST=[]);let _="";r&&(_="true");let d=await fetch(e+"/_api/comment?id="+t+"&pageid="+l+"&pagesize="+o+"&timefst="+_,{method:"GET"}).then((e=>e.json())),c=!1;d.hasNextPage&&(c=!0);let u=0,p=d.value;u=d.length,n("_detalk_detail").innerHTML=0==l?a(u,p,{mode:r,url:e,path:t}):s+a(u,p,{mode:r,url:e,path:t},!0),l>0?n("_detalk_load_more").remove():n("_detalk_detail").classList.remove("_detalk_loading_container"),c&&(n("_detalk_detail").innerHTML+=`<div class="load-more" id="_detalk_load_more" onclick="detalk.load('${e}', '${t}', ${r}, ${l+1}, ${o})">${window.DETALK_I18N.loadMore}</div>`),DETALK_INIT.onCommentLoaded&&DETALK_INIT.onCommentLoaded(),window.DETALK_LOAD_TYPE=r}var l=__webpack_require__(495),o=__webpack_require__.n(l);async function s(e){if("block"==n("detalk_content_preview").style.display&&!e&&!n("detalk_input_content").value)return n("detalk_content_preview").style.display="none",!0;n("detalk_content_preview").innerHTML="[ Loading ]";let t=await detalk.parse(n("detalk_input_content").value);return n("detalk_content_preview").innerHTML=t,e||(n("detalk_content_preview").style.display="block"),!0}window.detalk={init:async function e(t){if(window.DETALK_I18N||(window.DETALK_I18N={loadMore:"加载更多",notAllowedInput:"输入内容不符合要求！",send:"发送",preview:"预览",reply:"回复",replyTo:"回复",cancel:"取消",loadingLoginFrame:"登录窗口加载中...",gotoLoginFrame:"请在登录窗口中继续",waitingInfo:"登录成功，正在获取用户信息...",loginSuccess:"登录成功",failedLoadingInfo:"获取用户信息失败",deleteConfirm:"即将删除 ID:[#ID] 评论，是否继续？",total:"共 [#TOTAL] 条评论",noComment:"暂无评论",up:"正序",down:"倒序",delete:"删除",top:"置顶",login:"登录",required:"必填",optional:"选填",nickname:"昵称",email:"邮箱",link:"网址",day:{justNow:"刚刚",minute:"[#TIME] 分钟前",hour:"[#TIME] 小时前",day:"[#TIME] 天前"}}),"string"==typeof t&&e(await fetch(t).then((e=>e.json()))),!t.url)throw new Error("Backend URL is required!");let a=new URL(t.url).protocol+"//"+new URL(t.url).host,i=document.querySelector(t.el),l=t.path;if(!i)throw new Error("Element is required!");return l||(l=window.DETALK_PATH||window.location.pathname),window.DETALK_INIT=t,DETALK_INIT.url=a,i.innerHTML='\n<div class="input-data">\n    <div class="avatar">\n        <img src="https://cravatar.cn/avatar/?d=mp" class="avatar-img" id="_detalk_myavatar">\n    </div>\n    <div class="input-area">\n        <div class="inline-input">\n            <div class="input-label">\n                <label id="detalk-nickname"></label>\n                <input id="detalk_input_nickname" type="text" class="mgr-2p" oninput="detalk.oninput(this, \'nickname\')" maxlength="15"></div>\n            <div class="input-label">\n                <label id="detalk-email"></label>\n                <input id="detalk_input_email" type="email" class="mgr-2p" oninput="detalk.oninput(this, \'email\')" maxlength="50"></div>\n            <div class="input-label">\n                <label id="detalk-link"></label>\n                <input id="detalk_input_link" type="url" oninput="detalk.oninput(this, \'link\')" maxlength="100"></div>\n        </div>\n        <div class="comment-text">\n            <textarea oninput="detalk.oninput(this, \'content\')" autocomplete="off" placeholder="" maxlength="500" style="min-height: 75px; height: 75px;" id="detalk_input_content"></textarea>\n        </div>\n        <div class="comment-text content-preview cmt-content" id="detalk_content_preview"></div>\n    </div>\n</div>\n<div class="action-btn-group">\n    <div class="action-btn">\n        <div style="text-align: end;">\n            <p class="word-limit" style="color: rgb(255,70,0);"><span id="detalk-warn"></span></p>\n            <p class="word-limit"><span id="_detalk_word_limit">0</span> / 500</p>\n        </div>\n        <button class="sec-btn cm-btn" id="_detalk_login" onclick="detalk.login();"></button>\n        <button class="sec-btn cm-btn" id="_detalk_preview" onclick="detalk.preview();"></button>\n        <button onclick="detalk.send();" class="fst-btn cm-btn disabled" id="_detalk_submit" disabled></button>\n    </div>\n</div>\n<div class="comment-container _detalk_loading_container" id="_detalk_detail"></div>\n<div class="detalk_copyright">\n    <p>Powered by <a href="https://github.com/detalkjs" target="_blank">Detalk</a> v<span id="detalk-version"></span></p>\n</div>\n',n("detalk-version").innerText=window.detalk.version,n("detalk-nickname").innerText=window.DETALK_I18N.nickname,n("detalk-email").innerText=window.DETALK_I18N.email,n("detalk-link").innerText=window.DETALK_I18N.link,n("_detalk_login").innerText=window.DETALK_I18N.login,n("_detalk_preview").innerText=window.DETALK_I18N.preview,n("_detalk_submit").innerText=window.DETALK_I18N.send,i.classList.add("detalk-container"),r(a,l),localStorage.getItem("DETALK_AUTH")||localStorage.setItem("DETALK_AUTH","xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))),n("detalk_input_nickname").value=localStorage.getItem("DETALK_NICKNAME")||"",n("detalk_input_email").value=localStorage.getItem("DETALK_EMAIL")||"",n("detalk_input_link").value=localStorage.getItem("DETALK_LINK")||"",n("detalk_input_email").value&&(n("_detalk_myavatar").src=`https://cravatar.cn/avatar/${o()(n("detalk_input_email").value)}?d=mp`),document.querySelector(t.el+" .inline-input").clientWidth>=540?document.querySelector(t.el+" .inline-input").classList.add("input-oneline"):document.querySelector(t.el+" .inline-input").classList.remove("input-oneline"),window.addEventListener("resize",(function(){document.querySelector(DETALK_INIT.el+" .inline-input").clientWidth>=540?document.querySelector(DETALK_INIT.el+" .inline-input").classList.add("input-oneline"):document.querySelector(DETALK_INIT.el+" .inline-input").classList.remove("input-oneline")})),!0},send:async function(e,t){n("_detalk_submit").disabled=!0,n("_detalk_submit").classList.add("disabled"),n("_detalk_submit").classList.remove("enabled"),e||(e=window.DETALK_INIT);let a=new URL(e.url).protocol+"//"+new URL(e.url).host,i=(document.querySelector(e.el),e.path),l=n("detalk_input_nickname").value,o=n("detalk_input_email").value,s=n("detalk_input_link").value,_=n("detalk_input_content").value;if(!l||!o||!_||l.length>=15||_.length>=500||o.length>=50||s.length>=100||s&&!s.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/)&&!s.startsWith("#ReplyTo:")||!o.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/))return alert(window.DETALK_I18N.notAllowedInput),!1;localStorage.setItem("DETALK_NICKNAME",l),localStorage.setItem("DETALK_EMAIL",o),s.startsWith("#ReplyTo:")||localStorage.setItem("DETALK_LINK",s);let d=localStorage.getItem("DETALK_AUTH"),c=await fetch(a+"/_api/comment",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({nickname:l,email:o,id:i,url:s,replyTo:t||null,content:_,auth:d})}).then((e=>e.json()));if(c.success){r(a,i);let e=JSON.parse(localStorage.getItem("DETALK_CAN_DELETE")||"[]");e.push(c.rpid),localStorage.setItem("DETALK_CAN_DELETE",JSON.stringify(e))}else alert(c.message);n("_detalk_submit").disabled=!1,n("_detalk_submit").classList.remove("disabled"),n("_detalk_submit").classList.add("enabled"),t&&c.success&&(n("detalk_input_content").value="",n("_detalk_submit").setAttribute("onclick","detalk.send(null)"),n("_detalk_submit").innerText=window.DETALK_I18N.send,n("_detalk_preview").innerText=window.DETALK_I18N.preview,n("_detalk_preview").setAttribute("onclick","detalk.preview()"))},reply:async function(e,t){if(!e)return!1;location.hash="#detalk_input_content",n("detalk_input_content").value=window.DETALK_I18N.replyTo+` @${t}: `,n("detalk_input_content").focus(),n("detalk_input_link").value=`#ReplyTo:${e}`,n("_detalk_submit").setAttribute("onclick",`detalk.send(null, '${e}')`),n("_detalk_submit").innerText=window.DETALK_I18N.reply,n("_detalk_preview").innerText=window.DETALK_I18N.cancel,n("_detalk_preview").setAttribute("onclick",'document.getElementById("detalk_input_link").value="";document.getElementById("_detalk_submit").innerText="发送";document.getElementById("_detalk_preview").innerText="预览";document.getElementById("_detalk_preview").setAttribute("onclick", "detalk.preview()");document.getElementById("_detalk_submit").setAttribute("onclick", "detalk.send()");')},load:r,oninput:function(e,t){"content"==t&&(n("_detalk_word_limit").innerText=e.value.length,e.value.length>0&&e.value.length<500?(e.classList.remove("border_error"),DETALK_INIT.previewOnInput&&s(!0),window.TEMP_CONTENT=!0):e.classList.add("border_error")),"nickname"==t&&(e.value.length>0&&e.value.length<15?(e.classList.remove("border_error"),window.TEMP_NICKNAME=!0):e.classList.add("border_error")),"email"==t&&(!e.value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)||e.value.length>50?e.classList.add("border_error"):(e.classList.remove("border_error"),window.TEMP_EMAIL=!0,n("_detalk_myavatar").src=`https://cravatar.cn/avatar/${o()(e.value)}?d=mp`)),"link"==t&&(e.value.length>100||e.value&&!e.value.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/)&&!e.value.startsWith("#ReplyTo:")?e.classList.add("border_error"):e.classList.remove("border_error")),!window.TEMP_NICKNAME&&!n("detalk_input_nickname").value||!window.TEMP_EMAIL&&!n("detalk_input_email").value||!window.TEMP_CONTENT&&!n("detalk_input_content").value||n("detalk_input_link").classList.contains("border_error")||n("detalk_input_nickname").classList.contains("border_error")||n("detalk_input_email").classList.contains("border_error")||n("detalk_input_content").classList.contains("border_error")?(n("_detalk_submit").classList.remove("enabled"),n("_detalk_submit").classList.add("disabled"),n("_detalk_submit").disabled=!0):(n("_detalk_submit").classList.remove("disabled"),n("_detalk_submit").classList.add("enabled"),n("_detalk_submit").disabled=!1)},delete:async function(e,t=localStorage.getItem("DETALK_AUTH")){if(!e)return!1;if(!confirm(window.DETALK_I18N.deleteConfirm.replace("[#ID]",e)))return!1;let a=window.DETALK_INIT.url,n=window.DETALK_INIT.path,i=await fetch(a+`/_api/comment?id=${n}&rpid=${e}&auth=${t}`,{method:"DELETE"}).then((e=>e.json()));i.success?(JSON.parse(localStorage.getItem("DETALK_CAN_DELETE")||"[]").forEach((t=>{if(t==e){let t=JSON.parse(localStorage.getItem("DETALK_CAN_DELETE")||"[]");t.splice(t.indexOf(e),1),localStorage.setItem("DETALK_CAN_DELETE",JSON.stringify(t))}})),r(a,n)):alert(i.error)},preview:s,login:async function(){n("detalk-warn").innerText=window.DETALK_I18N.loadingLoginFrame,n("detalk-warn").innerText=window.DETALK_I18N.gotoLoginFrame;let e="";DETALK_INIT.login&&DETALK_INIT.login.github&&(e="&github="+DETALK_INIT.login.github),window.open("https://detalk-dash.netlify.app/login.html?url="+encodeURIComponent(DETALK_INIT.url)+"&framelogin=true"+e,"_blank","width=600,height=600,scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no"),window.addEventListener("message",(function(t){n("detalk-warn").innerText=window.DETALK_I18N.waitingInfo;let{data:a}=t;if(a=JSON.parse(a),"detalk"==a.data){let t=a.token;console.log(a),a.admin&&localStorage.setItem("DETALK_IS_ADMIN",!0),localStorage.setItem("DETALK_AUTH",t),fetch(DETALK_INIT.url+"/_api/profile?token="+t+e,{method:"GET"}).then((e=>e.json())).then((e=>{if(e.success){if(n("detalk-warn").innerText=window.DETALK_I18N.loginSuccess,!e.nickname&&!e.email&&!e.link)return!1;n("detalk_input_nickname").value=e.nickname,n("detalk_input_email").value=e.email,n("detalk_input_link").value=e.link,localStorage.setItem("DETALK_NICKNAME",e.nickname),localStorage.setItem("DETALK_EMAIL",e.email),localStorage.setItem("DETALK_LINK",e.link),n("detalk_input_email").value&&(n("_detalk_myavatar").src=`https://cravatar.cn/avatar/${o()(n("detalk_input_email").value)}?d=mp`)}else n("detalk-warn").innerText=window.DETALK_I18N.failedLoadingInfo}))}}))},parse:async function(e){let t=await fetch(window.DETALK_INIT.url+"/_api/markdown",{method:"POST",body:e}).then((e=>e.json()));return t.success?t.html:t.error},version:"1.2.0-alpha"}})()})();