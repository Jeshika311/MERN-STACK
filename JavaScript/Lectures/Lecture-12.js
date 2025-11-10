// number and maths

// NUMBERS

const score = 400
console.log(score);   // 400

const balance = new Number(400)    // [Number : 400]  show data type also
console.log(balance);

console.log(balance.toString())  // 400 -> "400"  and we can also apply string properties
console.log(balance.toFixed(2));   // show 2 digits after point

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4))   // it precise and return only 1st 4 numbers and it returns

const hunderds = 10000000
console.log(hunderds.toLocaleString('en-IN'));    // returns value by comma seperated

// max-value , min-value

// MATHS 

console.log(Math)  // it is object and it shows its properties
console.log(Math.abs(-5))   // convert -5 -> 5
console.log(Math.round(4.6))   // return 5  
console.log(Math.ceil(4.2))  // return 5
console.log(Math.floor(4.9))  // return 4
console.log(Math.min(4,3,6,8));  // return 3
// max()
// sqrt()
// pow()  power 
console.log(Math.random());  // return random value between 0 and 1 
console.log((Math.random()*10)+1);   // return random value between 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))) + min