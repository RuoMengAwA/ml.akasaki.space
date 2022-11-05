"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[9287],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,h=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24068:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return h},assets:function(){return d},toc:function(){return g},default:function(){return y}});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e};const f={title:"How much Position Information Do Convolutional Neural Networks Encode?",authors:["visualdust"],tags:["inductive-bias","positional-encoding"]},m=void 0,h={permalink:"/blog/[51]How-much-Position-Information-Do-Convolutional-Neural-Networks-Encode",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[51]How-much-Position-Information-Do-Convolutional-Neural-Networks-Encode.md",source:"@site/blog/[51]How-much-Position-Information-Do-Convolutional-Neural-Networks-Encode.md",title:"How much Position Information Do Convolutional Neural Networks Encode?",description:"Md Amirul Islam, Sen Jia, Neil D. B. Bruce",date:"2022-11-05T07:47:19.664Z",formattedDate:"2022\u5e7411\u67085\u65e5",tags:[{label:"inductive-bias",permalink:"/blog/tags/inductive-bias"},{label:"positional-encoding",permalink:"/blog/tags/positional-encoding"}],readingTime:18.02,truncated:!0,authors:[{name:"Gavin Gong",title:"Rubbish CVer | Poor LaTex speaker | Half stack developer | \u952e\u5708\u8eba\u5c38\u7816\u5bb6",url:"https://gong.host",email:"gavin@gong.host",imageURL:"https://github.yuuza.net/visualDust.png",key:"visualdust"}],prevItem:{title:"Kindling the Darkness - A Practical Low-light Image Enhancer",permalink:"/blog/[50]Kindling-the-Darkness-A-Practical-Low-light-Image-Enhancer"},nextItem:{title:"Axiomatic Attribution for Deep Networks",permalink:"/blog/[52]Axiomatic-Attribution-for-Deep-Networks"}},d={authorsImageUrls:[void 0]},g=[{value:"\u5f15\u8a00",id:"\u5f15\u8a00",children:[],level:2}],b={toc:g};function y(e){var t,o=e,{components:u}=o,f=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n})(o,["components"]);return(0,r.kt)("wrapper",(t=p(p({},b),f),i(t,a({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Islam%2C+M+A"}),"Md Amirul Islam"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Jia%2C+S"}),"Sen Jia"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Bruce%2C+N+D+B"}),"Neil D. B. Bruce")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In contrast to fully connected networks, Convolutional Neural Networks (CNNs) achieve efficiency by learning weights associated with local filters with a finite spatial extent. An implication of this is that a filter may know what it is looking at, but not where it is positioned in the image. Information concerning absolute position is inherently useful, and it is reasonable to assume that deep CNNs may implicitly learn to encode this information if there is a means to do so. In this paper, we test this hypothesis revealing the surprising degree of absolute position information that is encoded in commonly used neural networks. A comprehensive set of experiments show the validity of this hypothesis and shed light on how and where this information is represented while offering clues to where positional information is derived from in deep CNNs.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Comments"),": Accepted to ICLR 2020"),(0,r.kt)("h2",p({},{id:"\u5f15\u8a00"}),"\u5f15\u8a00"),(0,r.kt)("p",null,"\u7ecf\u5178CNN\u6a21\u578b\u88ab\u8ba4\u4e3a\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"spatially-agnostic"),"\u7684\uff0c\u56e0\u6b64\u80f6\u56ca\u7f51\u7edc\u6216\u5faa\u73af\u7f51\u7edc\u5df2\u88ab\u7528\u4e8e\u5efa\u6a21\u5b66\u4e60\u7279\u5f81\u5c42\u5185\u7684\u76f8\u5bf9\u7a7a\u95f4\u5173\u7cfb\u3002\u76ee\u524d\u5c1a\u4e0d\u6e05\u695aCNN\u662f\u5426\u6355\u83b7\u4e86\u5728\u4f4d\u7f6e\u76f8\u5173\u4efb\u52a1\u4e2d\u91cd\u8981\u7684\u7edd\u5bf9\u7a7a\u95f4\u4fe1\u606f\uff08\u4f8b\u5982\u8bed\u4e49\u5206\u5272\u548c\u663e\u8457\u5bf9\u8c61\u68c0\u6d4b\uff09\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff0c\u88ab\u786e\u5b9a\u4e3a\u6700\u663e\u8457\u7684\u533a\u57df\u503e\u5411\u4e8e\u9760\u8fd1\u56fe\u50cf\u4e2d\u5fc3\u3002\u5728\u88c1\u526a\u8fc7\u56fe\u50cf\u4e0a\u505a\u663e\u8457\u6027\u68c0\u6d4b\u65f6\uff0c\u5373\u4f7f\u89c6\u89c9\u7279\u5f81\u6ca1\u6709\u6539\u53d8\uff0c\u6700\u663e\u8457\u7684\u533a\u57df\u4e5f\u4f1a\u79fb\u52a8\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(16682).Z})),(0,r.kt)("p",null,"\u5728\u8fd9\u7bc7\u6587\u4e2d\uff0c\u7814\u7a76\u4e86\u7edd\u5bf9\u4f4d\u7f6e\u7684\u4f5c\u7528\u901a\u8fc7\u6267\u884c\u4e00\u7cfb\u5217\u968f\u673a\u5316\u6d4b\u8bd5\uff0c\u5047\u8bbeCNN\u786e\u5b9e\u53ef\u4ee5\u5b66\u4e60\u5230\u7f16\u7801\u4f4d\u7f6e\u4fe1\u606f\u4f5c\u4e3a\u51b3\u7b56\u7ebf\u7d22\uff0c\u4ece\u800c\u83b7\u5f97\u4f4d\u7f6e\u4fe1\u606f\u3002\u5b9e\u9a8c\u8868\u660e\uff0c\u4f4d\u7f6e\u4fe1\u606f\u662f\u901a\u8fc7\u5e38\u7528\u7684\u586b\u5145\u64cd\u4f5c\uff08\u96f6\u586b\u5145\uff09\u9690\u5f0f\u5b66\u4e60\u7684\u3002"))}y.isMDXComponent=!0},16682:function(e,t,n){t.Z=n.p+"assets/images/Pasted-image-20220215235439-d96b6c2ea06c4126153755588955d210.png"}}]);