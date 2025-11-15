// FUNCTIONS WITH OBJECTS

function calculateCartPrice(val1,val2,...num1){              // ... (rest operator and spread operation) (differentiation in use case)
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))    // due to rest operator it takes val1=200 , val2=400 and rest of 2 arguments in ...num1 and return array of them

const user = {
    username : "jeshika",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

// we can also write it as 

// handleObject({
//     username: "sam",
//     price : 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]))    // both works as same