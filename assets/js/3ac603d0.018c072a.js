"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"API \u7f51\u5173\uff08HTTP\uff09"},i=void 0,s={unversionedId:"serverless/tencent_trigger_apigw",id:"version-2.0.0/serverless/tencent_trigger_apigw",title:"API \u7f51\u5173\uff08HTTP\uff09",description:"API \u7f51\u5173\u5728\u817e\u8baf\u4e91\u51fd\u6570\u4f53\u7cfb\u4e2d\u7c7b\u4f3c\u4e8e HTTP \u51fd\u6570\uff0c\u6211\u4eec\u901a\u8fc7\u5b83\u5c06\u51fd\u6570\u53d1\u5e03\u4e3a HTTP \u670d\u52a1\u3002",source:"@site/versioned_docs/version-2.0.0/serverless/tencent_trigger_apigw.md",sourceDirName:"serverless",slug:"/serverless/tencent_trigger_apigw",permalink:"/docs/2.0.0/serverless/tencent_trigger_apigw",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/tencent_trigger_apigw.md",tags:[],version:"2.0.0",frontMatter:{title:"API \u7f51\u5173\uff08HTTP\uff09"},sidebar:"Serverless",previous:{title:"\u963f\u91cc\u4e91\u53d1\u5e03 FAQ",permalink:"/docs/2.0.0/serverless/deploy_aliyun_faq"},next:{title:"Timer \u89e6\u53d1\u5668\uff08\u5b9a\u65f6\u4efb\u52a1\uff09",permalink:"/docs/2.0.0/serverless/tencent_trigger_timer"}},l={},p=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"API \u7f51\u5173\u5728\u817e\u8baf\u4e91\u51fd\u6570\u4f53\u7cfb\u4e2d\u7c7b\u4f3c\u4e8e HTTP \u51fd\u6570\uff0c\u6211\u4eec\u901a\u8fc7\u5b83\u5c06\u51fd\u6570\u53d1\u5e03\u4e3a HTTP \u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloTencentService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.API_GATEWAY, {\n    path: '/api_gateway_tencent',\n    method: 'post',\n  })\n  async handleAPIGatewayEvent(@Body() name) {\n    return `hello ${name}`;\n  }\n}\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u540e\u5373\u53ef\u901a\u8fc7\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u94fe\u63a5\u8bbf\u95ee\u3002"),(0,a.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u548c\u4f20\u7edf\u5e94\u7528 HTTP \u6d4b\u8bd5\u76f8\u540c\uff0c\u901a\u8fc7 createFunctionApp \u521b\u5efa\u51fd\u6570 app\uff0c\u901a\u8fc7 createHttpRequest \u65b9\u5f0f\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Framework } from '@midwayjs/serverless-app';\nimport { createFunctionApp, createHttpRequest } from '@midwayjs/mock';\n\ndescribe('test/hello_tencent.test.ts', () => {\n  let app: Application;\n  let instance: HelloTencentService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>();\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from http trigger', async () => {\n    const result = await createHttpRequest(app).post('api_gateway_tencent').send({\n      name: 'zhangting',\n    });\n\n    expect(result.text).toEqual('hello zhangting');\n  });\n});\n")))}u.isMDXComponent=!0}}]);