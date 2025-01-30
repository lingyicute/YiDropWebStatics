import{_ as v}from"./dqY4TmkN.js";import{_ as b}from"./DXhdCAZk.js";import{e as u,o as h,c as f,b as o,a as s,t as a,n as w,p as g,u as k,f as j,k as D,q as r,h as e,w as c,d as _,s as S,_ as P}from"./B9v-qrTa.js";import{_ as $}from"./DX9OQa4T.js";const C={class:"flex flex-col items-center rounded-xl bg-gray-100 pb-4 pl-4 pr-4 pt-8 dark:bg-gray-800 dark:text-gray-300"},N={class:"mt-4 text-center text-xl font-bold dark:text-white"},q={class:"mt-2 text-center dark:text-gray-400"},B=u({__name:"FeatureCard",props:{title:{type:String,required:!0},description:{type:String,required:!0},icon:{type:String,required:!0}},setup(d){const t=d;return(y,l)=>{const m=w;return h(),f("div",C,[o(m,{name:t.icon,class:"text-6xl dark:text-gray-300"},null,8,["name"]),s("h3",N,a(t.title),1),s("p",q,a(t.description),1)])}}}),L=g("/img/screenshot-iphone.webp"),V=g("/img/screenshot-pc.webp"),I={class:"flex min-h-screen items-center justify-center pt-12 md:pt-0"},z={style:{"max-width":"1800px"},class:"grid grid-cols-12"},A={class:"col-span-12 grid grid-cols-12 pb-12 sm:col-span-12 md:col-span-8 md:pb-0 lg:col-span-7"},F={class:"col-span-12 flex items-center justify-center md:col-span-8 md:justify-start lg:pl-2"},T={class:"slogan mt-2 px-4 text-center text-xl font-light dark:text-gray-300 md:px-0 md:text-start md:text-xl xl:text-2xl 2xl:text-3xl"},Y={class:"slogan px-4 text-center text-xl font-light dark:text-gray-300 md:px-0 md:text-start md:text-xl xl:text-2xl 2xl:text-3xl"},E={class:"buttons mt-4 flex flex-wrap justify-center gap-4 px-4 md:justify-start md:px-0 xl:mt-6"},M={class:"m-auto mt-4 flex max-w-screen-lg flex-col items-center px-4 lg:px-12"},R={class:"text-3xl font-bold dark:text-white"},U={class:"mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-12"},G={class:"mt-24 text-center text-3xl font-bold dark:text-white"},H={class:"mb-36 mt-8 flex items-center justify-center gap-4"},J=u({__name:"index",setup(d){const{t,locale:y}=k(),l=j();return D(()=>{window.location.hash==="#/privacy"&&r("/privacy"),window.location.hash==="#/terms-of-service"&&r("/terms"),window.location.hash==="#/contact"&&r("/contact")}),(m,i)=>{const p=v,x=b,n=B;return h(),f("div",null,[s("div",I,[s("div",z,[s("div",A,[i[1]||(i[1]=s("div",{class:"col-span-12 mt-0 flex items-center justify-center md:col-span-4 md:justify-end lg:mt-2"},[s("img",{id:"logo",src:$,alt:"YiDrop Logo",class:"h-52 object-contain md:h-40 lg:h-40 xl:h-48 2xl:h-56"})],-1)),s("div",F,[s("div",null,[i[0]||(i[0]=s("h1",{class:"text-center text-5xl font-black dark:text-white sm:text-5xl md:text-start xl:text-7xl 2xl:text-8xl"}," YiDrop ",-1)),s("h2",T,a(e(t)("home.slogan1")),1),s("h2",Y,a(e(t)("home.slogan2")),1),s("div",E,[o(x,{to:e(l)({path:"/download"})},{default:c(()=>[o(p,{icon:"material-symbols:arrow-downward",dark:!0},{default:c(()=>[_(a(e(t)("home.download")),1)]),_:1})]),_:1},8,["to"])])])])]),i[2]||(i[2]=S('<div class="col-span-12 grid grid-cols-3 gap-8 px-8 sm:col-span-12 md:col-span-4 lg:col-span-5" data-v-2dda36c1><div class="col-span-3 flex items-center justify-center md:col-span-1" data-v-2dda36c1><img src="'+L+'" alt="iPhone Screenshot" class="h-96 object-contain" data-v-2dda36c1></div><div class="col-span-3 flex items-center justify-center md:col-span-2" data-v-2dda36c1><img src="'+V+'" alt="PC Screenshot" class="h-96 object-contain" data-v-2dda36c1></div></div>',1))])]),s("div",M,[s("h2",R,a(e(t)("home.features.title")),1),s("div",U,[o(n,{title:e(t)("home.features.decentralized"),description:e(t)("home.features.decentralizedDescription"),icon:"material-symbols:share"},null,8,["title","description"]),o(n,{title:e(t)("home.features.crossPlatform"),description:e(t)("home.features.crossPlatformDescription"),icon:"material-symbols:devices"},null,8,["title","description"]),o(n,{title:e(t)("home.features.free"),description:e(t)("home.features.freeDescription"),icon:"material-symbols:volunteer-activism"},null,8,["title","description"]),o(n,{title:e(t)("home.features.openSource"),description:e(t)("home.features.openSourceDescription"),icon:"material-symbols:code"},null,8,["title","description"]),o(n,{title:e(t)("home.features.secure"),description:e(t)("home.features.secureDescription"),icon:"material-symbols:lock"},null,8,["title","description"]),o(n,{title:e(t)("home.features.easy"),description:e(t)("home.features.easyDescription"),icon:"material-symbols:gesture"},null,8,["title","description"])]),s("h2",G,a(e(t)("home.get")),1),s("div",H,[o(x,{to:e(l)({path:"/download"})},{default:c(()=>[o(p,{icon:"material-symbols:download",dark:!0},{default:c(()=>[_(a(e(t)("home.download")),1)]),_:1})]),_:1},8,["to"])])])])}}}),X=P(J,[["__scopeId","data-v-2dda36c1"]]);export{X as default};
