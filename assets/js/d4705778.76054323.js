"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[5681],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),b=a,f=m["".concat(c,".").concat(b)]||m[b]||p[b]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66220:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return m},contentTitle:function(){return b},metadata:function(){return f},assets:function(){return d},toc:function(){return g},default:function(){return h}});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&u(e,r,t[r]);return e};const m={title:"Feature Pyramid Networks for Object Detection",authors:["visualdust"],tags:["detection","FPN","backbone","multi-scale-learning"]},b=void 0,f={permalink:"/blog/[09]Feature-Pyramid-Networks-for-Object-Detection",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[09]Feature-Pyramid-Networks-for-Object-Detection.md",source:"@site/blog/[09]Feature-Pyramid-Networks-for-Object-Detection.md",title:"Feature Pyramid Networks for Object Detection",description:"\u8fd9\u7bc7\u7b14\u8bb0\u7684\u5199\u4f5c\u8005\u662fVisualDust\u3002",date:"2022-11-05T07:47:19.660Z",formattedDate:"2022\u5e7411\u67085\u65e5",tags:[{label:"detection",permalink:"/blog/tags/detection"},{label:"FPN",permalink:"/blog/tags/fpn"},{label:"backbone",permalink:"/blog/tags/backbone"},{label:"multi-scale-learning",permalink:"/blog/tags/multi-scale-learning"}],readingTime:10.025,truncated:!0,authors:[{name:"Gavin Gong",title:"Rubbish CVer | Poor LaTex speaker | Half stack developer | \u952e\u5708\u8eba\u5c38\u7816\u5bb6",url:"https://gong.host",email:"gavin@gong.host",imageURL:"https://github.yuuza.net/visualDust.png",key:"visualdust"}],prevItem:{title:"Dynamic Neural Networks - A Survey",permalink:"/blog/[08]Dynamic-Neural-Networks-A-Survey"},nextItem:{title:"A Review on Deep Learning Techniques Applied to Semantic Segmentation",permalink:"/blog/[10]Overview-Of-Semantic-Segmentation"}},d={authorsImageUrls:[void 0]},g=[{value:"\u8fd9\u7bc7\u7b14\u8bb0\u7684\u5199\u4f5c\u8005\u662fVisualDust\u3002",id:"\u8fd9\u7bc7\u7b14\u8bb0\u7684\u5199\u4f5c\u8005\u662fvisualdust",children:[],level:3},{value:"Abstract\uff08\u6458\u8981\uff09",id:"abstract\u6458\u8981",children:[],level:2}],y={toc:g};function h(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},y),u),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("h3",p({},{id:"\u8fd9\u7bc7\u7b14\u8bb0\u7684\u5199\u4f5c\u8005\u662fvisualdust"}),"\u8fd9\u7bc7\u7b14\u8bb0\u7684\u5199\u4f5c\u8005\u662f",(0,n.kt)("a",p({parentName:"h3"},{href:"https://github.com/visualDust"}),"VisualDust"),"\u3002"),(0,n.kt)("p",null,"\u539f\u8bba\u6587",(0,n.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/abs/1612.03144"}),"Feature Pyramid Networks for Object Detection"),"\u3002"),(0,n.kt)("p",null,"\u8fd9\u7bc7\u8bba\u6587\u5c31\u662f\u5927\u5bb6\u719f\u77e5\u7684FPN\u4e86\u3002FPN\u662f",(0,n.kt)("strong",{parentName:"p"},"\u6bd4\u8f83\u65e9\u671f\u7684\u4e00\u4efd\u5de5\u4f5c"),"\uff08\u8bf7\u6ce8\u610f\uff0c\u8fd9\u7bc7\u8bba\u6587\u53ea\u662f\u591a\u5c3a\u5ea6\u7279\u5f81\u878d\u5408\u7684\u4e00\u79cd\u65b9\u5f0f\u3002\u4e0d\u8fc7\u8fd9\u7bc7\u8bba\u6587\u63d0\u51fa\u7684\u6bd4\u8f83\u65e9\uff08CVPR2017\uff09\uff0c\u5728\u5f53\u65f6\u770b\u6765\u662f\u975e\u5e38\u5148\u8fdb\u7684\uff09\uff0c\u5728\u5f53\u65f6\u5177\u6709\u5f88\u591a\u4eae\u70b9\uff1aFPN\u4e3b\u8981\u89e3\u51b3\u7684\u662f\u7269\u4f53\u68c0\u6d4b\u4e2d\u7684\u591a\u5c3a\u5ea6\u95ee\u9898\uff0c\u901a\u8fc7\u7b80\u5355\u7684\u7f51\u7edc\u8fde\u63a5\u6539\u53d8\uff0c\u5728\u57fa\u672c\u4e0d\u589e\u52a0\u539f\u6709\u6a21\u578b\u8ba1\u7b97\u91cf\u60c5\u51b5\u4e0b\uff0c\u5927\u5e45\u5ea6\u63d0\u5347\u4e86\u5c0f\u7269\u4f53\u68c0\u6d4b\u7684\u6027\u80fd\u3002"),(0,n.kt)("h2",p({},{id:"abstract\u6458\u8981"}),"Abstract\uff08\u6458\u8981\uff09"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Feature pyramids are a basic component in recognition systems for detecting objects at different scales. But recent deep learning object detectors have avoided pyramid representations, in part because they are compute and memory intensive. In this paper, we exploit the inherent multi-scale, pyramidal hierarchy of deep convolutional networks to construct feature pyramids with marginal extra cost. A top-down architecture with lateral connections is developed for building high-level semantic feature maps at all scales. This architecture, called a Feature Pyramid Network (FPN), shows significant improvement as a generic feature extractor in several applications. Using FPN in a basic Faster R-CNN system, our method achieves state-of-the-art single-model results on the COCO detection benchmark without bells and whistles, surpassing all existing single-model entries including those from the COCO 2016 challenge winners. In addition, our method can run at 5 FPS on a GPU and thus is a practical and accurate solution to multi-scale object detection. Code will be made publicly available.")),(0,n.kt)("p",null,"\u8fd9\u7bc7\u8bba\u6587\u5bf9\u4ee5\u540e\u7684\u8bb8\u591a\u7f51\u7edc\u8bbe\u8ba1\u4ea7\u751f\u4e86\u8f83\u5927\u7684\u5f71\u54cd\uff0c\u63a8\u8350\u4f60\u9605\u8bfb",(0,n.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/abs/1612.03144"}),"\u539f\u6587"),"\u3002\u8fd9\u91cc\u53ea\u662f\u5bf9\u8fd9\u7bc7\u8bba\u6587\u7684\u7c97\u6d45\u9605\u8bfb\u7b14\u8bb0\u3002"))}h.isMDXComponent=!0}}]);