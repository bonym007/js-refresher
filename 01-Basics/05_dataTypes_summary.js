/*
JS is a dynamically typed language 

Types : Based on the value data is stores and accessed from the memory

1. Primitives
2. Non-primitives ( aka; Reference type)

Primitives: call by value : a copy of the original data will be accessed instead of reference
7 types
String
Number -- inetegers or decimals
Boolean
null(empty)
undefined
Symbol (a uniquevalue)
BigInt (larger values)


examples:
const score = 100
cosnt scorValue = 100.5
const isLoggedin = true
const temperature = null
let username
const id1 = Symbol('123') : Symbol() retruns a unique value
const id2 = Symbol('123')

const id1 = Symbol("123");
const id2 = Symbol("123");
console.log(id1,id2)    --> Symbol(123) Symbol(123)
console.log(id1 == id2); --> false


const bigNumber = 345545454545454545454545454545n;
console.log(typeof bigNumber);


Non-Primitive (Reference type) : a refernce of the data will be passed when accessed
1. Array
2. Object
3. Functions


const heros = [ 'iornman', 'drstrage'];
const obj = {
    name: 'sds',
    age: 24,
}

const myfunction = function(){
    console.log("Hello WOrld")
}



// typeof ---> helps to know the type of a variable


console.log( typeof heros)      --> object
console.log( typeof obj)        --> object
console.log( typeof myfunction) --> object (function object)

data type of non-primitive data type is object


*********************** Memmories ****************************

2 types:
    Stack   : All primitive types uses stack        --> u will get a copy
    Heap    : All non-primitive types uses heap     --> u will get a reference of original value




let name = "bony"
let anotherName = name

//updating anotherName
anotherName = "john"
console.log(name)           -->bony
console.log(anotherName)    -->john 



let user1 = {
    name: 'bony',
    email: 'bony@gmail.com'
}

let user2 = user1

user2.name = "john"

console.log(user1.name) --> john
console.log(user2.name) --> john

**whatever going inside heap, if are trying to access we will get the reference

*/
