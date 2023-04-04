"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=u(n),m=l,c=k["".concat(p,".").concat(m)]||k[m]||d[m]||i;return n?a.createElement(c,r(r({ref:t},s),{},{components:n})):a.createElement(c,r({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},20091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const i={title:"\u8def\u7531"},r=void 0,o={unversionedId:"hooks/hooks_route",id:"version-2.0.0/hooks/hooks_route",title:"\u8def\u7531",description:"Midway Hooks \u7684\u8def\u7531\u673a\u5236\u662f\u6587\u4ef6\u8def\u7531\uff0c\u6211\u4eec\u4f1a\u6839\u636e \u76ee\u5f55/\u6587\u4ef6/\u5bfc\u51fa\u7684\u65b9\u6cd5 \u6765\u5206\u6790\u51fa\u8def\u7531\u914d\u7f6e\u3002\u540c\u65f6\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u914d\u7f6e\u9009\u9879\u3002",source:"@site/versioned_docs/version-2.0.0/hooks/hooks_route.md",sourceDirName:"hooks",slug:"/hooks/hooks_route",permalink:"/en/docs/2.0.0/hooks/hooks_route",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/hooks/hooks_route.md",tags:[],version:"2.0.0",frontMatter:{title:"\u8def\u7531"},sidebar:"hooks",previous:{title:"\u5185\u7f6e Hooks",permalink:"/en/docs/2.0.0/hooks/hooks_builtin"},next:{title:"Web \u4e2d\u95f4\u4ef6",permalink:"/en/docs/2.0.0/hooks/hooks_middleware"}},p={},u=[{value:"\u9ed8\u8ba4\u914d\u7f6e",id:"\u9ed8\u8ba4\u914d\u7f6e",level:2},{value:"2.0 \u7248\u672c",id:"20-\u7248\u672c",level:3},{value:"\u5b57\u6bb5\u89e3\u91ca",id:"\u5b57\u6bb5\u89e3\u91ca",level:4},{value:"1.0 \u7248\u672c",id:"10-\u7248\u672c",level:3},{value:"\u5b57\u6bb5\u89e3\u91ca",id:"\u5b57\u6bb5\u89e3\u91ca-1",level:4},{value:"Index \u8def\u7531",id:"index-\u8def\u7531",level:2},{value:"\u5d4c\u5957\u8def\u7531",id:"\u5d4c\u5957\u8def\u7531",level:2},{value:"\u5bfc\u51fa\u65b9\u6cd5\u4e0e\u5bf9\u5e94\u8def\u7531",id:"\u5bfc\u51fa\u65b9\u6cd5\u4e0e\u5bf9\u5e94\u8def\u7531",level:2},{value:"\u901a\u914d\u8def\u7531",id:"\u901a\u914d\u8def\u7531",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Midway Hooks \u7684\u8def\u7531\u673a\u5236\u662f\u6587\u4ef6\u8def\u7531\uff0c\u6211\u4eec\u4f1a\u6839\u636e \u76ee\u5f55/\u6587\u4ef6/\u5bfc\u51fa\u7684\u65b9\u6cd5 \u6765\u5206\u6790\u51fa\u8def\u7531\u914d\u7f6e\u3002\u540c\u65f6\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u914d\u7f6e\u9009\u9879\u3002"),(0,l.kt)("h2",{id:"\u9ed8\u8ba4\u914d\u7f6e"},"\u9ed8\u8ba4\u914d\u7f6e"),(0,l.kt)("h3",{id:"20-\u7248\u672c"},"2.0 \u7248\u672c"),(0,l.kt)("p",null,"\u5728 2.0 \u4e2d\uff0c\u6211\u4eec\u5c06\u6587\u4ef6\u8def\u7531\u7684\u914d\u7f6e\u7edf\u4e00\u81f3 ",(0,l.kt)("inlineCode",{parentName:"p"},"midway.config.ts")," \u4e2d\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"midway.config.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { defineConfig } from '@midwayjs/hooks';\n\nexport default defineConfig({\n  source: './src/apis',\n  routes: [\n    {\n      baseDir: 'lambda',\n      basePath: '/api',\n    },\n  ],\n});\n")),(0,l.kt)("h4",{id:"\u5b57\u6bb5\u89e3\u91ca"},"\u5b57\u6bb5\u89e3\u91ca"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"source: \u540e\u7aef\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"}," ./src/apis"),"\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"./src/functions")," \u7b49\u81ea\u5b9a\u4e49\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ul"},"routes: \u8def\u7531\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a\u6570\u7ec4",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"baseDir: \u51fd\u6570\u6587\u4ef6\u5939\uff0c\u6587\u4ef6\u5939\u4e0b\u4efb\u610f ",(0,l.kt)("inlineCode",{parentName:"li"},".ts")," \u6587\u4ef6\u5bfc\u51fa\u7684\u5f02\u6b65\u51fd\u6570\u90fd\u4f1a\u751f\u6210\u4e3a Api \u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"basePath: \u751f\u6210\u7684 API \u5730\u5740\u524d\u7f00")))),(0,l.kt)("h3",{id:"10-\u7248\u672c"},"1.0 \u7248\u672c"),(0,l.kt)("p",null,"\u6587\u4ef6\u8def\u7531\u7cfb\u7edf\u7684\u89e3\u6790\u673a\u5236\u662f\u53ef\u914d\u7f6e\u7684\uff0c\u4e0b\u9762\u662f\u4e00\u4f53\u5316\u9879\u76ee\u4e2d\u9ed8\u8ba4\u7684\u914d\u7f6e\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"f.yml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"functionsRule:\n  rules:\n    - baseDir: lambda\n      events:\n        http:\n          basePath: /api\n")),(0,l.kt)("h4",{id:"\u5b57\u6bb5\u89e3\u91ca-1"},"\u5b57\u6bb5\u89e3\u91ca"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"rules: \u5177\u4f53\u51fd\u6570\u8def\u7531\u914d\u7f6e\u89c4\u5219",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"baseDir: \u51fd\u6570\u6587\u4ef6\u5939\uff0c\u6587\u4ef6\u5939\u4e0b\u4efb\u610f ",(0,l.kt)("inlineCode",{parentName:"li"},".ts")," \u6587\u4ef6\u5bfc\u51fa\u7684\u5f02\u6b65\u51fd\u6570\u90fd\u4f1a\u751f\u6210\u4e3a Api \u63a5\u53e3"),(0,l.kt)("li",{parentName:"ul"},"events: \u51fd\u6570\u89e6\u53d1\u5668\u914d\u7f6e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"http",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"basePath: \u751f\u6210\u7684 API \u5730\u5740\u524d\u7f00"),(0,l.kt)("li",{parentName:"ul"},"underscore: 0.x \u517c\u5bb9\u903b\u8f91\uff0c\u9ed8\u8ba4\u4e3a false\uff0c\u6dfb\u52a0\u540e\u5c06\u5728\u5177\u540d\u8def\u7531\u7684\u751f\u6210\u65f6\uff0c\u5728\u65b9\u6cd5\u540d\u524d\u6dfb\u52a0\u4e0b\u5212\u7ebf")))))))),(0,l.kt)("h2",{id:"index-\u8def\u7531"},"Index \u8def\u7531"),(0,l.kt)("p",null,"\u6211\u4eec\u4f1a\u5c06\u76ee\u5f55\u4e0b ",(0,l.kt)("inlineCode",{parentName:"p"},"index.ts")," \u6587\u4ef6\uff0c\u4f5c\u4e3a\u6839\u8def\u7531\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/lambda/index.ts")," \xa0\u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/lambda/about/index.ts")," \u2192 \xa0",(0,l.kt)("inlineCode",{parentName:"li"},"/about"))),(0,l.kt)("h2",{id:"\u5d4c\u5957\u8def\u7531"},"\u5d4c\u5957\u8def\u7531"),(0,l.kt)("p",null,"\u5d4c\u5957\u7684\u6587\u4ef6\u4e5f\u5c06\u751f\u6210\u5d4c\u5957\u7684\u8def\u7531"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/lambda/about.ts")," \xa0\u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"/about")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/lambda/blog/index.ts")," \xa0\u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"/blog")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/lambda/about/contact.ts")," \xa0\u2192 \xa0",(0,l.kt)("inlineCode",{parentName:"li"},"/about/contact"))),(0,l.kt)("h2",{id:"\u5bfc\u51fa\u65b9\u6cd5\u4e0e\u5bf9\u5e94\u8def\u7531"},"\u5bfc\u51fa\u65b9\u6cd5\u4e0e\u5bf9\u5e94\u8def\u7531"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u5bfc\u51fa\u7684\u65b9\u6cd5\u5219\u4f1a\u751f\u6210\u4e3a\u6839\u8def\u5f84\uff0c\u800c\u5177\u540d\u65b9\u6cd5\u5219\u4f1a\u5728\u8def\u5f84\u4e0a\u62fc\u63a5\u51fd\u6570\u540d\u3002"),(0,l.kt)("p",null,"\u5728\u6b64\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"/lambda/about.ts")," \xa0 \u4e3a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export default () => {}")," \xa0 \u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"/about")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"export function contact ()"),"\xa0\u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"/about/contact"))),(0,l.kt)("h2",{id:"\u901a\u914d\u8def\u7531"},"\u901a\u914d\u8def\u7531"),(0,l.kt)("p",null,"Midway Hooks \u652f\u6301\u901a\u8fc7\u6587\u4ef6\u540d\u751f\u6210\u901a\u914d\u7b26\u8def\u7531\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"/api/*")," \uff0c\u53ef\u4ee5\u5339\u914d /api\u3001/api/about\u3001/api/about/a/b/c \u7b49\u3002\u53ea\u9700\u8981\u5728\u6587\u4ef6\u540d\u4e0a\u52a0\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"...")," \u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/lambda/[...index].ts")," \u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"/api/*")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/lambda/[...user].ts")," \u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"/api/user/*")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"/lambda/about/[...contact].ts")," \u2192 ",(0,l.kt)("inlineCode",{parentName:"li"},"/api/about/contact/*"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u63a8\u8350\u5728\u901a\u914d\u8def\u7531\u4e2d\uff0c\u53ea\u5b58\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"export default")," \u65b9\u6cd5\uff0c\u4ece\u800c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8def\u7531\u51b2\u7a81")))}d.isMDXComponent=!0}}]);