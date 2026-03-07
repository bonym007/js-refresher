/*
console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 <= 1)
console.log(2 == 1)
console.log(2 != 1)
the above convesions are fine as both of them are of same type


srictly avoid the below conversions as they are of different types
console.log("2" > 1);   --> true //possile but not predicatbale
console.log("02" > 1)   --> true //possile but not predicatbale

console.log(null > 0);      --> false
console.log(null == 0);     --> false   
console.log(null >= 0);     --> true

The reason is the an equality check (==) and comparisons (>,<,>=,<=) works differently

When JavaScript uses comparison operators (>, <, >=, <=), it converts values to numbers.
comparisons convert null to Number, treating it as 0
that's why null >= 0 is true and null > 0 false

The loose equality operator == performs type coercion, but null is a special case.

Rules in JavaScript:

null == undefined → ✅ true

null == anything else → ❌ false

console.log(undefined > 0);     --> false
console.log(undefined == 0);    --> false
console.log(undefined >= 0);    --> false


strict equality operator ===
check both vaule and type

loose equality operator ==
checks the value
*/

console.log(null > undefined);
console.log(null == 0)
console.log(null === 0)
console.log(null == undefined)
console.log(null === undefined)