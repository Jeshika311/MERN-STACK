// OBJECTS

// two mwthods to declare ->  as a literal or as a constructor
// when we make with the help of constructor then it makes a singleton object

// OBJECT LITERALS

const mySym = Symbol("key1")

const JsUser = {
    name : "Jeshika",     // it takes name as "name"
    "full name" : "jeshika sharma" ,
    [mySym] : "mykey1",   // syntax to define symbol
    age : 18 ,
    location : "Jaipur",
    email : "jeshika@google.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , "Saturday"]
}

// how to access

console.log(JsUser.email)   // help of dot operator
console.log(JsUser["email"])   // help of [] square brackets
console.log(JsUser["full name"])   // we can't access it by using dot operator

console.log(JsUser[mySym])   // print symbol value

// change value

JsUser.email = "jeshika@chatgpt.com"

// fix values

// Object.freeze(JsUser)   // now values does not change

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting);  // return [Function (anonymous)]

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());