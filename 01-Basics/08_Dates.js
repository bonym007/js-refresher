let date = new Date();                      //insatnce of Date
console.log(date);                          //2026-03-16T17:35:43.896Z
console.log(date.toJSON());                 //2026-03-16T17:42:32.704Z
console.log(date.toISOString());            //2026-03-16T17:39:13.021Z

console.log(date.toString());               //Mon Mar 16 2026 17:39:13 GMT+0000 (Coordinated Universal Time)
console.log(date.toLocaleString());         //3/16/2026, 5:39:13 PM

console.log(date.toDateString());           //Mon Mar 16 2026
console.log(date.toLocaleDateString());     //3/16/2026

console.log(date.toTimeString())            //17:51:06 GMT+0000 (Coordinated Universal Time)
console.log(date.toLocaleTimeString());     //5:41:36 PM

console.log(date.toUTCString())             //Mon, 16 Mar 2026 17:51:06 GMT


let myDate = new Date(2023,0,23)            //month starts with 0 -- 2023-02-23T00:00:00.000Z
let myDate2 = new Date(2023,1,23)           //given month +1 -- 2023-02-23T00:00:00.000Z
let myDate3 = new Date(2023,1,23,5,3,23)    //2023-02-23T05:03:23.000Z

let myDate4 = new Date("2023-04-01")        //2023-04-01T00:00:00.000Z

let myDate5 = new Date("01-02-2026")        
console.log(myDate5)                        //2026-01-02T00:00:00.000Z
console.log(myDate5.toLocaleString())       //1/2/2026, 12:00:00 AM

console.log(typeof date)                    //object

let myTimeStamp = Date.now()                //1773684312127 -- provide the time in milli seconds from January 1, 1970, UTC

//how to compare date -- better to convert to milliseconds and compare
console.log(myDate.getTime())               //1674432000000 -- convert the date to milli seconds

//how to covert to seconds
console.log(Date.now()/1000)                //but this will give use decimal values -- 1773684757.669
console.log(Math.floor(Date.now()/1000))    //1773684757 -- floor.round we can use not ceil

let newDate = new Date();
console.log(newDate)                        //2026-03-16T18:21:14.345Z
console.log(newDate.getMonth())             //month index -- 2 -- starts from 0 so March -- so mostly to avoid cofusing to the user while dev we give getMonth()+1
console.log(newDate.getDay())               //1 -- Monday -- started from 1


//personalising the reresentation
console.log(newDate.toLocaleString('default',{
    weekday: "long",                            //Monday

}))

console.log(newDate.toLocaleString('default',{
    weekday: "short",                           //Mon
}))


console.log(new Date(Date.now()).toLocaleString('en-US')) //3/16/2026, 7:01:22 PM
console.log(new Date(Date.now()).toLocaleString('en-GB')) //16/03/2026, 19:01:22
console.log(new Date(Date.now()).toLocaleString('en-IN')) //16/3/2026, 7:01:22 pm