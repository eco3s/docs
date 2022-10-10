"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[345],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>o});var n=t(7294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var N=n.createContext({}),l=function(a){var e=n.useContext(N),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},i=function(a){var e=l(a.components);return n.createElement(N.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,N=a.parentName,i=r(a,["components","mdxType","originalType","parentName"]),c=l(t),o=m,h=c["".concat(N,".").concat(o)]||c[o]||k[o]||s;return t?n.createElement(h,p(p({ref:e},i),{},{components:t})):n.createElement(h,p({ref:e},i))}));function o(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,p=new Array(s);p[0]=c;var r={};for(var N in e)hasOwnProperty.call(e,N)&&(r[N]=e[N]);r.originalType=a,r.mdxType="string"==typeof a?a:m,p[1]=r;for(var l=2;l<s;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9690:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>N,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=t(7462),m=(t(7294),t(3905));const s={},p=void 0,r={unversionedId:"types/primitive/integer",id:"types/primitive/integer",title:"integer",description:"\uc591\uc758 \uc815\uc218, \uc74c\uc758 \uc815\uc218, \ub610\ub294 0\uc744 \ud45c\ud604\ud560 \uc218 \uc788\ub294 \uc790\ub8cc\ud615\uc785\ub2c8\ub2e4.",source:"@site/docs/types/primitive/integer.md",sourceDirName:"types/primitive",slug:"/types/primitive/integer",permalink:"/docs/types/primitive/integer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"double",permalink:"/docs/types/primitive/double"},next:{title:"string",permalink:"/docs/types/primitive/string"}},N={},l=[{value:"Limitations",id:"limitations",level:2}],i={toc:l};function k(a){let{components:e,...t}=a;return(0,m.kt)("wrapper",(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"\uc591\uc758 \uc815\uc218, \uc74c\uc758 \uc815\uc218, \ub610\ub294 0\uc744 \ud45c\ud604\ud560 \uc218 \uc788\ub294 \uc790\ub8cc\ud615\uc785\ub2c8\ub2e4."),(0,m.kt)("p",null,"\ubc18\uba74\uc5d0 \uc18c\uc218\uc810, NaN, \uc591 \ub610\ub294 \uc74c\uc758 \ubb34\ud55c\ub300\ub97c \ud45c\ud604\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,m.kt)("admonition",{type:"note"},(0,m.kt)("p",{parentName:"admonition"},"JSON \ud45c\uc900\uc740 \uc815\uc218 \ud0c0\uc785\uacfc \ubd80\ub3d9\uc18c\uc218\uc810 \ud0c0\uc785\uc744 \uad6c\ubd84\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,m.kt)("p",{parentName:"admonition"},"\ud558\uc9c0\ub9cc \ub450 \ud0c0\uc785\uc744 \ub2e4\ub974\uac8c \uc778\uc2dd\ud558\ub294 \uc5b8\uc5b4(Java \ub4f1)\uc5d0\uc11c\uc758 \ucda9\ub3cc \ubc29\uc9c0 \ubc0f JSON schema\uc640\uc758 \ud638\ud55c\uc131\uc744 \uc704\ud574 \ud574\ub2f9 \ubb38\uc11c\uc5d0\uc11c\ub294 \ub450 \ud0c0\uc785\uc774 \uad6c\ubd84\ub418\uc5b4 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,m.kt)("p",{parentName:"admonition"},"\uc18c\uc218\uc810\uc774 \uc788\ub294 \uc22b\uc790\ub97c \ud45c\ud604\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,m.kt)("a",{parentName:"p",href:"./double"},"double"),"\uc744 \uc0ac\uc6a9\ud574 \uc8fc\uc138\uc694.")),(0,m.kt)("h2",{id:"limitations"},"Limitations"),(0,m.kt)("p",null,"\uc815\uc218\ub294 \ubc94\uc704 \uc81c\ud55c\uc744 \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,m.kt)("p",null,"\uc774\ud6c4 \ub4f1\uc7a5\ud558\ub294 \uc870\uac74\uc5d0\uc11c ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),"\uc740 \ud574\ub2f9 \uc815\uc218\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,m.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4, 5\uac1c\uc758 \ucd5c\uc2e0 \uae00\ub4e4\uc744 \ubd88\ub7ec\uc624\uace0 \uc2f6\uc744 \ub54c ",(0,m.kt)("inlineCode",{parentName:"p"},"GET /posts?limit=5"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,m.kt)("p",null,"\ud558\uc9c0\ub9cc ",(0,m.kt)("inlineCode",{parentName:"p"},"limit")," \ucffc\ub9ac\uc758 \ubc94\uc704 \uc81c\ud55c\uc774 ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"0"),(0,m.kt)("mo",{parentName:"mrow"},"\u2264"),(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0\\leq n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \uc73c\ub85c \uc124\uc815\ub418\uc5b4 \uc788\ub2e4\uba74, ",(0,m.kt)("inlineCode",{parentName:"p"},"-5"),"\uac1c\uc758 \uae00\uc744 \ubd88\ub7ec\uc62c \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,m.kt)("p",null,"\ubc94\uc704 \uc81c\ud55c\uc740 \uc8fc\ub85c \uac01 API\ubcc4 Request \ubb38\ub2e8\uc758 Limit \uce7c\ub7fc\uc5d0 \ub2e4\uc74c\uacfc \uac19\uc774 \uba85\uc2dc\ub429\ub2c8\ub2e4."),(0,m.kt)("table",null,(0,m.kt)("thead",{parentName:"table"},(0,m.kt)("tr",{parentName:"thead"},(0,m.kt)("th",{parentName:"tr",align:null},"\uc0c1\ud669"),(0,m.kt)("th",{parentName:"tr",align:null},"\ubc94\uc704"),(0,m.kt)("th",{parentName:"tr",align:null},"\ud45c\ud604 \ubc29\uc2dd"),(0,m.kt)("th",{parentName:"tr",align:null},"\uc608\uc2dc"))),(0,m.kt)("tbody",{parentName:"table"},(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"\uc544\ubb34 \uc81c\uc57d\uc774 \uc5c6\ub294 \uacbd\uc6b0"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"("),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u221e"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u221e"),(0,m.kt)("mo",{parentName:"mrow",fence:"true"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\left(-\\infty,+\\infty\\right)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"minner"},(0,m.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u221e"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"+"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u221e"),(0,m.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},")"))))))),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," (\uc0dd\ub7b5 \uac00\ub2a5)"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"\uac12\uc774 \uc815\ud574\uc838 \uc788\ub294 \uacbd\uc6b0"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"["),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\left[a,a\\right]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"minner"},(0,m.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},"]"))))))),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"a")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n=a")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"3")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n=3")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"3"))))))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"\ud2b9\uc815 \uac12\ubcf4\ub2e4 \ud070 \uac12\uc774 \uc8fc\uc5b4\uc838\uc57c \ud558\ub294 \uacbd\uc6b0"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"("),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u221e"),(0,m.kt)("mo",{parentName:"mrow",fence:"true"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\left(a,+\\infty\\right)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"minner"},(0,m.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"+"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u221e"),(0,m.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},")"))))))),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow"},"<"),(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a<n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"0"),(0,m.kt)("mo",{parentName:"mrow"},"<"),(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0<n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6835em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"\ud2b9\uc815 \uac12\ubcf4\ub2e4 \ud06c\uac70\ub098 \uac19\uc740 \uac12\uc774 \uc8fc\uc5b4\uc838\uc57c \ud558\ub294 \uacbd\uc6b0"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"["),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u221e"),(0,m.kt)("mo",{parentName:"mrow",fence:"true"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\left[a,+\\infty\\right)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"minner"},(0,m.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"+"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u221e"),(0,m.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},")"))))))),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow"},"\u2264"),(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a\\leq n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mn",{parentName:"mrow"},"5"),(0,m.kt)("mo",{parentName:"mrow"},"\u2264"),(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"5\\leq n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"5"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"\ud2b9\uc815 \uac12\ubcf4\ub2e4 \uc791\uc740 \uac12\uc774 \uc8fc\uc5b4\uc838\uc57c \ud558\ub294 \uacbd\uc6b0"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"("),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u221e"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mo",{parentName:"mrow",fence:"true"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\left(-\\infty,b\\right)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"minner"},(0,m.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u221e"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},")"))))))),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"<"),(0,m.kt)("mi",{parentName:"mrow"},"b")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n<b")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"<"),(0,m.kt)("mn",{parentName:"mrow"},"10")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n<10")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"<"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"10"))))))),(0,m.kt)("tr",{parentName:"tbody"},(0,m.kt)("td",{parentName:"tr",align:null},"\ud2b9\uc815 \uac12\ubcf4\ub2e4 \uc791\uac70\ub098 \uac19\uc740 \uac12\uc774 \uc8fc\uc5b4\uc838\uc57c \ud558\ub294 \uacbd\uc6b0"),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"("),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u221e"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mo",{parentName:"mrow",fence:"true"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\left(-\\infty,b\\right]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"minner"},(0,m.kt)("span",{parentName:"span",className:"mopen delimcenter",style:{top:"0em"}},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u221e"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mclose delimcenter",style:{top:"0em"}},"]"))))))),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2264"),(0,m.kt)("mi",{parentName:"mrow"},"b")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n\\leq b")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))),(0,m.kt)("td",{parentName:"tr",align:null},(0,m.kt)("span",{parentName:"td",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\u2264"),(0,m.kt)("mn",{parentName:"mrow"},"1024")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n\\leq 1024")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1024"))))))))))}k.isMDXComponent=!0}}]);