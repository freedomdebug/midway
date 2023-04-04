"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={},a="Change Source Dir",l={unversionedId:"change_start_dir",id:"change_start_dir",title:"Change Source Dir",description:"In some special scenarios, you can modify the src directory where the source code is located.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/change_start_dir.md",sourceDirName:".",slug:"/change_start_dir",permalink:"/en/docs/change_start_dir",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/change_start_dir.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Custom error",permalink:"/en/docs/custom_error"}},c={},p=[{value:"Modification of Source Code Directory",id:"modification-of-source-code-directory",level:2},{value:"dev development",id:"dev-development",level:3},{value:"build compilation",id:"build-compilation",level:3},{value:"Modification of Compiled Directory",id:"modification-of-compiled-directory",level:2},{value:"build compilation",id:"build-compilation-1",level:3},{value:"bootstrap startup",id:"bootstrap-startup",level:3}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"change-source-dir"},"Change Source Dir"),(0,o.kt)("p",null,"In some special scenarios, you can modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory where the source code is located."),(0,o.kt)("p",null,"Some restrictions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"@midwayjs/web(egg)egg cannot be modified due to fixed directory"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ol",{parentName:"li",start:2},(0,o.kt)("li",{parentName:"ol"},"Only pass the test under pure node project (non-integration)")))),(0,o.kt)("h2",{id:"modification-of-source-code-directory"},"Modification of Source Code Directory"),(0,o.kt)("p",null,"Below, we will change the ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory to ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," as an example."),(0,o.kt)("h3",{id:"dev-development"},"dev development"),(0,o.kt)("p",null,"The Dev command in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," needs to add a source directory to facilitate Dev search."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'"dev": "cross-env NODE_ENV=local midway-bin dev --sourceDir=./server --ts ",\n')),(0,o.kt)("h3",{id:"build-compilation"},"build compilation"),(0,o.kt)("p",null,"In order for tsc compilation to find the source directory, it is necessary to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," and add ",(0,o.kt)("inlineCode",{parentName:"p"},"rootDir")," fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "compileOnSave": true\n  "compilerOptions": {\n    // ...\n    "rootDir": "server"\n  },\n}\n')),(0,o.kt)("p",null,"In this way, development and compilation are normal."),(0,o.kt)("h2",{id:"modification-of-compiled-directory"},"Modification of Compiled Directory"),(0,o.kt)("p",null,"Compiling the directory affects the deployment and can also be modified. In this example, change the ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory to ",(0,o.kt)("inlineCode",{parentName:"p"},"build"),"."),(0,o.kt)("h3",{id:"build-compilation-1"},"build compilation"),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"outDir")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  "compileOnSave": true\n  "compilerOptions": {\n    // ...\n    "outDir": "build"\n  },\n}\n')),(0,o.kt)("p",null,"So the compilation is normal."),(0,o.kt)("h3",{id:"bootstrap-startup"},"bootstrap startup"),(0,o.kt)("p",null,"After the compilation directory is modified, the online deployment will not find the code, so if the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," is started, the code needs to be modified."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// bootstrap.js\n\nconst { join } = require('path');\nconst { Bootstrap } = require('@midwayjs/bootstrap');\n\n//...\n\n// configure method is required to configure baseDir\nBootstrap\n  .configure({\n    baseDir: join(__dirname, 'build')\n  })\n  .run();\n")),(0,o.kt)("p",null,"Configure the portal directory for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bootstrap"),"."))}s.isMDXComponent=!0}}]);