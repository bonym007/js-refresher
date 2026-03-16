// const score = 400
// console.log(score)

// const balance = new Number(500)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toFixed(2))     //500.00 -- used specially in ecommerce application

// const number2 = 345.8966
// console.log(number2.toPrecision(3)) //346

// const number3 = 123.8966
// console.log(number3.toPrecision(3)) //346

// const number4 = 123.8966
// console.log(number4.toPrecision(4)) //123.9

// const number5 = 1123.8966
// console.log(number5.toPrecision(3)) //1.12e+3


// const number6 = 10000000
// console.log(number6.toLocaleString()) //10,000,000 -- US standard


// const number7 = 10000000
// console.log(number7.toLocaleString('en-IN')) //1,00,00,000 -- Indian standard


// console.log(Number.MAX_VALUE)           //1.7976931348623157e+308 -- The largest number that can be represented in JavaScript (The largest positive number JavaScript can represent.)
// console.log(Number.MIN_VALUE)           //5e-324    -- the closest number to zero that can be represented in JavaScript.
// console.log(Number.MAX_SAFE_INTEGER)    //9007199254740991      --The largest integer that JavaScript can represent exactly without losing precision.
// console.log(Number.MIN_SAFE_INTEGER)    //-9007199254740991
// console.log(Number.EPSILON)             //2.220446049250313e-16

//****************** math *********** */
// console.log(Math.PI)            //3.141592653589793
// console.log(Math.abs(-4))       //- changes to positve -- 4
// console.log(Math.round(4.5))    //5
// console.log(Math.ceil(4.2))     //5
// console.log(Math.floor(4.8))    //4
// console.log(Math.sqrt(4))       //2
// console.log(Math.min(3,2,4,5))  //2
// console.log(Math.max(3,2,4,5))  //5

// console.log(Math.random())      //random number in between 0 and 1 -- 0.28495032493254546
// // how to generate number between a range
// console.log(Math.random()*10)   //8.855575841789967
// //give an integer
// console.log(Math.floor((Math.random() * 10)))
// //but the random number genearte can be 0.04567, which * 10 will be 0.4, whose floor value is 0, so will add 1
// console.log((Math.random() * 10) + 1)  //min value will be 1 for sure


// //number between given range
// const min = 10
// const max = 20
// //general formula
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// /* Breakdown
// Math.random()                        - give value between 0 and 1, 0 <num < 1
// Math.floor(Math.random() * 10)       - give an integer value
// Math.floor(Math.random() * 10)       - *10 shift the value 1 place, but if value comes 0.1, Math.floor() will give value 0, ie 0 < num < 10 ie, 0-9
// Math.floor(Math.random() * 10) + 1   - avoid the above case and now min value genearated will be 1

// if we have min and max value will replace 10 with (max - min) and replace 1 with min value
// Math.floor(Math.random() * (max - min + 1)) + min
// */

console.log(Math.random())