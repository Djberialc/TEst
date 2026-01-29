(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=n(l);fetch(l.href,c)}})();function A_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function yy(){if(t0)return To;t0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return To.Fragment=t,To.jsx=n,To.jsxs=n,To}var e0;function Sy(){return e0||(e0=1,Gf.exports=yy()),Gf.exports}var jt=Sy(),Vf={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function My(){if(n0)return de;n0=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function M(U,W,lt){this.props=U,this.context=W,this.refs=A,this.updater=lt||y}M.prototype.isReactComponent={},M.prototype.setState=function(U,W){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,W,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=M.prototype;function B(U,W,lt){this.props=U,this.context=W,this.refs=A,this.updater=lt||y}var N=B.prototype=new _;N.constructor=B,E(N,M.prototype),N.isPureReactComponent=!0;var D=Array.isArray,$={H:null,A:null,T:null,S:null},V=Object.prototype.hasOwnProperty;function H(U,W,lt,yt,G,ct){return lt=ct.ref,{$$typeof:s,type:U,key:W,ref:lt!==void 0?lt:null,props:ct}}function K(U,W){return H(U.type,W,void 0,void 0,void 0,U.props)}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function b(U){var W={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(lt){return W[lt]})}var I=/\/+/g;function ft(U,W){return typeof U=="object"&&U!==null&&U.key!=null?b(""+U.key):W.toString(36)}function nt(){}function ht(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(nt,nt):(U.status="pending",U.then(function(W){U.status==="pending"&&(U.status="fulfilled",U.value=W)},function(W){U.status==="pending"&&(U.status="rejected",U.reason=W)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function pt(U,W,lt,yt,G){var ct=typeof U;(ct==="undefined"||ct==="boolean")&&(U=null);var St=!1;if(U===null)St=!0;else switch(ct){case"bigint":case"string":case"number":St=!0;break;case"object":switch(U.$$typeof){case s:case t:St=!0;break;case g:return St=U._init,pt(St(U._payload),W,lt,yt,G)}}if(St)return G=G(U),St=yt===""?"."+ft(U,0):yt,D(G)?(lt="",St!=null&&(lt=St.replace(I,"$&/")+"/"),pt(G,W,lt,"",function(kt){return kt})):G!=null&&(C(G)&&(G=K(G,lt+(G.key==null||U&&U.key===G.key?"":(""+G.key).replace(I,"$&/")+"/")+St)),W.push(G)),1;St=0;var Tt=yt===""?".":yt+":";if(D(U))for(var Dt=0;Dt<U.length;Dt++)yt=U[Dt],ct=Tt+ft(yt,Dt),St+=pt(yt,W,lt,ct,G);else if(Dt=v(U),typeof Dt=="function")for(U=Dt.call(U),Dt=0;!(yt=U.next()).done;)yt=yt.value,ct=Tt+ft(yt,Dt++),St+=pt(yt,W,lt,ct,G);else if(ct==="object"){if(typeof U.then=="function")return pt(ht(U),W,lt,yt,G);throw W=String(U),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return St}function k(U,W,lt){if(U==null)return U;var yt=[],G=0;return pt(U,yt,"","",function(ct){return W.call(lt,ct,G++)}),yt}function O(U){if(U._status===-1){var W=U._result;W=W(),W.then(function(lt){(U._status===0||U._status===-1)&&(U._status=1,U._result=lt)},function(lt){(U._status===0||U._status===-1)&&(U._status=2,U._result=lt)}),U._status===-1&&(U._status=0,U._result=W)}if(U._status===1)return U._result.default;throw U._result}var F=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function st(){}return de.Children={map:k,forEach:function(U,W,lt){k(U,function(){W.apply(this,arguments)},lt)},count:function(U){var W=0;return k(U,function(){W++}),W},toArray:function(U){return k(U,function(W){return W})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},de.Component=M,de.Fragment=n,de.Profiler=l,de.PureComponent=B,de.StrictMode=r,de.Suspense=p,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,de.act=function(){throw Error("act(...) is not supported in production builds of React.")},de.cache=function(U){return function(){return U.apply(null,arguments)}},de.cloneElement=function(U,W,lt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=E({},U.props),G=U.key,ct=void 0;if(W!=null)for(St in W.ref!==void 0&&(ct=void 0),W.key!==void 0&&(G=""+W.key),W)!V.call(W,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&W.ref===void 0||(yt[St]=W[St]);var St=arguments.length-2;if(St===1)yt.children=lt;else if(1<St){for(var Tt=Array(St),Dt=0;Dt<St;Dt++)Tt[Dt]=arguments[Dt+2];yt.children=Tt}return H(U.type,G,void 0,void 0,ct,yt)},de.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},de.createElement=function(U,W,lt){var yt,G={},ct=null;if(W!=null)for(yt in W.key!==void 0&&(ct=""+W.key),W)V.call(W,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(G[yt]=W[yt]);var St=arguments.length-2;if(St===1)G.children=lt;else if(1<St){for(var Tt=Array(St),Dt=0;Dt<St;Dt++)Tt[Dt]=arguments[Dt+2];G.children=Tt}if(U&&U.defaultProps)for(yt in St=U.defaultProps,St)G[yt]===void 0&&(G[yt]=St[yt]);return H(U,ct,void 0,void 0,null,G)},de.createRef=function(){return{current:null}},de.forwardRef=function(U){return{$$typeof:h,render:U}},de.isValidElement=C,de.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:O}},de.memo=function(U,W){return{$$typeof:m,type:U,compare:W===void 0?null:W}},de.startTransition=function(U){var W=$.T,lt={};$.T=lt;try{var yt=U(),G=$.S;G!==null&&G(lt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(st,F)}catch(ct){F(ct)}finally{$.T=W}},de.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},de.use=function(U){return $.H.use(U)},de.useActionState=function(U,W,lt){return $.H.useActionState(U,W,lt)},de.useCallback=function(U,W){return $.H.useCallback(U,W)},de.useContext=function(U){return $.H.useContext(U)},de.useDebugValue=function(){},de.useDeferredValue=function(U,W){return $.H.useDeferredValue(U,W)},de.useEffect=function(U,W){return $.H.useEffect(U,W)},de.useId=function(){return $.H.useId()},de.useImperativeHandle=function(U,W,lt){return $.H.useImperativeHandle(U,W,lt)},de.useInsertionEffect=function(U,W){return $.H.useInsertionEffect(U,W)},de.useLayoutEffect=function(U,W){return $.H.useLayoutEffect(U,W)},de.useMemo=function(U,W){return $.H.useMemo(U,W)},de.useOptimistic=function(U,W){return $.H.useOptimistic(U,W)},de.useReducer=function(U,W,lt){return $.H.useReducer(U,W,lt)},de.useRef=function(U){return $.H.useRef(U)},de.useState=function(U){return $.H.useState(U)},de.useSyncExternalStore=function(U,W,lt){return $.H.useSyncExternalStore(U,W,lt)},de.useTransition=function(){return $.H.useTransition()},de.version="19.0.0",de}var i0;function yd(){return i0||(i0=1,Vf.exports=My()),Vf.exports}var Ue=yd();const Ey=A_(Ue);var kf={exports:{}},bo={},Xf={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function Ty(){return a0||(a0=1,(function(s){function t(k,O){var F=k.length;k.push(O);t:for(;0<F;){var st=F-1>>>1,U=k[st];if(0<l(U,O))k[st]=O,k[F]=U,F=st;else break t}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var O=k[0],F=k.pop();if(F!==O){k[0]=F;t:for(var st=0,U=k.length,W=U>>>1;st<W;){var lt=2*(st+1)-1,yt=k[lt],G=lt+1,ct=k[G];if(0>l(yt,F))G<U&&0>l(ct,yt)?(k[st]=ct,k[G]=F,st=G):(k[st]=yt,k[lt]=F,st=lt);else if(G<U&&0>l(ct,F))k[st]=ct,k[G]=F,st=G;else break t}}return O}function l(k,O){var F=k.sortIndex-O.sortIndex;return F!==0?F:k.id-O.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,x=null,v=3,y=!1,E=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function N(k){for(var O=n(m);O!==null;){if(O.callback===null)r(m);else if(O.startTime<=k)r(m),O.sortIndex=O.expirationTime,t(p,O);else break;O=n(m)}}function D(k){if(A=!1,N(k),!E)if(n(p)!==null)E=!0,ht();else{var O=n(m);O!==null&&pt(D,O.startTime-k)}}var $=!1,V=-1,H=5,K=-1;function C(){return!(s.unstable_now()-K<H)}function b(){if($){var k=s.unstable_now();K=k;var O=!0;try{t:{E=!1,A&&(A=!1,_(V),V=-1),y=!0;var F=v;try{e:{for(N(k),x=n(p);x!==null&&!(x.expirationTime>k&&C());){var st=x.callback;if(typeof st=="function"){x.callback=null,v=x.priorityLevel;var U=st(x.expirationTime<=k);if(k=s.unstable_now(),typeof U=="function"){x.callback=U,N(k),O=!0;break e}x===n(p)&&r(p),N(k)}else r(p);x=n(p)}if(x!==null)O=!0;else{var W=n(m);W!==null&&pt(D,W.startTime-k),O=!1}}break t}finally{x=null,v=F,y=!1}O=void 0}}finally{O?I():$=!1}}}var I;if(typeof B=="function")I=function(){B(b)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,nt=ft.port2;ft.port1.onmessage=b,I=function(){nt.postMessage(null)}}else I=function(){M(b,0)};function ht(){$||($=!0,I())}function pt(k,O){V=M(function(){k(s.unstable_now())},O)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){E||y||(E=!0,ht())},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(v){case 1:case 2:case 3:var O=3;break;default:O=v}var F=v;v=O;try{return k()}finally{v=F}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,O){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var F=v;v=k;try{return O()}finally{v=F}},s.unstable_scheduleCallback=function(k,O,F){var st=s.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?st+F:st):F=st,k){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=F+U,k={id:g++,callback:O,priorityLevel:k,startTime:F,expirationTime:U,sortIndex:-1},F>st?(k.sortIndex=F,t(m,k),n(p)===null&&k===n(m)&&(A?(_(V),V=-1):A=!0,pt(D,F-st))):(k.sortIndex=U,t(p,k),E||y||(E=!0,ht())),k},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(k){var O=v;return function(){var F=v;v=O;try{return k.apply(this,arguments)}finally{v=F}}}})(Wf)),Wf}var r0;function by(){return r0||(r0=1,Xf.exports=Ty()),Xf.exports}var qf={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function Ay(){if(s0)return Mn;s0=1;var s=yd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Mn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Mn.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},Mn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Mn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Mn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=h(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(p,{crossOrigin:x,integrity:v,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Mn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Mn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Mn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Mn.requestFormReset=function(p){r.d.r(p)},Mn.unstable_batchedUpdates=function(p,m){return p(m)},Mn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Mn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Mn.version="19.0.0",Mn}var o0;function Ry(){if(o0)return qf.exports;o0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),qf.exports=Ay(),qf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function wy(){if(l0)return bo;l0=1;var s=by(),t=yd(),n=Ry();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),v=Symbol.for("react.consumer"),y=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),N=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),$=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var H=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===H?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case h:return"Portal";case g:return"Profiler";case m:return"StrictMode";case A:return"Suspense";case M:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case y:return(e.displayName||"Context")+".Provider";case v:return(e._context.displayName||"Context")+".Consumer";case E:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return i=e.displayName||null,i!==null?i:K(e.type)||"Memo";case B:i=e._payload,e=e._init;try{return K(e(i))}catch{}}return null}var C=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=Object.assign,I,ft;function nt(e){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+I+e+ft}var ht=!1;function pt(e,i){if(!e||ht)return"";ht=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(dt){var at=dt}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(dt){at=dt}e.call(Et.prototype)}}else{try{throw Error()}catch(dt){at=dt}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(dt){if(dt&&at&&typeof dt.stack=="string")return[dt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],R=d[1];if(S&&R){var P=S.split(`
`),q=R.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<q.length&&!q[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===q.length)for(o=P.length-1,u=q.length-1;1<=o&&0<=u&&P[o]!==q[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==q[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==q[u]){var mt=`
`+P[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{ht=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?nt(a):""}function k(e){switch(e.tag){case 26:case 27:case 5:return nt(e.type);case 16:return nt("Lazy");case 13:return nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return e=pt(e.type,!1),e;case 11:return e=pt(e.type.render,!1),e;case 1:return e=pt(e.type,!0),e;default:return""}}function O(e){try{var i="";do i+=k(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function F(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function st(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function U(e){if(F(e)!==e)throw Error(r(188))}function W(e){var i=e.alternate;if(!i){if(i=F(e),i===null)throw Error(r(188));return i!==e?null:e}for(var a=e,o=i;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return U(u),e;if(d===o)return U(u),i;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,o=d;break}if(R===o){S=!0,o=u,a=d;break}R=R.sibling}if(!S){for(R=d.child;R;){if(R===a){S=!0,a=d,o=u;break}if(R===o){S=!0,o=d,a=u;break}R=R.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:i}function lt(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=lt(e),i!==null)return i;e=e.sibling}return null}var yt=Array.isArray,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function Dt(e){return{current:e}}function kt(e){0>Tt||(e.current=St[Tt],St[Tt]=null,Tt--)}function Bt(e,i){Tt++,St[Tt]=e.current,e.current=i}var ce=Dt(null),xt=Dt(null),At=Dt(null),z=Dt(null);function Yt(e,i){switch(Bt(At,i),Bt(xt,e),Bt(ce,null),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)&&(i=i.namespaceURI)?Cg(i):0;break;default:if(e=e===8?i.parentNode:i,i=e.tagName,e=e.namespaceURI)e=Cg(e),i=Dg(e,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}kt(ce),Bt(ce,i)}function bt(){kt(ce),kt(xt),kt(At)}function Ht(e){e.memoizedState!==null&&Bt(z,e);var i=ce.current,a=Dg(i,e.type);i!==a&&(Bt(xt,e),Bt(ce,a))}function Ut(e){xt.current===e&&(kt(ce),kt(xt)),z.current===e&&(kt(z),xo._currentValue=ct)}var ae=Object.prototype.hasOwnProperty,Ft=s.unstable_scheduleCallback,L=s.unstable_cancelCallback,T=s.unstable_shouldYield,et=s.unstable_requestPaint,ut=s.unstable_now,Mt=s.unstable_getCurrentPriorityLevel,gt=s.unstable_ImmediatePriority,Zt=s.unstable_UserBlockingPriority,Lt=s.unstable_NormalPriority,Gt=s.unstable_LowPriority,ge=s.unstable_IdlePriority,wt=s.log,Xt=s.unstable_setDisableYieldValue,ne=null,$t=null;function Wt(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(ne,e,void 0,(e.current.flags&128)===128)}catch{}}function fe(e){if(typeof wt=="function"&&Xt(e),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(ne,e)}catch{}}var ie=Math.clz32?Math.clz32:zt,Le=Math.log,Y=Math.LN2;function zt(e){return e>>>=0,e===0?32:31-(Le(e)/Y|0)|0}var ot=128,vt=4194304;function Nt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ot(e,i){var a=e.pendingLanes;if(a===0)return 0;var o=0,u=e.suspendedLanes,d=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var R=a&134217727;return R!==0?(a=R&~u,a!==0?o=Nt(a):(d&=R,d!==0?o=Nt(d):e||(S=R&~S,S!==0&&(o=Nt(S))))):(R=a&~u,R!==0?o=Nt(R):d!==0?o=Nt(d):e||(S=a&~S,S!==0&&(o=Nt(S)))),o===0?0:i!==0&&i!==o&&(i&u)===0&&(u=o&-o,S=i&-i,u>=S||u===32&&(S&4194176)!==0)?i:o}function le(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ge(e,i){switch(e){case 1:case 2:case 4:case 8:return i+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(){var e=ot;return ot<<=1,(ot&4194176)===0&&(ot=128),e}function Ae(){var e=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),e}function An(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Rn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xo(e,i,a,o,u,d){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,P=e.expirationTimes,q=e.hiddenUpdates;for(a=S&~a;0<a;){var mt=31-ie(a),Et=1<<mt;R[mt]=0,P[mt]=-1;var at=q[mt];if(at!==null)for(q[mt]=null,mt=0;mt<at.length;mt++){var dt=at[mt];dt!==null&&(dt.lane&=-536870913)}a&=~Et}o!==0&&Ds(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function Ds(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-ie(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function vi(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-ie(a),u=1<<o;u&i|e[o]&i&&(e[o]|=i),a&=~u}}function yr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Us(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Zg(e.type))}function Wo(e,i){var a=G.p;try{return G.p=e,i()}finally{G.p=a}}var Bn=Math.random().toString(36).slice(2),en="__reactFiber$"+Bn,nn="__reactProps$"+Bn,Ui="__reactContainer$"+Bn,Sr="__reactEvents$"+Bn,Ic="__reactListeners$"+Bn,Fc="__reactHandles$"+Bn,qo="__reactResources$"+Bn,w="__reactMarker$"+Bn;function j(e){delete e[en],delete e[nn],delete e[Sr],delete e[Ic],delete e[Fc]}function it(e){var i=e[en];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Ui]||a[en]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=Ng(e);e!==null;){if(a=e[en])return a;e=Ng(e)}return i}e=a,a=e.parentNode}return null}function rt(e){if(e=e[en]||e[Ui]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Z(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function Rt(e){var i=e[qo];return i||(i=e[qo]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ct(e){e[w]=!0}var Kt=new Set,Qt={};function re(e,i){oe(e,i),oe(e+"Capture",i)}function oe(e,i){for(Qt[e]=i,e=0;e<i.length;e++)Kt.add(i[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),De={},Ne={};function xn(e){return ae.call(Ne,e)?!0:ae.call(De,e)?!1:Ee.test(e)?Ne[e]=!0:(De[e]=!0,!1)}function Se(e,i,a){if(xn(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Jt(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function an(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function he(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Un(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function sa(e){var i=Un(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function cn(e){e._valueTracker||(e._valueTracker=sa(e))}function oa(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=Un(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function Ce(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qn=/[\n"\\]/g;function un(e){return e.replace(qn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function yn(e,i,a,o,u,d,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+he(i)):e.value!==""+he(i)&&(e.value=""+he(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?Yn(e,S,he(i)):a!=null?Yn(e,S,he(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+he(R):e.removeAttribute("name")}function oi(e,i,a,o,u,d,S,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+he(a):"",i=i!=null?""+he(i):a,R||i===e.value||(e.value=i),e.defaultValue=i}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Yn(e,i,a){i==="number"&&Ce(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Li(e,i,a,o){if(e=e.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=i.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+he(a),i=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Pd(e,i,a){if(i!=null&&(i=""+he(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+he(a):""}function zd(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(r(92));if(yt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=he(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Mr(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var _v=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bd(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||_v.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Id(e,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in i)o=i[u],i.hasOwnProperty(u)&&a[u]!==o&&Bd(e,u,o)}else for(var d in i)i.hasOwnProperty(d)&&Bd(e,d,i[d])}function Hc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(e){return xv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Gc=null;function Vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Er=null,Tr=null;function Fd(e){var i=rt(e);if(i&&(e=i.stateNode)){var a=e[nn]||null;t:switch(e=i.stateNode,i.type){case"input":if(yn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var u=o[nn]||null;if(!u)throw Error(r(90));yn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&oa(o)}break t;case"textarea":Pd(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Li(e,!!a.multiple,i,!1)}}}var kc=!1;function Hd(e,i,a){if(kc)return e(i,a);kc=!0;try{var o=e(i);return o}finally{if(kc=!1,(Er!==null||Tr!==null)&&(Dl(),Er&&(i=Er,e=Tr,Tr=Er=null,Fd(i),e)))for(i=0;i<e.length;i++)Fd(e[i])}}function Ls(e,i){var a=e.stateNode;if(a===null)return null;var o=a[nn]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var Xc=!1;if(Vt)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){Xc=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{Xc=!1}var la=null,Wc=null,Zo=null;function Gd(){if(Zo)return Zo;var e,i=Wc,a=i.length,o,u="value"in la?la.value:la.textContent,d=u.length;for(e=0;e<a&&i[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&i[a-o]===u[d-o];o++);return Zo=u.slice(e,1<o?1-o:void 0)}function jo(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ko(){return!0}function Vd(){return!1}function Ln(e){function i(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ko:Vd,this.isPropagationStopped=Vd,this}return b(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),i}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=Ln(Ga),Os=b({},Ga,{view:0,detail:0}),yv=Ln(Os),qc,Yc,Ps,Jo=b({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ps&&(Ps&&e.type==="mousemove"?(qc=e.screenX-Ps.screenX,Yc=e.screenY-Ps.screenY):Yc=qc=0,Ps=e),qc)},movementY:function(e){return"movementY"in e?e.movementY:Yc}}),kd=Ln(Jo),Sv=b({},Jo,{dataTransfer:0}),Mv=Ln(Sv),Ev=b({},Os,{relatedTarget:0}),Zc=Ln(Ev),Tv=b({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=Ln(Tv),Av=b({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rv=Ln(Av),wv=b({},Ga,{data:0}),Xd=Ln(wv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Uv[e])?!!i[e]:!1}function jc(){return Lv}var Nv=b({},Os,{key:function(e){if(e.key){var i=Cv[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ov=Ln(Nv),Pv=b({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wd=Ln(Pv),zv=b({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),Bv=Ln(zv),Iv=b({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=Ln(Iv),Hv=b({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=Ln(Hv),Vv=b({},Ga,{newState:0,oldState:0}),kv=Ln(Vv),Xv=[9,13,27,32],Kc=Vt&&"CompositionEvent"in window,zs=null;Vt&&"documentMode"in document&&(zs=document.documentMode);var Wv=Vt&&"TextEvent"in window&&!zs,qd=Vt&&(!Kc||zs&&8<zs&&11>=zs),Yd=" ",Zd=!1;function jd(e,i){switch(e){case"keyup":return Xv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function qv(e,i){switch(e){case"compositionend":return Kd(i);case"keypress":return i.which!==32?null:(Zd=!0,Yd);case"textInput":return e=i.data,e===Yd&&Zd?null:e;default:return null}}function Yv(e,i){if(br)return e==="compositionend"||!Kc&&jd(e,i)?(e=Gd(),Zo=Wc=la=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return qd&&i.locale!=="ko"?null:i.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qd(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Zv[e.type]:i==="textarea"}function Jd(e,i,a,o){Er?Tr?Tr.push(o):Tr=[o]:Er=o,i=Pl(i,"onChange"),0<i.length&&(a=new Qo("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var Bs=null,Is=null;function jv(e){Tg(e,0)}function $o(e){var i=Z(e);if(oa(i))return e}function $d(e,i){if(e==="change")return i}var tp=!1;if(Vt){var Qc;if(Vt){var Jc="oninput"in document;if(!Jc){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),Jc=typeof ep.oninput=="function"}Qc=Jc}else Qc=!1;tp=Qc&&(!document.documentMode||9<document.documentMode)}function np(){Bs&&(Bs.detachEvent("onpropertychange",ip),Is=Bs=null)}function ip(e){if(e.propertyName==="value"&&$o(Is)){var i=[];Jd(i,Is,e,Vc(e)),Hd(jv,i)}}function Kv(e,i,a){e==="focusin"?(np(),Bs=i,Is=a,Bs.attachEvent("onpropertychange",ip)):e==="focusout"&&np()}function Qv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(Is)}function Jv(e,i){if(e==="click")return $o(i)}function $v(e,i){if(e==="input"||e==="change")return $o(i)}function tx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var In=typeof Object.is=="function"?Object.is:tx;function Fs(e,i){if(In(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!ae.call(i,u)||!In(e[u],i[u]))return!1}return!0}function ap(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rp(e,i){var a=ap(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ap(a)}}function sp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?sp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function op(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Ce(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=Ce(e.document)}return i}function $c(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function ex(e,i){var a=op(i);i=e.focusedElem;var o=e.selectionRange;if(a!==i&&i&&i.ownerDocument&&sp(i.ownerDocument.documentElement,i)){if(o!==null&&$c(i)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(a,i.value.length);else if(a=(e=i.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var u=i.textContent.length,d=Math.min(o.start,u);o=o.end===void 0?d:Math.min(o.end,u),!a.extend&&d>o&&(u=o,o=d,d=u),u=rp(i,d);var S=rp(i,o);u&&S&&(a.rangeCount!==1||a.anchorNode!==u.node||a.anchorOffset!==u.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(u.node,u.offset),a.removeAllRanges(),d>o?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=i;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)a=e[i],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var nx=Vt&&"documentMode"in document&&11>=document.documentMode,Ar=null,tu=null,Hs=null,eu=!1;function lp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;eu||Ar==null||Ar!==Ce(o)||(o=Ar,"selectionStart"in o&&$c(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Hs&&Fs(Hs,o)||(Hs=o,o=Pl(tu,"onSelect"),0<o.length&&(i=new Qo("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=Ar)))}function Va(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Rr={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},nu={},cp={};Vt&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function ka(e){if(nu[e])return nu[e];if(!Rr[e])return e;var i=Rr[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in cp)return nu[e]=i[a];return e}var up=ka("animationend"),fp=ka("animationiteration"),hp=ka("animationstart"),ix=ka("transitionrun"),ax=ka("transitionstart"),rx=ka("transitioncancel"),dp=ka("transitionend"),pp=new Map,mp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function li(e,i){pp.set(e,i),re(i,[e])}var Zn=[],wr=0,iu=0;function tl(){for(var e=wr,i=iu=wr=0;i<e;){var a=Zn[i];Zn[i++]=null;var o=Zn[i];Zn[i++]=null;var u=Zn[i];Zn[i++]=null;var d=Zn[i];if(Zn[i++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&gp(a,u,d)}}function el(e,i,a,o){Zn[wr++]=e,Zn[wr++]=i,Zn[wr++]=a,Zn[wr++]=o,iu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function au(e,i,a,o){return el(e,i,a,o),nl(e)}function ca(e,i){return el(e,null,null,i),nl(e)}function gp(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;u&&i!==null&&e.tag===3&&(d=e.stateNode,u=31-ie(a),d=d.hiddenUpdates,e=d[u],e===null?d[u]=[i]:e.push(i),i.lane=a|536870912)}function nl(e){if(50<fo)throw fo=0,ff=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Cr={},_p=new WeakMap;function jn(e,i){if(typeof e=="object"&&e!==null){var a=_p.get(e);return a!==void 0?a:(i={value:e,source:i,stack:O(i)},_p.set(e,i),i)}return{value:e,source:i,stack:O(i)}}var Dr=[],Ur=0,il=null,al=0,Kn=[],Qn=0,Xa=null,Ni=1,Oi="";function Wa(e,i){Dr[Ur++]=al,Dr[Ur++]=il,il=e,al=i}function vp(e,i,a){Kn[Qn++]=Ni,Kn[Qn++]=Oi,Kn[Qn++]=Xa,Xa=e;var o=Ni;e=Oi;var u=32-ie(o)-1;o&=~(1<<u),a+=1;var d=32-ie(i)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ni=1<<32-ie(i)+u|a<<u|o,Oi=d+e}else Ni=1<<d|a<<u|o,Oi=e}function ru(e){e.return!==null&&(Wa(e,1),vp(e,1,0))}function su(e){for(;e===il;)il=Dr[--Ur],Dr[Ur]=null,al=Dr[--Ur],Dr[Ur]=null;for(;e===Xa;)Xa=Kn[--Qn],Kn[Qn]=null,Oi=Kn[--Qn],Kn[Qn]=null,Ni=Kn[--Qn],Kn[Qn]=null}var wn=null,mn=null,Re=!1,ci=null,xi=!1,ou=Error(r(519));function qa(e){var i=Error(r(418,""));throw ks(jn(i,e)),ou}function xp(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[en]=e,i[nn]=o,a){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(a=0;a<po.length;a++)Me(po[a],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),oi(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),cn(i);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),zd(i,o.value,o.defaultValue,o.children),cn(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||wg(i.textContent,a)?(o.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),o.onScroll!=null&&Me("scroll",i),o.onScrollEnd!=null&&Me("scrollend",i),o.onClick!=null&&(i.onclick=zl),i=!0):i=!1,i||qa(e)}function yp(e){for(wn=e.return;wn;)switch(wn.tag){case 3:case 27:xi=!0;return;case 5:case 13:xi=!1;return;default:wn=wn.return}}function Gs(e){if(e!==wn)return!1;if(!Re)return yp(e),Re=!0,!1;var i=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||wf(e.type,e.memoizedProps)),a=!a),a&&(i=!0),i&&mn&&qa(e),yp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){mn=fi(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}mn=null}}else mn=wn?fi(e.stateNode.nextSibling):null;return!0}function Vs(){mn=wn=null,Re=!1}function ks(e){ci===null?ci=[e]:ci.push(e)}var Xs=Error(r(460)),Sp=Error(r(474)),lu={then:function(){}};function Mp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rl(){}function Ep(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(rl,rl),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===Xs?Error(r(483)):e;default:if(typeof i.status=="string")i.then(rl,rl);else{if(e=Ie,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=o}},function(o){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,e===Xs?Error(r(483)):e}throw Ws=i,Xs}}var Ws=null;function Tp(){if(Ws===null)throw Error(r(459));var e=Ws;return Ws=null,e}var Lr=null,qs=0;function sl(e){var i=qs;return qs+=1,Lr===null&&(Lr=[]),Ep(Lr,e,i)}function Ys(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ol(e,i){throw i.$$typeof===c?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function bp(e){var i=e._init;return i(e._payload)}function Ap(e){function i(J,X){if(e){var tt=J.deletions;tt===null?(J.deletions=[X],J.flags|=16):tt.push(X)}}function a(J,X){if(!e)return null;for(;X!==null;)i(J,X),X=X.sibling;return null}function o(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function u(J,X){return J=Sa(J,X),J.index=0,J.sibling=null,J}function d(J,X,tt){return J.index=tt,e?(tt=J.alternate,tt!==null?(tt=tt.index,tt<X?(J.flags|=33554434,X):tt):(J.flags|=33554434,X)):(J.flags|=1048576,X)}function S(J){return e&&J.alternate===null&&(J.flags|=33554434),J}function R(J,X,tt,_t){return X===null||X.tag!==6?(X=nf(tt,J.mode,_t),X.return=J,X):(X=u(X,tt),X.return=J,X)}function P(J,X,tt,_t){var qt=tt.type;return qt===p?mt(J,X,tt.props.children,_t,tt.key):X!==null&&(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===B&&bp(qt)===X.type)?(X=u(X,tt.props),Ys(X,tt),X.return=J,X):(X=bl(tt.type,tt.key,tt.props,null,J.mode,_t),Ys(X,tt),X.return=J,X)}function q(J,X,tt,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==tt.containerInfo||X.stateNode.implementation!==tt.implementation?(X=af(tt,J.mode,_t),X.return=J,X):(X=u(X,tt.children||[]),X.return=J,X)}function mt(J,X,tt,_t,qt){return X===null||X.tag!==7?(X=nr(tt,J.mode,_t,qt),X.return=J,X):(X=u(X,tt),X.return=J,X)}function Et(J,X,tt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=nf(""+X,J.mode,tt),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case f:return tt=bl(X.type,X.key,X.props,null,J.mode,tt),Ys(tt,X),tt.return=J,tt;case h:return X=af(X,J.mode,tt),X.return=J,X;case B:var _t=X._init;return X=_t(X._payload),Et(J,X,tt)}if(yt(X)||V(X))return X=nr(X,J.mode,tt,null),X.return=J,X;if(typeof X.then=="function")return Et(J,sl(X),tt);if(X.$$typeof===y)return Et(J,Ml(J,X),tt);ol(J,X)}return null}function at(J,X,tt,_t){var qt=X!==null?X.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return qt!==null?null:R(J,X,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case f:return tt.key===qt?P(J,X,tt,_t):null;case h:return tt.key===qt?q(J,X,tt,_t):null;case B:return qt=tt._init,tt=qt(tt._payload),at(J,X,tt,_t)}if(yt(tt)||V(tt))return qt!==null?null:mt(J,X,tt,_t,null);if(typeof tt.then=="function")return at(J,X,sl(tt),_t);if(tt.$$typeof===y)return at(J,X,Ml(J,tt),_t);ol(J,tt)}return null}function dt(J,X,tt,_t,qt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return J=J.get(tt)||null,R(X,J,""+_t,qt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case f:return J=J.get(_t.key===null?tt:_t.key)||null,P(X,J,_t,qt);case h:return J=J.get(_t.key===null?tt:_t.key)||null,q(X,J,_t,qt);case B:var ve=_t._init;return _t=ve(_t._payload),dt(J,X,tt,_t,qt)}if(yt(_t)||V(_t))return J=J.get(tt)||null,mt(X,J,_t,qt,null);if(typeof _t.then=="function")return dt(J,X,tt,sl(_t),qt);if(_t.$$typeof===y)return dt(J,X,tt,Ml(X,_t),qt);ol(X,_t)}return null}function te(J,X,tt,_t){for(var qt=null,ve=null,ee=X,se=X=0,dn=null;ee!==null&&se<tt.length;se++){ee.index>se?(dn=ee,ee=null):dn=ee.sibling;var we=at(J,ee,tt[se],_t);if(we===null){ee===null&&(ee=dn);break}e&&ee&&we.alternate===null&&i(J,ee),X=d(we,X,se),ve===null?qt=we:ve.sibling=we,ve=we,ee=dn}if(se===tt.length)return a(J,ee),Re&&Wa(J,se),qt;if(ee===null){for(;se<tt.length;se++)ee=Et(J,tt[se],_t),ee!==null&&(X=d(ee,X,se),ve===null?qt=ee:ve.sibling=ee,ve=ee);return Re&&Wa(J,se),qt}for(ee=o(ee);se<tt.length;se++)dn=dt(ee,J,se,tt[se],_t),dn!==null&&(e&&dn.alternate!==null&&ee.delete(dn.key===null?se:dn.key),X=d(dn,X,se),ve===null?qt=dn:ve.sibling=dn,ve=dn);return e&&ee.forEach(function(wa){return i(J,wa)}),Re&&Wa(J,se),qt}function ue(J,X,tt,_t){if(tt==null)throw Error(r(151));for(var qt=null,ve=null,ee=X,se=X=0,dn=null,we=tt.next();ee!==null&&!we.done;se++,we=tt.next()){ee.index>se?(dn=ee,ee=null):dn=ee.sibling;var wa=at(J,ee,we.value,_t);if(wa===null){ee===null&&(ee=dn);break}e&&ee&&wa.alternate===null&&i(J,ee),X=d(wa,X,se),ve===null?qt=wa:ve.sibling=wa,ve=wa,ee=dn}if(we.done)return a(J,ee),Re&&Wa(J,se),qt;if(ee===null){for(;!we.done;se++,we=tt.next())we=Et(J,we.value,_t),we!==null&&(X=d(we,X,se),ve===null?qt=we:ve.sibling=we,ve=we);return Re&&Wa(J,se),qt}for(ee=o(ee);!we.done;se++,we=tt.next())we=dt(ee,J,se,we.value,_t),we!==null&&(e&&we.alternate!==null&&ee.delete(we.key===null?se:we.key),X=d(we,X,se),ve===null?qt=we:ve.sibling=we,ve=we);return e&&ee.forEach(function(xy){return i(J,xy)}),Re&&Wa(J,se),qt}function Ye(J,X,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===p&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case f:t:{for(var qt=tt.key;X!==null;){if(X.key===qt){if(qt=tt.type,qt===p){if(X.tag===7){a(J,X.sibling),_t=u(X,tt.props.children),_t.return=J,J=_t;break t}}else if(X.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===B&&bp(qt)===X.type){a(J,X.sibling),_t=u(X,tt.props),Ys(_t,tt),_t.return=J,J=_t;break t}a(J,X);break}else i(J,X);X=X.sibling}tt.type===p?(_t=nr(tt.props.children,J.mode,_t,tt.key),_t.return=J,J=_t):(_t=bl(tt.type,tt.key,tt.props,null,J.mode,_t),Ys(_t,tt),_t.return=J,J=_t)}return S(J);case h:t:{for(qt=tt.key;X!==null;){if(X.key===qt)if(X.tag===4&&X.stateNode.containerInfo===tt.containerInfo&&X.stateNode.implementation===tt.implementation){a(J,X.sibling),_t=u(X,tt.children||[]),_t.return=J,J=_t;break t}else{a(J,X);break}else i(J,X);X=X.sibling}_t=af(tt,J.mode,_t),_t.return=J,J=_t}return S(J);case B:return qt=tt._init,tt=qt(tt._payload),Ye(J,X,tt,_t)}if(yt(tt))return te(J,X,tt,_t);if(V(tt)){if(qt=V(tt),typeof qt!="function")throw Error(r(150));return tt=qt.call(tt),ue(J,X,tt,_t)}if(typeof tt.then=="function")return Ye(J,X,sl(tt),_t);if(tt.$$typeof===y)return Ye(J,X,Ml(J,tt),_t);ol(J,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,X!==null&&X.tag===6?(a(J,X.sibling),_t=u(X,tt),_t.return=J,J=_t):(a(J,X),_t=nf(tt,J.mode,_t),_t.return=J,J=_t),S(J)):a(J,X)}return function(J,X,tt,_t){try{qs=0;var qt=Ye(J,X,tt,_t);return Lr=null,qt}catch(ee){if(ee===Xs)throw ee;var ve=ei(29,ee,null,J.mode);return ve.lanes=_t,ve.return=J,ve}finally{}}}var Ya=Ap(!0),Rp=Ap(!1),Nr=Dt(null),ll=Dt(0);function wp(e,i){e=Wi,Bt(ll,e),Bt(Nr,i),Wi=e|i.baseLanes}function cu(){Bt(ll,Wi),Bt(Nr,Nr.current)}function uu(){Wi=ll.current,kt(Nr),kt(ll)}var Jn=Dt(null),yi=null;function ua(e){var i=e.alternate;Bt(rn,rn.current&1),Bt(Jn,e),yi===null&&(i===null||Nr.current!==null||i.memoizedState!==null)&&(yi=e)}function Cp(e){if(e.tag===22){if(Bt(rn,rn.current),Bt(Jn,e),yi===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(yi=e)}}else fa()}function fa(){Bt(rn,rn.current),Bt(Jn,Jn.current)}function Pi(e){kt(Jn),yi===e&&(yi=null),kt(rn)}var rn=Dt(0);function cl(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var sx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},ox=s.unstable_scheduleCallback,lx=s.unstable_NormalPriority,sn={$$typeof:y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fu(){return{controller:new sx,data:new Map,refCount:0}}function Zs(e){e.refCount--,e.refCount===0&&ox(lx,function(){e.controller.abort()})}var js=null,hu=0,Or=0,Pr=null;function cx(e,i){if(js===null){var a=js=[];hu=0,Or=xf(),Pr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return hu++,i.then(Dp,Dp),i}function Dp(){if(--hu===0&&js!==null){Pr!==null&&(Pr.status="fulfilled");var e=js;js=null,Or=0,Pr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ux(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Up=C.S;C.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&cx(e,i),Up!==null&&Up(e,i)};var Za=Dt(null);function du(){var e=Za.current;return e!==null?e:Ie.pooledCache}function ul(e,i){i===null?Bt(Za,Za.current):Bt(Za,i.pool)}function Lp(){var e=du();return e===null?null:{parent:sn._currentValue,pool:e}}var ha=0,_e=null,Oe=null,Ke=null,fl=!1,zr=!1,ja=!1,hl=0,Ks=0,Br=null,fx=0;function je(){throw Error(r(321))}function pu(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!In(e[a],i[a]))return!1;return!0}function mu(e,i,a,o,u,d){return ha=d,_e=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,C.H=e===null||e.memoizedState===null?Ka:da,ja=!1,d=a(o,u),ja=!1,zr&&(d=Op(i,a,o,u)),Np(e),d}function Np(e){C.H=Si;var i=Oe!==null&&Oe.next!==null;if(ha=0,Ke=Oe=_e=null,fl=!1,Ks=0,Br=null,i)throw Error(r(300));e===null||fn||(e=e.dependencies,e!==null&&Sl(e)&&(fn=!0))}function Op(e,i,a,o){_e=e;var u=0;do{if(zr&&(Br=null),Ks=0,zr=!1,25<=u)throw Error(r(301));if(u+=1,Ke=Oe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}C.H=Qa,d=i(a,o)}while(zr);return d}function hx(){var e=C.H,i=e.useState()[0];return i=typeof i.then=="function"?Qs(i):i,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(_e.flags|=1024),i}function gu(){var e=hl!==0;return hl=0,e}function _u(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function vu(e){if(fl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}fl=!1}ha=0,Ke=Oe=_e=null,zr=!1,Ks=hl=0,Br=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?_e.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Qe(){if(Oe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var i=Ke===null?_e.memoizedState:Ke.next;if(i!==null)Ke=i,Oe=e;else{if(e===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ke===null?_e.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}var dl;dl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Qs(e){var i=Ks;return Ks+=1,Br===null&&(Br=[]),e=Ep(Br,e,i),i=_e,(Ke===null?i.memoizedState:Ke.next)===null&&(i=i.alternate,C.H=i===null||i.memoizedState===null?Ka:da),e}function pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qs(e);if(e.$$typeof===y)return Sn(e)}throw Error(r(438,String(e)))}function xu(e){var i=null,a=_e.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=dl(),_e.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=D;return i.index++,a}function zi(e,i){return typeof i=="function"?i(e):i}function ml(e){var i=Qe();return yu(i,Oe,e)}function yu(e,i,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}i.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var R=S=null,P=null,q=i,mt=!1;do{var Et=q.lane&-536870913;if(Et!==q.lane?(Te&Et)===Et:(ha&Et)===Et){var at=q.revertLane;if(at===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),Et===Or&&(mt=!0);else if((ha&at)===at){q=q.next,at===Or&&(mt=!0);continue}else Et={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},P===null?(R=P=Et,S=d):P=P.next=Et,_e.lanes|=at,Ma|=at;Et=q.action,ja&&a(d,Et),d=q.hasEagerState?q.eagerState:a(d,Et)}else at={lane:Et,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},P===null?(R=P=at,S=d):P=P.next=at,_e.lanes|=Et,Ma|=Et;q=q.next}while(q!==null&&q!==i);if(P===null?S=d:P.next=R,!In(d,e.memoizedState)&&(fn=!0,mt&&(a=Pr,a!==null)))throw a;e.memoizedState=d,e.baseState=S,e.baseQueue=P,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Su(e){var i=Qe(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=i.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=e(d,S.action),S=S.next;while(S!==u);In(d,i.memoizedState)||(fn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function Pp(e,i,a){var o=_e,u=Qe(),d=Re;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=i();var S=!In((Oe||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,Tu(Ip.bind(null,o,u,e),[e]),u.getSnapshot!==i||S||Ke!==null&&Ke.memoizedState.tag&1){if(o.flags|=2048,Ir(9,Bp.bind(null,o,u,a,i),{destroy:void 0},null),Ie===null)throw Error(r(349));d||(ha&60)!==0||zp(o,i,a)}return a}function zp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=_e.updateQueue,i===null?(i=dl(),_e.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Bp(e,i,a,o){i.value=a,i.getSnapshot=o,Fp(i)&&Hp(e)}function Ip(e,i,a){return a(function(){Fp(i)&&Hp(e)})}function Fp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!In(e,a)}catch{return!0}}function Hp(e){var i=ca(e,2);i!==null&&Cn(i,e,2)}function Mu(e){var i=Nn();if(typeof e=="function"){var a=e;if(e=a(),ja){fe(!0);try{a()}finally{fe(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},i}function Gp(e,i,a,o){return e.baseState=a,yu(e,Oe,typeof o=="function"?o:zi)}function dx(e,i,a,o,u){if(vl(e))throw Error(r(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};C.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,Vp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Vp(e,i){var a=i.action,o=i.payload,u=e.state;if(i.isTransition){var d=C.T,S={};C.T=S;try{var R=a(u,o),P=C.S;P!==null&&P(S,R),kp(e,i,R)}catch(q){Eu(e,i,q)}finally{C.T=d}}else try{d=a(u,o),kp(e,i,d)}catch(q){Eu(e,i,q)}}function kp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Xp(e,i,o)},function(o){return Eu(e,i,o)}):Xp(e,i,a)}function Xp(e,i,a){i.status="fulfilled",i.value=a,Wp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Vp(e,a)))}function Eu(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Wp(i),i=i.next;while(i!==o)}e.action=null}function Wp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function qp(e,i){return i}function Yp(e,i){if(Re){var a=Ie.formState;if(a!==null){t:{var o=_e;if(Re){if(mn){e:{for(var u=mn,d=xi;u.nodeType!==8;){if(!d){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){mn=fi(u.nextSibling),o=u.data==="F!";break t}}qa(o)}o=!1}o&&(i=a[0])}}return a=Nn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qp,lastRenderedState:i},a.queue=o,a=fm.bind(null,_e,o),o.dispatch=a,o=Mu(!1),d=Cu.bind(null,_e,!1,o.queue),o=Nn(),u={state:i,dispatch:null,action:e,pending:null},o.queue=u,a=dx.bind(null,_e,u,d,a),u.dispatch=a,o.memoizedState=e,[i,a,!1]}function Zp(e){var i=Qe();return jp(i,Oe,e)}function jp(e,i,a){i=yu(e,i,qp)[0],e=ml(zi)[0],i=typeof i=="object"&&i!==null&&typeof i.then=="function"?Qs(i):i;var o=Qe(),u=o.queue,d=u.dispatch;return a!==o.memoizedState&&(_e.flags|=2048,Ir(9,px.bind(null,u,a),{destroy:void 0},null)),[i,d,e]}function px(e,i){e.action=i}function Kp(e){var i=Qe(),a=Oe;if(a!==null)return jp(i,a,e);Qe(),i=i.memoizedState,a=Qe();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function Ir(e,i,a,o){return e={tag:e,create:i,inst:a,deps:o,next:null},i=_e.updateQueue,i===null&&(i=dl(),_e.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Qp(){return Qe().memoizedState}function gl(e,i,a,o){var u=Nn();_e.flags|=e,u.memoizedState=Ir(1|i,a,{destroy:void 0},o===void 0?null:o)}function _l(e,i,a,o){var u=Qe();o=o===void 0?null:o;var d=u.memoizedState.inst;Oe!==null&&o!==null&&pu(o,Oe.memoizedState.deps)?u.memoizedState=Ir(i,a,d,o):(_e.flags|=e,u.memoizedState=Ir(1|i,a,d,o))}function Jp(e,i){gl(8390656,8,e,i)}function Tu(e,i){_l(2048,8,e,i)}function $p(e,i){return _l(4,2,e,i)}function tm(e,i){return _l(4,4,e,i)}function em(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function nm(e,i,a){a=a!=null?a.concat([e]):null,_l(4,4,em.bind(null,i,e),a)}function bu(){}function im(e,i){var a=Qe();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&pu(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function am(e,i){var a=Qe();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&pu(i,o[1]))return o[0];if(o=e(),ja){fe(!0);try{e()}finally{fe(!1)}}return a.memoizedState=[o,i],o}function Au(e,i,a){return a===void 0||(ha&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=sg(),_e.lanes|=e,Ma|=e,a)}function rm(e,i,a,o){return In(a,i)?a:Nr.current!==null?(e=Au(e,a,o),In(e,i)||(fn=!0),e):(ha&42)===0?(fn=!0,e.memoizedState=a):(e=sg(),_e.lanes|=e,Ma|=e,i)}function sm(e,i,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var S=C.T,R={};C.T=R,Cu(e,!1,i,a);try{var P=u(),q=C.S;if(q!==null&&q(R,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var mt=ux(P,o);Js(e,i,mt,Vn(e))}else Js(e,i,o,Vn(e))}catch(Et){Js(e,i,{then:function(){},status:"rejected",reason:Et},Vn())}finally{G.p=d,C.T=S}}function mx(){}function Ru(e,i,a,o){if(e.tag!==5)throw Error(r(476));var u=om(e).queue;sm(e,u,i,ct,a===null?mx:function(){return lm(e),a(o)})}function om(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:ct},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function lm(e){var i=om(e).next.queue;Js(e,i,{},Vn())}function wu(){return Sn(xo)}function cm(){return Qe().memoizedState}function um(){return Qe().memoizedState}function gx(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=Vn();e=ga(a);var o=_a(i,e,a);o!==null&&(Cn(o,i,a),eo(o,i,a)),i={cache:fu()},e.payload=i;return}i=i.return}}function _x(e,i,a){var o=Vn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},vl(e)?hm(i,a):(a=au(e,i,a,o),a!==null&&(Cn(a,e,o),dm(a,i,o)))}function fm(e,i,a){var o=Vn();Js(e,i,a,o)}function Js(e,i,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(e))hm(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,R=d(S,a);if(u.hasEagerState=!0,u.eagerState=R,In(R,S))return el(e,i,u,0),Ie===null&&tl(),!1}catch{}finally{}if(a=au(e,i,u,o),a!==null)return Cn(a,e,o),dm(a,i,o),!0}return!1}function Cu(e,i,a,o){if(o={lane:2,revertLane:xf(),action:o,hasEagerState:!1,eagerState:null,next:null},vl(e)){if(i)throw Error(r(479))}else i=au(e,a,o,2),i!==null&&Cn(i,e,2)}function vl(e){var i=e.alternate;return e===_e||i!==null&&i===_e}function hm(e,i){zr=fl=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function dm(e,i,a){if((a&4194176)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,vi(e,a)}}var Si={readContext:Sn,use:pl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je};Si.useCacheRefresh=je,Si.useMemoCache=je,Si.useHostTransitionStatus=je,Si.useFormState=je,Si.useActionState=je,Si.useOptimistic=je;var Ka={readContext:Sn,use:pl,useCallback:function(e,i){return Nn().memoizedState=[e,i===void 0?null:i],e},useContext:Sn,useEffect:Jp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,gl(4194308,4,em.bind(null,i,e),a)},useLayoutEffect:function(e,i){return gl(4194308,4,e,i)},useInsertionEffect:function(e,i){gl(4,2,e,i)},useMemo:function(e,i){var a=Nn();i=i===void 0?null:i;var o=e();if(ja){fe(!0);try{e()}finally{fe(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=Nn();if(a!==void 0){var u=a(i);if(ja){fe(!0);try{a(i)}finally{fe(!1)}}}else u=i;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=_x.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var i=Nn();return e={current:e},i.memoizedState=e},useState:function(e){e=Mu(e);var i=e.queue,a=fm.bind(null,_e,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:bu,useDeferredValue:function(e,i){var a=Nn();return Au(a,e,i)},useTransition:function(){var e=Mu(!1);return e=sm.bind(null,_e,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=_e,u=Nn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),Ie===null)throw Error(r(349));(Te&60)!==0||zp(o,i,a)}u.memoizedState=a;var d={value:a,getSnapshot:i};return u.queue=d,Jp(Ip.bind(null,o,d,e),[e]),o.flags|=2048,Ir(9,Bp.bind(null,o,d,a,i),{destroy:void 0},null),a},useId:function(){var e=Nn(),i=Ie.identifierPrefix;if(Re){var a=Oi,o=Ni;a=(o&~(1<<32-ie(o)-1)).toString(32)+a,i=":"+i+"R"+a,a=hl++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=fx++,i=":"+i+"r"+a.toString(32)+":";return e.memoizedState=i},useCacheRefresh:function(){return Nn().memoizedState=gx.bind(null,_e)}};Ka.useMemoCache=xu,Ka.useHostTransitionStatus=wu,Ka.useFormState=Yp,Ka.useActionState=Yp,Ka.useOptimistic=function(e){var i=Nn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Cu.bind(null,_e,!0,a),a.dispatch=i,[e,i]};var da={readContext:Sn,use:pl,useCallback:im,useContext:Sn,useEffect:Tu,useImperativeHandle:nm,useInsertionEffect:$p,useLayoutEffect:tm,useMemo:am,useReducer:ml,useRef:Qp,useState:function(){return ml(zi)},useDebugValue:bu,useDeferredValue:function(e,i){var a=Qe();return rm(a,Oe.memoizedState,e,i)},useTransition:function(){var e=ml(zi)[0],i=Qe().memoizedState;return[typeof e=="boolean"?e:Qs(e),i]},useSyncExternalStore:Pp,useId:cm};da.useCacheRefresh=um,da.useMemoCache=xu,da.useHostTransitionStatus=wu,da.useFormState=Zp,da.useActionState=Zp,da.useOptimistic=function(e,i){var a=Qe();return Gp(a,Oe,e,i)};var Qa={readContext:Sn,use:pl,useCallback:im,useContext:Sn,useEffect:Tu,useImperativeHandle:nm,useInsertionEffect:$p,useLayoutEffect:tm,useMemo:am,useReducer:Su,useRef:Qp,useState:function(){return Su(zi)},useDebugValue:bu,useDeferredValue:function(e,i){var a=Qe();return Oe===null?Au(a,e,i):rm(a,Oe.memoizedState,e,i)},useTransition:function(){var e=Su(zi)[0],i=Qe().memoizedState;return[typeof e=="boolean"?e:Qs(e),i]},useSyncExternalStore:Pp,useId:cm};Qa.useCacheRefresh=um,Qa.useMemoCache=xu,Qa.useHostTransitionStatus=wu,Qa.useFormState=Kp,Qa.useActionState=Kp,Qa.useOptimistic=function(e,i){var a=Qe();return Oe!==null?Gp(a,Oe,e,i):(a.baseState=e,[e,a.queue.dispatch])};function Du(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:b({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Uu={isMounted:function(e){return(e=e._reactInternals)?F(e)===e:!1},enqueueSetState:function(e,i,a){e=e._reactInternals;var o=Vn(),u=ga(o);u.payload=i,a!=null&&(u.callback=a),i=_a(e,u,o),i!==null&&(Cn(i,e,o),eo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=Vn(),u=ga(o);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=_a(e,u,o),i!==null&&(Cn(i,e,o),eo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=Vn(),o=ga(a);o.tag=2,i!=null&&(o.callback=i),i=_a(e,o,a),i!==null&&(Cn(i,e,a),eo(i,e,a))}};function pm(e,i,a,o,u,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,S):i.prototype&&i.prototype.isPureReactComponent?!Fs(a,o)||!Fs(u,d):!0}function mm(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&Uu.enqueueReplaceState(i,i.state,null)}function Ja(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=b({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function gm(e){xl(e)}function _m(e){console.error(e)}function vm(e){xl(e)}function yl(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function xm(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Lu(e,i,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(e,i)},a}function ym(e){return e=ga(e),e.tag=3,e}function Sm(e,i,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){xm(i,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){xm(i,a,o),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function vx(e,i,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&to(i,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 13:return yi===null?pf():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===lu?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),gf(e,o,u)),!1;case 22:return a.flags|=65536,o===lu?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),gf(e,o,u)),!1}throw Error(r(435,a.tag))}return gf(e,o,u),pf(),!1}if(Re)return i=Jn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,o!==ou&&(e=Error(r(422),{cause:o}),ks(jn(e,a)))):(o!==ou&&(i=Error(r(423),{cause:o}),ks(jn(i,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=jn(o,a),u=Lu(e.stateNode,o,u),Yu(e,u),qe!==4&&(qe=2)),!1;var d=Error(r(520),{cause:o});if(d=jn(d,a),co===null?co=[d]:co.push(d),qe!==4&&(qe=2),i===null)return!0;o=jn(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Lu(a.stateNode,o,e),Yu(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ea===null||!Ea.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ym(u),Sm(u,e,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var Mm=Error(r(461)),fn=!1;function gn(e,i,a,o){i.child=e===null?Rp(i,null,a,o):Ya(i,e.child,a,o)}function Em(e,i,a,o,u){a=a.render;var d=i.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return tr(i),o=mu(e,i,a,S,d,u),R=gu(),e!==null&&!fn?(_u(e,i,u),Bi(e,i,u)):(Re&&R&&ru(i),i.flags|=1,gn(e,i,o,u),i.child)}function Tm(e,i,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!ef(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,bm(e,i,d,o,u)):(e=bl(a.type,null,o,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Gu(e,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:Fs,a(S,o)&&e.ref===i.ref)return Bi(e,i,u)}return i.flags|=1,e=Sa(d,o),e.ref=i.ref,e.return=i,i.child=e}function bm(e,i,a,o,u){if(e!==null){var d=e.memoizedProps;if(Fs(d,o)&&e.ref===i.ref)if(fn=!1,i.pendingProps=o=d,Gu(e,u))(e.flags&131072)!==0&&(fn=!0);else return i.lanes=e.lanes,Bi(e,i,u)}return Nu(e,i,a,o,u)}function Am(e,i,a){var o=i.pendingProps,u=o.children,d=(i.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if($s(e,i),o.mode==="hidden"||d){if((i.flags&128)!==0){if(o=S!==null?S.baseLanes|a:a,e!==null){for(u=i.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return Rm(e,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(i,S!==null?S.cachePool:null),S!==null?wp(i,S):cu(),Cp(i);else return i.lanes=i.childLanes=536870912,Rm(e,i,S!==null?S.baseLanes|a:a,a)}else S!==null?(ul(i,S.cachePool),wp(i,S),fa(),i.memoizedState=null):(e!==null&&ul(i,null),cu(),fa());return gn(e,i,u,a),i.child}function Rm(e,i,a,o){var u=du();return u=u===null?null:{parent:sn._currentValue,pool:u},i.memoizedState={baseLanes:a,cachePool:u},e!==null&&ul(i,null),cu(),Cp(i),e!==null&&to(e,i,o,!0),null}function $s(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(i.flags|=2097664)}}function Nu(e,i,a,o,u){return tr(i),a=mu(e,i,a,o,void 0,u),o=gu(),e!==null&&!fn?(_u(e,i,u),Bi(e,i,u)):(Re&&o&&ru(i),i.flags|=1,gn(e,i,a,u),i.child)}function wm(e,i,a,o,u,d){return tr(i),i.updateQueue=null,a=Op(i,o,a,u),Np(e),o=gu(),e!==null&&!fn?(_u(e,i,d),Bi(e,i,d)):(Re&&o&&ru(i),i.flags|=1,gn(e,i,a,d),i.child)}function Cm(e,i,a,o,u){if(tr(i),i.stateNode===null){var d=Cr,S=a.contextType;typeof S=="object"&&S!==null&&(d=Sn(S)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Uu,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Wu(i),S=a.contextType,d.context=typeof S=="object"&&S!==null?Sn(S):Cr,d.state=i.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Du(i,a,S,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Uu.enqueueReplaceState(d,d.state,null),io(i,o,d,u),no(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var R=i.memoizedProps,P=Ja(a,R);d.props=P;var q=d.context,mt=a.contextType;S=Cr,typeof mt=="object"&&mt!==null&&(S=Sn(mt));var Et=a.getDerivedStateFromProps;mt=typeof Et=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,mt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||q!==S)&&mm(i,d,o,S),ma=!1;var at=i.memoizedState;d.state=at,io(i,o,d,u),no(),q=i.memoizedState,R||at!==q||ma?(typeof Et=="function"&&(Du(i,a,Et,o),q=i.memoizedState),(P=ma||pm(i,a,P,o,at,q,S))?(mt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=q),d.props=o,d.state=q,d.context=S,o=P):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,qu(e,i),S=i.memoizedProps,mt=Ja(a,S),d.props=mt,Et=i.pendingProps,at=d.context,q=a.contextType,P=Cr,typeof q=="object"&&q!==null&&(P=Sn(q)),R=a.getDerivedStateFromProps,(q=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==Et||at!==P)&&mm(i,d,o,P),ma=!1,at=i.memoizedState,d.state=at,io(i,o,d,u),no();var dt=i.memoizedState;S!==Et||at!==dt||ma||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof R=="function"&&(Du(i,a,R,o),dt=i.memoizedState),(mt=ma||pm(i,a,mt,o,at,dt,P)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(q||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,dt,P),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,dt,P)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=dt),d.props=o,d.state=dt,d.context=P,o=mt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,$s(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=Ya(i,e.child,null,u),i.child=Ya(i,null,a,u)):gn(e,i,a,u),i.memoizedState=d.state,e=i.child):e=Bi(e,i,u),e}function Dm(e,i,a,o){return Vs(),i.flags|=256,gn(e,i,a,o),i.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function Pu(e){return{baseLanes:e,cachePool:Lp()}}function zu(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=ni),e}function Um(e,i,a){var o=i.pendingProps,u=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(u=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Re){if(u?ua(i):fa(),Re){var R=mn,P;if(P=R){t:{for(P=R,R=xi;P.nodeType!==8;){if(!R){R=null;break t}if(P=fi(P.nextSibling),P===null){R=null;break t}}R=P}R!==null?(i.memoizedState={dehydrated:R,treeContext:Xa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912},P=ei(18,null,null,0),P.stateNode=R,P.return=i,i.child=P,wn=i,mn=null,P=!0):P=!1}P||qa(i)}if(R=i.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return R.data==="$!"?i.lanes=16:i.lanes=536870912,null;Pi(i)}return R=o.children,o=o.fallback,u?(fa(),u=i.mode,R=Iu({mode:"hidden",children:R},u),o=nr(o,u,a,null),R.return=i,o.return=i,R.sibling=o,i.child=R,u=i.child,u.memoizedState=Pu(a),u.childLanes=zu(e,S,a),i.memoizedState=Ou,o):(ua(i),Bu(i,R))}if(P=e.memoizedState,P!==null&&(R=P.dehydrated,R!==null)){if(d)i.flags&256?(ua(i),i.flags&=-257,i=Fu(e,i,a)):i.memoizedState!==null?(fa(),i.child=e.child,i.flags|=128,i=null):(fa(),u=o.fallback,R=i.mode,o=Iu({mode:"visible",children:o.children},R),u=nr(u,R,a,null),u.flags|=2,o.return=i,u.return=i,o.sibling=u,i.child=o,Ya(i,e.child,null,a),o=i.child,o.memoizedState=Pu(a),o.childLanes=zu(e,S,a),i.memoizedState=Ou,i=u);else if(ua(i),R.data==="$!"){if(S=R.nextSibling&&R.nextSibling.dataset,S)var q=S.dgst;S=q,o=Error(r(419)),o.stack="",o.digest=S,ks({value:o,source:null,stack:null}),i=Fu(e,i,a)}else if(fn||to(e,i,a,!1),S=(a&e.childLanes)!==0,fn||S){if(S=Ie,S!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane)throw P.retryLane=o,ca(e,o),Cn(S,e,o),Mm}R.data==="$?"||pf(),i=Fu(e,i,a)}else R.data==="$?"?(i.flags|=128,i.child=e.child,i=Nx.bind(null,e),R._reactRetry=i,i=null):(e=P.treeContext,mn=fi(R.nextSibling),wn=i,Re=!0,ci=null,xi=!1,e!==null&&(Kn[Qn++]=Ni,Kn[Qn++]=Oi,Kn[Qn++]=Xa,Ni=e.id,Oi=e.overflow,Xa=i),i=Bu(i,o.children),i.flags|=4096);return i}return u?(fa(),u=o.fallback,R=i.mode,P=e.child,q=P.sibling,o=Sa(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&31457280,q!==null?u=Sa(q,u):(u=nr(u,R,a,null),u.flags|=2),u.return=i,o.return=i,o.sibling=u,i.child=o,o=u,u=i.child,R=e.child.memoizedState,R===null?R=Pu(a):(P=R.cachePool,P!==null?(q=sn._currentValue,P=P.parent!==q?{parent:q,pool:q}:P):P=Lp(),R={baseLanes:R.baseLanes|a,cachePool:P}),u.memoizedState=R,u.childLanes=zu(e,S,a),i.memoizedState=Ou,o):(ua(i),a=e.child,e=a.sibling,a=Sa(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=a,i.memoizedState=null,a)}function Bu(e,i){return i=Iu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Iu(e,i){return ig(e,i,0,null)}function Fu(e,i,a){return Ya(i,e.child,null,a),e=Bu(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Lm(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),ku(e.return,i,a)}function Hu(e,i,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function Nm(e,i,a){var o=i.pendingProps,u=o.revealOrder,d=o.tail;if(gn(e,i,o.children,a),o=rn.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lm(e,a,i);else if(e.tag===19)Lm(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Bt(rn,o),u){case"forwards":for(a=i.child,u=null;a!==null;)e=a.alternate,e!==null&&cl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Hu(i,!1,u,a,d);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&cl(e)===null){i.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Hu(i,!0,a,null,d);break;case"together":Hu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Bi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Ma|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(to(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,a=Sa(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Sa(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Gu(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function xx(e,i,a){switch(i.tag){case 3:Yt(i,i.stateNode.containerInfo),pa(i,sn,e.memoizedState.cache),Vs();break;case 27:case 5:Ht(i);break;case 4:Yt(i,i.stateNode.containerInfo);break;case 10:pa(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(ua(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Um(e,i,a):(ua(i),e=Bi(e,i,a),e!==null?e.sibling:null);ua(i);break;case 19:var u=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(to(e,i,a,!1),o=(a&i.childLanes)!==0),u){if(o)return Nm(e,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Bt(rn,rn.current),o)break;return null;case 22:case 23:return i.lanes=0,Am(e,i,a);case 24:pa(i,sn,e.memoizedState.cache)}return Bi(e,i,a)}function Om(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)fn=!0;else{if(!Gu(e,a)&&(i.flags&128)===0)return fn=!1,xx(e,i,a);fn=(e.flags&131072)!==0}else fn=!1,Re&&(i.flags&1048576)!==0&&vp(i,al,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var o=i.elementType,u=o._init;if(o=u(o._payload),i.type=o,typeof o=="function")ef(o)?(e=Ja(o,e),i.tag=1,i=Cm(null,i,o,e,a)):(i.tag=0,i=Nu(null,i,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===E){i.tag=11,i=Em(null,i,o,e,a);break t}else if(u===_){i.tag=14,i=Tm(null,i,o,e,a);break t}}throw i=K(o)||o,Error(r(306,i,""))}}return i;case 0:return Nu(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,u=Ja(o,i.pendingProps),Cm(e,i,o,u,a);case 3:t:{if(Yt(i,i.stateNode.containerInfo),e===null)throw Error(r(387));var d=i.pendingProps;u=i.memoizedState,o=u.element,qu(e,i),io(i,d,null,a);var S=i.memoizedState;if(d=S.cache,pa(i,sn,d),d!==u.cache&&Xu(i,[sn],a,!0),no(),d=S.element,u.isDehydrated)if(u={element:d,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=u,i.memoizedState=u,i.flags&256){i=Dm(e,i,d,a);break t}else if(d!==o){o=jn(Error(r(424)),i),ks(o),i=Dm(e,i,d,a);break t}else for(mn=fi(i.stateNode.containerInfo.firstChild),wn=i,Re=!0,ci=null,xi=!0,a=Rp(i,null,d,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Vs(),d===o){i=Bi(e,i,a);break t}gn(e,i,d,a)}i=i.child}return i;case 26:return $s(e,i),e===null?(a=Bg(i.type,null,i.pendingProps,null))?i.memoizedState=a:Re||(a=i.type,e=i.pendingProps,o=Bl(At.current).createElement(a),o[en]=i,o[nn]=e,_n(o,a,e),Ct(o),i.stateNode=o):i.memoizedState=Bg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ht(i),e===null&&Re&&(o=i.stateNode=Og(i.type,i.pendingProps,At.current),wn=i,xi=!0,mn=fi(o.firstChild)),o=i.pendingProps.children,e!==null||Re?gn(e,i,o,a):i.child=Ya(i,null,o,a),$s(e,i),i.child;case 5:return e===null&&Re&&((u=o=mn)&&(o=jx(o,i.type,i.pendingProps,xi),o!==null?(i.stateNode=o,wn=i,mn=fi(o.firstChild),xi=!1,u=!0):u=!1),u||qa(i)),Ht(i),u=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,o=d.children,wf(u,d)?o=null:S!==null&&wf(u,S)&&(i.flags|=32),i.memoizedState!==null&&(u=mu(e,i,hx,null,null,a),xo._currentValue=u),$s(e,i),gn(e,i,o,a),i.child;case 6:return e===null&&Re&&((e=a=mn)&&(a=Kx(a,i.pendingProps,xi),a!==null?(i.stateNode=a,wn=i,mn=null,e=!0):e=!1),e||qa(i)),null;case 13:return Um(e,i,a);case 4:return Yt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Ya(i,null,o,a):gn(e,i,o,a),i.child;case 11:return Em(e,i,i.type,i.pendingProps,a);case 7:return gn(e,i,i.pendingProps,a),i.child;case 8:return gn(e,i,i.pendingProps.children,a),i.child;case 12:return gn(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,pa(i,i.type,o.value),gn(e,i,o.children,a),i.child;case 9:return u=i.type._context,o=i.pendingProps.children,tr(i),u=Sn(u),o=o(u),i.flags|=1,gn(e,i,o,a),i.child;case 14:return Tm(e,i,i.type,i.pendingProps,a);case 15:return bm(e,i,i.type,i.pendingProps,a);case 19:return Nm(e,i,a);case 22:return Am(e,i,a);case 24:return tr(i),o=Sn(sn),e===null?(u=du(),u===null&&(u=Ie,d=fu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),i.memoizedState={parent:o,cache:u},Wu(i),pa(i,sn,u)):((e.lanes&a)!==0&&(qu(e,i),io(i,null,null,a),no()),u=e.memoizedState,d=i.memoizedState,u.parent!==o?(u={parent:o,cache:o},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),pa(i,sn,o)):(o=d.cache,pa(i,sn,o),o!==u.cache&&Xu(i,[sn],a,!0))),gn(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}var Vu=Dt(null),$a=null,Ii=null;function pa(e,i,a){Bt(Vu,i._currentValue),i._currentValue=a}function Fi(e){e._currentValue=Vu.current,kt(Vu)}function ku(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function Xu(e,i,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;t:for(;d!==null;){var R=d;d=u;for(var P=0;P<i.length;P++)if(R.context===i[P]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),ku(d.return,a,e),o||(S=null);break t}d=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),ku(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function to(e,i,a,o){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var R=u.type;In(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===z.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}u=u.return}e!==null&&Xu(i,e,a,o),i.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!In(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tr(e){$a=e,Ii=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sn(e){return Pm($a,e)}function Ml(e,i){return $a===null&&tr(e),Pm(e,i)}function Pm(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Ii===null){if(e===null)throw Error(r(308));Ii=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ii=Ii.next=i;return a}var ma=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(ke&2)!==0){var u=o.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),o.pending=i,i=nl(e),gp(e,null,a),i}return el(e,o,i,a),nl(e)}function eo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194176)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,vi(e,a)}}function Yu(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=i:d=d.next=i}else u=d=i;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Zu=!1;function no(){if(Zu){var e=Pr;if(e!==null)throw e}}function io(e,i,a,o){Zu=!1;var u=e.updateQueue;ma=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var P=R,q=P.next;P.next=null,S===null?d=q:S.next=q,S=P;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,R=mt.lastBaseUpdate,R!==S&&(R===null?mt.firstBaseUpdate=q:R.next=q,mt.lastBaseUpdate=P))}if(d!==null){var Et=u.baseState;S=0,mt=q=P=null,R=d;do{var at=R.lane&-536870913,dt=at!==R.lane;if(dt?(Te&at)===at:(o&at)===at){at!==0&&at===Or&&(Zu=!0),mt!==null&&(mt=mt.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var te=e,ue=R;at=i;var Ye=a;switch(ue.tag){case 1:if(te=ue.payload,typeof te=="function"){Et=te.call(Ye,Et,at);break t}Et=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ue.payload,at=typeof te=="function"?te.call(Ye,Et,at):te,at==null)break t;Et=b({},Et,at);break t;case 2:ma=!0}}at=R.callback,at!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[at]:dt.push(at))}else dt={lane:at,tag:R.tag,payload:R.payload,callback:R.callback,next:null},mt===null?(q=mt=dt,P=Et):mt=mt.next=dt,S|=at;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;dt=R,R=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);mt===null&&(P=Et),u.baseState=P,u.firstBaseUpdate=q,u.lastBaseUpdate=mt,d===null&&(u.shared.lanes=0),Ma|=S,e.lanes=S,e.memoizedState=Et}}function zm(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function Bm(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)zm(a[e],i)}function ao(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(R){Be(i,i.return,R)}}function va(e,i,a){try{var o=i.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=i;var P=a;try{R()}catch(q){Be(u,P,q)}}}o=o.next}while(o!==d)}}catch(q){Be(i,i.return,q)}}function Im(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Bm(i,a)}catch(o){Be(e,e.return,o)}}}function Fm(e,i,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,i,o)}}function er(e,i){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var u=o;break;default:u=o}typeof a=="function"?e.refCleanup=a(u):a.current=u}}catch(d){Be(e,i,d)}}function Fn(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,i,u)}else a.current=null}function Hm(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Gm(e,i,a){try{var o=e.stateNode;Xx(o,e.type,a,i),o[nn]=i}catch(u){Be(e,e.return,u)}}function Vm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function ju(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ku(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(e,i):a.insertBefore(e,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(e,a)):(i=a,i.appendChild(e)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=zl));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(Ku(e,i,a),e=e.sibling;e!==null;)Ku(e,i,a),e=e.sibling}function El(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(El(e,i,a),e=e.sibling;e!==null;)El(e,i,a),e=e.sibling}var Hi=!1,We=!1,Qu=!1,km=typeof WeakSet=="function"?WeakSet:Set,hn=null,Xm=!1;function yx(e,i){if(e=e.containerInfo,Af=kl,e=op(e),$c(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var S=0,R=-1,P=-1,q=0,mt=0,Et=e,at=null;e:for(;;){for(var dt;Et!==a||u!==0&&Et.nodeType!==3||(R=S+u),Et!==d||o!==0&&Et.nodeType!==3||(P=S+o),Et.nodeType===3&&(S+=Et.nodeValue.length),(dt=Et.firstChild)!==null;)at=Et,Et=dt;for(;;){if(Et===e)break e;if(at===a&&++q===u&&(R=S),at===d&&++mt===o&&(P=S),(dt=Et.nextSibling)!==null)break;Et=at,at=Et.parentNode}Et=dt}a=R===-1||P===-1?null:{start:R,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:e,selectionRange:a},kl=!1,hn=i;hn!==null;)if(i=hn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,hn=e;else for(;hn!==null;){switch(i=hn,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var te=Ja(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(te,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ue){Be(a,a.return,ue)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Uf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,hn=e;break}hn=i.return}return te=Xm,Xm=!1,te}function Wm(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(e,a),o&4&&ao(5,a);break;case 1:if(Vi(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(R){Be(a,a.return,R)}else{var u=Ja(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(R){Be(a,a.return,R)}}o&64&&Im(a),o&512&&er(a,a.return);break;case 3:if(Vi(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Bm(o,e)}catch(R){Be(a,a.return,R)}}break;case 26:Vi(e,a),o&512&&er(a,a.return);break;case 27:case 5:Vi(e,a),i===null&&o&4&&Hm(a),o&512&&er(a,a.return);break;case 12:Vi(e,a);break;case 13:Vi(e,a),o&4&&Zm(e,a);break;case 22:if(u=a.memoizedState!==null||Hi,!u){i=i!==null&&i.memoizedState!==null||We;var d=Hi,S=We;Hi=u,(We=i)&&!S?xa(e,a,(a.subtreeFlags&8772)!==0):Vi(e,a),Hi=d,We=S}o&512&&(a.memoizedProps.mode==="manual"?er(a,a.return):Fn(a,a.return));break;default:Vi(e,a)}}function qm(e){var i=e.alternate;i!==null&&(e.alternate=null,qm(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&j(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Hn=!1;function Gi(e,i,a){for(a=a.child;a!==null;)Ym(e,i,a),a=a.sibling}function Ym(e,i,a){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 26:We||Fn(a,i),Gi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||Fn(a,i);var o=Je,u=Hn;for(Je=a.stateNode,Gi(e,i,a),a=a.stateNode,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);j(a),Je=o,Hn=u;break;case 5:We||Fn(a,i);case 6:u=Je;var d=Hn;if(Je=null,Gi(e,i,a),Je=u,Hn=d,Je!==null)if(Hn)try{e=Je,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(S){Be(a,i,S)}else try{Je.removeChild(a.stateNode)}catch(S){Be(a,i,S)}break;case 18:Je!==null&&(Hn?(i=Je,a=a.stateNode,i.nodeType===8?Df(i.parentNode,a):i.nodeType===1&&Df(i,a),Eo(i)):Df(Je,a.stateNode));break;case 4:o=Je,u=Hn,Je=a.stateNode.containerInfo,Hn=!0,Gi(e,i,a),Je=o,Hn=u;break;case 0:case 11:case 14:case 15:We||va(2,a,i),We||va(4,a,i),Gi(e,i,a);break;case 1:We||(Fn(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Fm(a,i,o)),Gi(e,i,a);break;case 21:Gi(e,i,a);break;case 22:We||Fn(a,i),We=(o=We)||a.memoizedState!==null,Gi(e,i,a),We=o;break;default:Gi(e,i,a)}}function Zm(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Eo(e)}catch(a){Be(i,i.return,a)}}function Sx(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new km),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new km),i;default:throw Error(r(435,e.tag))}}function Ju(e,i){var a=Sx(e);i.forEach(function(o){var u=Ox.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function $n(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,S=i,R=S;t:for(;R!==null;){switch(R.tag){case 27:case 5:Je=R.stateNode,Hn=!1;break t;case 3:Je=R.stateNode.containerInfo,Hn=!0;break t;case 4:Je=R.stateNode.containerInfo,Hn=!0;break t}R=R.return}if(Je===null)throw Error(r(160));Ym(d,S,u),Je=null,Hn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)jm(i,e),i=i.sibling}var ui=null;function jm(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$n(i,e),ti(e),o&4&&(va(3,e,e.return),ao(3,e),va(5,e,e.return));break;case 1:$n(i,e),ti(e),o&512&&(We||a===null||Fn(a,a.return)),o&64&&Hi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ui;if($n(i,e),ti(e),o&512&&(We||a===null||Fn(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[w]||d[en]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),_n(d,o,a),d[en]=e,Ct(d),o=d;break t;case"link":var S=Hg("link","href",u).get(o+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(d=S[R],d.getAttribute("href")===(a.href==null?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}d=u.createElement(o),_n(d,o,a),u.head.appendChild(d);break;case"meta":if(S=Hg("meta","content",u).get(o+(a.content||""))){for(R=0;R<S.length;R++)if(d=S[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}d=u.createElement(o),_n(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[en]=e,Ct(d),o=d}e.stateNode=o}else Gg(u,e.type,e.stateNode);else e.stateNode=Fg(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Gg(u,e.type,e.stateNode):Fg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Gm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){u=e.stateNode,d=e.memoizedProps;try{for(var P=u.firstChild;P;){var q=P.nextSibling,mt=P.nodeName;P[w]||mt==="HEAD"||mt==="BODY"||mt==="SCRIPT"||mt==="STYLE"||mt==="LINK"&&P.rel.toLowerCase()==="stylesheet"||u.removeChild(P),P=q}for(var Et=e.type,at=u.attributes;at.length;)u.removeAttributeNode(at[0]);_n(u,Et,d),u[en]=e,u[nn]=d}catch(te){Be(e,e.return,te)}}case 5:if($n(i,e),ti(e),o&512&&(We||a===null||Fn(a,a.return)),e.flags&32){u=e.stateNode;try{Mr(u,"")}catch(te){Be(e,e.return,te)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Gm(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Qu=!0);break;case 6:if($n(i,e),ti(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(te){Be(e,e.return,te)}}break;case 3:if(Hl=null,u=ui,ui=Il(i.containerInfo),$n(i,e),ui=u,ti(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Eo(i.containerInfo)}catch(te){Be(e,e.return,te)}Qu&&(Qu=!1,Km(e));break;case 4:o=ui,ui=Il(e.stateNode.containerInfo),$n(i,e),ti(e),ui=o;break;case 12:$n(i,e),ti(e);break;case 13:$n(i,e),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lf=ut()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ju(e,o)));break;case 22:if(o&512&&(We||a===null||Fn(a,a.return)),P=e.memoizedState!==null,q=a!==null&&a.memoizedState!==null,mt=Hi,Et=We,Hi=mt||P,We=Et||q,$n(i,e),We=Et,Hi=mt,ti(e),i=e.stateNode,i._current=e,i._visibility&=-3,i._visibility|=i._pendingVisibility&2,o&8192&&(i._visibility=P?i._visibility&-2:i._visibility|1,P&&(i=Hi||We,a===null||q||i||Fr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,i=e;;){if(i.tag===5||i.tag===26||i.tag===27){if(a===null){q=a=i;try{if(u=q.stateNode,P)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{S=q.stateNode,R=q.memoizedProps.style;var dt=R!=null&&R.hasOwnProperty("display")?R.display:null;S.style.display=dt==null||typeof dt=="boolean"?"":(""+dt).trim()}}catch(te){Be(q,q.return,te)}}}else if(i.tag===6){if(a===null){q=i;try{q.stateNode.nodeValue=P?"":q.memoizedProps}catch(te){Be(q,q.return,te)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ju(e,a))));break;case 19:$n(i,e),ti(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ju(e,o)));break;case 21:break;default:$n(i,e),ti(e)}}function ti(e){var i=e.flags;if(i&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(Vm(a)){var o=a;break t}a=a.return}throw Error(r(160))}switch(o.tag){case 27:var u=o.stateNode,d=ju(e);El(e,d,u);break;case 5:var S=o.stateNode;o.flags&32&&(Mr(S,""),o.flags&=-33);var R=ju(e);El(e,R,S);break;case 3:case 4:var P=o.stateNode.containerInfo,q=ju(e);Ku(e,q,P);break;default:throw Error(r(161))}}}catch(mt){Be(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Km(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Km(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Vi(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Wm(e,i.alternate,i),i=i.sibling}function Fr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:va(4,i,i.return),Fr(i);break;case 1:Fn(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Fm(i,i.return,a),Fr(i);break;case 26:case 27:case 5:Fn(i,i.return),Fr(i);break;case 22:Fn(i,i.return),i.memoizedState===null&&Fr(i);break;default:Fr(i)}e=e.sibling}}function xa(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,u=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:xa(u,d,a),ao(4,d);break;case 1:if(xa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(q){Be(o,o.return,q)}if(o=d,u=o.updateQueue,u!==null){var R=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)zm(P[u],R)}catch(q){Be(o,o.return,q)}}a&&S&64&&Im(d),er(d,d.return);break;case 26:case 27:case 5:xa(u,d,a),a&&o===null&&S&4&&Hm(d),er(d,d.return);break;case 12:xa(u,d,a);break;case 13:xa(u,d,a),a&&S&4&&Zm(u,d);break;case 22:d.memoizedState===null&&xa(u,d,a),er(d,d.return);break;default:xa(u,d,a)}i=i.sibling}}function $u(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zs(a))}function tf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zs(e))}function ya(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Qm(e,i,a,o),i=i.sibling}function Qm(e,i,a,o){var u=i.flags;switch(i.tag){case 0:case 11:case 15:ya(e,i,a,o),u&2048&&ao(9,i);break;case 3:ya(e,i,a,o),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zs(e)));break;case 12:if(u&2048){ya(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,R=d.onPostCommit;typeof R=="function"&&R(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Be(i,i.return,P)}}else ya(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,i.memoizedState!==null?d._visibility&4?ya(e,i,a,o):ro(e,i):d._visibility&4?ya(e,i,a,o):(d._visibility|=4,Hr(e,i,a,o,(i.subtreeFlags&10256)!==0)),u&2048&&$u(i.alternate,i);break;case 24:ya(e,i,a,o),u&2048&&tf(i.alternate,i);break;default:ya(e,i,a,o)}}function Hr(e,i,a,o,u){for(u=u&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,S=i,R=a,P=o,q=S.flags;switch(S.tag){case 0:case 11:case 15:Hr(d,S,R,P,u),ao(8,S);break;case 23:break;case 22:var mt=S.stateNode;S.memoizedState!==null?mt._visibility&4?Hr(d,S,R,P,u):ro(d,S):(mt._visibility|=4,Hr(d,S,R,P,u)),u&&q&2048&&$u(S.alternate,S);break;case 24:Hr(d,S,R,P,u),u&&q&2048&&tf(S.alternate,S);break;default:Hr(d,S,R,P,u)}i=i.sibling}}function ro(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,u=o.flags;switch(o.tag){case 22:ro(a,o),u&2048&&$u(o.alternate,o);break;case 24:ro(a,o),u&2048&&tf(o.alternate,o);break;default:ro(a,o)}i=i.sibling}}var so=8192;function Gr(e){if(e.subtreeFlags&so)for(e=e.child;e!==null;)Jm(e),e=e.sibling}function Jm(e){switch(e.tag){case 26:Gr(e),e.flags&so&&e.memoizedState!==null&&cy(ui,e.memoizedState,e.memoizedProps);break;case 5:Gr(e);break;case 3:case 4:var i=ui;ui=Il(e.stateNode.containerInfo),Gr(e),ui=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=so,so=16777216,Gr(e),so=i):Gr(e));break;default:Gr(e)}}function $m(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function oo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];hn=o,eg(o,e)}$m(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tg(e),e=e.sibling}function tg(e){switch(e.tag){case 0:case 11:case 15:oo(e),e.flags&2048&&va(9,e,e.return);break;case 3:oo(e);break;case 12:oo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&4&&(e.return===null||e.return.tag!==13)?(i._visibility&=-5,Tl(e)):oo(e);break;default:oo(e)}}function Tl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];hn=o,eg(o,e)}$m(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:va(8,i,i.return),Tl(i);break;case 22:a=i.stateNode,a._visibility&4&&(a._visibility&=-5,Tl(i));break;default:Tl(i)}e=e.sibling}}function eg(e,i){for(;hn!==null;){var a=hn;switch(a.tag){case 0:case 11:case 15:va(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,hn=o;else t:for(a=e;hn!==null;){o=hn;var u=o.sibling,d=o.return;if(qm(o),o===a){hn=null;break t}if(u!==null){u.return=d,hn=u;break t}hn=d}}}function Mx(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,i,a,o){return new Mx(e,i,a,o)}function ef(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sa(e,i){var a=e.alternate;return a===null?(a=ei(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ng(e,i){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function bl(e,i,a,o,u,d){var S=0;if(o=e,typeof e=="function")ef(e)&&(S=1);else if(typeof e=="string")S=oy(e,a,ce.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case p:return nr(a.children,u,d,i);case m:S=8,u|=24;break;case g:return e=ei(12,a,i,u|2),e.elementType=g,e.lanes=d,e;case A:return e=ei(13,a,i,u),e.elementType=A,e.lanes=d,e;case M:return e=ei(19,a,i,u),e.elementType=M,e.lanes=d,e;case N:return ig(a,u,d,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case y:S=10;break t;case v:S=9;break t;case E:S=11;break t;case _:S=14;break t;case B:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return i=ei(S,a,i,u),i.elementType=e,i.type=o,i.lanes=d,i}function nr(e,i,a,o){return e=ei(7,e,o,i),e.lanes=a,e}function ig(e,i,a,o){e=ei(22,e,o,i),e.elementType=N,e.lanes=a;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var d=u._current;if(d===null)throw Error(r(456));if((u._pendingVisibility&2)===0){var S=ca(d,2);S!==null&&(u._pendingVisibility|=2,Cn(S,d,2))}},attach:function(){var d=u._current;if(d===null)throw Error(r(456));if((u._pendingVisibility&2)!==0){var S=ca(d,2);S!==null&&(u._pendingVisibility&=-3,Cn(S,d,2))}}};return e.stateNode=u,e}function nf(e,i,a){return e=ei(6,e,null,i),e.lanes=a,e}function af(e,i,a){return i=ei(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function ki(e){e.flags|=4}function ag(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Vg(i)){if(i=Jn.current,i!==null&&((Te&4194176)===Te?yi!==null:(Te&62914560)!==Te&&(Te&536870912)===0||i!==yi))throw Ws=lu,Sp;e.flags|=8192}}function Al(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ae():536870912,e.lanes|=i,kr|=i)}function lo(e,i){if(!Re)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ve(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&31457280,o|=u.flags&31457280,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function Ex(e,i,a){var o=i.pendingProps;switch(su(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(i),null;case 1:return Ve(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Fi(sn),bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gs(i)?ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ci!==null&&(hf(ci),ci=null))),Ve(i),null;case 26:return a=i.memoizedState,e===null?(ki(i),a!==null?(Ve(i),ag(i,a)):(Ve(i),i.flags&=-16777217)):a?a!==e.memoizedState?(ki(i),Ve(i),ag(i,a)):(Ve(i),i.flags&=-16777217):(e.memoizedProps!==o&&ki(i),Ve(i),i.flags&=-16777217),null;case 27:Ut(i),a=At.current;var u=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ki(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Ve(i),null}e=ce.current,Gs(i)?xp(i):(e=Og(u,o,a),i.stateNode=e,ki(i))}return Ve(i),null;case 5:if(Ut(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&ki(i);else{if(!o){if(i.stateNode===null)throw Error(r(166));return Ve(i),null}if(e=ce.current,Gs(i))xp(i);else{switch(u=Bl(At.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[en]=i,e[nn]=o;t:for(u=i.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===i)break t;for(;u.sibling===null;){if(u.return===null||u.return===i)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}i.stateNode=e;t:switch(_n(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(i)}}return Ve(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&ki(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(r(166));if(e=At.current,Gs(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,u=wn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[en]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||wg(e.nodeValue,a)),e||qa(i)}else e=Bl(e).createTextNode(o),e[en]=i,i.stateNode=e}return Ve(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Gs(i),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[en]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ve(i),u=!1}else ci!==null&&(hf(ci),ci=null),u=!0;if(!u)return i.flags&256?(Pi(i),i):(Pi(i),null)}if(Pi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=i.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Al(i,i.updateQueue),Ve(i),null;case 4:return bt(),e===null&&Ef(i.stateNode.containerInfo),Ve(i),null;case 10:return Fi(i.type),Ve(i),null;case 19:if(kt(rn),u=i.memoizedState,u===null)return Ve(i),null;if(o=(i.flags&128)!==0,d=u.rendering,d===null)if(o)lo(u,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=cl(e),d!==null){for(i.flags|=128,lo(u,!1),e=d.updateQueue,i.updateQueue=e,Al(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)ng(a,e),a=a.sibling;return Bt(rn,rn.current&1|2),i.child}e=e.sibling}u.tail!==null&&ut()>Rl&&(i.flags|=128,o=!0,lo(u,!1),i.lanes=4194304)}else{if(!o)if(e=cl(d),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,Al(i,e),lo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Re)return Ve(i),null}else 2*ut()-u.renderingStartTime>Rl&&a!==536870912&&(i.flags|=128,o=!0,lo(u,!1),i.lanes=4194304);u.isBackwards?(d.sibling=i.child,i.child=d):(e=u.last,e!==null?e.sibling=d:i.child=d,u.last=d)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=ut(),i.sibling=null,e=rn.current,Bt(rn,o?e&1|2:e&1),i):(Ve(i),null);case 22:case 23:return Pi(i),uu(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Ve(i),i.subtreeFlags&6&&(i.flags|=8192)):Ve(i),a=i.updateQueue,a!==null&&Al(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&kt(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Fi(sn),Ve(i),null;case 25:return null}throw Error(r(156,i.tag))}function Tx(e,i){switch(su(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Fi(sn),bt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Ut(i),null;case 13:if(Pi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Vs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return kt(rn),null;case 4:return bt(),null;case 10:return Fi(i.type),null;case 22:case 23:return Pi(i),uu(),e!==null&&kt(Za),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Fi(sn),null;case 25:return null;default:return null}}function rg(e,i){switch(su(i),i.tag){case 3:Fi(sn),bt();break;case 26:case 27:case 5:Ut(i);break;case 4:bt();break;case 13:Pi(i);break;case 19:kt(rn);break;case 10:Fi(i.type);break;case 22:case 23:Pi(i),uu(),e!==null&&kt(Za);break;case 24:Fi(sn)}}var bx={getCacheForType:function(e){var i=Sn(sn),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},Ax=typeof WeakMap=="function"?WeakMap:Map,ke=0,Ie=null,xe=null,Te=0,Fe=0,Gn=null,Xi=!1,Vr=!1,rf=!1,Wi=0,qe=0,Ma=0,ir=0,sf=0,ni=0,kr=0,co=null,Mi=null,of=!1,lf=0,Rl=1/0,wl=null,Ea=null,Cl=!1,ar=null,uo=0,cf=0,uf=null,fo=0,ff=null;function Vn(){if((ke&2)!==0&&Te!==0)return Te&-Te;if(C.T!==null){var e=Or;return e!==0?e:xf()}return Us()}function sg(){ni===0&&(ni=(Te&536870912)===0||Re?tn():536870912);var e=Jn.current;return e!==null&&(e.flags|=32),ni}function Cn(e,i,a){(e===Ie&&Fe===2||e.cancelPendingCommit!==null)&&(Xr(e,0),qi(e,Te,ni,!1)),Rn(e,a),((ke&2)===0||e!==Ie)&&(e===Ie&&((ke&2)===0&&(ir|=a),qe===4&&qi(e,Te,ni,!1)),Ei(e))}function og(e,i,a){if((ke&6)!==0)throw Error(r(327));var o=!a&&(i&60)===0&&(i&e.expiredLanes)===0||le(e,i),u=o?Cx(e,i):mf(e,i,!0),d=o;do{if(u===0){Vr&&!o&&qi(e,i,0,!1);break}else if(u===6)qi(e,i,0,!Xi);else{if(a=e.current.alternate,d&&!Rx(a)){u=mf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var R=e;u=co;var P=R.current.memoizedState.isDehydrated;if(P&&(Xr(R,S).flags|=256),S=mf(R,S,!1),S!==2){if(rf&&!P){R.errorRecoveryDisabledLanes|=d,ir|=d,u=4;break t}d=Mi,Mi=u,d!==null&&hf(d)}u=S}if(d=!1,u!==2)continue}}if(u===1){Xr(e,0),qi(e,i,0,!0);break}t:{switch(o=e,u){case 0:case 1:throw Error(r(345));case 4:if((i&4194176)===i){qi(o,i,ni,!Xi);break t}break;case 2:Mi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(o.finishedWork=a,o.finishedLanes=i,(i&62914560)===i&&(d=lf+300-ut(),10<d)){if(qi(o,i,ni,!Xi),Ot(o,0)!==0)break t;o.timeoutHandle=Ug(lg.bind(null,o,a,Mi,wl,of,i,ni,ir,kr,Xi,2,-0,0),d);break t}lg(o,a,Mi,wl,of,i,ni,ir,kr,Xi,0,-0,0)}}break}while(!0);Ei(e)}function hf(e){Mi===null?Mi=e:Mi.push.apply(Mi,e)}function lg(e,i,a,o,u,d,S,R,P,q,mt,Et,at){var dt=i.subtreeFlags;if((dt&8192||(dt&16785408)===16785408)&&(vo={stylesheets:null,count:0,unsuspend:ly},Jm(i),i=uy(),i!==null)){e.cancelPendingCommit=i(mg.bind(null,e,a,o,u,S,R,P,1,Et,at)),qi(e,d,S,!q);return}mg(e,a,o,u,S,R,P,mt,Et,at)}function Rx(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!In(d(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function qi(e,i,a,o){i&=~sf,i&=~ir,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var u=i;0<u;){var d=31-ie(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&Ds(e,a,i)}function Dl(){return(ke&6)===0?(ho(0),!1):!0}function df(){if(xe!==null){if(Fe===0)var e=xe.return;else e=xe,Ii=$a=null,vu(e),Lr=null,qs=0,e=xe;for(;e!==null;)rg(e.alternate,e),e=e.return;xe=null}}function Xr(e,i){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,qx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),df(),Ie=e,xe=a=Sa(e.current,null),Te=i,Fe=0,Gn=null,Xi=!1,Vr=le(e,i),rf=!1,kr=ni=sf=ir=Ma=qe=0,Mi=co=null,of=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var u=31-ie(o),d=1<<u;i|=e[u],o&=~d}return Wi=i,tl(),a}function cg(e,i){_e=null,C.H=Si,i===Xs?(i=Tp(),Fe=3):i===Sp?(i=Tp(),Fe=4):Fe=i===Mm?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Gn=i,xe===null&&(qe=1,yl(e,jn(i,e.current)))}function ug(){var e=C.H;return C.H=Si,e===null?Si:e}function fg(){var e=C.A;return C.A=bx,e}function pf(){qe=4,Xi||(Te&4194176)!==Te&&Jn.current!==null||(Vr=!0),(Ma&134217727)===0&&(ir&134217727)===0||Ie===null||qi(Ie,Te,ni,!1)}function mf(e,i,a){var o=ke;ke|=2;var u=ug(),d=fg();(Ie!==e||Te!==i)&&(wl=null,Xr(e,i)),i=!1;var S=qe;t:do try{if(Fe!==0&&xe!==null){var R=xe,P=Gn;switch(Fe){case 8:df(),S=6;break t;case 3:case 2:case 6:Jn.current===null&&(i=!0);var q=Fe;if(Fe=0,Gn=null,Wr(e,R,P,q),a&&Vr){S=0;break t}break;default:q=Fe,Fe=0,Gn=null,Wr(e,R,P,q)}}wx(),S=qe;break}catch(mt){cg(e,mt)}while(!0);return i&&e.shellSuspendCounter++,Ii=$a=null,ke=o,C.H=u,C.A=d,xe===null&&(Ie=null,Te=0,tl()),S}function wx(){for(;xe!==null;)hg(xe)}function Cx(e,i){var a=ke;ke|=2;var o=ug(),u=fg();Ie!==e||Te!==i?(wl=null,Rl=ut()+500,Xr(e,i)):Vr=le(e,i);t:do try{if(Fe!==0&&xe!==null){i=xe;var d=Gn;e:switch(Fe){case 1:Fe=0,Gn=null,Wr(e,i,d,1);break;case 2:if(Mp(d)){Fe=0,Gn=null,dg(i);break}i=function(){Fe===2&&Ie===e&&(Fe=7),Ei(e)},d.then(i,i);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Mp(d)?(Fe=0,Gn=null,dg(i)):(Fe=0,Gn=null,Wr(e,i,d,7));break;case 5:var S=null;switch(xe.tag){case 26:S=xe.memoizedState;case 5:case 27:var R=xe;if(!S||Vg(S)){Fe=0,Gn=null;var P=R.sibling;if(P!==null)xe=P;else{var q=R.return;q!==null?(xe=q,Ul(q)):xe=null}break e}}Fe=0,Gn=null,Wr(e,i,d,5);break;case 6:Fe=0,Gn=null,Wr(e,i,d,6);break;case 8:df(),qe=6;break t;default:throw Error(r(462))}}Dx();break}catch(mt){cg(e,mt)}while(!0);return Ii=$a=null,C.H=o,C.A=u,ke=a,xe!==null?0:(Ie=null,Te=0,tl(),qe)}function Dx(){for(;xe!==null&&!T();)hg(xe)}function hg(e){var i=Om(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,i===null?Ul(e):xe=i}function dg(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=wm(a,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=wm(a,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:vu(i);default:rg(a,i),i=xe=ng(i,Wi),i=Om(a,i,Wi)}e.memoizedProps=e.pendingProps,i===null?Ul(e):xe=i}function Wr(e,i,a,o){Ii=$a=null,vu(i),Lr=null,qs=0;var u=i.return;try{if(vx(e,u,i,a,Te)){qe=1,yl(e,jn(a,e.current)),xe=null;return}}catch(d){if(u!==null)throw xe=u,d;qe=1,yl(e,jn(a,e.current)),xe=null;return}i.flags&32768?(Re||o===1?e=!0:Vr||(Te&536870912)!==0?e=!1:(Xi=e=!0,(o===2||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),pg(i,e)):Ul(i)}function Ul(e){var i=e;do{if((i.flags&32768)!==0){pg(i,Xi);return}e=i.return;var a=Ex(i.alternate,i,Wi);if(a!==null){xe=a;return}if(i=i.sibling,i!==null){xe=i;return}xe=i=e}while(i!==null);qe===0&&(qe=5)}function pg(e,i){do{var a=Tx(e.alternate,e);if(a!==null){a.flags&=32767,xe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){xe=e;return}xe=e=a}while(e!==null);qe=6,xe=null}function mg(e,i,a,o,u,d,S,R,P,q){var mt=C.T,Et=G.p;try{G.p=2,C.T=null,Ux(e,i,a,o,Et,u,d,S,R,P,q)}finally{C.T=mt,G.p=Et}}function Ux(e,i,a,o,u,d,S,R){do qr();while(ar!==null);if((ke&6)!==0)throw Error(r(327));var P=e.finishedWork;if(o=e.finishedLanes,P===null)return null;if(e.finishedWork=null,e.finishedLanes=0,P===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var q=P.lanes|P.childLanes;if(q|=iu,Xo(e,o,q,d,S,R),e===Ie&&(xe=Ie=null,Te=0),(P.subtreeFlags&10256)===0&&(P.flags&10256)===0||Cl||(Cl=!0,cf=q,uf=a,Px(Lt,function(){return qr(),null})),a=(P.flags&15990)!==0,(P.subtreeFlags&15990)!==0||a?(a=C.T,C.T=null,d=G.p,G.p=2,S=ke,ke|=4,yx(e,P),jm(P,e),ex(Rf,e.containerInfo),kl=!!Af,Rf=Af=null,e.current=P,Wm(e,P.alternate,P),et(),ke=S,G.p=d,C.T=a):e.current=P,Cl?(Cl=!1,ar=e,uo=o):gg(e,q),q=e.pendingLanes,q===0&&(Ea=null),Wt(P.stateNode),Ei(e),i!==null)for(u=e.onRecoverableError,P=0;P<i.length;P++)q=i[P],u(q.value,{componentStack:q.stack});return(uo&3)!==0&&qr(),q=e.pendingLanes,(o&4194218)!==0&&(q&42)!==0?e===ff?fo++:(fo=0,ff=e):fo=0,ho(0),null}function gg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Zs(i)))}function qr(){if(ar!==null){var e=ar,i=cf;cf=0;var a=yr(uo),o=C.T,u=G.p;try{if(G.p=32>a?32:a,C.T=null,ar===null)var d=!1;else{a=uf,uf=null;var S=ar,R=uo;if(ar=null,uo=0,(ke&6)!==0)throw Error(r(331));var P=ke;if(ke|=4,tg(S.current),Qm(S,S.current,R,a),ke=P,ho(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(ne,S)}catch{}d=!0}return d}finally{G.p=u,C.T=o,gg(e,i)}}return!1}function _g(e,i,a){i=jn(a,i),i=Lu(e.stateNode,i,2),e=_a(e,i,2),e!==null&&(Rn(e,2),Ei(e))}function Be(e,i,a){if(e.tag===3)_g(e,e,a);else for(;i!==null;){if(i.tag===3){_g(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ea===null||!Ea.has(o))){e=jn(a,e),a=ym(2),o=_a(i,a,2),o!==null&&(Sm(a,o,i,e),Rn(o,2),Ei(o));break}}i=i.return}}function gf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ax;var u=new Set;o.set(i,u)}else u=o.get(i),u===void 0&&(u=new Set,o.set(i,u));u.has(a)||(rf=!0,u.add(a),e=Lx.bind(null,e,i,a),i.then(e,e))}function Lx(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ie===e&&(Te&a)===a&&(qe===4||qe===3&&(Te&62914560)===Te&&300>ut()-lf?(ke&2)===0&&Xr(e,0):sf|=a,kr===Te&&(kr=0)),Ei(e)}function vg(e,i){i===0&&(i=Ae()),e=ca(e,i),e!==null&&(Rn(e,i),Ei(e))}function Nx(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),vg(e,a)}function Ox(e,i){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(i),vg(e,a)}function Px(e,i){return Ft(e,i)}var Ll=null,Yr=null,_f=!1,Nl=!1,vf=!1,rr=0;function Ei(e){e!==Yr&&e.next===null&&(Yr===null?Ll=Yr=e:Yr=Yr.next=e),Nl=!0,_f||(_f=!0,Bx(zx))}function ho(e,i){if(!vf&&Nl){vf=!0;do for(var a=!1,o=Ll;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-ie(42|e)+1)-1,d&=u&~(S&~R),d=d&201326677?d&201326677|1:d?d|2:0}d!==0&&(a=!0,Sg(o,d))}else d=Te,d=Ot(o,o===Ie?d:0),(d&3)===0||le(o,d)||(a=!0,Sg(o,d));o=o.next}while(a);vf=!1}}function zx(){Nl=_f=!1;var e=0;rr!==0&&(Wx()&&(e=rr),rr=0);for(var i=ut(),a=null,o=Ll;o!==null;){var u=o.next,d=xg(o,i);d===0?(o.next=null,a===null?Ll=u:a.next=u,u===null&&(Yr=a)):(a=o,(e!==0||(d&3)!==0)&&(Nl=!0)),o=u}ho(e)}function xg(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-ie(d),R=1<<S,P=u[S];P===-1?((R&a)===0||(R&o)!==0)&&(u[S]=Ge(R,i)):P<=i&&(e.expiredLanes|=R),d&=~R}if(i=Ie,a=Te,a=Ot(e,e===i?a:0),o=e.callbackNode,a===0||e===i&&Fe===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&L(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||le(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&L(o),yr(a)){case 2:case 8:a=Zt;break;case 32:a=Lt;break;case 268435456:a=ge;break;default:a=Lt}return o=yg.bind(null,e),a=Ft(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&L(o),e.callbackPriority=2,e.callbackNode=null,2}function yg(e,i){var a=e.callbackNode;if(qr()&&e.callbackNode!==a)return null;var o=Te;return o=Ot(e,e===Ie?o:0),o===0?null:(og(e,o,i),xg(e,ut()),e.callbackNode!=null&&e.callbackNode===a?yg.bind(null,e):null)}function Sg(e,i){if(qr())return null;og(e,i,!0)}function Bx(e){Yx(function(){(ke&6)!==0?Ft(gt,e):e()})}function xf(){return rr===0&&(rr=tn()),rr}function Mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yo(""+e)}function Eg(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function Ix(e,i,a,o,u){if(i==="submit"&&a&&a.stateNode===u){var d=Mg((u[nn]||null).action),S=o.submitter;S&&(i=(i=S[nn]||null)?Mg(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var R=new Qo("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rr!==0){var P=S?Eg(u,S):new FormData(u);Ru(a,{pending:!0,data:P,method:u.method,action:d},null,P)}}else typeof d=="function"&&(R.preventDefault(),P=S?Eg(u,S):new FormData(u),Ru(a,{pending:!0,data:P,method:u.method,action:d},d,P))},currentTarget:u}]})}}for(var yf=0;yf<mp.length;yf++){var Sf=mp[yf],Fx=Sf.toLowerCase(),Hx=Sf[0].toUpperCase()+Sf.slice(1);li(Fx,"on"+Hx)}li(up,"onAnimationEnd"),li(fp,"onAnimationIteration"),li(hp,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(ix,"onTransitionRun"),li(ax,"onTransitionStart"),li(rx,"onTransitionCancel"),li(dp,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),re("onBeforeInput",["compositionend","keypress","textInput","paste"]),re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Tg(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var S=o.length-1;0<=S;S--){var R=o[S],P=R.instance,q=R.currentTarget;if(R=R.listener,P!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=q;try{d(u)}catch(mt){xl(mt)}u.currentTarget=null,d=P}else for(S=0;S<o.length;S++){if(R=o[S],P=R.instance,q=R.currentTarget,R=R.listener,P!==d&&u.isPropagationStopped())break t;d=R,u.currentTarget=q;try{d(u)}catch(mt){xl(mt)}u.currentTarget=null,d=P}}}}function Me(e,i){var a=i[Sr];a===void 0&&(a=i[Sr]=new Set);var o=e+"__bubble";a.has(o)||(bg(i,e,2,!1),a.add(o))}function Mf(e,i,a){var o=0;i&&(o|=4),bg(a,e,o,i)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function Ef(e){if(!e[Ol]){e[Ol]=!0,Kt.forEach(function(a){a!=="selectionchange"&&(Gx.has(a)||Mf(a,!1,e),Mf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Ol]||(i[Ol]=!0,Mf("selectionchange",!1,i))}}function bg(e,i,a,o){switch(Zg(i)){case 2:var u=dy;break;case 8:u=py;break;default:u=zf}a=u.bind(null,i,a,e),u=void 0,!Xc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(i,a,{capture:!0,passive:u}):e.addEventListener(i,a,!0):u!==void 0?e.addEventListener(i,a,{passive:u}):e.addEventListener(i,a,!1)}function Tf(e,i,a,o,u){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u||R.nodeType===8&&R.parentNode===u)break;if(S===4)for(S=o.return;S!==null;){var P=S.tag;if((P===3||P===4)&&(P=S.stateNode.containerInfo,P===u||P.nodeType===8&&P.parentNode===u))return;S=S.return}for(;R!==null;){if(S=it(R),S===null)return;if(P=S.tag,P===5||P===6||P===26||P===27){o=d=S;continue t}R=R.parentNode}}o=o.return}Hd(function(){var q=d,mt=Vc(a),Et=[];t:{var at=pp.get(e);if(at!==void 0){var dt=Qo,te=e;switch(e){case"keypress":if(jo(a)===0)break t;case"keydown":case"keyup":dt=Ov;break;case"focusin":te="focus",dt=Zc;break;case"focusout":te="blur",dt=Zc;break;case"beforeblur":case"afterblur":dt=Zc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=Mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Bv;break;case up:case fp:case hp:dt=bv;break;case dp:dt=Fv;break;case"scroll":case"scrollend":dt=yv;break;case"wheel":dt=Gv;break;case"copy":case"cut":case"paste":dt=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Wd;break;case"toggle":case"beforetoggle":dt=kv}var ue=(i&4)!==0,Ye=!ue&&(e==="scroll"||e==="scrollend"),J=ue?at!==null?at+"Capture":null:at;ue=[];for(var X=q,tt;X!==null;){var _t=X;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||J===null||(_t=Ls(X,J),_t!=null&&ue.push(mo(X,_t,tt))),Ye)break;X=X.return}0<ue.length&&(at=new dt(at,te,null,a,mt),Et.push({event:at,listeners:ue}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",at&&a!==Gc&&(te=a.relatedTarget||a.fromElement)&&(it(te)||te[Ui]))break t;if((dt||at)&&(at=mt.window===mt?mt:(at=mt.ownerDocument)?at.defaultView||at.parentWindow:window,dt?(te=a.relatedTarget||a.toElement,dt=q,te=te?it(te):null,te!==null&&(Ye=F(te),ue=te.tag,te!==Ye||ue!==5&&ue!==27&&ue!==6)&&(te=null)):(dt=null,te=q),dt!==te)){if(ue=kd,_t="onMouseLeave",J="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ue=Wd,_t="onPointerLeave",J="onPointerEnter",X="pointer"),Ye=dt==null?at:Z(dt),tt=te==null?at:Z(te),at=new ue(_t,X+"leave",dt,a,mt),at.target=Ye,at.relatedTarget=tt,_t=null,it(mt)===q&&(ue=new ue(J,X+"enter",te,a,mt),ue.target=tt,ue.relatedTarget=Ye,_t=ue),Ye=_t,dt&&te)e:{for(ue=dt,J=te,X=0,tt=ue;tt;tt=Zr(tt))X++;for(tt=0,_t=J;_t;_t=Zr(_t))tt++;for(;0<X-tt;)ue=Zr(ue),X--;for(;0<tt-X;)J=Zr(J),tt--;for(;X--;){if(ue===J||J!==null&&ue===J.alternate)break e;ue=Zr(ue),J=Zr(J)}ue=null}else ue=null;dt!==null&&Ag(Et,at,dt,ue,!1),te!==null&&Ye!==null&&Ag(Et,Ye,te,ue,!0)}}t:{if(at=q?Z(q):window,dt=at.nodeName&&at.nodeName.toLowerCase(),dt==="select"||dt==="input"&&at.type==="file")var qt=$d;else if(Qd(at))if(tp)qt=$v;else{qt=Qv;var ve=Kv}else dt=at.nodeName,!dt||dt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?q&&Hc(q.elementType)&&(qt=$d):qt=Jv;if(qt&&(qt=qt(e,q))){Jd(Et,qt,a,mt);break t}ve&&ve(e,at,q),e==="focusout"&&q&&at.type==="number"&&q.memoizedProps.value!=null&&Yn(at,"number",at.value)}switch(ve=q?Z(q):window,e){case"focusin":(Qd(ve)||ve.contentEditable==="true")&&(Ar=ve,tu=q,Hs=null);break;case"focusout":Hs=tu=Ar=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,lp(Et,a,mt);break;case"selectionchange":if(nx)break;case"keydown":case"keyup":lp(Et,a,mt)}var ee;if(Kc)t:{switch(e){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else br?jd(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(qd&&a.locale!=="ko"&&(br||se!=="onCompositionStart"?se==="onCompositionEnd"&&br&&(ee=Gd()):(la=mt,Wc="value"in la?la.value:la.textContent,br=!0)),ve=Pl(q,se),0<ve.length&&(se=new Xd(se,e,null,a,mt),Et.push({event:se,listeners:ve}),ee?se.data=ee:(ee=Kd(a),ee!==null&&(se.data=ee)))),(ee=Wv?qv(e,a):Yv(e,a))&&(se=Pl(q,"onBeforeInput"),0<se.length&&(ve=new Xd("onBeforeInput","beforeinput",null,a,mt),Et.push({event:ve,listeners:se}),ve.data=ee)),Ix(Et,e,q,a,mt)}Tg(Et,i)})}function mo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function Pl(e,i){for(var a=i+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ls(e,a),u!=null&&o.unshift(mo(e,u,d)),u=Ls(e,i),u!=null&&o.push(mo(e,u,d))),e=e.return}return o}function Zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ag(e,i,a,o,u){for(var d=i._reactName,S=[];a!==null&&a!==o;){var R=a,P=R.alternate,q=R.stateNode;if(R=R.tag,P!==null&&P===o)break;R!==5&&R!==26&&R!==27||q===null||(P=q,u?(q=Ls(a,d),q!=null&&S.unshift(mo(a,q,P))):u||(q=Ls(a,d),q!=null&&S.push(mo(a,q,P)))),a=a.return}S.length!==0&&e.push({event:i,listeners:S})}var Vx=/\r\n?/g,kx=/\u0000|\uFFFD/g;function Rg(e){return(typeof e=="string"?e:""+e).replace(Vx,`
`).replace(kx,"")}function wg(e,i){return i=Rg(i),Rg(e)===i}function zl(){}function Pe(e,i,a,o,u,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Mr(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Mr(e,""+o);break;case"className":Jt(e,"class",o);break;case"tabIndex":Jt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,a,o);break;case"style":Id(e,o,d);break;case"data":if(i!=="object"){Jt(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Pe(e,i,"name",u.name,u,null),Pe(e,i,"formEncType",u.formEncType,u,null),Pe(e,i,"formMethod",u.formMethod,u,null),Pe(e,i,"formTarget",u.formTarget,u,null)):(Pe(e,i,"encType",u.encType,u,null),Pe(e,i,"method",u.method,u,null),Pe(e,i,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Yo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=zl);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Yo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Se(e,"popover",o);break;case"xlinkActuate":an(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":an(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":an(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":an(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":an(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":an(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":an(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":an(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":an(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Se(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=vv.get(a)||a,Se(e,a,o))}}function bf(e,i,a,o,u,d){switch(a){case"style":Id(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Mr(e,o):(typeof o=="number"||typeof o=="bigint")&&Mr(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),d=e[nn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Se(e,a,o)}}}function _n(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Pe(e,i,d,S,a,null)}}u&&Pe(e,i,"srcSet",a.srcSet,a,null),o&&Pe(e,i,"src",a.src,a,null);return;case"input":Me("invalid",e);var R=d=S=u=null,P=null,q=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":S=mt;break;case"checked":P=mt;break;case"defaultChecked":q=mt;break;case"value":d=mt;break;case"defaultValue":R=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,i));break;default:Pe(e,i,o,mt,a,null)}}oi(e,d,R,P,q,S,u,!1),cn(e);return;case"select":Me("invalid",e),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":d=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Pe(e,i,u,R,a,null)}i=d,a=S,e.multiple=!!o,i!=null?Li(e,!!o,i,!1):a!=null&&Li(e,!!o,a,!0);return;case"textarea":Me("invalid",e),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Pe(e,i,S,R,a,null)}zd(e,o,u,d),cn(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,i,P,o,a,null)}return;case"dialog":Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<po.length;o++)Me(po[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in a)if(a.hasOwnProperty(q)&&(o=a[q],o!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Pe(e,i,q,o,a,null)}return;default:if(Hc(i)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&bf(e,i,mt,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Pe(e,i,R,o,a,null))}function Xx(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,R=null,P=null,q=null,mt=null;for(dt in a){var Et=a[dt];if(a.hasOwnProperty(dt)&&Et!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":P=Et;default:o.hasOwnProperty(dt)||Pe(e,i,dt,null,o,Et)}}for(var at in o){var dt=o[at];if(Et=a[at],o.hasOwnProperty(at)&&(dt!=null||Et!=null))switch(at){case"type":d=dt;break;case"name":u=dt;break;case"checked":q=dt;break;case"defaultChecked":mt=dt;break;case"value":S=dt;break;case"defaultValue":R=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(r(137,i));break;default:dt!==Et&&Pe(e,i,at,dt,o,Et)}}yn(e,S,R,P,q,mt,d,u);return;case"select":dt=S=R=at=null;for(d in a)if(P=a[d],a.hasOwnProperty(d)&&P!=null)switch(d){case"value":break;case"multiple":dt=P;default:o.hasOwnProperty(d)||Pe(e,i,d,null,o,P)}for(u in o)if(d=o[u],P=a[u],o.hasOwnProperty(u)&&(d!=null||P!=null))switch(u){case"value":at=d;break;case"defaultValue":R=d;break;case"multiple":S=d;default:d!==P&&Pe(e,i,u,d,o,P)}i=R,a=S,o=dt,at!=null?Li(e,!!a,at,!1):!!o!=!!a&&(i!=null?Li(e,!!a,i,!0):Li(e,!!a,a?[]:"",!1));return;case"textarea":dt=at=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Pe(e,i,R,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":at=u;break;case"defaultValue":dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Pe(e,i,S,u,o,d)}Pd(e,at,dt);return;case"option":for(var te in a)if(at=a[te],a.hasOwnProperty(te)&&at!=null&&!o.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Pe(e,i,te,null,o,at)}for(P in o)if(at=o[P],dt=a[P],o.hasOwnProperty(P)&&at!==dt&&(at!=null||dt!=null))switch(P){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Pe(e,i,P,at,o,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in a)at=a[ue],a.hasOwnProperty(ue)&&at!=null&&!o.hasOwnProperty(ue)&&Pe(e,i,ue,null,o,at);for(q in o)if(at=o[q],dt=a[q],o.hasOwnProperty(q)&&at!==dt&&(at!=null||dt!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,i));break;default:Pe(e,i,q,at,o,dt)}return;default:if(Hc(i)){for(var Ye in a)at=a[Ye],a.hasOwnProperty(Ye)&&at!==void 0&&!o.hasOwnProperty(Ye)&&bf(e,i,Ye,void 0,o,at);for(mt in o)at=o[mt],dt=a[mt],!o.hasOwnProperty(mt)||at===dt||at===void 0&&dt===void 0||bf(e,i,mt,at,o,dt);return}}for(var J in a)at=a[J],a.hasOwnProperty(J)&&at!=null&&!o.hasOwnProperty(J)&&Pe(e,i,J,null,o,at);for(Et in o)at=o[Et],dt=a[Et],!o.hasOwnProperty(Et)||at===dt||at==null&&dt==null||Pe(e,i,Et,at,o,dt)}var Af=null,Rf=null;function Bl(e){return e.nodeType===9?e:e.ownerDocument}function Cg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function wf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Cf=null;function Wx(){var e=window.event;return e&&e.type==="popstate"?e===Cf?!1:(Cf=e,!0):(Cf=null,!1)}var Ug=typeof setTimeout=="function"?setTimeout:void 0,qx=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(e){return Lg.resolve(null).then(e).catch(Zx)}:Ug;function Zx(e){setTimeout(function(){throw e})}function Df(e,i){var a=i,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(o===0){e.removeChild(u),Eo(i);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=u}while(a);Eo(i)}function Uf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Uf(a),j(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jx(e,i,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[w])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function Kx(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function fi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}function Ng(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function Og(e,i,a){switch(i=Bl(a),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var ii=new Map,Pg=new Set;function Il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Yi=G.d;G.d={f:Qx,r:Jx,D:$x,C:ty,L:ey,m:ny,X:ay,S:iy,M:ry};function Qx(){var e=Yi.f(),i=Dl();return e||i}function Jx(e){var i=rt(e);i!==null&&i.tag===5&&i.type==="form"?lm(i):Yi.r(e)}var jr=typeof document>"u"?null:document;function zg(e,i,a){var o=jr;if(o&&typeof i=="string"&&i){var u=un(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Pg.has(u)||(Pg.add(u),e={rel:e,crossOrigin:a,href:i},o.querySelector(u)===null&&(i=o.createElement("link"),_n(i,"link",e),Ct(i),o.head.appendChild(i)))}}function $x(e){Yi.D(e),zg("dns-prefetch",e,null)}function ty(e,i){Yi.C(e,i),zg("preconnect",e,i)}function ey(e,i,a){Yi.L(e,i,a);var o=jr;if(o&&e&&i){var u='link[rel="preload"][as="'+un(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+un(a.imageSizes)+'"]')):u+='[href="'+un(e)+'"]';var d=u;switch(i){case"style":d=Kr(e);break;case"script":d=Qr(e)}ii.has(d)||(e=b({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),ii.set(d,e),o.querySelector(u)!==null||i==="style"&&o.querySelector(go(d))||i==="script"&&o.querySelector(_o(d))||(i=o.createElement("link"),_n(i,"link",e),Ct(i),o.head.appendChild(i)))}}function ny(e,i){Yi.m(e,i);var a=jr;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+un(o)+'"][href="'+un(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Qr(e)}if(!ii.has(d)&&(e=b({rel:"modulepreload",href:e},i),ii.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(d)))return}o=a.createElement("link"),_n(o,"link",e),Ct(o),a.head.appendChild(o)}}}function iy(e,i,a){Yi.S(e,i,a);var o=jr;if(o&&e){var u=Rt(o).hoistableStyles,d=Kr(e);i=i||"default";var S=u.get(d);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(go(d)))R.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":i},a),(a=ii.get(d))&&Lf(e,a);var P=S=o.createElement("link");Ct(P),_n(P,"link",e),P._p=new Promise(function(q,mt){P.onload=q,P.onerror=mt}),P.addEventListener("load",function(){R.loading|=1}),P.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Fl(S,i,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(d,S)}}}function ay(e,i){Yi.X(e,i);var a=jr;if(a&&e){var o=Rt(a).hoistableScripts,u=Qr(e),d=o.get(u);d||(d=a.querySelector(_o(u)),d||(e=b({src:e,async:!0},i),(i=ii.get(u))&&Nf(e,i),d=a.createElement("script"),Ct(d),_n(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function ry(e,i){Yi.M(e,i);var a=jr;if(a&&e){var o=Rt(a).hoistableScripts,u=Qr(e),d=o.get(u);d||(d=a.querySelector(_o(u)),d||(e=b({src:e,async:!0,type:"module"},i),(i=ii.get(u))&&Nf(e,i),d=a.createElement("script"),Ct(d),_n(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Bg(e,i,a,o){var u=(u=At.current)?Il(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Kr(a.href),a=Rt(u).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Kr(a.href);var d=Rt(u).hoistableStyles,S=d.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=u.querySelector(go(e)))&&!d._p&&(S.instance=d,S.state.loading=5),ii.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(e,a),d||sy(u,e,a,S.state))),i&&o===null)throw Error(r(528,""));return S}if(i&&o!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Qr(a),a=Rt(u).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Kr(e){return'href="'+un(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function Ig(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function sy(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),_n(i,"link",a),Ct(i),e.head.appendChild(i))}function Qr(e){return'[src="'+un(e)+'"]'}function _o(e){return"script[async]"+e}function Fg(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+un(a.href)+'"]');if(o)return i.instance=o,Ct(o),o;var u=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ct(o),_n(o,"style",u),Fl(o,a.precedence,e),i.instance=o;case"stylesheet":u=Kr(a.href);var d=e.querySelector(go(u));if(d)return i.state.loading|=4,i.instance=d,Ct(d),d;o=Ig(a),(u=ii.get(u))&&Lf(o,u),d=(e.ownerDocument||e).createElement("link"),Ct(d);var S=d;return S._p=new Promise(function(R,P){S.onload=R,S.onerror=P}),_n(d,"link",o),i.state.loading|=4,Fl(d,a.precedence,e),i.instance=d;case"script":return d=Qr(a.src),(u=e.querySelector(_o(d)))?(i.instance=u,Ct(u),u):(o=a,(u=ii.get(d))&&(o=b({},a),Nf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Ct(u),_n(u,"link",o),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Fl(o,a.precedence,e));return i.instance}function Fl(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===i)d=R;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Lf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Nf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Hl=null;function Hg(e,i,a){if(Hl===null){var o=new Map,u=Hl=new Map;u.set(a,o)}else u=Hl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[w]||d[en]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var R=o.get(S);R?R.push(d):o.set(S,[d])}}return o}function Gg(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function oy(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Vg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var vo=null;function ly(){}function cy(e,i,a){if(vo===null)throw Error(r(475));var o=vo;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var u=Kr(a.href),d=e.querySelector(go(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Gl.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=d,Ct(d);return}d=e.ownerDocument||e,a=Ig(a),(u=ii.get(u))&&Lf(a,u),d=d.createElement("link"),Ct(d);var S=d;S._p=new Promise(function(R,P){S.onload=R,S.onerror=P}),_n(d,"link",a),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=Gl.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function uy(){if(vo===null)throw Error(r(475));var e=vo;return e.stylesheets&&e.count===0&&Of(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Of(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Gl(){if(this.count--,this.count===0){if(this.stylesheets)Of(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Vl=null;function Of(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Vl=new Map,i.forEach(fy,e),Vl=null,Gl.call(e))}function fy(e,i){if(!(i.state.loading&4)){var a=Vl.get(e);if(a)var o=a.get(null);else{a=new Map,Vl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=i.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=Gl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var xo={$$typeof:y,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function hy(e,i,a,o,u,d,S,R){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=An(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.hiddenUpdates=An(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function kg(e,i,a,o,u,d,S,R,P,q,mt,Et){return e=new hy(e,i,a,S,R,P,q,Et),i=1,d===!0&&(i|=24),d=ei(3,null,null,i),e.current=d,d.stateNode=e,i=fu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},Wu(d),e}function Xg(e){return e?(e=Cr,e):Cr}function Wg(e,i,a,o,u,d){u=Xg(u),o.context===null?o.context=u:o.pendingContext=u,o=ga(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=_a(e,o,i),a!==null&&(Cn(a,e,i),eo(a,e,i))}function qg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Pf(e,i){qg(e,i),(e=e.alternate)&&qg(e,i)}function Yg(e){if(e.tag===13){var i=ca(e,67108864);i!==null&&Cn(i,e,67108864),Pf(e,67108864)}}var kl=!0;function dy(e,i,a,o){var u=C.T;C.T=null;var d=G.p;try{G.p=2,zf(e,i,a,o)}finally{G.p=d,C.T=u}}function py(e,i,a,o){var u=C.T;C.T=null;var d=G.p;try{G.p=8,zf(e,i,a,o)}finally{G.p=d,C.T=u}}function zf(e,i,a,o){if(kl){var u=Bf(o);if(u===null)Tf(e,i,o,Xl,a),jg(e,o);else if(gy(u,e,i,a,o))o.stopPropagation();else if(jg(e,o),i&4&&-1<my.indexOf(e)){for(;u!==null;){var d=rt(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Nt(d.pendingLanes);if(S!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var P=1<<31-ie(S);R.entanglements[1]|=P,S&=~P}Ei(d),(ke&6)===0&&(Rl=ut()+500,ho(0))}}break;case 13:R=ca(d,2),R!==null&&Cn(R,d,2),Dl(),Pf(d,2)}if(d=Bf(o),d===null&&Tf(e,i,o,Xl,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Tf(e,i,o,null,a)}}function Bf(e){return e=Vc(e),If(e)}var Xl=null;function If(e){if(Xl=null,e=it(e),e!==null){var i=F(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=st(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Xl=e,null}function Zg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case gt:return 2;case Zt:return 8;case Lt:case Gt:return 32;case ge:return 268435456;default:return 32}default:return 32}}var Ff=!1,Ta=null,ba=null,Aa=null,yo=new Map,So=new Map,Ra=[],my="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jg(e,i){switch(e){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":yo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(i.pointerId)}}function Mo(e,i,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},i!==null&&(i=rt(i),i!==null&&Yg(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function gy(e,i,a,o,u){switch(i){case"focusin":return Ta=Mo(Ta,e,i,a,o,u),!0;case"dragenter":return ba=Mo(ba,e,i,a,o,u),!0;case"mouseover":return Aa=Mo(Aa,e,i,a,o,u),!0;case"pointerover":var d=u.pointerId;return yo.set(d,Mo(yo.get(d)||null,e,i,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,So.set(d,Mo(So.get(d)||null,e,i,a,o,u)),!0}return!1}function Kg(e){var i=it(e.target);if(i!==null){var a=F(i);if(a!==null){if(i=a.tag,i===13){if(i=st(a),i!==null){e.blockedOn=i,Wo(e.priority,function(){if(a.tag===13){var o=Vn(),u=ca(a,o);u!==null&&Cn(u,a,o),Pf(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Bf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Gc=o,a.target.dispatchEvent(o),Gc=null}else return i=rt(a),i!==null&&Yg(i),e.blockedOn=a,!1;i.shift()}return!0}function Qg(e,i,a){Wl(e)&&a.delete(i)}function _y(){Ff=!1,Ta!==null&&Wl(Ta)&&(Ta=null),ba!==null&&Wl(ba)&&(ba=null),Aa!==null&&Wl(Aa)&&(Aa=null),yo.forEach(Qg),So.forEach(Qg)}function ql(e,i){e.blockedOn===i&&(e.blockedOn=null,Ff||(Ff=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,_y)))}var Yl=null;function Jg(e){Yl!==e&&(Yl=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Yl===e&&(Yl=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],u=e[i+2];if(typeof o!="function"){if(If(o||a)===null)continue;break}var d=rt(a);d!==null&&(e.splice(i,3),i-=3,Ru(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Eo(e){function i(P){return ql(P,e)}Ta!==null&&ql(Ta,e),ba!==null&&ql(ba,e),Aa!==null&&ql(Aa,e),yo.forEach(i),So.forEach(i);for(var a=0;a<Ra.length;a++){var o=Ra[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)Kg(a),a.blockedOn===null&&Ra.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[nn]||null;if(typeof d=="function")S||Jg(a);else if(S){var R=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[nn]||null)R=S.formAction;else if(If(u)!==null)continue}else R=S.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),Jg(a)}}}function Hf(e){this._internalRoot=e}Zl.prototype.render=Hf.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,o=Vn();Wg(a,o,e,i,null,null)},Zl.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;e.tag===0&&qr(),Wg(e.current,2,null,e,null,null),Dl(),i[Ui]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var i=Us();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Ra.length&&i!==0&&i<Ra[a].priority;a++);Ra.splice(a,0,e),a===0&&Kg(e)}};var $g=t.version;if($g!=="19.0.0")throw Error(r(527,$g,"19.0.0"));G.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=W(i),e=e!==null?lt(e):null,e=e===null?null:e.stateNode,e};var vy={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:it,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{ne=jl.inject(vy),$t=jl}catch{}}return bo.createRoot=function(e,i){if(!l(e))throw Error(r(299));var a=!1,o="",u=gm,d=_m,S=vm,R=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(R=i.unstable_transitionCallbacks)),i=kg(e,1,!1,null,null,a,o,u,d,S,R,null),e[Ui]=i.current,Ef(e.nodeType===8?e.parentNode:e),new Hf(i)},bo.hydrateRoot=function(e,i,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=gm,S=_m,R=vm,P=null,q=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(q=a.formState)),i=kg(e,1,!0,i,a??null,o,u,d,S,R,P,q),i.context=Xg(null),a=i.current,o=Vn(),u=ga(o),u.callback=null,_a(a,u,o),i.current.lanes=o,Rn(i,o),Ei(i),e[Ui]=i.current,Ef(e),new Zl(i)},bo.version="19.0.0",bo}var c0;function Cy(){if(c0)return kf.exports;c0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),kf.exports=wy(),kf.exports}var Dy=Cy();const Uy=A_(Dy);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sd="170",Ly=0,u0=1,Ny=2,R_=1,Oy=2,$i=3,Fa=0,Pn=1,ta=2,Ba=0,ms=1,f0=2,h0=3,d0=4,Py=5,dr=100,zy=101,By=102,Iy=103,Fy=104,Hy=200,Gy=201,Vy=202,ky=203,Ch=204,Dh=205,Xy=206,Wy=207,qy=208,Yy=209,Zy=210,jy=211,Ky=212,Qy=213,Jy=214,Uh=0,Lh=1,Nh=2,vs=3,Oh=4,Ph=5,zh=6,Bh=7,w_=0,$y=1,tS=2,Ia=0,eS=1,nS=2,iS=3,aS=4,rS=5,sS=6,oS=7,C_=300,xs=301,ys=302,Ih=303,Fh=304,Lc=306,Hh=1e3,mr=1001,Gh=1002,_i=1003,lS=1004,Kl=1005,bi=1006,Yf=1007,gr=1008,aa=1009,D_=1010,U_=1011,Bo=1012,Md=1013,_r=1014,ea=1015,Go=1016,Ed=1017,Td=1018,Ss=1020,L_=35902,N_=1021,O_=1022,gi=1023,P_=1024,z_=1025,gs=1026,Ms=1027,B_=1028,bd=1029,I_=1030,Ad=1031,Rd=1033,Mc=33776,Ec=33777,Tc=33778,bc=33779,Vh=35840,kh=35841,Xh=35842,Wh=35843,qh=36196,Yh=37492,Zh=37496,jh=37808,Kh=37809,Qh=37810,Jh=37811,$h=37812,td=37813,ed=37814,nd=37815,id=37816,ad=37817,rd=37818,sd=37819,od=37820,ld=37821,Ac=36492,cd=36494,ud=36495,F_=36283,fd=36284,hd=36285,dd=36286,cS=3200,uS=3201,H_=0,fS=1,za="",ri="srgb",Ts="srgb-linear",Nc="linear",ze="srgb",Jr=7680,p0=519,hS=512,dS=513,pS=514,G_=515,mS=516,gS=517,_S=518,vS=519,m0=35044,g0="300 es",na=2e3,wc=2001;class bs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(n)===-1&&r[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(n);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,pd=180/Math.PI;function As(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[s&255]+En[s>>8&255]+En[s>>16&255]+En[s>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[n&63|128]+En[n>>8&255]+"-"+En[n>>16&255]+En[n>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function bn(s,t,n){return Math.max(t,Math.min(n,s))}function xS(s,t){return(s%t+t)%t}function jf(s,t,n){return(1-n)*s+n*t}function Ao(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class It{constructor(t=0,n=0){It.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,r=this.y,l=t.elements;return this.x=l[0]*n+l[3]*r+l[6],this.y=l[1]*n+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(bn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y;return n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const r=Math.cos(n),l=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pe{constructor(t,n,r,l,c,f,h,p,m){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,l,c,f,h,p,m)}set(t,n,r,l,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=n,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(t,n,r){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,c=this.elements,f=r[0],h=r[3],p=r[6],m=r[1],g=r[4],x=r[7],v=r[2],y=r[5],E=r[8],A=l[0],M=l[3],_=l[6],B=l[1],N=l[4],D=l[7],$=l[2],V=l[5],H=l[8];return c[0]=f*A+h*B+p*$,c[3]=f*M+h*N+p*V,c[6]=f*_+h*D+p*H,c[1]=m*A+g*B+x*$,c[4]=m*M+g*N+x*V,c[7]=m*_+g*D+x*H,c[2]=v*A+y*B+E*$,c[5]=v*M+y*N+E*V,c[8]=v*_+y*D+E*H,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return n*f*g-n*h*m-r*c*g+r*h*p+l*c*m-l*f*p}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],x=g*f-h*m,v=h*p-g*c,y=m*c-f*p,E=n*x+r*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=x*A,t[1]=(l*m-g*r)*A,t[2]=(h*r-l*f)*A,t[3]=v*A,t[4]=(g*n-l*p)*A,t[5]=(l*c-h*n)*A,t[6]=y*A,t[7]=(r*p-m*n)*A,t[8]=(f*n-r*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,r,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Kf.makeScale(t,n)),this}rotate(t){return this.premultiply(Kf.makeRotation(-t)),this}translate(t,n){return this.premultiply(Kf.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<9;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<9;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new pe;function V_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Cc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yS(){const s=Cc("canvas");return s.style.display="block",s}const _0={};function Lo(s){s in _0||(_0[s]=!0,console.warn(s))}function SS(s,t,n){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function MS(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ES(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const be={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(s,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===ze&&(s.r=ia(s.r),s.g=ia(s.g),s.b=ia(s.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ze&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===za?Nc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,n){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ia(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const v0=[.64,.33,.3,.6,.15,.06],x0=[.2126,.7152,.0722],y0=[.3127,.329],S0=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M0=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);be.define({[Ts]:{primaries:v0,whitePoint:y0,transfer:Nc,toXYZ:S0,fromXYZ:M0,luminanceCoefficients:x0,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:v0,whitePoint:y0,transfer:ze,toXYZ:S0,fromXYZ:M0,luminanceCoefficients:x0,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}});let $r;class TS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$r===void 0&&($r=Cc("canvas")),$r.width=t.width,$r.height=t.height;const r=$r.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Cc("canvas");n.width=t.width,n.height=t.height;const r=n.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ia(c[f]/255)*255;return r.putImageData(l,0,0),n}else if(t.data){const n=t.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(ia(n[r]/255)*255):n[r]=ia(n[r]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bS=0;class k_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Qf(l[f].image)):c.push(Qf(l[f]))}else c=Qf(l);r.url=c}return n||(t.images[this.uuid]=r),r}}function Qf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?TS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AS=0;class zn extends bs{constructor(t=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,r=mr,l=mr,c=bi,f=gr,h=gi,p=aa,m=zn.DEFAULT_ANISOTROPY,g=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=As(),this.name="",this.source=new k_(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==C_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hh:t.x=t.x-Math.floor(t.x);break;case mr:t.x=t.x<0?0:1;break;case Gh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hh:t.y=t.y-Math.floor(t.y);break;case mr:t.y=t.y<0?0:1;break;case Gh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=C_;zn.DEFAULT_ANISOTROPY=1;class Ze{constructor(t=0,n=0,r=0,l=1){Ze.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,r,l){return this.x=t,this.y=n,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,r,l,c;const p=t.elements,m=p[0],g=p[4],x=p[8],v=p[1],y=p[5],E=p[9],A=p[2],M=p[6],_=p[10];if(Math.abs(g-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+M)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,D=(y+1)/2,$=(_+1)/2,V=(g+v)/4,H=(x+A)/4,K=(E+M)/4;return N>D&&N>$?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=V/r,c=H/r):D>$?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=V/l,c=K/l):$<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt($),r=H/c,l=K/c),this.set(r,l,c,n),this}let B=Math.sqrt((M-E)*(M-E)+(x-A)*(x-A)+(v-g)*(v-g));return Math.abs(B)<.001&&(B=1),this.x=(M-E)/B,this.y=(x-A)/B,this.z=(v-g)/B,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this.w=t.w+(n.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class RS extends bs{constructor(t=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Ze(0,0,t,n),this.scissorTest=!1,this.viewport=new Ze(0,0,t,n);const l={width:t,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new zn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,r=1){if(this.width!==t||this.height!==n||this.depth!==r){this.width=t,this.height=n,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=n,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new k_(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends RS{constructor(t=1,n=1,r={}){super(t,n,r),this.isWebGLRenderTarget=!0}}class X_ extends zn{constructor(t=null,n=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wS extends zn{constructor(t=null,n=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(t=0,n=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=r,this._w=l}static slerpFlat(t,n,r,l,c,f,h){let p=r[l+0],m=r[l+1],g=r[l+2],x=r[l+3];const v=c[f+0],y=c[f+1],E=c[f+2],A=c[f+3];if(h===0){t[n+0]=p,t[n+1]=m,t[n+2]=g,t[n+3]=x;return}if(h===1){t[n+0]=v,t[n+1]=y,t[n+2]=E,t[n+3]=A;return}if(x!==A||p!==v||m!==y||g!==E){let M=1-h;const _=p*v+m*y+g*E+x*A,B=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const $=Math.sqrt(N),V=Math.atan2($,_*B);M=Math.sin(M*V)/$,h=Math.sin(h*V)/$}const D=h*B;if(p=p*M+v*D,m=m*M+y*D,g=g*M+E*D,x=x*M+A*D,M===1-h){const $=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=$,m*=$,g*=$,x*=$}}t[n]=p,t[n+1]=m,t[n+2]=g,t[n+3]=x}static multiplyQuaternionsFlat(t,n,r,l,c,f){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],x=c[f],v=c[f+1],y=c[f+2],E=c[f+3];return t[n]=h*E+g*x+p*y-m*v,t[n+1]=p*E+g*v+m*x-h*y,t[n+2]=m*E+g*y+h*v-p*x,t[n+3]=g*E-h*x-p*v-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,r,l){return this._x=t,this._y=n,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),x=h(c/2),v=p(r/2),y=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=v*g*x+m*y*E,this._y=m*y*x-v*g*E,this._z=m*g*E+v*y*x,this._w=m*g*x-v*y*E;break;case"YXZ":this._x=v*g*x+m*y*E,this._y=m*y*x-v*g*E,this._z=m*g*E-v*y*x,this._w=m*g*x+v*y*E;break;case"ZXY":this._x=v*g*x-m*y*E,this._y=m*y*x+v*g*E,this._z=m*g*E+v*y*x,this._w=m*g*x-v*y*E;break;case"ZYX":this._x=v*g*x-m*y*E,this._y=m*y*x+v*g*E,this._z=m*g*E-v*y*x,this._w=m*g*x+v*y*E;break;case"YZX":this._x=v*g*x+m*y*E,this._y=m*y*x+v*g*E,this._z=m*g*E-v*y*x,this._w=m*g*x-v*y*E;break;case"XZY":this._x=v*g*x-m*y*E,this._y=m*y*x-v*g*E,this._z=m*g*E+v*y*x,this._w=m*g*x+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const r=n/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,r=n[0],l=n[4],c=n[8],f=n[1],h=n[5],p=n[9],m=n[2],g=n[6],x=n[10],v=r+h+x;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-m)*y,this._z=(f-l)*y}else if(r>h&&r>x){const y=2*Math.sqrt(1+r-h-x);this._w=(g-p)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+m)/y}else if(h>x){const y=2*Math.sqrt(1+h-r-x);this._w=(c-m)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+x-r-h);this._w=(f-l)/y,this._x=(c+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let r=t.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(bn(this.dot(t),-1,1)))}rotateTowards(t,n){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,n/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const r=t._x,l=t._y,c=t._z,f=t._w,h=n._x,p=n._y,m=n._z,g=n._w;return this._x=r*g+f*h+l*m-c*p,this._y=l*g+f*p+c*h-r*m,this._z=c*g+f*m+r*p-l*h,this._w=f*g-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*l+n*this._y,this._z=y*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),x=Math.sin((1-n)*g)/m,v=Math.sin(n*g)/m;return this._w=f*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=c*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,r){return this.copy(t).slerp(n,r)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(t=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(t,n,r){return r===void 0&&(r=this.z),this.x=t,this.y=n,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(E0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(E0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[3]*r+c[6]*l,this.y=c[1]*n+c[4]*r+c[7]*l,this.z=c[2]*n+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*n+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const n=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*r),g=2*(h*n-c*l),x=2*(c*r-f*n);return this.x=n+p*m+f*x-h*g,this.y=r+p*g+h*m-c*x,this.z=l+p*x+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*n+c[4]*r+c[8]*l,this.y=c[1]*n+c[5]*r+c[9]*l,this.z=c[2]*n+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,r){return this.x=t.x+(n.x-t.x)*r,this.y=t.y+(n.y-t.y)*r,this.z=t.z+(n.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const r=t.x,l=t.y,c=t.z,f=n.x,h=n.y,p=n.z;return this.x=l*p-c*h,this.y=c*f-r*p,this.z=r*h-l*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const r=t.dot(this)/n;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Jf.copy(this).projectOnVector(t),this.sub(Jf)}reflect(t){return this.sub(Jf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(t)/n;return Math.acos(bn(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return n*n+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,r){const l=Math.sin(n)*t;return this.x=l*Math.sin(r),this.y=Math.cos(n)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,r){return this.x=t*Math.sin(n),this.y=r,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=r,this.z=l,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(t),this.y=n,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jf=new Q,E0=new Vo;class ko{constructor(t=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n+=3)this.expandByPoint(hi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,r=t.count;n<r;n++)this.expandByPoint(hi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,r=t.length;n<r;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const r=hi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,hi):hi.fromBufferAttribute(c,f),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ql.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ql.copy(r.boundingBox)),Ql.applyMatrix4(t.matrixWorld),this.union(Ql)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,r;return t.normal.x>0?(n=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),n<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),Jl.subVectors(this.max,Ro),ts.subVectors(t.a,Ro),es.subVectors(t.b,Ro),ns.subVectors(t.c,Ro),Ca.subVectors(es,ts),Da.subVectors(ns,es),sr.subVectors(ts,ns);let n=[0,-Ca.z,Ca.y,0,-Da.z,Da.y,0,-sr.z,sr.y,Ca.z,0,-Ca.x,Da.z,0,-Da.x,sr.z,0,-sr.x,-Ca.y,Ca.x,0,-Da.y,Da.x,0,-sr.y,sr.x,0];return!$f(n,ts,es,ns,Jl)||(n=[1,0,0,0,1,0,0,0,1],!$f(n,ts,es,ns,Jl))?!1:($l.crossVectors(Ca,Da),n=[$l.x,$l.y,$l.z],$f(n,ts,es,ns,Jl))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],hi=new Q,Ql=new ko,ts=new Q,es=new Q,ns=new Q,Ca=new Q,Da=new Q,sr=new Q,Ro=new Q,Jl=new Q,$l=new Q,or=new Q;function $f(s,t,n,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){or.fromArray(s,c);const h=l.x*Math.abs(or.x)+l.y*Math.abs(or.y)+l.z*Math.abs(or.z),p=t.dot(or),m=n.dot(or),g=r.dot(or);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const CS=new ko,wo=new Q,th=new Q;class Oc{constructor(t=new Q,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const r=this.center;n!==void 0?r.copy(n):CS.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const r=this.center.distanceToSquared(t);return n.copy(t),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const n=wo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(th)),this.expandByPoint(wo.copy(t.center).sub(th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new Q,eh=new Q,tc=new Q,Ua=new Q,nh=new Q,ec=new Q,ih=new Q;class wd{constructor(t=new Q,n=new Q(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ji.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,n),ji.distanceToSquared(t))}distanceSqToSegment(t,n,r,l){eh.copy(t).add(n).multiplyScalar(.5),tc.copy(n).sub(t).normalize(),Ua.copy(this.origin).sub(eh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(tc),h=Ua.dot(this.direction),p=-Ua.dot(tc),m=Ua.lengthSq(),g=Math.abs(1-f*f);let x,v,y,E;if(g>0)if(x=f*p-h,v=f*h-p,E=c*g,x>=0)if(v>=-E)if(v<=E){const A=1/g;x*=A,v*=A,y=x*(x+f*v+2*h)+v*(f*x+v+2*p)+m}else v=c,x=Math.max(0,-(f*v+h)),y=-x*x+v*(v+2*p)+m;else v=-c,x=Math.max(0,-(f*v+h)),y=-x*x+v*(v+2*p)+m;else v<=-E?(x=Math.max(0,-(-f*c+h)),v=x>0?-c:Math.min(Math.max(-c,-p),c),y=-x*x+v*(v+2*p)+m):v<=E?(x=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+m):(x=Math.max(0,-(f*c+h)),v=x>0?c:Math.min(Math.max(-c,-p),c),y=-x*x+v*(v+2*p)+m);else v=f>0?-c:c,x=Math.max(0,-(f*v+h)),y=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(eh).addScaledVector(tc,v),y}intersectSphere(t,n){ji.subVectors(t.center,this.origin);const r=ji.dot(this.direction),l=ji.dot(ji)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/n;return r>=0?r:null}intersectPlane(t,n){const r=this.distanceToPlane(t);return r===null?null:this.at(r,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let r,l,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),x>=0?(h=(t.min.z-v.z)*x,p=(t.max.z-v.z)*x):(h=(t.max.z-v.z)*x,p=(t.min.z-v.z)*x),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,n)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,n,r,l,c){nh.subVectors(n,t),ec.subVectors(r,t),ih.crossVectors(nh,ec);let f=this.direction.dot(ih),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ua.subVectors(this.origin,t);const p=h*this.direction.dot(ec.crossVectors(Ua,ec));if(p<0)return null;const m=h*this.direction.dot(nh.cross(Ua));if(m<0||p+m>f)return null;const g=-h*Ua.dot(ih);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(t,n,r,l,c,f,h,p,m,g,x,v,y,E,A,M){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,l,c,f,h,p,m,g,x,v,y,E,A,M)}set(t,n,r,l,c,f,h,p,m,g,x,v,y,E,A,M){const _=this.elements;return _[0]=t,_[4]=n,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=p,_[2]=m,_[6]=g,_[10]=x,_[14]=v,_[3]=y,_[7]=E,_[11]=A,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(t){const n=this.elements,r=t.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(t){const n=this.elements,r=t.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,r){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,n,r){return this.set(t.x,n.x,r.x,0,t.y,n.y,r.y,0,t.z,n.z,r.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,r=t.elements,l=1/is.setFromMatrixColumn(t,0).length(),c=1/is.setFromMatrixColumn(t,1).length(),f=1/is.setFromMatrixColumn(t,2).length();return n[0]=r[0]*l,n[1]=r[1]*l,n[2]=r[2]*l,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const v=f*g,y=f*x,E=h*g,A=h*x;n[0]=p*g,n[4]=-p*x,n[8]=m,n[1]=y+E*m,n[5]=v-A*m,n[9]=-h*p,n[2]=A-v*m,n[6]=E+y*m,n[10]=f*p}else if(t.order==="YXZ"){const v=p*g,y=p*x,E=m*g,A=m*x;n[0]=v+A*h,n[4]=E*h-y,n[8]=f*m,n[1]=f*x,n[5]=f*g,n[9]=-h,n[2]=y*h-E,n[6]=A+v*h,n[10]=f*p}else if(t.order==="ZXY"){const v=p*g,y=p*x,E=m*g,A=m*x;n[0]=v-A*h,n[4]=-f*x,n[8]=E+y*h,n[1]=y+E*h,n[5]=f*g,n[9]=A-v*h,n[2]=-f*m,n[6]=h,n[10]=f*p}else if(t.order==="ZYX"){const v=f*g,y=f*x,E=h*g,A=h*x;n[0]=p*g,n[4]=E*m-y,n[8]=v*m+A,n[1]=p*x,n[5]=A*m+v,n[9]=y*m-E,n[2]=-m,n[6]=h*p,n[10]=f*p}else if(t.order==="YZX"){const v=f*p,y=f*m,E=h*p,A=h*m;n[0]=p*g,n[4]=A-v*x,n[8]=E*x+y,n[1]=x,n[5]=f*g,n[9]=-h*g,n[2]=-m*g,n[6]=y*x+E,n[10]=v-A*x}else if(t.order==="XZY"){const v=f*p,y=f*m,E=h*p,A=h*m;n[0]=p*g,n[4]=-x,n[8]=m*g,n[1]=v*x+A,n[5]=f*g,n[9]=y*x-E,n[2]=E*x-y,n[6]=h*g,n[10]=A*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(DS,t,US)}lookAt(t,n,r){const l=this.elements;return kn.subVectors(t,n),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),La.crossVectors(r,kn),La.lengthSq()===0&&(Math.abs(r.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),La.crossVectors(r,kn)),La.normalize(),nc.crossVectors(kn,La),l[0]=La.x,l[4]=nc.x,l[8]=kn.x,l[1]=La.y,l[5]=nc.y,l[9]=kn.y,l[2]=La.z,l[6]=nc.z,l[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const r=t.elements,l=n.elements,c=this.elements,f=r[0],h=r[4],p=r[8],m=r[12],g=r[1],x=r[5],v=r[9],y=r[13],E=r[2],A=r[6],M=r[10],_=r[14],B=r[3],N=r[7],D=r[11],$=r[15],V=l[0],H=l[4],K=l[8],C=l[12],b=l[1],I=l[5],ft=l[9],nt=l[13],ht=l[2],pt=l[6],k=l[10],O=l[14],F=l[3],st=l[7],U=l[11],W=l[15];return c[0]=f*V+h*b+p*ht+m*F,c[4]=f*H+h*I+p*pt+m*st,c[8]=f*K+h*ft+p*k+m*U,c[12]=f*C+h*nt+p*O+m*W,c[1]=g*V+x*b+v*ht+y*F,c[5]=g*H+x*I+v*pt+y*st,c[9]=g*K+x*ft+v*k+y*U,c[13]=g*C+x*nt+v*O+y*W,c[2]=E*V+A*b+M*ht+_*F,c[6]=E*H+A*I+M*pt+_*st,c[10]=E*K+A*ft+M*k+_*U,c[14]=E*C+A*nt+M*O+_*W,c[3]=B*V+N*b+D*ht+$*F,c[7]=B*H+N*I+D*pt+$*st,c[11]=B*K+N*ft+D*k+$*U,c[15]=B*C+N*nt+D*O+$*W,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],x=t[6],v=t[10],y=t[14],E=t[3],A=t[7],M=t[11],_=t[15];return E*(+c*p*x-l*m*x-c*h*v+r*m*v+l*h*y-r*p*y)+A*(+n*p*y-n*m*v+c*f*v-l*f*y+l*m*g-c*p*g)+M*(+n*m*x-n*h*y-c*f*x+r*f*y+c*h*g-r*m*g)+_*(-l*h*g-n*p*x+n*h*v+l*f*x-r*f*v+r*p*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=n,l[14]=r),this}invert(){const t=this.elements,n=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],x=t[9],v=t[10],y=t[11],E=t[12],A=t[13],M=t[14],_=t[15],B=x*M*m-A*v*m+A*p*y-h*M*y-x*p*_+h*v*_,N=E*v*m-g*M*m-E*p*y+f*M*y+g*p*_-f*v*_,D=g*A*m-E*x*m+E*h*y-f*A*y-g*h*_+f*x*_,$=E*x*p-g*A*p-E*h*v+f*A*v+g*h*M-f*x*M,V=n*B+r*N+l*D+c*$;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/V;return t[0]=B*H,t[1]=(A*v*c-x*M*c-A*l*y+r*M*y+x*l*_-r*v*_)*H,t[2]=(h*M*c-A*p*c+A*l*m-r*M*m-h*l*_+r*p*_)*H,t[3]=(x*p*c-h*v*c-x*l*m+r*v*m+h*l*y-r*p*y)*H,t[4]=N*H,t[5]=(g*M*c-E*v*c+E*l*y-n*M*y-g*l*_+n*v*_)*H,t[6]=(E*p*c-f*M*c-E*l*m+n*M*m+f*l*_-n*p*_)*H,t[7]=(f*v*c-g*p*c+g*l*m-n*v*m-f*l*y+n*p*y)*H,t[8]=D*H,t[9]=(E*x*c-g*A*c-E*r*y+n*A*y+g*r*_-n*x*_)*H,t[10]=(f*A*c-E*h*c+E*r*m-n*A*m-f*r*_+n*h*_)*H,t[11]=(g*h*c-f*x*c-g*r*m+n*x*m+f*r*y-n*h*y)*H,t[12]=$*H,t[13]=(g*A*l-E*x*l+E*r*v-n*A*v-g*r*M+n*x*M)*H,t[14]=(E*h*l-f*A*l-E*r*p+n*A*p+f*r*M-n*h*M)*H,t[15]=(f*x*l-g*h*l+g*r*p-n*x*p-f*r*v+n*h*v)*H,this}scale(t){const n=this.elements,r=t.x,l=t.y,c=t.z;return n[0]*=r,n[4]*=l,n[8]*=c,n[1]*=r,n[5]*=l,n[9]*=c,n[2]*=r,n[6]*=l,n[10]*=c,n[3]*=r,n[7]*=l,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,r,l))}makeTranslation(t,n,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),r=Math.sin(t);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const r=Math.cos(n),l=Math.sin(n),c=1-r,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*f,0,m*p-l*h,g*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,n,r){return this.set(t,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,n,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,n,l,1,0,0,0,0,1),this}compose(t,n,r){const l=this.elements,c=n._x,f=n._y,h=n._z,p=n._w,m=c+c,g=f+f,x=h+h,v=c*m,y=c*g,E=c*x,A=f*g,M=f*x,_=h*x,B=p*m,N=p*g,D=p*x,$=r.x,V=r.y,H=r.z;return l[0]=(1-(A+_))*$,l[1]=(y+D)*$,l[2]=(E-N)*$,l[3]=0,l[4]=(y-D)*V,l[5]=(1-(v+_))*V,l[6]=(M+B)*V,l[7]=0,l[8]=(E+N)*H,l[9]=(M-B)*H,l[10]=(1-(v+A))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,n,r){const l=this.elements;let c=is.set(l[0],l[1],l[2]).length();const f=is.set(l[4],l[5],l[6]).length(),h=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],di.copy(this);const m=1/c,g=1/f,x=1/h;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=x,di.elements[9]*=x,di.elements[10]*=x,n.setFromRotationMatrix(di),r.x=c,r.y=f,r.z=h,this}makePerspective(t,n,r,l,c,f,h=na){const p=this.elements,m=2*c/(n-t),g=2*c/(r-l),x=(n+t)/(n-t),v=(r+l)/(r-l);let y,E;if(h===na)y=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===wc)y=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,r,l,c,f,h=na){const p=this.elements,m=1/(n-t),g=1/(r-l),x=1/(f-c),v=(n+t)*m,y=(r+l)*g;let E,A;if(h===na)E=(f+c)*x,A=-2*x;else if(h===wc)E=c*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,r=t.elements;for(let l=0;l<16;l++)if(n[l]!==r[l])return!1;return!0}fromArray(t,n=0){for(let r=0;r<16;r++)this.elements[r]=t[r+n];return this}toArray(t=[],n=0){const r=this.elements;return t[n]=r[0],t[n+1]=r[1],t[n+2]=r[2],t[n+3]=r[3],t[n+4]=r[4],t[n+5]=r[5],t[n+6]=r[6],t[n+7]=r[7],t[n+8]=r[8],t[n+9]=r[9],t[n+10]=r[10],t[n+11]=r[11],t[n+12]=r[12],t[n+13]=r[13],t[n+14]=r[14],t[n+15]=r[15],t}}const is=new Q,di=new He,DS=new Q(0,0,0),US=new Q(1,1,1),La=new Q,nc=new Q,kn=new Q,T0=new He,b0=new Vo;class wi{constructor(t=0,n=0,r=0,l=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,l=this._order){return this._x=t,this._y=n,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],x=l[2],v=l[6],y=l[10];switch(n){case"XYZ":this._y=Math.asin(bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(bn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-bn(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(bn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-bn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return T0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(T0,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return b0.setFromEuler(this),this.setFromQuaternion(b0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";let Cd=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},LS=0;const A0=new Q,as=new Vo,Ki=new He,ic=new Q,Co=new Q,NS=new Q,OS=new Vo,R0=new Q(1,0,0),w0=new Q(0,1,0),C0=new Q(0,0,1),D0={type:"added"},PS={type:"removed"},rs={type:"childadded",child:null},ah={type:"childremoved",child:null};class vn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new Q,n=new wi,r=new Vo,l=new Q(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new He},normalMatrix:{value:new pe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return as.setFromAxisAngle(t,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,n){return as.setFromAxisAngle(t,n),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(R0,t)}rotateY(t){return this.rotateOnAxis(w0,t)}rotateZ(t){return this.rotateOnAxis(C0,t)}translateOnAxis(t,n){return A0.copy(t).applyQuaternion(this.quaternion),this.position.add(A0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(R0,t)}translateY(t){return this.translateOnAxis(w0,t)}translateZ(t){return this.translateOnAxis(C0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?ic.copy(t):ic.set(t,n,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Co,ic,this.up):Ki.lookAt(ic,Co,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),as.setFromRotationMatrix(Ki),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(D0),rs.child=t,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(PS),ah.child=t,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(D0),rs.child=t,this.dispatchEvent(rs),rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,NS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,OS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let r=0,l=n.length;r<l;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];c(t.shapes,x)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(n){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),x=f(t.shapes),v=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}vn.DEFAULT_UP=new Q(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new Q,Qi=new Q,rh=new Q,Ji=new Q,ss=new Q,os=new Q,U0=new Q,sh=new Q,oh=new Q,lh=new Q,ch=new Ze,uh=new Ze,fh=new Ze;class mi{constructor(t=new Q,n=new Q,r=new Q){this.a=t,this.b=n,this.c=r}static getNormal(t,n,r,l){l.subVectors(r,n),pi.subVectors(t,n),l.cross(pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,n,r,l,c){pi.subVectors(l,n),Qi.subVectors(r,n),rh.subVectors(t,n);const f=pi.dot(pi),h=pi.dot(Qi),p=pi.dot(rh),m=Qi.dot(Qi),g=Qi.dot(rh),x=f*m-h*h;if(x===0)return c.set(0,0,0),null;const v=1/x,y=(m*p-h*g)*v,E=(f*g-h*p)*v;return c.set(1-y-E,E,y)}static containsPoint(t,n,r,l){return this.getBarycoord(t,n,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,n,r,l,c,f,h,p){return this.getBarycoord(t,n,r,l,Ji)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ji.x),p.addScaledVector(f,Ji.y),p.addScaledVector(h,Ji.z),p)}static getInterpolatedAttribute(t,n,r,l,c,f){return ch.setScalar(0),uh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(t,n),uh.fromBufferAttribute(t,r),fh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(ch,c.x),f.addScaledVector(uh,c.y),f.addScaledVector(fh,c.z),f}static isFrontFacing(t,n,r,l){return pi.subVectors(r,n),Qi.subVectors(t,n),pi.cross(Qi).dot(l)<0}set(t,n,r){return this.a.copy(t),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(t,n,r,l){return this.a.copy(t[n]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,n,r,l){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),pi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return mi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,l,c){return mi.getInterpolation(t,this.a,this.b,this.c,n,r,l,c)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const r=this.a,l=this.b,c=this.c;let f,h;ss.subVectors(l,r),os.subVectors(c,r),sh.subVectors(t,r);const p=ss.dot(sh),m=os.dot(sh);if(p<=0&&m<=0)return n.copy(r);oh.subVectors(t,l);const g=ss.dot(oh),x=os.dot(oh);if(g>=0&&x<=g)return n.copy(l);const v=p*x-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),n.copy(r).addScaledVector(ss,f);lh.subVectors(t,c);const y=ss.dot(lh),E=os.dot(lh);if(E>=0&&y<=E)return n.copy(c);const A=y*m-p*E;if(A<=0&&m>=0&&E<=0)return h=m/(m-E),n.copy(r).addScaledVector(os,h);const M=g*E-y*x;if(M<=0&&x-g>=0&&y-E>=0)return U0.subVectors(c,l),h=(x-g)/(x-g+(y-E)),n.copy(l).addScaledVector(U0,h);const _=1/(M+A+v);return f=A*_,h=v*_,n.copy(r).addScaledVector(ss,f).addScaledVector(os,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},ac={h:0,s:0,l:0};function hh(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class ye{constructor(t,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,r)}set(t,n,r){if(n===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,n,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,n),this}setRGB(t,n,r,l=be.workingColorSpace){return this.r=t,this.g=n,this.b=r,be.toWorkingColorSpace(this,l),this}setHSL(t,n,r,l=be.workingColorSpace){if(t=xS(t,1),n=bn(n,0,1),r=bn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=hh(f,c,t+1/3),this.g=hh(f,c,t),this.b=hh(f,c,t-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(t,n=ri){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ri){const r=W_[t.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return be.fromWorkingColorSpace(Tn.copy(this),t),Math.round(bn(Tn.r*255,0,255))*65536+Math.round(bn(Tn.g*255,0,255))*256+Math.round(bn(Tn.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=be.workingColorSpace){be.fromWorkingColorSpace(Tn.copy(this),n);const r=Tn.r,l=Tn.g,c=Tn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const x=f-h;switch(m=g<=.5?x/(f+h):x/(2-f-h),f){case r:p=(l-c)/x+(l<c?6:0);break;case l:p=(c-r)/x+2;break;case c:p=(r-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,n=be.workingColorSpace){return be.fromWorkingColorSpace(Tn.copy(this),n),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=ri){be.fromWorkingColorSpace(Tn.copy(this),t);const n=Tn.r,r=Tn.g,l=Tn.b;return t!==ri?`color(${t} ${n.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,n,r){return this.getHSL(Na),this.setHSL(Na.h+t,Na.s+n,Na.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,r){return this.r=t.r+(n.r-t.r)*r,this.g=t.g+(n.g-t.g)*r,this.b=t.b+(n.b-t.b)*r,this}lerpHSL(t,n){this.getHSL(Na),t.getHSL(ac);const r=jf(Na.h,ac.h,n),l=jf(Na.s,ac.s,n),c=jf(Na.l,ac.l,n);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*n+c[3]*r+c[6]*l,this.g=c[1]*n+c[4]*r+c[7]*l,this.b=c[2]*n+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new ye;ye.NAMES=W_;let zS=0;class Rs extends bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=As(),this.name="",this.blending=ms,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=Dh,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=p0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const r=t[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const l=this[n];if(l===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[n]=r}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ch&&(r.blendSrc=this.blendSrc),this.blendDst!==Dh&&(r.blendDst=this.blendDst),this.blendEquation!==dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==p0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(n){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let r=null;if(n!==null){const l=n.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class q_ extends Rs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new Q,rc=new It;class Ri{constructor(t,n,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=r,this.usage=m0,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,r){t*=this.itemSize,r*=n.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=n.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)rc.fromBufferAttribute(this,n),rc.applyMatrix3(t),this.setXY(n,rc.x,rc.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)$e.fromBufferAttribute(this,n),$e.applyMatrix3(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let n=0,r=this.count;n<r;n++)$e.fromBufferAttribute(this,n),$e.applyMatrix4(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let n=0,r=this.count;n<r;n++)$e.fromBufferAttribute(this,n),$e.applyNormalMatrix(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let n=0,r=this.count;n<r;n++)$e.fromBufferAttribute(this,n),$e.transformDirection(t),this.setXYZ(n,$e.x,$e.y,$e.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let r=this.array[t*this.itemSize+n];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(t,n,r){return this.normalized&&(r=On(r,this.array)),this.array[t*this.itemSize+n]=r,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(t,n){return this.normalized&&(n=On(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(t,n){return this.normalized&&(n=On(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(t,n){return this.normalized&&(n=On(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(t,n){return this.normalized&&(n=On(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,r){return t*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array)),this.array[t+0]=n,this.array[t+1]=r,this}setXYZ(t,n,r,l){return t*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),l=On(l,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,n,r,l,c){return t*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),l=On(l,this.array),c=On(c,this.array)),this.array[t+0]=n,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==m0&&(t.usage=this.usage),t}}class Y_ extends Ri{constructor(t,n,r){super(new Uint16Array(t),n,r)}}class Z_ extends Ri{constructor(t,n,r){super(new Uint32Array(t),n,r)}}class Wn extends Ri{constructor(t,n,r){super(new Float32Array(t),n,r)}}let BS=0;const ai=new He,dh=new vn,ls=new Q,Xn=new ko,Do=new ko,pn=new Q;class Ci extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(V_(t)?Z_:Y_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,r=0){this.groups.push({start:t,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,n,r){return ai.makeTranslation(t,n,r),this.applyMatrix4(ai),this}scale(t,n,r){return ai.makeScale(t,n,r),this.applyMatrix4(ai),this}lookAt(t){return dh.lookAt(t),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Wn(r,3))}else{for(let r=0,l=n.count;r<l;r++){const c=t[r];n.setXYZ(r,c.x,c.y,c.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let r=0,l=n.length;r<l;r++){const c=n[r];Xn.setFromBufferAttribute(c),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(t){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(pn.addVectors(Xn.min,Do.min),Xn.expandByPoint(pn),pn.addVectors(Xn.max,Do.max),Xn.expandByPoint(pn)):(Xn.expandByPoint(Do.min),Xn.expandByPoint(Do.max))}Xn.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)pn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(pn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)pn.fromBufferAttribute(h,m),p&&(ls.fromBufferAttribute(t,m),pn.add(ls)),l=Math.max(l,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,l=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let K=0;K<r.count;K++)h[K]=new Q,p[K]=new Q;const m=new Q,g=new Q,x=new Q,v=new It,y=new It,E=new It,A=new Q,M=new Q;function _(K,C,b){m.fromBufferAttribute(r,K),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,b),v.fromBufferAttribute(c,K),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,b),g.sub(m),x.sub(m),y.sub(v),E.sub(v);const I=1/(y.x*E.y-E.x*y.y);isFinite(I)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(I),M.copy(x).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(I),h[K].add(A),h[C].add(A),h[b].add(A),p[K].add(M),p[C].add(M),p[b].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let K=0,C=B.length;K<C;++K){const b=B[K],I=b.start,ft=b.count;for(let nt=I,ht=I+ft;nt<ht;nt+=3)_(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const N=new Q,D=new Q,$=new Q,V=new Q;function H(K){$.fromBufferAttribute(l,K),V.copy($);const C=h[K];N.copy(C),N.sub($.multiplyScalar($.dot(C))).normalize(),D.crossVectors(V,C);const I=D.dot(p[K])<0?-1:1;f.setXYZW(K,N.x,N.y,N.z,I)}for(let K=0,C=B.length;K<C;++K){const b=B[K],I=b.start,ft=b.count;for(let nt=I,ht=I+ft;nt<ht;nt+=3)H(t.getX(nt+0)),H(t.getX(nt+1)),H(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new Q,c=new Q,f=new Q,h=new Q,p=new Q,m=new Q,g=new Q,x=new Q;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),A=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),f.fromBufferAttribute(n,M),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,M),h.add(g),p.add(g),m.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let v=0,y=n.count;v<y;v+=3)l.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,r=t.count;n<r;n++)pn.fromBufferAttribute(t,n),pn.normalize(),t.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,x=h.normalized,v=new m.constructor(p.length*g);let y=0,E=0;for(let A=0,M=p.length;A<M;A++){h.isInterleavedBufferAttribute?y=p[A]*h.data.stride+h.offset:y=p[A]*g;for(let _=0;_<g;_++)v[E++]=m[y++]}return new Ri(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ci,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);n.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,x=m.length;g<x;g++){const v=m[g],y=t(v,r);p.push(y)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,v=m.length;x<v;x++){const y=m[x];g.push(y.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(n));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(n))}const c=t.morphAttributes;for(const m in c){const g=[],x=c[m];for(let v=0,y=x.length;v<y;v++)g.push(x[v].clone(n));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L0=new He,lr=new wd,sc=new Oc,N0=new Q,oc=new Q,lc=new Q,cc=new Q,ph=new Q,uc=new Q,O0=new Q,fc=new Q;class Ai extends vn{constructor(t=new Ci,n=new q_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){uc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],x=c[p];g!==0&&(ph.fromBufferAttribute(x,t),f?uc.addScaledVector(ph,g):uc.addScaledVector(ph.sub(n),g))}n.add(uc)}return n}raycast(t,n){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),sc.copy(r.boundingSphere),sc.applyMatrix4(c),lr.copy(t.ray).recast(t.near),!(sc.containsPoint(lr.origin)===!1&&(lr.intersectSphere(sc,N0)===null||lr.origin.distanceToSquared(N0)>(t.far-t.near)**2))&&(L0.copy(c).invert(),lr.copy(t.ray).applyMatrix4(L0),!(r.boundingBox!==null&&lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,n,lr)))}_computeIntersections(t,n,r){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const M=v[E],_=f[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let D=B,$=N;D<$;D+=3){const V=h.getX(D),H=h.getX(D+1),K=h.getX(D+2);l=hc(this,_,t,r,m,g,x,V,H,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let M=E,_=A;M<_;M+=3){const B=h.getX(M),N=h.getX(M+1),D=h.getX(M+2);l=hc(this,f,t,r,m,g,x,B,N,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const M=v[E],_=f[M.materialIndex],B=Math.max(M.start,y.start),N=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let D=B,$=N;D<$;D+=3){const V=D,H=D+1,K=D+2;l=hc(this,_,t,r,m,g,x,V,H,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,n.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let M=E,_=A;M<_;M+=3){const B=M,N=M+1,D=M+2;l=hc(this,f,t,r,m,g,x,B,N,D),l&&(l.faceIndex=Math.floor(M/3),n.push(l))}}}}function IS(s,t,n,r,l,c,f,h){let p;if(t.side===Pn?p=r.intersectTriangle(f,c,l,!0,h):p=r.intersectTriangle(l,c,f,t.side===Fa,h),p===null)return null;fc.copy(h),fc.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(fc);return m<n.near||m>n.far?null:{distance:m,point:fc.clone(),object:s}}function hc(s,t,n,r,l,c,f,h,p,m){s.getVertexPosition(h,oc),s.getVertexPosition(p,lc),s.getVertexPosition(m,cc);const g=IS(s,t,n,r,oc,lc,cc,O0);if(g){const x=new Q;mi.getBarycoord(O0,oc,lc,cc,x),l&&(g.uv=mi.getInterpolatedAttribute(l,h,p,m,x,new It)),c&&(g.uv1=mi.getInterpolatedAttribute(c,h,p,m,x,new It)),f&&(g.normal=mi.getInterpolatedAttribute(f,h,p,m,x,new Q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new Q,materialIndex:0};mi.getNormal(oc,lc,cc,v.normal),g.face=v,g.barycoord=x}return g}class ws extends Ci{constructor(t=1,n=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],x=[];let v=0,y=0;E("z","y","x",-1,-1,r,n,t,f,c,0),E("z","y","x",1,-1,r,n,-t,f,c,1),E("x","z","y",1,1,t,r,n,l,f,2),E("x","z","y",1,-1,t,r,-n,l,f,3),E("x","y","z",1,-1,t,n,r,l,c,4),E("x","y","z",-1,-1,t,n,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Wn(m,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(x,2));function E(A,M,_,B,N,D,$,V,H,K,C){const b=D/H,I=$/K,ft=D/2,nt=$/2,ht=V/2,pt=H+1,k=K+1;let O=0,F=0;const st=new Q;for(let U=0;U<k;U++){const W=U*I-nt;for(let lt=0;lt<pt;lt++){const yt=lt*b-ft;st[A]=yt*B,st[M]=W*N,st[_]=ht,m.push(st.x,st.y,st.z),st[A]=0,st[M]=0,st[_]=V>0?1:-1,g.push(st.x,st.y,st.z),x.push(lt/H),x.push(1-U/K),O+=1}}for(let U=0;U<K;U++)for(let W=0;W<H;W++){const lt=v+W+pt*U,yt=v+W+pt*(U+1),G=v+(W+1)+pt*(U+1),ct=v+(W+1)+pt*U;p.push(lt,yt,ct),p.push(yt,G,ct),F+=6}h.addGroup(y,F,C),y+=F,v+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ws(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Es(s){const t={};for(const n in s){t[n]={};for(const r in s[n]){const l=s[n][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][r]=null):t[n][r]=l.clone():Array.isArray(l)?t[n][r]=l.slice():t[n][r]=l}}return t}function Dn(s){const t={};for(let n=0;n<s.length;n++){const r=Es(s[n]);for(const l in r)t[l]=r[l]}return t}function FS(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function j_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const HS={clone:Es,merge:Dn};var GS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends Rs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GS,this.fragmentShader=VS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=FS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?n.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[l]={type:"m4",value:f.toArray()}:n.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class K_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=na}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new Q,P0=new It,z0=new It;class si extends K_{constructor(t=50,n=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=pd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-t/Oa.z)}getViewSize(t,n){return this.getViewBounds(t,P0,z0),n.subVectors(z0,P0)}setViewOffset(t,n,r,l,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Zf*.5*this.fov)/this.zoom,r=2*n,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,n-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,n,n-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class kS extends vn{constructor(t,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(cs,us,t,n);l.layers=this.layers,this.add(l);const c=new si(cs,us,t,n);c.layers=this.layers,this.add(c);const f=new si(cs,us,t,n);f.layers=this.layers,this.add(f);const h=new si(cs,us,t,n);h.layers=this.layers,this.add(h);const p=new si(cs,us,t,n);p.layers=this.layers,this.add(p);const m=new si(cs,us,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[r,l,c,f,h,p]=n;for(const m of n)this.remove(m);if(t===na)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(n,c),t.setRenderTarget(r,1,l),t.render(n,f),t.setRenderTarget(r,2,l),t.render(n,h),t.setRenderTarget(r,3,l),t.render(n,p),t.setRenderTarget(r,4,l),t.render(n,m),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(n,g),t.setRenderTarget(x,v,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Q_ extends zn{constructor(t,n,r,l,c,f,h,p,m,g){t=t!==void 0?t:[],n=n!==void 0?n:xs,super(t,n,r,l,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class XS extends vr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Q_(l,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bi}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ws(5,5,5),c=new Ha({name:"CubemapFromEquirect",uniforms:Es(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pn,blending:Ba});c.uniforms.tEquirect.value=n;const f=new Ai(l,c),h=n.minFilter;return n.minFilter===gr&&(n.minFilter=bi),new kS(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n,r,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,r,l);t.setRenderTarget(c)}}const mh=new Q,WS=new Q,qS=new pe;class Pa{constructor(t=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,r,l){return this.normal.set(t,n,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,r){const l=mh.subVectors(r,n).cross(WS.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const r=t.delta(mh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:n.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return n<0&&r>0||r<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const r=n||qS.getNormalMatrix(t),l=this.coplanarPoint(mh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Oc,dc=new Q;class Dd{constructor(t=new Pa,n=new Pa,r=new Pa,l=new Pa,c=new Pa,f=new Pa){this.planes=[t,n,r,l,c,f]}set(t,n,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,n=na){const r=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],x=l[6],v=l[7],y=l[8],E=l[9],A=l[10],M=l[11],_=l[12],B=l[13],N=l[14],D=l[15];if(r[0].setComponents(p-c,v-m,M-y,D-_).normalize(),r[1].setComponents(p+c,v+m,M+y,D+_).normalize(),r[2].setComponents(p+f,v+g,M+E,D+B).normalize(),r[3].setComponents(p-f,v-g,M-E,D-B).normalize(),r[4].setComponents(p-h,v-x,M-A,D-N).normalize(),n===na)r[5].setComponents(p+h,v+x,M+A,D+N).normalize();else if(n===wc)r[5].setComponents(h,x,A,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){const n=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const n=this.planes;for(let r=0;r<6;r++){const l=n[r];if(dc.x=l.normal.x>0?t.max.x:t.min.x,dc.y=l.normal.y>0?t.max.y:t.min.y,dc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(dc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function J_(){let s=null,t=!1,n=null,r=null;function l(c,f){n(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&n!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function YS(s){const t=new WeakMap;function n(h,p){const m=h.array,g=h.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,g),h.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,p,m){const g=p.array,x=p.updateRanges;if(s.bindBuffer(m,h),x.length===0)s.bufferSubData(m,0,g);else{x.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<x.length;y++){const E=x[v],A=x[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let y=0,E=x.length;y<E;y++){const A=x[y];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}class Pc extends Ci{constructor(t=1,n=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:r,heightSegments:l};const c=t/2,f=n/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,x=t/h,v=n/p,y=[],E=[],A=[],M=[];for(let _=0;_<g;_++){const B=_*v-f;for(let N=0;N<m;N++){const D=N*x-c;E.push(D,-B,0),A.push(0,0,1),M.push(N/h),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let B=0;B<h;B++){const N=B+m*_,D=B+m*(_+1),$=B+1+m*(_+1),V=B+1+m*_;y.push(N,D,V),y.push(D,$,V)}this.setIndex(y),this.setAttribute("position",new Wn(E,3)),this.setAttribute("normal",new Wn(A,3)),this.setAttribute("uv",new Wn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pc(t.width,t.height,t.widthSegments,t.heightSegments)}}var ZS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TM="gl_FragColor = linearToOutputTexel( gl_FragColor );",bM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,UM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ME=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:ZS,alphahash_pars_fragment:jS,alphamap_fragment:KS,alphamap_pars_fragment:QS,alphatest_fragment:JS,alphatest_pars_fragment:$S,aomap_fragment:tM,aomap_pars_fragment:eM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:aM,beginnormal_vertex:rM,bsdfs:sM,iridescence_fragment:oM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:hM,color_fragment:dM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:_M,cube_uv_reflection_fragment:vM,defaultnormal_vertex:xM,displacementmap_pars_vertex:yM,displacementmap_vertex:SM,emissivemap_fragment:MM,emissivemap_pars_fragment:EM,colorspace_fragment:TM,colorspace_pars_fragment:bM,envmap_fragment:AM,envmap_common_pars_fragment:RM,envmap_pars_fragment:wM,envmap_pars_vertex:CM,envmap_physical_pars_fragment:HM,envmap_vertex:DM,fog_vertex:UM,fog_pars_vertex:LM,fog_fragment:NM,fog_pars_fragment:OM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:zM,lights_lambert_fragment:BM,lights_lambert_pars_fragment:IM,lights_pars_begin:FM,lights_toon_fragment:GM,lights_toon_pars_fragment:VM,lights_phong_fragment:kM,lights_phong_pars_fragment:XM,lights_physical_fragment:WM,lights_physical_pars_fragment:qM,lights_fragment_begin:YM,lights_fragment_maps:ZM,lights_fragment_end:jM,logdepthbuf_fragment:KM,logdepthbuf_pars_fragment:QM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:$M,map_fragment:tE,map_pars_fragment:eE,map_particle_fragment:nE,map_particle_pars_fragment:iE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:rE,morphinstance_vertex:sE,morphcolor_vertex:oE,morphnormal_vertex:lE,morphtarget_pars_vertex:cE,morphtarget_vertex:uE,normal_fragment_begin:fE,normal_fragment_maps:hE,normal_pars_fragment:dE,normal_pars_vertex:pE,normal_vertex:mE,normalmap_pars_fragment:gE,clearcoat_normal_fragment_begin:_E,clearcoat_normal_fragment_maps:vE,clearcoat_pars_fragment:xE,iridescence_pars_fragment:yE,opaque_fragment:SE,packing:ME,premultiplied_alpha_fragment:EE,project_vertex:TE,dithering_fragment:bE,dithering_pars_fragment:AE,roughnessmap_fragment:RE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:CE,shadowmap_pars_vertex:DE,shadowmap_vertex:UE,shadowmask_pars_fragment:LE,skinbase_vertex:NE,skinning_pars_vertex:OE,skinning_vertex:PE,skinnormal_vertex:zE,specularmap_fragment:BE,specularmap_pars_fragment:IE,tonemapping_fragment:FE,tonemapping_pars_fragment:HE,transmission_fragment:GE,transmission_pars_fragment:VE,uv_pars_fragment:kE,uv_pars_vertex:XE,uv_vertex:WE,worldpos_vertex:qE,background_vert:YE,background_frag:ZE,backgroundCube_vert:jE,backgroundCube_frag:KE,cube_vert:QE,cube_frag:JE,depth_vert:$E,depth_frag:tT,distanceRGBA_vert:eT,distanceRGBA_frag:nT,equirect_vert:iT,equirect_frag:aT,linedashed_vert:rT,linedashed_frag:sT,meshbasic_vert:oT,meshbasic_frag:lT,meshlambert_vert:cT,meshlambert_frag:uT,meshmatcap_vert:fT,meshmatcap_frag:hT,meshnormal_vert:dT,meshnormal_frag:pT,meshphong_vert:mT,meshphong_frag:gT,meshphysical_vert:_T,meshphysical_frag:vT,meshtoon_vert:xT,meshtoon_frag:yT,points_vert:ST,points_frag:MT,shadow_vert:ET,shadow_frag:TT,sprite_vert:bT,sprite_frag:AT},Pt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ti={basic:{uniforms:Dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ye(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Dn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Dn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new ye(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Dn([Pt.points,Pt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Dn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Dn([Pt.common,Pt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Dn([Pt.sprite,Pt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Dn([Pt.common,Pt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Dn([Pt.lights,Pt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Ti.physical={uniforms:Dn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const pc={r:0,b:0,g:0},ur=new wi,RT=new He;function wT(s,t,n,r,l,c,f){const h=new ye(0);let p=c===!0?0:1,m,g,x=null,v=0,y=null;function E(B){let N=B.isScene===!0?B.background:null;return N&&N.isTexture&&(N=(B.backgroundBlurriness>0?n:t).get(N)),N}function A(B){let N=!1;const D=E(B);D===null?_(h,p):D&&D.isColor&&(_(D,1),N=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,f):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(B,N){const D=E(N);D&&(D.isCubeTexture||D.mapping===Lc)?(g===void 0&&(g=new Ai(new ws(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:Es(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function($,V,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ur.copy(N.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(RT.makeRotationFromEuler(ur)),g.material.toneMapped=be.getTransfer(D.colorSpace)!==ze,(x!==D||v!==D.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,x=D,v=D.version,y=s.toneMapping),g.layers.enableAll(),B.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Ai(new Pc(2,2),new Ha({name:"BackgroundMaterial",uniforms:Es(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=be.getTransfer(D.colorSpace)!==ze,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||v!==D.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,x=D,v=D.version,y=s.toneMapping),m.layers.enableAll(),B.unshift(m,m.geometry,m.material,0,0,null))}function _(B,N){B.getRGB(pc,j_(s)),r.buffers.color.setClear(pc.r,pc.g,pc.b,N,f)}return{getClearColor:function(){return h},setClearColor:function(B,N=1){h.set(B),p=N,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(B){p=B,_(h,p)},render:A,addToRenderList:M}}function CT(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function h(b,I,ft,nt,ht){let pt=!1;const k=x(nt,ft,I);c!==k&&(c=k,m(c.object)),pt=y(b,nt,ft,ht),pt&&E(b,nt,ft,ht),ht!==null&&t.update(ht,s.ELEMENT_ARRAY_BUFFER),(pt||f)&&(f=!1,D(b,I,ft,nt),ht!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function p(){return s.createVertexArray()}function m(b){return s.bindVertexArray(b)}function g(b){return s.deleteVertexArray(b)}function x(b,I,ft){const nt=ft.wireframe===!0;let ht=r[b.id];ht===void 0&&(ht={},r[b.id]=ht);let pt=ht[I.id];pt===void 0&&(pt={},ht[I.id]=pt);let k=pt[nt];return k===void 0&&(k=v(p()),pt[nt]=k),k}function v(b){const I=[],ft=[],nt=[];for(let ht=0;ht<n;ht++)I[ht]=0,ft[ht]=0,nt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:ft,attributeDivisors:nt,object:b,attributes:{},index:null}}function y(b,I,ft,nt){const ht=c.attributes,pt=I.attributes;let k=0;const O=ft.getAttributes();for(const F in O)if(O[F].location>=0){const U=ht[F];let W=pt[F];if(W===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(W=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(W=b.instanceColor)),U===void 0||U.attribute!==W||W&&U.data!==W.data)return!0;k++}return c.attributesNum!==k||c.index!==nt}function E(b,I,ft,nt){const ht={},pt=I.attributes;let k=0;const O=ft.getAttributes();for(const F in O)if(O[F].location>=0){let U=pt[F];U===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(U=b.instanceColor));const W={};W.attribute=U,U&&U.data&&(W.data=U.data),ht[F]=W,k++}c.attributes=ht,c.attributesNum=k,c.index=nt}function A(){const b=c.newAttributes;for(let I=0,ft=b.length;I<ft;I++)b[I]=0}function M(b){_(b,0)}function _(b,I){const ft=c.newAttributes,nt=c.enabledAttributes,ht=c.attributeDivisors;ft[b]=1,nt[b]===0&&(s.enableVertexAttribArray(b),nt[b]=1),ht[b]!==I&&(s.vertexAttribDivisor(b,I),ht[b]=I)}function B(){const b=c.newAttributes,I=c.enabledAttributes;for(let ft=0,nt=I.length;ft<nt;ft++)I[ft]!==b[ft]&&(s.disableVertexAttribArray(ft),I[ft]=0)}function N(b,I,ft,nt,ht,pt,k){k===!0?s.vertexAttribIPointer(b,I,ft,ht,pt):s.vertexAttribPointer(b,I,ft,nt,ht,pt)}function D(b,I,ft,nt){A();const ht=nt.attributes,pt=ft.getAttributes(),k=I.defaultAttributeValues;for(const O in pt){const F=pt[O];if(F.location>=0){let st=ht[O];if(st===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(st=b.instanceColor)),st!==void 0){const U=st.normalized,W=st.itemSize,lt=t.get(st);if(lt===void 0)continue;const yt=lt.buffer,G=lt.type,ct=lt.bytesPerElement,St=G===s.INT||G===s.UNSIGNED_INT||st.gpuType===Md;if(st.isInterleavedBufferAttribute){const Tt=st.data,Dt=Tt.stride,kt=st.offset;if(Tt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<F.locationSize;Bt++)_(F.location+Bt,Tt.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Bt=0;Bt<F.locationSize;Bt++)M(F.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Bt=0;Bt<F.locationSize;Bt++)N(F.location+Bt,W/F.locationSize,G,U,Dt*ct,(kt+W/F.locationSize*Bt)*ct,St)}else{if(st.isInstancedBufferAttribute){for(let Tt=0;Tt<F.locationSize;Tt++)_(F.location+Tt,st.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Tt=0;Tt<F.locationSize;Tt++)M(F.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Tt=0;Tt<F.locationSize;Tt++)N(F.location+Tt,W/F.locationSize,G,U,W*ct,W/F.locationSize*Tt*ct,St)}}else if(k!==void 0){const U=k[O];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(F.location,U);break;case 3:s.vertexAttrib3fv(F.location,U);break;case 4:s.vertexAttrib4fv(F.location,U);break;default:s.vertexAttrib1fv(F.location,U)}}}}B()}function $(){K();for(const b in r){const I=r[b];for(const ft in I){const nt=I[ft];for(const ht in nt)g(nt[ht].object),delete nt[ht];delete I[ft]}delete r[b]}}function V(b){if(r[b.id]===void 0)return;const I=r[b.id];for(const ft in I){const nt=I[ft];for(const ht in nt)g(nt[ht].object),delete nt[ht];delete I[ft]}delete r[b.id]}function H(b){for(const I in r){const ft=r[I];if(ft[b.id]===void 0)continue;const nt=ft[b.id];for(const ht in nt)g(nt[ht].object),delete nt[ht];delete ft[b.id]}}function K(){C(),f=!0,c!==l&&(c=l,m(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:C,dispose:$,releaseStatesOfGeometry:V,releaseStatesOfProgram:H,initAttributes:A,enableAttribute:M,disableUnusedAttributes:B}}function DT(s,t,n){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),n.update(g,r,1)}function f(m,g,x){x!==0&&(s.drawArraysInstanced(r,m,g,x),n.update(g,r,x))}function h(m,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,x);let y=0;for(let E=0;E<x;E++)y+=g[E];n.update(y,r,1)}function p(m,g,x,v){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)f(m[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*v[A];n.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function UT(s,t,n,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==gi&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const K=H===Go&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==aa&&r.convert(H)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==ea&&!K)}function p(H){if(H==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=n.logarithmicDepthBuffer===!0,v=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),B=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=E>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:$,maxSamples:V}}function LT(s){const t=this;let n=null,r=0,l=!1,c=!1;const f=new Pa,h=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const y=x.length!==0||v||r!==0||l;return l=v,r=x.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){n=g(x,v,0)},this.setState=function(x,v,y){const E=x.clippingPlanes,A=x.clipIntersection,M=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||c&&!M)c?g(null):m();else{const B=c?0:r,N=B*4;let D=_.clippingState||null;p.value=D,D=g(E,v,N,y);for(let $=0;$!==N;++$)D[$]=n[$];_.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=B}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,v,y,E){const A=x!==null?x.length:0;let M=null;if(A!==0){if(M=p.value,E!==!0||M===null){const _=y+A*4,B=v.matrixWorldInverse;h.getNormalMatrix(B),(M===null||M.length<_)&&(M=new Float32Array(_));for(let N=0,D=y;N!==A;++N,D+=4)f.copy(x[N]).applyMatrix4(B,h),f.normal.toArray(M,D),M[D+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function NT(s){let t=new WeakMap;function n(f,h){return h===Ih?f.mapping=xs:h===Fh&&(f.mapping=ys),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Ih||h===Fh)if(t.has(f)){const p=t.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new XS(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),n(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}class $_ extends K_{constructor(t=-1,n=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+n,p=l-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const hs=4,B0=[.125,.215,.35,.446,.526,.582],pr=20,gh=new $_,I0=new ye;let _h=null,vh=0,xh=0,yh=!1;const hr=(1+Math.sqrt(5))/2,fs=1/hr,F0=[new Q(-hr,fs,0),new Q(hr,fs,0),new Q(-fs,0,hr),new Q(fs,0,hr),new Q(0,hr,-fs),new Q(0,hr,fs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class H0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,r=.1,l=100){_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,l,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=k0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_h,vh,xh),this._renderer.xr.enabled=yh,t.scissorTest=!1,mc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===xs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_h=this._renderer.getRenderTarget(),vh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:Go,format:gi,colorSpace:Ts,depthBuffer:!1},l=G0(t,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G0(t,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OT(c)),this._blurMaterial=PT(c,t,n)}return l}_compileMaterial(t){const n=new Ai(this._lodPlanes[0],t);this._renderer.compile(n,gh)}_sceneToCubeUV(t,n,r,l){const h=new si(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,v=g.toneMapping;g.getClearColor(I0),g.toneMapping=Ia,g.autoClear=!1;const y=new q_({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),E=new Ai(new ws,y);let A=!1;const M=t.background;M?M.isColor&&(y.color.copy(M),t.background=null,A=!0):(y.color.copy(I0),A=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(h.up.set(0,p[_],0),h.lookAt(m[_],0,0)):B===1?(h.up.set(0,0,p[_]),h.lookAt(0,m[_],0)):(h.up.set(0,p[_],0),h.lookAt(0,0,m[_]));const N=this._cubeSize;mc(l,B*N,_>2?N:0,N,N),g.setRenderTarget(l),A&&g.render(E,h),g.render(t,h)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=v,g.autoClear=x,t.background=M}_textureToCubeUV(t,n){const r=this._renderer,l=t.mapping===xs||t.mapping===ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=k0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Ai(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;mc(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,gh)}_applyPMREM(t){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=F0[(l-c-1)%F0.length];this._blur(t,c-1,c,f,h)}n.autoClear=r}_blur(t,n,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,n,r,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Ai(this._lodPlanes[l],m),v=m.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*pr-1),A=c/E,M=isFinite(c)?1+Math.floor(g*A):pr;M>pr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${pr}`);const _=[];let B=0;for(let H=0;H<pr;++H){const K=H/A,C=Math.exp(-K*K/2);_.push(C),H===0?B+=C:H<M&&(B+=2*C)}for(let H=0;H<_.length;H++)_[H]=_[H]/B;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=_,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-r;const D=this._sizeLods[l],$=3*D*(l>N-hs?l-N+hs:0),V=4*(this._cubeSize-D);mc(n,$,V,3*D,2*D),p.setRenderTarget(n),p.render(x,gh)}}function OT(s){const t=[],n=[],r=[];let l=s;const c=s-hs+1+B0.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);n.push(h);let p=1/h;f>s-hs?p=B0[f-s+hs-1]:f===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,x=1+m,v=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,E=6,A=3,M=2,_=1,B=new Float32Array(A*E*y),N=new Float32Array(M*E*y),D=new Float32Array(_*E*y);for(let V=0;V<y;V++){const H=V%3*2/3-1,K=V>2?0:-1,C=[H,K,0,H+2/3,K,0,H+2/3,K+1,0,H,K,0,H+2/3,K+1,0,H,K+1,0];B.set(C,A*E*V),N.set(v,M*E*V);const b=[V,V,V,V,V,V];D.set(b,_*E*V)}const $=new Ci;$.setAttribute("position",new Ri(B,A)),$.setAttribute("uv",new Ri(N,M)),$.setAttribute("faceIndex",new Ri(D,_)),t.push($),l>hs&&l--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function G0(s,t,n){const r=new vr(s,t,n);return r.texture.mapping=Lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function mc(s,t,n,r,l){s.viewport.set(t,n,r,l),s.scissor.set(t,n,r,l)}function PT(s,t,n){const r=new Float32Array(pr),l=new Q(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function V0(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function k0(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zT(s){let t=new WeakMap,n=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===Ih||p===Fh,g=p===xs||p===ys;if(m||g){let x=t.get(h);const v=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new H0(s)),x=m?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const y=h.image;return m&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new H0(s)),x=m?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function BT(s){const t={};function n(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const l=n(r);return l===null&&Lo("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function IT(s,t,n,r){const l={},c=new WeakMap;function f(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);for(const E in v.morphAttributes){const A=v.morphAttributes[E];for(let M=0,_=A.length;M<_;M++)t.remove(A[M])}v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(x,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,n.memory.geometries++),v}function p(x){const v=x.attributes;for(const E in v)t.update(v[E],s.ARRAY_BUFFER);const y=x.morphAttributes;for(const E in y){const A=y[E];for(let M=0,_=A.length;M<_;M++)t.update(A[M],s.ARRAY_BUFFER)}}function m(x){const v=[],y=x.index,E=x.attributes.position;let A=0;if(y!==null){const B=y.array;A=y.version;for(let N=0,D=B.length;N<D;N+=3){const $=B[N+0],V=B[N+1],H=B[N+2];v.push($,V,V,H,H,$)}}else if(E!==void 0){const B=E.array;A=E.version;for(let N=0,D=B.length/3-1;N<D;N+=3){const $=N+0,V=N+1,H=N+2;v.push($,V,V,H,H,$)}}else return;const M=new(V_(v)?Z_:Y_)(v,1);M.version=A;const _=c.get(x);_&&t.remove(_),c.set(x,M)}function g(x){const v=c.get(x);if(v){const y=x.index;y!==null&&v.version<y.version&&m(x)}else m(x);return c.get(x)}return{get:h,update:p,getWireframeAttribute:g}}function FT(s,t,n){let r;function l(v){r=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function p(v,y){s.drawElements(r,y,c,v*f),n.update(y,r,1)}function m(v,y,E){E!==0&&(s.drawElementsInstanced(r,y,c,v*f,E),n.update(y,r,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,v,0,E);let M=0;for(let _=0;_<E;_++)M+=y[_];n.update(M,r,1)}function x(v,y,E,A){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<v.length;_++)m(v[_]/f,y[_],A[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,v,0,A,0,E);let _=0;for(let B=0;B<E;B++)_+=y[B]*A[B];n.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function HT(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:l,update:r}}function GT(s,t,n){const r=new WeakMap,l=new Ze;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==x){let b=function(){K.dispose(),r.delete(h),h.removeEventListener("dispose",b)};var y=b;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),A===!0&&(D=2),M===!0&&(D=3);let $=h.attributes.position.count*D,V=1;$>t.maxTextureSize&&(V=Math.ceil($/t.maxTextureSize),$=t.maxTextureSize);const H=new Float32Array($*V*4*x),K=new X_(H,$,V,x);K.type=ea,K.needsUpdate=!0;const C=D*4;for(let I=0;I<x;I++){const ft=_[I],nt=B[I],ht=N[I],pt=$*V*4*I;for(let k=0;k<ft.count;k++){const O=k*C;E===!0&&(l.fromBufferAttribute(ft,k),H[pt+O+0]=l.x,H[pt+O+1]=l.y,H[pt+O+2]=l.z,H[pt+O+3]=0),A===!0&&(l.fromBufferAttribute(nt,k),H[pt+O+4]=l.x,H[pt+O+5]=l.y,H[pt+O+6]=l.z,H[pt+O+7]=0),M===!0&&(l.fromBufferAttribute(ht,k),H[pt+O+8]=l.x,H[pt+O+9]=l.y,H[pt+O+10]=l.z,H[pt+O+11]=ht.itemSize===4?l.w:1)}}v={count:x,texture:K,size:new It($,V)},r.set(h,v),h.addEventListener("dispose",b)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const A=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function VT(s,t,n,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,x=t.get(p,g);if(l.get(x)!==m&&(t.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return x}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}class tv extends zn{constructor(t,n,r,l,c,f,h,p,m,g=gs){if(g!==gs&&g!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===gs&&(r=_r),r===void 0&&g===Ms&&(r=Ss),super(null,l,c,f,h,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=h!==void 0?h:_i,this.minFilter=p!==void 0?p:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ev=new zn,X0=new tv(1,1),nv=new X_,iv=new wS,av=new Q_,W0=[],q0=[],Y0=new Float32Array(16),Z0=new Float32Array(9),j0=new Float32Array(4);function Cs(s,t,n){const r=s[0];if(r<=0||r>0)return s;const l=t*n;let c=W0[l];if(c===void 0&&(c=new Float32Array(l),W0[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,s[f].toArray(c,h)}return c}function on(s,t){if(s.length!==t.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==t[n])return!1;return!0}function ln(s,t){for(let n=0,r=t.length;n<r;n++)s[n]=t[n]}function zc(s,t){let n=q0[t];n===void 0&&(n=new Int32Array(t),q0[t]=n);for(let r=0;r!==t;++r)n[r]=s.allocateTextureUnit();return n}function kT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function XT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;s.uniform2fv(this.addr,t),ln(n,t)}}function WT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(on(n,t))return;s.uniform3fv(this.addr,t),ln(n,t)}}function qT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;s.uniform4fv(this.addr,t),ln(n,t)}}function YT(s,t){const n=this.cache,r=t.elements;if(r===void 0){if(on(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),ln(n,t)}else{if(on(n,r))return;j0.set(r),s.uniformMatrix2fv(this.addr,!1,j0),ln(n,r)}}function ZT(s,t){const n=this.cache,r=t.elements;if(r===void 0){if(on(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),ln(n,t)}else{if(on(n,r))return;Z0.set(r),s.uniformMatrix3fv(this.addr,!1,Z0),ln(n,r)}}function jT(s,t){const n=this.cache,r=t.elements;if(r===void 0){if(on(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),ln(n,t)}else{if(on(n,r))return;Y0.set(r),s.uniformMatrix4fv(this.addr,!1,Y0),ln(n,r)}}function KT(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function QT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;s.uniform2iv(this.addr,t),ln(n,t)}}function JT(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(on(n,t))return;s.uniform3iv(this.addr,t),ln(n,t)}}function $T(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;s.uniform4iv(this.addr,t),ln(n,t)}}function t1(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function e1(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(on(n,t))return;s.uniform2uiv(this.addr,t),ln(n,t)}}function n1(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(on(n,t))return;s.uniform3uiv(this.addr,t),ln(n,t)}}function i1(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(on(n,t))return;s.uniform4uiv(this.addr,t),ln(n,t)}}function a1(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(X0.compareFunction=G_,c=X0):c=ev,n.setTexture2D(t||c,l)}function r1(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),n.setTexture3D(t||iv,l)}function s1(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),n.setTextureCube(t||av,l)}function o1(s,t,n){const r=this.cache,l=n.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),n.setTexture2DArray(t||nv,l)}function l1(s){switch(s){case 5126:return kT;case 35664:return XT;case 35665:return WT;case 35666:return qT;case 35674:return YT;case 35675:return ZT;case 35676:return jT;case 5124:case 35670:return KT;case 35667:case 35671:return QT;case 35668:case 35672:return JT;case 35669:case 35673:return $T;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}function c1(s,t){s.uniform1fv(this.addr,t)}function u1(s,t){const n=Cs(t,this.size,2);s.uniform2fv(this.addr,n)}function f1(s,t){const n=Cs(t,this.size,3);s.uniform3fv(this.addr,n)}function h1(s,t){const n=Cs(t,this.size,4);s.uniform4fv(this.addr,n)}function d1(s,t){const n=Cs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function p1(s,t){const n=Cs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function m1(s,t){const n=Cs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function g1(s,t){s.uniform1iv(this.addr,t)}function _1(s,t){s.uniform2iv(this.addr,t)}function v1(s,t){s.uniform3iv(this.addr,t)}function x1(s,t){s.uniform4iv(this.addr,t)}function y1(s,t){s.uniform1uiv(this.addr,t)}function S1(s,t){s.uniform2uiv(this.addr,t)}function M1(s,t){s.uniform3uiv(this.addr,t)}function E1(s,t){s.uniform4uiv(this.addr,t)}function T1(s,t,n){const r=this.cache,l=t.length,c=zc(n,l);on(r,c)||(s.uniform1iv(this.addr,c),ln(r,c));for(let f=0;f!==l;++f)n.setTexture2D(t[f]||ev,c[f])}function b1(s,t,n){const r=this.cache,l=t.length,c=zc(n,l);on(r,c)||(s.uniform1iv(this.addr,c),ln(r,c));for(let f=0;f!==l;++f)n.setTexture3D(t[f]||iv,c[f])}function A1(s,t,n){const r=this.cache,l=t.length,c=zc(n,l);on(r,c)||(s.uniform1iv(this.addr,c),ln(r,c));for(let f=0;f!==l;++f)n.setTextureCube(t[f]||av,c[f])}function R1(s,t,n){const r=this.cache,l=t.length,c=zc(n,l);on(r,c)||(s.uniform1iv(this.addr,c),ln(r,c));for(let f=0;f!==l;++f)n.setTexture2DArray(t[f]||nv,c[f])}function w1(s){switch(s){case 5126:return c1;case 35664:return u1;case 35665:return f1;case 35666:return h1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return S1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}class C1{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.setValue=l1(n.type)}}class D1{constructor(t,n,r){this.id=t,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=w1(n.type)}}class U1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,n[h.id],r)}}}const Sh=/(\w+)(\])?(\[|\.)?/g;function K0(s,t){s.seq.push(t),s.map[t.id]=t}function L1(s,t,n){const r=s.name,l=r.length;for(Sh.lastIndex=0;;){const c=Sh.exec(r),f=Sh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){K0(n,m===void 0?new C1(h,s,t):new D1(h,s,t));break}else{let x=n.map[h];x===void 0&&(x=new U1(h),K0(n,x)),n=x}}}class Rc{constructor(t,n){this.seq=[],this.map={};const r=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(n,l),f=t.getUniformLocation(n,c.name);L1(c,f,this)}}setValue(t,n,r,l){const c=this.map[n];c!==void 0&&c.setValue(t,r,l)}setOptional(t,n,r){const l=n[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,n,r,l){for(let c=0,f=n.length;c!==f;++c){const h=n[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,n){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in n&&r.push(f)}return r}}function Q0(s,t,n){const r=s.createShader(t);return s.shaderSource(r,n),s.compileShader(r),r}const N1=37297;let O1=0;function P1(s,t){const n=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return r.join(`
`)}const J0=new pe;function z1(s){be._getMatrix(J0,be.workingColorSpace,s);const t=`mat3( ${J0.elements.map(n=>n.toFixed(4))} )`;switch(be.getTransfer(s)){case Nc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $0(s,t,n){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+P1(s.getShaderSource(t),f)}else return l}function B1(s,t){const n=z1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function I1(s,t){let n;switch(t){case eS:n="Linear";break;case nS:n="Reinhard";break;case iS:n="Cineon";break;case aS:n="ACESFilmic";break;case sS:n="AgX";break;case oS:n="Neutral";break;case rS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const gc=new Q;function F1(){be.getLuminanceCoefficients(gc);const s=gc.x.toFixed(4),t=gc.y.toFixed(4),n=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function G1(s){const t=[];for(const n in s){const r=s[n];r!==!1&&t.push("#define "+n+" "+r)}return t.join(`
`)}function V1(s,t){const n={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return n}function No(s){return s!==""}function t_(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function e_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const k1=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(s){return s.replace(k1,W1)}const X1=new Map;function W1(s,t){let n=me[t];if(n===void 0){const r=X1.get(t);if(r!==void 0)n=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return md(n)}const q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n_(s){return s.replace(q1,Y1)}function Y1(s,t,n,r){let l="";for(let c=parseInt(t);c<parseInt(n);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function i_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Z1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===R_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Oy?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function j1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xs:case ys:t="ENVMAP_TYPE_CUBE";break;case Lc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Q1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case w_:t="ENVMAP_BLENDING_MULTIPLY";break;case $y:t="ENVMAP_BLENDING_MIX";break;case tS:t="ENVMAP_BLENDING_ADD";break}return t}function J1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function $1(s,t,n,r){const l=s.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const p=Z1(n),m=j1(n),g=K1(n),x=Q1(n),v=J1(n),y=H1(n),E=G1(c),A=l.createProgram();let M,_,B=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(No).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(No).join(`
`),_.length>0&&(_+=`
`)):(M=[i_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),_=[i_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ia?"#define TONE_MAPPING":"",n.toneMapping!==Ia?me.tonemapping_pars_fragment:"",n.toneMapping!==Ia?I1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,B1("linearToOutputTexel",n.outputColorSpace),F1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),f=md(f),f=t_(f,n),f=e_(f,n),h=md(h),h=t_(h,n),h=e_(h,n),f=n_(f),h=n_(h),n.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===g0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===g0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=B+M+f,D=B+_+h,$=Q0(l,l.VERTEX_SHADER,N),V=Q0(l,l.FRAGMENT_SHADER,D);l.attachShader(A,$),l.attachShader(A,V),n.index0AttributeName!==void 0?l.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function H(I){if(s.debug.checkShaderErrors){const ft=l.getProgramInfoLog(A).trim(),nt=l.getShaderInfoLog($).trim(),ht=l.getShaderInfoLog(V).trim();let pt=!0,k=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(pt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,$,V);else{const O=$0(l,$,"vertex"),F=$0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ft+`
`+O+`
`+F)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(nt===""||ht==="")&&(k=!1);k&&(I.diagnostics={runnable:pt,programLog:ft,vertexShader:{log:nt,prefix:M},fragmentShader:{log:ht,prefix:_}})}l.deleteShader($),l.deleteShader(V),K=new Rc(l,A),C=V1(l,A)}let K;this.getUniforms=function(){return K===void 0&&H(this),K};let C;this.getAttributes=function(){return C===void 0&&H(this),C};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(A,N1)),b},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=O1++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=$,this.fragmentShader=V,this}let tb=0;class eb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let r=n.get(t);return r===void 0&&(r=new Set,n.set(t,r)),r}_getShaderStage(t){const n=this.shaderCache;let r=n.get(t);return r===void 0&&(r=new nb(t),n.set(t,r)),r}}class nb{constructor(t){this.id=tb++,this.code=t,this.usedTimes=0}}function ib(s,t,n,r,l,c,f){const h=new Cd,p=new eb,m=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return m.add(C),C===0?"uv":`uv${C}`}function M(C,b,I,ft,nt){const ht=ft.fog,pt=nt.geometry,k=C.isMeshStandardMaterial?ft.environment:null,O=(C.isMeshStandardMaterial?n:t).get(C.envMap||k),F=O&&O.mapping===Lc?O.image.height:null,st=E[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const U=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,W=U!==void 0?U.length:0;let lt=0;pt.morphAttributes.position!==void 0&&(lt=1),pt.morphAttributes.normal!==void 0&&(lt=2),pt.morphAttributes.color!==void 0&&(lt=3);let yt,G,ct,St;if(st){const Ae=Ti[st];yt=Ae.vertexShader,G=Ae.fragmentShader}else yt=C.vertexShader,G=C.fragmentShader,p.update(C),ct=p.getVertexShaderID(C),St=p.getFragmentShaderID(C);const Tt=s.getRenderTarget(),Dt=s.state.buffers.depth.getReversed(),kt=nt.isInstancedMesh===!0,Bt=nt.isBatchedMesh===!0,ce=!!C.map,xt=!!C.matcap,At=!!O,z=!!C.aoMap,Yt=!!C.lightMap,bt=!!C.bumpMap,Ht=!!C.normalMap,Ut=!!C.displacementMap,ae=!!C.emissiveMap,Ft=!!C.metalnessMap,L=!!C.roughnessMap,T=C.anisotropy>0,et=C.clearcoat>0,ut=C.dispersion>0,Mt=C.iridescence>0,gt=C.sheen>0,Zt=C.transmission>0,Lt=T&&!!C.anisotropyMap,Gt=et&&!!C.clearcoatMap,ge=et&&!!C.clearcoatNormalMap,wt=et&&!!C.clearcoatRoughnessMap,Xt=Mt&&!!C.iridescenceMap,ne=Mt&&!!C.iridescenceThicknessMap,$t=gt&&!!C.sheenColorMap,Wt=gt&&!!C.sheenRoughnessMap,fe=!!C.specularMap,ie=!!C.specularColorMap,Le=!!C.specularIntensityMap,Y=Zt&&!!C.transmissionMap,zt=Zt&&!!C.thicknessMap,ot=!!C.gradientMap,vt=!!C.alphaMap,Nt=C.alphaTest>0,Ot=!!C.alphaHash,le=!!C.extensions;let Ge=Ia;C.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const tn={shaderID:st,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:G,defines:C.defines,customVertexShaderID:ct,customFragmentShaderID:St,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Bt,batchingColor:Bt&&nt._colorsTexture!==null,instancing:kt,instancingColor:kt&&nt.instanceColor!==null,instancingMorph:kt&&nt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Tt===null?s.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ts,alphaToCoverage:!!C.alphaToCoverage,map:ce,matcap:xt,envMap:At,envMapMode:At&&O.mapping,envMapCubeUVHeight:F,aoMap:z,lightMap:Yt,bumpMap:bt,normalMap:Ht,displacementMap:v&&Ut,emissiveMap:ae,normalMapObjectSpace:Ht&&C.normalMapType===fS,normalMapTangentSpace:Ht&&C.normalMapType===H_,metalnessMap:Ft,roughnessMap:L,anisotropy:T,anisotropyMap:Lt,clearcoat:et,clearcoatMap:Gt,clearcoatNormalMap:ge,clearcoatRoughnessMap:wt,dispersion:ut,iridescence:Mt,iridescenceMap:Xt,iridescenceThicknessMap:ne,sheen:gt,sheenColorMap:$t,sheenRoughnessMap:Wt,specularMap:fe,specularColorMap:ie,specularIntensityMap:Le,transmission:Zt,transmissionMap:Y,thicknessMap:zt,gradientMap:ot,opaque:C.transparent===!1&&C.blending===ms&&C.alphaToCoverage===!1,alphaMap:vt,alphaTest:Nt,alphaHash:Ot,combine:C.combine,mapUv:ce&&A(C.map.channel),aoMapUv:z&&A(C.aoMap.channel),lightMapUv:Yt&&A(C.lightMap.channel),bumpMapUv:bt&&A(C.bumpMap.channel),normalMapUv:Ht&&A(C.normalMap.channel),displacementMapUv:Ut&&A(C.displacementMap.channel),emissiveMapUv:ae&&A(C.emissiveMap.channel),metalnessMapUv:Ft&&A(C.metalnessMap.channel),roughnessMapUv:L&&A(C.roughnessMap.channel),anisotropyMapUv:Lt&&A(C.anisotropyMap.channel),clearcoatMapUv:Gt&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:ge&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&A(C.sheenRoughnessMap.channel),specularMapUv:fe&&A(C.specularMap.channel),specularColorMapUv:ie&&A(C.specularColorMap.channel),specularIntensityMapUv:Le&&A(C.specularIntensityMap.channel),transmissionMapUv:Y&&A(C.transmissionMap.channel),thicknessMapUv:zt&&A(C.thicknessMap.channel),alphaMapUv:vt&&A(C.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&(Ht||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!pt.attributes.uv&&(ce||vt),fog:!!ht,useFog:C.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Dt,skinning:nt.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:lt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:ce&&C.map.isVideoTexture===!0&&be.getTransfer(C.map.colorSpace)===ze,decodeVideoTextureEmissive:ae&&C.emissiveMap.isVideoTexture===!0&&be.getTransfer(C.emissiveMap.colorSpace)===ze,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ta,flipSided:C.side===Pn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:le&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&C.extensions.multiDraw===!0||Bt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return tn.vertexUv1s=m.has(1),tn.vertexUv2s=m.has(2),tn.vertexUv3s=m.has(3),m.clear(),tn}function _(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)b.push(I),b.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(B(b,C),N(b,C),b.push(s.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function B(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function N(C,b){h.disableAll(),b.supportsVertexTextures&&h.enable(0),b.instancing&&h.enable(1),b.instancingColor&&h.enable(2),b.instancingMorph&&h.enable(3),b.matcap&&h.enable(4),b.envMap&&h.enable(5),b.normalMapObjectSpace&&h.enable(6),b.normalMapTangentSpace&&h.enable(7),b.clearcoat&&h.enable(8),b.iridescence&&h.enable(9),b.alphaTest&&h.enable(10),b.vertexColors&&h.enable(11),b.vertexAlphas&&h.enable(12),b.vertexUv1s&&h.enable(13),b.vertexUv2s&&h.enable(14),b.vertexUv3s&&h.enable(15),b.vertexTangents&&h.enable(16),b.anisotropy&&h.enable(17),b.alphaHash&&h.enable(18),b.batching&&h.enable(19),b.dispersion&&h.enable(20),b.batchingColor&&h.enable(21),C.push(h.mask),h.disableAll(),b.fog&&h.enable(0),b.useFog&&h.enable(1),b.flatShading&&h.enable(2),b.logarithmicDepthBuffer&&h.enable(3),b.reverseDepthBuffer&&h.enable(4),b.skinning&&h.enable(5),b.morphTargets&&h.enable(6),b.morphNormals&&h.enable(7),b.morphColors&&h.enable(8),b.premultipliedAlpha&&h.enable(9),b.shadowMapEnabled&&h.enable(10),b.doubleSided&&h.enable(11),b.flipSided&&h.enable(12),b.useDepthPacking&&h.enable(13),b.dithering&&h.enable(14),b.transmission&&h.enable(15),b.sheen&&h.enable(16),b.opaque&&h.enable(17),b.pointsUvs&&h.enable(18),b.decodeVideoTexture&&h.enable(19),b.decodeVideoTextureEmissive&&h.enable(20),b.alphaToCoverage&&h.enable(21),C.push(h.mask)}function D(C){const b=E[C.type];let I;if(b){const ft=Ti[b];I=HS.clone(ft.uniforms)}else I=C.uniforms;return I}function $(C,b){let I;for(let ft=0,nt=g.length;ft<nt;ft++){const ht=g[ft];if(ht.cacheKey===b){I=ht,++I.usedTimes;break}}return I===void 0&&(I=new $1(s,b,C,c),g.push(I)),I}function V(C){if(--C.usedTimes===0){const b=g.indexOf(C);g[b]=g[g.length-1],g.pop(),C.destroy()}}function H(C){p.remove(C)}function K(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:$,releaseProgram:V,releaseShaderCache:H,programs:g,dispose:K}}function ab(){let s=new WeakMap;function t(f){return s.has(f)}function n(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,p){s.get(f)[h]=p}function c(){s=new WeakMap}return{has:t,get:n,remove:r,update:l,dispose:c}}function rb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function a_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function r_(){const s=[];let t=0;const n=[],r=[],l=[];function c(){t=0,n.length=0,r.length=0,l.length=0}function f(x,v,y,E,A,M){let _=s[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:y,groupOrder:E,renderOrder:x.renderOrder,z:A,group:M},s[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=y,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=A,_.group=M),t++,_}function h(x,v,y,E,A,M){const _=f(x,v,y,E,A,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):n.push(_)}function p(x,v,y,E,A,M){const _=f(x,v,y,E,A,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):n.unshift(_)}function m(x,v){n.length>1&&n.sort(x||rb),r.length>1&&r.sort(v||a_),l.length>1&&l.sort(v||a_)}function g(){for(let x=t,v=s.length;x<v;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function sb(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new r_,s.set(r,[f])):l>=c.length?(f=new r_,c.push(f)):f=c[l],f}function n(){s=new WeakMap}return{get:t,dispose:n}}function ob(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Q,color:new ye};break;case"SpotLight":n={position:new Q,direction:new Q,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":n={color:new ye,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[t.id]=n,n}}}function lb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let cb=0;function ub(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fb(s){const t=new ob,n=lb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const l=new Q,c=new He,f=new He;function h(m){let g=0,x=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,E=0,A=0,M=0,_=0,B=0,N=0,D=0,$=0,V=0,H=0;m.sort(ub);for(let C=0,b=m.length;C<b;C++){const I=m[C],ft=I.color,nt=I.intensity,ht=I.distance,pt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=ft.r*nt,x+=ft.g*nt,v+=ft.b*nt;else if(I.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(I.sh.coefficients[k],nt);H++}else if(I.isDirectionalLight){const k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const O=I.shadow,F=n.get(I);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,r.directionalShadow[y]=F,r.directionalShadowMap[y]=pt,r.directionalShadowMatrix[y]=I.shadow.matrix,B++}r.directional[y]=k,y++}else if(I.isSpotLight){const k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(ft).multiplyScalar(nt),k.distance=ht,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,r.spot[A]=k;const O=I.shadow;if(I.map&&(r.spotLightMap[$]=I.map,$++,O.updateMatrices(I),I.castShadow&&V++),r.spotLightMatrix[A]=O.matrix,I.castShadow){const F=n.get(I);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,r.spotShadow[A]=F,r.spotShadowMap[A]=pt,D++}A++}else if(I.isRectAreaLight){const k=t.get(I);k.color.copy(ft).multiplyScalar(nt),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),r.rectArea[M]=k,M++}else if(I.isPointLight){const k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity),k.distance=I.distance,k.decay=I.decay,I.castShadow){const O=I.shadow,F=n.get(I);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,F.shadowCameraNear=O.camera.near,F.shadowCameraFar=O.camera.far,r.pointShadow[E]=F,r.pointShadowMap[E]=pt,r.pointShadowMatrix[E]=I.shadow.matrix,N++}r.point[E]=k,E++}else if(I.isHemisphereLight){const k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(nt),k.groundColor.copy(I.groundColor).multiplyScalar(nt),r.hemi[_]=k,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pt.LTC_FLOAT_1,r.rectAreaLTC2=Pt.LTC_FLOAT_2):(r.rectAreaLTC1=Pt.LTC_HALF_1,r.rectAreaLTC2=Pt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const K=r.hash;(K.directionalLength!==y||K.pointLength!==E||K.spotLength!==A||K.rectAreaLength!==M||K.hemiLength!==_||K.numDirectionalShadows!==B||K.numPointShadows!==N||K.numSpotShadows!==D||K.numSpotMaps!==$||K.numLightProbes!==H)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=M,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=D+$-V,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=H,K.directionalLength=y,K.pointLength=E,K.spotLength=A,K.rectAreaLength=M,K.hemiLength=_,K.numDirectionalShadows=B,K.numPointShadows=N,K.numSpotShadows=D,K.numSpotMaps=$,K.numLightProbes=H,r.version=cb++)}function p(m,g){let x=0,v=0,y=0,E=0,A=0;const M=g.matrixWorldInverse;for(let _=0,B=m.length;_<B;_++){const N=m[_];if(N.isDirectionalLight){const D=r.directional[x];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),x++}else if(N.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(N.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const D=r.point[v];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),v++}else if(N.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(M),A++}}}return{setup:h,setupView:p,state:r}}function s_(s){const t=new fb(s),n=[],r=[];function l(g){m.camera=g,n.length=0,r.length=0}function c(g){n.push(g)}function f(g){r.push(g)}function h(){t.setup(n)}function p(g){t.setupView(n,g)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function hb(s){let t=new WeakMap;function n(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new s_(s),t.set(l,[h])):c>=f.length?(h=new s_(s),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:n,dispose:r}}class db extends Rs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pb extends Rs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const mb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _b(s,t,n){let r=new Dd;const l=new It,c=new It,f=new Ze,h=new db({depthPacking:uS}),p=new pb,m={},g=n.maxTextureSize,x={[Fa]:Pn,[Pn]:Fa,[ta]:ta},v=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:mb,fragmentShader:gb}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Ci;E.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ai(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R_;let _=this.type;this.render=function(V,H,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||V.length===0)return;const C=s.getRenderTarget(),b=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),ft=s.state;ft.setBlending(Ba),ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);const nt=_!==$i&&this.type===$i,ht=_===$i&&this.type!==$i;for(let pt=0,k=V.length;pt<k;pt++){const O=V[pt],F=O.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const st=F.getFrameExtents();if(l.multiply(st),c.copy(F.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/st.x),l.x=c.x*st.x,F.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/st.y),l.y=c.y*st.y,F.mapSize.y=c.y)),F.map===null||nt===!0||ht===!0){const W=this.type!==$i?{minFilter:_i,magFilter:_i}:{};F.map!==null&&F.map.dispose(),F.map=new vr(l.x,l.y,W),F.map.texture.name=O.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const U=F.getViewportCount();for(let W=0;W<U;W++){const lt=F.getViewport(W);f.set(c.x*lt.x,c.y*lt.y,c.x*lt.z,c.y*lt.w),ft.viewport(f),F.updateMatrices(O,W),r=F.getFrustum(),D(H,K,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===$i&&B(F,K),F.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(C,b,I)};function B(V,H){const K=t.update(A);v.defines.VSM_SAMPLES!==V.blurSamples&&(v.defines.VSM_SAMPLES=V.blurSamples,y.defines.VSM_SAMPLES=V.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new vr(l.x,l.y)),v.uniforms.shadow_pass.value=V.map.texture,v.uniforms.resolution.value=V.mapSize,v.uniforms.radius.value=V.radius,s.setRenderTarget(V.mapPass),s.clear(),s.renderBufferDirect(H,null,K,v,A,null),y.uniforms.shadow_pass.value=V.mapPass.texture,y.uniforms.resolution.value=V.mapSize,y.uniforms.radius.value=V.radius,s.setRenderTarget(V.map),s.clear(),s.renderBufferDirect(H,null,K,y,A,null)}function N(V,H,K,C){let b=null;const I=K.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(I!==void 0)b=I;else if(b=K.isPointLight===!0?p:h,s.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0){const ft=b.uuid,nt=H.uuid;let ht=m[ft];ht===void 0&&(ht={},m[ft]=ht);let pt=ht[nt];pt===void 0&&(pt=b.clone(),ht[nt]=pt,H.addEventListener("dispose",$)),b=pt}if(b.visible=H.visible,b.wireframe=H.wireframe,C===$i?b.side=H.shadowSide!==null?H.shadowSide:H.side:b.side=H.shadowSide!==null?H.shadowSide:x[H.side],b.alphaMap=H.alphaMap,b.alphaTest=H.alphaTest,b.map=H.map,b.clipShadows=H.clipShadows,b.clippingPlanes=H.clippingPlanes,b.clipIntersection=H.clipIntersection,b.displacementMap=H.displacementMap,b.displacementScale=H.displacementScale,b.displacementBias=H.displacementBias,b.wireframeLinewidth=H.wireframeLinewidth,b.linewidth=H.linewidth,K.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ft=s.properties.get(b);ft.light=K}return b}function D(V,H,K,C,b){if(V.visible===!1)return;if(V.layers.test(H.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&b===$i)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,V.matrixWorld);const nt=t.update(V),ht=V.material;if(Array.isArray(ht)){const pt=nt.groups;for(let k=0,O=pt.length;k<O;k++){const F=pt[k],st=ht[F.materialIndex];if(st&&st.visible){const U=N(V,st,C,b);V.onBeforeShadow(s,V,H,K,nt,U,F),s.renderBufferDirect(K,null,nt,U,V,F),V.onAfterShadow(s,V,H,K,nt,U,F)}}}else if(ht.visible){const pt=N(V,ht,C,b);V.onBeforeShadow(s,V,H,K,nt,pt,null),s.renderBufferDirect(K,null,nt,pt,V,null),V.onAfterShadow(s,V,H,K,nt,pt,null)}}const ft=V.children;for(let nt=0,ht=ft.length;nt<ht;nt++)D(ft[nt],H,K,C,b)}function $(V){V.target.removeEventListener("dispose",$);for(const K in m){const C=m[K],b=V.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const vb={[Uh]:Lh,[Nh]:zh,[Oh]:Bh,[vs]:Ph,[Lh]:Uh,[zh]:Nh,[Bh]:Oh,[Ph]:vs};function xb(s,t){function n(){let Y=!1;const zt=new Ze;let ot=null;const vt=new Ze(0,0,0,0);return{setMask:function(Nt){ot!==Nt&&!Y&&(s.colorMask(Nt,Nt,Nt,Nt),ot=Nt)},setLocked:function(Nt){Y=Nt},setClear:function(Nt,Ot,le,Ge,tn){tn===!0&&(Nt*=Ge,Ot*=Ge,le*=Ge),zt.set(Nt,Ot,le,Ge),vt.equals(zt)===!1&&(s.clearColor(Nt,Ot,le,Ge),vt.copy(zt))},reset:function(){Y=!1,ot=null,vt.set(-1,0,0,0)}}}function r(){let Y=!1,zt=!1,ot=null,vt=null,Nt=null;return{setReversed:function(Ot){if(zt!==Ot){const le=t.get("EXT_clip_control");zt?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT);const Ge=Nt;Nt=null,this.setClear(Ge)}zt=Ot},getReversed:function(){return zt},setTest:function(Ot){Ot?Tt(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(Ot){ot!==Ot&&!Y&&(s.depthMask(Ot),ot=Ot)},setFunc:function(Ot){if(zt&&(Ot=vb[Ot]),vt!==Ot){switch(Ot){case Uh:s.depthFunc(s.NEVER);break;case Lh:s.depthFunc(s.ALWAYS);break;case Nh:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case Oh:s.depthFunc(s.EQUAL);break;case Ph:s.depthFunc(s.GEQUAL);break;case zh:s.depthFunc(s.GREATER);break;case Bh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=Ot}},setLocked:function(Ot){Y=Ot},setClear:function(Ot){Nt!==Ot&&(zt&&(Ot=1-Ot),s.clearDepth(Ot),Nt=Ot)},reset:function(){Y=!1,ot=null,vt=null,Nt=null,zt=!1}}}function l(){let Y=!1,zt=null,ot=null,vt=null,Nt=null,Ot=null,le=null,Ge=null,tn=null;return{setTest:function(Ae){Y||(Ae?Tt(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(Ae){zt!==Ae&&!Y&&(s.stencilMask(Ae),zt=Ae)},setFunc:function(Ae,An,Rn){(ot!==Ae||vt!==An||Nt!==Rn)&&(s.stencilFunc(Ae,An,Rn),ot=Ae,vt=An,Nt=Rn)},setOp:function(Ae,An,Rn){(Ot!==Ae||le!==An||Ge!==Rn)&&(s.stencilOp(Ae,An,Rn),Ot=Ae,le=An,Ge=Rn)},setLocked:function(Ae){Y=Ae},setClear:function(Ae){tn!==Ae&&(s.clearStencil(Ae),tn=Ae)},reset:function(){Y=!1,zt=null,ot=null,vt=null,Nt=null,Ot=null,le=null,Ge=null,tn=null}}}const c=new n,f=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},x={},v=new WeakMap,y=[],E=null,A=!1,M=null,_=null,B=null,N=null,D=null,$=null,V=null,H=new ye(0,0,0),K=0,C=!1,b=null,I=null,ft=null,nt=null,ht=null;const pt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),k=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),k=O>=2);let st=null,U={};const W=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),yt=new Ze().fromArray(W),G=new Ze().fromArray(lt);function ct(Y,zt,ot,vt){const Nt=new Uint8Array(4),Ot=s.createTexture();s.bindTexture(Y,Ot),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let le=0;le<ot;le++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(zt,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,Nt):s.texImage2D(zt+le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Nt);return Ot}const St={};St[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Tt(s.DEPTH_TEST),f.setFunc(vs),bt(!1),Ht(u0),Tt(s.CULL_FACE),z(Ba);function Tt(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function Dt(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function kt(Y,zt){return x[Y]!==zt?(s.bindFramebuffer(Y,zt),x[Y]=zt,Y===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=zt),Y===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=zt),!0):!1}function Bt(Y,zt){let ot=y,vt=!1;if(Y){ot=v.get(zt),ot===void 0&&(ot=[],v.set(zt,ot));const Nt=Y.textures;if(ot.length!==Nt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let Ot=0,le=Nt.length;Ot<le;Ot++)ot[Ot]=s.COLOR_ATTACHMENT0+Ot;ot.length=Nt.length,vt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,vt=!0);vt&&s.drawBuffers(ot)}function ce(Y){return E!==Y?(s.useProgram(Y),E=Y,!0):!1}const xt={[dr]:s.FUNC_ADD,[zy]:s.FUNC_SUBTRACT,[By]:s.FUNC_REVERSE_SUBTRACT};xt[Iy]=s.MIN,xt[Fy]=s.MAX;const At={[Hy]:s.ZERO,[Gy]:s.ONE,[Vy]:s.SRC_COLOR,[Ch]:s.SRC_ALPHA,[Zy]:s.SRC_ALPHA_SATURATE,[qy]:s.DST_COLOR,[Xy]:s.DST_ALPHA,[ky]:s.ONE_MINUS_SRC_COLOR,[Dh]:s.ONE_MINUS_SRC_ALPHA,[Yy]:s.ONE_MINUS_DST_COLOR,[Wy]:s.ONE_MINUS_DST_ALPHA,[jy]:s.CONSTANT_COLOR,[Ky]:s.ONE_MINUS_CONSTANT_COLOR,[Qy]:s.CONSTANT_ALPHA,[Jy]:s.ONE_MINUS_CONSTANT_ALPHA};function z(Y,zt,ot,vt,Nt,Ot,le,Ge,tn,Ae){if(Y===Ba){A===!0&&(Dt(s.BLEND),A=!1);return}if(A===!1&&(Tt(s.BLEND),A=!0),Y!==Py){if(Y!==M||Ae!==C){if((_!==dr||D!==dr)&&(s.blendEquation(s.FUNC_ADD),_=dr,D=dr),Ae)switch(Y){case ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case f0:s.blendFunc(s.ONE,s.ONE);break;case h0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case f0:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case h0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}B=null,N=null,$=null,V=null,H.set(0,0,0),K=0,M=Y,C=Ae}return}Nt=Nt||zt,Ot=Ot||ot,le=le||vt,(zt!==_||Nt!==D)&&(s.blendEquationSeparate(xt[zt],xt[Nt]),_=zt,D=Nt),(ot!==B||vt!==N||Ot!==$||le!==V)&&(s.blendFuncSeparate(At[ot],At[vt],At[Ot],At[le]),B=ot,N=vt,$=Ot,V=le),(Ge.equals(H)===!1||tn!==K)&&(s.blendColor(Ge.r,Ge.g,Ge.b,tn),H.copy(Ge),K=tn),M=Y,C=!1}function Yt(Y,zt){Y.side===ta?Dt(s.CULL_FACE):Tt(s.CULL_FACE);let ot=Y.side===Pn;zt&&(ot=!ot),bt(ot),Y.blending===ms&&Y.transparent===!1?z(Ba):z(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const vt=Y.stencilWrite;h.setTest(vt),vt&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ae(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Tt(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function bt(Y){b!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),b=Y)}function Ht(Y){Y!==Ly?(Tt(s.CULL_FACE),Y!==I&&(Y===u0?s.cullFace(s.BACK):Y===Ny?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),I=Y}function Ut(Y){Y!==ft&&(k&&s.lineWidth(Y),ft=Y)}function ae(Y,zt,ot){Y?(Tt(s.POLYGON_OFFSET_FILL),(nt!==zt||ht!==ot)&&(s.polygonOffset(zt,ot),nt=zt,ht=ot)):Dt(s.POLYGON_OFFSET_FILL)}function Ft(Y){Y?Tt(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function L(Y){Y===void 0&&(Y=s.TEXTURE0+pt-1),st!==Y&&(s.activeTexture(Y),st=Y)}function T(Y,zt,ot){ot===void 0&&(st===null?ot=s.TEXTURE0+pt-1:ot=st);let vt=U[ot];vt===void 0&&(vt={type:void 0,texture:void 0},U[ot]=vt),(vt.type!==Y||vt.texture!==zt)&&(st!==ot&&(s.activeTexture(ot),st=ot),s.bindTexture(Y,zt||St[Y]),vt.type=Y,vt.texture=zt)}function et(){const Y=U[st];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ut(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function gt(){try{s.texSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Zt(){try{s.texSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ge(){try{s.texStorage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function wt(){try{s.texStorage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Xt(){try{s.texImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ne(){try{s.texImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function $t(Y){yt.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),yt.copy(Y))}function Wt(Y){G.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),G.copy(Y))}function fe(Y,zt){let ot=m.get(zt);ot===void 0&&(ot=new WeakMap,m.set(zt,ot));let vt=ot.get(Y);vt===void 0&&(vt=s.getUniformBlockIndex(zt,Y.name),ot.set(Y,vt))}function ie(Y,zt){const vt=m.get(zt).get(Y);p.get(zt)!==vt&&(s.uniformBlockBinding(zt,vt,Y.__bindingPointIndex),p.set(zt,vt))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},st=null,U={},x={},v=new WeakMap,y=[],E=null,A=!1,M=null,_=null,B=null,N=null,D=null,$=null,V=null,H=new ye(0,0,0),K=0,C=!1,b=null,I=null,ft=null,nt=null,ht=null,yt.set(0,0,s.canvas.width,s.canvas.height),G.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Tt,disable:Dt,bindFramebuffer:kt,drawBuffers:Bt,useProgram:ce,setBlending:z,setMaterial:Yt,setFlipSided:bt,setCullFace:Ht,setLineWidth:Ut,setPolygonOffset:ae,setScissorTest:Ft,activeTexture:L,bindTexture:T,unbindTexture:et,compressedTexImage2D:ut,compressedTexImage3D:Mt,texImage2D:Xt,texImage3D:ne,updateUBOMapping:fe,uniformBlockBinding:ie,texStorage2D:ge,texStorage3D:wt,texSubImage2D:gt,texSubImage3D:Zt,compressedTexSubImage2D:Lt,compressedTexSubImage3D:Gt,scissor:$t,viewport:Wt,reset:Le}}function o_(s,t,n,r){const l=yb(r);switch(n){case N_:return s*t;case P_:return s*t;case z_:return s*t*2;case B_:return s*t/l.components*l.byteLength;case bd:return s*t/l.components*l.byteLength;case I_:return s*t*2/l.components*l.byteLength;case Ad:return s*t*2/l.components*l.byteLength;case O_:return s*t*3/l.components*l.byteLength;case gi:return s*t*4/l.components*l.byteLength;case Rd:return s*t*4/l.components*l.byteLength;case Mc:case Ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tc:case bc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kh:case Wh:return Math.max(s,16)*Math.max(t,8)/4;case Vh:case Xh:return Math.max(s,8)*Math.max(t,8)/2;case qh:case Yh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Qh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case $h:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case td:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ed:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case nd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case id:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ad:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case rd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case sd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case od:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ld:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ac:case cd:case ud:return Math.ceil(s/4)*Math.ceil(t/4)*16;case F_:case fd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case hd:case dd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yb(s){switch(s){case aa:case D_:return{byteLength:1,components:1};case Bo:case U_:case Go:return{byteLength:2,components:1};case Ed:case Td:return{byteLength:2,components:4};case _r:case Md:case ea:return{byteLength:4,components:1};case L_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Sb(s,t,n,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new It,g=new WeakMap;let x;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return y?new OffscreenCanvas(L,T):Cc("canvas")}function A(L,T,et){let ut=1;const Mt=Ft(L);if((Mt.width>et||Mt.height>et)&&(ut=et/Math.max(Mt.width,Mt.height)),ut<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const gt=Math.floor(ut*Mt.width),Zt=Math.floor(ut*Mt.height);x===void 0&&(x=E(gt,Zt));const Lt=T?E(gt,Zt):x;return Lt.width=gt,Lt.height=Zt,Lt.getContext("2d").drawImage(L,0,0,gt,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+gt+"x"+Zt+")."),Lt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,T,et,ut,Mt=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt=T;if(T===s.RED&&(et===s.FLOAT&&(gt=s.R32F),et===s.HALF_FLOAT&&(gt=s.R16F),et===s.UNSIGNED_BYTE&&(gt=s.R8)),T===s.RED_INTEGER&&(et===s.UNSIGNED_BYTE&&(gt=s.R8UI),et===s.UNSIGNED_SHORT&&(gt=s.R16UI),et===s.UNSIGNED_INT&&(gt=s.R32UI),et===s.BYTE&&(gt=s.R8I),et===s.SHORT&&(gt=s.R16I),et===s.INT&&(gt=s.R32I)),T===s.RG&&(et===s.FLOAT&&(gt=s.RG32F),et===s.HALF_FLOAT&&(gt=s.RG16F),et===s.UNSIGNED_BYTE&&(gt=s.RG8)),T===s.RG_INTEGER&&(et===s.UNSIGNED_BYTE&&(gt=s.RG8UI),et===s.UNSIGNED_SHORT&&(gt=s.RG16UI),et===s.UNSIGNED_INT&&(gt=s.RG32UI),et===s.BYTE&&(gt=s.RG8I),et===s.SHORT&&(gt=s.RG16I),et===s.INT&&(gt=s.RG32I)),T===s.RGB_INTEGER&&(et===s.UNSIGNED_BYTE&&(gt=s.RGB8UI),et===s.UNSIGNED_SHORT&&(gt=s.RGB16UI),et===s.UNSIGNED_INT&&(gt=s.RGB32UI),et===s.BYTE&&(gt=s.RGB8I),et===s.SHORT&&(gt=s.RGB16I),et===s.INT&&(gt=s.RGB32I)),T===s.RGBA_INTEGER&&(et===s.UNSIGNED_BYTE&&(gt=s.RGBA8UI),et===s.UNSIGNED_SHORT&&(gt=s.RGBA16UI),et===s.UNSIGNED_INT&&(gt=s.RGBA32UI),et===s.BYTE&&(gt=s.RGBA8I),et===s.SHORT&&(gt=s.RGBA16I),et===s.INT&&(gt=s.RGBA32I)),T===s.RGB&&et===s.UNSIGNED_INT_5_9_9_9_REV&&(gt=s.RGB9_E5),T===s.RGBA){const Zt=Mt?Nc:be.getTransfer(ut);et===s.FLOAT&&(gt=s.RGBA32F),et===s.HALF_FLOAT&&(gt=s.RGBA16F),et===s.UNSIGNED_BYTE&&(gt=Zt===ze?s.SRGB8_ALPHA8:s.RGBA8),et===s.UNSIGNED_SHORT_4_4_4_4&&(gt=s.RGBA4),et===s.UNSIGNED_SHORT_5_5_5_1&&(gt=s.RGB5_A1)}return(gt===s.R16F||gt===s.R32F||gt===s.RG16F||gt===s.RG32F||gt===s.RGBA16F||gt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function D(L,T){let et;return L?T===null||T===_r||T===Ss?et=s.DEPTH24_STENCIL8:T===ea?et=s.DEPTH32F_STENCIL8:T===Bo&&(et=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===_r||T===Ss?et=s.DEPTH_COMPONENT24:T===ea?et=s.DEPTH_COMPONENT32F:T===Bo&&(et=s.DEPTH_COMPONENT16),et}function $(L,T){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==_i&&L.minFilter!==bi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function V(L){const T=L.target;T.removeEventListener("dispose",V),K(T),T.isVideoTexture&&g.delete(T)}function H(L){const T=L.target;T.removeEventListener("dispose",H),b(T)}function K(L){const T=r.get(L);if(T.__webglInit===void 0)return;const et=L.source,ut=v.get(et);if(ut){const Mt=ut[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&C(L),Object.keys(ut).length===0&&v.delete(et)}r.remove(L)}function C(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const et=L.source,ut=v.get(et);delete ut[T.__cacheKey],f.memory.textures--}function b(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(T.__webglFramebuffer[ut]))for(let Mt=0;Mt<T.__webglFramebuffer[ut].length;Mt++)s.deleteFramebuffer(T.__webglFramebuffer[ut][Mt]);else s.deleteFramebuffer(T.__webglFramebuffer[ut]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ut])}else{if(Array.isArray(T.__webglFramebuffer))for(let ut=0;ut<T.__webglFramebuffer.length;ut++)s.deleteFramebuffer(T.__webglFramebuffer[ut]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ut=0;ut<T.__webglColorRenderbuffer.length;ut++)T.__webglColorRenderbuffer[ut]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ut]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=L.textures;for(let ut=0,Mt=et.length;ut<Mt;ut++){const gt=r.get(et[ut]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),f.memory.textures--),r.remove(et[ut])}r.remove(L)}let I=0;function ft(){I=0}function nt(){const L=I;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),I+=1,L}function ht(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function pt(L,T){const et=r.get(L);if(L.isVideoTexture&&Ut(L),L.isRenderTargetTexture===!1&&L.version>0&&et.__version!==L.version){const ut=L.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(et,L,T);return}}n.bindTexture(s.TEXTURE_2D,et.__webglTexture,s.TEXTURE0+T)}function k(L,T){const et=r.get(L);if(L.version>0&&et.__version!==L.version){G(et,L,T);return}n.bindTexture(s.TEXTURE_2D_ARRAY,et.__webglTexture,s.TEXTURE0+T)}function O(L,T){const et=r.get(L);if(L.version>0&&et.__version!==L.version){G(et,L,T);return}n.bindTexture(s.TEXTURE_3D,et.__webglTexture,s.TEXTURE0+T)}function F(L,T){const et=r.get(L);if(L.version>0&&et.__version!==L.version){ct(et,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture,s.TEXTURE0+T)}const st={[Hh]:s.REPEAT,[mr]:s.CLAMP_TO_EDGE,[Gh]:s.MIRRORED_REPEAT},U={[_i]:s.NEAREST,[lS]:s.NEAREST_MIPMAP_NEAREST,[Kl]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[Yf]:s.LINEAR_MIPMAP_NEAREST,[gr]:s.LINEAR_MIPMAP_LINEAR},W={[hS]:s.NEVER,[vS]:s.ALWAYS,[dS]:s.LESS,[G_]:s.LEQUAL,[pS]:s.EQUAL,[_S]:s.GEQUAL,[mS]:s.GREATER,[gS]:s.NOTEQUAL};function lt(L,T){if(T.type===ea&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===bi||T.magFilter===Yf||T.magFilter===Kl||T.magFilter===gr||T.minFilter===bi||T.minFilter===Yf||T.minFilter===Kl||T.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,st[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,st[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,st[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,U[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,W[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_i||T.minFilter!==Kl&&T.minFilter!==gr||T.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function yt(L,T){let et=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",V));const ut=T.source;let Mt=v.get(ut);Mt===void 0&&(Mt={},v.set(ut,Mt));const gt=ht(T);if(gt!==L.__cacheKey){Mt[gt]===void 0&&(Mt[gt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,et=!0),Mt[gt].usedTimes++;const Zt=Mt[L.__cacheKey];Zt!==void 0&&(Mt[L.__cacheKey].usedTimes--,Zt.usedTimes===0&&C(T)),L.__cacheKey=gt,L.__webglTexture=Mt[gt].texture}return et}function G(L,T,et){let ut=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=s.TEXTURE_3D);const Mt=yt(L,T),gt=T.source;n.bindTexture(ut,L.__webglTexture,s.TEXTURE0+et);const Zt=r.get(gt);if(gt.version!==Zt.__version||Mt===!0){n.activeTexture(s.TEXTURE0+et);const Lt=be.getPrimaries(be.workingColorSpace),Gt=T.colorSpace===za?null:be.getPrimaries(T.colorSpace),ge=T.colorSpace===za||Lt===Gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let wt=A(T.image,!1,l.maxTextureSize);wt=ae(T,wt);const Xt=c.convert(T.format,T.colorSpace),ne=c.convert(T.type);let $t=N(T.internalFormat,Xt,ne,T.colorSpace,T.isVideoTexture);lt(ut,T);let Wt;const fe=T.mipmaps,ie=T.isVideoTexture!==!0,Le=Zt.__version===void 0||Mt===!0,Y=gt.dataReady,zt=$(T,wt);if(T.isDepthTexture)$t=D(T.format===Ms,T.type),Le&&(ie?n.texStorage2D(s.TEXTURE_2D,1,$t,wt.width,wt.height):n.texImage2D(s.TEXTURE_2D,0,$t,wt.width,wt.height,0,Xt,ne,null));else if(T.isDataTexture)if(fe.length>0){ie&&Le&&n.texStorage2D(s.TEXTURE_2D,zt,$t,fe[0].width,fe[0].height);for(let ot=0,vt=fe.length;ot<vt;ot++)Wt=fe[ot],ie?Y&&n.texSubImage2D(s.TEXTURE_2D,ot,0,0,Wt.width,Wt.height,Xt,ne,Wt.data):n.texImage2D(s.TEXTURE_2D,ot,$t,Wt.width,Wt.height,0,Xt,ne,Wt.data);T.generateMipmaps=!1}else ie?(Le&&n.texStorage2D(s.TEXTURE_2D,zt,$t,wt.width,wt.height),Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,wt.width,wt.height,Xt,ne,wt.data)):n.texImage2D(s.TEXTURE_2D,0,$t,wt.width,wt.height,0,Xt,ne,wt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ie&&Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,zt,$t,fe[0].width,fe[0].height,wt.depth);for(let ot=0,vt=fe.length;ot<vt;ot++)if(Wt=fe[ot],T.format!==gi)if(Xt!==null)if(ie){if(Y)if(T.layerUpdates.size>0){const Nt=o_(Wt.width,Wt.height,T.format,T.type);for(const Ot of T.layerUpdates){const le=Wt.data.subarray(Ot*Nt/Wt.data.BYTES_PER_ELEMENT,(Ot+1)*Nt/Wt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,Ot,Wt.width,Wt.height,1,Xt,le)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Wt.width,Wt.height,wt.depth,Xt,Wt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,$t,Wt.width,Wt.height,wt.depth,0,Wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Y&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Wt.width,Wt.height,wt.depth,Xt,ne,Wt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ot,$t,Wt.width,Wt.height,wt.depth,0,Xt,ne,Wt.data)}else{ie&&Le&&n.texStorage2D(s.TEXTURE_2D,zt,$t,fe[0].width,fe[0].height);for(let ot=0,vt=fe.length;ot<vt;ot++)Wt=fe[ot],T.format!==gi?Xt!==null?ie?Y&&n.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,Wt.width,Wt.height,Xt,Wt.data):n.compressedTexImage2D(s.TEXTURE_2D,ot,$t,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Y&&n.texSubImage2D(s.TEXTURE_2D,ot,0,0,Wt.width,Wt.height,Xt,ne,Wt.data):n.texImage2D(s.TEXTURE_2D,ot,$t,Wt.width,Wt.height,0,Xt,ne,Wt.data)}else if(T.isDataArrayTexture)if(ie){if(Le&&n.texStorage3D(s.TEXTURE_2D_ARRAY,zt,$t,wt.width,wt.height,wt.depth),Y)if(T.layerUpdates.size>0){const ot=o_(wt.width,wt.height,T.format,T.type);for(const vt of T.layerUpdates){const Nt=wt.data.subarray(vt*ot/wt.data.BYTES_PER_ELEMENT,(vt+1)*ot/wt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,wt.width,wt.height,1,Xt,ne,Nt)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Xt,ne,wt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,$t,wt.width,wt.height,wt.depth,0,Xt,ne,wt.data);else if(T.isData3DTexture)ie?(Le&&n.texStorage3D(s.TEXTURE_3D,zt,$t,wt.width,wt.height,wt.depth),Y&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Xt,ne,wt.data)):n.texImage3D(s.TEXTURE_3D,0,$t,wt.width,wt.height,wt.depth,0,Xt,ne,wt.data);else if(T.isFramebufferTexture){if(Le)if(ie)n.texStorage2D(s.TEXTURE_2D,zt,$t,wt.width,wt.height);else{let ot=wt.width,vt=wt.height;for(let Nt=0;Nt<zt;Nt++)n.texImage2D(s.TEXTURE_2D,Nt,$t,ot,vt,0,Xt,ne,null),ot>>=1,vt>>=1}}else if(fe.length>0){if(ie&&Le){const ot=Ft(fe[0]);n.texStorage2D(s.TEXTURE_2D,zt,$t,ot.width,ot.height)}for(let ot=0,vt=fe.length;ot<vt;ot++)Wt=fe[ot],ie?Y&&n.texSubImage2D(s.TEXTURE_2D,ot,0,0,Xt,ne,Wt):n.texImage2D(s.TEXTURE_2D,ot,$t,Xt,ne,Wt);T.generateMipmaps=!1}else if(ie){if(Le){const ot=Ft(wt);n.texStorage2D(s.TEXTURE_2D,zt,$t,ot.width,ot.height)}Y&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Xt,ne,wt)}else n.texImage2D(s.TEXTURE_2D,0,$t,Xt,ne,wt);M(T)&&_(ut),Zt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ct(L,T,et){if(T.image.length!==6)return;const ut=yt(L,T),Mt=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+et);const gt=r.get(Mt);if(Mt.version!==gt.__version||ut===!0){n.activeTexture(s.TEXTURE0+et);const Zt=be.getPrimaries(be.workingColorSpace),Lt=T.colorSpace===za?null:be.getPrimaries(T.colorSpace),Gt=T.colorSpace===za||Zt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const ge=T.isCompressedTexture||T.image[0].isCompressedTexture,wt=T.image[0]&&T.image[0].isDataTexture,Xt=[];for(let vt=0;vt<6;vt++)!ge&&!wt?Xt[vt]=A(T.image[vt],!0,l.maxCubemapSize):Xt[vt]=wt?T.image[vt].image:T.image[vt],Xt[vt]=ae(T,Xt[vt]);const ne=Xt[0],$t=c.convert(T.format,T.colorSpace),Wt=c.convert(T.type),fe=N(T.internalFormat,$t,Wt,T.colorSpace),ie=T.isVideoTexture!==!0,Le=gt.__version===void 0||ut===!0,Y=Mt.dataReady;let zt=$(T,ne);lt(s.TEXTURE_CUBE_MAP,T);let ot;if(ge){ie&&Le&&n.texStorage2D(s.TEXTURE_CUBE_MAP,zt,fe,ne.width,ne.height);for(let vt=0;vt<6;vt++){ot=Xt[vt].mipmaps;for(let Nt=0;Nt<ot.length;Nt++){const Ot=ot[Nt];T.format!==gi?$t!==null?ie?Y&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,0,0,Ot.width,Ot.height,$t,Ot.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,fe,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,0,0,Ot.width,Ot.height,$t,Wt,Ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,fe,Ot.width,Ot.height,0,$t,Wt,Ot.data)}}}else{if(ot=T.mipmaps,ie&&Le){ot.length>0&&zt++;const vt=Ft(Xt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,zt,fe,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(wt){ie?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Xt[vt].width,Xt[vt].height,$t,Wt,Xt[vt].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,fe,Xt[vt].width,Xt[vt].height,0,$t,Wt,Xt[vt].data);for(let Nt=0;Nt<ot.length;Nt++){const le=ot[Nt].image[vt].image;ie?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,0,0,le.width,le.height,$t,Wt,le.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,fe,le.width,le.height,0,$t,Wt,le.data)}}else{ie?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,$t,Wt,Xt[vt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,fe,$t,Wt,Xt[vt]);for(let Nt=0;Nt<ot.length;Nt++){const Ot=ot[Nt];ie?Y&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,0,0,$t,Wt,Ot.image[vt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,fe,$t,Wt,Ot.image[vt])}}}M(T)&&_(s.TEXTURE_CUBE_MAP),gt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function St(L,T,et,ut,Mt,gt){const Zt=c.convert(et.format,et.colorSpace),Lt=c.convert(et.type),Gt=N(et.internalFormat,Zt,Lt,et.colorSpace),ge=r.get(T),wt=r.get(et);if(wt.__renderTarget=T,!ge.__hasExternalTextures){const Xt=Math.max(1,T.width>>gt),ne=Math.max(1,T.height>>gt);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?n.texImage3D(Mt,gt,Gt,Xt,ne,T.depth,0,Zt,Lt,null):n.texImage2D(Mt,gt,Gt,Xt,ne,0,Zt,Lt,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),Ht(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,Mt,wt.__webglTexture,0,bt(T)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ut,Mt,wt.__webglTexture,gt),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(L,T,et){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const ut=T.depthTexture,Mt=ut&&ut.isDepthTexture?ut.type:null,gt=D(T.stencilBuffer,Mt),Zt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=bt(T);Ht(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,gt,T.width,T.height):et?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,gt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,gt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Zt,s.RENDERBUFFER,L)}else{const ut=T.textures;for(let Mt=0;Mt<ut.length;Mt++){const gt=ut[Mt],Zt=c.convert(gt.format,gt.colorSpace),Lt=c.convert(gt.type),Gt=N(gt.internalFormat,Zt,Lt,gt.colorSpace),ge=bt(T);et&&Ht(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,Gt,T.width,T.height):Ht(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,Gt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Gt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Dt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(T.depthTexture);ut.__renderTarget=T,(!ut.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const Mt=ut.__webglTexture,gt=bt(T);if(T.depthTexture.format===gs)Ht(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===Ms)Ht(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function kt(L){const T=r.get(L),et=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ut=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ut){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ut.removeEventListener("dispose",Mt)};ut.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=ut}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Dt(T.__webglFramebuffer,L)}else if(et){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]===void 0)T.__webglDepthbuffer[ut]=s.createRenderbuffer(),Tt(T.__webglDepthbuffer[ut],L,!1);else{const Mt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=T.__webglDepthbuffer[ut];s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,gt)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Tt(T.__webglDepthbuffer,L,!1);else{const ut=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ut,s.RENDERBUFFER,Mt)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(L,T,et){const ut=r.get(L);T!==void 0&&St(ut.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),et!==void 0&&kt(L)}function ce(L){const T=L.texture,et=r.get(L),ut=r.get(T);L.addEventListener("dispose",H);const Mt=L.textures,gt=L.isWebGLCubeRenderTarget===!0,Zt=Mt.length>1;if(Zt||(ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture()),ut.__version=T.version,f.memory.textures++),gt){et.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[Lt]=[];for(let Gt=0;Gt<T.mipmaps.length;Gt++)et.__webglFramebuffer[Lt][Gt]=s.createFramebuffer()}else et.__webglFramebuffer[Lt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)et.__webglFramebuffer[Lt]=s.createFramebuffer()}else et.__webglFramebuffer=s.createFramebuffer();if(Zt)for(let Lt=0,Gt=Mt.length;Lt<Gt;Lt++){const ge=r.get(Mt[Lt]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&Ht(L)===!1){et.__webglMultisampledFramebuffer=s.createFramebuffer(),et.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Mt.length;Lt++){const Gt=Mt[Lt];et.__webglColorRenderbuffer[Lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,et.__webglColorRenderbuffer[Lt]);const ge=c.convert(Gt.format,Gt.colorSpace),wt=c.convert(Gt.type),Xt=N(Gt.internalFormat,ge,wt,Gt.colorSpace,L.isXRRenderTarget===!0),ne=bt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,Xt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Lt,s.RENDERBUFFER,et.__webglColorRenderbuffer[Lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(et.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(et.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(gt){n.bindTexture(s.TEXTURE_CUBE_MAP,ut.__webglTexture),lt(s.TEXTURE_CUBE_MAP,T);for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Gt=0;Gt<T.mipmaps.length;Gt++)St(et.__webglFramebuffer[Lt][Gt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Gt);else St(et.__webglFramebuffer[Lt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(T)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let Lt=0,Gt=Mt.length;Lt<Gt;Lt++){const ge=Mt[Lt],wt=r.get(ge);n.bindTexture(s.TEXTURE_2D,wt.__webglTexture),lt(s.TEXTURE_2D,ge),St(et.__webglFramebuffer,L,ge,s.COLOR_ATTACHMENT0+Lt,s.TEXTURE_2D,0),M(ge)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Lt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Lt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Lt,ut.__webglTexture),lt(Lt,T),T.mipmaps&&T.mipmaps.length>0)for(let Gt=0;Gt<T.mipmaps.length;Gt++)St(et.__webglFramebuffer[Gt],L,T,s.COLOR_ATTACHMENT0,Lt,Gt);else St(et.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Lt,0);M(T)&&_(Lt),n.unbindTexture()}L.depthBuffer&&kt(L)}function xt(L){const T=L.textures;for(let et=0,ut=T.length;et<ut;et++){const Mt=T[et];if(M(Mt)){const gt=B(L),Zt=r.get(Mt).__webglTexture;n.bindTexture(gt,Zt),_(gt),n.unbindTexture()}}}const At=[],z=[];function Yt(L){if(L.samples>0){if(Ht(L)===!1){const T=L.textures,et=L.width,ut=L.height;let Mt=s.COLOR_BUFFER_BIT;const gt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Zt=r.get(L),Lt=T.length>1;if(Lt)for(let Gt=0;Gt<T.length;Gt++)n.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Gt=0;Gt<T.length;Gt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),Lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Zt.__webglColorRenderbuffer[Gt]);const ge=r.get(T[Gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ge,0)}s.blitFramebuffer(0,0,et,ut,0,0,et,ut,Mt,s.NEAREST),p===!0&&(At.length=0,z.length=0,At.push(s.COLOR_ATTACHMENT0+Gt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(At.push(gt),z.push(gt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,At))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Lt)for(let Gt=0;Gt<T.length;Gt++){n.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,Zt.__webglColorRenderbuffer[Gt]);const ge=r.get(T[Gt]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Zt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,ge,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function bt(L){return Math.min(l.maxSamples,L.samples)}function Ht(L){const T=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ut(L){const T=f.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function ae(L,T){const et=L.colorSpace,ut=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||et!==Ts&&et!==za&&(be.getTransfer(et)===ze?(ut!==gi||Mt!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function Ft(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=nt,this.resetTextureUnits=ft,this.setTexture2D=pt,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=F,this.rebindTextures=Bt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Ht}function Mb(s,t){function n(r,l=za){let c;const f=be.getTransfer(l);if(r===aa)return s.UNSIGNED_BYTE;if(r===Ed)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===L_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===D_)return s.BYTE;if(r===U_)return s.SHORT;if(r===Bo)return s.UNSIGNED_SHORT;if(r===Md)return s.INT;if(r===_r)return s.UNSIGNED_INT;if(r===ea)return s.FLOAT;if(r===Go)return s.HALF_FLOAT;if(r===N_)return s.ALPHA;if(r===O_)return s.RGB;if(r===gi)return s.RGBA;if(r===P_)return s.LUMINANCE;if(r===z_)return s.LUMINANCE_ALPHA;if(r===gs)return s.DEPTH_COMPONENT;if(r===Ms)return s.DEPTH_STENCIL;if(r===B_)return s.RED;if(r===bd)return s.RED_INTEGER;if(r===I_)return s.RG;if(r===Ad)return s.RG_INTEGER;if(r===Rd)return s.RGBA_INTEGER;if(r===Mc||r===Ec||r===Tc||r===bc)if(f===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Mc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Tc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Mc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ec)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Tc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vh||r===kh||r===Xh||r===Wh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===qh||r===Yh||r===Zh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===qh||r===Yh)return f===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Zh)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jh||r===Kh||r===Qh||r===Jh||r===$h||r===td||r===ed||r===nd||r===id||r===ad||r===rd||r===sd||r===od||r===ld)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===jh)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kh)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qh)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jh)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$h)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===td)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ed)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===id)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ad)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===od)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ld)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ac||r===cd||r===ud)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Ac)return f===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ud)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===F_||r===fd||r===hd||r===dd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Ac)return c.COMPRESSED_RED_RGTC1_EXT;if(r===fd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ss?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class Eb extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ds extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tb={type:"move"};class Mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const r of t.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,r){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const A of t.hand.values()){const M=n.getJointPose(A,r),_=this._getHandJoint(m,A);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=g.position.distanceTo(x.position),y=.02,E=.005;m.inputState.pinching&&v>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=n.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Tb)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const r=new ds;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[n.jointName]=r,t.add(r)}return t.joints[n.jointName]}}const bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,r){if(this.texture===null){const l=new zn,c=t.properties.get(l);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,r=new Ha({vertexShader:bb,fragmentShader:Ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ai(new Pc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wb extends bs{constructor(t,n){super();const r=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,x=null,v=null,y=null,E=null;const A=new Rb,M=n.getContextAttributes();let _=null,B=null;const N=[],D=[],$=new It;let V=null;const H=new si;H.viewport=new Ze;const K=new si;K.viewport=new Ze;const C=[H,K],b=new Eb;let I=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ct=N[G];return ct===void 0&&(ct=new Mh,N[G]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(G){let ct=N[G];return ct===void 0&&(ct=new Mh,N[G]=ct),ct.getGripSpace()},this.getHand=function(G){let ct=N[G];return ct===void 0&&(ct=new Mh,N[G]=ct),ct.getHandSpace()};function nt(G){const ct=D.indexOf(G.inputSource);if(ct===-1)return;const St=N[ct];St!==void 0&&(St.update(G.inputSource,G.frame,m||f),St.dispatchEvent({type:G.type,data:G.inputSource}))}function ht(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",pt);for(let G=0;G<N.length;G++){const ct=D[G];ct!==null&&(D[G]=null,N[G].disconnect(ct))}I=null,ft=null,A.reset(),t.setRenderTarget(_),y=null,v=null,x=null,l=null,B=null,yt.stop(),r.isPresenting=!1,t.setPixelRatio(V),t.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){c=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){h=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(G){m=G},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",pt),M.xrCompatible!==!0&&await n.makeXRCompatible(),V=t.getPixelRatio(),t.getSize($),l.renderState.layers===void 0){const ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,n,ct),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new vr(y.framebufferWidth,y.framebufferHeight,{format:gi,type:aa,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let ct=null,St=null,Tt=null;M.depth&&(Tt=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ct=M.stencil?Ms:gs,St=M.stencil?Ss:_r);const Dt={colorFormat:n.RGBA8,depthFormat:Tt,scaleFactor:c};x=new XRWebGLBinding(l,n),v=x.createProjectionLayer(Dt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),B=new vr(v.textureWidth,v.textureHeight,{format:gi,type:aa,depthTexture:new tv(v.textureWidth,v.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pt(G){for(let ct=0;ct<G.removed.length;ct++){const St=G.removed[ct],Tt=D.indexOf(St);Tt>=0&&(D[Tt]=null,N[Tt].disconnect(St))}for(let ct=0;ct<G.added.length;ct++){const St=G.added[ct];let Tt=D.indexOf(St);if(Tt===-1){for(let kt=0;kt<N.length;kt++)if(kt>=D.length){D.push(St),Tt=kt;break}else if(D[kt]===null){D[kt]=St,Tt=kt;break}if(Tt===-1)break}const Dt=N[Tt];Dt&&Dt.connect(St)}}const k=new Q,O=new Q;function F(G,ct,St){k.setFromMatrixPosition(ct.matrixWorld),O.setFromMatrixPosition(St.matrixWorld);const Tt=k.distanceTo(O),Dt=ct.projectionMatrix.elements,kt=St.projectionMatrix.elements,Bt=Dt[14]/(Dt[10]-1),ce=Dt[14]/(Dt[10]+1),xt=(Dt[9]+1)/Dt[5],At=(Dt[9]-1)/Dt[5],z=(Dt[8]-1)/Dt[0],Yt=(kt[8]+1)/kt[0],bt=Bt*z,Ht=Bt*Yt,Ut=Tt/(-z+Yt),ae=Ut*-z;if(ct.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ae),G.translateZ(Ut),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Dt[10]===-1)G.projectionMatrix.copy(ct.projectionMatrix),G.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Ft=Bt+Ut,L=ce+Ut,T=bt-ae,et=Ht+(Tt-ae),ut=xt*ce/L*Ft,Mt=At*ce/L*Ft;G.projectionMatrix.makePerspective(T,et,ut,Mt,Ft,L),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function st(G,ct){ct===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ct.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;let ct=G.near,St=G.far;A.texture!==null&&(A.depthNear>0&&(ct=A.depthNear),A.depthFar>0&&(St=A.depthFar)),b.near=K.near=H.near=ct,b.far=K.far=H.far=St,(I!==b.near||ft!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,ft=b.far),H.layers.mask=G.layers.mask|2,K.layers.mask=G.layers.mask|4,b.layers.mask=H.layers.mask|K.layers.mask;const Tt=G.parent,Dt=b.cameras;st(b,Tt);for(let kt=0;kt<Dt.length;kt++)st(Dt[kt],Tt);Dt.length===2?F(b,H,K):b.projectionMatrix.copy(H.projectionMatrix),U(G,b,Tt)};function U(G,ct,St){St===null?G.matrix.copy(ct.matrixWorld):(G.matrix.copy(St.matrixWorld),G.matrix.invert(),G.matrix.multiply(ct.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ct.projectionMatrix),G.projectionMatrixInverse.copy(ct.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=pd*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(G){p=G,v!==null&&(v.fixedFoveation=G),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=G)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(b)};let W=null;function lt(G,ct){if(g=ct.getViewerPose(m||f),E=ct,g!==null){const St=g.views;y!==null&&(t.setRenderTargetFramebuffer(B,y.framebuffer),t.setRenderTarget(B));let Tt=!1;St.length!==b.cameras.length&&(b.cameras.length=0,Tt=!0);for(let kt=0;kt<St.length;kt++){const Bt=St[kt];let ce=null;if(y!==null)ce=y.getViewport(Bt);else{const At=x.getViewSubImage(v,Bt);ce=At.viewport,kt===0&&(t.setRenderTargetTextures(B,At.colorTexture,v.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(B))}let xt=C[kt];xt===void 0&&(xt=new si,xt.layers.enable(kt),xt.viewport=new Ze,C[kt]=xt),xt.matrix.fromArray(Bt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Bt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(ce.x,ce.y,ce.width,ce.height),kt===0&&(b.matrix.copy(xt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Tt===!0&&b.cameras.push(xt)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const kt=x.getDepthInformation(St[0]);kt&&kt.isValid&&kt.texture&&A.init(t,kt,l.renderState)}}for(let St=0;St<N.length;St++){const Tt=D[St],Dt=N[St];Tt!==null&&Dt!==void 0&&Dt.update(Tt,ct,m||f)}W&&W(G,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),E=null}const yt=new J_;yt.setAnimationLoop(lt),this.setAnimationLoop=function(G){W=G},this.dispose=function(){}}}const fr=new wi,Cb=new He;function Db(s,t){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,j_(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,B,N,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),x(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),v(M,_),_.isMeshPhysicalMaterial&&y(M,_,D)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),A(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?p(M,_,B,N):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Pn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Pn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const B=t.get(_),N=B.envMap,D=B.envMapRotation;N&&(M.envMap.value=N,fr.copy(D),fr.x*=-1,fr.y*=-1,fr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),M.envMapRotation.value.setFromMatrix4(Cb.makeRotationFromEuler(fr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,B,N){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*B,M.scale.value=N*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function x(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function v(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,B){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Pn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function A(M,_){const B=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Ub(s,t,n,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(B,N){const D=N.program;r.uniformBlockBinding(B,D)}function m(B,N){let D=l[B.id];D===void 0&&(E(B),D=g(B),l[B.id]=D,B.addEventListener("dispose",M));const $=N.program;r.updateUBOMapping(B,$);const V=t.render.frame;c[B.id]!==V&&(v(B),c[B.id]=V)}function g(B){const N=x();B.__bindingPointIndex=N;const D=s.createBuffer(),$=B.__size,V=B.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,$,V),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,D),D}function x(){for(let B=0;B<h;B++)if(f.indexOf(B)===-1)return f.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(B){const N=l[B.id],D=B.uniforms,$=B.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let V=0,H=D.length;V<H;V++){const K=Array.isArray(D[V])?D[V]:[D[V]];for(let C=0,b=K.length;C<b;C++){const I=K[C];if(y(I,V,C,$)===!0){const ft=I.__offset,nt=Array.isArray(I.value)?I.value:[I.value];let ht=0;for(let pt=0;pt<nt.length;pt++){const k=nt[pt],O=A(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,ft+ht,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,ht),ht+=O.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ft,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(B,N,D,$){const V=B.value,H=N+"_"+D;if($[H]===void 0)return typeof V=="number"||typeof V=="boolean"?$[H]=V:$[H]=V.clone(),!0;{const K=$[H];if(typeof V=="number"||typeof V=="boolean"){if(K!==V)return $[H]=V,!0}else if(K.equals(V)===!1)return K.copy(V),!0}return!1}function E(B){const N=B.uniforms;let D=0;const $=16;for(let H=0,K=N.length;H<K;H++){const C=Array.isArray(N[H])?N[H]:[N[H]];for(let b=0,I=C.length;b<I;b++){const ft=C[b],nt=Array.isArray(ft.value)?ft.value:[ft.value];for(let ht=0,pt=nt.length;ht<pt;ht++){const k=nt[ht],O=A(k),F=D%$,st=F%O.boundary,U=F+st;D+=st,U!==0&&$-U<O.storage&&(D+=$-U),ft.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=D,D+=O.storage}}}const V=D%$;return V>0&&(D+=$-V),B.__size=D,B.__cache={},this}function A(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function M(B){const N=B.target;N.removeEventListener("dispose",M);const D=f.indexOf(N.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const B in l)s.deleteBuffer(l[B]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class Lb{constructor(t={}){const{canvas:n=yS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),A=new Int32Array(4);let M=null,_=null;const B=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=Ia,this.toneMappingExposure=1;const D=this;let $=!1,V=0,H=0,K=null,C=-1,b=null;const I=new Ze,ft=new Ze;let nt=null;const ht=new ye(0);let pt=0,k=n.width,O=n.height,F=1,st=null,U=null;const W=new Ze(0,0,k,O),lt=new Ze(0,0,k,O);let yt=!1;const G=new Dd;let ct=!1,St=!1;const Tt=new He,Dt=new He,kt=new Q,Bt=new Ze,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function At(){return K===null?F:1}let z=r;function Yt(w,j){return n.getContext(w,j)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sd}`),n.addEventListener("webglcontextlost",vt,!1),n.addEventListener("webglcontextrestored",Nt,!1),n.addEventListener("webglcontextcreationerror",Ot,!1),z===null){const j="webgl2";if(z=Yt(j,w),z===null)throw Yt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let bt,Ht,Ut,ae,Ft,L,T,et,ut,Mt,gt,Zt,Lt,Gt,ge,wt,Xt,ne,$t,Wt,fe,ie,Le,Y;function zt(){bt=new BT(z),bt.init(),ie=new Mb(z,bt),Ht=new UT(z,bt,t,ie),Ut=new xb(z,bt),Ht.reverseDepthBuffer&&v&&Ut.buffers.depth.setReversed(!0),ae=new HT(z),Ft=new ab,L=new Sb(z,bt,Ut,Ft,Ht,ie,ae),T=new NT(D),et=new zT(D),ut=new YS(z),Le=new CT(z,ut),Mt=new IT(z,ut,ae,Le),gt=new VT(z,Mt,ut,ae),$t=new GT(z,Ht,L),wt=new LT(Ft),Zt=new ib(D,T,et,bt,Ht,Le,wt),Lt=new Db(D,Ft),Gt=new sb,ge=new hb(bt),ne=new wT(D,T,et,Ut,gt,y,p),Xt=new _b(D,gt,Ht),Y=new Ub(z,ae,Ht,Ut),Wt=new DT(z,bt,ae),fe=new FT(z,bt,ae),ae.programs=Zt.programs,D.capabilities=Ht,D.extensions=bt,D.properties=Ft,D.renderLists=Gt,D.shadowMap=Xt,D.state=Ut,D.info=ae}zt();const ot=new wb(D,z);this.xr=ot,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const w=bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(k,O,!1))},this.getSize=function(w){return w.set(k,O)},this.setSize=function(w,j,it=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,O=j,n.width=Math.floor(w*F),n.height=Math.floor(j*F),it===!0&&(n.style.width=w+"px",n.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(k*F,O*F).floor()},this.setDrawingBufferSize=function(w,j,it){k=w,O=j,F=it,n.width=Math.floor(w*it),n.height=Math.floor(j*it),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(W)},this.setViewport=function(w,j,it,rt){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,j,it,rt),Ut.viewport(I.copy(W).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(lt)},this.setScissor=function(w,j,it,rt){w.isVector4?lt.set(w.x,w.y,w.z,w.w):lt.set(w,j,it,rt),Ut.scissor(ft.copy(lt).multiplyScalar(F).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(w){Ut.setScissorTest(yt=w)},this.setOpaqueSort=function(w){st=w},this.setTransparentSort=function(w){U=w},this.getClearColor=function(w){return w.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(w=!0,j=!0,it=!0){let rt=0;if(w){let Z=!1;if(K!==null){const Rt=K.texture.format;Z=Rt===Rd||Rt===Ad||Rt===bd}if(Z){const Rt=K.texture.type,Ct=Rt===aa||Rt===_r||Rt===Bo||Rt===Ss||Rt===Ed||Rt===Td,Kt=ne.getClearColor(),Qt=ne.getClearAlpha(),re=Kt.r,oe=Kt.g,Vt=Kt.b;Ct?(E[0]=re,E[1]=oe,E[2]=Vt,E[3]=Qt,z.clearBufferuiv(z.COLOR,0,E)):(A[0]=re,A[1]=oe,A[2]=Vt,A[3]=Qt,z.clearBufferiv(z.COLOR,0,A))}else rt|=z.COLOR_BUFFER_BIT}j&&(rt|=z.DEPTH_BUFFER_BIT),it&&(rt|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",vt,!1),n.removeEventListener("webglcontextrestored",Nt,!1),n.removeEventListener("webglcontextcreationerror",Ot,!1),Gt.dispose(),ge.dispose(),Ft.dispose(),T.dispose(),et.dispose(),gt.dispose(),Le.dispose(),Y.dispose(),Zt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Xo),ot.removeEventListener("sessionend",Ds),vi.stop()};function vt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const w=ae.autoReset,j=Xt.enabled,it=Xt.autoUpdate,rt=Xt.needsUpdate,Z=Xt.type;zt(),ae.autoReset=w,Xt.enabled=j,Xt.autoUpdate=it,Xt.needsUpdate=rt,Xt.type=Z}function Ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){const j=w.target;j.removeEventListener("dispose",le),Ge(j)}function Ge(w){tn(w),Ft.remove(w)}function tn(w){const j=Ft.get(w).programs;j!==void 0&&(j.forEach(function(it){Zt.releaseProgram(it)}),w.isShaderMaterial&&Zt.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,it,rt,Z,Rt){j===null&&(j=ce);const Ct=Z.isMesh&&Z.matrixWorld.determinant()<0,Kt=Ic(w,j,it,rt,Z);Ut.setMaterial(rt,Ct);let Qt=it.index,re=1;if(rt.wireframe===!0){if(Qt=Mt.getWireframeAttribute(it),Qt===void 0)return;re=2}const oe=it.drawRange,Vt=it.attributes.position;let Ee=oe.start*re,De=(oe.start+oe.count)*re;Rt!==null&&(Ee=Math.max(Ee,Rt.start*re),De=Math.min(De,(Rt.start+Rt.count)*re)),Qt!==null?(Ee=Math.max(Ee,0),De=Math.min(De,Qt.count)):Vt!=null&&(Ee=Math.max(Ee,0),De=Math.min(De,Vt.count));const Ne=De-Ee;if(Ne<0||Ne===1/0)return;Le.setup(Z,rt,Kt,it,Qt);let xn,Se=Wt;if(Qt!==null&&(xn=ut.get(Qt),Se=fe,Se.setIndex(xn)),Z.isMesh)rt.wireframe===!0?(Ut.setLineWidth(rt.wireframeLinewidth*At()),Se.setMode(z.LINES)):Se.setMode(z.TRIANGLES);else if(Z.isLine){let Jt=rt.linewidth;Jt===void 0&&(Jt=1),Ut.setLineWidth(Jt*At()),Z.isLineSegments?Se.setMode(z.LINES):Z.isLineLoop?Se.setMode(z.LINE_LOOP):Se.setMode(z.LINE_STRIP)}else Z.isPoints?Se.setMode(z.POINTS):Z.isSprite&&Se.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Se.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Se.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Jt=Z._multiDrawStarts,an=Z._multiDrawCounts,he=Z._multiDrawCount,Un=Qt?ut.get(Qt).bytesPerElement:1,sa=Ft.get(rt).currentProgram.getUniforms();for(let cn=0;cn<he;cn++)sa.setValue(z,"_gl_DrawID",cn),Se.render(Jt[cn]/Un,an[cn])}else if(Z.isInstancedMesh)Se.renderInstances(Ee,Ne,Z.count);else if(it.isInstancedBufferGeometry){const Jt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,an=Math.min(it.instanceCount,Jt);Se.renderInstances(Ee,Ne,an)}else Se.render(Ee,Ne)};function Ae(w,j,it){w.transparent===!0&&w.side===ta&&w.forceSinglePass===!1?(w.side=Pn,w.needsUpdate=!0,nn(w,j,it),w.side=Fa,w.needsUpdate=!0,nn(w,j,it),w.side=ta):nn(w,j,it)}this.compile=function(w,j,it=null){it===null&&(it=w),_=ge.get(it),_.init(j),N.push(_),it.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),w!==it&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const rt=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Rt=Z.material;if(Rt)if(Array.isArray(Rt))for(let Ct=0;Ct<Rt.length;Ct++){const Kt=Rt[Ct];Ae(Kt,it,Z),rt.add(Kt)}else Ae(Rt,it,Z),rt.add(Rt)}),N.pop(),_=null,rt},this.compileAsync=function(w,j,it=null){const rt=this.compile(w,j,it);return new Promise(Z=>{function Rt(){if(rt.forEach(function(Ct){Ft.get(Ct).currentProgram.isReady()&&rt.delete(Ct)}),rt.size===0){Z(w);return}setTimeout(Rt,10)}bt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let An=null;function Rn(w){An&&An(w)}function Xo(){vi.stop()}function Ds(){vi.start()}const vi=new J_;vi.setAnimationLoop(Rn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(w){An=w,ot.setAnimationLoop(w),w===null?vi.stop():vi.start()},ot.addEventListener("sessionstart",Xo),ot.addEventListener("sessionend",Ds),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(j),j=ot.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,j,K),_=ge.get(w,N.length),_.init(j),N.push(_),Dt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G.setFromProjectionMatrix(Dt),St=this.localClippingEnabled,ct=wt.init(this.clippingPlanes,St),M=Gt.get(w,B.length),M.init(),B.push(M),ot.enabled===!0&&ot.isPresenting===!0){const Rt=D.xr.getDepthSensingMesh();Rt!==null&&yr(Rt,j,-1/0,D.sortObjects)}yr(w,j,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(st,U),xt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,xt&&ne.addToRenderList(M,w),this.info.render.frame++,ct===!0&&wt.beginShadows();const it=_.state.shadowsArray;Xt.render(it,w,j),ct===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,Z=M.transmissive;if(_.setupLights(),j.isArrayCamera){const Rt=j.cameras;if(Z.length>0)for(let Ct=0,Kt=Rt.length;Ct<Kt;Ct++){const Qt=Rt[Ct];Wo(rt,Z,w,Qt)}xt&&ne.render(w);for(let Ct=0,Kt=Rt.length;Ct<Kt;Ct++){const Qt=Rt[Ct];Us(M,w,Qt,Qt.viewport)}}else Z.length>0&&Wo(rt,Z,w,j),xt&&ne.render(w),Us(M,w,j);K!==null&&(L.updateMultisampleRenderTarget(K),L.updateRenderTargetMipmap(K)),w.isScene===!0&&w.onAfterRender(D,w,j),Le.resetDefaultState(),C=-1,b=null,N.pop(),N.length>0?(_=N[N.length-1],ct===!0&&wt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function yr(w,j,it,rt){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)it=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){rt&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Dt);const Ct=gt.update(w),Kt=w.material;Kt.visible&&M.push(w,Ct,Kt,it,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){const Ct=gt.update(w),Kt=w.material;if(rt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Bt.copy(Ct.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(Dt)),Array.isArray(Kt)){const Qt=Ct.groups;for(let re=0,oe=Qt.length;re<oe;re++){const Vt=Qt[re],Ee=Kt[Vt.materialIndex];Ee&&Ee.visible&&M.push(w,Ct,Ee,it,Bt.z,Vt)}}else Kt.visible&&M.push(w,Ct,Kt,it,Bt.z,null)}}const Rt=w.children;for(let Ct=0,Kt=Rt.length;Ct<Kt;Ct++)yr(Rt[Ct],j,it,rt)}function Us(w,j,it,rt){const Z=w.opaque,Rt=w.transmissive,Ct=w.transparent;_.setupLightsView(it),ct===!0&&wt.setGlobalState(D.clippingPlanes,it),rt&&Ut.viewport(I.copy(rt)),Z.length>0&&Bn(Z,j,it),Rt.length>0&&Bn(Rt,j,it),Ct.length>0&&Bn(Ct,j,it),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Wo(w,j,it,rt){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new vr(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Go:aa,minFilter:gr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Rt=_.state.transmissionRenderTarget[rt.id],Ct=rt.viewport||I;Rt.setSize(Ct.z,Ct.w);const Kt=D.getRenderTarget();D.setRenderTarget(Rt),D.getClearColor(ht),pt=D.getClearAlpha(),pt<1&&D.setClearColor(16777215,.5),D.clear(),xt&&ne.render(it);const Qt=D.toneMapping;D.toneMapping=Ia;const re=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),ct===!0&&wt.setGlobalState(D.clippingPlanes,rt),Bn(w,it,rt),L.updateMultisampleRenderTarget(Rt),L.updateRenderTargetMipmap(Rt),bt.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let Vt=0,Ee=j.length;Vt<Ee;Vt++){const De=j[Vt],Ne=De.object,xn=De.geometry,Se=De.material,Jt=De.group;if(Se.side===ta&&Ne.layers.test(rt.layers)){const an=Se.side;Se.side=Pn,Se.needsUpdate=!0,en(Ne,it,rt,xn,Se,Jt),Se.side=an,Se.needsUpdate=!0,oe=!0}}oe===!0&&(L.updateMultisampleRenderTarget(Rt),L.updateRenderTargetMipmap(Rt))}D.setRenderTarget(Kt),D.setClearColor(ht,pt),re!==void 0&&(rt.viewport=re),D.toneMapping=Qt}function Bn(w,j,it){const rt=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,Rt=w.length;Z<Rt;Z++){const Ct=w[Z],Kt=Ct.object,Qt=Ct.geometry,re=rt===null?Ct.material:rt,oe=Ct.group;Kt.layers.test(it.layers)&&en(Kt,j,it,Qt,re,oe)}}function en(w,j,it,rt,Z,Rt){w.onBeforeRender(D,j,it,rt,Z,Rt),w.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(D,j,it,rt,w,Rt),Z.transparent===!0&&Z.side===ta&&Z.forceSinglePass===!1?(Z.side=Pn,Z.needsUpdate=!0,D.renderBufferDirect(it,j,rt,Z,w,Rt),Z.side=Fa,Z.needsUpdate=!0,D.renderBufferDirect(it,j,rt,Z,w,Rt),Z.side=ta):D.renderBufferDirect(it,j,rt,Z,w,Rt),w.onAfterRender(D,j,it,rt,Z,Rt)}function nn(w,j,it){j.isScene!==!0&&(j=ce);const rt=Ft.get(w),Z=_.state.lights,Rt=_.state.shadowsArray,Ct=Z.state.version,Kt=Zt.getParameters(w,Z.state,Rt,j,it),Qt=Zt.getProgramCacheKey(Kt);let re=rt.programs;rt.environment=w.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(w.isMeshStandardMaterial?et:T).get(w.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,re===void 0&&(w.addEventListener("dispose",le),re=new Map,rt.programs=re);let oe=re.get(Qt);if(oe!==void 0){if(rt.currentProgram===oe&&rt.lightsStateVersion===Ct)return Sr(w,Kt),oe}else Kt.uniforms=Zt.getUniforms(w),w.onBeforeCompile(Kt,D),oe=Zt.acquireProgram(Kt,Qt),re.set(Qt,oe),rt.uniforms=Kt.uniforms;const Vt=rt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Vt.clippingPlanes=wt.uniform),Sr(w,Kt),rt.needsLights=qo(w),rt.lightsStateVersion=Ct,rt.needsLights&&(Vt.ambientLightColor.value=Z.state.ambient,Vt.lightProbe.value=Z.state.probe,Vt.directionalLights.value=Z.state.directional,Vt.directionalLightShadows.value=Z.state.directionalShadow,Vt.spotLights.value=Z.state.spot,Vt.spotLightShadows.value=Z.state.spotShadow,Vt.rectAreaLights.value=Z.state.rectArea,Vt.ltc_1.value=Z.state.rectAreaLTC1,Vt.ltc_2.value=Z.state.rectAreaLTC2,Vt.pointLights.value=Z.state.point,Vt.pointLightShadows.value=Z.state.pointShadow,Vt.hemisphereLights.value=Z.state.hemi,Vt.directionalShadowMap.value=Z.state.directionalShadowMap,Vt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Vt.spotShadowMap.value=Z.state.spotShadowMap,Vt.spotLightMatrix.value=Z.state.spotLightMatrix,Vt.spotLightMap.value=Z.state.spotLightMap,Vt.pointShadowMap.value=Z.state.pointShadowMap,Vt.pointShadowMatrix.value=Z.state.pointShadowMatrix),rt.currentProgram=oe,rt.uniformsList=null,oe}function Ui(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=Rc.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Sr(w,j){const it=Ft.get(w);it.outputColorSpace=j.outputColorSpace,it.batching=j.batching,it.batchingColor=j.batchingColor,it.instancing=j.instancing,it.instancingColor=j.instancingColor,it.instancingMorph=j.instancingMorph,it.skinning=j.skinning,it.morphTargets=j.morphTargets,it.morphNormals=j.morphNormals,it.morphColors=j.morphColors,it.morphTargetsCount=j.morphTargetsCount,it.numClippingPlanes=j.numClippingPlanes,it.numIntersection=j.numClipIntersection,it.vertexAlphas=j.vertexAlphas,it.vertexTangents=j.vertexTangents,it.toneMapping=j.toneMapping}function Ic(w,j,it,rt,Z){j.isScene!==!0&&(j=ce),L.resetTextureUnits();const Rt=j.fog,Ct=rt.isMeshStandardMaterial?j.environment:null,Kt=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ts,Qt=(rt.isMeshStandardMaterial?et:T).get(rt.envMap||Ct),re=rt.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,oe=!!it.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Vt=!!it.morphAttributes.position,Ee=!!it.morphAttributes.normal,De=!!it.morphAttributes.color;let Ne=Ia;rt.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ne=D.toneMapping);const xn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Se=xn!==void 0?xn.length:0,Jt=Ft.get(rt),an=_.state.lights;if(ct===!0&&(St===!0||w!==b)){const yn=w===b&&rt.id===C;wt.setState(rt,w,yn)}let he=!1;rt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==an.state.version||Jt.outputColorSpace!==Kt||Z.isBatchedMesh&&Jt.batching===!1||!Z.isBatchedMesh&&Jt.batching===!0||Z.isBatchedMesh&&Jt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Jt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Jt.instancing===!1||!Z.isInstancedMesh&&Jt.instancing===!0||Z.isSkinnedMesh&&Jt.skinning===!1||!Z.isSkinnedMesh&&Jt.skinning===!0||Z.isInstancedMesh&&Jt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Jt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Jt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Jt.instancingMorph===!1&&Z.morphTexture!==null||Jt.envMap!==Qt||rt.fog===!0&&Jt.fog!==Rt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==wt.numPlanes||Jt.numIntersection!==wt.numIntersection)||Jt.vertexAlphas!==re||Jt.vertexTangents!==oe||Jt.morphTargets!==Vt||Jt.morphNormals!==Ee||Jt.morphColors!==De||Jt.toneMapping!==Ne||Jt.morphTargetsCount!==Se)&&(he=!0):(he=!0,Jt.__version=rt.version);let Un=Jt.currentProgram;he===!0&&(Un=nn(rt,j,Z));let sa=!1,cn=!1,oa=!1;const Ce=Un.getUniforms(),qn=Jt.uniforms;if(Ut.useProgram(Un.program)&&(sa=!0,cn=!0,oa=!0),rt.id!==C&&(C=rt.id,cn=!0),sa||b!==w){Ut.buffers.depth.getReversed()?(Tt.copy(w.projectionMatrix),MS(Tt),ES(Tt),Ce.setValue(z,"projectionMatrix",Tt)):Ce.setValue(z,"projectionMatrix",w.projectionMatrix),Ce.setValue(z,"viewMatrix",w.matrixWorldInverse);const oi=Ce.map.cameraPosition;oi!==void 0&&oi.setValue(z,kt.setFromMatrixPosition(w.matrixWorld)),Ht.logarithmicDepthBuffer&&Ce.setValue(z,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ce.setValue(z,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,cn=!0,oa=!0)}if(Z.isSkinnedMesh){Ce.setOptional(z,Z,"bindMatrix"),Ce.setOptional(z,Z,"bindMatrixInverse");const yn=Z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ce.setValue(z,"boneTexture",yn.boneTexture,L))}Z.isBatchedMesh&&(Ce.setOptional(z,Z,"batchingTexture"),Ce.setValue(z,"batchingTexture",Z._matricesTexture,L),Ce.setOptional(z,Z,"batchingIdTexture"),Ce.setValue(z,"batchingIdTexture",Z._indirectTexture,L),Ce.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ce.setValue(z,"batchingColorTexture",Z._colorsTexture,L));const un=it.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&$t.update(Z,it,Un),(cn||Jt.receiveShadow!==Z.receiveShadow)&&(Jt.receiveShadow=Z.receiveShadow,Ce.setValue(z,"receiveShadow",Z.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(qn.envMap.value=Qt,qn.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&j.environment!==null&&(qn.envMapIntensity.value=j.environmentIntensity),cn&&(Ce.setValue(z,"toneMappingExposure",D.toneMappingExposure),Jt.needsLights&&Fc(qn,oa),Rt&&rt.fog===!0&&Lt.refreshFogUniforms(qn,Rt),Lt.refreshMaterialUniforms(qn,rt,F,O,_.state.transmissionRenderTarget[w.id]),Rc.upload(z,Ui(Jt),qn,L)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Rc.upload(z,Ui(Jt),qn,L),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ce.setValue(z,"center",Z.center),Ce.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Ce.setValue(z,"normalMatrix",Z.normalMatrix),Ce.setValue(z,"modelMatrix",Z.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const yn=rt.uniformsGroups;for(let oi=0,Yn=yn.length;oi<Yn;oi++){const Li=yn[oi];Y.update(Li,Un),Y.bind(Li,Un)}}return Un}function Fc(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function qo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(w,j,it){Ft.get(w.texture).__webglTexture=j,Ft.get(w.depthTexture).__webglTexture=it;const rt=Ft.get(w);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=it===void 0,rt.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,j){const it=Ft.get(w);it.__webglFramebuffer=j,it.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(w,j=0,it=0){K=w,V=j,H=it;let rt=!0,Z=null,Rt=!1,Ct=!1;if(w){const Qt=Ft.get(w);if(Qt.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(z.FRAMEBUFFER,null),rt=!1;else if(Qt.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(Qt.__hasExternalTextures)L.rebindTextures(w,Ft.get(w.texture).__webglTexture,Ft.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Vt=w.depthTexture;if(Qt.__boundDepthTexture!==Vt){if(Vt!==null&&Ft.has(Vt)&&(w.width!==Vt.image.width||w.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const re=w.texture;(re.isData3DTexture||re.isDataArrayTexture||re.isCompressedArrayTexture)&&(Ct=!0);const oe=Ft.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(oe[j])?Z=oe[j][it]:Z=oe[j],Rt=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?Z=Ft.get(w).__webglMultisampledFramebuffer:Array.isArray(oe)?Z=oe[it]:Z=oe,I.copy(w.viewport),ft.copy(w.scissor),nt=w.scissorTest}else I.copy(W).multiplyScalar(F).floor(),ft.copy(lt).multiplyScalar(F).floor(),nt=yt;if(Ut.bindFramebuffer(z.FRAMEBUFFER,Z)&&rt&&Ut.drawBuffers(w,Z),Ut.viewport(I),Ut.scissor(ft),Ut.setScissorTest(nt),Rt){const Qt=Ft.get(w.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Qt.__webglTexture,it)}else if(Ct){const Qt=Ft.get(w.texture),re=j||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qt.__webglTexture,it||0,re)}C=-1},this.readRenderTargetPixels=function(w,j,it,rt,Z,Rt,Ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=Ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Kt=Kt[Ct]),Kt){Ut.bindFramebuffer(z.FRAMEBUFFER,Kt);try{const Qt=w.texture,re=Qt.format,oe=Qt.type;if(!Ht.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-rt&&it>=0&&it<=w.height-Z&&z.readPixels(j,it,rt,Z,ie.convert(re),ie.convert(oe),Rt)}finally{const Qt=K!==null?Ft.get(K).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(w,j,it,rt,Z,Rt,Ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=Ft.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Kt=Kt[Ct]),Kt){const Qt=w.texture,re=Qt.format,oe=Qt.type;if(!Ht.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=w.width-rt&&it>=0&&it<=w.height-Z){Ut.bindFramebuffer(z.FRAMEBUFFER,Kt);const Vt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Vt),z.bufferData(z.PIXEL_PACK_BUFFER,Rt.byteLength,z.STREAM_READ),z.readPixels(j,it,rt,Z,ie.convert(re),ie.convert(oe),0);const Ee=K!==null?Ft.get(K).__webglFramebuffer:null;Ut.bindFramebuffer(z.FRAMEBUFFER,Ee);const De=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await SS(z,De,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Vt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Rt),z.deleteBuffer(Vt),z.deleteSync(De),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,j=null,it=0){w.isTexture!==!0&&(Lo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1]);const rt=Math.pow(2,-it),Z=Math.floor(w.image.width*rt),Rt=Math.floor(w.image.height*rt),Ct=j!==null?j.x:0,Kt=j!==null?j.y:0;L.setTexture2D(w,0),z.copyTexSubImage2D(z.TEXTURE_2D,it,0,0,Ct,Kt,Z,Rt),Ut.unbindTexture()},this.copyTextureToTexture=function(w,j,it=null,rt=null,Z=0){w.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture function signature has changed."),rt=arguments[0]||null,w=arguments[1],j=arguments[2],Z=arguments[3]||0,it=null);let Rt,Ct,Kt,Qt,re,oe,Vt,Ee,De;const Ne=w.isCompressedTexture?w.mipmaps[Z]:w.image;it!==null?(Rt=it.max.x-it.min.x,Ct=it.max.y-it.min.y,Kt=it.isBox3?it.max.z-it.min.z:1,Qt=it.min.x,re=it.min.y,oe=it.isBox3?it.min.z:0):(Rt=Ne.width,Ct=Ne.height,Kt=Ne.depth||1,Qt=0,re=0,oe=0),rt!==null?(Vt=rt.x,Ee=rt.y,De=rt.z):(Vt=0,Ee=0,De=0);const xn=ie.convert(j.format),Se=ie.convert(j.type);let Jt;j.isData3DTexture?(L.setTexture3D(j,0),Jt=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(L.setTexture2DArray(j,0),Jt=z.TEXTURE_2D_ARRAY):(L.setTexture2D(j,0),Jt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const an=z.getParameter(z.UNPACK_ROW_LENGTH),he=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Un=z.getParameter(z.UNPACK_SKIP_PIXELS),sa=z.getParameter(z.UNPACK_SKIP_ROWS),cn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ne.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ne.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Qt),z.pixelStorei(z.UNPACK_SKIP_ROWS,re),z.pixelStorei(z.UNPACK_SKIP_IMAGES,oe);const oa=w.isDataArrayTexture||w.isData3DTexture,Ce=j.isDataArrayTexture||j.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const qn=Ft.get(w),un=Ft.get(j),yn=Ft.get(qn.__renderTarget),oi=Ft.get(un.__renderTarget);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let Yn=0;Yn<Kt;Yn++)oa&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(w).__webglTexture,Z,oe+Yn),w.isDepthTexture?(Ce&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.get(j).__webglTexture,Z,De+Yn),z.blitFramebuffer(Qt,re,Rt,Ct,Vt,Ee,Rt,Ct,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ce?z.copyTexSubImage3D(Jt,Z,Vt,Ee,De+Yn,Qt,re,Rt,Ct):z.copyTexSubImage2D(Jt,Z,Vt,Ee,De+Yn,Qt,re,Rt,Ct);Ut.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ce?w.isDataTexture||w.isData3DTexture?z.texSubImage3D(Jt,Z,Vt,Ee,De,Rt,Ct,Kt,xn,Se,Ne.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(Jt,Z,Vt,Ee,De,Rt,Ct,Kt,xn,Ne.data):z.texSubImage3D(Jt,Z,Vt,Ee,De,Rt,Ct,Kt,xn,Se,Ne):w.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Z,Vt,Ee,Rt,Ct,xn,Se,Ne.data):w.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Z,Vt,Ee,Ne.width,Ne.height,xn,Ne.data):z.texSubImage2D(z.TEXTURE_2D,Z,Vt,Ee,Rt,Ct,xn,Se,Ne);z.pixelStorei(z.UNPACK_ROW_LENGTH,an),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,he),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Un),z.pixelStorei(z.UNPACK_SKIP_ROWS,sa),z.pixelStorei(z.UNPACK_SKIP_IMAGES,cn),Z===0&&j.generateMipmaps&&z.generateMipmap(Jt),Ut.unbindTexture()},this.copyTextureToTexture3D=function(w,j,it=null,rt=null,Z=0){return w.isTexture!==!0&&(Lo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,rt=arguments[1]||null,w=arguments[2],j=arguments[3],Z=arguments[4]||0),Lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,j,it,rt,Z)},this.initRenderTarget=function(w){Ft.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),Ut.unbindTexture()},this.resetState=function(){V=0,H=0,K=null,Ut.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=be._getDrawingBufferColorSpace(t),n.unpackColorSpace=be._getUnpackColorSpace()}}class Nb extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class rv extends Rs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Dc=new Q,Uc=new Q,l_=new He,Uo=new wd,_c=new Oc,Eh=new Q,c_=new Q;class Ob extends vn{constructor(t=new Ci,n=new rv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,r=[0];for(let l=1,c=n.count;l<c;l++)Dc.fromBufferAttribute(n,l-1),Uc.fromBufferAttribute(n,l),r[l]=r[l-1],r[l]+=Dc.distanceTo(Uc);t.setAttribute("lineDistance",new Wn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(l),_c.radius+=c,t.ray.intersectsSphere(_c)===!1)return;l_.copy(l).invert(),Uo.copy(t.ray).applyMatrix4(l_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,g=r.index,v=r.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let A=y,M=E-1;A<M;A+=m){const _=g.getX(A),B=g.getX(A+1),N=vc(this,t,Uo,p,_,B);N&&n.push(N)}if(this.isLineLoop){const A=g.getX(E-1),M=g.getX(y),_=vc(this,t,Uo,p,A,M);_&&n.push(_)}}else{const y=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let A=y,M=E-1;A<M;A+=m){const _=vc(this,t,Uo,p,A,A+1);_&&n.push(_)}if(this.isLineLoop){const A=vc(this,t,Uo,p,E-1,y);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const l=n[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function vc(s,t,n,r,l,c){const f=s.geometry.attributes.position;if(Dc.fromBufferAttribute(f,l),Uc.fromBufferAttribute(f,c),n.distanceSqToSegment(Dc,Uc,Eh,c_)>r)return;Eh.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Eh);if(!(p<t.near||p>t.far))return{distance:p,point:c_.clone().applyMatrix4(s.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:s}}const u_=new Q,f_=new Q;class Pb extends Ob{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,r=[];for(let l=0,c=n.count;l<c;l+=2)u_.fromBufferAttribute(n,l),f_.fromBufferAttribute(n,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+u_.distanceTo(f_);t.setAttribute("lineDistance",new Wn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const r=this.getUtoTmapping(t);return this.getPoint(r,n)}getPoints(t=5){const n=[];for(let r=0;r<=t;r++)n.push(this.getPoint(r/t));return n}getSpacedPoints(t=5){const n=[];for(let r=0;r<=t;r++)n.push(this.getPointAt(r/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let r,l=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)r=this.getPoint(f/t),c+=r.distanceTo(l),n.push(c),l=r;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const r=this.getLengths();let l=0;const c=r.length;let f;n?f=n:f=t*r[c-1];let h=0,p=c-1,m;for(;h<=p;)if(l=Math.floor(h+(p-h)/2),m=r[l]-f,m<0)h=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,r[l]===f)return l/(c-1);const g=r[l],v=r[l+1]-g,y=(f-g)/v;return(l+y)/(c-1)}getTangent(t,n){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),p=n||(f.isVector2?new It:new Q);return p.copy(h).sub(f).normalize(),p}getTangentAt(t,n){const r=this.getUtoTmapping(t);return this.getTangent(r,n)}computeFrenetFrames(t,n){const r=new Q,l=[],c=[],f=[],h=new Q,p=new He;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new Q)}c[0]=new Q,f[0]=new Q;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),x=Math.abs(l[0].y),v=Math.abs(l[0].z);g<=m&&(m=g,r.set(1,0,0)),x<=m&&(m=x,r.set(0,1,0)),v<=m&&r.set(0,0,1),h.crossVectors(l[0],r).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(l[y-1],l[y]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(bn(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(p.makeRotationAxis(h,E))}f[y].crossVectors(l[y],c[y])}if(n===!0){let y=Math.acos(bn(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ld extends Di{constructor(t=0,n=0,r=1,l=1,c=0,f=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=r,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=p}getPoint(t,n=new It){const r=n,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),x=Math.sin(this.aRotation),v=p-this.aX,y=m-this.aY;p=v*g-y*x+this.aX,m=v*x+y*g+this.aY}return r.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zb extends Ld{constructor(t,n,r,l,c,f){super(t,n,r,r,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Nd(){let s=0,t=0,n=0,r=0;function l(c,f,h,p){s=c,t=h,n=-3*c+3*f-2*h-p,r=2*c-2*f+h+p}return{initCatmullRom:function(c,f,h,p,m){l(f,h,m*(h-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,h,p,m,g,x){let v=(f-c)/m-(h-c)/(m+g)+(h-f)/g,y=(h-f)/g-(p-f)/(g+x)+(p-h)/x;v*=g,y*=g,l(f,h,v,y)},calc:function(c){const f=c*c,h=f*c;return s+t*c+n*f+r*h}}}const xc=new Q,Th=new Nd,bh=new Nd,Ah=new Nd;class Bb extends Di{constructor(t=[],n=!1,r="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=r,this.tension=l}getPoint(t,n=new Q){const r=n,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),p=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:p===0&&h===c-1&&(h=c-2,p=1);let m,g;this.closed||h>0?m=l[(h-1)%c]:(xc.subVectors(l[0],l[1]).add(l[0]),m=xc);const x=l[h%c],v=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(xc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=xc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(x),y),A=Math.pow(x.distanceToSquared(v),y),M=Math.pow(v.distanceToSquared(g),y);A<1e-4&&(A=1),E<1e-4&&(E=A),M<1e-4&&(M=A),Th.initNonuniformCatmullRom(m.x,x.x,v.x,g.x,E,A,M),bh.initNonuniformCatmullRom(m.y,x.y,v.y,g.y,E,A,M),Ah.initNonuniformCatmullRom(m.z,x.z,v.z,g.z,E,A,M)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(m.x,x.x,v.x,g.x,this.tension),bh.initCatmullRom(m.y,x.y,v.y,g.y,this.tension),Ah.initCatmullRom(m.z,x.z,v.z,g.z,this.tension));return r.set(Th.calc(p),bh.calc(p),Ah.calc(p)),r}copy(t){super.copy(t),this.points=[];for(let n=0,r=t.points.length;n<r;n++){const l=t.points[n];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,r=this.points.length;n<r;n++){const l=this.points[n];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,r=t.points.length;n<r;n++){const l=t.points[n];this.points.push(new Q().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function h_(s,t,n,r,l){const c=(r-t)*.5,f=(l-n)*.5,h=s*s,p=s*h;return(2*n-2*r+c+f)*p+(-3*n+3*r-2*c-f)*h+c*s+n}function Ib(s,t){const n=1-s;return n*n*t}function Fb(s,t){return 2*(1-s)*s*t}function Hb(s,t){return s*s*t}function Oo(s,t,n,r){return Ib(s,t)+Fb(s,n)+Hb(s,r)}function Gb(s,t){const n=1-s;return n*n*n*t}function Vb(s,t){const n=1-s;return 3*n*n*s*t}function kb(s,t){return 3*(1-s)*s*s*t}function Xb(s,t){return s*s*s*t}function Po(s,t,n,r,l){return Gb(s,t)+Vb(s,n)+kb(s,r)+Xb(s,l)}class sv extends Di{constructor(t=new It,n=new It,r=new It,l=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=r,this.v3=l}getPoint(t,n=new It){const r=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return r.set(Po(t,l.x,c.x,f.x,h.x),Po(t,l.y,c.y,f.y,h.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wb extends Di{constructor(t=new Q,n=new Q,r=new Q,l=new Q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=r,this.v3=l}getPoint(t,n=new Q){const r=n,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return r.set(Po(t,l.x,c.x,f.x,h.x),Po(t,l.y,c.y,f.y,h.y),Po(t,l.z,c.z,f.z,h.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ov extends Di{constructor(t=new It,n=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new It){const r=n;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new It){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qb extends Di{constructor(t=new Q,n=new Q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new Q){const r=n;return t===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(t).add(this.v1)),r}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Q){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lv extends Di{constructor(t=new It,n=new It,r=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=r}getPoint(t,n=new It){const r=n,l=this.v0,c=this.v1,f=this.v2;return r.set(Oo(t,l.x,c.x,f.x),Oo(t,l.y,c.y,f.y)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yb extends Di{constructor(t=new Q,n=new Q,r=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=r}getPoint(t,n=new Q){const r=n,l=this.v0,c=this.v1,f=this.v2;return r.set(Oo(t,l.x,c.x,f.x),Oo(t,l.y,c.y,f.y),Oo(t,l.z,c.z,f.z)),r}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cv extends Di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new It){const r=n,l=this.points,c=(l.length-1)*t,f=Math.floor(c),h=c-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],x=l[f>l.length-3?l.length-1:f+2];return r.set(h_(h,p.x,m.x,g.x,x.x),h_(h,p.y,m.y,g.y,x.y)),r}copy(t){super.copy(t),this.points=[];for(let n=0,r=t.points.length;n<r;n++){const l=t.points[n];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,r=this.points.length;n<r;n++){const l=this.points[n];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,r=t.points.length;n<r;n++){const l=t.points[n];this.points.push(new It().fromArray(l))}return this}}var gd=Object.freeze({__proto__:null,ArcCurve:zb,CatmullRomCurve3:Bb,CubicBezierCurve:sv,CubicBezierCurve3:Wb,EllipseCurve:Ld,LineCurve:ov,LineCurve3:qb,QuadraticBezierCurve:lv,QuadraticBezierCurve3:Yb,SplineCurve:cv});class Zb extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const r=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gd[r](n,t))}return this}getPoint(t,n){const r=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=r){const f=l[c]-r,h=this.curves[c],p=h.getLength(),m=p===0?0:1-f/p;return h.getPointAt(m,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let r=0,l=this.curves.length;r<l;r++)n+=this.curves[r].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let r=0;r<=t;r++)n.push(this.getPoint(r/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let r;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(h);for(let m=0;m<p.length;m++){const g=p[m];r&&r.equals(g)||(n.push(g),r=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,r=t.curves.length;n<r;n++){const l=t.curves[n];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,r=this.curves.length;n<r;n++){const l=this.curves[n];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,r=t.curves.length;n<r;n++){const l=t.curves[n];this.curves.push(new gd[l.type]().fromJSON(l))}return this}}class d_ extends Zb{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,r=t.length;n<r;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const r=new ov(this.currentPoint.clone(),new It(t,n));return this.curves.push(r),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,r,l){const c=new lv(this.currentPoint.clone(),new It(t,n),new It(r,l));return this.curves.push(c),this.currentPoint.set(r,l),this}bezierCurveTo(t,n,r,l,c,f){const h=new sv(this.currentPoint.clone(),new It(t,n),new It(r,l),new It(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),r=new cv(n);return this.curves.push(r),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,r,l,c,f){const h=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+h,n+p,r,l,c,f),this}absarc(t,n,r,l,c,f){return this.absellipse(t,n,r,r,l,c,f),this}ellipse(t,n,r,l,c,f,h,p){const m=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+m,n+g,r,l,c,f,h,p),this}absellipse(t,n,r,l,c,f,h,p){const m=new Ld(t,n,r,l,c,f,h,p);if(this.curves.length>0){const x=m.getPoint(0);x.equals(this.currentPoint)||this.lineTo(x.x,x.y)}this.curves.push(m);const g=m.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class uv extends d_{constructor(t){super(t),this.uuid=As(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let r=0,l=this.holes.length;r<l;r++)n[r]=this.holes[r].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,r=t.holes.length;n<r;n++){const l=t.holes[n];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,r=this.holes.length;n<r;n++){const l=this.holes[n];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,r=t.holes.length;n<r;n++){const l=t.holes[n];this.holes.push(new d_().fromJSON(l))}return this}}const jb={triangulate:function(s,t,n=2){const r=t&&t.length,l=r?t[0]*n:s.length;let c=fv(s,0,l,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h,p,m,g,x,v,y;if(r&&(c=tA(s,t,c,n)),s.length>80*n){h=m=s[0],p=g=s[1];for(let E=n;E<l;E+=n)x=s[E],v=s[E+1],x<h&&(h=x),v<p&&(p=v),x>m&&(m=x),v>g&&(g=v);y=Math.max(m-h,g-p),y=y!==0?32767/y:0}return Io(c,f,n,h,p,y,0),f}};function fv(s,t,n,r,l){let c,f;if(l===fA(s,t,n,r)>0)for(c=t;c<n;c+=r)f=p_(c,s[c],s[c+1],f);else for(c=n-r;c>=t;c-=r)f=p_(c,s[c],s[c+1],f);return f&&Bc(f,f.next)&&(Ho(f),f=f.next),f}function xr(s,t){if(!s)return s;t||(t=s);let n=s,r;do if(r=!1,!n.steiner&&(Bc(n,n.next)||Xe(n.prev,n,n.next)===0)){if(Ho(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Io(s,t,n,r,l,c,f){if(!s)return;!f&&c&&rA(s,r,l,c);let h=s,p,m;for(;s.prev!==s.next;){if(p=s.prev,m=s.next,c?Qb(s,r,l,c):Kb(s)){t.push(p.i/n|0),t.push(s.i/n|0),t.push(m.i/n|0),Ho(s),s=m.next,h=m.next;continue}if(s=m,s===h){f?f===1?(s=Jb(xr(s),t,n),Io(s,t,n,r,l,c,2)):f===2&&$b(s,t,n,r,l,c):Io(xr(s),t,n,r,l,c,1);break}}}function Kb(s){const t=s.prev,n=s,r=s.next;if(Xe(t,n,r)>=0)return!1;const l=t.x,c=n.x,f=r.x,h=t.y,p=n.y,m=r.y,g=l<c?l<f?l:f:c<f?c:f,x=h<p?h<m?h:m:p<m?p:m,v=l>c?l>f?l:f:c>f?c:f,y=h>p?h>m?h:m:p>m?p:m;let E=r.next;for(;E!==t;){if(E.x>=g&&E.x<=v&&E.y>=x&&E.y<=y&&ps(l,h,c,p,f,m,E.x,E.y)&&Xe(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function Qb(s,t,n,r){const l=s.prev,c=s,f=s.next;if(Xe(l,c,f)>=0)return!1;const h=l.x,p=c.x,m=f.x,g=l.y,x=c.y,v=f.y,y=h<p?h<m?h:m:p<m?p:m,E=g<x?g<v?g:v:x<v?x:v,A=h>p?h>m?h:m:p>m?p:m,M=g>x?g>v?g:v:x>v?x:v,_=_d(y,E,t,n,r),B=_d(A,M,t,n,r);let N=s.prevZ,D=s.nextZ;for(;N&&N.z>=_&&D&&D.z<=B;){if(N.x>=y&&N.x<=A&&N.y>=E&&N.y<=M&&N!==l&&N!==f&&ps(h,g,p,x,m,v,N.x,N.y)&&Xe(N.prev,N,N.next)>=0||(N=N.prevZ,D.x>=y&&D.x<=A&&D.y>=E&&D.y<=M&&D!==l&&D!==f&&ps(h,g,p,x,m,v,D.x,D.y)&&Xe(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;N&&N.z>=_;){if(N.x>=y&&N.x<=A&&N.y>=E&&N.y<=M&&N!==l&&N!==f&&ps(h,g,p,x,m,v,N.x,N.y)&&Xe(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;D&&D.z<=B;){if(D.x>=y&&D.x<=A&&D.y>=E&&D.y<=M&&D!==l&&D!==f&&ps(h,g,p,x,m,v,D.x,D.y)&&Xe(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function Jb(s,t,n){let r=s;do{const l=r.prev,c=r.next.next;!Bc(l,c)&&hv(l,r,r.next,c)&&Fo(l,c)&&Fo(c,l)&&(t.push(l.i/n|0),t.push(r.i/n|0),t.push(c.i/n|0),Ho(r),Ho(r.next),r=s=c),r=r.next}while(r!==s);return xr(r)}function $b(s,t,n,r,l,c){let f=s;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&lA(f,h)){let p=dv(f,h);f=xr(f,f.next),p=xr(p,p.next),Io(f,t,n,r,l,c,0),Io(p,t,n,r,l,c,0);return}h=h.next}f=f.next}while(f!==s)}function tA(s,t,n,r){const l=[];let c,f,h,p,m;for(c=0,f=t.length;c<f;c++)h=t[c]*r,p=c<f-1?t[c+1]*r:s.length,m=fv(s,h,p,r,!1),m===m.next&&(m.steiner=!0),l.push(oA(m));for(l.sort(eA),c=0;c<l.length;c++)n=nA(l[c],n);return n}function eA(s,t){return s.x-t.x}function nA(s,t){const n=iA(s,t);if(!n)return t;const r=dv(n,s);return xr(r,r.next),xr(n,n.next)}function iA(s,t){let n=t,r=-1/0,l;const c=s.x,f=s.y;do{if(f<=n.y&&f>=n.next.y&&n.next.y!==n.y){const v=n.x+(f-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(v<=c&&v>r&&(r=v,l=n.x<n.next.x?n:n.next,v===c))return l}n=n.next}while(n!==t);if(!l)return null;const h=l,p=l.x,m=l.y;let g=1/0,x;n=l;do c>=n.x&&n.x>=p&&c!==n.x&&ps(f<m?c:r,f,p,m,f<m?r:c,f,n.x,n.y)&&(x=Math.abs(f-n.y)/(c-n.x),Fo(n,s)&&(x<g||x===g&&(n.x>l.x||n.x===l.x&&aA(l,n)))&&(l=n,g=x)),n=n.next;while(n!==h);return l}function aA(s,t){return Xe(s.prev,s,t.prev)<0&&Xe(t.next,s,s.next)<0}function rA(s,t,n,r){let l=s;do l.z===0&&(l.z=_d(l.x,l.y,t,n,r)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==s);l.prevZ.nextZ=null,l.prevZ=null,sA(l)}function sA(s){let t,n,r,l,c,f,h,p,m=1;do{for(n=s,s=null,c=null,f=0;n;){for(f++,r=n,h=0,t=0;t<m&&(h++,r=r.nextZ,!!r);t++);for(p=m;h>0||p>0&&r;)h!==0&&(p===0||!r||n.z<=r.z)?(l=n,n=n.nextZ,h--):(l=r,r=r.nextZ,p--),c?c.nextZ=l:s=l,l.prevZ=c,c=l;n=r}c.nextZ=null,m*=2}while(f>1);return s}function _d(s,t,n,r,l){return s=(s-n)*l|0,t=(t-r)*l|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function oA(s){let t=s,n=s;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==s);return n}function ps(s,t,n,r,l,c,f,h){return(l-f)*(t-h)>=(s-f)*(c-h)&&(s-f)*(r-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(l-f)*(r-h)}function lA(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!cA(s,t)&&(Fo(s,t)&&Fo(t,s)&&uA(s,t)&&(Xe(s.prev,s,t.prev)||Xe(s,t.prev,t))||Bc(s,t)&&Xe(s.prev,s,s.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(s,t,n){return(t.y-s.y)*(n.x-t.x)-(t.x-s.x)*(n.y-t.y)}function Bc(s,t){return s.x===t.x&&s.y===t.y}function hv(s,t,n,r){const l=Sc(Xe(s,t,n)),c=Sc(Xe(s,t,r)),f=Sc(Xe(n,r,s)),h=Sc(Xe(n,r,t));return!!(l!==c&&f!==h||l===0&&yc(s,n,t)||c===0&&yc(s,r,t)||f===0&&yc(n,s,r)||h===0&&yc(n,t,r))}function yc(s,t,n){return t.x<=Math.max(s.x,n.x)&&t.x>=Math.min(s.x,n.x)&&t.y<=Math.max(s.y,n.y)&&t.y>=Math.min(s.y,n.y)}function Sc(s){return s>0?1:s<0?-1:0}function cA(s,t){let n=s;do{if(n.i!==s.i&&n.next.i!==s.i&&n.i!==t.i&&n.next.i!==t.i&&hv(n,n.next,s,t))return!0;n=n.next}while(n!==s);return!1}function Fo(s,t){return Xe(s.prev,s,s.next)<0?Xe(s,t,s.next)>=0&&Xe(s,s.prev,t)>=0:Xe(s,t,s.prev)<0||Xe(s,s.next,t)<0}function uA(s,t){let n=s,r=!1;const l=(s.x+t.x)/2,c=(s.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&l<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==s);return r}function dv(s,t){const n=new vd(s.i,s.x,s.y),r=new vd(t.i,t.x,t.y),l=s.next,c=t.prev;return s.next=t,t.prev=s,n.next=l,l.prev=n,r.next=n,n.prev=r,c.next=r,r.prev=c,r}function p_(s,t,n,r){const l=new vd(s,t,n);return r?(l.next=r.next,l.prev=r,r.next.prev=l,r.next=l):(l.prev=l,l.next=l),l}function Ho(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vd(s,t,n){this.i=s,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fA(s,t,n,r){let l=0;for(let c=t,f=n-r;c<n;c+=r)l+=(s[f]-s[c])*(s[c+1]+s[f+1]),f=c;return l}class zo{static area(t){const n=t.length;let r=0;for(let l=n-1,c=0;c<n;l=c++)r+=t[l].x*t[c].y-t[c].x*t[l].y;return r*.5}static isClockWise(t){return zo.area(t)<0}static triangulateShape(t,n){const r=[],l=[],c=[];m_(t),g_(r,t);let f=t.length;n.forEach(m_);for(let p=0;p<n.length;p++)l.push(f),f+=n[p].length,g_(r,n[p]);const h=jb.triangulate(r,l);for(let p=0;p<h.length;p+=3)c.push(h.slice(p,p+3));return c}}function m_(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function g_(s,t){for(let n=0;n<t.length;n++)s.push(t[n].x),s.push(t[n].y)}class Od extends Ci{constructor(t=new uv([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const r=this,l=[],c=[];for(let h=0,p=t.length;h<p;h++){const m=t[h];f(m)}this.setAttribute("position",new Wn(l,3)),this.setAttribute("uv",new Wn(c,2)),this.computeVertexNormals();function f(h){const p=[],m=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,x=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,y=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:y-.1,A=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const _=n.extrudePath,B=n.UVGenerator!==void 0?n.UVGenerator:hA;let N,D=!1,$,V,H,K;_&&(N=_.getSpacedPoints(g),D=!0,v=!1,$=_.computeFrenetFrames(g,!1),V=new Q,H=new Q,K=new Q),v||(M=0,y=0,E=0,A=0);const C=h.extractPoints(m);let b=C.shape;const I=C.holes;if(!zo.isClockWise(b)){b=b.reverse();for(let xt=0,At=I.length;xt<At;xt++){const z=I[xt];zo.isClockWise(z)&&(I[xt]=z.reverse())}}const nt=zo.triangulateShape(b,I),ht=b;for(let xt=0,At=I.length;xt<At;xt++){const z=I[xt];b=b.concat(z)}function pt(xt,At,z){return At||console.error("THREE.ExtrudeGeometry: vec does not exist"),xt.clone().addScaledVector(At,z)}const k=b.length,O=nt.length;function F(xt,At,z){let Yt,bt,Ht;const Ut=xt.x-At.x,ae=xt.y-At.y,Ft=z.x-xt.x,L=z.y-xt.y,T=Ut*Ut+ae*ae,et=Ut*L-ae*Ft;if(Math.abs(et)>Number.EPSILON){const ut=Math.sqrt(T),Mt=Math.sqrt(Ft*Ft+L*L),gt=At.x-ae/ut,Zt=At.y+Ut/ut,Lt=z.x-L/Mt,Gt=z.y+Ft/Mt,ge=((Lt-gt)*L-(Gt-Zt)*Ft)/(Ut*L-ae*Ft);Yt=gt+Ut*ge-xt.x,bt=Zt+ae*ge-xt.y;const wt=Yt*Yt+bt*bt;if(wt<=2)return new It(Yt,bt);Ht=Math.sqrt(wt/2)}else{let ut=!1;Ut>Number.EPSILON?Ft>Number.EPSILON&&(ut=!0):Ut<-Number.EPSILON?Ft<-Number.EPSILON&&(ut=!0):Math.sign(ae)===Math.sign(L)&&(ut=!0),ut?(Yt=-ae,bt=Ut,Ht=Math.sqrt(T)):(Yt=Ut,bt=ae,Ht=Math.sqrt(T/2))}return new It(Yt/Ht,bt/Ht)}const st=[];for(let xt=0,At=ht.length,z=At-1,Yt=xt+1;xt<At;xt++,z++,Yt++)z===At&&(z=0),Yt===At&&(Yt=0),st[xt]=F(ht[xt],ht[z],ht[Yt]);const U=[];let W,lt=st.concat();for(let xt=0,At=I.length;xt<At;xt++){const z=I[xt];W=[];for(let Yt=0,bt=z.length,Ht=bt-1,Ut=Yt+1;Yt<bt;Yt++,Ht++,Ut++)Ht===bt&&(Ht=0),Ut===bt&&(Ut=0),W[Yt]=F(z[Yt],z[Ht],z[Ut]);U.push(W),lt=lt.concat(W)}for(let xt=0;xt<M;xt++){const At=xt/M,z=y*Math.cos(At*Math.PI/2),Yt=E*Math.sin(At*Math.PI/2)+A;for(let bt=0,Ht=ht.length;bt<Ht;bt++){const Ut=pt(ht[bt],st[bt],Yt);Tt(Ut.x,Ut.y,-z)}for(let bt=0,Ht=I.length;bt<Ht;bt++){const Ut=I[bt];W=U[bt];for(let ae=0,Ft=Ut.length;ae<Ft;ae++){const L=pt(Ut[ae],W[ae],Yt);Tt(L.x,L.y,-z)}}}const yt=E+A;for(let xt=0;xt<k;xt++){const At=v?pt(b[xt],lt[xt],yt):b[xt];D?(H.copy($.normals[0]).multiplyScalar(At.x),V.copy($.binormals[0]).multiplyScalar(At.y),K.copy(N[0]).add(H).add(V),Tt(K.x,K.y,K.z)):Tt(At.x,At.y,0)}for(let xt=1;xt<=g;xt++)for(let At=0;At<k;At++){const z=v?pt(b[At],lt[At],yt):b[At];D?(H.copy($.normals[xt]).multiplyScalar(z.x),V.copy($.binormals[xt]).multiplyScalar(z.y),K.copy(N[xt]).add(H).add(V),Tt(K.x,K.y,K.z)):Tt(z.x,z.y,x/g*xt)}for(let xt=M-1;xt>=0;xt--){const At=xt/M,z=y*Math.cos(At*Math.PI/2),Yt=E*Math.sin(At*Math.PI/2)+A;for(let bt=0,Ht=ht.length;bt<Ht;bt++){const Ut=pt(ht[bt],st[bt],Yt);Tt(Ut.x,Ut.y,x+z)}for(let bt=0,Ht=I.length;bt<Ht;bt++){const Ut=I[bt];W=U[bt];for(let ae=0,Ft=Ut.length;ae<Ft;ae++){const L=pt(Ut[ae],W[ae],Yt);D?Tt(L.x,L.y+N[g-1].y,N[g-1].x+z):Tt(L.x,L.y,x+z)}}}G(),ct();function G(){const xt=l.length/3;if(v){let At=0,z=k*At;for(let Yt=0;Yt<O;Yt++){const bt=nt[Yt];Dt(bt[2]+z,bt[1]+z,bt[0]+z)}At=g+M*2,z=k*At;for(let Yt=0;Yt<O;Yt++){const bt=nt[Yt];Dt(bt[0]+z,bt[1]+z,bt[2]+z)}}else{for(let At=0;At<O;At++){const z=nt[At];Dt(z[2],z[1],z[0])}for(let At=0;At<O;At++){const z=nt[At];Dt(z[0]+k*g,z[1]+k*g,z[2]+k*g)}}r.addGroup(xt,l.length/3-xt,0)}function ct(){const xt=l.length/3;let At=0;St(ht,At),At+=ht.length;for(let z=0,Yt=I.length;z<Yt;z++){const bt=I[z];St(bt,At),At+=bt.length}r.addGroup(xt,l.length/3-xt,1)}function St(xt,At){let z=xt.length;for(;--z>=0;){const Yt=z;let bt=z-1;bt<0&&(bt=xt.length-1);for(let Ht=0,Ut=g+M*2;Ht<Ut;Ht++){const ae=k*Ht,Ft=k*(Ht+1),L=At+Yt+ae,T=At+bt+ae,et=At+bt+Ft,ut=At+Yt+Ft;kt(L,T,et,ut)}}}function Tt(xt,At,z){p.push(xt),p.push(At),p.push(z)}function Dt(xt,At,z){Bt(xt),Bt(At),Bt(z);const Yt=l.length/3,bt=B.generateTopUV(r,l,Yt-3,Yt-2,Yt-1);ce(bt[0]),ce(bt[1]),ce(bt[2])}function kt(xt,At,z,Yt){Bt(xt),Bt(At),Bt(Yt),Bt(At),Bt(z),Bt(Yt);const bt=l.length/3,Ht=B.generateSideWallUV(r,l,bt-6,bt-3,bt-2,bt-1);ce(Ht[0]),ce(Ht[1]),ce(Ht[3]),ce(Ht[1]),ce(Ht[2]),ce(Ht[3])}function Bt(xt){l.push(p[xt*3+0]),l.push(p[xt*3+1]),l.push(p[xt*3+2])}function ce(xt){c.push(xt.x),c.push(xt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,r=this.parameters.options;return dA(n,r,t)}static fromJSON(t,n){const r=[];for(let c=0,f=t.shapes.length;c<f;c++){const h=n[t.shapes[c]];r.push(h)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new gd[l.type]().fromJSON(l)),new Od(r,t.options)}}const hA={generateTopUV:function(s,t,n,r,l){const c=t[n*3],f=t[n*3+1],h=t[r*3],p=t[r*3+1],m=t[l*3],g=t[l*3+1];return[new It(c,f),new It(h,p),new It(m,g)]},generateSideWallUV:function(s,t,n,r,l,c){const f=t[n*3],h=t[n*3+1],p=t[n*3+2],m=t[r*3],g=t[r*3+1],x=t[r*3+2],v=t[l*3],y=t[l*3+1],E=t[l*3+2],A=t[c*3],M=t[c*3+1],_=t[c*3+2];return Math.abs(h-g)<Math.abs(f-m)?[new It(f,1-p),new It(m,1-x),new It(v,1-E),new It(A,1-_)]:[new It(h,1-p),new It(g,1-x),new It(y,1-E),new It(M,1-_)]}};function dA(s,t,n){if(n.shapes=[],Array.isArray(s))for(let r=0,l=s.length;r<l;r++){const c=s[r];n.shapes.push(c.uuid)}else n.shapes.push(s.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class pA extends Rs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=H_,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class pv extends vn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Rh=new He,__=new Q,v_=new Q;class mA{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dd,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,r=this.matrix;__.setFromMatrixPosition(t.matrixWorld),n.position.copy(__),v_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(v_),n.updateMatrixWorld(),Rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class gA extends mA{constructor(){super(new $_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _A extends pv{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new gA}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vA extends pv{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const x_=new He;class xA{constructor(t,n,r=0,l=1/0){this.ray=new wd(t,n),this.near=r,this.far=l,this.camera=null,this.layers=new Cd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return x_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(x_),this}intersectObject(t,n=!0,r=[]){return xd(t,this,r,n),r.sort(y_),r}intersectObjects(t,n=!0,r=[]){for(let l=0,c=t.length;l<c;l++)xd(t[l],this,r,n);return r.sort(y_),r}}function y_(s,t){return s.distance-t.distance}function xd(s,t,n,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,n)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,h=c.length;f<h;f++)xd(c[f],t,n,!0)}}class yA extends Pb{constructor(t=10,n=10,r=4473924,l=8947848){r=new ye(r),l=new ye(l);const c=n/2,f=t/n,h=t/2,p=[],m=[];for(let v=0,y=0,E=-h;v<=n;v++,E+=f){p.push(-h,0,E,h,0,E),p.push(E,0,-h,E,0,h);const A=v===c?r:l;A.toArray(m,y),y+=3,A.toArray(m,y),y+=3,A.toArray(m,y),y+=3,A.toArray(m,y),y+=3}const g=new Ci;g.setAttribute("position",new Wn(p,3)),g.setAttribute("color",new Wn(m,3));const x=new rv({vertexColors:!0,toneMapped:!1});super(g,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sd);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mv=(...s)=>s.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var MA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=Ue.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:f,...h},p)=>Ue.createElement("svg",{ref:p,...MA,width:t,height:t,stroke:s,strokeWidth:r?Number(n)*24/Number(t):n,className:mv("lucide",l),...h},[...f.map(([m,g])=>Ue.createElement(m,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=(s,t)=>{const n=Ue.forwardRef(({className:r,...l},c)=>Ue.createElement(EA,{ref:c,iconNode:t,className:mv(`lucide-${SA(s)}`,r),...l}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=ra("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=ra("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=ra("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=ra("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=ra("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=ra("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=ra("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=ra("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=ra("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),UA={chipboard:{name:"ДСП плита",price:3200,icon:"🪵",roughness:.6,metalness:0,description:"Ламинированная древесно-стружечная плита."}},E_={"white-wood":{name:"Белое дерево",hex:"#f0f0f0",texture:"wood"},"grey-stone":{name:"Серый камень",hex:"#8e8e8e",texture:"stone"},"dark-oak":{name:"Темный дуб",hex:"#3d2b1f",texture:"wood"},"light-pine":{name:"Светлая сосна",hex:"#dcb35c",texture:"wood"},concrete:{name:"Бетон",hex:"#a5a5a5",texture:"concrete"},anthracite:{name:"Антрацит",hex:"#2c2c2c",texture:"solid"},"marble-look":{name:"Мрамор Марквина",hex:"#1a1a1a",texture:"marble"},beech:{name:"Бук",hex:"#ebbe8d",texture:"wood"}},LA={straight:{name:"Прямая",price:0,icon:"▬",radius:0},double:{name:"Завал с двух сторон",price:1200,icon:"◚",radius:8}},T_=60,NA=()=>{const[s,t]=Ue.useState([{id:1,name:"Секция 1",shape:"rect",length:1200,width:600,thickness:38,material:"chipboard",color:"white-wood",edgeType:"straight",edgeRadius:0,rotation:0,position:{x:0,z:0},backsplash:{enabled:!1,height:100,thickness:4}}]),[n,r]=Ue.useState(1),[l,c]=Ue.useState(!1),[f,h]=Ue.useState(!1),[p,m]=Ue.useState("dims"),g=Ue.useRef(null),x=Ue.useRef(null),v=Ue.useRef(null),y=Ue.useRef(null),E=Ue.useRef(new ds),A=Ue.useRef({angle:45,distance:window.innerWidth<768?3200:2500,height:1400}),M=Ue.useRef(!1),_=Ue.useRef(null),B=Ue.useRef(new Pa(new Q(0,1,0),0)),N=Ue.useRef(new xA),D=Ue.useRef(new It),$=Ue.useRef(new Q),V=Ue.useRef({x:0,y:0}),H=s.find(O=>O.id===n)||s[0],K=(O="light")=>{var F,st,U;(U=(st=(F=window.Telegram)==null?void 0:F.WebApp)==null?void 0:st.HapticFeedback)==null||U.impactOccurred(O)};Ue.useEffect(()=>{var F;const O=(F=window.Telegram)==null?void 0:F.WebApp;if(O){O.ready(),O.expand(),O.MainButton.text="Заказать за ₽"+nt.toLocaleString(),O.MainButton.color="#f97316",O.MainButton.textColor="#000000",O.MainButton.show();const st=()=>{const U={elements:s.map(W=>({id:W.id,name:W.name,shape:W.shape,dimensions:{length:W.length,width:W.width,thickness:W.thickness},material:W.material,color:W.color,price:ft(W)})),totalPrice:nt,timestamp:new Date().toISOString()};O.sendData(JSON.stringify(U)),O.close()};if(O.MainButton.onClick(st),f){O.BackButton.show();const U=()=>h(!1);return O.BackButton.onClick(U),()=>{O.BackButton.offClick(U),O.BackButton.hide()}}return()=>{O.MainButton.offClick(st)}}},[nt,s,f]);const C=Ue.useCallback(O=>{let F=[];if(O.shape==="rect"){const lt=O.width/2,yt=O.length/2;F=[{x:-yt,z:-lt},{x:yt,z:-lt},{x:yt,z:lt},{x:-yt,z:lt}]}else{const lt=O.width,G=O.length/2,ct=lt/2;F=[{x:-G,z:-ct},{x:G,z:-ct},{x:G,z:Math.min(600-ct,ct)},{x:Math.min(600-G,G),z:ct},{x:-G,z:ct}]}const st=O.rotation*Math.PI/180,U=Math.cos(st),W=Math.sin(st);return{corners:F.map(lt=>({x:O.position.x+(lt.x*U-lt.z*W),z:O.position.z+(lt.x*W+lt.z*U)}))}},[]),b=Ue.useCallback((O,F)=>{let st=O.position.x,U=O.position.z;const W=C({...O,position:{x:st,z:U}});let lt=!1;for(const yt of F){if(yt.id===O.id)continue;const G=C(yt);for(const ct of W.corners){for(const St of G.corners){const Tt=ct.x-St.x,Dt=ct.z-St.z;if(Tt*Tt+Dt*Dt<T_*T_){st-=Tt,U-=Dt,lt=!0,K("light");break}}if(lt)break}if(lt)break}return{...O,position:{x:st,z:U}}},[C]),I=O=>{const F=s.map(st=>st.id===n?b({...st,...O},s):st);t(F)},ft=O=>{const F=O.shape==="rect"?O.length*O.width/1e6:(O.length*O.width-.5*Math.max(0,O.length-600)*Math.max(0,O.width-600))/1e6;return Math.round(UA[O.material].price*F+LA[O.edgeType].price)},nt=s.reduce((O,F)=>O+ft(F),0);Ue.useEffect(()=>{if(!g.current)return;const O=new Nb;O.background=new ye(328965),x.current=O;const F=new si(45,g.current.clientWidth/g.current.clientHeight,1,1e4);v.current=F;const st=new Lb({canvas:g.current,antialias:!0});st.setPixelRatio(window.devicePixelRatio),st.setSize(g.current.clientWidth,g.current.clientHeight),y.current=st,O.add(new vA(16777215,.9));const U=new _A(16777215,1.2);U.position.set(1e3,2500,1500),O.add(U);const W=new yA(5e3,40,1710618,1118481);O.add(W),O.add(E.current);const lt=()=>{requestAnimationFrame(lt);const yt=A.current.angle*Math.PI/180;F.position.x=Math.cos(yt)*A.current.distance,F.position.y=A.current.height,F.position.z=Math.sin(yt)*A.current.distance,F.lookAt(0,0,0),st.render(O,F)};lt()},[]),Ue.useEffect(()=>{x.current&&(E.current.clear(),s.forEach(O=>{const F=E_[O.color],st=new pA({color:new ye(F.hex),roughness:.6,metalness:.1,wireframe:l}),U=new ds;U.userData={id:O.id};let W;if(O.shape==="rect")W=new ws(O.length,O.thickness,O.width);else{const lt=new uv,yt=O.length/2,G=O.width/2;lt.moveTo(-yt,-G),lt.lineTo(yt,-G),lt.lineTo(yt,Math.min(600-G,G)),lt.lineTo(Math.min(600-yt,yt),G),lt.lineTo(-yt,G),lt.closePath(),W=new Od(lt,{depth:O.thickness,bevelEnabled:!1}),W.rotateX(Math.PI/2),W.translate(0,O.thickness/2,0)}U.add(new Ai(W,st)),U.position.set(O.position.x,O.thickness/2,O.position.z),U.rotation.y=O.rotation*Math.PI/180,E.current.add(U)}))},[s,l]);const ht=O=>{const F=O.touches?O.touches[0].clientX:O.clientX,st=O.touches?O.touches[0].clientY:O.clientY;if(!g.current||!v.current)return;const U=g.current.getBoundingClientRect();D.current.x=(F-U.left)/U.width*2-1,D.current.y=-((st-U.top)/U.height)*2+1,N.current.setFromCamera(D.current,v.current);const W=N.current.intersectObjects(E.current.children,!0);if(W.length>0){let lt=W[0].object;for(;lt.parent&&!lt.userData.id;)lt=lt.parent;_.current=lt.userData.id,r(lt.userData.id),B.current.setFromNormalAndCoplanarPoint(new Q(0,1,0),W[0].point),$.current.copy(W[0].point).sub(lt.position),K("medium")}else M.current=!0;V.current={x:F,y:st}},pt=O=>{const F=O.touches?O.touches[0].clientX:O.clientX,st=O.touches?O.touches[0].clientY:O.clientY;if(_.current&&v.current){const U=g.current.getBoundingClientRect();D.current.x=(F-U.left)/U.width*2-1,D.current.y=-((st-U.top)/U.height)*2+1,N.current.setFromCamera(D.current,v.current);const W=new Q;if(N.current.ray.intersectPlane(B.current,W)){const lt=W.sub($.current);t(yt=>yt.map(G=>G.id===_.current?b({...G,position:{x:lt.x,z:lt.z}},yt):G))}}else M.current&&(A.current.angle+=(F-V.current.x)*.6,A.current.height=Math.max(300,Math.min(3e3,A.current.height-(st-V.current.y)*10)));V.current={x:F,y:st}},k=O=>{const F=Math.max(...s.map(st=>st.id),0)+1;t([...s,b({...H,id:F,shape:O,name:`Секция ${F}`,position:{x:0,z:0}},s)]),r(F),K("heavy"),h(!0),m("dims")};return jt.jsxs("div",{className:"h-screen w-full bg-[#050505] text-white flex flex-col relative overflow-hidden font-inter",children:[jt.jsx("canvas",{ref:g,className:"flex-1 w-full",onMouseDown:ht,onMouseMove:pt,onMouseUp:()=>{_.current=null,M.current=!1},onTouchStart:ht,onTouchMove:pt,onTouchEnd:()=>{_.current=null,M.current=!1}}),jt.jsxs("div",{className:"absolute top-0 left-0 w-full p-4 flex justify-between items-center pointer-events-none",children:[jt.jsxs("div",{className:"bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl pointer-events-auto",children:[jt.jsx("h1",{className:"text-sm font-black uppercase tracking-tighter text-orange-500 font-montserrat leading-none",children:"ArchiStone"}),jt.jsx("p",{className:"text-[9px] font-bold text-white/40 uppercase tracking-widest mt-0.5 leading-none",children:"Mobile Configurator"})]}),jt.jsx("div",{className:"flex gap-2 pointer-events-auto",children:jt.jsx("button",{onClick:()=>c(!l),className:`p-3 rounded-2xl border transition-all ${l?"bg-orange-500 border-orange-400 text-black":"bg-black/40 border-white/10 text-white/40"}`,children:jt.jsx(S_,{size:18})})})]}),jt.jsxs("div",{className:"absolute top-24 right-4 flex flex-col gap-2",children:[jt.jsx("button",{onClick:()=>k("rect"),className:"w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-white/60 active:scale-90 transition-all",children:jt.jsx(CA,{size:20})}),jt.jsx("button",{onClick:()=>k("corner"),className:"w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-white/60 active:scale-90 transition-all",children:jt.jsx(M_,{size:20})})]}),jt.jsxs("div",{className:"absolute bottom-24 left-4 bg-orange-500 px-5 py-3 rounded-2xl shadow-xl shadow-orange-500/20",children:[jt.jsx("p",{className:"text-[10px] font-black uppercase text-black/60 tracking-tight leading-none mb-1",children:"Итоговая стоимость"}),jt.jsxs("p",{className:"text-xl font-black leading-none tracking-tighter font-montserrat",children:["₽",nt.toLocaleString()]})]}),jt.jsx("div",{className:"absolute bottom-6 left-0 w-full px-4 flex gap-2",children:jt.jsxs("button",{onClick:()=>h(!0),className:"flex-1 h-14 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center gap-3 text-white font-black uppercase text-xs tracking-widest active:scale-95 transition-all",children:[jt.jsx(wA,{size:18})," Настройки"]})}),jt.jsxs("div",{className:`bottom-sheet absolute bottom-0 left-0 w-full bg-[#111] rounded-t-[32px] z-50 flex flex-col ${f?"translate-y-0":"translate-y-full"}`,style:{height:"65vh"},children:[jt.jsx("div",{className:"w-12 h-1.5 bg-white/10 rounded-full mx-auto mt-3 mb-6 shrink-0",onClick:()=>h(!1)}),jt.jsxs("div",{className:"flex px-4 gap-2 mb-6 overflow-x-auto no-scrollbar shrink-0",children:[jt.jsx(wh,{active:p==="dims",onClick:()=>m("dims"),icon:jt.jsx(RA,{size:16}),label:"Размеры"}),jt.jsx(wh,{active:p==="style",onClick:()=>m("style"),icon:jt.jsx(AA,{size:16}),label:"Декор"}),jt.jsx(wh,{active:p==="list",onClick:()=>m("list"),icon:jt.jsx(bA,{size:16}),label:"Список"})]}),jt.jsxs("div",{className:"flex-1 overflow-y-auto px-6 pb-10",children:[p==="dims"&&jt.jsxs("div",{className:"space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300",children:[jt.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[jt.jsx(b_,{label:"Длина (мм)",value:H.length,onChange:O=>I({length:O})}),jt.jsx(b_,{label:"Ширина (мм)",value:H.width,onChange:O=>I({width:O})})]}),jt.jsx("div",{className:"grid grid-cols-2 gap-3",children:[26,38].map(O=>jt.jsxs("button",{onClick:()=>I({thickness:O}),className:`py-4 rounded-2xl border font-black text-xs transition-all ${H.thickness===O?"bg-orange-500 border-orange-400 text-black":"bg-white/5 border-white/10 text-white/40"}`,children:[O," ММ"]},O))}),jt.jsxs("button",{onClick:()=>I({rotation:(H.rotation+90)%360}),className:"w-full py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest",children:[jt.jsx(M_,{size:18})," Повернуть на 90°"]})]}),p==="style"&&jt.jsx("div",{className:"grid grid-cols-4 gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300",children:Object.entries(E_).map(([O,F])=>jt.jsx("button",{onClick:()=>{I({color:O}),K()},className:`aspect-square rounded-2xl border-4 transition-all flex items-center justify-center relative ${H.color===O?"border-orange-500 scale-105":"border-white/5"}`,style:{backgroundColor:F.hex},children:H.color===O&&jt.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl",children:jt.jsx(TA,{size:24,className:"text-white"})})},O))}),p==="list"&&jt.jsx("div",{className:"space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300",children:s.map(O=>jt.jsxs("div",{onClick:()=>{r(O.id),K("light")},className:`flex items-center justify-between p-4 rounded-2xl border transition-all ${n===O.id?"bg-orange-500/10 border-orange-500/50":"bg-white/5 border-transparent"}`,children:[jt.jsxs("div",{className:"flex items-center gap-4",children:[jt.jsx("div",{className:"w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-orange-500",children:jt.jsx(S_,{size:18})}),jt.jsxs("div",{children:[jt.jsx("p",{className:"text-sm font-black leading-none mb-1",children:O.name}),jt.jsxs("p",{className:"text-[10px] text-white/40 font-bold uppercase tracking-widest",children:[O.length,"×",O.width,"мм"]})]})]}),jt.jsxs("div",{className:"flex items-center gap-4",children:[jt.jsxs("p",{className:"text-xs font-black text-orange-500",children:["₽",ft(O).toLocaleString()]}),s.length>1&&jt.jsx("button",{onClick:F=>{F.stopPropagation(),t(s.filter(st=>st.id!==O.id))},className:"text-white/20 hover:text-red-500",children:jt.jsx(DA,{size:18})})]})]},O.id))})]}),jt.jsx("div",{className:"p-6 pt-0 shrink-0",children:jt.jsx("button",{onClick:()=>h(!1),className:"w-full h-14 bg-white text-black font-black uppercase text-xs tracking-widest rounded-2xl shadow-xl active:scale-95 transition-all",children:"Готово"})})]})]})},wh=({active:s,onClick:t,icon:n,label:r})=>jt.jsxs("button",{onClick:t,className:`flex items-center gap-2 px-5 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shrink-0 border ${s?"bg-orange-500 text-black border-orange-400":"bg-white/5 text-white/40 border-transparent"}`,children:[n," ",r]}),b_=({label:s,value:t,onChange:n})=>jt.jsxs("div",{className:"bg-white/5 p-4 rounded-2xl border border-white/5",children:[jt.jsx("p",{className:"text-[9px] font-black text-white/40 uppercase tracking-widest mb-1.5",children:s}),jt.jsx("input",{type:"number",value:t,onChange:r=>n(parseInt(r.target.value)||0),className:"bg-transparent text-xl font-black text-white outline-none w-full font-montserrat"})]}),gv=document.getElementById("root");if(!gv)throw new Error("Could not find root element to mount to");const OA=Uy.createRoot(gv);OA.render(jt.jsx(Ey.StrictMode,{children:jt.jsx(NA,{})}));
