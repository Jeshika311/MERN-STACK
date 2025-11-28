// JS and Classes
// JS doesn't contain classes
// it is a prototype-based language

// OOP 

// Object -> collection of properties and methods

// why use OOP ??
// Parts of OOP  ->  object literal
// constructor function , prototypes , classes , instances(new, this)

// 4 pillars -> Abstraction (Hide detail) , Encapsulation (Wrap data) , Inheritance (new , this) , Polymorphism


// OBJECT LITERAL 

const user = {
    username : "Jeshika",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        console.log("Got user details from databse")
        console.log(`Username : ${this.username}`)
        console.log(this)
    }
}

console.log(user.getUserDetails());


// CONSTRUCTION FUNCTION

// const date = new Date()   // new = constructor

function User(username , loginCount , isloggedin){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedin = isloggedin

    return this
}  

const userOne = new User("jeshika" , 12 , true)
const userTwo = new User("Hitesh" , 11 , false)
console.log(userOne);                          // usertwo values becomes overwrite and they are shown if dont use 'new'