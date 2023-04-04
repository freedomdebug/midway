"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},o="Service factory",l={unversionedId:"service_factory",id:"service_factory",title:"Service factory",description:"Sometimes when writing components or services, you will encounter the situation that a service has multiple instances. At this time, the service factory (Service Factory) is suitable for this scenario.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/service_factory.md",sourceDirName:".",slug:"/service_factory",permalink:"/en/docs/service_factory",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/service_factory.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Pipeline",permalink:"/en/docs/pipeline"},next:{title:"Data subscription",permalink:"/en/docs/data_listener"}},c={},s=[{value:"Implement a service class",id:"implement-a-service-class",level:2},{value:"1. Implement the interface to create an instance",id:"1-implement-the-interface-to-create-an-instance",level:3},{value:"2. Add configuration and initialization methods",id:"2-add-configuration-and-initialization-methods",level:3},{value:"Get instance",id:"get-instance",level:2},{value:"Single instance",id:"single-instance",level:3},{value:"Multiple instances",id:"multiple-instances",level:3},{value:"Decorator gets instance",id:"decorator-gets-instance",level:3},{value:"Dynamically create an instance",id:"dynamically-create-an-instance",level:3},{value:"Instance configuration merge logic",id:"instance-configuration-merge-logic",level:2},{value:"Default instance proxy (optional)",id:"default-instance-proxy-optional",level:2},{value:"Modify the default instance name",id:"modify-the-default-instance-name",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"service-factory"},"Service factory"),(0,i.kt)("p",null,"Sometimes when writing components or services, you will encounter the situation that a service has multiple instances. At this time, the service factory (Service Factory) is suitable for this scenario."),(0,i.kt)("p",null,"for example, our oss component creates multiple oss objects, so you need to leave many instance interfaces when writing. For this scenario, midway abstracted ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceFactory")," class."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ServiceFactory")," is an abstract class, and every service that needs to be implemented needs to be inherited."),(0,i.kt)("p",null,"Take an http client as an example, we need to prepare a method to create an http client instance, which contains two parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Method for creating a client instance"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"Configuration of Client")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// Create client configuration\nconst config = {\n  baseUrl: '',\n  timeout: 1000\n};\n\n// Method for creating a client instance\nconst httpClient = new HTTPClient(config);\n")),(0,i.kt)("h2",{id:"implement-a-service-class"},"Implement a service class"),(0,i.kt)("p",null,"We hope to implement a service factory of the above HTTPClient to create multiple httpClient objects in midway system."),(0,i.kt)("p",null,"The service factory is also a common export class in midway. As a member of the service, for example, we can also put it in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/service/httpServiceFactory.ts"),"."),(0,i.kt)("h3",{id:"1-implement-the-interface-to-create-an-instance"},"1. Implement the interface to create an instance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ServiceFactory")," is an abstract class for inheritance, which contains a generic type (the instance type created, for example, the following is the HTTPClient type created)."),(0,i.kt)("p",null,"We only need to inherit it, and at the same time, the general service factory is a single case."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ServiceFactory, Provide, Scope, ScopeEnum } from '@midwayjs/core';\n\n@Provide()\n@Scope(ScopeEnum.Singleton)\nexport class HTTPClientServiceFactory extends ServiceFactory<HTTPClient> {\n    // ...\n}\n")),(0,i.kt)("p",null,"Since it is an abstract class, we need to implement two of these methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ServiceFactory, Provide, Scope, ScopeEnum } from '@midwayjs/core';\n\n@Provide()\n@Scope(ScopeEnum.Singleton)\nexport class HTTPClientServiceFactory extends ServiceFactory<HTTPClient> {\n\n  // Create a single instance\n  protected createClient(config: any): any {\n    return new HTTPClient(config);\n  }\n\n  getName() {\n    return 'httpClient';\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createClient")," method is used to pass in a create service configuration (such as httpClient configuration) and return a specific instance, as in the example."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getName")," method is used to return the name of this service factory to facilitate frame identification and log output."),(0,i.kt)("h3",{id:"2-add-configuration-and-initialization-methods"},"2. Add configuration and initialization methods"),(0,i.kt)("p",null,"We need to inject a configuration, for example, we use ",(0,i.kt)("inlineCode",{parentName:"p"},"httpClient")," as the configuration of this service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default.ts\nexport const httpClient = {\n    // ...\n}\n")),(0,i.kt)("p",null,"Then inject it into the service factory. At the same time, we also need to call the method of creating multiple instances during initialization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ServiceFactory, Provide, Scope, ScopeEnum } from '@midwayjs/core';\n\n@Provide()\n@Scope(ScopeEnum.Singleton)\nexport class HTTPClientServiceFactory extends ServiceFactory<HTTPClient> {\n\n  @Config('httpClient')\n  httpClientConfig;\n\n  @Init()\n  async init() {\n    await this.initClients(this.httpClientConfig);\n  }\n\n  protected createClient(config: any): any {\n    // Create an instance\n    return new HTTPClient(config);\n  }\n\n  getName() {\n    return 'httpClient';\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"initClients")," method is implemented in the base class. It needs to pass a complete user configuration and call the ",(0,i.kt)("inlineCode",{parentName:"p"},"createClient")," in a loop to create the object and save it to memory."),(0,i.kt)("h2",{id:"get-instance"},"Get instance"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createClient")," method only defines the method of creating objects, and we also need to define the structure of the configuration."),(0,i.kt)("p",null,"The structure of the configuration is divided into several parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"The default configuration, that is, the configuration in which all objects can be reused"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"Configuration required by a single instance"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"Configuration required by multiple instances")))),(0,i.kt)("p",null,"Let's explain separately,"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Default Configuration")),(0,i.kt)("p",null,"The default configuration, we agreed to ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," the attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default.ts\nexport const httpClient = {\n  default: {\n    timeout: 3000\n  }\n}\n")),(0,i.kt)("h3",{id:"single-instance"},"Single instance"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Single Configuration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default.ts\nexport const httpClient = {\n  default: {\n    timeout: 3000\n  },\n  client: {\n    baseUrl: ''\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"client")," is used to describe the structure of a single instance. The object is merged with the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," when it is created. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," method to obtain the default instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HTTPClientServiceFactory } from './service/httpClientServiceFactory';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  serviceFactory: HTTPClientServiceFactory;\n\n  async invoke() {\n    const httpClient = this.serviceFactory.get();\n  }\n}\n\n")),(0,i.kt)("h3",{id:"multiple-instances"},"Multiple instances"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"clients")," to configure multiple instances. Each key is an independent instance configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default.ts\nexport const httpClient = {\n  default: {\n    timeout: 3000\n  },\n  clients: {\n    aaa: {\n        baseUrl: ''\n    },\n    bbb: {\n        baseUrl: ''\n    }\n  }\n}\n")),(0,i.kt)("p",null,"use the key to obtain the instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HTTPClientServiceFactory } from './service/httpClientServiceFactory';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  serviceFactory: HTTPClientServiceFactory;\n\n  async invoke() {\n\n    const aaaInstance = this.serviceFactory.get('aaa');\n    // ...\n\n    const bbbInstance = this.serviceFactory.get('bbb');\n    // ...\n\n  }\n}\n")),(0,i.kt)("h3",{id:"decorator-gets-instance"},"Decorator gets instance"),(0,i.kt)("p",null,"Starting from v3.9.0, ServiceFactory has added an ",(0,i.kt)("inlineCode",{parentName:"p"},"@InjectClient")," decorator to facilitate the selection of injection when multiple clients are involved."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HTTPClientServiceFactory } from './service/httpClientServiceFactory';\nimport { join } from 'path';\nimport { InjectClient } from '@midwayjs/core';\n\n@Provide()\nexport class UserService {\n\n   @InjectClient(HTTPClientServiceFactory, 'aaa')\n   aaaInstance: HTTPClientServiceFactory;\n\n   @InjectClient(HTTPClientServiceFactory, 'bbb')\n   bbbInstance: HTTPClientServiceFactory;\n\n   async invoke() {\n     // this.aaaInstance.xxx\n// this.bbbInstance.xxx\n     //...\n   }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@InjectClient")," decorator is used to quickly inject multiple instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceFactory")," derived implementations, and all classes that extend ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceFactory")," can be used."),(0,i.kt)("p",null,"The decorator takes two parameters, defined as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export function InjectClient(\n   serviceFactoryClz: new (...args) => IServiceFactory<unknown>,\n   clientName?: string\n) {\n   //...\n}\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"serviceFactoryClz"),(0,i.kt)("td",{parentName:"tr",align:null},"Required, the derived class of ",(0,i.kt)("inlineCode",{parentName:"td"},"ServiceFactory"),", from which the decorator will get the lookup instance.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientName"),(0,i.kt)("td",{parentName:"tr",align:null},"Optional, if not filled, the default instance name ",(0,i.kt)("inlineCode",{parentName:"td"},"defaultClientName")," configuration item in the configuration will be searched by default.")))),(0,i.kt)("h3",{id:"dynamically-create-an-instance"},"Dynamically create an instance"),(0,i.kt)("p",null,"Instances can also be obtained dynamically through ",(0,i.kt)("inlineCode",{parentName:"p"},"createInstance")," methods of the base class."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Note that the createClient used here is not subclass, createClient does not contain and default configuration logic.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HTTPClientServiceFactory } from './service/httpClientServiceFactory';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  serviceFactory: HTTPClientServiceFactory;\n\n  async invoke() {\n\n    // config.bucket3 and config.default will be merged\n    let customHttpClient = await this.serviceFactory.createInstance({\n        baseUrl: 'xxxxx'\n    }, 'custom');\n\n    // After passing the name, you can also get it from the factory.\n    customHttpClient = this.serviceFactory.get('custom');\n\n  }\n}\n")),(0,i.kt)("p",null,"The first parameter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"createInstance")," method is configuration. If you call dynamically, you can manually pass the parameter. The second parameter is a string name. If the name is passed in, the created instance will be saved in memory and can be obtained from the service factory again later."),(0,i.kt)("h2",{id:"instance-configuration-merge-logic"},"Instance configuration merge logic"),(0,i.kt)("p",null,"When the actual code is running, even if it is a single instance, configuring a ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," will transform the configuration into ",(0,i.kt)("inlineCode",{parentName:"p"},"clients")," in memory."),(0,i.kt)("p",null,"For example the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default.ts\nexport const httpClient = {\n  client: {\n  baseUrl: ''\n  }\n}\n")),(0,i.kt)("p",null,"in memory becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default.ts\nexport const httpClient = {\n  clients: {\n    default: {\n      baseUrl: ''\n    }\n  }\n}\n")),(0,i.kt)("p",null,"There will be an extra default instance called ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),", and the service factory will be initialized with the configuration of ",(0,i.kt)("inlineCode",{parentName:"p"},"clients"),"."),(0,i.kt)("h2",{id:"default-instance-proxy-optional"},"Default instance proxy (optional)"),(0,i.kt)("p",null,"It will be very cumbersome if the user needs to obtain it through ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceFactory")," every time they use it. For the most commonly used default instance, a proxy class can be provided to make it proxy all the target instance methods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  ServiceFactory,\n  MidwayCommonError,\n  delegateTargetAllPrototypeMethod,\n  Provide,\n  Scope,\n  ScopeEnum,\n  Init\n} from '@midwayjs/core';\n\n//...\nexport class HTTPClientServiceFactory extends ServiceFactory<HTTPClient> {\n  //...\n}\n\n// The following is the default proxy class\n@Provide()\n@Scope(ScopeEnum. Singleton)\nexport class HTTPClientService implements HTTPClient {\n  @Inject()\n  private serviceFactory: HTTPClientServiceFactory;\n\n  // This property is used to hold the actual instance\n  private instance: HTTPClient;\n\n  @Init()\n  async init() {\n    // In the initialization phase, get the default instance from the factory\n    this.instance = this.serviceFactory.get(\n      this.serviceFactory.getDefaultClientName() || 'default'\n    );\n    if (!this. instance) {\n      throw new MidwayCommonError('http client default instance not found.');\n    }\n  }\n}\n\n// In the code below, the ts definition for the default instance class is correctly inherited\n\n// eslint-disable-next-line @typescript-eslint/no-empty-interface\nexport interface HTTPClientService extends HTTPClient {\n  //empty\n}\n\n// The following code, for the implementation of the default instance class can be proxied\ndelegateTargetAllPrototypeMethod(HTTPClientService, HTTPClient);\n\n")),(0,i.kt)("p",null,"With the above code, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPClientService")," directly without getting the default instance from ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPClientServiceFactory"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"delegateTargetAllPrototypeMethod")," is a utility method provided by Midway to delegate instance methods."),(0,i.kt)("p",null,"In addition, there are some other available tool methods, listed below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegateTargetAllPrototypeMethod")," is used to delegate all prototype methods of the target, including the prototype chain, excluding constructors and internal hidden methods"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegateTargetPrototypeMethod")," is used to delegate all prototype methods of the target, excluding constructors and inner hidden methods"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delegateTargetMethod")," specifies the method on the proxy target")),(0,i.kt)("h2",{id:"modify-the-default-instance-name"},"Modify the default instance name"),(0,i.kt)("p",null,"By default, the default instance name is ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),", and the default instance proxy will be proxied internally based on this instance."),(0,i.kt)("p",null,"If the user does not configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," instance, or wants to modify the default instance, the user can modify it through configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// config.default.ts\nexport const httpClient = {\n  clients: {\n    default: {\n      baseUrl: ''\n    },\n    default2: {\n      baseUrl: ''\n    }\n  },\n  defaultClientName: 'default2',\n}\n")),(0,i.kt)("p",null,"In the default instance proxy, this value will be obtained through ",(0,i.kt)("inlineCode",{parentName:"p"},"this.serviceFactory.getDefaultClientName()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { HTTPClientService } from './service/httpClientServiceFactory';\nimport { join } from 'path';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  httpClientService: HTTPClientService;\n\n  async invoke() {\n    // this.httpClientService points to default2\n  }\n}\n")))}d.isMDXComponent=!0}}]);