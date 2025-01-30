import{_ as w}from"./CFW2vugF.js";import{_ as v}from"./DoTx3ktL.js";import{e as g,o as x,c as u,b as o,a as s,t as a,n as k,p as y,u as j,g as S,l as D,q as m,s as C,i as e,w as n,d as p,v as N,x as $,j as q,_ as P}from"./BWsjWLnV.js";import{_ as T}from"./DlHnjrmd.js";const V={class:"flex flex-col items-center rounded-xl bg-gray-100 pb-4 pl-4 pr-4 pt-8 dark:bg-gray-800 dark:text-gray-300"},z={class:"mt-4 text-center text-xl font-bold dark:text-white"},B={class:"mt-2 text-center dark:text-gray-400"},I=g({__name:"FeatureCard",props:{title:{type:String,required:!0},description:{type:String,required:!0},icon:{type:String,required:!0}},setup(_){const t=_;return(c,l)=>{const d=k;return x(),u("div",V,[o(d,{name:t.icon,class:"text-6xl dark:text-gray-300"},null,8,["name"]),s("h3",z,a(t.title),1),s("p",B,a(t.description),1)])}}}),L=y("/img/screenshot-iphone.webp"),A=y("/img/screenshot-pc.webp"),E={class:"flex min-h-screen items-center justify-center pt-12 md:pt-0"},F={style:{"max-width":"1800px"},class:"grid grid-cols-12"},J={class:"col-span-12 grid grid-cols-12 pb-12 sm:col-span-12 md:col-span-8 md:pb-0 lg:col-span-7"},U={class:"col-span-12 flex items-center justify-center md:col-span-8 md:justify-start lg:pl-2"},W={class:"slogan mt-2 px-4 text-center text-xl font-light dark:text-gray-300 md:px-0 md:text-start md:text-xl xl:text-2xl 2xl:text-3xl"},Y={class:"slogan px-4 text-center text-xl font-light dark:text-gray-300 md:px-0 md:text-start md:text-xl xl:text-2xl 2xl:text-3xl"},M={class:"buttons mt-4 flex flex-wrap justify-center gap-4 px-4 md:justify-start md:px-0 xl:mt-6"},X={class:"m-auto mt-4 flex max-w-screen-lg flex-col items-center px-4 lg:px-12"},G={class:"text-3xl font-bold dark:text-white"},H={class:"mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-12"},K={key:0,class:"mt-8"},Q=["src"],R={class:"mt-24 text-center text-3xl font-bold dark:text-white"},O={class:"mb-36 mt-8 flex items-center justify-center gap-4"},Z=g({__name:"index",setup(_){const{t,locale:c}=j(),l=S();D(()=>{window.location.hash==="#/privacy"&&m("/privacy"),window.location.hash==="#/terms-of-service"&&m("/terms"),window.location.hash==="#/contact"&&m("/contact")});const d=C(()=>{switch(c.value){case"de":return"https://www.youtube-nocookie.com/embed/qfXkF-W09zk?si=UEUSbWlhsGaJ87yQ";default:return"https://www.youtube-nocookie.com/embed/2ITezMkbAqE?si=Kn9k4ju5HTX5S6JJ"}});return(tt,i)=>{const h=w,f=v,r=I,b=q;return x(),u("div",null,[s("div",E,[s("div",F,[s("div",J,[i[1]||(i[1]=s("div",{class:"col-span-12 mt-0 flex items-center justify-center md:col-span-4 md:justify-end lg:mt-2"},[s("img",{id:"logo",src:T,alt:"YiDrop Logo",class:"h-52 object-contain md:h-40 lg:h-40 xl:h-48 2xl:h-56"})],-1)),s("div",U,[s("div",null,[i[0]||(i[0]=s("h1",{class:"text-center text-5xl font-black dark:text-white sm:text-5xl md:text-start xl:text-7xl 2xl:text-8xl"}," YiDrop ",-1)),s("h2",W,a(e(t)("home.slogan1")),1),s("h2",Y,a(e(t)("home.slogan2")),1),s("div",M,[o(f,{to:e(l)({path:"/download"})},{default:n(()=>[o(h,{icon:"material-symbols:arrow-downward",dark:!0},{default:n(()=>[p(a(e(t)("home.download")),1)]),_:1})]),_:1},8,["to"])])])])]),i[2]||(i[2]=N('<div class="col-span-12 grid grid-cols-3 gap-8 px-8 sm:col-span-12 md:col-span-4 lg:col-span-5" data-v-1a330386><div class="col-span-3 flex items-center justify-center md:col-span-1" data-v-1a330386><img src="'+L+'" alt="iPhone Screenshot" class="h-96 object-contain" data-v-1a330386></div><div class="col-span-3 flex items-center justify-center md:col-span-2" data-v-1a330386><img src="'+A+'" alt="PC Screenshot" class="h-96 object-contain" data-v-1a330386></div></div>',1))])]),s("div",X,[s("h2",G,a(e(t)("home.features.title")),1),s("div",H,[o(r,{title:e(t)("home.features.decentralized"),description:e(t)("home.features.decentralizedDescription"),icon:"material-symbols:share"},null,8,["title","description"]),o(r,{title:e(t)("home.features.crossPlatform"),description:e(t)("home.features.crossPlatformDescription"),icon:"material-symbols:devices"},null,8,["title","description"]),o(r,{title:e(t)("home.features.free"),description:e(t)("home.features.freeDescription"),icon:"material-symbols:volunteer-activism"},null,8,["title","description"]),o(r,{title:e(t)("home.features.openSource"),description:e(t)("home.features.openSourceDescription"),icon:"material-symbols:code"},null,8,["title","description"]),o(r,{title:e(t)("home.features.secure"),description:e(t)("home.features.secureDescription"),icon:"material-symbols:lock"},null,8,["title","description"]),o(r,{title:e(t)("home.features.easy"),description:e(t)("home.features.easyDescription"),icon:"material-symbols:gesture"},null,8,["title","description"])]),e(c)!=="zh-CN"?(x(),u("div",K,[s("iframe",{width:"560",height:"315",src:e(d),class:"max-sm:w-screen",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,Q)])):$("",!0),s("h2",R,a(e(t)("home.get")),1),s("div",O,[o(f,{to:e(l)({path:"/download"})},{default:n(()=>[o(h,{icon:"material-symbols:download",dark:!0},{default:n(()=>[p(a(e(t)("home.download")),1)]),_:1})]),_:1},8,["to"])]),o(b,{href:"https://github.com/lingyicute/yidropwebsite",target:"_blank",icon:"material-symbols:build",class:"mb-8 dark:text-gray-300"},{default:n(()=>[p(a(e(t)("improveWebsite")),1)]),_:1})])])}}}),it=P(Z,[["__scopeId","data-v-1a330386"]]);export{it as default};
