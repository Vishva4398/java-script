//string properties and methods
//string methods---
//.length
//.toLowerCase()
//.toUpperCase()
//.charAt()
//.includes()
//.startsWith()
//.endsWith()
//.serch()
//.slice()
//.substring()
//.substr()
//.replace()
//.replaceAll()
//.toUpperCase()
//.toLowerCase()
//.concat()
//.split()
//.repeat()
//.valueOf()
//.match()

// using all methods
/*
 let text ='Vardan Singh';
 console.log(text.length);
 console.log(text.toLocaleLowerCase());
 console.log(text.toUpperCase());
 console.log(text.charAt(0));
 console.log(text.charAt(11));
 console.log(text.charAt(text.length - 1));
 console.log(text.includes('Vardan'));
 console.log(text.startsWith('Vardan'));
 console.log(text.endsWith('gh'));
console.log(text.indexOf('S'));
console.log(text.slice(0, 6));
*/



//template string or template literals

/*var user ="Vardan";
var result = `hello ${user}`;//insert expression value
console.log(result);*/
/*
const Name = 'vardan';
const age = 25;
//const sentence = "hey it is"+ Name + ' and he is ' + age + " years old ";
//using template string method
const sentence = `hey it is ${Name} and he is ${age} years old`;
console.log(sentence);
*/

// Array properties and methods
/*let names = ['ram','sonu','monu','ben','peter','rohit','john',3,4,5,6];
console.log(names.length);//length
console.log(names[3]);//indexing  
console.log(names[names.length - 1]);// print last element
*/
//concat
/*const itemsNo = [1,2,3];
const itemNames = ['apple','banana','grapes'];
const allItems = itemsNo.concat(itemNames);
console.log(allItems);
console.log(allItems.reverse());//reverse element
*/
//unshift:-  ( add the value stating of the array)
/*allItems.unshift('mango');
console.log(allItems);
*/
//shift :-  ( remove the element of stating position)
/*allItems.shift();
console.log(allItems);
*/
//push :-  ( adding the value end of the array)
/*allItems.push('lichi');
console.log(allItems);
*/
//pop :-  ( remove the element of end position)
/*allItems.pop();
console.log(allItems);
*/
//splice 
/*const a =['ben','john','peter'];
a.splice(2,0,"vardan");
console.log(a);*/


//value vs Reference

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value
// when aasigning  non-primitive data type value to a variable is done by reference so any changes will affect all the references.

/*const num1 = 1;
const num2 = 2 ;
console.log(`the first value is ${num1}`);
console.log(`the second value is ${num2}`);

let person1 = {name:'bob'};
let person2 = {person1};
person2.name = 'vardan';
console.log(`the name of the first person is ${person1.name}`);
console.log(`the name of the second person is ${person2.name}`);
*/


// Null and undefined :- (both represent "no value")
 //undefined :- 'JS can not find value for this'

 /* variable without value
 missing function arguments
 missing object properties
*/


 //truthy and falsy 
 //falsy value(false, NaN, null, undefine, 0," ")

 /* if(1){// it is the true value
    console.log("hello truthy");
  }else{
    console.log("hi falsy");
  }
*/
/*
  if(0){// it is the false value
    console.log("hello truthy");
  }else{
    console.log("hi falsy");
  }
*/


//Global and Local scope
//global scope (outside the function)
// Local scope (inside the function)
/*
let  a = 10;//globa; scope
function Vardan(){
    let b =25;//local scope
}
*/


//Callback Function
//A callback function is a function (it can be any function anonymous function, Arrow function)passed inti another function as an argument, which is then invoke inside the outer function to complete some kind of routine or action.

// passed to a another function as an argument and executed inside that function.
/*
function sayHello(){
    console.log("hello");
}

function add(num1, num2, callback){
    console.log(num1 + num2);
    callback();
}
 let a = 2;
 let b = 9;

add(a, b, sayHello);
*/


//Array Iterator:- 
//(An iterator is an object that is returned by the Symbol.iterator() method.The iterator protocol provides the next() method to access each element of the iterable (ds) one at a time")
/*
let x = ['apple','mango','orange','grapes'];
let y = x[Symbol.iterator]();
console.log(y.next());
console.log(y.next());
*/

//forEach(The forEach() method calls a function for each element in an array)
/*
const emp = [
  {name:'vardan', salary:40, position:"SE"},
  {name:'boby', salary:30, position:"graphics designer"},
  {name:'metas', salary:20, position:"Associate"},
];

emp.forEach(function(value){
  console.log(value);

});
*/



//map() function
// the map()method creates a new array with the result of calling a function for every array element.
/*
let a = [1,2,3,4,5,6,7];
let b = a.map(test);
console.log(b);
function test(x){
  return x * 10;
}
*/

//filter()
//filter() method creates an array filled with all array element that pass a test
/*const emp = [
  {name:'vardan', age:40, position:"SE"},
  {name:'boby', age:26, position:"graphics designer"},
  {name:'metas', age:20, position:"Associate"},
  {name:'metas', age:25, position:"junior engineer"},
];

const youngAge = emp.filter(function(people) {
  return people.age <= 25
});
console.log(youngAge);
*/


//find()
/*
const emp = [
  {name:'vardan', age:40, position:"SE",id:1 },
  {name:'boby', age:26, position:"graphics designer",id:2 },
  {name:'metas', age:20, position:"Associate", id:3 },
  {name:'metas', age:25, position:"junior engineer", id:4 },
];
const names = ['bob','peter','susy'];
const person = emp.find(function(person) {
  return person.id === 3;

});

console.log(
  names.find(function(name){
    return name ==='bob';
  })
);

console.log(person);
*/


// reduce()
//the reduce()method execute reducer function on each element of the array, resulting in single output value.
// 1 parameter ('acc)-- tatal of all calculations
//2 parameter ('curr')-- current iteration/value
/*
const emp = [
  {name:'vardan', age:40, position:"SE", id : 1, salary:200,},
  {name:'boby', age:26, position:"graphics designer", id : 2, salary:300,},
  {name:'metas', age:20, position:"Associate", id : 3, salary:400,},
  {name:'john', age:25, position:"junior engineer", id : 4, salary:500,},
];

const total = emp.reduce(function(accum, currItem){
  console.log(accum);
  console.log(currItem);

  return accum;
});
*/


//Math object (standard built in object)

// using Math.floor()
/* const number = 4.5764;
const result = Math.floor(number);

console.log(result);
*/
//using Math.ceil()
/*const number = 4.5764;
const result = Math.ceil(number);

console.log(result);
*/
//using Math.round()
/*const number = 4.5764;
const result = Math.round(number);

console.log(result);
*/


// Data Object
 const month = [
  'jan',
  'feb',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'oct',
  'nov',
  'december',
];

const days = [
  
]