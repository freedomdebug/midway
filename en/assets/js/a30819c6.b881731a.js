"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58513],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=o(a),N=r,g=u["".concat(p,".").concat(N)]||u[N]||k[N]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22408:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={},i="Existing decorator index",d={unversionedId:"decorator_index",id:"decorator_index",title:"Existing decorator index",description:"Midway provides a lot of decorator capabilities. These decorators are distributed in different packages and also provide different functions. This chapter provides a quick check list.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/decorator_index.md",sourceDirName:".",slug:"/decorator_index",permalink:"/en/docs/decorator_index",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/decorator_index.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"Router Table",permalink:"/en/docs/router_table"},next:{title:"Framework Error Code",permalink:"/en/docs/error_code"}},p={},o=[{value:"@midwayjs/core",id:"midwayjscore",level:2},{value:"@midwayjs/typeorm",id:"midwayjstypeorm",level:2},{value:"@midwayjs/validate",id:"midwayjsvalidate",level:2},{value:"@midwayjs/swagger",id:"midwayjsswagger",level:2}],m={toc:o};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"existing-decorator-index"},"Existing decorator index"),(0,r.kt)("p",null,"Midway provides a lot of decorator capabilities. These decorators are distributed in different packages and also provide different functions. This chapter provides a quick check list."),(0,r.kt)("h2",{id:"midwayjscore"},"@midwayjs/core"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Decorator"),(0,r.kt)("th",{parentName:"tr",align:null},"Modification position"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Provide"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Expose a class to enable IoC containers to obtain metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Inject"),(0,r.kt)("td",{parentName:"tr",align:null},"Property"),(0,r.kt)("td",{parentName:"tr",align:null},"Inject objects into an IoC container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Scope"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify scope")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Init"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"The method that is automatically executed when the annotation object is initialized.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Destroy"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"The method performed when the annotation object is destroyed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Async"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[Deprecated]")," Indicates that it is an asynchronous function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Autowire"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[Deprecated]")," The identification class is an automatic injection attribute")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Autoload"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows classes to self-load execution")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies a container entry configuration class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Aspect"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Identification interceptor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Validate"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Identification method, need to be verified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Property"),(0,r.kt)("td",{parentName:"tr",align:null},"Check rules that identify DTO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@App"),(0,r.kt)("td",{parentName:"tr",align:null},"Property"),(0,r.kt)("td",{parentName:"tr",align:null},"Inject the current application instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Property"),(0,r.kt)("td",{parentName:"tr",align:null},"Get configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Logger"),(0,r.kt)("td",{parentName:"tr",align:null},"Property"),(0,r.kt)("td",{parentName:"tr",align:null},"Get a log instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Controller"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Identified as a Web controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Get"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Register as a route of GET type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Post"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Register as a POST type route")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Del"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Register as a route of type DELETE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Put"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Registered as a PUT type route")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Patch"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Register as a PATCH type route")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Options"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Register as a route of OPTIONS type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Head"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Register as a route of type HEAD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@All"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Register as a full-type route")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Session"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Get ctx.session from parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Body"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Get ctx.request.body from parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Query"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Get ctx.query from parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Param"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Get ctx.param from parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Headers"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Get ctx.headers from parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@File"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Get the first upload file from the parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Files"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Get all uploaded files from parameters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Fields"),(0,r.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"Get Form Field from Parameters (when uploading)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Redirect"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Modify response jump")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@HttpCode"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Modify the response status code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@SetHeader"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Modify response header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@ContentType"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Modify the Content-Type field in the response header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Schedule"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Identified as an egg timed task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Plugin"),(0,r.kt)("td",{parentName:"tr",align:null},"Property"),(0,r.kt)("td",{parentName:"tr",align:null},"Get egg plug-in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Exposed microservice providers (producers)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Exposed microservice caller (consumer)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@GrpcMethod"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Identify exposed gRPC methods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Func"),(0,r.kt)("td",{parentName:"tr",align:null},"Class/Method"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[Deprecated]"),"  is identified as a function entry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Handler"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[Deprecated]"),"  Cooperate with Marking Function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifies a function trigger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Task"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Define a distributed task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@TaskLocal"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Define a local task")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Define a self-triggered task")))),(0,r.kt)("h2",{id:"midwayjstypeorm"},"@midwayjs/typeorm"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Decorator"),(0,r.kt)("th",{parentName:"tr",align:null},"Modification position"),(0,r.kt)("th",{parentName:"tr",align:null},"Role"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@EntityModel"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Define an entity object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@InjectEntityModel"),(0,r.kt)("td",{parentName:"tr",align:null},"Property"),(0,r.kt)("td",{parentName:"tr",align:null},"Inject an entity object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@EventSubscriberModel"),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null},"Define event subscriptions")))),(0,r.kt)("h2",{id:"midwayjsvalidate"},"@midwayjs/validate"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Decorator"),(0,r.kt)("th",{parentName:"tr",align:null},"Modification position"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Property"),(0,r.kt)("td",{parentName:"tr",align:null},"Define a rule")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@Validate"),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Identify a method that requires verification")))),(0,r.kt)("h2",{id:"midwayjsswagger"},"@midwayjs/swagger"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Decorator"),(0,r.kt)("th",{parentName:"tr",align:null},"Modification position"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiBody")),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiExcludeEndpoint")),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiExcludeController")),(0,r.kt)("td",{parentName:"tr",align:null},"Class"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiHeader")),(0,r.kt)("td",{parentName:"tr",align:null},"Class/Method"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiHeaders")),(0,r.kt)("td",{parentName:"tr",align:null},"Class/Method"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiOperation")),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiProperty")),(0,r.kt)("td",{parentName:"tr",align:null},"Property"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiPropertyOptional")),(0,r.kt)("td",{parentName:"tr",align:null},"Property"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiResponseProperty")),(0,r.kt)("td",{parentName:"tr",align:null},"Property"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiQuery")),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiResponse")),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiTags")),(0,r.kt)("td",{parentName:"tr",align:null},"Controller/Method"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiExtension")),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiBasicAuth")),(0,r.kt)("td",{parentName:"tr",align:null},"Controller"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiBearerAuth")),(0,r.kt)("td",{parentName:"tr",align:null},"Controller"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiCookieAuth")),(0,r.kt)("td",{parentName:"tr",align:null},"Controller"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiOAuth2")),(0,r.kt)("td",{parentName:"tr",align:null},"Controller"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiSecurity")),(0,r.kt)("td",{parentName:"tr",align:null},"Controller"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiParam")),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@ApiParam")),(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);