"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10310],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={slug:"release/3.7.0",title:"Release 3.7.0",authors:["harry"],tags:["release"]},o=void 0,i={permalink:"/blog/release/3.7.0",source:"@site/blog/2022-10-29-release-3-7.md",title:"Release 3.7.0",description:"Features",date:"2022-10-29T00:00:00.000Z",formattedDate:"2022\u5e7410\u670829\u65e5",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:2.585,hasTruncateMarker:!1,authors:[{name:"Harry Chen",title:"Maintainer of Midway",url:"https://github.com/czy88840616",imageURL:"https://avatars.githubusercontent.com/u/418820",key:"harry"}],frontMatter:{slug:"release/3.7.0",title:"Release 3.7.0",authors:["harry"],tags:["release"]},nextItem:{title:"Jest v29 \u66f4\u65b0",permalink:"/blog/jest_update"}},p={authorsImageUrls:[void 0]},u=[{value:"Features",id:"features",level:2},{value:"1\u3001\u652f\u6301\u4e86\u81ea\u5b9a\u4e49\u7684 web \u53c2\u6570\u88c5\u9970\u5668",id:"1\u652f\u6301\u4e86\u81ea\u5b9a\u4e49\u7684-web-\u53c2\u6570\u88c5\u9970\u5668",level:3},{value:"2\u3001koa \u7ec4\u4ef6\u65b0\u589e <code>serverTimeout</code> \u914d\u7f6e",id:"2koa-\u7ec4\u4ef6\u65b0\u589e-servertimeout-\u914d\u7f6e",level:3},{value:"3\u3001\u591a\u6570\u636e\u6e90\u65f6\u63d0\u4f9b\u4e00\u4e2a\u9ed8\u8ba4\u6570\u636e\u6e90\u7684\u9009\u9879",id:"3\u591a\u6570\u636e\u6e90\u65f6\u63d0\u4f9b\u4e00\u4e2a\u9ed8\u8ba4\u6570\u636e\u6e90\u7684\u9009\u9879",level:3},{value:"3\u3001\u65b0\u589e\u4e86\u9a8c\u8bc1\u7801\u7ec4\u4ef6",id:"3\u65b0\u589e\u4e86\u9a8c\u8bc1\u7801\u7ec4\u4ef6",level:3},{value:"Bugfix",id:"bugfix",level:2},{value:"\u5176\u4ed6\u7684\u66f4\u65b0",id:"\u5176\u4ed6\u7684\u66f4\u65b0",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("h3",{id:"1\u652f\u6301\u4e86\u81ea\u5b9a\u4e49\u7684-web-\u53c2\u6570\u88c5\u9970\u5668"},"1\u3001\u652f\u6301\u4e86\u81ea\u5b9a\u4e49\u7684 web \u53c2\u6570\u88c5\u9970\u5668"),(0,a.kt)("p",null,"\u5728 Web \u573a\u666f\u4e0b\uff0c\u6211\u4eec\u5df2\u7ecf\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Query"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"@Body")," \u7b49\u53c2\u6570\u88c5\u9970\u5668\uff0c\u4f46\u662f\u7528\u4e8e\u4f9d\u65e7\u6709\u81ea\u5b9a\u4e49\u7684\u9700\u6c42\uff0c\u5982\u679c\u8fd9\u4e2a\u65f6\u5019\u901a\u8fc7\u73b0\u6709\u7684\u53c2\u6570\u88c5\u9970\u5668\u53bb\u5b9a\u4e49\u4f1a\u8f83\u4e3a\u7e41\u7410\u3002"),(0,a.kt)("p",null,"\u65b0\u7248\u672c\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5feb\u901f\u5b9a\u4e49\u88c5\u9970\u5668\u7684\u80fd\u529b\uff0c\u4ece\u800c\u53ef\u4ee5\u5feb\u901f\u83b7\u53d6 ctx \u5c5e\u6027\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createRequestParamDecorator } from '@midwayjs/core';\n\n// \u5b9e\u73b0\u88c5\u9970\u5668\nexport const Token = createRequestParamDecorator(ctx => {\n  return ctx.headers.token;\n});\n\n// \u4f7f\u7528\u88c5\u9970\u5668\nexport class UserController {\n  async invoke(@Token() token: string) {\n    console.log(token);\n  }\n}\n")),(0,a.kt)("h3",{id:"2koa-\u7ec4\u4ef6\u65b0\u589e-servertimeout-\u914d\u7f6e"},"2\u3001koa \u7ec4\u4ef6\u65b0\u589e ",(0,a.kt)("inlineCode",{parentName:"h3"},"serverTimeout")," \u914d\u7f6e"),(0,a.kt)("p",null,"\u901a\u8fc7\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"serverTimeout")," \u7684\u503c\uff0c\u53ef\u4ee5\u5b9a\u4e49\u670d\u52a1\u7aef\u8d85\u65f6\u65f6\u95f4\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982 1s \u8d85\u65f6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export const koa = {\n  serverTimeout: 1000,\n}\n")),(0,a.kt)("h3",{id:"3\u591a\u6570\u636e\u6e90\u65f6\u63d0\u4f9b\u4e00\u4e2a\u9ed8\u8ba4\u6570\u636e\u6e90\u7684\u9009\u9879"},"3\u3001\u591a\u6570\u636e\u6e90\u65f6\u63d0\u4f9b\u4e00\u4e2a\u9ed8\u8ba4\u6570\u636e\u6e90\u7684\u9009\u9879"),(0,a.kt)("p",null,"\u539f\u6709 typeorm \u7b49\u6570\u636e\u5e93\uff0c\u5982\u679c\u6307\u5b9a\u4e86\u591a\u4e2a\u6570\u636e\u6e90\uff0c\u4f1a\u9ed8\u8ba4\u4ee5\u6700\u540e\u4e00\u4e2a\u914d\u7f6e\u7684\u6570\u636e\u6e90\u4f5c\u4e3a\u9ed8\u8ba4\u6570\u636e\u6e90\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u6570\u636e\u6e90\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"InjectEntityModel")," \u65f6\u53ef\u4ee5\u4e0d\u6307\u5b9a\u540d\u5b57\u3002"),(0,a.kt)("p",null,"\u65b0\u7248\u672c\u53ef\u4ee5\u901a\u8fc7\u663e\u5f0f\u7684\u914d\u7f6e\u9ed8\u8ba4\u6570\u636e\u6e90\uff0c\u4f7f\u5f97\u8fd9\u4e2a\u884c\u4e3a\u66f4\u53ef\u63a7\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default.ts\nexport const typeorm = {\n  dataSource: {\n    abc: {},\n    bcd: {}\n  },\n  defaultDataSourceName: 'bcd',\n}\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u5728\u4f7f\u7528\u65f6\uff0c\u5982\u679c\u4e0d\u6307\u5b9a ",(0,a.kt)("inlineCode",{parentName:"p"},"InjectEntityModel")," \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u5219\u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"bcd")," \u8fd9\u4e2a dataSource \u4e2d\u67e5\u8be2 Entity\u3002"),(0,a.kt)("h3",{id:"3\u65b0\u589e\u4e86\u9a8c\u8bc1\u7801\u7ec4\u4ef6"},"3\u3001\u65b0\u589e\u4e86\u9a8c\u8bc1\u7801\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7\u65b0\u589e\u7684\u9a8c\u8bc1\u7801\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u751f\u6210\u5728\u767b\u5f55\u4e2d\u5e38\u89c1\u7684\u56fe\u7247\uff0c\u8ba1\u7b97\u8868\u8fbe\u5f0f\u7b49\u7c7b\u578b\u7684\u9a8c\u8bc1\u7801\u3002"),(0,a.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://gw.alicdn.com/imgextra/i4/O1CN014cEzLH23vEniOgoyp_!!6000000007317-2-tps-120-40.png",alt:null})),(0,a.kt)("h2",{id:"bugfix"},"Bugfix"),(0,a.kt)("p",null,"\u4fee\u590d\u4e86\u4e00\u4e2a import \u987a\u5e8f\u4e0d\u4e00\u81f4\uff0c\u5bfc\u81f4\u4e3b\u6846\u67b6\u83b7\u53d6\u9519\u8bef\u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import * as bull from '@midwayjs/bull';\nimport * as koa from '@midwayjs/koa';\n\n@Configuration({\n    imports: [koa, bull]\n})\nexport class MainConfiguration {}\n")),(0,a.kt)("p",null,"\u7531\u4e8e\u5185\u90e8\u521d\u59cb\u5316\u662f\u4f7f\u7528 require \u7684\u5c5e\u6027\uff0c\u5373\u4f7f imports \u7684\u987a\u5e8f\u56fa\u5b9a\uff0c\u5b9e\u9645 bull \u7684 application \u8fd8\u662f\u4f1a\u53d8\u4e3a mainApp\uff0c\u8fd9\u4e2a\u65f6\u5019\u53bb\u5f15\u5165\u4e2d\u95f4\u4ef6\uff0c\u90fd\u4f1a\u52a0\u5230 bull \u4e0a\uff0c\u800c\u4e0d\u662f koa \u4e0a\u3002"),(0,a.kt)("h2",{id:"\u5176\u4ed6\u7684\u66f4\u65b0"},"\u5176\u4ed6\u7684\u66f4\u65b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"prometheus")," \u652f\u6301\u7528\u6237\u5b9a\u4e49 Histogram"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"faas")," \u8c03\u6574\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"triggerFunction")," \u65b9\u6cd5\u7684\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u5e38\u6001\u5316\u4f9d\u8d56\u5347\u7ea7")))}c.isMDXComponent=!0}}]);