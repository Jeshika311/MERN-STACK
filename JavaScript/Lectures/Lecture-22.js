// SCOPE LEVEL AND MINI HOISTING IN JS

function one(){
    const username = "jeshika"

    function two(){
        const website = "youtube"
        console.log(username)       // two() can access one()
    }

    console.log(website);   // it gives error

    two()
}

one()


// HOSTING

console.log(addone(5))   // this does not give any error

function addone(num){
    return num+1
}

addtwo(5)   // this gives error
const addTwo = function(num){
    return num+2
}