"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[4305],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||a;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82676:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return b},assets:function(){return g},toc:function(){return d},default:function(){return y}});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e};const f={title:"Gated Channel Transformation for Visual Recognition",authors:["asthestarsfall"],tags:["attention-mechanism"]},m=void 0,b={permalink:"/blog/[15]Gated-Channel-Transformation-for-Visual-Recognition",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[15]Gated-Channel-Transformation-for-Visual-Recognition.md",source:"@site/blog/[15]Gated-Channel-Transformation-for-Visual-Recognition.md",title:"Gated Channel Transformation for Visual Recognition",description:"\u8bba\u6587\u540d\u79f0\uff1aGated Channel Transformation for Visual Recognition",date:"2022-11-05T07:47:19.660Z",formattedDate:"2022\u5e7411\u67085\u65e5",tags:[{label:"attention-mechanism",permalink:"/blog/tags/attention-mechanism"}],readingTime:9.48,truncated:!0,authors:[{name:"AsTheStarsFall",title:"None",url:"https://github.com/AsTheStarsFalll",imageURL:"https://github.yuuza.net/AsTheStarsFalll.png",key:"asthestarsfall"}],prevItem:{title:"MobileNets - Efficient Convolutional Neural Networks for Mobile Vision Applications",permalink:"/blog/[14]MobileNets-Efficient-Convolutional-Neural-Networks-for-Mobile-Vision-Applications"},nextItem:{title:"Convolutional Block Attention Module",permalink:"/blog/[16]Convolutional-Block-Attention-Module"}},g={authorsImageUrls:[void 0]},d=[{value:"\u6458\u8981",id:"\u6458\u8981",children:[],level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[],level:2}],h={toc:d};function y(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},h),p),a(t,l({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bba\u6587\u540d\u79f0\uff1a",(0,r.kt)("a",s({parentName:"p"},{href:"https://arxiv.org/abs/1909.11519"}),"Gated Channel Transformation for Visual Recognition")),(0,r.kt)("p",{parentName:"blockquote"},"\u4f5c\u8005\uff1aZongxin Yang, Linchao Zhu, Y u Wu, and Yi Yang"),(0,r.kt)("p",{parentName:"blockquote"},"Code\uff1a",(0,r.kt)("a",s({parentName:"p"},{href:"https://github.com/z-x-yang/GCT"}),"https://github.com/z-x-yang/GCT"))),(0,r.kt)("h2",s({},{id:"\u6458\u8981"}),"\u6458\u8981"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GCT\u6a21\u5757\u662f\u4e00\u4e2a\u666e\u904d\u9002\u7528\u7684\u95e8\u63a7\u8f6c\u6362\u5355\u5143\uff0c\u53ef\u4e0e\u7f51\u7edc\u6743\u91cd\u4e00\u8d77\u4f18\u5316\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u4e8eSEnet\u901a\u8fc7\u5168\u8fde\u63a5\u7684\u9690\u5f0f\u5b66\u4e60\uff0c\u5176\u4f7f\u7528\u53ef\u89e3\u91ca\u7684\u53d8\u91cf\u663e\u5f0f\u5730\u5efa\u6a21\u901a\u9053\u95f4\u7684\u5173\u7cfb\uff0c\u51b3\u5b9a\u662f\u7ade\u4e89\u6216\u662f\u5408\u4f5c\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5173\u952e\u8bcd\uff1a\u53ef\u89e3\u91ca\u6027\u3001\u663e\u5f0f\u5173\u7cfb\u3001\u95e8\u63a7")),(0,r.kt)("h2",s({},{id:"\u4ecb\u7ecd"}),"\u4ecb\u7ecd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u5377\u79ef\u5c42\u53ea\u5bf9Feature Map\u4e2d\u6bcf\u4e2a\u7a7a\u95f4\u4f4d\u7f6e\u7684\u4e34\u8fd1\u5c40\u90e8\u4e0a\u4e0b\u6587\u8fdb\u884c\u64cd\u4f5c\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5c40\u90e8\u6b67\u4e49\u3002\u901a\u5e38\u6709\u4e24\u79cd\u65b9\u6cd5\u89e3\u51b3\u8fd9\u79cd\u95ee\u9898\uff1a\u4e00\u662f\u589e\u52a0\u7f51\u7edc\u7684\u6df1\u5ea6\uff0c\u5982VGG\uff0cResnet\uff0c\u4e8c\u662f\u589e\u52a0\u7f51\u7edc\u7684\u5bbd\u5ea6\u6765\u83b7\u5f97\u66f4\u591a\u7684\u5168\u5c40\u4fe1\u606f\uff0c\u5982GEnet\u5927\u91cf\u4f7f\u7528\u9886\u57df\u5d4c\u5165\uff0cSEnet\u901a\u8fc7\u5168\u5c40\u5d4c\u5165\u4fe1\u606f\u6765\u5efa\u6a21\u901a\u9053\u5173\u7cfb\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7136\u800cSEnet\u4e2d\u4f7f\u7528fc\u5c42\u4f1a\u51fa\u73b0\u4e24\u4e2a\u95ee\u9898\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u4f7f\u7528\u4e86fc\u5c42\uff0c\u51fa\u4e8e\u8282\u7701\u53c2\u6570\u7684\u8003\u8651\uff0c\u65e0\u6cd5\u5728\u6240\u6709\u5c42\u4e0a\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ol"},"fc\u5c42\u7684\u53c2\u6570\u8f83\u4e3a\u590d\u6742\uff0c\u96be\u4ee5\u5206\u6790\u4e0d\u540c\u901a\u9053\u95f4\u7684\u5173\u8054\u6027\uff0c\u8fd9\u5b9e\u9645\u4e0a\u662f\u4e00\u79cd",(0,r.kt)("strong",{parentName:"li"},"\u9690\u5f0f"),"\u5b66\u4e60"),(0,r.kt)("li",{parentName:"ol"},"\u653e\u5728\u67d0\u4e9b\u5c42\u4e4b\u540e\u4f1a\u51fa\u73b0\u95ee\u9898")))))}y.isMDXComponent=!0}}]);