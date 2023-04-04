"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),l=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(m,".").concat(d)]||u[d]||p[d]||i;return r?a.createElement(f,o(o({ref:t},s),{},{components:r})):a.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={date:"2022-04-07T20:00"},o="v3.3.0",c={permalink:"/en/changelog/v3.3.0",source:"@site/changelog/source/v3.3.0.md",title:"v3.3.0",description:"Bug Fixes",date:"2022-04-07T20:00:00.000Z",formattedDate:"April 7, 2022",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-04-07T20:00"},prevItem:{title:"v3.3.1",permalink:"/en/changelog/v3.3.1"},nextItem:{title:"v3.2.2",permalink:"/en/changelog/v3.2.2"},listPageLink:"/en/changelog/page/4"},m={authorsImageUrls:[]},l=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3}],s={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"mapping prod and test config in object mode (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1886"},"#1886"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/d00f622f2a2dc095c8e829b862f2ac155a8e6c91"},"d00f622"),")"),(0,n.kt)("li",{parentName:"ul"},"mock when app not start (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1876"},"#1876"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/bd32f3e3e366f5f81c05bfa2b00530ea5ec95744"},"bd32f3e"),")")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add ApiExtraModel && fix items bug (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1873"},"#1873"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/40cce3be1d8ebd5b2723aff2e6d6d488024c5a56"},"40cce3b"),")"),(0,n.kt)("li",{parentName:"ul"},"add koa init options (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1885"},"#1885"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/93d4aed45bc45c2742ceb2bfb990edeaa59d7187"},"93d4aed"),")"),(0,n.kt)("li",{parentName:"ul"},"upgrade ioredis to v5 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1893"},"#1893"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/42b3dc723cd291d37f7fd40da90cf031a45f6d78"},"42b3dc7"),")")))}p.isMDXComponent=!0}}]);