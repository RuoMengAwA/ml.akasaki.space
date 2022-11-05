"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[6740],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=c(n),f=o,m=b["".concat(p,".").concat(f)]||b[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},66884:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return b},contentTitle:function(){return f},metadata:function(){return m},assets:function(){return g},toc:function(){return v},default:function(){return y}});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const b={title:"DeepLab Series",authors:["visualdust"],tags:["segmentation","decoder","atrous-convolution","backbone"]},f=void 0,m={permalink:"/blog/[06]DeepLab-Series",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[06]DeepLab-Series.md",source:"@site/blog/[06]DeepLab-Series.md",title:"DeepLab Series",description:"DeepLab\u7cfb\u5217\u4e2d\u5305\u542b\u4e86\u4e09\u7bc7\u8bba\u6587\uff1aDeepLab-v1\u3001DeepLab-v2\u3001DeepLab-v3\u3002",date:"2022-11-05T07:47:19.660Z",formattedDate:"2022\u5e7411\u67085\u65e5",tags:[{label:"segmentation",permalink:"/blog/tags/segmentation"},{label:"decoder",permalink:"/blog/tags/decoder"},{label:"atrous-convolution",permalink:"/blog/tags/atrous-convolution"},{label:"backbone",permalink:"/blog/tags/backbone"}],readingTime:9.385,truncated:!0,authors:[{name:"Gavin Gong",title:"Rubbish CVer | Poor LaTex speaker | Half stack developer | \u952e\u5708\u8eba\u5c38\u7816\u5bb6",url:"https://gong.host",email:"gavin@gong.host",imageURL:"https://github.yuuza.net/visualDust.png",key:"visualdust"}],prevItem:{title:"HLA-Face Joint High-Low Adaptation for Low Light Face Detection",permalink:"/blog/[05]HLA-Face-Joint-High-Low-Adaptation-for-Low-Light-Face-Detection"},nextItem:{title:"Cross-Dataset Collaborative Learning for Semantic Segmentation",permalink:"/blog/[07]Cross-Dataset-Collaborative-Learning-for-Semantic-Segmentation"}},g={authorsImageUrls:[void 0]},v=[],d={toc:v};function y(e){var t,n=e,{components:o}=n,u=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},d),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"DeepLab\u7cfb\u5217\u4e2d\u5305\u542b\u4e86\u4e09\u7bc7\u8bba\u6587\uff1aDeepLab-v1\u3001DeepLab-v2\u3001DeepLab-v3\u3002"),(0,r.kt)("p",null,"DeepLab-v1\uff1a",(0,r.kt)("a",s({parentName:"p"},{href:"https://arxiv.org/abs/1412.7062"}),"Semantic Image Segmentation with Deep Convolutional Nets and Fully Connected CRFs")),(0,r.kt)("p",null,"DeepLab-v2\uff1a",(0,r.kt)("a",s({parentName:"p"},{href:"https://arxiv.org/abs/1606.00915"}),"Image Segmentation with Deep Convolutional Nets, Atrous Convolution, and Fully Connected CRFs")),(0,r.kt)("p",null,"DeepLab-v3\uff1a",(0,r.kt)("a",s({parentName:"p"},{href:"https://arxiv.org/pdf/1706.05587.pdf"}),"Rethinking Atrous Convolution for Semantic Image Segmentation")),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\u6211\u4eec\u5c06\u8fd9\u4e09\u7bc7\u653e\u5728\u4e00\u8d77\u9605\u8bfb\u3002"),(0,r.kt)("p",null,"\u540e\u6765\u751a\u81f3\u8fd8\u51fa\u73b0\u4e86\u540e\u7eed\uff1a"),(0,r.kt)("p",null,"DeepLab-v3+\uff1a",(0,r.kt)("a",s({parentName:"p"},{href:"https://arxiv.org/abs/1802.02611"}),"Encoder-Decoder with Atrous Separable Convolution for Semantic Image Segmentation")),(0,r.kt)("p",null,"\u4e0d\u8fc7\u6682\u65f6\u6ca1\u6709\u5199\u8fdb\u6765\u7684\u6253\u7b97\u3002"))}y.isMDXComponent=!0}}]);