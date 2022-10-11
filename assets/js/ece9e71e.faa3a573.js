"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8317],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=m(a),k=r,u=d["".concat(s,".").concat(k)]||d[k]||c[k]||i;return a?n.createElement(u,p(p({ref:t},o),{},{components:a})):n.createElement(u,p({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={tags:["Semantic Types","integer"]},p="Date",l={unversionedId:"types/semantic/date",id:"types/semantic/date",title:"Date",description:"\ub0a0\uc9dc\uc640 \uc2dc\uac04\uc744 \uac19\uc774 \uc800\uc7a5\ud558\ub294 \uc790\ub8cc\ud615\uc785\ub2c8\ub2e4.",source:"@site/docs/types/semantic/date.md",sourceDirName:"types/semantic",slug:"/types/semantic/date",permalink:"/docs/types/semantic/date",draft:!1,tags:[{label:"Semantic Types",permalink:"/docs/tags/semantic-types"},{label:"integer",permalink:"/docs/tags/integer"}],version:"current",frontMatter:{tags:["Semantic Types","integer"]},sidebar:"sidebar",previous:{title:"Token",permalink:"/docs/types/semantic/token"},next:{title:"Image",permalink:"/docs/types/semantic/image"}},s={},m=[{value:"Serialization",id:"serialization",level:2},{value:"Serialization Example",id:"serialization-example",level:3},{value:"JavaScript",id:"javascript",level:4},{value:"Parsing",id:"parsing",level:3},{value:"Parsing Example",id:"parsing-example",level:4},{value:"JavaScript",id:"javascript-1",level:5},{value:"Limit",id:"limit",level:2}],o={toc:m};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"date"},"Date"),(0,r.kt)("p",null,"\ub0a0\uc9dc\uc640 \uc2dc\uac04\uc744 ",(0,r.kt)("strong",{parentName:"p"},"\uac19\uc774")," \uc800\uc7a5\ud558\ub294 \uc790\ub8cc\ud615\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc989 \uc774\ub984\uc740 Date\uc774\uc9c0\ub9cc, \uc0ac\uc6a9\ud558\ub294 \uc5b8\uc5b4\ub098 DB\uc5d0 \ub530\ub77c\uc11c Datetime\uc774\ub77c\uace0 \ubd88\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc2dc\uac04\ub300(timezone)\ub294 \ubcc4\ub3c4\ub85c \ud45c\ud604\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{title:"inheritance",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\uae30\ubcf8 \uc790\ub8cc\ud615\uc774 \uc544\ub2cc, ",(0,r.kt)("a",{parentName:"p",href:"/docs/types/primitive/integer"},"integer")," \ub97c \uc0c1\uc18d\ud558\ub294 ",(0,r.kt)("a",{parentName:"p",href:"/docs/types/semantic/"},"semantic type"),"\uc785\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"serialization"},"Serialization"),(0,r.kt)("p",null,"JSON\uc5d0\uc11c \uc2dc\uac04\uc744 \ud45c\ud604\ud558\uae30 \uc704\ud55c \uc790\ub8cc\ud615\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc801\uc808\ud55c \ub2e4\ub978 \ud0c0\uc785\uc73c\ub85c\uc758 \ubcc0\ud658\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud574\ub2f9 API\uc758 \uacbd\uc6b0, \uc5ec\ub7ec \uc5b8\uc5b4\uc640 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \uacf5\ud1b5\uc801\uc73c\ub85c \ub110\ub9ac \uc0ac\uc6a9\ub418\uba70 \uc9c1\ub82c\ud654\uc640 \ud30c\uc2f1 \ubc29\ubc95\uc774 \ub2e8 \ud558\ub098\ubfd0\uc774\uae30 \ub54c\ubb38\uc5d0 \ud63c\ub3d9\uc758 \uc5ec\uc9c0\uac00 \uc5c6\ub294 UNIX timestamp \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"UNIX timestamp\ub294 ",(0,r.kt)("ins",null,"1970\ub144 1\uc6d4 1\uc77c \uc815\uac01\ubd80\ud130 \ud604\uc7ac\uae4c\uc9c0 \uba87 \ucd08\uac00 \uc9c0\ub0ac\ub294\uc9c0"),"\ub85c \uc2dc\uac04\uc744 \ud45c\ud604\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"serialization-example"},"Serialization Example"),(0,r.kt)("p",null,"\uc544\ub798\uc5d0 \uc788\ub294 \ucf54\ub4dc\ub4e4\uc740 \uc804\ubd80 \uc608\uc2dc\uc774\uba70, \uc2e4\uc81c \uc5b8\uc5b4\ub9c8\ub2e4 \ub2e4\ub974\uac70\ub098 \ub354\uc6b1 \uc801\uc808\ud55c \ubc29\ubc95\uc774 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"javascript"},"JavaScript"),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc774 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date")," \uac1d\uccb4\ub97c timestamp\ub85c \ubcc0\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \ud604\uc7ac \uc2dc\uac04\uc744 timestamp\ub85c \ub098\ud0c0\ub0b4\uae30\nMath.floor(Date.now() / 1000)\n\n// Date \uac1d\uccb4\ub97c timestamp\ub85c \ubcc0\ud658\ud558\uae30\nMath.floor(dateObject.getTime() / 1000)\n// \ub610\ub294\nMath.floor(dateObject.valueOf() / 1000)\n\n// \uc9e7\uc740 \ubc29\ubc95\uc774 \ud544\uc694\ud558\ub2e4\uba74:\n~~(new Date / 1000)\n// \ub610\ub294\nnew Date / 1000 | 0\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1000"),"\uc73c\ub85c \ub098\ub204\ub294 \uc774\uc720\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/now"},"Date.now()"),"\uc640 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime"},"Date.proprototype.getTime()")," \ubaa8\ub450 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ucd08"),"\uac00 \uc544\ub2cc ",(0,r.kt)("inlineCode",{parentName:"p"},"\ubc00\ub9ac\ucd08")," \ub2e8\uc704\ub85c \ud45c\uc2dc\ub418\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"parsing"},"Parsing"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"2022-10-10T11:32:36"),"\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"Mon Oct 10 2022 20:36:32")," \ucc98\ub7fc \ubcf5\uc7a1\ud55c \ubb38\uc790\uc5f4\uc744 \uc9c1\uc811 \ud30c\uc2f1\ud558\ub294 \uac83\uc5d0 \ube44\ud574 \ub2e8\uc21c\ud55c \uc815\uc218 \ud615\ud0dc\ub85c \ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},"\uc5b8\uc81c\ubd80\ud130 \uba87 \ucd08\uac00 \ud750\ub978 \ud6c4\uc778\uc9c0")," \ubc29\uc2dd\uc778 timestamp\ub294 \ube44\uad50\uc801 \uc77c\uad00\uc801\uc778 \ud30c\uc2f1\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\ub9cc \uc5ed\uc2dc \uac01 \uc5b8\uc5b4 \ub4f1\uc5d0 \ub530\ub77c\uc11c \ud30c\uc2f1\uc744 \uc704\ud55c \ubc29\ubc95\uc774 \ub2e4\ub97c \uc218 \uc788\uc73c\ubbc0\ub85c \uac01 \uc5b8\uc5b4\ubcc4 \ubb38\uc11c\ub97c \ucc38\uace0\ud558\uc2dc\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"parsing-example"},"Parsing Example"),(0,r.kt)("h5",{id:"javascript-1"},"JavaScript"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"new Date(timestamp * 1000)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"1000"),"\uc744 \uacf1\ud558\ub294 \uc774\uc720\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"new Date()")," \uc0dd\uc131\uc790\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ucd08"),"\uac00 \uc544\ub2cc ",(0,r.kt)("inlineCode",{parentName:"p"},"\ubc00\ub9ac\ucd08"),"\ub97c \ubc1b\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc774 \uacfc\uc815\uc774 \uc5c6\ub2e4\uba74 \uc2e4\uc81c\ubcf4\ub2e4 \ub354\uc6b1 \uc61b\ub0a0 \uc2dc\uac04\uc73c\ub85c \ud45c\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"limit"},"Limit"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/types/primitive/integer"},"integer")," \ub97c \uc0c1\uc18d\ubc1b\uae30 \ub54c\ubb38\uc5d0, \uc5ed\uc2dc \uac19\uc740 \uc81c\uc57d\uc870\uac74\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub2e4\ub9cc, \ubc18\ub4dc\uc2dc 0\ubcf4\ub2e4 \ucee4\uc57c \ud569\ub2c8\ub2e4. 0\ubcf4\ub2e4 \uc791\uc740 \uac12\uc744 \uc804\ub2ec\ud558\uba74 \uc5d0\ub7ec\uac00 \ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Date\ub97c \ubc1b\ub294 API \ubb38\uc11c\uc5d0\uc11c\ub294 \ubcc4\ub3c4\ub85c \uc81c\uc57d \uc870\uac74\uc744 \uba85\uc2dc\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"admonition"},"\ud558\uc9c0\ub9cc \uc554\ubb35\uc801\uc73c\ub85c ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mn",{parentName:"mrow"},"0"),(0,r.kt)("mo",{parentName:"mrow"},"\u2264"),(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"0\\leq n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2264"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," \uc778 \uc870\uac74\uc774 \ud3ec\ud568\ub41c \uac83\uc73c\ub85c \uac04\uc8fc\ud569\ub2c8\ub2e4.")))}c.isMDXComponent=!0}}]);