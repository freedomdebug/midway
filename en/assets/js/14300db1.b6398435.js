"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[39050],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),l=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(a),f=n,d=u["".concat(m,".").concat(f)]||u[f]||p[f]||i;return a?r.createElement(d,c(c({ref:t},s),{},{components:a})):r.createElement(d,c({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const i={date:"2022-03-15T19:00"},c="v3.1.2",o={permalink:"/en/changelog/v3.1.2",source:"@site/changelog/source/v3.1.2.md",title:"v3.1.2",description:"Bug Fixes",date:"2022-03-15T19:00:00.000Z",formattedDate:"March 15, 2022",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-03-15T19:00"},prevItem:{title:"v3.1.3",permalink:"/en/changelog/v3.1.3"},nextItem:{title:"v3.1.1",permalink:"/en/changelog/v3.1.1"},listPageLink:"/en/changelog/page/5"},m={authorsImageUrls:[]},l=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3}],s={toc:l};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add a inject for ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/inject"},"@inject")," logger in singleton scope (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1816"},"#1816"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/4e9cf96793acff829a2a8ca6598081cc331d6d25"},"4e9cf96"),")"),(0,n.kt)("li",{parentName:"ul"},"agent load config (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1815"},"#1815"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/95a650544b921d6285c1beb97c7df7a0917ea4fb"},"95a6505"),")"),(0,n.kt)("li",{parentName:"ul"},"consule config definition (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1804"},"#1804"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/2a0d57c183f3fad22fe878f538a26182291b7b44"},"2a0d57c"),")"),(0,n.kt)("li",{parentName:"ul"},"remove swagger validator url (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1813"},"#1813"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/ded291a308f81961f9f3c2a9c21b5862d7d73ca6"},"ded291a"),")"),(0,n.kt)("li",{parentName:"ul"},"worker starter origin context (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1814"},"#1814"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/0168bcceef0f7cf39a8f0d903c24496f5f4f056f"},"0168bcc"),")")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add otel component (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1808"},"#1808"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/8fda71e82cedfcf05e590780c55fbff10c4132cb"},"8fda71e"),")"),(0,n.kt)("li",{parentName:"ul"},"security helper (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1795"},"#1795"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/cc8a148bf7a2ea1351d3912084de2ad755c465e7"},"cc8a148"),")")))}p.isMDXComponent=!0}}]);