// FUNCTIONS

//function definition 

function sayMyName(){
    console.log("Hello")
}

sayMyName()    // function reference

function addTwoNumbers(num1 , num2){   // num1 and num2 are parameters
    let result = num1+num2
    return result
}

const result = addTwoNumbers(8,4)   // 8 and 4 are arguments
console.log("Result:" , result)

function loginUserMessage(username){           // (username = "sam")  if username is not passed then bydefault sam is shown
    if(username === undefined){                    // if(!username)
        console.log("Please enter a user name")
    }
    else{
    return `${username} just logged in`
    }
}

console.log(loginUserMessage("jeshika"))
console.log(loginUserMessage())   // if we does not give any argument then it shows undefined