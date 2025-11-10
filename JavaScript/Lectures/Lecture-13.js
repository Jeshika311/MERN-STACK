// DATES AND TIMES

let myDate = new Date()
console.log(myDate.toString());   // return currrent date and day and time
console.log(myDate.toDateString());  // return day and date
console.log(myDate.toLocaleString());  // return date and time
console.log(typeof myDate);  // object

let myCreatedDate = new Date(2023,0,23)  // month start from 0 not 1 
console.log(myCreatedDate.toDateString())

// we can also write as ("2023-01-23")  YY-MM-DD or  MM-DD-YY

let myCreatedDateTwo = new Date(2023,0,23,5,3)  // date and time
console.log(myCreatedDateTwo.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);    // in milli seconds
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));   // in seconds


let newDate = new Date()
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long"
})