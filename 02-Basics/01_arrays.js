// // //arrays
// // //JavaScript array-copy operations create shallow copies.
// // //A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made
// // //A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// // const myArray = [1,23,true,'john',null,undefined];
// // const myHeros = ['superman','batman','spiderman'];
// // const myArray2 = new Array(1,23,true,'john',null,undefined);

// // console.log(myArray);           //[ 1, 23, true, 'john', null, undefined ]
// // console.log(myArray[0]);        //1
// // console.log(myHeros);           //[ 'superman', 'batman', 'spiderman' ]
// // console.log(myArray2);          //[ 1, 23, true, 'john', null, undefined ]  

// // //array methods
// // //push() - adds one or more elements to the end of an array and returns the new length of the array.
// // myArray.push('new element');
// // console.log(myArray);           //[ 1, 23, true, 'john', null, undefined, 'new element' ]

// // //pop() - removes the last element from an array and returns that element. This method changes the length of the array.
// // const poppedElement = myArray.pop();
// // console.log(poppedElement);     //new element
// // console.log(myArray);           //[ 1, 23, true, 'john', null, undefined ]

// // //unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
// // myArray.unshift(9);        //adds one or more elements to the beginning of an array and returns the new length of the array.
// // console.log(myArray);      //[ 9, 1, 23, true, 'john', null, undefined ]

// // //shift() - removes the first element from an array and returns that removed element. This method changes the length of the array.
// // myArray.shift();          //removes the first element from an array and returns that removed element. This method changes the length of the array.
// // console.log(myArray);      //[ 1, 23, true, 'john', null, undefined ]

// // console.log(myArray.includes('john'));     //true
// // console.log(myArray.indexOf(true));        //2
// // console.log(myArray.indexOf(100));         //-1 (not found)
// // console.log(myArray.length);              //6

// // //join() - joins all elements of an array into a string and returns this string.
// // const joinedString = myHeros.join(', ');
// // console.log(joinedString);    //superman, batman, spiderman
// // console.log(typeof joinedString);   //string

// // //slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
// // const slicedArray = myArray.slice(1,4); //index 1 to index 3 (4 is not included) - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
// // console.log("B",myArray);       //[ 1, 23, true, 'john', null, undefined ] (original array is unchanged)
// // console.log(slicedArray);    //[ 23, true, 'john' ]

// // //splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// // const splicedArray = myArray.splice(1,4); //index 1 to index 4 (4 is included) - removes elements from index 1 to index 4 (inclusive) and returns the removed elements as a new array. The original array is modified.
// // console.log("C",myArray);       //[ 1, undefined ] (original array is modified)
// // console.log(splicedArray);   //[ 23, true, 'john', null ]


//Difference between slice() and splice():


//concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const more = myArray.concat(myHeros); //merges myArray and myHeros into a new array. This method does not change the existing arrays, but instead returns a new array.
console.log("D",myArray);       //[ 1, undefined ] (original array is unchanged)
console.log(more);             //[ 1, undefined, 'superman', 'batman',` 'spiderman' ]

const marvelHeros = ['ironman','thor','hulk'];
const dcHeros = ['superman','batman','wonderwoman'];

//using push() to merge arrays
marvelHeros.push(dcHeros); //adds the entire dcHeros array as a single element to the end of the marvelHeros array. This method modifies the original marvelHeros array, but does not change the dcHeros array. The resulting marvelHeros array will have a nested array (dcHeros) as its last element. 
console.log(marvelHeros);       //[ 'ironman', 'thor', 'hulk', [ 'superman', 'batman', 'wonderwoman' ] ] -- (marvelHeros array is modified, but dcHeros is added as a single element, resulting in a nested array)
console.log(dcHeros);           //[ 'superman', 'batman', 'wonderwoman' ] (dcHeros array is unchanged)

//Using concat() to merge arrays
const allHeros = marvelHeros.concat(dcHeros); //merges marvelHeros and dcHeros into a new array. This method does not change the existing arrays, but instead returns a new array.
console.log(allHeros);          //[ 'ironman', 'thor', 'hulk', 'superman', 'batman', 'wonderwoman' ]

//Using spread operator to merge arrays
const allHerosspread = [...marvelHeros, ...dcHeros]; //merges marvelHeros and dcHeros into a new array using the spread operator. This method does not change the existing arrays, but instead returns a new array.
console.log(allHerosspread);    //[ 'ironman', 'thor', 'hulk', 'superman', 'batman', 'wonderwoman' ]


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realArray = anotherArray.flat(); //flattens the array by one level. This method does not change the existing array, but instead returns a new array.
console.log(realArray);   //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ] (flattens the array by one level)

const fullyFlatArray = anotherArray.flat(Infinity); //flattens the array completely. This method does not change the existing array, but instead returns a new array.
console.log(fullyFlatArray);   //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ] (flattens the array completely)

const partiallyFlatArray = anotherArray.flat(2); //flattens the array by two levels. This method does not change the existing array, but instead returns a new array.
console.log(partiallyFlatArray);   //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ] (flattens the array by two levels)

console.log(Array.isArray('Hitesh')); // false (checks if 'Hitesh' is an array, which it is not)
console.log(Array.from('Hitesh')); // [ 'H', 'i', 't', 'e', 's', 'h' ] (creates an array from the string 'Hitesh', where each character becomes an element in the array)
console.log(Array.from({name: "Hitesh"})); // [] (creates an array from the object {name: "Hitesh"}, but since the object does not have iterable properties, it results in an empty array)

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)) //[ 100, 200, 300 ] (creates an array from the provided arguments, resulting in an array containing the values of score1, score2, and score3)
console.log(Array.from(score1,score2,score3)) // [] (creates an array from the value of score1, which is 100. Since 100 is not iterable, it results in an empty array)
console.log(Array.from([score1,score2,score3])) // [ 100, 200, 300 ] (creates an array from the provided array [score1, score2, score3], resulting in a new array containing the values of score1, score2, and score3)