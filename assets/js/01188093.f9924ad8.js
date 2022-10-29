"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6052],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(h,c(c({ref:n},l),{},{components:t})):a.createElement(h,c({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=t[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={},c=void 0,o={unversionedId:"extensions/captcha",id:"extensions/captcha",title:"captcha",description:"\u9a8c\u8bc1\u7801",source:"@site/docs/extensions/captcha.md",sourceDirName:"extensions",slug:"/extensions/captcha",permalink:"/docs/extensions/captcha",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/captcha.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"HTTP \u4ee3\u7406",permalink:"/docs/extensions/http-proxy"},next:{title:"TypeORM",permalink:"/docs/extensions/orm"}},s={},p=[{value:"\u9a8c\u8bc1\u7801",id:"\u9a8c\u8bc1\u7801",level:2},{value:"Usage",id:"usage",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u6548\u679c",id:"\u6548\u679c",level:2},{value:"\u56fe\u7247\u9a8c\u8bc1\u7801",id:"\u56fe\u7247\u9a8c\u8bc1\u7801",level:3},{value:"\u8ba1\u7b97\u8868\u8fbe\u5f0f",id:"\u8ba1\u7b97\u8868\u8fbe\u5f0f",level:3}],l={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u9a8c\u8bc1\u7801"},"\u9a8c\u8bc1\u7801"),(0,r.kt)("p",null,"\u9002\u7528\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/web")," \u3001",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/express")," \u591a\u79cd\u6846\u67b6\u7684\u901a\u7528\u9a8c\u8bc1\u7801\u7ec4\u4ef6\uff0c\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u56fe\u7247\u9a8c\u8bc1\u7801"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u8ba1\u7b97\u8868\u8fbe\u5f0f")," \u7b49\u7c7b\u578b\u9a8c\u8bc1\u7801\u3002"),(0,r.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6b64\u7ec4\u4ef6\uff0c\u6765\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u77ed\u4fe1\u9a8c\u8bc1\u7801"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"\u90ae\u4ef6\u9a8c\u8bc1\u7801")," \u7b49\u9a8c\u8bc1\u80fd\u529b\u3002"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u4f9d\u8d56")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/captcha@3 --save\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5728 configuration \u4e2d\u5f15\u5165\u7ec4\u4ef6,")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as captcha from '@midwayjs/captcha';\n@Configuration({\n  imports: [\n    // ...other components\n    captcha\n  ],\n})\nexport class AutoConfiguration {}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { CaptchaService } from '@midwayjs/captcha';\n@Controller('/')\nexport class HomeController {\n\n  @Inject()\n  ctx;\n\n  @Inject()\n  captchaService: CaptchaService;\n\n  // \u793a\u4f8b\uff1a\u83b7\u53d6\u56fe\u50cf\u9a8c\u8bc1\u7801\n  @Get('/get-image-captcha')\n  async getImageCaptcha() {\n    const { id, imageBase64 } = await this.captchaService.image({ width: 120, height: 40 });\n    return {\n      id,          // \u9a8c\u8bc1\u7801 id\n      imageBase64, // \u9a8c\u8bc1\u7801 SVG \u56fe\u7247\u7684 base64 \u6570\u636e\uff0c\u53ef\u4ee5\u76f4\u63a5\u653e\u5165\u524d\u7aef\u7684 img \u6807\u7b7e\u5185\n    }\n  }\n\n  // \u793a\u4f8b\uff1a\u83b7\u53d6\u8ba1\u7b97\u8868\u8fbe\u5f0f\u9a8c\u8bc1\u7801\n  @Get('/get-formula-captcha')\n  async getFormulaCaptcha() {\n    const { id, imageBase64 } = await this.captchaService.formula({ noise: 1 });\n    return {\n      id,          // \u9a8c\u8bc1\u7801 id\n      imageBase64, // \u9a8c\u8bc1\u7801 SVG \u56fe\u7247\u7684 base64 \u6570\u636e\uff0c\u53ef\u4ee5\u76f4\u63a5\u653e\u5165\u524d\u7aef\u7684 img \u6807\u7b7e\u5185\n    }\n  }\n\n  // \u9a8c\u8bc1\u9a8c\u8bc1\u7801\u662f\u5426\u6b63\u786e\n  @Post('/check-captcha')\n  async getCaptcha() {\n    const { id, answer } = this.ctx.request.body;\n    const passed: boolean = await this.captchaService.check(id, answer);\n    if (passed) {\n      return 'passed';\n    }\n    return 'error';\n  }\n\n  // \u793a\u4f8b\uff1a\u77ed\u4fe1\u9a8c\u8bc1\u7801\n  @Post('/sms-code')\n  async sendSMSCode() {\n    // \u9a8c\u8bc1\u9a8c\u8bc1\u7801\u662f\u5426\u6b63\u786e\n    const { id, text: code } = await this.captchaService.text({ size: 4 });\n    await sendSMS(18888888888, code);\n    return { id }\n  }\n\n  // \u793a\u4f8b\uff1a\u90ae\u4ef6\u9a8c\u8bc1\u7801\n  @Post('/email-code')\n  async sendEmailCode() {\n    // \u9a8c\u8bc1\u9a8c\u8bc1\u7801\u662f\u5426\u6b63\u786e\n    const { id, text: code } = await this.captchaService.text({ type: 'number'});\n    await sendEmail('admin@example.com', code);\n    return { id }\n  }\n\n   // \u793a\u4f8b\uff1a\u5c06\u4efb\u610f\u6587\u672c\u5185\u5bb9\u585e\u5165\u9a8c\u8bc1\u7801\u4e2d\n  @Get('/test-text')\n  async testText() {\n    // \u5b58\u5165\u5185\u5bb9\uff0c\u83b7\u53d6\u9a8c\u8bc1\u7801id\n    const id: string = await this.captchaService.set('123abc');\n    // \u6839\u636e\u9a8c\u8bc1\u7801id\uff0c\u6821\u9a8c\u5185\u5bb9\u662f\u5426\u6b63\u786e\n    const passed: boolean = await this.captchaService.check(id, '123abc');\n    return {\n      passed: passed === true,\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface CaptchaOptions {\n  // \u5e72\u6270\u7ebf\u6761\u7684\u6570\u91cf\uff0c\u9ed8\u8ba4 1 \u6761\n  noise?: number;\n  // \u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 120 \u50cf\u7d20\n  width?: number;\n  // \u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 40 \u50cf\u7d20\n  height?: number;\n  // \u56fe\u5f62\u9a8c\u8bc1\u7801\u914d\u7f6e\uff0c\u56fe\u5f62\u4e2d\u5305\u542b\u4e00\u4e9b\u5b57\u7b26\n  image?: {\n    // \u9a8c\u8bc1\u7801\u5b57\u7b26\u957f\u5ea6\uff0c\u9ed8\u8ba4 4 \u4e2a\u5b57\u7b26\n    size?: number;\n    // \u56fe\u50cf\u9a8c\u8bc1\u7801\u4e2d\u7684\u5b57\u7b26\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a 'mixed'\n    // - 'mixed' \u8868\u793a 0-9\u3001A-Z \u548c a-z\n    // - 'letter' \u8868\u793a A-Z \u548c a-z\n    // - 'number' \u8868\u793a 0-9\n    type?: 'mixed',\n    // \u5e72\u6270\u7ebf\u6761\u7684\u6570\u91cf\uff0c\u9ed8\u8ba4 1 \u6761\n    noise?: number;\n    // \u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 120 \u50cf\u7d20\n    width?: number;\n    // \u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 40 \u50cf\u7d20\n    height?: number;\n  },\n  // \u8ba1\u7b97\u516c\u5f0f\u9a8c\u8bc1\u7801\u914d\u7f6e\uff0c\u4f8b\u5982\u8fd4\u56de\u7684\u56fe\u50cf\u5185\u5bb9\u4e3a 1+2\uff0c\u9700\u8981\u7528\u6237\u586b\u5165 3\n  formula?: {\n     // \u5e72\u6270\u7ebf\u6761\u7684\u6570\u91cf\uff0c\u9ed8\u8ba4 1 \u6761\n    noise?: number;\n    // \u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 120 \u50cf\u7d20\n    width?: number;\n    // \u5bbd\u5ea6\uff0c\u9ed8\u8ba4\u4e3a 40 \u50cf\u7d20\n    height?: number;\n  },\n  // \u7eaf\u6587\u672c\u9a8c\u8bc1\u7801\u914d\u7f6e\uff0c\u57fa\u4e8e\u7eaf\u6587\u672c\u9a8c\u8bc1\u7801\u53ef\u4ee5\u5b9e\u73b0\u77ed\u4fe1\u9a8c\u8bc1\u7801\u3001\u90ae\u4ef6\u9a8c\u8bc1\u7801\n  text?: {\n    // \u9a8c\u8bc1\u7801\u5b57\u7b26\u957f\u5ea6\uff0c\u9ed8\u8ba4 4 \u4e2a\u5b57\u7b26\n    size?: number;\n    // \u56fe\u50cf\u9a8c\u8bc1\u7801\u4e2d\u7684\u5b57\u7b26\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a 'mixed'\n    // - 'mixed' \u8868\u793a 0-9\u3001A-Z \u548c a-z\n    // - 'letter' \u8868\u793a A-Z \u548c a-z\n    // - 'number' \u8868\u793a 0-9\n    type?: 'mixed',\n  },\n  // \u9a8c\u8bc1\u7801\u8fc7\u671f\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 1h\n  expirationTime?: 3600,\n  // \u9a8c\u8bc1\u7801\u5b58\u50a8\u7684 key \u524d\u7f00\n  idPrefix: 'midway:vc',\n}\n\nexport const captcha: CaptchaOptions = {\n  size: 4,\n  noise: 1,\n  width: 120,\n  height: 40,\n  image: {      // \u4f1a\u5408\u5e76 captcha \u7684 size \u7b49\u914d\u7f6e\n    type: 'mixed',\n  },\n  formula: {},  // \u4f1a\u5408\u5e76 captcha \u7684 size \u7b49\u914d\u7f6e\n  text: {},     // \u4f1a\u5408\u5e76 captcha \u7684 size \u7b49\u914d\u7f6e\n  expirationTime: 3600,\n  idPrefix: 'midway:vc',\n}\n")),(0,r.kt)("h2",{id:"\u6548\u679c"},"\u6548\u679c"),(0,r.kt)("h3",{id:"\u56fe\u7247\u9a8c\u8bc1\u7801"},"\u56fe\u7247\u9a8c\u8bc1\u7801"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://gw.alicdn.com/imgextra/i4/O1CN014cEzLH23vEniOgoyp_!!6000000007317-2-tps-120-40.png",alt:"\u56fe\u7247\u9a8c\u8bc1\u7801"})),(0,r.kt)("h3",{id:"\u8ba1\u7b97\u8868\u8fbe\u5f0f"},"\u8ba1\u7b97\u8868\u8fbe\u5f0f"),(0,r.kt)("p",null," ",(0,r.kt)("img",{parentName:"p",src:"https://gw.alicdn.com/imgextra/i4/O1CN01u3Mj0q24lRx1md9pX_!!6000000007431-2-tps-120-40.png",alt:"\u8ba1\u7b97\u8868\u8fbe\u5f0f"})))}m.isMDXComponent=!0}}]);