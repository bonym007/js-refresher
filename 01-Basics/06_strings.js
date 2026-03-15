const name = "john";
const repocount = 50;

console.log(name + repocount + "value");    //john50value - outdated usage
console.log(`Hello, ${name} your repo count is ${repocount}`)   //Hello, john your repo count is 50 - using string interpollation

const gameName = new String("Mario-hc")
console.log(gameName)                       //[String: 'Mario-hc']
console.log(typeof gameName)                //object


console.log(gameName[0])                    //M
console.log(gameName.__proto__)             //{}

console.log(gameName.length)                //8
console.log(gameName.toUpperCase())         //MARIO-HC
console.log(gameName.charAt(2))             //r
console.log(gameName.indexOf('r'))          //2
console.log("val1",gameName.substring(3,1)) //start > end -- swaps the value -- ar    
console.log("val2",gameName.slice(3,1))     //start > end -- empty string
console.log("val3",gameName.substring(-1))  //Negative index -- treated as 0 --val3 Mario-hc
console.log("val4",gameName.slice(-3))      //val4 -hc
console.log("val5",gameName.slice(-7,5))    //val5 ario
console.log("val6",gameName.substring(5,-7))//val6 Mario
console.log("val7",gameName.slice(-8,4))    //val7 Mari

const username ="  John   "
console.log(username)                       //  John  
console.log(username.trim())                //John  

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','_'))         //https://hitesh.com/hitesh_choudhary
console.log(url.includes('%20'))            //true


//string to array
const pattern = "Hiteesh_C_houdary"
console.log(pattern.split('_'))             //[ 'Hiteesh', 'C', 'houdary' ]
console.log(pattern.split('_',2))           //[ 'Hiteesh', 'C' ]


console.log(pattern.bold())                 //<b>Hiteesh_C_houdary</b>