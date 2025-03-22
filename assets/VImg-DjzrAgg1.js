import{p as S,H as Q,z as b,ap as k,I as Pe,aq as p,ar as we,as as xe,at as Ve,g as _,ai as $e,a as R,c as d,m as V,l as $,au as N,k as T,av as E,al as z,n as Be,aw as Ne,a9 as je,a7 as Z,ah as ee,v as Ie,S as Le,x,q as Re,a4 as L,V as Te,am as Ee,R as ze,X as K,a6 as Oe,F as Ae,D as Ue,Y as Fe}from"./index-DNGbYbLv.js";import{u as te,m as O,a as ne}from"./tag-B1c4t7rx.js";const ut=(e,s)=>{const n=e.__vccOpts||e;for(const[t,r]of s)n[t]=r;return n},ct=S({border:[Boolean,Number,String]},"border");function dt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Q();return{borderClasses:b(()=>{const t=k(e)?e.value:e.border,r=[];if(t===!0||t==="")r.push(`${s}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))r.push(`border-${i}`);return r})}}function se(e){return Pe(()=>{const s=[],n={};if(e.value.background)if(p(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&we(e.value.background)){const t=xe(e.value.background);if(t.a==null||t.a===1){const r=Ve(t);n.color=r,n.caretColor=r}}}else s.push(`bg-${e.value.background}`);return e.value.text&&(p(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:n}})}function ft(e,s){const n=b(()=>({text:k(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:r}=se(n);return{textColorClasses:t,textColorStyles:r}}function De(e,s){const n=b(()=>({background:k(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:r}=se(n);return{backgroundColorClasses:t,backgroundColorStyles:r}}const gt=S({elevation:{type:[Number,String],validator(e){const s=parseInt(e);return!isNaN(s)&&s>=0&&s<=24}}},"elevation");function vt(e){return{elevationClasses:b(()=>{const n=k(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Ge=S({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Me(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Q();return{roundedClasses:b(()=>{const t=k(e)?e.value:e.rounded,r=k(e)?e.value:e.tile,i=[];if(t===!0||t==="")i.push(`${s}--rounded`);else if(typeof t=="string"||t===0)for(const a of String(t).split(" "))i.push(`rounded-${a}`);else(r||t===!1)&&i.push("rounded-0");return i})}}const We=S({fluid:{type:Boolean,default:!1},...V(),...ne(),...O()},"VContainer"),mt=_()({name:"VContainer",props:We(),setup(e,s){let{slots:n}=s;const{rtlClasses:t}=$e(),{dimensionStyles:r}=te(e);return R(()=>d(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:[r.value,e.style]},n)),{}}}),ae=N.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}),re=N.reduce((e,s)=>{const n="offset"+T(s);return e[n]={type:[String,Number],default:null},e},{}),oe=N.reduce((e,s)=>{const n="order"+T(s);return e[n]={type:[String,Number],default:null},e},{}),J={col:Object.keys(ae),offset:Object.keys(re),order:Object.keys(oe)};function qe(e,s,n){let t=e;if(!(n==null||n===!1)){if(s){const r=s.replace(e,"");t+=`-${r}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const He=["auto","start","end","center","baseline","stretch"],pe=S({cols:{type:[Boolean,String,Number],default:!1},...ae,offset:{type:[String,Number],default:null},...re,order:{type:[String,Number],default:null},...oe,alignSelf:{type:String,default:null,validator:e=>He.includes(e)},...V(),...O()},"VCol"),yt=_()({name:"VCol",props:pe(),setup(e,s){let{slots:n}=s;const t=b(()=>{const r=[];let i;for(i in J)J[i].forEach(o=>{const f=e[o],l=qe(i,o,f);l&&r.push(l)});const a=r.some(o=>o.startsWith("v-col-"));return r.push({"v-col":!a||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),r});return()=>{var r;return $(e.tag,{class:[t.value,e.class],style:e.style},(r=n.default)==null?void 0:r.call(n))}}}),A=["start","end","center"],ie=["space-between","space-around","space-evenly"];function U(e,s){return N.reduce((n,t)=>{const r=e+T(t);return n[r]=s(),n},{})}const Ke=[...A,"baseline","stretch"],le=e=>Ke.includes(e),ue=U("align",()=>({type:String,default:null,validator:le})),Je=[...A,...ie],ce=e=>Je.includes(e),de=U("justify",()=>({type:String,default:null,validator:ce})),Ye=[...A,...ie,"stretch"],fe=e=>Ye.includes(e),ge=U("alignContent",()=>({type:String,default:null,validator:fe})),Y={align:Object.keys(ue),justify:Object.keys(de),alignContent:Object.keys(ge)},Xe={align:"align",justify:"justify",alignContent:"align-content"};function Qe(e,s,n){let t=Xe[e];if(n!=null){if(s){const r=s.replace(e,"");t+=`-${r}`}return t+=`-${n}`,t.toLowerCase()}}const Ze=S({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:le},...ue,justify:{type:String,default:null,validator:ce},...de,alignContent:{type:String,default:null,validator:fe},...ge,...V(),...O()},"VRow"),bt=_()({name:"VRow",props:Ze(),setup(e,s){let{slots:n}=s;const t=b(()=>{const r=[];let i;for(i in Y)Y[i].forEach(a=>{const o=e[a],f=Qe(i,a,o);f&&r.push(f)});return r.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),r});return()=>{var r;return $(e.tag,{class:["v-row",t.value,e.class],style:e.style},(r=n.default)==null?void 0:r.call(n))}}}),et=S({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function m(e,s,n){return _()({name:e,props:et({mode:n,origin:s}),setup(t,r){let{slots:i}=r;const a={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:f,offsetLeft:l,offsetWidth:c,offsetHeight:v}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${f}px`,o.style.left=`${l}px`,o.style.width=`${c}px`,o.style.height=`${v}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:f,top:l,left:c,width:v,height:h}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=f||"",o.style.top=l||"",o.style.left=c||"",o.style.width=v||"",o.style.height=h||""}}};return()=>{const o=t.group?E:z;return $(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:a},i.default)}}})}function ve(e,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return _()({name:e,props:{mode:{type:String,default:n},disabled:Boolean,group:Boolean},setup(t,r){let{slots:i}=r;const a=t.group?E:z;return()=>$(a,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:s},i.default)}})}function me(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Be(`offset-${n}`);return{onBeforeEnter(a){a._parent=a.parentNode,a._initialStyle={transition:a.style.transition,overflow:a.style.overflow,[n]:a.style[n]}},onEnter(a){const o=a._initialStyle;if(!o)return;a.style.setProperty("transition","none","important"),a.style.overflow="hidden";const f=`${a[t]}px`;a.style[n]="0",a.offsetHeight,a.style.transition=o.transition,e&&a._parent&&a._parent.classList.add(e),requestAnimationFrame(()=>{a.style[n]=f})},onAfterEnter:i,onEnterCancelled:i,onLeave(a){a._initialStyle={transition:"",overflow:a.style.overflow,[n]:a.style[n]},a.style.overflow="hidden",a.style[n]=`${a[t]}px`,a.offsetHeight,requestAnimationFrame(()=>a.style[n]="0")},onAfterLeave:r,onLeaveCancelled:r};function r(a){e&&a._parent&&a._parent.classList.remove(e),i(a)}function i(a){if(!a._initialStyle)return;const o=a._initialStyle[n];a.style.overflow=a._initialStyle.overflow,o!=null&&(a.style[n]=o),delete a._initialStyle}}m("fab-transition","center center","out-in");m("dialog-bottom-transition");m("dialog-top-transition");m("fade-transition");m("scale-transition");m("scroll-x-transition");m("scroll-x-reverse-transition");m("scroll-y-transition");m("scroll-y-reverse-transition");m("slide-x-transition");m("slide-x-reverse-transition");m("slide-y-transition");m("slide-y-reverse-transition");const St=ve("expand-transition",me());ve("expand-x-transition",me("",!0));const tt=S({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ht=_(!1)({name:"VDefaultsProvider",props:tt(),setup(e,s){let{slots:n}=s;const{defaults:t,disabled:r,reset:i,root:a,scoped:o}=Ne(e);return je(t,{reset:i,root:a,scoped:o,disabled:r}),()=>{var f;return(f=n.default)==null?void 0:f.call(n)}}}),nt=S({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),B=(e,s)=>{let{slots:n}=s;const{transition:t,disabled:r,group:i,...a}=e,{component:o=i?E:z,...f}=typeof t=="object"?t:{};return $(o,Z(typeof t=="string"?{name:r?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:r,group:i}).filter(l=>{let[c,v]=l;return v!==void 0})),a),n)};function st(e){return{aspectStyles:b(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const ye=S({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...V(),...ne()},"VResponsive"),X=_()({name:"VResponsive",props:ye(),setup(e,s){let{slots:n}=s;const{aspectStyles:t}=st(e),{dimensionStyles:r}=te(e);return R(()=>{var i;return d("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[d("div",{class:"v-responsive__sizer",style:t.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&d("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function at(e,s){if(!ee)return;const n=s.modifiers||{},t=s.value,{handler:r,options:i}=typeof t=="object"?t:{handler:t,options:{}},a=new IntersectionObserver(function(){var v;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const l=(v=e._observe)==null?void 0:v[s.instance.$.uid];if(!l)return;const c=o.some(h=>h.isIntersecting);r&&(!n.quiet||l.init)&&(!n.once||c||l.init)&&r(c,o,f),c&&n.once?be(e,s):l.init=!0},i);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:a},a.observe(e)}function be(e,s){var t;const n=(t=e._observe)==null?void 0:t[s.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const rt={mounted:at,unmounted:be},ot=S({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ye(),...V(),...Ge(),...nt()},"VImg"),Ct=_()({name:"VImg",directives:{intersect:rt},props:ot(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:n,slots:t}=s;const{backgroundColorClasses:r,backgroundColorStyles:i}=De(Ie(e,"color")),{roundedClasses:a}=Me(e),o=Le("VImg"),f=x(""),l=Re(),c=x(e.eager?"loading":"idle"),v=x(),h=x(),y=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),P=b(()=>y.value.aspect||v.value/h.value||0);L(()=>e.src,()=>{j(c.value!=="idle")}),L(P,(u,g)=>{!u&&g&&l.value&&w(l.value)}),Te(()=>j());function j(u){if(!(e.eager&&u)&&!(ee&&!u&&!e.eager)){if(c.value="loading",y.value.lazySrc){const g=new Image;g.src=y.value.lazySrc,w(g,null)}y.value.src&&Ee(()=>{var g;n("loadstart",((g=l.value)==null?void 0:g.currentSrc)||y.value.src),setTimeout(()=>{var C;if(!o.isUnmounted)if((C=l.value)!=null&&C.complete){if(l.value.naturalWidth||D(),c.value==="error")return;P.value||w(l.value,null),c.value==="loading"&&F()}else P.value||w(l.value),G()})})}}function F(){var u;o.isUnmounted||(G(),w(l.value),c.value="loaded",n("load",((u=l.value)==null?void 0:u.currentSrc)||y.value.src))}function D(){var u;o.isUnmounted||(c.value="error",n("error",((u=l.value)==null?void 0:u.currentSrc)||y.value.src))}function G(){const u=l.value;u&&(f.value=u.currentSrc||u.src)}let I=-1;ze(()=>{clearTimeout(I)});function w(u){let g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const C=()=>{if(clearTimeout(I),o.isUnmounted)return;const{naturalHeight:q,naturalWidth:H}=u;q||H?(v.value=H,h.value=q):!u.complete&&c.value==="loading"&&g!=null?I=window.setTimeout(C,g):(u.currentSrc.endsWith(".svg")||u.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,h.value=1)};C()}const M=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Se=()=>{var C;if(!y.value.src||c.value==="idle")return null;const u=d("img",{class:["v-img__img",M.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:y.value.src,srcset:y.value.srcset,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:l,onLoad:F,onError:D},null),g=(C=t.sources)==null?void 0:C.call(t);return d(B,{transition:e.transition,appear:!0},{default:()=>[K(g?d("picture",{class:"v-img__picture"},[g,u]):u,[[Fe,c.value==="loaded"]])]})},he=()=>d(B,{transition:e.transition},{default:()=>[y.value.lazySrc&&c.value!=="loaded"&&d("img",{class:["v-img__img","v-img__img--preload",M.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:y.value.lazySrc,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Ce=()=>t.placeholder?d(B,{transition:e.transition,appear:!0},{default:()=>[(c.value==="loading"||c.value==="error"&&!t.error)&&d("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,_e=()=>t.error?d(B,{transition:e.transition,appear:!0},{default:()=>[c.value==="error"&&d("div",{class:"v-img__error"},[t.error()])]}):null,ke=()=>e.gradient?d("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,W=x(!1);{const u=L(P,g=>{g&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{W.value=!0})}),u())})}return R(()=>{const u=X.filterProps(e);return K(d(X,Z({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!W.value},r.value,a.value,e.class],style:[{width:Ue(e.width==="auto"?v.value:e.width)},i.value,e.style]},u,{aspectRatio:P.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>d(Ae,null,[d(Se,null,null),d(he,null,null),d(ke,null,null),d(Ce,null,null),d(_e,null,null)]),default:t.default}),[[Oe("intersect"),{handler:j,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:l,state:c,naturalWidth:v,naturalHeight:h}}});export{B as M,bt as V,ut as _,yt as a,mt as b,dt as c,vt as d,Me as e,gt as f,ct as g,ft as h,ht as i,St as j,se as k,Ct as l,Ge as m,ot as n,De as u};
