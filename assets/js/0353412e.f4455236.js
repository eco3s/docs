"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={tags:["POST"]},i="POST /signin",o={unversionedId:"api/auth/signin",id:"api/auth/signin",title:"POST /signin",description:"\uc8fc\uc5b4\uc9c4 \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uc0ac\uc6a9\ud574 \ub85c\uadf8\uc778\ud569\ub2c8\ub2e4.",source:"@site/docs/api/auth/signin.md",sourceDirName:"api/auth",slug:"/api/auth/signin",permalink:"/docs/api/auth/signin",draft:!1,tags:[{label:"POST",permalink:"/docs/tags/post"}],version:"current",frontMatter:{tags:["POST"]},sidebar:"sidebar",previous:{title:"POST /signup",permalink:"/docs/api/auth/signup"},next:{title:"GET /users",permalink:"/docs/api/users/get-users"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Body",id:"body",level:3},{value:"Response",id:"response",level:2},{value:"Success",id:"success",level:3},{value:"Possible Errors",id:"possible-errors",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-signin"},"POST /signin"),(0,a.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uc0ac\uc6a9\ud574 \ub85c\uadf8\uc778\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("h3",{id:"body"},"Body"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Note"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/types/semantic/token"},"Token")),(0,a.kt)("td",{parentName:"tr",align:null},"\uc804\ub2ec\ud560 ",(0,a.kt)("inlineCode",{parentName:"td"},"id_token")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"Firebase \uc778\uc99d\uc744 \ud1b5\ud574 \ubc1b\uc740 ",(0,a.kt)("inlineCode",{parentName:"p"},"id_token"),"\uc744 \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("h3",{id:"success"},"Success"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Note"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"token"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/types/semantic/token"},"Token")),(0,a.kt)("td",{parentName:"tr",align:null},"\ubc1c\uae09\ub41c \uc778\uc99d \ud1a0\ud070"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"user"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/types/schema/user"},"User")),(0,a.kt)("td",{parentName:"tr",align:null},"\uc0dd\uc131\ub41c \uc720\uc800 \uc815\ubcf4"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"\uc778\uc99d \ud1a0\ud070\uacfc \ud568\uacc4 \uc0dd\uc131\ub41c \uc720\uc800 \uc815\ubcf4\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"possible-errors"},"Possible Errors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"400"),(0,a.kt)("li",{parentName:"ul"},"401")))}c.isMDXComponent=!0}}]);