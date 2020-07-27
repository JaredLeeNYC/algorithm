/*
refactor new operator
*/
// var new2 = function(func,...parameter){
//     var o = Object.create(func.prototype);
//     var k = func.call(o, ...parameter);
//     if(k && k instanceof Object){
//         return k
//     }else{
//         return o
//     }
// }

// console.log(new2(Person,"22"))

/*
ways to create new objects
*/
// let obj = {'name':'张三'}

// let obj2 = new Object()
// obj2.name = "张三"

// function createPerson(name){
//     var o = new Object();
//     o.name = name
//     return o
// }
// var person1 = createPerson("张三")

// function Person(name){
//     this.name = name
// }
// var person2 = new Person('张三')


/*
prototype
*/
// var Person = function(name){
//     this.name = name
// }
// var o3personTwo = new Person('personTwo')

/*
refactoring the bind function in Function.prototype 
*/
// Function.prototype.bind = function(context, ...innerArgs){
//      var me = this
//      return function(...finnalyArgs){
//          return me.call(context, ...innerArgs, ...finnalyArgs)
//      }
// }
// let person = {
//     name:'Abiel'
// }
// function sayHi(age,sex){
//     console.log(this.name, age, sex)
// }
// let personSayHi = sayHi.bind(person, 25)
// personSayHi('男')

/*
refactoring the apply function in Function.prototype 
*/
// Function.prototype.newApply = function(context, parameter){
//     if(typeof context === 'object' || typeof context === 'function'){
//         context = context || global
//     }else{
//         context = Object.create(null)
//     }
//     let fn = Symbol()
//     context[fn]=this
//     const res = context[fn](...parameter)
//     delete context.fn;
//     return res
// }

// let person = {
//     name:'Abiel'
// }
// var name = "bbb"
// function sayHi(age,sex){
//     console.log(this.name, age, sex)
// }
// sayHi.newApply(person, [25, '男'])

/*
refactoring the call function in Function.prototype 
*/
// Function.prototype.newCall = function(context, ...parameter){
//     if (typeof context === 'object' || typeof context === 'function'){
//         context = context || global
//     }else{
//         context = Object.create(null)
//     }
//     let fn = Symbol()
//     context[fn] = this
//     const res = context[fn](...parameter)
//     delete context.fn;
//     return res
// }

// let person = {
//     name:'Abiel'
// }
// var name = "bbb"
// function sayHi(age,sex){
//     console.log(this.name, age, sex)
// }
// sayHi(23,"女")
// sayHi.newCall(person, 25, '男')

/*
bind 
*/
// var name = "李四"
// var foo = {
//     name:'张三',
//     logName: function(age){
//         console.log(this.name, age)
//     }
// }
// var fooNew = foo.logName;
// var fooNewBind = foo.logName.bind(foo)
// fooNew(10)
// fooNewBind(11)

/*
combine two array by changing the first array 
*/
// Object.prototype.toString.call({})


/*
combine two array by changing the first array 
*/
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// arr1.splice(arr1.length,0,...arr2)
// Array.prototype.push.apply(arr1,arr2)
// console.log(arr1)

/* use two constructor funtion to implement inheritance*/
// function Animal(name){
//     this.name = name;
//     this.showName = function(){
//         console.log(this.name)
//     }
// }

// function Cat(name){
//     Animal.call(this, name)
// }

// var cat = new Cat("Ding Dang")

// cat.showName();