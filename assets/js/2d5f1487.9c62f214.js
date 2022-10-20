"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5347],{9613:(t,a,e)=>{e.d(a,{Zo:()=>c,kt:()=>k});var n=e(9496);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function m(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),i=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):p(p({},a),t)),e},c=function(t){var a=i(t.components);return n.createElement(s.Provider,{value:a},t.children)},d={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},o=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=m(t,["components","mdxType","originalType","parentName"]),o=i(e),k=r,N=o["".concat(s,".").concat(k)]||o[k]||d[k]||l;return e?n.createElement(N,p(p({ref:a},c),{},{components:e})):n.createElement(N,p({ref:a},c))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,p=new Array(l);p[0]=o;var m={};for(var s in a)hasOwnProperty.call(a,s)&&(m[s]=a[s]);m.originalType=t,m.mdxType="string"==typeof t?t:r,p[1]=m;for(var i=2;i<l;i++)p[i]=e[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,e)}o.displayName="MDXCreateElement"},2791:(t,a,e)=>{e.d(a,{Z:()=>s});var n=e(9496),r=e(3442);const l="apiTable_e8hp";function p({name:t,children:a},e){const l=function(t){let a=t;for(;(0,n.isValidElement)(a);)[a]=n.Children.toArray(a.props.children);return a}(a),p=t?`${t}-${l}`:l,m=`#${p}`,s=(0,r.k6)();return n.createElement("tr",{id:p,tabIndex:0,ref:s.location.hash===m?e:void 0,onClick:()=>{s.push(m)},onKeyDown:t=>{"Enter"===t.key&&s.push(m)}},a.props.children)}const m=n.forwardRef(p);function s({children:t,name:a}){const[e,r]=n.Children.toArray(t.props.children),p=(0,n.useRef)(null);(0,n.useEffect)((()=>{p.current?.focus()}),[p]);const s=n.Children.map(r.props.children,(t=>n.createElement(m,{name:a,ref:p},t)));return n.createElement("table",{className:l},e,n.createElement("tbody",null,s))}},8210:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>i,contentTitle:()=>m,default:()=>o,frontMatter:()=>p,metadata:()=>s,toc:()=>c});e(9496);var n=e(9613),r=e(2791);function l(){return l=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var e=arguments[a];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},l.apply(this,arguments)}const p={tags:["Schema"]},m="User",s={unversionedId:"types/schema/user",id:"types/schema/user",title:"User",description:"\ud574\ub2f9 \uc11c\ube44\uc2a4\uc758 \uc774\uc6a9\uc790\ub97c \ud45c\ud604\ud558\ub294 \uc2a4\ud0a4\ub9c8\uc785\ub2c8\ub2e4.",source:"@site/docs/types/schema/user.md",sourceDirName:"types/schema",slug:"/types/schema/user",permalink:"/docs/types/schema/user",draft:!1,tags:[{label:"Schema",permalink:"/docs/tags/schema"}],version:"current",frontMatter:{tags:["Schema"]},sidebar:"sidebar",previous:{title:"Schema Types",permalink:"/docs/types/schema/"},next:{title:"UserInit",permalink:"/docs/types/schema/user-init"}},i={},c=[{value:"Type",id:"type",level:2},{value:"id",id:"id",level:3},{value:"createdAt",id:"createdat",level:3},{value:"name",id:"name",level:3},{value:"profile",id:"profile",level:3}],d={toc:c};function o({components:t,...a}){return(0,n.kt)("wrapper",l({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"user"}),"User"),(0,n.kt)("p",null,"\ud574\ub2f9 \uc11c\ube44\uc2a4\uc758 \uc774\uc6a9\uc790\ub97c \ud45c\ud604\ud558\ub294 \uc2a4\ud0a4\ub9c8\uc785\ub2c8\ub2e4."),(0,n.kt)("h2",l({},{id:"type"}),"Type"),(0,n.kt)(r.Z,{mdxType:"APITable"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Note"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Modifiable"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/types/semantic/uuid"}),"UUID")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"\ud574\ub2f9 \uc720\uc800\uc758 UUID"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'"R_-bYVt79M-2yroviNPei"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"createdAt"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/types/semantic/date"}),"Date")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"\ud574\ub2f9 \uc720\uc800\uac00 \uac00\uc785\ud55c \uc2dc\uac04"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"1665406780"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/types/primitive/string"}),"string")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"\ud574\ub2f9 \uc720\uc800\uc758 \ub2c9\ub124\uc784"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'"sinbe3673"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"profile"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/types/semantic/image"}),"Image")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"\ud574\ub2f9 \uc720\uc800\uc758 \ud504\ub85c\ud544 \uc0ac\uc9c4\uc744 \uac00\ub9ac\ud0a4\ub294 URL"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"false"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"(\ud558\ub2e8 \uc608\uc81c \ucc38\uace0)"))))),(0,n.kt)("h3",l({},{id:"id"}),"id"),(0,n.kt)("p",null,"\ud574\ub2f9 \uc720\uc800\uc758 UUID\uc785\ub2c8\ub2e4."),(0,n.kt)("h3",l({},{id:"createdat"}),"createdAt"),(0,n.kt)("p",null,"\ud574\ub2f9 \uc720\uc800\uac00 \uc0dd\uc131\ub41c \uc2dc\uac01\uc785\ub2c8\ub2e4."),(0,n.kt)("h3",l({},{id:"name"}),"name"),(0,n.kt)("p",null,"\ud574\ub2f9 \uc720\uc800\uc758 \uc774\ub984\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc774\ub984\uc740 \ud56d\uc0c1 \uace0\uc720\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \ub2e4\ub978 \uc0ac\uc6a9\uc790\uc640 \uacb9\uce60 \uc218 \uc788\uc73c\uba70, \ucc28\ud6c4 \uc218\uc815\ub420 \uc218 \uc788\ub294 \uac12\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ubaa8\ub4e0 \uc774\ub984\uc740 ",(0,n.kt)("span",l({parentName:"p"},{className:"math math-inline"}),(0,n.kt)("span",l({parentName:"span"},{className:"katex"}),(0,n.kt)("span",l({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",l({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow"},"\u2264"),(0,n.kt)("mn",{parentName:"mrow"},"128")),(0,n.kt)("annotation",l({parentName:"semantics"},{encoding:"application/x-tex"}),"n\\leq128")))),(0,n.kt)("span",l({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",l({parentName:"span"},{className:"base"}),(0,n.kt)("span",l({parentName:"span"},{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}})),(0,n.kt)("span",l({parentName:"span"},{className:"mord mathnormal"}),"n"),(0,n.kt)("span",l({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",l({parentName:"span"},{className:"mrel"}),"\u2264"),(0,n.kt)("span",l({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}}))),(0,n.kt)("span",l({parentName:"span"},{className:"base"}),(0,n.kt)("span",l({parentName:"span"},{className:"strut",style:{height:"0.6444em"}})),(0,n.kt)("span",l({parentName:"span"},{className:"mord"}),"128")))))," \uc758 \uc81c\uc57d\uc744 \uac00\uc9d1\ub2c8\ub2e4. \ub9cc\uc57d 128\uae00\uc790\ubcf4\ub2e4 \uae34 \uc774\ub984\uc73c\ub85c \ub2c9\ub124\uc784\uc744 \ubcc0\uacbd\ud558\ub824\uace0 \ud558\uba74 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h3",l({},{id:"profile"}),"profile"),(0,n.kt)("p",null,(0,n.kt)("a",l({parentName:"p"},{href:"https://gravatar.com"}),"Gravatar")," \uc5d0 \ub4f1\ub85d\ub41c \uc720\uc800\uc758 \ud504\ub85c\ud544 \uc774\ubbf8\uc9c0\uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("img",l({parentName:"p"},{src:"https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41247",alt:"abiria"}))),(0,n.kt)("p",null,"\ud574\ub2f9 \ud504\ub85c\ud544 URL\uc740 ",(0,n.kt)("inlineCode",{parentName:"p"},"https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41247"),"\uc640 \uac19\uc774 ",(0,n.kt)("inlineCode",{parentName:"p"},"gravatar \ud504\ub85c\ud544 \uc5d4\ub4dc\ud3ec\uc778\ud2b8")," + ",(0,n.kt)("inlineCode",{parentName:"p"},"\uc0ac\uc6a9\uc790\uc758 \uc774\uba54\uc77c \ud574\uc2dc\uac12")," \ud615\ud0dc\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud574\uc2dc\uac12\uc740 \uc0ac\uc6a9\uc790\uc758 \uc774\uba54\uc77c\uc744 ",(0,n.kt)("inlineCode",{parentName:"p"},"MD5"),"\ub85c \ud574\uc2f1\ud574 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"echo -n 'oro3673@gmail.com' | md5sum | cut -d ' ' -f 1\n# c7f96af819ec334a2cc6256fabd41247\n")),(0,n.kt)("p",null,"\ub530\ub77c\uc11c \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c\ub3c4 \uc801\uc808\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ud1b5\ud574 \uac19\uc740 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"s={integer}")," \ucffc\ub9ac\ub97c \uc0ac\uc6a9\ud574\uc11c \uc0ac\uc9c4\uc758 \ud06c\uae30\ub97c \uc870\uc808\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub85c\ud544 \uc0ac\uc9c4\uc774 \ud06c\uac70\ub098 \uc791\uac8c \ubcf4\uc5ec\uc57c \ud55c\ub2e4\uba74 \uc0ac\uc6a9\ud558\uc138\uc694. \ub9cc\uc57d \ud574\ub2f9 \ucffc\ub9ac\uac00 \uc0dd\ub7b5\ub41c\ub2e4\uba74 ",(0,n.kt)("inlineCode",{parentName:"p"},"80x80")," \ud06c\uae30\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Note"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Example"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Default"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"Limit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),"s","[ize]"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("a",l({parentName:"td"},{href:"/docs/types/primitive/integer"}),"integer"),"?"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),"\ud45c\uc2dc\ud560 \uc774\ubbf8\uc9c0 \ud06c\uae30"),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"64")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"80")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("span",l({parentName:"td"},{className:"math math-inline"}),(0,n.kt)("span",l({parentName:"span"},{className:"katex"}),(0,n.kt)("span",l({parentName:"span"},{className:"katex-mathml"}),(0,n.kt)("math",l({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mn",{parentName:"mrow"},"1"),(0,n.kt)("mo",{parentName:"mrow"},"\u2264"),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow"},"\u2264"),(0,n.kt)("mn",{parentName:"mrow"},"2048")),(0,n.kt)("annotation",l({parentName:"semantics"},{encoding:"application/x-tex"}),"1\\leq n\\leq2048")))),(0,n.kt)("span",l({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),(0,n.kt)("span",l({parentName:"span"},{className:"base"}),(0,n.kt)("span",l({parentName:"span"},{className:"strut",style:{height:"0.7804em",verticalAlign:"-0.136em"}})),(0,n.kt)("span",l({parentName:"span"},{className:"mord"}),"1"),(0,n.kt)("span",l({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",l({parentName:"span"},{className:"mrel"}),"\u2264"),(0,n.kt)("span",l({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}}))),(0,n.kt)("span",l({parentName:"span"},{className:"base"}),(0,n.kt)("span",l({parentName:"span"},{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}})),(0,n.kt)("span",l({parentName:"span"},{className:"mord mathnormal"}),"n"),(0,n.kt)("span",l({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",l({parentName:"span"},{className:"mrel"}),"\u2264"),(0,n.kt)("span",l({parentName:"span"},{className:"mspace",style:{marginRight:"0.2778em"}}))),(0,n.kt)("span",l({parentName:"span"},{className:"base"}),(0,n.kt)("span",l({parentName:"span"},{className:"strut",style:{height:"0.6444em"}})),(0,n.kt)("span",l({parentName:"span"},{className:"mord"}),"2048"))))))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\ud06c\uae30"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\uc774\ubbf8\uc9c0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"s=128")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("img",l({parentName:"td"},{src:"https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41247?s=128",alt:"abiria"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"s=96")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("img",l({parentName:"td"},{src:"https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41247?s=96",alt:"abiria"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"s=64")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("img",l({parentName:"td"},{src:"https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41247?s=64",alt:"abiria"})))))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"d={string}")," \ucffc\ub9ac\ub97c \uc0ac\uc6a9\ud574\uc11c \ud574\ub2f9 \uc720\uc800\ub97c \ucc3e\uc9c0 \ubabb\ud588\uc744 \uacbd\uc6b0 \uc790\ub3d9\uc801\uc73c\ub85c \uc0dd\uc131\ud560 \uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\uc885\ub958"),(0,n.kt)("th",l({parentName:"tr"},{align:null}),"\uc774\ubbf8\uc9c0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"d=404")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("img",l({parentName:"td"},{src:"https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41246?d=404",alt:"abiria"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"d=mp")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("img",l({parentName:"td"},{src:"https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41246?d=mp",alt:"abiria"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"d=identicon")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("img",l({parentName:"td"},{src:"https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41246?d=identicon",alt:"abiria"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"d=retro")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("img",l({parentName:"td"},{src:"https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41246?d=retro",alt:"abiria"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"d=blank")),(0,n.kt)("td",l({parentName:"tr"},{align:null}),(0,n.kt)("img",l({parentName:"td"},{src:"https://gravatar.com/avatar/c7f96af819ec334a2cc6256fabd41246?d=blank",alt:"abiria"})))))),(0,n.kt)("p",null,"\uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,n.kt)("a",l({parentName:"p"},{href:"https://gravatar.com/site/implement/"}),"Gravatar API \ubb38\uc11c")," \ub97c \ucc38\uace0\ud558\uc138\uc694."))}o.isMDXComponent=!0}}]);