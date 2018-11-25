1. v-bind: key=boolean 数据绑定到DOM文本或特性，还可以绑定到DOM结构
  * null / undefined / false将不渲染
  * key可以为一个参数，如href等
  * 可简写为:key = value
  * v-bind还可以传入class="{a: boolean, b: boolean, ...}"/
      class="classObject"
2. v-for/v-if
  * 与v-if类似，但v-show 不支持 <template> 元素，也不支持 v-else。而且带有 v-show 的元素始终会被渲染并保留在 DOM 中。v-show 只是简单地切换元素的 CSS 属性 display
  * v-for可以与computed, methods方法复用
  * v-for = "n in 10"用于取整
  * 类似于 v-if，你也可以利用带有 v-for 的 <template> 渲染多个元素。

3. v-on：key = value
  * key可以为一个监听的时间名，如click
  * 可以添加修饰符，如key.prevent = value
  * v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
  * 可简写为@key = value
4. v-model
  * 在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定
  * 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：
  * 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符
5. 组件
  * Vue.component('id',{data:function(){},template:string})
  * 因为组件是可复用的 Vue 实例，所以它们与 new Vue 接收相同的选项，例如 data、computed、watch、methods 以及生命周期钩子等。仅有的例外是像 el 这样根实例特有的选项。
  * 一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝：
  * 组件必须先注册以便 Vue 能够识别。这里有两种组件的注册类型：全局注册和局部注册。 Vue.component 是全局注册的
  * 全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生。
  * 局部注册的组件在其子组件中不可用，若要使用，例如在组件B中使用A,C 
  ```
  import ComponentA from './ComponentA.vue'

  export default {
    components: {
      ComponentA
    },
    // ...
  }
  ```
  * Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性。
  * 每个组件必须只有一个根元素
  * Vue 实例提供了一个自定义事件的系统来解决这个问题。我们可以调用内建的 $emit 方法并传入事件的名字，来向父级组件触发一个事件

v-once {{xxx}} -- 普通文本， xxx除了变量，也可以是单个js表达式
v-html -- HTML

5. 计算属性
  位于computed内函数，绑定data里的值
  计算属性是基于它们的依赖进行缓存的
  计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter 




