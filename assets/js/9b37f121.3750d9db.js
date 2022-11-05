"use strict";(self.webpackChunkml_notebook=self.webpackChunkml_notebook||[]).push([[5954],{3905:function(a,t,e){e.d(t,{Zo:function(){return l},kt:function(){return k}});var n=e(67294);function r(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function s(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function m(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){r(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function p(a,t){if(null==a)return{};var e,n,r=function(a,t){if(null==a)return{};var e,n,r={},s=Object.keys(a);for(n=0;n<s.length;n++)e=s[n],t.indexOf(e)>=0||(r[e]=a[e]);return r}(a,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)e=s[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var o=n.createContext({}),i=function(a){var t=n.useContext(o),e=t;return a&&(e="function"==typeof a?a(t):m(m({},t),a)),e},l=function(a){var t=i(a.components);return n.createElement(o.Provider,{value:t},a.children)},c={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(a,t){var e=a.components,r=a.mdxType,s=a.originalType,o=a.parentName,l=p(a,["components","mdxType","originalType","parentName"]),N=i(e),k=r,u=N["".concat(o,".").concat(k)]||N[k]||c[k]||s;return e?n.createElement(u,m(m({ref:t},l),{},{components:e})):n.createElement(u,m({ref:t},l))}));function k(a,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof a||r){var s=e.length,m=new Array(s);m[0]=N;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=a,p.mdxType="string"==typeof a?a:r,m[1]=p;for(var i=2;i<s;i++)m[i]=e[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,e)}N.displayName="MDXCreateElement"},32787:function(a,t,e){e.r(t),e.d(t,{frontMatter:function(){return N},contentTitle:function(){return k},metadata:function(){return u},assets:function(){return h},toc:function(){return d},default:function(){return g}});var n=e(3905),r=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(a,t,e)=>t in a?r(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,c=(a,t)=>{for(var e in t||(t={}))o.call(t,e)&&l(a,e,t[e]);if(p)for(var e of p(t))i.call(t,e)&&l(a,e,t[e]);return a};const N={title:"Axiomatic Attribution for Deep Networks",authors:["puqing"],tags:["attribution","visualization"]},k=void 0,u={permalink:"/blog/[52]Axiomatic-Attribution-for-Deep-Networks",editUrl:"https://github.dev/neet-cv/ml.akasaki.space/blob/master/blog/[52]Axiomatic-Attribution-for-Deep-Networks.md",source:"@site/blog/[52]Axiomatic-Attribution-for-Deep-Networks.md",title:"Axiomatic Attribution for Deep Networks",description:"Mukund Sundararajan, Ankur Taly, Qiqi Yan",date:"2022-11-05T07:47:19.664Z",formattedDate:"2022\u5e7411\u67085\u65e5",tags:[{label:"attribution",permalink:"/blog/tags/attribution"},{label:"visualization",permalink:"/blog/tags/visualization"}],readingTime:9.88,truncated:!0,authors:[{name:"PuQing",title:"intro * new",url:"https://github.com/AndPuQing",imageURL:"https://github.com/AndPuQing.png",key:"puqing"}],prevItem:{title:"How much Position Information Do Convolutional Neural Networks Encode?",permalink:"/blog/[51]How-much-Position-Information-Do-Convolutional-Neural-Networks-Encode"},nextItem:{title:"\u6b22\u8fce\u6765\u5230\u9b54\u6cd5\u90e8\u65e5\u5fd7",permalink:"/blog/[00]unlimited-paper-works"}},h={authorsImageUrls:[void 0]},d=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[],level:2}],f={toc:d};function g(a){var t,e=a,{components:r}=e,l=((a,t)=>{var e={};for(var n in a)o.call(a,n)&&t.indexOf(n)<0&&(e[n]=a[n]);if(null!=a&&p)for(var n of p(a))t.indexOf(n)<0&&i.call(a,n)&&(e[n]=a[n]);return e})(e,["components"]);return(0,n.kt)("wrapper",(t=c(c({},f),l),s(t,m({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Sundararajan%2C+M"}),"Mukund Sundararajan"),", ",(0,n.kt)("a",c({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Taly%2C+A"}),"Ankur Taly"),", ",(0,n.kt)("a",c({parentName:"p"},{href:"https://arxiv.org/search/cs?searchtype=author&query=Yan%2C+Q"}),"Qiqi Yan")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"We study the problem of attributing the prediction of a deep network to its input features, a problem previously studied by several other works. We identify two fundamental axioms---Sensitivity and Implementation Invariance that attribution methods ought to satisfy. We show that they are not satisfied by most known attribution methods, which we consider to be a fundamental weakness of those methods. We use the axioms to guide the design of a new attribution method called Integrated Gradients. Our method requires no modification to the original network and is extremely simple to implement; it just needs a few calls to the standard gradient operator. We apply this method to a couple of image models, a couple of text models and a chemistry model, demonstrating its ability to debug networks, to extract rules from a network, and to enable users to engage with models better.")),(0,n.kt)("h2",c({},{id:"\u7b80\u4ecb"}),"\u7b80\u4ecb"),(0,n.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u4e00\u79cd\u795e\u7ecf\u7f51\u7edc\u7684\u53ef\u89c6\u5316\u65b9\u6cd5\uff1a",(0,n.kt)("inlineCode",{parentName:"p"},"\u79ef\u5206\u68af\u5ea6\uff08Integrated Gradients\uff09"),"\uff0c\u662f\u4e00\u7bc7 2016-2017 \u5e74\u95f4\u7684\u5de5\u4f5c\u3002"),(0,n.kt)("p",null,"\u6240\u8c13\u53ef\u89c6\u5316\uff0c\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u5bf9\u4e8e\u7ed9\u5b9a\u7684\u8f93\u5165 ",(0,n.kt)("span",c({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",c({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"x")),(0,n.kt)("annotation",c({parentName:"semantics"},{encoding:"application/x-tex"}),"x")))),(0,n.kt)("span",c({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",c({parentName:"span"},{className:"base"}),(0,n.kt)("span",c({parentName:"span"},{className:"strut",style:{height:"0.4306em"}})),(0,n.kt)("span",c({parentName:"span"},{className:"mord mathnormal"}),"x")))))," \u4ee5\u53ca\u6a21\u578b ",(0,n.kt)("span",c({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",c({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"F"),(0,n.kt)("mo",c({parentName:"mrow"},{stretchy:"false"}),"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",c({parentName:"mrow"},{stretchy:"false"}),")")),(0,n.kt)("annotation",c({parentName:"semantics"},{encoding:"application/x-tex"}),"F(x)")))),(0,n.kt)("span",c({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",c({parentName:"span"},{className:"base"}),(0,n.kt)("span",c({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,n.kt)("span",c({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.13889em"}}),"F"),(0,n.kt)("span",c({parentName:"span"},{className:"mopen"}),"("),(0,n.kt)("span",c({parentName:"span"},{className:"mord mathnormal"}),"x"),(0,n.kt)("span",c({parentName:"span"},{className:"mclose"}),")"))))),"\uff0c\u60f3\u529e\u6cd5\u6307\u51fa ",(0,n.kt)("span",c({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",c({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"x")),(0,n.kt)("annotation",c({parentName:"semantics"},{encoding:"application/x-tex"}),"x")))),(0,n.kt)("span",c({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",c({parentName:"span"},{className:"base"}),(0,n.kt)("span",c({parentName:"span"},{className:"strut",style:{height:"0.4306em"}})),(0,n.kt)("span",c({parentName:"span"},{className:"mord mathnormal"}),"x")))))," \u7684\u54ea\u4e9b\u5206\u91cf\u5bf9\u6a21\u578b\u7684\u9884\u6d4b\u6709\u8f83\u5927\u7684\u5f71\u54cd\uff0c\u6216\u8005\u8bf4 ",(0,n.kt)("span",c({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",c({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"x")),(0,n.kt)("annotation",c({parentName:"semantics"},{encoding:"application/x-tex"}),"x")))),(0,n.kt)("span",c({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",c({parentName:"span"},{className:"base"}),(0,n.kt)("span",c({parentName:"span"},{className:"strut",style:{height:"0.4306em"}})),(0,n.kt)("span",c({parentName:"span"},{className:"mord mathnormal"}),"x")))))," \u5404\u4e2a\u5206\u91cf\u7684\u91cd\u8981\u6027\u505a\u4e2a\u6392\u5e8f\uff0c\u800c\u4e13\u4e1a\u7684\u8bdd\u672f\u5c31\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"\u5f52\u56e0"),"(Attribution)\u3002\u4e00\u4e2a\u6734\u7d20\u7684\u601d\u8def\u662f\u76f4\u63a5\u4f7f\u7528\u68af\u5ea6 ",(0,n.kt)("span",c({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",c({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",c({parentName:"msub"},{mathvariant:"normal"}),"\u2207"),(0,n.kt)("mi",{parentName:"msub"},"x")),(0,n.kt)("mi",{parentName:"mrow"},"F"),(0,n.kt)("mo",c({parentName:"mrow"},{stretchy:"false"}),"("),(0,n.kt)("mi",{parentName:"mrow"},"x"),(0,n.kt)("mo",c({parentName:"mrow"},{stretchy:"false"}),")")),(0,n.kt)("annotation",c({parentName:"semantics"},{encoding:"application/x-tex"}),"\\nabla _{x}F(x)")))),(0,n.kt)("span",c({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",c({parentName:"span"},{className:"base"}),(0,n.kt)("span",c({parentName:"span"},{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}})),(0,n.kt)("span",c({parentName:"span"},{className:"mord"}),(0,n.kt)("span",c({parentName:"span"},{className:"mord"}),"\u2207"),(0,n.kt)("span",c({parentName:"span"},{className:"msupsub"}),(0,n.kt)("span",c({parentName:"span"},{className:"vlist-t vlist-t2"}),(0,n.kt)("span",c({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",c({parentName:"span"},{className:"vlist",style:{height:"0.1514em"}}),(0,n.kt)("span",c({parentName:"span"},{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}}),(0,n.kt)("span",c({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),(0,n.kt)("span",c({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),(0,n.kt)("span",c({parentName:"span"},{className:"mord mtight"}),(0,n.kt)("span",c({parentName:"span"},{className:"mord mathnormal mtight"}),"x"))))),(0,n.kt)("span",c({parentName:"span"},{className:"vlist-s"}),"\u200b")),(0,n.kt)("span",c({parentName:"span"},{className:"vlist-r"}),(0,n.kt)("span",c({parentName:"span"},{className:"vlist",style:{height:"0.15em"}}),(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",c({parentName:"span"},{className:"mord mathnormal",style:{marginRight:"0.13889em"}}),"F"),(0,n.kt)("span",c({parentName:"span"},{className:"mopen"}),"("),(0,n.kt)("span",c({parentName:"span"},{className:"mord mathnormal"}),"x"),(0,n.kt)("span",c({parentName:"span"},{className:"mclose"}),")")))))," \u6765\u4f5c\u4e3a ",(0,n.kt)("span",c({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex"}),(0,n.kt)("span",c({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",c({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"x")),(0,n.kt)("annotation",c({parentName:"semantics"},{encoding:"application/x-tex"}),"x")))),(0,n.kt)("span",c({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",c({parentName:"span"},{className:"base"}),(0,n.kt)("span",c({parentName:"span"},{className:"strut",style:{height:"0.4306em"}})),(0,n.kt)("span",c({parentName:"span"},{className:"mord mathnormal"}),"x"))))),"\u5404\u4e2a\u5206\u91cf\u7684\u91cd\u8981\u6027\u6307\u6807\uff0c\u800c\u79ef\u5206\u68af\u5ea6\u662f\u5bf9\u5b83\u7684\u6539\u8fdb\u3002"))}g.isMDXComponent=!0}}]);