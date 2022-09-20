"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4335],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,u=d["".concat(i,".").concat(k)]||d[k]||m[k]||o;return t?a.createElement(u,l(l({ref:n},c),{},{components:t})):a.createElement(u,l({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7949:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],p={},i="WebSocket",s={unversionedId:"extensions/ws",id:"extensions/ws",title:"WebSocket",description:"ws \u6a21\u5757\u662f Node \u7aef\u7684\u4e00\u4e2a WebSocket \u534f\u8bae\u7684\u5b9e\u73b0\uff0c\u8be5\u534f\u8bae\u5141\u8bb8\u5ba2\u6237\u7aef(\u4e00\u822c\u662f\u6d4f\u89c8\u5668)\u6301\u4e45\u5316\u548c\u670d\u52a1\u7aef\u7684\u8fde\u63a5.",source:"@site/docs/extensions/ws.md",sourceDirName:"extensions",slug:"/extensions/ws",permalink:"/en/docs/extensions/ws",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/ws.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"SocketIO",permalink:"/en/docs/extensions/socketio"},next:{title:"RabbitMQ",permalink:"/en/docs/extensions/rabbitmq"}},c={},m=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f00\u542f\u7ec4\u4ef6",id:"\u5f00\u542f\u7ec4\u4ef6",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u63d0\u4f9b Socket \u670d\u52a1",id:"\u63d0\u4f9b-socket-\u670d\u52a1",level:2},{value:"\u6d88\u606f\u548c\u54cd\u5e94",id:"\u6d88\u606f\u548c\u54cd\u5e94",level:2},{value:"WebSocket Server \u5b9e\u4f8b",id:"websocket-server-\u5b9e\u4f8b",level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",level:2},{value:"\u914d\u7f6e\u6d4b\u8bd5\u7aef\u53e3",id:"\u914d\u7f6e\u6d4b\u8bd5\u7aef\u53e3",level:3},{value:"\u6d4b\u8bd5\u4ee3\u7801",id:"\u6d4b\u8bd5\u4ee3\u7801",level:3},{value:"\u6d4b\u8bd5\u5ba2\u6237\u7aef",id:"\u6d4b\u8bd5\u5ba2\u6237\u7aef",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u9ed8\u8ba4\u914d\u7f6e",id:"\u9ed8\u8ba4\u914d\u7f6e",level:2}],d={toc:m};function k(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"websocket"},"WebSocket"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ws"},"ws")," \u6a21\u5757\u662f Node \u7aef\u7684\u4e00\u4e2a WebSocket \u534f\u8bae\u7684\u5b9e\u73b0\uff0c\u8be5\u534f\u8bae\u5141\u8bb8\u5ba2\u6237\u7aef(\u4e00\u822c\u662f\u6d4f\u89c8\u5668)\u6301\u4e45\u5316\u548c\u670d\u52a1\u7aef\u7684\u8fde\u63a5.\n\u8fd9\u79cd\u53ef\u4ee5\u6301\u7eed\u8fde\u63a5\u7684\u7279\u6027\u4f7f\u5f97 WebSocket \u7279\u522b\u9002\u5408\u7528\u4e8e\u9002\u5408\u7528\u4e8e\u6e38\u620f\u6216\u8005\u804a\u5929\u5ba4\u7b49\u4f7f\u7528\u573a\u666f\u3002"),(0,o.kt)("p",null,"Midway \u63d0\u4f9b\u4e86\u5bf9 ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ws"},"ws")," \u6a21\u5757\u7684\u652f\u6301\u548c\u5c01\u88c5\uff0c\u80fd\u591f\u7b80\u5355\u7684\u521b\u5efa\u4e00\u4e2a WebSocket \u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u63d0\u4f9b\u670d\u52a1")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u4e3b\u6846\u67b6"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u65e5\u5fd7"),(0,o.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,o.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,o.kt)("p",null,"\u5728\u73b0\u6709\u9879\u76ee\u4e2d\u5b89\u88c5 WebSocket \u7684\u4f9d\u8d56\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/ws@3 --save\n$ npm i @types/ws --save-dev\n")),(0,o.kt)("p",null,"\u6216\u8005\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/ws": "^3.0.0",\n    // ...\n  },\n  "devDependencies": {\n    "@types/ws": "^8.2.2",\n    // ...\n  }\n}\n')),(0,o.kt)("h2",{id:"\u5f00\u542f\u7ec4\u4ef6"},"\u5f00\u542f\u7ec4\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/ws")," \u53ef\u4ee5\u4f5c\u4e3a\u72ec\u7acb\u4e3b\u6846\u67b6\u4f7f\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as ws from '@midwayjs/ws';\n\n@Configuration({\n  imports: [ws],\n  // ...\n})\nexport class MainConfiguration {\n  async onReady() {\n        // ...\n  }\n}\n\n")),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u9644\u52a0\u5728\u5176\u4ed6\u7684\u4e3b\u6846\u67b6\u4e0b\uff0c\u6bd4\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/decorator';\nimport * as koa from '@midwayjs/koa';\nimport * as ws from '@midwayjs/ws';\n\n@Configuration({\n  imports: [koa, ws],\n  // ...\n})\nexport class MainConfiguration {\n  async onReady() {\n        // ...\n  }\n}\n\n")),(0,o.kt)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f WebSocket \u9879\u76ee\u7684\u57fa\u7840\u76ee\u5f55\u7ed3\u6784\uff0c\u548c\u4f20\u7edf\u5e94\u7528\u7c7b\u4f3c\uff0c\u6211\u4eec\u521b\u5efa\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"socket")," \u76ee\u5f55\uff0c\u7528\u6237\u5b58\u653e WebSocket \u4e1a\u52a1\u7684\u670d\u52a1\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 configuration.ts          ## \u5165\u53e3\u914d\u7f6e\u6587\u4ef6\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u2514\u2500\u2500 socket                    ## ws \u670d\u52a1\u7684\u6587\u4ef6\n\u2502       \u2514\u2500\u2500 hello.controller.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 bootstrap.js                  ## \u670d\u52a1\u542f\u52a8\u5165\u53e3\n\u2514\u2500\u2500 tsconfig.json\n")),(0,o.kt)("h2",{id:"\u63d0\u4f9b-socket-\u670d\u52a1"},"\u63d0\u4f9b Socket \u670d\u52a1"),(0,o.kt)("p",null,"Midway \u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@WSController")," \u88c5\u9970\u5668\u5b9a\u4e49 WebSocket \u670d\u52a1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WSController } from '@midwayjs/decorator';\n\n@WSController()\nexport class HelloSocketController {\n  // ...\n}\n")),(0,o.kt)("p",null,"\u5f53\u6709\u5ba2\u6237\u7aef\u8fde\u63a5\u65f6\uff0c\u4f1a\u89e6\u53d1 ",(0,o.kt)("inlineCode",{parentName:"p"},"connection")," \u4e8b\u4ef6\uff0c\u6211\u4eec\u5728\u4ee3\u7801\u4e2d\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@OnWSConnection()")," \u88c5\u9970\u5668\u6765\u4fee\u9970\u4e00\u4e2a\u65b9\u6cd5\uff0c\u5f53\u6bcf\u4e2a\u5ba2\u6237\u7aef\u7b2c\u4e00\u6b21\u8fde\u63a5\u670d\u52a1\u65f6\uff0c\u5c06\u81ea\u52a8\u8c03\u7528\u8be5\u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WSController, OnWSConnection, Inject } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/ws';\nimport * as http from 'http';\n\n@WSController()\nexport class HelloSocketController {\n\n  @Inject()\n  ctx: Context;\n\n  @OnWSConnection()\n  async onConnectionMethod(socket: Context, request: http.IncomingMessage) {\n    console.log(`namespace / got a connection ${this.ctx.readyState}`);\n  }\n}\n\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u7684 ctx \u7b49\u4ef7\u4e8e WebSocket \u5b9e\u4f8b\u3002"))),(0,o.kt)("h2",{id:"\u6d88\u606f\u548c\u54cd\u5e94"},"\u6d88\u606f\u548c\u54cd\u5e94"),(0,o.kt)("p",null,"WebSocket \u662f\u901a\u8fc7\u4e8b\u4ef6\u7684\u76d1\u542c\u65b9\u5f0f\u6765\u83b7\u53d6\u6570\u636e\u3002Midway \u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"@OnWSMessage()")," \u88c5\u9970\u5668\u6765\u683c\u5f0f\u5316\u63a5\u6536\u5230\u7684\u4e8b\u4ef6\uff0c\u6bcf\u6b21\u5ba2\u6237\u7aef\u53d1\u9001\u4e8b\u4ef6\uff0c\u88ab\u4fee\u9970\u7684\u65b9\u6cd5\u90fd\u5c06\u88ab\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WSController, OnWSMessage, Inject } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/ws';\n\n@WSController()\nexport class HelloSocketController {\n\n  @Inject()\n  ctx: Context;\n\n  @OnWSMessage('message')\n  async gotMessage(data) {\n    return { name: 'harry', result: parseInt(data) + 5 };\n  }\n}\n\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@WSBroadCast")," \u88c5\u9970\u5668\u5c06\u6d88\u606f\u53d1\u9001\u5230\u6240\u6709\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u4e0a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { WSController, OnWSConnection, Inject } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/ws';\n\n@WSController()\nexport class HelloSocketController {\n\n  @Inject()\n  ctx: Context;\n\n  @OnWSMessage('message')\n  @WSBroadCast()\n  async gotMyMessage(data) {\n    return { name: 'harry', result: parseInt(data) + 5 };\n  }\n\n  @OnWSDisConnection()\n  async disconnect(id: number) {\n    console.log('disconnect ' + id);\n  }\n}\n\n")),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@OnWSDisConnection")," \u88c5\u9970\u5668\uff0c\u5728\u5ba2\u6237\u7aef\u65ad\u8fde\u65f6\uff0c\u505a\u4e00\u4e9b\u989d\u5916\u5904\u7406\u3002"),(0,o.kt)("h2",{id:"websocket-server-\u5b9e\u4f8b"},"WebSocket Server \u5b9e\u4f8b"),(0,o.kt)("p",null,"\u8be5\u7ec4\u4ef6\u63d0\u4f9b\u7684 App \u5373\u4e3a WebSocket Server \u5b9e\u4f8b\u672c\u8eab\uff0c\u6211\u4eec\u53ef\u4ee5\u5982\u4e0b\u83b7\u53d6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, App } from '@midwayjs/decorator';\nimport { Application } from '@midwayjs/ws';\n\n@Controller()\nexport class HomeController {\n\n  @App('webSocket')\n  wsApp: Application;\n}\n")),(0,o.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5176\u4ed6 Controller \u6216\u8005 Service \u4e2d\u5e7f\u64ad\u6d88\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, App } from '@midwayjs/decorator';\nimport { Application } from '@midwayjs/ws';\n\n@Controller()\nexport class HomeController {\n\n  @App('webSocket')\n  wsApp: Application;\n  \n  async invoke() {\n    this.wsApp.clients.forEach(ws => {\n      // ws.send('something');\n    });\n  }\n}\n")),(0,o.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,o.kt)("h3",{id:"\u914d\u7f6e\u6d4b\u8bd5\u7aef\u53e3"},"\u914d\u7f6e\u6d4b\u8bd5\u7aef\u53e3"),(0,o.kt)("p",null,"\u7531\u4e8e ws \u6846\u67b6\u53ef\u4ee5\u72ec\u7acb\u542f\u52a8\uff08\u4f9d\u9644\u4e8e\u9ed8\u8ba4\u7684 http \u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u548c\u5176\u4ed6 midway  \u6846\u67b6\u4e00\u8d77\u542f\u52a8\uff09\u3002"),(0,o.kt)("p",null,"\u5f53\u4f5c\u4e3a\u72ec\u7acb\u6846\u67b6\u542f\u52a8\u65f6\uff0c\u9700\u8981\u6307\u5b9a\u7aef\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  webSocket: {\n    port: 3000,\n  },\n}\n")),(0,o.kt)("p",null,"\u5f53\u4f5c\u4e3a\u526f\u6846\u67b6\u542f\u52a8\u65f6\uff08\u6bd4\u5982\u548c http \uff0c\u7531\u4e8e http \u5728\u5355\u6d4b\u65f6\u672a\u6307\u5b9a\u7aef\u53e3\uff08\u4f7f\u7528 supertest \u81ea\u52a8\u751f\u6210\uff09\uff0c\u65e0\u6cd5\u5f88\u597d\u7684\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u4ec5\u5728\u6d4b\u8bd5\u73af\u5883\u663e\u5f0f\u6307\u5b9a\u4e00\u4e2a\u7aef\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.unittest\nexport default {\n  // ...\n  koa: {\n    port: null,\n  },\n  webSocket: {\n    port: 3000,\n  },\n}\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"1\u3001\u8fd9\u91cc\u7684\u7aef\u53e3\u4ec5\u4e3a WebSocket \u670d\u52a1\u5728\u6d4b\u8bd5\u65f6\u542f\u52a8\u7684\u7aef\u53e3"),(0,o.kt)("li",{parentName:"ul"},"2\u3001koa \u4e2d\u7684\u7aef\u53e3\u4e3a null\uff0c\u5373\u610f\u5473\u7740\u5728\u6d4b\u8bd5\u73af\u5883\u4e0b\uff0c\u4e0d\u914d\u7f6e\u7aef\u53e3\uff0c\u4e0d\u4f1a\u542f\u52a8 http \u670d\u52a1")))),(0,o.kt)("h3",{id:"\u6d4b\u8bd5\u4ee3\u7801"},"\u6d4b\u8bd5\u4ee3\u7801"),(0,o.kt)("p",null,"\u548c\u5176\u4ed6 Midway \u6d4b\u8bd5\u65b9\u6cd5\u4e00\u6837\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," \u542f\u52a8\u9879\u76ee\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, close } from '@midwayjs/mock'\n// \u8fd9\u91cc\u4f7f\u7528\u7684 Framework \u5b9a\u4e49\uff0c\u4ee5\u4e3b\u6846\u67b6\u4e3a\u51c6\nimport { Framework } from '@midwayjs/koa';\n\ndescribe('/test/index.test.ts', () => {\n\n  it('should create app and test webSocket', async () => {\n    const app = await createApp<Framework>();\n\n    //...\n\n    await close(app);\n  });\n\n});\n")),(0,o.kt)("h3",{id:"\u6d4b\u8bd5\u5ba2\u6237\u7aef"},"\u6d4b\u8bd5\u5ba2\u6237\u7aef"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ws")," \u6765\u6d4b\u8bd5\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528 Midway \u63d0\u4f9b\u7684\u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"ws"),"  \u6a21\u5757\u5c01\u88c5\u7684\u6d4b\u8bd5\u5ba2\u6237\u7aef\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, close, createWebSocketClient } from '@midwayjs/mock';\nimport { sleep } from '@midwayjs/decorator';\n\n// ... \u7701\u7565 describe\n\nit('should test create websocket app', async () => {\n\n  // \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\n  const app = await createApp<Framework>();\n\n  // \u521b\u5efa\u4e00\u4e2a\u5ba2\u6237\u7aef\n  const client = await createWebSocketClient(`ws://localhost:3000`);\n\n  const result = await new Promise(resolve => {\n\n    client.on('message', (data) => {\n      // xxxx\n      resolve(data);\n    });\n\n    // \u53d1\u9001\u4e8b\u4ef6\n    client.send(1);\n\n  });\n\n  // \u5224\u65ad\u7ed3\u679c\n  expect(JSON.parse(result)).toEqual({\n    name: 'harry',\n    result: 6,\n  });\n\n  await sleep(1000);\n\n  // \u5173\u95ed\u5ba2\u6237\u7aef\n  await client.close();\n\n  // \u5173\u95ed\u670d\u52a1\u7aef\n  await close(app);\n\n});\n")),(0,o.kt)("p",null,"\u4f7f\u7528 node \u81ea\u5e26\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"events")," \u6a21\u5757\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"once")," \u65b9\u6cd5\u6765\u4f18\u5316\uff0c\u5c31\u4f1a\u53d8\u6210\u4e0b\u9762\u7684\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { sleep } from '@midwayjs/decorator';\nimport { once } from 'events';\nimport { createApp, close, createWebSocketClient } from '@midwayjs/mock';\n\n// ... \u7701\u7565 describe\n\nit('should test create websocket app', async () => {\n\n  // \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\n  const app = await createApp<Framework>(process.cwd());\n\n  // \u521b\u5efa\u4e00\u4e2a\u5ba2\u6237\u7aef\n  const client = await createWebSocketClient(`ws://localhost:3000`);\n\n  // \u53d1\u9001\u4e8b\u4ef6\n  client.send(1);\n\n  // \u7528\u4e8b\u4ef6\u7684 promise \u5199\u6cd5\u76d1\u542c\n  let gotEvent = once(client, 'message');\n  // \u7b49\u5f85\u8fd4\u56de\n  let [data] = await gotEvent;\n\n  // \u5224\u65ad\u7ed3\u679c\n  expect(JSON.parse(data)).toEqual({\n    name: 'harry',\n    result: 6,\n  });\n\n  await sleep(1000);\n\n  // \u5173\u95ed\u5ba2\u6237\u7aef\n  await client.close();\n\n  // \u5173\u95ed\u670d\u52a1\u7aef\n  await close(app);\n});\n\n")),(0,o.kt)("p",null,"\u4e24\u79cd\u5199\u6cd5\u6548\u679c\u76f8\u540c\uff0c\u6309\u81ea\u5df1\u7406\u89e3\u7684\u5199\u5c31\u884c\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("h2",{id:"\u9ed8\u8ba4\u914d\u7f6e"},"\u9ed8\u8ba4\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/ws")," \u7684\u914d\u7f6e\u6837\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  webSocket: {\n    port: 7001,\n  },\n}\n")),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/ws")," \u548c\u5176\u4ed6 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u540c\u65f6\u542f\u7528\u65f6\uff0c\u53ef\u4ee5\u590d\u7528\u7aef\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nexport default {\n  // ...\n  koa: {\n    port: 7001,\n  }\n  webSocket: {\n    // \u8fd9\u91cc\u4e0d\u914d\u7f6e\u5373\u53ef\n  },\n}\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"port"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u5982\u679c\u4f20\u9012\u4e86\u8be5\u7aef\u53e3\uff0cws \u5185\u90e8\u4f1a\u521b\u5efa\u4e00\u4e2a\u8be5\u7aef\u53e3\u7684 HTTP \u670d\u52a1\u3002\u5982\u679c\u5e0c\u671b\u548c midway \u5176\u4ed6\u7684 web \u6846\u67b6\u914d\u5408\u4f7f\u7528\uff0c\u8bf7\u4e0d\u8981\u4f20\u9012\u8be5\u53c2\u6570\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"server"),(0,o.kt)("td",{parentName:"tr",align:null},"httpServer"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u5f53\u4f20\u9012 port \u65f6\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u5df2\u7ecf\u5b58\u5728\u7684 webServer")))),(0,o.kt)("p",null,"\u66f4\u591a\u7684\u542f\u52a8\u9009\u9879\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/websockets/ws"},"ws \u6587\u6863"),"\u3002"))}k.isMDXComponent=!0}}]);