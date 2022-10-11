"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6134],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=o(a),N=r,s=k["".concat(d,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(s,p(p({ref:e},m),{},{components:a})):n.createElement(s,p({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},869:(t,e,a)=>{a.d(e,{Z:()=>d});var n=a(7294),r=a(6550);const l="apiTable_e8hp";function p(t,e){let{name:a,children:l}=t;const p=function(t){let e=t;for(;(0,n.isValidElement)(e);)[e]=n.Children.toArray(e.props.children);return e}(l),i=a?`${a}-${p}`:p,d=`#${i}`,o=(0,r.k6)();return n.createElement("tr",{id:i,tabIndex:0,ref:o.location.hash===d?e:void 0,onClick:()=>{o.push(d)},onKeyDown:t=>{"Enter"===t.key&&o.push(d)}},l.props.children)}const i=n.forwardRef(p);function d(t){let{children:e,name:a}=t;const[r,p]=n.Children.toArray(e.props.children),d=(0,n.useRef)(null);(0,n.useEffect)((()=>{var t;null==(t=d.current)||t.focus()}),[d]);const o=n.Children.map(p.props.children,(t=>n.createElement(i,{name:a,ref:d},t)));return n.createElement("table",{className:l},r,n.createElement("tbody",null,o))}},2732:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(869);const p={tags:["Category"]},i="Error",d={unversionedId:"types/error/README",id:"types/error/README",title:"Error",description:"\uc624\ub958\ub97c \ud45c\ud604\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294, Schema \ud0c0\uc785\uc758 \uc77c\uc885\uc785\ub2c8\ub2e4.",source:"@site/docs/types/error/README.md",sourceDirName:"types/error",slug:"/types/error/",permalink:"/docs/types/error/",draft:!1,tags:[{label:"Category",permalink:"/docs/tags/category"}],version:"current",frontMatter:{tags:["Category"]},sidebar:"sidebar",previous:{title:"PostPreview",permalink:"/docs/types/schema/post-preview"},next:{title:"GET /users",permalink:"/docs/api/users/get-users"}},o={},m=[{value:"Type",id:"type",level:2},{value:"at",id:"at",level:3},{value:"status",id:"status",level:3},{value:"type",id:"error-type",level:3},{value:"payload",id:"payload",level:3},{value:"message",id:"message",level:3}],u={toc:m};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"error"},"Error"),(0,r.kt)("p",null,"\uc624\ub958\ub97c \ud45c\ud604\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294, ",(0,r.kt)("a",{parentName:"p",href:"/docs/types/schema/"},"Schema")," \ud0c0\uc785\uc758 \uc77c\uc885\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc624\ub958\ub294 \uc5b8\uc81c\ub4e0 \uc5b4\ub290 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\uc5d0\uc11c\ub4e0 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc73c\uba70, \uc0c1\ud0dc \ucf54\ub4dc\ub85c \uc624\ub958\uc778\uc9c0 \uc815\uc0c1 \uc751\ub2f5\uc778\uc9c0\ub97c \uad6c\ubd84\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/posts/get-post"},"GET /posts/{id}")," \uc694\uccad\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),"\uc774 \uc544\ub2cc \ub2e4\ub978 \uc0c1\ud0dc \ucf54\ub4dc\ub97c \uac00\uc9c4 \uc751\ub2f5\uc774 \ubc18\ud658\ub41c\ub2e4\uba74 \ud574\ub2f9 \uc751\ub2f5\uc740 \uc5d0\ub7ec \uac1d\uccb4\uc774\uba70, \uc544\ub798 \uc2a4\ud0a4\ub9c8\uc5d0 \ub530\ub77c \ud30c\uc2f1\ud560 \uc218 \uc788\uc74c\uc744 \ud655\uc2e0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"type"},"Type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#at"},"at")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/types/semantic/date"},"Date")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c \uc2dc\uac01"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#status"},"status")),(0,r.kt)("td",{parentName:"tr",align:null},"Enum<",(0,r.kt)("a",{parentName:"td",href:"/docs/types/primitive/integer"},"integer"),"> (\ud558\ub2e8 \ucc38\uace0)"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP \uc0c1\ud0dc \ucf54\ub4dc"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"404"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#error-type"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"Enum<",(0,r.kt)("a",{parentName:"td",href:"/docs/types/primitive/string"},"string"),"> (\ud558\ub2e8 \ucc38\uace0)"),(0,r.kt)("td",{parentName:"tr",align:null},"\ubc1c\uc0dd\ud55c \uc5d0\ub7ec\uc758 \uc885\ub958"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"PageNotFound"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#payload"},"payload")),(0,r.kt)("td",{parentName:"tr",align:null},"(\uac01 ",(0,r.kt)("a",{parentName:"td",href:"#type"},"type"),"\uc5d0 \ub530\ub77c \ub2e4\ub984, \ud558\ub2e8 \ucc38\uace0)"),(0,r.kt)("td",{parentName:"tr",align:null},"\uc5d0\ub7ec \ub370\uc774\ud130"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#message"},"message")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/types/primitive/string"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc5d0\ub7ec \uba54\uc138\uc9c0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"could not find page"'))))),(0,r.kt)("h3",{id:"at"},"at"),(0,r.kt)("p",null,"\uc11c\ubc84 \uae30\uc900\uc73c\ub85c \ud574\ub2f9 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud55c \uc2dc\uac01\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"status"},"status"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/docs/Web/HTTP/Status"},"HTTP Status Code")," \ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub300\ubd80\ubd84\uc758 \uacbd\uc6b0, \ubaa8\ub4e0 \uc5d0\ub7ec\ub294 \uc54c\ub9de\uc740 \uc0c1\ud0dc \ucf54\ub4dc\uc640 \ud568\uaed8 \uc804\ub2ec\ub418\uae30 \ub54c\ubb38\uc5d0 \ud574\ub2f9 \uac12\uc744 \uc77d\uc744 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Enum<string>")," \ud0c0\uc785\uc774\uba70, \uc544\ub798\uc640 \uac19\uc740 \uac12\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"400")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/docs/Web/HTTP/Status/400"},"Bad Request")),(0,r.kt)("td",{parentName:"tr",align:null},"\ub300\ubd80\ubd84\uc758 \uacbd\uc6b0 \ud074\ub77c\uc774\uc5b8\ud2b8\uac00 \ubcf4\ub0b8 \uc694\uccad\uc774 \uc81c\uc57d \uc870\uac74\uc744 \ub9cc\uc871\ud558\uc9c0 \ubabb\ud558\uac70\ub098, \ud30c\uc2f1\uc5d0 \uc2e4\ud328\ud558\uac70\ub098, \ucc98\ub9ac\ud560 \uc218 \uc5c6\ub294 \uac12\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc5b4 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"401")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/docs/Web/HTTP/Status/401"},"Unauthorized")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc778\ud55c \uc0c1\ud0dc\uac00 \uc544\ub2cc \uc0c1\ud0dc\uc5d0\uc11c \uc778\uc99d\uc774 \ud544\uc694\ud55c API\uc5d0 \uc811\uadfc\ud560 \uacbd\uc6b0 \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \ub85c\uadf8\uc778\uc774 \uc2e4\ud328\ud560 \uacbd\uc6b0\uc5d0\ub3c4 \ubc1c\uc0dd\ud569\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"403")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/docs/Web/HTTP/Status/403"},"Forbidden")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790\uac00 \ub85c\uadf8\uc778\uc744 \ud588\uc9c0\ub9cc API\ub97c \uc2e4\ud589\ud558\uae30 \uc704\ud55c \uad8c\ud55c\uc774 \ubd80\uc871\ud560 \ub54c \ubc1c\uc0dd\ud569\ub2c8\ub2e4.",(0,r.kt)("br",null),"\uc608\ub97c \ub4e4\uc5b4 \ud55c \uc0ac\uc6a9\uc790\uac00 \ub2e4\ub978 \uc0ac\uc6a9\uc790\uac00 \uc791\uc131\ud55c \uae00\uc744 \uc9c0\uc6b0\ub824\uace0 \ud55c\ub2e4\uba74 \ud574\ub2f9 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"404")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/docs/Web/HTTP/Status/404"},"Not Found")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc694\uccad\ud55c \uac12\uc774 \uc5c6\uc744 \ub54c \ubc1c\uc0dd\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc791\uc131\ub41c \uc801 \uc5c6\uac70\ub098 \uc0ad\uc81c\ub41c \uae00\uc744 \uc870\ud68c\ud558\ub824 \ud55c\ub2e4\uba74 \ud574\ub2f9 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"500")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/docs/Web/HTTP/Status/500"},"Internal Server Error")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc11c\ubc84\uc5d0\uc11c \uc5d0\ub7ec\ub97c \uc801\uc808\ud788 \ucc98\ub9ac\ud558\uc9c0 \ubabb\ud588\uc744 \ub54c \ubc1c\uc0dd\ud569\ub2c8\ub2e4.")))),(0,r.kt)("h3",{id:"error-type"},"type"),(0,r.kt)("p",null,"\ud574\ub2f9 \uc5d0\ub7ec \uc885\ub958\ub97c \ub098\ud0c0\ub0b4\ub294 \uace0\uc720\ud558\uace0 \uc77c\uad00\uc801\uc778 \ubb38\uc790\uc5f4\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc5d0\ub7ec \uc885\ub958\ub97c \ud30c\uc545\ud558\uae30 \uc704\ud574\uc11c\ub294 \ud574\ub2f9 \uac12\uc744 \uc544\ub798 \ud45c\uc5d0 \ub9de\uac8c \ube44\uad50\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc5ec\ub7ec \ub2e8\uc5b4\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"PascalCase"),"\ub85c \ud45c\ud604\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\ub798 \ud45c\ub294 \ud3b8\uc758\ub97c \uc704\ud574 \ub113\uc740 \ubc94\uc704\uc758 \uc5d0\ub7ec\ubd80\ud130 \uc881\uc740 \ubc94\uc704\uc758 \uc5d0\ub7ec \uc21c\uc73c\ub85c \ub098\uc5f4\ud569\ub2c8\ub2e4."),(0,r.kt)(l.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"#status"},"Status")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"#payload"},"Payload")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Error")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc54c \uc218 \uc5c6\ub294 \uc885\ub958\uc758 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ServerError")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc11c\ubc84 \ub0b4\ubd80\uc5d0\uc11c \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BadRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc758 \uc694\uccad\uc744 \ucc98\ub9ac\ud558\ub358 \uc911 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"WrongEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \ud638\ucd9c\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RequestInvalid")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc694\uccad\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TokenRequired")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc778\uc99d\uc744 \uc704\ud574 \ud544\uc694\ud55c \ud1a0\ud070\uc774 \ub204\ub77d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TokenInvalid")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc804\ub2ec\ub41c \ud1a0\ud070\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TokenExpired")),(0,r.kt)("td",{parentName:"tr",align:null},"\uc804\ub2ec\ub41c \ud1a0\ud070\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")))))),(0,r.kt)("h3",{id:"payload"},"payload"),(0,r.kt)("p",null,"\ud574\ub2f9 \uc5d0\ub7ec\uc5d0 \ub300\ud55c \ub370\uc774\ud130\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc5b4\ub5a4 \uc5d0\ub7ec \uc885\ub958(",(0,r.kt)("a",{parentName:"p",href:"#error-type"},"type"),")\uc778\uc9c0\uc5d0 \ub530\ub77c \uac12\uc774 \ub2e4\ub974\uba70, \uac12\uc774 \uc5c6\uc744 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uac12\uc774 \uc5c6\ub294 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", \uac12\uc774 \uc788\ub294 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\uc774 \uc544\ub2cc \ub2e4\ub978 \uac12(\uc2e4\uc81c \ub370\uc774\ud130)\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud398\uc774\ub85c\ub4dc \uc5c6\uc74c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T != null")),(0,r.kt)("td",{parentName:"tr",align:null},"\ud398\uc774\ub85c\ub4dc \uc788\uc74c")))),(0,r.kt)("h3",{id:"message"},"message"),(0,r.kt)("p",null,"\uc0ac\ub78c\uc774 \uc77d\uc744 \uc218 \uc788\ub294 \ud615\ud0dc\uc758 \ubb38\uc790\uc5f4 \uc5d0\ub7ec \uba54\uc138\uc9c0\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\ud574\ub2f9 \uc5d0\ub7ec \uba54\uc138\uc9c0\ub97c \ud30c\uc2f1\ud558\uc9c0 \ub9c8\uc138\uc694."),(0,r.kt)("p",{parentName:"admonition"},"\uc5d0\ub7ec\uc758 \uc885\ub958\ub294 ",(0,r.kt)("a",{parentName:"p",href:"#error-type"},"type"),"\uc73c\ub85c \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}k.isMDXComponent=!0}}]);