/*
Class Stack
*/
// function Person(name){
//    this.name = name
//    var abc = "abc"
// }

// class Stack{
//     constructor(...arr){
//         this.arr = arr
//         Person.call(this,"222")
//     }   
//     push(...item){
//         this.arr.push(...item)
//     }
//     pop(){
//         this.arr.pop()
//     }
//     get peek(){
//         return this.arr[this.arr.length-1]
//     }
//     get isEmpty(){
//         return this.arr.length>0?false:true
//     }
//     get size(){
//         return this.arr.length
//     }
//     clear(){
//         this.arr.length = []
//     }

// }

// const s1 = new Stack(1,2,3)
// s1.pop()
// s1.pop()
// s1.pop()
// s1.push(2,4)
// console.log(s1.name)

/*
 Array fill
*/
// const arr = [1,2,3,4]
// arr.map(()=>0)
// console.log(arr.map(()=>0))

/*
Refactor Array Slice
*/
// Array.prototype.newSlice = function(start, end){
//      const result = [];
//      start = start || 0;
//      end = end || this.length
//      for(let i=start; i<end; i++){
//          result.push(this[i])
//      }
//      return result
// }
// console.log([1,2,3,4].newSlice(1))


/*
Array sum
*/
// var arr = [1,2,3,4,5,6,7]
// console.log(sum(arr))

// function sum(arr){
//     if(arr === null || arr.length===0){
//         return null
//     }
//      if(arr.length === 1){
//          return arr[0]
//      }
//      if(arr.length ===2){
//          return arr[0]+arr[1]
//      }
//      return arr[arr.length-1]+sum(arr.slice(0,arr.length-1))

// }

/*
refactor reduce
*/
// Array.prototype.newReduce = function(fn, initial){
//         if(typeof fn !== "function"){
//         return new TypeError("argument should be a function")
//     }
//      let result = initial;
//      const arr = this;
//      for(let i=0; i<this.length; i++){
//          result = fn(result, arr[i], i, arr)
//      }
//      return result
// }
// console.log([1,2,3,4].newReduce((pre, cur)=>{
//     return pre+cur
// }, 0))


/*
Math.max
*/
// console.log(Math.max(...[1,2,3,4]))
// console.log([1,2,3,4].reduce((prev, curr, currIndex, arr)=>{
//     return Math.max(prev, curr)
// },6))

/*
Array sort algorithym
*/
// console.log([1,3,4,2].sort((a,b)=>b-a))
// Array.prototype.bubleSort = function(fn){
//     if(typeof fn !== "function"){
//         return new TypeError("argument should be a function")
//     }
//     const arr = this;
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length-i; j++){
//             if(fn(arr[j],arr[j+1])>0){
//                 //  let  temp = arr[j]
//                 //  arr[j] = arr[j+1]
//                 //  arr[j+1] = temp
//                 [arr[j],arr[j+1]] = [arr[j+1], arr[j]]
//             }
//         }
//     }
//     return arr
// }

// Array.prototype.selectSort = function(fn){
//     if(typeof fn !== "function"){
//         return new TypeError("argument should be a function")
//     }
//     const arr = this;
   
//     for(let i=0; i<arr.length; i++){
       
//         for(let j=i+1; j<arr.length;j++){
//             if(fn(arr[i],arr[j])>0){
//                  [arr[i], arr[j]] = [arr[j], arr[i]]
               
//             }
//         }
       
  
//     }
//     return arr
// }
// console.log([1,3,4,2].selectSort((a,b)=>a-b))
// console.log([1,3,4,2].bubleSort((a,b)=>b-a))

/*
Array deduplication
*/
// console.log(Array.from(new Set([1,2,2,3,3,4])))
// console.log([...new Set([1,2,2,3,3,4])])
// Array.prototype.distinct = function(){
//     const map = {}
//     const result = []
//     for(const n of this){
//         if(!(n in map)){
//            map[n]=1
//            result.push(n)
//         }
//     }
//     return result
// }

// console.log([1,2,2,3,3,4].distinct())

/*
Array.prototype.flat && refactor
*/
// console.log([1,[2,3,[4,5,[6,7,[8,9]]]]].flat(Infinity))
// function flatten(arr){
//     while(arr.some(item=>Array.isArray(item))){
//         console.log(...arr)
//         arr = [].concat(...arr)
       
//     }
//     return arr;
// }
// console.log(flatten([1,[2,3]]))
// console.log(flatten([1,[2,3,[4,5]]]))


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