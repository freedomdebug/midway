"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43481],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={date:"2021-01-10T20:00"},i="v2.6.10",c={permalink:"/en/changelog/v2.6.10",source:"@site/changelog/source/v2.6.10.md",title:"v2.6.10",description:"Bug Fixes",date:"2021-01-10T20:00:00.000Z",formattedDate:"January 10, 2021",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2021-01-10T20:00"},prevItem:{title:"v2.6.11",permalink:"/en/changelog/v2.6.11"},nextItem:{title:"v2.6.9",permalink:"/en/changelog/v2.6.9"},listPageLink:"/en/changelog/page/9"},l={authorsImageUrls:[]},s=[{value:"Bug Fixes",id:"bug-fixes",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bootstrap missing create logger (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/797"},"#797"),") (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/f7aac5fcd9a59a3a36856af58c17ee1d0c9dfca4"},"f7aac5f"),")"),(0,a.kt)("li",{parentName:"ul"},"disable logrotator and avoid file exists error (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/798"},"#798"),") (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/64ac85c68bf479e9474de9ac8f22c491d8bfce39"},"64ac85c"),")")))}u.isMDXComponent=!0}}]);