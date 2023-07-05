"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},s="Kafka",i={unversionedId:"extensions/kafka",id:"extensions/kafka",title:"Kafka",description:"In the architecture of complex systems, event flow is a very important part, including real-time capture of data from event sources (databases, sensors, mobile devices, etc.) in the form of event flow, persistence of event flow for easy retrieval, and real-time and review of operations to process response event flow.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/kafka.md",sourceDirName:"extensions",slug:"/extensions/kafka",permalink:"/en/docs/extensions/kafka",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"RabbitMQ",permalink:"/en/docs/extensions/rabbitmq"},next:{title:"Tracer",permalink:"/en/docs/extensions/otel"}},l={},p=[{value:"Basic concept",id:"basic-concept",level:2},{value:"Consumer  Usage",id:"consumer--usage",level:2},{value:"Installation dependency",id:"installation-dependency",level:3},{value:"Open the component",id:"open-the-component",level:2},{value:"Directory structure",id:"directory-structure",level:3},{value:"Kafka message context",id:"kafka-message-context",level:3},{value:"Configure consumers",id:"configure-consumers",level:3},{value:"Manual-committing",id:"manual-committing",level:3},{value:"Multi different Topic",id:"multi-different-topic",level:3},{value:"Decorator parameters",id:"decorator-parameters",level:3},{value:"Producer Usage Method",id:"producer-usage-method",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Call the service to send a message",id:"call-the-service-to-send-a-message",level:3},{value:"Reference document",id:"reference-document",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kafka"},"Kafka"),(0,r.kt)("p",null,"In the architecture of complex systems, event flow is a very important part, including real-time capture of data from event sources (databases, sensors, mobile devices, etc.) in the form of event flow, persistence of event flow for easy retrieval, and real-time and review of operations to process response event flow."),(0,r.kt)("p",null,"It is used for payment and financial transactions, tracking and monitoring the flow of information in industries such as automobiles, capturing and analyzing Internet of Things data, and so on."),(0,r.kt)("p",null,"In Midway, we provide the ability to subscribe to Kafka to meet such needs of users."),(0,r.kt)("p",null,"Related information:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Subscribe to service")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h2",{id:"basic-concept"},"Basic concept"),(0,r.kt)("p",null,"Distributed stream processing platform"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Publish and subscribe (stream) information"),(0,r.kt)("li",{parentName:"ul"},"Fault tolerance (failover) Store information (flow), store event flow"),(0,r.kt)("li",{parentName:"ul"},"When the message flow occurs, handle the event flow.")),(0,r.kt)("p",null,"Understanding Producer (Producer)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Publish messages to one topic or topics.")),(0,r.kt)("p",null,"Understanding Consumer (Subject Consumers)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Subscribe to one or more topics and process the generated information.")),(0,r.kt)("p",null,"Understand Stream API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Act as a stream processor, consume input streams from one or more topics, and produce an output stream to one or more output topics, effectively converting the input stream to the output stream.")),(0,r.kt)("p",null,"Understanding Broker"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Published messages are kept in a group of servers, called a Kafka cluster. Each server in the cluster is a broker. Consumers can consume these published messages by subscribing to one or more topics and pulling data from the Broker.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://kafka.apache.org/images/streams-and-tables-p1_p4.png",alt:"image.png"})),(0,r.kt)("h2",{id:"consumer--usage"},"Consumer  Usage"),(0,r.kt)("h3",{id:"installation-dependency"},"Installation dependency"),(0,r.kt)("p",null,"Midway provides the ability to subscribe to Kafka and can be deployed and used independently. Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/kafka")," module and its definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/kafka@3 --save\n$ npm i kafkajs --save\n")),(0,r.kt)("p",null,"Or reinstall the following dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/kafka": "^3.0.0",\n    "kafka": "^2.0.0 ",\n    // ...\n  }\n}\n')),(0,r.kt)("h2",{id:"open-the-component"},"Open the component"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/kafka")," can be used as an independent main framework."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/core';\nimport * as kafka from '@midwayjs/kafka';\n\n@Configuration({\n  imports: [\n    Kafka\n  ],\n  // ...\n})\nexport class MainConfiguration {\n  async onReady() {\n        // ...\n  }\n}\n")),(0,r.kt)("p",null,"It can also be attached to other main frameworks, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport * as kafka from '@midwayjs/kafka';\n\n@Configuration({\n  imports: [\n    koa,\n    kafka\n  ],\n  // ...\n})\nexport class MainConfiguration {\n  async onReady() {\n        // ...\n  }\n}\n")),(0,r.kt)("h3",{id:"directory-structure"},"Directory structure"),(0,r.kt)("p",null,"We generally divide capabilities into producers and consumers, and subscriptions are the capabilities of consumers."),(0,r.kt)("p",null,"We usually put consumers in consumer catalogues. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"src/consumer/userConsumer.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 consumer\n\u2502   \u2502   \u2514\u2500\u2500 user.consumer.ts\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u2514\u2500\u2500 service\n\u2502       \u2514\u2500\u2500 user.service.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("p",null,"The code example is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\n@Consumer(MSListenerType.KAFKA)\nexport class UserConsumer {\n\n  @Inject()\n  ctx: IMidwayKafkaContext;\n\n  @Inject()\n  logger;\n\n  @KafkaListener('topic-test')\n  async gotData(message: KafkaMessage) {\n    this.logger.info('test output =>', message.offset + '' + message.key + '' + message.value.toString('utf8'));\n  }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@Consumer")," decorator provides the consumer identifier, and its parameters specify the type of a certain consumption framework. For example, here we specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"MSListenerType.KFAKA")," type, which refers to the kafka type."),(0,r.kt)("p",null,"The class that identifies the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Consumer")," can bind a topic after using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@KafkaListener")," decorator for the method."),(0,r.kt)("p",null,"The parameter of the method is the received message of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsumeMessage"),". Automatic confirmation is set by default. When is manual confirmation set? When an exception occurs, it is necessary to set the commitOffsets offset to the abnormal position for re-consumption."),(0,r.kt)("p",null,"If you need to subscribe to multiple topics, you can use multiple methods or multiple files."),(0,r.kt)("h3",{id:"kafka-message-context"},"Kafka message context"),(0,r.kt)("p",null,"The context for subscribing to ",(0,r.kt)("inlineCode",{parentName:"p"},"Kafka")," data is the same as the Web, which contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"requestContext")," and a data binding for each message received."),(0,r.kt)("p",null,"The entire ctx is defined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export type Context = {\n  requestContext: IMidwayContainer;\n};\n")),(0,r.kt)("p",null,"You can get the definition from the framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/kafka';\n")),(0,r.kt)("h3",{id:"configure-consumers"},"Configure consumers"),(0,r.kt)("p",null,"We need to specify the address of Kafka in the configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nimport { MidwayConfig } from '@midwayjs/core';\n\nexport default {\n  // ...\n  kafka: {\n    kafkaConfig: {\n      clientId: 'my-app',\n      brokers: [process.env.KAFKA_URL || 'localhost:9092']\n    },\n    consumerConfig: {\n      groupId: 'groupId-test'\n    }\n  },\n} as MidwayConfig;\n")),(0,r.kt)("p",null,"More configurations (see ",(0,r.kt)("a",{parentName:"p",href:"https://kafka.js.org/docs/consuming"},"https://kafka.js.org/docs/consuming")," for more detailed configurations):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kafkaConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka connection information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- clientId"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify client ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- brokers"),(0,r.kt)("td",{parentName:"tr",align:null},"Kafka cluster brokers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"consumerConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"Consumer Configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"- groupId"),(0,r.kt)("td",{parentName:"tr",align:null},"Packet ID")))),(0,r.kt)("h3",{id:"manual-committing"},"Manual-committing"),(0,r.kt)("p",null,"Manually submit settings. By default, components submit automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Consumer, MSListenerType, Inject, App, KafkaListener } from '@midwayjs/core';\nimport { KafkaMessage } from 'kafkajs';\nimport { Context, Application } from '../../../../../src';\n\n@Provide()\n@Consumer(MSListenerType.KAFKA)\nexport class UserConsumer {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  logger;\n\n  @KafkaListener('topic-test0', {\n    subscription: {\n      fromBeginning: false\n    },\n    runConfig: {\n      autoCommit: false\n    }\n  })\n  async gotData(message: KafkaMessage) {\n    console.info('gotData info');\n    this.logger.info('test output =>', message.offset + '' + message.key + '' + message.value.toString('utf8'));\n    try {\n      // Throws an exception. When an exception occurs, you need to set the commitOffsets offset to the location of the exception to re-execute the consumption, so the consumption that should occur here is 2 times, and the total is 2\n      throw new Error(\"error\");\n    } catch (error) {\n      this.ctx.commitOffsets(message.offset);\n    }\n    this.app.setAttr('total', this.app.getAttr<number>('total') + 1);\n  }\n}\n")),(0,r.kt)("h3",{id:"multi-different-topic"},"Multi different Topic"),(0,r.kt)("p",null,"the subscription of topic1 and topic2, and the consumption of both topics are called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Consumer, MSListenerType, Inject, App, KafkaListener } from '@midwayjs/core';\nimport { KafkaMessage } from 'kafkajs';\nimport { Context, Application } from '../../../../../src';\n\n@Provide()\n@Consumer(MSListenerType.KAFKA)\nexport class UserConsumer {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  logger;\n\n  @KafkaListener('topic-test')\n  async gotData(message: KafkaMessage) {\n    console.info('gotData info');\n    this.logger.info('test output =>', message.offset + '' + message.key + '' + message.value.toString('utf8'));\n    this.app.setAttr('total', this.app.getAttr<number>('total') + 1);\n  }\n\n  @KafkaListener('topic-test2')\n  async gotData2(message: KafkaMessage) {\n    console.info('gotData2 info');\n    this.logger.info('test output =>', message.offset + '' + message.key + '' + message.value.toString('utf8'));\n    this.app.setAttr('total', this.app.getAttr<number>('total') + 1);\n  }\n\n}\n\n")),(0,r.kt)("h3",{id:"decorator-parameters"},"Decorator parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@kafkaListener")," the first parameter of the decorator is topic, which represents the topic to be consumed."),(0,r.kt)("p",null,"The second parameter is an object, including the registered configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"subscription"),", the running configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"runConfig")," and other parameters. The detailed definition is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface KafkaListenerOptions {\n  propertyKey?: string;\n  topic?: string;\n\n  subscription?: ConsumerSubscribeTopics | ConsumerSubscribeTopic;\n  runConfig?: ConsumerRunConfig;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1")),(0,r.kt)("p",null,"Create a manual submission, set the offset of the latest submission to be used by the consumer when starting to get the message ",(0,r.kt)("inlineCode",{parentName:"p"},"fromBeginning: false"),", and set the submission method at runtime to manual submission ",(0,r.kt)("inlineCode",{parentName:"p"},"autoCommit: false")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typeScript"},"import { Provide, Consumer, MSListenerType, Inject, App, KafkaListener } from '@midwayjs/core';\nimport { KafkaMessage } from 'kafkajs';\nimport { Context, Application } from '../../../../../src';\n\n@Provide()\n@Consumer(MSListenerType.KAFKA)\nexport class UserConsumer {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  logger;\n\n  @KafkaListener('topic-test0', {\n    subscription: {\n      fromBeginning: false\n    },\n    runConfig: {\n      autoCommit: false\n    }\n  })\n  async gotData(message: KafkaMessage) {\n    console.info('gotData info');\n    this.logger.info('test output =>', message.offset + '' + message.key + '' + message.value.toString('utf8'));\n    try {\n      // Throws an exception. When an exception occurs, you need to set the commitOffsets offset to the location of the exception to re-execute the consumption.\n      throw new Error(\"error\");\n    } catch (error) {\n      this.ctx.commitOffsets(message.offset);\n    }\n  }\n}\n\n")),(0,r.kt)("h2",{id:"producer-usage-method"},"Producer Usage Method"),(0,r.kt)("p",null,"The producer (Producer) is also the message producer in the first section. In short, it will create a client and send messages to the Kafka service."),(0,r.kt)("p",null,"Note: Midway currently does not use components to support message sending. The example shown here is only the writing method of pure SDK in Midway."),(0,r.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i kafkajs --save\n")),(0,r.kt)("h3",{id:"call-the-service-to-send-a-message"},"Call the service to send a message"),(0,r.kt)("p",null,"For example, we add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Kafka. ts")," file under the service file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Provide,\n  Scope,\n  ScopeEnum,\n  Init,\n  Autoload,\n  Destroy,\n  Config,\n} from '@midwayjs/core';\nimport { ProducerRecord } from 'kafkajs';\nconst { Kafka } = require('kafkajs');\n\n@Autoload()\n@Provide()\n@Scope(ScopeEnum.Singleton) // Singleton singleton, globally unique (process level)\nexport class KafkaService {\n  @Config('kafka')\n  kafkaConfig: any;\n\n  private producer;\n\n  @Init()\n  async connect() {\n    // To create a connection, you can put the configuration in Config and inject it into it.\n    const { brokers, clientId, producerConfig = {} } = this.kafkaConfig;\n    const client = new Kafka({\n      clientId: clientId\n      brokers: brokers\n    });\n    this.producer = client.producer(producerConfig);\n    await this.producer.connect();\n  }\n\n  // Send a message\n  public async send(producerRecord: ProducerRecord) {\n    return this.producer.send(producerRecord);\n  }\n\n  @Destroy()\n  async close() {\n    await this.producer.disconnect();\n  }\n}\n\n")),(0,r.kt)("p",null,"Probably created a service to encapsulate message communication, and it is the only Singleton singleton in the world. Due to the addition of ",(0,r.kt)("inlineCode",{parentName:"p"},"@AutoLoad")," decorator, initialization can be self-executed."),(0,r.kt)("p",null,"In this way, the basic calling service is abstract. You only need to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," method where it is used."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\nexport class UserService {\n\n  @Inject()\n  kafkaService: KafkaService;\n\n  async invoke() {\n    // TODO\n\n    // Send a message\n    const result = this.kafkaService.send({\n      topic: 'test',\n      messages: [\n        {\n          value: JSON.stringify(messageValue)\n        },\n      ],\n    });\n  }\n}\n")),(0,r.kt)("h2",{id:"reference-document"},"Reference document"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kafka.js.org/docs/introduction"},"KafkaJS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kafka.apache.org/intro"},"apache kafka official website"))))}m.isMDXComponent=!0}}]);