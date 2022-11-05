"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[5033],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),c=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),m=r,g=f["".concat(u,".").concat(m)]||f[m]||s[m]||i;return t?o.createElement(g,a(a({ref:n},p),{},{components:t})):o.createElement(g,a({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},10956:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return g},assets:function(){return v},toc:function(){return h},default:function(){return d}});var o=t(3905),r=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&p(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&p(e,t,n[t]);return e};const f={title:"Involution - Inverting the Inherence of Convolution for Visual Recognition",authors:["asthestarsfall"],tags:["attention-mechanism","non-convolution"]},m=void 0,g={permalink:"/blog/[18]Involution-Inverting-the-Inherence-of-Convolution-for-Visual-Recognition",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[18]Involution-Inverting-the-Inherence-of-Convolution-for-Visual-Recognition.md",source:"@site/blog/[18]Involution-Inverting-the-Inherence-of-Convolution-for-Visual-Recognition.md",title:"Involution - Inverting the Inherence of Convolution for Visual Recognition",description:"\u8bba\u6587\u540d\u79f0\uff1aInvolution: Inverting the Inherence of Convolution for Visual Recognition",date:"2022-11-05T07:47:19.660Z",formattedDate:"2022\u5e7411\u67085\u65e5",tags:[{label:"attention-mechanism",permalink:"/blog/tags/attention-mechanism"},{label:"non-convolution",permalink:"/blog/tags/non-convolution"}],readingTime:5.875,truncated:!0,authors:[{name:"AsTheStarsFall",title:"None",url:"https://github.com/AsTheStarsFalll",imageURL:"https://github.yuuza.net/AsTheStarsFalll.png",key:"asthestarsfall"}],prevItem:{title:"Boundary IoU - Improving Object-Centric Image Segmentation Evaluation",permalink:"/blog/[17]Boundary-IoU-Improving-Object-Centri-Image-Segmentation-Evaluation"},nextItem:{title:"PointRend - Image Segmentation as Rendering",permalink:"/blog/[19]PointRend-Image-Segmentation-as-Rendering"}},v={authorsImageUrls:[void 0]},h=[],b={toc:h};function d(e){var n,t=e,{components:r}=t,p=((e,n)=>{var t={};for(var o in e)u.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&l)for(var o of l(e))n.indexOf(o)<0&&c.call(e,o)&&(t[o]=e[o]);return t})(t,["components"]);return(0,o.kt)("wrapper",(n=s(s({},b),p),i(n,a({components:r,mdxType:"MDXLayout"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bba\u6587\u540d\u79f0\uff1a",(0,o.kt)("a",s({parentName:"p"},{href:"https://arxiv.org/abs/2103.06255"}),(0,o.kt)("em",{parentName:"a"},"Involution: Inverting the Inherence of Convolution for Visual Recognition"))),(0,o.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005\uff1aDuo Li\uff0c Jie Hu\uff0c Changhu Wang\uff0c Xiangtai Li\uff0c Qi She\uff0c Lei Zhu\uff0c Tong Zhang\uff0c Qifeng Chen\uff0c The Hong Kong University of Science and Technology\uff0c ByteDance AI Lab\uff0c Peking University\uff0c Beijing University of Posts and Telecommunications")),(0,o.kt)("h1",s({},{id:"convolution"}),"Convolution"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",s({parentName:"li"},{href:"https://arxiv.org/abs/1805.12177"}),"\u7a7a\u95f4\u65e0\u5173\u6027(spatial agnostic)"),"\uff1asame kernel for different position",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u53c2\u6570\u5171\u4eab\uff0c\u5e73\u79fb\u7b49\u53d8"),(0,o.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u4e0d\u80fd\u7075\u6d3b\u6539\u53d8\u53c2\u6570\uff0c\u5377\u79ef\u6838\u5c3a\u5bf8\u4e0d\u80fd\u8fc7\u5927\uff0c\u53ea\u80fd\u901a\u8fc7\u5806\u53e0\u6765\u6269\u5927\u611f\u53d7\u91ce\u3001\u6355\u6349\u957f\u8ddd\u79bb\u5173\u7cfb"))),(0,o.kt)("li",{parentName:"ol"},"\u901a\u9053\u7279\u5f02\u6027(channel specific)\uff1adifferent kernels for different channels",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u5145\u5206\u63d0\u53d6\u4e0d\u540c\u901a\u9053\u4e0a\u7684\u4fe1\u606f"),(0,o.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u6709\u5197\u4f59")))),(0,o.kt)("p",null,"Convolution kernel \u5c3a\u5bf8\u4e3a B,C_out,C_in,K,K"),(0,o.kt)("h1",s({},{id:"involution"}),"Involution"),(0,o.kt)("p",null,"\u4e0econvolution\u4e0d\u540c\uff0cinvolution\u62e5\u6709",(0,o.kt)("strong",{parentName:"p"},"\u5b8c\u5168\u76f8\u53cd"),"\u7684\u6027\u8d28\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7a7a\u95f4\u7279\u5f02\u6027\uff1akernel privatized for different position"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u9053\u4e0d\u53d8\u6027\uff1akernel shared across different channels")),(0,o.kt)("p",null,"involution kernel \u7684\u5c3a\u5bf8\u4e3aB,G,KK,H,W."))}d.isMDXComponent=!0}}]);