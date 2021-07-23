(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{254:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"excel-导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#excel-导出"}},[t._v("#")]),t._v(" Excel 导出")]),t._v(" "),a("p",{staticClass:"show-images"},[a("img",{attrs:{src:"/images/undraw_in_sync_xwsa.svg",width:"40%"}})]),t._v(" "),a("h3",{attrs:{id:"注释介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释介绍"}},[t._v("#")]),t._v(" 注释介绍")]),t._v(" "),a("ul",[a("li",[t._v("@Excel 作用到 filed 上面,是对 Excel 一列的一个描述")]),t._v(" "),a("li",[t._v("@ExcelCollection 表示一个集合,主要针对一对多的导出,比如一个老师对应多个科目,科目就可以用集合表示")]),t._v(" "),a("li",[t._v("@ExcelEntity 表示一个继续深入导出的实体,但他没有太多的实际意义,只是告诉系统这个对象里面同样有导出的字段")]),t._v(" "),a("li",[t._v("@ExcelIgnore 和名字一样表示这个字段被忽略跳过这个导导出")]),t._v(" "),a("li",[t._v("@ExcelTarget 这个是作用于最外层的对象,描述这个对象的 id,以便支持一个对象可以针对不同导出做出不同处理")])]),t._v(" "),a("h3",{attrs:{id:"excel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#excel"}},[t._v("#")]),t._v(" @Excel")]),t._v(" "),a("p",[t._v("这个是必须使用的注解,如果需求简单只使用这一个注解也是可以的,涵盖了常用的 Excel 需求,主要分为基础,图片处理,时间处理,合并处理几块,name_id 是上面讲的 id 用法。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("列名,支持 name_id")])]),t._v(" "),a("tr",[a("td",[t._v("needMerge")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("fasle")]),t._v(" "),a("td",[t._v("是否需要纵向合并单元格(用于含有 list 中,单个的单元格,合并 list 创建的多个 row)")])]),t._v(" "),a("tr",[a("td",[t._v("orderNum")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('"0"')]),t._v(" "),a("td",[t._v("列的排序,支持 name_id")])]),t._v(" "),a("tr",[a("td",[t._v("replace")]),t._v(" "),a("td",[t._v("String[]")]),t._v(" "),a("td",[t._v("{}")]),t._v(" "),a("td",[t._v("值得替换 导出是{a_id,b_id} 导入反过来")])]),t._v(" "),a("tr",[a("td",[t._v("savePath")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('"upload"')]),t._v(" "),a("td",[t._v("导入文件保存路径,如果是图片可以填写,默认是 upload/className/ IconEntity 这个类对应的就是 upload/Icon/")])]),t._v(" "),a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("导出类型 1 是文本 2 是图片,3 是函数,10 是数字 默认是文本")])]),t._v(" "),a("tr",[a("td",[t._v("width")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("列宽")])]),t._v(" "),a("tr",[a("td",[t._v("height")]),t._v(" "),a("td",[t._v("double")]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("列高")])]),t._v(" "),a("tr",[a("td",[t._v("isStatistics")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("fasle")]),t._v(" "),a("td",[t._v("自动统计数据,在追加一行统计,把所有数据都和输出[这个处理会吞没异常,请注意这一点]")])]),t._v(" "),a("tr",[a("td",[t._v("isHyperlink")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("超链接,如果是需要实现接口返回对象")])]),t._v(" "),a("tr",[a("td",[t._v("isImportField")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("校验字段,看看这个字段是不是导入的 Excel 中有,如果没有说明是错误的 Excel,读取失败,支持 name_id")])]),t._v(" "),a("tr",[a("td",[t._v("exportFormat")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("导出的时间格式,以这个是否为空来判断是否需要格式化日期")])]),t._v(" "),a("tr",[a("td",[t._v("importFormat")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("导入的时间格式,以这个是否为空来判断是否需要格式化日期")])]),t._v(" "),a("tr",[a("td",[t._v("format")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("时间格式,相当于同时设置了 exportFormat 和 importFormat")])]),t._v(" "),a("tr",[a("td",[t._v("databaseFormat")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('"yyyyMMddHHmmss"')]),t._v(" "),a("td",[t._v("导出时间设置,如果字段是 Date 类型则不需要设置 数据库如果是 string 类型,这个需要设置这个数据库格式,用以转换时间格式输出")])]),t._v(" "),a("tr",[a("td",[t._v("numFormat")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("数字格式化,参数是 Pattern,使用的对象是 DecimalFormat")])]),t._v(" "),a("tr",[a("td",[t._v("imageType")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("导出类型 1 从 file 读取 2 是从数据库中读取 默认是文件 同样导入也是一样的")])]),t._v(" "),a("tr",[a("td",[t._v("suffix")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("文字后缀,如% 90 变成 90%")])]),t._v(" "),a("tr",[a("td",[t._v("isWrap")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否换行 即支持\\n")])]),t._v(" "),a("tr",[a("td",[t._v("mergeRely")]),t._v(" "),a("td",[t._v("int[]")]),t._v(" "),a("td",[t._v("{}")]),t._v(" "),a("td",[t._v("合并单元格依赖关系,比如第二列合并是基于第一列 则{0}就可以了")])]),t._v(" "),a("tr",[a("td",[t._v("mergeVertical")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("fasle")]),t._v(" "),a("td",[t._v("纵向合并内容相同的单元格")])]),t._v(" "),a("tr",[a("td",[t._v("fixedIndex")]),t._v(" "),a("td",[t._v("int")]),t._v(" "),a("td",[t._v("-1")]),t._v(" "),a("td",[t._v("对应 excel 的列,忽略名字")])]),t._v(" "),a("tr",[a("td",[t._v("isColumnHidden")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("导出隐藏列")])])])]),t._v(" "),a("h3",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("p",[t._v("对象定义")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StudentEntity")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" serialVersionUID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * id\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 学生姓名\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Excel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"学生姓名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isImportField "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true_st"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 学生性别\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Excel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"学生性别"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" replace "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"男_1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"女_2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" suffix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"生"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isImportField "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true_st"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Excel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"出生日期"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" databaseFormat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyyMMddHHmmss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy-MM-dd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isImportField "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true_st"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" birthday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Excel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"进校日期"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" databaseFormat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyyMMddHHmmss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" format "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yyyy-MM-dd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v(" registrationDate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如果有特殊的需求，可以在控制层重写 exportExcel()方法")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResponseBean")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exportExcel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DatatablesPageBean")]),t._v(" page "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpServletResponse")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("效果如下")]),t._v(" "),a("p",{staticClass:"show-images"},[a("img",{attrs:{src:"/images/exportExcel_example.png",width:"100%"}})]),t._v(" "),a("h3",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[t._v("#")]),t._v(" 其它")]),t._v(" "),a("ul",[a("li",[t._v("略")])])])}],!1,null,null,null);s.default=e.exports}}]);