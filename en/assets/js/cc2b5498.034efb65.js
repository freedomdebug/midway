"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4536],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},45765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={title:"\u5bf9\u8c61\u5b58\u50a8\uff08COS\uff09"},a=void 0,s={unversionedId:"extensions/cos",id:"version-2.0.0/extensions/cos",title:"\u5bf9\u8c61\u5b58\u50a8\uff08COS\uff09",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 midway \u63a5\u5165\u817e\u8baf\u4e91 COS\u3002",source:"@site/versioned_docs/version-2.0.0/extensions/cos.md",sourceDirName:"extensions",slug:"/extensions/cos",permalink:"/en/docs/2.0.0/extensions/cos",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/extensions/cos.md",tags:[],version:"2.0.0",frontMatter:{title:"\u5bf9\u8c61\u5b58\u50a8\uff08COS\uff09"},sidebar:"component",previous:{title:"\u5bf9\u8c61\u5b58\u50a8\uff08OSS\uff09",permalink:"/en/docs/2.0.0/extensions/oss"},next:{title:"TableStore",permalink:"/en/docs/2.0.0/extensions/tablestore"}},c={},l=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u4f7f\u7528 COS \u670d\u52a1",id:"\u4f7f\u7528-cos-\u670d\u52a1",level:2}],p={toc:l};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 midway \u63a5\u5165\u817e\u8baf\u4e91 COS\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/cos@2 --save\n")),(0,o.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u5f15\u5165 \u7ec4\u4ef6\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.ts"),"\xa0 \u4e2d\u5bfc\u5165\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as cos from '@midwayjs/cos';\nimport { join } from 'path';\n\n@Configuration({\n  imports: [\n    cos, // \u5bfc\u5165 cos \u7ec4\u4ef6\n  ],\n  importConfigs: [join(__dirname, 'config')],\n})\nexport class ContainerLifeCycle {}\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5355\u5ba2\u6237\u7aef\u914d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const cos = {\n  client: {\n    SecretId: '***********',\n    SecretKey: '***********',\n  },\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u5ba2\u6237\u7aef\u914d\u7f6e\uff0c\u9700\u8981\u914d\u7f6e\u591a\u4e2a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const cos = {\n  clients: {\n    instance1: {\n      SecretId: '***********',\n      SecretKey: '***********',\n    },\n    instance2: {\n      SecretId: '***********',\n      SecretKey: '***********',\n    },\n  },\n};\n")),(0,o.kt)("p",null,"\u66f4\u591a\u53c2\u6570\u53ef\u4ee5\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tencentyun/cos-nodejs-sdk-v5"},"cos-nodejs-sdk-v5")," \u6587\u6863\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-cos-\u670d\u52a1"},"\u4f7f\u7528 COS \u670d\u52a1"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u4efb\u610f\u7684\u4ee3\u7801\u4e2d\u6ce8\u5165\u4f7f\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Controller, Inject, Get } from '@midwayjs/decorator';\nimport { CosService } from '@midwayjs/cos';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  cosService: COSService;\n\n  async invoke() {\n    await this.cosService.sliceUploadFile({\n      Bucket: 'test-1250000000',\n      Region: 'ap-guangzhou',\n      Key: '1.zip',\n      FilePath: './1.zip'\n    },\n  }\n}\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"COSServiceFactory")," \u83b7\u53d6\u4e0d\u540c\u7684\u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { COSServiceFactory } from '@midwayjs/cos';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n  @Inject()\n  cosServiceFactory: COSServiceFactory;\n\n  async save() {\n    const redis1 = await this.cosServiceFactory.get('instance1');\n    const redis2 = await this.cosServiceFactory.get('instance3');\n\n    //...\n  }\n}\n")))}m.isMDXComponent=!0}}]);