"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),h=a,y=s["".concat(c,".").concat(h)]||s[h]||m[h]||l;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},60681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={date:"2022-12-19T20:00",authors:["czy88840616","lhcn"]},i="v3.9.3",o={permalink:"/changelog/v3.9.3",source:"@site/changelog/source/v3.9.3.md",title:"v3.9.3",description:"Bug Fix",date:"2022-12-19T20:00:00.000Z",formattedDate:"2022\u5e7412\u670819\u65e5",tags:[],hasTruncateMarker:!0,authors:[{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"},{name:"imlh.cn",alias:"lhcn",url:"https://github.com/lhcn",imageURL:"https://github.com/lhcn.png",key:"lhcn"}],frontMatter:{date:"2022-12-19T20:00",authors:["czy88840616","lhcn"]},prevItem:{title:"v3.9.4",permalink:"/changelog/v3.9.4"},nextItem:{title:"v3.9.2",permalink:"/changelog/v3.9.2"},listPageLink:"/changelog/page/2"},c={authorsImageUrls:[void 0,void 0]},p=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udc85 Polish",id:"-polish",level:2},{value:"Committers: 2",id:"committers-2",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"swagger"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2547"},"#2547")," fix: swagger query object (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lhcn"},"@lhcn"),")")))),(0,a.kt)("h2",{id:"-polish"},"\ud83d\udc85 Polish"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"typeorm"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2587"},"#2587")," feat: support typeorm migrate cli (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,a.kt)("h2",{id:"committers-2"},"Committers: 2"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Harry Chen (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,a.kt)("li",{parentName:"ul"},"imlh.cn (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/lhcn"},"@lhcn"),")")))}m.isMDXComponent=!0}}]);