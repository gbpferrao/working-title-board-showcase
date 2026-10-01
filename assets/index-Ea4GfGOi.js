(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const _e={},Ki=[],Zn=()=>{},ju=()=>!1,Fa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ba=n=>n.startsWith("onUpdate:"),Ye=Object.assign,rc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},up=Object.prototype.hasOwnProperty,le=(n,t)=>up.call(n,t),Xt=Array.isArray,Oi=n=>Rr(n)==="[object Map]",ba=n=>Rr(n)==="[object Set]",sh=n=>Rr(n)==="[object Date]",Zt=n=>typeof n=="function",Ae=n=>typeof n=="string",Qn=n=>typeof n=="symbol",fe=n=>n!==null&&typeof n=="object",td=n=>(fe(n)||Zt(n))&&Zt(n.then)&&Zt(n.catch),ed=Object.prototype.toString,Rr=n=>ed.call(n),dp=n=>Rr(n).slice(8,-1),nd=n=>Rr(n)==="[object Object]",ac=n=>Ae(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,er=sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ha=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},fp=/-\w/g,wn=Ha(n=>n.replace(fp,t=>t.slice(1).toUpperCase())),pp=/\B([A-Z])/g,rs=Ha(n=>n.replace(pp,"-$1").toLowerCase()),id=Ha(n=>n.charAt(0).toUpperCase()+n.slice(1)),eo=Ha(n=>n?`on${id(n)}`:""),Wn=(n,t)=>!Object.is(n,t),no=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},sd=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},mp=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let rh;const za=()=>rh||(rh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ga(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ae(i)?xp(i):Ga(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ae(n)||fe(n))return n}const gp=/;(?![^(]*\))/g,_p=/:([^]+)/,vp=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function xp(n){const t={};return n.replace(vp,e=>e.startsWith("/*")?"":e).split(gp).forEach(e=>{if(e){const i=e.split(_p);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ka(n){let t="";if(Ae(n))t=n;else if(Xt(n))for(let e=0;e<n.length;e++){const i=ka(n[e]);i&&(t+=i+" ")}else if(fe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mp=sc(Sp);function rd(n){return!!n||n===""}function yp(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Va(n[s],t[s],e);return i}function ah(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let a=-1;for(let o=0;o<i.length;o++)if(!s[o]&&Va(r,i[o],e)){a=o;break}if(a<0)return!1;s[a]=1}return!0}function bp(n,t,e){let i=Oi(n),s=Oi(t);if(i||s||(i=ba(n),s=ba(t),i||s))return i&&s?ah(n,t,e):!1;const r=Object.keys(n).length,a=Object.keys(t).length;if(r!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=t.hasOwnProperty(o);if(l&&!c||!l&&c||!Va(n[o],t[o],e))return!1}return String(n)===String(t)}function oh(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const a=i(n,t,e);return s.delete(n),r.delete(t),a}function Va(n,t,e){if(n===t)return!0;let i=sh(n),s=sh(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=Qn(n),s=Qn(t),i||s?n===t:(i=Xt(n),s=Xt(t),i||s?i&&s?oh(n,t,e,yp):!1:(i=fe(n),s=fe(t),i||s?!i||!s?!1:oh(n,t,e,bp):String(n)===String(t))))}const ad=n=>!!(n&&n.__v_isRef===!0),od=n=>Ae(n)?n:n==null?"":Xt(n)||fe(n)&&(n.toString===ed||!Zt(n.toString))?ad(n)?od(n.value):JSON.stringify(n,ld,2):String(n),ld=(n,t)=>ad(t)?ld(n,t.value):Oi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[io(i,r)+" =>"]=s,e),{})}:ba(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>io(e))}:Qn(t)?io(t):fe(t)&&!Xt(t)&&!nd(t)?String(t):t,io=(n,t="")=>{var e;return Qn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class Ep{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ne&&(Ne.active?(this.parent=Ne,this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ne;try{return Ne=this,t()}finally{Ne=e}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){if(this._on>0&&--this._on===0){if(Ne===this)Ne=this.prevScope;else{let t=Ne;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Tp(){return Ne}let ge;const so=new WeakSet;class cd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&(Ne.active?Ne.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,so.has(this)&&(so.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ud(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lh(this),dd(this);const t=ge,e=Cn;ge=this,Cn=!0;try{return this.fn()}finally{fd(this),ge=t,Cn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)cc(t);this.deps=this.depsTail=void 0,lh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?so.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tl(this)&&this.run()}get dirty(){return tl(this)}}let hd=0,nr,ir;function ud(n,t=!1){if(n.flags|=8,t){n.next=ir,ir=n;return}n.next=nr,nr=n}function oc(){hd++}function lc(){if(--hd>0)return;if(ir){let t=ir;for(ir=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;nr;){let t=nr;for(nr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function dd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function fd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),cc(i),Ap(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function tl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(pd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function pd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===fr)||(n.globalVersion=fr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!tl(n))))return;n.flags|=2;const t=n.dep,e=ge,i=Cn;ge=n,Cn=!0;try{dd(n);const s=n.fn(n._value);(t.version===0||Wn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ge=e,Cn=i,fd(n),n.flags&=-3}}function cc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)cc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Ap(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Cn=!0;const md=[];function vi(){md.push(Cn),Cn=!1}function xi(){const n=md.pop();Cn=n===void 0?!0:n}function lh(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ge;ge=void 0;try{t()}finally{ge=e}}}let fr=0;class wp{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ge||!Cn||ge===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ge)e=this.activeLink=new wp(ge,this),ge.deps?(e.prevDep=ge.depsTail,ge.depsTail.nextDep=e,ge.depsTail=e):ge.deps=ge.depsTail=e,gd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ge.depsTail,e.nextDep=void 0,ge.depsTail.nextDep=e,ge.depsTail=e,ge.deps===e&&(ge.deps=i)}return e}trigger(t){this.version++,fr++,this.notify(t)}notify(t){oc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{lc()}}}function gd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)gd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const el=new WeakMap,Ji=Symbol(""),nl=Symbol(""),pr=Symbol("");function ke(n,t,e){if(Cn&&ge){let i=el.get(n);i||el.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new hc),s.map=i,s.key=e),s.track()}}function di(n,t,e,i,s,r){const a=el.get(n);if(!a){fr++;return}const o=l=>{l&&l.trigger()};if(oc(),t==="clear")a.forEach(o);else{const l=Xt(n),c=l&&ac(e);if(l&&e==="length"){const h=Number(i);a.forEach((d,u)=>{(u==="length"||u===pr||!Qn(u)&&u>=h)&&o(d)})}else switch((e!==void 0||a.has(void 0))&&o(a.get(e)),c&&o(a.get(pr)),t){case"add":l?c&&o(a.get("length")):(o(a.get(Ji)),Oi(n)&&o(a.get(nl)));break;case"delete":l||(o(a.get(Ji)),Oi(n)&&o(a.get(nl)));break;case"set":Oi(n)&&o(a.get(Ji));break}}lc()}function cs(n){const t=oe(n);return t===n||(ke(t,"iterate",pr),Rn(n))?t:Si(n)?Qi(n)?t.map(e=>ts(jn(e))):t.map(ts):t.map(jn)}function uc(n){return ke(n=oe(n),"iterate",pr),n}function Gn(n,t){return Si(n)?ts(Qi(n)?jn(t):t):jn(t)}const Cp={__proto__:null,[Symbol.iterator](){return ro(this,Symbol.iterator,n=>Gn(this,n))},concat(...n){return cs(this).concat(...n.map(t=>Xt(t)?cs(t):t))},entries(){return ro(this,"entries",n=>(n[1]=Gn(this,n[1]),n))},every(n,t){return ii(this,"every",n,t,void 0,arguments)},filter(n,t){return ii(this,"filter",n,t,e=>e.map(i=>Gn(this,i)),arguments)},find(n,t){return ii(this,"find",n,t,e=>Gn(this,e),arguments)},findIndex(n,t){return ii(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ii(this,"findLast",n,t,e=>Gn(this,e),arguments)},findLastIndex(n,t){return ii(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ii(this,"forEach",n,t,void 0,arguments)},includes(...n){return ao(this,"includes",n)},indexOf(...n){return ao(this,"indexOf",n)},join(n){return cs(this).join(n)},lastIndexOf(...n){return ao(this,"lastIndexOf",n)},map(n,t){return ii(this,"map",n,t,void 0,arguments)},pop(){return zs(this,"pop")},push(...n){return zs(this,"push",n)},reduce(n,...t){return ch(this,"reduce",n,t)},reduceRight(n,...t){return ch(this,"reduceRight",n,t)},shift(){return zs(this,"shift")},some(n,t){return ii(this,"some",n,t,void 0,arguments)},splice(...n){return zs(this,"splice",n)},toReversed(){return cs(this).toReversed()},toSorted(n){return cs(this).toSorted(n)},toSpliced(...n){return cs(this).toSpliced(...n)},unshift(...n){return zs(this,"unshift",n)},values(){return ro(this,"values",n=>Gn(this,n))}};function ro(n,t,e){const i=uc(n),s=i[t]();return i!==n&&!Rn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Rp=Array.prototype;function ii(n,t,e,i,s,r){const a=uc(n),o=a!==n&&!Rn(n),l=a[t];if(l!==Rp[t]){const d=l.apply(n,r);return o?jn(d):d}let c=e;a!==n&&(o?c=function(d,u){return e.call(this,Gn(n,d),u,n)}:e.length>2&&(c=function(d,u){return e.call(this,d,u,n)}));const h=l.call(a,c,i);return o&&s?s(h):h}function ch(n,t,e,i){const s=uc(n),r=s!==n&&!Rn(n);let a=e,o=!1;s!==n&&(r?(o=i.length===0,a=function(c,h,d){return o&&(o=!1,c=Gn(n,c)),e.call(this,c,Gn(n,h),d,n)}):e.length>3&&(a=function(c,h,d){return e.call(this,c,h,d,n)}));const l=s[t](a,...i);return o?Gn(n,l):l}function ao(n,t,e){const i=oe(n);ke(i,"iterate",pr);const s=i[t](...e);return(s===-1||s===!1)&&mc(e[0])?(e[0]=oe(e[0]),i[t](...e)):s}function zs(n,t,e=[]){vi(),oc();const i=oe(n)[t].apply(n,e);return lc(),xi(),i}const Pp=sc("__proto__,__v_isRef,__isVue"),_d=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qn));function Dp(n){Qn(n)||(n=String(n));const t=oe(this);return ke(t,"has",n),t.hasOwnProperty(n)}class vd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Gp:yd:r?Md:Sd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const a=Xt(t);if(!s){let l;if(a&&(l=Cp[e]))return l;if(e==="hasOwnProperty")return Dp}const o=Reflect.get(t,e,Xe(t)?t:i);if((Qn(e)?_d.has(e):Pp(e))||(s||ke(t,"get",e),r))return o;if(Xe(o)){const l=a&&ac(e)?o:o.value;return s&&fe(l)?sl(l):l}return fe(o)?s?sl(o):fc(o):o}}class xd extends vd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const a=Xt(t)&&ac(e);if(!this._isShallow){const c=Si(r);if(!Rn(i)&&!Si(i)&&(r=oe(r),i=oe(i)),!a&&Xe(r)&&!Xe(i))return c||(r.value=i),!0}const o=a?Number(e)<t.length:le(t,e),l=Reflect.set(t,e,i,Xe(t)?t:s);return t===oe(s)&&l&&(o?Wn(i,r)&&di(t,"set",e,i):di(t,"add",e,i)),l}deleteProperty(t,e){const i=le(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&di(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Qn(e)||!_d.has(e))&&ke(t,"has",e),i}ownKeys(t){return ke(t,"iterate",Xt(t)?"length":Ji),Reflect.ownKeys(t)}}class Lp extends vd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Ip=new xd,Np=new Lp,Up=new xd(!0);const il=n=>n,Or=n=>Reflect.getPrototypeOf(n);function Op(n,t,e){return function(...i){const s=this.__v_raw,r=oe(s),a=Oi(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),h=e?il:t?ts:jn;return!t&&ke(r,"iterate",l?nl:Ji),Ye(Object.create(c),{next(){const{value:d,done:u}=c.next();return u?{value:d,done:u}:{value:o?[h(d[0]),h(d[1])]:h(d),done:u}}})}}function Fr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Fp(n,t){const e={get(s){const r=this.__v_raw,a=oe(r),o=oe(s);n||(Wn(s,o)&&ke(a,"get",s),ke(a,"get",o));const{has:l}=Or(a),c=t?il:n?ts:jn;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&ke(oe(s),"iterate",Ji),s.size},has(s){const r=this.__v_raw,a=oe(r),o=oe(s);return n||(Wn(s,o)&&ke(a,"has",s),ke(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=oe(o),c=t?il:n?ts:jn;return!n&&ke(l,"iterate",Ji),o.forEach((h,d)=>s.call(r,c(h),c(d),a))}};return Ye(e,n?{add:Fr("add"),set:Fr("set"),delete:Fr("delete"),clear:Fr("clear")}:{add(s){const r=oe(this),a=Or(r),o=oe(s),l=!t&&!Rn(s)&&!Si(s)?o:s;return a.has.call(r,l)||Wn(s,l)&&a.has.call(r,s)||Wn(o,l)&&a.has.call(r,o)||(r.add(l),di(r,"add",l,l)),this},set(s,r){!t&&!Rn(r)&&!Si(r)&&(r=oe(r));const a=oe(this),{has:o,get:l}=Or(a);let c=o.call(a,s);c||(s=oe(s),c=o.call(a,s));const h=l.call(a,s);return a.set(s,r),c?Wn(r,h)&&di(a,"set",s,r):di(a,"add",s,r),this},delete(s){const r=oe(this),{has:a,get:o}=Or(r);let l=a.call(r,s);l||(s=oe(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&di(r,"delete",s,void 0),c},clear(){const s=oe(this),r=s.size!==0,a=s.clear();return r&&di(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Op(s,n,t)}),e}function dc(n,t){const e=Fp(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(le(e,s)&&s in i?e:i,s,r)}const Bp={get:dc(!1,!1)},Hp={get:dc(!1,!0)},zp={get:dc(!0,!1)};const Sd=new WeakMap,Md=new WeakMap,yd=new WeakMap,Gp=new WeakMap;function kp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fc(n){return Si(n)?n:pc(n,!1,Ip,Bp,Sd)}function Vp(n){return pc(n,!1,Up,Hp,Md)}function sl(n){return pc(n,!0,Np,zp,yd)}function pc(n,t,e,i,s){if(!fe(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const a=kp(dp(n));if(a===0)return n;const o=new Proxy(n,a===2?i:e);return s.set(n,o),o}function Qi(n){return Si(n)?Qi(n.__v_raw):!!(n&&n.__v_isReactive)}function Si(n){return!!(n&&n.__v_isReadonly)}function Rn(n){return!!(n&&n.__v_isShallow)}function mc(n){return n?!!n.__v_raw:!1}function oe(n){const t=n&&n.__v_raw;return t?oe(t):n}function Wp(n){return!le(n,"__v_skip")&&Object.isExtensible(n)&&sd(n,"__v_skip",!0),n}const jn=n=>fe(n)?fc(n):n,ts=n=>fe(n)?sl(n):n;function Xe(n){return n?n.__v_isRef===!0:!1}function wi(n){return Xp(n,!1)}function Xp(n,t){return Xe(n)?n:new Yp(n,t)}class Yp{constructor(t,e){this.dep=new hc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:oe(t),this._value=e?t:jn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Rn(t)||Si(t);t=i?t:oe(t),Wn(t,e)&&(this._rawValue=t,this._value=i?t:jn(t),this.dep.trigger())}}function qp(n){return Xe(n)?n.value:n}const Kp={get:(n,t,e)=>t==="__v_raw"?n:qp(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Xe(s)&&!Xe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function bd(n){return Qi(n)?n:new Proxy(n,Kp)}class Zp{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new hc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return ud(this,!0),!0}get value(){const t=this.dep.track();return pd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function $p(n,t,e=!1){let i,s;return Zt(n)?i=n:(i=n.get,s=n.set),new Zp(i,s,e)}const Br={},Ea=new WeakMap;let qi;function Jp(n,t=!1,e=qi){if(e){let i=Ea.get(e);i||Ea.set(e,i=[]),i.push(n)}}function Qp(n,t,e=_e){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=e,c=x=>s?x:Rn(x)||s===!1||s===0?Ni(x,1):Ni(x);let h,d,u,f,_=!1,M=!1;if(Xe(n)?(d=()=>n.value,_=Rn(n)):Qi(n)?(d=()=>c(n),_=!0):Xt(n)?(M=!0,_=n.some(x=>Qi(x)||Rn(x)),d=()=>n.map(x=>{if(Xe(x))return x.value;if(Qi(x))return c(x);if(Zt(x))return l?l(x,2):x()})):Zt(n)?t?d=l?()=>l(n,2):n:d=()=>{if(u){vi();try{u()}finally{xi()}}const x=qi;qi=h;try{return l?l(n,3,[f]):n(f)}finally{qi=x}}:d=Zn,t&&s){const x=d,E=s===!0?1/0:s;d=()=>Ni(x(),E)}const m=Tp(),p=()=>{h.stop(),m&&m.active&&rc(m.effects,h)};if(r&&t){const x=t;t=(...E)=>{const A=x(...E);return p(),A}}let b=M?new Array(n.length).fill(Br):Br;const R=x=>{if(!(!(h.flags&1)||!h.dirty&&!x))if(t){const E=h.run();if(x||s||_||(M?E.some((A,I)=>Wn(A,b[I])):Wn(E,b))){u&&u();const A=qi;qi=h;try{const I=[E,b===Br?void 0:M&&b[0]===Br?[]:b,f];b=E,l?l(t,3,I):t(...I)}finally{qi=A}}}else h.run()};return o&&o(R),h=new cd(d),h.scheduler=a?()=>a(R,!1):R,f=x=>Jp(x,!1,h),u=h.onStop=()=>{const x=Ea.get(h);if(x){if(l)l(x,4);else for(const E of x)E();Ea.delete(h)}},t?i?R(!0):b=h.run():a?a(R.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function Ni(n,t=1/0,e){if(t<=0||!fe(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Xe(n))Ni(n.value,t,e);else if(Xt(n))for(let i=0;i<n.length;i++)Ni(n[i],t,e);else if(ba(n)||Oi(n))n.forEach(i=>{Ni(i,t,e)});else if(nd(n)){for(const i in n)Ni(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ni(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pr(n,t,e,i){try{return i?n(...i):n()}catch(s){Wa(s,t,e)}}function Dn(n,t,e,i){if(Zt(n)){const s=Pr(n,t,e,i);return s&&td(s)&&s.catch(r=>{Wa(r,t,e)}),s}if(Xt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Dn(n[r],t,e,i));return s}}function Wa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||_e;if(t){let o=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;o;){const h=o.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](n,l,c)===!1)return}o=o.parent}if(r){vi(),Pr(r,null,10,[n,l,c]),xi();return}}jp(n,e,s,i,a)}function jp(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const je=[];let zn=-1;const Ps=[];let Ii=null,Ts=0;const Ed=Promise.resolve();let Ta=null;function tm(n){const t=Ta||Ed;return n?t.then(this?n.bind(this):n):t}function em(n){let t=zn+1,e=je.length;for(;t<e;){const i=t+e>>>1,s=je[i],r=mr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function gc(n){if(!(n.flags&1)){const t=mr(n),e=je[je.length-1];!e||!(n.flags&2)&&t>=mr(e)?je.push(n):je.splice(em(t),0,n),n.flags|=1,Td()}}function Td(){Ta||(Ta=Ed.then(wd))}function nm(n){if(!Xt(n))Ii&&n.id===-1?Ii.splice(Ts+1,0,n):n.flags&1||(Ps.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Ps.push(n[t]);Td()}function hh(n,t,e=zn+1){for(;e<je.length;e++){const i=je[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;je.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ad(n){if(Ps.length){const t=[...new Set(Ps)].sort((e,i)=>mr(e)-mr(i));if(Ps.length=0,Ii){for(let e=0;e<t.length;e++)Ii.push(t[e]);return}for(Ii=t,Ts=0;Ts<Ii.length;Ts++){const e=Ii[Ts];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Ii=null,Ts=0}}const mr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wd(n){try{for(zn=0;zn<je.length;zn++){const t=je[zn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Pr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;zn<je.length;zn++){const t=je[zn];t&&(t.flags&=-2)}zn=-1,je.length=0,Ad(),Ta=null,(je.length||Ps.length)&&wd()}}let Xn=null,Cd=null;function Aa(n){const t=Xn;return Xn=n,Cd=n&&n.type.__scopeId||null,t}function im(n,t=Xn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Mh(-1);const r=Aa(t),a=ji.length;let o;try{o=n(...s)}finally{for(let l=ji.length;l>a;l--)tf();Aa(r),i._d&&Mh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function zi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(vi(),Dn(l,e,8,[n.el,o,n,t]),xi())}}function sm(n,t){if(tn){let e=tn.provides;const i=tn.parent&&tn.parent.provides;i===e&&(e=tn.provides=Object.create(i)),e[n]=t}}function pa(n,t,e=!1){const i=ng();if(i||Ds){let s=Ds?Ds._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Zt(t)?t.call(i&&i.proxy):t}}const rm=Symbol.for("v-scx"),am=()=>pa(rm);function oo(n,t,e){return Rd(n,t,e)}function Rd(n,t,e=_e){const{immediate:i,deep:s,flush:r,once:a}=e,o=Ye({},e),l=t&&i||!t&&r!=="post";let c;if(vr){if(r==="sync"){const f=am();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Zn,f.resume=Zn,f.pause=Zn,f}}const h=tn;o.call=(f,_,M)=>Dn(f,h,_,M);let d=!1;r==="post"?o.scheduler=f=>{sn(f,h&&h.suspense)}:r!=="sync"&&(d=!0,o.scheduler=(f,_)=>{_?f():gc(f)}),o.augmentJob=f=>{t&&(f.flags|=4),d&&(f.flags|=2,h&&(f.id=h.uid,f.i=h))};const u=Qp(n,t,o);return vr&&(c?c.push(u):l&&u()),u}function om(n,t,e){const i=this.proxy,s=Ae(n)?n.includes(".")?Pd(i,n):()=>i[n]:n.bind(i,i);let r;Zt(t)?r=t:(r=t.handler,e=t);const a=Dr(this),o=Rd(s,r.bind(i),e);return a(),o}function Pd(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const lm=Symbol("_vte"),Xa=n=>n.__isTeleport,lo=Symbol("_leaveCb");function cm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Mi){t=e;break}}return t}function Dd(n){if(!vc(n))return Xa(n.type)&&n.children?cm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Zt(e.default))return e.default()}}function _c(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;_c(Xa(e.type)&&Dd(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Ld(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function uh(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const wa=new WeakMap;function sr(n,t,e,i,s=!1){if(Xt(n)){n.forEach((M,m)=>sr(M,t&&(Xt(t)?t[m]:t),e,i,s));return}if(rr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&sr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Mc(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=t&&t.r,h=o.refs===_e?o.refs={}:o.refs,d=o.setupState,u=oe(d),f=d===_e?ju:M=>uh(h,M)?!1:le(u,M),_=(M,m)=>!(m&&uh(h,m));if(c!=null&&c!==l){if(dh(t),Ae(c))h[c]=null,f(c)&&(d[c]=null);else if(Xe(c)){const M=t;_(c,M.k)&&(c.value=null),M.k&&(h[M.k]=null)}}if(Zt(l))Pr(l,o,12,[a,h]);else{const M=Ae(l),m=Xe(l);if(M||m){const p=()=>{if(n.f){const b=M?f(l)?d[l]:h[l]:_()||!n.k?l.value:h[n.k];if(s)Xt(b)&&rc(b,r);else if(Xt(b))b.includes(r)||b.push(r);else if(M)h[l]=[r],f(l)&&(d[l]=h[l]);else{const R=[r];_(l,n.k)&&(l.value=R),n.k&&(h[n.k]=R)}}else M?(h[l]=a,f(l)&&(d[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(h[n.k]=a))};if(a){const b=()=>{p(),wa.delete(n)};b.id=-1,wa.set(n,b),sn(b,e)}else dh(n),p()}}}function dh(n){const t=wa.get(n);t&&(t.flags|=8,wa.delete(n))}za().requestIdleCallback;za().cancelIdleCallback;const rr=n=>!!n.type.__asyncLoader,vc=n=>n.type.__isKeepAlive;function hm(n,t){Id(n,"a",t)}function um(n,t){Id(n,"da",t)}function Id(n,t,e=tn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ya(t,i,e),e){let s=e.parent;for(;s&&s.parent;)vc(s.parent.vnode)&&dm(i,t,e,s),s=s.parent}}function dm(n,t,e,i){const s=Ya(t,n,i,!0);Od(()=>{rc(i[t],s)},e)}function Ya(n,t,e=tn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...a)=>{vi();const o=Dr(e),l=Dn(t,e,n,a);return o(),xi(),l});return i?s.unshift(r):s.push(r),r}}const bi=n=>(t,e=tn)=>{(!vr||n==="sp")&&Ya(n,(...i)=>t(...i),e)},fm=bi("bm"),Nd=bi("m"),pm=bi("bu"),mm=bi("u"),Ud=bi("bum"),Od=bi("um"),gm=bi("sp"),_m=bi("rtg"),vm=bi("rtc");function xm(n,t=tn){Ya("ec",n,t)}const Sm=Symbol.for("v-ndc"),rl=n=>n?rf(n)?Mc(n):rl(n.parent):null,ar=Ye(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>rl(n.parent),$root:n=>rl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Bd(n),$forceUpdate:n=>n.f||(n.f=()=>{gc(n.update)}),$nextTick:n=>n.n||(n.n=tm.bind(n.proxy)),$watch:n=>om.bind(n)}),co=(n,t)=>n!==_e&&!n.__isScriptSetup&&le(n,t),Mm={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;if(t[0]!=="$"){const u=a[t];if(u!==void 0)switch(u){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(co(i,t))return a[t]=1,i[t];if(s!==_e&&le(s,t))return a[t]=2,s[t];if(le(r,t))return a[t]=3,r[t];if(e!==_e&&le(e,t))return a[t]=4,e[t];al&&(a[t]=0)}}const c=ar[t];let h,d;if(c)return t==="$attrs"&&ke(n.attrs,"get",""),c(n);if((h=o.__cssModules)&&(h=h[t]))return h;if(e!==_e&&le(e,t))return a[t]=4,e[t];if(d=l.config.globalProperties,le(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return co(s,t)?(s[t]=e,!0):i!==_e&&le(i,t)?(i[t]=e,!0):le(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:a}},o){let l;return!!(e[o]||n!==_e&&o[0]!=="$"&&le(n,o)||co(t,o)||le(r,o)||le(i,o)||le(ar,o)||le(s.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:le(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function fh(n){return Xt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let al=!0;function ym(n){const t=Bd(n),e=n.proxy,i=n.ctx;al=!1,t.beforeCreate&&ph(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:h,beforeMount:d,mounted:u,beforeUpdate:f,updated:_,activated:M,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:R,unmounted:x,render:E,renderTracked:A,renderTriggered:I,errorCaptured:v,serverPrefetch:C,expose:L,inheritAttrs:P,components:U,directives:W,filters:F}=t;if(c&&bm(c,i,null),a)for(const q in a){const at=a[q];Zt(at)&&(i[q]=at.bind(e))}if(s){const q=s.call(e,e);fe(q)&&(n.data=fc(q))}if(al=!0,r)for(const q in r){const at=r[q],nt=Zt(at)?at.bind(e,e):Zt(at.get)?at.get.bind(e,e):Zn,ct=!Zt(at)&&Zt(at.set)?at.set.bind(e):Zn,lt=lg({get:nt,set:ct});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>lt.value,set:wt=>lt.value=wt})}if(o)for(const q in o)Fd(o[q],i,e,q);if(l){const q=Zt(l)?l.call(e):l;Reflect.ownKeys(q).forEach(at=>{sm(at,q[at])})}h&&ph(h,n,"c");function J(q,at){Xt(at)?at.forEach(nt=>q(nt.bind(e))):at&&q(at.bind(e))}if(J(fm,d),J(Nd,u),J(pm,f),J(mm,_),J(hm,M),J(um,m),J(xm,v),J(vm,A),J(_m,I),J(Ud,b),J(Od,x),J(gm,C),Xt(L))if(L.length){const q=n.exposed||(n.exposed={});L.forEach(at=>{Object.defineProperty(q,at,{get:()=>e[at],set:nt=>e[at]=nt,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===Zn&&(n.render=E),P!=null&&(n.inheritAttrs=P),U&&(n.components=U),W&&(n.directives=W),C&&Ld(n)}function bm(n,t,e=Zn){Xt(n)&&(n=ol(n));for(const i in n){const s=n[i];let r;fe(s)?"default"in s?r=pa(s.from||i,s.default,!0):r=pa(s.from||i):r=pa(s),Xe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[i]=r}}function ph(n,t,e){Dn(Xt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Fd(n,t,e,i){let s=i.includes(".")?Pd(e,i):()=>e[i];if(Ae(n)){const r=t[n];Zt(r)&&oo(s,r)}else if(Zt(n))oo(s,n.bind(e));else if(fe(n))if(Xt(n))n.forEach(r=>Fd(r,t,e,i));else{const r=Zt(n.handler)?n.handler.bind(e):t[n.handler];Zt(r)&&oo(s,r,n)}}function Bd(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(t);let l;return o?l=o:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Ca(l,c,a,!0)),Ca(l,t,a)),fe(t)&&r.set(t,l),l}function Ca(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Ca(n,r,e,!0),s&&s.forEach(a=>Ca(n,a,e,!0));for(const a in t)if(!(i&&a==="expose")){const o=Em[a]||e&&e[a];n[a]=o?o(n[a],t[a]):t[a]}return n}const Em={data:mh,props:gh,emits:gh,methods:$s,computed:$s,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:$s,directives:$s,watch:Am,provide:mh,inject:Tm};function mh(n,t){return t?n?function(){return Ye(Zt(n)?n.call(this,this):n,Zt(t)?t.call(this,this):t)}:t:n}function Tm(n,t){return $s(ol(n),ol(t))}function ol(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ke(n,t){return n?[...new Set([].concat(n,t))]:t}function $s(n,t){return n?Ye(Object.create(null),n,t):t}function gh(n,t){return n?Xt(n)&&Xt(t)?[...new Set([...n,...t])]:Ye(Object.create(null),fh(n),fh(t??{})):t}function Am(n,t){if(!n)return t;if(!t)return n;const e=Ye(Object.create(null),n);for(const i in t)e[i]=Ke(n[i],t[i]);return e}function Hd(){return{app:null,config:{isNativeTag:ju,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wm=0;function Cm(n,t){return function(i,s=null){Zt(i)||(i=Ye({},i)),s!=null&&!fe(s)&&(s=null);const r=Hd(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:wm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:cg,get config(){return r.config},set config(h){},use(h,...d){return a.has(h)||(h&&Zt(h.install)?(a.add(h),h.install(c,...d)):Zt(h)&&(a.add(h),h(c,...d))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,d){return d?(r.components[h]=d,c):r.components[h]},directive(h,d){return d?(r.directives[h]=d,c):r.directives[h]},mount(h,d,u){if(!l){const f=c._ceVNode||mi(i,s);return f.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),n(f,h,u),l=!0,c._container=h,h.__vue_app__=c,Mc(f.component)}},onUnmount(h){o.push(h)},unmount(){l&&(Dn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,d){return r.provides[h]=d,c},runWithContext(h){const d=Ds;Ds=c;try{return h()}finally{Ds=d}}};return c}}let Ds=null;const Rm=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${wn(t)}Modifiers`]||n[`${rs(t)}Modifiers`];function Pm(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||_e;let s=e;const r=t.startsWith("update:"),a=r&&Rm(i,t.slice(7));a&&(a.trim&&(s=e.map(h=>Ae(h)?h.trim():h)),a.number&&(s=s.map(mp)));let o,l=i[o=eo(t)]||i[o=eo(wn(t))];!l&&r&&(l=i[o=eo(rs(t))]),l&&Dn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Dn(c,n,6,s)}}const Dm=new WeakMap;function zd(n,t,e=!1){const i=e?Dm:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!Zt(n)){const l=c=>{const h=zd(c,t,!0);h&&(o=!0,Ye(a,h))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(fe(n)&&i.set(n,null),null):(Xt(r)?r.forEach(l=>a[l]=null):Ye(a,r),fe(n)&&i.set(n,a),a)}function qa(n,t){return!n||!Fa(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),le(n,t[0].toLowerCase()+t.slice(1))||le(n,rs(t))||le(n,t))}function _h(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:h,props:d,data:u,setupState:f,ctx:_,inheritAttrs:M}=n,m=Aa(n);let p,b;try{if(e.shapeFlag&4){const x=s||i,E=x;p=kn(c.call(E,x,h,d,f,u,_)),b=o}else{const x=t;p=kn(x.length>1?x(d,{attrs:o,slots:a,emit:l}):x(d,null)),b=t.props?o:Lm(o)}}catch(x){ji.length=0,Wa(x,n,1),p=mi(Mi)}let R=p;if(b&&M!==!1){const x=Object.keys(b),{shapeFlag:E}=R;x.length&&E&7&&(r&&x.some(Ba)&&(b=Im(b,r)),R=Ns(R,b,!1,!0))}if(e.dirs&&(R=Ns(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(e.dirs):e.dirs),e.transition){const x=Xa(R.type)&&Dd(R)||R;_c(x,e.transition)}return p=R,Aa(m),p}const Lm=n=>{let t;for(const e in n)(e==="class"||e==="style"||Fa(e))&&((t||(t={}))[e]=n[e]);return t},Im=(n,t)=>{const e={};for(const i in n)(!Ba(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Nm(n,t,e){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?vh(i,a,c):!!a;if(l&8){const h=t.dynamicProps;for(let d=0;d<h.length;d++){const u=h[d];if(Gd(a,i,u)&&!qa(c,u))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?vh(i,a,c):!0:!!a;return!1}function vh(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Gd(t,n,r)&&!qa(e,r))return!0}return!1}function Gd(n,t,e){const i=n[e],s=t[e];return e==="style"&&fe(i)&&fe(s)?!Va(i,s):i!==s}function Um({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const kd={},Vd=()=>Object.create(kd),Wd=n=>Object.getPrototypeOf(n)===kd;function Om(n,t,e,i=!1){const s={},r=Vd();n.propsDefaults=Object.create(null),Xd(n,t,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);e?n.props=i?s:Vp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Fm(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=oe(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let u=h[d];if(qa(n.emitsOptions,u))continue;const f=t[u];if(l)if(le(r,u))f!==r[u]&&(r[u]=f,c=!0);else{const _=wn(u);s[_]=ll(l,o,_,f,n,!1)}else f!==r[u]&&(r[u]=f,c=!0)}}}else{Xd(n,t,s,r)&&(c=!0);let h;for(const d in o)(!t||!le(t,d)&&((h=rs(d))===d||!le(t,h)))&&(l?e&&(e[d]!==void 0||e[h]!==void 0)&&(s[d]=ll(l,o,d,void 0,n,!0)):delete s[d]);if(r!==o)for(const d in r)(!t||!le(t,d))&&(delete r[d],c=!0)}c&&di(n.attrs,"set","")}function Xd(n,t,e,i){const[s,r]=n.propsOptions;let a=!1,o;if(t)for(let l in t){if(er(l))continue;const c=t[l];let h;s&&le(s,h=wn(l))?!r||!r.includes(h)?e[h]=c:(o||(o={}))[h]=c:qa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=oe(e),c=o||_e;for(let h=0;h<r.length;h++){const d=r[h];e[d]=ll(s,l,d,c[d],n,!le(c,d))}}return a}function ll(n,t,e,i,s,r){const a=n[e];if(a!=null){const o=le(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Zt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const h=Dr(s);i=c[e]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(e,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===rs(e))&&(i=!0))}return i}const Bm=new WeakMap;function Yd(n,t,e=!1){const i=e?Bm:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!Zt(n)){const h=d=>{l=!0;const[u,f]=Yd(d,t,!0);Ye(a,u),f&&o.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return fe(n)&&i.set(n,Ki),Ki;if(Xt(r))for(let h=0;h<r.length;h++){const d=wn(r[h]);xh(d)&&(a[d]=_e)}else if(r)for(const h in r){const d=wn(h);if(xh(d)){const u=r[h],f=a[d]=Xt(u)||Zt(u)?{type:u}:Ye({},u),_=f.type;let M=!1,m=!0;if(Xt(_))for(let p=0;p<_.length;++p){const b=_[p],R=Zt(b)&&b.name;if(R==="Boolean"){M=!0;break}else R==="String"&&(m=!1)}else M=Zt(_)&&_.name==="Boolean";f[0]=M,f[1]=m,(M||le(f,"default"))&&o.push(d)}}const c=[a,o];return fe(n)&&i.set(n,c),c}function xh(n){return n[0]!=="$"&&!er(n)}const xc=n=>n==="_"||n==="_ctx"||n==="$stable",Sc=n=>Xt(n)?n.map(kn):[kn(n)],Hm=(n,t,e)=>{if(t._n)return t;const i=im((...s)=>Sc(t(...s)),e);return i._c=!1,i},qd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(xc(s))continue;const r=n[s];if(Zt(r))t[s]=Hm(s,r,i);else if(r!=null){const a=Sc(r);t[s]=()=>a}}},Kd=(n,t)=>{const e=Sc(t);n.slots.default=()=>e},Zd=(n,t,e)=>{for(const i in t)(e||!xc(i))&&(n[i]=t[i])},zm=(n,t,e)=>{const i=n.slots=Vd();if(n.vnode.shapeFlag&32){const s=t._;s?(Zd(i,t,e),e&&sd(i,"_",s,!0)):qd(t,i)}else t&&Kd(n,t)},Gm=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,a=_e;if(i.shapeFlag&32){const o=t._;o?e&&o===1?r=!1:Zd(s,t,e):(r=!t.$stable,qd(t,s)),a=t}else t&&(Kd(n,t),a={default:1});if(r)for(const o in s)!xc(o)&&a[o]==null&&delete s[o]},sn=Ym;function km(n){return Vm(n)}function Vm(n,t){const e=za();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:h,parentNode:d,nextSibling:u,setScopeId:f=Zn,insertStaticContent:_}=n,M=(T,N,D,G=null,z=null,k=null,$=void 0,ot=null,st=!!N.dynamicChildren)=>{if(T===N)return;T&&!Gs(T,N)&&(G=it(T),wt(T,z,k,!0),T=null),N.patchFlag===-2&&(st=!1,N.dynamicChildren=null),N.dynamicChildren&&T&&T.dynamicChildren&&T.dynamicChildren.hasOnce&&(N.dynamicChildren===Ki&&(N.dynamicChildren=[]),N.dynamicChildren.hasOnce=!0);const{type:Q,ref:pt,shapeFlag:w}=N;switch(Q){case Ka:m(T,N,D,G);break;case Mi:p(T,N,D,G);break;case uo:T==null&&b(N,D,G,$);break;case hi:U(T,N,D,G,z,k,$,ot,st);break;default:w&1?E(T,N,D,G,z,k,$,ot,st):w&6?W(T,N,D,G,z,k,$,ot,st):(w&64||w&128)&&Q.process(T,N,D,G,z,k,$,ot,st,Ht)}pt!=null&&z?sr(pt,T&&T.ref,k,N||T,!N):pt==null&&T&&T.ref!=null&&sr(T.ref,null,k,T,!0)},m=(T,N,D,G)=>{if(T==null)i(N.el=o(N.children),D,G);else{const z=N.el=T.el;N.children!==T.children&&c(z,N.children)}},p=(T,N,D,G)=>{T==null?i(N.el=l(N.children||""),D,G):N.el=T.el},b=(T,N,D,G)=>{[T.el,T.anchor]=_(T.children,N,D,G,T.el,T.anchor)},R=({el:T,anchor:N},D,G)=>{let z;for(;T&&T!==N;)z=u(T),i(T,D,G),T=z;i(N,D,G)},x=({el:T,anchor:N})=>{let D;for(;T&&T!==N;)D=u(T),s(T),T=D;s(N)},E=(T,N,D,G,z,k,$,ot,st)=>{if(N.type==="svg"?$="svg":N.type==="math"&&($="mathml"),T==null)A(N,D,G,z,k,$,ot,st);else{const Q=T.el&&T.el._isVueCE?T.el:null;try{Q&&Q._beginPatch(),C(T,N,z,k,$,ot,st)}finally{Q&&Q._endPatch()}}},A=(T,N,D,G,z,k,$,ot)=>{let st,Q;const{props:pt,shapeFlag:w,transition:xt,dirs:St}=T;if(st=T.el=a(T.type,k,pt&&pt.is,pt),w&8?h(st,T.children):w&16&&v(T.children,st,null,G,z,ho(T,k),$,ot),St&&zi(T,null,G,"created"),I(st,T,T.scopeId,$,G),pt){for(const g in pt)g!=="value"&&!er(g)&&r(st,g,null,pt[g],k,G);"value"in pt&&r(st,"value",null,pt.value,k),(Q=pt.onVnodeBeforeMount)&&Un(Q,G,T)}St&&zi(T,null,G,"beforeMount");const y=Wm(z,xt);y&&xt.beforeEnter(st),i(st,N,D),((Q=pt&&pt.onVnodeMounted)||y||St)&&sn(()=>{try{Q&&Un(Q,G,T),y&&xt.enter(st),St&&zi(T,null,G,"mounted")}finally{}},z)},I=(T,N,D,G,z)=>{if(D&&f(T,D),G)for(let k=0;k<G.length;k++)f(T,G[k]);if(z){let k=z.subTree;if(N===k||jd(k.type)&&(k.ssContent===N||k.ssFallback===N)){const $=z.vnode;I(T,$,$.scopeId,$.slotScopeIds,z.parent)}}},v=(T,N,D,G,z,k,$,ot,st=0)=>{for(let Q=st;Q<T.length;Q++){const pt=T[Q]=ot?ui(T[Q]):kn(T[Q]);M(null,pt,N,D,G,z,k,$,ot)}},C=(T,N,D,G,z,k,$)=>{const ot=N.el=T.el;let{patchFlag:st,dynamicChildren:Q,dirs:pt}=N;st|=T.patchFlag&16;const w=T.props||_e,xt=N.props||_e;let St;if(D&&Gi(D,!1),(St=xt.onVnodeBeforeUpdate)&&Un(St,D,N,T),pt&&zi(N,T,D,"beforeUpdate"),D&&Gi(D,!0),Q&&(!T.dynamicChildren||T.dynamicChildren.length!==Q.length)&&(st=0,$=!1,Q=null),(w.innerHTML&&xt.innerHTML==null||w.textContent&&xt.textContent==null)&&h(ot,""),Q?L(T.dynamicChildren,Q,ot,D,G,ho(N,z),k):$||at(T,N,ot,null,D,G,ho(N,z),k,!1),st>0){if(st&16)P(ot,w,xt,D,z);else if(st&2&&w.class!==xt.class&&r(ot,"class",null,xt.class,z),st&4&&r(ot,"style",w.style,xt.style,z),st&8){const y=N.dynamicProps;for(let g=0;g<y.length;g++){const B=y[g],X=w[B],j=xt[B];(j!==X||B==="value")&&r(ot,B,X,j,z,D)}}st&1&&T.children!==N.children&&h(ot,N.children)}else!$&&Q==null&&P(ot,w,xt,D,z);((St=xt.onVnodeUpdated)||pt)&&sn(()=>{St&&Un(St,D,N,T),pt&&zi(N,T,D,"updated")},G)},L=(T,N,D,G,z,k,$)=>{for(let ot=0;ot<N.length;ot++){const st=T[ot],Q=N[ot],pt=st.el&&(st.type===hi||!Gs(st,Q)||st.shapeFlag&198)?d(st.el):D;M(st,Q,pt,null,G,z,k,$,!0)}},P=(T,N,D,G,z)=>{if(N!==D){if(N!==_e)for(const k in N)!er(k)&&!(k in D)&&r(T,k,N[k],null,z,G);for(const k in D){if(er(k))continue;const $=D[k],ot=N[k];$!==ot&&k!=="value"&&r(T,k,ot,$,z,G)}"value"in D&&r(T,"value",N.value,D.value,z)}},U=(T,N,D,G,z,k,$,ot,st)=>{const Q=N.el=T?T.el:o(""),pt=N.anchor=T?T.anchor:o("");let{patchFlag:w,dynamicChildren:xt,slotScopeIds:St}=N;St&&(ot=ot?ot.concat(St):St),T==null?(i(Q,D,G),i(pt,D,G),v(N.children||[],D,pt,z,k,$,ot,st)):w>0&&w&64&&xt&&T.dynamicChildren&&T.dynamicChildren.length===xt.length?(L(T.dynamicChildren,xt,D,z,k,$,ot),(N.key!=null||z&&N===z.subTree)&&$d(T,N,!0)):at(T,N,D,pt,z,k,$,ot,st)},W=(T,N,D,G,z,k,$,ot,st)=>{N.slotScopeIds=ot,T==null?N.shapeFlag&512?z.ctx.activate(N,D,G,$,st):F(N,D,G,z,k,$,st):Y(T,N,st)},F=(T,N,D,G,z,k,$)=>{const ot=T.component=eg(T,G,z);if(vc(T)&&(ot.ctx.renderer=Ht),ig(ot,!1,$),ot.asyncDep){if(z&&z.registerDep(ot,J,$),!T.el){const st=ot.subTree=mi(Mi);p(null,st,N,D),T.placeholder=st.el}}else J(ot,T,N,D,z,k,$)},Y=(T,N,D)=>{const G=N.component=T.component;if(Nm(T,N,D))if(G.asyncDep&&!G.asyncResolved){N.el=T.el,q(G,N,D);return}else G.next=N,G.update();else N.el=T.el,G.vnode=N},J=(T,N,D,G,z,k,$)=>{const ot=()=>{if(T.isMounted){let{next:w,bu:xt,u:St,parent:y,vnode:g}=T;{const mt=Jd(T);if(mt){w&&(w.el=g.el,q(T,w,$)),mt.asyncDep.then(()=>{sn(()=>{T.isUnmounted||Q()},z)});return}}let B=w,X;Gi(T,!1),w?(w.el=g.el,q(T,w,$)):w=g,xt&&no(xt),(X=w.props&&w.props.onVnodeBeforeUpdate)&&Un(X,y,w,g),Gi(T,!0);const j=_h(T),ft=T.subTree;T.subTree=j,M(ft,j,d(ft.el),it(ft),T,z,k),w.el=j.el,B===null&&Um(T,j.el),St&&sn(St,z),(X=w.props&&w.props.onVnodeUpdated)&&sn(()=>Un(X,y,w,g),z)}else{let w;const{el:xt,props:St}=N,{bm:y,m:g,parent:B,root:X,type:j}=T,ft=rr(N);Gi(T,!1),y&&no(y),!ft&&(w=St&&St.onVnodeBeforeMount)&&Un(w,B,N),Gi(T,!0);{X.ce&&X.ce._hasShadowRoot()&&X.ce._injectChildStyle(j,T.parent?T.parent.type:void 0);const mt=T.subTree=_h(T);M(null,mt,D,G,T,z,k),N.el=mt.el}if(g&&sn(g,z),!ft&&(w=St&&St.onVnodeMounted)){const mt=N;sn(()=>Un(w,B,mt),z)}(N.shapeFlag&256||B&&rr(B.vnode)&&B.vnode.shapeFlag&256)&&T.a&&sn(T.a,z),T.isMounted=!0,N=D=G=null}};T.scope.on();const st=T.effect=new cd(ot);T.scope.off();const Q=T.update=st.run.bind(st),pt=T.job=st.runIfDirty.bind(st);pt.i=T,pt.id=T.uid,st.scheduler=()=>gc(pt),Gi(T,!0),Q()},q=(T,N,D)=>{N.component=T;const G=T.vnode.props;T.vnode=N,T.next=null,Fm(T,N.props,G,D),Gm(T,N.children,D),vi(),hh(T),xi()},at=(T,N,D,G,z,k,$,ot,st=!1)=>{const Q=T&&T.children,pt=T?T.shapeFlag:0,w=N.children,{patchFlag:xt,shapeFlag:St}=N;if(xt>0){if(xt&128){ct(Q,w,D,G,z,k,$,ot,st);return}else if(xt&256){nt(Q,w,D,G,z,k,$,ot,st);return}}St&8?(pt&16&&qt(Q,z,k),w!==Q&&h(D,w)):pt&16?St&16?ct(Q,w,D,G,z,k,$,ot,st):qt(Q,z,k,!0):(pt&8&&h(D,""),St&16&&v(w,D,G,z,k,$,ot,st))},nt=(T,N,D,G,z,k,$,ot,st)=>{T=T||Ki,N=N||Ki;const Q=T.length,pt=N.length,w=Math.min(Q,pt);let xt;for(xt=0;xt<w;xt++){const St=N[xt]=st?ui(N[xt]):kn(N[xt]);M(T[xt],St,D,null,z,k,$,ot,st)}Q>pt?qt(T,z,k,!0,!1,w):v(N,D,G,z,k,$,ot,st,w)},ct=(T,N,D,G,z,k,$,ot,st)=>{let Q=0;const pt=N.length;let w=T.length-1,xt=pt-1;for(;Q<=w&&Q<=xt;){const St=T[Q],y=N[Q]=st?ui(N[Q]):kn(N[Q]);if(Gs(St,y))M(St,y,D,null,z,k,$,ot,st);else break;Q++}for(;Q<=w&&Q<=xt;){const St=T[w],y=N[xt]=st?ui(N[xt]):kn(N[xt]);if(Gs(St,y))M(St,y,D,null,z,k,$,ot,st);else break;w--,xt--}if(Q>w){if(Q<=xt){const St=xt+1,y=St<pt?N[St].el:G;for(;Q<=xt;)M(null,N[Q]=st?ui(N[Q]):kn(N[Q]),D,y,z,k,$,ot,st),Q++}}else if(Q>xt)for(;Q<=w;)wt(T[Q],z,k,!0),Q++;else{const St=Q,y=Q,g=new Map;for(Q=y;Q<=xt;Q++){const _t=N[Q]=st?ui(N[Q]):kn(N[Q]);_t.key!=null&&g.set(_t.key,Q)}let B,X=0;const j=xt-y+1;let ft=!1,mt=0;const rt=new Array(j);for(Q=0;Q<j;Q++)rt[Q]=0;for(Q=St;Q<=w;Q++){const _t=T[Q];if(X>=j){wt(_t,z,k,!0);continue}let Lt;if(_t.key!=null)Lt=g.get(_t.key);else for(B=y;B<=xt;B++)if(rt[B-y]===0&&Gs(_t,N[B])){Lt=B;break}Lt===void 0?wt(_t,z,k,!0):(rt[Lt-y]=Q+1,Lt>=mt?mt=Lt:ft=!0,M(_t,N[Lt],D,null,z,k,$,ot,st),X++)}const ht=ft?Xm(rt):Ki;for(B=ht.length-1,Q=j-1;Q>=0;Q--){const _t=y+Q,Lt=N[_t],yt=N[_t+1],Mt=_t+1<pt?yt.el||Qd(yt):G;rt[Q]===0?M(null,Lt,D,Mt,z,k,$,ot,st):ft&&(B<0||Q!==ht[B]?lt(Lt,D,Mt,2):B--)}}},lt=(T,N,D,G,z=null)=>{const{el:k,type:$,transition:ot,children:st,shapeFlag:Q}=T;if(Q&6){lt(T.component.subTree,N,D,G);return}if(Q&128){T.suspense.move(N,D,G);return}if(Q&64){$.move(T,N,D,Ht);return}if($===hi){i(k,N,D);for(let w=0;w<st.length;w++)lt(st[w],N,D,G);i(T.anchor,N,D);return}if($===uo){R(T,N,D);return}if(G!==2&&Q&1&&ot)if(G===0)ot.persisted&&!k[lo]?i(k,N,D):(ot.beforeEnter(k),i(k,N,D),sn(()=>ot.enter(k),z));else{const{leave:w,delayLeave:xt,afterLeave:St}=ot,y=()=>{T.ctx.isUnmounted?s(k):i(k,N,D)},g=()=>{const B=k._isLeaving||!!k[lo];k._isLeaving&&k[lo](!0),ot.persisted&&!B?y():w(k,()=>{y(),St&&St()})};xt?xt(k,y,g):g()}else i(k,N,D)},wt=(T,N,D,G=!1,z=!1)=>{const{type:k,props:$,ref:ot,children:st,dynamicChildren:Q,shapeFlag:pt,patchFlag:w,dirs:xt,cacheIndex:St,memo:y}=T;if((w===-2||Q&&Q.hasOnce)&&(z=!1),ot!=null&&(vi(),sr(ot,null,D,T,!0),xi()),St!=null&&(!T.ctx||T.ctx===N)&&(N.renderCache[St]=void 0),pt&256){N.ctx.deactivate(T);return}const g=pt&1&&xt,B=!rr(T);let X;if(B&&(X=$&&$.onVnodeBeforeUnmount)&&Un(X,N,T),pt&6)Yt(T.component,D,G);else{if(pt&128){T.suspense.unmount(D,G);return}g&&zi(T,null,N,"beforeUnmount"),pt&64?T.type.remove(T,N,D,Ht,G):Q&&!Q.hasOnce&&(k!==hi||w>0&&w&64)?qt(Q,N,D,!1,!0):(k===hi&&w&384||!z&&pt&16)&&qt(st,N,D),G&&Dt(T)}const j=y!=null&&St==null;(B&&(X=$&&$.onVnodeUnmounted)||g||j)&&sn(()=>{X&&Un(X,N,T),g&&zi(T,null,N,"unmounted"),j&&(T.el=null)},D)},Dt=T=>{const{type:N,el:D,anchor:G,transition:z}=T;if(N===hi){te(D,G);return}if(N===uo){x(T),z&&!z.persisted&&z.afterLeave&&z.afterLeave();return}const k=()=>{s(D),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(T.shapeFlag&1&&z&&!z.persisted){const{leave:$,delayLeave:ot}=z,st=()=>$(D,k);ot?ot(T.el,k,st):st()}else k()},te=(T,N)=>{let D;for(;T!==N;)D=u(T),s(T),T=D;s(N)},Yt=(T,N,D)=>{const{bum:G,scope:z,job:k,subTree:$,um:ot,m:st,a:Q}=T;Sh(st),Sh(Q),G&&no(G),z.stop(),k?(k.flags|=8,wt($,T,N,D)):T.vnode.el&&$&&($.transition=T.vnode.transition,wt($,T,N,D)),ot&&sn(ot,N),sn(()=>{T.isUnmounted=!0},N)},qt=(T,N,D,G=!1,z=!1,k=0)=>{for(let $=k;$<T.length;$++)wt(T[$],N,D,G,z)},it=T=>{if(T.shapeFlag&6)return it(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const N=u(T.anchor||T.el),D=N&&N[lm];return D?u(D):N};let tt=!1;const vt=(T,N,D)=>{let G;T==null?N._vnode&&(wt(N._vnode,null,null,!0),G=N._vnode.component):M(N._vnode||null,T,N,null,null,null,D),N._vnode=T,tt||(tt=!0,hh(G),Ad(),tt=!1)},Ht={p:M,um:wt,m:lt,r:Dt,mt:F,mc:v,pc:at,pbc:L,n:it,o:n};return{render:vt,hydrate:void 0,createApp:Cm(vt)}}function ho({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Gi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Wm(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function $d(n,t,e=!1){const i=n.children,s=t.children;if(Xt(i)&&Xt(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=ui(s[r]),o.el=a.el),!e&&o.patchFlag!==-2&&$d(a,o)),o.type===Ka&&(o.patchFlag===-1&&(o=s[r]=ui(o)),o.el=a.el),o.type===Mi&&!o.el&&(o.el=a.el)}}function Xm(n){const t=n.slice(),e=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,a=e.length-1;r<a;)o=r+a>>1,n[e[o]]<c?r=o+1:a=o;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,a=e[r-1];r-- >0;)e[r]=a,a=t[a];return e}function Jd(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Jd(t)}function Sh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Qd(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Qd(t.subTree):null}const jd=n=>n.__isSuspense;function Ym(n,t){t&&t.pendingBranch?Xt(n)?t.effects.push(...n):t.effects.push(n):nm(n)}const hi=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),Mi=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),ji=[];let pn=null;function cl(n=!1){ji.push(pn=n?null:[])}function tf(){ji.pop(),pn=ji[ji.length-1]||null}let gr=1;function Mh(n,t=!1){gr+=n,n<0&&pn&&t&&(pn.hasOnce=!0)}function ef(n){return n.dynamicChildren=gr>0?pn||Ki:null,tf(),gr>0&&pn&&pn.push(n),n}function yh(n,t,e,i,s,r){return ef(Te(n,t,e,i,s,r,!0))}function qm(n,t,e,i,s){return ef(mi(n,t,e,i,s,!0))}function nf(n){return n?n.__v_isVNode===!0:!1}function Gs(n,t){return n.type===t.type&&n.key===t.key}const sf=({key:n})=>n??null,ma=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ae(n)||Xe(n)||Zt(n)?{i:Xn,r:n,k:t,f:!!e}:n:null);function Te(n,t=null,e=null,i=0,s=null,r=n===hi?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&sf(t),ref:t&&ma(t),scopeId:Cd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xn};return o?(Ra(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ae(e)?8:16),gr>0&&!a&&pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pn.push(l),l}const mi=Km;function Km(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Sm)&&(n=Mi),nf(n)){const o=Ns(n,t,!0);return e&&Ra(o,e),gr>0&&!r&&pn&&(o.shapeFlag&6?pn[pn.indexOf(n)]=o:pn.push(o)),o.patchFlag=-2,o}if(og(n)&&(n=n.__vccOpts),t){t=Zm(t);let{class:o,style:l}=t;o&&!Ae(o)&&(t.class=ka(o)),fe(l)&&(mc(l)&&!Xt(l)&&(l=Ye({},l)),t.style=Ga(l))}const a=Ae(n)?1:jd(n)?128:Xa(n)?64:fe(n)?4:Zt(n)?2:0;return Te(n,t,e,i,s,a,r,!0)}function Zm(n){return n?mc(n)||Wd(n)?Ye({},n):n:null}function Ns(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=t?Qm(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&sf(c),ref:t&&t.ref?e&&r?Xt(r)?r.concat(ma(t)):[r,ma(t)]:ma(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==hi?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ns(n.ssContent),ssFallback:n.ssFallback&&Ns(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&_c(h,l.clone(h)),h}function $m(n=" ",t=0){return mi(Ka,null,n,t)}function Jm(n="",t=!1){return t?(cl(),qm(Mi,null,n)):mi(Mi,null,n)}function kn(n){return n==null||typeof n=="boolean"?mi(Mi):Xt(n)?mi(hi,null,n.slice()):nf(n)?ui(n):mi(Ka,null,String(n))}function ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ns(n)}function Ra(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Xt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Ra(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Wd(t)?t._ctx=Xn:s===3&&Xn&&(Xn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Zt(t)){if(i&65){Ra(n,{default:t});return}t={default:t,_ctx:Xn},e=32}else t=String(t),i&64?(e=16,t=[$m(t)]):e=8;n.children=t,n.shapeFlag|=e}function Qm(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ka([t.class,i.class]));else if(s==="style")t.style=Ga([t.style,i.style]);else if(Fa(s)){const r=t[s],a=i[s];a&&r!==a&&!(Xt(r)&&r.includes(a))?t[s]=r?[].concat(r,a):a:a==null&&r==null&&!Ba(s)&&(t[s]=a)}else s!==""&&(t[s]=i[s])}return t}function Un(n,t,e,i=null){Dn(n,t,7,[e,i])}const jm=Hd();let tg=0;function eg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||jm,r={uid:tg++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ep(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yd(i,s),emitsOptions:zd(i,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:i.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Pm.bind(null,r),n.ce&&n.ce(r),r}let tn=null;const ng=()=>tn||Xn;let Pa,_r;{const n=za(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};Pa=t("__VUE_INSTANCE_SETTERS__",e=>tn=e),_r=t("__VUE_SSR_SETTERS__",e=>vr=e)}const Dr=n=>{const t=tn;return Pa(n),n.scope.on(),()=>{n.scope.off(),Pa(t)}},bh=()=>{tn&&tn.scope.off(),Pa(null)};function rf(n){return n.vnode.shapeFlag&4}let vr=!1;function ig(n,t=!1,e=!1){t&&_r(t);const{props:i,children:s}=n.vnode,r=rf(n);Om(n,i,r,t),zm(n,s,e||t);const a=r?sg(n,t):void 0;return t&&_r(!1),a}function sg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Mm);const{setup:i}=e;if(i){vi();const s=n.setupContext=i.length>1?ag(n):null,r=Dr(n),a=Pr(i,n,0,[n.props,s]),o=td(a);if(xi(),r(),(o||n.sp)&&!rr(n)&&Ld(n),o){if(a.then(bh,bh),t)return a.then(l=>{_r(!0);try{Eh(n,l,t)}finally{_r(!1)}}).catch(l=>{Wa(l,n,0)});n.asyncDep=a}else Eh(n,a)}else af(n)}function Eh(n,t,e){Zt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:fe(t)&&(n.setupState=bd(t)),af(n)}function af(n,t,e){const i=n.type;n.render||(n.render=i.render||Zn);{const s=Dr(n);vi();try{ym(n)}finally{xi(),s()}}}const rg={get(n,t){return ke(n,"get",""),n[t]}};function ag(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,rg),slots:n.slots,emit:n.emit,expose:t}}function Mc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bd(Wp(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in ar)return ar[e](n)},has(t,e){return e in t||e in ar}})):n.proxy}function og(n){return Zt(n)&&"__vccOpts"in n}const lg=(n,t)=>$p(n,t,vr),cg="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hl;const Th=typeof window<"u"&&window.trustedTypes;if(Th)try{hl=Th.createPolicy("vue",{createHTML:n=>n})}catch{}const of=hl?n=>hl.createHTML(n):n=>n,hg="http://www.w3.org/2000/svg",ug="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,Ah=ci&&ci.createElement("template"),dg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ci.createElementNS(hg,n):t==="mathml"?ci.createElementNS(ug,n):e?ci.createElement(n,{is:e}):ci.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ci.createTextNode(n),createComment:n=>ci.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ci.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const a=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Ah.innerHTML=of(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Ah.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},fg=Symbol("_vtc");function pg(n,t,e){const i=n[fg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const wh=Symbol("_vod"),mg=Symbol("_vsh"),gg=Symbol(""),_g=/(?:^|;)\s*display\s*:/;function vg(n,t,e){const i=n.style,s=Ae(e);let r=!1;if(e&&!s){if(t)if(Ae(t))for(const a of t.split(";")){const o=a.slice(0,a.indexOf(":")).trim();e[o]==null&&Js(i,o,"")}else for(const a in t)e[a]==null&&Js(i,a,"");for(const a in e){a==="display"&&(r=!0);const o=e[a];o!=null?Sg(n,a,!Ae(t)&&t?t[a]:void 0,o)||Js(i,a,o):Js(i,a,"")}}else if(s){if(t!==e){const a=i[gg];a&&(e+=";"+a),i.cssText=e,r=_g.test(e)}}else t&&n.removeAttribute("style");wh in n&&(n[wh]=r?i.display:"",n[mg]&&(i.display="none"))}const Hr=/\s*!important$/;function Js(n,t,e){if(Xt(e))e.forEach(i=>Js(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))Hr.test(e)?n.setProperty(t,e.replace(Hr,""),"important"):n.setProperty(t,e);else{const i=xg(n,t);Hr.test(e)?n.setProperty(rs(i),e.replace(Hr,""),"important"):n[i]=e}}const Ch=["Webkit","Moz","ms"],fo={};function xg(n,t){const e=fo[t];if(e)return e;let i=wn(t);if(i!=="filter"&&i in n)return fo[t]=i;i=id(i);for(let s=0;s<Ch.length;s++){const r=Ch[s]+i;if(r in n)return fo[t]=r}return t}function Sg(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ae(i)&&e===i}const Rh="http://www.w3.org/1999/xlink";function Ph(n,t,e,i,s,r=Mp(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Rh,t.slice(6,t.length)):n.setAttributeNS(Rh,t,e):e==null||r&&!rd(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Qn(e)?String(e):e)}function Dh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?of(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(o!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let a=!1;if(e===""||e==null){const o=typeof n[t];o==="boolean"?e=rd(e):e==null&&o==="string"?(e="",a=!0):o==="number"&&(e=0,a=!0)}try{n[t]=e}catch{}a&&n.removeAttribute(s||t)}function Mg(n,t,e,i){n.addEventListener(t,e,i)}function yg(n,t,e,i){n.removeEventListener(t,e,i)}const Lh=Symbol("_vei");function bg(n,t,e,i,s=null){const r=n[Lh]||(n[Lh]={}),a=r[t];if(i&&a)a.value=i;else{const[o,l]=Ag(t);if(i){const c=r[t]=Rg(i,s);Mg(n,o,c,l)}else a&&(yg(n,o,a,l),r[t]=void 0)}}const Eg=/(Once|Passive|Capture)$/,Tg=/^on:?(?:Once|Passive|Capture)$/;function Ag(n){let t,e;for(;(e=n.match(Eg))&&!Tg.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):rs(n.slice(2)),t]}let po=0;const wg=Promise.resolve(),Cg=()=>po||(wg.then(()=>po=0),po=Date.now());function Rg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Xt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const a=s.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&Dn(c,t,5,o)}}else Dn(s,t,5,[i])};return e.value=n,e.attached=Cg(),e}const Ih=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Pg=(n,t,e,i,s,r)=>{const a=s==="svg";t==="class"?pg(n,i,a):t==="style"?vg(n,e,i):Fa(t)?Ba(t)||bg(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Dg(n,t,i,a))?(Dh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ph(n,t,i,a,r,t!=="value")):n._isVueCE&&(Lg(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ae(i)))?Dh(n,wn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Ph(n,t,i,a))};function Dg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Ih(t)&&Zt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ih(t)&&Ae(e)?!1:t in n}function Lg(n,t){const e=n._def.props;if(!e)return!1;const i=wn(t);return Array.isArray(e)?e.some(s=>wn(s)===i):Object.keys(e).some(s=>wn(s)===i)}const Ig=["ctrl","shift","alt","meta"],Ng={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>Ig.some(e=>n[`${e}Key`]&&!t.includes(e))},Ug=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=((s,...r)=>{for(let a=0;a<t.length;a++){const o=Ng[t[a]];if(o&&o(s,t))return}return n(s,...r)}))},Og=Ye({patchProp:Pg},dg);let Nh;function Fg(){return Nh||(Nh=km(Og))}const Bg=((...n)=>{const t=Fg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=zg(i);if(!s)return;const r=t._component;!Zt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=e(s,!1,Hg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function Hg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function zg(n){return Ae(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="186",Yn={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gg=0,Uh=1,kg=2,ga=1,Vg=2,Qs=3,es=0,an=1,Ve=2,gi=0,or=1,Oh=2,Fh=3,ul=4,Wg=5,As=100,Xg=101,Yg=102,qg=103,Kg=104,Zg=200,$g=201,Jg=202,Qg=203,lf=204,cf=205,jg=206,t_=207,e_=208,n_=209,i_=210,s_=211,r_=212,a_=213,o_=214,dl=0,fl=1,pl=2,xr=3,ml=4,gl=5,_l=6,vl=7,hf=0,l_=1,c_=2,$n=0,uf=1,df=2,ff=3,pf=4,mf=5,gf=6,_f=7,vf=300,ns=301,Us=302,mo=303,go=304,Za=306,xl=1e3,fi=1001,Sl=1002,Ue=1003,h_=1004,zr=1005,We=1006,_o=1007,Zi=1008,dn=1009,xf=1010,Sf=1011,Sr=1012,bc=1013,ti=1014,qn=1015,ei=1016,Ec=1017,Tc=1018,Mr=1020,Mf=35902,yf=35899,bf=1021,Ef=1022,An=1023,yi=1026,$i=1027,Tf=1028,Ac=1029,is=1030,wc=1031,Cc=1033,_a=33776,va=33777,xa=33778,Sa=33779,Ml=35840,yl=35841,bl=35842,El=35843,Tl=36196,Al=37492,wl=37496,Cl=37488,Rl=37489,Da=37490,Pl=37491,Dl=37808,Ll=37809,Il=37810,Nl=37811,Ul=37812,Ol=37813,Fl=37814,Bl=37815,Hl=37816,zl=37817,Gl=37818,kl=37819,Vl=37820,Wl=37821,Xl=36492,Yl=36494,ql=36495,Kl=36283,Zl=36284,La=36285,$l=36286,u_=3200,Jl=0,d_=1,Ui="",Re="srgb",Ia="srgb-linear",Na="linear",ce="srgb",vo=7680,f_=519,p_=512,m_=513,g_=514,Rc=515,__=516,v_=517,Pc=518,x_=519,S_=35044,Bh="300 es",Kn=2e3,yr=2001;function M_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function y_(){const n=br("canvas");return n.style.display="block",n}const Hh={};function zh(...n){const t="THREE."+n.shift();console.log(t,...n)}function Af(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Vt(...n){n=Af(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ie(...n){n=Af(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ls(...n){const t=n.join(" ");t in Hh||(Hh[t]=!0,Vt(...n))}function b_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const E_={[dl]:fl,[pl]:_l,[ml]:vl,[xr]:gl,[fl]:dl,[_l]:pl,[vl]:ml,[gl]:xr};class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const lr=Math.PI/180,Er=180/Math.PI;function as(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Qt(n,t,e){return Math.max(t,Math.min(e,n))}function Dc(n,t){return(n%t+t)%t}function T_(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function A_(n,t,e){return n!==t?(e-n)/(t-n):0}function cr(n,t,e){return(1-e)*n+e*t}function w_(n,t,e,i){return cr(n,t,1-Math.exp(-e*i))}function C_(n,t=1){return t-Math.abs(Dc(n,t*2)-t)}function R_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function P_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function D_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function L_(n,t){return n+Math.random()*(t-n)}function I_(n){return n*(.5-Math.random())}function N_(n){n!==void 0&&(Gh=n);let t=Gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function U_(n){return n*lr}function O_(n){return n*Er}function F_(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function B_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function H_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function z_(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*_,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*_,o*c);break;case"ZYZ":n.set(l*_,l*f,o*h,o*c);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ws(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ze(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const be={DEG2RAD:lr,RAD2DEG:Er,generateUUID:as,clamp:Qt,euclideanModulo:Dc,mapLinear:T_,inverseLerp:A_,lerp:cr,damp:w_,pingpong:C_,smoothstep:R_,smootherstep:P_,randInt:D_,randFloat:L_,randFloatSpread:I_,seededRandom:N_,degToRad:U_,radToDeg:O_,isPowerOfTwo:F_,ceilPowerOfTwo:B_,floorPowerOfTwo:H_,setQuaternionFromProperEuler:z_,normalize:Ze,denormalize:ws},Vc=class Vc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vc.prototype.isVector2=!0;let gt=Vc;class _n{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],_=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==f||h!==_){let m=l*u+c*f+h*_+d*M;m<0&&(u=-u,f=-f,_=-_,M=-M,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),R=Math.sin(b);p=Math.sin(p*b)/R,o=Math.sin(o*b)/R,l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+M*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+_*o,d=d*p+M*o;const b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-o*f,t[e+2]=c*_+h*f+o*u-l*d,t[e+3]=h*_-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wc=class Wc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xo.copy(this).projectOnVector(t),this.sub(xo)}reflect(t){return this.sub(xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wc.prototype.isVector3=!0;let O=Wc;const xo=new O,kh=new _n,Xc=class Xc{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],_=i[8],M=s[0],m=s[3],p=s[6],b=s[1],R=s[4],x=s[7],E=s[2],A=s[5],I=s[8];return r[0]=a*M+o*b+l*E,r[3]=a*m+o*R+l*A,r[6]=a*p+o*x+l*I,r[1]=c*M+h*b+d*E,r[4]=c*m+h*R+d*A,r[7]=c*p+h*x+d*I,r[2]=u*M+f*b+_*E,r[5]=u*m+f*R+_*A,r[8]=u*p+f*x+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,_=e*d+i*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=d*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*a)*M,t[3]=u*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(i*l-c*e)*M,t[8]=(a*e-i*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(So.makeScale(t,e)),this}rotate(t){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(So.makeRotation(-t)),this}translate(t,e){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xc.prototype.isMatrix3=!0;let Wt=Xc;const So=new Wt,Vh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function G_(){const n={enabled:!0,workingColorSpace:Ia,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?Na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ia]:{primaries:t,whitePoint:i,transfer:Na,toXYZ:Vh,fromXYZ:Wh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:i,transfer:ce,toXYZ:Vh,fromXYZ:Wh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),n}const ee=G_();function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hs;class k_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hs===void 0&&(hs=br("canvas")),hs.width=t.width,hs.height=t.height;const s=hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=hs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_i(e[i]/255)*255):e[i]=_i(e[i]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let V_=0;class Lc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=as(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mo(s[a].image)):r.push(Mo(s[a]))}else r=Mo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?k_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let W_=0;const yo=new O;class Oe extends Bi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=fi,s=fi,r=We,a=Zi,o=An,l=dn,c=Oe.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=as(),this.name="",this.source=new Lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yo).x}get height(){return this.source.getSize(yo).y}get depth(){return this.source.getSize(yo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xl:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xl:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=vf;Oe.DEFAULT_ANISOTROPY=1;const Yc=class Yc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(c+1)/2,x=(f+1)/2,E=(p+1)/2,A=(h+u)/4,I=(d+M)/4,v=(_+m)/4;return R>x&&R>E?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=A/i,r=I/i):x>E?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=A/s,r=v/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=I/r,s=v/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(d-M)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yc.prototype.isVector4=!0;let Me=Yc;class X_ extends Bi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Oe(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Lc(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends X_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class wf extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y_ extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Oa=class Oa{constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,_,M,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,_,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,_=o*h,M=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-M*c,e[9]=-o*l,e[2]=M-u*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,_=c*h,M=c*d;e[0]=u+M*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=M+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,_=c*h,M=c*d;e[0]=u-M*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=M-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,_=o*h,M=o*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+M,e[1]=l*d,e[5]=M*c+u,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,_=o*l,M=o*c;e[0]=l*h,e[4]=M-u*d,e[8]=_*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-M*d}else if(t.order==="XZY"){const u=a*l,f=a*c,_=o*l,M=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+M,e[5]=a*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*h,e[10]=M*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(q_,t,K_)}lookAt(t,e,i){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Ci.crossVectors(i,on),Ci.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ci.crossVectors(i,on)),Ci.normalize(),Gr.crossVectors(on,Ci),s[0]=Ci.x,s[4]=Gr.x,s[8]=on.x,s[1]=Ci.y,s[5]=Gr.y,s[9]=on.y,s[2]=Ci.z,s[6]=Gr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],_=i[2],M=i[6],m=i[10],p=i[14],b=i[3],R=i[7],x=i[11],E=i[15],A=s[0],I=s[4],v=s[8],C=s[12],L=s[1],P=s[5],U=s[9],W=s[13],F=s[2],Y=s[6],J=s[10],q=s[14],at=s[3],nt=s[7],ct=s[11],lt=s[15];return r[0]=a*A+o*L+l*F+c*at,r[4]=a*I+o*P+l*Y+c*nt,r[8]=a*v+o*U+l*J+c*ct,r[12]=a*C+o*W+l*q+c*lt,r[1]=h*A+d*L+u*F+f*at,r[5]=h*I+d*P+u*Y+f*nt,r[9]=h*v+d*U+u*J+f*ct,r[13]=h*C+d*W+u*q+f*lt,r[2]=_*A+M*L+m*F+p*at,r[6]=_*I+M*P+m*Y+p*nt,r[10]=_*v+M*U+m*J+p*ct,r[14]=_*C+M*W+m*q+p*lt,r[3]=b*A+R*L+x*F+E*at,r[7]=b*I+R*P+x*Y+E*nt,r[11]=b*v+R*U+x*J+E*ct,r[15]=b*C+R*W+x*q+E*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],M=t[7],m=t[11],p=t[15],b=l*f-c*u,R=o*f-c*d,x=o*u-l*d,E=a*f-c*h,A=a*u-l*h,I=a*d-o*h;return e*(M*b-m*R+p*x)-i*(_*b-m*E+p*A)+s*(_*R-M*E+p*I)-r*(_*x-M*A+m*I)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],M=t[13],m=t[14],p=t[15],b=e*o-i*a,R=e*l-s*a,x=e*c-r*a,E=i*l-s*o,A=i*c-r*o,I=s*c-r*l,v=h*M-d*_,C=h*m-u*_,L=h*p-f*_,P=d*m-u*M,U=d*p-f*M,W=u*p-f*m,F=b*W-R*U+x*P+E*L-A*C+I*v;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/F;return t[0]=(o*W-l*U+c*P)*Y,t[1]=(s*U-i*W-r*P)*Y,t[2]=(M*I-m*A+p*E)*Y,t[3]=(u*A-d*I-f*E)*Y,t[4]=(l*L-a*W-c*C)*Y,t[5]=(e*W-s*L+r*C)*Y,t[6]=(m*x-_*I-p*R)*Y,t[7]=(h*I-u*x+f*R)*Y,t[8]=(a*U-o*L+c*v)*Y,t[9]=(i*L-e*U-r*v)*Y,t[10]=(_*A-M*x+p*b)*Y,t[11]=(d*x-h*A-f*b)*Y,t[12]=(o*C-a*P-l*v)*Y,t[13]=(e*P-i*C+s*v)*Y,t[14]=(M*R-_*E-m*b)*Y,t[15]=(h*E-d*R+u*b)*Y,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,_=r*d,M=a*h,m=a*d,p=o*d,b=l*c,R=l*h,x=l*d,E=i.x,A=i.y,I=i.z;return s[0]=(1-(M+p))*E,s[1]=(f+x)*E,s[2]=(_-R)*E,s[3]=0,s[4]=(f-x)*A,s[5]=(1-(u+p))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(_+R)*I,s[9]=(m-b)*I,s[10]=(1-(u+M))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=us.set(s[0],s[1],s[2]).length();const o=us.set(s[4],s[5],s[6]).length(),l=us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);const c=1/a,h=1/o,d=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Kn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let _,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===Kn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===yr)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Kn,l=!1){const c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s);let _,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===Kn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===yr)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Oa.prototype.isMatrix4=!0;let Se=Oa;const us=new O,Sn=new Se,q_=new O(0,0,0),K_=new O(1,1,1),Ci=new O,Gr=new O,on=new O,Xh=new Se,Yh=new _n;class fn{constructor(t=0,e=0,i=0,s=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Z_=0;const qh=new O,ds=new _n,si=new Se,kr=new O,ks=new O,$_=new O,J_=new _n,Kh=new O(1,0,0),Zh=new O(0,1,0),$h=new O(0,0,1),Jh={type:"added"},Q_={type:"removed"},fs={type:"childadded",child:null},bo={type:"childremoved",child:null};class en extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new O,e=new fn,i=new _n,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Wt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,e){return ds.setFromAxisAngle(t,e),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Kh,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return qh.copy(t).applyQuaternion(this.quaternion),this.position.add(qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kh,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?kr.copy(t):kr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ks,kr,this.up):si.lookAt(kr,ks,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(si),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jh),fs.child=t,this.dispatchEvent(fs),fs.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Q_),bo.child=t,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,$_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,J_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}en.DEFAULT_UP=new O(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hn extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j_={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new hn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Vr={h:0,s:0,l:0};function To(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class ne{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ee.workingColorSpace){if(t=Dc(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=To(a,r,t+1/3),this.g=To(a,r,t),this.b=To(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function i(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const i=Cf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Is(t.r),this.g=Is(t.g),this.b=Is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return ee.workingToColorSpace(ze.copy(this),t),Math.round(Qt(ze.r*255,0,255))*65536+Math.round(Qt(ze.g*255,0,255))*256+Math.round(Qt(ze.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(ze.copy(this),e);const i=ze.r,s=ze.g,r=ze.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Re){ee.workingToColorSpace(ze.copy(this),t);const e=ze.r,i=ze.g,s=ze.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(Vr);const i=cr(Ri.h,Vr.h,e),s=cr(Ri.s,Vr.s,e),r=cr(Ri.l,Vr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new ne;ne.NAMES=Cf;class t0 extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Mn=new O,ri=new O,Ao=new O,ai=new O,ps=new O,ms=new O,Qh=new O,wo=new O,Co=new O,Ro=new O,Po=new Me,Do=new Me,Lo=new Me;class Tn{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Mn.subVectors(s,e),ri.subVectors(i,e),Ao.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(ri),l=Mn.dot(Ao),c=ri.dot(ri),h=ri.dot(Ao),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,_=(a*h-o*l)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Po.setScalar(0),Do.setScalar(0),Lo.setScalar(0),Po.fromBufferAttribute(t,e),Do.fromBufferAttribute(t,i),Lo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Po,r.x),a.addScaledVector(Do,r.y),a.addScaledVector(Lo,r.z),a}static isFrontFacing(t,e,i,s){return Mn.subVectors(i,e),ri.subVectors(t,e),Mn.cross(ri).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Mn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;ps.subVectors(s,i),ms.subVectors(r,i),wo.subVectors(t,i);const l=ps.dot(wo),c=ms.dot(wo);if(l<=0&&c<=0)return e.copy(i);Co.subVectors(t,s);const h=ps.dot(Co),d=ms.dot(Co);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ps,a);Ro.subVectors(t,r);const f=ps.dot(Ro),_=ms.dot(Ro);if(_>=0&&f<=_)return e.copy(r);const M=f*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(ms,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Qh.subVectors(r,s),o=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(Qh,o);const p=1/(m+M+u);return a=M*p,o=u*p,e.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Lr{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Xr.subVectors(this.max,Vs),gs.subVectors(t.a,Vs),_s.subVectors(t.b,Vs),vs.subVectors(t.c,Vs),Pi.subVectors(_s,gs),Di.subVectors(vs,_s),ki.subVectors(gs,vs);let e=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-ki.z,ki.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,ki.z,0,-ki.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-ki.y,ki.x,0];return!Io(e,gs,_s,vs,Xr)||(e=[1,0,0,0,1,0,0,0,1],!Io(e,gs,_s,vs,Xr))?!1:(Yr.crossVectors(Pi,Di),e=[Yr.x,Yr.y,Yr.z],Io(e,gs,_s,vs,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oi=[new O,new O,new O,new O,new O,new O,new O,new O],yn=new O,Wr=new Lr,gs=new O,_s=new O,vs=new O,Pi=new O,Di=new O,ki=new O,Vs=new O,Xr=new O,Yr=new O,Vi=new O;function Io(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Vi.fromArray(n,r);const o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=t.dot(Vi),c=e.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ce=new O,qr=new gt;let e0=0;class Jn extends Bi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=S_,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ws(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ze(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),i=Ze(i,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Rf extends Jn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Pf extends Jn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Fe extends Jn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const n0=new Lr,Ws=new O,No=new O;class Nc{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):n0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(No.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(No)),this.expandByPoint(Ws.copy(t.center).sub(No))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let i0=0;const gn=new Se,Uo=new en,xs=new O,ln=new Lr,Xs=new Lr,Ie=new O;class vn extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(M_(t)?Pf:Rf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,i){return gn.makeTranslation(t,e,i),this.applyMatrix4(gn),this}scale(t,e,i){return gn.makeScale(t,e,i),this.applyMatrix4(gn),this}lookAt(t){return Uo.lookAt(t),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Fe(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(ln.min,Xs.min),ln.expandByPoint(Ie),Ie.addVectors(ln.max,Xs.max),ln.expandByPoint(Ie)):(ln.expandByPoint(Xs.min),ln.expandByPoint(Xs.max))}ln.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(t,c),Ie.add(xs)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new O,l[v]=new O;const c=new O,h=new O,d=new O,u=new gt,f=new gt,_=new gt,M=new O,m=new O;function p(v,C,L){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,C),d.fromBufferAttribute(i,L),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,C),_.fromBufferAttribute(r,L),h.sub(c),d.sub(c),f.sub(u),_.sub(u);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),o[v].add(M),o[C].add(M),o[L].add(M),l[v].add(m),l[C].add(m),l[L].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,C=b.length;v<C;++v){const L=b[v],P=L.start,U=L.count;for(let W=P,F=P+U;W<F;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const R=new O,x=new O,E=new O,A=new O;function I(v){E.fromBufferAttribute(s,v),A.copy(E);const C=o[v];R.copy(C),R.sub(E.multiplyScalar(E.dot(C))).normalize(),x.crossVectors(A,C);const P=x.dot(l[v])<0?-1:1;a.setXYZW(v,R.x,R.y,R.z,P)}for(let v=0,C=b.length;v<C;++v){const L=b[v],P=L.start,U=L.count;for(let W=P,F=P+U;W<F;W+=3)I(t.getX(W+0)),I(t.getX(W+1)),I(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Jn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){const _=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new Jn(u,h,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new O,s0=new O,r0=new Wt;class En{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Oo.subVectors(i,e).cross(s0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Oo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||r0.getNormalMatrix(t),s=this.coplanarPoint(Oo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let a0=0;class Ir extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=as(),this.name="",this.type="Material",this.blending=or,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lf,this.blendDst=cf,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new En().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const li=new O,Fo=new O,Kr=new O,Zr=new O;class Uc{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Fo.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),Zr.copy(this.origin).sub(Fo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Kr),o=Zr.dot(this.direction),l=-Zr.dot(Kr),c=Zr.lengthSq(),h=Math.abs(1-a*a);let d,u,f,_;if(h>0)if(d=a*l-o,u=a*o-l,_=r*h,d>=0)if(u>=-_)if(u<=_){const M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fo).addScaledVector(Kr,u),f}intersectSphere(t,e){if(t.radius<0)return null;li.subVectors(t.center,this.origin);const i=li.dot(this.direction),s=li.dot(li)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,_=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=i.x-a.x,b=i.y-a.y,R=i.z-a.z,x=Math.abs(l),E=Math.abs(c),A=Math.abs(h);let I,v,C,L,P,U,W,F,Y,J,q,at;if(x>=E&&x>=A?(C=l,U=d,Y=_,at=p,l>=0?(I=c,v=h,L=u,P=f,W=M,F=m,J=b,q=R):(I=h,v=c,L=f,P=u,W=m,F=M,J=R,q=b)):E>=A?(C=c,U=u,Y=M,at=b,c>=0?(I=h,v=l,L=f,P=d,W=m,F=_,J=R,q=p):(I=l,v=h,L=d,P=f,W=_,F=m,J=p,q=R)):(C=h,U=f,Y=m,at=R,h>=0?(I=l,v=c,L=d,P=u,W=_,F=M,J=p,q=b):(I=c,v=l,L=u,P=d,W=M,F=_,J=b,q=p)),C===0)return null;const nt=I/C,ct=v/C,lt=1/C,wt=L-nt*U,Dt=P-ct*U,te=W-nt*Y,Yt=F-ct*Y,qt=J-nt*at,it=q-ct*at,tt=qt*Yt-it*te,vt=wt*it-Dt*qt,Ht=te*Dt-Yt*wt;if(s){if(tt<0||vt<0||Ht<0)return null}else if((tt<0||vt<0||Ht<0)&&(tt>0||vt>0||Ht>0))return null;const Ct=tt+vt+Ht;if(Ct===0)return null;const T=lt*(tt*U+vt*Y+Ht*at);return(Ct>0?T<0:T>0)?null:this.at(T/Ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bn extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=hf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const jh=new Se,Wi=new Uc,$r=new Nc,tu=new O,Jr=new O,Qr=new O,jr=new O,Bo=new O,ta=new O,eu=new O,ea=new O;class xe extends en{constructor(t=new vn,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Bo.fromBufferAttribute(d,t),a?ta.addScaledVector(Bo,h):ta.addScaledVector(Bo.sub(e),h))}e.add(ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!($r.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere($r,tu)===null||Wi.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(jh.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(jh),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,E=R;x<E;x+=3){const A=o.getX(x),I=o.getX(x+1),v=o.getX(x+2);s=na(this,p,t,i,c,h,d,A,I,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const b=o.getX(m),R=o.getX(m+1),x=o.getX(m+2);s=na(this,a,t,i,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){const m=u[_],p=a[m.materialIndex],b=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=b,E=R;x<E;x+=3){const A=x,I=x+1,v=x+2;s=na(this,p,t,i,c,h,d,A,I,v),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const b=m,R=m+1,x=m+2;s=na(this,a,t,i,c,h,d,b,R,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function o0(n,t,e,i,s,r,a,o){let l;if(t.side===an?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===es,o),l===null)return null;ea.copy(o),ea.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:n}}function na(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Jr),n.getVertexPosition(l,Qr),n.getVertexPosition(c,jr);const h=o0(n,t,e,i,Jr,Qr,jr,eu);if(h){const d=new O;Tn.getBarycoord(eu,Jr,Qr,jr,d),s&&(h.uv=Tn.getInterpolatedAttribute(s,o,l,c,d,new gt)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,l,c,d,new gt)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};Tn.getNormal(Jr,Qr,jr,u.normal),h.face=u,h.barycoord=d}return h}class l0 extends Oe{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ue,h=Ue,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xi=new Nc,c0=new gt(.5,.5),ia=new O;class Oc{constructor(t=new En,e=new En,i=new En,s=new En,r=new En,a=new En){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Kn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],M=r[9],m=r[10],p=r[11],b=r[12],R=r[13],x=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,p-_,E-b).normalize(),s[1].setComponents(c+a,f+h,p+_,E+b).normalize(),s[2].setComponents(c+o,f+d,p+M,E+R).normalize(),s[3].setComponents(c-o,f-d,p-M,E-R).normalize(),i)s[4].setComponents(l,u,m,x).normalize(),s[5].setComponents(c-l,f-u,p-m,E-x).normalize();else if(s[4].setComponents(c-l,f-u,p-m,E-x).normalize(),e===Kn)s[5].setComponents(c+l,f+u,p+m,E+x).normalize();else if(e===yr)s[5].setComponents(l,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);const e=c0.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ia.x=s.normal.x>0?t.max.x:t.min.x,ia.y=s.normal.y>0?t.max.y:t.min.y,ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Df extends Oe{constructor(t=[],e=ns,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nu extends Oe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tr extends Oe{constructor(t,e,i=ti,s,r,a,o=Ue,l=Ue,c,h=yi,d=1){if(h!==yi&&h!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Lc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class h0 extends Tr{constructor(t,e=ti,i=ns,s,r,a=Ue,o=Ue,l,c=yi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Lf extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Bs extends vn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(h,3)),this.setAttribute("uv",new Fe(d,2));function _(M,m,p,b,R,x,E,A,I,v,C){const L=x/I,P=E/v,U=x/2,W=E/2,F=A/2,Y=I+1,J=v+1;let q=0,at=0;const nt=new O;for(let ct=0;ct<J;ct++){const lt=ct*P-W;for(let wt=0;wt<Y;wt++){const Dt=wt*L-U;nt[M]=Dt*b,nt[m]=lt*R,nt[p]=F,c.push(nt.x,nt.y,nt.z),nt[M]=0,nt[m]=0,nt[p]=A>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(wt/I),d.push(1-ct/v),q+=1}}for(let ct=0;ct<v;ct++)for(let lt=0;lt<I;lt++){const wt=u+lt+Y*ct,Dt=u+lt+Y*(ct+1),te=u+(lt+1)+Y*(ct+1),Yt=u+(lt+1)+Y*ct;l.push(wt,Dt,Yt),l.push(Dt,te,Yt),at+=6}o.addGroup(f,at,C),f+=at,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new gt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new O,s=[],r=[],a=[],o=new O,l=new Se;for(let f=0;f<=t;f++){const _=f/t;s[f]=this.getTangentAt(_,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Qt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fc extends ni{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class u0 extends Fc{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bc(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const iu=new O,su=new O,Ho=new Bc,zo=new Bc,Go=new Bc;class d0 extends ni{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(su.subVectors(s[0],s[1]).add(s[0]),c=su);const d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(iu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=iu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),Ho.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,M,m),zo.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,M,m),Go.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,M,m)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),zo.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Go.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ho.calc(l),zo.calc(l),Go.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ru(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function f0(n,t){const e=1-n;return e*e*t}function p0(n,t){return 2*(1-n)*n*t}function m0(n,t){return n*n*t}function hr(n,t,e,i){return f0(n,t)+p0(n,e)+m0(n,i)}function g0(n,t){const e=1-n;return e*e*e*t}function _0(n,t){const e=1-n;return 3*e*e*n*t}function v0(n,t){return 3*(1-n)*n*n*t}function x0(n,t){return n*n*n*t}function ur(n,t,e,i,s){return g0(n,t)+_0(n,e)+v0(n,i)+x0(n,s)}class If extends ni{constructor(t=new gt,e=new gt,i=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new gt){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class S0 extends ni{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y),ur(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nf extends ni{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class M0 extends ni{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uf extends ni{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class y0 extends ni{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y),hr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Of extends ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(ru(o,l.x,c.x,h.x,d.x),ru(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var Ql=Object.freeze({__proto__:null,ArcCurve:u0,CatmullRomCurve3:d0,CubicBezierCurve:If,CubicBezierCurve3:S0,EllipseCurve:Fc,LineCurve:Nf,LineCurve3:M0,QuadraticBezierCurve:Uf,QuadraticBezierCurve3:y0,SplineCurve:Of});class b0 extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ql[s.type]().fromJSON(s))}return this}}class au extends b0{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Nf(this.currentPoint.clone(),new gt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Uf(this.currentPoint.clone(),new gt(t,e),new gt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new If(this.currentPoint.clone(),new gt(t,e),new gt(i,s),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Of(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){const c=new Fc(t,e,i,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hc extends au{constructor(t){super(t),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new au().fromJSON(s))}return this}}function E0(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Ff(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=R0(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){const f=n[u],_=n[u+1];f<o&&(o=f),_<l&&(l=_),f>h&&(h=f),_>d&&(d=_)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ar(r,a,e,o,l,c,0),a}function Ff(n,t,e,i,s){let r;if(s===z0(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=ou(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=ou(a/i|0,n[a],n[a+1],r);return r&&Os(r,r.next)&&(Cr(r),r=r.next),r}function ss(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Os(e,e.next)||ye(e.prev,e,e.next)===0)){if(Cr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ar(n,t,e,i,s,r,a){if(!n)return;!a&&r&&N0(n,i,s,r);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?A0(n,i,s,r):T0(n)){t.push(l.i,n.i,c.i),Cr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=w0(ss(n),t),Ar(n,t,e,i,s,r,2)):a===2&&C0(n,t,e,i,s,r):Ar(ss(n),t,e,i,s,r,1);break}}}function T0(n){const t=n.prev,e=n,i=n.next;if(ye(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c);let _=i.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=f&&js(s,o,r,l,a,c,_.x,_.y)&&ye(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function A0(n,t,e,i){const s=n.prev,r=n,a=n.next;if(ye(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),_=Math.min(h,d,u),M=Math.max(o,l,c),m=Math.max(h,d,u),p=jl(f,_,t,e,i),b=jl(M,m,t,e,i);let R=n.prevZ,x=n.nextZ;for(;R&&R.z>=p&&x&&x.z<=b;){if(R.x>=f&&R.x<=M&&R.y>=_&&R.y<=m&&R!==s&&R!==a&&js(o,h,l,d,c,u,R.x,R.y)&&ye(R.prev,R,R.next)>=0||(R=R.prevZ,x.x>=f&&x.x<=M&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&js(o,h,l,d,c,u,x.x,x.y)&&ye(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=M&&R.y>=_&&R.y<=m&&R!==s&&R!==a&&js(o,h,l,d,c,u,R.x,R.y)&&ye(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;x&&x.z<=b;){if(x.x>=f&&x.x<=M&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&js(o,h,l,d,c,u,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function w0(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Os(i,s)&&Hf(i,e,e.next,s)&&wr(i,s)&&wr(s,i)&&(t.push(i.i,e.i,s.i),Cr(e),Cr(e.next),e=n=s),e=e.next}while(e!==n);return ss(e)}function C0(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&F0(a,o)){let l=zf(a,o);a=ss(a,a.next),l=ss(l,l.next),Ar(a,t,e,i,s,r,0),Ar(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function R0(n,t,e,i){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Ff(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(O0(c))}s.sort(P0);for(let r=0;r<s.length;r++)e=D0(s[r],e);return e}function P0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function D0(n,t){const e=L0(n,t);if(!e)return t;const i=zf(e,n);return ss(i,i.next),ss(e,e.next)}function L0(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,a;if(Os(n,e))return e;do{if(Os(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Bf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);wr(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&I0(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function I0(n,t){return ye(n.prev,n,t.prev)<0&&ye(t.next,n,n.next)<0}function N0(n,t,e,i){let s=n;do s.z===0&&(s.z=jl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,U0(s)}function U0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function jl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function O0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Bf(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function js(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Bf(n,t,e,i,s,r,a,o)}function F0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!B0(n,t)&&(wr(n,t)&&wr(t,n)&&H0(n,t)&&(ye(n.prev,n,t.prev)||ye(n,t.prev,t))||Os(n,t)&&ye(n.prev,n,n.next)>0&&ye(t.prev,t,t.next)>0)}function ye(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Os(n,t){return n.x===t.x&&n.y===t.y}function Hf(n,t,e,i){const s=ra(ye(n,t,e)),r=ra(ye(n,t,i)),a=ra(ye(e,i,n)),o=ra(ye(e,i,t));return!!(s!==r&&a!==o||s===0&&sa(n,e,t)||r===0&&sa(n,i,t)||a===0&&sa(e,n,i)||o===0&&sa(e,t,i))}function sa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ra(n){return n>0?1:n<0?-1:0}function B0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Hf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function wr(n,t){return ye(n.prev,n,n.next)<0?ye(n,t,n.next)>=0&&ye(n,n.prev,t)>=0:ye(n,t,n.prev)<0||ye(n,n.next,t)<0}function H0(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function zf(n,t){const e=tc(n.i,n.x,n.y),i=tc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function ou(n,t,e,i){const s=tc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Cr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function tc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function z0(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class G0{static triangulate(t,e,i=2){return E0(t,e,i)}}class pi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return pi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];lu(t),cu(i,t);let a=t.length;e.forEach(lu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,cu(i,e[l]);const o=G0.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function lu(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function cu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class dr extends vn{constructor(t=new Hc([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Fe(s,3)),this.setAttribute("uv",new Fe(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:k0;let R,x=!1,E,A,I,v;if(p){R=p.getSpacedPoints(h),x=!0,u=!1;const D=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,D),A=new O,I=new O,v=new O}u||(m=0,f=0,_=0,M=0);const C=o.extractPoints(c);let L=C.shape;const P=C.holes;if(!pi.isClockWise(L)){L=L.reverse();for(let D=0,G=P.length;D<G;D++){const z=P[D];pi.isClockWise(z)&&(P[D]=z.reverse())}}function W(D){const z=10000000000000001e-36;let k=D[0];for(let $=1;$<=D.length;$++){const ot=$%D.length,st=D[ot],Q=st.x-k.x,pt=st.y-k.y,w=Q*Q+pt*pt,xt=Math.max(Math.abs(st.x),Math.abs(st.y),Math.abs(k.x),Math.abs(k.y)),St=z*xt*xt;if(w<=St){D.splice(ot,1),$--;continue}k=st}}W(L),P.forEach(W);const F=P.length,Y=L;for(let D=0;D<F;D++){const G=P[D];L=L.concat(G)}function J(D,G,z){return G||ie("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(G,z)}const q=L.length;function at(D,G,z){let k,$,ot;const st=D.x-G.x,Q=D.y-G.y,pt=z.x-D.x,w=z.y-D.y,xt=st*st+Q*Q,St=st*w-Q*pt;if(Math.abs(St)>Number.EPSILON){const y=Math.sqrt(xt),g=Math.sqrt(pt*pt+w*w),B=G.x-Q/y,X=G.y+st/y,j=z.x-w/g,ft=z.y+pt/g,mt=((j-B)*w-(ft-X)*pt)/(st*w-Q*pt);k=B+st*mt-D.x,$=X+Q*mt-D.y;const rt=k*k+$*$;if(rt<=2)return new gt(k,$);ot=Math.sqrt(rt/2)}else{let y=!1;st>Number.EPSILON?pt>Number.EPSILON&&(y=!0):st<-Number.EPSILON?pt<-Number.EPSILON&&(y=!0):Math.sign(Q)===Math.sign(w)&&(y=!0),y?(k=-Q,$=st,ot=Math.sqrt(xt)):(k=st,$=Q,ot=Math.sqrt(xt/2))}return new gt(k/ot,$/ot)}const nt=[];for(let D=0,G=Y.length,z=G-1,k=D+1;D<G;D++,z++,k++)z===G&&(z=0),k===G&&(k=0),nt[D]=at(Y[D],Y[z],Y[k]);const ct=[];let lt,wt=nt.concat();for(let D=0,G=F;D<G;D++){const z=P[D];lt=[];for(let k=0,$=z.length,ot=$-1,st=k+1;k<$;k++,ot++,st++)ot===$&&(ot=0),st===$&&(st=0),lt[k]=at(z[k],z[ot],z[st]);ct.push(lt),wt=wt.concat(lt)}let Dt;if(m===0)Dt=pi.triangulateShape(Y,P);else{const D=[],G=[];for(let z=0;z<m;z++){const k=z/m,$=f*Math.cos(k*Math.PI/2),ot=_*Math.sin(k*Math.PI/2)+M;for(let st=0,Q=Y.length;st<Q;st++){const pt=J(Y[st],nt[st],ot);vt(pt.x,pt.y,-$),k===0&&D.push(pt)}for(let st=0,Q=F;st<Q;st++){const pt=P[st];lt=ct[st];const w=[];for(let xt=0,St=pt.length;xt<St;xt++){const y=J(pt[xt],lt[xt],ot);vt(y.x,y.y,-$),k===0&&w.push(y)}k===0&&G.push(w)}}Dt=pi.triangulateShape(D,G)}const te=Dt.length,Yt=_+M;for(let D=0;D<q;D++){const G=u?J(L[D],wt[D],Yt):L[D];x?(I.copy(E.normals[0]).multiplyScalar(G.x),A.copy(E.binormals[0]).multiplyScalar(G.y),v.copy(R[0]).add(I).add(A),vt(v.x,v.y,v.z)):vt(G.x,G.y,0)}for(let D=1;D<=h;D++)for(let G=0;G<q;G++){const z=u?J(L[G],wt[G],Yt):L[G];x?(I.copy(E.normals[D]).multiplyScalar(z.x),A.copy(E.binormals[D]).multiplyScalar(z.y),v.copy(R[D]).add(I).add(A),vt(v.x,v.y,v.z)):vt(z.x,z.y,d/h*D)}for(let D=m-1;D>=0;D--){const G=D/m,z=f*Math.cos(G*Math.PI/2),k=_*Math.sin(G*Math.PI/2)+M;for(let $=0,ot=Y.length;$<ot;$++){const st=J(Y[$],nt[$],k);vt(st.x,st.y,d+z)}for(let $=0,ot=P.length;$<ot;$++){const st=P[$];lt=ct[$];for(let Q=0,pt=st.length;Q<pt;Q++){const w=J(st[Q],lt[Q],k);x?vt(w.x,w.y+R[h-1].y,R[h-1].x+z):vt(w.x,w.y,d+z)}}}qt(),it();function qt(){const D=s.length/3;if(u){let G=0,z=q*G;for(let k=0;k<te;k++){const $=Dt[k];Ht($[2]+z,$[1]+z,$[0]+z)}G=h+m*2,z=q*G;for(let k=0;k<te;k++){const $=Dt[k];Ht($[0]+z,$[1]+z,$[2]+z)}}else{for(let G=0;G<te;G++){const z=Dt[G];Ht(z[2],z[1],z[0])}for(let G=0;G<te;G++){const z=Dt[G];Ht(z[0]+q*h,z[1]+q*h,z[2]+q*h)}}i.addGroup(D,s.length/3-D,0)}function it(){const D=s.length/3;let G=0;tt(Y,G),G+=Y.length;for(let z=0,k=P.length;z<k;z++){const $=P[z];tt($,G),G+=$.length}i.addGroup(D,s.length/3-D,1)}function tt(D,G){let z=D.length;for(;--z>=0;){const k=z;let $=z-1;$<0&&($=D.length-1);for(let ot=0,st=h+m*2;ot<st;ot++){const Q=q*ot,pt=q*(ot+1),w=G+k+Q,xt=G+$+Q,St=G+$+pt,y=G+k+pt;Ct(w,xt,St,y)}}}function vt(D,G,z){l.push(D),l.push(G),l.push(z)}function Ht(D,G,z){T(D),T(G),T(z);const k=s.length/3,$=b.generateTopUV(i,s,k-3,k-2,k-1);N($[0]),N($[1]),N($[2])}function Ct(D,G,z,k){T(D),T(G),T(k),T(G),T(z),T(k);const $=s.length/3,ot=b.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);N(ot[0]),N(ot[1]),N(ot[3]),N(ot[1]),N(ot[2]),N(ot[3])}function T(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function N(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return V0(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ql[s.type]().fromJSON(s)),new dr(i,t.options)}}const k0={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new gt(r,a),new gt(o,l),new gt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],_=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new gt(a,1-l),new gt(c,1-d),new gt(u,1-_),new gt(M,1-p)]:[new gt(o,1-l),new gt(h,1-d),new gt(f,1-_),new gt(m,1-p)]}};function V0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Fi extends vn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],_=[],M=[],m=[];for(let p=0;p<h;p++){const b=p*u-a;for(let R=0;R<c;R++){const x=R*d-r;_.push(x,-b,0),M.push(0,0,1),m.push(R/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const R=b+c*p,x=b+c*(p+1),E=b+1+c*(p+1),A=b+1+c*p;f.push(R,x,A),f.push(x,E,A)}this.setIndex(f),this.setAttribute("position",new Fe(_,3)),this.setAttribute("normal",new Fe(M,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ua extends vn{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=t;const u=(e-t)/s,f=new O,_=new gt;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}d+=u}for(let M=0;M<s;M++){const m=M*(i+1);for(let p=0;p<i;p++){const b=p+m,R=b,x=b+i+1,E=b+i+2,A=b+1;o.push(R,x,A),o.push(x,E,A)}}this.setIndex(o),this.setAttribute("position",new Fe(l,3)),this.setAttribute("normal",new Fe(c,3)),this.setAttribute("uv",new Fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zc extends vn{constructor(t=new Hc([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(r,3)),this.setAttribute("uv",new Fe(a,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const _=u.holes;pi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=_.length;m<p;m++){const b=_[m];pi.isClockWise(b)===!0&&(_[m]=b.reverse())}const M=pi.triangulateShape(f,_);for(let m=0,p=_.length;m<p;m++){const b=_[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){const b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,p=M.length;m<p;m++){const b=M[m],R=b[0]+d,x=b[1]+d,E=b[2]+d;i.push(R,x,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return W0(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new zc(i,t.curveSegments)}}function W0(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}function Fs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(hu(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(hu(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=Fs(n[e]);for(const s in i)t[s]=i[s]}return t}function hu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function X0(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Gf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Y0={clone:Fs,merge:$e};var q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=X0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new ne().setHex(s.value);break;case"v2":this.uniforms[i].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Me().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Se().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Z0 extends Ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ss extends Ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $0 extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class J0 extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ko={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(uu(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!uu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function uu(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Q0{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const j0=new Q0;class Gc{constructor(t){this.manager=t!==void 0?t:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Gc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ms=new WeakMap;class tv extends Gc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ko.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Ms.get(a);d===void 0&&(d=[],Ms.set(a,d)),d.push({onLoad:e,onError:s})}return a}const o=br("img");function l(){h(),e&&e(this);const d=Ms.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Ms.delete(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),ko.remove(`image:${t}`);const u=Ms.get(this)||[];for(let f=0;f<u.length;f++){const _=u[f];_.onError&&_.onError(d)}Ms.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ko.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}class Ys extends Gc{constructor(t){super(t)}load(t,e,i,s){const r=new Oe,a=new tv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class kf extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class ev extends kf{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Vo=new Se,du=new O,fu=new O;class nv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;du.setFromMatrixPosition(t.matrixWorld),e.position.copy(du),fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Vo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===yr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const aa=new O,oa=new _n,On=new O;class Vf extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(aa,oa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(aa,oa,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(aa,oa,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Li=new O,pu=new gt,mu=new gt;class un extends Vf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,pu,mu),e.subVectors(mu,pu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class iv extends nv{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class sv extends kf{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new iv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Wf extends Vf{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ys=-90,bs=1;class rv extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(ys,bs,t,e);s.layers=this.layers,this.add(s);const r=new un(ys,bs,t,e);r.layers=this.layers,this.add(r);const a=new un(ys,bs,t,e);a.layers=this.layers,this.add(a);const o=new un(ys,bs,t,e);o.layers=this.layers,this.add(o);const l=new un(ys,bs,t,e);l.layers=this.layers,this.add(l);const c=new un(ys,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class av extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const gu=new Se;class ov{constructor(t,e,i=0,s=1/0){this.ray=new Uc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ie("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(t,e=!0,i=[]){return ec(t,this,i,e),i.sort(_u),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ec(t[s],this,i,e);return i.sort(_u),i}}function _u(n,t){return n.distance-t.distance}function ec(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)ec(r[a],t,e,!0)}}class vu{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const qc=class qc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};qc.prototype.isMatrix2=!0;let xu=qc;class lv extends Bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Su(n,t,e,i){const s=cv(i);switch(e){case bf:return n*t;case Tf:return n*t/s.components*s.byteLength;case Ac:return n*t/s.components*s.byteLength;case is:return n*t*2/s.components*s.byteLength;case wc:return n*t*2/s.components*s.byteLength;case Ef:return n*t*3/s.components*s.byteLength;case An:return n*t*4/s.components*s.byteLength;case Cc:return n*t*4/s.components*s.byteLength;case _a:case va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case xa:case Sa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:case El:return Math.max(n,16)*Math.max(t,8)/4;case Ml:case bl:return Math.max(n,8)*Math.max(t,8)/2;case Tl:case Al:case Cl:case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wl:case Da:case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Xl:case Yl:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Kl:case Zl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case La:case $l:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cv(n){switch(n){case dn:case xf:return{byteLength:1,components:1};case Sr:case Sf:case ei:return{byteLength:2,components:1};case Ec:case Tc:return{byteLength:2,components:4};case ti:case bc:case qn:return{byteLength:4,components:1};case Mf:case yf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function hv(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){const _=d[u],M=d[f];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){const M=d[f];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var uv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dv=`#ifdef USE_ALPHAHASH
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
#endif`,fv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_v=`#ifdef USE_AOMAP
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
#endif`,vv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xv=`#ifdef USE_BATCHING
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
#endif`,Sv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ev=`#ifdef USE_IRIDESCENCE
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
#endif`,Tv=`#ifdef USE_BUMPMAP
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
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nv=`#define PI 3.141592653589793
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
} // validated`,Uv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ov=`vec3 transformedNormal = objectNormal;
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
#endif`,Fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$v=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qv=`#ifdef USE_GRADIENTMAP
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
}`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ix=`#ifdef USE_ENVMAP
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
#endif`,sx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lx=`PhysicalMaterial material;
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
#endif`,cx=`uniform sampler2D dfgLUT;
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
}`,hx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mx=`#if defined( USE_POINTS_UV )
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
#endif`,yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Px=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$x=`float getShadowMask() {
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
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dS=`uniform sampler2D t2D;
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`#include <common>
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
}`,vS=`#if DEPTH_PACKING == 3200
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
}`,xS=`#define DISTANCE
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
}`,SS=`#define DISTANCE
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
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
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
}`,ES=`uniform vec3 diffuse;
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
}`,TS=`#include <common>
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
}`,AS=`uniform vec3 diffuse;
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
}`,wS=`#define LAMBERT
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
}`,CS=`#define LAMBERT
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
}`,RS=`#define MATCAP
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
}`,PS=`#define MATCAP
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
}`,DS=`#define NORMAL
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
}`,LS=`#define NORMAL
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
}`,IS=`#define PHONG
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
}`,NS=`#define PHONG
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
}`,US=`#define STANDARD
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
}`,OS=`#define STANDARD
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
}`,FS=`#define TOON
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
}`,BS=`#define TOON
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
}`,HS=`uniform float size;
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
}`,zS=`uniform vec3 diffuse;
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
}`,GS=`#include <common>
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
}`,kS=`uniform vec3 color;
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
}`,VS=`uniform float rotation;
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
}`,WS=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:uv,alphahash_pars_fragment:dv,alphamap_fragment:fv,alphamap_pars_fragment:pv,alphatest_fragment:mv,alphatest_pars_fragment:gv,aomap_fragment:_v,aomap_pars_fragment:vv,batching_pars_vertex:xv,batching_vertex:Sv,begin_vertex:Mv,beginnormal_vertex:yv,bsdfs:bv,iridescence_fragment:Ev,bumpmap_pars_fragment:Tv,clipping_planes_fragment:Av,clipping_planes_pars_fragment:wv,clipping_planes_pars_vertex:Cv,clipping_planes_vertex:Rv,color_fragment:Pv,color_pars_fragment:Dv,color_pars_vertex:Lv,color_vertex:Iv,common:Nv,cube_uv_reflection_fragment:Uv,defaultnormal_vertex:Ov,displacementmap_pars_vertex:Fv,displacementmap_vertex:Bv,emissivemap_fragment:Hv,emissivemap_pars_fragment:zv,colorspace_fragment:Gv,colorspace_pars_fragment:kv,envmap_fragment:Vv,envmap_common_pars_fragment:Wv,envmap_pars_fragment:Xv,envmap_pars_vertex:Yv,envmap_physical_pars_fragment:ix,envmap_vertex:qv,fog_vertex:Kv,fog_pars_vertex:Zv,fog_fragment:$v,fog_pars_fragment:Jv,gradientmap_pars_fragment:Qv,lightmap_pars_fragment:jv,lights_lambert_fragment:tx,lights_lambert_pars_fragment:ex,lights_pars_begin:nx,lights_toon_fragment:sx,lights_toon_pars_fragment:rx,lights_phong_fragment:ax,lights_phong_pars_fragment:ox,lights_physical_fragment:lx,lights_physical_pars_fragment:cx,lights_fragment_begin:hx,lights_fragment_maps:ux,lights_fragment_end:dx,lightprobes_pars_fragment:fx,logdepthbuf_fragment:px,logdepthbuf_pars_fragment:mx,logdepthbuf_pars_vertex:gx,logdepthbuf_vertex:_x,map_fragment:vx,map_pars_fragment:xx,map_particle_fragment:Sx,map_particle_pars_fragment:Mx,metalnessmap_fragment:yx,metalnessmap_pars_fragment:bx,morphinstance_vertex:Ex,morphcolor_vertex:Tx,morphnormal_vertex:Ax,morphtarget_pars_vertex:wx,morphtarget_vertex:Cx,normal_fragment_begin:Rx,normal_fragment_maps:Px,normal_pars_fragment:Dx,normal_pars_vertex:Lx,normal_vertex:Ix,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Ox,clearcoat_pars_fragment:Fx,iridescence_pars_fragment:Bx,opaque_fragment:Hx,packing:zx,premultiplied_alpha_fragment:Gx,project_vertex:kx,dithering_fragment:Vx,dithering_pars_fragment:Wx,roughnessmap_fragment:Xx,roughnessmap_pars_fragment:Yx,shadowmap_pars_fragment:qx,shadowmap_pars_vertex:Kx,shadowmap_vertex:Zx,shadowmask_pars_fragment:$x,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:jx,skinnormal_vertex:tS,specularmap_fragment:eS,specularmap_pars_fragment:nS,tonemapping_fragment:iS,tonemapping_pars_fragment:sS,transmission_fragment:rS,transmission_pars_fragment:aS,uv_pars_fragment:oS,uv_pars_vertex:lS,uv_vertex:cS,worldpos_vertex:hS,background_vert:uS,background_frag:dS,backgroundCube_vert:fS,backgroundCube_frag:pS,cube_vert:mS,cube_frag:gS,depth_vert:_S,depth_frag:vS,distance_vert:xS,distance_frag:SS,equirect_vert:MS,equirect_frag:yS,linedashed_vert:bS,linedashed_frag:ES,meshbasic_vert:TS,meshbasic_frag:AS,meshlambert_vert:wS,meshlambert_frag:CS,meshmatcap_vert:RS,meshmatcap_frag:PS,meshnormal_vert:DS,meshnormal_frag:LS,meshphong_vert:IS,meshphong_frag:NS,meshphysical_vert:US,meshphysical_frag:OS,meshtoon_vert:FS,meshtoon_frag:BS,points_vert:HS,points_frag:zS,shadow_vert:GS,shadow_frag:kS,sprite_vert:VS,sprite_frag:WS},Tt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Vn={basic:{uniforms:$e([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:$e([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:$e([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:$e([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:$e([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:$e([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:$e([Tt.points,Tt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:$e([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:$e([Tt.common,Tt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:$e([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:$e([Tt.sprite,Tt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:$e([Tt.common,Tt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:$e([Tt.lights,Tt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Vn.physical={uniforms:$e([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const la={r:0,b:0,g:0},XS=new Se,Yf=new Wt;Yf.set(-1,0,0,0,1,0,0,0,1);function YS(n,t,e,i,s,r){const a=new ne(0);let o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let R=b.isScene===!0?b.background:null;if(R&&R.isTexture){const x=b.backgroundBlurriness>0;R=t.get(R,x)}return R}function _(b){let R=!1;const x=f(b);x===null?m(a,o):x&&x.isColor&&(m(x,1),R=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(b,R){const x=f(R);x&&(x.isCubeTexture||x.mapping===Za)?(c===void 0&&(c=new xe(new Bs(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Fs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(XS.makeRotationFromEuler(R.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yf),c.material.toneMapped=ee.getTransfer(x.colorSpace)!==ce,(h!==x||d!==x.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new xe(new Fi(2,2),new Ln({name:"BackgroundMaterial",uniforms:Fs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,R){b.getRGB(la,Gf(n)),e.buffers.color.setClear(la.r,la.g,la.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,R=1){a.set(b),o=R,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:_,addToRenderList:M,dispose:p}}function qS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(P,U,W,F,Y){let J=!1;const q=d(P,F,W,U);r!==q&&(r=q,c(r.object)),J=f(P,F,W,Y),J&&_(P,F,W,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,x(P,U,W,F),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function d(P,U,W,F){const Y=F.wireframe===!0;let J=i[U.id];J===void 0&&(J={},i[U.id]=J);const q=P.isInstancedMesh===!0?P.id:0;let at=J[q];at===void 0&&(at={},J[q]=at);let nt=at[W.id];nt===void 0&&(nt={},at[W.id]=nt);let ct=nt[Y];return ct===void 0&&(ct=u(l()),nt[Y]=ct),ct}function u(P){const U=[],W=[],F=[];for(let Y=0;Y<e;Y++)U[Y]=0,W[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:F,object:P,attributes:{},index:null}}function f(P,U,W,F){const Y=r.attributes,J=U.attributes;let q=0;const at=W.getAttributes();for(const nt in at)if(at[nt].location>=0){const lt=Y[nt];let wt=J[nt];if(wt===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(wt=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(wt=P.instanceColor)),lt===void 0||lt.attribute!==wt||wt&&lt.data!==wt.data)return!0;q++}return r.attributesNum!==q||r.index!==F}function _(P,U,W,F){const Y={},J=U.attributes;let q=0;const at=W.getAttributes();for(const nt in at)if(at[nt].location>=0){let lt=J[nt];lt===void 0&&(nt==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),nt==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor));const wt={};wt.attribute=lt,lt&&lt.data&&(wt.data=lt.data),Y[nt]=wt,q++}r.attributes=Y,r.attributesNum=q,r.index=F}function M(){const P=r.newAttributes;for(let U=0,W=P.length;U<W;U++)P[U]=0}function m(P){p(P,0)}function p(P,U){const W=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;W[P]=1,F[P]===0&&(n.enableVertexAttribArray(P),F[P]=1),Y[P]!==U&&(n.vertexAttribDivisor(P,U),Y[P]=U)}function b(){const P=r.newAttributes,U=r.enabledAttributes;for(let W=0,F=U.length;W<F;W++)U[W]!==P[W]&&(n.disableVertexAttribArray(W),U[W]=0)}function R(P,U,W,F,Y,J,q){q===!0?n.vertexAttribIPointer(P,U,W,Y,J):n.vertexAttribPointer(P,U,W,F,Y,J)}function x(P,U,W,F){M();const Y=F.attributes,J=W.getAttributes(),q=U.defaultAttributeValues;for(const at in J){const nt=J[at];if(nt.location>=0){let ct=Y[at];if(ct===void 0&&(at==="instanceMatrix"&&P.instanceMatrix&&(ct=P.instanceMatrix),at==="instanceColor"&&P.instanceColor&&(ct=P.instanceColor)),ct!==void 0){const lt=ct.normalized,wt=ct.itemSize,Dt=t.get(ct);if(Dt===void 0)continue;const te=Dt.buffer,Yt=Dt.type,qt=Dt.bytesPerElement,it=Yt===n.INT||Yt===n.UNSIGNED_INT||ct.gpuType===bc;if(ct.isInterleavedBufferAttribute){const tt=ct.data,vt=tt.stride,Ht=ct.offset;if(tt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<nt.locationSize;Ct++)p(nt.location+Ct,tt.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Ct=0;Ct<nt.locationSize;Ct++)m(nt.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,te);for(let Ct=0;Ct<nt.locationSize;Ct++)R(nt.location+Ct,wt/nt.locationSize,Yt,lt,vt*qt,(Ht+wt/nt.locationSize*Ct)*qt,it)}else{if(ct.isInstancedBufferAttribute){for(let tt=0;tt<nt.locationSize;tt++)p(nt.location+tt,ct.meshPerAttribute);P.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let tt=0;tt<nt.locationSize;tt++)m(nt.location+tt);n.bindBuffer(n.ARRAY_BUFFER,te);for(let tt=0;tt<nt.locationSize;tt++)R(nt.location+tt,wt/nt.locationSize,Yt,lt,wt*qt,wt/nt.locationSize*tt*qt,it)}}else if(q!==void 0){const lt=q[at];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(nt.location,lt);break;case 3:n.vertexAttrib3fv(nt.location,lt);break;case 4:n.vertexAttrib4fv(nt.location,lt);break;default:n.vertexAttrib1fv(nt.location,lt)}}}}b()}function E(){C();for(const P in i){const U=i[P];for(const W in U){const F=U[W];for(const Y in F){const J=F[Y];for(const q in J)h(J[q].object),delete J[q];delete F[Y]}}delete i[P]}}function A(P){if(i[P.id]===void 0)return;const U=i[P.id];for(const W in U){const F=U[W];for(const Y in F){const J=F[Y];for(const q in J)h(J[q].object),delete J[q];delete F[Y]}}delete i[P.id]}function I(P){for(const U in i){const W=i[U];for(const F in W){const Y=W[F];if(Y[P.id]===void 0)continue;const J=Y[P.id];for(const q in J)h(J[q].object),delete J[q];delete Y[P.id]}}}function v(P){for(const U in i){const W=i[U],F=P.isInstancedMesh===!0?P.id:0,Y=W[F];if(Y!==void 0){for(const J in Y){const q=Y[J];for(const at in q)h(q[at].object),delete q[at];delete Y[J]}delete W[F],Object.keys(W).length===0&&delete i[U]}}}function C(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function KS(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function ZS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==An&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const v=I===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==dn&&I!==qn&&!v&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:R,maxFragmentUniforms:x,maxSamples:E,samples:A}}function $S(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new En,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const b=r?0:i,R=b*4;let x=p.clippingState||null;l.value=x,x=h(_,u,R,f);for(let E=0;E!==R;++E)x[E]=e[E];p.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,_){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const p=f+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,x=f;R!==M;++R,x+=4)a.copy(d[R]).applyMatrix4(b,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}const Rs=4,JS=6,QS=20,jS=256,qs=new Wf,Mu=new ne;let Wo=null,Xo=0,Yo=0,qo=!1;const tM=new O,Yi=new O;class yu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=tM}=r;Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,Yo),this._renderer.xr.enabled=qo,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:ei,format:An,colorSpace:Ia,depthBuffer:!1},s=bu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bu(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eM(r)),this._blurMaterial=iM(r,t,e),this._ggxMaterial=nM(r,t,e)}return s}_compileMaterial(t){const e=new xe(new vn,t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,i,s,r){const l=new un(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Mu),d.toneMapping=$n,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xe(new Bs,new bn({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(Mu),p=!0);for(let R=0;R<6;R++){const x=R%3;x===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):x===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));const E=this._cubeSize;Es(s,x*E,R>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(M,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ns||t.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Es(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,qs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-Rs?i-_+Rs:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,Es(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Es(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,qs)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-Rs?s-this._lodMax+Rs:0),u=4*(this._cubeSize-h);Es(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,qs)}}function eM(n){const t=[],e=[];let i=n;const s=n-Rs+1+JS;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,_=new Float32Array(f*u*d),M=new Float32Array(f*u*d);for(let p=0;p<d;p++){const b=p%3*2/3-1,R=p>2?0:-1,x=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];_.set(x,f*u*p);for(let E=0;E<u;E++){const A=h[E*2]*2-1,I=h[E*2+1]*2-1;p===0?Yi.set(1,I,A):p===1?Yi.set(-A,1,-I):p===2?Yi.set(-A,I,1):p===3?Yi.set(-1,I,-A):p===4?Yi.set(-A,-1,I):Yi.set(A,I,-1),Yi.toArray(M,(p*u+E)*f)}}const m=new vn;m.setAttribute("position",new Jn(_,f)),m.setAttribute("outputDirection",new Jn(M,f)),e.push(new xe(m,null)),i>Rs&&i--}return{lodMeshes:e,sizeLods:t}}function bu(n,t,e){const i=new Pn(n,t,e);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function nM(n,t,e){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function iM(n,t,e){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:QS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
	`}class qf extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Df(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Bs(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:gi});r.uniforms.tEquirect.value=e;const a=new xe(s,r),o=e.minFilter;return e.minFilter===Zi&&(e.minFilter=We),new rv(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function sM(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===mo||f===go)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const M=new qf(_.height);return M.fromEquirectangularTexture(n,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,_=f===mo||f===go,M=f===ns||f===Us;if(_||M){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new yu(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const b=u.image;return _&&b&&b.height>0||M&&b&&l(b)?(i===null&&(i=new yu(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===mo?u.mapping=ns:f===go&&(u.mapping=Us),u}function l(u){let f=0;const _=6;for(let M=0;M<_;M++)u[M]!==void 0&&f++;return f===_}function c(u){const f=u.target;f.removeEventListener("dispose",c);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function rM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ls("WebGLRenderer: "+i+" extension not supported."),s}}}function aM(n,t,e,i){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,_=d.attributes.position;let M=0;if(_===void 0)return;if(f!==null){const b=f.array;M=f.version;for(let R=0,x=b.length;R<x;R+=3){const E=b[R+0],A=b[R+1],I=b[R+2];u.push(E,A,A,I,I,E)}}else{const b=_.array;M=_.version;for(let R=0,x=b.length/3-1;R<x;R+=3){const E=R+0,A=R+1,I=R+2;u.push(E,A,A,I,I,E)}}const m=new(_.count>=65535?Pf:Rf)(u,1);m.version=M;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function oM(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];e.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function lM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function cM(n,t,e){const i=new WeakMap,s=new Me;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let C=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let R=0;f===!0&&(R=1),_===!0&&(R=2),M===!0&&(R=3);let x=o.attributes.position.count*R,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const A=new Float32Array(x*E*4*d),I=new wf(A,x,E,d);I.type=qn,I.needsUpdate=!0;const v=R*4;for(let L=0;L<d;L++){const P=m[L],U=p[L],W=b[L],F=x*E*4*L;for(let Y=0;Y<P.count;Y++){const J=Y*v;f===!0&&(s.fromBufferAttribute(P,Y),A[F+J+0]=s.x,A[F+J+1]=s.y,A[F+J+2]=s.z,A[F+J+3]=0),_===!0&&(s.fromBufferAttribute(U,Y),A[F+J+4]=s.x,A[F+J+5]=s.y,A[F+J+6]=s.z,A[F+J+7]=0),M===!0&&(s.fromBufferAttribute(W,Y),A[F+J+8]=s.x,A[F+J+9]=s.y,A[F+J+10]=s.z,A[F+J+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new gt(x,E)},i.set(o,u),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function hM(n,t,e,i,s){let r=new WeakMap;function a(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const uM={[uf]:"LINEAR_TONE_MAPPING",[df]:"REINHARD_TONE_MAPPING",[ff]:"CINEON_TONE_MAPPING",[pf]:"ACES_FILMIC_TONE_MAPPING",[gf]:"AGX_TONE_MAPPING",[_f]:"NEUTRAL_TONE_MAPPING",[mf]:"CUSTOM_TONE_MAPPING"};function dM(n,t,e,i,s,r){const a=new Pn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new vn;c.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const h=new Z0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new xe(c,h),u=new Wf(-1,1,1,-1,0,1);let f=null,_=null,M=!1,m,p=null,b=[],R=!1;this.setSize=function(x,E){a.setSize(x,E),o!==null&&o.setSize(x,E),l!==null&&l.setSize(x,E);for(let A=0;A<b.length;A++){const I=b[A];I.setSize&&I.setSize(x,E)}},this.setEffects=function(x){b=x,R=b.length>0&&b[0].isRenderPass===!0;const E=a.width,A=a.height;b.length>0&&o===null&&(o=new Pn(E,A,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new Pn(E,A,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<b.length;I++){const v=b[I];v.setSize&&v.setSize(E,A)}},this.begin=function(x,E){if(M||x.toneMapping===$n&&b.length===0)return!1;if(p=E,E!==null){const A=E.width,I=E.height;(a.width!==A||a.height!==I)&&this.setSize(A,I)}return R===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=$n,!0},this.hasRenderPass=function(){return R},this.end=function(x,E){x.toneMapping=m,M=!0;let A=a,I=o;for(let v=0;v<b.length;v++){const C=b[v];C.enabled!==!1&&(C.render(x,I,A,E),C.needsSwap!==!1&&(A=I,I=I===o?l:o))}if(f!==x.outputColorSpace||_!==x.toneMapping){f=x.outputColorSpace,_=x.toneMapping,h.defines={},ee.getTransfer(f)===ce&&(h.defines.SRGB_TRANSFER="");const v=uM[_];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,x.setRenderTarget(p),x.render(d,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Kf=new Oe,nc=new Tr(1,1),Zf=new wf,$f=new Y_,Jf=new Df,Au=[],wu=[],Cu=new Float32Array(16),Ru=new Float32Array(9),Pu=new Float32Array(4);function Hs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Au[s];if(r===void 0&&(r=new Float32Array(s),Au[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ja(n,t){let e=wu[t];e===void 0&&(e=new Int32Array(t),wu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function fM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function pM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function mM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function gM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function _M(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Pu.set(i),n.uniformMatrix2fv(this.addr,!1,Pu),Le(e,i)}}function vM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Ru.set(i),n.uniformMatrix3fv(this.addr,!1,Ru),Le(e,i)}}function xM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,i))return;Cu.set(i),n.uniformMatrix4fv(this.addr,!1,Cu),Le(e,i)}}function SM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function MM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function yM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function bM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function EM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function TM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function AM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function wM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function CM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(nc.compareFunction=e.isReversedDepthBuffer()?Pc:Rc,r=nc):r=Kf,e.setTexture2D(t||r,s)}function RM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||$f,s)}function PM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Jf,s)}function DM(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Zf,s)}function LM(n){switch(n){case 5126:return fM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return _M;case 35675:return vM;case 35676:return xM;case 5124:case 35670:return SM;case 35667:case 35671:return MM;case 35668:case 35672:return yM;case 35669:case 35673:return bM;case 5125:return EM;case 36294:return TM;case 36295:return AM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return PM;case 36289:case 36303:case 36311:case 36292:return DM}}function IM(n,t){n.uniform1fv(this.addr,t)}function NM(n,t){const e=Hs(t,this.size,2);n.uniform2fv(this.addr,e)}function UM(n,t){const e=Hs(t,this.size,3);n.uniform3fv(this.addr,e)}function OM(n,t){const e=Hs(t,this.size,4);n.uniform4fv(this.addr,e)}function FM(n,t){const e=Hs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function BM(n,t){const e=Hs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function HM(n,t){const e=Hs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function zM(n,t){n.uniform1iv(this.addr,t)}function GM(n,t){n.uniform2iv(this.addr,t)}function kM(n,t){n.uniform3iv(this.addr,t)}function VM(n,t){n.uniform4iv(this.addr,t)}function WM(n,t){n.uniform1uiv(this.addr,t)}function XM(n,t){n.uniform2uiv(this.addr,t)}function YM(n,t){n.uniform3uiv(this.addr,t)}function qM(n,t){n.uniform4uiv(this.addr,t)}function KM(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=nc:a=Kf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ZM(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||$f,r[a])}function $M(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jf,r[a])}function JM(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zf,r[a])}function QM(n){switch(n){case 5126:return IM;case 35664:return NM;case 35665:return UM;case 35666:return OM;case 35674:return FM;case 35675:return BM;case 35676:return HM;case 5124:case 35670:return zM;case 35667:case 35671:return GM;case 35668:case 35672:return kM;case 35669:case 35673:return VM;case 5125:return WM;case 36294:return XM;case 36295:return YM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return JM}}class jM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=LM(e.type)}}class ty{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=QM(e.type)}}class ey{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Du(n,t){n.seq.push(t),n.map[t.id]=t}function ny(n,t,e){const i=n.name,s=i.length;for(Ko.lastIndex=0;;){const r=Ko.exec(i),a=Ko.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Du(e,c===void 0?new jM(o,n,t):new ty(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new ey(o),Du(e,d)),e=d}}}class Ma{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ny(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Lu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const iy=37297;let sy=0;function ry(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Iu=new Wt;function ay(n){ee._getMatrix(Iu,ee.workingColorSpace,n);const t=`mat3( ${Iu.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case Na:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Nu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ry(n.getShaderSource(t),o)}else return r}function oy(n,t){const e=ay(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ly={[uf]:"Linear",[df]:"Reinhard",[ff]:"Cineon",[pf]:"ACESFilmic",[gf]:"AgX",[_f]:"Neutral",[mf]:"Custom"};function cy(n,t){const e=ly[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new O;function hy(){ee.getLuminanceCoefficients(ca);const n=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function dy(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function fy(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function tr(n){return n!==""}function Uu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ou(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const py=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(n){return n.replace(py,gy)}const my=new Map;function gy(n,t){let e=Jt[t];if(e===void 0){const i=my.get(t);if(i!==void 0)e=Jt[i],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ic(e)}const _y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(n){return n.replace(_y,vy)}function vy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const xy={[ga]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function Sy(n){return xy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const My={[ns]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[Za]:"ENVMAP_TYPE_CUBE_UV"};function yy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":My[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const by={[Us]:"ENVMAP_MODE_REFRACTION"};function Ey(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":by[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ty={[hf]:"ENVMAP_BLENDING_MULTIPLY",[l_]:"ENVMAP_BLENDING_MIX",[c_]:"ENVMAP_BLENDING_ADD"};function Ay(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ty[n.combine]||"ENVMAP_BLENDING_NONE"}function wy(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Cy(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Sy(e),c=yy(e),h=Ey(e),d=Ay(e),u=wy(e),f=uy(e),_=dy(r),M=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(tr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(m=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[Bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Jt.tonemapping_pars_fragment:"",e.toneMapping!==$n?cy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,oy("linearToOutputTexel",e.outputColorSpace),hy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),a=ic(a),a=Uu(a,e),a=Ou(a,e),o=ic(o),o=Uu(o,e),o=Ou(o,e),a=Fu(a),o=Fu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=b+m+a,x=b+p+o,E=Lu(s,s.VERTEX_SHADER,R),A=Lu(s,s.FRAGMENT_SHADER,x);s.attachShader(M,E),s.attachShader(M,A),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(P){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(M)||"",W=s.getShaderInfoLog(E)||"",F=s.getShaderInfoLog(A)||"",Y=U.trim(),J=W.trim(),q=F.trim();let at=!0,nt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(at=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,E,A);else{const ct=Nu(s,E,"vertex"),lt=Nu(s,A,"fragment");ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+ct+`
`+lt)}else Y!==""?Vt("WebGLProgram: Program Info Log:",Y):(J===""||q==="")&&(nt=!1);nt&&(P.diagnostics={runnable:at,programLog:Y,vertexShader:{log:J,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(E),s.deleteShader(A),v=new Ma(s,M),C=fy(s,M)}let v;this.getUniforms=function(){return v===void 0&&I(this),v};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(M,iy)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sy++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=A,this}let Ry=0;class Py{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Dy(t),e.set(t,i)),i}}class Dy{constructor(t){this.id=Ry++,this.code=t,this.usedTimes=0}}function Ly(n){return n===is||n===Da||n===La}function Iy(n,t,e,i,s,r){const a=new Ic,o=new Py,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function M(v,C,L,P,U,W){const F=P.fog,Y=U.geometry,J=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,at=t.get(v.envMap||J,q),nt=at&&at.mapping===Za?at.image.height:null,ct=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Vt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,wt=lt!==void 0?lt.length:0;let Dt=0;Y.morphAttributes.position!==void 0&&(Dt=1),Y.morphAttributes.normal!==void 0&&(Dt=2),Y.morphAttributes.color!==void 0&&(Dt=3);let te,Yt,qt,it;if(ct){const pe=Vn[ct];te=pe.vertexShader,Yt=pe.fragmentShader}else{te=v.vertexShader,Yt=v.fragmentShader;const pe=o.getVertexShaderStage(v),re=o.getFragmentShaderStage(v);o.update(v,pe,re),qt=pe.id,it=re.id}const tt=n.getRenderTarget(),vt=n.state.buffers.depth.getReversed(),Ht=U.isInstancedMesh===!0,Ct=U.isBatchedMesh===!0,T=!!v.map,N=!!v.matcap,D=!!at,G=!!v.aoMap,z=!!v.lightMap,k=!!v.bumpMap&&v.wireframe===!1,$=!!v.normalMap,ot=!!v.displacementMap,st=!!v.emissiveMap,Q=!!v.metalnessMap,pt=!!v.roughnessMap,w=v.anisotropy>0,xt=v.clearcoat>0,St=v.dispersion>0,y=v.retroreflectivity>0,g=v.iridescence>0,B=v.sheen>0,X=v.transmission>0,j=w&&!!v.anisotropyMap,ft=xt&&!!v.clearcoatMap,mt=xt&&!!v.clearcoatNormalMap,rt=xt&&!!v.clearcoatRoughnessMap,ht=g&&!!v.iridescenceMap,_t=g&&!!v.iridescenceThicknessMap,Lt=B&&!!v.sheenColorMap,yt=B&&!!v.sheenRoughnessMap,Mt=!!v.specularMap,zt=!!v.specularColorMap,kt=!!v.specularIntensityMap,Kt=X&&!!v.transmissionMap,V=X&&!!v.thicknessMap,bt=!!v.gradientMap,ut=!!v.alphaMap,Et=v.alphaTest>0,Pt=!!v.alphaHash,dt=!!v.extensions;let Gt=$n;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Gt=n.toneMapping);const Ft={shaderID:ct,shaderType:v.type,shaderName:v.name,vertexShader:te,fragmentShader:Yt,defines:v.defines,customVertexShaderID:qt,customFragmentShaderID:it,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&U._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&U.instanceColor!==null,instancingMorph:Ht&&U.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:T,matcap:N,envMap:D,envMapMode:D&&at.mapping,envMapCubeUVHeight:nt,aoMap:G,lightMap:z,bumpMap:k,normalMap:$,displacementMap:ot,emissiveMap:st,normalMapObjectSpace:$&&v.normalMapType===d_,normalMapTangentSpace:$&&v.normalMapType===Jl,packedNormalMap:$&&v.normalMapType===Jl&&Ly(v.normalMap.format),metalnessMap:Q,roughnessMap:pt,anisotropy:w,anisotropyMap:j,clearcoat:xt,clearcoatMap:ft,clearcoatNormalMap:mt,clearcoatRoughnessMap:rt,dispersion:St,retroreflection:y,iridescence:g,iridescenceMap:ht,iridescenceThicknessMap:_t,sheen:B,sheenColorMap:Lt,sheenRoughnessMap:yt,specularMap:Mt,specularColorMap:zt,specularIntensityMap:kt,transmission:X,transmissionMap:Kt,thicknessMap:V,gradientMap:bt,opaque:v.transparent===!1&&v.blending===or&&v.alphaToCoverage===!1,alphaMap:ut,alphaTest:Et,alphaHash:Pt,combine:v.combine,mapUv:T&&_(v.map.channel),aoMapUv:G&&_(v.aoMap.channel),lightMapUv:z&&_(v.lightMap.channel),bumpMapUv:k&&_(v.bumpMap.channel),normalMapUv:$&&_(v.normalMap.channel),displacementMapUv:ot&&_(v.displacementMap.channel),emissiveMapUv:st&&_(v.emissiveMap.channel),metalnessMapUv:Q&&_(v.metalnessMap.channel),roughnessMapUv:pt&&_(v.roughnessMap.channel),anisotropyMapUv:j&&_(v.anisotropyMap.channel),clearcoatMapUv:ft&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:mt&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(v.sheenRoughnessMap.channel),specularMapUv:Mt&&_(v.specularMap.channel),specularColorMapUv:zt&&_(v.specularColorMap.channel),specularIntensityMapUv:kt&&_(v.specularIntensityMap.channel),transmissionMapUv:Kt&&_(v.transmissionMap.channel),thicknessMapUv:V&&_(v.thicknessMap.channel),alphaMapUv:ut&&_(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&($||w),vertexNormals:!!Y.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(T||ut),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||Y.attributes.normal===void 0&&$===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:vt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Dt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,decodeVideoTexture:T&&v.map.isVideoTexture===!0&&ee.getTransfer(v.map.colorSpace)===ce,decodeVideoTextureEmissive:st&&v.emissiveMap.isVideoTexture===!0&&ee.getTransfer(v.emissiveMap.colorSpace)===ce,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ve,flipSided:v.side===an,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:dt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&v.extensions.multiDraw===!0||Ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(v){const C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)C.push(L),C.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(p(C,v),b(C,v),C.push(n.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function p(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function b(v,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function R(v){const C=f[v.type];let L;if(C){const P=Vn[C];L=Y0.clone(P.uniforms)}else L=v.uniforms;return L}function x(v,C){let L=h.get(C);return L!==void 0?++L.usedTimes:(L=new Cy(n,C,v,s),c.push(L),h.set(C,L)),L}function E(v){if(--v.usedTimes===0){const C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function I(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:R,acquireProgram:x,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:I}}function Ny(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Uy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Hu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function zu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,M,m,p){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},n[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=_,b.materialVariant=a(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=m,b.group=p),t++,b}function l(u,f,_,M,m,p,b){b.reversedDepth===!0&&(m=-m);const R=o(u,f,_,M,m,p);_.transmission>0?i.push(R):_.transparent===!0?s.push(R):e.push(R)}function c(u,f,_,M,m,p){const b=o(u,f,_,M,m,p);_.transmission>0?i.unshift(b):_.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||Uy),i.length>1&&i.sort(f||Hu),s.length>1&&s.sort(f||Hu)}function d(){for(let u=t,f=n.length;u<f;u++){const _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Oy(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new zu,n.set(i,[a])):s>=r.length?(a=new zu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Fy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new ne};break;case"SpotLight":e={position:new O,direction:new O,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function By(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Hy=0;function zy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Gy(n){const t=new Fy,e=By(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new Se,a=new Se;function o(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,_=0,M=0,m=0,p=0,b=0,R=0,x=0,E=0,A=0,I=0,v=0,C=0,L=0;c.sort(zy);for(let U=0,W=c.length;U<W;U++){const F=c[U],Y=F.color,J=F.intensity,q=F.distance;let at=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===is?at=F.shadow.map.texture:at=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=Y.r*J,d+=Y.g*J,u+=Y.b*J;else if(F.isLightProbe){for(let nt=0;nt<9;nt++)i.probe[nt].addScaledVector(F.sh.coefficients[nt],J);L++}else if(F.isSunLight){const nt=t.get(F);if(nt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ct=F.shadow,lt=e.get(F);lt.shadowIntensity=ct.intensity,lt.shadowBias=ct.bias,lt.shadowNormalBias=ct.normalBias,lt.shadowRadius=ct.radius,lt.shadowMapSize.copy(ct.mapSize).multiply(ct.getFrameExtents()),i.sunShadow[_]=lt,i.sunShadowMap[_]=at;const wt=ct.getViewportCount();for(let Dt=0;Dt<wt;Dt++)i.sunShadowMatrix[M+Dt]=ct.getMatrix(Dt),i.sunShadowCascade[M+Dt]=ct._cascadeData[Dt];M+=wt,_++}i.sun[f]=nt,f++}else if(F.isDirectionalLight){const nt=t.get(F);if(nt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ct=F.shadow,lt=e.get(F);lt.shadowIntensity=ct.intensity,lt.shadowBias=ct.bias,lt.shadowNormalBias=ct.normalBias,lt.shadowRadius=ct.radius,lt.shadowMapSize=ct.mapSize,i.directionalShadow[m]=lt,i.directionalShadowMap[m]=at,i.directionalShadowMatrix[m]=F.shadow.matrix,E++}i.directional[m]=nt,m++}else if(F.isSpotLight){const nt=t.get(F);nt.position.setFromMatrixPosition(F.matrixWorld),nt.color.copy(Y).multiplyScalar(J),nt.distance=q,nt.coneCos=Math.cos(F.angle),nt.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),nt.decay=F.decay,i.spot[b]=nt;const ct=F.shadow;if(F.map&&(i.spotLightMap[v]=F.map,v++,ct.updateMatrices(F),F.castShadow&&C++),i.spotLightMatrix[b]=ct.matrix,F.castShadow){const lt=e.get(F);lt.shadowIntensity=ct.intensity,lt.shadowBias=ct.bias,lt.shadowNormalBias=ct.normalBias,lt.shadowRadius=ct.radius,lt.shadowMapSize=ct.mapSize,i.spotShadow[b]=lt,i.spotShadowMap[b]=at,I++}b++}else if(F.isRectAreaLight){const nt=t.get(F);nt.color.copy(Y).multiplyScalar(J),nt.halfWidth.set(F.width*.5,0,0),nt.halfHeight.set(0,F.height*.5,0),i.rectArea[R]=nt,R++}else if(F.isPointLight){const nt=t.get(F);if(nt.color.copy(F.color).multiplyScalar(F.intensity),nt.distance=F.distance,nt.decay=F.decay,F.castShadow){const ct=F.shadow,lt=e.get(F);lt.shadowIntensity=ct.intensity,lt.shadowBias=ct.bias,lt.shadowNormalBias=ct.normalBias,lt.shadowRadius=ct.radius,lt.shadowMapSize=ct.mapSize,lt.shadowCameraNear=ct.camera.near,lt.shadowCameraFar=ct.camera.far,i.pointShadow[p]=lt,i.pointShadowMap[p]=at,i.pointShadowMatrix[p]=F.shadow.matrix,A++}i.point[p]=nt,p++}else if(F.isHemisphereLight){const nt=t.get(F);nt.skyColor.copy(F.color).multiplyScalar(J),nt.groundColor.copy(F.groundColor).multiplyScalar(J),i.hemi[x]=nt,x++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const P=i.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==b||P.rectAreaLength!==R||P.hemiLength!==x||P.numSunShadows!==_||P.numDirectionalShadows!==E||P.numPointShadows!==A||P.numSpotShadows!==I||P.numSpotMaps!==v||P.numLightProbes!==L)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=R,i.point.length=p,i.hemi.length=x,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=I,i.spotShadowMap.length=I,i.spotLightMatrix.length=I+v-C,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,P.sunLength=f,P.directionalLength=m,P.pointLength=p,P.spotLength=b,P.rectAreaLength=R,P.hemiLength=x,P.numSunShadows=_,P.numDirectionalShadows=E,P.numPointShadows=A,P.numSpotShadows=I,P.numSpotMaps=v,P.numLightProbes=L,i.version=Hy++)}function l(c,h){let d=0,u=0,f=0,_=0,M=0,m=0;const p=h.matrixWorldInverse;for(let b=0,R=c.length;b<R;b++){const x=c[b];if(x.isSunLight){const E=i.sun[d];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(x.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),_++}else if(x.isRectAreaLight){const E=i.rectArea[M];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Gu(n){const t=new Gy(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ky(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Gu(n),t.set(s,[o])):r>=a.length?(o=new Gu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
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
}`,Xy=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Yy=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ku=new Se,Ks=new O,Zo=new O;function qy(n,t,e){let i=new Oc;const s=new gt,r=new gt,a=new Me,o=new $0,l=new J0,c={},h=e.maxTextureSize,d={[es]:an,[an]:es,[Ve]:Ve},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Vy,fragmentShader:Wy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new xe(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ga;let p=this.type;this.render=function(A,I,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Vg&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ga);const C=n.getRenderTarget(),L=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(gi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=p!==this.type;W&&I.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(Y=>Y.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,Y=A.length;F<Y;F++){const J=A[F],q=J.shadow;if(q===void 0){Vt("WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const at=q.getFrameExtents();s.multiply(at),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,q.mapSize.y=r.y));const nt=n.state.buffers.depth.getReversed();if(q.camera._reversedDepth=nt,q.map===null||W===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Qs){if(J.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Pn(s.x,s.y,{format:is,type:ei,minFilter:We,magFilter:We,generateMipmaps:!1}),q.map.texture.name=J.name+".shadowMap",q.map.depthTexture=new Tr(s.x,s.y,qn),q.map.depthTexture.name=J.name+".shadowMapDepth",q.map.depthTexture.format=yi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ue,q.map.depthTexture.magFilter=Ue}else J.isPointLight?(q.map=new qf(s.x),q.map.depthTexture=new h0(s.x,ti)):(q.map=new Pn(s.x,s.y),q.map.depthTexture=new Tr(s.x,s.y,ti)),q.map.depthTexture.name=J.name+".shadowMap",q.map.depthTexture.format=yi,this.type===ga?(q.map.depthTexture.compareFunction=nt?Pc:Rc,q.map.depthTexture.minFilter=We,q.map.depthTexture.magFilter=We):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Ue,q.map.depthTexture.magFilter=Ue);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);const ct=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();J.isPointLight!==!0&&q.updateMatrices(J,v);for(let lt=0;lt<ct;lt++){const wt=q.getCamera(lt);if(J.isPointLight){const Dt=q.camera,te=q.matrix,Yt=J.distance||Dt.far;Yt!==Dt.far&&(Dt.far=Yt,Dt.updateProjectionMatrix()),Ks.setFromMatrixPosition(J.matrixWorld),Dt.position.copy(Ks),Zo.copy(Dt.position),Zo.add(Xy[lt]),Dt.up.copy(Yy[lt]),Dt.lookAt(Zo),Dt.updateMatrixWorld(),te.makeTranslation(-Ks.x,-Ks.y,-Ks.z),ku.multiplyMatrices(Dt.projectionMatrix,Dt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(ku,Dt.coordinateSystem,Dt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)n.setRenderTarget(q.map,lt),n.clear();else{lt===0&&(n.setRenderTarget(q.map),n.clear());const Dt=q.getViewport(lt);a.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),U.viewport(a)}i=q.getFrustum(lt),x(I,v,wt,J,this.type)}q.isPointLightShadow!==!0&&this.type===Qs&&b(q,v),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,L,P)};function b(A,I){const v=t.update(M);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Pn(s.x,s.y,{format:is,type:ei}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(I,null,v,u,M,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(I,null,v,f,M,null)}function R(A,I,v,C){let L=null;const P=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)L=P;else if(L=v.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const U=L.uuid,W=I.uuid;let F=c[U];F===void 0&&(F={},c[U]=F);let Y=F[W];Y===void 0&&(Y=L.clone(),F[W]=Y,I.addEventListener("dispose",E)),L=Y}if(L.visible=I.visible,L.wireframe=I.wireframe,C===Qs?L.side=I.shadowSide!==null?I.shadowSide:I.side:L.side=I.shadowSide!==null?I.shadowSide:d[I.side],L.alphaMap=I.alphaMap,L.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,L.map=I.map,L.clipShadows=I.clipShadows,L.clippingPlanes=I.clippingPlanes,L.clipIntersection=I.clipIntersection,L.displacementMap=I.displacementMap,L.displacementScale=I.displacementScale,L.displacementBias=I.displacementBias,L.wireframeLinewidth=I.wireframeLinewidth,L.linewidth=I.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const U=n.properties.get(L);U.light=v}return L}function x(A,I,v,C,L){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===Qs)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const W=t.update(A),F=A.material;if(Array.isArray(F)){const Y=W.groups;for(let J=0,q=Y.length;J<q;J++){const at=Y[J],nt=F[at.materialIndex];if(nt&&nt.visible){const ct=R(A,nt,C,L);A.onBeforeShadow(n,A,I,v,W,ct,at),n.renderBufferDirect(v,null,W,ct,A,at),A.onAfterShadow(n,A,I,v,W,ct,at)}}}else if(F.visible){const Y=R(A,F,C,L);A.onBeforeShadow(n,A,I,v,W,Y,null),n.renderBufferDirect(v,null,W,Y,A,null),A.onAfterShadow(n,A,I,v,W,Y,null)}}const U=A.children;for(let W=0,F=U.length;W<F;W++)x(U[W],I,v,C,L)}function E(A){A.target.removeEventListener("dispose",E);for(const v in c){const C=c[v],L=A.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}function Ky(n,t){function e(){let V=!1;const bt=new Me;let ut=null;const Et=new Me(0,0,0,0);return{setMask:function(Pt){ut!==Pt&&!V&&(n.colorMask(Pt,Pt,Pt,Pt),ut=Pt)},setLocked:function(Pt){V=Pt},setClear:function(Pt,dt,Gt,Ft,pe){pe===!0&&(Pt*=Ft,dt*=Ft,Gt*=Ft),bt.set(Pt,dt,Gt,Ft),Et.equals(bt)===!1&&(n.clearColor(Pt,dt,Gt,Ft),Et.copy(bt))},reset:function(){V=!1,ut=null,Et.set(-1,0,0,0)}}}function i(){let V=!1,bt=!1,ut=null,Et=null,Pt=null;return{setReversed:function(dt){if(bt!==dt){const Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=dt;const Ft=Pt;Pt=null,this.setClear(Ft)}},getReversed:function(){return bt},setTest:function(dt){dt?tt(n.DEPTH_TEST):vt(n.DEPTH_TEST)},setMask:function(dt){ut!==dt&&!V&&(n.depthMask(dt),ut=dt)},setFunc:function(dt){if(bt&&(dt=E_[dt]),Et!==dt){switch(dt){case dl:n.depthFunc(n.NEVER);break;case fl:n.depthFunc(n.ALWAYS);break;case pl:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case ml:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case _l:n.depthFunc(n.GREATER);break;case vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Et=dt}},setLocked:function(dt){V=dt},setClear:function(dt){Pt!==dt&&(Pt=dt,bt&&(dt=1-dt),n.clearDepth(dt))},reset:function(){V=!1,ut=null,Et=null,Pt=null,bt=!1}}}function s(){let V=!1,bt=null,ut=null,Et=null,Pt=null,dt=null,Gt=null,Ft=null,pe=null;return{setTest:function(re){V||(re?tt(n.STENCIL_TEST):vt(n.STENCIL_TEST))},setMask:function(re){bt!==re&&!V&&(n.stencilMask(re),bt=re)},setFunc:function(re,xn,In){(ut!==re||Et!==xn||Pt!==In)&&(n.stencilFunc(re,xn,In),ut=re,Et=xn,Pt=In)},setOp:function(re,xn,In){(dt!==re||Gt!==xn||Ft!==In)&&(n.stencilOp(re,xn,In),dt=re,Gt=xn,Ft=In)},setLocked:function(re){V=re},setClear:function(re){pe!==re&&(n.clearStencil(re),pe=re)},reset:function(){V=!1,bt=null,ut=null,Et=null,Pt=null,dt=null,Gt=null,Ft=null,pe=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,_=[],M=null,m=!1,p=null,b=null,R=null,x=null,E=null,A=null,I=null,v=new ne(0,0,0),C=0,L=!1,P=null,U=null,W=null,F=null,Y=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,at=0;const nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(nt)[1]),q=at>=1):nt.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),q=at>=2);let ct=null,lt={};const wt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),te=new Me().fromArray(wt),Yt=new Me().fromArray(Dt);function qt(V,bt,ut,Et){const Pt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(V,dt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<ut;Gt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,Et,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(bt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return dt}const it={};it[n.TEXTURE_2D]=qt(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(xr),k(!1),$(Uh),tt(n.CULL_FACE),G(gi);function tt(V){h[V]!==!0&&(n.enable(V),h[V]=!0)}function vt(V){h[V]!==!1&&(n.disable(V),h[V]=!1)}function Ht(V,bt){return u[V]!==bt?(n.bindFramebuffer(V,bt),u[V]=bt,V===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=bt),V===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ct(V,bt){let ut=_,Et=!1;if(V){ut=f.get(bt),ut===void 0&&(ut=[],f.set(bt,ut));const Pt=V.textures;if(ut.length!==Pt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Gt=Pt.length;dt<Gt;dt++)ut[dt]=n.COLOR_ATTACHMENT0+dt;ut.length=Pt.length,Et=!0}}else ut[0]!==n.BACK&&(ut[0]=n.BACK,Et=!0);Et&&n.drawBuffers(ut)}function T(V){return M!==V?(n.useProgram(V),M=V,!0):!1}const N={[As]:n.FUNC_ADD,[Xg]:n.FUNC_SUBTRACT,[Yg]:n.FUNC_REVERSE_SUBTRACT};N[qg]=n.MIN,N[Kg]=n.MAX;const D={[Zg]:n.ZERO,[$g]:n.ONE,[Jg]:n.SRC_COLOR,[lf]:n.SRC_ALPHA,[i_]:n.SRC_ALPHA_SATURATE,[e_]:n.DST_COLOR,[jg]:n.DST_ALPHA,[Qg]:n.ONE_MINUS_SRC_COLOR,[cf]:n.ONE_MINUS_SRC_ALPHA,[n_]:n.ONE_MINUS_DST_COLOR,[t_]:n.ONE_MINUS_DST_ALPHA,[s_]:n.CONSTANT_COLOR,[r_]:n.ONE_MINUS_CONSTANT_COLOR,[a_]:n.CONSTANT_ALPHA,[o_]:n.ONE_MINUS_CONSTANT_ALPHA};function G(V,bt,ut,Et,Pt,dt,Gt,Ft,pe,re){if(V===gi){m===!0&&(vt(n.BLEND),m=!1);return}if(m===!1&&(tt(n.BLEND),m=!0),V!==Wg){if(V!==p||re!==L){if((b!==As||E!==As)&&(n.blendEquation(n.FUNC_ADD),b=As,E=As),re)switch(V){case or:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFunc(n.ONE,n.ONE);break;case Fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ul:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",V);break}else switch(V){case or:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fh:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",V);break}R=null,x=null,A=null,I=null,v.set(0,0,0),C=0,p=V,L=re}return}Pt=Pt||bt,dt=dt||ut,Gt=Gt||Et,(bt!==b||Pt!==E)&&(n.blendEquationSeparate(N[bt],N[Pt]),b=bt,E=Pt),(ut!==R||Et!==x||dt!==A||Gt!==I)&&(n.blendFuncSeparate(D[ut],D[Et],D[dt],D[Gt]),R=ut,x=Et,A=dt,I=Gt),(Ft.equals(v)===!1||pe!==C)&&(n.blendColor(Ft.r,Ft.g,Ft.b,pe),v.copy(Ft),C=pe),p=V,L=!1}function z(V,bt){V.side===Ve?vt(n.CULL_FACE):tt(n.CULL_FACE);let ut=V.side===an;bt&&(ut=!ut),k(ut),V.blending===or&&V.transparent===!1?G(gi):G(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);const Et=V.stencilWrite;o.setTest(Et),Et&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),st(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):vt(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(V){P!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),P=V)}function $(V){V!==Gg?(tt(n.CULL_FACE),V!==U&&(V===Uh?n.cullFace(n.BACK):V===kg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):vt(n.CULL_FACE),U=V}function ot(V){V!==W&&(q&&n.lineWidth(V),W=V)}function st(V,bt,ut){V?(tt(n.POLYGON_OFFSET_FILL),(F!==bt||Y!==ut)&&(F=bt,Y=ut,a.getReversed()&&(bt=-bt),n.polygonOffset(bt,ut))):vt(n.POLYGON_OFFSET_FILL)}function Q(V){V?tt(n.SCISSOR_TEST):vt(n.SCISSOR_TEST)}function pt(V){V===void 0&&(V=n.TEXTURE0+J-1),ct!==V&&(n.activeTexture(V),ct=V)}function w(V,bt,ut){ut===void 0&&(ct===null?ut=n.TEXTURE0+J-1:ut=ct);let Et=lt[ut];Et===void 0&&(Et={type:void 0,texture:void 0},lt[ut]=Et),(Et.type!==V||Et.texture!==bt)&&(ct!==ut&&(n.activeTexture(ut),ct=ut),n.bindTexture(V,bt||it[V]),Et.type=V,Et.texture=bt)}function xt(){const V=lt[ct];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function St(){try{n.compressedTexImage2D(...arguments)}catch(V){ie("WebGLState:",V)}}function y(){try{n.compressedTexImage3D(...arguments)}catch(V){ie("WebGLState:",V)}}function g(){try{n.texSubImage2D(...arguments)}catch(V){ie("WebGLState:",V)}}function B(){try{n.texSubImage3D(...arguments)}catch(V){ie("WebGLState:",V)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(V){ie("WebGLState:",V)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(V){ie("WebGLState:",V)}}function ft(){try{n.texStorage2D(...arguments)}catch(V){ie("WebGLState:",V)}}function mt(){try{n.texStorage3D(...arguments)}catch(V){ie("WebGLState:",V)}}function rt(){try{n.texImage2D(...arguments)}catch(V){ie("WebGLState:",V)}}function ht(){try{n.texImage3D(...arguments)}catch(V){ie("WebGLState:",V)}}function _t(V){return d[V]!==void 0?d[V]:n.getParameter(V)}function Lt(V,bt){d[V]!==bt&&(n.pixelStorei(V,bt),d[V]=bt)}function yt(V){te.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),te.copy(V))}function Mt(V){Yt.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Yt.copy(V))}function zt(V,bt){let ut=c.get(bt);ut===void 0&&(ut=new WeakMap,c.set(bt,ut));let Et=ut.get(V);Et===void 0&&(Et=n.getUniformBlockIndex(bt,V.name),ut.set(V,Et))}function kt(V,bt){const Et=c.get(bt).get(V);l.get(bt)!==Et&&(n.uniformBlockBinding(bt,Et,V.__bindingPointIndex),l.set(bt,Et))}function Kt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},ct=null,lt={},u={},f=new WeakMap,_=[],M=null,m=!1,p=null,b=null,R=null,x=null,E=null,A=null,I=null,v=new ne(0,0,0),C=0,L=!1,P=null,U=null,W=null,F=null,Y=null,te.set(0,0,n.canvas.width,n.canvas.height),Yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:vt,bindFramebuffer:Ht,drawBuffers:Ct,useProgram:T,setBlending:G,setMaterial:z,setFlipSided:k,setCullFace:$,setLineWidth:ot,setPolygonOffset:st,setScissorTest:Q,activeTexture:pt,bindTexture:w,unbindTexture:xt,compressedTexImage2D:St,compressedTexImage3D:y,texImage2D:rt,texImage3D:ht,pixelStorei:Lt,getParameter:_t,updateUBOMapping:zt,uniformBlockBinding:kt,texStorage2D:ft,texStorage3D:mt,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:j,scissor:yt,viewport:Mt,reset:Kt}}function Zy(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,g){return _?new OffscreenCanvas(y,g):br("canvas")}function m(y,g,B){let X=1;const j=St(y);if((j.width>B||j.height>B)&&(X=B/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const ft=Math.floor(X*j.width),mt=Math.floor(X*j.height);u===void 0&&(u=M(ft,mt));const rt=g?M(ft,mt):u;return rt.width=ft,rt.height=mt,rt.getContext("2d").drawImage(y,0,0,ft,mt),Vt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ft+"x"+mt+")."),rt}else return"data"in y&&Vt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),y;return y}function p(y){return y.generateMipmaps}function b(y){n.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(y,g,B,X,j,ft=!1){if(y!==null){if(n[y]!==void 0)return n[y];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let mt;X&&(mt=t.get("EXT_texture_norm16"),mt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=g;if(g===n.RED&&(B===n.FLOAT&&(rt=n.R32F),B===n.HALF_FLOAT&&(rt=n.R16F),B===n.UNSIGNED_BYTE&&(rt=n.R8),B===n.UNSIGNED_SHORT&&mt&&(rt=mt.R16_EXT),B===n.SHORT&&mt&&(rt=mt.R16_SNORM_EXT)),g===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(rt=n.R8UI),B===n.UNSIGNED_SHORT&&(rt=n.R16UI),B===n.UNSIGNED_INT&&(rt=n.R32UI),B===n.BYTE&&(rt=n.R8I),B===n.SHORT&&(rt=n.R16I),B===n.INT&&(rt=n.R32I)),g===n.RG&&(B===n.FLOAT&&(rt=n.RG32F),B===n.HALF_FLOAT&&(rt=n.RG16F),B===n.UNSIGNED_BYTE&&(rt=n.RG8),B===n.UNSIGNED_SHORT&&mt&&(rt=mt.RG16_EXT),B===n.SHORT&&mt&&(rt=mt.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(rt=n.RG8UI),B===n.UNSIGNED_SHORT&&(rt=n.RG16UI),B===n.UNSIGNED_INT&&(rt=n.RG32UI),B===n.BYTE&&(rt=n.RG8I),B===n.SHORT&&(rt=n.RG16I),B===n.INT&&(rt=n.RG32I)),g===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(rt=n.RGB8UI),B===n.UNSIGNED_SHORT&&(rt=n.RGB16UI),B===n.UNSIGNED_INT&&(rt=n.RGB32UI),B===n.BYTE&&(rt=n.RGB8I),B===n.SHORT&&(rt=n.RGB16I),B===n.INT&&(rt=n.RGB32I)),g===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(rt=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(rt=n.RGBA16UI),B===n.UNSIGNED_INT&&(rt=n.RGBA32UI),B===n.BYTE&&(rt=n.RGBA8I),B===n.SHORT&&(rt=n.RGBA16I),B===n.INT&&(rt=n.RGBA32I)),g===n.RGB&&(B===n.UNSIGNED_SHORT&&mt&&(rt=mt.RGB16_EXT),B===n.SHORT&&mt&&(rt=mt.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(rt=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(rt=n.R11F_G11F_B10F)),g===n.RGBA){const ht=ft?Na:ee.getTransfer(j);B===n.FLOAT&&(rt=n.RGBA32F),B===n.HALF_FLOAT&&(rt=n.RGBA16F),B===n.UNSIGNED_BYTE&&(rt=ht===ce?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&mt&&(rt=mt.RGBA16_EXT),B===n.SHORT&&mt&&(rt=mt.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(rt=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(rt=n.RGB5_A1)}return(rt===n.R16F||rt===n.R32F||rt===n.RG16F||rt===n.RG32F||rt===n.RGBA16F||rt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function E(y,g){let B;return y?g===null||g===ti||g===Mr?B=n.DEPTH24_STENCIL8:g===qn?B=n.DEPTH32F_STENCIL8:g===Sr&&(B=n.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ti||g===Mr?B=n.DEPTH_COMPONENT24:g===qn?B=n.DEPTH_COMPONENT32F:g===Sr&&(B=n.DEPTH_COMPONENT16),B}function A(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ue&&y.minFilter!==We?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function I(y){const g=y.target;g.removeEventListener("dispose",I),C(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&d.delete(g)}function v(y){const g=y.target;g.removeEventListener("dispose",v),P(g)}function C(y){const g=i.get(y);if(g.__webglInit===void 0)return;const B=y.source,X=f.get(B);if(X){const j=X[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&L(y),Object.keys(X).length===0&&f.delete(B)}i.remove(y)}function L(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const B=y.source,X=f.get(B);delete X[g.__cacheKey],a.memory.textures--}function P(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let j=0;j<g.__webglFramebuffer[X].length;j++)n.deleteFramebuffer(g.__webglFramebuffer[X][j]);else n.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)n.deleteFramebuffer(g.__webglFramebuffer[X]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=y.textures;for(let X=0,j=B.length;X<j;X++){const ft=i.get(B[X]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),a.memory.textures--),i.remove(B[X])}i.remove(y)}let U=0;function W(){U=0}function F(){return U}function Y(y){U=y}function J(){const y=U;return y>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,y}function q(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function at(y,g){const B=i.get(y);if(y.isVideoTexture&&w(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&B.__version!==y.version){const X=y.image;if(X===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{vt(B,y,g);return}}else y.isExternalTexture&&(B.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+g)}function nt(y,g){const B=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){vt(B,y,g);return}else y.isExternalTexture&&(B.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+g)}function ct(y,g){const B=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&B.__version!==y.version){vt(B,y,g);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+g)}function lt(y,g){const B=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&B.__version!==y.version){Ht(B,y,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+g)}const wt={[xl]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},Dt={[Ue]:n.NEAREST,[h_]:n.NEAREST_MIPMAP_NEAREST,[zr]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[_o]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},te={[p_]:n.NEVER,[x_]:n.ALWAYS,[m_]:n.LESS,[Rc]:n.LEQUAL,[g_]:n.EQUAL,[Pc]:n.GEQUAL,[__]:n.GREATER,[v_]:n.NOTEQUAL};function Yt(y,g){if(g.type===qn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===We||g.magFilter===_o||g.magFilter===zr||g.magFilter===Zi||g.minFilter===We||g.minFilter===_o||g.minFilter===zr||g.minFilter===Zi)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,wt[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,wt[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,wt[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,Dt[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,Dt[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,te[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ue||g.minFilter!==zr&&g.minFilter!==Zi||g.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function qt(y,g){let B=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",I));const X=g.source;let j=f.get(X);j===void 0&&(j={},f.set(X,j));const ft=q(g);if(ft!==y.__cacheKey){j[ft]===void 0&&(j[ft]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[ft].usedTimes++;const mt=j[y.__cacheKey];mt!==void 0&&(j[y.__cacheKey].usedTimes--,mt.usedTimes===0&&L(g)),y.__cacheKey=ft,y.__webglTexture=j[ft].texture}return B}function it(y,g,B){return Math.floor(Math.floor(y/B)/g)}function tt(y,g,B,X){const ft=y.updateRanges;if(ft.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,B,X,g.data);else{ft.sort((Lt,yt)=>Lt.start-yt.start);let mt=0;for(let Lt=1;Lt<ft.length;Lt++){const yt=ft[mt],Mt=ft[Lt],zt=yt.start+yt.count,kt=it(Mt.start,g.width,4),Kt=it(yt.start,g.width,4);Mt.start<=zt+1&&kt===Kt&&it(Mt.start+Mt.count-1,g.width,4)===kt?yt.count=Math.max(yt.count,Mt.start+Mt.count-yt.start):(++mt,ft[mt]=Mt)}ft.length=mt+1;const rt=e.getParameter(n.UNPACK_ROW_LENGTH),ht=e.getParameter(n.UNPACK_SKIP_PIXELS),_t=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Lt=0,yt=ft.length;Lt<yt;Lt++){const Mt=ft[Lt],zt=Math.floor(Mt.start/4),kt=Math.ceil(Mt.count/4),Kt=zt%g.width,V=Math.floor(zt/g.width),bt=kt,ut=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,Kt,V,bt,ut,B,X,g.data)}y.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,rt),e.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(n.UNPACK_SKIP_ROWS,_t)}}function vt(y,g,B){let X=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=n.TEXTURE_3D);const j=qt(y,g),ft=g.source;e.bindTexture(X,y.__webglTexture,n.TEXTURE0+B);const mt=i.get(ft);if(ft.version!==mt.__version||j===!0){if(e.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ut=ee.getPrimaries(ee.workingColorSpace),Et=g.colorSpace===Ui?null:ee.getPrimaries(g.colorSpace),Pt=g.colorSpace===Ui||ut===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let ht=m(g.image,!1,s.maxTextureSize);ht=xt(g,ht);const _t=r.convert(g.format,g.colorSpace),Lt=r.convert(g.type);let yt=x(g.internalFormat,_t,Lt,g.normalized,g.colorSpace,g.isVideoTexture);Yt(X,g);let Mt;const zt=g.mipmaps,kt=g.isVideoTexture!==!0,Kt=mt.__version===void 0||j===!0,V=ft.dataReady,bt=A(g,ht);if(g.isDepthTexture)yt=E(g.format===$i,g.type),Kt&&(kt?e.texStorage2D(n.TEXTURE_2D,1,yt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,yt,ht.width,ht.height,0,_t,Lt,null));else if(g.isDataTexture)if(zt.length>0){kt&&Kt&&e.texStorage2D(n.TEXTURE_2D,bt,yt,zt[0].width,zt[0].height);for(let ut=0,Et=zt.length;ut<Et;ut++)Mt=zt[ut],kt?V&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,_t,Lt,Mt.data):e.texImage2D(n.TEXTURE_2D,ut,yt,Mt.width,Mt.height,0,_t,Lt,Mt.data);g.generateMipmaps=!1}else kt?(Kt&&e.texStorage2D(n.TEXTURE_2D,bt,yt,ht.width,ht.height),V&&tt(g,ht,_t,Lt)):e.texImage2D(n.TEXTURE_2D,0,yt,ht.width,ht.height,0,_t,Lt,ht.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){kt&&Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,yt,zt[0].width,zt[0].height,ht.depth);for(let ut=0,Et=zt.length;ut<Et;ut++)if(Mt=zt[ut],g.format!==An)if(_t!==null)if(kt){if(V)if(g.layerUpdates.size>0){const Pt=Su(Mt.width,Mt.height,g.format,g.type);for(const dt of g.layerUpdates){const Gt=Mt.data.subarray(dt*Pt/Mt.data.BYTES_PER_ELEMENT,(dt+1)*Pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,dt,Mt.width,Mt.height,1,_t,Gt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Mt.width,Mt.height,ht.depth,_t,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ut,yt,Mt.width,Mt.height,ht.depth,0,Mt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ut,0,0,0,Mt.width,Mt.height,ht.depth,_t,Lt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ut,yt,Mt.width,Mt.height,ht.depth,0,_t,Lt,Mt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{kt&&Kt&&e.texStorage2D(n.TEXTURE_2D,bt,yt,zt[0].width,zt[0].height);for(let ut=0,Et=zt.length;ut<Et;ut++)Mt=zt[ut],g.format!==An?_t!==null?kt?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,_t,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,ut,yt,Mt.width,Mt.height,0,Mt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?V&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,Mt.width,Mt.height,_t,Lt,Mt.data):e.texImage2D(n.TEXTURE_2D,ut,yt,Mt.width,Mt.height,0,_t,Lt,Mt.data)}else if(g.isDataArrayTexture)if(kt){if(Kt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,yt,ht.width,ht.height,ht.depth),V)if(g.layerUpdates.size>0){const ut=Su(ht.width,ht.height,g.format,g.type);for(const Et of g.layerUpdates){const Pt=ht.data.subarray(Et*ut/ht.data.BYTES_PER_ELEMENT,(Et+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Et,ht.width,ht.height,1,_t,Lt,Pt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,_t,Lt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,ht.width,ht.height,ht.depth,0,_t,Lt,ht.data);else if(g.isData3DTexture)kt?(Kt&&e.texStorage3D(n.TEXTURE_3D,bt,yt,ht.width,ht.height,ht.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,_t,Lt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,yt,ht.width,ht.height,ht.depth,0,_t,Lt,ht.data);else if(g.isFramebufferTexture){if(Kt)if(kt)e.texStorage2D(n.TEXTURE_2D,bt,yt,ht.width,ht.height);else{let ut=ht.width,Et=ht.height;for(let Pt=0;Pt<bt;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,yt,ut,Et,0,_t,Lt,null),ut>>=1,Et>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const ut=n.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),ht.parentNode!==ut){ut.appendChild(ht),d.add(g),ut.onpaint=Et=>{const Pt=Et.changedElements;for(const dt of d)Pt.includes(dt.image)&&(dt.needsUpdate=!0)},ut.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ht);else{const Pt=n.RGBA,dt=n.RGBA,Gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Pt,dt,Gt,ht)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(zt.length>0){if(kt&&Kt){const ut=St(zt[0]);e.texStorage2D(n.TEXTURE_2D,bt,yt,ut.width,ut.height)}for(let ut=0,Et=zt.length;ut<Et;ut++)Mt=zt[ut],kt?V&&e.texSubImage2D(n.TEXTURE_2D,ut,0,0,_t,Lt,Mt):e.texImage2D(n.TEXTURE_2D,ut,yt,_t,Lt,Mt);g.generateMipmaps=!1}else if(kt){if(Kt){const ut=St(ht);e.texStorage2D(n.TEXTURE_2D,bt,yt,ut.width,ut.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Lt,ht)}else e.texImage2D(n.TEXTURE_2D,0,yt,_t,Lt,ht);p(g)&&b(X),mt.__version=ft.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ht(y,g,B){if(g.image.length!==6)return;const X=qt(y,g),j=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+B);const ft=i.get(j);if(j.version!==ft.__version||X===!0){e.activeTexture(n.TEXTURE0+B);const mt=ee.getPrimaries(ee.workingColorSpace),rt=g.colorSpace===Ui?null:ee.getPrimaries(g.colorSpace),ht=g.colorSpace===Ui||mt===rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const _t=g.isCompressedTexture||g.image[0].isCompressedTexture,Lt=g.image[0]&&g.image[0].isDataTexture,yt=[];for(let dt=0;dt<6;dt++)!_t&&!Lt?yt[dt]=m(g.image[dt],!0,s.maxCubemapSize):yt[dt]=Lt?g.image[dt].image:g.image[dt],yt[dt]=xt(g,yt[dt]);const Mt=yt[0],zt=r.convert(g.format,g.colorSpace),kt=r.convert(g.type),Kt=x(g.internalFormat,zt,kt,g.normalized,g.colorSpace),V=g.isVideoTexture!==!0,bt=ft.__version===void 0||X===!0,ut=j.dataReady;let Et=A(g,Mt);Yt(n.TEXTURE_CUBE_MAP,g);let Pt;if(_t){V&&bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Kt,Mt.width,Mt.height);for(let dt=0;dt<6;dt++){Pt=yt[dt].mipmaps;for(let Gt=0;Gt<Pt.length;Gt++){const Ft=Pt[Gt];g.format!==An?zt!==null?V?ut&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,Ft.width,Ft.height,zt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,Kt,Ft.width,Ft.height,0,Ft.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,0,0,Ft.width,Ft.height,zt,kt,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt,Kt,Ft.width,Ft.height,0,zt,kt,Ft.data)}}}else{if(Pt=g.mipmaps,V&&bt){Pt.length>0&&Et++;const dt=St(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,Kt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Lt){V?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,yt[dt].width,yt[dt].height,zt,kt,yt[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Kt,yt[dt].width,yt[dt].height,0,zt,kt,yt[dt].data);for(let Gt=0;Gt<Pt.length;Gt++){const pe=Pt[Gt].image[dt].image;V?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,pe.width,pe.height,zt,kt,pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,Kt,pe.width,pe.height,0,zt,kt,pe.data)}}else{V?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,zt,kt,yt[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Kt,zt,kt,yt[dt]);for(let Gt=0;Gt<Pt.length;Gt++){const Ft=Pt[Gt];V?ut&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,0,0,zt,kt,Ft.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Gt+1,Kt,zt,kt,Ft.image[dt])}}}p(g)&&b(n.TEXTURE_CUBE_MAP),ft.__version=j.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function Ct(y,g,B,X,j,ft){const mt=r.convert(B.format,B.colorSpace),rt=r.convert(B.type),ht=x(B.internalFormat,mt,rt,B.normalized,B.colorSpace),_t=i.get(g),Lt=i.get(B);if(Lt.__renderTarget=g,!_t.__hasExternalTextures){const yt=Math.max(1,g.width>>ft),Mt=Math.max(1,g.height>>ft);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,ft,ht,yt,Mt,g.depth,0,mt,rt,null):e.texImage2D(j,ft,ht,yt,Mt,0,mt,rt,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),pt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,j,Lt.__webglTexture,0,Q(g)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,j,Lt.__webglTexture,ft),e.bindFramebuffer(n.FRAMEBUFFER,null)}function T(y,g,B){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const X=g.depthTexture,j=X&&X.isDepthTexture?X.type:null,ft=E(g.stencilBuffer,j),mt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q(g),ft,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q(g),ft,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ft,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,y)}else{const X=g.textures;for(let j=0;j<X.length;j++){const ft=X[j],mt=r.convert(ft.format,ft.colorSpace),rt=r.convert(ft.type),ht=x(ft.internalFormat,mt,rt,ft.normalized,ft.colorSpace);pt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q(g),ht,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q(g),ht,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ht,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(y,g,B){const X=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(g.depthTexture);if(j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,g.depthTexture.addEventListener("dispose",I)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),Yt(n.TEXTURE_CUBE_MAP,g.depthTexture);const _t=r.convert(g.depthTexture.format),Lt=r.convert(g.depthTexture.type);let yt;g.depthTexture.format===yi?yt=n.DEPTH_COMPONENT24:g.depthTexture.format===$i&&(yt=n.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,yt,g.width,g.height,0,_t,Lt,null)}}else at(g.depthTexture,0);const ft=j.__webglTexture,mt=Q(g),rt=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,ht=g.depthTexture.format===$i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===yi)pt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,rt,ft,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,ht,rt,ft,0);else if(g.depthTexture.format===$i)pt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,rt,ft,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,ht,rt,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function D(y){const g=i.get(y),B=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const X=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=X}if(y.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)N(g.__webglFramebuffer[X],y,X);else{const X=y.texture.mipmaps;X&&X.length>0?N(g.__webglFramebuffer[0],y,0):N(g.__webglFramebuffer,y,0)}else if(B){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=n.createRenderbuffer(),T(g.__webglDepthbuffer[X],y,!1);else{const j=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=g.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ft)}}else{const X=y.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),T(g.__webglDepthbuffer,y,!1);else{const j=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ft)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function G(y,g,B){const X=i.get(y);g!==void 0&&Ct(X.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&D(y)}function z(y){const g=y.texture,B=i.get(y),X=i.get(g);y.addEventListener("dispose",v);const j=y.textures,ft=y.isWebGLCubeRenderTarget===!0,mt=j.length>1;if(mt||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=g.version,a.memory.textures++),ft){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let ht=0;ht<g.mipmaps.length;ht++)B.__webglFramebuffer[rt][ht]=n.createFramebuffer()}else B.__webglFramebuffer[rt]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<g.mipmaps.length;rt++)B.__webglFramebuffer[rt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(mt)for(let rt=0,ht=j.length;rt<ht;rt++){const _t=i.get(j[rt]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&pt(y)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<j.length;rt++){const ht=j[rt];B.__webglColorRenderbuffer[rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const _t=r.convert(ht.format,ht.colorSpace),Lt=r.convert(ht.type),yt=x(ht.internalFormat,_t,Lt,ht.normalized,ht.colorSpace,y.isXRRenderTarget===!0),Mt=Q(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,yt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+rt,n.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),T(B.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ft){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Yt(n.TEXTURE_CUBE_MAP,g);for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)Ct(B.__webglFramebuffer[rt][ht],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else Ct(B.__webglFramebuffer[rt],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(g)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let rt=0,ht=j.length;rt<ht;rt++){const _t=j[rt],Lt=i.get(_t);let yt=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(yt=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,Lt.__webglTexture),Yt(yt,_t),Ct(B.__webglFramebuffer,y,_t,n.COLOR_ATTACHMENT0+rt,yt,0),p(_t)&&b(yt)}e.unbindTexture()}else{let rt=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(rt=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(rt,X.__webglTexture),Yt(rt,g),g.mipmaps&&g.mipmaps.length>0)for(let ht=0;ht<g.mipmaps.length;ht++)Ct(B.__webglFramebuffer[ht],y,g,n.COLOR_ATTACHMENT0,rt,ht);else Ct(B.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,rt,0);p(g)&&b(rt),e.unbindTexture()}y.depthBuffer&&D(y)}function k(y){const g=y.textures;for(let B=0,X=g.length;B<X;B++){const j=g[B];if(p(j)){const ft=R(y),mt=i.get(j).__webglTexture;e.bindTexture(ft,mt),b(ft),e.unbindTexture()}}}const $=[],ot=[];function st(y){if(y.samples>0){if(pt(y)===!1){const g=y.textures,B=y.width,X=y.height;let j=n.COLOR_BUFFER_BIT;const ft=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(y),rt=g.length>1;if(rt)for(let _t=0;_t<g.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);const ht=y.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let _t=0;_t<g.length;_t++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),rt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Lt=i.get(g[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,B,X,0,0,B,X,j,n.NEAREST),l===!0&&($.length=0,ot.length=0,$.push(n.COLOR_ATTACHMENT0+_t),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&($.push(ft),ot.push(ft),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),rt)for(let _t=0;_t<g.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);const Lt=i.get(g[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Q(y){return Math.min(s.maxSamples,y.samples)}function pt(y){const g=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function w(y){const g=a.render.frame;h.get(y)!==g&&(h.set(y,g),y.update())}function xt(y,g){const B=y.colorSpace,X=y.format,j=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||B!==Ia&&B!==Ui&&(ee.getTransfer(B)===ce?(X!==An||j!==dn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",B)),g}function St(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=W,this.getTextureUnits=F,this.setTextureUnits=Y,this.setTexture2D=at,this.setTexture2DArray=nt,this.setTexture3D=ct,this.setTextureCube=lt,this.rebindTextures=G,this.setupRenderTarget=z,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=D,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $y(n,t){function e(i,s=Ui){let r;const a=ee.getTransfer(s);if(i===dn)return n.UNSIGNED_BYTE;if(i===Ec)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===yf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===xf)return n.BYTE;if(i===Sf)return n.SHORT;if(i===Sr)return n.UNSIGNED_SHORT;if(i===bc)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===qn)return n.FLOAT;if(i===ei)return n.HALF_FLOAT;if(i===bf)return n.ALPHA;if(i===Ef)return n.RGB;if(i===An)return n.RGBA;if(i===yi)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===Tf)return n.RED;if(i===Ac)return n.RED_INTEGER;if(i===is)return n.RG;if(i===wc)return n.RG_INTEGER;if(i===Cc)return n.RGBA_INTEGER;if(i===_a||i===va||i===xa||i===Sa)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ml||i===yl||i===bl||i===El)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ml)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Al||i===wl||i===Cl||i===Rl||i===Da||i===Pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tl||i===Al)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cl)return r.COMPRESSED_R11_EAC;if(i===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Da)return r.COMPRESSED_RG11_EAC;if(i===Pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dl||i===Ll||i===Il||i===Nl||i===Ul||i===Ol||i===Fl||i===Bl||i===Hl||i===zl||i===Gl||i===kl||i===Vl||i===Wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ll)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Il)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ul)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xl||i===Yl||i===ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Xl)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kl||i===Zl||i===La||i===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===La)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Jy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qy=`
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

}`;class jy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Lf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ln({vertexShader:Jy,fragmentShader:Qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new Fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tb extends Bi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null;const M=typeof XRWebGLBinding<"u",m=new jy,p={},b=e.getContextAttributes();let R=null,x=null;const E=[],A=[],I=new gt;let v=null,C=null;const L=new un;L.viewport=new Me;const P=new un;P.viewport=new Me;const U=[L,P],W=new av;let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let tt=E[it];return tt===void 0&&(tt=new Eo,E[it]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(it){let tt=E[it];return tt===void 0&&(tt=new Eo,E[it]=tt),tt.getGripSpace()},this.getHand=function(it){let tt=E[it];return tt===void 0&&(tt=new Eo,E[it]=tt),tt.getHandSpace()};function J(it){const tt=A.indexOf(it.inputSource);if(tt===-1)return;const vt=E[tt];vt!==void 0&&(vt.update(it.inputSource,it.frame,c||a),vt.dispatchEvent({type:it.type,data:it.inputSource}))}function q(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",at);for(let it=0;it<E.length;it++){const tt=A[it];tt!==null&&(A[it]=null,E[it].disconnect(tt))}F=null,Y=null,m.reset();for(const it in p)delete p[it];if(t.setRenderTarget(R),f=null,u=null,d=null,s=null,x=null,qt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(I.width,I.height,!1),C!==null){const it=C.camera;it.fov=C.fov,it.zoom=C.zoom,it.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,i.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,i.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",q),s.addEventListener("inputsourceschange",at),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Ht=null,Ct=null;b.depth&&(Ct=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=b.stencil?$i:yi,Ht=b.stencil?Mr:ti);const T={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(T),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Pn(u.textureWidth,u.textureHeight,{format:An,type:dn,depthTexture:new Tr(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const vt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Pn(f.framebufferWidth,f.framebufferHeight,{format:An,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function at(it){for(let tt=0;tt<it.removed.length;tt++){const vt=it.removed[tt],Ht=A.indexOf(vt);Ht>=0&&(A[Ht]=null,E[Ht].disconnect(vt))}for(let tt=0;tt<it.added.length;tt++){const vt=it.added[tt];let Ht=A.indexOf(vt);if(Ht===-1){for(let T=0;T<E.length;T++)if(T>=A.length){A.push(vt),Ht=T;break}else if(A[T]===null){A[T]=vt,Ht=T;break}if(Ht===-1)break}const Ct=E[Ht];Ct&&Ct.connect(vt)}}const nt=new O,ct=new O;function lt(it,tt,vt){nt.setFromMatrixPosition(tt.matrixWorld),ct.setFromMatrixPosition(vt.matrixWorld);const Ht=nt.distanceTo(ct),Ct=tt.projectionMatrix.elements,T=vt.projectionMatrix.elements,N=Ct[14]/(Ct[10]-1),D=Ct[14]/(Ct[10]+1),G=(Ct[9]+1)/Ct[5],z=(Ct[9]-1)/Ct[5],k=(Ct[8]-1)/Ct[0],$=(T[8]+1)/T[0],ot=N*k,st=N*$,Q=Ht/(-k+$),pt=Q*-k;if(tt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(pt),it.translateZ(Q),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ct[10]===-1)it.projectionMatrix.copy(tt.projectionMatrix),it.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const w=N+Q,xt=D+Q,St=ot-pt,y=st+(Ht-pt),g=G*D/xt*w,B=z*D/xt*w;it.projectionMatrix.makePerspective(St,y,g,B,w,xt),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function wt(it,tt){tt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(tt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let tt=it.near,vt=it.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),W.near=P.near=L.near=tt,W.far=P.far=L.far=vt,(F!==W.near||Y!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),F=W.near,Y=W.far),W.layers.mask=it.layers.mask|6,L.layers.mask=W.layers.mask&-5,P.layers.mask=W.layers.mask&-3;const Ht=it.parent,Ct=W.cameras;wt(W,Ht);for(let T=0;T<Ct.length;T++)wt(Ct[T],Ht);Ct.length===2?lt(W,L,P):W.projectionMatrix.copy(L.projectionMatrix),C===null&&it.isPerspectiveCamera&&(C={camera:it,fov:it.fov,zoom:it.zoom}),Dt(it,W,Ht)};function Dt(it,tt,vt){vt===null?it.matrix.copy(tt.matrixWorld):(it.matrix.copy(vt.matrixWorld),it.matrix.invert(),it.matrix.multiply(tt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(tt.projectionMatrix),it.projectionMatrixInverse.copy(tt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Er*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(it){l=it,u!==null&&(u.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(it){return p[it]};let te=null;function Yt(it,tt){if(h=tt.getViewerPose(c||a),_=tt,h!==null){const vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ht=!1;vt.length!==W.cameras.length&&(W.cameras.length=0,Ht=!0);for(let D=0;D<vt.length;D++){const G=vt[D];let z=null;if(f!==null)z=f.getViewport(G);else{const $=d.getViewSubImage(u,G);z=$.viewport,D===0&&(t.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(x))}let k=U[D];k===void 0&&(k=new un,k.layers.enable(D),k.viewport=new Me,U[D]=k),k.matrix.fromArray(G.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(G.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(z.x,z.y,z.width,z.height),D===0&&(W.matrix.copy(k.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ht===!0&&W.cameras.push(k)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();const D=d.getDepthInformation(vt[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Ct&&Ct.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let D=0;D<vt.length;D++){const G=vt[D].camera;if(G){let z=p[G];z||(z=new Lf,p[G]=z);const k=d.getCameraImage(G);z.sourceTexture=k}}}}for(let vt=0;vt<E.length;vt++){const Ht=A[vt],Ct=E[vt];Ht!==null&&Ct!==void 0&&Ct.update(Ht,tt,c||a)}te&&te(it,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}const qt=new Xf;qt.setAnimationLoop(Yt),this.setAnimationLoop=function(it){te=it},this.dispose=function(){}}}const eb=new Se,Qf=new Wt;Qf.set(-1,0,0,0,1,0,0,0,1);function nb(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,R,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),R=b.envMap,x=b.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(eb.makeRotationFromEuler(x)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=R*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ib(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const A=E.program;i.uniformBlockBinding(x,A)}function c(x,E){let A=s[x.id];A===void 0&&(m(x),A=h(x),s[x.id]=A,x.addEventListener("dispose",b));const I=E.program;i.updateUBOMapping(x,I);const v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){const E=d();x.__bindingPointIndex=E;const A=n.createBuffer(),I=x.__size,v=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,I,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,A),A}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const E=s[x.id],A=x.uniforms,I=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let v=0,C=A.length;v<C;v++){const L=A[v];if(Array.isArray(L))for(let P=0,U=L.length;P<U;P++)f(L[P],v,P,I);else f(L,v,0,I)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,E,A,I){if(M(x,E,A,I)===!0){const v=x.__offset,C=x.value;if(Array.isArray(C)){let L=0;for(let P=0;P<C.length;P++){const U=C[P],W=p(U);_(U,x.__data,L),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(C,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,x.__data)}}function _(x,E,A){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,A)}function M(x,E,A,I){const v=x.value,C=E+"_"+A;if(I[C]===void 0)return typeof v=="number"||typeof v=="boolean"?I[C]=v:ArrayBuffer.isView(v)?I[C]=v.slice():I[C]=v.clone(),!0;{const L=I[C];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return I[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function m(x){const E=x.uniforms;let A=0;const I=16;for(let C=0,L=E.length;C<L;C++){const P=Array.isArray(E[C])?E[C]:[E[C]];for(let U=0,W=P.length;U<W;U++){const F=P[U],Y=Array.isArray(F.value)?F.value:[F.value];for(let J=0,q=Y.length;J<q;J++){const at=Y[J],nt=p(at),ct=A%I,lt=ct%nt.boundary,wt=ct+lt;A+=lt,wt!==0&&I-wt<nt.storage&&(A+=I-wt),F.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=A,A+=nt.storage}}}const v=A%I;return v>0&&(A+=I-v),x.__size=A,x.__cache={},this}function p(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",x),E}function b(x){const E=x.target;E.removeEventListener("dispose",b);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function R(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}const sb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function rb(){return Fn===null&&(Fn=new l0(sb,16,16,is,ei),Fn.name="DFG_LUT",Fn.minFilter=We,Fn.magFilter=We,Fn.wrapS=fi,Fn.wrapT=fi,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class ab{constructor(t={}){const{canvas:e=y_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=f,m=new Set([Cc,wc,Ac]),p=new Set([dn,ti,Sr,Mr,Ec,Tc]),b=new Uint32Array(4),R=new Int32Array(4),x=new O;let E=null,A=null;const I=[],v=[];let C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let P=!1,U=null,W=null,F=null,Y=null;this._outputColorSpace=Re;let J=0,q=0,at=null,nt=-1,ct=null;const lt=new Me,wt=new Me;let Dt=null;const te=new ne(0);let Yt=0,qt=e.width,it=e.height,tt=1,vt=null,Ht=null;const Ct=new Me(0,0,qt,it),T=new Me(0,0,qt,it);let N=!1;const D=new Oc;let G=!1,z=!1;const k=new Se,$=new O,ot=new Me,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function pt(){return at===null?tt:1}let w=i;function xt(S,H){return e.getContext(S,H)}let St,y,g,B,X,j,ft,mt,rt,ht,_t,Lt,yt,Mt,zt,kt,Kt,V,bt,ut,Et,Pt,dt;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yc}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",xn,!1),w===null){const H="webgl2";if(w=xt(H,S),w===null)throw xt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(S){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),ie("WebGLRenderer: "+S.message),S}function Gt(){St=new rM(w),St.init(),Et=new $y(w,St),y=new ZS(w,St,t,Et),g=new Ky(w,St),y.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),W=w.createFramebuffer(),F=w.createFramebuffer(),Y=w.createFramebuffer(),B=new lM(w),X=new Ny,j=new Zy(w,St,g,X,y,Et,B),ft=new sM(L),mt=new hv(w),Pt=new qS(w,mt),rt=new aM(w,mt,B,Pt),ht=new hM(w,rt,mt,Pt,B),V=new cM(w,y,j),zt=new $S(X),_t=new Iy(L,ft,St,y,Pt,zt),Lt=new nb(L,X),yt=new Oy,Mt=new ky(St),Kt=new YS(L,ft,g,ht,_,l),kt=new qy(L,ht,y),dt=new ib(w,B,y,g),bt=new KS(w,St,B),ut=new oM(w,St,B),B.programs=_t.programs,L.capabilities=y,L.extensions=St,L.properties=X,L.renderLists=yt,L.shadowMap=kt,L.state=g,L.info=B}M!==dn&&(C=new dM(M,e.width,e.height,o,s,r));const Ft=new tb(L,w);this.xr=Ft,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=St.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=St.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(qt,it,!1))},this.getSize=function(S){return S.set(qt,it)},this.setSize=function(S,H,et=!0){if(Ft.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=S,it=H,e.width=Math.floor(S*tt),e.height=Math.floor(H*tt),et===!0&&(e.style.width=S+"px",e.style.height=H+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(qt*tt,it*tt).floor()},this.setDrawingBufferSize=function(S,H,et){qt=S,it=H,tt=et,e.width=Math.floor(S*et),e.height=Math.floor(H*et),this.setViewport(0,0,S,H)},this.setEffects=function(S){if(M===dn){ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let H=0;H<S.length;H++)if(S[H].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(lt)},this.getViewport=function(S){return S.copy(Ct)},this.setViewport=function(S,H,et,K){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,H,et,K),g.viewport(lt.copy(Ct).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(T)},this.setScissor=function(S,H,et,K){S.isVector4?T.set(S.x,S.y,S.z,S.w):T.set(S,H,et,K),g.scissor(wt.copy(T).multiplyScalar(tt).round())},this.getScissorTest=function(){return N},this.setScissorTest=function(S){g.setScissorTest(N=S)},this.setOpaqueSort=function(S){vt=S},this.setTransparentSort=function(S){Ht=S},this.getClearColor=function(S){return S.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(S=!0,H=!0,et=!0){let K=0;if(S){let Z=!1;if(at!==null){const Rt=at.texture.format;Z=m.has(Rt)}if(Z){const Rt=at.texture.type,Nt=p.has(Rt),At=Kt.getClearColor(),Ut=Kt.getClearAlpha(),Bt=At.r,$t=At.g,jt=At.b;Nt?(b[0]=Bt,b[1]=$t,b[2]=jt,b[3]=Ut,w.clearBufferuiv(w.COLOR,0,b)):(R[0]=Bt,R[1]=$t,R[2]=jt,R[3]=Ut,w.clearBufferiv(w.COLOR,0,R))}else K|=w.COLOR_BUFFER_BIT}H&&(K|=w.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(K|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&w.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),U=S},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),Kt.dispose(),yt.dispose(),Mt.dispose(),X.dispose(),ft.dispose(),ht.dispose(),Pt.dispose(),dt.dispose(),_t.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Zc),Ft.removeEventListener("sessionend",$c),Hi.stop()};function pe(S){S.preventDefault(),zh("WebGLRenderer: Context Lost."),P=!0}function re(){zh("WebGLRenderer: Context Restored."),P=!1;const S=B.autoReset,H=kt.enabled,et=kt.autoUpdate,K=kt.needsUpdate,Z=kt.type;Gt(),B.autoReset=S,kt.enabled=H,kt.autoUpdate=et,kt.needsUpdate=K,kt.type=Z}function xn(S){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function In(S){const H=S.target;H.removeEventListener("dispose",In),sp(H)}function sp(S){rp(S),X.remove(S)}function rp(S){const H=X.get(S).programs;H!==void 0&&(H.forEach(function(et){_t.releaseProgram(et)}),S.isShaderMaterial&&_t.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,et,K,Z,Rt){H===null&&(H=st);const Nt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,At=lp(S,H,et,K,Z);g.setMaterial(K,Nt);let Ut=et.index,Bt=1;if(K.wireframe===!0){if(Ut=rt.getWireframeAttribute(et),Ut===void 0)return;Bt=2}const $t=et.drawRange,jt=et.attributes.position;let Ot=$t.start*Bt,ae=($t.start+$t.count)*Bt;Rt!==null&&(Ot=Math.max(Ot,Rt.start*Bt),ae=Math.min(ae,(Rt.start+Rt.count)*Bt)),Ut!==null?(Ot=Math.max(Ot,0),ae=Math.min(ae,Ut.count)):jt!=null&&(Ot=Math.max(Ot,0),ae=Math.min(ae,jt.count));const we=ae-Ot;if(we<0||we===1/0)return;Pt.setup(Z,K,At,et,Ut);let ve,de=bt;if(Ut!==null&&(ve=mt.get(Ut),de=ut,de.setIndex(ve)),Z.isMesh)K.wireframe===!0?(g.setLineWidth(K.wireframeLinewidth*pt()),de.setMode(w.LINES)):de.setMode(w.TRIANGLES);else if(Z.isLine){let Be=K.linewidth;Be===void 0&&(Be=1),g.setLineWidth(Be*pt()),Z.isLineSegments?de.setMode(w.LINES):Z.isLineLoop?de.setMode(w.LINE_LOOP):de.setMode(w.LINE_STRIP)}else Z.isPoints?de.setMode(w.POINTS):Z.isSprite&&de.setMode(w.TRIANGLES);if(Z.isBatchedMesh)if(St.get("WEBGL_multi_draw"))de.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Be=Z._multiDrawStarts,It=Z._multiDrawCounts,qe=Z._multiDrawCount,se=Ut?mt.get(Ut).bytesPerElement:1,mn=X.get(K).currentProgram.getUniforms();for(let Nn=0;Nn<qe;Nn++)mn.setValue(w,"_gl_DrawID",Nn),de.render(Be[Nn]/se,It[Nn])}else if(Z.isInstancedMesh)de.renderInstances(Ot,we,Z.count);else if(et.isInstancedBufferGeometry){const Be=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,It=Math.min(et.instanceCount,Be);de.renderInstances(Ot,we,It)}else de.render(Ot,we)};function Kc(S,H,et,K){U!==null&&S.isNodeMaterial&&U.setObject(K,S),G===!0&&zt.setState(S,et,!1),S.transparent===!0&&S.side===Ve&&S.forceSinglePass===!1?(S.side=an,S.needsUpdate=!0,Ur(S,H,K),S.side=es,S.needsUpdate=!0,Ur(S,H,K),S.side=Ve):Ur(S,H,K)}this.compile=function(S,H,et=null){et===null&&(et=S),U!==null&&U.renderStart(S,H,et),A=Mt.get(et),A.init(H),v.push(A),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),S!==et&&S.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),A.setupLights(),U!==null&&U.updateLights(A.state.lightsArray),z=this.localClippingEnabled,G=zt.init(this.clippingPlanes,z),G===!0&&zt.setGlobalState(this.clippingPlanes,H),U!==null&&kt.render(A.state.shadowsArray,et,H);const K=new Set;return S.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Rt=Z.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){const At=Rt[Nt];Kc(At,et,H,Z),K.add(At)}else Kc(Rt,et,H,Z),K.add(Rt)}),A=v.pop(),U!==null&&U.renderEnd(),K},this.compileAsync=function(S,H,et=null){const K=this.compile(S,H,et);return new Promise(Z=>{function Rt(){if(K.forEach(function(Nt){const Ut=X.get(Nt).currentProgram;(Ut===void 0||Ut.isReady())&&K.delete(Nt)}),K.size===0){Z(S);return}setTimeout(Rt,10)}St.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let ja=null;function ap(S){ja&&ja(S)}function Zc(){Hi.stop()}function $c(){Hi.start()}const Hi=new Xf;Hi.setAnimationLoop(ap),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(S){ja=S,Ft.setAnimationLoop(S),S===null?Hi.stop():Hi.start()},Ft.addEventListener("sessionstart",Zc),Ft.addEventListener("sessionend",$c),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;U!==null&&U.renderStart(S,H);const et=Ft.enabled===!0&&Ft.isPresenting===!0,K=C!==null&&(at===null||et)&&C.begin(L,at);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(H),H=Ft.getCamera()),S.isScene===!0&&S.onBeforeRender(L,S,H,at),A=Mt.get(S,v.length),A.init(H),A.state.textureUnits=j.getTextureUnits(),v.push(A),k.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),D.setFromProjectionMatrix(k,Kn,H.reversedDepth),z=this.localClippingEnabled,G=zt.init(this.clippingPlanes,z),E=yt.get(S,I.length),E.init(),I.push(E),Ft.enabled===!0&&Ft.isPresenting===!0){const Nt=L.xr.getDepthSensingMesh();Nt!==null&&to(Nt,H,-1/0,L.sortObjects)}to(S,H,0,L.sortObjects),E.finish(),U!==null&&U.updateLights(A.state.lightsArray),L.sortObjects===!0&&E.sort(vt,Ht),Q=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Q&&Kt.addToRenderList(E,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),G===!0&&zt.beginShadows();const Z=A.state.shadowsArray;if(kt.render(Z,S,H),G===!0&&zt.endShadows(),(K&&C.hasRenderPass())===!1){const Nt=E.opaque,At=E.transmissive;if(A.setupLights(),H.isArrayCamera){const Ut=H.cameras;if(At.length>0)for(let Bt=0,$t=Ut.length;Bt<$t;Bt++){const jt=Ut[Bt];Qc(Nt,At,S,jt)}Q&&Kt.render(S);for(let Bt=0,$t=Ut.length;Bt<$t;Bt++){const jt=Ut[Bt];Jc(E,S,jt,jt.viewport)}}else At.length>0&&Qc(Nt,At,S,H),Q&&Kt.render(S),Jc(E,S,H)}at!==null&&q===0&&(j.updateMultisampleRenderTarget(at),j.updateRenderTargetMipmap(at)),K&&C.end(L),S.isScene===!0&&S.onAfterRender(L,S,H),Pt.resetDefaultState(),nt=-1,ct=null,v.pop(),v.length>0?(A=v[v.length-1],j.setTextureUnits(A.state.textureUnits),G===!0&&zt.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,I.pop(),I.length>0?E=I[I.length-1]:E=null,U!==null&&U.renderEnd()};function to(S,H,et,K){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)et=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLightProbeGrid)A.pushLightProbeGrid(S);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(D)){K&&ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(k);const Nt=ht.update(S),At=S.material;At.visible&&E.push(S,Nt,At,et,ot.z,null,H)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(D))){const Nt=ht.update(S),At=S.material;if(K&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ot.copy(S.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),ot.copy(Nt.boundingSphere.center)),ot.applyMatrix4(S.matrixWorld).applyMatrix4(k)),Array.isArray(At)){const Ut=Nt.groups;for(let Bt=0,$t=Ut.length;Bt<$t;Bt++){const jt=Ut[Bt],Ot=At[jt.materialIndex];Ot&&Ot.visible&&E.push(S,Nt,Ot,et,ot.z,jt,H)}}else At.visible&&E.push(S,Nt,At,et,ot.z,null,H)}}const Rt=S.children;for(let Nt=0,At=Rt.length;Nt<At;Nt++)to(Rt[Nt],H,et,K)}function Jc(S,H,et,K){const{opaque:Z,transmissive:Rt,transparent:Nt}=S;A.setupLightsView(et),G===!0&&zt.setGlobalState(L.clippingPlanes,et),K&&g.viewport(lt.copy(K)),Z.length>0&&Nr(Z,H,et),Rt.length>0&&Nr(Rt,H,et),Nt.length>0&&Nr(Nt,H,et),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Qc(S,H,et,K){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[K.id]===void 0){const Ot=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[K.id]=new Pn(1,1,{generateMipmaps:!0,type:Ot?ei:dn,minFilter:Zi,samples:Math.max(4,y.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const Rt=A.state.transmissionRenderTarget[K.id],Nt=K.viewport||lt;Rt.setSize(Nt.z*L.transmissionResolutionScale,Nt.w*L.transmissionResolutionScale);const At=L.getRenderTarget(),Ut=L.getActiveCubeFace(),Bt=L.getActiveMipmapLevel();L.setRenderTarget(Rt),L.getClearColor(te),Yt=L.getClearAlpha(),Yt<1&&L.setClearColor(16777215,.5),L.clear(),Q&&Kt.render(et);const $t=L.toneMapping;L.toneMapping=$n;const jt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),A.setupLightsView(K),G===!0&&zt.setGlobalState(L.clippingPlanes,K),Nr(S,et,K),j.updateMultisampleRenderTarget(Rt),j.updateRenderTargetMipmap(Rt),St.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ae=0,we=H.length;ae<we;ae++){const ve=H[ae],{object:de,geometry:Be,material:It,group:qe}=ve;if(It.side===Ve&&de.layers.test(K.layers)){const se=It.side;It.side=an,It.needsUpdate=!0,jc(de,et,K,Be,It,qe),It.side=se,It.needsUpdate=!0,Ot=!0}}Ot===!0&&(j.updateMultisampleRenderTarget(Rt),j.updateRenderTargetMipmap(Rt))}L.setRenderTarget(At,Ut,Bt),L.setClearColor(te,Yt),jt!==void 0&&(K.viewport=jt),L.toneMapping=$t}function Nr(S,H,et){const K=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Rt=S.length;Z<Rt;Z++){const Nt=S[Z],{object:At,geometry:Ut,group:Bt}=Nt;let $t=Nt.material;$t.allowOverride===!0&&K!==null&&($t=K),At.layers.test(et.layers)&&jc(At,H,et,Ut,$t,Bt)}}function jc(S,H,et,K,Z,Rt){U!==null&&Z.isNodeMaterial&&U.setObject(S,Z),S.onBeforeRender(L,H,et,K,Z,Rt),S.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(L,H,et,K,S,Rt),Z.transparent===!0&&Z.side===Ve&&Z.forceSinglePass===!1?(Z.side=an,Z.needsUpdate=!0,L.renderBufferDirect(et,H,K,Z,S,Rt),Z.side=es,Z.needsUpdate=!0,L.renderBufferDirect(et,H,K,Z,S,Rt),Z.side=Ve):L.renderBufferDirect(et,H,K,Z,S,Rt),S.onAfterRender(L,H,et,K,Z,Rt)}function Ur(S,H,et){H.isScene!==!0&&(H=st);const K=X.get(S),Z=A.state.lights,Rt=A.state.shadowsArray,Nt=Z.state.version,At=_t.getParameters(S,Z.state,Rt,H,et,A.state.lightProbeGridArray),Ut=_t.getProgramCacheKey(At);let Bt=K.programs;K.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?H.environment:null,K.fog=H.fog;const $t=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;K.envMap=ft.get(S.envMap||K.environment,$t),K.envMapRotation=K.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",In),Bt=new Map,K.programs=Bt);let jt=Bt.get(Ut);if(jt!==void 0){if(K.currentProgram===jt&&K.lightsStateVersion===Nt)return eh(S,At),jt}else At.uniforms=_t.getUniforms(S),U!==null&&S.isNodeMaterial&&U.build(S,et,At),S.onBeforeCompile(At,L),jt=_t.acquireProgram(At,Ut),Bt.set(Ut,jt),K.uniforms=At.uniforms;const Ot=K.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ot.clippingPlanes=zt.uniform),eh(S,At),K.needsLights=hp(S),K.lightsStateVersion=Nt,K.needsLights&&(Ot.ambientLightColor.value=Z.state.ambient,Ot.lightProbe.value=Z.state.probe,Ot.sunLights.value=Z.state.sun,Ot.sunLightShadows.value=Z.state.sunShadow,Ot.directionalLights.value=Z.state.directional,Ot.directionalLightShadows.value=Z.state.directionalShadow,Ot.spotLights.value=Z.state.spot,Ot.spotLightShadows.value=Z.state.spotShadow,Ot.rectAreaLights.value=Z.state.rectArea,Ot.ltc_1.value=Z.state.rectAreaLTC1,Ot.ltc_2.value=Z.state.rectAreaLTC2,Ot.pointLights.value=Z.state.point,Ot.pointLightShadows.value=Z.state.pointShadow,Ot.hemisphereLights.value=Z.state.hemi,Ot.sunShadowMatrix.value=Z.state.sunShadowMatrix,Ot.sunShadowCascade.value=Z.state.sunShadowCascade,Ot.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ot.spotLightMatrix.value=Z.state.spotLightMatrix,Ot.spotLightMap.value=Z.state.spotLightMap,Ot.pointShadowMatrix.value=Z.state.pointShadowMatrix),K.lightProbeGrid=A.state.lightProbeGridArray.length>0,K.currentProgram=jt,K.uniformsList=null,jt}function th(S){if(S.uniformsList===null){const H=S.currentProgram.getUniforms();S.uniformsList=Ma.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function eh(S,H){const et=X.get(S);et.outputColorSpace=H.outputColorSpace,et.batching=H.batching,et.batchingColor=H.batchingColor,et.instancing=H.instancing,et.instancingColor=H.instancingColor,et.instancingMorph=H.instancingMorph,et.skinning=H.skinning,et.morphTargets=H.morphTargets,et.morphNormals=H.morphNormals,et.morphColors=H.morphColors,et.morphTargetsCount=H.morphTargetsCount,et.numClippingPlanes=H.numClippingPlanes,et.numIntersection=H.numClipIntersection,et.vertexAlphas=H.vertexAlphas,et.vertexTangents=H.vertexTangents,et.toneMapping=H.toneMapping}function op(S,H){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(H.matrixWorld);for(let et=0,K=S.length;et<K;et++){const Z=S[et];if(Z.texture!==null&&Z.boundingBox.containsPoint(x))return Z}return null}function lp(S,H,et,K,Z){H.isScene!==!0&&(H=st),j.resetTextureUnits();const Rt=H.fog,Nt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?H.environment:null,At=at===null?L.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ee.workingColorSpace,Ut=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Bt=ft.get(K.envMap||Nt,Ut),$t=K.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,jt=!!et.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ot=!!et.morphAttributes.position,ae=!!et.morphAttributes.normal,we=!!et.morphAttributes.color;let ve=$n;K.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ve=L.toneMapping);const de=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Be=de!==void 0?de.length:0,It=X.get(K),qe=A.state.lights;if(G===!0&&(z===!0||S!==ct)){const me=S===ct&&K.id===nt;zt.setState(K,S,me)}let se=!1;K.version===It.__version?(It.needsLights&&It.lightsStateVersion!==qe.state.version||It.outputColorSpace!==At||Z.isBatchedMesh&&It.batching===!1||!Z.isBatchedMesh&&It.batching===!0||Z.isBatchedMesh&&It.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&It.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&It.instancing===!1||!Z.isInstancedMesh&&It.instancing===!0||Z.isSkinnedMesh&&It.skinning===!1||!Z.isSkinnedMesh&&It.skinning===!0||Z.isInstancedMesh&&It.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&It.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&It.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&It.instancingMorph===!1&&Z.morphTexture!==null||It.envMap!==Bt||K.fog===!0&&It.fog!==Rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==zt.numPlanes||It.numIntersection!==zt.numIntersection)||It.vertexAlphas!==$t||It.vertexTangents!==jt||It.morphTargets!==Ot||It.morphNormals!==ae||It.morphColors!==we||It.toneMapping!==ve||It.morphTargetsCount!==Be||!!It.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,It.__version=K.version);let mn=It.currentProgram;se===!0&&(mn=Ur(K,H,Z),U&&K.isNodeMaterial&&U.onUpdateProgram(K,mn,It));let Nn=!1,Ei=!1,os=!1;const ue=mn.getUniforms(),Ee=It.uniforms;if(g.useProgram(mn.program)&&(Nn=!0,Ei=!0,os=!0),K.id!==nt&&(nt=K.id,Ei=!0),It.needsLights){const me=op(A.state.lightProbeGridArray,Z);It.lightProbeGrid!==me&&(It.lightProbeGrid=me,Ei=!0)}if(Nn||ct!==S){g.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ue.setValue(w,"projectionMatrix",S.projectionMatrix),ue.setValue(w,"viewMatrix",S.matrixWorldInverse);const Ai=ue.map.cameraPosition;Ai!==void 0&&Ai.setValue(w,$.setFromMatrixPosition(S.matrixWorld)),y.logarithmicDepthBuffer&&ue.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ue.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),ct!==S&&(ct=S,Ei=!0,os=!0)}if(It.needsLights&&(qe.state.sunShadowMap.length>0&&ue.setValue(w,"sunShadowMap",qe.state.sunShadowMap,j),qe.state.directionalShadowMap.length>0&&ue.setValue(w,"directionalShadowMap",qe.state.directionalShadowMap,j),qe.state.spotShadowMap.length>0&&ue.setValue(w,"spotShadowMap",qe.state.spotShadowMap,j),qe.state.pointShadowMap.length>0&&ue.setValue(w,"pointShadowMap",qe.state.pointShadowMap,j)),Z.isSkinnedMesh){ue.setOptional(w,Z,"bindMatrix"),ue.setOptional(w,Z,"bindMatrixInverse");const me=Z.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),ue.setValue(w,"boneTexture",me.boneTexture,j))}Z.isBatchedMesh&&(ue.setOptional(w,Z,"batchingTexture"),ue.setValue(w,"batchingTexture",Z._matricesTexture,j),ue.setOptional(w,Z,"batchingIdTexture"),ue.setValue(w,"batchingIdTexture",Z._indirectTexture,j),ue.setOptional(w,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ue.setValue(w,"batchingColorTexture",Z._colorsTexture,j));const Ti=et.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&V.update(Z,et,mn),(Ei||It.receiveShadow!==Z.receiveShadow)&&(It.receiveShadow=Z.receiveShadow,ue.setValue(w,"receiveShadow",Z.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&H.environment!==null&&(Ee.envMapIntensity.value=H.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=rb()),Ei){if(ue.setValue(w,"toneMappingExposure",L.toneMappingExposure),It.needsLights&&cp(Ee,os),Rt&&K.fog===!0&&Lt.refreshFogUniforms(Ee,Rt),Lt.refreshMaterialUniforms(Ee,K,tt,it,A.state.transmissionRenderTarget[S.id]),It.needsLights&&It.lightProbeGrid){const me=It.lightProbeGrid;Ee.probesSH.value=me.texture,Ee.probesMin.value.copy(me.boundingBox.min),Ee.probesMax.value.copy(me.boundingBox.max),Ee.probesResolution.value.copy(me.resolution)}Ma.upload(w,th(It),Ee,j)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ma.upload(w,th(It),Ee,j),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ue.setValue(w,"center",Z.center),ue.setValue(w,"modelViewMatrix",Z.modelViewMatrix),ue.setValue(w,"normalMatrix",Z.normalMatrix),ue.setValue(w,"modelMatrix",Z.matrixWorld),K.uniformsGroups!==void 0){const me=K.uniformsGroups;for(let Ai=0,ls=me.length;Ai<ls;Ai++){const ih=me[Ai];dt.update(ih,mn),dt.bind(ih,mn)}}return mn}function cp(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.sunLights.needsUpdate=H,S.sunLightShadows.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function hp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return at},this.setRenderTargetTextures=function(S,H,et){const K=X.get(S);K.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=H,X.get(S.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:et,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,H){const et=X.get(S);et.__webglFramebuffer=H,et.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(S,H=0,et=0){at=S,J=H,q=et;let K=null,Z=!1,Rt=!1;if(S){const At=X.get(S);if(At.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(w.FRAMEBUFFER,At.__webglFramebuffer),lt.copy(S.viewport),wt.copy(S.scissor),Dt=S.scissorTest,g.viewport(lt),g.scissor(wt),g.setScissorTest(Dt),nt=-1;return}else if(At.__webglFramebuffer===void 0)j.setupRenderTarget(S);else if(At.__hasExternalTextures)j.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const $t=S.depthTexture;if(At.__boundDepthTexture!==$t){if($t!==null&&X.has($t)&&(S.width!==$t.image.width||S.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(S)}}const Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Rt=!0);const Bt=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[H])?K=Bt[H][et]:K=Bt[H],Z=!0):S.samples>0&&j.useMultisampledRTT(S)===!1?K=X.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?K=Bt[et]:K=Bt,lt.copy(S.viewport),wt.copy(S.scissor),Dt=S.scissorTest}else lt.copy(Ct).multiplyScalar(tt).floor(),wt.copy(T).multiplyScalar(tt).floor(),Dt=N;if(et!==0&&(K=W),g.bindFramebuffer(w.FRAMEBUFFER,K)&&g.drawBuffers(S,K),g.viewport(lt),g.scissor(wt),g.setScissorTest(Dt),Z){const At=X.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+H,At.__webglTexture,et)}else if(Rt){const At=H;for(let Ut=0;Ut<S.textures.length;Ut++){const Bt=X.get(S.textures[Ut]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ut,Bt.__webglTexture,et,At)}}else if(S!==null&&et!==0){const At=X.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,At.__webglTexture,et)}nt=-1};function nh(S){const H=X.get(S);return(H.__readFormat!==S.format||H.__readType!==S.type)&&(H.__readFormat=S.format,H.__readType=S.type,H.__formatReadable=y.textureFormatReadable(S.format),H.__typeReadable=y.textureTypeReadable(S.type)),H}this.readRenderTargetPixels=function(S,H,et,K,Z,Rt,Nt,At=0){if(!(S&&S.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ut=Ut[Nt]),Ut){g.bindFramebuffer(w.FRAMEBUFFER,Ut);try{const Bt=S.textures[At],$t=Bt.format,jt=Bt.type;S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+At);const Ot=nh(Bt);if(Ot.__formatReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-K&&et>=0&&et<=S.height-Z&&w.readPixels(H,et,K,Z,Et.convert($t),Et.convert(jt),Rt)}finally{const Bt=at!==null?X.get(at).__webglFramebuffer:null;g.bindFramebuffer(w.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(S,H,et,K,Z,Rt,Nt,At=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ut=Ut[Nt]),Ut)if(H>=0&&H<=S.width-K&&et>=0&&et<=S.height-Z){g.bindFramebuffer(w.FRAMEBUFFER,Ut);const Bt=S.textures[At],$t=Bt.format,jt=Bt.type;S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+At);const Ot=nh(Bt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ae),w.bufferData(w.PIXEL_PACK_BUFFER,Rt.byteLength,w.STREAM_READ),w.readPixels(H,et,K,Z,Et.convert($t),Et.convert(jt),0),w.bindBuffer(w.PIXEL_PACK_BUFFER,null);const we=at!==null?X.get(at).__webglFramebuffer:null;g.bindFramebuffer(w.FRAMEBUFFER,we);const ve=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await b_(w,ve,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ae),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Rt),w.bindBuffer(w.PIXEL_PACK_BUFFER,null),w.deleteBuffer(ae),w.deleteSync(ve),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,H=null,et=0){const K=Math.pow(2,-et),Z=Math.floor(S.image.width*K),Rt=Math.floor(S.image.height*K),Nt=H!==null?H.x:0,At=H!==null?H.y:0;j.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,et,0,0,Nt,At,Z,Rt),g.unbindTexture()},this.copyTextureToTexture=function(S,H,et=null,K=null,Z=0,Rt=0){let Nt,At,Ut,Bt,$t,jt,Ot,ae,we;const ve=S.isCompressedTexture?S.mipmaps[Rt]:S.image;if(et!==null)Nt=et.max.x-et.min.x,At=et.max.y-et.min.y,Ut=et.isBox3?et.max.z-et.min.z:1,Bt=et.min.x,$t=et.min.y,jt=et.isBox3?et.min.z:0;else{const Ee=Math.pow(2,-Z);Nt=Math.floor(ve.width*Ee),At=Math.floor(ve.height*Ee),S.isDataArrayTexture?Ut=ve.depth:S.isData3DTexture?Ut=Math.floor(ve.depth*Ee):Ut=1,Bt=0,$t=0,jt=0}K!==null?(Ot=K.x,ae=K.y,we=K.z):(Ot=0,ae=0,we=0);const de=Et.convert(H.format),Be=Et.convert(H.type);let It;H.isData3DTexture?(j.setTexture3D(H,0),It=w.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(j.setTexture2DArray(H,0),It=w.TEXTURE_2D_ARRAY):(j.setTexture2D(H,0),It=w.TEXTURE_2D),g.activeTexture(w.TEXTURE0),g.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,H.flipY),g.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),g.pixelStorei(w.UNPACK_ALIGNMENT,H.unpackAlignment);const qe=g.getParameter(w.UNPACK_ROW_LENGTH),se=g.getParameter(w.UNPACK_IMAGE_HEIGHT),mn=g.getParameter(w.UNPACK_SKIP_PIXELS),Nn=g.getParameter(w.UNPACK_SKIP_ROWS),Ei=g.getParameter(w.UNPACK_SKIP_IMAGES);g.pixelStorei(w.UNPACK_ROW_LENGTH,ve.width),g.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ve.height),g.pixelStorei(w.UNPACK_SKIP_PIXELS,Bt),g.pixelStorei(w.UNPACK_SKIP_ROWS,$t),g.pixelStorei(w.UNPACK_SKIP_IMAGES,jt);const os=S.isDataArrayTexture||S.isData3DTexture,ue=H.isDataArrayTexture||H.isData3DTexture;if(S.isDepthTexture){const Ee=X.get(S),Ti=X.get(H),me=X.get(Ee.__renderTarget),Ai=X.get(Ti.__renderTarget);g.bindFramebuffer(w.READ_FRAMEBUFFER,me.__webglFramebuffer),g.bindFramebuffer(w.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let ls=0;ls<Ut;ls++)os&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,X.get(S).__webglTexture,Z,jt+ls),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,X.get(H).__webglTexture,Rt,we+ls)),w.blitFramebuffer(Bt,$t,Nt,At,Ot,ae,Nt,At,w.DEPTH_BUFFER_BIT,w.NEAREST);g.bindFramebuffer(w.READ_FRAMEBUFFER,null),g.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(Z!==0||S.isRenderTargetTexture||X.has(S)){const Ee=X.get(S),Ti=X.get(H);g.bindFramebuffer(w.READ_FRAMEBUFFER,F),g.bindFramebuffer(w.DRAW_FRAMEBUFFER,Y);for(let me=0;me<Ut;me++)os?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ee.__webglTexture,Z,jt+me):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ee.__webglTexture,Z),ue?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ti.__webglTexture,Rt,we+me):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ti.__webglTexture,Rt),Z!==0?w.blitFramebuffer(Bt,$t,Nt,At,Ot,ae,Nt,At,w.COLOR_BUFFER_BIT,w.NEAREST):ue?w.copyTexSubImage3D(It,Rt,Ot,ae,we+me,Bt,$t,Nt,At):w.copyTexSubImage2D(It,Rt,Ot,ae,Bt,$t,Nt,At);g.bindFramebuffer(w.READ_FRAMEBUFFER,null),g.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ue?S.isDataTexture||S.isData3DTexture?w.texSubImage3D(It,Rt,Ot,ae,we,Nt,At,Ut,de,Be,ve.data):H.isCompressedArrayTexture?w.compressedTexSubImage3D(It,Rt,Ot,ae,we,Nt,At,Ut,de,ve.data):w.texSubImage3D(It,Rt,Ot,ae,we,Nt,At,Ut,de,Be,ve):S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Rt,Ot,ae,Nt,At,de,Be,ve.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Rt,Ot,ae,ve.width,ve.height,de,ve.data):w.texSubImage2D(w.TEXTURE_2D,Rt,Ot,ae,Nt,At,de,Be,ve);g.pixelStorei(w.UNPACK_ROW_LENGTH,qe),g.pixelStorei(w.UNPACK_IMAGE_HEIGHT,se),g.pixelStorei(w.UNPACK_SKIP_PIXELS,mn),g.pixelStorei(w.UNPACK_SKIP_ROWS,Nn),g.pixelStorei(w.UNPACK_SKIP_IMAGES,Ei),Rt===0&&H.generateMipmaps&&w.generateMipmap(It),g.unbindTexture()},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&j.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?j.setTextureCube(S,0):S.isData3DTexture?j.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?j.setTexture2DArray(S,0):j.setTexture2D(S,0),g.unbindTexture()},this.resetState=function(){J=0,q=0,at=null,g.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Vu={type:"change"},kc={type:"start"},jf={type:"end"},ha=new Uc,Wu=new En,ob=Math.cos(70*be.DEG2RAD),Pe=new O,nn=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$o=1e-6;class lb extends lv{constructor(t,e=null){super(t,e),this.state=he.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yn.ROTATE,MIDDLE:Yn.DOLLY,RIGHT:Yn.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new _n,this._lastTargetPosition=new O,this._quat=new _n().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new vu,this._sphericalDelta=new vu,this._scale=1,this._panOffset=new O,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new O,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hb.bind(this),this._onPointerDown=cb.bind(this),this._onPointerUp=ub.bind(this),this._onContextMenu=vb.bind(this),this._onMouseWheel=pb.bind(this),this._onKeyDown=mb.bind(this),this._onTouchStart=gb.bind(this),this._onTouchMove=_b.bind(this),this._onMouseDown=db.bind(this),this._onMouseMove=fb.bind(this),this._interceptControlDown=xb.bind(this),this._interceptControlUp=Sb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=he.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vu),this.update(),this.state=he.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pe.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ha.origin.copy(this.object.position),ha.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ha.direction))<ob?this.object.lookAt(this.target):(Wu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ha.intersectPlane(Wu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$o||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$o||this._lastTargetPosition.distanceToSquared(this.target)>$o?(this.dispatchEvent(Vu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function cb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function hb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ub(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jf),this.state=he.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function db(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Yn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=he.DOLLY;break;case Yn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}break;case Yn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(kc)}function fb(n){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function pb(n){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(n.preventDefault(),this.dispatchEvent(kc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(jf))}function mb(n){this.enabled!==!1&&this._handleKeyDown(n)}function gb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=he.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=he.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(kc)}function _b(n){switch(this._trackPointer(n),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=he.NONE}}function vb(n){this.enabled!==!1&&n.preventDefault()}function xb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Mb=""+new URL("wood-tabletop-BeH66SVl.png",import.meta.url).href,yb=""+new URL("board-grid-CQdbSLhz.png",import.meta.url).href,Je=10,Hn=Je/2,Jo=.12,ua=(Je+2.8)*2,cn=512,Xu=Math.hypot(7.8,10),Yu=10.8,Qa=.95,Ge=.62*Qa,Qe=.93*Qa,tp=.032*Qa,rn=.0035*Qa,qu=Math.PI/2,Ku=Math.PI/4;function Zu(n={}){return n.guard&&n.pinned?qu+Ku:n.guard?qu:n.pinned?Ku:0}const bb=rn/2+.001,Eb=.025,Tb=Ge*.25,Ab=Qe*.9,wb=rn*.45,$u=-7*Math.PI/180,Qo=bb+Eb,Cb=.003,jo=.009,Rb=.035,Ju=.07,da=.3,Pb=.0105,fa=.16,ep=.58,Db=.34,np=.008,Lb=.105;function ip(n){Array.isArray(n)?new Set(n).forEach(t=>t.dispose()):n==null||n.dispose()}function ya(n=0){const t=new Hc,e=-Ge/2-n,i=Ge/2+n,s=-Qe/2-n,r=Qe/2+n,a=tp+n;return t.moveTo(e+a,s),t.lineTo(i-a,s),t.absarc(i-a,s+a,a,-Math.PI/2,0),t.lineTo(i,r-a),t.absarc(i-a,r-a,a,0,Math.PI/2),t.lineTo(e+a,r),t.absarc(e+a,r-a,a,Math.PI/2,Math.PI),t.lineTo(e,s+a),t.absarc(e+a,s+a,a,Math.PI,Math.PI*1.5),t.closePath(),t}function Zs(){const n=new zc(ya(),8),t=n.attributes.position,e=n.attributes.uv;for(let i=0;i<t.count;i+=1)e.setXY(i,(t.getX(i)+Ge/2)/Ge,(t.getY(i)+Qe/2)/Qe);return e.needsUpdate=!0,n}function Ib(){const n=document.createElement("canvas");n.width=cn,n.height=cn;const t=n.getContext("2d");t.fillStyle="#000000",t.fillRect(0,0,cn,cn);const e=cn*.68,i=(cn-e)/2;return t.filter=`blur(${cn*.035}px)`,t.fillStyle="#ffffff",t.beginPath(),t.roundRect(i,i,e,e,cn*.2),t.fill(),t.filter="none",t.getImageData(0,0,cn,cn).data}function Nb(){const n=new Fi(ua,ua,128,128),t=n.attributes.position,e=new Float32Array(t.count*3),i=Ib();for(let s=0;s<t.count;s+=1){const r=be.clamp(t.getX(s)/ua+.5,0,1),a=be.clamp(t.getY(s)/ua+.5,0,1),o=Math.round(r*(cn-1)),l=Math.round(a*(cn-1)),c=i[(l*cn+o)*4]/255;e.set([c,c,c],s*3)}return n.setAttribute("color",new Jn(e,3)),n}function Qu(){return new Ln({uniforms:{uHalfSize:{value:new gt(Ge/2,Qe/2)},uCornerRadius:{value:tp},uBoardHalf:{value:Hn},uShadowY:{value:Pb},uShadowColor:{value:new O(.12,.11,.09)},uSoftness:{value:np},uOpacity:{value:ep}},vertexShader:`
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
    `,transparent:!0,depthWrite:!1,premultipliedAlpha:!0,blending:ul,side:Ve,toneMapped:!1})}function Bn(n){n.traverse(t=>{t.isMesh&&(t.geometry.dispose(),ip(t.material))})}class Ub{constructor(t,e,i={},s=[]){this.container=t,this.cards=new Map(e.map(o=>[o.name,o])),this.itemCards=new Map(s.map(o=>[o.id,o])),this.callbacks=i,this.placements={},this.cardObjects=new Map,this.cardMeshes=new Map,this.cardFaceMeshes=new Map,this.cardActivationOverlays=new Map,this.cardFlipGroups=new Map,this.cardShadows=new Map,this.motionStates=new Map,this.hoverTargets=new Map,this.textures=new Map,this.itemTextures=new Map,this.backTextures=new Map,this.backHitAreas=new Map,this.cardFaces=new Map,this.flipAnimations=new Map,this.cardOwners=new Map,this.cardConditions=new Map,this.cardHitPoints=new Map,this.hpMarkers=new Map,this.hpOverlayVisible=!1,this.loadingTextures=new Set,this.loadingItemTextures=new Set,this.attachedItems=new Map,this.attachedItemGroups=new Map,this.attachedItemPickMeshes=new Map,this.nextDetachedItemId=1,this.boardItemCards=new Map,this.handCards=new Map,this.handCardGroups=new Map,this.handCardFaces=new Map,this.handCardContents=new Map,this.handLandings=new Map,this.handHoverKey=null,this.pendingHandPress=null,this.handDrag=null,this.raycaster=new ov,this.pointer=new gt,this.boardPlane=new En(new O(0,1,0),0),this.draggingName=null,this.draggingAction=null,this.dragOrigin=null,this.pendingCardPress=null,this.hoveredCardName=null,this.viewPlayer=1,this.viewTransition=null,this.destroyed=!1,this.lastFrameTime=performance.now(),this.elapsedTime=0,this.scene=new t0,this.scene.background=new ne("#000000");const r=Math.max(t.clientWidth,1),a=Math.max(t.clientHeight,1);this.camera=new un(43,r/a,.1,100),this.camera.position.set(0,Yu,Xu),this.camera.lookAt(0,0,0),this.scene.add(this.camera),this.handFanGroup=new hn,this.camera.add(this.handFanGroup),this.renderer=new ab({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(r,a),this.renderer.outputColorSpace=Re,this.renderer.domElement.className="board-canvas",this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.style.touchAction="none",this.container.prepend(this.renderer.domElement),this.controls=new lb(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enableDamping=!0,this.controls.dampingFactor=.075,this.controls.zoomToCursor=!0,this.controls.screenSpacePanning=!0,this.controls.minDistance=3,this.controls.maxDistance=60,this.controls.minPolarAngle=.08,this.controls.maxPolarAngle=Math.PI*.485,this.controls.rotateSpeed=.62,this.controls.panSpeed=.9,this.controls.zoomSpeed=1.1,this.controls.mouseButtons.LEFT=Yn.PAN,this.controls.mouseButtons.MIDDLE=Yn.PAN,this.controls.mouseButtons.RIGHT=-1,this.makeBoard(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.canvas=this.renderer.domElement,this.onPointerDown=this.handlePointerDown.bind(this),this.onPointerMove=this.handlePointerMove.bind(this),this.onPointerUp=this.handlePointerUp.bind(this),this.onPointerCancel=this.handlePointerCancel.bind(this),this.onPointerLeave=this.handlePointerLeave.bind(this),this.onWheel=()=>this.reportStatus("Wheel zooms toward the pointer. Middle drag pans; Ctrl or Shift + middle-drag orbits."),this.onContextMenu=o=>o.preventDefault(),this.canvas.addEventListener("pointerdown",this.onPointerDown,!0),this.canvas.addEventListener("pointermove",this.onPointerMove,!0),this.canvas.addEventListener("pointerup",this.onPointerUp,!0),this.canvas.addEventListener("pointercancel",this.onPointerCancel,!0),this.canvas.addEventListener("pointerleave",this.onPointerLeave),this.canvas.addEventListener("wheel",this.onWheel,{passive:!0}),this.canvas.addEventListener("contextmenu",this.onContextMenu),this.renderFrame=this.render.bind(this),this.animationFrame=requestAnimationFrame(this.renderFrame)}makeBoard(){this.tabletopTexture=new Ys().load(Mb),this.tabletopTexture.colorSpace=Re,this.tabletopTexture.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8);const t=new Ss({map:this.tabletopTexture,vertexColors:!0,transparent:!1,depthWrite:!0,roughness:.94,metalness:0});this.tableMesh=new xe(Nb(),t),this.tableMesh.rotation.x=-Math.PI/2,this.tableMesh.position.y=-Jo-.001,this.tableMesh.receiveShadow=!0,this.scene.add(this.tableMesh),this.boardGridTexture=new Ys().load(yb),this.boardGridTexture.colorSpace=Re,this.boardGridTexture.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8);const e=new Ss({color:"#ffffff",map:this.boardGridTexture,roughness:.88,metalness:0}),i=new Ss({color:"#a0a5a2",roughness:.9,metalness:0}),s=new Ss({color:"#777c79",roughness:.92,metalness:0});this.boardMesh=new xe(new Bs(Je,Jo,Je),[i,i,e,s,i,i]),this.boardMesh.position.y=-Jo/2,this.boardMesh.receiveShadow=!0,this.scene.add(this.boardMesh),this.scene.add(new ev("#ffffff","#b9bcb9",1));const r=new sv("#ffffff",80,0,2);r.position.set(-6,7,2.5),this.scene.add(r)}resize(){if(this.destroyed)return;const t=Math.max(this.container.clientWidth,1),e=Math.max(this.container.clientHeight,1);this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.layoutHandFan()}render(){if(this.destroyed)return;this.animationFrame=requestAnimationFrame(this.renderFrame);const t=performance.now(),e=Math.min((t-this.lastFrameTime)/1e3,.05);this.lastFrameTime=t,this.elapsedTime+=e,this.animateViewTransition(e),this.animateCardFlips(e),this.animateCardMotion(e),this.animateRestingCards(e),this.animateHandCards(e),this.animateHandDrag(e),this.updateCardShadows(),this.updateHpMarkers(),this.controls.update(),this.renderer.render(this.scene,this.camera)}animateViewTransition(t){const e=this.viewTransition;if(!e)return;e.elapsed=Math.min(e.duration,e.elapsed+t);const i=e.elapsed/e.duration,s=i*i*(3-2*i),r=e.fromTarget.clone().lerp(e.toTarget,s),a=e.startAngle+e.angleDelta*s,o=be.lerp(e.startRadius,e.endRadius,s),l=be.lerp(e.startHeight,e.endHeight,s);this.controls.target.copy(r),this.camera.position.set(r.x+Math.sin(a)*o,r.y+l,r.z+Math.cos(a)*o),this.camera.lookAt(r),i>=1&&(this.controls.target.copy(e.toTarget),this.viewTransition=null,this.controls.enabled=!0,this.controls.update())}beginViewTransition(t,{duration:e=1.15,radius:i=null,height:s=null}={}){const r=this.controls.target.clone(),a=this.camera.position.clone().sub(r),o=Math.atan2(a.x,a.z);let l=((t-o+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;Math.abs(l+Math.PI)<1e-4&&(l=Math.PI),this.controls.enabled=!1,this.viewTransition={elapsed:0,duration:e,fromTarget:r,toTarget:new O(0,0,0),startAngle:o,angleDelta:l,startRadius:Math.hypot(a.x,a.z),endRadius:i??Math.hypot(a.x,a.z),startHeight:a.y,endHeight:s??a.y}}transitionPlayer(t){this.setPlayerView(t)}setPlayerView(t){this.viewPlayer=t,this.beginViewTransition(0+(t===2?Math.PI:0),{radius:Xu,height:Yu})}animateCardMotion(t){const e=1-Math.exp(-t*22),i=1-Math.exp(-t*9);for(const[s,r]of this.motionStates){const a=this.cardObjects.get(s);if(!a){this.motionStates.delete(s);continue}const o=be.clamp(.35+r.grabOffset.length()/Ge,.35,1.5);if(r.active){const l=be.clamp(r.velocity.z*.032*o,-.34,.34),c=be.clamp(-r.velocity.x*.032*o,-.34,.34),h=r.grabOffset.clone().applyQuaternion(a.quaternion),d=be.clamp((h.z*r.velocity.x-h.x*r.velocity.z)*.08,-.27,.27);a.rotation.x+=(l-a.rotation.x)*i;const u=this.cardRestYaw(s);a.rotation.y+=(u+d-a.rotation.y)*i,a.rotation.z+=(c-a.rotation.z)*i,r.targetPosition.copy(r.pointerPoint).sub(h),r.velocity.multiplyScalar(Math.exp(-t*.65))}else{a.rotation.x+=-a.rotation.x*i;const l=this.cardRestYaw(s);a.rotation.y+=(l-a.rotation.y)*i,a.rotation.z+=-a.rotation.z*i,r.velocity.multiplyScalar(Math.exp(-t*5.5))}a.position.lerp(r.targetPosition,e),!r.active&&a.position.distanceToSquared(r.targetPosition)<4e-4&&r.velocity.lengthSq()<.001&&Math.abs(a.rotation.x)+Math.abs(a.rotation.y-this.cardRestYaw(s))+Math.abs(a.rotation.z)<.003&&(a.position.copy(r.targetPosition),a.rotation.set(0,this.cardRestYaw(s),0),this.motionStates.delete(s))}}animateRestingCards(t){for(const[e,i]of this.cardObjects){if(this.motionStates.has(e))continue;const s=i.userData.swayPhase??0,r=this.elapsedTime*.8+s,a=this.hoverTargets.get(e),o=1-Math.exp(-t*(a?6:1.8)),l=1-Math.exp(-t*(a?8:2.1)),c=Qo+Math.sin(r)*Cb+(a?Rb:0),h=a?a.tiltX:Math.sin(r)*jo,d=this.cardRestYaw(e),u=a?d:d+Math.sin(r*.63+s)*jo*.55,f=a?a.tiltZ:Math.cos(r*.82+s)*jo;i.position.y+=(c-i.position.y)*o,i.rotation.x+=(h-i.rotation.x)*l,i.rotation.y+=(u-i.rotation.y)*l,i.rotation.z+=(f-i.rotation.z)*l}}cardRestYaw(t){const e=this.cardObjects.get(t);return((e==null?void 0:e.userData.facingYaw)??0)+((e==null?void 0:e.userData.statusYaw)??0)}animateCardFlips(t){for(const[e,i]of this.flipAnimations){const s=this.cardFlipGroups.get(e);if(!s){this.flipAnimations.delete(e);continue}i.progress=Math.min(1,i.progress+t*3.4);const r=i.progress*i.progress*(3-2*i.progress),a=be.lerp(i.startAngle,i.targetAngle,r);s.rotation.z=a,s.position.y=Math.sin(a)*Ge/2;const o=i.startFace==="front"?a>=Math.PI/2:a<=Math.PI/2;!i.switched&&o&&(i.switched=!0,this.setCardFaceNow(e,i.target)),i.progress>=1&&(s.rotation.z=i.targetAngle,s.position.y=0,this.cardFaces.get(e)!==i.target&&this.setCardFaceNow(e,i.target),this.flipAnimations.delete(e))}}updateCardShadows(){var t;for(const[e,i]of this.cardObjects){const s=this.cardShadows.get(e);if(!s)continue;s.position.copy(i.position),s.quaternion.copy(i.quaternion);const r=s.children[0];if(!r)continue;const a=((t=this.cardFlipGroups.get(e))==null?void 0:t.rotation.z)??0;r.scale.x=Math.max(.06,Math.abs(Math.cos(a)));const o=r==null?void 0:r.material;if(!(o!=null&&o.uniforms))continue;const l=be.clamp(i.position.y/da,0,1);o.uniforms.uOpacity.value=be.lerp(ep,Db,l),o.uniforms.uSoftness.value=be.lerp(np,Lb,l)}}pointerRay(t,e){const i=this.canvas.getBoundingClientRect();this.pointer.set((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera)}pointOnHeight(t,e,i=0){this.pointerRay(t,e);const s=new O,r=i===0?this.boardPlane:new En(new O(0,1,0),-i);return this.raycaster.ray.intersectPlane(r,s)?s:null}pointOnBoard(t,e){return this.pointOnHeight(t,e)}pointAboveBoard(t,e,i=da){const s=this.pointOnBoard(t,e);return s&&(s.y=i),s}cellFromPoint(t){if(!t||t.x<-Hn||t.x>Hn||t.z<-Hn||t.z>Hn)return null;const e=Math.min(Je-1,Math.floor(t.x+Hn)),i=Math.min(Je-1,Math.floor(t.z+Hn));return{row:i,column:e,index:i*Je+e}}cellPosition(t){const e=Math.floor(t/Je),i=t%Je;return new O(i-Hn+.5,Qo,e-Hn+.5)}occupiedBy(t,e=null){var i;return(i=Object.entries(this.placements).find(([s,r])=>{var a,o;return s!==e&&r===t&&!((o=(a=this.callbacks).isCardKO)!=null&&o.call(a,s))}))==null?void 0:i[0]}pickCard(t,e){this.pointerRay(t,e);const i=[...this.cardMeshes.values(),...this.attachedItemPickMeshes.values()];return this.raycaster.intersectObjects(i,!1)[0]??null}makeBackTexture(t){if(this.backTextures.has(t))return this.backTextures.get(t);const e=document.createElement("canvas");e.width=600,e.height=900;const i=e.getContext("2d");i.fillStyle="#f2efe7",i.fillRect(0,0,600,900),i.strokeStyle="#aaa394",i.lineWidth=8,i.strokeRect(18,18,564,864),i.fillStyle="#393831",i.font="700 35px Arial, sans-serif",i.textAlign="center",i.fillText("WORKING TITLE",300,465);const s=new nu(e);return s.colorSpace=Re,s.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8),this.backHitAreas.set(t,[]),this.backTextures.set(t,s),s}actionAtHit(t,e){var r;if(!(e!=null&&e.uv)||this.cardFaces.get(t)!=="back")return null;const i=e.uv.x*600,s=(1-e.uv.y)*900;return((r=this.backHitAreas.get(t))==null?void 0:r.find(a=>i>=a.x0&&i<=a.x1&&s>=a.y0&&s<=a.y1))??null}flipCard(t,e=null){var l;if(!this.cardObjects.has(t))return;const i=((l=this.flipAnimations.get(t))==null?void 0:l.target)??this.cardFaces.get(t),s=e??(i==="back"?"front":"back"),r=this.cardFlipGroups.get(t);if(!r)return;const a=s==="back"?Math.PI:0,o=this.cardFaces.get(t);s===o&&Math.abs(r.rotation.z-a)<.001||this.flipAnimations.set(t,{target:s,targetAngle:a,startAngle:r.rotation.z,startFace:o,progress:0,switched:o===s})}setCardFaceNow(t,e){var s,r;const i=this.cardFaceMeshes.get(t);i&&(this.cardFaces.set(t,e),i.front.visible=e==="front",i.back.visible=e==="back",this.cardMeshes.set(t,e==="front"?i.front:i.back),this.updateCardActivationOverlay(t),(r=(s=this.callbacks).onFaceChange)==null||r.call(s,t,e))}setCardDeactivated(t,e){const i=this.cardObjects.get(t);i&&(i.userData.deactivated=!!e,this.updateCardActivationOverlay(t))}updateCardActivationOverlay(t){var r;const e=this.cardActivationOverlays.get(t);if(!e)return;const i=!!((r=this.cardObjects.get(t))!=null&&r.userData.deactivated),s=this.cardFaces.get(t)??"front";e.front.visible=i&&s==="front",e.back.visible=i&&s==="back"}setActionCue(t,e=!1){if(!t){this.actionCue&&(this.actionCue.visible=!1);return}const i=this.placements[t];if(i===void 0)return;this.actionCue||(this.actionCue=new xe(new Ua(.39,.46,48),new bn({color:"#64e5a2",side:Ve,transparent:!0,opacity:.95,depthTest:!1})),this.actionCue.rotation.x=-Math.PI/2,this.actionCue.position.y=.018,this.actionCue.renderOrder=8,this.scene.add(this.actionCue));const s=this.cellPosition(i);this.actionCue.position.x=s.x,this.actionCue.position.z=s.z,this.actionCue.material.color.set(e?"#64e5a2":"#ff786b"),this.actionCue.visible=!0}setActionCellCue(t,e=!1){if(t==null){this.actionCue&&(this.actionCue.visible=!1);return}this.actionCue||(this.actionCue=new xe(new Ua(.39,.46,48),new bn({color:"#64e5a2",side:Ve,transparent:!0,opacity:.95,depthTest:!1})),this.actionCue.rotation.x=-Math.PI/2,this.actionCue.position.y=.018,this.actionCue.renderOrder=8,this.scene.add(this.actionCue));const i=this.cellPosition(t);this.actionCue.position.x=i.x,this.actionCue.position.z=i.z,this.actionCue.material.color.set(e?"#64e5a2":"#ff786b"),this.actionCue.visible=!0}setCardKnockedOut(t,e){const i=this.cardObjects.get(t);if(!i)return;const s=this.cardOwners.get(t)??1;if(i.userData.knockedOut=e,e)this.flipCard(t,"back");else{const r=this.placements[t];r!==void 0&&this.animateCardToPosition(t,this.cellPosition(r))}this.refreshHpMarker(t),this.repositionKnockedOutCards(s)}setCardHp(t,e,i){this.cardHitPoints.set(t,{current:e,max:i}),this.refreshHpMarker(t)}setAttachedItem(t,e){if(!e){const i=this.cardObjects.get(t),s=this.attachedItemGroups.get(t);this.attachedItemPickMeshes.delete(t),i&&s&&(i.remove(s),Bn(s)),this.attachedItems.delete(t),this.attachedItemGroups.delete(t);return}this.attachedItems.set(t,e),this.addAttachedItemMesh(t,e)}placeItemCard(t,e,i){const s=e.name;this.cards.set(s,{...e,name:s,displayName:e.displayName??s,entryType:"item"}),this.boardItemCards.set(s,{item:e,instanceId:t}),this.placements[s]=i,this.setCardConditions(s,{guard:!1,pinned:!1}),this.addCardMesh(s,i),this.notifyChange()}removeBoardItemCard(t){const e=[...this.boardItemCards].find(([,s])=>s.instanceId===t);if(!e)return;const[i]=e;this.boardItemCards.delete(i),this.removeCard(i)}isBoardItemCard(t){return this.boardItemCards.has(t)}handEntryKey(t){return t.entryType==="item"?`item:${t.instanceId??t.id}`:`character:${t.name}`}setHandCards(t){const e=new Map(t.map(i=>[this.handEntryKey(i),{...i}]));for(const i of this.handCards.keys())e.has(i)||this.removeHandCardMesh(i);this.handCards=e;for(const[i,s]of this.handCards)s.entryType==="item"?this.loadItemTexture(s):this.loadHandCharacterTexture(s),this.addHandCardMesh(i);this.layoutHandFan()}loadHandCharacterTexture(t){const e=t.name;return this.textures.has(e)||this.loadingTextures.has(e)?this.textures.get(e)??null:(this.loadingTextures.add(e),new Ys().load(t.src,i=>{if(this.loadingTextures.delete(e),this.destroyed){i.dispose();return}i.colorSpace=Re,i.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8),this.textures.set(e,i);const s=`character:${e}`;this.handCards.has(s)&&this.addHandCardMesh(s),Object.hasOwn(this.placements,e)&&this.addCardMesh(e,this.placements[e])},void 0,()=>{this.loadingTextures.delete(e),this.reportStatus(`Could not load the card art for ${e}.`)}),null)}addHandCardMesh(t){const e=this.handCards.get(t);if(!e||this.handCardGroups.has(t))return;const i=e.entryType==="item"?this.itemTextures.get(e.id)??this.loadItemTexture(e):this.textures.get(e.name)??this.loadHandCharacterTexture(e);if(!i)return;const s=new hn,r=new hn;r.position.y=Qe/2,s.add(r);const a=new dr(ya(),{depth:rn,bevelEnabled:!1,curveSegments:8});a.translate(0,0,-rn/2);const o=new xe(a,new bn({color:"#e8e3d8",side:Ve,depthTest:!0,depthWrite:!0}));o.renderOrder=1e3,r.add(o);const l=Zs();l.translate(0,0,rn/2+15e-5);const c=new xe(l,new bn({map:i,side:Ve,depthTest:!0,depthWrite:!0}));c.userData.handCardKey=t,c.renderOrder=1001,r.add(c),s.userData.handCardKey=t,s.userData.hoverLift=0,this.handFanGroup.add(s),this.handCardGroups.set(t,s),this.handCardFaces.set(t,c),this.handCardContents.set(t,r),this.layoutHandFan()}removeHandCardMesh(t){var s,r;const e=this.handCardGroups.get(t),i=this.handLandings.get(t)??(((s=this.handDrag)==null?void 0:s.key)===t?this.handDrag:null);i!=null&&i.shadowRoot&&(this.scene.remove(i.shadowRoot),Bn(i.shadowRoot)),e&&(e.removeFromParent(),Bn(e)),this.handCardGroups.delete(t),this.handCardFaces.delete(t),this.handCardContents.delete(t),this.handLandings.delete(t),this.handHoverKey===t&&(this.handHoverKey=null),((r=this.handDrag)==null?void 0:r.key)===t&&(this.handDrag=null)}layoutHandFan(){var _,M;if(!this.camera||!this.handFanGroup)return;const t=this.handCards.size;if(!t)return;const e=3.4,i=2*e*Math.tan(be.degToRad(this.camera.fov/2)),s=i*this.camera.aspect,r=i*.19,a=.48,o=s*.9/(1+Math.max(t-1,0)*a),l=Math.min(r/Qe,o/Ge),h=Ge*l*a,d=(t-1)/2,u=-i/2+i*.045;let f=0;for(const m of this.handCards.keys()){const p=this.handCardGroups.get(m);if(!p){f+=1;continue}if(p.parent!==this.handFanGroup||((_=this.handDrag)==null?void 0:_.key)===m||this.handLandings.has(m)){f+=1;continue}const b=f-d,R=d?b/d:0,x=Math.max(0,t-Math.round(Math.abs(b))),E=-R*.32,A=new O(b*h,u,-e+x*.0015);p.userData.basePosition=A,p.userData.baseRotation=E,p.userData.baseScale=l,p.userData.baseRenderOrder=1e3+x*2,p.position.copy(A),p.rotation.set(0,0,E),p.scale.setScalar(l);const I=this.handCardFaces.get(m),v=p.userData.baseRenderOrder;I&&(I.renderOrder=v+1);const C=(M=p.children[0])==null?void 0:M.children[0];C&&(C.renderOrder=v),f+=1}}animateHandCards(t){var e,i;for(const[s,r]of this.handCardGroups){if(r.parent!==this.handFanGroup||((e=this.handDrag)==null?void 0:e.key)===s||this.handLandings.has(s))continue;const a=this.handHoverKey===s,o=a?.12:0,l=1-Math.exp(-t*18);r.userData.hoverLift=be.lerp(r.userData.hoverLift||0,o,l);const c=r.userData.basePosition;c&&(r.position.x=c.x,r.position.y=c.y+r.userData.hoverLift,r.position.z=c.z+(a?.035:0));const d=(r.userData.baseScale||1)*(a?1.055:1);r.scale.setScalar(be.lerp(r.scale.x,d,l));const u=this.handCardFaces.get(s),f=r.userData.baseRenderOrder||1e3;u&&(u.renderOrder=a?12e3:f+1);const _=(i=r.children[0])==null?void 0:i.children[0];_&&(_.renderOrder=a?11999:f)}}pickHandCard(t,e){if(!this.handCardFaces.size)return null;this.camera.updateMatrixWorld(!0),this.pointerRay(t,e);const i=[...this.handCardFaces.values()];return this.raycaster.intersectObjects(i,!1).find(r=>{var o;const a=r.object.userData.handCardKey;return this.handCards.has(a)&&((o=this.handCardGroups.get(a))==null?void 0:o.parent)===this.handFanGroup})??null}positionHandDragAtPointer(t,e){var m,p;const i=this.handCardGroups.get(e.key);if(!i)return;const s=this.canvas.getBoundingClientRect(),r=this.cellFromPoint(this.pointOnBoard(t.clientX,t.clientY)),a=((p=(m=this.callbacks).isInHandZone)==null?void 0:p.call(m,t.clientX,t.clientY))??!1;e.deployMode=!a;const o=r&&e.deployMode?"board":"fan";(e.mode!==o||i.parent!==(o==="board"?this.scene:this.handFanGroup))&&(i.updateMatrixWorld(!0),o==="board"?(this.scene.attach(i),this.createHandDragShadow(e)):(this.handFanGroup.attach(i),this.removeHandDragShadow(e)),e.mode=o,this.setHandCardRenderOrder(e.key,o),this.reportStatus(o==="board"?"Deploying card. Release over a board square to place it.":"Card is back in the hand fan. Move it over the board to deploy.")),e.targetCell=o==="board"?r:null,e.pointerX=t.clientX,e.pointerY=t.clientY;const l=this.handCardContents.get(e.key),c=0;if(e.ownerYaw=0,o==="board"){const b=this.pointOnHeight(t.clientX,t.clientY,da);if(!b||!l)return;e.targetQuaternion=new _n().setFromEuler(new fn(-Math.PI/2,c,0)),e.targetContentPosition=new O(0,0,0),e.targetScale=1;const R=e.cardGrabOffset.clone().add(e.targetContentPosition).multiplyScalar(e.targetScale).applyQuaternion(e.targetQuaternion);e.targetPosition=b.sub(R),this.updateHandDragShadow(e);return}const h=(t.clientX-s.left)/s.width*2-1,d=-((t.clientY-s.top)/s.height)*2+1,u=e.depth,f=2*u*Math.tan(be.degToRad(this.camera.fov/2)),_=new O(h*f*this.camera.aspect/2,d*f/2,-u);e.targetQuaternion=new _n().setFromEuler(new fn(0,0,i.userData.baseRotation||0)),e.targetContentPosition=new O(0,Qe/2,0),e.targetScale=i.userData.baseScale||e.scale||1;const M=e.cardGrabOffset.clone().add(e.targetContentPosition).multiplyScalar(e.targetScale).applyQuaternion(e.targetQuaternion);e.targetPosition=_.sub(M),e.targetPosition.z+=.08}setHandCardRenderOrder(t,e){var r,a,o,l;const i=this.handCardFaces.get(t),s=(a=(r=this.handCardGroups.get(t))==null?void 0:r.children[0])==null?void 0:a.children[0];if(!(!i||!s))if(e==="board")s.renderOrder=1,i.renderOrder=3;else{const c=((o=this.handCardGroups.get(t))==null?void 0:o.userData.baseRenderOrder)||1e3,h=((l=this.handDrag)==null?void 0:l.key)===t||this.handLandings.has(t);s.renderOrder=h?13999:c,i.renderOrder=h?14e3:c+1}}createHandDragShadow(t){if(t.shadowRoot)return;const e=new hn;e.userData.handDragKey=t.key;const i=new xe(new Fi(Ge+fa*2,Qe+fa*2),Qu());i.rotation.x=-Math.PI/2,e.add(i),this.scene.add(e),t.shadowRoot=e,this.updateHandDragShadow(t)}updateHandDragShadow(t){const e=t.shadowRoot,i=this.handCardGroups.get(t.key);!e||!i||t.mode!=="board"||(e.position.set(i.position.x,0,i.position.z),e.rotation.set(0,t.ownerYaw||0,0),e.scale.setScalar(i.scale.x))}removeHandDragShadow(t){t!=null&&t.shadowRoot&&(this.scene.remove(t.shadowRoot),Bn(t.shadowRoot),t.shadowRoot=null)}beginHandLanding(t,e,i="commit"){const s=this.handCardGroups.get(t.key);s&&(s.parent!==this.scene&&this.scene.attach(s),t.mode="board",t.landingAction=i,t.landingCell=e,t.elapsed=0,t.duration=.22,t.targetCell=e,t.targetPosition=this.cellPosition(e.index),t.targetQuaternion=new _n().setFromEuler(new fn(-Math.PI/2,t.ownerYaw||0,0)),t.targetContentPosition=new O(0,0,0),t.targetScale=1,this.setHandCardRenderOrder(t.key,"board"),this.createHandDragShadow(t),this.handLandings.set(t.key,t))}returnHandCardToFan(t){var i;const e=this.handCardGroups.get(t.key);e&&(e.parent!==this.handFanGroup&&this.handFanGroup.attach(e),this.removeHandDragShadow(t),t.mode="fan",t.landingAction="return",t.elapsed=0,t.duration=.2,t.targetPosition=((i=e.userData.basePosition)==null?void 0:i.clone())??new O,t.targetQuaternion=new _n().setFromEuler(new fn(0,0,e.userData.baseRotation||0)),t.targetContentPosition=new O(0,Qe/2,0),t.targetScale=e.userData.baseScale||1,this.handLandings.set(t.key,t),this.setHandCardRenderOrder(t.key,"fan"))}animateHandDrag(t){const e=(i,s=!1)=>{const r=this.handCardGroups.get(i.key),a=this.handCardContents.get(i.key);if(!r||!a||!i.targetPosition||!i.targetQuaternion)return!1;const o=1-Math.exp(-t*(s?20:24));if(r.quaternion.slerp(i.targetQuaternion,o),r.scale.setScalar(be.lerp(r.scale.x,i.targetScale,o)),a.position.lerp(i.targetContentPosition,o),!s&&Number.isFinite(i.pointerX)&&Number.isFinite(i.pointerY)){let l;if(i.mode==="board")l=this.pointOnHeight(i.pointerX,i.pointerY,da);else{const c=this.canvas.getBoundingClientRect(),h=(i.pointerX-c.left)/c.width*2-1,d=-((i.pointerY-c.top)/c.height)*2+1,u=2*i.depth*Math.tan(be.degToRad(this.camera.fov/2));l=new O(h*u*this.camera.aspect/2,d*u/2,-i.depth)}if(l){const c=i.cardGrabOffset.clone().add(a.position).multiplyScalar(r.scale.x).applyQuaternion(r.quaternion);i.targetPosition.copy(l.sub(c)),i.mode==="fan"&&(i.targetPosition.z+=.08)}}return r.position.lerp(i.targetPosition,o),this.updateHandDragShadow(i),!s||(i.elapsed+=t,i.elapsed<i.duration)?!1:(r.position.copy(i.targetPosition),r.quaternion.copy(i.targetQuaternion),r.scale.setScalar(i.targetScale),a.position.copy(i.targetContentPosition),!0)};this.handDrag&&e(this.handDrag);for(const[i,s]of[...this.handLandings]){if(!e(s,!0))continue;if(this.handLandings.delete(i),s.landingAction==="return"){this.setHandCardRenderOrder(i,"fan");continue}this.removeHandDragShadow(s);const r=this.handCards.get(i),a=s.landingCell;((r==null?void 0:r.entryType)==="item"?a&&this.dropItem(r.id,s.releaseX,s.releaseY):r&&a&&this.placeCard(r.name,s.releaseX,s.releaseY))?this.removeHandCardMesh(i):this.returnHandCardToFan(s)}}resetHandCardDrags(){var e;const t=[...this.handLandings.values()];this.handDrag&&t.push(this.handDrag);for(const i of t)this.removeHandDragShadow(i);this.handLandings.clear(),this.handDrag=null,this.pendingHandPress=null,this.handHoverKey=null;for(const[i,s]of this.handCardGroups)s.parent!==this.handFanGroup&&this.handFanGroup.attach(s),s.position.copy(s.userData.basePosition??new O),s.quaternion.setFromEuler(new fn(0,0,s.userData.baseRotation||0)),s.scale.setScalar(s.userData.baseScale||1),(e=this.handCardContents.get(i))==null||e.position.set(0,Qe/2,0),this.setHandCardRenderOrder(i,"fan");this.layoutHandFan()}loadItemTexture(t){const e=this.itemTextures.get(t.id);return e||this.loadingItemTextures.has(t.id)?e:(this.loadingItemTextures.add(t.id),new Ys().load(t.src,i=>{if(this.loadingItemTextures.delete(t.id),this.destroyed){i.dispose();return}i.colorSpace=Re,i.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8),this.itemTextures.set(t.id,i);for(const[s,r]of this.handCards)r.entryType==="item"&&r.id===t.id&&this.addHandCardMesh(s);for(const[s,r]of this.attachedItems)r.id===t.id&&this.addAttachedItemMesh(s,r)},void 0,()=>{this.loadingItemTextures.delete(t.id),this.reportStatus(`Could not load the item card for ${t.name}.`)}),null)}makeItemCardGroup(t,e,i=null){const s=new hn;s.userData.attachedItemId=t.id;const r=new Ss({color:"#e5e0d4",roughness:.9}),a=new dr(ya(),{depth:rn,bevelEnabled:!1,curveSegments:8});a.translate(0,0,-rn/2);const o=new xe(a,r);o.rotation.x=-Math.PI/2,i&&(o.userData.cardName=i),s.add(o);const l=Zs();l.translate(0,0,rn/2+15e-5);const c=new xe(l,new bn({map:e}));return c.rotation.x=-Math.PI/2,c.renderOrder=2,i&&(c.userData.cardName=i),s.add(c),s}addAttachedItemMesh(t,e){const i=this.cardObjects.get(t);if(!i||this.attachedItemGroups.has(t))return;const s=this.loadItemTexture(e);if(!s)return;const r=new hn;r.position.set(Tb,wb,Ab),r.rotation.y=$u;const a=this.makeItemCardGroup(e,s,t),o=a.children.find(l=>{var c;return l.isMesh&&((c=l.material)==null?void 0:c.map)});o&&(o.userData.attachedItemOwner=t,o.userData.attachedItemId=e.id,this.attachedItemPickMeshes.set(t,o)),r.add(a),i.add(r),this.attachedItemGroups.set(t,r)}setCardConditions(t,e={}){const i={guard:!!e.guard,pinned:!!e.pinned};this.cardConditions.set(t,i);const s=this.cardObjects.get(t);s&&(s.userData.statusYaw=Zu(i))}setHpOverlayVisible(t){this.hpOverlayVisible=!!t;for(const[e,i]of this.hpMarkers){const s=this.cardObjects.get(e);i.mesh.visible=!!(this.hpOverlayVisible&&s&&!s.userData.knockedOut)}}refreshHpMarker(t){var c;const e=this.cardHitPoints.get(t),i=this.cardObjects.get(t);if(!e||!i)return;let s=this.hpMarkers.get(t);if(!s){const h=document.createElement("canvas");h.width=256,h.height=256;const d=h.getContext("2d"),u=new nu(h);u.colorSpace=Re;const f=new bn({map:u,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,side:Ve}),_=new Fi(Ge*.58,Ge*.58),M=new xe(_,f);M.rotation.x=-Math.PI/2,M.position.y=rn/2+4e-4,M.renderOrder=6,(c=this.cardFlipGroups.get(t))==null||c.add(M),s={canvas:h,context:d,texture:u,mesh:M,geometry:_,material:f},this.hpMarkers.set(t,s)}const{canvas:r,context:a,texture:o,mesh:l}=s;a.clearRect(0,0,r.width,r.height),a.fillStyle="rgba(0, 0, 0, 0.62)",a.beginPath(),a.roundRect(8,8,r.width-16,r.height-16,54),a.fill(),a.strokeStyle="rgba(255, 255, 255, 0.22)",a.lineWidth=4,a.stroke(),a.fillStyle="#ffffff",a.font="800 220px system-ui, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText(String(e.current),r.width/2,r.height/2+3),o.needsUpdate=!0,s.mesh.visible=!!(this.hpOverlayVisible&&!i.userData.knockedOut)}updateHpMarkers(){for(const[t,e]of this.hpMarkers){const i=this.cardObjects.get(t);if(!i){e.mesh.visible=!1;continue}const s=this.cardOwners.get(t)??1;e.mesh.rotation.z=s===this.viewPlayer?0:Math.PI,e.mesh.visible=!!(this.hpOverlayVisible&&!i.userData.knockedOut&&Object.hasOwn(this.placements,t))}}disposeHpMarker(t){var i;const e=this.hpMarkers.get(t);e&&((i=e.mesh.parent)==null||i.remove(e.mesh),e.geometry.dispose(),e.texture.dispose(),e.material.dispose(),this.hpMarkers.delete(t))}animateCardToPosition(t,e){if(!this.cardObjects.get(t))return;let s=this.motionStates.get(t);s||(s={active:!1,grabOffset:new O,pointerPoint:new O,lastPointerPoint:new O,lastMoveAt:performance.now(),velocity:new O,targetPosition:e.clone()},this.motionStates.set(t,s)),s.active=!1,s.velocity.set(0,0,0),s.targetPosition.copy(e)}repositionKnockedOutCards(t){const e=[...this.cardObjects.entries()].filter(([r,a])=>a.userData.knockedOut&&(this.cardOwners.get(r)??1)===t).map(([r])=>r),i=Ge+.1,s=(t===2?-1:1)*(Hn+Qe/2+.12);e.forEach((r,a)=>{const o=(a-(e.length-1)/2)*i;this.animateCardToPosition(r,new O(o,Qo,s))})}setCardFacing(t,e){this.cardOwners.set(t,e);const i=this.cardObjects.get(t);i&&(i.userData.facingYaw=e===2?Math.PI:0,i.rotation.y=this.cardRestYaw(t))}moveCardTo(t,e){if(!this.cardObjects.has(t))return;this.placements[t]=e;const i=this.cellPosition(e);this.cardObjects.get(t);const s=this.motionStates.get(t);s?s.targetPosition.copy(i):this.motionStates.set(t,{active:!1,grabOffset:new O,pointerPoint:new O,lastPointerPoint:new O,lastMoveAt:performance.now(),velocity:new O,targetPosition:i});const r=this.cardShadows.get(t);r&&r.position.copy(i),this.notifyChange()}boardCellAtPointer(t,e){return this.cellFromPoint(this.pointOnBoard(t,e))}cardCenterForPointer(t,e){const i=this.motionStates.get(t),s=this.cardObjects.get(t);if(!i||!s)return e;const r=i.grabOffset.clone().applyQuaternion(s.quaternion);return e.clone().sub(r)}beginCardDrag(t,e,i){var a,o;const s=this.cardObjects.get(t),r=this.pointAboveBoard(i.clientX,i.clientY);return!s||!r?(this.controls.enabled=!0,this.canvas.style.cursor="",!1):(this.hoverTargets.delete(t),this.hoveredCardName===t&&(this.hoveredCardName=null),this.draggingName=t,this.dragOrigin=this.placements[t],(o=(a=this.callbacks).onCardSelect)==null||o.call(a,t),this.motionStates.set(t,{active:!0,grabOffset:e,pointerPoint:r,lastPointerPoint:r.clone(),lastMoveAt:performance.now(),velocity:new O,targetPosition:s.position.clone()}),this.canvas.style.cursor="grabbing",this.reportStatus(`Moving ${t}. Its shadow shows the vertical projection onto the board.`),!0)}beginAttachedItemDrag(t,e){var d,u,f,_;const i=this.attachedItems.get(t.name),s=this.placements[t.name],r=this.cardObjects.get(t.name);if(!i||s===void 0||!r)return this.controls.enabled=!0,this.canvas.style.cursor="",!1;const a=`ungrouped-${i.id}-${this.nextDetachedItemId++}`,o=this.cardRestYaw(t.name);this.setAttachedItem(t.name,null),(u=(d=this.callbacks).onBoardItemDetach)==null||u.call(d,t.name,i),this.placeItemCard(a,i,s);const l=this.boardItemCards.get(i.name);l&&(l.adjacentOwner=t.name);const c=this.cardObjects.get(i.name);if(!c)return(_=(f=this.callbacks).onBoardItemAttach)==null||_.call(f,a,i,t.name),this.removeBoardItemCard(a),this.controls.enabled=!0,this.canvas.style.cursor="",!1;c.rotation.y=o+$u,c.updateMatrixWorld(!0);const h=c.worldToLocal(t.hitPoint.clone());return this.beginCardDrag(i.name,h,e)}reattachUngroupedBoardItem(t){var s,r;const e=t==null?void 0:t.adjacentOwner;return!e||!(((r=(s=this.callbacks).onBoardItemAttach)==null?void 0:r.call(s,t.instanceId,t.item,e))===!0)?!1:(this.removeBoardItemCard(t.instanceId),!0)}isAdjacentCell(t,e){if(!Number.isInteger(t)||!Number.isInteger(e))return!1;const i=Math.floor(t/Je),s=t%Je,r=Math.floor(e/Je),a=e%Je;return Math.max(Math.abs(i-r),Math.abs(s-a))===1}handlePointerDown(t){var h,d,u;if(this.viewTransition)return;if(t.button===1){const f=t.ctrlKey||t.shiftKey;this.controls.mouseButtons.MIDDLE=Yn.PAN,this.reportStatus(f?"Orbiting the board view.":"Panning the board view.");return}if(t.button===2||t.button!==0)return;if(this.controls.mouseButtons.LEFT=t.shiftKey?Yn.ROTATE:-1,t.shiftKey){this.reportStatus("Orbiting the board view.");return}const e=this.pickHandCard(t.clientX,t.clientY);if(e){const f=e.object.userData.handCardKey,_=this.handCardGroups.get(f);if(!_)return;t.preventDefault(),t.stopPropagation(),this.controls.enabled=!1,_.updateMatrixWorld(!0);const M=_.worldToLocal(e.point.clone());this.pendingHandPress={key:f,pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,grabOffset:M},this.handHoverKey=f,this.canvas.setPointerCapture(t.pointerId),this.canvas.style.cursor="grab";return}const i=this.pickCard(t.clientX,t.clientY);if(!i){t.preventDefault(),t.stopPropagation();return}const s=i.object.userData.cardName;if((h=this.cardObjects.get(s))!=null&&h.userData.knockedOut){t.preventDefault(),t.stopPropagation();return}const r=i.object.userData.attachedItemOwner,a=r?null:this.actionAtHit(s,i);t.preventDefault(),t.stopPropagation(),this.controls.enabled=!1;const o=i.object.userData.cardName,l=this.cardObjects.get(o);if(!l){this.controls.enabled=!0;return}this.hoverTargets.delete(o),this.hoveredCardName===o&&(this.hoveredCardName=null),(u=(d=this.callbacks).onCardHover)==null||u.call(d,null),l.updateMatrixWorld(!0);const c=l.worldToLocal(i.point.clone());this.pendingCardPress={kind:a?"action":"card",name:o,action:(a==null?void 0:a.action)??null,attachedItemOwner:r,hitPoint:r?i.point.clone():null,pointerId:t.pointerId,startX:t.clientX,startY:t.clientY,grabOffset:c},this.canvas.setPointerCapture(t.pointerId),this.canvas.style.cursor=a?"pointer":"grab"}handlePointerMove(t){var l,c,h,d,u,f,_,M,m,p,b,R,x,E,A,I,v,C;if(((l=this.pendingHandPress)==null?void 0:l.pointerId)===t.pointerId){const L=this.pendingHandPress;if(Math.hypot(t.clientX-L.startX,t.clientY-L.startY)<6)return;this.pendingHandPress=null;const P=this.handCardGroups.get(L.key);if(!P){this.controls.enabled=!0;return}this.handDrag={key:L.key,pointerId:t.pointerId,cardGrabOffset:L.grabOffset.clone().sub(((c=this.handCardContents.get(L.key))==null?void 0:c.position)??new O),depth:Math.max(.5,-P.position.z),scale:P.scale.x,mode:"fan"};const U=this.handCardFaces.get(L.key);U&&(U.renderOrder=14e3);const W=(h=P.children[0])==null?void 0:h.children[0];W&&(W.renderOrder=13999),this.canvas.style.cursor="grabbing",this.positionHandDragAtPointer(t,this.handDrag)}if(((d=this.handDrag)==null?void 0:d.pointerId)===t.pointerId){this.positionHandDragAtPointer(t,this.handDrag),this.canvas.style.cursor="grabbing";return}if(((u=this.pendingCardPress)==null?void 0:u.pointerId)===t.pointerId){const L=this.pendingCardPress;if(Math.hypot(t.clientX-L.startX,t.clientY-L.startY)<6)return;this.pendingCardPress=null,L.attachedItemOwner?this.beginAttachedItemDrag({name:L.attachedItemOwner,hitPoint:L.hitPoint},t):L.kind==="action"?(this.draggingAction={name:L.name,action:L.action,startX:L.startX,startY:L.startY},this.canvas.style.cursor="crosshair",(_=(f=this.callbacks).onActionDragStart)==null||_.call(f,L.name,L.action,L.startX,L.startY)):this.beginCardDrag(L.name,L.grabOffset,t)}if(this.draggingAction){const L=this.pickCard(t.clientX,t.clientY),P=(L==null?void 0:L.object.userData.cardName)??null,U=this.boardCellAtPointer(t.clientX,t.clientY);this.canvas.style.cursor="crosshair",(m=(M=this.callbacks).onActionDragMove)==null||m.call(M,this.draggingAction.name,this.draggingAction.action,P,(U==null?void 0:U.index)??null,t.clientX,t.clientY);return}if(this.draggingName){const L=this.pointAboveBoard(t.clientX,t.clientY),P=this.motionStates.get(this.draggingName);if(!L||!P)return;const U=performance.now(),W=Math.max((U-P.lastMoveAt)/1e3,.008),F=L.clone().sub(P.lastPointerPoint).multiplyScalar(1/W);F.length()>16&&F.setLength(16),P.velocity.lerp(F,.48),P.lastPointerPoint.copy(L),P.pointerPoint.copy(L),P.lastMoveAt=U;return}const e=this.pickHandCard(t.clientX,t.clientY);if(e){this.handHoverKey=e.object.userData.handCardKey,this.canvas.style.cursor="grab",(b=(p=this.callbacks).onActionHover)==null||b.call(p,null,null,t.clientX,t.clientY),(x=(R=this.callbacks).onCardHover)==null||x.call(R,null),this.updateCardHover(null);return}this.handHoverKey=null;const i=this.pickCard(t.clientX,t.clientY),s=i==null?void 0:i.object.userData.cardName,r=s&&((E=this.cardObjects.get(s))==null?void 0:E.userData.knockedOut),a=!!(i!=null&&i.object.userData.attachedItemOwner||this.isBoardItemCard(s)),o=s&&!r&&!a?this.actionAtHit(s,i):null;this.canvas.style.cursor=o?"pointer":i&&!r?"grab":"",o?(I=(A=this.callbacks).onActionHover)==null||I.call(A,s,o.action,t.clientX,t.clientY):(C=(v=this.callbacks).onActionHover)==null||C.call(v,null,null,t.clientX,t.clientY),this.reportCardHover(s&&!r&&!a?s:null),this.updateCardHover(a?null:i)}reportCardHover(t){var o,l,c,h;const e=t?this.cardObjects.get(t):null;if(!e){(l=(o=this.callbacks).onCardHover)==null||l.call(o,null);return}e.updateMatrixWorld(!0);const i=e.getWorldPosition(new O);i.project(this.camera);const s=this.canvas.getBoundingClientRect(),r=(i.x*.5+.5)*s.width,a=(-i.y*.5+.5)*s.height;(h=(c=this.callbacks).onCardHover)==null||h.call(c,t,r,a)}updateCardHover(t){const e=(t==null?void 0:t.object.userData.cardName)??null;if(this.hoveredCardName&&this.hoveredCardName!==e&&this.hoverTargets.delete(this.hoveredCardName),this.hoveredCardName=e,!e||this.motionStates.has(e)){e&&this.hoverTargets.delete(e);return}const i=this.cardObjects.get(e);if(!i)return;i.updateMatrixWorld(!0);const s=i.worldToLocal(t.point.clone());this.hoverTargets.set(e,{tiltX:-be.clamp(s.y/(Qe/2),-1,1)*Ju,tiltZ:-be.clamp(s.x/(Ge/2),-1,1)*Ju})}handlePointerLeave(t){var e,i;t!=null&&t.relatedTarget&&this.container.contains(t.relatedTarget)||this.draggingName||this.handDrag||this.pendingHandPress||(this.handHoverKey=null,this.hoveredCardName&&this.hoverTargets.delete(this.hoveredCardName),this.hoveredCardName=null,(i=(e=this.callbacks).onCardHover)==null||i.call(e,null),this.canvas.style.cursor="")}handlePointerUp(t){var M,m,p,b,R,x,E,A,I,v,C,L,P,U,W,F,Y,J,q,at,nt,ct,lt,wt,Dt,te,Yt,qt,it;if(t.button===0&&(this.controls.mouseButtons.LEFT=-1),t.button===2||t.button===1||t.button!==0)return;if(this.draggingAction){const tt=this.draggingAction,vt=this.pickCard(t.clientX,t.clientY),Ht=(vt==null?void 0:vt.object.userData.cardName)??null,Ct=this.boardCellAtPointer(t.clientX,t.clientY);this.draggingAction=null,this.controls.enabled=!0,this.canvas.style.cursor="",(m=(M=this.callbacks).onActionDrop)==null||m.call(M,tt.name,tt.action,Ht,(Ct==null?void 0:Ct.index)??null),(b=(p=this.callbacks).onActionHover)==null||b.call(p,null,null,t.clientX,t.clientY);return}if(this.handDrag){if(this.handDrag.pointerId!==t.pointerId)return;const tt=this.handDrag;this.positionHandDragAtPointer(t,tt);const vt=this.handCards.get(tt.key);if(this.handDrag=null,this.controls.enabled=!0,this.canvas.style.cursor="",vt&&tt.mode==="board"&&tt.targetCell){if(tt.releaseX=t.clientX,tt.releaseY=t.clientY,vt.entryType!=="item"){if(this.occupiedBy(tt.targetCell.index)){this.reportStatus("That square is occupied."),this.returnHandCardToFan(tt);return}if(((x=(R=this.callbacks).canDeployCard)==null?void 0:x.call(R,vt.name,tt.targetCell.index))===!1){this.returnHandCardToFan(tt);return}}this.beginHandLanding(tt,tt.targetCell)}else this.returnHandCardToFan(tt);return}if(this.pendingHandPress){const tt=this.pendingHandPress;if(tt.pointerId!==t.pointerId)return;this.pendingHandPress=null,this.controls.enabled=!0,this.canvas.style.cursor="";const vt=this.handCards.get(tt.key);vt&&((A=(E=this.callbacks).onHandCardClick)==null||A.call(E,vt));return}if(this.pendingCardPress){const tt=this.pendingCardPress;if(tt.pointerId!==t.pointerId)return;if(this.pendingCardPress=null,this.controls.enabled=!0,this.canvas.style.cursor="",tt.attachedItemOwner){this.reportStatus("Drag the equipped item to an adjacent square to ungroup it.");return}(v=(I=this.callbacks).onCardSelect)==null||v.call(I,tt.name),this.flipCard(tt.name),this.reportStatus(`${tt.name}: ${((C=this.flipAnimations.get(tt.name))==null?void 0:C.target)??this.cardFaces.get(tt.name)} side.`),(P=(L=this.callbacks).onActionHover)==null||P.call(L,null,null,t.clientX,t.clientY);return}if(!this.draggingName)return;const e=this.draggingName,i=this.dragOrigin,s=this.boardItemCards.get(e),r=s?(W=(U=this.callbacks).isInHandZone)==null?void 0:W.call(U,t.clientX,t.clientY):(Y=(F=this.callbacks).isReturnZone)==null?void 0:Y.call(F,t.clientX,t.clientY),a=this.motionStates.get(e),o=this.pointAboveBoard(t.clientX,t.clientY);a&&o&&a.pointerPoint.copy(o);const l=a&&o?this.cardCenterForPointer(e,o):null,c=this.cellFromPoint(l);if(this.draggingName=null,this.dragOrigin=null,this.controls.enabled=!0,this.canvas.style.cursor="",r&&s){(q=(J=this.callbacks).onBoardItemReturn)==null||q.call(J,s.item,s.instanceId),this.removeBoardItemCard(s.instanceId),this.reportStatus(`${s.item.name} returned to the hand.`);return}if(r&&((nt=(at=this.callbacks).canReturnCard)==null?void 0:nt.call(at,e))!==!1){this.removeCard(e),this.reportStatus(`${e} returned to the card list.`);return}if(s!=null&&s.adjacentOwner){const tt=this.placements[s.adjacentOwner];if(!(c&&this.isAdjacentCell(tt,c.index)&&!this.occupiedBy(c.index,e))){this.reattachUngroupedBoardItem(s),this.reportStatus(`${s.item.name} stays equipped. Drop it on an adjacent open square to ungroup it.`);return}s.adjacentOwner=null}if(!a||!c||c.index===i){a&&(a.active=!1,a.targetPosition.copy(this.cellPosition(i))),(!c||c.index!==i)&&this.reportStatus("Card returned to its previous square.");return}const h=c.index;if(((lt=(ct=this.callbacks).canMoveCard)==null?void 0:lt.call(ct,e,i,h))===!1){a.active=!1,a.targetPosition.copy(this.cellPosition(i)),this.reportStatus("That move is not legal right now.");return}const d=this.occupiedBy(h,e);if(d&&s){if(((Dt=(wt=this.callbacks).onBoardItemAttach)==null?void 0:Dt.call(wt,s.instanceId,s.item,d))===!0){this.removeBoardItemCard(s.instanceId);return}a.active=!1,a.targetPosition.copy(this.cellPosition(i)),this.reportStatus("That square cannot equip this item.");return}let u=null;const f=d?this.boardItemCards.get(d):null;if(f&&!s)if(((Yt=(te=this.callbacks).onBoardItemAttach)==null?void 0:Yt.call(te,f.instanceId,f.item,e))===!0)u=f.item,this.removeBoardItemCard(f.instanceId);else{a.active=!1,a.targetPosition.copy(this.cellPosition(i)),this.reportStatus(`Could not equip ${f.item.name}.`);return}if(d&&!u){a.active=!1,a.targetPosition.copy(this.cellPosition(i)),this.reportStatus("That square is occupied.");return}this.placements[e]=h,a.active=!1,a.targetPosition.copy(this.cellPosition(h)),(it=(qt=this.callbacks).onMoveCard)==null||it.call(qt,e,i,h,u),this.notifyChange();const _=this.cellDescription(h);this.reportStatus(u?`${e} equipped ${u.name} and moved to ${_}.`:`${e} moved to ${_}.`)}handlePointerCancel(){var i,s,r,a;if(this.controls.mouseButtons.LEFT=-1,this.pendingHandPress||this.handDrag){const o=this.handDrag;this.pendingHandPress=null,this.handDrag=null,o&&this.returnHandCardToFan(o),this.controls.enabled=!0,this.canvas.style.cursor="";return}if(this.pendingCardPress){this.pendingCardPress=null,this.controls.enabled=!0,this.canvas.style.cursor="",(s=(i=this.callbacks).onActionHover)==null||s.call(i,null,null,0,0);return}if(this.draggingAction){this.draggingAction=null,this.controls.enabled=!0,this.canvas.style.cursor="",(a=(r=this.callbacks).onActionHover)==null||a.call(r,null,null,0,0);return}if(!this.draggingName)return;const t=this.boardItemCards.get(this.draggingName);if(t!=null&&t.adjacentOwner){t.instanceId,this.draggingName=null,this.dragOrigin=null,this.controls.enabled=!0,this.canvas.style.cursor="",this.reattachUngroupedBoardItem(t),this.reportStatus(`${t.item.name} stayed equipped.`);return}const e=this.motionStates.get(this.draggingName);e&&this.dragOrigin!==null&&(e.active=!1,e.targetPosition.copy(this.cellPosition(this.dragOrigin))),this.draggingName=null,this.dragOrigin=null,this.controls.enabled=!0,this.canvas.style.cursor=""}placeCard(t,e,i){var r,a,o,l;if(!this.cards.has(t)||Object.hasOwn(this.placements,t))return!1;const s=this.cellFromPoint(this.pointOnBoard(e,i));return s?this.occupiedBy(s.index)?(this.reportStatus("That square is occupied. Choose an open square."),!1):((a=(r=this.callbacks).canDeployCard)==null?void 0:a.call(r,t,s.index))===!1?!1:(this.placements[t]=s.index,this.addCardMesh(t,s.index),(l=(o=this.callbacks).onDeploy)==null||l.call(o,t,s.index),this.notifyChange(),this.reportStatus(`${t} placed at ${this.cellDescription(s.index)}.`),!0):(this.reportStatus("Drop the card inside the board boundary."),!1)}placeCardAt(t,e){return!this.cards.has(t)||Object.hasOwn(this.placements,t)||this.occupiedBy(e)?!1:(this.placements[t]=e,this.addCardMesh(t,e),this.notifyChange(),!0)}dropItem(t,e,i){var r,a;const s=this.cellFromPoint(this.pointOnBoard(e,i));return s?((a=(r=this.callbacks).onItemDrop)==null?void 0:a.call(r,t,s.index))!==!1:(this.reportStatus("Drop the item card inside the board boundary."),!1)}addCardMesh(t,e){if(this.cardObjects.has(t)||!Object.hasOwn(this.placements,t))return;const i=this.textures.get(t);if(!i){if(this.loadingTextures.has(t))return;this.loadingTextures.add(t);const I=this.cards.get(t);new Ys().load(I.src,v=>{if(this.loadingTextures.delete(t),this.destroyed){v.dispose();return}v.colorSpace=Re,v.anisotropy=Math.min(this.renderer.capabilities.getMaxAnisotropy(),8),this.textures.set(t,v);const C=`character:${t}`;this.handCards.has(C)&&this.addHandCardMesh(C),Object.hasOwn(this.placements,t)&&this.addCardMesh(t,this.placements[t])},void 0,()=>{this.loadingTextures.delete(t),this.reportStatus(`Could not load the card art for ${t}.`)});return}const s=new hn;s.position.copy(this.cellPosition(e)),s.userData.cardName=t,s.userData.facingYaw=this.cardOwners.get(t)===2?Math.PI:0,s.userData.statusYaw=Zu(this.cardConditions.get(t)),s.rotation.y=s.userData.facingYaw+s.userData.statusYaw;const r=[...t].reduce((I,v)=>I*31+v.charCodeAt(0)>>>0,7);s.userData.swayPhase=r/4294967295*Math.PI*2;const a=new hn;a.position.copy(s.position),a.quaternion.copy(s.quaternion),a.userData.cardName=t;const o=Ge+fa*2,l=Qe+fa*2,c=new xe(new Fi(o,l),Qu());c.rotation.x=-Math.PI/2,c.userData.cardName=t,a.add(c),this.scene.add(a),this.cardShadows.set(t,a);const h=new hn;s.add(h);const d=new Ss({color:"#e5e0d4",roughness:.9}),u=new dr(ya(),{depth:rn,bevelEnabled:!1,curveSegments:8});u.translate(0,0,-rn/2);const f=new xe(u,d);f.rotation.x=-Math.PI/2,f.renderOrder=1,f.userData.cardName=t,h.add(f);const _=new bn({map:i}),M=Zs();M.translate(0,0,rn/2+15e-5);const m=new xe(M,_);m.rotation.x=-Math.PI/2,m.userData.cardName=t,m.renderOrder=3,h.add(m);const p=new bn({map:this.makeBackTexture(t)}),b=Zs();b.translate(0,0,rn/2+2e-4);const R=new xe(b,p);R.rotation.set(Math.PI/2,0,Math.PI),R.userData.cardName=t,R.renderOrder=3,R.visible=!1,h.add(R);const x=I=>{const v=Zs();v.translate(0,0,rn/2+45e-5);const C=new xe(v,new bn({color:"#000000",transparent:!0,opacity:.27,depthWrite:!1,side:Ve,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));return C.rotation.copy(I),C.userData.cardName=t,C.renderOrder=4,C.visible=!1,h.add(C),C},E=x(m.rotation),A=x(R.rotation);this.scene.add(s),this.cardObjects.set(t,s),this.cardMeshes.set(t,m),this.cardFaceMeshes.set(t,{front:m,back:R}),this.cardActivationOverlays.set(t,{front:E,back:A}),this.cardFlipGroups.set(t,h),this.cardFaces.set(t,"front"),s.userData.deactivated=!1,this.refreshHpMarker(t),this.attachedItems.has(t)&&this.addAttachedItemMesh(t,this.attachedItems.get(t))}removeCard(t){if(!Object.hasOwn(this.placements,t))return;delete this.placements[t],this.disposeHpMarker(t),this.cardHitPoints.delete(t);const e=this.cardObjects.get(t);e&&(this.scene.remove(e),Bn(e),this.cardObjects.delete(t),this.motionStates.delete(t));const i=this.cardShadows.get(t);i&&(this.scene.remove(i),Bn(i),this.cardShadows.delete(t)),this.cardMeshes.delete(t),this.cardFaceMeshes.delete(t),this.cardActivationOverlays.delete(t),this.cardFlipGroups.delete(t),this.cardFaces.delete(t),this.flipAnimations.delete(t),this.cardOwners.delete(t),this.cardConditions.delete(t),this.attachedItems.delete(t),this.attachedItemGroups.delete(t),this.attachedItemPickMeshes.delete(t),this.hoverTargets.delete(t),this.hoveredCardName===t&&(this.hoveredCardName=null),this.notifyChange()}clear(){this.resetHandCardDrags();for(const t of this.hpMarkers.keys())this.disposeHpMarker(t);this.cardHitPoints.clear();for(const[t,e]of this.cardObjects){this.scene.remove(e),Bn(e);const i=this.cardShadows.get(t);i&&(this.scene.remove(i),Bn(i))}this.cardObjects.clear(),this.attachedItems.clear(),this.attachedItemGroups.clear(),this.attachedItemPickMeshes.clear(),this.boardItemCards.clear(),this.cardMeshes.clear(),this.cardFaceMeshes.clear(),this.cardActivationOverlays.clear(),this.cardFlipGroups.clear(),this.cardFaces.clear(),this.flipAnimations.clear(),this.cardOwners.clear(),this.cardConditions.clear(),this.pendingCardPress=null,this.draggingAction=null,this.cardShadows.clear(),this.motionStates.clear(),this.hoverTargets.clear(),this.draggingName=null,this.dragOrigin=null,this.hoveredCardName=null,this.controls.enabled=!0,this.canvas.style.cursor="",this.placements={},this.notifyChange(),this.reportStatus("Board reset. Drag a card to begin another interaction.")}notifyChange(){var t,e;(e=(t=this.callbacks).onChange)==null||e.call(t,{...this.placements})}reportStatus(t){var e,i;(i=(e=this.callbacks).onStatus)==null||i.call(e,t)}cellDescription(t){const e=Math.floor(t/Je),i=t%Je;return`${String.fromCharCode(65+i)}${e+1}`}resetView(){this.setPlayerView(this.viewPlayer),this.reportStatus("Board view reset.")}setFieldOfView(t){this.camera.fov=be.clamp(Number(t)||43,25,75),this.camera.updateProjectionMatrix(),this.layoutHandFan()}destroy(){var t;this.destroyed=!0,cancelAnimationFrame(this.animationFrame),(t=this.resizeObserver)==null||t.disconnect(),this.canvas.removeEventListener("pointerdown",this.onPointerDown,!0),this.canvas.removeEventListener("pointermove",this.onPointerMove,!0),this.canvas.removeEventListener("pointerup",this.onPointerUp,!0),this.canvas.removeEventListener("pointercancel",this.onPointerCancel,!0),this.canvas.removeEventListener("pointerleave",this.onPointerLeave),this.canvas.removeEventListener("wheel",this.onWheel),this.canvas.removeEventListener("contextmenu",this.onContextMenu),this.controls.dispose();for(const e of this.hpMarkers.keys())this.disposeHpMarker(e);for(const e of this.cardShadows.values())Bn(e);for(const e of this.cardObjects.values())Bn(e);for(const e of this.textures.values())e.dispose();for(const e of this.itemTextures.values())e.dispose();for(const e of this.backTextures.values())e.dispose();this.scene.traverse(e=>{var i,s;e.geometry&&e!==this.boardMesh&&!this.cardObjects.has((i=e.userData)==null?void 0:i.cardName)&&e.geometry.dispose(),e.material&&e!==this.boardMesh&&!this.cardObjects.has((s=e.userData)==null?void 0:s.cardName)&&(Array.isArray(e.material)?e.material.forEach(r=>r.dispose()):e.material.dispose())}),this.boardMesh.geometry.dispose(),ip(this.boardMesh.material),this.tabletopTexture.dispose(),this.boardGridTexture.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const Ob={class:"showcase-shell"},Fb={class:"workspace"},Bb={class:"board-status","aria-live":"polite"},Hb=["aria-label","title"],zb={__name:"ShowcaseApp",setup(n){const t=wi(null),e=wi("Drag cards from the hand onto the board. Deployed cards can be moved or returned to the hand."),i=wi(null),s=wi(null),r=wi({}),a=wi({}),o=wi({}),l=wi([]);let c,h=1;function d(P,U,W){const F=['<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">','<rect width="600" height="900" fill="#f2efe7"/>','<rect x="22" y="22" width="556" height="856" rx="12" fill="none" stroke="#aaa394" stroke-width="5"/>','<rect x="22" y="22" width="556" height="28" rx="10" fill="'+W+'"/>','<text x="300" y="382" text-anchor="middle" font-family="Arial, sans-serif" font-size="45" font-weight="700" letter-spacing="5" fill="#393831">'+P+"</text>",'<text x="300" y="532" text-anchor="middle" font-family="Georgia, serif" font-size="116" fill="'+W+'">'+U+"</text>",'<line x1="112" y1="628" x2="488" y2="628" stroke="#c8c2b5" stroke-width="4"/>',"</svg>"].join("");return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(F)}const u=[{name:"CHARACTER 01",displayName:"CHARACTER 01",src:d("CHARACTER","01","#6a7665")},{name:"CHARACTER 02",displayName:"CHARACTER 02",src:d("CHARACTER","02","#8a6452")},{name:"CHARACTER 03",displayName:"CHARACTER 03",src:d("CHARACTER","03","#657689")},{name:"CHARACTER 04",displayName:"CHARACTER 04",src:d("CHARACTER","04","#927c4e")}],f=[{id:"item-01",name:"ITEM 01",src:d("ITEM","01","#9b7951")},{id:"item-02",name:"ITEM 02",src:d("ITEM","02","#6f7e72")},{id:"item-03",name:"ITEM 03",src:d("ITEM","03","#766b87")},{id:"item-04",name:"ITEM 04",src:d("ITEM","04","#8a665b")},{id:"item-05",name:"ITEM 05",src:d("ITEM","05","#68798a")}];function _(){return f.map(P=>({...P,entryType:"item",instanceId:P.id+"-in-hand"}))}function M(){c==null||c.setHandCards(l.value)}function m(P){return String.fromCharCode(65+P%10)+(Math.floor(P/10)+1)}function p(P,U){var F;const W=(F=t.value)==null?void 0:F.getBoundingClientRect();return!!(W&&P>=W.left&&P<=W.right&&U>=W.bottom-150&&U<=W.bottom)}function b(P,U){var Y;const W=f.find(J=>J.id===P);if(!W)return!1;const F=(Y=Object.entries(r.value).find(([J,q])=>q===U&&!c.isBoardItemCard(J)))==null?void 0:Y[0];if(F){if(!R(F,W))return!1}else{if(Object.values(r.value).includes(U))return e.value="That square already holds a card. Choose an open square.",!1;const J="dropped-item-"+h++;c.placeItemCard(J,W,U),e.value=W.name+" dropped onto "+m(U)+"."}return l.value=l.value.filter(J=>J.id!==P),M(),!0}function R(P,U){return!Object.hasOwn(r.value,P)||c!=null&&c.isBoardItemCard(P)?!1:o.value[P]?(e.value=P+" already has an attached item. Choose another card or an open square.",!1):(c.setAttachedItem(P,U),o.value={...o.value,[P]:U.name},e.value=U.name+" equipped by "+P+".",!0)}function x(P){l.value=[...l.value,{...P,entryType:"item",instanceId:P.id+"-returned-"+h++}],M(),e.value=P.name+" returned to the hand."}function E(P,U,W){return R(W,U)}function A(P,U){if(o.value[P]!==U.name)return;const W={...o.value};delete W[P],o.value=W,e.value="Drag "+U.name+" to an adjacent open square to ungroup it."}function I(P=(U=>(U=s.value)==null?void 0:U.name)()??i.value){if(!P||c!=null&&c.isBoardItemCard(P))return;i.value=P;const W=!a.value[P];a.value={...a.value,[P]:W},c==null||c.setCardConditions(P,{guard:W}),e.value=W?P+" is in the 90° defending pose.":P+" returned to the ready pose."}function v(){if(!c)return;c.setHandCards([]),c.clear(),r.value={},s.value=null,a.value={},o.value={},h=1,i.value=u[0].name;const P=[{card:u[0],cell:11},{card:u[1],cell:28},{card:u[2],cell:63},{card:u[3],cell:87}];for(const U of P)c.placeCardAt(U.card.name,U.cell),c.setCardConditions(U.card.name,{guard:!1});l.value=_(),M(),c.resetView(),e.value="Drag cards from the hand onto the board. Move deployed cards freely or return item cards to the hand."}function C(){c==null||c.resetView()}function L(P){var U;(U=t.value)!=null&&U.contains(P.relatedTarget)||(s.value=null)}return Nd(()=>{c=new Ub(t.value,u,{onChange(P){r.value=P},onStatus(P){e.value=P},onCardSelect(P){i.value=P},onCardHover(P,U,W){s.value=P?{name:P,x:U,y:W}:null},canMoveCard(){return!0},onMoveCard(P,U,W,F){e.value=F?P+" equipped "+F.name+" and moved to "+m(W)+".":P+" moved from "+m(U)+" to "+m(W)+"."},onItemDrop:b,onBoardItemReturn:x,onBoardItemAttach:E,onBoardItemDetach:A,isInHandZone:p,onHandCardClick(P){e.value="Drag "+P.name+" from the hand fan to the board."},isCardKO(){return!1}},f),v()}),Ud(()=>c==null?void 0:c.destroy()),(P,U)=>(cl(),yh("main",Ob,[Te("header",{class:"topbar"},[U[2]||(U[2]=Te("div",{class:"brand-block"},[Te("strong",null,"WORKING TITLE"),Te("span",null,"3D BOARD SHOWCASE")],-1)),Te("div",{class:"topbar-actions"},[U[1]||(U[1]=Te("span",{class:"build-tag"},"INTERACTION STUDY",-1)),Te("button",{type:"button",class:"quiet-button",onClick:C},"Reset view"),Te("button",{type:"button",class:"quiet-button",onClick:v},"Reset demo")])]),Te("section",Fb,[Te("section",{ref_key:"viewport",ref:t,class:"board-viewport","aria-label":"Three-dimensional ten by ten card board"},[U[4]||(U[4]=Te("div",{class:"board-label"},[Te("span",{class:"overline"},"TABLETOP STUDY"),Te("b",null,"Arrange cards freely."),Te("small",null,"Scroll to zoom · MMB to pan · Ctrl / Shift + MMB to orbit")],-1)),Te("div",Bb,od(e.value),1),U[5]||(U[5]=Te("div",{class:"board-corner-note"},"10 × 10 SANDBOX",-1)),s.value?(cl(),yh("button",{key:0,type:"button",class:ka(["card-defend-button",{active:a.value[s.value.name]}]),style:Ga({left:`${s.value.x}px`,top:`${s.value.y}px`}),"aria-label":a.value[s.value.name]?`Return ${s.value.name} to ready`:`Defend with ${s.value.name}`,title:a.value[s.value.name]?"Return to ready":"Defend",onClick:U[0]||(U[0]=Ug(W=>I(s.value.name),["stop"])),onPointerleave:L},[...U[3]||(U[3]=[Te("svg",{viewBox:"0 0 24 24","aria-hidden":"true"},[Te("path",{d:"M12 2.7 19.5 6v5.1c0 4.8-3 8.4-7.5 10.2-4.5-1.8-7.5-5.4-7.5-10.2V6L12 2.7Z"}),Te("path",{d:"m8.6 12.1 2.2 2.2 4.7-4.8"})],-1)])],46,Hb)):Jm("",!0)],512)])]))}};Bg(zb).mount("#app");
