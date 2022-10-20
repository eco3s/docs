"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3405],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});n(9496);var r=n(9613);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const i={tags:["Semantic Types","string"]},o="Token",p={unversionedId:"types/semantic/token",id:"types/semantic/token",title:"Token",description:"JWT \ud1a0\ud070\uc744 \ub098\ud0c0\ub0b4\ub294 \uc790\ub8cc\ud615\uc785\ub2c8\ub2e4.",source:"@site/docs/types/semantic/token.md",sourceDirName:"types/semantic",slug:"/types/semantic/token",permalink:"/docs/types/semantic/token",draft:!1,tags:[{label:"Semantic Types",permalink:"/docs/tags/semantic-types"},{label:"string",permalink:"/docs/tags/string"}],version:"current",frontMatter:{tags:["Semantic Types","string"]},sidebar:"sidebar",previous:{title:"UUID",permalink:"/docs/types/semantic/uuid"},next:{title:"Date",permalink:"/docs/types/semantic/date"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Limitations",id:"limitations",level:2}],l={toc:c};function u({components:e,...t}){return(0,r.kt)("wrapper",a({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"token"}),"Token"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://jwt.io"}),"JWT")," \ud1a0\ud070\uc744 \ub098\ud0c0\ub0b4\ub294 \uc790\ub8cc\ud615\uc785\ub2c8\ub2e4."),(0,r.kt)("admonition",a({},{title:"inheritance",type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"\uae30\ubcf8 \uc790\ub8cc\ud615\uc774 \uc544\ub2cc, ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/types/primitive/string"}),"string")," \uc744 \uc0c1\uc18d\ud558\ub294 ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/types/semantic/"}),"semantic type"),"\uc785\ub2c8\ub2e4.")),(0,r.kt)("h2",a({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"\uc8fc\ub85c \uc0ac\uc6a9\uc790 \uc778\uc99d\uc5d0 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc778\uc99d\uc744 \uc704\ud574\uc11c\ub294 \ud574\ub2f9 \uac12\uc744 HTTP\uc758 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization"}),"Authorization \ud5e4\ub354"),"\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer <\ud1a0\ud070 \uac12>")," \ud615\uc2dd\uc73c\ub85c \ub123\uc5b4\uc11c \uc694\uccad\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("h2",a({},{id:"limitations"}),"Limitations"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/types/primitive/string"}),"string")," \uc744 \uc0c1\uc18d\ubc1b\uae30 \ub54c\ubb38\uc5d0, \uc5ed\uc2dc \uac19\uc740 \uc81c\uc57d\uc870\uac74\uc744 \uac00\uc9d1\ub2c8\ub2e4."),(0,r.kt)("p",null,"JWT \ud1a0\ud070\uc740 \ub2e4\uc74c \uc81c\uc57d\uc870\uac74\uc744 \ub9cc\uc871\uc2dc\ucf1c\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-javascript"}),"/^[\\w-]*\\.[\\w-]*\\.[\\w-]*$/\n")),(0,r.kt)("p",null,"\ub9cc\uc57d \uc804\ub2ec\ub41c \ud1a0\ud070\uc774 \ud574\uc11d \ubd88\uac00\ub2a5\ud558\ub2e4\uba74 ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/types/error/#TokenInvalid"}),"TokenInvalid")," \uc5d0\ub7ec\ub97c \ubc18\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",a({},{type:"caution"}),(0,r.kt)("p",{parentName:"admonition"},"UUID\ub97c \ubc1b\ub294 API \ubb38\uc11c\uc5d0\uc11c\ub294 \ubcc4\ub3c4\ub85c \uc81c\uc57d \uc870\uac74\uc744 \uba85\uc2dc\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")))}u.isMDXComponent=!0}}]);