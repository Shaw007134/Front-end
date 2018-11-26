function Otaku (name, age) {
    this.strength = 60;
    this.age = age;

    return {
        name: name,
        habit: 'Games'
    }
}

var person = new Otaku('Kevin', '18');

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // undefined
console.log(person.age) // undefined

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

function objectFactory() {
    var obj = new Object();
    console.log('arguments');
    console.log(arguments);
    //console.log('arguments[0]');
    //console.log(arguments[0]);
    Constructor = [].shift.call(arguments);
    console.log('Constructor')
    console.log(Constructor)
    //console.log('Constructor.prototype')
    //console.log(Constructor.prototype)
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
    console.log('Constructor.apply(obj, arguments)')
    console.log(Constructor.apply(obj, arguments))
    console.log('obj')
    console.log(obj)
    return obj;
};

var person = objectFactory(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60