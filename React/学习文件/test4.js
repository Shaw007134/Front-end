console.log("hello world")




// const Audit = React.createClass({
//     render: function() {
//         return (<h1>sd</h1>)
//     }
// });
//这里报错createClass没有定义,React16已经弃用了该方法
//建议使用class extends,关于createClass与class继承方法的区别可参考
//https://segmentfault.com/a/1190000005863630

//JSX语法申明实际是执行了以下的代码
//以html标签开头将会转化为带''的，''内全是小写，即使写成了大写
//函数和类申明的组件，大写

class Component extends React.Component{
  // static propTypes = {
  //   name: React.PropTypes.string,
  //   age: React.PropTypes.number
  // }
  //上述在15.5以后被废弃，需要用import PropTypes from 'prop-types';
  static defaultProps = {
    name: 'com',
    age: 18
  }
  //通过defaultProps设置默认属性值
  constructor(props){
    super(props)
    this.state = {
      status: 'logged',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    console.log('handle Change')
    console.log(this); // 在constructor中通过bind绑定
    this.setState({message:e.target.value})
    console.log(this.state.message)
  }
  handleFocus(){  
      console.log('handle Focus')
      console.log(this); // 在render的时候通过bind绑定
  }
  handleBlur = ()=>{  
      console.log('handle Blur')
      console.log(this); // 用箭头函数自动绑定
  }
  render(){
    console.log(this.props)
    return (
      //写style是需要加双括号，JSX编码格式要求，style必须是一个对象
      <div style={{color:"blue"}}>我是Component组件 &gt;&gt; {undefined}
        <p>{this.props.children}</p>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>Status: {this.state.status}</p>
        <p>Message: {this.state.message}</p>
        <input type="text" value={this.state.message} onChange={this.handleChange} 
                              onFocus={this.handleFocus.bind(this)}  
                              //第一、三种写法的性能一样，在实例化时会调用
                              //但万一我们需要改变语法结构，第一种方式可以完全不需要去改动 JSX 的部分：
                              //第二种则会在触发render时不断进行调用，性能不太好
                              onBlur={this.handleBlur}/>
      </div>
    )
  }
}
console.log(<Component></Component>)
//在组件外进行类型检测，可检测五种类型，无法检测undefined和null
Component.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number    
}

Component.defaultProps = {
  name: "admin",
  age: 20
};

var app = React.createElement(
  Component,
  { name: 18 },
  'Hello world'
);

// var esca = <a href="https://baidu.com?<script>alert('attack')</script>">5&gt;3{true &&<span dangerouslySetInnerHTML={{__html: ' &gt;this is true'}}></span>}</a>
// var esca = React.createElement('span', null, '5\u003E3 this is true;')
// var esca = React.createElement('span', null, dangerouslySetInnerHTML={__html:'5&gt;3 this is true;'})

// console.log(esca)
// function com(val){
//   return <app>hello {val}</app>
// }


console.log(app)
// console.log(com('admin'))
ReactDOM.render(
  app,
  // com('admin'), 
  document.getElementById('root')
);

