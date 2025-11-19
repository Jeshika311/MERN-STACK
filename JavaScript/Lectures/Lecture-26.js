// CONTROL FLOW IN JS

// IF ELSE STATEMENT

if(condition){
    // if condition is true then code inside if executes
}
else{
    // if condition is not true then this code executes
}

// short hand notation

if(condition) console.log("execute"),     // using comma is not a good practice
console.log("execute2")



// MULTIPLE CONDITIONS

if(condition1 && condition2){      // and = && , or = ||
    // code
}
else if(condition){
    // code
}
else if(condition){
    // code
}
else{
    // if any condition is not true then this code executes
}



// SWITCH STATEMENT

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Febraury")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;

    default:       // if no cases match
        break;
}

// comparison operators    > , < , <= , >= , == , != , === , !==


// falsy values -> false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN
// except these all are truthy values -> "0" , "false" , " " , [] , {} , function () {}

userEmail = "jeshikaa31@gmail.com"
if (userEmail) {
    console.log("We got email.")
}

const arrayy = []
if (arrayy.length === 0) {
    console.log("Array is empty")
}

const objectt = {}
if(Object.keys (objectt).length === 0){
    console.log("object is empty")
}



// LOGICAL OPERATOR

// and = &&  
// or = ||
// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10     // valueu 5 is assigned
val1 = null ?? 10  // value 10 is assigned
val1 = undefined ?? 15  // value 15 is assigned
val1 = null ?? 10 ?? 15  // value 10 is assigned

// ternary operator
// short form of ifelse

condition ? true : false

const marks = 100
marks >= 80 ? console.log("Merit") : console.log("Not Merit")