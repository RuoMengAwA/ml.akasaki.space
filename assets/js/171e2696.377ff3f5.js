"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[4221],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(n),g=o,f=s["".concat(u,".").concat(g)]||s[g]||p[g]||a;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},44943:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return g},metadata:function(){return f},assets:function(){return h},toc:function(){return b},default:function(){return k}});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&m(e,n,t[n]);return e};const s={title:"LLCNN - A convolutional neural network for low-light image enhancement",authors:["pommespeter"],tags:["low-light","multi-scale-learning"]},g=void 0,f={permalink:"/blog/[32]LLCNN-A-Convolutional-Neural-Network-for-Low-light-Image-Enhancement",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[32]LLCNN-A-Convolutional-Neural-Network-for-Low-light-Image-Enhancement.md",source:"@site/blog/[32]LLCNN-A-Convolutional-Neural-Network-for-Low-light-Image-Enhancement.md",title:"LLCNN - A convolutional neural network for low-light image enhancement",description:"\u8bba\u6587\u540d\u79f0 A convolutional neural network for low-light image enhancement",date:"2022-11-05T07:47:19.660Z",formattedDate:"2022\u5e7411\u67085\u65e5",tags:[{label:"low-light",permalink:"/blog/tags/low-light"},{label:"multi-scale-learning",permalink:"/blog/tags/multi-scale-learning"}],readingTime:10.735,truncated:!0,authors:[{name:"PommesPeter",title:"I want to be strong. But it seems so hard.",url:"https://blog.pommespeter.com/",email:"me@pommespeter.com",imageURL:"https://github.com/PommesPeter.png",key:"pommespeter"}],prevItem:{title:"MSR-net - Low-light Image Enhancement Using Deep Convolutional Network",permalink:"/blog/[31]MSR-netLow-light-Image-Enhancement-Using-Deep-Convolutional-Network"},nextItem:{title:"VOLO - Vision Outlooker for Visual Recognition",permalink:"/blog/[33]VOLO-Vision-Outlooker-for-Visual-Recognition"}},h={authorsImageUrls:[void 0]},b=[{value:"\u8fd9\u7bc7\u7b14\u8bb0\u7684\u5199\u4f5c\u8005\u662fPommesPeter\u3002",id:"\u8fd9\u7bc7\u7b14\u8bb0\u7684\u5199\u4f5c\u8005\u662fpommespeter",children:[],level:3},{value:"Abstract (\u6458\u8981)",id:"abstract-\u6458\u8981",children:[],level:2}],d={toc:b};function k(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},d),m),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bba\u6587\u540d\u79f0: ",(0,r.kt)("a",p({parentName:"p"},{href:"https://ieeexplore.ieee.org/abstract/document/8305143/"}),"LLCNN: A convolutional neural network for low-light image enhancement")),(0,r.kt)("p",{parentName:"blockquote"},"\u8bba\u6587\u4f5c\u8005: Li Tao, Chuang Zhu, Guoqing Xiang, Yuan Li, Huizhu Jia, Xiaodong Xie"),(0,r.kt)("p",{parentName:"blockquote"},"Code: ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/BestJuly/LLCNN"}),"https://github.com/BestJuly/LLCNN"))),(0,r.kt)("h3",p({},{id:"\u8fd9\u7bc7\u7b14\u8bb0\u7684\u5199\u4f5c\u8005\u662fpommespeter"}),"\u8fd9\u7bc7\u7b14\u8bb0\u7684\u5199\u4f5c\u8005\u662f",(0,r.kt)("a",p({parentName:"h3"},{href:"https://github.com/PommesPeter"}),"PommesPeter"),"\u3002"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u7bc7\u8bb2\u89e3\u4f7f\u7528\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u8fdb\u884c\u4f4e\u7167\u5ea6\u589e\u5f3a\u7684\u8bba\u6587\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u672c\u6587\u4f7f\u7528\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u8fdb\u884c\u4f4e\u7167\u5ea6\u589e\u5f3a"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528SSIM\u635f\u5931\u66f4\u597d\u5730\u8bc4\u4ef7\u56fe\u50cf\u597d\u574f\u548c\u68af\u5ea6\u6536\u655b")),(0,r.kt)("h2",p({},{id:"abstract-\u6458\u8981"}),"Abstract (\u6458\u8981)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In this paper, we propose a CNN based method to perform low-light image enhancement. We design a special  module to utilize multiscale feature maps, which can avoid  gradient vanishing problem as well. In order to preserve image textures as much as possible, we use SSIM loss to train our model. The contrast of low-light images can be adaptively enhanced using our method. Results demonstrate that our CNN based method  outperforms other contrast enhancement methods. ")),(0,r.kt)("p",null,"\u672c\u6587\u63d0\u51fa\u4e86\u4e00\u79cd\u57fa\u4e8eCNN\u7684\u4f4e\u7167\u5ea6\u56fe\u50cf\u589e\u5f3a\u65b9\u6cd5\u3002\u6211\u4eec\u8bbe\u8ba1\u4e86\u4e00\u4e2a\u7279\u6b8a\u7684\u6a21\u5757\u6765",(0,r.kt)("strong",{parentName:"p"},"\u5229\u7528\u591a\u5c3a\u5ea6\u7279\u5f81\u6620\u5c04"),"\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u68af\u5ea6\u6d88\u5931\u7684\u95ee\u9898\u3002",(0,r.kt)("strong",{parentName:"p"},"\u4e3a\u4e86\u5c3d\u53ef\u80fd\u5730\u4fdd\u7559\u56fe\u50cf\u7eb9\u7406\uff0c\u6211\u4eec\u4f7f\u7528SSIM\u635f\u5931\u6765\u8bad\u7ec3\u6211\u4eec\u7684\u6a21\u578b"),"\u3002\u4f7f\u7528\u6211\u4eec\u7684\u65b9\u6cd5\u53ef\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u9002\u5e94\u5730\u589e\u5f3a\u5f31\u5149\u56fe\u50cf\u7684\u5bf9\u6bd4\u5ea6"),"\u3002"))}k.isMDXComponent=!0}}]);