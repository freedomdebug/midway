"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70064:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const c={title:"Docker \u4e2d\u8fdb\u7a0b\u8fc7\u591a"},i=void 0,a={unversionedId:"docker",id:"version-1.0.0/docker",title:"Docker \u4e2d\u8fdb\u7a0b\u8fc7\u591a",description:"\u5728 Docker \u4e2d\u90e8\u7f72\uff0c\u7531\u4e8e egg \u4f53\u7cfb\u4f1a\u6839\u636e cpu \u6838\u6570\u6765\u542f\u52a8\u8fdb\u7a0b\uff0c\u800c Docker \u4e2d\u83b7\u53d6\u7684 cpu \u6570\u662f\u9519\u8bef\u7684\uff0c\u5c31\u4f1a\u5bfc\u81f4\u542f\u52a8\u975e\u5e38\u591a\u7684 worker \u8fdb\u7a0b\u3002",source:"@site/versioned_docs/version-1.0.0/docker.md",sourceDirName:".",slug:"/docker",permalink:"/docs/1.0.0/docker",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-1.0.0/docker.md",tags:[],version:"1.0.0",frontMatter:{title:"Docker \u4e2d\u8fdb\u7a0b\u8fc7\u591a"},sidebar:"common",previous:{title:"midway \u9ad8\u7ea7\u6d4b\u8bd5\u65b9\u6848",permalink:"/docs/1.0.0/test_more"}},s={},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Docker \u4e2d\u90e8\u7f72\uff0c\u7531\u4e8e egg \u4f53\u7cfb\u4f1a\u6839\u636e cpu \u6838\u6570\u6765\u542f\u52a8\u8fdb\u7a0b\uff0c\u800c Docker \u4e2d\u83b7\u53d6\u7684 cpu \u6570\u662f\u9519\u8bef\u7684\uff0c\u5c31\u4f1a\u5bfc\u81f4\u542f\u52a8\u975e\u5e38\u591a\u7684 worker \u8fdb\u7a0b\u3002"),(0,o.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1588996147772-bb5c173c-e6bf-4412-af85-933ccc70b79d.png#align=left&display=inline&height=2474&margin=%5Bobject%20Object%5D&name=image.png&originHeight=2474&originWidth=4760&size=1722162&status=done&style=none&width=4760",width:"4760"}),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\u4e3a\u4fee\u6539 workers \u6570\u91cf\u3002"),(0,o.kt)("p",null,"\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eggjs/egg/issues/1431"},"https://github.com/eggjs/egg/issues/1431")))}u.isMDXComponent=!0}}]);