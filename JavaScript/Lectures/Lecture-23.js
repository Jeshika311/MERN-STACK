// THIS keyword and arrow function in JS

const user = {
    username: "jeshika",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   // this is used for current context
        console.log(this)      // it shows all elements of objectS
    }
}

user.welcomeMessage()   // welcome msg for jeshika bcz jeshika is current context

// user.username = "sam"s
// user.welcomeMessage()   // now current context is sam

// console.log(this)   // empty object {}

function chai(){
    let username = "jeshika"
    console.log(this.username)    // this show undefined bcz this only works in object
}

const chaii = function(){
    let username = "jeshika"
    console.log(this.username)   // this also show undefined
}

const chaiii = () => {            // arrow function
    let username = "jeshika"
    console.log(this.username)   // also show undefined
}

chai()
chaii()
chaiii()


//  ARROW FUNCTION

// basic arrow functionb

// const addTwo = (num1,num2) => {
//     return num1+num2                     explicit return
// }

const addTwo = (num1 , num2) => (num1 + num2)   // Implicit return

console.log(addTwo(3,4))