import{_ as y}from"./DdrpHXmy.js";import{f as v,u as b,r as c,h as C,o as a,g as w,w as i,a as h,c as u,i as L,F as A,t as f,j as t,k as B,d as k,l as W,b as $}from"./BT2uR51H.js";import{_ as D}from"./C67Bquau.js";import"./CuwZv8n_.js";const j={class:"mt-8 flex flex-wrap justify-center dark:text-gray-300"},N={class:"text-center text-2xl dark:text-white"},V={key:0,class:"mt-8 flex justify-center"},Y={key:1,style:{height:"300px"}};var _=(o=>(o.windows="Windows",o.linux="Linux",o.android="Android",o))(_||{});const q=v({__name:"download",setup(o){const{t:m}=b(),s=c(null),d=c(""),x=c("");function g(){const e=navigator.userAgent;return e.includes("Android")?"Android":e.includes("Win")?"Windows":e.includes("Linux")?"Linux":"Windows"}function p(e){if(s.value=e,e==="Linux"){window.location.href="https://github.com/lingyicute/YiDrop/releases/latest";return}const n=e==="Windows"?"exe":"apk";d.value=`https://github.com/lingyicute/YiDrop/releases/latest/download/YiDrop.${n}`,x.value=`下载 YiDrop ${e==="Windows"?"安装程序":"安装包"}`}return C(()=>{const e=(router.currentRoute.value.query.os??"").toLowerCase(),n=Object.values(_).find(l=>l.toLowerCase()===e)??g();s.value=n,n!=="Linux"&&p(n)}),(e,n)=>{const l=y;return a(),w(D,{"sub-title":t(m)("download.title")},{tabs:i(()=>[h("div",j,[(a(),u(A,null,L(_,r=>$(l,{key:r,class:"mx-2 mb-4",onClick:O=>p(r),dark:t(s)!==r},{default:i(()=>[k(f(r),1)]),_:2},1032,["onClick","dark"])),64))])]),content:i(()=>[h("h3",N,f(t(m)("download.subTitle",{os:t(s)})),1),t(s)?(a(),u("div",V,[t(d)?(a(),w(B,{key:0,href:t(d),icon:"material-symbols:download",class:"text-lg dark:text-gray-300"},{default:i(()=>[k(f(t(x)),1)]),_:1},8,["href"])):W("",!0)])):(a(),u("div",Y))]),_:1},8,["sub-title"])}}});export{q as default};
