"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32514],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=u(n),g=r,h=s["".concat(p,".").concat(g)]||s[g]||m[g]||i;return n?a.createElement(h,o(o({ref:e},c),{},{components:n})):a.createElement(h,o({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},51797:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={date:"2022-11-26T20:00",authors:["czy88840616","waitingsong","xnng","yantze"]},o="v3.8.2",l={permalink:"/changelog/v3.8.2",source:"@site/changelog/source/v3.8.2.md",title:"v3.8.2",description:"Bug Fix",date:"2022-11-26T20:00:00.000Z",formattedDate:"2022\u5e7411\u670826\u65e5",tags:[],hasTruncateMarker:!0,authors:[{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"},{name:"waiting",alias:"waitingsong",url:"https://github.com/waitingsong",imageURL:"https://github.com/waitingsong.png",key:"waitingsong"},{name:"xnng",alias:"xnng",url:"https://github.com/xnng",imageURL:"https://github.com/xnng.png",key:"xnng"},{name:"zhi",alias:"yantze",url:"https://github.com/yantze",imageURL:"https://github.com/yantze.png",key:"yantze"}],frontMatter:{date:"2022-11-26T20:00",authors:["czy88840616","waitingsong","xnng","yantze"]},prevItem:{title:"v3.8.3",permalink:"/changelog/v3.8.3"},nextItem:{title:"v3.8.1",permalink:"/changelog/v3.8.1"},listPageLink:"/changelog/page/2"},p={authorsImageUrls:[void 0,void 0,void 0,void 0]},u=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udc85 Polish",id:"-polish",level:2},{value:"\ud83d\udcdd Documentation",id:"-documentation",level:2},{value:"Committers: 4",id:"committers-4",level:2}],c={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sequelize"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2525"},"#2525")," fix: sequelize inject data source forgot to export (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,r.kt)("h2",{id:"-polish"},"\ud83d\udc85 Polish"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swagger"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2518"},"#2518")," fix: swagger global prefix without path (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,r.kt)("h2",{id:"-documentation"},"\ud83d\udcdd Documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2516"},"#2516")," docs: update the configuration description of AccessKey (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/yantze"},"@yantze"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2515"},"#2515")," docs(site): update awesome_midway.md (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/waitingsong"},"@waitingsong"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2514"},"#2514")," doc(consul.md): fix port type error (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/xnng"},"@xnng"),")")),(0,r.kt)("h2",{id:"committers-4"},"Committers: 4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Harry Chen (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/xnng"},"@xnng")),(0,r.kt)("li",{parentName:"ul"},"waiting (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/waitingsong"},"@waitingsong"),")"),(0,r.kt)("li",{parentName:"ul"},"zhi (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/yantze"},"@yantze"),")")))}m.isMDXComponent=!0}}]);