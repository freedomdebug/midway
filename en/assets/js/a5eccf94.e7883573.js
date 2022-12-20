"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?o.createElement(k,s(s({ref:t},u),{},{components:n})):o.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={},s="Hooks",i={unversionedId:"hooks/builtin-hooks",id:"hooks/builtin-hooks",title:"Hooks",description:"Midway Hooks can use the Hooks function to obtain the runtime context.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/hooks/builtin-hooks.md",sourceDirName:"hooks",slug:"/hooks/builtin-hooks",permalink:"/en/docs/hooks/builtin-hooks",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/builtin-hooks.md",tags:[],version:"current",frontMatter:{},sidebar:"hooks",previous:{title:"API Development",permalink:"/en/docs/hooks/api"},next:{title:"validate",permalink:"/en/docs/hooks/validate"}},l={},p=[{value:"Grammar",id:"grammar",level:2},{value:"Hooks Supported",id:"hooks-supported",level:2},{value:"useContext",id:"usecontext",level:3},{value:"Create reusable Hooks",id:"create-reusable-hooks",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hooks"},"Hooks"),(0,r.kt)("p",null,"Midway Hooks can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hooks")," function to obtain the runtime context."),(0,r.kt)("h2",{id:"grammar"},"Grammar"),(0,r.kt)("p",null,"Hooks needs to be used in the Api interface."),(0,r.kt)("p",null,"Effective examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  useContext\n} from '@midwayjs/hooks';\nimport { Context } from '@midwayjs/koa';\n\nexport default Api(Get(), async () => {\n  const ctx = useContext<Context>();\n  console.log(ctx.method);\n  // ...\n});\n")),(0,r.kt)("p",null,"Invalid example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useContext } from '@midwayjs/hooks';\n\nconst ctx = useContext(); // will throw error\n")),(0,r.kt)("h2",{id:"hooks-supported"},"Hooks Supported"),(0,r.kt)("h3",{id:"usecontext"},"useContext"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useContext()")," function will return the context related to this request, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Context")," returned is determined by the framework used at the bottom."),(0,r.kt)("p",null,"Taking ",(0,r.kt)("a",{parentName:"p",href:"https://koajs.com/"},"Koa")," framework as an example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"useContext")," will return Koa's ",(0,r.kt)("a",{parentName:"p",href:"https://koajs.com/#context"},"Context")," object."),(0,r.kt)("p",null,"Take obtaining the request Method and Path as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  useContext\n} from '@midwayjs/hooks';\nimport { Context } from '@midwayjs/koa';\n\nexport default Api(Get(), async () => {\n  const ctx = useContext<Context>();\n  return {\n    method: ctx.method\n    path: ctx.path\n  };\n});\n")),(0,r.kt)("p",null,"You can label the type of the current context by generics."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Koa\nimport { Context } from '@midwayjs/koa';\nconst ctx = useContext<Context>();\n\n// FaaS\nimport { Context } from '@midwayjs/faas';\nconst ctx = useContext<Context>();\n")),(0,r.kt)("h2",{id:"create-reusable-hooks"},"Create reusable Hooks"),(0,r.kt)("p",null,"You can create reusable Hooks for use in multiple interfaces."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api\n  Get\n  useContext\n} from '@midwayjs/hooks';\nimport { Context } from '@midwayjs/koa';\n\nfunction useIp() {\n  const ctx = useContext<Context>();\n  return ctx.ip;\n}\n\nexport default Api(Get(), async () => {\n  const ip = useIp();\n  return {\n    ip\n  };\n});\n")),(0,r.kt)("p",null,"Integrated call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import getIp from './api';\nconst { ip } = await getIp();\nconsole.log(ip); // 127.0.0.1\n")))}c.isMDXComponent=!0}}]);