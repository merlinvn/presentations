const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingPreview-CciW3hb4.js","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-Btu1cM6H.js","assets/modules/vue-DSgi62rZ.js","assets/index-CwZfHQU2.js","assets/modules/shiki-Bigh5fmY.js","assets/modules/shiki-BPvBenZD.css","assets/index-CPmZMd8J.css"])))=>i.map(i=>d[i]);
import{d as m,I as r,X as W,a3 as P,W as A,o as n,b as o,l as u,B as e,i as B,c as _,g as p,h as E,F as d,Q as L,e as f,f as F,G,H as M}from"../modules/vue-DSgi62rZ.js";import{t as z}from"../modules/shiki-Bigh5fmY.js";import{a as I,s as g,T,c as k,e as j,S as q,n as S,w as x,C as D,U as $,V as h,t as H,i as X,W as K}from"../index-CwZfHQU2.js";import{G as O,S as Q,a as U}from"./SlideWrapper-Cwwr2nXh.js";import{_ as J}from"./PrintStyle.vue_vue_type_script_setup_true_lang-CMZsNy3A.js";const Y=["id"],N=m({__name:"PrintSlideClick",props:{nav:{}},setup(i){const t=r(()=>i.nav.currentSlideRoute.value),s=r(()=>({height:`${I.value}px`,width:`${g.value}px`})),a=W();T(()=>import("./DrawingPreview-CciW3hb4.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(l=>a.value=l.default);const c=r(()=>`${t.value.no.toString().padStart(3,"0")}-${(i.nav.clicks.value+1).toString().padStart(2,"0")}`);return P(j,A({nav:i.nav,configs:k,themeConfigs:r(()=>k.themeConfig)})),(l,w)=>(n(),o("div",{id:c.value,class:"print-slide-container",style:E(s.value)},[u(e(O)),u(Q,{"clicks-context":l.nav.clicksContext.value,class:B(e(q)(t.value)),route:t.value},null,8,["clicks-context","class","route"]),a.value?(n(),_(e(a),{key:0,page:t.value.no},null,8,["page"])):p("v-if",!0),u(e(U))],12,Y))}}),Z=m({__name:"PrintSlide",props:{route:{}},setup(i){const{isPrintWithClicks:t}=S(),s=x(i.route,t.value?0:D);return(a,c)=>(n(),o(d,null,[u(N,{"clicks-context":e(s),nav:e($)(a.route,e(s))},null,8,["clicks-context","nav"]),e(t)?(n(),o(d,{key:0},[p(`
      clicks0.total can be any number >=0 when rendering.
      So total-clicksStart can be negative in intermediate states.
    `),(n(!0),o(d,null,L(Math.max(0,e(s).total-e(s).clicksStart),l=>(n(),_(N,{key:l,nav:e($)(a.route,e(x)(a.route,l+e(s).clicksStart))},null,8,["nav"]))),128))],64)):p("v-if",!0)],64))}}),ee={id:"print-content"},te=m({__name:"PrintContainer",props:{width:{}},setup(i){const t=i,{slides:s,currentRoute:a}=S(),c=r(()=>t.width),l=r(()=>t.width/h.value),w=r(()=>c.value/l.value),R=r(()=>w.value<h.value?c.value/g.value:l.value*h.value/g.value);let v=s.value;a.value.query.range&&(v=H(v.length,a.value.query.range).map(y=>v[y-1]));const V=r(()=>({"select-none":!k.selectable}));return P(X,R),(C,y)=>(n(),o("div",{id:"print-container",class:B(V.value)},[f("div",ee,[(n(!0),o(d,null,L(e(v),b=>(n(),_(Z,{key:b.no,route:b},null,8,["route"]))),128))]),F(C.$slots,"controls")],2))}}),ae={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},oe=m({__name:"print",setup(i){const{isPrintMode:t}=S();return G(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),M(()=>{z()}),(s,a)=>(n(),o(d,null,[e(t)?(n(),_(J,{key:0})):p("v-if",!0),f("div",ae,[u(te,{class:"w-full h-full",style:{background:"var(--slidev-slide-container-background, black)"},width:e(K).width.value},null,8,["width"]),a[0]||(a[0]=f("div",{id:"twoslash-container"},null,-1))])],64))}});export{oe as default};
