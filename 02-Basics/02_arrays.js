const marvel_heros = ['thor','iornman','spiderman'];    //items can be of any type
const dc_heros = ['superman','flash','batman']

//push
// console.log(marvel_heros.push(dc_heros))        // 4 - returns the final array size
// console.log(marvel_heros)                       // 'thor', 'iornman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] -- second array pushed as a simngle elemet insted of merging
//                                                 //  source array shape affected

//concat
// console.log(marvel_heros.concat(dc_heros))     //[ 'thor', 'iornman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(marvel_heros)                      //[ 'thor', 'iornman', 'spiderman' ] -- source array not affected-- as concat returns a new array

//spread
// const all_heros = [...marvel_heros, ...dc_heros]    // better-- increased usage
// console.log(all_heros)                              //[ 'thor', 'iornman', 'spiderman', 'superman', 'flash', 'batman' ]

//flat
// const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
// const flat_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(flat_array)          
// /** 
// o/p:
// [
//    1, 2, 3, 4,  5,
//    6, 7, 8, 9, 10,
//   11
// ]
//   **/               

//Array.isArray()

console.log(Array.isArray("Hitesh"))        //false

console.log(Array.from("Hitesh"))           //[ 'H', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name:'Hitesh'}))    //[] -- we need ton specify array needs to be made of key or value of the object

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))   //[ 100, 200, 300 ]