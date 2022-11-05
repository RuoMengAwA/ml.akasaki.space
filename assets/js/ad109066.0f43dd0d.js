"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[6888],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),g=o,f=m["".concat(c,".").concat(g)]||m[g]||s[g]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23065:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return g},metadata:function(){return f},assets:function(){return h},toc:function(){return b},default:function(){return w}});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&p(e,n,t[n]);return e};const m={title:"MSR-net - Low-light Image Enhancement Using Deep Convolutional Network",authors:["pommespeter"],tags:["low-light","multi-scale-learning"]},g=void 0,f={permalink:"/blog/[31]MSR-netLow-light-Image-Enhancement-Using-Deep-Convolutional-Network",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[31]MSR-netLow-light-Image-Enhancement-Using-Deep-Convolutional-Network.md",source:"@site/blog/[31]MSR-netLow-light-Image-Enhancement-Using-Deep-Convolutional-Network.md",title:"MSR-net - Low-light Image Enhancement Using Deep Convolutional Network",description:"\u8bba\u6587\u540d\u79f0Low-light Image Enhancement Using Deep Convolutional Network",date:"2022-11-05T07:47:19.660Z",formattedDate:"2022\u5e7411\u67085\u65e5",tags:[{label:"low-light",permalink:"/blog/tags/low-light"},{label:"multi-scale-learning",permalink:"/blog/tags/multi-scale-learning"}],readingTime:14.405,truncated:!0,authors:[{name:"PommesPeter",title:"I want to be strong. But it seems so hard.",url:"https://blog.pommespeter.com/",email:"me@pommespeter.com",imageURL:"https://github.com/PommesPeter.png",key:"pommespeter"}],prevItem:{title:"Deep Retinex Decomposition for Low-Light Enhancement",permalink:"/blog/[30]RetinexNet-for-Low-Light-Enhancement"},nextItem:{title:"LLCNN - A convolutional neural network for low-light image enhancement",permalink:"/blog/[32]LLCNN-A-Convolutional-Neural-Network-for-Low-light-Image-Enhancement"}},h={authorsImageUrls:[void 0]},b=[{value:"Abstract (\u6458\u8981)",id:"abstract-\u6458\u8981",children:[],level:2}],d={toc:b};function w(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},d),p),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bba\u6587\u540d\u79f0: ",(0,r.kt)("a",s({parentName:"p"},{href:"https://arxiv.org/abs/1711.02488"}),"MSR-net:Low-light Image Enhancement Using Deep Convolutional Network")),(0,r.kt)("p",{parentName:"blockquote"},"\u8bba\u6587\u4f5c\u8005: Liang Shen, Zihan Y ue, Fan Feng, Quan Chen, Shihao Liu, Jie Ma"),(0,r.kt)("p",{parentName:"blockquote"},"Code: None")),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u7bc7\u8bb2\u89e3\u57fa\u4e8eRetinex\u7406\u8bba\u4f7f\u7528\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u8fdb\u884c\u4f4e\u7167\u5ea6\u589e\u5f3a\u7684\u8bba\u6587\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8eMSR\u4f20\u7edf\u7406\u8bba\u6784\u9020\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u6a21\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5b66\u4e60\u6697\u56fe\u50cf\u548c\u4eae\u56fe\u50cf\u4e4b\u95f4\u7684\u7aef\u5230\u7aef\u6620\u5c04")),(0,r.kt)("h2",s({},{id:"abstract-\u6458\u8981"}),"Abstract (\u6458\u8981)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Images captured in low-light conditions usually suffer from very low contrast, which increases the difficulty of sub-sequent computer vision tasks in a great extent. In this paper, a low-light image enhancement model based on convolutional neural network and Retinex theory is proposed. Firstly, we show that multi-scale Retinex is equivalent to a feedforward convolutional neural network with different Gaussian convolution kernels. Motivated by this fact, we consider a Convolutional Neural Network(MSR-net) that directly learns an end-to-end mapping between dark and bright images. Different fundamentally from existing approaches, low-light image enhancement in this paper is regarded as a machine learning problem. In this model, most of the parameters are optimized by back-propagation, while the parameters of traditional models depend on the artificial setting. Experiments on a number of challenging images reveal the advantages of our method in comparison with other state-of-the-art methods from the qualitative and quantitative perspective.")),(0,r.kt)("p",null,"\u672c\u6587\u63d0\u51fa\u4e86\u4e00\u79cd\u57fa\u4e8e\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u548c\u89c6\u7f51\u819c\u7406\u8bba(Retinex Theory)\u7684\u4f4e\u7167\u5ea6\u56fe\u50cf\u589e\u5f3a\u6a21\u578b\u3002\u8bc1\u660e\u4e86\u591a\u5c3a\u5ea6\u89c6\u7f51\u819c\u7b49\u4ef7\u4e8e\u4e00\u4e2a\u5177\u6709\u4e0d\u540c\u9ad8\u65af\u5377\u79ef\u6838\u7684\u524d\u9988\u5377\u79ef\u795e\u7ecf\u7f51\u7edc\u3002\u8003\u8651\u4e00\u79cd\u5377\u79ef\u795e\u7ecf\u7f51\u7edc(MSR\u7f51\u7edc)\uff0c\u5b83",(0,r.kt)("strong",{parentName:"p"},"\u76f4\u63a5\u5b66\u4e60\u6697\u56fe\u50cf\u548c\u4eae\u56fe\u50cf\u4e4b\u95f4\u7684\u7aef\u5230\u7aef\u6620\u5c04"),"\u3002"))}w.isMDXComponent=!0}}]);