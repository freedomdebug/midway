"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30237],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=s,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,a(a({ref:r},p),{},{components:t})):n.createElement(f,a({ref:r},p))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[d]="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47968:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),s=(t(67294),t(3905));const o={title:"\u9ed8\u8ba4\u9519\u8bef\u884c\u4e3a"},a=void 0,i={unversionedId:"serverless/serverless_error",id:"version-2.0.0/serverless/serverless_error",title:"\u9ed8\u8ba4\u9519\u8bef\u884c\u4e3a",description:"\u9519\u8bef\u503c\u5904\u7406",source:"@site/versioned_docs/version-2.0.0/serverless/serverless_error.md",sourceDirName:"serverless",slug:"/serverless/serverless_error",permalink:"/docs/2.0.0/serverless/serverless_error",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/serverless_error.md",tags:[],version:"2.0.0",frontMatter:{title:"\u9ed8\u8ba4\u9519\u8bef\u884c\u4e3a"},sidebar:"common",previous:{title:"\u90e8\u7f72\u73af\u5883",permalink:"/docs/2.0.0/serverless/serverless_environment"},next:{title:"\u4e8b\u4ef6\u89e6\u53d1\u5668\uff08Event\uff09",permalink:"/docs/2.0.0/serverless/aliyun_trigger_event"}},l={},c=[{value:"\u9519\u8bef\u503c\u5904\u7406",id:"\u9519\u8bef\u503c\u5904\u7406",level:2},{value:"\u8c03\u6574\u9519\u8bef\u8fd4\u56de",id:"\u8c03\u6574\u9519\u8bef\u8fd4\u56de",level:2}],p={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,s.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u9519\u8bef\u503c\u5904\u7406"},"\u9519\u8bef\u503c\u5904\u7406"),(0,s.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u5b89\u5168\u6027\uff0cMidway \u9488\u5bf9 Serverless \u573a\u666f\u4e0b\u8fd4\u56de\u7684\u9519\u8bef\u505a\u4e86\u4e00\u4e9b\u7279\u6b8a\u5904\u7406\u3002"),(0,s.kt)("p",null,"\u5728\u51fd\u6570\u4e1a\u52a1\u629b\u51fa\u9519\u8bef\u7684\u60c5\u51b5\u4e0b\uff0c\u6846\u67b6\u4fa7\u4f1a\u6355\u83b7\u6240\u6709\u7684\u9519\u8bef\uff0c\u5e76\u8fd4\u56de \u201cInternal Server Error\u201d \u7684\u9519\u8bef\u3002"),(0,s.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u7684\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u9519\u8bef\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"@ServerlessTrigger(//...)\nasync invoke() {\n    throw new Error('abc');\n}\n")),(0,s.kt)("p",null,"\u4e0d\u7ba1\u662f HTTP \u8fd8\u662f\u975e HTTP \u89e6\u53d1\u5668\uff0c\u6846\u67b6\u90e8\u5206\u90fd\u6709\u76f8\u5e94\u7684\u5904\u7406\u3002"),(0,s.kt)("p",null,"\u5728 ",(0,s.kt)("strong",{parentName:"p"},"\u975e\u7ebf\u4e0a\u73af\u5883"),"\uff0c\u6bd4\u5982 ",(0,s.kt)("inlineCode",{parentName:"p"},"NODE_ENV=local")," \u73af\u5883\uff0c\u6846\u67b6\u4f1a\u5c06\u6574\u4e2a\u9519\u8bef\u901a\u8fc7\u7f51\u5173\u900f\u51fa\u3002"),(0,s.kt)("p",null,"\u6bd4\u5982\uff08\u5b8c\u6574\u7684\u9519\u8bef\u5806\u6808\uff09\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"2021-07-02T05:57:08.553Z 19be4d99-c9cb-4c4c-aac2-9330d31b4408 [error] Error: abc\n    at hello (/code/dist/function/index.js:17:15)\n    at invokeHandler (/code/node_modules/_@midwayjs_faas@2.11.2-beta.1@@midwayjs/faas/dist/framework.js:174:56)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)\n    at (/code/node_modules/_@midwayjs_faas@2.11.2-beta.1@@midwayjs/faas/dist/framework.js:117:40)\n    at cors (/code/node_modules/_@koa_cors@3.1.0@@koa/cors/index.js:98:16)\n    at invokeHandlerWrapper (/code/node_modules/_@midwayjs_runtime-engine@2.11.1@@midwayjs/runtime-engine/dist/lightRuntime.js:18:28) {\n}\n")),(0,s.kt)("p",null,"\u5728 \u7ebf\u4e0a\u73af\u5883\uff0c\u6846\u67b6\u5c06\u76f4\u63a5\u8fd4\u56de ",(0,s.kt)("strong",{parentName:"p"},"\u201cInternal Server Error\u201d")," \uff0c\u4f46\u662f\u65e5\u5fd7\u4e2d\u662f\u5b8c\u6574\u7684\u5806\u6808\u3002"),(0,s.kt)("p",null,"\u5982\u56fe\u6240\u793a\u3002"),(0,s.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/501408/1625205528496-96f7d2b8-d728-4f04-82f4-f2617e00720b.png#clientId=uf90c84ad-5af6-4&from=paste&height=184&id=u9c48573b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=184&originWidth=533&originalType=binary&ratio=1&size=7090&status=done&style=none&taskId=u9ff827c3-41a4-4b19-bedb-83ee598cc4e&width=533",width:"533"}),(0,s.kt)("h2",{id:"\u8c03\u6574\u9519\u8bef\u8fd4\u56de"},"\u8c03\u6574\u9519\u8bef\u8fd4\u56de"),(0,s.kt)("p",null,"\u4ee5\u4e0a\u4e3a\u9ed8\u8ba4\u884c\u4e3a\uff0c\u5728\u7279\u6b8a\u73af\u5883\u4e0b\uff0c\u5982\u679c\u9700\u8981\u663e\u793a\u51fa\u9519\u8bef\uff0c\u53ef\u4ee5\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u5f00\u542f\u5f3a\u5236\u8f93\u51fa\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"process.env.SERVERLESS_OUTPUT_ERROR_STACK = 'true';\n")))}u.isMDXComponent=!0}}]);