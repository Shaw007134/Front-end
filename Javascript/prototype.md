#构造函数
function Person(){

}

var person = new Person();
person.name = 'kevin';
console.log(person.name)

//prototype是函数才会有的属性
Person.prototype.name = 'kevin'
var person1 = new Person();
person1.__proto__ === Person.prototype()

每个JavaScript对象在创建的时候就会与之关联另一个对象，
这个对象就是我们所说的原型，每个对象都会从原型'继承'属性

每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型

构造函数和实例对象都可以指向原型，而原型可以指向构造函数

每个原型都有一个constructor属性指向关联的构造函数

Person === Person.prototype.constructor

//ES5中，获取对象原型可以用
Object.getPrototypeOf(person) === Person.prototype

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还还查不到，就去找原型的原型，一直找到最顶层为止。

当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以：

```
person.constructor === Person.prototype.constructor
```

其次是 __proto__ ，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.__proto__ 时






