"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[6059],{54825:function(e,t,n){n.d(t,{dK:function(){return r},_k:function(){return i},vc:function(){return s},rx:function(){return l},qo:function(){return c},Hk:function(){return u},Iz:function(){return m}});var a=n(31336),o=n.n(a);n(30892)(o()),n(41849).w(o()),n(74182)(o());const r=["en","zh"],i=!1,s=null,l="e68daa43",c=8,u=50,m={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found:"{{ count }} document found",count_documents_found_plural:"{{ count }} documents found",no_documents_were_found:"No documents were found"}},74339:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(67294),o=n(11861),r=n(86010);function i(e){return`https://github.yuuza.net/${e}.png`}var s=[{pic:i("visualDust"),name:"Gavin Gong",intro:"Rubbish CVer | Poor LaTex speaker | Half stack developer | \u952e\u5708\u8eba\u5c38\u7816\u5bb6",url:"https://focus.akasaki.space/",note:"Project Launcher & Maintainer, focusing on applied deep learning techniques. Also know him as VisualDust or MiyaAkasaki."},{pic:i("lideming"),name:"lideming",intro:"Building random things with Deno, Node and .NET Core.",url:"https://yuuza.net/",note:"Help with frontends since the project maintainer is new to frontends."},{pic:i("papercube"),name:"PaperCube",intro:"\u4e00\u4e2a\u6b63\u5728\u5b66\u4e60\u539f\u7406\u5185\u5bb9\u7684\u8f6f\u4ef6\u5f00\u53d1\u8005\uff0c\u7761\u5927\u89c9\u80fd\u624b\u548c\u524d\u2022\u7b97\u6cd5\u7ade\u8d5b\u751f",url:"https://github.com/papercube",note:"Sometimes helps with multi language translations."},{pic:i("Therainisme"),name:"Therainisme",intro:"\u5bc4\u5fc6\u72b9\u65b0",url:"https://notebook.therainisme.com/",note:"Used to help us with frontend issues."},{pic:i("AndSonder"),name:"Sonder",intro:"life is but a span, I use python",url:"https://blog.keter.top/",note:"Focusing on neural network adversial attacks and related things."},{pic:i("Zerorains"),name:"Zerorains",intro:"life is but a span, I use python",url:"blog.zerorains.top",note:"Focusing on semantic segmentation and image matting."},{pic:i("PommesPeter"),name:"PommesPeter",intro:"I want to be strong. But it seems so hard.",url:"https://blog.pommespeter.com/",note:"Focusing on low-light image enhancement and image processing."},{pic:"https://xiaomai-aliyunoss.oss-cn-shenzhen.aliyuncs.com/img/20220116171846.jpg",name:"RuoMengAwA",intro:"\u4e00\u4e2a\u559c\u6b22\u6478\u9c7c\u7684\u83dc\u72d7\uff0c\u76ee\u524d\u4e3b\u8981\u505a\u4f4e\u7167\u5ea6\u589e\u5f3a\u65b9\u5411\u7684\u7814\u7a76",url:"https://github.com/RuoMengAwA",note:"Focusing on low-light image enhancement and image processing. Also call him xiaomai."},{pic:i("AsTheStarsFalll"),name:"AsTheStarsFall",intro:"None",url:"https://github.com/AsTheStarsFalll",note:"Focusing on semantic segmentation & attention mechanism. Some kind of nihilist."},{pic:i("breezeshane"),name:"Breeze Shane",intro:"\u4e00\u4e2a\u4e13\u6ce8\u7406\u8bba\u4f46\u5b66\u4e0d\u61c2\u5b66\u4e0d\u4f1a\u7684\u9508\u94a2\u5e9f\u7269\uff0c\u4f46\u662f\u4ed6\u5f88\u64c5\u957f\u4ea7\u51faBug\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u4ed6\u4f53\u8868\u6709\u6e90\u77f3\u7ed3\u6676\u5206\u5e03\uff0c\u4f46\u4e5f\u53ef\u80fd\u4ec5\u4ec5\u662f\u56e0\u4e3a\u4ed6\u662fBug\u672c\u4f53\u3002",url:"https://breezeshane.github.io/",note:"GANer, sometimes paranoid, we call him Old Shan."},{pic:i("AndPuQing"),name:"PuQing",intro:"intro * new",url:"https://github.com/AndPuQing",note:"Focusing on semantic segmentation, and a little frequency domain image processing."}];function l(){const[e,t]=(0,a.useState)(s);(0,a.useEffect)((()=>{t(function(e){if(!Array.isArray(e))throw new TypeError("Expected an array, got "+typeof e);for(let t=(e=[...e]).length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}(e))}),[]);const[n,o]=(0,a.useState)(0),[i,l]=(0,a.useState)(0);return(0,a.useEffect)((()=>{const e=setTimeout((()=>{l(n)}),300);return()=>{clearTimeout(e),l(n)}}),[n]),a.createElement("div",{className:"friends"},a.createElement("div",{style:{position:"relative"}},a.createElement("div",{className:"friend-columns"},a.createElement("div",{className:"friend-card-outer"},[i!=n&&a.createElement(c,{key:i,data:e[i],fadeout:!0}),a.createElement(c,{key:n,data:e[n]})]),a.createElement("div",{className:"friend-list"},e.map(((e,t)=>a.createElement("div",{key:e.name,className:(0,r.Z)("friend-item",{current:t==n}),onClick:()=>o(t)},a.createElement("img",{src:e.pic,alt:"user profile photo"}))))))))}function c(e){const{data:t,fadeout:n=!1}=e;return a.createElement("div",{className:(0,r.Z)("friend-card",{fadeout:n})},a.createElement("div",{className:"card"},a.createElement("div",{className:"card__image"},a.createElement("img",{src:t.pic,alt:"User profile photo",title:"User profile photo"})),a.createElement("div",{className:"card__body"},a.createElement("h2",null,t.name),a.createElement("p",null,a.createElement("big",null,t.intro)),a.createElement("p",null,a.createElement("small",null,"Comment : ",t.note))),a.createElement("div",{className:"card__footer"},a.createElement("a",{href:t.url,className:"button button--primary button--block"},"Visit"))))}var u=function(){return a.createElement(o.Z,null,a.createElement(l,null),a.createElement("p",{style:{paddingLeft:"20px"}},"The list is random. try to refresh the page."))}}}]);