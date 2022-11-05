"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[8170],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,h=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},89573:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return m},metadata:function(){return h},assets:function(){return g},toc:function(){return b},default:function(){return d}});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&c(e,n,t[n]);return e};const f={title:"You Only Look One-level Feature",authors:["visualdust"],tags:["fpn","backbone","light-weight","multi-scale-learning"]},m=void 0,h={permalink:"/blog/[38]You-Only-Look-One-level-Feature",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[38]You-Only-Look-One-level-Feature.md",source:"@site/blog/[38]You-Only-Look-One-level-Feature.md",title:"You Only Look One-level Feature",description:"Qiang Chen, Yingming Wang, Tong Yang, Xiangyu Zhang, Jian Cheng, Jian Sun",date:"2022-11-05T07:47:19.660Z",formattedDate:"2022\u5e7411\u67085\u65e5",tags:[{label:"fpn",permalink:"/blog/tags/fpn"},{label:"backbone",permalink:"/blog/tags/backbone"},{label:"light-weight",permalink:"/blog/tags/light-weight"},{label:"multi-scale-learning",permalink:"/blog/tags/multi-scale-learning"}],readingTime:16.865,truncated:!0,authors:[{name:"Gavin Gong",title:"Rubbish CVer | Poor LaTex speaker | Half stack developer | \u952e\u5708\u8eba\u5c38\u7816\u5bb6",url:"https://gong.host",email:"gavin@gong.host",imageURL:"https://github.yuuza.net/visualDust.png",key:"visualdust"}],prevItem:{title:"YOLACT - Real-time Instance Segmentation",permalink:"/blog/[37]YOLACT-Real-time-Instance-Segmentation"},nextItem:{title:"Instance-sensitive Fully Convolutional Networks",permalink:"/blog/[39]Instance-sensitive-Fully-Convolutional-Networks"}},g={authorsImageUrls:[void 0]},b=[],y={toc:b};function d(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=p(p({},y),c),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Chen%2C+Q"}),"Qiang Chen"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Wang%2C+Y"}),"Yingming Wang"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Yang%2C+T"}),"Tong Yang"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Zhang%2C+X"}),"Xiangyu Zhang"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Cheng%2C+J"}),"Jian Cheng"),", ",(0,r.kt)("a",p({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Sun%2C+J"}),"Jian Sun")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This paper revisits feature pyramids networks (FPN) for one-stage detectors and points out that the success of FPN is due to its divide-and-conquer solution to the optimization problem in object detection rather than multi-scale feature fusion. From the perspective of optimization, we introduce an alternative way to address the problem instead of adopting the complex feature pyramids - {\\em utilizing only one-level feature for detection}. Based on the simple and efficient solution, we present You Only Look One-level Feature (YOLOF). In our method, two key components, Dilated Encoder and Uniform Matching, are proposed and bring considerable improvements. Extensive experiments on the COCO benchmark prove the effectiveness of the proposed model. Our YOLOF achieves comparable results with its feature pyramids counterpart RetinaNet while being 2.5\xd7 faster. Without transformer layers, YOLOF can match the performance of DETR in a single-level feature manner with 7\xd7 less training epochs. With an image size of 608\xd7608, YOLOF achieves 44.3 mAP running at 60 fps on 2080Ti, which is 13% faster than YOLOv4. Code is available at ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/megvii-model/YOLOF"}),"this https URL"),".")),(0,r.kt)("p",null,"\u672c\u6587\u7b80\u79f0YOLOF\u3002\u622a\u81f3\u5230\u672c\u6587\u5199\u4f5c\u65f6\uff0c\u4e8c\u9636\u6bb5\u548c\u5355\u9636\u6bb5\u76ee\u6807\u68c0\u6d4b\u7684SOTA\u65b9\u6cd5\u4e2d\u5e7f\u6cdb\u4f7f\u7528\u4e86\u591a\u5c3a\u5ea6\u7279\u5f81\u878d\u5408\u7684\u65b9\u6cd5\u3002FPN\u65b9\u6cd5\u51e0\u4e4e\u5df2\u7ecf\u79f0\u4e3a\u4e86\u7f51\u7edc\u4e2d\u7406\u6240\u5e94\u5f53\u7684\u4e00\u4e2a\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u672c\u6587\u4e2d\u4f5c\u8005\u91cd\u65b0\u56de\u987e\u4e86FPN\u6a21\u5757\uff0c\u5e76\u6307\u51faFPN\u7684\u4e24\u4e2a\u4f18\u52bf\u5206\u522b\u662f\u5176\u5206\u6cbb\uff08divide-and-conquer\uff09\u7684\u89e3\u51b3\u65b9\u6848\u3001\u4ee5\u53ca\u591a\u5c3a\u5ea6\u7279\u5f81\u878d\u5408\u3002\u672c\u6587\u5728\u5355\u9636\u6bb5\u76ee\u6807\u68c0\u6d4b\u5668\u4e0a\u7814\u7a76\u4e86FPN\u7684\u8fd9\u4e24\u4e2a\u4f18\u52bf\uff0c\u5e76\u5728RetinaNet\u4e0a\u8fdb\u884c\u4e86\u5b9e\u9a8c\uff0c\u5c06\u4e0a\u8ff0\u4e24\u4e2a\u4f18\u52bf\u89e3\u8026\uff0c\u5206\u522b\u7814\u7a76\u5176\u53d1\u6325\u7684\u4f5c\u7528\uff0c\u5e76\u6307\u51fa\uff0cFPN\u5728\u591a\u5c3a\u5ea6\u7279\u5f81\u878d\u5408\u4e0a\u53d1\u6325\u7684\u4f5c\u7528\u53ef\u80fd\u6ca1\u6709\u60f3\u8c61\u4e2d\u90a3\u4e48\u5927\u3002"),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u4f5c\u8005\u63d0\u51faYOLOF\uff0c\u8fd9\u662f\u4e00\u4e2a\u4e0d\u4f7f\u7528FPN\u7684\u76ee\u6807\u68c0\u6d4b\u7f51\u7edc\u3002\u5176\u4e3b\u8981\u521b\u65b0\u662f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Dilated Encoder"),(0,r.kt)("li",{parentName:"ol"},"Uniform Matching")),(0,r.kt)("p",null,"\u8be5\u7f51\u7edc\u5728\u8fbe\u5230RetinaNet\u5bf9\u7b49\u7cbe\u5ea6\u7684\u60c5\u51b5\u4e0b\u901f\u5ea6\u63d0\u5347\u4e862.5\u500d\u3002"))}d.isMDXComponent=!0}}]);