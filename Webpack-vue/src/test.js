//module.exports={}
//这是node中向外暴露成员的形式
//node中使用var 名称 = require('模块标识符')导入模块

//es6中，导入模块是用import 模块名称 from '模块标识符' 或 import '表示路径'
//es6中，使用export default和export向外暴露成员
var info ={
  name:'zs',
  age:20
}

export default info
//export default向外暴露的成员可用任意名称接收
//在一个模块中，只能使用export default向外暴露一次
//在一个模块中，可以同时使用export default和export向外暴露
export var title = "小心心"
export var content = "哈哈哈"
//使用export向外暴露，只能使用{}的形式接收--按需导出
//使用export可以暴露多个成员，import不需要可以不在{}引入
//使用export暴露，接收可以使用as起别名
