"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,c(c({ref:t},p),{},{components:n})):a.createElement(h,c({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={},c="Captcha",o={unversionedId:"extensions/captcha",id:"extensions/captcha",title:"Captcha",description:"Universal captcha components for @midwayjs/faas , @midwayjs/web , @midwayjs/koa and @midwayjs/express frameworks, support image captcha, calculation expression and other types of verification codes.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/captcha.md",sourceDirName:"extensions",slug:"/extensions/captcha",permalink:"/en/docs/extensions/captcha",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/captcha.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"HTTP proxy",permalink:"/en/docs/extensions/http-proxy"},next:{title:"TypeORM",permalink:"/en/docs/extensions/orm"}},s={},l=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Enable components",id:"enable-components",level:2},{value:"Call service",id:"call-service",level:2},{value:"Available configurations",id:"available-configurations",level:2},{value:"Effect",id:"effect",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"captcha"},"Captcha"),(0,i.kt)("p",null,"Universal captcha components for ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," frameworks, support ",(0,i.kt)("inlineCode",{parentName:"p"},"image captcha"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"calculation expression")," and other types of verification codes."),(0,i.kt)("p",null,"You can also use this component to implement verification capabilities such as ",(0,i.kt)("inlineCode",{parentName:"p"},"SMS verification code"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Email verification code"),", but note that this component itself does not contain the function of sending SMS messages and emails."),(0,i.kt)("p",null,"Related information:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,i.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,i.kt)("h2",{id:"install-dependencies"},"Install dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/captcha@3 --save\n")),(0,i.kt)("p",null,"Or add the following dependencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and reinstall."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/captcha": "^3.0.0",\n    // ...\n  },\n}\n')),(0,i.kt)("h2",{id:"enable-components"},"Enable components"),(0,i.kt)("p",null,"Import components in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/configuration.ts"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as captcha from '@midwayjs/captcha';\n\n@Configuration({\n  imports: [\n    // ...other components\n    captcha\n  ],\n})\nexport class MainConfiguration {}\n")),(0,i.kt)("h2",{id:"call-service"},"Call service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CaptchaService } from '@midwayjs/captcha';\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx;\n\n  @Inject()\n  captchaService: CaptchaService;\n\n  // Example: Get Image Captcha\n  @Get('/get-image-captcha')\n  async getImageCaptcha() {\n    const { id, imageBase64 } = await this.captchaService.image({ width: 120, height: 40 });\n    return {\n      id,          // verification code id\n      imageBase64, // The base64 data of the captcha SVG image can be directly put into the img tag of the front end\n    }\n  }\n\n  // Example: Get Calculation Expression Verification Code\n  @Get('/get-formula-captcha')\n  async getFormulaCaptcha() {\n    const { id, imageBase64 } = await this.captchaService.formula({ noise: 1 });\n    return {\n      id,          // verification code id\n      imageBase64, // The base64 data of the captcha SVG image can be directly put into the img tag of the front end\n    }\n  }\n\n  // Verify that the verification code is correct\n  @Post('/check-captcha')\n  async getCaptcha() {\n    const { id, answer } = this.ctx.request.body;\n    const passed: boolean = await this.captchaService.check(id, answer);\n    if (passed) {\n      return 'passed';\n    }\n    return 'error';\n  }\n\n  // Example: SMS verification code\n  @Post('/sms-code')\n  async sendSMSCode() {\n    // Verify that the verification code is correct\n    const { id, text: code } = await this.captchaService.text({ size: 4 });\n    await sendSMS(18888888888, code);\n    return { id }\n  }\n\n  // Example: Email verification code\n  @Post('/email-code')\n  async sendEmailCode() {\n    // Verify that the verification code is correct\n    const { id, text: code } = await this.captchaService.text({ type: 'number'});\n    await sendEmail('admin@example.com', code);\n    return { id }\n  }\n\n   // Example: Stuffing arbitrary text content into a captcha\n  @Get('/test-text')\n  async testText() {\n    // Save the content and get the verification code id\n    const id: string = await this.captchaService.set('123abc');\n    // According to the verification code id, verify whether the content is correct\n    const passed: boolean = await this.captchaService.check(id, '123abc');\n    return {\n      passed: passed === true,\n    }\n  }\n}\n")),(0,i.kt)("h2",{id:"available-configurations"},"Available configurations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CaptchaOptions {\n  // The number of interference lines, the default is 1\n  noise?: number;\n  // width, default is 120px\n  width?: number;\n  // width, default is 40px\n  height?: number;\n  // Graphic verification code configuration, the graphic contains some characters\n  image?: {\n    // Verification code character length, default 4 characters\n    size?: number;\n    // The character type in the image verification code, the default is 'mixed'\n    // - 'mixed' means 0-9, A-Z and a-z\n    // - 'letter' means A-Z and a-z\n    // - 'number' means 0-9\n    type?: 'mixed',\n    // The number of interference lines, the default is 1\n    noise?: number;\n    // width, default is 120px\n    width?: number;\n    // width, default is 40px\n    height?: number;\n  },\n  // Calculation formula verification code configuration, for example, the returned image content is 1+2, the user needs to fill in 3\n  formula?: {\n     // The number of interference lines, the default is 1\n    noise?: number;\n    // width, default is 120px\n    width?: number;\n    // width, default is 40px\n    height?: number;\n  },\n  // Plain text verification code configuration, based on the plain text verification code, SMS verification code and email verification code can be implemented\n  text?: {\n    // Verification code character length, default 4 characters\n    size?: number;\n    // The character type in the image verification code, the default is 'mixed'\n    // - 'mixed' means 0-9, A-Z and a-z\n    // - 'letter' means A-Z and a-z\n    // - 'number' means 0-9\n    type?: 'mixed',\n  },\n  // Verification code expiration time, the default is 1h\n  expirationTime?: 3600,\n  // key prefix stored in verification code\n  idPrefix: 'midway:vc',\n}\n\nexport const captcha: CaptchaOptions = {\n  size: 4,\n  noise: 1,\n  width: 120,\n  height: 40,\n  image: { // Will merge captcha size and other configurations\n    type: 'mixed',\n  },\n  formula: {}, // Will merge captcha's size and other configurations\n  text: {}, // Will merge captcha size and other configurations\n  expirationTime: 3600,\n  idPrefix: 'midway:vc',\n}\n")),(0,i.kt)("h2",{id:"effect"},"Effect"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Picture verification code")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://gw.alicdn.com/imgextra/i4/O1CN014cEzLH23vEniOgoyp_!!6000000007317-2-tps-120-40.png",alt:"\u56fe\u7247\u9a8c\u8bc1\u7801"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Calculation expression")),(0,i.kt)("p",null," ",(0,i.kt)("img",{parentName:"p",src:"https://gw.alicdn.com/imgextra/i4/O1CN01u3Mj0q24lRx1md9pX_!!6000000007431-2-tps-120-40.png",alt:"\u8ba1\u7b97\u8868\u8fbe\u5f0f"})))}d.isMDXComponent=!0}}]);