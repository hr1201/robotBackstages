function Ee(e,t){return function(){return e.apply(t,arguments)}}const{toString:Me}=Object.prototype,{getPrototypeOf:te}=Object,M=(e=>t=>{const n=Me.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>M(t)===e),q=e=>t=>typeof t===e,{isArray:k}=Array,B=q("undefined");function qe(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const we=T("ArrayBuffer");function ze(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&we(e.buffer),t}const Je=q("string"),O=q("function"),Se=q("number"),z=e=>e!==null&&typeof e=="object",We=e=>e===!0||e===!1,_=e=>{if(M(e)!=="object")return!1;const t=te(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},$e=T("Date"),Ve=T("File"),Ge=T("Blob"),Ke=T("FileList"),Xe=e=>z(e)&&O(e.pipe),ve=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=M(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},Qe=T("URLSearchParams"),Ze=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),k(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Re(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ge=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Oe=e=>!B(e)&&e!==ge;function X(){const{caseless:e}=Oe(this)&&this||{},t={},n=(r,s)=>{const o=e&&Re(t,s)||s;_(t[o])&&_(r)?t[o]=X(t[o],r):_(r)?t[o]=X({},r):k(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const Ye=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,o)=>{n&&O(s)?e[o]=Ee(s,n):e[o]=s},{allOwnKeys:r}),e),et=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),tt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},nt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&te(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},rt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},st=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!Se(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ot=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&te(Uint8Array)),it=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},at=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ct=T("HTMLFormElement"),ut=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),lt=T("RegExp"),Ae=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},ft=e=>{Ae(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},dt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return k(e)?r(e):r(String(e).split(t)),n},pt=()=>{},ht=(e,t)=>(e=+e,Number.isFinite(e)?e:t),$="abcdefghijklmnopqrstuvwxyz",ce="0123456789",Te={DIGIT:ce,ALPHA:$,ALPHA_DIGIT:$+$.toUpperCase()+ce},mt=(e=16,t=Te.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function yt(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const bt=e=>{const t=new Array(10),n=(r,s)=>{if(z(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=k(r)?[]:{};return D(r,(i,c)=>{const p=n(i,s+1);!B(p)&&(o[c]=p)}),t[s]=void 0,o}}return r};return n(e,0)},Et=T("AsyncFunction"),wt=e=>e&&(z(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:k,isArrayBuffer:we,isBuffer:qe,isFormData:ve,isArrayBufferView:ze,isString:Je,isNumber:Se,isBoolean:We,isObject:z,isPlainObject:_,isUndefined:B,isDate:$e,isFile:Ve,isBlob:Ge,isRegExp:lt,isFunction:O,isStream:Xe,isURLSearchParams:Qe,isTypedArray:ot,isFileList:Ke,forEach:D,merge:X,extend:Ye,trim:Ze,stripBOM:et,inherits:tt,toFlatObject:nt,kindOf:M,kindOfTest:T,endsWith:rt,toArray:st,forEachEntry:it,matchAll:at,isHTMLForm:ct,hasOwnProperty:ae,hasOwnProp:ae,reduceDescriptors:Ae,freezeMethods:ft,toObjectSet:dt,toCamelCase:ut,noop:pt,toFiniteNumber:ht,findKey:Re,global:ge,isContextDefined:Oe,ALPHABET:Te,generateString:mt,isSpecCompliantForm:yt,toJSONObject:bt,isAsyncFn:Et,isThenable:wt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ne=m.prototype,xe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{xe[e]={value:e}});Object.defineProperties(m,xe);Object.defineProperty(Ne,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ne);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const St=null;function v(e){return a.isPlainObject(e)||a.isArray(e)}function Pe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,n){return e?e.concat(t).map(function(s,o){return s=Pe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Rt(e){return a.isArray(e)&&!e.some(v)}const gt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function J(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,E){return!a.isUndefined(E[d])});const r=n.metaTokens,s=n.visitor||l,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function h(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,d,E){let w=f;if(f&&!E&&typeof f=="object"){if(a.endsWith(d,"{}"))d=r?d:d.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Rt(f)||(a.isFileList(f)||a.endsWith(d,"[]"))&&(w=a.toArray(f)))return d=Pe(d),w.forEach(function(P,He){!(a.isUndefined(P)||P===null)&&t.append(i===!0?ue([d],He,o):i===null?d:d+"[]",h(P))}),!1}return v(f)?!0:(t.append(ue(E,d,o),h(f)),!1)}const u=[],b=Object.assign(gt,{defaultVisitor:l,convertValue:h,isVisitable:v});function g(f,d){if(!a.isUndefined(f)){if(u.indexOf(f)!==-1)throw Error("Circular reference detected in "+d.join("."));u.push(f),a.forEach(f,function(w,x){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(x)?x.trim():x,d,b))===!0&&g(w,d?d.concat(x):[x])}),u.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function le(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ne(e,t){this._pairs=[],e&&J(e,this,t)}const Ce=ne.prototype;Ce.append=function(t,n){this._pairs.push([t,n])};Ce.toString=function(t){const n=t?function(r){return t.call(this,r,le)}:le;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ot(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fe(e,t,n){if(!t)return e;const r=n&&n.encode||Ot,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ne(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class At{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fe=At,ke={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Tt=typeof URLSearchParams<"u"?URLSearchParams:ne,Nt=typeof FormData<"u"?FormData:null,xt=typeof Blob<"u"?Blob:null,Pt={isBrowser:!0,classes:{URLSearchParams:Tt,FormData:Nt,Blob:xt},protocols:["http","https","file","blob","url","data"]},Ue=typeof window<"u"&&typeof document<"u",Ct=(e=>Ue&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Ft=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),kt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ue,hasStandardBrowserEnv:Ct,hasStandardBrowserWebWorkerEnv:Ft},Symbol.toStringTag,{value:"Module"})),A={...kt,...Pt};function Ut(e,t){return J(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Bt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Dt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Be(e){function t(n,r,s,o){let i=n[o++];const c=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Dt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Bt(r),s,n,0)}),n}return null}function Lt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const re={transitional:ke,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Be(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ut(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return J(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Lt(t)):t}],transformResponse:[function(t){const n=this.transitional||re.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{re.headers[e]={}});const se=re,_t=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&_t[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},de=Symbol("internals");function U(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function It(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ht=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function V(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Mt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function qt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class W{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,p,h){const l=U(p);if(!l)throw new Error("header name must be a non-empty string");const u=a.findKey(s,l);(!u||s[u]===void 0||h===!0||h===void 0&&s[u]!==!1)&&(s[u||p]=j(c))}const i=(c,p)=>a.forEach(c,(h,l)=>o(h,l,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Ht(t)?i(jt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=U(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return It(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=U(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||V(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=U(i),i){const c=a.findKey(r,i);c&&(!n||V(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||V(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=j(s),delete n[o];return}const c=t?Mt(o):String(o).trim();c!==o&&delete n[o],n[c]=j(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[de]=this[de]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=U(i);r[c]||(qt(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}W.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(W.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(W);const N=W;function G(e,t){const n=this||se,r=t||n,s=N.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function De(e){return!!(e&&e.__CANCEL__)}function L(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(L,m,{__CANCEL__:!0});function zt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Jt=A.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Wt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function $t(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Le(e,t){return e&&!Wt(t)?$t(e,t):t}const Vt=A.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function Gt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Kt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),l=r[o];i||(i=h),n[s]=p,r[s]=h;let u=o,b=0;for(;u!==s;)b+=n[u++],u=u%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),h-i<t)return;const g=l&&h-l;return g?Math.round(b*1e3/g):void 0}}function pe(e,t){let n=0;const r=Kt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,c=o-n,p=r(c),h=o<=i;n=o;const l={loaded:o,total:i,progress:i?o/i:void 0,bytes:c,rate:p||void 0,estimated:p&&i&&h?(i-o)/p:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Xt=typeof XMLHttpRequest<"u",vt=Xt&&function(e){return new Promise(function(n,r){let s=e.data;const o=N.from(e.headers).normalize();let{responseType:i,withXSRFToken:c}=e,p;function h(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let l;if(a.isFormData(s)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((l=o.getContentType())!==!1){const[d,...E]=l?l.split(";").map(w=>w.trim()).filter(Boolean):[];o.setContentType([d||"multipart/form-data",...E].join("; "))}}let u=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(d+":"+E))}const b=Le(e.baseURL,e.url);u.open(e.method.toUpperCase(),Fe(b,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function g(){if(!u)return;const d=N.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!i||i==="text"||i==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:d,config:e,request:u};zt(function(P){n(P),h()},function(P){r(P),h()},w),u=null}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){u&&(r(new m("Request aborted",m.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let E=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||ke;e.timeoutErrorMessage&&(E=e.timeoutErrorMessage),r(new m(E,w.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,u)),u=null},A.hasStandardBrowserEnv&&(c&&a.isFunction(c)&&(c=c(e)),c||c!==!1&&Vt(b))){const d=e.xsrfHeaderName&&e.xsrfCookieName&&Jt.read(e.xsrfCookieName);d&&o.set(e.xsrfHeaderName,d)}s===void 0&&o.setContentType(null),"setRequestHeader"in u&&a.forEach(o.toJSON(),function(E,w){u.setRequestHeader(w,E)}),a.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",pe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=d=>{u&&(r(!d||d.type?new L(null,e,u):d),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const f=Gt(b);if(f&&A.protocols.indexOf(f)===-1){r(new m("Unsupported protocol "+f+":",m.ERR_BAD_REQUEST,e));return}u.send(s||null)})},Q={http:St,xhr:vt};a.forEach(Q,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const he=e=>`- ${e}`,Qt=e=>a.isFunction(e)||e===null||e===!1,_e={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Qt(n)&&(r=Q[(i=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(he).join(`
`):" "+he(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Q};function K(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new L(null,e)}function me(e){return K(e),e.headers=N.from(e.headers),e.data=G.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),_e.getAdapter(e.adapter||se.adapter)(e).then(function(r){return K(e),r.data=G.call(e,e.transformResponse,r),r.headers=N.from(r.headers),r},function(r){return De(r)||(K(e),r&&r.response&&(r.response.data=G.call(e,e.transformResponse,r.response),r.response.headers=N.from(r.response.headers))),Promise.reject(r)})}const ye=e=>e instanceof N?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(h,l,u){return a.isPlainObject(h)&&a.isPlainObject(l)?a.merge.call({caseless:u},h,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(h,l,u){if(a.isUndefined(l)){if(!a.isUndefined(h))return r(void 0,h,u)}else return r(h,l,u)}function o(h,l){if(!a.isUndefined(l))return r(void 0,l)}function i(h,l){if(a.isUndefined(l)){if(!a.isUndefined(h))return r(void 0,h)}else return r(void 0,l)}function c(h,l,u){if(u in t)return r(h,l);if(u in e)return r(void 0,h)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(h,l)=>s(ye(h),ye(l),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(l){const u=p[l]||s,b=u(e[l],t[l],l);a.isUndefined(b)&&u!==c||(n[l]=b)}),n}const je="1.6.2",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const be={};oe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+je+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!be[i]&&(be[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Zt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],p=c===void 0||i(c,o,e);if(p!==!0)throw new m("option "+o+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Z={assertOptions:Zt,validators:oe},C=Z.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new fe,response:new fe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Z.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:Z.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=N.concat(i,o);const c=[];let p=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(p=p&&d.synchronous,c.unshift(d.fulfilled,d.rejected))});const h=[];this.interceptors.response.forEach(function(d){h.push(d.fulfilled,d.rejected)});let l,u=0,b;if(!p){const f=[me.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,h),b=f.length,l=Promise.resolve(n);u<b;)l=l.then(f[u++],f[u++]);return l}b=c.length;let g=n;for(u=0;u<b;){const f=c[u++],d=c[u++];try{g=f(g)}catch(E){d.call(this,E);break}}try{l=me.call(this,g)}catch(f){return Promise.reject(f)}for(u=0,b=h.length;u<b;)l=l.then(h[u++],h[u++]);return l}getUri(t){t=F(this.defaults,t);const n=Le(t.baseURL,t.url);return Fe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(F(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const I=H;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new L(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const Yt=ie;function en(e){return function(n){return e.apply(null,n)}}function tn(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});const nn=Y;function Ie(e){const t=new I(e),n=Ee(I.prototype.request,t);return a.extend(n,I.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ie(F(e,s))},n}const y=Ie(se);y.Axios=I;y.CanceledError=L;y.CancelToken=Yt;y.isCancel=De;y.VERSION=je;y.toFormData=J;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=en;y.isAxiosError=tn;y.mergeConfig=F;y.AxiosHeaders=N;y.formToJSON=e=>Be(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=_e.getAdapter;y.HttpStatusCode=nn;y.default=y;const ee=y;ee.defaults.baseURL="";const S=ee.create({baseURL:ee.defaults.baseURL,timeout:8e3});S.interceptors.request.use(function(e){return sessionStorage.getItem("token")&&(e.headers.Authorization=sessionStorage.getItem("token")),e},function(e){return Promise.reject(e)});S.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)});let R;R="https://api.softwolf.cn";const rn=(e,t)=>S.post(R+"/groups/loginManagement",{groupName:e,password:t}),sn=e=>S.get(R+"/logins/getAllTeamMember",{params:{groupId:e}}),on=e=>S.put(R+"/logins",{...e}),an=()=>S.get(R+"/Share/getAll"),cn=(e,t)=>S.get(R+"/tasks/getTasksByGroupIdAndDate",{params:{date:e,groupId:t}}),un=e=>S.get(R+"/tasks/getSearchUserTask",{params:{userName:e}}),ln=(e,t)=>S.get(R+"/WeekSummary/getUrlByWeekGroupId",{params:{week:e,groupId:t}}),fn=()=>S.get(R+"/WeekSummary/getWeek"),dn=e=>S.get(R+"/logins/getGroupAllUserDuration",{params:{groupId:e}}),pn=e=>S.get(R+"/groups/getGroupInfo",{params:{groupId:e}}),hn=e=>S.post(R+"/LeaderTask/setFormalTeamMemberLeaderTask",{...e}),mn=e=>S.post(R+"/groups/saveGroupTask",{...e}),yn=e=>S.get(R+"/groups/getGroupWeekTask",{params:{groupId:e}});export{dn as a,sn as b,yn as c,mn as d,on as e,an as f,pn as g,un as h,cn as i,fn as j,ln as k,rn as l,hn as s};
