"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61084],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(t),u=a,y=m["".concat(i,".").concat(u)]||m[u]||c[u]||o;return t?n.createElement(y,s(s({ref:r},d),{},{components:t})):n.createElement(y,s({ref:r},d))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77416:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={title:"BodyParser"},s=void 0,p={unversionedId:"body-parser",id:"version-2.0.0/body-parser",title:"BodyParser",description:"Bodyparser \u4e00\u822c\u7528\u6765\u5bf9 post \u8bf7\u6c42\u7684\u8bf7\u6c42\u4f53\u8fdb\u884c\u89e3\u6790\uff0c\u662f\u6bd4\u8f83\u5e38\u7528\u7684 Web \u4e2d\u95f4\u4ef6\u4e4b\u4e00\u3002",source:"@site/versioned_docs/version-2.0.0/body-parser.md",sourceDirName:".",slug:"/body-parser",permalink:"/docs/2.0.0/body-parser",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/body-parser.md",tags:[],version:"2.0.0",frontMatter:{title:"BodyParser"},sidebar:"common",previous:{title:"Session",permalink:"/docs/2.0.0/session"},next:{title:"\u9759\u6001\u8d44\u6e90\uff08Static File\uff09",permalink:"/docs/2.0.0/static_file"}},i={},l=[{value:"\u5728 @midwayjs/web \u4f7f\u7528",id:"\u5728-midwayjsweb-\u4f7f\u7528",level:2},{value:"\u5728 @midwayjs/koa \u4f7f\u7528",id:"\u5728-midwayjskoa-\u4f7f\u7528",level:2},{value:"\u5728 @midwayjs/express \u4f7f\u7528",id:"\u5728-midwayjsexpress-\u4f7f\u7528",level:2},{value:"\u5728 Serverless \u4e0b\u4f7f\u7528",id:"\u5728-serverless-\u4e0b\u4f7f\u7528",level:2}],d={toc:l};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bodyparser \u4e00\u822c\u7528\u6765\u5bf9 post \u8bf7\u6c42\u7684\u8bf7\u6c42\u4f53\u8fdb\u884c\u89e3\u6790\uff0c\u662f\u6bd4\u8f83\u5e38\u7528\u7684 Web \u4e2d\u95f4\u4ef6\u4e4b\u4e00\u3002"),(0,a.kt)("p",null,"HTTP \u534f\u8bae\u4e2d\u5e76\u4e0d\u5efa\u8bae\u5728\u901a\u8fc7 GET\u3001HEAD \u65b9\u6cd5\u8bbf\u95ee\u65f6\u4f20\u9012 body\uff0c\u6240\u4ee5\u6211\u4eec\u65e0\u6cd5\u5728 GET\u3001HEAD \u65b9\u6cd5\u4e2d\u6309\u7167\u6b64\u65b9\u6cd5\u83b7\u53d6\u5230\u5185\u5bb9\u3002"),(0,a.kt)("h2",{id:"\u5728-midwayjsweb-\u4f7f\u7528"},"\u5728 @midwayjs/web \u4f7f\u7528"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u9ed8\u8ba4\u4f7f\u7528\u4e86 Egg.js \u57fa\u7840\u6846\u67b6\uff0c\u5176\u4e2d\u81ea\u5e26\u4e86 bodyparser \u4e2d\u95f4\u4ef6\u3002\u6211\u4eec\u53ea\u9700\u8981\u628a\u9700\u8981\u83b7\u53d6 body \u6570\u636e\u7684\u4e2d\u95f4\u4ef6 ",(0,a.kt)("strong",{parentName:"p"},"\u653e\u5728 Egg.js \u6846\u67b6\u9ed8\u8ba4\u7684\u4e2d\u95f4\u4ef6\u4e4b\u540e "),"\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u9700\u8981\u4f7f\u7528 Egg.js \u81ea\u5df1\u7684\u4e2d\u95f4\u4ef6\u914d\u7f6e\u65b9\u5f0f\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/config/config.{env}.ts")," \u4e2d\u7f16\u5199\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u7f16\u5199\u4e00\u4e2a\u6211\u4eec\u81ea\u5df1\u7684\u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/middleware/report.ts\n\nimport { Provide } from '@midwayjs/decorator';\nimport { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';\nimport { Context } from 'egg';\n\n@Provide()\nexport class ReportMiddleware implements IWebMiddleware {\n  resolve() {\n    return async (ctx: Context, next: IMidwayWebNext) => {\n      // \u8fd9\u91cc\u83b7\u53d6\u4e86 body \u6570\u636e\n      console.log(ctx.request.body);\n      await next();\n    };\n  }\n}\n")),(0,a.kt)("p",null,"\u7136\u540e\u5728\u914d\u7f6e\u4e2d\u6dfb\u52a0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\n\nexport default (appInfo: EggAppInfo) => {\n  const config = {} as DefaultConfig;\n\n  // ...\n\n  config.middleware = ['reportMiddleware'];\n\n  return config;\n};\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5728 config \u6587\u4ef6\u4e2d\u914d\u7f6e\u5168\u5c40\u4e2d\u95f4\u4ef6\u662f Egg.js \u7684\u7279\u6b8a\u65b9\u5f0f\uff0c\u8fd9\u91cc\u914d\u7f6e\u7684\u4e2d\u95f4\u4ef6\u4e00\u5b9a\u4f1a\u5728\u9ed8\u8ba4\u7684\u6846\u67b6\u4e2d\u95f4\u4ef6\u4e4b\u540e\u52a0\u8f7d\u3002")),(0,a.kt)("p",null,"Egg.js \u4e2d\u9ed8\u8ba4\u7684 bodyparer \u5e93\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koajs/bodyparser"},"koa-bodyparser")," \uff0c\u9ed8\u8ba4\u914d\u7f6e\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default\nexport const bodyParser = {\n  jsonLimit: '100k',\n};\n")),(0,a.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\u6211\u4eec\u6700\u7ecf\u5e38\u8c03\u6574\u7684\u914d\u7f6e\u9879\u5c31\u662f\u53d8\u66f4\u89e3\u6790\u65f6\u5141\u8bb8\u7684\u6700\u5927\u957f\u5ea6\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts")," \u4e2d\u8986\u76d6\u6846\u67b6\u7684\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u53ef\u4ee5\u8bbe\u7f6e\u5230 1m\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default\nexport const bodyParser = {\n  jsonLimit: '1mb',\n};\n")),(0,a.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koajs/bodyparser"},"koa-bodyparser")," \u6587\u6863\u3002"),(0,a.kt)("h2",{id:"\u5728-midwayjskoa-\u4f7f\u7528"},"\u5728 @midwayjs/koa \u4f7f\u7528"),(0,a.kt)("p",null,"koa \u4e2d\u53ef\u4ee5\u76f4\u63a5\u5f15\u5165 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koajs/bodyparser"},"koa-bodyparser")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i koa-bodyparser --save\n")),(0,a.kt)("p",null,"\u6bd4\u5982\u4e0b\u9762\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App } from '@midwayjs/decorator';\nimport { ILifeCycle } from '@midwayjs/core';\nimport { Application } from '@midwayjs/koa';\nimport * as bodyParser from 'koa-bodyparser';\n\n@Configuration()\nexport class ContainerLifeCycle implements ILifeCycle {\n  @App()\n  app: Application;\n\n  async onReady() {\n    // bodyparser options see https://github.com/koajs/bodyparser\n    this.app.use(bodyParser());\n  }\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koajs/bodyparser"},"koa-bodyparser")," \u6587\u6863\u3002"),(0,a.kt)("h2",{id:"\u5728-midwayjsexpress-\u4f7f\u7528"},"\u5728 @midwayjs/express \u4f7f\u7528"),(0,a.kt)("p",null,"express \u4e2d\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/expressjs/body-parser"},"body-parser")," \u4e2d\u95f4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i body-parser --save\n")),(0,a.kt)("p",null,"\u4e2d\u95f4\u4ef6\u5728 configuration \u4e2d\u52a0\u8f7d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// configuration.ts\n\nimport { Configuration, App } from '@midwayjs/decorator';\nimport { Application } from '@midwayjs/express';\nimport * as bodyParser from 'body-parser';\n\n@Configuration()\nexport class AutoConfiguration {\n  @App()\n  app: Application;\n\n  async onReady() {\n    this.app.use(bodyParser.json());\n    this.app.use(bodyParser.urlencoded({ extended: false }));\n  }\n}\n")),(0,a.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/expressjs/body-parser"},"body-parser")," \u6587\u6863\u3002"),(0,a.kt)("h2",{id:"\u5728-serverless-\u4e0b\u4f7f\u7528"},"\u5728 Serverless \u4e0b\u4f7f\u7528"),(0,a.kt)("p",null,"\u5728 Serverless \u573a\u666f\u5df2\u7ecf\u9ed8\u8ba4\u96c6\u6210\u4e86 bodyparser\uff0c\u7528\u6237\u65e0\u9700\u5f15\u5165\u5176\u4ed6\u6a21\u5757\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u89e3\u6790\u884c\u4e3a\u662f\u56fa\u5b9a\u7684\uff0c\u65e0\u6cd5\u4fee\u6539\uff0c\u5e76\u4e14\u6700\u5927\u7684\u89e3\u6790\u6587\u4ef6\u5927\u5c0f\u4e3a 2M\u3002"),(0,a.kt)("p",null,"body \u6570\u636e\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.request.body")," \u62ff\u5230\u3002"))}c.isMDXComponent=!0}}]);