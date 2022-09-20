"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8329],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9453:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),s=["components"],o={},l="Redis",p={unversionedId:"extensions/redis",id:"extensions/redis",title:"Redis",description:"\u8fd9\u91cc\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u5728 Midway \u4e2d\u4f7f\u7528 Redis\u3002",source:"@site/docs/extensions/redis.md",sourceDirName:"extensions",slug:"/extensions/redis",permalink:"/en/docs/extensions/redis",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/redis.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Sequelize",permalink:"/en/docs/extensions/sequelize"},next:{title:"MongoDB",permalink:"/en/docs/extensions/mongodb"}},c={},d=[{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2},{value:"\u5f15\u5165\u7ec4\u4ef6",id:"\u5f15\u5165\u7ec4\u4ef6",level:2},{value:"\u914d\u7f6e Redis",id:"\u914d\u7f6e-redis",level:2},{value:"\u4f7f\u7528 Redis \u670d\u52a1",id:"\u4f7f\u7528-redis-\u670d\u52a1",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redis"},"Redis"),(0,i.kt)("p",null,"\u8fd9\u91cc\u4ecb\u7ecd\u5982\u4f55\u5feb\u901f\u5728 Midway \u4e2d\u4f7f\u7528 Redis\u3002"),(0,i.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u4e3b\u6846\u67b6"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u72ec\u7acb\u65e5\u5fd7"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,i.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/redis")," \u662f\u4e3b\u8981\u7684\u529f\u80fd\u5305\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/redis@3 --save\n")),(0,i.kt)("p",null,"\u6216\u8005\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/redis": "^3.0.0",\n    // ...\n  }\n}\n')),(0,i.kt)("h2",{id:"\u5f15\u5165\u7ec4\u4ef6"},"\u5f15\u5165\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u9996\u5148\uff0c\u5f15\u5165 \u7ec4\u4ef6\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/configuration.ts")," \u4e2d\u5bfc\u5165\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration } from '@midwayjs/decorator';\nimport * as redis from '@midwayjs/redis';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    // ...\n    redis       // \u5bfc\u5165 redis \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class MainConfiguration {\n}\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e-redis"},"\u914d\u7f6e Redis"),(0,i.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5355\u5ba2\u6237\u7aef\u914d\u7f6e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// src/config/config.default.ts\nexport default {\n  // ...\n  redis: {\n    client: {\n      port: 6379, // Redis port\n      host: "127.0.0.1", // Redis host\n      password: "auth",\n      db: 0,\n    },\n  },\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sentinel \u914d\u7f6e")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  redis: {\n    client: {\n      sentinels: [{          // Sentinel instances\n        port: 26379,         // Sentinel port\n        host: '127.0.0.1',   // Sentinel host\n      }],\n      name: 'mymaster',      // Master name\n      password: 'auth',\n      db: 0\n    },\n  },\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cluster \u6a21\u5f0f\u914d\u7f6e\uff0c\u9700\u8981\u914d\u7f6e\u591a\u4e2a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  redis: {\n    // Cluster Redis\n    client: {\n      cluster: true,\n      nodes: [{\n        host: 'host',\n        port: 'port',\n      },{\n        host: 'host',\n        port: 'port',\n      }],\n      redisOptions: {\n        family: '',\n        password: 'xxxx',\n        db: 'xxx'\n      }\n    }\n  },\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u591a\u4e2a\u5ba2\u6237\u7aef\u914d\u7f6e\uff0c\u9700\u8981\u914d\u7f6e\u591a\u4e2a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default.ts\nexport default {\n  // ...\n  redis: {\n        // Multi Redis\n    clients: {\n      instance1: {\n        host: 'host',\n        port: 'port',\n        password: 'password',\n        db: 'db',\n      },\n      instance2: {\n        host: 'host',\n        port: 'port',\n        password: 'password',\n        db: 'db',\n      },\n    },\n  },\n}\n")),(0,i.kt)("p",null,"\u66f4\u591a\u53c2\u6570\u53ef\u4ee5\u67e5\u770b ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/luin/ioredis/blob/master/API.md#new_Redis_new"},"ioredis \u6587\u6863"),"\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528-redis-\u670d\u52a1"},"\u4f7f\u7528 Redis \u670d\u52a1"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u4efb\u610f\u7684\u4ee3\u7801\u4e2d\u6ce8\u5165\u4f7f\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Controller, Inject, Get } from '@midwayjs/decorator';\nimport { RedisService } from '@midwayjs/redis';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  redisService: RedisService;\n\n  async invoke() {\n\n    // \u7b80\u5355\u8bbe\u7f6e\n    await this.redisService.set('foo', 'bar');\n\n    // \u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\n    await this.redisService.set('foo', 'bar', 'EX', 10);\n\n    // \u83b7\u53d6\u6570\u636e\n    const result = await this.redisService.get('foo');\n\n   // result => bar\n  }\n}\n")),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"RedisServiceFactory")," \u83b7\u53d6\u4e0d\u540c\u7684\u5b9e\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { RedisServiceFactory } from '@midwayjs/redis';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  redisServiceFactory: RedisServiceFactory;\n\n  async save() {\n    const redis1 = this.redisServiceFactory.get('instance1');\n    const redis2 = this.redisServiceFactory.get('instance3');\n\n    //...\n\n  }\n}\n")))}m.isMDXComponent=!0}}]);