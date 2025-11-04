// STRINGS

const name="Jeshika"
const repoCount = 50

console.log(name + repoCount + "Value")    // not a good practice

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)    //  this is more readable and good 

// WAY TO DEFINE STRING

const gameName = new String("Jeshika-sharma")

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());  // original value does not change
console.log(gameName.charAt(2));   // s
console.log(gameName.indexOf('t'));  // if not present then return -1

const newString = gameName.substring(0,4) // jesh
console.log(newString);

const anotherString = gameName.slice(-8,4)  // works as substring but we can also give -ve values
console.log(anotherString);

const newStringOne = "   jeshika    "
console.log(newStringOne);
console.log(newStringOne.trim())  // remove extra space before and after the name

console.log(gameName.replace('-' , '_'))  // replace - with _

console.log(gameName.includes('jeshika'))   // return true or false

console.log(gameName.split('-'))  // returns in form of array