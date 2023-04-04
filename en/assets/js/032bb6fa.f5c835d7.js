"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Custom decorator",l={unversionedId:"custom_decorator",id:"custom_decorator",title:"Custom decorator",description:"In the new version, Midway provides custom decorator capabilities supported by the framework, which includes several common functions:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/custom_decorator.md",sourceDirName:".",slug:"/custom_decorator",permalink:"/en/docs/custom_decorator",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/custom_decorator.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Custom component",permalink:"/en/docs/component_development"},next:{title:"Custom error",permalink:"/en/docs/custom_error"}},s={},c=[{value:"Decorator API",id:"decorator-api",level:2},{value:"Class decorator",id:"class-decorator",level:2},{value:"Property decorator",id:"property-decorator",level:2},{value:"Method decorator",id:"method-decorator",level:2},{value:"Method decorator without implementation",id:"method-decorator-without-implementation",level:2},{value:"Parameter decorator",id:"parameter-decorator",level:2},{value:"Method decorator gets context",id:"method-decorator-gets-context",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-decorator"},"Custom decorator"),(0,r.kt)("p",null,"In the new version, Midway provides custom decorator capabilities supported by the framework, which includes several common functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define inheritable attribute decorators"),(0,r.kt)("li",{parentName:"ul"},"Define a wrappable method as a method decorator for interception"),(0,r.kt)("li",{parentName:"ul"},"Define parameter decorators that modify parameters")),(0,r.kt)("p",null,"We take into account the current stage of decorators in the standard and subsequent risks. Midway provides a custom decorator method and its supporting capabilities to be implemented by the framework to avoid the problems caused by subsequent specification changes as much as possible."),(0,r.kt)("p",null,"In general, we recommend placing custom decorators in the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/decorator")," directory."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 controller\n\u2502   \u2502   \u251c\u2500\u2500 user.controller.ts\n\u2502   \u2502   \u2514\u2500\u2500 home.controller.ts\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u251c\u2500\u2500 decorator                   ## custom decorator\n\u2502   \u2502   \u2514\u2500\u2500 user.decorator.ts\n\u2502   \u2514\u2500\u2500 service\n\u2502       \u2514\u2500\u2500 user.service.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("h2",{id:"decorator-api"},"Decorator API"),(0,r.kt)("p",null,"Midway has a set of standard decorator management API, which is used to inject decorator docking dependencies into containers for scanning and expansion. We export these API methods from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/core")," package."),(0,r.kt)("p",null,"Through the decorator advanced API, we can customize the decorator and attach metadata to it. The various decorators inside are realized through this capability."),(0,r.kt)("p",null,"Common extension APIs are:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Decorator")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"saveModule")," is used to save a class to a decorator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listModule")," get all classes bound to a type of decorator")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Meta-information access (corresponding to")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/reflect-metadata"},(0,r.kt)("strong",{parentName:"a"},"reflect-metadata")),(0,r.kt)("strong",{parentName:"p"},")")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Save meta information to class ",(0,r.kt)("inlineCode",{parentName:"li"},"saveClassMetadata")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attachClassMetadata")," additional meta information to class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getClassMetadata")," get meta information from class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"savePropertyDataToClass")," saves the property's meta information to the class`"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attachPropertyDataToClass")," meta-information for additional attributes to class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getPropertyDataFromClass")," get attribute meta information from class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listPropertyDataFromClass")," listing meta-information for all attributes saved on class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"savePropertyMetadata")," save attribute meta-information to the attribute itself"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attachPropertyMetadata")," additional attribute meta-information to the attribute itself"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getPropertyMetadata")," get the saved meta information from the attribute")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"shortcut")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getProviderUUId")," get the uuid provide by class, which corresponds to a class and will not change.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The name saved when the ",(0,r.kt)("inlineCode",{parentName:"p"},"getProviderName")," gets the provide, usually the class name is lowercase.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getProviderId")," get the id provide on the class, which is usually a lowercase class name or a custom id.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"isProvide")," judge whether a class has been modified by @Provide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getObjectDefinition")," Get Object Definition (ObjectDefiniton)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getParamNames")," get all parameter names of a function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getMethodParamTypes")," gets the parameter type of a method, which is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect.getMetadata(design:paramtypes)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getPropertyType")," get the type of an attribute, which is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect.getMetadata(design:type)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getMethodReturnTypes")," get method return value type, equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect.getMetadata(design:returntype)")))),(0,r.kt)("h2",{id:"class-decorator"},"Class decorator"),(0,r.kt)("p",null,"Generally, class decorators are used in conjunction with other decorators to mark that a class belongs to a specific scene. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"@Controller")," indicates that the class belongs to the entrance of the Http scene."),(0,r.kt)("p",null,"Let's take an example, define a class decorator @Model, identify class as a model class, and then further operate."),(0,r.kt)("p",null,"First create a decorator file, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"src/decorator/model.decorator.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Scope, ScopeEnum, saveClassMetadata, saveModule, Provide } from '@midwayjs/core';\n\n// Provide a unique key\nconst MODEL_KEY = 'decorator:model';\n\nexport function Model(): ClassDecorator {\n  return (target: any) => {\n    // Bind the decorated class to the decorator to obtain the class later.\n    saveModule(MODEL_KEY, target);\n    // Save some metadata information, whatever you want to save.\n    saveClassMetadata (\n      MODEL_KEY,\n      {\n        test: 'abc',\n      },\n      target\n    );\n    // Specify the scope of the IoC container to create the instance, which is registered here as the request scope, so that ctx can be retrieved.\n    Scope(ScopeEnum.Request)(target);\n\n    // Call the Provide decorator so that the user's class can omit the @Provide() decorator.\n    Provide()(target);\n  };\n}\n")),(0,r.kt)("p",null,"The above only decided on this decorator, and we also need to implement the corresponding functions. midway v2 began to have the concept of life cycle, which can be executed in the life cycle of the ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\n\nimport { listModule, Configuration, App, Inject } from '@midwayjs/core';\nimport { join } from 'path';\nimport * as koa from '@midwayjs/koa';\nimport { MODEL_KEY } from './decorator/model.decorator';\n\n@Configuration({\n  imports: [koa]\n})\nexport class MainConfiguration {\n  @App()\n  app: koa.Application;\n\n  async onReady() {\n    // ...\n\n    // All classes decorated with @Model() decorators can be obtained\n    const modules = listModule(MODEL_KEY);\n    for (let mod of modules) {\n      // Realize custom capability\n      // For example, take metadata getClassMetadata(mod)\n      // For example, initialize app.applicationContext.getAsync(mod) in advance;\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Finally, we're going to use this decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Model } from '../decorator/model.decorator';\n\n// The role of Model is that our own logic can be executed (saved metadata)\n@Model()\nexport class UserModel {\n  // ...\n}\n")),(0,r.kt)("h2",{id:"property-decorator"},"Property decorator"),(0,r.kt)("p",null,"Midway provides ",(0,r.kt)("inlineCode",{parentName:"p"},"createCustomPropertyDecorator")," methods for creating custom attribute decorators. decorators such as ",(0,r.kt)("inlineCode",{parentName:"p"},"@Logger")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Config")," of the framework are all created in this way."),(0,r.kt)("p",null,"Unlike the decorator defined in the TypeScript, the attribute decorator provided by Midway can be used in inheritance."),(0,r.kt)("p",null,"Let's take an example. If there is a memory cache now, our property decorator is used to obtain cache data. Here are some preparations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Simple cache class\nimport { Configuration, Provide, Scope, ScopeEnum } from '@midwayjs/core';\n\n@Provide()\n@Scope(ScopeEnum.Singleton)\nexport class MemoryStore extends Map {\n  save(key, value) {\n    this.set(key, value);\n  }\n\n  get(key) {\n    return this.get(key);\n  }\n}\n\n// src/configuration.ts\n// The entry is instantiated and some data is saved.\nimport { Configuration, App, Inject } from '@midwayjs/core';\nimport { join } from 'path';\nimport * as koa from '@midwayjs/koa';\n\n@Configuration({\n  imports: [koa]\n})\nexport class MainConfiguration {\n  @App()\n  app: koa.Application;\n\n  @Inject()\n  store: MemoryStore;\n\n  async onReady() {\n    // ...\n\n    // Initialize some data\n    store.save('aaa', 1);\n    store.save('bbb', 1);\n  }\n}\n")),(0,r.kt)("p",null,"Let's implement a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"@MemoryCache()")," decorator. The implementation of the property decorator is divided into two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"define a decorator method, generally only save metadata"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"Define an implementation before the decorator logic is executed")))),(0,r.kt)("p",null,"The following is the section that defines the decorator method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/decorator/memoryCache.decorator.ts\nimport { createCustomPropertyDecorator } from '@midwayjs/core';\n\n// Unique id inside the decorator\nexport const MEMORY_CACHE_KEY = 'decorator:memory_cache_key';\n\nexport function MemoryCache(key?: string): PropertyDecorator {\n  return createCustomPropertyDecorator(MEMORY_CACHE_KEY, {\n    key\n  });\n}\n")),(0,r.kt)("p",null,"It is implemented before the decorator's method is executed (usually at the initialization place). To realize the decorator, we need to use the built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"MidwayDecoratorService")," service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, Inject, Init } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport { MEMORY_CACHE_KEY, MemoryStore } from 'decorator/memoryCache.decorator';\nimport { MidwayDecoratorService } from '@midwayjs/core';\n\n@Configuration({\n  imports: [koa]\n})\nexport class MainConfiguration {\n  @App()\n  app: koa.Application;\n\n  @Inject()\n  store: MemoryStore;\n\n  @Inject()\n  decoratorService: MidwayDecoratorService;\n\n  @Init()\n  async init() {\n    // ...\n\n    // Realize decorator\n    this.decoratorService.registerPropertyHandler(MEMORY_CACHE_KEY, (propertyName, meta) => {\n      return this.store.get(meta.key);\n    });\n  }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"registerPropertyHandler")," method contains two parameters, the first is the unique id defined by the previous decorator, and the second is the callback method implemented by the decorator."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"propertyName")," is the method name of the decorator decoration, and meta is the parameter when the decorator is used."),(0,r.kt)("p",null,"Then we can use this decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MemoryCache } from 'decorator/memoryCache.decorator';\n\n// ...\nexport class UserService {\n  @MemoryCache('aaa')\n  cacheValue;\n\n  async invoke() {\n    console.log(this.cacheValue);\n    // => 1\n  }\n}\n")),(0,r.kt)("h2",{id:"method-decorator"},"Method decorator"),(0,r.kt)("p",null,"Midway provides ",(0,r.kt)("inlineCode",{parentName:"p"},"createCustomMethodDecorator")," methods for creating custom method decorators."),(0,r.kt)("p",null,"Different from the decorator defined in the TypeScript, the method decorator provided by Midway is uniformly implemented by interceptors, does not conflict with other interception methods, and is simpler."),(0,r.kt)("p",null,"Let's take the printing method execution time as an example."),(0,r.kt)("p",null,"Like property decorators, our definition and implementation are separate."),(0,r.kt)("p",null,"The following is the section that defines the decorator method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/decorator/logging.decorator.ts\nimport { createCustomMethodDecorator } from '@midwayjs/core';\n\n// Unique id inside the decorator\nexport const LOGGING_KEY = 'decorator:logging_key';\n\nexport function LoggingTime(formatUnit = 'ms'): MethodDecorator {\n    // We pass a parameter that modifies the display format\n  return createCustomMethodDecorator(LOGGING_KEY, { formatUnit });\n}\n")),(0,r.kt)("p",null,"The implementation part also needs to use the framework's built-in ",(0,r.kt)("inlineCode",{parentName:"p"},"DecoratorService")," service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"//...\n\nfunction formatDuring(value, formatUnit: string) {\n  // Return time formatting here\n  if (formatUnit === 'ms') {\n    return `${value} ms`;\n  } else if (formatUnit === 'min') {\n    // return xxx\n  }\n}\n\n@Configuration({\n  imports: [koa]\n})\nexport class MainConfiguration {\n  @App()\n  app: koa.Application;\n\n  @Inject()\n  decoratorService: MidwayDecoratorService;\n\n  @Logger()\n  logger;\n\n  async onReady() {\n    // ...\n\n    // Implementation method decorator\n    this.decoratorService.registerMethodHandler(LOGGING_KEY, (options) => {\n      return {\n        around: async (joinPoint: JoinPoint) => {\n          // Get the formatting parameters\n          const format = options.metadata.formatUnit || 'ms';\n\n          // Record start time\n          const startTime = Date.now();\n\n          // Execute the original method\n          const result = await joinPoint.proceed(...joinPoint.args);\n\n          const during = formatDuring(Date.now() - startTime, format);\n\n          // Print execution time\n          this.logger.info('Method ${joinPoint.methodName} invoke during ${during}');\n\n          // Return execution result\n          return result;\n        },\n      };\n    });\n  }\n}\n")),(0,r.kt)("p",null,"The first parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"registerMethodHandler")," method is the id defined by the decorator, and the second parameter is the implementation of the callback. The parameter is the options object, including:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.target"),(0,r.kt)("td",{parentName:"tr",align:null},"new (...args)"),(0,r.kt)("td",{parentName:"tr",align:null},"The class in which the decorator is decorated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.propertyName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the method where the decorator is decorated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters of the decorator itself")))),(0,r.kt)("p",null,"To implement a callback, you must return a method that is processed by the interceptor. The key is the ",(0,r.kt)("inlineCode",{parentName:"p"},"before"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"around"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"afterReturn"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"afterThrow"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"after")," of the interceptor."),(0,r.kt)("p",null,"Since the method decorator itself is implemented by the interceptor, you can view the ",(0,r.kt)("a",{parentName:"p",href:"aspect"},"interceptor")," section for specific interception methods."),(0,r.kt)("p",null,"Use the decorator as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// ...\nexport class UserService {\n  @LoggingTime()\n  async getUser() {\n    // ...\n  }\n}\n\n// When executing\n// output => Method "getUser" invoke during 4ms\n')),(0,r.kt)("h2",{id:"method-decorator-without-implementation"},"Method decorator without implementation"),(0,r.kt)("p",null,"By default, the custom method decorator must have an implementation, otherwise the runtime will report an error."),(0,r.kt)("p",null,"In some special cases, it is desirable to have a decorator that does not need to be implemented, such as only storing metadata without blocking."),(0,r.kt)("p",null,"You can add an impl parameter when defining the decorator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/decorator/logging.decorator.ts\nimport { createCustomMethodDecorator } from '@midwayjs/core';\n\n// Unique id inside the decorator\nexport const LOGGING_KEY = 'decorator:logging_key';\n\nexport function LoggingTime(): MethodDecorator {\n  // The last parameter tells the framework, no need to specify the implementation\n  return createCustomMethodDecorator(LOGGING_KEY, {}, false);\n}\n")),(0,r.kt)("h2",{id:"parameter-decorator"},"Parameter decorator"),(0,r.kt)("p",null,"Midway provides ",(0,r.kt)("inlineCode",{parentName:"p"},"createCustomParamDecorator")," methods for creating custom parameter decorators."),(0,r.kt)("p",null,"Parameter decorators are generally used to modify parameter values and preprocess data in advance. The decorators of request series such as ",(0,r.kt)("inlineCode",{parentName:"p"},"@Query")," of Midway are implemented based on them."),(0,r.kt)("p",null,"Like other decorators, our definition and implementation are separate. Let's take the user (ctx.user) in the parameter as an example."),(0,r.kt)("p",null,"The following is the section that defines the decorator method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/decorator/logging.decorator.ts\nimport { createCustomParamDecorator } from '@midwayjs/core';\n\n// Unique id inside the decorator\nexport const USER_KEY = 'decorator:user_key';\n\nexport function User(): ParameterDecorator {\n  return createCustomParamDecorator(USER_KEY, {});\n}\n")),(0,r.kt)("p",null,"The implementation part also needs to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"DecoratorService")," service built into the framework."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"//...\n\n@Configuration({\n  imports: [koa]\n})\nexport class MainConfiguration {\n  @App()\n  app: koa.Application;\n\n  @Inject()\n  decoratorService: MidwayDecoratorService;\n\n  @Logger()\n  logger;\n\n  async onReady() {\n    // ...\n\n    // Implement parameter decorator\n    this.decoratorService.registerParameterHandler(USER_KEY, (options) => {\n      // originArgs is the original method\n      // The first parameter here is ctx, so ctx.user is taken.\n      return options.originArgs[0]?.user ?? {};\n    });\n  }\n}\n")),(0,r.kt)("p",null,"The first parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"registerParameterHandler")," method is the id defined by the decorator, and the second parameter is the implementation of the callback. The parameter is the options object, including:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.target"),(0,r.kt)("td",{parentName:"tr",align:null},"new (...args)"),(0,r.kt)("td",{parentName:"tr",align:null},"The class in which the decorator is decorated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.propertyName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the method where the decorator is decorated.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"{} ","|"," undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameters of the decorator itself")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.originArgs"),(0,r.kt)("td",{parentName:"tr",align:null},"Array"),(0,r.kt)("td",{parentName:"tr",align:null},"The original parameters of the method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.originParamType"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The original parameter type of the method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options.parameterIndex"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter Index of Decorator Modification")))),(0,r.kt)("p",null,"Use the decorator as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// ...\nexport class UserController {\n  async invoke(@User() user: string) {\n    console.log(user);\n    // => xxx\n  }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Note that for the correctness of the method call, if an error is reported in the parameter decorator, the framework will use the original parameters to call the method and will not throw an exception directly."),(0,r.kt)("p",{parentName:"admonition"},"You can find this error when turning on the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_DEBUG = midway:debug")," environment variable.")),(0,r.kt)("h2",{id:"method-decorator-gets-context"},"Method decorator gets context"),(0,r.kt)("p",null,"On the request link, it is often difficult to get the context if the decorator is customized. If the code does not explicitly inject the context, it is very difficult to get it in the decorator."),(0,r.kt)("p",null,"In Midway's dependency injection request scope, we bind the context to each instance, and obtain the current context from the specific attribute of the instance ",(0,r.kt)("inlineCode",{parentName:"p"},"REQUEST_ OBJ_CTX_KEY"),", thus further operating on the request."),(0,r.kt)("p",null,"For example, in our custom implementation of the method decorator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { REQUEST_OBJ_CTX_KEY } from '@midwayjs/core';\n//...\n\nexport class MainConfiguration {\n  @App()\n  app: koa.Application;\n\n  @Inject()\n  decoratorService: MidwayDecoratorService;\n\n  @Logger()\n  logger;\n\n  async onReady() {\n    // ...\n\n    // Implementation method decorator\n    this.decoratorService.registerMethodHandler(LOGGING_KEY, (options) => {\n      return {\n        around: async (joinPoint: JoinPoint) => {\n          // Instance where the decorator is located\n          const instance = joinPoint.target;\n          const ctx = instance[REQUEST_OBJ_CTX_KEY];\n          // ctx.xxxx\n          // ...\n        },\n      };\n    });\n  }\n}\n")))}d.isMDXComponent=!0}}]);