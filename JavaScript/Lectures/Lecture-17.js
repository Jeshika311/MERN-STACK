// OBJECTS

// CONSTRUCTOR

// const tinderUser = new Object()    // singletun object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jeshika",
            lastname: "sharma"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);   // with each (.) one nesting becomes less

// we can merge or combine 2 or more objects like array

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = { obj1,obj2 }   // it creates problem... it puts both objects in a single object but like nested objects
console.log(obj3); 

const obj4 = Object.assign({} , obj1 , obj2)   // better way to combine multiple arrays
console.log(obj4);

const obj5 = {...obj1, ...obj2}     // same as object and 90% times we use this syntax
console.log(obj5);


console.log(Object.keys(tinderUser));    // returns keys in the form of array
console.log(Object.values(tinderUser));    // returns values in the form of array
console.log(Object.entries(tinderUser));    // returns an array of key value pairs

console.log(tinderUser.hasOwnProperty('isLoggedIn'))    // check that property exist in object or not and return a boolean value