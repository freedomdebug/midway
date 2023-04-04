"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[39225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Midway is a Node.js framework developed by Alibaba-Taobao front-end architecture team based on the concept of gradual development. Through self-developed dependency injection containers and various upper-level modules, Midway combines solutions suitable for different scenarios.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/en/docs/intro",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"common",next:{title:"Quick Start",permalink:"/en/docs/quick_guide"}},s={},p=[{value:"Why Midway",id:"why-midway",level:2},{value:"Our strengths",id:"our-strengths",level:2},{value:"Multi-programming paradigm",id:"multi-programming-paradigm",level:2},{value:"Object-oriented (OOP + Class + IoC)",id:"object-oriented-oop--class--ioc",level:3},{value:"Functional formula (FP + Function + Hooks)",id:"functional-formula-fp--function--hooks",level:3},{value:"Environmental preparation",id:"environmental-preparation",level:2},{value:"Correct questions",id:"correct-questions",level:2},{value:"Q &amp; A sharing group",id:"q--a-sharing-group",level:2},{value:"Official publicity channels",id:"official-publicity-channels",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Midway is a Node.js framework developed by Alibaba-Taobao front-end architecture team based on the concept of gradual development. Through self-developed dependency injection containers and various upper-level modules, Midway combines solutions suitable for different scenarios."),(0,a.kt)("p",null,"Midway is based on TypeScript development, combines two programming paradigms: ",(0,a.kt)("inlineCode",{parentName:"p"},"object-oriented (OOP + Class + IoC)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"functional (FP + Function + Hooks)"),", and supports various scenarios such as Web/full stack/microservice/RPC / Socket / Serverless, and is committed to providing users with a simple, easy-to-use and reliable Node.js server research and development experience."),(0,a.kt)("h2",{id:"why-midway"},"Why Midway"),(0,a.kt)("p",null,"There are many similar frameworks in the community, so why do you need Midway?"),(0,a.kt)("p",null,"There are three reasons:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Midway is a framework that has been continuously developed in Ali. Before, egg was used as the underlying framework and needed an application-oriented framework to interface with group scenarios."),(0,a.kt)("li",{parentName:"ol"},"Full use of TypeScript is the trend in the future, and future-oriented iteration and research and development are the requirements of architecture group innovation."),(0,a.kt)("li",{parentName:"ol"},"Although the community already has a framework like nest, the maintenance, collaboration, and modification of these products will be restricted by commercial products, and it is impossible to achieve rapid iteration of requirements and security guarantees. The overall research and development concept is also different from ours. For this reason, we need a self-developed framework system")),(0,a.kt)("h2",{id:"our-strengths"},"Our strengths"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Midway framework is a Node.js framework that has been used internally for more than 5 years, backed by a team with long-term investment and continuous maintenance."),(0,a.kt)("li",{parentName:"ol"},"Has been tested in the annual promotion scene, stability need not worry"),(0,a.kt)("li",{parentName:"ol"},"Rich components and scalability, such as database, cache, timing tasks, process model, deployment and support for new scenarios such as Web,Socket and even Serverless"),(0,a.kt)("li",{parentName:"ol"},"The integrated calling scheme can be conveniently and quickly developed with front-end pages."),(0,a.kt)("li",{parentName:"ol"},"Good TypeScript definition support"),(0,a.kt)("li",{parentName:"ol"},"Localized documentation and communication are easy and simple.")),(0,a.kt)("h2",{id:"multi-programming-paradigm"},"Multi-programming paradigm"),(0,a.kt)("p",null,"Midway supports two programming paradigms: object-oriented and functional. You can choose different programming paradigms to develop applications according to actual research and development needs."),(0,a.kt)("h3",{id:"object-oriented-oop--class--ioc"},"Object-oriented (OOP + Class + IoC)"),(0,a.kt)("p",null,"Midway supports the object-oriented programming paradigm and provides a more elegant architecture for applications."),(0,a.kt)("p",null,"The following is an example of developing routes based on object-oriented."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\nimport { Controller, Get } from '@midwayjs/core';\nimport { Context } from '@midwayjs/koa';\n\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx: Context\n\n  @Get('/')\n  async home() {\n    return {\n      message: 'Hello Midwayjs!',\n      query: this.ctx.ip\n    }\n  }\n}\n")),(0,a.kt)("h3",{id:"functional-formula-fp--function--hooks"},"Functional formula (FP + Function + Hooks)"),(0,a.kt)("p",null,"Midway also supports a functional programming paradigm that provides higher R & D efficiency for applications."),(0,a.kt)("p",null,"The following is an example of developing a routing interface based on a function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/api/index.ts\n\nimport { useContext } from '@midwayjs/hooks'\nimport { Context } from '@midwayjs/koa';\n\nexport default async function home () {\n  const ctx = useContext<Context>()\n\n  return {\n    message: 'Hello Midwayjs!',\n    query: ctx.ip\n  }\n}\n")),(0,a.kt)("h2",{id:"environmental-preparation"},"Environmental preparation"),(0,a.kt)("p",null,"Please install Node.js environment and npm in advance to run Midway. cnpm can be used in China."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Operating system: supports macOS,Linux,Windows"),(0,a.kt)("li",{parentName:"ul"},"Running environment: We recommend that you select ",(0,a.kt)("a",{parentName:"li",href:"http://nodejs.org/"},"LTS"),". The minimum requirement is ",(0,a.kt)("strong",{parentName:"li"},"12.11.0"),".")),(0,a.kt)("p",null,"After continuous iteration, Midway's version requirements are as follows:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Midway Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Node Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">=v3.9.0"),(0,a.kt)("td",{parentName:"tr",align:null},">= v12.11.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"< 3.9.0"),(0,a.kt)("td",{parentName:"tr",align:null},">= v12.0.0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"> 2.0.0"),(0,a.kt)("td",{parentName:"tr",align:null},">= v10.0.0")))),(0,a.kt)("p",null,"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"how_to_install_nodejs"},"How to install the Node.js environment"),"."),(0,a.kt)("h2",{id:"correct-questions"},"Correct questions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705Ask a question on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues"},"github issue"),", which can be traced, precipitated, and Star",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Describe your problem and provide as detailed a reproduction method as possible, framework version, scenario (Serverless or application)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Provide error screenshots, stack information and minimum reproduction repo as much as possible.")))))),(0,a.kt)("h2",{id:"q--a-sharing-group"},"Q & A sharing group"),(0,a.kt)("p",null,"There will be enthusiastic friends in the group and new versions will be released and pushed."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01F2EYhK1t290OXO4am_!!6000000005843-0-tps-3916-3220.jpg",alt:"image.png"})),(0,a.kt)("h2",{id:"official-publicity-channels"},"Official publicity channels"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://space.bilibili.com/1746017680"},"Bilibili")," provides updated information and tutorials.")))}d.isMDXComponent=!0}}]);