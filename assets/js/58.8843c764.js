(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{268:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("添加依赖")]),t._v(" "),t._m(3),a("p",[t._v("增加 Zookeeper 注册中心的配置")]),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("配置任务及事件追踪功能在注解中也只需要配置 eventTraceRdbDataSource=你的数据源,就可以使用")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v('使用注解是比较方便，但很多时候我们需要不同的环境使用不同的配置，测试环境跟生产环境的配置肯定是不一样的，当然你也可以在发布之前将注解中的配置调整好然后发布。\n为了能够让任务的配置区分环境，还可以在属性文件中配置任务的信息，当属性文件中配置了任务的信息，优先级就比注解中的高。\n首先还是在任务类上加@ElasticJobConf(name = "MySimpleJob")注解，只需要增加一个 name 即可，任务名是唯一的。\n剩下的配置都可以在属性文件中进行配置，格式为 elasticJob.任务名.配置属性=属性值')]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("由于 Script 任务的执行逻辑是在具体的脚本中，是通过 scriptCommandLine 来指定执行脚本的路径。我这边为了统一的去发现项目中的任务列表，还是需要建一个脚本的 Java 类，加上 ElasticJobConf 注解，只是不需要写逻辑而已，示例如下：")]),t._v(" "),t._m(11),a("p",[t._v("配置：")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("此项目基于"),a("a",{attrs:{href:"https://github.com/yinjihuan/elastic-job-spring-boot-starter",target:"_blank",rel:"noopener noreferrer"}},[t._v("elastic-job-spring-boot-starter"),a("OutboundLink")],1),t._v("改造")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"分布式定时任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式定时任务"}},[this._v("#")]),this._v(" 分布式定时任务")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[this._v("#")]),this._v(" 概述")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[this._v("#")]),this._v(" 使用说明")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.alinesno.cloud.job.core"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("alinesno-cloud-job-core"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${最新版本}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("elastic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MySimpleJob.cron")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0/10 * * * * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zk.serverLists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2181")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("zk.namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cxytiandi_job2\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("开启自动配置只需要在 Spring Boot 的启动类上增加"),s("code",[this._v("@EnableElasticJob")]),this._v("注解")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// eventTraceRdbDataSource = "datasource"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ElasticJobConf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MySimpleJob-2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cron "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0/10 * * * * ?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\tshardingItemParameters "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0=0,1=1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\tdescription "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"简单任务"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\teventTraceRdbDataSource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataSource"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySimpleJob")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleJob")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LoggerFactory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLogger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MySimpleJob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("execute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ShardingContext")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" shardParamter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getShardingParameter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleDateFormat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HH:mm:ss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t\tlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"分片参数:{} , 开始执行简单任务: {}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shardParamter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置说明"}},[this._v("#")]),this._v(" 配置说明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"application-properties-中配置任务信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-properties-中配置任务信息"}},[this._v("#")]),this._v(" application.properties 中配置任务信息")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("elastic.job.MySimpleJob.cron=0/10 * * * * ?\nelastic.job.MySimpleJob.overwrite=true\nelastic.job.MySimpleJob.shardingTotalCount=1\nelastic.job.MySimpleJob.shardingItemParameters=0=0,1=1\nelastic.job.MySimpleJob.jobParameter=test\nelastic.job.MySimpleJob.failover=true\nelastic.job.MySimpleJob.misfire=true\nelastic.job.MySimpleJob.description=simple job\nelastic.job.MySimpleJob.monitorExecution=false\nelastic.job.MySimpleJob.listener=com.cxytiandi.job.core.MessageElasticJobListener\nelastic.job.MySimpleJob.jobExceptionHandler=com.cxytiandi.job.core.CustomJobExceptionHandler\nelastic.job.MySimpleJob.disabled=true\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"script-任务使用说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script-任务使用说明"}},[this._v("#")]),this._v(" Script 任务使用说明")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('/**\n * 脚本任务不需要写逻辑，逻辑在被执行的脚本中，这边只是定义一个任务而已\n * @author yinjihuan\n *\n */\n@ElasticJobConf(name = "MyScriptJob")\npublic class MyScriptJob implements ScriptJob {\n\tpublic void execute(ShardingContext context) {\n\t}\n}\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("elastic.job.MyScriptJob.cron=0/10 * * * * ?\nelastic.job.MyScriptJob.overwrite=true\nelastic.job.MyScriptJob.scriptCommandLine=/User/local/apache-tomcat/bin/startup.bat\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"鸣谢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[this._v("#")]),this._v(" 鸣谢")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("此处感谢相关开源项目")])])}],!1,null,null,null);s.default=e.exports}}]);