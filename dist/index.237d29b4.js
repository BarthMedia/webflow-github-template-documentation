var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},r=function(t){return t&&t.Math==Math&&t};e=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof t&&t)||function(){return this}()||Function("return this")();var n,o;n=!(o=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var i,a,u,c={};u=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var l=Function.prototype,f=l.call,s=u&&l.bind.bind(f,f);c=u?s:function(t){return function(){return f.apply(t,arguments)}};var p,h={},v="object"==typeof document&&document.all,y=(p={all:v,IS_HTMLDDA:void 0===v&&void 0!==v}).all;h=p.IS_HTMLDDA?function(t){return"function"==typeof t||t===y}:function(t){return"function"==typeof t};var d,g,m,b={};m=function(t){return null==t};var w=TypeError;g=function(t){if(m(t))throw w("Can't call method on "+t);return t};var O=Object;d=function(t){return O(g(t))};var E=c({}.hasOwnProperty);b=Object.hasOwn||function(t,e){return E(d(t),e)};var S,T=Function.prototype,j=n&&Object.getOwnPropertyDescriptor,L=b(T,"name"),x={EXISTS:L,PROPER:L&&"something"===function(){}.name,CONFIGURABLE:L&&(!n||n&&j(T,"name").configurable)}.CONFIGURABLE,P={},_={},C=Object.defineProperty;S=function(t,r){try{C(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r};var I="__core-js_shared__",k=e[I]||S(I,{});_=k;var F=c(Function.toString);h(_.inspectSource)||(_.inspectSource=function(t){return F(t)}),P=_.inspectSource;var D,M,B=e.WeakMap;M=h(B)&&/native code/.test(String(B));var A={},N=p.all;A=p.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:h(t)||t===N}:function(t){return"object"==typeof t?null!==t:h(t)};var R,G,U,z={},q=e.document,H=A(q)&&A(q.createElement);U=function(t){return H?q.createElement(t):{}},G=!n&&!o((function(){return 7!=Object.defineProperty(U("div"),"a",{get:function(){return 7}}).a}));var W;W=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Y,K=String,V=TypeError;Y=function(t){if(A(t))return t;throw V(K(t)+" is not an object")};var X,J,Q={},Z=Function.prototype.call;Q=u?Z.bind(Z):function(){return Z.apply(Z,arguments)};var tt,et={},rt=function(t){return h(t)?t:void 0};tt=function(t,r){return arguments.length<2?rt(e[t]):e[t]&&e[t][r]};var nt={};nt=c({}.isPrototypeOf);var ot,it,at,ut={};ut="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ct,lt,ft=e.process,st=e.Deno,pt=ft&&ft.versions||st&&st.version,ht=pt&&pt.v8;ht&&(lt=(ct=ht.split("."))[0]>0&&ct[0]<4?1:+(ct[0]+ct[1])),!lt&&ut&&(!(ct=ut.match(/Edge\/(\d+)/))||ct[1]>=74)&&(ct=ut.match(/Chrome\/(\d+)/))&&(lt=+ct[1]),at=lt,ot=(it=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&at&&at<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var vt=Object;et=ot?function(t){return"symbol"==typeof t}:function(t){var e=tt("Symbol");return h(e)&&nt(e.prototype,vt(t))};var yt,dt,gt,mt=String;gt=function(t){try{return mt(t)}catch(t){return"Object"}};var bt=TypeError;dt=function(t){if(h(t))return t;throw bt(gt(t)+" is not a function")},yt=function(t,e){var r=t[e];return m(r)?void 0:dt(r)};var wt,Ot=TypeError;wt=function(t,e){var r,n;if("string"===e&&h(r=t.toString)&&!A(n=Q(r,t)))return n;if(h(r=t.valueOf)&&!A(n=Q(r,t)))return n;if("string"!==e&&h(r=t.toString)&&!A(n=Q(r,t)))return n;throw Ot("Can't convert object to primitive value")};var Et;(Et=function(t,e){return _[t]||(_[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.29.0",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",source:"https://github.com/zloirock/core-js"});var St,Tt=0,jt=Math.random(),Lt=c(1..toString);St=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Lt(++Tt+jt,36)};var xt=e.Symbol,Pt=Et("wks"),_t=ot?xt.for||xt:xt&&xt.withoutSetter||St,Ct=TypeError,It=function(t){return b(Pt,t)||(Pt[t]=it&&b(xt,t)?xt[t]:_t("Symbol."+t)),Pt[t]}("toPrimitive");J=function(t,e){if(!A(t)||et(t))return t;var r,n=yt(t,It);if(n){if(void 0===e&&(e="default"),r=Q(n,t,e),!A(r)||et(r))return r;throw Ct("Can't convert object to primitive value")}return void 0===e&&(e="number"),wt(t,e)},X=function(t){var e=J(t,"string");return et(e)?e:e+""};var kt=TypeError,Ft=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,Mt="enumerable",Bt="configurable",At="writable";R=n?W?function(t,e,r){if(Y(t),e=X(e),Y(r),"function"==typeof t&&"prototype"===e&&"value"in r&&At in r&&!r[At]){var n=Dt(t,e);n&&n[At]&&(t[e]=r.value,r={configurable:Bt in r?r[Bt]:n[Bt],enumerable:Mt in r?r[Mt]:n[Mt],writable:!1})}return Ft(t,e,r)}:Ft:function(t,e,r){if(Y(t),e=X(e),Y(r),G)try{return Ft(t,e,r)}catch(t){}if("get"in r||"set"in r)throw kt("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var Nt;Nt=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},z=n?function(t,e,r){return R(t,e,Nt(1,r))}:function(t,e,r){return t[e]=r,t};var Rt,Gt=Et("keys");Rt=function(t){return Gt[t]||(Gt[t]=St(t))};var Ut={};Ut={};var zt,$t,qt,Ht="Object already initialized",Wt=e.TypeError,Yt=e.WeakMap;if(M||_.state){var Kt=_.state||(_.state=new Yt);Kt.get=Kt.get,Kt.has=Kt.has,Kt.set=Kt.set,zt=function(t,e){if(Kt.has(t))throw Wt(Ht);return e.facade=t,Kt.set(t,e),e},$t=function(t){return Kt.get(t)||{}},qt=function(t){return Kt.has(t)}}else{var Vt=Rt("state");Ut[Vt]=!0,zt=function(t,e){if(b(t,Vt))throw Wt(Ht);return e.facade=t,z(t,Vt,e),e},$t=function(t){return b(t,Vt)?t[Vt]:{}},qt=function(t){return b(t,Vt)}}var Xt=(D={set:zt,get:$t,has:qt,enforce:function(t){return qt(t)?$t(t):zt(t,{})},getterFor:function(t){return function(e){var r;if(!A(e)||(r=$t(e)).type!==t)throw Wt("Incompatible receiver, "+t+" required");return r}}}).enforce,Jt=D.get,Qt=String,Zt=Object.defineProperty,te=c("".slice),ee=c("".replace),re=c([].join),ne=n&&!o((function(){return 8!==Zt((function(){}),"length",{value:8}).length})),oe=String(String).split("String"),ie=a=function(t,e,r){"Symbol("===te(Qt(e),0,7)&&(e="["+ee(Qt(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!b(t,"name")||x&&t.name!==e)&&(n?Zt(t,"name",{value:e,configurable:!0}):t.name=e),ne&&r&&b(r,"arity")&&t.length!==r.arity&&Zt(t,"length",{value:r.arity});try{r&&b(r,"constructor")&&r.constructor?n&&Zt(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var o=Xt(t);return b(o,"source")||(o.source=re(oe,"string"==typeof e?e:"")),t};Function.prototype.toString=ie((function(){return h(this)&&Jt(this).source||P(this)}),"toString"),i=function(t,e,r){return r.get&&a(r.get,e,{getter:!0}),r.set&&a(r.set,e,{setter:!0}),R(t,e,r)};var ae;ae=function(){var t=Y(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e};var ue=e.RegExp,ce=ue.prototype;n&&o((function(){var t=!0;try{ue(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",o=function(t,n){Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(ce,"flags").get.call(e)!==n||r!==n}))&&i(ce,"flags",{configurable:!0,get:ae});var le,fe,se,pe={}.propertyIsEnumerable,he=Object.getOwnPropertyDescriptor,ve=he&&!pe.call({1:2},1);se=ve?function(t){var e=he(this,t);return!!e&&e.enumerable}:pe;var ye,de,ge={},me=c({}.toString),be=c("".slice);de=function(t){return be(me(t),8,-1)};var we=Object,Oe=c("".split);ge=o((function(){return!we("z").propertyIsEnumerable(0)}))?function(t){return"String"==de(t)?Oe(t,""):we(t)}:we,ye=function(t){return ge(g(t))};var Ee,Se=Object.getOwnPropertyDescriptor,Te=fe=n?Se:function(t,e){if(t=ye(t),e=X(e),G)try{return Se(t,e)}catch(t){}if(b(t,e))return Nt(!Q(se,t,e),t[e])};Ee=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(h(r)&&a(r,i,n),n.global)o?t[e]=r:S(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:R(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var je,Le,xe,Pe,_e,Ce={},Ie={},ke=Math.ceil,Fe=Math.floor;Ie=Math.trunc||function(t){var e=+t;return(e>0?Fe:ke)(e)},_e=function(t){var e=+t;return e!=e||0===e?0:Ie(e)};var De=Math.max,Me=Math.min;Pe=function(t,e){var r=_e(t);return r<0?De(r+e,0):Me(r,e)};var Be,Ae,Ne=Math.min;Ae=function(t){return t>0?Ne(_e(t),9007199254740991):0},Be=function(t){return Ae(t.length)};var Re=function(t){return function(e,r,n){var o,i=ye(e),a=Be(i),u=Pe(n,a);if(t&&r!=r){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===r)return t||u||0;return!t&&-1}},Ge={includes:Re(!0),indexOf:Re(!1)}.indexOf,Ue=c([].push);xe=function(t,e){var r,n=ye(t),o=0,i=[];for(r in n)!b(Ut,r)&&b(n,r)&&Ue(i,r);for(;e.length>o;)b(n,r=e[o++])&&(~Ge(i,r)||Ue(i,r));return i};var ze,$e=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Le=Object.getOwnPropertyNames||function(t){return xe(t,$e)},ze=Object.getOwnPropertySymbols;var qe=c([].concat);Ce=tt("Reflect","ownKeys")||function(t){var e=Le(Y(t));return ze?qe(e,ze(t)):e},je=function(t,e,r){for(var n=Ce(e),o=R,i=fe,a=0;a<n.length;a++){var u=n[a];b(t,u)||r&&b(r,u)||o(t,u,i(e,u))}};var He={},We=/#|\.prototype\./,Ye=function(t,e){var r=Ve[Ke(t)];return r==Je||r!=Xe&&(h(e)?o(e):!!e)},Ke=Ye.normalize=function(t){return String(t).replace(We,".").toLowerCase()},Ve=Ye.data={},Xe=Ye.NATIVE="N",Je=Ye.POLYFILL="P";He=Ye,le=function(t,r){var n,o,i,a,u,c=t.target,l=t.global,f=t.stat;if(n=l?e:f?e[c]||S(c,{}):(e[c]||{}).prototype)for(o in r){if(a=r[o],i=t.dontCallGetSet?(u=Te(n,o))&&u.value:n[o],!He(l?o:c+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof a==typeof i)continue;je(a,i)}(t.sham||i&&i.sham)&&z(a,"sham",!0),Ee(n,o,a,t)}};var Qe,Ze={},tr=Function.prototype,er=tr.apply,rr=tr.call;Ze="object"==typeof Reflect&&Reflect.apply||(u?rr.bind(er):function(){return rr.apply(er,arguments)});var nr,or,ir=(or=function(t){if("Function"===de(t))return c(t)})(or.bind);nr=function(t,e){return dt(t),void 0===e?t:u?ir(t,e):function(){return t.apply(e,arguments)}};var ar={};ar=tt("document","documentElement");var ur={};ur=c([].slice);var cr={},lr=TypeError;cr=function(t,e){if(t<e)throw lr("Not enough arguments");return t};var fr;fr=/(?:ipad|iphone|ipod).*applewebkit/i.test(ut);var sr,pr,hr,vr,yr=pr={};function dr(){throw new Error("setTimeout has not been defined")}function gr(){throw new Error("clearTimeout has not been defined")}function mr(t){if(hr===setTimeout)return setTimeout(t,0);if((hr===dr||!hr)&&setTimeout)return hr=setTimeout,setTimeout(t,0);try{return hr(t,0)}catch(e){try{return hr.call(null,t,0)}catch(e){return hr.call(this,t,0)}}}!function(){try{hr="function"==typeof setTimeout?setTimeout:dr}catch(t){hr=dr}try{vr="function"==typeof clearTimeout?clearTimeout:gr}catch(t){vr=gr}}();var br,wr=[],Or=!1,Er=-1;function Sr(){Or&&br&&(Or=!1,br.length?wr=br.concat(wr):Er=-1,wr.length&&Tr())}function Tr(){if(!Or){var t=mr(Sr);Or=!0;for(var e=wr.length;e;){for(br=wr,wr=[];++Er<e;)br&&br[Er].run();Er=-1,e=wr.length}br=null,Or=!1,function(t){if(vr===clearTimeout)return clearTimeout(t);if((vr===gr||!vr)&&clearTimeout)return vr=clearTimeout,clearTimeout(t);try{return vr(t)}catch(e){try{return vr.call(null,t)}catch(e){return vr.call(this,t)}}}(t)}}function jr(t,e){this.fun=t,this.array=e}function Lr(){}yr.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];wr.push(new jr(t,e)),1!==wr.length||Or||mr(Tr)},jr.prototype.run=function(){this.fun.apply(null,this.array)},yr.title="browser",yr.browser=!0,yr.env={},yr.argv=[],yr.version="",yr.versions={},yr.on=Lr,yr.addListener=Lr,yr.once=Lr,yr.off=Lr,yr.removeListener=Lr,yr.removeAllListeners=Lr,yr.emit=Lr,yr.prependListener=Lr,yr.prependOnceListener=Lr,yr.listeners=function(t){return[]},yr.binding=function(t){throw new Error("process.binding is not supported")},yr.cwd=function(){return"/"},yr.chdir=function(t){throw new Error("process.chdir is not supported")},yr.umask=function(){return 0},sr=void 0!==pr&&"process"==de(pr);var xr,Pr,_r,Cr,Ir=e.setImmediate,kr=e.clearImmediate,Fr=e.process,Dr=e.Dispatch,Mr=e.Function,Br=e.MessageChannel,Ar=e.String,Nr=0,Rr={},Gr="onreadystatechange";o((function(){xr=e.location}));var Ur=function(t){if(b(Rr,t)){var e=Rr[t];delete Rr[t],e()}},zr=function(t){return function(){Ur(t)}},$r=function(t){Ur(t.data)},qr=function(t){e.postMessage(Ar(t),xr.protocol+"//"+xr.host)};Ir&&kr||(Ir=function(t){cr(arguments.length,1);var e=h(t)?t:Mr(t),r=ur(arguments,1);return Rr[++Nr]=function(){Ze(e,void 0,r)},Pr(Nr),Nr},kr=function(t){delete Rr[t]},sr?Pr=function(t){Fr.nextTick(zr(t))}:Dr&&Dr.now?Pr=function(t){Dr.now(zr(t))}:Br&&!fr?(Cr=(_r=new Br).port2,_r.port1.onmessage=$r,Pr=nr(Cr.postMessage,Cr)):e.addEventListener&&h(e.postMessage)&&!e.importScripts&&xr&&"file:"!==xr.protocol&&!o(qr)?(Pr=qr,e.addEventListener("message",$r,!1)):Pr=Gr in U("script")?function(t){ar.appendChild(U("script"))[Gr]=function(){ar.removeChild(this),Ur(t)}}:function(t){setTimeout(zr(t),0)});var Hr=(Qe={set:Ir,clear:kr}).clear;le({global:!0,bind:!0,enumerable:!0,forced:e.clearImmediate!==Hr},{clearImmediate:Hr});var Wr,Yr,Kr=Qe.set;Yr="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var Vr,Xr=e.Function,Jr=/MSIE .\./.test(ut)||Yr&&((Vr=e.Bun.version.split(".")).length<3||0==Vr[0]&&(Vr[1]<3||3==Vr[1]&&0==Vr[2]));Wr=function(t,e){var r=e?2:1;return Jr?function(n,o){var i=cr(arguments.length,1)>r,a=h(n)?n:Xr(n),u=i?ur(arguments,r):[],c=i?function(){Ze(a,this,u)}:a;return e?t(c,o):t(c)}:t};var Qr=e.setImmediate?Wr(Kr,!1):Kr;le({global:!0,bind:!0,enumerable:!0,forced:e.setImmediate!==Qr},{setImmediate:Qr});var Zr=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),u=new C(n||[]);return o(a,"_invoke",{value:L(t,r,u)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p="suspendedStart",h="suspendedYield",v="executing",y="completed",d={};function g(){}function m(){}function b(){}var w={};l(w,a,(function(){return this}));var O=Object.getPrototypeOf,E=O&&O(O(I([])));E&&E!==r&&n.call(E,a)&&(w=E);var S=b.prototype=g.prototype=Object.create(w);function T(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function L(t,e,r){var n=p;return function(o,i){if(n===v)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=x(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?y:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=y,r.method="throw",r.arg=c.arg)}}}function x(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=s(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:k}}function k(){return{value:e,done:!0}}return m.prototype=b,o(S,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:m,configurable:!0}),m.displayName=l(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,l(t,c,"GeneratorFunction")),t.prototype=Object.create(S),t},t.awrap=function(t){return{__await:t}},T(j.prototype),l(j.prototype,u,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},T(S),l(S,c,"Generator"),l(S,a,(function(){return this})),l(S,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=I,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}({});try{regeneratorRuntime=Zr}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=Zr:Function("r","regeneratorRuntime = r")(Zr)}const tn=[{query:"w_io",name:"Webflow.io development url",type:"dev_url"},{query:"h_url",name:"Local hosting url",type:"host_url"},{query:"d_title",name:"Document title",type:"title"}],en=1.65,rn=.35;function nn(t="Test string.",e=!1,r=(t=>{}),n=console.log,o={initialText:"Copy Snippet to Clipboard",try:"Copying...",success:"Copied!",error:"Failed..."}){document.addEventListener("copy",(e=>{try{e.clipboardData.setData("application/json",t),e.preventDefault(),a(),r("Clipboard event: Copying text command was successful")}catch(t){u(),n("Clipboard event: Oops, unable to copy",t)}}));const i=!!e;function a(){i&&setTimeout((function(){e.innerText=o.success,c()}),rn+1e3)}function u(){i&&setTimeout((function(){e.innerText=o.error,c()}),1e3*rn)}function c(){setTimeout((function(){e.innerText=o.initialText}),1e3*en)}i&&(e.innerText=o.try),function(t){navigator.clipboard?navigator.clipboard.writeText(t).then((function(){a(),r("Async: Copying to clipboard was successful!")}),(function(t){u(),n("Async: Could not copy text: ",t)})):function(t){try{document.execCommand("copy"),a(),r("Fallback: Copying text command was successful")}catch(t){u(),n("Fallback: Oops, unable to copy",t)}}()}(t)}var on=new class{#t=$('[bmg-element="Dev URL Button"]');#e=$('[bmg-element="Clipboard Button"]');initDevUrlButton(t){this.#t.attr("href",t)}initClipboardButton(t){this.#e.attr("href","#"),this.#e.click((function(){nn(t,this)}))}addHandler(t){["load"].forEach((e=>window.addEventListener(e,t)))}};const an={data:{}},un=async function(){try{!function(){const t=window.location.href,e=new URL(t).searchParams;let r="",n="",o="";tn.forEach((t=>{const i=e.get(t.query);"dev_url"===t.type&&(r=i),"host_url"===t.type&&(n=i),"title"===t.type&&(o=i)}));const i={href:r,snippet:`\x3c!-- ${o} --\x3e\n<script defer src="${n}"><\/script>`};an.data.urlSearchParams=i}();const{urlSearchParams:t}=an.data;on.initDevUrlButton(t.href),on.initClipboardButton(t.snippet)}catch(t){console.log(`Error: ${t}`)}};on.addHandler(un);
//# sourceMappingURL=index.237d29b4.js.map