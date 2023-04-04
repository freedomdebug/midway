"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33346],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},g=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),u=l(t),c=a,d=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return t?r.createElement(d,s(s({ref:n},g),{},{components:t})):r.createElement(d,s({ref:n},g))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},32588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={title:"Swagger"},s=void 0,p={unversionedId:"extensions/swagger",id:"version-2.0.0/extensions/swagger",title:"Swagger",description:"Swagger \u662f\u4e00\u4e2a\u89c4\u8303\u548c\u5b8c\u6574\u7684\u6846\u67b6\uff0c\u7528\u4e8e\u751f\u6210\u3001\u63cf\u8ff0\u3001\u8c03\u7528\u548c\u53ef\u89c6\u5316 RESTful \u98ce\u683c\u7684 Web \u670d\u52a1\u3002Swagger \u8ba9\u90e8\u7f72\u7ba1\u7406\u548c\u4f7f\u7528\u529f\u80fd\u5f3a\u5927\u7684 API \u4ece\u672a\u5982\u6b64\u7b80\u5355\u3002",source:"@site/versioned_docs/version-2.0.0/extensions/swagger.md",sourceDirName:"extensions",slug:"/extensions/swagger",permalink:"/docs/2.0.0/extensions/swagger",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/extensions/swagger.md",tags:[],version:"2.0.0",frontMatter:{title:"Swagger"},sidebar:"component",previous:{title:"\u4efb\u52a1\u8c03\u5ea6\uff08Task\uff09",permalink:"/docs/2.0.0/extensions/task"},next:{title:"\u5bf9\u8c61\u5b58\u50a8\uff08OSS\uff09",permalink:"/docs/2.0.0/extensions/oss"}},o={},l=[{value:"\u4e00\u3001\u4f8b\u5b50",id:"\u4e00\u4f8b\u5b50",level:2},{value:"\u4e8c\u3001\u4f7f\u7528\u65b9\u6cd5",id:"\u4e8c\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"2.1 \u5b89\u88c5",id:"21-\u5b89\u88c5",level:3},{value:"2.2 \u914d\u7f6e",id:"22-\u914d\u7f6e",level:3},{value:"2.3 \u4f7f\u7528",id:"23-\u4f7f\u7528",level:3},{value:"\u4e09\u3001\u793a\u4f8b",id:"\u4e09\u793a\u4f8b",level:2},{value:"3.1 \u63cf\u8ff0\u8bf7\u6c42",id:"31-\u63cf\u8ff0\u8bf7\u6c42",level:3},{value:"3.2 \u53c2\u6570\u63cf\u8ff0",id:"32-\u53c2\u6570\u63cf\u8ff0",level:3},{value:"3.3 \u8fd4\u56de\u503c\u63cf\u8ff0",id:"33-\u8fd4\u56de\u503c\u63cf\u8ff0",level:3},{value:"3.4 \u901a\u7528\u63cf\u8ff0",id:"34-\u901a\u7528\u63cf\u8ff0",level:3},{value:"\u63a7\u5236\u5668\u5206\u7ec4\u548c\u63cf\u8ff0",id:"\u63a7\u5236\u5668\u5206\u7ec4\u548c\u63cf\u8ff0",level:4},{value:"\u8def\u7531\u63cf\u8ff0",id:"\u8def\u7531\u63cf\u8ff0",level:4},{value:"\u589e\u5f3a\u7684\u63a5\u53e3\u63cf\u8ff0\u4fe1\u606f\uff08\u8fdb\u9636\u6a21\u5f0f\uff09",id:"\u589e\u5f3a\u7684\u63a5\u53e3\u63cf\u8ff0\u4fe1\u606f\u8fdb\u9636\u6a21\u5f0f",level:4},{value:"\u66f4\u591a\u914d\u7f6e",id:"\u66f4\u591a\u914d\u7f6e",level:4},{value:"\u56db\u3001\u5176\u4ed6",id:"\u56db\u5176\u4ed6",level:2}],g={toc:l};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/"},"Swagger")," \u662f\u4e00\u4e2a\u89c4\u8303\u548c\u5b8c\u6574\u7684\u6846\u67b6\uff0c\u7528\u4e8e\u751f\u6210\u3001\u63cf\u8ff0\u3001\u8c03\u7528\u548c\u53ef\u89c6\u5316 RESTful \u98ce\u683c\u7684 Web \u670d\u52a1\u3002Swagger \u8ba9\u90e8\u7f72\u7ba1\u7406\u548c\u4f7f\u7528\u529f\u80fd\u5f3a\u5927\u7684 API \u4ece\u672a\u5982\u6b64\u7b80\u5355\u3002"),(0,a.kt)("p",null,"Midway \u901a\u8fc7\u7ec4\u4ef6\u5316\u7684\u5f62\u5f0f\u6765\u652f\u6301 swagger \u80fd\u529b\u3002"),(0,a.kt)("h2",{id:"\u4e00\u4f8b\u5b50"},"\u4e00\u3001\u4f8b\u5b50"),(0,a.kt)("p",null,"\u70b9\u6b64 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway-examples/tree/master/v2/demo-swagger"},"\u8bbf\u95ee\u793a\u4f8b\u5e93")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install\n$ npm run dev\n")),(0,a.kt)("p",null,"\u7136\u540e\u8bbf\u95ee\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:7001/swagger-ui/index.html"},"http://127.0.0.1:7001/swagger-ui/index.html")),(0,a.kt)("h2",{id:"\u4e8c\u4f7f\u7528\u65b9\u6cd5"},"\u4e8c\u3001\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h3",{id:"21-\u5b89\u88c5"},"2.1 \u5b89\u88c5"),(0,a.kt)("p",null,"\u5b89\u88c5\u4f9d\u8d56\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @midwayjs/swagger@1 --save\nnpm install swagger-ui-dist --save-dev\n")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u8981\u5728\u670d\u52a1\u5668\u4e0a\u8f93\u51fa swagger API \u9875\u9762\uff0c\u5219\u9700\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"swagger-ui-dist")," \u5b89\u88c5\u5230\u4f9d\u8d56\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install swagger-ui-dist --save\n")),(0,a.kt)("h3",{id:"22-\u914d\u7f6e"},"2.2 \u914d\u7f6e"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u589e\u52a0\u7ec4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as swagger from '@midwayjs/swagger';\n\n@Configuration({\n  imports: [swagger],\n})\nexport class ContainerConfiguration {}\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u914d\u7f6e\u542f\u7528\u7684\u73af\u5883\uff0c\u6bd4\u5982\u4e0b\u9762\u7684\u4ee3\u7801\u6307\u7684\u662f\u201c\u53ea\u5728 local \u73af\u5883\u4e0b\u542f\u7528\u201d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as swagger from '@midwayjs/swagger';\n\n@Configuration({\n  imports: [\n    {\n      component: swagger,\n      enabledEnvironment: ['local'],\n    },\n  ],\n})\nexport class ContainerConfiguration {}\n")),(0,a.kt)("h3",{id:"23-\u4f7f\u7528"},"2.3 \u4f7f\u7528"),(0,a.kt)("p",null,"\u76f4\u63a5\u542f\u52a8\u5373\u53ef\uff0c\u7531\u4e8e\u901a\u8fc7\u5143\u6570\u636e\u8fdb\u884c\u4e86\u5206\u6790\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5",(0,a.kt)("strong",{parentName:"p"},"\u76f4\u63a5\u83b7\u53d6\u5230\u5f53\u524d\u7684\u53c2\u6570\uff0c\u7c7b\u578b\uff0c\u540d\u79f0\uff0c\u4f9d\u8d56\u5173\u7cfb"),"\u7b49\u3002"),(0,a.kt)("p",null,"\u8bbf\u95ee\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:7001/swagger-ui/index.html"},"http://127.0.0.1:7001/swagger-ui/index.html")," \u62ff\u5230 swagger UI \u754c\u9762\u3002\n\u8bbf\u95ee\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:7001/swagger-ui/json"},"http://127.0.0.1:7001/swagger-ui/json")," \u62ff\u5230 swagger json \u7ed3\u6784\u3002"),(0,a.kt)("h2",{id:"\u4e09\u793a\u4f8b"},"\u4e09\u3001\u793a\u4f8b"),(0,a.kt)("h3",{id:"31-\u63cf\u8ff0\u8bf7\u6c42"},"3.1 \u63cf\u8ff0\u8bf7\u6c42"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," \u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u5bf9\u6574\u4e2a\u63a5\u53e3\u8fdb\u884c\u63cf\u8ff0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CreateApiDoc } from '@midwayjs/swagger'\n\n@CreateApiDoc()\n  .summary('get user')\n  .description('This is a open api for get user')\n  .build()\n\n@Get('/:userId')\nasync getUser(@Param() userId: number, @Query() name?: string) {\n  return {\n    name: 'harry',\n    age: 18\n  };\n}\n")),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1605013889037-58cb5bc5-cc37-43e6-8512-834d9c2e0ba9.png#height=150&id=jRI8p&margin=%5Bobject%20Object%5D&name=image.png&originHeight=300&originWidth=750&originalType=binary&ratio=1&size=18686&status=done&style=none&width=375",width:"375"}),(0,a.kt)("h3",{id:"32-\u53c2\u6570\u63cf\u8ff0"},"3.2 \u53c2\u6570\u63cf\u8ff0"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"param")," \u65b9\u6cd5\u53ef\u4ee5\u63cf\u8ff0\u63a5\u53e3\u7684\u53c2\u6570\uff0c\u6309\u987a\u5e8f\u63cf\u8ff0\u53c2\u6570\u3002\u5982\u679c\u6709\u591a\u4e2a\u53c2\u6570\uff0c\u5219\u53ef\u4ee5\u8c03\u7528\u591a\u6b21\u3002\u4ee5\u6211\u4eec\u7684\u793a\u4f8b\u4e3a\u4f8b\uff0c\u6709\u4e24\u4e2a\u53c2\u6570\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"param")," \u65b9\u6cd5\u7684\u5b9a\u4e49\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"param(description: Partial<APIParamFormat>): SwaggerAPI;\nparam(description: string, options?: Partial<APIParamFormat>): SwaggerAPI;\n")),(0,a.kt)("p",null,"\u5728\u6700\u7b80\u5355\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5199\u53c2\u6570\u7684\u63cf\u8ff0\uff0c\u540c\u65f6\uff0c\u4f1a\u81ea\u52a8\u5206\u6790\u51fa\u53c2\u6570\u7684\u7c7b\u578b\uff0c\u6bd4\u5982\u8def\u7531\u4e2d\u7684\u53c2\u6570\u3001\u8bf7\u6c42\u4e2d\u7684\u53c2\u6570\u7b49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@CreateApiDoc()\n    .param('user id')\n    .param('user name')\n  .build()\n\n@Get('/:userId')\nasync getUser(@Param() userId: number, @Query() name?: string) {\n  return {\n    name: 'harry',\n    age: 18\n  };\n}\n")),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1605016059585-e2bce9f0-bf62-4d25-b794-f54340b555ab.png#height=347&id=YwKAq&margin=%5Bobject%20Object%5D&name=image.png&originHeight=694&originWidth=1270&originalType=binary&ratio=1&size=51562&status=done&style=none&width=635",width:"635"}),(0,a.kt)("p",null,"\u5728\u66f4\u4e3a\u590d\u6742\u7684\u60c5\u51b5\u4e0b\uff0c\u53c2\u6570\u53ef\u4ee5\u66f4\u52a0\u7cbe\u786e\u7684\u63cf\u8ff0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface APIParamFormat {\n  name: string; // \u53c2\u6570\u540d\n  description: string; // \u53c2\u6570\u63cf\u8ff0\n  required: boolean; // \u53c2\u6570\u662f\u5426\u5fc5\u987b\n  deprecated: boolean; // \u53c2\u6570\u662f\u5426\u5e9f\u5f03\n  allowEmptyValue: boolean; // \u53c2\u6570\u662f\u5426\u5141\u8bb8\u63a7\u5236\n  example: any; // \u53c2\u6570\u7684\u793a\u4f8b\n}\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u53c2\u6570\u7684\u793a\u4f8b\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\u53bb\u5177\u4f53\u63cf\u8ff0\u53c2\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@CreateApiDoc()\n.summary('get user')\n.description('This is a open api for get user')\n.param('user id', {\n  required: true,\n  example: '123456'\n})\n.param({\n  description: 'This is a user name'\n})\n.build()\n@Get('/:userId')\nasync getUser(@Param() userId: number, @Query() name?: string) {\n  return {\n    name: 'harry',\n    age: 18\n  };\n}\n")),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1605016872114-640ff1e2-88d9-4c1e-969b-a1c8794180bd.png#height=340&id=UdmiX&margin=%5Bobject%20Object%5D&name=image.png&originHeight=680&originWidth=1112&originalType=binary&ratio=1&size=47848&status=done&style=none&width=556",width:"556"}),(0,a.kt)("h3",{id:"33-\u8fd4\u56de\u503c\u63cf\u8ff0"},"3.3 \u8fd4\u56de\u503c\u63cf\u8ff0"),(0,a.kt)("p",null,"\u4e00\u4e2a\u63a5\u53e3\u4f1a\u6709\u591a\u79cd\u8fd4\u56de\u503c\u7684\u53ef\u80fd\u6027\uff0c\u53ef\u4ee5\u8c03\u7528\u591a\u6b21 ",(0,a.kt)("inlineCode",{parentName:"p"},"respond")," \u65b9\u6cd5\u6765\u63cf\u8ff0\u4e0d\u540c\u7684\u8fd4\u56de\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u54cd\u5e94\u7684\u63a5\u53e3\u63cf\u8ff0\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"respond(\n  status: number,\n  description?: string,\n  respondType?: string,\n  options?: Partial<APIResponseFormat>\n): SwaggerAPI;\n\nexport interface APIResponseFormat {\n  status: string;\n  description: string;\n  headers: any;\n  example: any;\n}\n")),(0,a.kt)("p",null,"\u53c2\u6570\u5206\u4e3a\u56db\u4e2a\u90e8\u5206\uff0c\u9664\u4e86\u72b6\u6001\u7801\uff0c\u5176\u4ed6\u90fd\u662f\u53ef\u9009\u53c2\u6570\uff0c\u4e0b\u9762\u7684\u793a\u4f8b\u5c55\u793a\u4e86\u591a\u79cd\u4e0d\u540c\u7684\u8fd4\u56de\u63cf\u8ff0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@CreateApiDoc()\n.summary('get user')\n.description('This is a open api for get user')\n.respond(200)\n.respond(302, 'redirect to another URL')\n.respond(201, 'response a text data', 'text', {\n  headers: {\n    'x-schema': {\n      description: 'set a schema header',\n      type: 'string'\n    }\n  },\n  example: 'this is a reponse data'\n})\n.respond(500, 'error in response', 'json', {\n  example: {\n    a: 1\n  }\n})\n.build()\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u76f4\u63a5\u8bbe\u7f6e\u4e00\u4e2a\u72b6\u6001\u7801\uff0c\u4e5f\u53ef\u4ee5\u5728\u8bbe\u7f6e\u72b6\u6001\u7801\u4e4b\u540e\uff0c\u7d27\u8ddf\u7740\u8bbe\u7f6e\u63cf\u8ff0\uff0c\u4ee5\u53ca\u8fd4\u56de\u7684 header\uff0c\u6570\u636e\u7c7b\u578b\u548c\u793a\u4f8b\u3002"),(0,a.kt)("p",null,"\u5c55\u793a\u7684\u6548\u679c\u4e3a"),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1605023356892-77af3cf9-949d-49d5-adfe-8da98e888b60.png#height=829&id=nFEky&margin=%5Bobject%20Object%5D&name=image.png&originHeight=1658&originWidth=2860&originalType=binary&ratio=1&size=194050&status=done&style=none&width=1430",width:"1430"}),(0,a.kt)("h3",{id:"34-\u901a\u7528\u63cf\u8ff0"},"3.4 \u901a\u7528\u63cf\u8ff0"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Controller")," \u88c5\u9970\u5668\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Get")," \u7b49\u8def\u7531\u88c5\u9970\u5668\u4e0a\u7b80\u5355\u7684\u589e\u52a0\u63cf\u8ff0\u4fe1\u606f\u3002"),(0,a.kt)("h4",{id:"\u63a7\u5236\u5668\u5206\u7ec4\u548c\u63cf\u8ff0"},"\u63a7\u5236\u5668\u5206\u7ec4\u548c\u63cf\u8ff0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Controller('/', { tagName: 'Custom Group', description: 'Home Router' })\nexport class HomeController {}\n")),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1605011893128-f72e4916-24c7-4c59-ba76-4cd3f17c7bc9.png#height=143&id=Fqp8z&margin=%5Bobject%20Object%5D&name=image.png&originHeight=286&originWidth=808&originalType=binary&ratio=1&size=16673&status=done&style=none&width=404",width:"404"}),(0,a.kt)("h4",{id:"\u8def\u7531\u63cf\u8ff0"},"\u8def\u7531\u63cf\u8ff0"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"@Get('/', {summary: 'Main Page', description: 'This is a home router'})\nasync home() {\n  return 'Hello Midwayjs!';\n}\n")),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1605011937991-8fb2136a-f091-4016-9745-8434d8130a6a.png#height=173&id=UdC82&margin=%5Bobject%20Object%5D&name=image.png&originHeight=346&originWidth=942&originalType=binary&ratio=1&size=19218&status=done&style=none&width=471",width:"471"}),(0,a.kt)("h2",{id:""}),(0,a.kt)("h4",{id:"\u589e\u5f3a\u7684\u63a5\u53e3\u63cf\u8ff0\u4fe1\u606f\u8fdb\u9636\u6a21\u5f0f"},"\u589e\u5f3a\u7684\u63a5\u53e3\u63cf\u8ff0\u4fe1\u606f\uff08\u8fdb\u9636\u6a21\u5f0f\uff09"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u589e\u52a0\u7ec6\u8282\u63cf\u8ff0\u5b57\u6bb5\uff0c\u5219\u589e\u52a0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"@CreateApiDoc")," \u88c5\u9970\u5668\uff0c\u7528\u4e8e\u5b9a\u4e49\u63cf\u8ff0\uff0c\u5305\u62ec\u5165\u53c2\u548c\u51fa\u53c2\u3002\u6574\u4e2a\u88c5\u9970\u5668\u8bbe\u8ba1\u4e3a\u94fe\u5f0f\u8c03\u7528\uff0c\u65b9\u4fbf IDE \u83b7\u53d6\u5230\u5bf9\u5e94\u7684\u65b9\u6cd5\u548c\u53c2\u6570\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4ee5\u4e00\u4e2a\u63a5\u53e3\u4e3a\u4f8b\u3002\u6ce8\u610f\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"@CreateApiDoc"),"\xa0 \u88c5\u9970\u5668\u6700\u540e\u9700\u8981\u8ddf\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\xa0 \u65b9\u6cd5\u4f5c\u4e3a\u7ed3\u5c3e\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5b8c\u6574\u7684\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CreateApiDoc, CreateApiPropertyDoc } from '@midwayjs/swagger';\n\nexport class UserDTO {\n  @CreateApiPropertyDoc('user name')\n  @Rule(RuleType.string().required())\n  name: string;\n\n  @CreateApiPropertyDoc('user age')\n  @Rule(RuleType.number())\n  age: number;\n}\n\n@Provide()\n@Controller('/user')\nexport class UserController {\n  @Inject()\n  ctx: IMidwayKoaContext;\n\n  @Inject()\n  userService: UserService;\n\n  @(CreateApiDoc()\n    .summary('get user')\n    .description('This a a open api for get user')\n    .param('user id', {\n      required: true,\n      example: 2,\n    })\n    .param('user name')\n    .respond(200, 'success', 'text', {\n      example: 'hello world',\n    })\n    .respond(500, 'throw error')\n    .build())\n  @Get('/:userId')\n  async getUser(@Param() userId: number, @Query() name?: string) {\n    return {\n      name: 'harry',\n      age: 18,\n    };\n  }\n}\n")),(0,a.kt)("h4",{id:"\u66f4\u591a\u914d\u7f6e"},"\u66f4\u591a\u914d\u7f6e"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4fee\u6539\u9ed8\u8ba4\u7684 Swagger \u7248\u672c\uff0c\u63cf\u8ff0\u7b49\u3002\u8fd9\u4e9b\u914d\u7f6e\u53ef\u4ee5\u5728\u7528\u6237\u914d\u7f6e\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/config/config.default.ts"),"\xa0 \u4e2d\u914d\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export const swagger = {\n  title: 'midway-swagger',\n  description: 'swagger-ui for midway api',\n  version: '1.0.0',\n  termsOfService: '',\n  contact: {\n    name: 'API Support',\n    url: 'http://www.example.com/support',\n    email: 'support@example.com',\n  },\n  license: {\n    name: 'Apache 2.0',\n    url: 'https://www.apache.org/licenses/LICENSE-2.0.html',\n  },\n};\n")),(0,a.kt)("h2",{id:"\u56db\u5176\u4ed6"},"\u56db\u3001\u5176\u4ed6"),(0,a.kt)("p",null,"midwayjs Swagger\u3010\u589e\u52a0\u8fd4\u56de\u6570\u636e\u7684\u914d\u7f6e\u3011",(0,a.kt)("a",{parentName:"p",href:"https://www.yuque.com/kxuan/efuxvf/ute5ak"},"https://www.yuque.com/kxuan/efuxvf/ute5ak"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/midwayjs/midway"})))}m.isMDXComponent=!0}}]);