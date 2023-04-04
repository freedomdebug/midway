"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},s="\u51fd\u6570\u4e0a\u4e0b\u6587",i={unversionedId:"serverless/serverless_context",id:"serverless/serverless_context",title:"\u51fd\u6570\u4e0a\u4e0b\u6587",description:"Event \u8f6c\u6362",source:"@site/docs/serverless/serverless_context.md",sourceDirName:"serverless",slug:"/serverless/serverless_context",permalink:"/docs/serverless/serverless_context",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/serverless_context.md",tags:[],version:"current",frontMatter:{},sidebar:"serverless",previous:{title:"\u6d4b\u8bd5\u51fd\u6570",permalink:"/docs/serverless/serverless_testing"},next:{title:"f.yml \u5b9a\u4e49",permalink:"/docs/serverless/serverless_yml"}},o={},p=[{value:"Event \u8f6c\u6362",id:"event-\u8f6c\u6362",level:2},{value:"Context",id:"context",level:2},{value:"ctx.logger",id:"ctxlogger",level:3},{value:"ctx.env",id:"ctxenv",level:3},{value:"ctx.requestContext",id:"ctxrequestcontext",level:3},{value:"FaaSHTTPContext",id:"faashttpcontext",level:2},{value:"ctx.request",id:"ctxrequest",level:3},{value:"ctx.response",id:"ctxresponse",level:3},{value:"ctx.params",id:"ctxparams",level:3},{value:"ctx.set",id:"ctxset",level:3},{value:"ctx.status",id:"ctxstatus",level:3},{value:"Request aliases",id:"request-aliases",level:3},{value:"Response aliases",id:"response-aliases",level:3},{value:"FaaSHTTPRequest",id:"faashttprequest",level:2},{value:"request.headers",id:"requestheaders",level:3},{value:"request.ip",id:"requestip",level:3},{value:"request.url",id:"requesturl",level:3},{value:"request.path",id:"requestpath",level:3},{value:"request.method",id:"requestmethod",level:3},{value:"request.body",id:"requestbody",level:3},{value:"FaaSHTTPResponse",id:"faashttpresponse",level:2},{value:"response.setHeader",id:"responsesetheader",level:3},{value:"response.statusCode",id:"responsestatuscode",level:3},{value:"response.body",id:"responsebody",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u51fd\u6570\u4e0a\u4e0b\u6587"},"\u51fd\u6570\u4e0a\u4e0b\u6587"),(0,a.kt)("h2",{id:"event-\u8f6c\u6362"},"Event \u8f6c\u6362"),(0,a.kt)("p",null,"Midway Serverless \u9488\u5bf9\u4e0d\u540c\u5e73\u53f0\u7684\u60c5\u51b5\uff0c\u8fdb\u884c\u4e86\u5165\u53c2\u5305\u88f9\uff0c\u540c\u65f6\uff0c\u5728\u51fd\u6570\u4f7f\u7528\u4e86 apigw\uff08API \u7f51\u5173\uff09\u548c http \uff08\u963f\u91cc\u4e91\uff09\u89e6\u53d1\u5668\u7684\u60c5\u51b5\u4e0b\uff0c\u5bf9\u5165\u53c2\uff08event\uff09\u505a\u4e86\u7279\u6b8a\u5904\u7406\uff0c\u4e3a\u4e86\u7b80\u5316\u548c\u7edf\u4e00\u5199\u6cd5\uff0c\u5c06 event \u7edf\u4e00\u89c4\u5219\u5316\u6210\u4e86\u7c7b\u4f3c koa \u5199\u6cd5\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u666e\u901a\u89e6\u53d1\u5668\u573a\u666f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/faas';\nimport { Provide } from '@midwayjs/core';\n\n@Provide()\nexport class Index {\n\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(...)\n    async handler(event) {\n        return 'hello world'\n    }\n}\n")),(0,a.kt)("p",null,"HTTP \u3001API \u7f51\u5173\u89e6\u53d1\u5668\u573a\u666f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/faas';\nimport { Provide } from '@midwayjs/core';\n\n@Provide()\nexport class Index {\n\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(...)\n    async handler() {\n    // \u4e0b\u9762\u4e24\u79cd\u5199\u6cd5\u76f8\u540c\n        // this.ctx.body = 'hello world';\n    return 'hello world';\n    }\n}\n")),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"\u6bcf\u6b21\u51fd\u6570\u8c03\u7528\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u5168\u65b0\u7684 ctx\uff08\u51fd\u6570\u4e0a\u4e0b\u6587\uff09\u3002\u9488\u5bf9 ctx \u4e0a\u7684\u5c5e\u6027\u6216\u8005\u65b9\u6cd5\uff0c\u6211\u4eec\u63d0\u4f9b ts \u5b9a\u4e49\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 Serverless v1 \u65f6\u4ee3\uff0c\u6211\u4eec\u7684\u5b9a\u4e49\u53eb FaaSContext\uff0c\u5728 v2 \u6211\u4eec\u5c06\u5b9a\u4e49\u548c\u5e94\u7528\u505a\u4e86\u7edf\u4e00\uff0c\u66f4\u4e3a\u4e00\u81f4\u3002")),(0,a.kt)("h3",{id:"ctxlogger"},"ctx.logger"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return ",(0,a.kt)("inlineCode",{parentName:"li"},"ILogger"))),(0,a.kt)("p",null,"\u8fd0\u884c\u65f6\u4f20\u9012\u4e0b\u6765\u7684\u6bcf\u6b21\u8bf7\u6c42\u7684\u65e5\u5fd7\u5bf9\u8c61\uff0c\u9ed8\u8ba4\u4e3a console\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.logger.info('hello');\nctx.logger.warn('hello');\nctx.logger.error('hello');\n")),(0,a.kt)("h3",{id:"ctxenv"},"ctx.env"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"\u5f53\u524d\u542f\u52a8\u7684\u73af\u5883\uff0c\u5373 NODE_ENV \u6216\u8005 MIDWAY_SERVER_ENV \u7684\u503c\uff0c\u9ed8\u8ba4\u4e3a prod\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.env; // \u9ed8\u8ba4 prod\n")),(0,a.kt)("h3",{id:"ctxrequestcontext"},"ctx.requestContext"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return ",(0,a.kt)("inlineCode",{parentName:"li"},"MidwayRequestContainer"))),(0,a.kt)("p",null,"midway faas \u7684 IoC \u8bf7\u6c42\u4f5c\u7528\u57df\u5bb9\u5668\uff0c\u7528\u4e8e\u83b7\u53d6\u5176\u4ed6 IoC \u5bb9\u5668\u4e2d\u7684\u5bf9\u8c61\u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const userService = await ctx.requestContext.getAsync(UserService);\n")),(0,a.kt)("h2",{id:"faashttpcontext"},"FaaSHTTPContext"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Context")," \u5b9a\u4e49\u7ee7\u627f\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"FaaSHTTPContext"),"\uff0c\u524d\u8005\u4fdd\u7559\u4e86\u540e\u8005\uff0c\u5927\u90e8\u5206\u573a\u666f\u4e0b\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u524d\u8005\uff0c\u540e\u8005\u662f\u5728  apigw\uff08API \u7f51\u5173\uff09\u548c http \uff08\u963f\u91cc\u4e91\uff09\u89e6\u53d1\u5668\u4e0b\u624d\u6709\u7684\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u666e\u901a\u7528\u6237\uff0c\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," \u5b9a\u4e49\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/faas';\n\n@Inject()\nctx: Context;\n")),(0,a.kt)("p",null,"\u5728 ctx \u5bf9\u8c61\u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9b\u548c\u7f16\u5199\u4f20\u7edf Koa Web \u5e94\u7528\u7a0b\u5e8f\u7c7b\u4f3c\u7684 API\u3002\u8fd9\u6837\u7684\u597d\u5904\u662f\u51cf\u5c11\u7528\u6237\u7684\u8ba4\u77e5\u6210\u672c\uff0c\u5e76\u4e14\uff0c\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\uff0c\u517c\u5bb9\u539f\u6709\u4f20\u7edf\u4ee3\u7801\uff0c\u517c\u5bb9\u793e\u533a middleware \u6210\u4e3a\u4e86\u53ef\u80fd\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e9b\u548c\u4f20\u7edf\u7c7b\u4f3c\u7684 API\uff0c\u652f\u6301\u5e38\u7528\u7684\u80fd\u529b\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5728\u4e0d\u540c\u7684\u5e73\u53f0\u53ef\u80fd\u4e0d\u4e00\u5b9a\u5b8c\u5168\u76f8\u540c"),"\uff0c\u6211\u4eec\u4f1a\u5728\u7279\u5b9a API \u4e2d\u6307\u51fa\u3002"),(0,a.kt)("h3",{id:"ctxrequest"},"ctx.request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return ",(0,a.kt)("inlineCode",{parentName:"li"},"FaaSHTTPRequest"))),(0,a.kt)("p",null,"FaaS \u6a21\u62df\u7684 HTTP Request \u5bf9\u8c61\u3002"),(0,a.kt)("h3",{id:"ctxresponse"},"ctx.response"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"return ",(0,a.kt)("inlineCode",{parentName:"li"},"FaaSHTTPResponse"))),(0,a.kt)("p",null,"FaaS \u6a21\u62df\u7684 HTTP Response \u5bf9\u8c61\u3002"),(0,a.kt)("h3",{id:"ctxparams"},"ctx.params"),(0,a.kt)("p",null,"\u4ee3\u7406\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"request.pathParameters"),"\uff0c\u5728 http \u89e6\u53d1\u5668\uff08\u963f\u91cc\u4e91\uff09\u548c API \u7f51\u5173\u89e6\u53d1\u5668\u4e0b\u53ef\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// /api/user/[id]   /api/user/faas\nctx.params.id; // faas\n")),(0,a.kt)("h3",{id:"ctxset"},"ctx.set"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u54cd\u5e94\u5934\uff0c\u6b64\u65b9\u6cd5\u4ee3\u7406\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"response.setHeader")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.set('X-FaaS-Duration', 2100);\n")),(0,a.kt)("h3",{id:"ctxstatus"},"ctx.status"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u8fd4\u56de\u72b6\u6001\u7801\uff0c\u6b64\u5c5e\u6027\u4ee3\u7406\u81ea ",(0,a.kt)("inlineCode",{parentName:"p"},"response.statusCode")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"ctx.status = 404;\n")),(0,a.kt)("h3",{id:"request-aliases"},"Request aliases"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u5217\u51fa\u7684\u5c5e\u6027\u662f\u4ece ",(0,a.kt)("a",{parentName:"p",href:"#k6AZp"},"Request")," \u5bf9\u8c61\u4ee3\u7406\u8fc7\u6765"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.headers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.url")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.path")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.ip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.query")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.get()"))),(0,a.kt)("h3",{id:"response-aliases"},"Response aliases"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u5217\u51fa\u7684\u5c5e\u6027\u662f\u4ece ",(0,a.kt)("a",{parentName:"p",href:"#kfTOD"},"Response")," \u5bf9\u8c61\u4ee3\u7406\u8fc7\u6765"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.body=")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.status="),"alias to ",(0,a.kt)("inlineCode",{parentName:"li"},"response.statusCode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.type=")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.set()"),"alias to ",(0,a.kt)("inlineCode",{parentName:"li"},"response.setHeader"))),(0,a.kt)("h2",{id:"faashttprequest"},"FaaSHTTPRequest"),(0,a.kt)("p",null,"\u6b64\u5bf9\u8c61\u662f\u901a\u8fc7\u5c06\u51fd\u6570\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u5165\u53c2\u8fdb\u884c\u8f6c\u6362\u5f97\u6765\u3002"),(0,a.kt)("h3",{id:"requestheaders"},"request.headers"),(0,a.kt)("p",null,"\u5305\u542b\u6240\u6709\u8bf7\u6c42\u5934\u7684\u5bf9\u8c61\uff0c\u952e\u503c\u5bf9\u5b58\u50a8\u3002"),(0,a.kt)("h3",{id:"requestip"},"request.ip"),(0,a.kt)("p",null,"\u83b7\u53d6\u5ba2\u6237\u7aef\u8bf7\u6c42 ip\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u963f\u91cc\u4e91 FC \u4e0a\uff0c\u53ea\u6709 HTTP \u89e6\u53d1\u5668\u80fd\u83b7\u53d6\u5230\u503c\uff0capi \u7f51\u5173\u6682\u65f6\u65e0\u6cd5\u83b7\u53d6\u3002")),(0,a.kt)("h3",{id:"requesturl"},"request.url"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u8bf7\u6c42\u5b8c\u6574 url\u3002"),(0,a.kt)("h3",{id:"requestpath"},"request.path"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u8bf7\u6c42 path\u3002"),(0,a.kt)("h3",{id:"requestmethod"},"request.method"),(0,a.kt)("p",null,"\u8bf7\u6c42\u7684 method\u3002"),(0,a.kt)("h3",{id:"requestbody"},"request.body"),(0,a.kt)("p",null,"POST \u8bf7\u6c42\u7684 body\uff0c\u5df2\u7ecf\u89e3\u6790\u4e3a JSON\u3002"),(0,a.kt)("h2",{id:"faashttpresponse"},"FaaSHTTPResponse"),(0,a.kt)("p",null,"\u6b64\u5bf9\u8c61\u662f\u901a\u8fc7\u5c06\u51fd\u6570\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," \u5165\u53c2\u8fdb\u884c\u8f6c\u6362\u5f97\u6765\u3002"),(0,a.kt)("h3",{id:"responsesetheader"},"response.setHeader"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u54cd\u5e94\u5934\u3002"),(0,a.kt)("h3",{id:"responsestatuscode"},"response.statusCode"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u8fd4\u56de\u72b6\u6001\u7801\u3002"),(0,a.kt)("h3",{id:"responsebody"},"response.body"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u8fd4\u56de\u54cd\u5e94\u4f53\u5185\u5bb9\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"buffer"),"\u3002"))}c.isMDXComponent=!0}}]);