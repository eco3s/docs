"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5494],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1786:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(9496),i=r(5924),o=r(7251),a=r(71),c=r(6956),l=r(7914);const s="cardContainer_etHn",p="cardTitle_WgFs",m="cardDescription_smS5";function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function d(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",p),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},5978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(6600),i=(r(9496),r(9613)),o=r(1786);const a={tags:["Category"]},c="Primitive Types",l={unversionedId:"types/primitive/README",id:"types/primitive/README",title:"Primitive Types",description:"\uac00\uc7a5 \uae30\ubcf8\uc801\uc774\uba70, \ub2e4\ub978 \uc790\ub8cc\ud615\uc73c\ub85c \ucabc\uac1c\uc9c8 \uc218 \uc5c6\ub294 \uc6d0\uc790 \ud0c0\uc785\ub4e4\uc785\ub2c8\ub2e4.",source:"@site/docs/types/primitive/README.md",sourceDirName:"types/primitive",slug:"/types/primitive/",permalink:"/docs/types/primitive/",draft:!1,tags:[{label:"Category",permalink:"/docs/tags/category"}],version:"current",frontMatter:{tags:["Category"]},sidebar:"sidebar",previous:{title:"Types",permalink:"/docs/types/"},next:{title:"boolean",permalink:"/docs/types/primitive/boolean"}},s={},p=[{value:"Naming Convention",id:"naming-convention",level:2},{value:"List",id:"list",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"primitive-types"},"Primitive Types"),(0,i.kt)("p",null,"\uac00\uc7a5 \uae30\ubcf8\uc801\uc774\uba70, \ub2e4\ub978 \uc790\ub8cc\ud615\uc73c\ub85c \ucabc\uac1c\uc9c8 \uc218 \uc5c6\ub294 \uc6d0\uc790 \ud0c0\uc785\ub4e4\uc785\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub300\ud45c\uc801\uc73c\ub85c \uc815\uc218, \uc18c\uc218, \ubb38\uc790\uc5f4 \ub4f1\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"naming-convention"},"Naming Convention"),(0,i.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c \uc18c\ubb38\uc790\ub85c \uc2dc\uc791\ud558\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"camelCase")," \uc774\ub984\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"list"},"List"),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);