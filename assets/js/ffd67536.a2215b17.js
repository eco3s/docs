"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7394],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});r(9496);var n=r(9613);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}const l={title:"GET /users/{id}",tags:["GET"]},i=void 0,s={unversionedId:"api/users/get-user",id:"api/users/get-user",title:"GET /users/{id}",description:"id\ub97c \ud1b5\ud574 \ud2b9\uc815 \uc720\uc800\ub97c \uac00\uc838\uc635\ub2c8\ub2e4.",source:"@site/docs/api/users/get-user.md",sourceDirName:"api/users",slug:"/api/users/get-user",permalink:"/docs/api/users/get-user",draft:!1,tags:[{label:"GET",permalink:"/docs/tags/get"}],version:"current",frontMatter:{title:"GET /users/{id}",tags:["GET"]},sidebar:"sidebar",previous:{title:"GET /users",permalink:"/docs/api/users/get-users"},next:{title:"PATCH /users/{id}",permalink:"/docs/api/users/edit-user"}},o={},p=[{value:"Request",id:"request",level:2},{value:"Parameter",id:"parameter",level:3},{value:"Response",id:"response",level:2},{value:"Success",id:"success",level:3},{value:"Possible Errors",id:"possible-errors",level:3}],u={toc:p};function c({components:e,...t}){return(0,n.kt)("wrapper",a({},u,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"id"),"\ub97c \ud1b5\ud574 \ud2b9\uc815 \uc720\uc800\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."),(0,n.kt)("h2",a({},{id:"request"}),"Request"),(0,n.kt)("h3",a({},{id:"parameter"}),"Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Note"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("a",a({parentName:"td"},{href:"/docs/types/semantic/uuid"}),"UUID")),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\ucc3e\uace0\uc790 \ud558\ub294 \uc720\uc800\uc758 UUID"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},'"R_-bYVt79M-2yroviNPei"'))))),(0,n.kt)("h2",a({},{id:"response"}),"Response"),(0,n.kt)("h3",a({},{id:"success"}),"Success"),(0,n.kt)("admonition",a({},{title:"inheritance",type:"info"}),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",a({parentName:"p"},{href:"/docs/types/schema/user"}),"User")," \ub97c \uc0c1\uc18d\ud569\ub2c8\ub2e4."),(0,n.kt)("p",{parentName:"admonition"},"User\uac00 \uac00\uc9c0\uace0 \uc788\ub294 \ubaa8\ub4e0 \ud544\ub4dc\ub97c \uac00\uc9c0\uba70, \ucd94\uac00\uc801\uc73c\ub85c \uc544\ub798 \ud544\ub4dc\ub97c \uac00\uc9d1\ub2c8\ub2e4.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Note"),(0,n.kt)("th",a({parentName:"tr"},{align:null}),"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",a({parentName:"tr"},{align:null}),"recentPosts"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"Array<",(0,n.kt)("a",a({parentName:"td"},{href:"/docs/types/schema/post-preview"}),"PostPreview"),">"),(0,n.kt)("td",a({parentName:"tr"},{align:null}),"\ud574\ub2f9 \uc720\uc800\uac00 \ucd5c\uadfc\uc5d0 \uc4f4 \uae00\ub4e4\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,n.kt)("td",a({parentName:"tr"},{align:null}))))),(0,n.kt)("h3",a({},{id:"possible-errors"}),"Possible Errors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"400"),(0,n.kt)("li",{parentName:"ul"},"404")))}c.isMDXComponent=!0}}]);