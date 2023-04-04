"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={},l="\u6d4b\u8bd5\u51fd\u6570",s={unversionedId:"serverless/serverless_testing",id:"serverless/serverless_testing",title:"\u6d4b\u8bd5\u51fd\u6570",description:"HTTP \u7c7b\u7684\u51fd\u6570",source:"@site/docs/serverless/serverless_testing.md",sourceDirName:"serverless",slug:"/serverless/serverless_testing",permalink:"/docs/serverless/serverless_testing",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/serverless_testing.md",tags:[],version:"current",frontMatter:{},sidebar:"serverless",previous:{title:"\u5f00\u53d1\u51fd\u6570",permalink:"/docs/serverless/serverless_dev"},next:{title:"\u51fd\u6570\u4e0a\u4e0b\u6587",permalink:"/docs/serverless/serverless_context"}},p={},o=[{value:"HTTP \u7c7b\u7684\u51fd\u6570",id:"http-\u7c7b\u7684\u51fd\u6570",level:2},{value:"\u666e\u901a\u89e6\u53d1\u5668",id:"\u666e\u901a\u89e6\u53d1\u5668",level:2},{value:"\u5e73\u53f0\u5de5\u5177\u7c7b",id:"\u5e73\u53f0\u5de5\u5177\u7c7b",level:2}],c={toc:o};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6d4b\u8bd5\u51fd\u6570"},"\u6d4b\u8bd5\u51fd\u6570"),(0,a.kt)("h2",{id:"http-\u7c7b\u7684\u51fd\u6570"},"HTTP \u7c7b\u7684\u51fd\u6570"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u9002\u7528\u4e8e\u6240\u6709\u7684\u7c7b HTTP \u89e6\u53d1\u5668\u7684\u51fd\u6570\uff0c\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"API_GATEWAY"),"\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u548c\u5e94\u7528\u76f8\u540c\u7684\u6d4b\u8bd5\u65b9\u6cd5\u6765\u6d4b\u8bd5\uff0c\u9488\u5bf9 HTTP \u51fd\u6570\uff0c\u4f7f\u7528\u5c01\u88c5\u4e86 supertest \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"createHttpRequest")," \u65b9\u6cd5\u521b\u5efa HTTP \u5ba2\u6237\u7aef\u3002"),(0,a.kt)("p",null,"\u552f\u4e00\u548c\u5e94\u7528\u4e0d\u540c\u7684\u662f\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u65b9\u6cd5\u521b\u5efa\u51fd\u6570\u5e94\u7528\uff08app\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u65b9\u6cd5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"createApp")," \u65b9\u6cd5\u5728\u51fd\u6570\u573a\u666f\u4e0b\u7684\u5b9a\u5236\uff08\u5176\u4e2d\u6307\u5b9a\u4e86\u51fd\u6570\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/serverless-app")," \u6846\u67b6\uff09\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u4e0d\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," \u6846\u67b6\uff0c\u800c\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/serverless-app")," \u6846\u67b6\uff0c\u56e0\u4e3a\u540e\u8005\u5305\u542b\u4e86\u7f51\u5173\u6a21\u62df\u5230\u51fd\u6570\u8c03\u7528\u7684\u7cfb\u5217\u6b65\u9aa4\u3002")),(0,a.kt)("p",null,"HTTP \u6d4b\u8bd5\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n  let app: Application;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>();\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from api gateway trigger', async () => {\n    const result = await createHttpRequest(app).get('/').query({\n      name: 'zhangting',\n    });\n    expect(result.text).toEqual('hello zhangting');\n  });\n});\n")),(0,a.kt)("h2",{id:"\u666e\u901a\u89e6\u53d1\u5668"},"\u666e\u901a\u89e6\u53d1\u5668"),(0,a.kt)("p",null,"\u9664\u4e86\u7c7b HTTP \u89e6\u53d1\u5668\u4e4b\u5916\uff0c\u6211\u4eec\u8fd8\u6709\u5176\u4ed6\u6bd4\u5982\u5b9a\u65f6\u5668\u3001\u5bf9\u8c61\u5b58\u50a8\u7b49\u51fd\u6570\u89e6\u53d1\u5668\uff0c\u8fd9\u4e9b\u89e6\u53d1\u5668\u7531\u4e8e\u548c\u7f51\u5173\u5173\u7cfb\u5bc6\u5207\uff0c\u4e0d\u80fd\u4f7f\u7528 HTTP \u884c\u4e3a\u6765\u6d4b\u8bd5\uff0c\u800c\u662f\u4f7f\u7528\u4f20\u7edf\u7684\u65b9\u6cd5\u8c03\u7528\u6765\u505a\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u65b9\u6cd5\u521b\u5efa\u51fd\u6570 app\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerlessInstance")," \u65b9\u6cd5\u83b7\u53d6\u7c7b\u5b9e\u4f8b\uff0c\u7136\u540e\u901a\u8fc7\u5b9e\u4f8b\u7684\u65b9\u6cd5\u76f4\u63a5\u8c03\u7528\uff0c\u4f20\u5165\u53c2\u6570\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close, createHttpRequest } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\nimport { createInitializeContext } from '@midwayjs/serverless-fc-trigger';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n  let app: Application;\n  let instance: HelloAliyunService;\n\n  beforeAll(async () => {\n    // \u521b\u5efa\u51fd\u6570 app\n    app = await createFunctionApp<Framework>(join(__dirname, '../'), {\n      initContext: createInitializeContext(), // \u8fd9\u91cc\u4f20\u5165\u4e86 aliyun \u7279\u6709\u7684\u521d\u59cb\u5316\u4e0a\u4e0b\u6587\u6570\u636e\n    });\n\n    // \u62ff\u5230\u670d\u52a1\u7c7b\n    instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from event trigger', async () => {\n    // \u8c03\u7528\u51fd\u6570\u65b9\u6cd5\uff0c\u4f20\u5165\u53c2\u6570\n    expect(await instance.handleEvent('hello world')).toEqual('hello world');\n  });\n});\n")),(0,a.kt)("h2",{id:"\u5e73\u53f0\u5de5\u5177\u7c7b"},"\u5e73\u53f0\u5de5\u5177\u7c7b"),(0,a.kt)("p",null,"Midway \u63d0\u4f9b\u4e86\u5e73\u53f0\u5de5\u5177\u7c7b\uff0c\u7528\u4e8e\u5feb\u901f\u521b\u5efa\u6d4b\u8bd5\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u73b0\u6709\u7684\u5e73\u53f0\u5de5\u5177\u7c7b\u5305\u62ec\uff1a\n| @midwayjs/serverless-fc-trigger | \u963f\u91cc\u4e91\u89e6\u53d1\u5668\u6a21\u62df |\n| --- | --- |\n| @midwayjs/serverless-sfc-trigger | \u817e\u8baf\u4e91\u89e6\u53d1\u5668\u6a21\u62df |"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u5de5\u5177\u7c7b\u4e2d\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5feb\u901f\u521b\u5efa\u521d\u59cb\u5316\u6570\u636e\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u5728\u963f\u91cc\u4e91\u51fd\u6570\u4e2d\uff0c\u63d0\u4f9b\u4e86\u5feb\u901f\u521b\u5efa\u521d\u59cb\u5316\u4e0a\u4e0b\u6587\u7684\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u521d\u59cb\u5316\u51fd\u6570 app \u65f6\u4f20\u5165\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createInitializeContext } from '@midwayjs/serverless-fc-trigger';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n  // ...\n\n  beforeAll(async () => {\n    // \u521b\u5efa\u51fd\u6570 app\n    app = await createFunctionApp<Framework>(join(__dirname, '../'), {\n      initContext: createInitializeContext(), // \u8fd9\u91cc\u4f20\u5165\u4e86 aliyun \u7279\u6709\u7684\u521d\u59cb\u5316\u4e0a\u4e0b\u6587\u6570\u636e\n    });\n\n    // ...\n  });\n});\n")),(0,a.kt)("p",null,"\u6240\u6709\u7684\u5de5\u5177\u65b9\u6cd5\u90fd\u652f\u6301\u4fee\u6539\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u4f20\u5165\uff0c\u4f1a\u548c\u9ed8\u8ba4\u7684\u6570\u636e\u505a\u5408\u5e76\u3002\u6bd4\u5982\u8981\u4fee\u6539\u521d\u59cb\u5316\u4e0a\u4e0b\u6587\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createInitializeContext } from '@midwayjs/serverless-fc-trigger';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n  // ...\n\n  beforeAll(async () => {\n    // \u521b\u5efa\u51fd\u6570 app\n    app = await createFunctionApp<Framework>(join(__dirname, '../'), {\n      initContext: createInitializeContext({\n        accountId: 'xxxxxxx', // \u53ef\u4ee5\u6309\u7167\u7ed3\u6784\uff0c\u8c03\u6574\u6570\u636e\n      }),\n    });\n\n    // ...\n  });\n});\n")),(0,a.kt)("p",null,"\u6bd4\u5982\u521b\u5efa\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\u89e6\u53d1\u5668\u7684\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createTimerEvent } from '@midwayjs/serverless-fc-trigger';\n\nit('should get result from timer trigger', async () => {\n  // \u62ff\u5230\u670d\u52a1\u7c7b\n  const instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);\n  // \u8c03\u7528\u51fd\u6570\u65b9\u6cd5\uff0c\u4f20\u5165\u53c2\u6570\n  await instance.handleTimer(createTimerEvent());\n});\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"createTimerEvent")," \u65b9\u6cd5\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u548c\u5e73\u53f0\u76f8\u7b26\u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  triggerTime: new Date().toJSON(),\n  triggerName: 'timer',\n  payload: '',\n}\n")),(0,a.kt)("p",null,"\u540c\u6837\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u4f20\u9012\u53c2\u6570\u8fdb\u884c\u8986\u76d6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"}," // \u8c03\u7528\u51fd\u6570\u65b9\u6cd5\uff0c\u4f20\u5165\u53c2\u6570\nawait instance.handleTimer(createTimerEvent({\n    // ...\n}));\n")),(0,a.kt)("p",null,"\u5177\u4f53\u7684\u51fd\u6570\u5de5\u5177\u65b9\u6cd5\uff0c\u53ef\u4ee5\u67e5\u9605\u4e0d\u540c\u7684\u5e73\u53f0\u89e6\u53d1\u5668\u6d4b\u8bd5\u3002"))}m.isMDXComponent=!0}}]);