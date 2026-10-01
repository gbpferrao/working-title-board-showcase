(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const _e={},Ki=[],Zn=()=>{},Qu=()=>!1,Fa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ba=n=>n.startsWith("onUpdate:"),Ye=Object.assign,rc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},hp=Object.prototype.hasOwnProperty,le=(n,t)=>hp.call(n,t),Xt=Array.isArray,Oi=n=>Rr(n)==="[object Map]",ba=n=>Rr(n)==="[object Set]",sh=n=>Rr(n)==="[object Date]",Zt=n=>typeof n=="function",Ae=n=>typeof n=="string",Qn=n=>typeof n=="symbol",fe=n=>n!==null&&typeof n=="object",ju=n=>(fe(n)||Zt(n))&&Zt(n.then)&&Zt(n.catch),td=Object.prototype.toString,Rr=n=>td.call(n),up=n=>Rr(n).slice(8,-1),ed=n=>Rr(n)==="[object Object]",ac=n=>Ae(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,er=sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ha=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},dp=/-\w/g,wn=Ha(n=>n.replace(dp,t=>t.slice(1).toUpperCase())),fp=/\B([A-Z])/g,rs=Ha(n=>n.replace(fp,"-$1").toLowerCase()),nd=Ha(n=>n.charAt(0).toUpperCase()+n.slice(1)),eo=Ha(n=>n?`on${nd(n)}`:""),Wn=(n,t)=>!Object.is(n,t),no=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},id=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},pp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let rh;const za=()=>rh||(rh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ga(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ae(i)?vp(i):Ga(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ae(n)||fe(n))return n}const mp=/;(?![^(]*\))/g,gp=/:([^]+)/,_p=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function vp(n){const t={};return n.replace(_p,e=>e.startsWith("/*")?"":e).split(mp).forEach(e=>{if(e){const i=e.split(gp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ka(n){let t="";if(Ae(n))t=n;else if(Xt(n))for(let e=0;e<n.length;e++){const i=ka(n[e]);i&&(t+=i+" ")}else if(fe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const xp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sp=sc(xp);function sd(n){return!!n||n===""}function Mp(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Va(n[s],t[s],e);return i}function ah(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let a=-1;for(let o=0;o<i.length;o++)if(!s[o]&&Va(r,i[o],e)){a=o;break}if(a<0)return!1;s[a]=1}return!0}function yp(n,t,e){let i=Oi(n),s=Oi(t);if(i||s||(i=ba(n),s=ba(t),i||s))return i&&s?ah(n,t,e):!1;const r=Object.keys(n).length,a=Object.keys(t).length;if(r!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=t.hasOwnProperty(o);if(l&&!c||!l&&c||!Va(n[o],t[o],e))return!1}return String(n)===String(t)}function oh(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const a=i(n,t,e);return s.delete(n),r.delete(t),a}function Va(n,t,e){if(n===t)return!0;let i=sh(n),s=sh(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=Qn(n),s=Qn(t),i||s?n===t:(i=Xt(n),s=Xt(t),i||s?i&&s?oh(n,t,e,Mp):!1:(i=fe(n),s=fe(t),i||s?!i||!s?!1:oh(n,t,e,yp):String(n)===String(t))))}const rd=n=>!!(n&&n.__v_isRef===!0),ad=n=>Ae(n)?n:n==null?"":Xt(n)||fe(n)&&(n.toString===td||!Zt(n.toString))?rd(n)?ad(n.value):JSON.stringify(n,od,2):String(n),od=(n,t)=>rd(t)?od(n,t.value):Oi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[io(i,r)+" =>"]=s,e),{})}:ba(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>io(e))}:Qn(t)?io(t):fe(t)&&!Xt(t)&&!ed(t)?String(t):t,io=(n,t="")=>{var e;return Qn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class bp{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ne&&(Ne.active?(this.parent=Ne,this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ne;try{return Ne=this,t()}finally{Ne=e}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){if(this._on>0&&--this._on===0){if(Ne===this)Ne=this.prevScope;else{let t=Ne;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ep(){return Ne}let ge;const so=new WeakSet;class ld{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&(Ne.active?Ne.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,so.has(this)&&(so.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lh(this),ud(this);const t=ge,e=Cn;ge=this,Cn=!0;try{return this.fn()}finally{dd(this),ge=t,Cn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)cc(t);this.deps=this.depsTail=void 0,lh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?so.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tl(this)&&this.run()}get dirty(){return tl(this)}}let cd=0,nr,ir;function hd(n,t=!1){if(n.flags|=8,t){n.next=ir,ir=n;return}n.next=nr,nr=n}function oc(){cd++}function lc(){if(--cd>0)return;if(ir){let t=ir;for(ir=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;nr;){let t=nr;for(nr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function ud(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function dd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),cc(i),Tp(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function tl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(fd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function fd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===fr)||(n.globalVersion=fr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!tl(n))))return;n.flags|=2;const t=n.dep,e=ge,i=Cn;ge=n,Cn=!0;try{ud(n);const s=n.fn(n._value);(t.version===0||Wn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ge=e,Cn=i,dd(n),n.flags&=-3}}function cc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)cc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Tp(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Cn=!0;const pd=[];function vi(){pd.push(Cn),Cn=!1}function xi(){const n=pd.pop();Cn=n===void 0?!0:n}function lh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ge;ge=void 0;try{t()}finally{ge=e}}}let fr=0;class Ap{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ge||!Cn||ge===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ge)e=this.activeLink=new Ap(ge,this),ge.deps?(e.prevDep=ge.depsTail,ge.depsTail.nextDep=e,ge.depsTail=e):ge.deps=ge.depsTail=e,md(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ge.depsTail,e.nextDep=void 0,ge.depsTail.nextDep=e,ge.depsTail=e,ge.deps===e&&(ge.deps=i)}return e}trigger(t){this.version++,fr++,this.notify(t)}notify(t){oc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{lc()}}}function md(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)md(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const el=new WeakMap,Ji=Symbol(""),nl=Symbol(""),pr=Symbol("");function ke(n,t,e){if(Cn&&ge){let i=el.get(n);i||el.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new hc),s.map=i,s.key=e),s.track()}}function di(n,t,e,i,s,r){const a=el.get(n);if(!a){fr++;return}const o=l=>{l&&l.trigger()};if(oc(),t==="clear")a.forEach(o);else{const l=Xt(n),c=l&&ac(e);if(l&&e==="length"){const h=Number(i);a.forEach((d,u)=>{(u==="length"||u===pr||!Qn(u)&&u>=h)&&o(d)})}else switch((e!==void 0||a.has(void 0))&&o(a.get(e)),c&&o(a.get(pr)),t){case"add":l?c&&o(a.get("length")):(o(a.get(Ji)),Oi(n)&&o(a.get(nl)));break;case"delete":l||(o(a.get(Ji)),Oi(n)&&o(a.get(nl)));break;case"set":Oi(n)&&o(a.get(Ji));break}}lc()}function cs(n){const t=oe(n);return t===n||(ke(t,"iterate",pr),Rn(n))?t:Si(n)?Qi(n)?t.map(e=>ts(jn(e))):t.map(ts):t.map(jn)}function uc(n){return ke(n=oe(n),"iterate",pr),n}function Gn(n,t){return Si(n)?ts(Qi(n)?jn(t):t):jn(t)}const wp={__proto__:null,[Symbol.iterator](){return ro(this,Symbol.iterator,n=>Gn(this,n))},concat(...n){return cs(this).concat(...n.map(t=>Xt(t)?cs(t):t))},entries(){return ro(this,"entries",n=>(n[1]=Gn(this,n[1]),n))},every(n,t){return ii(this,"every",n,t,void 0,arguments)},filter(n,t){return ii(this,"filter",n,t,e=>e.map(i=>Gn(this,i)),arguments)},find(n,t){return ii(this,"find",n,t,e=>Gn(this,e),arguments)},findIndex(n,t){return ii(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ii(this,"findLast",n,t,e=>Gn(this,e),arguments)},findLastIndex(n,t){return ii(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ii(this,"forEach",n,t,void 0,arguments)},includes(...n){return ao(this,"includes",n)},indexOf(...n){return ao(this,"indexOf",n)},join(n){return cs(this).join(n)},lastIndexOf(...n){return ao(this,"lastIndexOf",n)},map(n,t){return ii(this,"map",n,t,void 0,arguments)},pop(){return zs(this,"pop")},push(...n){return zs(this,"push",n)},reduce(n,...t){return ch(this,"reduce",n,t)},reduceRight(n,...t){return ch(this,"reduceRight",n,t)},shift(){return zs(this,"shift")},some(n,t){return ii(this,"some",n,t,void 0,arguments)},splice(...n){return zs(this,"splice",n)},toReversed(){return cs(this).toReversed()},toSorted(n){return cs(this).toSorted(n)},toSpliced(...n){return cs(this).toSpliced(...n)},unshift(...n){return zs(this,"unshift",n)},values(){return ro(this,"values",n=>Gn(this,n))}};function ro(n,t,e){const i=uc(n),s=i[t]();return i!==n&&!Rn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Cp=Array.prototype;function ii(n,t,e,i,s,r){const a=uc(n),o=a!==n&&!Rn(n),l=a[t];if(l!==Cp[t]){const d=l.apply(n,r);return o?jn(d):d}let c=e;a!==n&&(o?c=function(d,u){return e.call(this,Gn(n,d),u,n)}:e.length>2&&(c=function(d,u){return e.call(this,d,u,n)}));const h=l.call(a,c,i);return o&&s?s(h):h}function ch(n,t,e,i){const s=uc(n),r=s!==n&&!Rn(n);let a=e,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,h,d){return o&&(o=!1,c=Gn(n,c)),e.call(this,c,Gn(n,h),d,n)}):e.length>3&&(a=function(c,h,d){return e.call(this,c,h,d,n)}));const l=s[t](a,...i);return o?Gn(n,l):l}function ao(n,t,e){const i=oe(n);ke(i,"iterate",pr);const s=i[t](...e);return(s===-1||s===!1)&&mc(e[0])?(e[0]=oe(e[0]),i[t](...e)):s}function zs(n,t,e=[]){vi(),oc();const i=oe(n)[t].apply(n,e);return lc(),xi(),i}const Rp=sc("__proto__,__v_isRef,__isVue"),gd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qn));function Pp(n){Qn(n)||(n=String(n));const t=oe(this);return ke(t,"has",n),t.hasOwnProperty(n)}class _d{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?zp:Md:r?Sd:xd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Xt(t);if(!s){let l;if(a&&(l=wp[e]))return l;if(e==="hasOwnProperty")return Pp}const o=Reflect.get(t,e,Xe(t)?t:i);if((Qn(e)?gd.has(e):Rp(e))||(s||ke(t,"get",e),r))return o;if(Xe(o)){const l=a&&ac(e)?o:o.value;return s&&fe(l)?sl(l):l}return fe(o)?s?sl(o):fc(o):o}}class vd extends _d{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const a=Xt(t)&&ac(e);if(!this._isShallow){const c=Si(r);if(!Rn(i)&&!Si(i)&&(r=oe(r),i=oe(i)),!a&&Xe(r)&&!Xe(i))return c||(r.value=i),!0}const o=a?Number(e)<t.length:le(t,e),l=Reflect.set(t,e,i,Xe(t)?t:s);return t===oe(s)&&l&&(o?Wn(i,r)&&di(t,"set",e,i):di(t,"add",e,i)),l}deleteProperty(t,e){const i=le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&di(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Qn(e)||!gd.has(e))&&ke(t,"has",e),i}ownKeys(t){return ke(t,"iterate",Xt(t)?"length":Ji),Reflect.ownKeys(t)}}class Dp extends _d{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Lp=new vd,Ip=new Dp,Np=new vd(!0);const il=n=>n,Or=n=>Reflect.getPrototypeOf(n);function Up(n,t,e){return function(...i){const s=this.__v_raw,r=oe(s),a=Oi(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),h=e?il:t?ts:jn;return!t&&ke(r,"iterate",l?nl:Ji),Ye(Object.create(c),{next(){const{value:d,done:u}=c.next();return u?{value:d,done:u}:{value:o?[h(d[0]),h(d[1])]:h(d),done:u}}})}}function Fr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Op(n,t){const e={get(s){const r=this.__v_raw,a=oe(r),o=oe(s);n||(Wn(s,o)&&ke(a,"get",s),ke(a,"get",o));const{has:l}=Or(a),c=t?il:n?ts:jn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&ke(oe(s),"iterate",Ji),s.size},has(s){const r=this.__v_raw,a=oe(r),o=oe(s);return n||(Wn(s,o)&&ke(a,"has",s),ke(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=oe(o),c=t?il:n?ts:jn;return!n&&ke(l,"iterate",Ji),o.forEach((h,d)=>s.call(r,c(h),c(d),a))}};return Ye(e,n?{add:Fr("add"),set:Fr("set"),delete:Fr("delete"),clear:Fr("clear")}:{add(s){const r=oe(this),a=Or(r),o=oe(s),l=!t&&!Rn(s)&&!Si(s)?o:s;return a.has.call(r,l)||Wn(s,l)&&a.has.call(r,s)||Wn(o,l)&&a.has.call(r,o)||(r.add(l),di(r,"add",l,l)),this},set(s,r){!t&&!Rn(r)&&!Si(r)&&(r=oe(r));const a=oe(this),{has:o,get:l}=Or(a);let c=o.call(a,s);c||(s=oe(s),c=o.call(a,s));const h=l.call(a,s);return a.set(s,r),c?Wn(r,h)&&di(a,"set",s,r):di(a,"add",s,r),this},delete(s){const r=oe(this),{has:a,get:o}=Or(r);let l=a.call(r,s);l||(s=oe(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&di(r,"delete",s,void 0),c},clear(){const s=oe(this),r=s.size!==0,a=s.clear();return r&&di(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Up(s,n,t)}),e}function dc(n,t){const e=Op(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(le(e,s)&&s in i?e:i,s,r)}const Fp={get:dc(!1,!1)},Bp={get:dc(!1,!0)},Hp={get:dc(!0,!1)};const xd=new WeakMap,Sd=new WeakMap,Md=new WeakMap,zp=new WeakMap;function Gp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fc(n){return Si(n)?n:pc(n,!1,Lp,Fp,xd)}function kp(n){return pc(n,!1,Np,Bp,Sd)}function sl(n){return pc(n,!0,Ip,Hp,Md)}function pc(n,t,e,i,s){if(!fe(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=Gp(up(n));if(a===0)return n;const o=new Proxy(n,a===2?i:e);return s.set(n,o),o}function Qi(n){return Si(n)?Qi(n.__v_raw):!!(n&&n.__v_isReactive)}function Si(n){return!!(n&&n.__v_isReadonly)}function Rn(n){return!!(n&&n.__v_isShallow)}function mc(n){return n?!!n.__v_raw:!1}function oe(n){const t=n&&n.__v_raw;return t?oe(t):n}function Vp(n){return!le(n,"__v_skip")&&Object.isExtensible(n)&&id(n,"__v_skip",!0),n}const jn=n=>fe(n)?fc(n):n,ts=n=>fe(n)?sl(n):n;function Xe(n){return n?n.__v_isRef===!0:!1}function wi(n){return Wp(n,!1)}function Wp(n,t){return Xe(n)?n:new Xp(n,t)}class Xp{constructor(t,e){this.dep=new hc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:oe(t),this._value=e?t:jn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Rn(t)||Si(t);t=i?t:oe(t),Wn(t,e)&&(this._rawValue=t,this._value=i?t:jn(t),this.dep.trigger())}}function Yp(n){return Xe(n)?n.value:n}const qp={get:(n,t,e)=>t==="__v_raw"?n:Yp(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Xe(s)&&!Xe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function yd(n){return Qi(n)?n:new Proxy(n,qp)}class Kp{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new hc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return hd(this,!0),!0}get value(){const t=this.dep.track();return fd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Zp(n,t,e=!1){let i,s;return Zt(n)?i=n:(i=n.get,s=n.set),new Kp(i,s,e)}const Br={},Ea=new WeakMap;let qi;function $p(n,t=!1,e=qi){if(e){let i=Ea.get(e);i||Ea.set(e,i=[]),i.push(n)}}function Jp(n,t,e=_e){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=e,c=x=>s?x:Rn(x)||s===!1||s===0?Ni(x,1):Ni(x);let h,d,u,f,_=!1,M=!1;if(Xe(n)?(d=()=>n.value,_=Rn(n)):Qi(n)?(d=()=>c(n),_=!0):Xt(n)?(M=!0,_=n.some(x=>Qi(x)||Rn(x)),d=()=>n.map(x=>{if(Xe(x))return x.value;if(Qi(x))return c(x);if(Zt(x))return l?l(x,2):x()})):Zt(n)?t?d=l?()=>l(n,2):n:d=()=>{if(u){vi();try{u()}finally{xi()}}const x=qi;qi=h;try{return l?l(n,3,[f]):n(f)}finally{qi=x}}:d=Zn,t&&s){const x=d,T=s===!0?1/0:s;d=()=>Ni(x(),T)}const m=Ep(),p=()=>{h.stop(),m&&m.active&&rc(m.effects,h)};if(r&&t){const x=t;t=(...T)=>{const w=x(...T);return p(),w}}let E=M?new Array(n.length).fill(Br):Br;const P=x=>{if(!(!(h.flags&1)||!h.dirty&&!x))if(t){const T=h.run();if(x||s||_||(M?T.some((w,I)=>Wn(w,E[I])):Wn(T,E))){u&&u();const w=qi;qi=h;try{const I=[T,E===Br?void 0:M&&E[0]===Br?[]:E,f];E=T,l?l(t,3,I):t(...I)}finally{qi=w}}}else h.run()};return o&&o(P),h=new ld(d),h.scheduler=a?()=>a(P,!1):P,f=x=>$p(x,!1,h),u=h.onStop=()=>{const x=Ea.get(h);if(x){if(l)l(x,4);else for(const T of x)T();Ea.delete(h)}},t?i?P(!0):E=h.run():a?a(P.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function Ni(n,t=1/0,e){if(t<=0||!fe(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Xe(n))Ni(n.value,t,e);else if(Xt(n))for(let i=0;i<n.length;i++)Ni(n[i],t,e);else if(ba(n)||Oi(n))n.forEach(i=>{Ni(i,t,e)});else if(ed(n)){for(const i in n)Ni(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ni(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pr(n,t,e,i){try{return i?n(...i):n()}catch(s){Wa(s,t,e)}}function Dn(n,t,e,i){if(Zt(n)){const s=Pr(n,t,e,i);return s&&ju(s)&&s.catch(r=>{Wa(r,t,e)}),s}if(Xt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Dn(n[r],t,e,i));return s}}function Wa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||_e;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;o;){const h=o.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](n,l,c)===!1)return}o=o.parent}if(r){vi(),Pr(r,null,10,[n,l,c]),xi();return}}Qp(n,e,s,i,a)}function Qp(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Qe=[];let zn=-1;const Ps=[];let Ii=null,Ts=0;const bd=Promise.resolve();let Ta=null;function jp(n){const t=Ta||bd;return n?t.then(this?n.bind(this):n):t}function tm(n){let t=zn+1,e=Qe.length;for(;t<e;){const i=t+e>>>1,s=Qe[i],r=mr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function gc(n){if(!(n.flags&1)){const t=mr(n),e=Qe[Qe.length-1];!e||!(n.flags&2)&&t>=mr(e)?Qe.push(n):Qe.splice(tm(t),0,n),n.flags|=1,Ed()}}function Ed(){Ta||(Ta=bd.then(Ad))}function em(n){if(!Xt(n))Ii&&n.id===-1?Ii.splice(Ts+1,0,n):n.flags&1||(Ps.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Ps.push(n[t]);Ed()}function hh(n,t,e=zn+1){for(;e<Qe.length;e++){const i=Qe[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Qe.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Td(n){if(Ps.length){const t=[...new Set(Ps)].sort((e,i)=>mr(e)-mr(i));if(Ps.length=0,Ii){for(let e=0;e<t.length;e++)Ii.push(t[e]);return}for(Ii=t,Ts=0;Ts<Ii.length;Ts++){const e=Ii[Ts];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Ii=null,Ts=0}}const mr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ad(n){try{for(zn=0;zn<Qe.length;zn++){const t=Qe[zn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Pr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;zn<Qe.length;zn++){const t=Qe[zn];t&&(t.flags&=-2)}zn=-1,Qe.length=0,Td(),Ta=null,(Qe.length||Ps.length)&&Ad()}}let Xn=null,wd=null;function Aa(n){const t=Xn;return Xn=n,wd=n&&n.type.__scopeId||null,t}function nm(n,t=Xn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Mh(-1);const r=Aa(t),a=ji.length;let o;try{o=n(...s)}finally{for(let l=ji.length;l>a;l--)jd();Aa(r),i._d&&Mh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(vi(),Dn(l,e,8,[n.el,o,n,t]),xi())}}function im(n,t){if(je){let e=je.provides;const i=je.parent&&je.parent.provides;i===e&&(e=je.provides=Object.create(i)),e[n]=t}}function pa(n,t,e=!1){const i=eg();if(i||Ds){let s=Ds?Ds._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Zt(t)?t.call(i&&i.proxy):t}}const sm=Symbol.for("v-scx"),rm=()=>pa(sm);function oo(n,t,e){return Cd(n,t,e)}function Cd(n,t,e=_e){const{immediate:i,deep:s,flush:r,once:a}=e,o=Ye({},e),l=t&&i||!t&&r!=="post";let c;if(vr){if(r==="sync"){const f=rm();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Zn,f.resume=Zn,f.pause=Zn,f}}const h=je;o.call=(f,_,M)=>Dn(f,h,_,M);let d=!1;r==="post"?o.scheduler=f=>{nn(f,h&&h.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(f,_)=>{_?f():gc(f)}),o.augmentJob=f=>{t&&(f.flags|=4),d&&(f.flags|=2,h&&(f.id=h.uid,f.i=h))};const u=Jp(n,t,o);return vr&&(c?c.push(u):l&&u()),u}function am(n,t,e){const i=this.proxy,s=Ae(n)?n.includes(".")?Rd(i,n):()=>i[n]:n.bind(i,i);let r;Zt(t)?r=t:(r=t.handler,e=t);const a=Dr(this),o=Cd(s,r.bind(i),e);return a(),o}function Rd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const om=Symbol("_vte"),Xa=n=>n.__isTeleport,lo=Symbol("_leaveCb");function lm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Mi){t=e;break}}return t}function Pd(n){if(!vc(n))return Xa(n.type)&&n.children?lm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Zt(e.default))return e.default()}}function _c(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;_c(Xa(e.type)&&Pd(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Dd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function uh(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const wa=new WeakMap;function sr(n,t,e,i,s=!1){if(Xt(n)){n.forEach((M,m)=>sr(M,t&&(Xt(t)?t[m]:t),e,i,s));return}if(rr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&sr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Mc(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=t&&t.r,h=o.refs===_e?o.refs={}:o.refs,d=o.setupState,u=oe(d),f=d===_e?Qu:M=>uh(h,M)?!1:le(u,M),_=(M,m)=>!(m&&uh(h,m));if(c!=null&&c!==l){if(dh(t),Ae(c))h[c]=null,f(c)&&(d[c]=null);else if(Xe(c)){const M=t;_(c,M.k)&&(c.value=null),M.k&&(h[M.k]=null)}}if(Zt(l))Pr(l,o,12,[a,h]);else{const M=Ae(l),m=Xe(l);if(M||m){const p=()=>{if(n.f){const E=M?f(l)?d[l]:h[l]:_()||!n.k?l.value:h[n.k];if(s)Xt(E)&&rc(E,r);else if(Xt(E))E.includes(r)||E.push(r);else if(M)h[l]=[r],f(l)&&(d[l]=h[l]);else{const P=[r];_(l,n.k)&&(l.value=P),n.k&&(h[n.k]=P)}}else M?(h[l]=a,f(l)&&(d[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(h[n.k]=a))};if(a){const E=()=>{p(),wa.delete(n)};E.id=-1,wa.set(n,E),nn(E,e)}else dh(n),p()}}}function dh(n){const t=wa.get(n);t&&(t.flags|=8,wa.delete(n))}za().requestIdleCallback;za().cancelIdleCallback;const rr=n=>!!n.type.__asyncLoader,vc=n=>n.type.__isKeepAlive;function cm(n,t){Ld(n,"a",t)}function hm(n,t){Ld(n,"da",t)}function Ld(n,t,e=je){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ya(t,i,e),e){let s=e.parent;for(;s&&s.parent;)vc(s.parent.vnode)&&um(i,t,e,s),s=s.parent}}function um(n,t,e,i){const s=Ya(t,n,i,!0);Ud(()=>{rc(i[t],s)},e)}function Ya(n,t,e=je,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...a)=>{vi();const o=Dr(e),l=Dn(t,e,n,a);return o(),xi(),l});return i?s.unshift(r):s.push(r),r}}const bi=n=>(t,e=je)=>{(!vr||n==="sp")&&Ya(n,(...i)=>t(...i),e)},dm=bi("bm"),Id=bi("m"),fm=bi("bu"),pm=bi("u"),Nd=bi("bum"),Ud=bi("um"),mm=bi("sp"),gm=bi("rtg"),_m=bi("rtc");function vm(n,t=je){Ya("ec",n,t)}const xm=Symbol.for("v-ndc"),rl=n=>n?sf(n)?Mc(n):rl(n.parent):null,ar=Ye(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>rl(n.parent),$root:n=>rl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fd(n),$forceUpdate:n=>n.f||(n.f=()=>{gc(n.update)}),$nextTick:n=>n.n||(n.n=jp.bind(n.proxy)),$watch:n=>am.bind(n)}),co=(n,t)=>n!==_e&&!n.__isScriptSetup&&le(n,t),Sm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(t[0]!=="$"){const u=a[t];if(u!==void 0)switch(u){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(co(i,t))return a[t]=1,i[t];if(s!==_e&&le(s,t))return a[t]=2,s[t];if(le(r,t))return a[t]=3,r[t];if(e!==_e&&le(e,t))return a[t]=4,e[t];al&&(a[t]=0)}}const c=ar[t];let h,d;if(c)return t==="$attrs"&&ke(n.attrs,"get",""),c(n);if((h=o.__cssModules)&&(h=h[t]))return h;if(e!==_e&&le(e,t))return a[t]=4,e[t];if(d=l.config.globalProperties,le(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return co(s,t)?(s[t]=e,!0):i!==_e&&le(i,t)?(i[t]=e,!0):le(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(e[o]||n!==_e&&o[0]!=="$"&&le(n,o)||co(t,o)||le(r,o)||le(i,o)||le(ar,o)||le(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:le(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function fh(n){return Xt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let al=!0;function Mm(n){const t=Fd(n),e=n.proxy,i=n.ctx;al=!1,t.beforeCreate&&ph(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:h,beforeMount:d,mounted:u,beforeUpdate:f,updated:_,activated:M,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:P,unmounted:x,render:T,renderTracked:w,renderTriggered:I,errorCaptured:v,serverPrefetch:b,expose:R,inheritAttrs:D,components:V,directives:Y,filters:H}=t;if(c&&ym(c,i,null),a)for(const q in a){const at=a[q];Zt(at)&&(i[q]=at.bind(e))}if(s){const q=s.call(e,e);fe(q)&&(n.data=fc(q))}if(al=!0,r)for(const q in r){const at=r[q],nt=Zt(at)?at.bind(e,e):Zt(at.get)?at.get.bind(e,e):Zn,ct=!Zt(at)&&Zt(at.set)?at.set.bind(e):Zn,lt=og({get:nt,set:ct});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>lt.value,set:wt=>lt.value=wt})}if(o)for(const q in o)Od(o[q],i,e,q);if(l){const q=Zt(l)?l.call(e):l;Reflect.ownKeys(q).forEach(at=>{im(at,q[at])})}h&&ph(h,n,"c");function j(q,at){Xt(at)?at.forEach(nt=>q(nt.bind(e))):at&&q(at.bind(e))}if(j(dm,d),j(Id,u),j(fm,f),j(pm,_),j(cm,M),j(hm,m),j(vm,v),j(_m,w),j(gm,I),j(Nd,E),j(Ud,x),j(mm,b),Xt(R))if(R.length){const q=n.exposed||(n.exposed={});R.forEach(at=>{Object.defineProperty(q,at,{get:()=>e[at],set:nt=>e[at]=nt,enumerable:!0})})}else n.exposed||(n.exposed={});T&&n.render===Zn&&(n.render=T),D!=null&&(n.inheritAttrs=D),V&&(n.components=V),Y&&(n.directives=Y),b&&Dd(n)}function ym(n,t,e=Zn){Xt(n)&&(n=ol(n));for(const i in n){const s=n[i];let r;fe(s)?"default"in s?r=pa(s.from||i,s.default,!0):r=pa(s.from||i):r=pa(s),Xe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[i]=r}}function ph(n,t,e){Dn(Xt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Od(n,t,e,i){let s=i.includes(".")?Rd(e,i):()=>e[i];if(Ae(n)){const r=t[n];Zt(r)&&oo(s,r)}else if(Zt(n))oo(s,n.bind(e));else if(fe(n))if(Xt(n))n.forEach(r=>Od(r,t,e,i));else{const r=Zt(n.handler)?n.handler.bind(e):t[n.handler];Zt(r)&&oo(s,r,n)}}function Fd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Ca(l,c,a,!0)),Ca(l,t,a)),fe(t)&&r.set(t,l),l}function Ca(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Ca(n,r,e,!0),s&&s.forEach(a=>Ca(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=bm[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const bm={data:mh,props:gh,emits:gh,methods:$s,computed:$s,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:$s,directives:$s,watch:Tm,provide:mh,inject:Em};function mh(n,t){return t?n?function(){return Ye(Zt(n)?n.call(this,this):n,Zt(t)?t.call(this,this):t)}:t:n}function Em(n,t){return $s(ol(n),ol(t))}function ol(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ke(n,t){return n?[...new Set([].concat(n,t))]:t}function $s(n,t){return n?Ye(Object.create(null),n,t):t}function gh(n,t){return n?Xt(n)&&Xt(t)?[...new Set([...n,...t])]:Ye(Object.create(null),fh(n),fh(t??{})):t}function Tm(n,t){if(!n)return t;if(!t)return n;const e=Ye(Object.create(null),n);for(const i in t)e[i]=Ke(n[i],t[i]);return e}function Bd(){return{app:null,config:{isNativeTag:Qu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Am=0;function wm(n,t){return function(i,s=null){Zt(i)||(i=Ye({},i)),s!=null&&!fe(s)&&(s=null);const r=Bd(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:Am++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:lg,get config(){return r.config},set config(h){},use(h,...d){return a.has(h)||(h&&Zt(h.install)?(a.add(h),h.install(c,...d)):Zt(h)&&(a.add(h),h(c,...d))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,d){return d?(r.components[h]=d,c):r.components[h]},directive(h,d){return d?(r.directives[h]=d,c):r.directives[h]},mount(h,d,u){if(!l){const f=c._ceVNode||mi(i,s);return f.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),n(f,h,u),l=!0,c._container=h,h.__vue_app__=c,Mc(f.component)}},onUnmount(h){o.push(h)},unmount(){l&&(Dn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,d){return r.provides[h]=d,c},runWithContext(h){const d=Ds;Ds=c;try{return h()}finally{Ds=d}}};return c}}let Ds=null;const Cm=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${wn(t)}Modifiers`]||n[`${rs(t)}Modifiers`];function Rm(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||_e;let s=e;const r=t.startsWith("update:"),a=r&&Cm(i,t.slice(7));a&&(a.trim&&(s=e.map(h=>Ae(h)?h.trim():h)),a.number&&(s=s.map(pp)));let o,l=i[o=eo(t)]||i[o=eo(wn(t))];!l&&r&&(l=i[o=eo(rs(t))]),l&&Dn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Dn(c,n,6,s)}}const Pm=new WeakMap;function Hd(n,t,e=!1){const i=e?Pm:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Zt(n)){const l=c=>{const h=Hd(c,t,!0);h&&(o=!0,Ye(a,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(fe(n)&&i.set(n,null),null):(Xt(r)?r.forEach(l=>a[l]=null):Ye(a,r),fe(n)&&i.set(n,a),a)}function qa(n,t){return!n||!Fa(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),le(n,t[0].toLowerCase()+t.slice(1))||le(n,rs(t))||le(n,t))}function _h(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:h,props:d,data:u,setupState:f,ctx:_,inheritAttrs:M}=n,m=Aa(n);let p,E;try{if(e.shapeFlag&4){const x=s||i,T=x;p=kn(c.call(T,x,h,d,f,u,_)),E=o}else{const x=t;p=kn(x.length>1?x(d,{attrs:o,slots:a,emit:l}):x(d,null)),E=t.props?o:Dm(o)}}catch(x){ji.length=0,Wa(x,n,1),p=mi(Mi)}let P=p;if(E&&M!==!1){const x=Object.keys(E),{shapeFlag:T}=P;x.length&&T&7&&(r&&x.some(Ba)&&(E=Lm(E,r)),P=Ns(P,E,!1,!0))}if(e.dirs&&(P=Ns(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(e.dirs):e.dirs),e.transition){const x=Xa(P.type)&&Pd(P)||P;_c(x,e.transition)}return p=P,Aa(m),p}const Dm=n=>{let t;for(const e in n)(e==="class"||e==="style"||Fa(e))&&((t||(t={}))[e]=n[e]);return t},Lm=(n,t)=>{const e={};for(const i in n)(!Ba(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Im(n,t,e){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?vh(i,a,c):!!a;if(l&8){const h=t.dynamicProps;for(let d=0;d<h.length;d++){const u=h[d];if(zd(a,i,u)&&!qa(c,u))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?vh(i,a,c):!0:!!a;return!1}function vh(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(zd(t,n,r)&&!qa(e,r))return!0}return!1}function zd(n,t,e){const i=n[e],s=t[e];return e==="style"&&fe(i)&&fe(s)?!Va(i,s):i!==s}function Nm({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Gd={},kd=()=>Object.create(Gd),Vd=n=>Object.getPrototypeOf(n)===Gd;function Um(n,t,e,i=!1){const s={},r=kd();n.propsDefaults=Object.create(null),Wd(n,t,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);e?n.props=i?s:kp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Om(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=oe(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let u=h[d];if(qa(n.emitsOptions,u))continue;const f=t[u];if(l)if(le(r,u))f!==r[u]&&(r[u]=f,c=!0);else{const _=wn(u);s[_]=ll(l,o,_,f,n,!1)}else f!==r[u]&&(r[u]=f,c=!0)}}}else{Wd(n,t,s,r)&&(c=!0);let h;for(const d in o)(!t||!le(t,d)&&((h=rs(d))===d||!le(t,h)))&&(l?e&&(e[d]!==void 0||e[h]!==void 0)&&(s[d]=ll(l,o,d,void 0,n,!0)):delete s[d]);if(r!==o)for(const d in r)(!t||!le(t,d))&&(delete r[d],c=!0)}c&&di(n.attrs,"set","")}function Wd(n,t,e,i){const[s,r]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(er(l))continue;const c=t[l];let h;s&&le(s,h=wn(l))?!r||!r.includes(h)?e[h]=c:(o||(o={}))[h]=c:qa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=oe(e),c=o||_e;for(let h=0;h<r.length;h++){const d=r[h];e[d]=ll(s,l,d,c[d],n,!le(c,d))}}return a}function ll(n,t,e,i,s,r){const a=n[e];if(a!=null){const o=le(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Zt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=Dr(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===rs(e))&&(i=!0))}return i}const Fm=new WeakMap;function Xd(n,t,e=!1){const i=e?Fm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Zt(n)){const h=d=>{l=!0;const[u,f]=Xd(d,t,!0);Ye(a,u),f&&o.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return fe(n)&&i.set(n,Ki),Ki;if(Xt(r))for(let h=0;h<r.length;h++){const d=wn(r[h]);xh(d)&&(a[d]=_e)}else if(r)for(const h in r){const d=wn(h);if(xh(d)){const u=r[h],f=a[d]=Xt(u)||Zt(u)?{type:u}:Ye({},u),_=f.type;let M=!1,m=!0;if(Xt(_))for(let p=0;p<_.length;++p){const E=_[p],P=Zt(E)&&E.name;if(P==="Boolean"){M=!0;break}else P==="String"&&(m=!1)}else M=Zt(_)&&_.name==="Boolean";f[0]=M,f[1]=m,(M||le(f,"default"))&&o.push(d)}}const c=[a,o];return fe(n)&&i.set(n,c),c}function xh(n){return n[0]!=="$"&&!er(n)}const xc=n=>n==="_"||n==="_ctx"||n==="$stable",Sc=n=>Xt(n)?n.map(kn):[kn(n)],Bm=(n,t,e)=>{if(t._n)return t;const i=nm((...s)=>Sc(t(...s)),e);return i._c=!1,i},Yd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(xc(s))continue;const r=n[s];if(Zt(r))t[s]=Bm(s,r,i);else if(r!=null){const a=Sc(r);t[s]=()=>a}}},qd=(n,t)=>{const e=Sc(t);n.slots.default=()=>e},Kd=(n,t,e)=>{for(const i in t)(e||!xc(i))&&(n[i]=t[i])},Hm=(n,t,e)=>{const i=n.slots=kd();if(n.vnode.shapeFlag&32){const s=t._;s?(Kd(i,t,e),e&&id(i,"_",s,!0)):Yd(t,i)}else t&&qd(n,t)},zm=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,a=_e;if(i.shapeFlag&32){const o=t._;o?e&&o===1?r=!1:Kd(s,t,e):(r=!t.$stable,Yd(t,s)),a=t}else t&&(qd(n,t),a={default:1});if(r)for(const o in s)!xc(o)&&a[o]==null&&delete s[o]},nn=Xm;function Gm(n){return km(n)}function km(n,t){const e=za();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:h,parentNode:d,nextSibling:u,setScopeId:f=Zn,insertStaticContent:_}=n,M=(A,N,L,z=null,B=null,G=null,$=void 0,ot=null,st=!!N.dynamicChildren)=>{if(A===N)return;A&&!Gs(A,N)&&(z=it(A),wt(A,B,G,!0),A=null),N.patchFlag===-2&&(st=!1,N.dynamicChildren=null),N.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(N.dynamicChildren===Ki&&(N.dynamicChildren=[]),N.dynamicChildren.hasOnce=!0);const{type:J,ref:pt,shapeFlag:C}=N;switch(J){case Ka:m(A,N,L,z);break;case Mi:p(A,N,L,z);break;case uo:A==null&&E(N,L,z,$);break;case hi:V(A,N,L,z,B,G,$,ot,st);break;default:C&1?T(A,N,L,z,B,G,$,ot,st):C&6?Y(A,N,L,z,B,G,$,ot,st):(C&64||C&128)&&J.process(A,N,L,z,B,G,$,ot,st,Ht)}pt!=null&&B?sr(pt,A&&A.ref,G,N||A,!N):pt==null&&A&&A.ref!=null&&sr(A.ref,null,G,A,!0)},m=(A,N,L,z)=>{if(A==null)i(N.el=o(N.children),L,z);else{const B=N.el=A.el;N.children!==A.children&&c(B,N.children)}},p=(A,N,L,z)=>{A==null?i(N.el=l(N.children||""),L,z):N.el=A.el},E=(A,N,L,z)=>{[A.el,A.anchor]=_(A.children,N,L,z,A.el,A.anchor)},P=({el:A,anchor:N},L,z)=>{let B;for(;A&&A!==N;)B=u(A),i(A,L,z),A=B;i(N,L,z)},x=({el:A,anchor:N})=>{let L;for(;A&&A!==N;)L=u(A),s(A),A=L;s(N)},T=(A,N,L,z,B,G,$,ot,st)=>{if(N.type==="svg"?$="svg":N.type==="math"&&($="mathml"),A==null)w(N,L,z,B,G,$,ot,st);else{const J=A.el&&A.el._isVueCE?A.el:null;try{J&&J._beginPatch(),b(A,N,B,G,$,ot,st)}finally{J&&J._endPatch()}}},w=(A,N,L,z,B,G,$,ot)=>{let st,J;const{props:pt,shapeFlag:C,transition:xt,dirs:St}=A;if(st=A.el=a(A.type,G,pt&&pt.is,pt),C&8?h(st,A.children):C&16&&v(A.children,st,null,z,B,ho(A,G),$,ot),St&&zi(A,null,z,"created"),I(st,A,A.scopeId,$,z),pt){for(const g in pt)g!=="value"&&!er(g)&&r(st,g,null,pt[g],G,z);"value"in pt&&r(st,"value",null,pt.value,G),(J=pt.onVnodeBeforeMount)&&Un(J,z,A)}St&&zi(A,null,z,"beforeMount");const y=Vm(B,xt);y&&xt.beforeEnter(st),i(st,N,L),((J=pt&&pt.onVnodeMounted)||y||St)&&nn(()=>{try{J&&Un(J,z,A),y&&xt.enter(st),St&&zi(A,null,z,"mounted")}finally{}},B)},I=(A,N,L,z,B)=>{if(L&&f(A,L),z)for(let G=0;G<z.length;G++)f(A,z[G]);if(B){let G=B.subTree;if(N===G||Qd(G.type)&&(G.ssContent===N||G.ssFallback===N)){const $=B.vnode;I(A,$,$.scopeId,$.slotScopeIds,B.parent)}}},v=(A,N,L,z,B,G,$,ot,st=0)=>{for(let J=st;J<A.length;J++){const pt=A[J]=ot?ui(A[J]):kn(A[J]);M(null,pt,N,L,z,B,G,$,ot)}},b=(A,N,L,z,B,G,$)=>{const ot=N.el=A.el;let{patchFlag:st,dynamicChildren:J,dirs:pt}=N;st|=A.patchFlag&16;const C=A.props||_e,xt=N.props||_e;let St;if(L&&Gi(L,!1),(St=xt.onVnodeBeforeUpdate)&&Un(St,L,N,A),pt&&zi(N,A,L,"beforeUpdate"),L&&Gi(L,!0),J&&(!A.dynamicChildren||A.dynamicChildren.length!==J.length)&&(st=0,$=!1,J=null),(C.innerHTML&&xt.innerHTML==null||C.textContent&&xt.textContent==null)&&h(ot,""),J?R(A.dynamicChildren,J,ot,L,z,ho(N,B),G):$||at(A,N,ot,null,L,z,ho(N,B),G,!1),st>0){if(st&16)D(ot,C,xt,L,B);else if(st&2&&C.class!==xt.class&&r(ot,"class",null,xt.class,B),st&4&&r(ot,"style",C.style,xt.style,B),st&8){const y=N.dynamicProps;for(let g=0;g<y.length;g++){const O=y[g],W=C[O],Q=xt[O];(Q!==W||O==="value")&&r(ot,O,W,Q,B,L)}}st&1&&A.children!==N.children&&h(ot,N.children)}else!$&&J==null&&D(ot,C,xt,L,B);((St=xt.onVnodeUpdated)||pt)&&nn(()=>{St&&Un(St,L,N,A),pt&&zi(N,A,L,"updated")},z)},R=(A,N,L,z,B,G,$)=>{for(let ot=0;ot<N.length;ot++){const st=A[ot],J=N[ot],pt=st.el&&(st.type===hi||!Gs(st,J)||st.shapeFlag&198)?d(st.el):L;M(st,J,pt,null,z,B,G,$,!0)}},D=(A,N,L,z,B)=>{if(N!==L){if(N!==_e)for(const G in N)!er(G)&&!(G in L)&&r(A,G,N[G],null,B,z);for(const G in L){if(er(G))continue;const $=L[G],ot=N[G];$!==ot&&G!=="value"&&r(A,G,ot,$,B,z)}"value"in L&&r(A,"value",N.value,L.value,B)}},V=(A,N,L,z,B,G,$,ot,st)=>{const J=N.el=A?A.el:o(""),pt=N.anchor=A?A.anchor:o("");let{patchFlag:C,dynamicChildren:xt,slotScopeIds:St}=N;St&&(ot=ot?ot.concat(St):St),A==null?(i(J,L,z),i(pt,L,z),v(N.children||[],L,pt,B,G,$,ot,st)):C>0&&C&64&&xt&&A.dynamicChildren&&A.dynamicChildren.length===xt.length?(R(A.dynamicChildren,xt,L,B,G,$,ot),(N.key!=null||B&&N===B.subTree)&&Zd(A,N,!0)):at(A,N,L,pt,B,G,$,ot,st)},Y=(A,N,L,z,B,G,$,ot,st)=>{N.slotScopeIds=ot,A==null?N.shapeFlag&512?B.ctx.activate(N,L,z,$,st):H(N,L,z,B,G,$,st):X(A,N,st)},H=(A,N,L,z,B,G,$)=>{const ot=A.component=tg(A,z,B);if(vc(A)&&(ot.ctx.renderer=Ht),ng(ot,!1,$),ot.asyncDep){if(B&&B.registerDep(ot,j,$),!A.el){const st=ot.subTree=mi(Mi);p(null,st,N,L),A.placeholder=st.el}}else j(ot,A,N,L,B,G,$)},X=(A,N,L)=>{const z=N.component=A.component;if(Im(A,N,L))if(z.asyncDep&&!z.asyncResolved){N.el=A.el,q(z,N,L);return}else z.next=N,z.update();else N.el=A.el,z.vnode=N},j=(A,N,L,z,B,G,$)=>{const ot=()=>{if(A.isMounted){let{next:C,bu:xt,u:St,parent:y,vnode:g}=A;{const mt=$d(A);if(mt){C&&(C.el=g.el,q(A,C,$)),mt.asyncDep.then(()=>{nn(()=>{A.isUnmounted||J()},B)});return}}let O=C,W;Gi(A,!1),C?(C.el=g.el,q(A,C,$)):C=g,xt&&no(xt),(W=C.props&&C.props.onVnodeBeforeUpdate)&&Un(W,y,C,g),Gi(A,!0);const Q=_h(A),ft=A.subTree;A.subTree=Q,M(ft,Q,d(ft.el),it(ft),A,B,G),C.el=Q.el,O===null&&Nm(A,Q.el),St&&nn(St,B),(W=C.props&&C.props.onVnodeUpdated)&&nn(()=>Un(W,y,C,g),B)}else{let C;const{el:xt,props:St}=N,{bm:y,m:g,parent:O,root:W,type:Q}=A,ft=rr(N);Gi(A,!1),y&&no(y),!ft&&(C=St&&St.onVnodeBeforeMount)&&Un(C,O,N),Gi(A,!0);{W.ce&&W.ce._hasShadowRoot()&&W.ce._injectChildStyle(Q,A.parent?A.parent.type:void 0);const mt=A.subTree=_h(A);M(null,mt,L,z,A,B,G),N.el=mt.el}if(g&&nn(g,B),!ft&&(C=St&&St.onVnodeMounted)){const mt=N;nn(()=>Un(C,O,mt),B)}(N.shapeFlag&256||O&&rr(O.vnode)&&O.vnode.shapeFlag&256)&&A.a&&nn(A.a,B),A.isMounted=!0,N=L=z=null}};A.scope.on();const st=A.effect=new ld(ot);A.scope.off();const J=A.update=st.run.bind(st),pt=A.job=st.runIfDirty.bind(st);pt.i=A,pt.id=A.uid,st.scheduler=()=>gc(pt),Gi(A,!0),J()},q=(A,N,L)=>{N.component=A;const z=A.vnode.props;A.vnode=N,A.next=null,Om(A,N.props,z,L),zm(A,N.children,L),vi(),hh(A),xi()},at=(A,N,L,z,B,G,$,ot,st=!1)=>{const J=A&&A.children,pt=A?A.shapeFlag:0,C=N.children,{patchFlag:xt,shapeFlag:St}=N;if(xt>0){if(xt&128){ct(J,C,L,z,B,G,$,ot,st);return}else if(xt&256){nt(J,C,L,z,B,G,$,ot,st);return}}St&8?(pt&16&&qt(J,B,G),C!==J&&h(L,C)):pt&16?St&16?ct(J,C,L,z,B,G,$,ot,st):qt(J,B,G,!0):(pt&8&&h(L,""),St&16&&v(C,L,z,B,G,$,ot,st))},nt=(A,N,L,z,B,G,$,ot,st)=>{A=A||Ki,N=N||Ki;const J=A.length,pt=N.length,C=Math.min(J,pt);let xt;for(xt=0;xt<C;xt++){const St=N[xt]=st?ui(N[xt]):kn(N[xt]);M(A[xt],St,L,null,B,G,$,ot,st)}J>pt?qt(A,B,G,!0,!1,C):v(N,L,z,B,G,$,ot,st,C)},ct=(A,N,L,z,B,G,$,ot,st)=>{let J=0;const pt=N.length;let C=A.length-1,xt=pt-1;for(;J<=C&&J<=xt;){const St=A[J],y=N[J]=st?ui(N[J]):kn(N[J]);if(Gs(St,y))M(St,y,L,null,B,G,$,ot,st);else break;J++}for(;J<=C&&J<=xt;){const St=A[C],y=N[xt]=st?ui(N[xt]):kn(N[xt]);if(Gs(St,y))M(St,y,L,null,B,G,$,ot,st);else break;C--,xt--}if(J>C){if(J<=xt){const St=xt+1,y=St<pt?N[St].el:z;for(;J<=xt;)M(null,N[J]=st?ui(N[J]):kn(N[J]),L,y,B,G,$,ot,st),J++}}else if(J>xt)for(;J<=C;)wt(A[J],B,G,!0),J++;else{const St=J,y=J,g=new Map;for(J=y;J<=xt;J++){const _t=N[J]=st?ui(N[J]):kn(N[J]);_t.key!=null&&g.set(_t.key,J)}let O,W=0;const Q=xt-y+1;let ft=!1,mt=0;const rt=new Array(Q);for(J=0;J<Q;J++)rt[J]=0;for(J=St;J<=C;J++){const _t=A[J];if(W>=Q){wt(_t,B,G,!0);continue}let Lt;if(_t.key!=null)Lt=g.get(_t.key);else for(O=y;O<=xt;O++)if(rt[O-y]===0&&Gs(_t,N[O])){Lt=O;break}Lt===void 0?wt(_t,B,G,!0):(rt[Lt-y]=J+1,Lt>=mt?mt=Lt:ft=!0,M(_t,N[Lt],L,null,B,G,$,ot,st),W++)}const ht=ft?Wm(rt):Ki;for(O=ht.length-1,J=Q-1;J>=0;J--){const _t=y+J,Lt=N[_t],yt=N[_t+1],Mt=_t+1<pt?yt.el||Jd(yt):z;rt[J]===0?M(null,Lt,L,Mt,B,G,$,ot,st):ft&&(O<0||J!==ht[O]?lt(Lt,L,Mt,2):O--)}}},lt=(A,N,L,z,B=null)=>{const{el:G,type:$,transition:ot,children:st,shapeFlag:J}=A;if(J&6){lt(A.component.subTree,N,L,z);return}if(J&128){A.suspense.move(N,L,z);return}if(J&64){$.move(A,N,L,Ht);return}if($===hi){i(G,N,L);for(let C=0;C<st.length;C++)lt(st[C],N,L,z);i(A.anchor,N,L);return}if($===uo){P(A,N,L);return}if(z!==2&&J&1&&ot)if(z===0)ot.persisted&&!G[lo]?i(G,N,L):(ot.beforeEnter(G),i(G,N,L),nn(()=>ot.enter(G),B));else{const{leave:C,delayLeave:xt,afterLeave:St}=ot,y=()=>{A.ctx.isUnmounted?s(G):i(G,N,L)},g=()=>{const O=G._isLeaving||!!G[lo];G._isLeaving&&G[lo](!0),ot.persisted&&!O?y():C(G,()=>{y(),St&&St()})};xt?xt(G,y,g):g()}else i(G,N,L)},wt=(A,N,L,z=!1,B=!1)=>{const{type:G,props:$,ref:ot,children:st,dynamicChildren:J,shapeFlag:pt,patchFlag:C,dirs:xt,cacheIndex:St,memo:y}=A;if((C===-2||J&&J.hasOnce)&&(B=!1),ot!=null&&(vi(),sr(ot,null,L,A,!0),xi()),St!=null&&(!A.ctx||A.ctx===N)&&(N.renderCache[St]=void 0),pt&256){N.ctx.deactivate(A);return}const g=pt&1&&xt,O=!rr(A);let W;if(O&&(W=$&&$.onVnodeBeforeUnmount)&&Un(W,N,A),pt&6)Yt(A.component,L,z);else{if(pt&128){A.suspense.unmount(L,z);return}g&&zi(A,null,N,"beforeUnmount"),pt&64?A.type.remove(A,N,L,Ht,z):J&&!J.hasOnce&&(G!==hi||C>0&&C&64)?qt(J,N,L,!1,!0):(G===hi&&C&384||!B&&pt&16)&&qt(st,N,L),z&&Dt(A)}const Q=y!=null&&St==null;(O&&(W=$&&$.onVnodeUnmounted)||g||Q)&&nn(()=>{W&&Un(W,N,A),g&&zi(A,null,N,"unmounted"),Q&&(A.el=null)},L)},Dt=A=>{const{type:N,el:L,anchor:z,transition:B}=A;if(N===hi){te(L,z);return}if(N===uo){x(A),B&&!B.persisted&&B.afterLeave&&B.afterLeave();return}const G=()=>{s(L),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(A.shapeFlag&1&&B&&!B.persisted){const{leave:$,delayLeave:ot}=B,st=()=>$(L,G);ot?ot(A.el,G,st):st()}else G()},te=(A,N)=>{let L;for(;A!==N;)L=u(A),s(A),A=L;s(N)},Yt=(A,N,L)=>{const{bum:z,scope:B,job:G,subTree:$,um:ot,m:st,a:J}=A;Sh(st),Sh(J),z&&no(z),B.stop(),G?(G.flags|=8,wt($,A,N,L)):A.vnode.el&&$&&($.transition=A.vnode.transition,wt($,A,N,L)),ot&&nn(ot,N),nn(()=>{A.isUnmounted=!0},N)},qt=(A,N,L,z=!1,B=!1,G=0)=>{for(let $=G;$<A.length;$++)wt(A[$],N,L,z,B)},it=A=>{if(A.shapeFlag&6)return it(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const N=u(A.anchor||A.el),L=N&&N[om];return L?u(L):N};let tt=!1;const vt=(A,N,L)=>{let z;A==null?N._vnode&&(wt(N._vnode,null,null,!0),z=N._vnode.component):M(N._vnode||null,A,N,null,null,null,L),N._vnode=A,tt||(tt=!0,hh(z),Td(),tt=!1)},Ht={p:M,um:wt,m:lt,r:Dt,mt:H,mc:v,pc:at,pbc:R,n:it,o:n};return{render:vt,hydrate:void 0,createApp:wm(vt)}}function ho({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Gi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Vm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Zd(n,t,e=!1){const i=n.children,s=t.children;if(Xt(i)&&Xt(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ui(s[r]),o.el=a.el),!e&&o.patchFlag!==-2&&Zd(a,o)),o.type===Ka&&(o.patchFlag===-1&&(o=s[r]=ui(o)),o.el=a.el),o.type===Mi&&!o.el&&(o.el=a.el)}}function Wm(n){const t=n.slice(),e=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,a=e.length-1;r<a;)o=r+a>>1,n[e[o]]<c?r=o+1:a=o;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,a=e[r-1];r-- >0;)e[r]=a,a=t[a];return e}function $d(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:$d(t)}function Sh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Jd(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Jd(t.subTree):null}const Qd=n=>n.__isSuspense;function Xm(n,t){t&&t.pendingBranch?Xt(n)?t.effects.push(...n):t.effects.push(n):em(n)}const hi=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),Mi=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),ji=[];let fn=null;function cl(n=!1){ji.push(fn=n?null:[])}function jd(){ji.pop(),fn=ji[ji.length-1]||null}let gr=1;function Mh(n,t=!1){gr+=n,n<0&&fn&&t&&(fn.hasOnce=!0)}function tf(n){return n.dynamicChildren=gr>0?fn||Ki:null,jd(),gr>0&&fn&&fn.push(n),n}function yh(n,t,e,i,s,r){return tf(Te(n,t,e,i,s,r,!0))}function Ym(n,t,e,i,s){return tf(mi(n,t,e,i,s,!0))}function ef(n){return n?n.__v_isVNode===!0:!1}function Gs(n,t){return n.type===t.type&&n.key===t.key}const nf=({key:n})=>n??null,ma=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ae(n)||Xe(n)||Zt(n)?{i:Xn,r:n,k:t,f:!!e}:n:null);function Te(n,t=null,e=null,i=0,s=null,r=n===hi?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&nf(t),ref:t&&ma(t),scopeId:wd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xn};return o?(Ra(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ae(e)?8:16),gr>0&&!a&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const mi=qm;function qm(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===xm)&&(n=Mi),ef(n)){const o=Ns(n,t,!0);return e&&Ra(o,e),gr>0&&!r&&fn&&(o.shapeFlag&6?fn[fn.indexOf(n)]=o:fn.push(o)),o.patchFlag=-2,o}if(ag(n)&&(n=n.__vccOpts),t){t=Km(t);let{class:o,style:l}=t;o&&!Ae(o)&&(t.class=ka(o)),fe(l)&&(mc(l)&&!Xt(l)&&(l=Ye({},l)),t.style=Ga(l))}const a=Ae(n)?1:Qd(n)?128:Xa(n)?64:fe(n)?4:Zt(n)?2:0;return Te(n,t,e,i,s,a,r,!0)}function Km(n){return n?mc(n)||Vd(n)?Ye({},n):n:null}function Ns(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=t?Jm(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&nf(c),ref:t&&t.ref?e&&r?Xt(r)?r.concat(ma(t)):[r,ma(t)]:ma(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==hi?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ns(n.ssContent),ssFallback:n.ssFallback&&Ns(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&_c(h,l.clone(h)),h}function Zm(n=" ",t=0){return mi(Ka,null,n,t)}function $m(n="",t=!1){return t?(cl(),Ym(Mi,null,n)):mi(Mi,null,n)}function kn(n){return n==null||typeof n=="boolean"?mi(Mi):Xt(n)?mi(hi,null,n.slice()):ef(n)?ui(n):mi(Ka,null,String(n))}function ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ns(n)}function Ra(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Xt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Ra(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Vd(t)?t._ctx=Xn:s===3&&Xn&&(Xn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Zt(t)){if(i&65){Ra(n,{default:t});return}t={default:t,_ctx:Xn},e=32}else t=String(t),i&64?(e=16,t=[Zm(t)]):e=8;n.children=t,n.shapeFlag|=e}function Jm(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ka([t.class,i.class]));else if(s==="style")t.style=Ga([t.style,i.style]);else if(Fa(s)){const r=t[s],a=i[s];a&&r!==a&&!(Xt(r)&&r.includes(a))?t[s]=r?[].concat(r,a):a:a==null&&r==null&&!Ba(s)&&(t[s]=a)}else s!==""&&(t[s]=i[s])}return t}function Un(n,t,e,i=null){Dn(n,t,7,[e,i])}const Qm=Bd();let jm=0;function tg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Qm,r={uid:jm++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xd(i,s),emitsOptions:Hd(i,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:i.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Rm.bind(null,r),n.ce&&n.ce(r),r}let je=null;const eg=()=>je||Xn;let Pa,_r;{const n=za(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Pa=t("__VUE_INSTANCE_SETTERS__",e=>je=e),_r=t("__VUE_SSR_SETTERS__",e=>vr=e)}const Dr=n=>{const t=je;return Pa(n),n.scope.on(),()=>{n.scope.off(),Pa(t)}},bh=()=>{je&&je.scope.off(),Pa(null)};function sf(n){return n.vnode.shapeFlag&4}let vr=!1;function ng(n,t=!1,e=!1){t&&_r(t);const{props:i,children:s}=n.vnode,r=sf(n);Um(n,i,r,t),Hm(n,s,e||t);const a=r?ig(n,t):void 0;return t&&_r(!1),a}function ig(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Sm);const{setup:i}=e;if(i){vi();const s=n.setupContext=i.length>1?rg(n):null,r=Dr(n),a=Pr(i,n,0,[n.props,s]),o=ju(a);if(xi(),r(),(o||n.sp)&&!rr(n)&&Dd(n),o){if(a.then(bh,bh),t)return a.then(l=>{_r(!0);try{Eh(n,l,t)}finally{_r(!1)}}).catch(l=>{Wa(l,n,0)});n.asyncDep=a}else Eh(n,a)}else rf(n)}function Eh(n,t,e){Zt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:fe(t)&&(n.setupState=yd(t)),rf(n)}function rf(n,t,e){const i=n.type;n.render||(n.render=i.render||Zn);{const s=Dr(n);vi();try{Mm(n)}finally{xi(),s()}}}const sg={get(n,t){return ke(n,"get",""),n[t]}};function rg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,sg),slots:n.slots,emit:n.emit,expose:t}}function Mc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(yd(Vp(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in ar)return ar[e](n)},has(t,e){return e in t||e in ar}})):n.proxy}function ag(n){return Zt(n)&&"__vccOpts"in n}const og=(n,t)=>Zp(n,t,vr),lg="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hl;const Th=typeof window<"u"&&window.trustedTypes;if(Th)try{hl=Th.createPolicy("vue",{createHTML:n=>n})}catch{}const af=hl?n=>hl.createHTML(n):n=>n,cg="http://www.w3.org/2000/svg",hg="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,Ah=ci&&ci.createElement("template"),ug={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ci.createElementNS(cg,n):t==="mathml"?ci.createElementNS(hg,n):e?ci.createElement(n,{is:e}):ci.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ci.createTextNode(n),createComment:n=>ci.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ci.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const a=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Ah.innerHTML=af(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Ah.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},dg=Symbol("_vtc");function fg(n,t,e){const i=n[dg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const wh=Symbol("_vod"),pg=Symbol("_vsh"),mg=Symbol(""),gg=/(?:^|;)\s*display\s*:/;function _g(n,t,e){const i=n.style,s=Ae(e);let r=!1;if(e&&!s){if(t)if(Ae(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&Js(i,o,"")}else for(const a in t)e[a]==null&&Js(i,a,"");for(const a in e){a==="display"&&(r=!0);const o=e[a];o!=null?xg(n,a,!Ae(t)&&t?t[a]:void 0,o)||Js(i,a,o):Js(i,a,"")}}else if(s){if(t!==e){const a=i[mg];a&&(e+=";"+a),i.cssText=e,r=gg.test(e)}}else t&&n.removeAttribute("style");wh in n&&(n[wh]=r?i.display:"",n[pg]&&(i.display="none"))}const Hr=/\s*!important$/;function Js(n,t,e){if(Xt(e))e.forEach(i=>Js(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))Hr.test(e)?n.setProperty(t,e.replace(Hr,""),"important"):n.setProperty(t,e);else{const i=vg(n,t);Hr.test(e)?n.setProperty(rs(i),e.replace(Hr,""),"important"):n[i]=e}}const Ch=["Webkit","Moz","ms"],fo={};function vg(n,t){const e=fo[t];if(e)return e;let i=wn(t);if(i!=="filter"&&i in n)return fo[t]=i;i=nd(i);for(let s=0;s<Ch.length;s++){const r=Ch[s]+i;if(r in n)return fo[t]=r}return t}function xg(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ae(i)&&e===i}const Rh="http://www.w3.org/1999/xlink";function Ph(n,t,e,i,s,r=Sp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Rh,t.slice(6,t.length)):n.setAttributeNS(Rh,t,e):e==null||r&&!sd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Qn(e)?String(e):e)}function Dh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?af(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(o!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=sd(e):e==null&&o==="string"?(e="",a=!0):o==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(s||t)}function Sg(n,t,e,i){n.addEventListener(t,e,i)}function Mg(n,t,e,i){n.removeEventListener(t,e,i)}const Lh=Symbol("_vei");function yg(n,t,e,i,s=null){const r=n[Lh]||(n[Lh]={}),a=r[t];if(i&&a)a.value=i;else{const[o,l]=Tg(t);if(i){const c=r[t]=Cg(i,s);Sg(n,o,c,l)}else a&&(Mg(n,o,a,l),r[t]=void 0)}}const bg=/(Once|Passive|Capture)$/,Eg=/^on:?(?:Once|Passive|Capture)$/;function Tg(n){let t,e;for(;(e=n.match(bg))&&!Eg.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):rs(n.slice(2)),t]}let po=0;const Ag=Promise.resolve(),wg=()=>po||(Ag.then(()=>po=0),po=Date.now());function Cg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Xt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Dn(c,t,5,o)}}else Dn(s,t,5,[i])};return e.value=n,e.attached=wg(),e}const Ih=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Rg=(n,t,e,i,s,r)=>{const a=s==="svg";t==="class"?fg(n,i,a):t==="style"?_g(n,e,i):Fa(t)?Ba(t)||yg(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Pg(n,t,i,a))?(Dh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ph(n,t,i,a,r,t!=="value")):n._isVueCE&&(Dg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ae(i)))?Dh(n,wn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Ph(n,t,i,a))};function Pg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Ih(t)&&Zt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ih(t)&&Ae(e)?!1:t in n}function Dg(n,t){const e=n._def.props;if(!e)return!1;const i=wn(t);return Array.isArray(e)?e.some(s=>wn(s)===i):Object.keys(e).some(s=>wn(s)===i)}const Lg=["ctrl","shift","alt","meta"],Ig={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Lg.some(e=>n[`${e}Key`]&&!t.includes(e))},Ng=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let a=0;a<t.length;a++){const o=Ig[t[a]];if(o&&o(s,t))return}return n(s,...r)}))},Ug=Ye({patchProp:Rg},ug);let Nh;function Og(){return Nh||(Nh=Gm(Ug))}const Fg=((...n)=>{const t=Og().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Hg(i);if(!s)return;const r=t._component;!Zt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=e(s,!1,Bg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function Bg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Hg(n){return Ae(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="186",Yn={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zg=0,Uh=1,Gg=2,ga=1,kg=2,Qs=3,es=0,rn=1,Ve=2,gi=0,or=1,Oh=2,Fh=3,ul=4,Vg=5,As=100,Wg=101,Xg=102,Yg=103,qg=104,Kg=200,Zg=201,$g=202,Jg=203,of=204,lf=205,Qg=206,jg=207,t_=208,e_=209,n_=210,i_=211,s_=212,r_=213,a_=214,dl=0,fl=1,pl=2,xr=3,ml=4,gl=5,_l=6,vl=7,cf=0,o_=1,l_=2,$n=0,hf=1,uf=2,df=3,ff=4,pf=5,mf=6,gf=7,_f=300,ns=301,Us=302,mo=303,go=304,Za=306,xl=1e3,fi=1001,Sl=1002,Ue=1003,c_=1004,zr=1005,We=1006,_o=1007,Zi=1008,un=1009,vf=1010,xf=1011,Sr=1012,bc=1013,ti=1014,qn=1015,ei=1016,Ec=1017,Tc=1018,Mr=1020,Sf=35902,Mf=35899,yf=1021,bf=1022,An=1023,yi=1026,$i=1027,Ef=1028,Ac=1029,is=1030,wc=1031,Cc=1033,_a=33776,va=33777,xa=33778,Sa=33779,Ml=35840,yl=35841,bl=35842,El=35843,Tl=36196,Al=37492,wl=37496,Cl=37488,Rl=37489,Da=37490,Pl=37491,Dl=37808,Ll=37809,Il=37810,Nl=37811,Ul=37812,Ol=37813,Fl=37814,Bl=37815,Hl=37816,zl=37817,Gl=37818,kl=37819,Vl=37820,Wl=37821,Xl=36492,Yl=36494,ql=36495,Kl=36283,Zl=36284,La=36285,$l=36286,h_=3200,Jl=0,u_=1,Ui="",Re="srgb",Ia="srgb-linear",Na="linear",ce="srgb",vo=7680,d_=519,f_=512,p_=513,m_=514,Rc=515,g_=516,__=517,Pc=518,v_=519,x_=35044,Bh="300 es",Kn=2e3,yr=2001;function S_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function M_(){const n=br("canvas");return n.style.display="block",n}const Hh={};function zh(...n){const t="THREE."+n.shift();console.log(t,...n)}function Tf(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Vt(...n){n=Tf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ie(...n){n=Tf(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ls(...n){const t=n.join(" ");t in Hh||(Hh[t]=!0,Vt(...n))}function y_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const b_={[dl]:fl,[pl]:_l,[ml]:vl,[xr]:gl,[fl]:dl,[_l]:pl,[vl]:ml,[gl]:xr};class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const lr=Math.PI/180,Er=180/Math.PI;function as(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Qt(n,t,e){return Math.max(t,Math.min(e,n))}function Dc(n,t){return(n%t+t)%t}function E_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function T_(n,t,e){return n!==t?(e-n)/(t-n):0}function cr(n,t,e){return(1-e)*n+e*t}function A_(n,t,e,i){return cr(n,t,1-Math.exp(-e*i))}function w_(n,t=1){return t-Math.abs(Dc(n,t*2)-t)}function C_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function R_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function P_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function D_(n,t){return n+Math.random()*(t-n)}function L_(n){return n*(.5-Math.random())}function I_(n){n!==void 0&&(Gh=n);let t=Gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function N_(n){return n*lr}function U_(n){return n*Er}function O_(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function F_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function B_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function H_(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*_,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*_,o*c);break;case"ZYZ":n.set(l*_,l*f,o*h,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ws(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const be={DEG2RAD:lr,RAD2DEG:Er,generateUUID:as,clamp:Qt,euclideanModulo:Dc,mapLinear:E_,inverseLerp:T_,lerp:cr,damp:A_,pingpong:w_,smoothstep:C_,smootherstep:R_,randInt:P_,randFloat:D_,randFloatSpread:L_,seededRandom:I_,degToRad:N_,radToDeg:U_,isPowerOfTwo:O_,ceilPowerOfTwo:F_,floorPowerOfTwo:B_,setQuaternionFromProperEuler:H_,normalize:Ze,denormalize:ws},Vc=class Vc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vc.prototype.isVector2=!0;let gt=Vc;class gn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],_=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==f||h!==_){let m=l*u+c*f+h*_+d*M;m<0&&(u=-u,f=-f,_=-_,M=-M,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),P=Math.sin(E);p=Math.sin(p*E)/P,o=Math.sin(o*E)/P,l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+M*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+M*o;const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-o*f,t[e+2]=c*_+h*f+o*u-l*d,t[e+3]=h*_-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wc=class Wc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xo.copy(this).projectOnVector(t),this.sub(xo)}reflect(t){return this.sub(xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wc.prototype.isVector3=!0;let U=Wc;const xo=new U,kh=new gn,Xc=class Xc{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],_=i[8],M=s[0],m=s[3],p=s[6],E=s[1],P=s[4],x=s[7],T=s[2],w=s[5],I=s[8];return r[0]=a*M+o*E+l*T,r[3]=a*m+o*P+l*w,r[6]=a*p+o*x+l*I,r[1]=c*M+h*E+d*T,r[4]=c*m+h*P+d*w,r[7]=c*p+h*x+d*I,r[2]=u*M+f*E+_*T,r[5]=u*m+f*P+_*w,r[8]=u*p+f*x+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=e*d+i*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=d*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(i*l-c*e)*M,t[8]=(a*e-i*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(So.makeScale(t,e)),this}rotate(t){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(So.makeRotation(-t)),this}translate(t,e){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xc.prototype.isMatrix3=!0;let Wt=Xc;const So=new Wt,Vh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z_(){const n={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ia]:{primaries:t,whitePoint:i,transfer:Na,toXYZ:Vh,fromXYZ:Wh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:Vh,fromXYZ:Wh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),n}const ee=z_();function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hs;class G_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hs===void 0&&(hs=br("canvas")),hs.width=t.width,hs.height=t.height;const s=hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=hs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_i(e[i]/255)*255):e[i]=_i(e[i]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let k_=0;class Lc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mo(s[a].image)):r.push(Mo(s[a]))}else r=Mo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?G_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let V_=0;const yo=new U;class Oe extends Bi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=fi,s=fi,r=We,a=Zi,o=An,l=un,c=Oe.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=as(),this.name="",this.source=new Lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yo).x}get height(){return this.source.getSize(yo).y}get depth(){return this.source.getSize(yo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_f)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xl:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xl:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=_f;Oe.DEFAULT_ANISOTROPY=1;const Yc=class Yc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const P=(c+1)/2,x=(f+1)/2,T=(p+1)/2,w=(h+u)/4,I=(d+M)/4,v=(_+m)/4;return P>x&&P>T?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=w/i,r=I/i):x>T?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=w/s,r=v/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=I/r,s=v/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(d-M)/E,this.z=(u-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yc.prototype.isVector4=!0;let Me=Yc;class W_ extends Bi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Oe(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Lc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends W_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Af extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class X_ extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Oa=class Oa{constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,_,M,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,_,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,_=o*h,M=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,_=c*h,M=c*d;e[0]=u+M*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,_=c*h,M=c*d;e[0]=u-M*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,_=o*h,M=o*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,_=o*l,M=o*c;e[0]=l*h,e[4]=M-u*d,e[8]=_*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-M*d}else if(t.order==="XZY"){const u=a*l,f=a*c,_=o*l,M=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=a*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Y_,t,q_)}lookAt(t,e,i){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Ci.crossVectors(i,an),Ci.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ci.crossVectors(i,an)),Ci.normalize(),Gr.crossVectors(an,Ci),s[0]=Ci.x,s[4]=Gr.x,s[8]=an.x,s[1]=Ci.y,s[5]=Gr.y,s[9]=an.y,s[2]=Ci.z,s[6]=Gr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],_=i[2],M=i[6],m=i[10],p=i[14],E=i[3],P=i[7],x=i[11],T=i[15],w=s[0],I=s[4],v=s[8],b=s[12],R=s[1],D=s[5],V=s[9],Y=s[13],H=s[2],X=s[6],j=s[10],q=s[14],at=s[3],nt=s[7],ct=s[11],lt=s[15];return r[0]=a*w+o*R+l*H+c*at,r[4]=a*I+o*D+l*X+c*nt,r[8]=a*v+o*V+l*j+c*ct,r[12]=a*b+o*Y+l*q+c*lt,r[1]=h*w+d*R+u*H+f*at,r[5]=h*I+d*D+u*X+f*nt,r[9]=h*v+d*V+u*j+f*ct,r[13]=h*b+d*Y+u*q+f*lt,r[2]=_*w+M*R+m*H+p*at,r[6]=_*I+M*D+m*X+p*nt,r[10]=_*v+M*V+m*j+p*ct,r[14]=_*b+M*Y+m*q+p*lt,r[3]=E*w+P*R+x*H+T*at,r[7]=E*I+P*D+x*X+T*nt,r[11]=E*v+P*V+x*j+T*ct,r[15]=E*b+P*Y+x*q+T*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],M=t[7],m=t[11],p=t[15],E=l*f-c*u,P=o*f-c*d,x=o*u-l*d,T=a*f-c*h,w=a*u-l*h,I=a*d-o*h;return e*(M*E-m*P+p*x)-i*(_*E-m*T+p*w)+s*(_*P-M*T+p*I)-r*(_*x-M*w+m*I)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],M=t[13],m=t[14],p=t[15],E=e*o-i*a,P=e*l-s*a,x=e*c-r*a,T=i*l-s*o,w=i*c-r*o,I=s*c-r*l,v=h*M-d*_,b=h*m-u*_,R=h*p-f*_,D=d*m-u*M,V=d*p-f*M,Y=u*p-f*m,H=E*Y-P*V+x*D+T*R-w*b+I*v;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/H;return t[0]=(o*Y-l*V+c*D)*X,t[1]=(s*V-i*Y-r*D)*X,t[2]=(M*I-m*w+p*T)*X,t[3]=(u*w-d*I-f*T)*X,t[4]=(l*R-a*Y-c*b)*X,t[5]=(e*Y-s*R+r*b)*X,t[6]=(m*x-_*I-p*P)*X,t[7]=(h*I-u*x+f*P)*X,t[8]=(a*V-o*R+c*v)*X,t[9]=(i*R-e*V-r*v)*X,t[10]=(_*w-M*x+p*E)*X,t[11]=(d*x-h*w-f*E)*X,t[12]=(o*b-a*D-l*v)*X,t[13]=(e*D-i*b+s*v)*X,t[14]=(M*P-_*T-m*E)*X,t[15]=(h*T-d*P+u*E)*X,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,M=a*h,m=a*d,p=o*d,E=l*c,P=l*h,x=l*d,T=i.x,w=i.y,I=i.z;return s[0]=(1-(M+p))*T,s[1]=(f+x)*T,s[2]=(_-P)*T,s[3]=0,s[4]=(f-x)*w,s[5]=(1-(u+p))*w,s[6]=(m+E)*w,s[7]=0,s[8]=(_+P)*I,s[9]=(m-E)*I,s[10]=(1-(u+M))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=us.set(s[0],s[1],s[2]).length();const o=us.set(s[4],s[5],s[6]).length(),l=us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);const c=1/a,h=1/o,d=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Kn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let _,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===Kn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===yr)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Kn,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s);let _,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===Kn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===yr)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Oa.prototype.isMatrix4=!0;let Se=Oa;const us=new U,xn=new Se,Y_=new U(0,0,0),q_=new U(1,1,1),Ci=new U,Gr=new U,an=new U,Xh=new Se,Yh=new gn;class dn{constructor(t=0,e=0,i=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let K_=0;const qh=new U,ds=new gn,si=new Se,kr=new U,ks=new U,Z_=new U,$_=new gn,Kh=new U(1,0,0),Zh=new U(0,1,0),$h=new U(0,0,1),Jh={type:"added"},J_={type:"removed"},fs={type:"childadded",child:null},bo={type:"childremoved",child:null};class tn extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new U,e=new dn,i=new gn,s=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Wt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Kh,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kh,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?kr.copy(t):kr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ks,kr,this.up):si.lookAt(kr,ks,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(si),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jh),fs.child=t,this.dispatchEvent(fs),fs.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(J_),bo.child=t,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,Z_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,$_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}tn.DEFAULT_UP=new U(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cn extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q_={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new cn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const wf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function To(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ne{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ee.workingColorSpace){if(t=Dc(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=To(a,r,t+1/3),this.g=To(a,r,t),this.b=To(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function i(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const i=wf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return ee.workingToColorSpace(ze.copy(this),t),Math.round(Qt(ze.r*255,0,255))*65536+Math.round(Qt(ze.g*255,0,255))*256+Math.round(Qt(ze.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(ze.copy(this),e);const i=ze.r,s=ze.g,r=ze.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Re){ee.workingToColorSpace(ze.copy(this),t);const e=ze.r,i=ze.g,s=ze.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Vr);const i=cr(Ri.h,Vr.h,e),s=cr(Ri.s,Vr.s,e),r=cr(Ri.l,Vr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new ne;ne.NAMES=wf;class j_ extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Sn=new U,ri=new U,Ao=new U,ai=new U,ps=new U,ms=new U,Qh=new U,wo=new U,Co=new U,Ro=new U,Po=new Me,Do=new Me,Lo=new Me;class Tn{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Sn.subVectors(t,e),s.cross(Sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Sn.subVectors(s,e),ri.subVectors(i,e),Ao.subVectors(t,e);const a=Sn.dot(Sn),o=Sn.dot(ri),l=Sn.dot(Ao),c=ri.dot(ri),h=ri.dot(Ao),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Po.setScalar(0),Do.setScalar(0),Lo.setScalar(0),Po.fromBufferAttribute(t,e),Do.fromBufferAttribute(t,i),Lo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Po,r.x),a.addScaledVector(Do,r.y),a.addScaledVector(Lo,r.z),a}static isFrontFacing(t,e,i,s){return Sn.subVectors(i,e),ri.subVectors(t,e),Sn.cross(ri).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Sn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ps.subVectors(s,i),ms.subVectors(r,i),wo.subVectors(t,i);const l=ps.dot(wo),c=ms.dot(wo);if(l<=0&&c<=0)return e.copy(i);Co.subVectors(t,s);const h=ps.dot(Co),d=ms.dot(Co);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ps,a);Ro.subVectors(t,r);const f=ps.dot(Ro),_=ms.dot(Ro);if(_>=0&&f<=_)return e.copy(r);const M=f*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(ms,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Qh.subVectors(r,s),o=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(Qh,o);const p=1/(m+M+u);return a=M*p,o=u*p,e.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Lr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Xr.subVectors(this.max,Vs),gs.subVectors(t.a,Vs),_s.subVectors(t.b,Vs),vs.subVectors(t.c,Vs),Pi.subVectors(_s,gs),Di.subVectors(vs,_s),ki.subVectors(gs,vs);let e=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-ki.z,ki.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,ki.z,0,-ki.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-ki.y,ki.x,0];return!Io(e,gs,_s,vs,Xr)||(e=[1,0,0,0,1,0,0,0,1],!Io(e,gs,_s,vs,Xr))?!1:(Yr.crossVectors(Pi,Di),e=[Yr.x,Yr.y,Yr.z],Io(e,gs,_s,vs,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oi=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,Wr=new Lr,gs=new U,_s=new U,vs=new U,Pi=new U,Di=new U,ki=new U,Vs=new U,Xr=new U,Yr=new U,Vi=new U;function Io(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Vi.fromArray(n,r);const o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ce=new U,qr=new gt;let t0=0;class Jn extends Bi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=x_,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ws(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Cf extends Jn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Rf extends Jn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Fe extends Jn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const e0=new Lr,Ws=new U,No=new U;class Nc{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):e0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(No)),this.expandByPoint(Ws.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let n0=0;const mn=new Se,Uo=new tn,xs=new U,on=new Lr,Xs=new Lr,Ie=new U;class _n extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(S_(t)?Rf:Cf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return Uo.lookAt(t),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(on.min,Xs.min),on.expandByPoint(Ie),Ie.addVectors(on.max,Xs.max),on.expandByPoint(Ie)):(on.expandByPoint(Xs.min),on.expandByPoint(Xs.max))}on.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(t,c),Ie.add(xs)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new U,l[v]=new U;const c=new U,h=new U,d=new U,u=new gt,f=new gt,_=new gt,M=new U,m=new U;function p(v,b,R){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,R),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,b),_.fromBufferAttribute(r,R),h.sub(c),d.sub(c),f.sub(u),_.sub(u);const D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(D),o[v].add(M),o[b].add(M),o[R].add(M),l[v].add(m),l[b].add(m),l[R].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,b=E.length;v<b;++v){const R=E[v],D=R.start,V=R.count;for(let Y=D,H=D+V;Y<H;Y+=3)p(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const P=new U,x=new U,T=new U,w=new U;function I(v){T.fromBufferAttribute(s,v),w.copy(T);const b=o[v];P.copy(b),P.sub(T.multiplyScalar(T.dot(b))).normalize(),x.crossVectors(w,b);const D=x.dot(l[v])<0?-1:1;a.setXYZW(v,P.x,P.y,P.z,D)}for(let v=0,b=E.length;v<b;++v){const R=E[v],D=R.start,V=R.count;for(let Y=D,H=D+V;Y<H;Y+=3)I(t.getX(Y+0)),I(t.getX(Y+1)),I(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Jn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new Jn(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _n,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new U,i0=new U,s0=new Wt;class En{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Oo.subVectors(i,e).cross(i0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Oo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||s0.getNormalMatrix(t),s=this.coplanarPoint(Oo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let r0=0;class Ir extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=as(),this.name="",this.type="Material",this.blending=or,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=of,this.blendDst=lf,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new En().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const li=new U,Fo=new U,Kr=new U,Zr=new U;class Uc{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Fo.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),Zr.copy(this.origin).sub(Fo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Kr),o=Zr.dot(this.direction),l=-Zr.dot(Kr),c=Zr.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fo).addScaledVector(Kr,u),f}intersectSphere(t,e){if(t.radius<0)return null;li.subVectors(t.center,this.origin);const i=li.dot(this.direction),s=li.dot(li)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,_=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=i.x-a.x,E=i.y-a.y,P=i.z-a.z,x=Math.abs(l),T=Math.abs(c),w=Math.abs(h);let I,v,b,R,D,V,Y,H,X,j,q,at;if(x>=T&&x>=w?(b=l,V=d,X=_,at=p,l>=0?(I=c,v=h,R=u,D=f,Y=M,H=m,j=E,q=P):(I=h,v=c,R=f,D=u,Y=m,H=M,j=P,q=E)):T>=w?(b=c,V=u,X=M,at=E,c>=0?(I=h,v=l,R=f,D=d,Y=m,H=_,j=P,q=p):(I=l,v=h,R=d,D=f,Y=_,H=m,j=p,q=P)):(b=h,V=f,X=m,at=P,h>=0?(I=l,v=c,R=d,D=u,Y=_,H=M,j=p,q=E):(I=c,v=l,R=u,D=d,Y=M,H=_,j=E,q=p)),b===0)return null;const nt=I/b,ct=v/b,lt=1/b,wt=R-nt*V,Dt=D-ct*V,te=Y-nt*X,Yt=H-ct*X,qt=j-nt*at,it=q-ct*at,tt=qt*Yt-it*te,vt=wt*it-Dt*qt,Ht=te*Dt-Yt*wt;if(s){if(tt<0||vt<0||Ht<0)return null}else if((tt<0||vt<0||Ht<0)&&(tt>0||vt>0||Ht>0))return null;const Ct=tt+vt+Ht;if(Ct===0)return null;const A=lt*(tt*V+vt*X+Ht*at);return(Ct>0?A<0:A>0)?null:this.at(A/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yn extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const jh=new Se,Wi=new Uc,$r=new Nc,tu=new U,Jr=new U,Qr=new U,jr=new U,Bo=new U,ta=new U,eu=new U,ea=new U;class xe extends tn{constructor(t=new _n,e=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Bo.fromBufferAttribute(d,t),a?ta.addScaledVector(Bo,h):ta.addScaledVector(Bo.sub(e),h))}e.add(ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!($r.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere($r,tu)===null||Wi.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(jh.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(jh),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],p=a[m.materialIndex],E=Math.max(m.start,f.start),P=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,T=P;x<T;x+=3){const w=o.getX(x),I=o.getX(x+1),v=o.getX(x+2);s=na(this,p,t,i,c,h,d,w,I,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const E=o.getX(m),P=o.getX(m+1),x=o.getX(m+2);s=na(this,a,t,i,c,h,d,E,P,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],p=a[m.materialIndex],E=Math.max(m.start,f.start),P=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=E,T=P;x<T;x+=3){const w=x,I=x+1,v=x+2;s=na(this,p,t,i,c,h,d,w,I,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const E=m,P=m+1,x=m+2;s=na(this,a,t,i,c,h,d,E,P,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function a0(n,t,e,i,s,r,a,o){let l;if(t.side===rn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===es,o),l===null)return null;ea.copy(o),ea.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:n}}function na(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Jr),n.getVertexPosition(l,Qr),n.getVertexPosition(c,jr);const h=a0(n,t,e,i,Jr,Qr,jr,eu);if(h){const d=new U;Tn.getBarycoord(eu,Jr,Qr,jr,d),s&&(h.uv=Tn.getInterpolatedAttribute(s,o,l,c,d,new gt)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,l,c,d,new gt)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};Tn.getNormal(Jr,Qr,jr,u.normal),h.face=u,h.barycoord=d}return h}class o0 extends Oe{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ue,h=Ue,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xi=new Nc,l0=new gt(.5,.5),ia=new U;class Oc{constructor(t=new En,e=new En,i=new En,s=new En,r=new En,a=new En){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Kn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],M=r[9],m=r[10],p=r[11],E=r[12],P=r[13],x=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,p-_,T-E).normalize(),s[1].setComponents(c+a,f+h,p+_,T+E).normalize(),s[2].setComponents(c+o,f+d,p+M,T+P).normalize(),s[3].setComponents(c-o,f-d,p-M,T-P).normalize(),i)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,p-m,T-x).normalize();else if(s[4].setComponents(c-l,f-u,p-m,T-x).normalize(),e===Kn)s[5].setComponents(c+l,f+u,p+m,T+x).normalize();else if(e===yr)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);const e=l0.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ia.x=s.normal.x>0?t.max.x:t.min.x,ia.y=s.normal.y>0?t.max.y:t.min.y,ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pf extends Oe{constructor(t=[],e=ns,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nu extends Oe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tr extends Oe{constructor(t,e,i=ti,s,r,a,o=Ue,l=Ue,c,h=yi,d=1){if(h!==yi&&h!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class c0 extends Tr{constructor(t,e=ti,i=ns,s,r,a=Ue,o=Ue,l,c=yi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Df extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Bs extends _n{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(d,2));function _(M,m,p,E,P,x,T,w,I,v,b){const R=x/I,D=T/v,V=x/2,Y=T/2,H=w/2,X=I+1,j=v+1;let q=0,at=0;const nt=new U;for(let ct=0;ct<j;ct++){const lt=ct*D-Y;for(let wt=0;wt<X;wt++){const Dt=wt*R-V;nt[M]=Dt*E,nt[m]=lt*P,nt[p]=H,c.push(nt.x,nt.y,nt.z),nt[M]=0,nt[m]=0,nt[p]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(wt/I),d.push(1-ct/v),q+=1}}for(let ct=0;ct<v;ct++)for(let lt=0;lt<I;lt++){const wt=u+lt+X*ct,Dt=u+lt+X*(ct+1),te=u+(lt+1)+X*(ct+1),Yt=u+(lt+1)+X*ct;l.push(wt,Dt,Yt),l.push(Dt,te,Yt),at+=6}o.addGroup(f,at,b),f+=at,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new gt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new U,s=[],r=[],a=[],o=new U,l=new Se;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Qt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fc extends ni{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class h0 extends Fc{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bc(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const iu=new U,su=new U,Ho=new Bc,zo=new Bc,Go=new Bc;class u0 extends ni{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new U){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(su.subVectors(s[0],s[1]).add(s[0]),c=su);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(iu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=iu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),Ho.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,M,m),zo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,M,m),Go.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,M,m)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),zo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Go.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ho.calc(l),zo.calc(l),Go.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ru(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function d0(n,t){const e=1-n;return e*e*t}function f0(n,t){return 2*(1-n)*n*t}function p0(n,t){return n*n*t}function hr(n,t,e,i){return d0(n,t)+f0(n,e)+p0(n,i)}function m0(n,t){const e=1-n;return e*e*e*t}function g0(n,t){const e=1-n;return 3*e*e*n*t}function _0(n,t){return 3*(1-n)*n*n*t}function v0(n,t){return n*n*n*t}function ur(n,t,e,i,s){return m0(n,t)+g0(n,e)+_0(n,i)+v0(n,s)}class Lf extends ni{constructor(t=new gt,e=new gt,i=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new gt){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class x0 extends ni{constructor(t=new U,e=new U,i=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y),ur(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class If extends ni{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class S0 extends ni{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nf extends ni{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class M0 extends ni{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y),hr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uf extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(ru(o,l.x,c.x,h.x,d.x),ru(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var Ql=Object.freeze({__proto__:null,ArcCurve:h0,CatmullRomCurve3:u0,CubicBezierCurve:Lf,CubicBezierCurve3:x0,EllipseCurve:Fc,LineCurve:If,LineCurve3:S0,QuadraticBezierCurve:Nf,QuadraticBezierCurve3:M0,SplineCurve:Uf});class y0 extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ql[s.type]().fromJSON(s))}return this}}class au extends y0{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new If(this.currentPoint.clone(),new gt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Nf(this.currentPoint.clone(),new gt(t,e),new gt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new Lf(this.currentPoint.clone(),new gt(t,e),new gt(i,s),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Uf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){const c=new Fc(t,e,i,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hc extends au{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new au().fromJSON(s))}return this}}function b0(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Of(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=C0(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){const f=n[u],_=n[u+1];f<o&&(o=f),_<l&&(l=_),f>h&&(h=f),_>d&&(d=_)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ar(r,a,e,o,l,c,0),a}function Of(n,t,e,i,s){let r;if(s===H0(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=ou(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=ou(a/i|0,n[a],n[a+1],r);return r&&Os(r,r.next)&&(Cr(r),r=r.next),r}function ss(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Os(e,e.next)||ye(e.prev,e,e.next)===0)){if(Cr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ar(n,t,e,i,s,r,a){if(!n)return;!a&&r&&I0(n,i,s,r);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?T0(n,i,s,r):E0(n)){t.push(l.i,n.i,c.i),Cr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=A0(ss(n),t),Ar(n,t,e,i,s,r,2)):a===2&&w0(n,t,e,i,s,r):Ar(ss(n),t,e,i,s,r,1);break}}}function E0(n){const t=n.prev,e=n,i=n.next;if(ye(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c);let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=f&&js(s,o,r,l,a,c,_.x,_.y)&&ye(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function T0(n,t,e,i){const s=n.prev,r=n,a=n.next;if(ye(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),_=Math.min(h,d,u),M=Math.max(o,l,c),m=Math.max(h,d,u),p=jl(f,_,t,e,i),E=jl(M,m,t,e,i);let P=n.prevZ,x=n.nextZ;for(;P&&P.z>=p&&x&&x.z<=E;){if(P.x>=f&&P.x<=M&&P.y>=_&&P.y<=m&&P!==s&&P!==a&&js(o,h,l,d,c,u,P.x,P.y)&&ye(P.prev,P,P.next)>=0||(P=P.prevZ,x.x>=f&&x.x<=M&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&js(o,h,l,d,c,u,x.x,x.y)&&ye(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;P&&P.z>=p;){if(P.x>=f&&P.x<=M&&P.y>=_&&P.y<=m&&P!==s&&P!==a&&js(o,h,l,d,c,u,P.x,P.y)&&ye(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;x&&x.z<=E;){if(x.x>=f&&x.x<=M&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&js(o,h,l,d,c,u,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function A0(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Os(i,s)&&Bf(i,e,e.next,s)&&wr(i,s)&&wr(s,i)&&(t.push(i.i,e.i,s.i),Cr(e),Cr(e.next),e=n=s),e=e.next}while(e!==n);return ss(e)}function w0(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&O0(a,o)){let l=Hf(a,o);a=ss(a,a.next),l=ss(l,l.next),Ar(a,t,e,i,s,r,0),Ar(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function C0(n,t,e,i){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Of(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(U0(c))}s.sort(R0);for(let r=0;r<s.length;r++)e=P0(s[r],e);return e}function R0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function P0(n,t){const e=D0(n,t);if(!e)return t;const i=Hf(e,n);return ss(i,i.next),ss(e,e.next)}function D0(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,a;if(Os(n,e))return e;do{if(Os(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Ff(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);wr(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&L0(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function L0(n,t){return ye(n.prev,n,t.prev)<0&&ye(t.next,n,n.next)<0}function I0(n,t,e,i){let s=n;do s.z===0&&(s.z=jl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,N0(s)}function N0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function jl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function U0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ff(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function js(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Ff(n,t,e,i,s,r,a,o)}function O0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!F0(n,t)&&(wr(n,t)&&wr(t,n)&&B0(n,t)&&(ye(n.prev,n,t.prev)||ye(n,t.prev,t))||Os(n,t)&&ye(n.prev,n,n.next)>0&&ye(t.prev,t,t.next)>0)}function ye(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Os(n,t){return n.x===t.x&&n.y===t.y}function Bf(n,t,e,i){const s=ra(ye(n,t,e)),r=ra(ye(n,t,i)),a=ra(ye(e,i,n)),o=ra(ye(e,i,t));return!!(s!==r&&a!==o||s===0&&sa(n,e,t)||r===0&&sa(n,i,t)||a===0&&sa(e,n,i)||o===0&&sa(e,t,i))}function sa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ra(n){return n>0?1:n<0?-1:0}function F0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Bf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function wr(n,t){return ye(n.prev,n,n.next)<0?ye(n,t,n.next)>=0&&ye(n,n.prev,t)>=0:ye(n,t,n.prev)<0||ye(n,n.next,t)<0}function B0(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Hf(n,t){const e=tc(n.i,n.x,n.y),i=tc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ou(n,t,e,i){const s=tc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Cr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function tc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function H0(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class z0{static triangulate(t,e,i=2){return b0(t,e,i)}}class pi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return pi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];lu(t),cu(i,t);let a=t.length;e.forEach(lu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,cu(i,e[l]);const o=z0.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function lu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function cu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class dr extends _n{constructor(t=new Hc([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Fe(s,3)),this.setAttribute("uv",new Fe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:G0;let P,x=!1,T,w,I,v;if(p){P=p.getSpacedPoints(h),x=!0,u=!1;const L=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,L),w=new U,I=new U,v=new U}u||(m=0,f=0,_=0,M=0);const b=o.extractPoints(c);let R=b.shape;const D=b.holes;if(!pi.isClockWise(R)){R=R.reverse();for(let L=0,z=D.length;L<z;L++){const B=D[L];pi.isClockWise(B)&&(D[L]=B.reverse())}}function Y(L){const B=10000000000000001e-36;let G=L[0];for(let $=1;$<=L.length;$++){const ot=$%L.length,st=L[ot],J=st.x-G.x,pt=st.y-G.y,C=J*J+pt*pt,xt=Math.max(Math.abs(st.x),Math.abs(st.y),Math.abs(G.x),Math.abs(G.y)),St=B*xt*xt;if(C<=St){L.splice(ot,1),$--;continue}G=st}}Y(R),D.forEach(Y);const H=D.length,X=R;for(let L=0;L<H;L++){const z=D[L];R=R.concat(z)}function j(L,z,B){return z||ie("ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(z,B)}const q=R.length;function at(L,z,B){let G,$,ot;const st=L.x-z.x,J=L.y-z.y,pt=B.x-L.x,C=B.y-L.y,xt=st*st+J*J,St=st*C-J*pt;if(Math.abs(St)>Number.EPSILON){const y=Math.sqrt(xt),g=Math.sqrt(pt*pt+C*C),O=z.x-J/y,W=z.y+st/y,Q=B.x-C/g,ft=B.y+pt/g,mt=((Q-O)*C-(ft-W)*pt)/(st*C-J*pt);G=O+st*mt-L.x,$=W+J*mt-L.y;const rt=G*G+$*$;if(rt<=2)return new gt(G,$);ot=Math.sqrt(rt/2)}else{let y=!1;st>Number.EPSILON?pt>Number.EPSILON&&(y=!0):st<-Number.EPSILON?pt<-Number.EPSILON&&(y=!0):Math.sign(J)===Math.sign(C)&&(y=!0),y?(G=-J,$=st,ot=Math.sqrt(xt)):(G=st,$=J,ot=Math.sqrt(xt/2))}return new gt(G/ot,$/ot)}const nt=[];for(let L=0,z=X.length,B=z-1,G=L+1;L<z;L++,B++,G++)B===z&&(B=0),G===z&&(G=0),nt[L]=at(X[L],X[B],X[G]);const ct=[];let lt,wt=nt.concat();for(let L=0,z=H;L<z;L++){const B=D[L];lt=[];for(let G=0,$=B.length,ot=$-1,st=G+1;G<$;G++,ot++,st++)ot===$&&(ot=0),st===$&&(st=0),lt[G]=at(B[G],B[ot],B[st]);ct.push(lt),wt=wt.concat(lt)}let Dt;if(m===0)Dt=pi.triangulateShape(X,D);else{const L=[],z=[];for(let B=0;B<m;B++){const G=B/m,$=f*Math.cos(G*Math.PI/2),ot=_*Math.sin(G*Math.PI/2)+M;for(let st=0,J=X.length;st<J;st++){const pt=j(X[st],nt[st],ot);vt(pt.x,pt.y,-$),G===0&&L.push(pt)}for(let st=0,J=H;st<J;st++){const pt=D[st];lt=ct[st];const C=[];for(let xt=0,St=pt.length;xt<St;xt++){const y=j(pt[xt],lt[xt],ot);vt(y.x,y.y,-$),G===0&&C.push(y)}G===0&&z.push(C)}}Dt=pi.triangulateShape(L,z)}const te=Dt.length,Yt=_+M;for(let L=0;L<q;L++){const z=u?j(R[L],wt[L],Yt):R[L];x?(I.copy(T.normals[0]).multiplyScalar(z.x),w.copy(T.binormals[0]).multiplyScalar(z.y),v.copy(P[0]).add(I).add(w),vt(v.x,v.y,v.z)):vt(z.x,z.y,0)}for(let L=1;L<=h;L++)for(let z=0;z<q;z++){const B=u?j(R[z],wt[z],Yt):R[z];x?(I.copy(T.normals[L]).multiplyScalar(B.x),w.copy(T.binormals[L]).multiplyScalar(B.y),v.copy(P[L]).add(I).add(w),vt(v.x,v.y,v.z)):vt(B.x,B.y,d/h*L)}for(let L=m-1;L>=0;L--){const z=L/m,B=f*Math.cos(z*Math.PI/2),G=_*Math.sin(z*Math.PI/2)+M;for(let $=0,ot=X.length;$<ot;$++){const st=j(X[$],nt[$],G);vt(st.x,st.y,d+B)}for(let $=0,ot=D.length;$<ot;$++){const st=D[$];lt=ct[$];for(let J=0,pt=st.length;J<pt;J++){const C=j(st[J],lt[J],G);x?vt(C.x,C.y+P[h-1].y,P[h-1].x+B):vt(C.x,C.y,d+B)}}}qt(),it();function qt(){const L=s.length/3;if(u){let z=0,B=q*z;for(let G=0;G<te;G++){const $=Dt[G];Ht($[2]+B,$[1]+B,$[0]+B)}z=h+m*2,B=q*z;for(let G=0;G<te;G++){const $=Dt[G];Ht($[0]+B,$[1]+B,$[2]+B)}}else{for(let z=0;z<te;z++){const B=Dt[z];Ht(B[2],B[1],B[0])}for(let z=0;z<te;z++){const B=Dt[z];Ht(B[0]+q*h,B[1]+q*h,B[2]+q*h)}}i.addGroup(L,s.length/3-L,0)}function it(){const L=s.length/3;let z=0;tt(X,z),z+=X.length;for(let B=0,G=D.length;B<G;B++){const $=D[B];tt($,z),z+=$.length}i.addGroup(L,s.length/3-L,1)}function tt(L,z){let B=L.length;for(;--B>=0;){const G=B;let $=B-1;$<0&&($=L.length-1);for(let ot=0,st=h+m*2;ot<st;ot++){const J=q*ot,pt=q*(ot+1),C=z+G+J,xt=z+$+J,St=z+$+pt,y=z+G+pt;Ct(C,xt,St,y)}}}function vt(L,z,B){l.push(L),l.push(z),l.push(B)}function Ht(L,z,B){A(L),A(z),A(B);const G=s.length/3,$=E.generateTopUV(i,s,G-3,G-2,G-1);N($[0]),N($[1]),N($[2])}function Ct(L,z,B,G){A(L),A(z),A(G),A(z),A(B),A(G);const $=s.length/3,ot=E.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);N(ot[0]),N(ot[1]),N(ot[3]),N(ot[1]),N(ot[2]),N(ot[3])}function A(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function N(L){r.push(L.x),r.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return k0(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ql[s.type]().fromJSON(s)),new dr(i,t.options)}}const G0={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new gt(r,a),new gt(o,l),new gt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],_=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new gt(a,1-l),new gt(c,1-d),new gt(u,1-_),new gt(M,1-p)]:[new gt(o,1-l),new gt(h,1-d),new gt(f,1-_),new gt(m,1-p)]}};function k0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Fi extends _n{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],_=[],M=[],m=[];for(let p=0;p<h;p++){const E=p*u-a;for(let P=0;P<c;P++){const x=P*d-r;_.push(x,-E,0),M.push(0,0,1),m.push(P/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const P=E+c*p,x=E+c*(p+1),T=E+1+c*(p+1),w=E+1+c*p;f.push(P,x,w),f.push(x,T,w)}this.setIndex(f),this.setAttribute("position",new Fe(_,3)),this.setAttribute("normal",new Fe(M,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ua extends _n{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new U,_=new gt;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}d+=u}for(let M=0;M<s;M++){const m=M*(i+1);for(let p=0;p<i;p++){const E=p+m,P=E,x=E+i+1,T=E+i+2,w=E+1;o.push(P,x,w),o.push(x,T,w)}}this.setIndex(o),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zc extends _n{constructor(t=new Hc([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(r,3)),this.setAttribute("uv",new Fe(a,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const _=u.holes;pi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=_.length;m<p;m++){const E=_[m];pi.isClockWise(E)===!0&&(_[m]=E.reverse())}const M=pi.triangulateShape(f,_);for(let m=0,p=_.length;m<p;m++){const E=_[m];f=f.concat(E)}for(let m=0,p=f.length;m<p;m++){const E=f[m];s.push(E.x,E.y,0),r.push(0,0,1),a.push(E.x,E.y)}for(let m=0,p=M.length;m<p;m++){const E=M[m],P=E[0]+d,x=E[1]+d,T=E[2]+d;i.push(P,x,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return V0(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new zc(i,t.curveSegments)}}function V0(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}function Fs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(hu(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(hu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=Fs(n[e]);for(const s in i)t[s]=i[s]}return t}function hu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function W0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const X0={clone:Fs,merge:$e};var Y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Y0,this.fragmentShader=q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=W0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ne().setHex(s.value);break;case"v2":this.uniforms[i].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Se().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class K0 extends Ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ss extends Ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Z0 extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class $0 extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ko={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(uu(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!uu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function uu(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class J0{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Q0=new J0;class Gc{constructor(t){this.manager=t!==void 0?t:Q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Gc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ms=new WeakMap;class j0 extends Gc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ko.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Ms.get(a);d===void 0&&(d=[],Ms.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=br("img");function l(){h(),e&&e(this);const d=Ms.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Ms.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),ko.remove(`image:${t}`);const u=Ms.get(this)||[];for(let f=0;f<u.length;f++){const _=u[f];_.onError&&_.onError(d)}Ms.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ko.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Ys extends Gc{constructor(t){super(t)}load(t,e,i,s){const r=new Oe,a=new j0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Gf extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class tv extends Gf{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Vo=new Se,du=new U,fu=new U;class ev{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;du.setFromMatrixPosition(t.matrixWorld),e.position.copy(du),fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Vo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===yr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const aa=new U,oa=new gn,On=new U;class kf extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(aa,oa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(aa,oa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Li=new U,pu=new gt,mu=new gt;class hn extends kf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,pu,mu),e.subVectors(mu,pu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class nv extends ev{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}}class iv extends Gf{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new nv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Vf extends kf{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ys=-90,bs=1;class sv extends tn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(ys,bs,t,e);s.layers=this.layers,this.add(s);const r=new hn(ys,bs,t,e);r.layers=this.layers,this.add(r);const a=new hn(ys,bs,t,e);a.layers=this.layers,this.add(a);const o=new hn(ys,bs,t,e);o.layers=this.layers,this.add(o);const l=new hn(ys,bs,t,e);l.layers=this.layers,this.add(l);const c=new hn(ys,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class rv extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const gu=new Se;class av{constructor(t,e,i=0,s=1/0){this.ray=new Uc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(t,e=!0,i=[]){return ec(t,this,i,e),i.sort(_u),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ec(t[s],this,i,e);return i.sort(_u),i}}function _u(n,t){return n.distance-t.distance}function ec(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)ec(r[a],t,e,!0)}}class vu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const qc=class qc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};qc.prototype.isMatrix2=!0;let xu=qc;class ov extends Bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Su(n,t,e,i){const s=lv(i);switch(e){case yf:return n*t;case Ef:return n*t/s.components*s.byteLength;case Ac:return n*t/s.components*s.byteLength;case is:return n*t*2/s.components*s.byteLength;case wc:return n*t*2/s.components*s.byteLength;case bf:return n*t*3/s.components*s.byteLength;case An:return n*t*4/s.components*s.byteLength;case Cc:return n*t*4/s.components*s.byteLength;case _a:case va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xa:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:case El:return Math.max(n,16)*Math.max(t,8)/4;case Ml:case bl:return Math.max(n,8)*Math.max(t,8)/2;case Tl:case Al:case Cl:case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wl:case Da:case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xl:case Yl:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kl:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case La:case $l:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lv(n){switch(n){case un:case vf:return{byteLength:1,components:1};case Sr:case xf:case ei:return{byteLength:2,components:1};case Ec:case Tc:return{byteLength:2,components:4};case ti:case bc:case qn:return{byteLength:4,components:1};case Sf:case Mf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function cv(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],M=d[f];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const M=d[f];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uv=`#ifdef USE_ALPHAHASH
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
#endif`,dv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gv=`#ifdef USE_AOMAP
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
#endif`,_v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vv=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bv=`#ifdef USE_IRIDESCENCE
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
#endif`,Ev=`#ifdef USE_BUMPMAP
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
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Iv=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Nv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uv=`vec3 transformedNormal = objectNormal;
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
#endif`,Ov=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
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
#endif`,Xv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$v=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jv=`#ifdef USE_GRADIENTMAP
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
}`,Qv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ex=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,nx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ox=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cx=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sx=`#if defined( USE_POINTS_UV )
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
#endif`,Mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ax=`#ifdef USE_MORPHTARGETS
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
#endif`,wx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ix=`#ifdef USE_NORMALMAP
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
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Zx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,Qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jx=`#ifdef USE_SKINNING
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
#endif`,tS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sS=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`#include <common>
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
}`,_S=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vS=`#define DISTANCE
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
}`,xS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`uniform float scale;
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
}`,bS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,TS=`uniform vec3 diffuse;
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
}`,AS=`#define LAMBERT
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
}`,wS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,CS=`#define MATCAP
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
}`,RS=`#define MATCAP
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
}`,PS=`#define NORMAL
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
}`,DS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LS=`#define PHONG
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
}`,IS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,NS=`#define STANDARD
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
}`,US=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,OS=`#define TOON
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
}`,FS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,BS=`uniform float size;
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
}`,HS=`uniform vec3 diffuse;
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
}`,zS=`#include <common>
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
}`,GS=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,kS=`uniform float rotation;
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
}`,VS=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:hv,alphahash_pars_fragment:uv,alphamap_fragment:dv,alphamap_pars_fragment:fv,alphatest_fragment:pv,alphatest_pars_fragment:mv,aomap_fragment:gv,aomap_pars_fragment:_v,batching_pars_vertex:vv,batching_vertex:xv,begin_vertex:Sv,beginnormal_vertex:Mv,bsdfs:yv,iridescence_fragment:bv,bumpmap_pars_fragment:Ev,clipping_planes_fragment:Tv,clipping_planes_pars_fragment:Av,clipping_planes_pars_vertex:wv,clipping_planes_vertex:Cv,color_fragment:Rv,color_pars_fragment:Pv,color_pars_vertex:Dv,color_vertex:Lv,common:Iv,cube_uv_reflection_fragment:Nv,defaultnormal_vertex:Uv,displacementmap_pars_vertex:Ov,displacementmap_vertex:Fv,emissivemap_fragment:Bv,emissivemap_pars_fragment:Hv,colorspace_fragment:zv,colorspace_pars_fragment:Gv,envmap_fragment:kv,envmap_common_pars_fragment:Vv,envmap_pars_fragment:Wv,envmap_pars_vertex:Xv,envmap_physical_pars_fragment:nx,envmap_vertex:Yv,fog_vertex:qv,fog_pars_vertex:Kv,fog_fragment:Zv,fog_pars_fragment:$v,gradientmap_pars_fragment:Jv,lightmap_pars_fragment:Qv,lights_lambert_fragment:jv,lights_lambert_pars_fragment:tx,lights_pars_begin:ex,lights_toon_fragment:ix,lights_toon_pars_fragment:sx,lights_phong_fragment:rx,lights_phong_pars_fragment:ax,lights_physical_fragment:ox,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:hx,lights_fragment_end:ux,lightprobes_pars_fragment:dx,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:_x,map_pars_fragment:vx,map_particle_fragment:xx,map_particle_pars_fragment:Sx,metalnessmap_fragment:Mx,metalnessmap_pars_fragment:yx,morphinstance_vertex:bx,morphcolor_vertex:Ex,morphnormal_vertex:Tx,morphtarget_pars_vertex:Ax,morphtarget_vertex:wx,normal_fragment_begin:Cx,normal_fragment_maps:Rx,normal_pars_fragment:Px,normal_pars_vertex:Dx,normal_vertex:Lx,normalmap_pars_fragment:Ix,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Ox,iridescence_pars_fragment:Fx,opaque_fragment:Bx,packing:Hx,premultiplied_alpha_fragment:zx,project_vertex:Gx,dithering_fragment:kx,dithering_pars_fragment:Vx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:qx,shadowmap_vertex:Kx,shadowmask_pars_fragment:Zx,skinbase_vertex:$x,skinning_pars_vertex:Jx,skinning_vertex:Qx,skinnormal_vertex:jx,specularmap_fragment:tS,specularmap_pars_fragment:eS,tonemapping_fragment:nS,tonemapping_pars_fragment:iS,transmission_fragment:sS,transmission_pars_fragment:rS,uv_pars_fragment:aS,uv_pars_vertex:oS,uv_vertex:lS,worldpos_vertex:cS,background_vert:hS,background_frag:uS,backgroundCube_vert:dS,backgroundCube_frag:fS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:_S,distance_vert:vS,distance_frag:xS,equirect_vert:SS,equirect_frag:MS,linedashed_vert:yS,linedashed_frag:bS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:AS,meshlambert_frag:wS,meshmatcap_vert:CS,meshmatcap_frag:RS,meshnormal_vert:PS,meshnormal_frag:DS,meshphong_vert:LS,meshphong_frag:IS,meshphysical_vert:NS,meshphysical_frag:US,meshtoon_vert:OS,meshtoon_frag:FS,points_vert:BS,points_frag:HS,shadow_vert:zS,shadow_frag:GS,sprite_vert:kS,sprite_frag:VS},Tt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Vn={basic:{uniforms:$e([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:$e([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:$e([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:$e([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:$e([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:$e([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:$e([Tt.points,Tt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:$e([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:$e([Tt.common,Tt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:$e([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:$e([Tt.sprite,Tt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:$e([Tt.common,Tt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:$e([Tt.lights,Tt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Vn.physical={uniforms:$e([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const la={r:0,b:0,g:0},WS=new Se,Xf=new Wt;Xf.set(-1,0,0,0,1,0,0,0,1);function XS(n,t,e,i,s,r){const a=new ne(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(E){let P=E.isScene===!0?E.background:null;if(P&&P.isTexture){const x=E.backgroundBlurriness>0;P=t.get(P,x)}return P}function _(E){let P=!1;const x=f(E);x===null?m(a,o):x&&x.isColor&&(m(x,1),P=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(E,P){const x=f(P);x&&(x.isCubeTexture||x.mapping===Za)?(c===void 0&&(c=new xe(new Bs(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Fs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(WS.makeRotationFromEuler(P.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xf),c.material.toneMapped=ee.getTransfer(x.colorSpace)!==ce,(h!==x||d!==x.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new xe(new Fi(2,2),new Ln({name:"BackgroundMaterial",uniforms:Fs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,P){E.getRGB(la,zf(n)),e.buffers.color.setClear(la.r,la.g,la.b,P,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,P=1){a.set(E),o=P,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:_,addToRenderList:M,dispose:p}}function YS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(D,V,Y,H,X){let j=!1;const q=d(D,H,Y,V);r!==q&&(r=q,c(r.object)),j=f(D,H,Y,X),j&&_(D,H,Y,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(D,V,Y,H),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function d(D,V,Y,H){const X=H.wireframe===!0;let j=i[V.id];j===void 0&&(j={},i[V.id]=j);const q=D.isInstancedMesh===!0?D.id:0;let at=j[q];at===void 0&&(at={},j[q]=at);let nt=at[Y.id];nt===void 0&&(nt={},at[Y.id]=nt);let ct=nt[X];return ct===void 0&&(ct=u(l()),nt[X]=ct),ct}function u(D){const V=[],Y=[],H=[];for(let X=0;X<e;X++)V[X]=0,Y[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:H,object:D,attributes:{},index:null}}function f(D,V,Y,H){const X=r.attributes,j=V.attributes;let q=0;const at=Y.getAttributes();for(const nt in at)if(at[nt].location>=0){const lt=X[nt];let wt=j[nt];if(wt===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(wt=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(wt=D.instanceColor)),lt===void 0||lt.attribute!==wt||wt&&lt.data!==wt.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function _(D,V,Y,H){const X={},j=V.attributes;let q=0;const at=Y.getAttributes();for(const nt in at)if(at[nt].location>=0){let lt=j[nt];lt===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor));const wt={};wt.attribute=lt,lt&&lt.data&&(wt.data=lt.data),X[nt]=wt,q++}r.attributes=X,r.attributesNum=q,r.index=H}function M(){const D=r.newAttributes;for(let V=0,Y=D.length;V<Y;V++)D[V]=0}function m(D){p(D,0)}function p(D,V){const Y=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;Y[D]=1,H[D]===0&&(n.enableVertexAttribArray(D),H[D]=1),X[D]!==V&&(n.vertexAttribDivisor(D,V),X[D]=V)}function E(){const D=r.newAttributes,V=r.enabledAttributes;for(let Y=0,H=V.length;Y<H;Y++)V[Y]!==D[Y]&&(n.disableVertexAttribArray(Y),V[Y]=0)}function P(D,V,Y,H,X,j,q){q===!0?n.vertexAttribIPointer(D,V,Y,X,j):n.vertexAttribPointer(D,V,Y,H,X,j)}function x(D,V,Y,H){M();const X=H.attributes,j=Y.getAttributes(),q=V.defaultAttributeValues;for(const at in j){const nt=j[at];if(nt.location>=0){let ct=X[at];if(ct===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(ct=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(ct=D.instanceColor)),ct!==void 0){const lt=ct.normalized,wt=ct.itemSize,Dt=t.get(ct);if(Dt===void 0)continue;const te=Dt.buffer,Yt=Dt.type,qt=Dt.bytesPerElement,it=Yt===n.INT||Yt===n.UNSIGNED_INT||ct.gpuType===bc;if(ct.isInterleavedBufferAttribute){const tt=ct.data,vt=tt.stride,Ht=ct.offset;if(tt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<nt.locationSize;Ct++)p(nt.location+Ct,tt.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Ct=0;Ct<nt.locationSize;Ct++)m(nt.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,te);for(let Ct=0;Ct<nt.locationSize;Ct++)P(nt.location+Ct,wt/nt.locationSize,Yt,lt,vt*qt,(Ht+wt/nt.locationSize*Ct)*qt,it)}else{if(ct.isInstancedBufferAttribute){for(let tt=0;tt<nt.locationSize;tt++)p(nt.location+tt,ct.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let tt=0;tt<nt.locationSize;tt++)m(nt.location+tt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let tt=0;tt<nt.locationSize;tt++)P(nt.location+tt,wt/nt.locationSize,Yt,lt,wt*qt,wt/nt.locationSize*tt*qt,it)}}else if(q!==void 0){const lt=q[at];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(nt.location,lt);break;case 3:n.vertexAttrib3fv(nt.location,lt);break;case 4:n.vertexAttrib4fv(nt.location,lt);break;default:n.vertexAttrib1fv(nt.location,lt)}}}}E()}function T(){b();for(const D in i){const V=i[D];for(const Y in V){const H=V[Y];for(const X in H){const j=H[X];for(const q in j)h(j[q].object),delete j[q];delete H[X]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;const V=i[D.id];for(const Y in V){const H=V[Y];for(const X in H){const j=H[X];for(const q in j)h(j[q].object),delete j[q];delete H[X]}}delete i[D.id]}function I(D){for(const V in i){const Y=i[V];for(const H in Y){const X=Y[H];if(X[D.id]===void 0)continue;const j=X[D.id];for(const q in j)h(j[q].object),delete j[q];delete X[D.id]}}}function v(D){for(const V in i){const Y=i[V],H=D.isInstancedMesh===!0?D.id:0,X=Y[H];if(X!==void 0){for(const j in X){const q=X[j];for(const at in q)h(q[at].object),delete q[at];delete X[j]}delete Y[H],Object.keys(Y).length===0&&delete i[V]}}}function b(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:m,disableUnusedAttributes:E}}function qS(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function KS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==An&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const v=I===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==un&&I!==qn&&!v&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:P,maxFragmentUniforms:x,maxSamples:T,samples:w}}function ZS(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new En,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const E=r?0:i,P=E*4;let x=p.clippingState||null;l.value=x,x=h(_,u,P,f);for(let T=0;T!==P;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,_){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const p=f+M*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,x=f;P!==M;++P,x+=4)a.copy(d[P]).applyMatrix4(E,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const Rs=4,$S=6,JS=20,QS=256,qs=new Vf,Mu=new ne;let Wo=null,Xo=0,Yo=0,qo=!1;const jS=new U,Yi=new U;class yu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=jS}=r;Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,Yo),this._renderer.xr.enabled=qo,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:ei,format:An,colorSpace:Ia,depthBuffer:!1},s=bu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tM(r)),this._blurMaterial=nM(r,t,e),this._ggxMaterial=eM(r,t,e)}return s}_compileMaterial(t){const e=new xe(new _n,t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,i,s,r){const l=new hn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Mu),d.toneMapping=$n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new Bs,new yn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy(Mu),p=!0);for(let P=0;P<6;P++){const x=P%3;x===0?(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[P],r.y,r.z)):x===1?(l.up.set(0,0,c[P]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[P],r.z)):(l.up.set(0,c[P],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[P]));const T=this._cubeSize;Es(s,x*T,P>2?T:0,T,T),d.setRenderTarget(s),p&&d.render(M,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=E}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ns||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,qs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-Rs?i-_+Rs:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,Es(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Es(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,qs)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-Rs?s-this._lodMax+Rs:0),u=4*(this._cubeSize-h);Es(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,qs)}}function tM(n){const t=[],e=[];let i=n;const s=n-Rs+1+$S;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,_=new Float32Array(f*u*d),M=new Float32Array(f*u*d);for(let p=0;p<d;p++){const E=p%3*2/3-1,P=p>2?0:-1,x=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];_.set(x,f*u*p);for(let T=0;T<u;T++){const w=h[T*2]*2-1,I=h[T*2+1]*2-1;p===0?Yi.set(1,I,w):p===1?Yi.set(-w,1,-I):p===2?Yi.set(-w,I,1):p===3?Yi.set(-1,I,-w):p===4?Yi.set(-w,-1,I):Yi.set(w,I,-1),Yi.toArray(M,(p*u+T)*f)}}const m=new _n;m.setAttribute("position",new Jn(_,f)),m.setAttribute("outputDirection",new Jn(M,f)),e.push(new xe(m,null)),i>Rs&&i--}return{lodMeshes:e,sizeLods:t}}function bu(n,t,e){const i=new Pn(n,t,e);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function eM(n,t,e){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function nM(n,t,e){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:JS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Eu(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Tu(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Yf extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Pf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bs(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:gi});r.uniforms.tEquirect.value=e;const a=new xe(s,r),o=e.minFilter;return e.minFilter===Zi&&(e.minFilter=We),new sv(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function iM(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===mo||f===go)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new Yf(_.height);return M.fromEquirectangularTexture(n,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,_=f===mo||f===go,M=f===ns||f===Us;if(_||M){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new yu(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const E=u.image;return _&&E&&E.height>0||M&&E&&l(E)?(i===null&&(i=new yu(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===mo?u.mapping=ns:f===go&&(u.mapping=Us),u}function l(u){let f=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&f++;return f===_}function c(u){const f=u.target;f.removeEventListener("dispose",c);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function sM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ls("WebGLRenderer: "+i+" extension not supported."),s}}}function rM(n,t,e,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,_=d.attributes.position;let M=0;if(_===void 0)return;if(f!==null){const E=f.array;M=f.version;for(let P=0,x=E.length;P<x;P+=3){const T=E[P+0],w=E[P+1],I=E[P+2];u.push(T,w,w,I,I,T)}}else{const E=_.array;M=_.version;for(let P=0,x=E.length/3-1;P<x;P+=3){const T=P+0,w=P+1,I=P+2;u.push(T,w,w,I,I,T)}}const m=new(_.count>=65535?Rf:Cf)(u,1);m.version=M;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function aM(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function oM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lM(n,t,e){const i=new WeakMap,s=new Me;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let b=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let P=0;f===!0&&(P=1),_===!0&&(P=2),M===!0&&(P=3);let x=o.attributes.position.count*P,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const w=new Float32Array(x*T*4*d),I=new Af(w,x,T,d);I.type=qn,I.needsUpdate=!0;const v=P*4;for(let R=0;R<d;R++){const D=m[R],V=p[R],Y=E[R],H=x*T*4*R;for(let X=0;X<D.count;X++){const j=X*v;f===!0&&(s.fromBufferAttribute(D,X),w[H+j+0]=s.x,w[H+j+1]=s.y,w[H+j+2]=s.z,w[H+j+3]=0),_===!0&&(s.fromBufferAttribute(V,X),w[H+j+4]=s.x,w[H+j+5]=s.y,w[H+j+6]=s.z,w[H+j+7]=0),M===!0&&(s.fromBufferAttribute(Y,X),w[H+j+8]=s.x,w[H+j+9]=s.y,w[H+j+10]=s.z,w[H+j+11]=Y.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new gt(x,T)},i.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function cM(n,t,e,i,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const hM={[hf]:"LINEAR_TONE_MAPPING",[uf]:"REINHARD_TONE_MAPPING",[df]:"CINEON_TONE_MAPPING",[ff]:"ACES_FILMIC_TONE_MAPPING",[mf]:"AGX_TONE_MAPPING",[gf]:"NEUTRAL_TONE_MAPPING",[pf]:"CUSTOM_TONE_MAPPING"};function uM(n,t,e,i,s,r){const a=new Pn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new _n;c.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const h=new K0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new xe(c,h),u=new Vf(-1,1,1,-1,0,1);let f=null,_=null,M=!1,m,p=null,E=[],P=!1;this.setSize=function(x,T){a.setSize(x,T),o!==null&&o.setSize(x,T),l!==null&&l.setSize(x,T);for(let w=0;w<E.length;w++){const I=E[w];I.setSize&&I.setSize(x,T)}},this.setEffects=function(x){E=x,P=E.length>0&&E[0].isRenderPass===!0;const T=a.width,w=a.height;E.length>0&&o===null&&(o=new Pn(T,w,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new Pn(T,w,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<E.length;I++){const v=E[I];v.setSize&&v.setSize(T,w)}},this.begin=function(x,T){if(M||x.toneMapping===$n&&E.length===0)return!1;if(p=T,T!==null){const w=T.width,I=T.height;(a.width!==w||a.height!==I)&&this.setSize(w,I)}return P===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=$n,!0},this.hasRenderPass=function(){return P},this.end=function(x,T){x.toneMapping=m,M=!0;let w=a,I=o;for(let v=0;v<E.length;v++){const b=E[v];b.enabled!==!1&&(b.render(x,I,w,T),b.needsSwap!==!1&&(w=I,I=I===o?l:o))}if(f!==x.outputColorSpace||_!==x.toneMapping){f=x.outputColorSpace,_=x.toneMapping,h.defines={},ee.getTransfer(f)===ce&&(h.defines.SRGB_TRANSFER="");const v=hM[_];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(p),x.render(d,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const qf=new Oe,nc=new Tr(1,1),Kf=new Af,Zf=new X_,$f=new Pf,Au=[],wu=[],Cu=new Float32Array(16),Ru=new Float32Array(9),Pu=new Float32Array(4);function Hs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Au[s];if(r===void 0&&(r=new Float32Array(s),Au[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ja(n,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function dM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function pM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function mM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function gM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Pu.set(i),n.uniformMatrix2fv(this.addr,!1,Pu),Le(e,i)}}function _M(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Ru.set(i),n.uniformMatrix3fv(this.addr,!1,Ru),Le(e,i)}}function vM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),Le(e,i)}}function xM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function SM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function MM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function yM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function bM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function EM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function TM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function AM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function wM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(nc.compareFunction=e.isReversedDepthBuffer()?Pc:Rc,r=nc):r=qf,e.setTexture2D(t||r,s)}function CM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Zf,s)}function RM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||$f,s)}function PM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Kf,s)}function DM(n){switch(n){case 5126:return dM;case 35664:return fM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return _M;case 35676:return vM;case 5124:case 35670:return xM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return yM;case 5125:return bM;case 36294:return EM;case 36295:return TM;case 36296:return AM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return PM}}function LM(n,t){n.uniform1fv(this.addr,t)}function IM(n,t){const e=Hs(t,this.size,2);n.uniform2fv(this.addr,e)}function NM(n,t){const e=Hs(t,this.size,3);n.uniform3fv(this.addr,e)}function UM(n,t){const e=Hs(t,this.size,4);n.uniform4fv(this.addr,e)}function OM(n,t){const e=Hs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function FM(n,t){const e=Hs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function BM(n,t){const e=Hs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function HM(n,t){n.uniform1iv(this.addr,t)}function zM(n,t){n.uniform2iv(this.addr,t)}function GM(n,t){n.uniform3iv(this.addr,t)}function kM(n,t){n.uniform4iv(this.addr,t)}function VM(n,t){n.uniform1uiv(this.addr,t)}function WM(n,t){n.uniform2uiv(this.addr,t)}function XM(n,t){n.uniform3uiv(this.addr,t)}function YM(n,t){n.uniform4uiv(this.addr,t)}function qM(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=nc:a=qf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function KM(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zf,r[a])}function ZM(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$f,r[a])}function $M(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kf,r[a])}function JM(n){switch(n){case 5126:return LM;case 35664:return IM;case 35665:return NM;case 35666:return UM;case 35674:return OM;case 35675:return FM;case 35676:return BM;case 5124:case 35670:return HM;case 35667:case 35671:return zM;case 35668:case 35672:return GM;case 35669:case 35673:return kM;case 5125:return VM;case 36294:return WM;case 36295:return XM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return $M}}class QM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=DM(e.type)}}class jM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=JM(e.type)}}class ty{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Du(n,t){n.seq.push(t),n.map[t.id]=t}function ey(n,t,e){const i=n.name,s=i.length;for(Ko.lastIndex=0;;){const r=Ko.exec(i),a=Ko.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Du(e,c===void 0?new QM(o,n,t):new jM(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new ty(o),Du(e,d)),e=d}}}class Ma{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ey(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Lu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const ny=37297;let iy=0;function sy(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Iu=new Wt;function ry(n){ee._getMatrix(Iu,ee.workingColorSpace,n);const t=`mat3( ${Iu.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case Na:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+sy(n.getShaderSource(t),o)}else return r}function ay(n,t){const e=ry(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const oy={[hf]:"Linear",[uf]:"Reinhard",[df]:"Cineon",[ff]:"ACESFilmic",[mf]:"AgX",[gf]:"Neutral",[pf]:"Custom"};function ly(n,t){const e=oy[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new U;function cy(){ee.getLuminanceCoefficients(ca);const n=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function uy(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dy(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function tr(n){return n!==""}function Uu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ou(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(n){return n.replace(fy,my)}const py=new Map;function my(n,t){let e=Jt[t];if(e===void 0){const i=py.get(t);if(i!==void 0)e=Jt[i],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ic(e)}const gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(n){return n.replace(gy,_y)}function _y(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const vy={[ga]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function xy(n){return vy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sy={[ns]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function My(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Sy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const yy={[Us]:"ENVMAP_MODE_REFRACTION"};function by(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ey={[cf]:"ENVMAP_BLENDING_MULTIPLY",[o_]:"ENVMAP_BLENDING_MIX",[l_]:"ENVMAP_BLENDING_ADD"};function Ty(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ey[n.combine]||"ENVMAP_BLENDING_NONE"}function Ay(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function wy(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=xy(e),c=My(e),h=by(e),d=Ty(e),u=Ay(e),f=hy(e),_=uy(r),M=s.createProgram();let m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(tr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(m=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Jt.tonemapping_pars_fragment:"",e.toneMapping!==$n?ly("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,ay("linearToOutputTexel",e.outputColorSpace),cy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),a=ic(a),a=Uu(a,e),a=Ou(a,e),o=ic(o),o=Uu(o,e),o=Ou(o,e),a=Fu(a),o=Fu(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=E+m+a,x=E+p+o,T=Lu(s,s.VERTEX_SHADER,P),w=Lu(s,s.FRAGMENT_SHADER,x);s.attachShader(M,T),s.attachShader(M,w),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(D){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(M)||"",Y=s.getShaderInfoLog(T)||"",H=s.getShaderInfoLog(w)||"",X=V.trim(),j=Y.trim(),q=H.trim();let at=!0,nt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,T,w);else{const ct=Nu(s,T,"vertex"),lt=Nu(s,w,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+ct+`
`+lt)}else X!==""?Vt("WebGLProgram: Program Info Log:",X):(j===""||q==="")&&(nt=!1);nt&&(D.diagnostics={runnable:at,programLog:X,vertexShader:{log:j,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(T),s.deleteShader(w),v=new Ma(s,M),b=dy(s,M)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,ny)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iy++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=w,this}let Cy=0;class Ry{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Py(t),e.set(t,i)),i}}class Py{constructor(t){this.id=Cy++,this.code=t,this.usedTimes=0}}function Dy(n){return n===is||n===Da||n===La}function Ly(n,t,e,i,s,r){const a=new Ic,o=new Ry,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,b,R,D,V,Y){const H=D.fog,X=V.geometry,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,at=t.get(v.envMap||j,q),nt=at&&at.mapping===Za?at.image.height:null,ct=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Vt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,wt=lt!==void 0?lt.length:0;let Dt=0;X.morphAttributes.position!==void 0&&(Dt=1),X.morphAttributes.normal!==void 0&&(Dt=2),X.morphAttributes.color!==void 0&&(Dt=3);let te,Yt,qt,it;if(ct){const pe=Vn[ct];te=pe.vertexShader,Yt=pe.fragmentShader}else{te=v.vertexShader,Yt=v.fragmentShader;const pe=o.getVertexShaderStage(v),re=o.getFragmentShaderStage(v);o.update(v,pe,re),qt=pe.id,it=re.id}const tt=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Ht=V.isInstancedMesh===!0,Ct=V.isBatchedMesh===!0,A=!!v.map,N=!!v.matcap,L=!!at,z=!!v.aoMap,B=!!v.lightMap,G=!!v.bumpMap&&v.wireframe===!1,$=!!v.normalMap,ot=!!v.displacementMap,st=!!v.emissiveMap,J=!!v.metalnessMap,pt=!!v.roughnessMap,C=v.anisotropy>0,xt=v.clearcoat>0,St=v.dispersion>0,y=v.retroreflectivity>0,g=v.iridescence>0,O=v.sheen>0,W=v.transmission>0,Q=C&&!!v.anisotropyMap,ft=xt&&!!v.clearcoatMap,mt=xt&&!!v.clearcoatNormalMap,rt=xt&&!!v.clearcoatRoughnessMap,ht=g&&!!v.iridescenceMap,_t=g&&!!v.iridescenceThicknessMap,Lt=O&&!!v.sheenColorMap,yt=O&&!!v.sheenRoughnessMap,Mt=!!v.specularMap,zt=!!v.specularColorMap,kt=!!v.specularIntensityMap,Kt=W&&!!v.transmissionMap,k=W&&!!v.thicknessMap,bt=!!v.gradientMap,ut=!!v.alphaMap,Et=v.alphaTest>0,Pt=!!v.alphaHash,dt=!!v.extensions;let Gt=$n;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Gt=n.toneMapping);const Ft={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:te,fragmentShader:Yt,defines:v.defines,customVertexShaderID:qt,customFragmentShaderID:it,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&V._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&V.instanceColor!==null,instancingMorph:Ht&&V.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:A,matcap:N,envMap:L,envMapMode:L&&at.mapping,envMapCubeUVHeight:nt,aoMap:z,lightMap:B,bumpMap:G,normalMap:$,displacementMap:ot,emissiveMap:st,normalMapObjectSpace:$&&v.normalMapType===u_,normalMapTangentSpace:$&&v.normalMapType===Jl,packedNormalMap:$&&v.normalMapType===Jl&&Dy(v.normalMap.format),metalnessMap:J,roughnessMap:pt,anisotropy:C,anisotropyMap:Q,clearcoat:xt,clearcoatMap:ft,clearcoatNormalMap:mt,clearcoatRoughnessMap:rt,dispersion:St,retroreflection:y,iridescence:g,iridescenceMap:ht,iridescenceThicknessMap:_t,sheen:O,sheenColorMap:Lt,sheenRoughnessMap:yt,specularMap:Mt,specularColorMap:zt,specularIntensityMap:kt,transmission:W,transmissionMap:Kt,thicknessMap:k,gradientMap:bt,opaque:v.transparent===!1&&v.blending===or&&v.alphaToCoverage===!1,alphaMap:ut,alphaTest:Et,alphaHash:Pt,combine:v.combine,mapUv:A&&_(v.map.channel),aoMapUv:z&&_(v.aoMap.channel),lightMapUv:B&&_(v.lightMap.channel),bumpMapUv:G&&_(v.bumpMap.channel),normalMapUv:$&&_(v.normalMap.channel),displacementMapUv:ot&&_(v.displacementMap.channel),emissiveMapUv:st&&_(v.emissiveMap.channel),metalnessMapUv:J&&_(v.metalnessMap.channel),roughnessMapUv:pt&&_(v.roughnessMap.channel),anisotropyMapUv:Q&&_(v.anisotropyMap.channel),clearcoatMapUv:ft&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:mt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(v.sheenRoughnessMap.channel),specularMapUv:Mt&&_(v.specularMap.channel),specularColorMapUv:zt&&_(v.specularColorMap.channel),specularIntensityMapUv:kt&&_(v.specularIntensityMap.channel),transmissionMapUv:Kt&&_(v.transmissionMap.channel),thicknessMapUv:k&&_(v.thicknessMap.channel),alphaMapUv:ut&&_(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&($||C),vertexNormals:!!X.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(A||ut),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||X.attributes.normal===void 0&&$===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Dt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:A&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===ce,decodeVideoTextureEmissive:st&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ve,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:dt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&v.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)b.push(R),b.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(b,v),E(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function p(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function E(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function P(v){const b=f[v.type];let R;if(b){const D=Vn[b];R=X0.clone(D.uniforms)}else R=v.uniforms;return R}function x(v,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new wy(n,b,v,s),c.push(R),h.set(b,R)),R}function T(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function I(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:P,acquireProgram:x,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:I}}function Iy(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ny(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Hu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function zu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,M,m,p){let E=n[t];return E===void 0?(E={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},n[t]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=_,E.materialVariant=a(u),E.groupOrder=M,E.renderOrder=u.renderOrder,E.z=m,E.group=p),t++,E}function l(u,f,_,M,m,p,E){E.reversedDepth===!0&&(m=-m);const P=o(u,f,_,M,m,p);_.transmission>0?i.push(P):_.transparent===!0?s.push(P):e.push(P)}function c(u,f,_,M,m,p){const E=o(u,f,_,M,m,p);_.transmission>0?i.unshift(E):_.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,f){e.length>1&&e.sort(u||Ny),i.length>1&&i.sort(f||Hu),s.length>1&&s.sort(f||Hu)}function d(){for(let u=t,f=n.length;u<f;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Uy(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new zu,n.set(i,[a])):s>=r.length?(a=new zu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Oy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new ne};break;case"SpotLight":e={position:new U,direction:new U,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function Fy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let By=0;function Hy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function zy(n){const t=new Oy,e=Fy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new Se,a=new Se;function o(c){let h=0,d=0,u=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let f=0,_=0,M=0,m=0,p=0,E=0,P=0,x=0,T=0,w=0,I=0,v=0,b=0,R=0;c.sort(Hy);for(let V=0,Y=c.length;V<Y;V++){const H=c[V],X=H.color,j=H.intensity,q=H.distance;let at=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===is?at=H.shadow.map.texture:at=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)h+=X.r*j,d+=X.g*j,u+=X.b*j;else if(H.isLightProbe){for(let nt=0;nt<9;nt++)i.probe[nt].addScaledVector(H.sh.coefficients[nt],j);R++}else if(H.isSunLight){const nt=t.get(H);if(nt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ct=H.shadow,lt=e.get(H);lt.shadowIntensity=ct.intensity,lt.shadowBias=ct.bias,lt.shadowNormalBias=ct.normalBias,lt.shadowRadius=ct.radius,lt.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),i.sunShadow[_]=lt,i.sunShadowMap[_]=at;const wt=ct.getViewportCount();for(let Dt=0;Dt<wt;Dt++)i.sunShadowMatrix[M+Dt]=ct.getMatrix(Dt),i.sunShadowCascade[M+Dt]=ct._cascadeData[Dt];M+=wt,_++}i.sun[f]=nt,f++}else if(H.isDirectionalLight){const nt=t.get(H);if(nt.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ct=H.shadow,lt=e.get(H);lt.shadowIntensity=ct.intensity,lt.shadowBias=ct.bias,lt.shadowNormalBias=ct.normalBias,lt.shadowRadius=ct.radius,lt.shadowMapSize=ct.mapSize,i.directionalShadow[m]=lt,i.directionalShadowMap[m]=at,i.directionalShadowMatrix[m]=H.shadow.matrix,T++}i.directional[m]=nt,m++}else if(H.isSpotLight){const nt=t.get(H);nt.position.setFromMatrixPosition(H.matrixWorld),nt.color.copy(X).multiplyScalar(j),nt.distance=q,nt.coneCos=Math.cos(H.angle),nt.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),nt.decay=H.decay,i.spot[E]=nt;const ct=H.shadow;if(H.map&&(i.spotLightMap[v]=H.map,v++,ct.updateMatrices(H),H.castShadow&&b++),i.spotLightMatrix[E]=ct.matrix,H.castShadow){const lt=e.get(H);lt.shadowIntensity=ct.intensity,lt.shadowBias=ct.bias,lt.shadowNormalBias=ct.normalBias,lt.shadowRadius=ct.radius,lt.shadowMapSize=ct.mapSize,i.spotShadow[E]=lt,i.spotShadowMap[E]=at,I++}E++}else if(H.isRectAreaLight){const nt=t.get(H);nt.color.copy(X).multiplyScalar(j),nt.halfWidth.set(H.width*.5,0,0),nt.halfHeight.set(0,H.height*.5,0),i.rectArea[P]=nt,P++}else if(H.isPointLight){const nt=t.get(H);if(nt.color.copy(H.color).multiplyScalar(H.intensity),nt.distance=H.distance,nt.decay=H.decay,H.castShadow){const ct=H.shadow,lt=e.get(H);lt.shadowIntensity=ct.intensity,lt.shadowBias=ct.bias,lt.shadowNormalBias=ct.normalBias,lt.shadowRadius=ct.radius,lt.shadowMapSize=ct.mapSize,lt.shadowCameraNear=ct.camera.near,lt.shadowCameraFar=ct.camera.far,i.pointShadow[p]=lt,i.pointShadowMap[p]=at,i.pointShadowMatrix[p]=H.shadow.matrix,w++}i.point[p]=nt,p++}else if(H.isHemisphereLight){const nt=t.get(H);nt.skyColor.copy(H.color).multiplyScalar(j),nt.groundColor.copy(H.groundColor).multiplyScalar(j),i.hemi[x]=nt,x++}}P>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==E||D.rectAreaLength!==P||D.hemiLength!==x||D.numSunShadows!==_||D.numDirectionalShadows!==T||D.numPointShadows!==w||D.numSpotShadows!==I||D.numSpotMaps!==v||D.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=E,i.rectArea.length=P,i.point.length=p,i.hemi.length=x,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+v-b,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=E,D.rectAreaLength=P,D.hemiLength=x,D.numSunShadows=_,D.numDirectionalShadows=T,D.numPointShadows=w,D.numSpotShadows=I,D.numSpotMaps=v,D.numLightProbes=R,i.version=By++)}function l(c,h){let d=0,u=0,f=0,_=0,M=0,m=0;const p=h.matrixWorldInverse;for(let E=0,P=c.length;E<P;E++){const x=c[E];if(x.isSunLight){const T=i.sun[d];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(x.isSpotLight){const T=i.spot[_];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const T=i.rectArea[M];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Gu(n){const t=new zy(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Gy(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Gu(n),t.set(s,[o])):r>=a.length?(o=new Gu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wy=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Xy=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],ku=new Se,Ks=new U,Zo=new U;function Yy(n,t,e){let i=new Oc;const s=new gt,r=new gt,a=new Me,o=new Z0,l=new $0,c={},h=e.maxTextureSize,d={[es]:rn,[rn]:es,[Ve]:Ve},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:ky,fragmentShader:Vy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new xe(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ga;let p=this.type;this.render=function(w,I,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===kg&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ga);const b=n.getRenderTarget(),R=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),V=n.state;V.setBlending(gi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Y=p!==this.type;Y&&I.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(X=>X.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,X=w.length;H<X;H++){const j=w[H],q=j.shadow;if(q===void 0){Vt("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const at=q.getFrameExtents();s.multiply(at),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,q.mapSize.y=r.y));const nt=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=nt,q.map===null||Y===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Qs){if(j.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Pn(s.x,s.y,{format:is,type:ei,minFilter:We,magFilter:We,generateMipmaps:!1}),q.map.texture.name=j.name+".shadowMap",q.map.depthTexture=new Tr(s.x,s.y,qn),q.map.depthTexture.name=j.name+".shadowMapDepth",q.map.depthTexture.format=yi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ue,q.map.depthTexture.magFilter=Ue}else j.isPointLight?(q.map=new Yf(s.x),q.map.depthTexture=new c0(s.x,ti)):(q.map=new Pn(s.x,s.y),q.map.depthTexture=new Tr(s.x,s.y,ti)),q.map.depthTexture.name=j.name+".shadowMap",q.map.depthTexture.format=yi,this.type===ga?(q.map.depthTexture.compareFunction=nt?Pc:Rc,q.map.depthTexture.minFilter=We,q.map.depthTexture.magFilter=We):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ue,q.map.depthTexture.magFilter=Ue);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);const ct=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();j.isPointLight!==!0&&q.updateMatrices(j,v);for(let lt=0;lt<ct;lt++){const wt=q.getCamera(lt);if(j.isPointLight){const Dt=q.camera,te=q.matrix,Yt=j.distance||Dt.far;Yt!==Dt.far&&(Dt.far=Yt,Dt.updateProjectionMatrix()),Ks.setFromMatrixPosition(j.matrixWorld),Dt.position.copy(Ks),Zo.copy(Dt.position),Zo.add(Wy[lt]),Dt.up.copy(Xy[lt]),Dt.lookAt(Zo),Dt.updateMatrixWorld(),te.makeTranslation(-Ks.x,-Ks.y,-Ks.z),ku.multiplyMatrices(Dt.projectionMatrix,Dt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(ku,Dt.coordinateSystem,Dt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,lt),n.clear();else{lt===0&&(n.setRenderTarget(q.map),n.clear());const Dt=q.getViewport(lt);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),V.viewport(a)}i=q.getFrustum(lt),x(I,v,wt,j,this.type)}q.isPointLightShadow!==!0&&this.type===Qs&&E(q,v),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,R,D)};function E(w,I){const v=t.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Pn(s.x,s.y,{format:is,type:ei}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(I,null,v,u,M,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(I,null,v,f,M,null)}function P(w,I,v,b){let R=null;const D=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)R=D;else if(R=v.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const V=R.uuid,Y=I.uuid;let H=c[V];H===void 0&&(H={},c[V]=H);let X=H[Y];X===void 0&&(X=R.clone(),H[Y]=X,I.addEventListener("dispose",T)),R=X}if(R.visible=I.visible,R.wireframe=I.wireframe,b===Qs?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:d[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const V=n.properties.get(R);V.light=v}return R}function x(w,I,v,b,R){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Qs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const Y=t.update(w),H=w.material;if(Array.isArray(H)){const X=Y.groups;for(let j=0,q=X.length;j<q;j++){const at=X[j],nt=H[at.materialIndex];if(nt&&nt.visible){const ct=P(w,nt,b,R);w.onBeforeShadow(n,w,I,v,Y,ct,at),n.renderBufferDirect(v,null,Y,ct,w,at),w.onAfterShadow(n,w,I,v,Y,ct,at)}}}else if(H.visible){const X=P(w,H,b,R);w.onBeforeShadow(n,w,I,v,Y,X,null),n.renderBufferDirect(v,null,Y,X,w,null),w.onAfterShadow(n,w,I,v,Y,X,null)}}const V=w.children;for(let Y=0,H=V.length;Y<H;Y++)x(V[Y],I,v,b,R)}function T(w){w.target.removeEventListener("dispose",T);for(const v in c){const b=c[v],R=w.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function qy(n,t){function e(){let k=!1;const bt=new Me;let ut=null;const Et=new Me(0,0,0,0);return{setMask:function(Pt){ut!==Pt&&!k&&(n.colorMask(Pt,Pt,Pt,Pt),ut=Pt)},setLocked:function(Pt){k=Pt},setClear:function(Pt,dt,Gt,Ft,pe){pe===!0&&(Pt*=Ft,dt*=Ft,Gt*=Ft),bt.set(Pt,dt,Gt,Ft),Et.equals(bt)===!1&&(n.clearColor(Pt,dt,Gt,Ft),Et.copy(bt))},reset:function(){k=!1,ut=null,Et.set(-1,0,0,0)}}}function i(){let k=!1,bt=!1,ut=null,Et=null,Pt=null;return{setReversed:function(dt){if(bt!==dt){const Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=dt;const Ft=Pt;Pt=null,this.setClear(Ft)}},getReversed:function(){return bt},setTest:function(dt){dt?tt(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(dt){ut!==dt&&!k&&(n.depthMask(dt),ut=dt)},setFunc:function(dt){if(bt&&(dt=b_[dt]),Et!==dt){switch(dt){case dl:n.depthFunc(n.NEVER);break;case fl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case _l:n.depthFunc(n.GREATER);break;case vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=dt}},setLocked:function(dt){k=dt},setClear:function(dt){Pt!==dt&&(Pt=dt,bt&&(dt=1-dt),n.clearDepth(dt))},reset:function(){k=!1,ut=null,Et=null,Pt=null,bt=!1}}}function s(){let k=!1,bt=null,ut=null,Et=null,Pt=null,dt=null,Gt=null,Ft=null,pe=null;return{setTest:function(re){k||(re?tt(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(re){bt!==re&&!k&&(n.stencilMask(re),bt=re)},setFunc:function(re,vn,In){(ut!==re||Et!==vn||Pt!==In)&&(n.stencilFunc(re,vn,In),ut=re,Et=vn,Pt=In)},setOp:function(re,vn,In){(dt!==re||Gt!==vn||Ft!==In)&&(n.stencilOp(re,vn,In),dt=re,Gt=vn,Ft=In)},setLocked:function(re){k=re},setClear:function(re){pe!==re&&(n.clearStencil(re),pe=re)},reset:function(){k=!1,bt=null,ut=null,Et=null,Pt=null,dt=null,Gt=null,Ft=null,pe=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,_=[],M=null,m=!1,p=null,E=null,P=null,x=null,T=null,w=null,I=null,v=new ne(0,0,0),b=0,R=!1,D=null,V=null,Y=null,H=null,X=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,at=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(nt)[1]),q=at>=1):nt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),q=at>=2);let ct=null,lt={};const wt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),te=new Me().fromArray(wt),Yt=new Me().fromArray(Dt);function qt(k,bt,ut,Et){const Pt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(k,dt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<ut;Gt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(bt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return dt}const it={};it[n.TEXTURE_2D]=qt(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(xr),G(!1),$(Uh),tt(n.CULL_FACE),z(gi);function tt(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function vt(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function Ht(k,bt){return u[k]!==bt?(n.bindFramebuffer(k,bt),u[k]=bt,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=bt),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ct(k,bt){let ut=_,Et=!1;if(k){ut=f.get(bt),ut===void 0&&(ut=[],f.set(bt,ut));const Pt=k.textures;if(ut.length!==Pt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Gt=Pt.length;dt<Gt;dt++)ut[dt]=n.COLOR_ATTACHMENT0+dt;ut.length=Pt.length,Et=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,Et=!0);Et&&n.drawBuffers(ut)}function A(k){return M!==k?(n.useProgram(k),M=k,!0):!1}const N={[As]:n.FUNC_ADD,[Wg]:n.FUNC_SUBTRACT,[Xg]:n.FUNC_REVERSE_SUBTRACT};N[Yg]=n.MIN,N[qg]=n.MAX;const L={[Kg]:n.ZERO,[Zg]:n.ONE,[$g]:n.SRC_COLOR,[of]:n.SRC_ALPHA,[n_]:n.SRC_ALPHA_SATURATE,[t_]:n.DST_COLOR,[Qg]:n.DST_ALPHA,[Jg]:n.ONE_MINUS_SRC_COLOR,[lf]:n.ONE_MINUS_SRC_ALPHA,[e_]:n.ONE_MINUS_DST_COLOR,[jg]:n.ONE_MINUS_DST_ALPHA,[i_]:n.CONSTANT_COLOR,[s_]:n.ONE_MINUS_CONSTANT_COLOR,[r_]:n.CONSTANT_ALPHA,[a_]:n.ONE_MINUS_CONSTANT_ALPHA};function z(k,bt,ut,Et,Pt,dt,Gt,Ft,pe,re){if(k===gi){m===!0&&(vt(n.BLEND),m=!1);return}if(m===!1&&(tt(n.BLEND),m=!0),k!==Vg){if(k!==p||re!==R){if((E!==As||T!==As)&&(n.blendEquation(n.FUNC_ADD),E=As,T=As),re)switch(k){case or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFunc(n.ONE,n.ONE);break;case Fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ul:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",k);break}else switch(k){case or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fh:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",k);break}P=null,x=null,w=null,I=null,v.set(0,0,0),b=0,p=k,R=re}return}Pt=Pt||bt,dt=dt||ut,Gt=Gt||Et,(bt!==E||Pt!==T)&&(n.blendEquationSeparate(N[bt],N[Pt]),E=bt,T=Pt),(ut!==P||Et!==x||dt!==w||Gt!==I)&&(n.blendFuncSeparate(L[ut],L[Et],L[dt],L[Gt]),P=ut,x=Et,w=dt,I=Gt),(Ft.equals(v)===!1||pe!==b)&&(n.blendColor(Ft.r,Ft.g,Ft.b,pe),v.copy(Ft),b=pe),p=k,R=!1}function B(k,bt){k.side===Ve?vt(n.CULL_FACE):tt(n.CULL_FACE);let ut=k.side===rn;bt&&(ut=!ut),G(ut),k.blending===or&&k.transparent===!1?z(gi):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const Et=k.stencilWrite;o.setTest(Et),Et&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),st(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(k){D!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),D=k)}function $(k){k!==zg?(tt(n.CULL_FACE),k!==V&&(k===Uh?n.cullFace(n.BACK):k===Gg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),V=k}function ot(k){k!==Y&&(q&&n.lineWidth(k),Y=k)}function st(k,bt,ut){k?(tt(n.POLYGON_OFFSET_FILL),(H!==bt||X!==ut)&&(H=bt,X=ut,a.getReversed()&&(bt=-bt),n.polygonOffset(bt,ut))):vt(n.POLYGON_OFFSET_FILL)}function J(k){k?tt(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function pt(k){k===void 0&&(k=n.TEXTURE0+j-1),ct!==k&&(n.activeTexture(k),ct=k)}function C(k,bt,ut){ut===void 0&&(ct===null?ut=n.TEXTURE0+j-1:ut=ct);let Et=lt[ut];Et===void 0&&(Et={type:void 0,texture:void 0},lt[ut]=Et),(Et.type!==k||Et.texture!==bt)&&(ct!==ut&&(n.activeTexture(ut),ct=ut),n.bindTexture(k,bt||it[k]),Et.type=k,Et.texture=bt)}function xt(){const k=lt[ct];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function St(){try{n.compressedTexImage2D(...arguments)}catch(k){ie("WebGLState:",k)}}function y(){try{n.compressedTexImage3D(...arguments)}catch(k){ie("WebGLState:",k)}}function g(){try{n.texSubImage2D(...arguments)}catch(k){ie("WebGLState:",k)}}function O(){try{n.texSubImage3D(...arguments)}catch(k){ie("WebGLState:",k)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(k){ie("WebGLState:",k)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(k){ie("WebGLState:",k)}}function ft(){try{n.texStorage2D(...arguments)}catch(k){ie("WebGLState:",k)}}function mt(){try{n.texStorage3D(...arguments)}catch(k){ie("WebGLState:",k)}}function rt(){try{n.texImage2D(...arguments)}catch(k){ie("WebGLState:",k)}}function ht(){try{n.texImage3D(...arguments)}catch(k){ie("WebGLState:",k)}}function _t(k){return d[k]!==void 0?d[k]:n.getParameter(k)}function Lt(k,bt){d[k]!==bt&&(n.pixelStorei(k,bt),d[k]=bt)}function yt(k){te.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),te.copy(k))}function Mt(k){Yt.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Yt.copy(k))}function zt(k,bt){let ut=c.get(bt);ut===void 0&&(ut=new WeakMap,c.set(bt,ut));let Et=ut.get(k);Et===void 0&&(Et=n.getUniformBlockIndex(bt,k.name),ut.set(k,Et))}function kt(k,bt){const Et=c.get(bt).get(k);l.get(bt)!==Et&&(n.uniformBlockBinding(bt,Et,k.__bindingPointIndex),l.set(bt,Et))}function Kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},ct=null,lt={},u={},f=new WeakMap,_=[],M=null,m=!1,p=null,E=null,P=null,x=null,T=null,w=null,I=null,v=new ne(0,0,0),b=0,R=!1,D=null,V=null,Y=null,H=null,X=null,te.set(0,0,n.canvas.width,n.canvas.height),Yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:vt,bindFramebuffer:Ht,drawBuffers:Ct,useProgram:A,setBlending:z,setMaterial:B,setFlipSided:G,setCullFace:$,setLineWidth:ot,setPolygonOffset:st,setScissorTest:J,activeTexture:pt,bindTexture:C,unbindTexture:xt,compressedTexImage2D:St,compressedTexImage3D:y,texImage2D:rt,texImage3D:ht,pixelStorei:Lt,getParameter:_t,updateUBOMapping:zt,uniformBlockBinding:kt,texStorage2D:ft,texStorage3D:mt,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:W,compressedTexSubImage3D:Q,scissor:yt,viewport:Mt,reset:Kt}}function Ky(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,g){return _?new OffscreenCanvas(y,g):br("canvas")}function m(y,g,O){let W=1;const Q=St(y);if((Q.width>O||Q.height>O)&&(W=O/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const ft=Math.floor(W*Q.width),mt=Math.floor(W*Q.height);u===void 0&&(u=M(ft,mt));const rt=g?M(ft,mt):u;return rt.width=ft,rt.height=mt,rt.getContext("2d").drawImage(y,0,0,ft,mt),Vt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ft+"x"+mt+")."),rt}else return"data"in y&&Vt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),y;return y}function p(y){return y.generateMipmaps}function E(y){n.generateMipmap(y)}function P(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(y,g,O,W,Q,ft=!1){if(y!==null){if(n[y]!==void 0)return n[y];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let mt;W&&(mt=t.get("EXT_texture_norm16"),mt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=g;if(g===n.RED&&(O===n.FLOAT&&(rt=n.R32F),O===n.HALF_FLOAT&&(rt=n.R16F),O===n.UNSIGNED_BYTE&&(rt=n.R8),O===n.UNSIGNED_SHORT&&mt&&(rt=mt.R16_EXT),O===n.SHORT&&mt&&(rt=mt.R16_SNORM_EXT)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(rt=n.R8UI),O===n.UNSIGNED_SHORT&&(rt=n.R16UI),O===n.UNSIGNED_INT&&(rt=n.R32UI),O===n.BYTE&&(rt=n.R8I),O===n.SHORT&&(rt=n.R16I),O===n.INT&&(rt=n.R32I)),g===n.RG&&(O===n.FLOAT&&(rt=n.RG32F),O===n.HALF_FLOAT&&(rt=n.RG16F),O===n.UNSIGNED_BYTE&&(rt=n.RG8),O===n.UNSIGNED_SHORT&&mt&&(rt=mt.RG16_EXT),O===n.SHORT&&mt&&(rt=mt.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(rt=n.RG8UI),O===n.UNSIGNED_SHORT&&(rt=n.RG16UI),O===n.UNSIGNED_INT&&(rt=n.RG32UI),O===n.BYTE&&(rt=n.RG8I),O===n.SHORT&&(rt=n.RG16I),O===n.INT&&(rt=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(rt=n.RGB8UI),O===n.UNSIGNED_SHORT&&(rt=n.RGB16UI),O===n.UNSIGNED_INT&&(rt=n.RGB32UI),O===n.BYTE&&(rt=n.RGB8I),O===n.SHORT&&(rt=n.RGB16I),O===n.INT&&(rt=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(rt=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(rt=n.RGBA16UI),O===n.UNSIGNED_INT&&(rt=n.RGBA32UI),O===n.BYTE&&(rt=n.RGBA8I),O===n.SHORT&&(rt=n.RGBA16I),O===n.INT&&(rt=n.RGBA32I)),g===n.RGB&&(O===n.UNSIGNED_SHORT&&mt&&(rt=mt.RGB16_EXT),O===n.SHORT&&mt&&(rt=mt.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(rt=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(rt=n.R11F_G11F_B10F)),g===n.RGBA){const ht=ft?Na:ee.getTransfer(Q);O===n.FLOAT&&(rt=n.RGBA32F),O===n.HALF_FLOAT&&(rt=n.RGBA16F),O===n.UNSIGNED_BYTE&&(rt=ht===ce?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&mt&&(rt=mt.RGBA16_EXT),O===n.SHORT&&mt&&(rt=mt.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(rt=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(rt=n.RGB5_A1)}return(rt===n.R16F||rt===n.R32F||rt===n.RG16F||rt===n.RG32F||rt===n.RGBA16F||rt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function T(y,g){let O;return y?g===null||g===ti||g===Mr?O=n.DEPTH24_STENCIL8:g===qn?O=n.DEPTH32F_STENCIL8:g===Sr&&(O=n.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ti||g===Mr?O=n.DEPTH_COMPONENT24:g===qn?O=n.DEPTH_COMPONENT32F:g===Sr&&(O=n.DEPTH_COMPONENT16),O}function w(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ue&&y.minFilter!==We?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function I(y){const g=y.target;g.removeEventListener("dispose",I),b(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function v(y){const g=y.target;g.removeEventListener("dispose",v),D(g)}function b(y){const g=i.get(y);if(g.__webglInit===void 0)return;const O=y.source,W=f.get(O);if(W){const Q=W[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(y),Object.keys(W).length===0&&f.delete(O)}i.remove(y)}function R(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const O=y.source,W=f.get(O);delete W[g.__cacheKey],a.memory.textures--}function D(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(g.__webglFramebuffer[W]))for(let Q=0;Q<g.__webglFramebuffer[W].length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[W][Q]);else n.deleteFramebuffer(g.__webglFramebuffer[W]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[W])}else{if(Array.isArray(g.__webglFramebuffer))for(let W=0;W<g.__webglFramebuffer.length;W++)n.deleteFramebuffer(g.__webglFramebuffer[W]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let W=0;W<g.__webglColorRenderbuffer.length;W++)g.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[W]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=y.textures;for(let W=0,Q=O.length;W<Q;W++){const ft=i.get(O[W]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),a.memory.textures--),i.remove(O[W])}i.remove(y)}let V=0;function Y(){V=0}function H(){return V}function X(y){V=y}function j(){const y=V;return y>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,y}function q(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function at(y,g){const O=i.get(y);if(y.isVideoTexture&&C(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&O.__version!==y.version){const W=y.image;if(W===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(O,y,g);return}}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function nt(y,g){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){vt(O,y,g);return}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function ct(y,g){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){vt(O,y,g);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function lt(y,g){const O=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&O.__version!==y.version){Ht(O,y,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const wt={[xl]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},Dt={[Ue]:n.NEAREST,[c_]:n.NEAREST_MIPMAP_NEAREST,[zr]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[_o]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},te={[f_]:n.NEVER,[v_]:n.ALWAYS,[p_]:n.LESS,[Rc]:n.LEQUAL,[m_]:n.EQUAL,[Pc]:n.GEQUAL,[g_]:n.GREATER,[__]:n.NOTEQUAL};function Yt(y,g){if(g.type===qn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===We||g.magFilter===_o||g.magFilter===zr||g.magFilter===Zi||g.minFilter===We||g.minFilter===_o||g.minFilter===zr||g.minFilter===Zi)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,wt[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,wt[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,wt[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,Dt[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,Dt[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,te[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ue||g.minFilter!==zr&&g.minFilter!==Zi||g.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function qt(y,g){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",I));const W=g.source;let Q=f.get(W);Q===void 0&&(Q={},f.set(W,Q));const ft=q(g);if(ft!==y.__cacheKey){Q[ft]===void 0&&(Q[ft]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[ft].usedTimes++;const mt=Q[y.__cacheKey];mt!==void 0&&(Q[y.__cacheKey].usedTimes--,mt.usedTimes===0&&R(g)),y.__cacheKey=ft,y.__webglTexture=Q[ft].texture}return O}function it(y,g,O){return Math.floor(Math.floor(y/O)/g)}function tt(y,g,O,W){const ft=y.updateRanges;if(ft.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,O,W,g.data);else{ft.sort((Lt,yt)=>Lt.start-yt.start);let mt=0;for(let Lt=1;Lt<ft.length;Lt++){const yt=ft[mt],Mt=ft[Lt],zt=yt.start+yt.count,kt=it(Mt.start,g.width,4),Kt=it(yt.start,g.width,4);Mt.start<=zt+1&&kt===Kt&&it(Mt.start+Mt.count-1,g.width,4)===kt?yt.count=Math.max(yt.count,Mt.start+Mt.count-yt.start):(++mt,ft[mt]=Mt)}ft.length=mt+1;const rt=e.getParameter(n.UNPACK_ROW_LENGTH),ht=e.getParameter(n.UNPACK_SKIP_PIXELS),_t=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Lt=0,yt=ft.length;Lt<yt;Lt++){const Mt=ft[Lt],zt=Math.floor(Mt.start/4),kt=Math.ceil(Mt.count/4),Kt=zt%g.width,k=Math.floor(zt/g.width),bt=kt,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,Kt,k,bt,ut,O,W,g.data)}y.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,rt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,_t)}}function vt(y,g,O){let W=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(W=n.TEXTURE_3D);const Q=qt(y,g),ft=g.source;e.bindTexture(W,y.__webglTexture,n.TEXTURE0+O);const mt=i.get(ft);if(ft.version!==mt.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ut=ee.getPrimaries(ee.workingColorSpace),Et=g.colorSpace===Ui?null:ee.getPrimaries(g.colorSpace),Pt=g.colorSpace===Ui||ut===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let ht=m(g.image,!1,s.maxTextureSize);ht=xt(g,ht);const _t=r.convert(g.format,g.colorSpace),Lt=r.convert(g.type);let yt=x(g.internalFormat,_t,Lt,g.normalized,g.colorSpace,g.isVideoTexture);Yt(W,g);let Mt;const zt=g.mipmaps,kt=g.isVideoTexture!==!0,Kt=mt.__version===void 0||Q===!0,k=ft.dataReady,bt=w(g,ht);if(g.isDepthTexture)yt=T(g.format===$i,g.type),Kt&&(kt?e.texStorage2D(n.TEXTURE_2D,1,yt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,yt,ht.width,ht.height,0,_t,Lt,null));else if(g.isDataTexture)if(zt.length>0){kt&&Kt&&e.texStorage2D(n.TEXTURE_2D,bt,yt,zt[0].width,zt[0].height);for(let ut=0,Et=zt.length;ut<Et;ut++)Mt=zt[ut],kt?k&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,_t,Lt,Mt.data):e.texImage2D(n.TEXTURE_2D,ut,yt,Mt.width,Mt.height,0,_t,Lt,Mt.data);g.generateMipmaps=!1}else kt?(Kt&&e.texStorage2D(n.TEXTURE_2D,bt,yt,ht.width,ht.height),k&&tt(g,ht,_t,Lt)):e.texImage2D(n.TEXTURE_2D,0,yt,ht.width,ht.height,0,_t,Lt,ht.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){kt&&Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,yt,zt[0].width,zt[0].height,ht.depth);for(let ut=0,Et=zt.length;ut<Et;ut++)if(Mt=zt[ut],g.format!==An)if(_t!==null)if(kt){if(k)if(g.layerUpdates.size>0){const Pt=Su(Mt.width,Mt.height,g.format,g.type);for(const dt of g.layerUpdates){const Gt=Mt.data.subarray(dt*Pt/Mt.data.BYTES_PER_ELEMENT,(dt+1)*Pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,dt,Mt.width,Mt.height,1,_t,Gt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Mt.width,Mt.height,ht.depth,_t,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,yt,Mt.width,Mt.height,ht.depth,0,Mt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Mt.width,Mt.height,ht.depth,_t,Lt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,yt,Mt.width,Mt.height,ht.depth,0,_t,Lt,Mt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{kt&&Kt&&e.texStorage2D(n.TEXTURE_2D,bt,yt,zt[0].width,zt[0].height);for(let ut=0,Et=zt.length;ut<Et;ut++)Mt=zt[ut],g.format!==An?_t!==null?kt?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,_t,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,yt,Mt.width,Mt.height,0,Mt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?k&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,_t,Lt,Mt.data):e.texImage2D(n.TEXTURE_2D,ut,yt,Mt.width,Mt.height,0,_t,Lt,Mt.data)}else if(g.isDataArrayTexture)if(kt){if(Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,yt,ht.width,ht.height,ht.depth),k)if(g.layerUpdates.size>0){const ut=Su(ht.width,ht.height,g.format,g.type);for(const Et of g.layerUpdates){const Pt=ht.data.subarray(Et*ut/ht.data.BYTES_PER_ELEMENT,(Et+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Et,ht.width,ht.height,1,_t,Lt,Pt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,_t,Lt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,ht.width,ht.height,ht.depth,0,_t,Lt,ht.data);else if(g.isData3DTexture)kt?(Kt&&e.texStorage3D(n.TEXTURE_3D,bt,yt,ht.width,ht.height,ht.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,_t,Lt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,yt,ht.width,ht.height,ht.depth,0,_t,Lt,ht.data);else if(g.isFramebufferTexture){if(Kt)if(kt)e.texStorage2D(n.TEXTURE_2D,bt,yt,ht.width,ht.height);else{let ut=ht.width,Et=ht.height;for(let Pt=0;Pt<bt;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,yt,ut,Et,0,_t,Lt,null),ut>>=1,Et>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),ht.parentNode!==ut){ut.appendChild(ht),d.add(g),ut.onpaint=Et=>{const Pt=Et.changedElements;for(const dt of d)Pt.includes(dt.image)&&(dt.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ht);else{const Pt=n.RGBA,dt=n.RGBA,Gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pt,dt,Gt,ht)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(zt.length>0){if(kt&&Kt){const ut=St(zt[0]);e.texStorage2D(n.TEXTURE_2D,bt,yt,ut.width,ut.height)}for(let ut=0,Et=zt.length;ut<Et;ut++)Mt=zt[ut],kt?k&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,_t,Lt,Mt):e.texImage2D(n.TEXTURE_2D,ut,yt,_t,Lt,Mt);g.generateMipmaps=!1}else if(kt){if(Kt){const ut=St(ht);e.texStorage2D(n.TEXTURE_2D,bt,yt,ut.width,ut.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Lt,ht)}else e.texImage2D(n.TEXTURE_2D,0,yt,_t,Lt,ht);p(g)&&E(W),mt.__version=ft.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ht(y,g,O){if(g.image.length!==6)return;const W=qt(y,g),Q=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+O);const ft=i.get(Q);if(Q.version!==ft.__version||W===!0){e.activeTexture(n.TEXTURE0+O);const mt=ee.getPrimaries(ee.workingColorSpace),rt=g.colorSpace===Ui?null:ee.getPrimaries(g.colorSpace),ht=g.colorSpace===Ui||mt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const _t=g.isCompressedTexture||g.image[0].isCompressedTexture,Lt=g.image[0]&&g.image[0].isDataTexture,yt=[];for(let dt=0;dt<6;dt++)!_t&&!Lt?yt[dt]=m(g.image[dt],!0,s.maxCubemapSize):yt[dt]=Lt?g.image[dt].image:g.image[dt],yt[dt]=xt(g,yt[dt]);const Mt=yt[0],zt=r.convert(g.format,g.colorSpace),kt=r.convert(g.type),Kt=x(g.internalFormat,zt,kt,g.normalized,g.colorSpace),k=g.isVideoTexture!==!0,bt=ft.__version===void 0||W===!0,ut=Q.dataReady;let Et=w(g,Mt);Yt(n.TEXTURE_CUBE_MAP,g);let Pt;if(_t){k&&bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Kt,Mt.width,Mt.height);for(let dt=0;dt<6;dt++){Pt=yt[dt].mipmaps;for(let Gt=0;Gt<Pt.length;Gt++){const Ft=Pt[Gt];g.format!==An?zt!==null?k?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,Ft.width,Ft.height,zt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,Kt,Ft.width,Ft.height,0,Ft.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,Ft.width,Ft.height,zt,kt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,Kt,Ft.width,Ft.height,0,zt,kt,Ft.data)}}}else{if(Pt=g.mipmaps,k&&bt){Pt.length>0&&Et++;const dt=St(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Kt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Lt){k?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,yt[dt].width,yt[dt].height,zt,kt,yt[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Kt,yt[dt].width,yt[dt].height,0,zt,kt,yt[dt].data);for(let Gt=0;Gt<Pt.length;Gt++){const pe=Pt[Gt].image[dt].image;k?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,pe.width,pe.height,zt,kt,pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,Kt,pe.width,pe.height,0,zt,kt,pe.data)}}else{k?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,zt,kt,yt[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Kt,zt,kt,yt[dt]);for(let Gt=0;Gt<Pt.length;Gt++){const Ft=Pt[Gt];k?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,zt,kt,Ft.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,Kt,zt,kt,Ft.image[dt])}}}p(g)&&E(n.TEXTURE_CUBE_MAP),ft.__version=Q.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ct(y,g,O,W,Q,ft){const mt=r.convert(O.format,O.colorSpace),rt=r.convert(O.type),ht=x(O.internalFormat,mt,rt,O.normalized,O.colorSpace),_t=i.get(g),Lt=i.get(O);if(Lt.__renderTarget=g,!_t.__hasExternalTextures){const yt=Math.max(1,g.width>>ft),Mt=Math.max(1,g.height>>ft);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,ft,ht,yt,Mt,g.depth,0,mt,rt,null):e.texImage2D(Q,ft,ht,yt,Mt,0,mt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),pt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Q,Lt.__webglTexture,0,J(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Q,Lt.__webglTexture,ft),e.bindFramebuffer(n.FRAMEBUFFER,null)}function A(y,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const W=g.depthTexture,Q=W&&W.isDepthTexture?W.type:null,ft=T(g.stencilBuffer,Q),mt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J(g),ft,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,J(g),ft,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ft,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,y)}else{const W=g.textures;for(let Q=0;Q<W.length;Q++){const ft=W[Q],mt=r.convert(ft.format,ft.colorSpace),rt=r.convert(ft.type),ht=x(ft.internalFormat,mt,rt,ft.normalized,ft.colorSpace);pt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J(g),ht,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,J(g),ht,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ht,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(y,g,O){const W=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",I)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Yt(n.TEXTURE_CUBE_MAP,g.depthTexture);const _t=r.convert(g.depthTexture.format),Lt=r.convert(g.depthTexture.type);let yt;g.depthTexture.format===yi?yt=n.DEPTH_COMPONENT24:g.depthTexture.format===$i&&(yt=n.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,yt,g.width,g.height,0,_t,Lt,null)}}else at(g.depthTexture,0);const ft=Q.__webglTexture,mt=J(g),rt=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,ht=g.depthTexture.format===$i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===yi)pt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,rt,ft,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,ht,rt,ft,0);else if(g.depthTexture.format===$i)pt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,rt,ft,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,ht,rt,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function L(y){const g=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const W=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),W){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=W}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let W=0;W<6;W++)N(g.__webglFramebuffer[W],y,W);else{const W=y.texture.mipmaps;W&&W.length>0?N(g.__webglFramebuffer[0],y,0):N(g.__webglFramebuffer,y,0)}else if(O){g.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[W]),g.__webglDepthbuffer[W]===void 0)g.__webglDepthbuffer[W]=n.createRenderbuffer(),A(g.__webglDepthbuffer[W],y,!1);else{const Q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=g.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ft)}}else{const W=y.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),A(g.__webglDepthbuffer,y,!1);else{const Q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ft)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function z(y,g,O){const W=i.get(y);g!==void 0&&Ct(W.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&L(y)}function B(y){const g=y.texture,O=i.get(y),W=i.get(g);y.addEventListener("dispose",v);const Q=y.textures,ft=y.isWebGLCubeRenderTarget===!0,mt=Q.length>1;if(mt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=g.version,a.memory.textures++),ft){O.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[rt]=[];for(let ht=0;ht<g.mipmaps.length;ht++)O.__webglFramebuffer[rt][ht]=n.createFramebuffer()}else O.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let rt=0;rt<g.mipmaps.length;rt++)O.__webglFramebuffer[rt]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(mt)for(let rt=0,ht=Q.length;rt<ht;rt++){const _t=i.get(Q[rt]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&pt(y)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let rt=0;rt<Q.length;rt++){const ht=Q[rt];O.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[rt]);const _t=r.convert(ht.format,ht.colorSpace),Lt=r.convert(ht.type),yt=x(ht.internalFormat,_t,Lt,ht.normalized,ht.colorSpace,y.isXRRenderTarget===!0),Mt=J(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,yt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,O.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),A(O.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ft){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Yt(n.TEXTURE_CUBE_MAP,g);for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)Ct(O.__webglFramebuffer[rt][ht],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else Ct(O.__webglFramebuffer[rt],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(g)&&E(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let rt=0,ht=Q.length;rt<ht;rt++){const _t=Q[rt],Lt=i.get(_t);let yt=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(yt=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,Lt.__webglTexture),Yt(yt,_t),Ct(O.__webglFramebuffer,y,_t,n.COLOR_ATTACHMENT0+rt,yt,0),p(_t)&&E(yt)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(rt=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,W.__webglTexture),Yt(rt,g),g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)Ct(O.__webglFramebuffer[ht],y,g,n.COLOR_ATTACHMENT0,rt,ht);else Ct(O.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,rt,0);p(g)&&E(rt),e.unbindTexture()}y.depthBuffer&&L(y)}function G(y){const g=y.textures;for(let O=0,W=g.length;O<W;O++){const Q=g[O];if(p(Q)){const ft=P(y),mt=i.get(Q).__webglTexture;e.bindTexture(ft,mt),E(ft),e.unbindTexture()}}}const $=[],ot=[];function st(y){if(y.samples>0){if(pt(y)===!1){const g=y.textures,O=y.width,W=y.height;let Q=n.COLOR_BUFFER_BIT;const ft=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(y),rt=g.length>1;if(rt)for(let _t=0;_t<g.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const ht=y.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let _t=0;_t<g.length;_t++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Lt=i.get(g[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,O,W,0,0,O,W,Q,n.NEAREST),l===!0&&($.length=0,ot.length=0,$.push(n.COLOR_ATTACHMENT0+_t),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&($.push(ft),ot.push(ft),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let _t=0;_t<g.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Lt=i.get(g[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function J(y){return Math.min(s.maxSamples,y.samples)}function pt(y){const g=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function C(y){const g=a.render.frame;h.get(y)!==g&&(h.set(y,g),y.update())}function xt(y,g){const O=y.colorSpace,W=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==Ia&&O!==Ui&&(ee.getTransfer(O)===ce?(W!==An||Q!==un)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",O)),g}function St(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=Y,this.getTextureUnits=H,this.setTextureUnits=X,this.setTexture2D=at,this.setTexture2DArray=nt,this.setTexture3D=ct,this.setTextureCube=lt,this.rebindTextures=z,this.setupRenderTarget=B,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Zy(n,t){function e(i,s=Ui){let r;const a=ee.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===Ec)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vf)return n.BYTE;if(i===xf)return n.SHORT;if(i===Sr)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===ei)return n.HALF_FLOAT;if(i===yf)return n.ALPHA;if(i===bf)return n.RGB;if(i===An)return n.RGBA;if(i===yi)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===Ef)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===is)return n.RG;if(i===wc)return n.RG_INTEGER;if(i===Cc)return n.RGBA_INTEGER;if(i===_a||i===va||i===xa||i===Sa)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===yl||i===bl||i===El)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Al||i===wl||i===Cl||i===Rl||i===Da||i===Pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tl||i===Al)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cl)return r.COMPRESSED_R11_EAC;if(i===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Da)return r.COMPRESSED_RG11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Ll||i===Il||i===Nl||i===Ul||i===Ol||i===Fl||i===Bl||i===Hl||i===zl||i===Gl||i===kl||i===Vl||i===Wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Il)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ul)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xl||i===Yl||i===ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Xl)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===Zl||i===La||i===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const $y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jy=`
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

}`;class Qy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Df(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ln({vertexShader:$y,fragmentShader:Jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new Fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jy extends Bi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const M=typeof XRWebGLBinding<"u",m=new Qy,p={},E=e.getContextAttributes();let P=null,x=null;const T=[],w=[],I=new gt;let v=null,b=null;const R=new hn;R.viewport=new Me;const D=new hn;D.viewport=new Me;const V=[R,D],Y=new rv;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let tt=T[it];return tt===void 0&&(tt=new Eo,T[it]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(it){let tt=T[it];return tt===void 0&&(tt=new Eo,T[it]=tt),tt.getGripSpace()},this.getHand=function(it){let tt=T[it];return tt===void 0&&(tt=new Eo,T[it]=tt),tt.getHandSpace()};function j(it){const tt=w.indexOf(it.inputSource);if(tt===-1)return;const vt=T[tt];vt!==void 0&&(vt.update(it.inputSource,it.frame,c||a),vt.dispatchEvent({type:it.type,data:it.inputSource}))}function q(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",at);for(let it=0;it<T.length;it++){const tt=w[it];tt!==null&&(w[it]=null,T[it].disconnect(tt))}H=null,X=null,m.reset();for(const it in p)delete p[it];if(t.setRenderTarget(P),f=null,u=null,d=null,s=null,x=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(I.width,I.height,!1),b!==null){const it=b.camera;it.fov=b.fov,it.zoom=b.zoom,it.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,i.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,i.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(P=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",q),s.addEventListener("inputsourceschange",at),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ht=null,Ct=null;E.depth&&(Ct=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=E.stencil?$i:yi,Ht=E.stencil?Mr:ti);const A={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(A),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Pn(u.textureWidth,u.textureHeight,{format:An,type:un,depthTexture:new Tr(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const vt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Pn(f.framebufferWidth,f.framebufferHeight,{format:An,type:un,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(it){for(let tt=0;tt<it.removed.length;tt++){const vt=it.removed[tt],Ht=w.indexOf(vt);Ht>=0&&(w[Ht]=null,T[Ht].disconnect(vt))}for(let tt=0;tt<it.added.length;tt++){const vt=it.added[tt];let Ht=w.indexOf(vt);if(Ht===-1){for(let A=0;A<T.length;A++)if(A>=w.length){w.push(vt),Ht=A;break}else if(w[A]===null){w[A]=vt,Ht=A;break}if(Ht===-1)break}const Ct=T[Ht];Ct&&Ct.connect(vt)}}const nt=new U,ct=new U;function lt(it,tt,vt){nt.setFromMatrixPosition(tt.matrixWorld),ct.setFromMatrixPosition(vt.matrixWorld);const Ht=nt.distanceTo(ct),Ct=tt.projectionMatrix.elements,A=vt.projectionMatrix.elements,N=Ct[14]/(Ct[10]-1),L=Ct[14]/(Ct[10]+1),z=(Ct[9]+1)/Ct[5],B=(Ct[9]-1)/Ct[5],G=(Ct[8]-1)/Ct[0],$=(A[8]+1)/A[0],ot=N*G,st=N*$,J=Ht/(-G+$),pt=J*-G;if(tt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(pt),it.translateZ(J),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ct[10]===-1)it.projectionMatrix.copy(tt.projectionMatrix),it.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const C=N+J,xt=L+J,St=ot-pt,y=st+(Ht-pt),g=z*L/xt*C,O=B*L/xt*C;it.projectionMatrix.makePerspective(St,y,g,O,C,xt),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function wt(it,tt){tt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(tt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let tt=it.near,vt=it.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),Y.near=D.near=R.near=tt,Y.far=D.far=R.far=vt,(H!==Y.near||X!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),H=Y.near,X=Y.far),Y.layers.mask=it.layers.mask|6,R.layers.mask=Y.layers.mask&-5,D.layers.mask=Y.layers.mask&-3;const Ht=it.parent,Ct=Y.cameras;wt(Y,Ht);for(let A=0;A<Ct.length;A++)wt(Ct[A],Ht);Ct.length===2?lt(Y,R,D):Y.projectionMatrix.copy(R.projectionMatrix),b===null&&it.isPerspectiveCamera&&(b={camera:it,fov:it.fov,zoom:it.zoom}),Dt(it,Y,Ht)};function Dt(it,tt,vt){vt===null?it.matrix.copy(tt.matrixWorld):(it.matrix.copy(vt.matrixWorld),it.matrix.invert(),it.matrix.multiply(tt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(tt.projectionMatrix),it.projectionMatrixInverse.copy(tt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Er*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(it){l=it,u!==null&&(u.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(it){return p[it]};let te=null;function Yt(it,tt){if(h=tt.getViewerPose(c||a),_=tt,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ht=!1;vt.length!==Y.cameras.length&&(Y.cameras.length=0,Ht=!0);for(let L=0;L<vt.length;L++){const z=vt[L];let B=null;if(f!==null)B=f.getViewport(z);else{const $=d.getViewSubImage(u,z);B=$.viewport,L===0&&(t.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(x))}let G=V[L];G===void 0&&(G=new hn,G.layers.enable(L),G.viewport=new Me,V[L]=G),G.matrix.fromArray(z.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(z.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(B.x,B.y,B.width,B.height),L===0&&(Y.matrix.copy(G.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ht===!0&&Y.cameras.push(G)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const L=d.getDepthInformation(vt[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(Ct&&Ct.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let L=0;L<vt.length;L++){const z=vt[L].camera;if(z){let B=p[z];B||(B=new Df,p[z]=B);const G=d.getCameraImage(z);B.sourceTexture=G}}}}for(let vt=0;vt<T.length;vt++){const Ht=w[vt],Ct=T[vt];Ht!==null&&Ct!==void 0&&Ct.update(Ht,tt,c||a)}te&&te(it,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}const qt=new Wf;qt.setAnimationLoop(Yt),this.setAnimationLoop=function(it){te=it},this.dispose=function(){}}}const tb=new Se,Jf=new Wt;Jf.set(-1,0,0,0,1,0,0,0,1);function eb(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,P,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,P):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p),P=E.envMap,x=E.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(tb.makeRotationFromEuler(x)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=P*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nb(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){const w=T.program;i.uniformBlockBinding(x,w)}function c(x,T){let w=s[x.id];w===void 0&&(m(x),w=h(x),s[x.id]=w,x.addEventListener("dispose",E));const I=T.program;i.updateUBOMapping(x,I);const v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){const T=d();x.__bindingPointIndex=T;const w=n.createBuffer(),I=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const T=s[x.id],w=x.uniforms,I=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let v=0,b=w.length;v<b;v++){const R=w[v];if(Array.isArray(R))for(let D=0,V=R.length;D<V;D++)f(R[D],v,D,I);else f(R,v,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,T,w,I){if(M(x,T,w,I)===!0){const v=x.__offset,b=x.value;if(Array.isArray(b)){let R=0;for(let D=0;D<b.length;D++){const V=b[D],Y=p(V);_(V,x.__data,R),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(R+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function _(x,T,w){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,w)}function M(x,T,w,I){const v=x.value,b=T+"_"+w;if(I[b]===void 0)return typeof v=="number"||typeof v=="boolean"?I[b]=v:ArrayBuffer.isView(v)?I[b]=v.slice():I[b]=v.clone(),!0;{const R=I[b];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return I[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(x){const T=x.uniforms;let w=0;const I=16;for(let b=0,R=T.length;b<R;b++){const D=Array.isArray(T[b])?T[b]:[T[b]];for(let V=0,Y=D.length;V<Y;V++){const H=D[V],X=Array.isArray(H.value)?H.value:[H.value];for(let j=0,q=X.length;j<q;j++){const at=X[j],nt=p(at),ct=w%I,lt=ct%nt.boundary,wt=ct+lt;w+=lt,wt!==0&&I-wt<nt.storage&&(w+=I-wt),H.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=nt.storage}}}const v=w%I;return v>0&&(w+=I-v),x.__size=w,x.__cache={},this}function p(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",x),T}function E(x){const T=x.target;T.removeEventListener("dispose",E);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function P(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:P}}const ib=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function sb(){return Fn===null&&(Fn=new o0(ib,16,16,is,ei),Fn.name="DFG_LUT",Fn.minFilter=We,Fn.magFilter=We,Fn.wrapS=fi,Fn.wrapT=fi,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class rb{constructor(t={}){const{canvas:e=M_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=un}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=f,m=new Set([Cc,wc,Ac]),p=new Set([un,ti,Sr,Mr,Ec,Tc]),E=new Uint32Array(4),P=new Int32Array(4),x=new U;let T=null,w=null;const I=[],v=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,V=null,Y=null,H=null,X=null;this._outputColorSpace=Re;let j=0,q=0,at=null,nt=-1,ct=null;const lt=new Me,wt=new Me;let Dt=null;const te=new ne(0);let Yt=0,qt=e.width,it=e.height,tt=1,vt=null,Ht=null;const Ct=new Me(0,0,qt,it),A=new Me(0,0,qt,it);let N=!1;const L=new Oc;let z=!1,B=!1;const G=new Se,$=new U,ot=new Me,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function pt(){return at===null?tt:1}let C=i;function xt(S,F){return e.getContext(S,F)}let St,y,g,O,W,Q,ft,mt,rt,ht,_t,Lt,yt,Mt,zt,kt,Kt,k,bt,ut,Et,Pt,dt;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yc}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",vn,!1),C===null){const F="webgl2";if(C=xt(F,S),C===null)throw xt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(S){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",vn,!1),ie("WebGLRenderer: "+S.message),S}function Gt(){St=new sM(C),St.init(),Et=new Zy(C,St),y=new KS(C,St,t,Et),g=new qy(C,St),y.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),Y=C.createFramebuffer(),H=C.createFramebuffer(),X=C.createFramebuffer(),O=new oM(C),W=new Iy,Q=new Ky(C,St,g,W,y,Et,O),ft=new iM(R),mt=new cv(C),Pt=new YS(C,mt),rt=new rM(C,mt,O,Pt),ht=new cM(C,rt,mt,Pt,O),k=new lM(C,y,Q),zt=new ZS(W),_t=new Ly(R,ft,St,y,Pt,zt),Lt=new eb(R,W),yt=new Uy,Mt=new Gy(St),Kt=new XS(R,ft,g,ht,_,l),kt=new Yy(R,ht,y),dt=new nb(C,O,y,g),bt=new qS(C,St,O),ut=new aM(C,St,O),O.programs=_t.programs,R.capabilities=y,R.extensions=St,R.properties=W,R.renderLists=yt,R.shadowMap=kt,R.state=g,R.info=O}M!==un&&(b=new uM(M,e.width,e.height,o,s,r));const Ft=new jy(R,C);this.xr=Ft,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=St.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=St.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(qt,it,!1))},this.getSize=function(S){return S.set(qt,it)},this.setSize=function(S,F,et=!0){if(Ft.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=S,it=F,e.width=Math.floor(S*tt),e.height=Math.floor(F*tt),et===!0&&(e.style.width=S+"px",e.style.height=F+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(qt*tt,it*tt).floor()},this.setDrawingBufferSize=function(S,F,et){qt=S,it=F,tt=et,e.width=Math.floor(S*et),e.height=Math.floor(F*et),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(M===un){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(lt)},this.getViewport=function(S){return S.copy(Ct)},this.setViewport=function(S,F,et,K){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,F,et,K),g.viewport(lt.copy(Ct).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(A)},this.setScissor=function(S,F,et,K){S.isVector4?A.set(S.x,S.y,S.z,S.w):A.set(S,F,et,K),g.scissor(wt.copy(A).multiplyScalar(tt).round())},this.getScissorTest=function(){return N},this.setScissorTest=function(S){g.setScissorTest(N=S)},this.setOpaqueSort=function(S){vt=S},this.setTransparentSort=function(S){Ht=S},this.getClearColor=function(S){return S.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,et=!0){let K=0;if(S){let Z=!1;if(at!==null){const Rt=at.texture.format;Z=m.has(Rt)}if(Z){const Rt=at.texture.type,Nt=p.has(Rt),At=Kt.getClearColor(),Ut=Kt.getClearAlpha(),Bt=At.r,$t=At.g,jt=At.b;Nt?(E[0]=Bt,E[1]=$t,E[2]=jt,E[3]=Ut,C.clearBufferuiv(C.COLOR,0,E)):(P[0]=Bt,P[1]=$t,P[2]=jt,P[3]=Ut,C.clearBufferiv(C.COLOR,0,P))}else K|=C.COLOR_BUFFER_BIT}F&&(K|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(K|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&C.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),V=S},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",vn,!1),Kt.dispose(),yt.dispose(),Mt.dispose(),W.dispose(),ft.dispose(),ht.dispose(),Pt.dispose(),dt.dispose(),_t.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Zc),Ft.removeEventListener("sessionend",$c),Hi.stop()};function pe(S){S.preventDefault(),zh("WebGLRenderer: Context Lost."),D=!0}function re(){zh("WebGLRenderer: Context Restored."),D=!1;const S=O.autoReset,F=kt.enabled,et=kt.autoUpdate,K=kt.needsUpdate,Z=kt.type;Gt(),O.autoReset=S,kt.enabled=F,kt.autoUpdate=et,kt.needsUpdate=K,kt.type=Z}function vn(S){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function In(S){const F=S.target;F.removeEventListener("dispose",In),ip(F)}function ip(S){sp(S),W.remove(S)}function sp(S){const F=W.get(S).programs;F!==void 0&&(F.forEach(function(et){_t.releaseProgram(et)}),S.isShaderMaterial&&_t.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,et,K,Z,Rt){F===null&&(F=st);const Nt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,At=op(S,F,et,K,Z);g.setMaterial(K,Nt);let Ut=et.index,Bt=1;if(K.wireframe===!0){if(Ut=rt.getWireframeAttribute(et),Ut===void 0)return;Bt=2}const $t=et.drawRange,jt=et.attributes.position;let Ot=$t.start*Bt,ae=($t.start+$t.count)*Bt;Rt!==null&&(Ot=Math.max(Ot,Rt.start*Bt),ae=Math.min(ae,(Rt.start+Rt.count)*Bt)),Ut!==null?(Ot=Math.max(Ot,0),ae=Math.min(ae,Ut.count)):jt!=null&&(Ot=Math.max(Ot,0),ae=Math.min(ae,jt.count));const we=ae-Ot;if(we<0||we===1/0)return;Pt.setup(Z,K,At,et,Ut);let ve,de=bt;if(Ut!==null&&(ve=mt.get(Ut),de=ut,de.setIndex(ve)),Z.isMesh)K.wireframe===!0?(g.setLineWidth(K.wireframeLinewidth*pt()),de.setMode(C.LINES)):de.setMode(C.TRIANGLES);else if(Z.isLine){let Be=K.linewidth;Be===void 0&&(Be=1),g.setLineWidth(Be*pt()),Z.isLineSegments?de.setMode(C.LINES):Z.isLineLoop?de.setMode(C.LINE_LOOP):de.setMode(C.LINE_STRIP)}else Z.isPoints?de.setMode(C.POINTS):Z.isSprite&&de.setMode(C.TRIANGLES);if(Z.isBatchedMesh)if(St.get("WEBGL_multi_draw"))de.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Be=Z._multiDrawStarts,It=Z._multiDrawCounts,qe=Z._multiDrawCount,se=Ut?mt.get(Ut).bytesPerElement:1,pn=W.get(K).currentProgram.getUniforms();for(let Nn=0;Nn<qe;Nn++)pn.setValue(C,"_gl_DrawID",Nn),de.render(Be[Nn]/se,It[Nn])}else if(Z.isInstancedMesh)de.renderInstances(Ot,we,Z.count);else if(et.isInstancedBufferGeometry){const Be=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,It=Math.min(et.instanceCount,Be);de.renderInstances(Ot,we,It)}else de.render(Ot,we)};function Kc(S,F,et,K){V!==null&&S.isNodeMaterial&&V.setObject(K,S),z===!0&&zt.setState(S,et,!1),S.transparent===!0&&S.side===Ve&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,Ur(S,F,K),S.side=es,S.needsUpdate=!0,Ur(S,F,K),S.side=Ve):Ur(S,F,K)}this.compile=function(S,F,et=null){et===null&&(et=S),V!==null&&V.renderStart(S,F,et),w=Mt.get(et),w.init(F),v.push(w),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),S!==et&&S.traverseVisible(function(Z){Z.isLight&&Z.layers.test(F.layers)&&(w.pushLight(Z),Z.castShadow&&w.pushShadow(Z))}),w.setupLights(),V!==null&&V.updateLights(w.state.lightsArray),B=this.localClippingEnabled,z=zt.init(this.clippingPlanes,B),z===!0&&zt.setGlobalState(this.clippingPlanes,F),V!==null&&kt.render(w.state.shadowsArray,et,F);const K=new Set;return S.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Rt=Z.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){const At=Rt[Nt];Kc(At,et,F,Z),K.add(At)}else Kc(Rt,et,F,Z),K.add(Rt)}),w=v.pop(),V!==null&&V.renderEnd(),K},this.compileAsync=function(S,F,et=null){const K=this.compile(S,F,et);return new Promise(Z=>{function Rt(){if(K.forEach(function(Nt){const Ut=W.get(Nt).currentProgram;(Ut===void 0||Ut.isReady())&&K.delete(Nt)}),K.size===0){Z(S);return}setTimeout(Rt,10)}St.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ja=null;function rp(S){ja&&ja(S)}function Zc(){Hi.stop()}function $c(){Hi.start()}const Hi=new Wf;Hi.setAnimationLoop(rp),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(S){ja=S,Ft.setAnimationLoop(S),S===null?Hi.stop():Hi.start()},Ft.addEventListener("sessionstart",Zc),Ft.addEventListener("sessionend",$c),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;V!==null&&V.renderStart(S,F);const et=Ft.enabled===!0&&Ft.isPresenting===!0,K=b!==null&&(at===null||et)&&b.begin(R,at);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(F),F=Ft.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,F,at),w=Mt.get(S,v.length),w.init(F),w.state.textureUnits=Q.getTextureUnits(),v.push(w),G.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),L.setFromProjectionMatrix(G,Kn,F.reversedDepth),B=this.localClippingEnabled,z=zt.init(this.clippingPlanes,B),T=yt.get(S,I.length),T.init(),I.push(T),Ft.enabled===!0&&Ft.isPresenting===!0){const Nt=R.xr.getDepthSensingMesh();Nt!==null&&to(Nt,F,-1/0,R.sortObjects)}to(S,F,0,R.sortObjects),T.finish(),V!==null&&V.updateLights(w.state.lightsArray),R.sortObjects===!0&&T.sort(vt,Ht),J=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,J&&Kt.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),z===!0&&zt.beginShadows();const Z=w.state.shadowsArray;if(kt.render(Z,S,F),z===!0&&zt.endShadows(),(K&&b.hasRenderPass())===!1){const Nt=T.opaque,At=T.transmissive;if(w.setupLights(),F.isArrayCamera){const Ut=F.cameras;if(At.length>0)for(let Bt=0,$t=Ut.length;Bt<$t;Bt++){const jt=Ut[Bt];Qc(Nt,At,S,jt)}J&&Kt.render(S);for(let Bt=0,$t=Ut.length;Bt<$t;Bt++){const jt=Ut[Bt];Jc(T,S,jt,jt.viewport)}}else At.length>0&&Qc(Nt,At,S,F),J&&Kt.render(S),Jc(T,S,F)}at!==null&&q===0&&(Q.updateMultisampleRenderTarget(at),Q.updateRenderTargetMipmap(at)),K&&b.end(R),S.isScene===!0&&S.onAfterRender(R,S,F),Pt.resetDefaultState(),nt=-1,ct=null,v.pop(),v.length>0?(w=v[v.length-1],Q.setTextureUnits(w.state.textureUnits),z===!0&&zt.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?T=I[I.length-1]:T=null,V!==null&&V.renderEnd()};function to(S,F,et,K){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)et=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(L)){K&&ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(G);const Nt=ht.update(S),At=S.material;At.visible&&T.push(S,Nt,At,et,ot.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(L))){const Nt=ht.update(S),At=S.material;if(K&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ot.copy(S.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),ot.copy(Nt.boundingSphere.center)),ot.applyMatrix4(S.matrixWorld).applyMatrix4(G)),Array.isArray(At)){const Ut=Nt.groups;for(let Bt=0,$t=Ut.length;Bt<$t;Bt++){const jt=Ut[Bt],Ot=At[jt.materialIndex];Ot&&Ot.visible&&T.push(S,Nt,Ot,et,ot.z,jt,F)}}else At.visible&&T.push(S,Nt,At,et,ot.z,null,F)}}const Rt=S.children;for(let Nt=0,At=Rt.length;Nt<At;Nt++)to(Rt[Nt],F,et,K)}function Jc(S,F,et,K){const{opaque:Z,transmissive:Rt,transparent:Nt}=S;w.setupLightsView(et),z===!0&&zt.setGlobalState(R.clippingPlanes,et),K&&g.viewport(lt.copy(K)),Z.length>0&&Nr(Z,F,et),Rt.length>0&&Nr(Rt,F,et),Nt.length>0&&Nr(Nt,F,et),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Qc(S,F,et,K){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[K.id]===void 0){const Ot=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[K.id]=new Pn(1,1,{generateMipmaps:!0,type:Ot?ei:un,minFilter:Zi,samples:Math.max(4,y.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const Rt=w.state.transmissionRenderTarget[K.id],Nt=K.viewport||lt;Rt.setSize(Nt.z*R.transmissionResolutionScale,Nt.w*R.transmissionResolutionScale);const At=R.getRenderTarget(),Ut=R.getActiveCubeFace(),Bt=R.getActiveMipmapLevel();R.setRenderTarget(Rt),R.getClearColor(te),Yt=R.getClearAlpha(),Yt<1&&R.setClearColor(16777215,.5),R.clear(),J&&Kt.render(et);const $t=R.toneMapping;R.toneMapping=$n;const jt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),w.setupLightsView(K),z===!0&&zt.setGlobalState(R.clippingPlanes,K),Nr(S,et,K),Q.updateMultisampleRenderTarget(Rt),Q.updateRenderTargetMipmap(Rt),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ae=0,we=F.length;ae<we;ae++){const ve=F[ae],{object:de,geometry:Be,material:It,group:qe}=ve;if(It.side===Ve&&de.layers.test(K.layers)){const se=It.side;It.side=rn,It.needsUpdate=!0,jc(de,et,K,Be,It,qe),It.side=se,It.needsUpdate=!0,Ot=!0}}Ot===!0&&(Q.updateMultisampleRenderTarget(Rt),Q.updateRenderTargetMipmap(Rt))}R.setRenderTarget(At,Ut,Bt),R.setClearColor(te,Yt),jt!==void 0&&(K.viewport=jt),R.toneMapping=$t}function Nr(S,F,et){const K=F.isScene===!0?F.overrideMaterial:null;for(let Z=0,Rt=S.length;Z<Rt;Z++){const Nt=S[Z],{object:At,geometry:Ut,group:Bt}=Nt;let $t=Nt.material;$t.allowOverride===!0&&K!==null&&($t=K),At.layers.test(et.layers)&&jc(At,F,et,Ut,$t,Bt)}}function jc(S,F,et,K,Z,Rt){V!==null&&Z.isNodeMaterial&&V.setObject(S,Z),S.onBeforeRender(R,F,et,K,Z,Rt),S.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(R,F,et,K,S,Rt),Z.transparent===!0&&Z.side===Ve&&Z.forceSinglePass===!1?(Z.side=rn,Z.needsUpdate=!0,R.renderBufferDirect(et,F,K,Z,S,Rt),Z.side=es,Z.needsUpdate=!0,R.renderBufferDirect(et,F,K,Z,S,Rt),Z.side=Ve):R.renderBufferDirect(et,F,K,Z,S,Rt),S.onAfterRender(R,F,et,K,Z,Rt)}function Ur(S,F,et){F.isScene!==!0&&(F=st);const K=W.get(S),Z=w.state.lights,Rt=w.state.shadowsArray,Nt=Z.state.version,At=_t.getParameters(S,Z.state,Rt,F,et,w.state.lightProbeGridArray),Ut=_t.getProgramCacheKey(At);let Bt=K.programs;K.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,K.fog=F.fog;const $t=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;K.envMap=ft.get(S.envMap||K.environment,$t),K.envMapRotation=K.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",In),Bt=new Map,K.programs=Bt);let jt=Bt.get(Ut);if(jt!==void 0){if(K.currentProgram===jt&&K.lightsStateVersion===Nt)return eh(S,At),jt}else At.uniforms=_t.getUniforms(S),V!==null&&S.isNodeMaterial&&V.build(S,et,At),S.onBeforeCompile(At,R),jt=_t.acquireProgram(At,Ut),Bt.set(Ut,jt),K.uniforms=At.uniforms;const Ot=K.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ot.clippingPlanes=zt.uniform),eh(S,At),K.needsLights=cp(S),K.lightsStateVersion=Nt,K.needsLights&&(Ot.ambientLightColor.value=Z.state.ambient,Ot.lightProbe.value=Z.state.probe,Ot.sunLights.value=Z.state.sun,Ot.sunLightShadows.value=Z.state.sunShadow,Ot.directionalLights.value=Z.state.directional,Ot.directionalLightShadows.value=Z.state.directionalShadow,Ot.spotLights.value=Z.state.spot,Ot.spotLightShadows.value=Z.state.spotShadow,Ot.rectAreaLights.value=Z.state.rectArea,Ot.ltc_1.value=Z.state.rectAreaLTC1,Ot.ltc_2.value=Z.state.rectAreaLTC2,Ot.pointLights.value=Z.state.point,Ot.pointLightShadows.value=Z.state.pointShadow,Ot.hemisphereLights.value=Z.state.hemi,Ot.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ot.sunShadowCascade.value=Z.state.sunShadowCascade,Ot.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ot.spotLightMatrix.value=Z.state.spotLightMatrix,Ot.spotLightMap.value=Z.state.spotLightMap,Ot.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.lightProbeGrid=w.state.lightProbeGridArray.length>0,K.currentProgram=jt,K.uniformsList=null,jt}function th(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Ma.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function eh(S,F){const et=W.get(S);et.outputColorSpace=F.outputColorSpace,et.batching=F.batching,et.batchingColor=F.batchingColor,et.instancing=F.instancing,et.instancingColor=F.instancingColor,et.instancingMorph=F.instancingMorph,et.skinning=F.skinning,et.morphTargets=F.morphTargets,et.morphNormals=F.morphNormals,et.morphColors=F.morphColors,et.morphTargetsCount=F.morphTargetsCount,et.numClippingPlanes=F.numClippingPlanes,et.numIntersection=F.numClipIntersection,et.vertexAlphas=F.vertexAlphas,et.vertexTangents=F.vertexTangents,et.toneMapping=F.toneMapping}function ap(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let et=0,K=S.length;et<K;et++){const Z=S[et];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function op(S,F,et,K,Z){F.isScene!==!0&&(F=st),Q.resetTextureUnits();const Rt=F.fog,Nt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?F.environment:null,At=at===null?R.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ee.workingColorSpace,Ut=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Bt=ft.get(K.envMap||Nt,Ut),$t=K.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,jt=!!et.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ot=!!et.morphAttributes.position,ae=!!et.morphAttributes.normal,we=!!et.morphAttributes.color;let ve=$n;K.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ve=R.toneMapping);const de=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Be=de!==void 0?de.length:0,It=W.get(K),qe=w.state.lights;if(z===!0&&(B===!0||S!==ct)){const me=S===ct&&K.id===nt;zt.setState(K,S,me)}let se=!1;K.version===It.__version?(It.needsLights&&It.lightsStateVersion!==qe.state.version||It.outputColorSpace!==At||Z.isBatchedMesh&&It.batching===!1||!Z.isBatchedMesh&&It.batching===!0||Z.isBatchedMesh&&It.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&It.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&It.instancing===!1||!Z.isInstancedMesh&&It.instancing===!0||Z.isSkinnedMesh&&It.skinning===!1||!Z.isSkinnedMesh&&It.skinning===!0||Z.isInstancedMesh&&It.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&It.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&It.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&It.instancingMorph===!1&&Z.morphTexture!==null||It.envMap!==Bt||K.fog===!0&&It.fog!==Rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==zt.numPlanes||It.numIntersection!==zt.numIntersection)||It.vertexAlphas!==$t||It.vertexTangents!==jt||It.morphTargets!==Ot||It.morphNormals!==ae||It.morphColors!==we||It.toneMapping!==ve||It.morphTargetsCount!==Be||!!It.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,It.__version=K.version);let pn=It.currentProgram;se===!0&&(pn=Ur(K,F,Z),V&&K.isNodeMaterial&&V.onUpdateProgram(K,pn,It));let Nn=!1,Ei=!1,os=!1;const ue=pn.getUniforms(),Ee=It.uniforms;if(g.useProgram(pn.program)&&(Nn=!0,Ei=!0,os=!0),K.id!==nt&&(nt=K.id,Ei=!0),It.needsLights){const me=ap(w.state.lightProbeGridArray,Z);It.lightProbeGrid!==me&&(It.lightProbeGrid=me,Ei=!0)}if(Nn||ct!==S){g.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ue.setValue(C,"projectionMatrix",S.projectionMatrix),ue.setValue(C,"viewMatrix",S.matrixWorldInverse);const Ai=ue.map.cameraPosition;Ai!==void 0&&Ai.setValue(C,$.setFromMatrixPosition(S.matrixWorld)),y.logarithmicDepthBuffer&&ue.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ue.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),ct!==S&&(ct=S,Ei=!0,os=!0)}if(It.needsLights&&(qe.state.sunShadowMap.length>0&&ue.setValue(C,"sunShadowMap",qe.state.sunShadowMap,Q),qe.state.directionalShadowMap.length>0&&ue.setValue(C,"directionalShadowMap",qe.state.directionalShadowMap,Q),qe.state.spotShadowMap.length>0&&ue.setValue(C,"spotShadowMap",qe.state.spotShadowMap,Q),qe.state.pointShadowMap.length>0&&ue.setValue(C,"pointShadowMap",qe.state.pointShadowMap,Q)),Z.isSkinnedMesh){ue.setOptional(C,Z,"bindMatrix"),ue.setOptional(C,Z,"bindMatrixInverse");const me=Z.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),ue.setValue(C,"boneTexture",me.boneTexture,Q))}Z.isBatchedMesh&&(ue.setOptional(C,Z,"batchingTexture"),ue.setValue(C,"batchingTexture",Z._matricesTexture,Q),ue.setOptional(C,Z,"batchingIdTexture"),ue.setValue(C,"batchingIdTexture",Z._indirectTexture,Q),ue.setOptional(C,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ue.setValue(C,"batchingColorTexture",Z._colorsTexture,Q));const Ti=et.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&k.update(Z,et,pn),(Ei||It.receiveShadow!==Z.receiveShadow)&&(It.receiveShadow=Z.receiveShadow,ue.setValue(C,"receiveShadow",Z.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&F.environment!==null&&(Ee.envMapIntensity.value=F.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=sb()),Ei){if(ue.setValue(C,"toneMappingExposure",R.toneMappingExposure),It.needsLights&&lp(Ee,os),Rt&&K.fog===!0&&Lt.refreshFogUniforms(Ee,Rt),Lt.refreshMaterialUniforms(Ee,K,tt,it,w.state.transmissionRenderTarget[S.id]),It.needsLights&&It.lightProbeGrid){const me=It.lightProbeGrid;Ee.probesSH.value=me.texture,Ee.probesMin.value.copy(me.boundingBox.min),Ee.probesMax.value.copy(me.boundingBox.max),Ee.probesResolution.value.copy(me.resolution)}Ma.upload(C,th(It),Ee,Q)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ma.upload(C,th(It),Ee,Q),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ue.setValue(C,"center",Z.center),ue.setValue(C,"modelViewMatrix",Z.modelViewMatrix),ue.setValue(C,"normalMatrix",Z.normalMatrix),ue.setValue(C,"modelMatrix",Z.matrixWorld),K.uniformsGroups!==void 0){const me=K.uniformsGroups;for(let Ai=0,ls=me.length;Ai<ls;Ai++){const ih=me[Ai];dt.update(ih,pn),dt.bind(ih,pn)}}return pn}function lp(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function cp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(S,F,et){const K=W.get(S);K.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=F,W.get(S.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:et,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const et=W.get(S);et.__webglFramebuffer=F,et.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,et=0){at=S,j=F,q=et;let K=null,Z=!1,Rt=!1;if(S){const At=W.get(S);if(At.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(C.FRAMEBUFFER,At.__webglFramebuffer),lt.copy(S.viewport),wt.copy(S.scissor),Dt=S.scissorTest,g.viewport(lt),g.scissor(wt),g.setScissorTest(Dt),nt=-1;return}else if(At.__webglFramebuffer===void 0)Q.setupRenderTarget(S);else if(At.__hasExternalTextures)Q.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const $t=S.depthTexture;if(At.__boundDepthTexture!==$t){if($t!==null&&W.has($t)&&(S.width!==$t.image.width||S.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(S)}}const Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Rt=!0);const Bt=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?K=Bt[F][et]:K=Bt[F],Z=!0):S.samples>0&&Q.useMultisampledRTT(S)===!1?K=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?K=Bt[et]:K=Bt,lt.copy(S.viewport),wt.copy(S.scissor),Dt=S.scissorTest}else lt.copy(Ct).multiplyScalar(tt).floor(),wt.copy(A).multiplyScalar(tt).floor(),Dt=N;if(et!==0&&(K=Y),g.bindFramebuffer(C.FRAMEBUFFER,K)&&g.drawBuffers(S,K),g.viewport(lt),g.scissor(wt),g.setScissorTest(Dt),Z){const At=W.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,At.__webglTexture,et)}else if(Rt){const At=F;for(let Ut=0;Ut<S.textures.length;Ut++){const Bt=W.get(S.textures[Ut]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ut,Bt.__webglTexture,et,At)}}else if(S!==null&&et!==0){const At=W.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,At.__webglTexture,et)}nt=-1};function nh(S){const F=W.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=y.textureFormatReadable(S.format),F.__typeReadable=y.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,et,K,Z,Rt,Nt,At=0){if(!(S&&S.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ut=Ut[Nt]),Ut){g.bindFramebuffer(C.FRAMEBUFFER,Ut);try{const Bt=S.textures[At],$t=Bt.format,jt=Bt.type;S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+At);const Ot=nh(Bt);if(Ot.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-K&&et>=0&&et<=S.height-Z&&C.readPixels(F,et,K,Z,Et.convert($t),Et.convert(jt),Rt)}finally{const Bt=at!==null?W.get(at).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(S,F,et,K,Z,Rt,Nt,At=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ut=Ut[Nt]),Ut)if(F>=0&&F<=S.width-K&&et>=0&&et<=S.height-Z){g.bindFramebuffer(C.FRAMEBUFFER,Ut);const Bt=S.textures[At],$t=Bt.format,jt=Bt.type;S.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+At);const Ot=nh(Bt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ae),C.bufferData(C.PIXEL_PACK_BUFFER,Rt.byteLength,C.STREAM_READ),C.readPixels(F,et,K,Z,Et.convert($t),Et.convert(jt),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);const we=at!==null?W.get(at).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,we);const ve=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await y_(C,ve,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ae),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Rt),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(ae),C.deleteSync(ve),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,et=0){const K=Math.pow(2,-et),Z=Math.floor(S.image.width*K),Rt=Math.floor(S.image.height*K),Nt=F!==null?F.x:0,At=F!==null?F.y:0;Q.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,et,0,0,Nt,At,Z,Rt),g.unbindTexture()},this.copyTextureToTexture=function(S,F,et=null,K=null,Z=0,Rt=0){let Nt,At,Ut,Bt,$t,jt,Ot,ae,we;const ve=S.isCompressedTexture?S.mipmaps[Rt]:S.image;if(et!==null)Nt=et.max.x-et.min.x,At=et.max.y-et.min.y,Ut=et.isBox3?et.max.z-et.min.z:1,Bt=et.min.x,$t=et.min.y,jt=et.isBox3?et.min.z:0;else{const Ee=Math.pow(2,-Z);Nt=Math.floor(ve.width*Ee),At=Math.floor(ve.height*Ee),S.isDataArrayTexture?Ut=ve.depth:S.isData3DTexture?Ut=Math.floor(ve.depth*Ee):Ut=1,Bt=0,$t=0,jt=0}K!==null?(Ot=K.x,ae=K.y,we=K.z):(Ot=0,ae=0,we=0);const de=Et.convert(F.format),Be=Et.convert(F.type);let It;F.isData3DTexture?(Q.setTexture3D(F,0),It=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),It=C.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),It=C.TEXTURE_2D),g.activeTexture(C.TEXTURE0),g.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const qe=g.getParameter(C.UNPACK_ROW_LENGTH),se=g.getParameter(C.UNPACK_IMAGE_HEIGHT),pn=g.getParameter(C.UNPACK_SKIP_PIXELS),Nn=g.getParameter(C.UNPACK_SKIP_ROWS),Ei=g.getParameter(C.UNPACK_SKIP_IMAGES);g.pixelStorei(C.UNPACK_ROW_LENGTH,ve.width),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ve.height),g.pixelStorei(C.UNPACK_SKIP_PIXELS,Bt),g.pixelStorei(C.UNPACK_SKIP_ROWS,$t),g.pixelStorei(C.UNPACK_SKIP_IMAGES,jt);const os=S.isDataArrayTexture||S.isData3DTexture,ue=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const Ee=W.get(S),Ti=W.get(F),me=W.get(Ee.__renderTarget),Ai=W.get(Ti.__renderTarget);g.bindFramebuffer(C.READ_FRAMEBUFFER,me.__webglFramebuffer),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let ls=0;ls<Ut;ls++)os&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,W.get(S).__webglTexture,Z,jt+ls),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,W.get(F).__webglTexture,Rt,we+ls)),C.blitFramebuffer(Bt,$t,Nt,At,Ot,ae,Nt,At,C.DEPTH_BUFFER_BIT,C.NEAREST);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Z!==0||S.isRenderTargetTexture||W.has(S)){const Ee=W.get(S),Ti=W.get(F);g.bindFramebuffer(C.READ_FRAMEBUFFER,H),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,X);for(let me=0;me<Ut;me++)os?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ee.__webglTexture,Z,jt+me):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ee.__webglTexture,Z),ue?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ti.__webglTexture,Rt,we+me):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ti.__webglTexture,Rt),Z!==0?C.blitFramebuffer(Bt,$t,Nt,At,Ot,ae,Nt,At,C.COLOR_BUFFER_BIT,C.NEAREST):ue?C.copyTexSubImage3D(It,Rt,Ot,ae,we+me,Bt,$t,Nt,At):C.copyTexSubImage2D(It,Rt,Ot,ae,Bt,$t,Nt,At);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ue?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(It,Rt,Ot,ae,we,Nt,At,Ut,de,Be,ve.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(It,Rt,Ot,ae,we,Nt,At,Ut,de,ve.data):C.texSubImage3D(It,Rt,Ot,ae,we,Nt,At,Ut,de,Be,ve):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Rt,Ot,ae,Nt,At,de,Be,ve.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Rt,Ot,ae,ve.width,ve.height,de,ve.data):C.texSubImage2D(C.TEXTURE_2D,Rt,Ot,ae,Nt,At,de,Be,ve);g.pixelStorei(C.UNPACK_ROW_LENGTH,qe),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,se),g.pixelStorei(C.UNPACK_SKIP_PIXELS,pn),g.pixelStorei(C.UNPACK_SKIP_ROWS,Nn),g.pixelStorei(C.UNPACK_SKIP_IMAGES,Ei),Rt===0&&F.generateMipmaps&&C.generateMipmap(It),g.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&Q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Q.setTextureCube(S,0):S.isData3DTexture?Q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Q.setTexture2DArray(S,0):Q.setTexture2D(S,0),g.unbindTexture()},this.resetState=function(){j=0,q=0,at=null,g.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Vu={type:"change"},kc={type:"start"},Qf={type:"end"},ha=new Uc,Wu=new En,ab=Math.cos(70*be.DEG2RAD),Pe=new U,en=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$o=1e-6;class ob extends ov{constructor(t,e=null){super(t,e),this.state=he.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yn.ROTATE,MIDDLE:Yn.DOLLY,RIGHT:Yn.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new gn,this._lastTargetPosition=new U,this._quat=new gn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vu,this._sphericalDelta=new vu,this._scale=1,this._panOffset=new U,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new U,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cb.bind(this),this._onPointerDown=lb.bind(this),this._onPointerUp=hb.bind(this),this._onContextMenu=_b.bind(this),this._onMouseWheel=fb.bind(this),this._onKeyDown=pb.bind(this),this._onTouchStart=mb.bind(this),this._onTouchMove=gb.bind(this),this._onMouseDown=ub.bind(this),this._onMouseMove=db.bind(this),this._interceptControlDown=vb.bind(this),this._interceptControlUp=xb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=he.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vu),this.update(),this.state=he.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=en:i>Math.PI&&(i-=en),s<-Math.PI?s+=en:s>Math.PI&&(s-=en),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ha.origin.copy(this.object.position),ha.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ha.direction))<ab?this.object.lookAt(this.target):(Wu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ha.intersectPlane(Wu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$o||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$o||this._lastTargetPosition.distanceToSquared(this.target)>$o?(this.dispatchEvent(Vu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function lb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function cb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qf),this.state=he.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ub(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Yn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=he.DOLLY;break;case Yn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}break;case Yn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(kc)}function db(n){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function fb(n){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(n.preventDefault(),this.dispatchEvent(kc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Qf))}function pb(n){this.enabled!==!1&&this._handleKeyDown(n)}function mb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=he.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=he.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(kc)}function gb(n){switch(this._trackPointer(n),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=he.NONE}}function _b(n){this.enabled!==!1&&n.preventDefault()}function vb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Sb=""+new URL("wood-tabletop-BeH66SVl.png",import.meta.url).href,Mb=""+new URL("board-grid-CQdbSLhz.png",import.meta.url).href,bn=10,Hn=bn/2,Jo=.12,ua=(bn+2.8)*2,ln=512,Xu=Math.hypot(7.8,10),Yu=10.8,Qa=.95,Ge=.62*Qa,Je=.93*Qa,jf=.032*Qa,sn=.0035*Qa,qu=Math.PI/2,Ku=Math.PI/4;function Zu(n={}){return n.guard&&n.pinned?qu+Ku:n.guard?qu:n.pinned?Ku:0}const yb=sn/2+.001,bb=.025,Eb=Ge*.25,Tb=Je*.14,Ab=sn*1.4,wb=-7*Math.PI/180,Qo=yb+bb,Cb=.003,jo=.009,Rb=.035,$u=.07,da=.3,Pb=.0105,fa=.16,tp=.58,Db=.34,ep=.008,Lb=.105;function np(n){Array.isArray(n)?new Set(n).forEach(t=>t.dispose()):n==null||n.dispose()}function ya(n=0){const t=new Hc,e=-Ge/2-n,i=Ge/2+n,s=-Je/2-n,r=Je/2+n,a=jf+n;return t.moveTo(e+a,s),t.lineTo(i-a,s),t.absarc(i-a,s+a,a,-Math.PI/2,0),t.lineTo(i,r-a),t.absarc(i-a,r-a,a,0,Math.PI/2),t.lineTo(e+a,r),t.absarc(e+a,r-a,a,Math.PI/2,Math.PI),t.lineTo(e,s+a),t.absarc(e+a,s+a,a,Math.PI,Math.PI*1.5),t.closePath(),t}function Zs(){const n=new zc(ya(),8),t=n.attributes.position,e=n.attributes.uv;for(let i=0;i<t.count;i+=1)e.setXY(i,(t.getX(i)+Ge/2)/Ge,(t.getY(i)+Je/2)/Je);return e.needsUpdate=!0,n}function Ib(){const n=document.createElement("canvas");n.width=ln,n.height=ln;const t=n.getContext("2d");t.fillStyle="#000000",t.fillRect(0,0,ln,ln);const e=ln*.68,i=(ln-e)/2;return t.filter=`blur(${ln*.035}px)`,t.fillStyle="#ffffff",t.beginPath(),t.roundRect(i,i,e,e,ln*.2),t.fill(),t.filter="none",t.getImageData(0,0,ln,ln).data}function Nb(){const n=new Fi(ua,ua,128,128),t=n.attributes.position,e=new Float32Array(t.count*3),i=Ib();for(let s=0;s<t.count;s+=1){const r=be.clamp(t.getX(s)/ua+.5,0,1),a=be.clamp(t.getY(s)/ua+.5,0,1),o=Math.round(r*(ln-1)),l=Math.round(a*(ln-1)),c=i[(l*ln+o)*4]/255;e.set([c,c,c],s*3)}return n.setAttribute("color",new Jn(e,3)),n}function Ju(){return new Ln({uniforms:{uHalfSize:{value:new gt(Ge/2,Je/2)},uCornerRadius:{value:jf},uBoardHalf:{value:Hn},uShadowY:{value:Pb},uShadowColor:{value:new U(.12,.11,.09)},uSoftness:{value:ep},uOpacity:{value:tp}},vertexShader:`
      varying vec2 vLocal;
      varying vec3 vWorldPosition;
      uniform float uShadowY;
      void main() {
        vLocal = position.xy;
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        worldPosition.y = uShadowY;
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * viewMatrix * worldPosition;
      }
    `,fragmentShader:`
      uniform vec2 uHalfSize;
      uniform float uCornerRadius;
      uniform float uBoardHalf;
      uniform vec3 uShadowColor;
      uniform float uSoftness;
      uniform float uOpacity;
      varying vec2 vLocal;
      varying vec3 vWorldPosition;

      float roundedBoxDistance(vec2 point, vec2 halfSize, float radius) {
        vec2 q = abs(point) - (halfSize - vec2(radius));
        return length(max(q, vec2(0.0))) + min(max(q.x, q.y), 0.0) - radius;
      }

      void main() {
        if (abs(vWorldPosition.x) > uBoardHalf || abs(vWorldPosition.z) > uBoardHalf) discard;
        float distanceToCard = roundedBoxDistance(vLocal, uHalfSize, uCornerRadius);
        float blurRadius = max(uSoftness, fwidth(distanceToCard));
        float coverage = 1.0 - smoothstep(-blurRadius, blurRadius, distanceToCard);
        float alpha = coverage * uOpacity;
        gl_FragColor = vec4(uShadowColor * alpha, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,blending:ul,side:Ve,toneMapped:!1})}function Bn(n){n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),np(t.material))})}class Ub{constructor(t,e,i={},s=[]){this.container=t,this.cards=new Map(e.map(o=>[o.name,o])),this.itemCards=new Map(s.map(o=>[o.id,o])),this.callbacks=i,this.placements={},this.cardObjects=new Map,this.cardMeshes=new Map,this.cardFaceMeshes=new Map,this.cardActivationOverlays=new Map,this.cardFlipGroups=new Map,this.cardShadows=new Map,this.motionStates=new Map,this.hoverTargets=new Map,this.textures=new Map,this.itemTextures=new Map,this.backTextures=new Map,this.backHitAreas=new Map,this.cardFaces=new Map,this.flipAnimations=new Map,this.cardOwners=new Map,this.cardConditions=new Map,this.cardHitPoints=new Map,this.hpMarkers=new Map,this.hpOverlayVisible=!1,this.loadingTextures=new Set,this.loadingItemTextures=new Set,this.attachedItems=new Map,this.attachedItemGroups=new Map,this.boardItemCards=new Map,this.handCards=new Map,this.handCardGroups=new Map,this.handCardFaces=new Map,this.handCardContents=new Map,this.handLandings=new Map,this.handHoverKey=null,this.pendingHandPress=null,this.handDrag=null,this.raycaster=new av,this.pointer=new gt,this.boardPlane=new En(new U(0,1,0),0),this.draggingName=null,this.draggingAction=null,this.dragOrigin=null,this.pendingCardPress=null,this.hoveredCardName=null,this.viewPlayer=1,this.viewTransition=null,this.destroyed=!1,this.lastFrameTime=performance.now(),this.elapsedTime=0,this.scene=new j_,this.scene.background=new ne("#000000");const r=Math.max(t.clientWidth,1),a=Math.max(t.clientHeight,1);this.camera=new hn(43,r/a,.1,100),this.camera.position.set(0,Yu,Xu),this.camera.lookAt(0,0,0),this.scene.add(this.camera),this.handFanGroup=new cn,this.camera.add(this.handFanGroup),this.renderer=new rb({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(r,a),this.renderer.outputColorSpace=Re,this.renderer.domElement.className="board-canvas",this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.style.touchAction="none",this.container.prepend(this.renderer.domElement),this.controls=new ob(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.075,this.controls.zoomToCursor=!0,this.controls.screenSpacePanning=!0,this.controls.minDistance=3,this.controls.maxDistance=60,this.controls.minPolarAngle=.08,this.controls.maxPolarAngle=Math.PI*.485,this.controls.rotateSpeed=.62,this.controls.panSpeed=.9,this.controls.zoomSpeed=1.1,this.controls.mouseButtons.LEFT=Yn.PAN,this.controls.mouseButtons.MIDDLE=Yn.PAN,this.controls.mouseButtons.RIGHT=-1,this.makeBoard(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.canvas=this.renderer.domElement,this.onPointerDown=this.handlePointerDown.bind(this),this.onPointerMove=this.handlePointerMove.bind(this),this.onPointerUp=this.handlePointerUp.bind(this),this.onPointerCancel=this.handlePointerCancel.bind(this),this.onPointerLeave=this.handlePointerLeave.bind(this),this.onWheel=()=>this.reportStatus("Wheel zooms toward the pointer. Middle drag pans; Ctrl or Shift + middle-drag orbits."),this.onContextMenu=o=>o.preventDefault(),this.canvas.addEventListener("pointerdown",this.onPointerDown,!0),this.canvas.addEventListener("pointermove",this.onPointerMove,!0),this.canvas.addEventListener("pointerup",this.onPointerUp,!0),this.canvas.addEventListener("pointercancel",this.onPointerCancel,!0),this.canvas.addEventListener("pointerleave",this.onPointerLeave),this.canvas.addEventListener("wheel",this.onWheel,{passive:!0}),this.canvas.addEventListener("contextmenu",this.onContextMenu),this.renderFrame=this.render.bind(this),this.animationFrame=requestAnimationFrame(this.renderFrame)}makeBoard(){this.tabletopTexture=new Ys().load(Sb),this.tabletopTexture.colorSpace=Re,this.tabletopTexture.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8);const t=new Ss({map:this.tabletopTexture,vertexColors:!0,transparent:!1,depthWrite:!0,roughness:.94,metalness:0});this.tableMesh=new xe(Nb(),t),this.tableMesh.rotation.x=-Math.PI/2,this.tableMesh.position.y=-Jo-.001,this.tableMesh.receiveShadow=!0,this.scene.add(this.tableMesh),this.boardGridTexture=new Ys().load(Mb),this.boardGridTexture.colorSpace=Re,this.boardGridTexture.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8);const e=new Ss({color:"#ffffff",map:this.boardGridTexture,roughness:.88,metalness:0}),i=new Ss({color:"#a0a5a2",roughness:.9,metalness:0}),s=new Ss({color:"#777c79",roughness:.92,metalness:0});this.boardMesh=new xe(new Bs(bn,Jo,bn),[i,i,e,s,i,i]),this.boardMesh.position.y=-Jo/2,this.boardMesh.receiveShadow=!0,this.scene.add(this.boardMesh),this.scene.add(new tv("#ffffff","#b9bcb9",1));const r=new iv("#ffffff",80,0,2);r.position.set(-6,7,2.5),this.scene.add(r)}resize(){if(this.destroyed)return;const t=Math.max(this.container.clientWidth,1),e=Math.max(this.container.clientHeight,1);this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.layoutHandFan()}render(){if(this.destroyed)return;this.animationFrame=requestAnimationFrame(this.renderFrame);const t=performance.now(),e=Math.min((t-this.lastFrameTime)/1e3,.05);this.lastFrameTime=t,this.elapsedTime+=e,this.animateViewTransition(e),this.animateCardFlips(e),this.animateCardMotion(e),this.animateRestingCards(e),this.animateHandCards(e),this.animateHandDrag(e),this.updateCardShadows(),this.updateHpMarkers(),this.controls.update(),this.renderer.render(this.scene,this.camera)}animateViewTransition(t){const e=this.viewTransition;if(!e)return;e.elapsed=Math.min(e.duration,e.elapsed+t);const i=e.elapsed/e.duration,s=i*i*(3-2*i),r=e.fromTarget.clone().lerp(e.toTarget,s),a=e.startAngle+e.angleDelta*s,o=be.lerp(e.startRadius,e.endRadius,s),l=be.lerp(e.startHeight,e.endHeight,s);this.controls.target.copy(r),this.camera.position.set(r.x+Math.sin(a)*o,r.y+l,r.z+Math.cos(a)*o),this.camera.lookAt(r),i>=1&&(this.controls.target.copy(e.toTarget),this.viewTransition=null,this.controls.enabled=!0,this.controls.update())}beginViewTransition(t,{duration:e=1.15,radius:i=null,height:s=null}={}){const r=this.controls.target.clone(),a=this.camera.position.clone().sub(r),o=Math.atan2(a.x,a.z);let l=((t-o+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;Math.abs(l+Math.PI)<1e-4&&(l=Math.PI),this.controls.enabled=!1,this.viewTransition={elapsed:0,duration:e,fromTarget:r,toTarget:new U(0,0,0),startAngle:o,angleDelta:l,startRadius:Math.hypot(a.x,a.z),endRadius:i??Math.hypot(a.x,a.z),startHeight:a.y,endHeight:s??a.y}}transitionPlayer(t){this.setPlayerView(t)}setPlayerView(t){this.viewPlayer=t,this.beginViewTransition(0+(t===2?Math.PI:0),{radius:Xu,height:Yu})}animateCardMotion(t){const e=1-Math.exp(-t*22),i=1-Math.exp(-t*9);for(const[s,r]of this.motionStates){const a=this.cardObjects.get(s);if(!a){this.motionStates.delete(s);continue}const o=be.clamp(.35+r.grabOffset.length()/Ge,.35,1.5);if(r.active){const l=be.clamp(r.velocity.z*.032*o,-.34,.34),c=be.clamp(-r.velocity.x*.032*o,-.34,.34),h=r.grabOffset.clone().applyQuaternion(a.quaternion),d=be.clamp((h.z*r.velocity.x-h.x*r.velocity.z)*.08,-.27,.27);a.rotation.x+=(l-a.rotation.x)*i;const u=this.cardRestYaw(s);a.rotation.y+=(u+d-a.rotation.y)*i,a.rotation.z+=(c-a.rotation.z)*i,r.targetPosition.copy(r.pointerPoint).sub(h),r.velocity.multiplyScalar(Math.exp(-t*.65))}else{a.rotation.x+=-a.rotation.x*i;const l=this.cardRestYaw(s);a.rotation.y+=(l-a.rotation.y)*i,a.rotation.z+=-a.rotation.z*i,r.velocity.multiplyScalar(Math.exp(-t*5.5))}a.position.lerp(r.targetPosition,e),!r.active&&a.position.distanceToSquared(r.targetPosition)<4e-4&&r.velocity.lengthSq()<.001&&Math.abs(a.rotation.x)+Math.abs(a.rotation.y-this.cardRestYaw(s))+Math.abs(a.rotation.z)<.003&&(a.position.copy(r.targetPosition),a.rotation.set(0,this.cardRestYaw(s),0),this.motionStates.delete(s))}}animateRestingCards(t){for(const[e,i]of this.cardObjects){if(this.motionStates.has(e))continue;const s=i.userData.swayPhase??0,r=this.elapsedTime*.8+s,a=this.hoverTargets.get(e),o=1-Math.exp(-t*(a?6:1.8)),l=1-Math.exp(-t*(a?8:2.1)),c=Qo+Math.sin(r)*Cb+(a?Rb:0),h=a?a.tiltX:Math.sin(r)*jo,d=this.cardRestYaw(e),u=a?d:d+Math.sin(r*.63+s)*jo*.55,f=a?a.tiltZ:Math.cos(r*.82+s)*jo;i.position.y+=(c-i.position.y)*o,i.rotation.x+=(h-i.rotation.x)*l,i.rotation.y+=(u-i.rotation.y)*l,i.rotation.z+=(f-i.rotation.z)*l}}cardRestYaw(t){const e=this.cardObjects.get(t);return((e==null?void 0:e.userData.facingYaw)??0)+((e==null?void 0:e.userData.statusYaw)??0)}animateCardFlips(t){for(const[e,i]of this.flipAnimations){const s=this.cardFlipGroups.get(e);if(!s){this.flipAnimations.delete(e);continue}i.progress=Math.min(1,i.progress+t*3.4);const r=i.progress*i.progress*(3-2*i.progress),a=be.lerp(i.startAngle,i.targetAngle,r);s.rotation.z=a,s.position.y=Math.sin(a)*Ge/2;const o=i.startFace==="front"?a>=Math.PI/2:a<=Math.PI/2;!i.switched&&o&&(i.switched=!0,this.setCardFaceNow(e,i.target)),i.progress>=1&&(s.rotation.z=i.targetAngle,s.position.y=0,this.cardFaces.get(e)!==i.target&&this.setCardFaceNow(e,i.target),this.flipAnimations.delete(e))}}updateCardShadows(){var t;for(const[e,i]of this.cardObjects){const s=this.cardShadows.get(e);if(!s)continue;s.position.copy(i.position),s.quaternion.copy(i.quaternion);const r=s.children[0];if(!r)continue;const a=((t=this.cardFlipGroups.get(e))==null?void 0:t.rotation.z)??0;r.scale.x=Math.max(.06,Math.abs(Math.cos(a)));const o=r==null?void 0:r.material;if(!(o!=null&&o.uniforms))continue;const l=be.clamp(i.position.y/da,0,1);o.uniforms.uOpacity.value=be.lerp(tp,Db,l),o.uniforms.uSoftness.value=be.lerp(ep,Lb,l)}}pointerRay(t,e){const i=this.canvas.getBoundingClientRect();this.pointer.set((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera)}pointOnHeight(t,e,i=0){this.pointerRay(t,e);const s=new U,r=i===0?this.boardPlane:new En(new U(0,1,0),-i);return this.raycaster.ray.intersectPlane(r,s)?s:null}pointOnBoard(t,e){return this.pointOnHeight(t,e)}pointAboveBoard(t,e,i=da){const s=this.pointOnBoard(t,e);return s&&(s.y=i),s}cellFromPoint(t){if(!t||t.x<-Hn||t.x>Hn||t.z<-Hn||t.z>Hn)return null;const e=Math.min(bn-1,Math.floor(t.x+Hn)),i=Math.min(bn-1,Math.floor(t.z+Hn));return{row:i,column:e,index:i*bn+e}}cellPosition(t){const e=Math.floor(t/bn),i=t%bn;return new U(i-Hn+.5,Qo,e-Hn+.5)}occupiedBy(t,e=null){var i;return(i=Object.entries(this.placements).find(([s,r])=>{var a,o;return s!==e&&r===t&&!((o=(a=this.callbacks).isCardKO)!=null&&o.call(a,s))}))==null?void 0:i[0]}pickCard(t,e){this.pointerRay(t,e);const i=[...this.cardMeshes.values()];return this.raycaster.intersectObjects(i,!1)[0]??null}makeBackTexture(t){if(this.backTextures.has(t))return this.backTextures.get(t);const e=document.createElement("canvas");e.width=600,e.height=900;const i=e.getContext("2d");i.fillStyle="#f2efe7",i.fillRect(0,0,600,900),i.strokeStyle="#aaa394",i.lineWidth=8,i.strokeRect(18,18,564,864),i.fillStyle="#393831",i.font="700 35px Arial, sans-serif",i.textAlign="center",i.fillText("WORKING TITLE",300,465);const s=new nu(e);return s.colorSpace=Re,s.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8),this.backHitAreas.set(t,[]),this.backTextures.set(t,s),s}actionAtHit(t,e){var r;if(!(e!=null&&e.uv)||this.cardFaces.get(t)!=="back")return null;const i=e.uv.x*600,s=(1-e.uv.y)*900;return((r=this.backHitAreas.get(t))==null?void 0:r.find(a=>i>=a.x0&&i<=a.x1&&s>=a.y0&&s<=a.y1))??null}flipCard(t,e=null){var l;if(!this.cardObjects.has(t))return;const i=((l=this.flipAnimations.get(t))==null?void 0:l.target)??this.cardFaces.get(t),s=e??(i==="back"?"front":"back"),r=this.cardFlipGroups.get(t);if(!r)return;const a=s==="back"?Math.PI:0,o=this.cardFaces.get(t);s===o&&Math.abs(r.rotation.z-a)<.001||this.flipAnimations.set(t,{target:s,targetAngle:a,startAngle:r.rotation.z,startFace:o,progress:0,switched:o===s})}setCardFaceNow(t,e){var s,r;const i=this.cardFaceMeshes.get(t);i&&(this.cardFaces.set(t,e),i.front.visible=e==="front",i.back.visible=e==="back",this.cardMeshes.set(t,e==="front"?i.front:i.back),this.updateCardActivationOverlay(t),(r=(s=this.callbacks).onFaceChange)==null||r.call(s,t,e))}setCardDeactivated(t,e){const i=this.cardObjects.get(t);i&&(i.userData.deactivated=!!e,this.updateCardActivationOverlay(t))}updateCardActivationOverlay(t){var r;const e=this.cardActivationOverlays.get(t);if(!e)return;const i=!!((r=this.cardObjects.get(t))!=null&&r.userData.deactivated),s=this.cardFaces.get(t)??"front";e.front.visible=i&&s==="front",e.back.visible=i&&s==="back"}setActionCue(t,e=!1){if(!t){this.actionCue&&(this.actionCue.visible=!1);return}const i=this.placements[t];if(i===void 0)return;this.actionCue||(this.actionCue=new xe(new Ua(.39,.46,48),new yn({color:"#64e5a2",side:Ve,transparent:!0,opacity:.95,depthTest:!1})),this.actionCue.rotation.x=-Math.PI/2,this.actionCue.position.y=.018,this.actionCue.renderOrder=8,this.scene.add(this.actionCue));const s=this.cellPosition(i);this.actionCue.position.x=s.x,this.actionCue.position.z=s.z,this.actionCue.material.color.set(e?"#64e5a2":"#ff786b"),this.actionCue.visible=!0}setActionCellCue(t,e=!1){if(t==null){this.actionCue&&(this.actionCue.visible=!1);return}this.actionCue||(this.actionCue=new xe(new Ua(.39,.46,48),new yn({color:"#64e5a2",side:Ve,transparent:!0,opacity:.95,depthTest:!1})),this.actionCue.rotation.x=-Math.PI/2,this.actionCue.position.y=.018,this.actionCue.renderOrder=8,this.scene.add(this.actionCue));const i=this.cellPosition(t);this.actionCue.position.x=i.x,this.actionCue.position.z=i.z,this.actionCue.material.color.set(e?"#64e5a2":"#ff786b"),this.actionCue.visible=!0}setCardKnockedOut(t,e){const i=this.cardObjects.get(t);if(!i)return;const s=this.cardOwners.get(t)??1;if(i.userData.knockedOut=e,e)this.flipCard(t,"back");else{const r=this.placements[t];r!==void 0&&this.animateCardToPosition(t,this.cellPosition(r))}this.refreshHpMarker(t),this.repositionKnockedOutCards(s)}setCardHp(t,e,i){this.cardHitPoints.set(t,{current:e,max:i}),this.refreshHpMarker(t)}setAttachedItem(t,e){if(!e){const i=this.cardObjects.get(t),s=this.attachedItemGroups.get(t);i&&s&&(i.remove(s),Bn(s)),this.attachedItems.delete(t),this.attachedItemGroups.delete(t);return}this.attachedItems.set(t,e),this.addAttachedItemMesh(t,e)}placeItemCard(t,e,i){const s=e.name;this.cards.set(s,{...e,name:s,displayName:e.displayName??s,entryType:"item"}),this.boardItemCards.set(s,{item:e,instanceId:t}),this.placements[s]=i,this.setCardConditions(s,{guard:!1,pinned:!1}),this.addCardMesh(s,i),this.notifyChange()}removeBoardItemCard(t){const e=[...this.boardItemCards].find(([,s])=>s.instanceId===t);if(!e)return;const[i]=e;this.boardItemCards.delete(i),this.removeCard(i)}isBoardItemCard(t){return this.boardItemCards.has(t)}handEntryKey(t){return t.entryType==="item"?`item:${t.instanceId??t.id}`:`character:${t.name}`}setHandCards(t){const e=new Map(t.map(i=>[this.handEntryKey(i),{...i}]));for(const i of this.handCards.keys())e.has(i)||this.removeHandCardMesh(i);this.handCards=e;for(const[i,s]of this.handCards)s.entryType==="item"?this.loadItemTexture(s):this.loadHandCharacterTexture(s),this.addHandCardMesh(i);this.layoutHandFan()}loadHandCharacterTexture(t){const e=t.name;return this.textures.has(e)||this.loadingTextures.has(e)?this.textures.get(e)??null:(this.loadingTextures.add(e),new Ys().load(t.src,i=>{if(this.loadingTextures.delete(e),this.destroyed){i.dispose();return}i.colorSpace=Re,i.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8),this.textures.set(e,i);const s=`character:${e}`;this.handCards.has(s)&&this.addHandCardMesh(s),Object.hasOwn(this.placements,e)&&this.addCardMesh(e,this.placements[e])},void 0,()=>{this.loadingTextures.delete(e),this.reportStatus(`Could not load the card art for ${e}.`)}),null)}addHandCardMesh(t){const e=this.handCards.get(t);if(!e||this.handCardGroups.has(t))return;const i=e.entryType==="item"?this.itemTextures.get(e.id)??this.loadItemTexture(e):this.textures.get(e.name)??this.loadHandCharacterTexture(e);if(!i)return;const s=new cn,r=new cn;r.position.y=Je/2,s.add(r);const a=new dr(ya(),{depth:sn,bevelEnabled:!1,curveSegments:8});a.translate(0,0,-sn/2);const o=new xe(a,new yn({color:"#e8e3d8",side:Ve,depthTest:!0,depthWrite:!0}));o.renderOrder=1e3,r.add(o);const l=Zs();l.translate(0,0,sn/2+15e-5);const c=new xe(l,new yn({map:i,side:Ve,depthTest:!0,depthWrite:!0}));c.userData.handCardKey=t,c.renderOrder=1001,r.add(c),s.userData.handCardKey=t,s.userData.hoverLift=0,this.handFanGroup.add(s),this.handCardGroups.set(t,s),this.handCardFaces.set(t,c),this.handCardContents.set(t,r),this.layoutHandFan()}removeHandCardMesh(t){var s,r;const e=this.handCardGroups.get(t),i=this.handLandings.get(t)??(((s=this.handDrag)==null?void 0:s.key)===t?this.handDrag:null);i!=null&&i.shadowRoot&&(this.scene.remove(i.shadowRoot),Bn(i.shadowRoot)),e&&(e.removeFromParent(),Bn(e)),this.handCardGroups.delete(t),this.handCardFaces.delete(t),this.handCardContents.delete(t),this.handLandings.delete(t),this.handHoverKey===t&&(this.handHoverKey=null),((r=this.handDrag)==null?void 0:r.key)===t&&(this.handDrag=null)}layoutHandFan(){var _,M;if(!this.camera||!this.handFanGroup)return;const t=this.handCards.size;if(!t)return;const e=3.4,i=2*e*Math.tan(be.degToRad(this.camera.fov/2)),s=i*this.camera.aspect,r=i*.19,a=.48,o=s*.9/(1+Math.max(t-1,0)*a),l=Math.min(r/Je,o/Ge),h=Ge*l*a,d=(t-1)/2,u=-i/2+i*.045;let f=0;for(const m of this.handCards.keys()){const p=this.handCardGroups.get(m);if(!p){f+=1;continue}if(p.parent!==this.handFanGroup||((_=this.handDrag)==null?void 0:_.key)===m||this.handLandings.has(m)){f+=1;continue}const E=f-d,P=d?E/d:0,x=Math.max(0,t-Math.round(Math.abs(E))),T=-P*.32,w=new U(E*h,u,-e+x*.0015);p.userData.basePosition=w,p.userData.baseRotation=T,p.userData.baseScale=l,p.userData.baseRenderOrder=1e3+x*2,p.position.copy(w),p.rotation.set(0,0,T),p.scale.setScalar(l);const I=this.handCardFaces.get(m),v=p.userData.baseRenderOrder;I&&(I.renderOrder=v+1);const b=(M=p.children[0])==null?void 0:M.children[0];b&&(b.renderOrder=v),f+=1}}animateHandCards(t){var e,i;for(const[s,r]of this.handCardGroups){if(r.parent!==this.handFanGroup||((e=this.handDrag)==null?void 0:e.key)===s||this.handLandings.has(s))continue;const a=this.handHoverKey===s,o=a?.12:0,l=1-Math.exp(-t*18);r.userData.hoverLift=be.lerp(r.userData.hoverLift||0,o,l);const c=r.userData.basePosition;c&&(r.position.x=c.x,r.position.y=c.y+r.userData.hoverLift,r.position.z=c.z+(a?.035:0));const d=(r.userData.baseScale||1)*(a?1.055:1);r.scale.setScalar(be.lerp(r.scale.x,d,l));const u=this.handCardFaces.get(s),f=r.userData.baseRenderOrder||1e3;u&&(u.renderOrder=a?12e3:f+1);const _=(i=r.children[0])==null?void 0:i.children[0];_&&(_.renderOrder=a?11999:f)}}pickHandCard(t,e){if(!this.handCardFaces.size)return null;this.camera.updateMatrixWorld(!0),this.pointerRay(t,e);const i=[...this.handCardFaces.values()];return this.raycaster.intersectObjects(i,!1).find(r=>{var o;const a=r.object.userData.handCardKey;return this.handCards.has(a)&&((o=this.handCardGroups.get(a))==null?void 0:o.parent)===this.handFanGroup})??null}positionHandDragAtPointer(t,e){var m,p;const i=this.handCardGroups.get(e.key);if(!i)return;const s=this.canvas.getBoundingClientRect(),r=this.cellFromPoint(this.pointOnBoard(t.clientX,t.clientY)),a=((p=(m=this.callbacks).isInHandZone)==null?void 0:p.call(m,t.clientX,t.clientY))??!1;e.deployMode=!a;const o=r&&e.deployMode?"board":"fan";(e.mode!==o||i.parent!==(o==="board"?this.scene:this.handFanGroup))&&(i.updateMatrixWorld(!0),o==="board"?(this.scene.attach(i),this.createHandDragShadow(e)):(this.handFanGroup.attach(i),this.removeHandDragShadow(e)),e.mode=o,this.setHandCardRenderOrder(e.key,o),this.reportStatus(o==="board"?"Deploying card. Release over a board square to place it.":"Card is back in the hand fan. Move it over the board to deploy.")),e.targetCell=o==="board"?r:null,e.pointerX=t.clientX,e.pointerY=t.clientY;const l=this.handCardContents.get(e.key),c=0;if(e.ownerYaw=0,o==="board"){const E=this.pointOnHeight(t.clientX,t.clientY,da);if(!E||!l)return;e.targetQuaternion=new gn().setFromEuler(new dn(-Math.PI/2,c,0)),e.targetContentPosition=new U(0,0,0),e.targetScale=1;const P=e.cardGrabOffset.clone().add(e.targetContentPosition).multiplyScalar(e.targetScale).applyQuaternion(e.targetQuaternion);e.targetPosition=E.sub(P),this.updateHandDragShadow(e);return}const h=(t.clientX-s.left)/s.width*2-1,d=-((t.clientY-s.top)/s.height)*2+1,u=e.depth,f=2*u*Math.tan(be.degToRad(this.camera.fov/2)),_=new U(h*f*this.camera.aspect/2,d*f/2,-u);e.targetQuaternion=new gn().setFromEuler(new dn(0,0,i.userData.baseRotation||0)),e.targetContentPosition=new U(0,Je/2,0),e.targetScale=i.userData.baseScale||e.scale||1;const M=e.cardGrabOffset.clone().add(e.targetContentPosition).multiplyScalar(e.targetScale).applyQuaternion(e.targetQuaternion);e.targetPosition=_.sub(M),e.targetPosition.z+=.08}setHandCardRenderOrder(t,e){var r,a,o,l;const i=this.handCardFaces.get(t),s=(a=(r=this.handCardGroups.get(t))==null?void 0:r.children[0])==null?void 0:a.children[0];if(!(!i||!s))if(e==="board")s.renderOrder=1,i.renderOrder=3;else{const c=((o=this.handCardGroups.get(t))==null?void 0:o.userData.baseRenderOrder)||1e3,h=((l=this.handDrag)==null?void 0:l.key)===t||this.handLandings.has(t);s.renderOrder=h?13999:c,i.renderOrder=h?14e3:c+1}}createHandDragShadow(t){if(t.shadowRoot)return;const e=new cn;e.userData.handDragKey=t.key;const i=new xe(new Fi(Ge+fa*2,Je+fa*2),Ju());i.rotation.x=-Math.PI/2,e.add(i),this.scene.add(e),t.shadowRoot=e,this.updateHandDragShadow(t)}updateHandDragShadow(t){const e=t.shadowRoot,i=this.handCardGroups.get(t.key);!e||!i||t.mode!=="board"||(e.position.set(i.position.x,0,i.position.z),e.rotation.set(0,t.ownerYaw||0,0),e.scale.setScalar(i.scale.x))}removeHandDragShadow(t){t!=null&&t.shadowRoot&&(this.scene.remove(t.shadowRoot),Bn(t.shadowRoot),t.shadowRoot=null)}beginHandLanding(t,e,i="commit"){const s=this.handCardGroups.get(t.key);s&&(s.parent!==this.scene&&this.scene.attach(s),t.mode="board",t.landingAction=i,t.landingCell=e,t.elapsed=0,t.duration=.22,t.targetCell=e,t.targetPosition=this.cellPosition(e.index),t.targetQuaternion=new gn().setFromEuler(new dn(-Math.PI/2,t.ownerYaw||0,0)),t.targetContentPosition=new U(0,0,0),t.targetScale=1,this.setHandCardRenderOrder(t.key,"board"),this.createHandDragShadow(t),this.handLandings.set(t.key,t))}returnHandCardToFan(t){var i;const e=this.handCardGroups.get(t.key);e&&(e.parent!==this.handFanGroup&&this.handFanGroup.attach(e),this.removeHandDragShadow(t),t.mode="fan",t.landingAction="return",t.elapsed=0,t.duration=.2,t.targetPosition=((i=e.userData.basePosition)==null?void 0:i.clone())??new U,t.targetQuaternion=new gn().setFromEuler(new dn(0,0,e.userData.baseRotation||0)),t.targetContentPosition=new U(0,Je/2,0),t.targetScale=e.userData.baseScale||1,this.handLandings.set(t.key,t),this.setHandCardRenderOrder(t.key,"fan"))}animateHandDrag(t){const e=(i,s=!1)=>{const r=this.handCardGroups.get(i.key),a=this.handCardContents.get(i.key);if(!r||!a||!i.targetPosition||!i.targetQuaternion)return!1;const o=1-Math.exp(-t*(s?20:24));if(r.quaternion.slerp(i.targetQuaternion,o),r.scale.setScalar(be.lerp(r.scale.x,i.targetScale,o)),a.position.lerp(i.targetContentPosition,o),!s&&Number.isFinite(i.pointerX)&&Number.isFinite(i.pointerY)){let l;if(i.mode==="board")l=this.pointOnHeight(i.pointerX,i.pointerY,da);else{const c=this.canvas.getBoundingClientRect(),h=(i.pointerX-c.left)/c.width*2-1,d=-((i.pointerY-c.top)/c.height)*2+1,u=2*i.depth*Math.tan(be.degToRad(this.camera.fov/2));l=new U(h*u*this.camera.aspect/2,d*u/2,-i.depth)}if(l){const c=i.cardGrabOffset.clone().add(a.position).multiplyScalar(r.scale.x).applyQuaternion(r.quaternion);i.targetPosition.copy(l.sub(c)),i.mode==="fan"&&(i.targetPosition.z+=.08)}}return r.position.lerp(i.targetPosition,o),this.updateHandDragShadow(i),!s||(i.elapsed+=t,i.elapsed<i.duration)?!1:(r.position.copy(i.targetPosition),r.quaternion.copy(i.targetQuaternion),r.scale.setScalar(i.targetScale),a.position.copy(i.targetContentPosition),!0)};this.handDrag&&e(this.handDrag);for(const[i,s]of[...this.handLandings]){if(!e(s,!0))continue;if(this.handLandings.delete(i),s.landingAction==="return"){this.setHandCardRenderOrder(i,"fan");continue}this.removeHandDragShadow(s);const r=this.handCards.get(i),a=s.landingCell;((r==null?void 0:r.entryType)==="item"?a&&this.dropItem(r.id,s.releaseX,s.releaseY):r&&a&&this.placeCard(r.name,s.releaseX,s.releaseY))?this.removeHandCardMesh(i):this.returnHandCardToFan(s)}}resetHandCardDrags(){var e;const t=[...this.handLandings.values()];this.handDrag&&t.push(this.handDrag);for(const i of t)this.removeHandDragShadow(i);this.handLandings.clear(),this.handDrag=null,this.pendingHandPress=null,this.handHoverKey=null;for(const[i,s]of this.handCardGroups)s.parent!==this.handFanGroup&&this.handFanGroup.attach(s),s.position.copy(s.userData.basePosition??new U),s.quaternion.setFromEuler(new dn(0,0,s.userData.baseRotation||0)),s.scale.setScalar(s.userData.baseScale||1),(e=this.handCardContents.get(i))==null||e.position.set(0,Je/2,0),this.setHandCardRenderOrder(i,"fan");this.layoutHandFan()}loadItemTexture(t){const e=this.itemTextures.get(t.id);return e||this.loadingItemTextures.has(t.id)?e:(this.loadingItemTextures.add(t.id),new Ys().load(t.src,i=>{if(this.loadingItemTextures.delete(t.id),this.destroyed){i.dispose();return}i.colorSpace=Re,i.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8),this.itemTextures.set(t.id,i);for(const[s,r]of this.handCards)r.entryType==="item"&&r.id===t.id&&this.addHandCardMesh(s);for(const[s,r]of this.attachedItems)r.id===t.id&&this.addAttachedItemMesh(s,r)},void 0,()=>{this.loadingItemTextures.delete(t.id),this.reportStatus(`Could not load the item card for ${t.name}.`)}),null)}makeItemCardGroup(t,e,i=null){const s=new cn;s.userData.attachedItemId=t.id;const r=new Ss({color:"#e5e0d4",roughness:.9}),a=new dr(ya(),{depth:sn,bevelEnabled:!1,curveSegments:8});a.translate(0,0,-sn/2);const o=new xe(a,r);o.rotation.x=-Math.PI/2,i&&(o.userData.cardName=i),s.add(o);const l=Zs();l.translate(0,0,sn/2+15e-5);const c=new xe(l,new yn({map:e}));return c.rotation.x=-Math.PI/2,c.renderOrder=2,i&&(c.userData.cardName=i),s.add(c),s}addAttachedItemMesh(t,e){const i=this.cardObjects.get(t);if(!i||this.attachedItemGroups.has(t))return;const s=this.loadItemTexture(e);if(!s)return;const r=new cn;r.position.set(Eb,Ab,Tb),r.rotation.y=wb;const a=this.makeItemCardGroup(e,s,t);r.add(a),i.add(r),this.attachedItemGroups.set(t,r)}setCardConditions(t,e={}){const i={guard:!!e.guard,pinned:!!e.pinned};this.cardConditions.set(t,i);const s=this.cardObjects.get(t);s&&(s.userData.statusYaw=Zu(i))}setHpOverlayVisible(t){this.hpOverlayVisible=!!t;for(const[e,i]of this.hpMarkers){const s=this.cardObjects.get(e);i.mesh.visible=!!(this.hpOverlayVisible&&s&&!s.userData.knockedOut)}}refreshHpMarker(t){var c;const e=this.cardHitPoints.get(t),i=this.cardObjects.get(t);if(!e||!i)return;let s=this.hpMarkers.get(t);if(!s){const h=document.createElement("canvas");h.width=256,h.height=256;const d=h.getContext("2d"),u=new nu(h);u.colorSpace=Re;const f=new yn({map:u,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,side:Ve}),_=new Fi(Ge*.58,Ge*.58),M=new xe(_,f);M.rotation.x=-Math.PI/2,M.position.y=sn/2+4e-4,M.renderOrder=6,(c=this.cardFlipGroups.get(t))==null||c.add(M),s={canvas:h,context:d,texture:u,mesh:M,geometry:_,material:f},this.hpMarkers.set(t,s)}const{canvas:r,context:a,texture:o,mesh:l}=s;a.clearRect(0,0,r.width,r.height),a.fillStyle="rgba(0, 0, 0, 0.62)",a.beginPath(),a.roundRect(8,8,r.width-16,r.height-16,54),a.fill(),a.strokeStyle="rgba(255, 255, 255, 0.22)",a.lineWidth=4,a.stroke(),a.fillStyle="#ffffff",a.font="800 220px system-ui, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(String(e.current),r.width/2,r.height/2+3),o.needsUpdate=!0,s.mesh.visible=!!(this.hpOverlayVisible&&!i.userData.knockedOut)}updateHpMarkers(){for(const[t,e]of this.hpMarkers){const i=this.cardObjects.get(t);if(!i){e.mesh.visible=!1;continue}const s=this.cardOwners.get(t)??1;e.mesh.rotation.z=s===this.viewPlayer?0:Math.PI,e.mesh.visible=!!(this.hpOverlayVisible&&!i.userData.knockedOut&&Object.hasOwn(this.placements,t))}}disposeHpMarker(t){var i;const e=this.hpMarkers.get(t);e&&((i=e.mesh.parent)==null||i.remove(e.mesh),e.geometry.dispose(),e.texture.dispose(),e.material.dispose(),this.hpMarkers.delete(t))}animateCardToPosition(t,e){if(!this.cardObjects.get(t))return;let s=this.motionStates.get(t);s||(s={active:!1,grabOffset:new U,pointerPoint:new U,lastPointerPoint:new U,lastMoveAt:performance.now(),velocity:new U,targetPosition:e.clone()},this.motionStates.set(t,s)),s.active=!1,s.velocity.set(0,0,0),s.targetPosition.copy(e)}repositionKnockedOutCards(t){const e=[...this.cardObjects.entries()].filter(([r,a])=>a.userData.knockedOut&&(this.cardOwners.get(r)??1)===t).map(([r])=>r),i=Ge+.1,s=(t===2?-1:1)*(Hn+Je/2+.12);e.forEach((r,a)=>{const o=(a-(e.length-1)/2)*i;this.animateCardToPosition(r,new U(o,Qo,s))})}setCardFacing(t,e){this.cardOwners.set(t,e);const i=this.cardObjects.get(t);i&&(i.userData.facingYaw=e===2?Math.PI:0,i.rotation.y=this.cardRestYaw(t))}moveCardTo(t,e){if(!this.cardObjects.has(t))return;this.placements[t]=e;const i=this.cellPosition(e);this.cardObjects.get(t);const s=this.motionStates.get(t);s?s.targetPosition.copy(i):this.motionStates.set(t,{active:!1,grabOffset:new U,pointerPoint:new U,lastPointerPoint:new U,lastMoveAt:performance.now(),velocity:new U,targetPosition:i});const r=this.cardShadows.get(t);r&&r.position.copy(i),this.notifyChange()}boardCellAtPointer(t,e){return this.cellFromPoint(this.pointOnBoard(t,e))}cardCenterForPointer(t,e){const i=this.motionStates.get(t),s=this.cardObjects.get(t);if(!i||!s)return e;const r=i.grabOffset.clone().applyQuaternion(s.quaternion);return e.clone().sub(r)}beginCardDrag(t,e,i){var a,o;const s=this.cardObjects.get(t),r=this.pointAboveBoard(i.clientX,i.clientY);return!s||!r?(this.controls.enabled=!0,this.canvas.style.cursor="",!1):(this.hoverTargets.delete(t),this.hoveredCardName===t&&(this.hoveredCardName=null),this.draggingName=t,this.dragOrigin=this.placements[t],(o=(a=this.callbacks).onCardSelect)==null||o.call(a,t),this.motionStates.set(t,{active:!0,grabOffset:e,pointerPoint:r,lastPointerPoint:r.clone(),lastMoveAt:performance.now(),velocity:new U,targetPosition:s.position.clone()}),this.canvas.style.cursor="grabbing",this.reportStatus(`Moving ${t}. Its shadow shows the vertical projection onto the board.`),!0)}handlePointerDown(t){var c,h,d;if(this.viewTransition)return;if(t.button===1){const u=t.ctrlKey||t.shiftKey;this.controls.mouseButtons.MIDDLE=Yn.PAN,this.reportStatus(u?"Orbiting the board view.":"Panning the board view.");return}if(t.button===2||t.button!==0)return;if(this.controls.mouseButtons.LEFT=t.shiftKey?Yn.ROTATE:-1,t.shiftKey){this.reportStatus("Orbiting the board view.");return}const e=this.pickHandCard(t.clientX,t.clientY);if(e){const u=e.object.userData.handCardKey,f=this.handCardGroups.get(u);if(!f)return;t.preventDefault(),t.stopPropagation(),this.controls.enabled=!1,f.updateMatrixWorld(!0);const _=f.worldToLocal(e.point.clone());this.pendingHandPress={key:u,pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,grabOffset:_},this.handHoverKey=u,this.canvas.setPointerCapture(t.pointerId),this.canvas.style.cursor="grab";return}const i=this.pickCard(t.clientX,t.clientY);if(!i){t.preventDefault(),t.stopPropagation();return}const s=i.object.userData.cardName;if((c=this.cardObjects.get(s))!=null&&c.userData.knockedOut){t.preventDefault(),t.stopPropagation();return}const r=this.actionAtHit(s,i);t.preventDefault(),t.stopPropagation(),this.controls.enabled=!1;const a=i.object.userData.cardName,o=this.cardObjects.get(a);if(!o){this.controls.enabled=!0;return}this.hoverTargets.delete(a),this.hoveredCardName===a&&(this.hoveredCardName=null),(d=(h=this.callbacks).onCardHover)==null||d.call(h,null),o.updateMatrixWorld(!0);const l=o.worldToLocal(i.point.clone());this.pendingCardPress={kind:r?"action":"card",name:a,action:(r==null?void 0:r.action)??null,pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,grabOffset:l},this.canvas.setPointerCapture(t.pointerId),this.canvas.style.cursor=r?"pointer":"grab"}handlePointerMove(t){var o,l,c,h,d,u,f,_,M,m,p,E,P,x,T,w,I,v;if(((o=this.pendingHandPress)==null?void 0:o.pointerId)===t.pointerId){const b=this.pendingHandPress;if(Math.hypot(t.clientX-b.startX,t.clientY-b.startY)<6)return;this.pendingHandPress=null;const R=this.handCardGroups.get(b.key);if(!R){this.controls.enabled=!0;return}this.handDrag={key:b.key,pointerId:t.pointerId,cardGrabOffset:b.grabOffset.clone().sub(((l=this.handCardContents.get(b.key))==null?void 0:l.position)??new U),depth:Math.max(.5,-R.position.z),scale:R.scale.x,mode:"fan"};const D=this.handCardFaces.get(b.key);D&&(D.renderOrder=14e3);const V=(c=R.children[0])==null?void 0:c.children[0];V&&(V.renderOrder=13999),this.canvas.style.cursor="grabbing",this.positionHandDragAtPointer(t,this.handDrag)}if(((h=this.handDrag)==null?void 0:h.pointerId)===t.pointerId){this.positionHandDragAtPointer(t,this.handDrag),this.canvas.style.cursor="grabbing";return}if(((d=this.pendingCardPress)==null?void 0:d.pointerId)===t.pointerId){const b=this.pendingCardPress;if(Math.hypot(t.clientX-b.startX,t.clientY-b.startY)<6)return;this.pendingCardPress=null,b.kind==="action"?(this.draggingAction={name:b.name,action:b.action,startX:b.startX,startY:b.startY},this.canvas.style.cursor="crosshair",(f=(u=this.callbacks).onActionDragStart)==null||f.call(u,b.name,b.action,b.startX,b.startY)):this.beginCardDrag(b.name,b.grabOffset,t)}if(this.draggingAction){const b=this.pickCard(t.clientX,t.clientY),R=(b==null?void 0:b.object.userData.cardName)??null,D=this.boardCellAtPointer(t.clientX,t.clientY);this.canvas.style.cursor="crosshair",(M=(_=this.callbacks).onActionDragMove)==null||M.call(_,this.draggingAction.name,this.draggingAction.action,R,(D==null?void 0:D.index)??null,t.clientX,t.clientY);return}if(this.draggingName){const b=this.pointAboveBoard(t.clientX,t.clientY),R=this.motionStates.get(this.draggingName);if(!b||!R)return;const D=performance.now(),V=Math.max((D-R.lastMoveAt)/1e3,.008),Y=b.clone().sub(R.lastPointerPoint).multiplyScalar(1/V);Y.length()>16&&Y.setLength(16),R.velocity.lerp(Y,.48),R.lastPointerPoint.copy(b),R.pointerPoint.copy(b),R.lastMoveAt=D;return}const e=this.pickHandCard(t.clientX,t.clientY);if(e){this.handHoverKey=e.object.userData.handCardKey,this.canvas.style.cursor="grab",(p=(m=this.callbacks).onActionHover)==null||p.call(m,null,null,t.clientX,t.clientY),(P=(E=this.callbacks).onCardHover)==null||P.call(E,null),this.updateCardHover(null);return}this.handHoverKey=null;const i=this.pickCard(t.clientX,t.clientY),s=i==null?void 0:i.object.userData.cardName,r=s&&((x=this.cardObjects.get(s))==null?void 0:x.userData.knockedOut),a=s&&!r?this.actionAtHit(s,i):null;this.canvas.style.cursor=a?"pointer":i&&!r?"grab":"",a?(w=(T=this.callbacks).onActionHover)==null||w.call(T,s,a.action,t.clientX,t.clientY):(v=(I=this.callbacks).onActionHover)==null||v.call(I,null,null,t.clientX,t.clientY),this.reportCardHover(s&&!r?s:null),this.updateCardHover(i)}reportCardHover(t){var o,l,c,h;const e=t?this.cardObjects.get(t):null;if(!e){(l=(o=this.callbacks).onCardHover)==null||l.call(o,null);return}e.updateMatrixWorld(!0);const i=e.getWorldPosition(new U);i.project(this.camera);const s=this.canvas.getBoundingClientRect(),r=(i.x*.5+.5)*s.width,a=(-i.y*.5+.5)*s.height;(h=(c=this.callbacks).onCardHover)==null||h.call(c,t,r,a)}updateCardHover(t){const e=(t==null?void 0:t.object.userData.cardName)??null;if(this.hoveredCardName&&this.hoveredCardName!==e&&this.hoverTargets.delete(this.hoveredCardName),this.hoveredCardName=e,!e||this.motionStates.has(e)){e&&this.hoverTargets.delete(e);return}const i=this.cardObjects.get(e);if(!i)return;i.updateMatrixWorld(!0);const s=i.worldToLocal(t.point.clone());this.hoverTargets.set(e,{tiltX:-be.clamp(s.y/(Je/2),-1,1)*$u,tiltZ:-be.clamp(s.x/(Ge/2),-1,1)*$u})}handlePointerLeave(t){var e,i;t!=null&&t.relatedTarget&&this.container.contains(t.relatedTarget)||this.draggingName||this.handDrag||this.pendingHandPress||(this.handHoverKey=null,this.hoveredCardName&&this.hoverTargets.delete(this.hoveredCardName),this.hoveredCardName=null,(i=(e=this.callbacks).onCardHover)==null||i.call(e,null),this.canvas.style.cursor="")}handlePointerUp(t){var M,m,p,E,P,x,T,w,I,v,b,R,D,V,Y,H,X,j,q,at,nt,ct,lt,wt,Dt,te,Yt,qt,it;if(t.button===0&&(this.controls.mouseButtons.LEFT=-1),t.button===2||t.button===1||t.button!==0)return;if(this.draggingAction){const tt=this.draggingAction,vt=this.pickCard(t.clientX,t.clientY),Ht=(vt==null?void 0:vt.object.userData.cardName)??null,Ct=this.boardCellAtPointer(t.clientX,t.clientY);this.draggingAction=null,this.controls.enabled=!0,this.canvas.style.cursor="",(m=(M=this.callbacks).onActionDrop)==null||m.call(M,tt.name,tt.action,Ht,(Ct==null?void 0:Ct.index)??null),(E=(p=this.callbacks).onActionHover)==null||E.call(p,null,null,t.clientX,t.clientY);return}if(this.handDrag){if(this.handDrag.pointerId!==t.pointerId)return;const tt=this.handDrag;this.positionHandDragAtPointer(t,tt);const vt=this.handCards.get(tt.key);if(this.handDrag=null,this.controls.enabled=!0,this.canvas.style.cursor="",vt&&tt.mode==="board"&&tt.targetCell){if(tt.releaseX=t.clientX,tt.releaseY=t.clientY,vt.entryType!=="item"){if(this.occupiedBy(tt.targetCell.index)){this.reportStatus("That square is occupied."),this.returnHandCardToFan(tt);return}if(((x=(P=this.callbacks).canDeployCard)==null?void 0:x.call(P,vt.name,tt.targetCell.index))===!1){this.returnHandCardToFan(tt);return}}this.beginHandLanding(tt,tt.targetCell)}else this.returnHandCardToFan(tt);return}if(this.pendingHandPress){const tt=this.pendingHandPress;if(tt.pointerId!==t.pointerId)return;this.pendingHandPress=null,this.controls.enabled=!0,this.canvas.style.cursor="";const vt=this.handCards.get(tt.key);vt&&((w=(T=this.callbacks).onHandCardClick)==null||w.call(T,vt));return}if(this.pendingCardPress){const tt=this.pendingCardPress;if(tt.pointerId!==t.pointerId)return;this.pendingCardPress=null,this.controls.enabled=!0,this.canvas.style.cursor="",(v=(I=this.callbacks).onCardSelect)==null||v.call(I,tt.name),this.flipCard(tt.name),this.reportStatus(`${tt.name}: ${((b=this.flipAnimations.get(tt.name))==null?void 0:b.target)??this.cardFaces.get(tt.name)} side.`),(D=(R=this.callbacks).onActionHover)==null||D.call(R,null,null,t.clientX,t.clientY);return}if(!this.draggingName)return;const e=this.draggingName,i=this.dragOrigin,s=this.boardItemCards.get(e),r=s?(Y=(V=this.callbacks).isInHandZone)==null?void 0:Y.call(V,t.clientX,t.clientY):(X=(H=this.callbacks).isReturnZone)==null?void 0:X.call(H,t.clientX,t.clientY),a=this.motionStates.get(e),o=this.pointAboveBoard(t.clientX,t.clientY);a&&o&&a.pointerPoint.copy(o);const l=a&&o?this.cardCenterForPointer(e,o):null,c=this.cellFromPoint(l);if(this.draggingName=null,this.dragOrigin=null,this.controls.enabled=!0,this.canvas.style.cursor="",r&&s){(q=(j=this.callbacks).onBoardItemReturn)==null||q.call(j,s.item,s.instanceId),this.removeBoardItemCard(s.instanceId),this.reportStatus(`${s.item.name} returned to the hand.`);return}if(r&&((nt=(at=this.callbacks).canReturnCard)==null?void 0:nt.call(at,e))!==!1){this.removeCard(e),this.reportStatus(`${e} returned to the card list.`);return}if(!a||!c||c.index===i){a&&(a.active=!1,a.targetPosition.copy(this.cellPosition(i))),(!c||c.index!==i)&&this.reportStatus("Card returned to its previous square.");return}const h=c.index;if(((lt=(ct=this.callbacks).canMoveCard)==null?void 0:lt.call(ct,e,i,h))===!1){a.active=!1,a.targetPosition.copy(this.cellPosition(i)),this.reportStatus("That move is not legal right now.");return}const d=this.occupiedBy(h,e);if(d&&s){if(((Dt=(wt=this.callbacks).onBoardItemAttach)==null?void 0:Dt.call(wt,s.instanceId,s.item,d))===!0){this.removeBoardItemCard(s.instanceId);return}a.active=!1,a.targetPosition.copy(this.cellPosition(i)),this.reportStatus("That square cannot equip this item.");return}let u=null;const f=d?this.boardItemCards.get(d):null;if(f&&!s)if(((Yt=(te=this.callbacks).onBoardItemAttach)==null?void 0:Yt.call(te,f.instanceId,f.item,e))===!0)u=f.item,this.removeBoardItemCard(f.instanceId);else{a.active=!1,a.targetPosition.copy(this.cellPosition(i)),this.reportStatus(`Could not equip ${f.item.name}.`);return}if(d&&!u){a.active=!1,a.targetPosition.copy(this.cellPosition(i)),this.reportStatus("That square is occupied.");return}this.placements[e]=h,a.active=!1,a.targetPosition.copy(this.cellPosition(h)),(it=(qt=this.callbacks).onMoveCard)==null||it.call(qt,e,i,h,u),this.notifyChange();const _=this.cellDescription(h);this.reportStatus(u?`${e} equipped ${u.name} and moved to ${_}.`:`${e} moved to ${_}.`)}handlePointerCancel(){var e,i,s,r;if(this.controls.mouseButtons.LEFT=-1,this.pendingHandPress||this.handDrag){const a=this.handDrag;this.pendingHandPress=null,this.handDrag=null,a&&this.returnHandCardToFan(a),this.controls.enabled=!0,this.canvas.style.cursor="";return}if(this.pendingCardPress){this.pendingCardPress=null,this.controls.enabled=!0,this.canvas.style.cursor="",(i=(e=this.callbacks).onActionHover)==null||i.call(e,null,null,0,0);return}if(this.draggingAction){this.draggingAction=null,this.controls.enabled=!0,this.canvas.style.cursor="",(r=(s=this.callbacks).onActionHover)==null||r.call(s,null,null,0,0);return}if(!this.draggingName)return;const t=this.motionStates.get(this.draggingName);t&&this.dragOrigin!==null&&(t.active=!1,t.targetPosition.copy(this.cellPosition(this.dragOrigin))),this.draggingName=null,this.dragOrigin=null,this.controls.enabled=!0,this.canvas.style.cursor=""}placeCard(t,e,i){var r,a,o,l;if(!this.cards.has(t)||Object.hasOwn(this.placements,t))return!1;const s=this.cellFromPoint(this.pointOnBoard(e,i));return s?this.occupiedBy(s.index)?(this.reportStatus("That square is occupied. Choose an open square."),!1):((a=(r=this.callbacks).canDeployCard)==null?void 0:a.call(r,t,s.index))===!1?!1:(this.placements[t]=s.index,this.addCardMesh(t,s.index),(l=(o=this.callbacks).onDeploy)==null||l.call(o,t,s.index),this.notifyChange(),this.reportStatus(`${t} placed at ${this.cellDescription(s.index)}.`),!0):(this.reportStatus("Drop the card inside the board boundary."),!1)}placeCardAt(t,e){return!this.cards.has(t)||Object.hasOwn(this.placements,t)||this.occupiedBy(e)?!1:(this.placements[t]=e,this.addCardMesh(t,e),this.notifyChange(),!0)}dropItem(t,e,i){var r,a;const s=this.cellFromPoint(this.pointOnBoard(e,i));return s?((a=(r=this.callbacks).onItemDrop)==null?void 0:a.call(r,t,s.index))!==!1:(this.reportStatus("Drop the item card inside the board boundary."),!1)}addCardMesh(t,e){if(this.cardObjects.has(t)||!Object.hasOwn(this.placements,t))return;const i=this.textures.get(t);if(!i){if(this.loadingTextures.has(t))return;this.loadingTextures.add(t);const I=this.cards.get(t);new Ys().load(I.src,v=>{if(this.loadingTextures.delete(t),this.destroyed){v.dispose();return}v.colorSpace=Re,v.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8),this.textures.set(t,v);const b=`character:${t}`;this.handCards.has(b)&&this.addHandCardMesh(b),Object.hasOwn(this.placements,t)&&this.addCardMesh(t,this.placements[t])},void 0,()=>{this.loadingTextures.delete(t),this.reportStatus(`Could not load the card art for ${t}.`)});return}const s=new cn;s.position.copy(this.cellPosition(e)),s.userData.cardName=t,s.userData.facingYaw=this.cardOwners.get(t)===2?Math.PI:0,s.userData.statusYaw=Zu(this.cardConditions.get(t)),s.rotation.y=s.userData.facingYaw+s.userData.statusYaw;const r=[...t].reduce((I,v)=>I*31+v.charCodeAt(0)>>>0,7);s.userData.swayPhase=r/4294967295*Math.PI*2;const a=new cn;a.position.copy(s.position),a.quaternion.copy(s.quaternion),a.userData.cardName=t;const o=Ge+fa*2,l=Je+fa*2,c=new xe(new Fi(o,l),Ju());c.rotation.x=-Math.PI/2,c.userData.cardName=t,a.add(c),this.scene.add(a),this.cardShadows.set(t,a);const h=new cn;s.add(h);const d=new Ss({color:"#e5e0d4",roughness:.9}),u=new dr(ya(),{depth:sn,bevelEnabled:!1,curveSegments:8});u.translate(0,0,-sn/2);const f=new xe(u,d);f.rotation.x=-Math.PI/2,f.renderOrder=1,f.userData.cardName=t,h.add(f);const _=new yn({map:i}),M=Zs();M.translate(0,0,sn/2+15e-5);const m=new xe(M,_);m.rotation.x=-Math.PI/2,m.userData.cardName=t,m.renderOrder=3,h.add(m);const p=new yn({map:this.makeBackTexture(t)}),E=Zs();E.translate(0,0,sn/2+2e-4);const P=new xe(E,p);P.rotation.set(Math.PI/2,0,Math.PI),P.userData.cardName=t,P.renderOrder=3,P.visible=!1,h.add(P);const x=I=>{const v=Zs();v.translate(0,0,sn/2+45e-5);const b=new xe(v,new yn({color:"#000000",transparent:!0,opacity:.27,depthWrite:!1,side:Ve,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return b.rotation.copy(I),b.userData.cardName=t,b.renderOrder=4,b.visible=!1,h.add(b),b},T=x(m.rotation),w=x(P.rotation);this.scene.add(s),this.cardObjects.set(t,s),this.cardMeshes.set(t,m),this.cardFaceMeshes.set(t,{front:m,back:P}),this.cardActivationOverlays.set(t,{front:T,back:w}),this.cardFlipGroups.set(t,h),this.cardFaces.set(t,"front"),s.userData.deactivated=!1,this.refreshHpMarker(t),this.attachedItems.has(t)&&this.addAttachedItemMesh(t,this.attachedItems.get(t))}removeCard(t){if(!Object.hasOwn(this.placements,t))return;delete this.placements[t],this.disposeHpMarker(t),this.cardHitPoints.delete(t);const e=this.cardObjects.get(t);e&&(this.scene.remove(e),Bn(e),this.cardObjects.delete(t),this.motionStates.delete(t));const i=this.cardShadows.get(t);i&&(this.scene.remove(i),Bn(i),this.cardShadows.delete(t)),this.cardMeshes.delete(t),this.cardFaceMeshes.delete(t),this.cardActivationOverlays.delete(t),this.cardFlipGroups.delete(t),this.cardFaces.delete(t),this.flipAnimations.delete(t),this.cardOwners.delete(t),this.cardConditions.delete(t),this.attachedItems.delete(t),this.attachedItemGroups.delete(t),this.hoverTargets.delete(t),this.hoveredCardName===t&&(this.hoveredCardName=null),this.notifyChange()}clear(){this.resetHandCardDrags();for(const t of this.hpMarkers.keys())this.disposeHpMarker(t);this.cardHitPoints.clear();for(const[t,e]of this.cardObjects){this.scene.remove(e),Bn(e);const i=this.cardShadows.get(t);i&&(this.scene.remove(i),Bn(i))}this.cardObjects.clear(),this.attachedItems.clear(),this.attachedItemGroups.clear(),this.boardItemCards.clear(),this.cardMeshes.clear(),this.cardFaceMeshes.clear(),this.cardActivationOverlays.clear(),this.cardFlipGroups.clear(),this.cardFaces.clear(),this.flipAnimations.clear(),this.cardOwners.clear(),this.cardConditions.clear(),this.pendingCardPress=null,this.draggingAction=null,this.cardShadows.clear(),this.motionStates.clear(),this.hoverTargets.clear(),this.draggingName=null,this.dragOrigin=null,this.hoveredCardName=null,this.controls.enabled=!0,this.canvas.style.cursor="",this.placements={},this.notifyChange(),this.reportStatus("Board reset. Drag a card to begin another interaction.")}notifyChange(){var t,e;(e=(t=this.callbacks).onChange)==null||e.call(t,{...this.placements})}reportStatus(t){var e,i;(i=(e=this.callbacks).onStatus)==null||i.call(e,t)}cellDescription(t){const e=Math.floor(t/bn),i=t%bn;return`${String.fromCharCode(65+i)}${e+1}`}resetView(){this.setPlayerView(this.viewPlayer),this.reportStatus("Board view reset.")}setFieldOfView(t){this.camera.fov=be.clamp(Number(t)||43,25,75),this.camera.updateProjectionMatrix(),this.layoutHandFan()}destroy(){var t;this.destroyed=!0,cancelAnimationFrame(this.animationFrame),(t=this.resizeObserver)==null||t.disconnect(),this.canvas.removeEventListener("pointerdown",this.onPointerDown,!0),this.canvas.removeEventListener("pointermove",this.onPointerMove,!0),this.canvas.removeEventListener("pointerup",this.onPointerUp,!0),this.canvas.removeEventListener("pointercancel",this.onPointerCancel,!0),this.canvas.removeEventListener("pointerleave",this.onPointerLeave),this.canvas.removeEventListener("wheel",this.onWheel),this.canvas.removeEventListener("contextmenu",this.onContextMenu),this.controls.dispose();for(const e of this.hpMarkers.keys())this.disposeHpMarker(e);for(const e of this.cardShadows.values())Bn(e);for(const e of this.cardObjects.values())Bn(e);for(const e of this.textures.values())e.dispose();for(const e of this.itemTextures.values())e.dispose();for(const e of this.backTextures.values())e.dispose();this.scene.traverse(e=>{var i,s;e.geometry&&e!==this.boardMesh&&!this.cardObjects.has((i=e.userData)==null?void 0:i.cardName)&&e.geometry.dispose(),e.material&&e!==this.boardMesh&&!this.cardObjects.has((s=e.userData)==null?void 0:s.cardName)&&(Array.isArray(e.material)?e.material.forEach(r=>r.dispose()):e.material.dispose())}),this.boardMesh.geometry.dispose(),np(this.boardMesh.material),this.tabletopTexture.dispose(),this.boardGridTexture.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const Ob={class:"showcase-shell"},Fb={class:"workspace"},Bb={class:"board-status","aria-live":"polite"},Hb=["aria-label","title"],zb={__name:"ShowcaseApp",setup(n){const t=wi(null),e=wi("Drag cards from the hand onto the board. Deployed cards can be moved or returned to the hand."),i=wi(null),s=wi(null),r=wi({}),a=wi({}),o=wi({}),l=wi([]);let c,h=1;function d(R,D,V){const Y=['<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">','<rect width="600" height="900" fill="#f2efe7"/>','<rect x="22" y="22" width="556" height="856" rx="12" fill="none" stroke="#aaa394" stroke-width="5"/>','<rect x="22" y="22" width="556" height="28" rx="10" fill="'+V+'"/>','<text x="300" y="382" text-anchor="middle" font-family="Arial, sans-serif" font-size="45" font-weight="700" letter-spacing="5" fill="#393831">'+R+"</text>",'<text x="300" y="532" text-anchor="middle" font-family="Georgia, serif" font-size="116" fill="'+V+'">'+D+"</text>",'<line x1="112" y1="628" x2="488" y2="628" stroke="#c8c2b5" stroke-width="4"/>',"</svg>"].join("");return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(Y)}const u=[{name:"CHARACTER 01",displayName:"CHARACTER 01",src:d("CHARACTER","01","#6a7665")},{name:"CHARACTER 02",displayName:"CHARACTER 02",src:d("CHARACTER","02","#8a6452")},{name:"CHARACTER 03",displayName:"CHARACTER 03",src:d("CHARACTER","03","#657689")},{name:"CHARACTER 04",displayName:"CHARACTER 04",src:d("CHARACTER","04","#927c4e")}],f=[{id:"item-01",name:"ITEM 01",src:d("ITEM","01","#9b7951")},{id:"item-02",name:"ITEM 02",src:d("ITEM","02","#6f7e72")},{id:"item-03",name:"ITEM 03",src:d("ITEM","03","#766b87")},{id:"item-04",name:"ITEM 04",src:d("ITEM","04","#8a665b")},{id:"item-05",name:"ITEM 05",src:d("ITEM","05","#68798a")}];function _(){return f.map(R=>({...R,entryType:"item",instanceId:R.id+"-in-hand"}))}function M(){c==null||c.setHandCards(l.value)}function m(R){return String.fromCharCode(65+R%10)+(Math.floor(R/10)+1)}function p(R,D){var Y;const V=(Y=t.value)==null?void 0:Y.getBoundingClientRect();return!!(V&&R>=V.left&&R<=V.right&&D>=V.bottom-150&&D<=V.bottom)}function E(R,D){var H;const V=f.find(X=>X.id===R);if(!V)return!1;const Y=(H=Object.entries(r.value).find(([X,j])=>j===D&&!c.isBoardItemCard(X)))==null?void 0:H[0];if(Y){if(!P(Y,V))return!1}else{if(Object.values(r.value).includes(D))return e.value="That square already holds a card. Choose an open square.",!1;const X="dropped-item-"+h++;c.placeItemCard(X,V,D),e.value=V.name+" dropped onto "+m(D)+"."}return l.value=l.value.filter(X=>X.id!==R),M(),!0}function P(R,D){return!Object.hasOwn(r.value,R)||c!=null&&c.isBoardItemCard(R)?!1:o.value[R]?(e.value=R+" already has an attached item. Choose another card or an open square.",!1):(c.setAttachedItem(R,D),o.value={...o.value,[R]:D.name},e.value=D.name+" equipped by "+R+".",!0)}function x(R){l.value=[...l.value,{...R,entryType:"item",instanceId:R.id+"-returned-"+h++}],M(),e.value=R.name+" returned to the hand."}function T(R,D,V){return P(V,D)}function w(R=(D=>(D=s.value)==null?void 0:D.name)()??i.value){if(!R)return;i.value=R;const V=!a.value[R];a.value={...a.value,[R]:V},c==null||c.setCardConditions(R,{guard:V}),e.value=V?R+" is in the 90° defending pose.":R+" returned to the ready pose."}function I(){if(!c)return;c.setHandCards([]),c.clear(),r.value={},s.value=null,a.value={},o.value={},h=1,i.value=u[0].name;const R=[{card:u[0],cell:11},{card:u[1],cell:28},{card:u[2],cell:63},{card:u[3],cell:87}];for(const D of R)c.placeCardAt(D.card.name,D.cell),c.setCardConditions(D.card.name,{guard:!1});l.value=_(),M(),c.resetView(),e.value="Drag cards from the hand onto the board. Move deployed cards freely or return item cards to the hand."}function v(){c==null||c.resetView()}function b(R){var D;(D=t.value)!=null&&D.contains(R.relatedTarget)||(s.value=null)}return Id(()=>{c=new Ub(t.value,u,{onChange(R){r.value=R},onStatus(R){e.value=R},onCardSelect(R){i.value=R},onCardHover(R,D,V){s.value=R?{name:R,x:D,y:V}:null},canMoveCard(){return!0},onMoveCard(R,D,V,Y){e.value=Y?R+" equipped "+Y.name+" and moved to "+m(V)+".":R+" moved from "+m(D)+" to "+m(V)+"."},onItemDrop:E,onBoardItemReturn:x,onBoardItemAttach:T,isInHandZone:p,onHandCardClick(R){e.value="Drag "+R.name+" from the hand fan to the board."},isCardKO(){return!1}},f),I()}),Nd(()=>c==null?void 0:c.destroy()),(R,D)=>(cl(),yh("main",Ob,[Te("header",{class:"topbar"},[D[2]||(D[2]=Te("div",{class:"brand-block"},[Te("strong",null,"WORKING TITLE"),Te("span",null,"3D BOARD SHOWCASE")],-1)),Te("div",{class:"topbar-actions"},[D[1]||(D[1]=Te("span",{class:"build-tag"},"INTERACTION STUDY",-1)),Te("button",{type:"button",class:"quiet-button",onClick:v},"Reset view"),Te("button",{type:"button",class:"quiet-button",onClick:I},"Reset demo")])]),Te("section",Fb,[Te("section",{ref_key:"viewport",ref:t,class:"board-viewport","aria-label":"Three-dimensional ten by ten card board"},[D[4]||(D[4]=Te("div",{class:"board-label"},[Te("span",{class:"overline"},"TABLETOP STUDY"),Te("b",null,"Arrange cards freely."),Te("small",null,"Scroll to zoom · MMB to pan · Ctrl / Shift + MMB to orbit")],-1)),Te("div",Bb,ad(e.value),1),D[5]||(D[5]=Te("div",{class:"board-corner-note"},"10 × 10 SANDBOX",-1)),s.value?(cl(),yh("button",{key:0,type:"button",class:ka(["card-defend-button",{active:a.value[s.value.name]}]),style:Ga({left:`${s.value.x}px`,top:`${s.value.y}px`}),"aria-label":a.value[s.value.name]?`Return ${s.value.name} to ready`:`Defend with ${s.value.name}`,title:a.value[s.value.name]?"Return to ready":"Defend",onClick:D[0]||(D[0]=Ng(V=>w(s.value.name),["stop"])),onPointerleave:b},[...D[3]||(D[3]=[Te("svg",{viewBox:"0 0 24 24","aria-hidden":"true"},[Te("path",{d:"M12 2.7 19.5 6v5.1c0 4.8-3 8.4-7.5 10.2-4.5-1.8-7.5-5.4-7.5-10.2V6L12 2.7Z"}),Te("path",{d:"m8.6 12.1 2.2 2.2 4.7-4.8"})],-1)])],46,Hb)):$m("",!0)],512)])]))}};Fg(zb).mount("#app");
