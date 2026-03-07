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

console.log(typeof String(null));
