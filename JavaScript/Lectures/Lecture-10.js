// stack and heap memory

// Stack(Primitive) , Heap (Non-Primitive)

let myYoutubeName = "jeshikadotcom"

let anotherName = myYoutubeName
anotherName = "chaiauecode"

console.log(anotherName);     // only another name gets changed but myYoutubeName remains same

// this is call by value / primitive / stack


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jeshika@gmail.com"    // change userOne email also 

// this is call by reference / non - primitive / heap memory

console.log(userOne.email);
console.log(userTwo.email)     