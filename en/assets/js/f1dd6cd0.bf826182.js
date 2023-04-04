"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[109],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,h=d["".concat(o,".").concat(c)]||d[c]||s[c]||i;return a?n.createElement(h,p(p({ref:t},u),{},{components:a})):n.createElement(h,p({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27215:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={date:"2023-01-05T20:00",authors:["czy88840616"]},p="v3.9.9",l={permalink:"/en/changelog/v3.9.9",source:"@site/changelog/source/v3.9.9.md",title:"v3.9.9",description:"Bug Fix",date:"2023-01-05T20:00:00.000Z",formattedDate:"January 5, 2023",tags:[],hasTruncateMarker:!0,authors:[{name:"Harry Chen",alias:"czy88840616",url:"https://github.com/czy88840616",imageURL:"https://github.com/czy88840616.png",key:"czy88840616"}],frontMatter:{date:"2023-01-05T20:00",authors:["czy88840616"]},prevItem:{title:"v3.10.0",permalink:"/en/changelog/v3.10.0"},nextItem:{title:"v3.9.8",permalink:"/en/changelog/v3.9.8"},listPageLink:"/en/changelog/page/2"},o={authorsImageUrls:[void 0]},m=[{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:2},{value:"\ud83d\udce6 Dependencies",id:"-dependencies",level:2},{value:"Committers: 1",id:"committers-1",level:2}],u={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"web-express"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"web-koa"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"web"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2629"},"#2629")," fix: use ctx.traceId with otel (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))),(0,r.kt)("h2",{id:"-dependencies"},"\ud83d\udce6 Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mikro"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2638"},"#2638")," chore(deps): update mikro-orm monorepo to v5.6.4 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2613"},"#2613")," chore(deps): update mikro-orm monorepo to v5.6.3 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},"Other",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2633"},"#2633")," chore(deps): update dependency @types/jest to v29.2.5 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2616"},"#2616")," chore(deps): update dependency @types/node to v16.18.11 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2619"},"#2619")," chore(deps): update dependency lerna to v6.3.0 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2617"},"#2617")," chore(deps): update dependency @vercel/ncc to v0.36.0 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grpc"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2635"},"#2635")," fix(deps): update dependency @grpc/grpc-js to v1.8.1 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"web-koa"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2636"},"#2636")," fix(deps): update dependency koa to v2.14.1 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rabbitmq"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2634"},"#2634")," fix(deps): update dependency amqp-connection-manager to v4.1.10 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mock"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ws"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2637"},"#2637")," fix(deps): update dependency ws to v8.11.0 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"casbin-redis-adapter"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"casbin-typeorm-adapter"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"casbin"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2632"},"#2632")," fix(deps): update dependency casbin to v5.20.1 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"grpc"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mock"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rabbitmq"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"socketio"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"web-express"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"web-koa"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"web"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ws"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2618"},"#2618")," chore(deps): update dependency fs-extra to v10.1.0 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mock"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rabbitmq"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2615"},"#2615")," chore(deps): update dependency @types/amqplib to v0.10.1 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bootstrap"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"mock"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"socketio"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2612"},"#2612")," fix(deps): update socket.io packages to v4.5.4 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mongoose"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"typegoose"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2620"},"#2620")," chore(deps): update dependency mongoose to v6.8.2 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sequelize"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2621"},"#2621")," chore(deps): update dependency sequelize to v6.28.0 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"typegoose"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2614"},"#2614")," chore(deps): update dependency @typegoose/typegoose to v9.13.2 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mock"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2610"},"#2610")," fix(deps): update dependency supertest to v6.3.3 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tablestore"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2611"},"#2611")," fix(deps): update dependency tablestore to v5.3.1 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cos"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2609"},"#2609")," fix(deps): update dependency cos-nodejs-sdk-v5 to v2.11.19 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"passport"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2608"},"#2608")," chore(deps): update dependency passport-jwt to v4.0.1 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"axios"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"http-proxy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/pull/2604"},"#2604")," fix(deps): update dependency axios to v1.2.2 (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apps/renovate"},"@renovate[bot]"),")")))),(0,r.kt)("h2",{id:"committers-1"},"Committers: 1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Harry Chen (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/czy88840616"},"@czy88840616"),")")))}s.isMDXComponent=!0}}]);