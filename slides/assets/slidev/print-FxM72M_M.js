import{d as _,P as u,I as h,o as n,b as l,e as t,x as s,B as r,F as f,Q as g,A as v,l as x,g as b}from"../modules/vue-DSgi62rZ.js";import{n as y,l as N,c as m}from"../index-CwZfHQU2.js";import{_ as k}from"./NoteDisplay.vue_vue_type_style_index_0_lang-BPQ1ieBb.js";import"../modules/shiki-Bigh5fmY.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},A={class:"opacity-50"},C={key:0,class:"border-main mb-8"},z=_({__name:"print",setup(D){const{slides:d,total:p}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const i=h(()=>d.value.map(o=>{var a;return(a=o.meta)==null?void 0:a.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,a)=>(n(),l("div",w,[t("div",B,[t("div",L,[t("h1",T,s(r(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(n(!0),l(f,null,g(i.value,(e,c)=>(n(),l("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",A,s(e==null?void 0:e.no)+"/"+s(r(p)),1),v(" "+s(e==null?void 0:e.title)+" ",1),a[0]||(a[0]=t("div",{class:"flex-auto"},null,-1))])]),x(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),l("hr",C)):b("v-if",!0)]))),128))])]))}});export{z as default};
