"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={},l="Alinode",i={unversionedId:"extensions/alinode",id:"extensions/alinode",title:"Alinode",description:"\u51c6\u5907\u5de5\u4f5c",source:"@site/docs/extensions/alinode.md",sourceDirName:"extensions",slug:"/extensions/alinode",permalink:"/docs/extensions/alinode",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/alinode.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"cfork",permalink:"/docs/extensions/cfork"},next:{title:"Prometheus",permalink:"/docs/extensions/prometheus"}},p={},s=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u521b\u5efa\u670d\u52a1",id:"\u521b\u5efa\u670d\u52a1",level:2},{value:"\u5b89\u88c5\u76d1\u63a7\u4f9d\u8d56",id:"\u5b89\u88c5\u76d1\u63a7\u4f9d\u8d56",level:2},{value:"\u542f\u52a8 node \u670d\u52a1",id:"\u542f\u52a8-node-\u670d\u52a1",level:2},{value:"Docker \u5bb9\u5668\u7684\u65b9\u6cd5",id:"docker-\u5bb9\u5668\u7684\u65b9\u6cd5",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alinode"},"Alinode"),(0,a.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u9700\u8981\u63a5\u5165\u7684\u5e94\u7528\u662f\u8981\u90e8\u7f72\u5728\u72ec\u7acb\u7684\u670d\u52a1\u83b7\u53d6\u4e91\u73af\u5883\uff0c\u53ef\u4ee5\u63a5\u5165\u4e92\u8054\u7f51\u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u670d\u52a1"},"\u521b\u5efa\u670d\u52a1"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65")),(0,a.kt)("p",null,"\u767b\u5f55\u963f\u91cc\u4e91\uff0c\u70b9\u51fb\u5f00\u901a ",(0,a.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/nodejs"},"\u963f\u91cc\u4e91\u7684 Node.js \u6027\u80fd\u5e73\u53f0")," \u7684\u670d\u52a1\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6b65")),(0,a.kt)("p",null,"\u521b\u5efa\u65b0\u5e94\u7528\uff0c\u83b7\u53d6 APP ID \u548c App Secret\u3002"),(0,a.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2021/png/187105/1617267785895-dd0fb702-91c7-4b25-9c64-8a9358f2d254.png#align=left&display=inline&height=351&margin=%5Bobject%20Object%5D&name=image.png&originHeight=702&originWidth=1548&size=106487&status=done&style=none&width=774",width:"774"}),(0,a.kt)("h2",{id:"\u5b89\u88c5\u76d1\u63a7\u4f9d\u8d56"},"\u5b89\u88c5\u76d1\u63a7\u4f9d\u8d56"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65")),(0,a.kt)("p",null,"\u5b89\u88c5 Node.js \u6027\u80fd\u5e73\u53f0\u6240\u9700\u7684\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5b89\u88c5\u7248\u672c\u7ba1\u7406\u5de5\u5177 tnvm\uff0c\u5b89\u88c5\u8fc7\u7a0b\u51fa\u9519\u53c2\u8003\uff1ahttps://github.com/aliyun-node/tnvm\n$ wget -O- https://raw.githubusercontent.com/aliyun-node/tnvm/master/install.sh | bash\n$ source ~/.bashrc\n\n# tnvm ls-remote alinode                                # \u67e5\u770b\u9700\u8981\u7684\u7248\u672c\n$ tnvm install alinode-v6.5.0                   # \u5b89\u88c5\u9700\u8981\u7684\u7248\u672c\n$ tnvm use alinode-v6.5.0                           # \u4f7f\u7528\u9700\u8981\u7684\u7248\u672c\n\n$ npm install @alicloud/agenthub -g         # \u5b89\u88c5 agenthub\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u6709\u4e09\u4e2a\u90e8\u5206"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\u3001\u5b89\u88c5 tnvm\uff08alinode \u6e90\uff09"),(0,a.kt)("li",{parentName:"ul"},"2\u3001\u4f7f\u7528 tnvm \u5b89\u88c5 alinode\uff08\u66ff\u4ee3\u9ed8\u8ba4\u7684 node\uff09"),(0,a.kt)("li",{parentName:"ul"},"3\u3001\u5b89\u88c5 alinode \u9700\u8981\u7684\u6570\u636e\u91c7\u96c6\u5668")),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u68c0\u67e5\u4e00\u4e0b\uff0c\u9700\u8981\u786e\u4fdd ",(0,a.kt)("inlineCode",{parentName:"p"},"which node")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"which agenthub")," \u7684\u8def\u5f84\u4e2d\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"p"},".tnvm")," \u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ which node\n/root/.tnvm/versions/alinode/v3.11.4/bin/node\n\n$ which agenthub\n/root/.tnvm/versions/alinode/v3.11.4/bin/agenthub\n")),(0,a.kt)("p",null,"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u521b\u5efa\u65b0\u5e94\u7528")," \u4e2d\u83b7\u5f97\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"App ID")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"App Secret")," \u6309\u5982\u4e0b\u6240\u793a\u4fdd\u5b58\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"yourconfig.json"),"\u3002\u6bd4\u5982\u653e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "appid": "****",\n  "secret": "****",\n}\n')),(0,a.kt)("p",null,"\u542f\u52a8\u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"agenthub start yourconfig.json\n")),(0,a.kt)("h2",{id:"\u542f\u52a8-node-\u670d\u52a1"},"\u542f\u52a8 node \u670d\u52a1"),(0,a.kt)("p",null,"\u5728\u5b89\u88c5\u4e86\u670d\u52a1\u5668\u4e2d\uff0c\u542f\u52a8 Node \u670d\u52a1\u65f6\uff0c\u9700\u8981\u52a0\u5165 ENABLE_NODE_LOG=YES \u73af\u5883\u53d8\u91cf\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ NODE_ENV=production ENABLE_NODE_LOG=YES node bootstrap.js\n")),(0,a.kt)("h2",{id:"docker-\u5bb9\u5668\u7684\u65b9\u6cd5"},"Docker \u5bb9\u5668\u7684\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5173\u4e8e docker \u5bb9\u5668\u7684\u65b9\u6cd5\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/66027.html?spm=a2c4g.11186623.6.580.261ba70feI6mWt"},"\u6587\u6863"),"\u3002"),(0,a.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("p",null,"\u66f4\u591a\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b\u963f\u91cc\u4e91 Node.js \u6027\u80fd\u5e73\u53f0\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/60338.html?spm=a2c4g.11186623.6.548.599312e6IkGO9v"},"\u6587\u6863"),"\u3002"))}u.isMDXComponent=!0}}]);