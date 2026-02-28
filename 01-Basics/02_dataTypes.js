"use strict"; // treats all code as newer version of JavaScript, and prevents us from using undeclared variables

alert("Hello World!"); // this will show an alert box only in the browser, not in node.js

console.log("hello world"); // ; is not mandatory, but it is good -- we should always try to maintaind code readability

let name = "John"; //string data type
let age = 30; //number data type
let isStudent = true; //boolean data type
let nullValue = null; //null data type
let undefinedValue; //undefined data type

let hobbies = ["reading", "gaming", "coding"]; //array data type
let address = {
  //object data type
  street: "123 Main St",
  city: "New York",
  state: "NY",
};

/*
Data types in JavaScript:

Primitives:
number => 2 to the power of 53
bigint => 2 to the power of 1024
string => ""
boolean => true or false
null => datatype as well as a standalone value that represents the absence of any object value
        // not undefined, 
undefined => a variable that has been declared but not assigned a value
symbol => a unique and immutable primitive value that can be used as the key of an object property

Non-primitives:
object =>   a collection of poperties, where each property is a key-value pair. 
            Objects can also have methods, which are functions that are associated with the object.



typeof:

undefined => undefined
null => object (this is a known bug in JavaScript, but it has been kept for backward compatibility)
boolean => boolean
number => number
bigint => bigint
string => string
symbol => symbol
object => object
*/
