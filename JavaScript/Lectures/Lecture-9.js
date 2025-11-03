// Primitive data type

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

// these are call by value

// Non primitive 

// Arrays , Objects , Functions

// these are call by reference

// js is static or dynamic??

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)  // false bcz of  symbol

const bigNumber = 898136349872398746748n   // n represents BigInt

// ARRAY

const names = ["anu" , "isha" , "jeshika"];
console.log(typeof names)

// OBJECT

let myObj = {
    name: "jeshika",
    age: 22,
}

console.log(typeof myObj)

// FUNCTION

const MyFunction = function(){
    console.log("Hello world");
}

console.log(typeof MyFunction)