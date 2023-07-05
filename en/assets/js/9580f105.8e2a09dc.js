"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56471],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const s={},i="RabbitMQ",o={unversionedId:"extensions/rabbitmq",id:"extensions/rabbitmq",title:"RabbitMQ",description:"In the architecture of a complex system, there will be microservices responsible for processing message queues, as shown in the following figure: service A is responsible for generating messages to the message queue, while service B is responsible for consuming tasks in the message queue.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/extensions/rabbitmq.md",sourceDirName:"extensions",slug:"/extensions/rabbitmq",permalink:"/en/docs/extensions/rabbitmq",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/extensions/rabbitmq.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"WebSocket",permalink:"/en/docs/extensions/ws"},next:{title:"Kafka",permalink:"/en/docs/extensions/kafka"}},l={},c=[{value:"Basic concept",id:"basic-concept",level:2},{value:"Consumer (Consumer) Usage",id:"consumer-consumer-usage",level:2},{value:"Installation dependency",id:"installation-dependency",level:3},{value:"Open the component",id:"open-the-component",level:2},{value:"Directory structure",id:"directory-structure",level:3},{value:"RabbitMQ message context",id:"rabbitmq-message-context",level:3},{value:"Configure consumers",id:"configure-consumers",level:3},{value:"Fanout Exchange",id:"fanout-exchange",level:3},{value:"Direct Exchange",id:"direct-exchange",level:3},{value:"Decorator parameters",id:"decorator-parameters",level:3},{value:"Local test",id:"local-test",level:3},{value:"Producer  Usage Method",id:"producer--usage-method",level:2},{value:"Installation dependency",id:"installation-dependency-1",level:3},{value:"Call the service to send a message",id:"call-the-service-to-send-a-message",level:3},{value:"Reference document",id:"reference-document",level:2}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rabbitmq"},"RabbitMQ"),(0,r.kt)("p",null,"In the architecture of a complex system, there will be microservices responsible for processing message queues, as shown in the following figure: service A is responsible for generating messages to the message queue, while service B is responsible for consuming tasks in the message queue."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01SYMbCz1moVSVLl7S2_!!6000000005001-2-tps-646-251.png",alt:"image.png"})),(0,r.kt)("p",null,"In Midway, we provide the ability to subscribe to rabbitMQ specifically to meet such needs of users."),(0,r.kt)("p",null,"Related information:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Subscribe to service")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for standard projects"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for Serverless"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Can be used for integration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent main framework"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contains independent logs"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h2",{id:"basic-concept"},"Basic concept"),(0,r.kt)("p",null,"The concept of RabbitMQ is more complicated. It is based on the Advanced Message Queuing Protocol, that is, the Advanced Message Queuing Protocol(AMQP). Please read the relevant reference documents for the first time."),(0,r.kt)("p",null,"AMQP has some concepts. Queue, Exchange and Binding form the core of AMQP protocol, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Producer: message producer, that is, the program that delivers messages."),(0,r.kt)("li",{parentName:"ul"},"Broker: Message Queuing Server Entity.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Exchange: Message Switch, which specifies which rules the message is routed to and to which queue."),(0,r.kt)("li",{parentName:"ul"},"Binding: Binding, its function is to bind Exchange and Queue according to routing rules."),(0,r.kt)("li",{parentName:"ul"},"Queue: Message queue carrier, where each message is put into one or more queues."))),(0,r.kt)("li",{parentName:"ul"},"Consumer: Message consumer, that is, the program that accepts messages.")),(0,r.kt)("p",null,"Simply understand, messages are published to Exchange (switches) through Publisher, Consumer receive messages by subscribing to Queue, and Exchange and Queue are connected through routing."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01fLrucw1FVNbCx4NqG_!!6000000000492-2-tps-700-328.png",alt:"image.png"})),(0,r.kt)("h2",{id:"consumer-consumer-usage"},"Consumer (Consumer) Usage"),(0,r.kt)("h3",{id:"installation-dependency"},"Installation dependency"),(0,r.kt)("p",null,"Midway provides the ability to subscribe to rabbitMQ and can be deployed and used independently. Install the ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/rabbitmq")," module and its definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/rabbitmq@3 --save\n$ npm i amqplib --save\n$ npm i @types/amqplib --save-dev\n")),(0,r.kt)("p",null,"Or reinstall the following dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/rabbitmq": "^3.0.0",\n    "amqplib": "^0.10.1 ",\n    // ...\n  },\n  "devDependencies": {\n    "@types/amqplib": "^0.8.2 ",\n    // ...\n  }\n}\n')),(0,r.kt)("h2",{id:"open-the-component"},"Open the component"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/rabbmitmq")," can be used as a separate main framework."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/core';\nimport * as rabbitmq from '@midwayjs/rabbitmq';\n\n@Configuration({\n  imports: [\n    rabbitmq\n  ],\n  // ...\n})\nexport class MainConfiguration {\n  async onReady() {\n        // ...\n  }\n}\n")),(0,r.kt)("p",null,"It can also be attached to other mainframes, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/koa")," ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/configuration.ts\nimport { Configuration } from '@midwayjs/core';\nimport * as koa from '@midwayjs/koa';\nimport * as rabbitmq from '@midwayjs/rabbitmq';\n\n@Configuration({\n  imports: [\n    koa,\n    rabbitmq\n  ],\n  // ...\n})\nexport class MainConfiguration {\n  async onReady() {\n        // ...\n  }\n}\n")),(0,r.kt)("h3",{id:"directory-structure"},"Directory structure"),(0,r.kt)("p",null,"We generally divide capabilities into producers and consumers, and subscriptions are the capabilities of consumers."),(0,r.kt)("p",null,"We usually put consumers in consumer catalogues. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"src/consumer/userConsumer.ts"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 consumer\n\u2502   \u2502   \u2514\u2500\u2500 user.consumer.ts\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u2514\u2500\u2500 service\n\u2502       \u2514\u2500\u2500 user.service.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 tsconfig.json\n")),(0,r.kt)("p",null,"The code example is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Consumer, MSListenerType, RabbitMQListener, Inject } from '@midwayjs/core';\nimport { Context } from '@midwayjs/rabbitmq';\nimport { ConsumeMessage } from 'amqplib';\n\n@Consumer(MSListenerType.RABBITMQ)\nexport class UserConsumer {\n\n  @Inject()\n  ctx: Context;\n\n  @RabbitMQListener('tasks')\n  async gotData(msg: ConsumeMessage) {\n    this.ctx.channel.ack(msg);\n  }\n\n}\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@Consumer")," the decorator, which provides the consumer identity, and its parameters specify the type of a certain consumption framework. For example, we specify the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"MSListenerType.RABBITMQ")," here, which refers to the rabbitMQ type."),(0,r.kt)("p",null,"The class that identifies the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Consumer")," can bind a RabbitMQ queue after using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@RabbitMQListener")," decorator for the method."),(0,r.kt)("p",null,"The parameter of the method is the received message of type ",(0,r.kt)("inlineCode",{parentName:"p"},"ConsumeMessage"),". If you need to confirm the returned value, you must perform the ",(0,r.kt)("inlineCode",{parentName:"p"},"ack")," operation on the server to specify the received data."),(0,r.kt)("p",null,"If you need to subscribe to multiple queues, you can use multiple methods or multiple files."),(0,r.kt)("h3",{id:"rabbitmq-message-context"},"RabbitMQ message context"),(0,r.kt)("p",null,"The context of the subscription ",(0,r.kt)("inlineCode",{parentName:"p"},"RabbitMQ")," data is the same as that of the Web, which contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"requestContext")," and a data binding for each message received."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"channel")," can be taken from ctx. The entire ctx is defined:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export type Context = {\n  channel: amqp.Channel;\n  requestContext: IMidwayContainer;\n};\n")),(0,r.kt)("p",null,"You can get the definition from the framework"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context } from '@midwayjs/rabbitmq';\n")),(0,r.kt)("h3",{id:"configure-consumers"},"Configure consumers"),(0,r.kt)("p",null,"We need to specify the address of rabbitmq in the configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\nimport { MidwayConfig } from '@midwayjs/core';\n\nexport default {\n  // ...\n  rabbitmq: {\n    url: 'amqp://localhost'\n  }\n} as MidwayConfig;\n")),(0,r.kt)("p",null,"More configurations:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"rabbitMQ connection information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"socketOptions"),(0,r.kt)("td",{parentName:"tr",align:null},"amqplib. The second parameter of the connect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reconnectTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Retry time after queue disconnection, default 10 seconds")))),(0,r.kt)("h3",{id:"fanout-exchange"},"Fanout Exchange"),(0,r.kt)("p",null,"Fanout is a specific switch that sends a message to the Queue to which the Exchange is bound if a match (binding) is met. Fanout Exchange ignores the RoutingKey settings and broadcasts the Message directly to all bound Queue."),(0,r.kt)("p",null,"That is, all Queues subscribing to the switch will receive messages."),(0,r.kt)("p",null,"For example, we have added two Queue and subscribed to the same switch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Consumer, MSListenerType, RabbitMQListener, Inject, App } from '@midwayjs/core';\nimport { Context, Application } from '@midwayjs/rabbitmq';\nimport { ConsumeMessage } from 'amqplib';\n\n@Consumer(MSListenerType.RABBITMQ)\nexport class UserConsumer {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  logger;\n\n  @RabbitMQListener('abc', {\n    exchange: 'logs',\n    exchangeOptions: {\n      type: 'fanout',\n      durable: false\n    },\n    exclusive: true,\n    consumeOptions: {\n      noAck: true,\n    }\n  })\n  async gotData(msg: ConsumeMessage) {\n    this.logger.info('test output1 =>', msg.content.toString('utf8'));\n    // TODO\n  }\n\n  @RabbitMQListener('bcd', {\n    exchange: 'logs',\n    exchangeOptions: {\n      type: 'fanout',\n      durable: false\n    },\n    exclusive: true\n    consumeOptions: {\n      noAck: true\n    }\n  })\n  async gotData2(msg: ConsumeMessage) {\n    this.logger.info('test output2 =>', msg.content.toString('utf8'));\n    // TODO\n  }\n\n}\n\n")),(0,r.kt)("p",null,"The subscribed ABC and BCD queues are bound to the same switch logs. As a result, both methods will be called."),(0,r.kt)("h3",{id:"direct-exchange"},"Direct Exchange"),(0,r.kt)("p",null,"Direct Exchange is the RabbitMQ default Exchange that routes messages based entirely on RoutingKey. When setting the Binding between Exchange and Queue, you need to specify the RoutingKey (usually Queue Name). When sending a message, you also specify the same RoutingKey, and the message will be routed to the corresponding Queue."),(0,r.kt)("p",null,"In the following sample code, we do not fill in Queue Name, only add a routingKey, and the switch type is direct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Consumer, MSListenerType, RabbitMQListener, Inject, App } from '@midwayjs/core';\nimport { Context, Application } from '../../../../../src';\nimport { ConsumeMessage } from 'amqplib';\n\n@Consumer(MSListenerType.RABBITMQ)\nexport class UserConsumer {\n\n  @App()\n  app: Application;\n\n  @Inject()\n  ctx: Context;\n\n  @Inject()\n  logger;\n\n  @RabbitMQListener ('', {\n    exchange: 'direct_logs',\n    exchangeOptions: {\n      type: 'direct',\n      durable: false\n    },\n    routingKey: 'direct_key',\n    exclusive: true,\n    consumeOptions: {\n      noAck: true\n    }\n  })\n  async gotData(msg: ConsumeMessage) {\n    // TODO\n  }\n}\n\n")),(0,r.kt)("p",null,"Direct messages are filtered according to routerKey, so only specific subscriptions can receive messages."),(0,r.kt)("h3",{id:"decorator-parameters"},"Decorator parameters"),(0,r.kt)("p",null,"The first parameter of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@RabbitMQListener")," decorator is queueName, which represents the queue to be listened."),(0,r.kt)("p",null,"The second parameter is an object, including queue, switch and other parameters. The detailed definition is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface RabbitMQListenerOptions {\n  exchange?: string;\n  /**\n   * queue options\n   */\n  exclusive?: boolean;\n  durable?: boolean;\n  autoDelete?: boolean;\n  messageTtl?: number;\n  expires?: number;\n  deadLetterExchange?: string;\n  deadLetterRoutingKey?: string;\n  maxLength?: number;\n  maxPriority?: number;\n  pattern?: string;\n  /**\n   * prefetch\n   */\n  prefetch?: number;\n  /**\n   * router\n   */\n  routingKey?: string;\n  /**\n   * exchange options\n   */\n  exchangeOptions ?: {\n    type?: 'direct' | 'topic' | 'headers' | 'fanout' | 'match' | string;\n    durable?: boolean;\n    internal?: boolean;\n    autoDelete?: boolean;\n    alternateExchange?: string;\n    arguments?: any;\n  };\n  /**\n   * consumeOptions\n   */\n  consumeOptions ?: {\n    consumerTag?: string;\n    noLocal?: boolean;\n    noAck?: boolean;\n    exclusive?: boolean;\n    priority?: number;\n    arguments?: any;\n  }\n}\n")),(0,r.kt)("h3",{id:"local-test"},"Local test"),(0,r.kt)("p",null,"Midway provides a simple test method for testing subscriptions to a certain data.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"@midwayjs/mock")," tool provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"createRabbitMQProducer")," method for creating a producer through which you can create a queue and send messages to the queue."),(0,r.kt)("p",null,"Then, we start an app to automatically listen to the data in this queue and execute subsequent logic."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createRabbitMQProducer, close, creatApp } from '@midwayjs/mock';\n\ndescribe('/test/index.test.ts', () => {\n  it('should test create message and get from app', async () => {\n    // create a queue and channel\n    const channel = await createRabbitMQProducer('tasks', {\n      isConfirmChannel: true\n      mock: false\n      url: 'amqp://localhost',\n    });\n\n    // send data to queue\n    channel.sendToQueue('tasks', Buffer.from('something to do'))\n\n    // create app and got data\n    const app = await creatApp();\n\n    // wait a moment\n\n    await close(app);\n  });\n});\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1")),(0,r.kt)("p",null,"Create a fanout exchange."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const manager = await createRabbitMQProducer('tasks-fanout', {\n  isConfirmChannel: false\n  mock: false\n  url: 'amqp://localhost',\n});\n\n// Name of the exchange\nconst ex = 'logs';\n// Write a message\nconst msg = \"Hello World!\";\n\n// Declare Switch\nmanager.assertExchange(ex, 'fanout', { durable: false }) // 'fanout' will broadcast all messages to all the queues it knows\n\n// Start the service\nconst app = await creatApp('base-app-fanout', {\n  url: 'amqp://localhost',\n  reconnectTime: 2000\n});\n\n// Sent to the switch, because it is not persistent, you need to wait until the subscription service is up before sending it.\nmanager.sendToExchange(ex, '', Buffer.from(msg))\n\n// Wait for a while\nawait sleep(5000);\n\n// Check result\n\n// Close producer\nawait manager.close();\n\n// Close app\nawait close(app);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2")),(0,r.kt)("p",null,"Create a direct exchange."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n  * direct type messages, targeted filtering according to routerKey\n  */\nconst manager = await createRabbitMQProducer('tasks-direct', {\n  isConfirmChannel: false\n  mock: false\n  url: 'amqp://localhost',\n});\n\n// Name of the exchange\nconst ex = 'direct_logs';\n// Write a message\nconst msg = \"Hello World!\";\n\n// Declare Switch\nmanager.assertExchange(ex, 'direct', { durable: false }) // 'fanout' will broadcast all messages to all the queues it knows\n\nconst app = await creatApp('base-app-direct', {\n  url: 'amqp://localhost',\n  reconnectTime: 2000\n});\n\n// Specify the routerKey here and send it to the switch\nmanager.sendToExchange(ex, 'direct_key', Buffer.from(msg))\n\n// Check result\n\nawait manager.close();\nawait close(app);\n")),(0,r.kt)("h2",{id:"producer--usage-method"},"Producer  Usage Method"),(0,r.kt)("p",null,"The producer (Producer), that is, the message producer in the first section, simply creates a client to send the message to the RabbitMQ service."),(0,r.kt)("p",null,"Note: Currently Midway does not use components to support message sending, the examples shown here are just written in Midway using pure SDK."),(0,r.kt)("h3",{id:"installation-dependency-1"},"Installation dependency"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i amqplib amqp-connection-manager --save\n$ npm i @types/amqplib --save-dev\n")),(0,r.kt)("h3",{id:"call-the-service-to-send-a-message"},"Call the service to send a message"),(0,r.kt)("p",null,"For example, we add a ",(0,r.kt)("inlineCode",{parentName:"p"},"rabbitmq.ts")," file under the service file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Scope, ScopeEnum, Init, Autoload, Destroy } from '@midwayjs/core';\nimport * as amqp from 'amqp-connection-manager'\n\n@Autoload()\n@Provide()\n@Scope(ScopeEnum.Singleton) // Singleton singleton, globally unique (process level)\nexport class RabbitmqService {\n\n  private connection: amqp.AmqpConnectionManager;\n\n  private channelWrapper;\n\n  @Init()\n  async connect() {\n    // To create a connection, you can put the configuration in Config and inject it into it.\n    this.connection = await amqp.connect('amqp://localhost');\n\n    // Create channel\n    this.channelWrapper = this.connection.createChannel({\n      json: true,\n      setup: function(channel) {\n        return Promise.all ([\n          // Binding queue\n            channel.assertQueue(\"tasks\", { durable: true })\n        ]);\n      }\n    });\n  }\n\n  // Send a message\n  public async sendToQueue(queueName: string, data: any) {\n    return this.channelWrapper.sendToQueue(queueName, data);\n  }\n\n  @Destroy()\n  async close() {\n    await this.channelWrapper.close();\n    await this.connection.close();\n  }\n}\n\n")),(0,r.kt)("p",null,"Probably created a service to encapsulate message communication, and it is the only Singleton singleton in the world. Due to the addition of ",(0,r.kt)("inlineCode",{parentName:"p"},"@AutoLoad")," decorator, initialization can be self-executed."),(0,r.kt)("p",null,"In this way, the basic calling service is abstract. We only need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"sendToQueue")," method where it is used."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Provide()\nexport class UserService {\n\n  @Inject()\n  rabbitmqService: RabbitmqService;\n\n    async invoke() {\n    // TODO\n\n    // Send a message\n    await this.rabbitmqService.sendToQueue('tasks', {hello: 'world'});\n  }\n}\n")),(0,r.kt)("h2",{id:"reference-document"},"Reference document"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/37198933"},"Understanding RabbitMQ Exchange")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Gurenax/node-rabbitmq"},"RabbitMQ for Node.js in 30 steps"))))}m.isMDXComponent=!0}}]);