let score = "AB";
// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score); //N - caps -- class
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //NaN - Not a NUmber
// console.log(Number(Object));

/*
We cannot relay on js Number conversion, as even an invalid number can be converted to an unkwn value
type will be number, but o/p values


Number("33") --> 33
Number("ab") --> NaN
Number(null) --> 0
Number(undefined) --> NaN
Number(true) --> 1
Number(false) --> 0
Number("") --> 0
-----------------------------------------------
Boolean(1) --> true
Boolean(0) --> false
Boolean("abbab") --> true
Boolean("") --> false
Boolean(null) --> false
Boolean(undefined) --> false
-----------------------------------------------
String(33) --> 33
String(undefined) --> undefined
String(null) --> null

*/

// console.log(typeof String(null));

//***************************** Operations **************************/

/*
let value = 3;
let negValue = -value;
console.log(negValue);      --> -3

let str1 = "hello";
let str2 = " Hitesh";
let str3 = str1 + str2;
console.log(str3);          --> hello Hitesh


console.log(1 + "hello");       --> 1hello  --> number concatenated witht string
console.log("1" + 2 + 2 + 2);   --> 1222    --> since first value is string, consider everyting as string
console.log(1 + 2 + "2");       --> 32      --> perform operation on numbers and cancatenate the strinf
console.log(1 + "2" + 2)        --> 122     --> number concatednated with (things comming after string is als considerd as string)



console.log(true)   --> true
console.log(+true)  --> 1       --> short hand to convet to Number
console.log(+"")    --> 0       --> shory hand to conert to Number

*/

console.log(Number(true));
