// HIGH ORDER ARRAY LOOPS
// ARRAY SPECIFIC LOOPS

// FOR OF LOOP

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello world!"
for (const greet of greetings){
    console.log(`Each char is ${greet}`)
}


// MAPS

const map = new Map()
map.set("IN" , "India")
map.set("USA" , "United states of america")
map.set("Fr" , "France")
map.set("IN" , "India")

console.log(map);     // maps contain unique value and show in a manner they are defined

for (const [key , value] of map) {
    console.log(key , ":-" , value)
}



// FOR IN LOOP

const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

// for (const [key,value] of myObject) {
//     console.log(key , ":-" , value)
// }

// we can not iterate objects using forof loop

for (const key in myObject) {
    console.log(key);                    // return all keys
    console.log(myObject[key]);          // shows values
}


const programming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in programming) {
    console.log(programming[key]);     // return array index 
    console.key(programming[key]);     // return values of array
}

// we can not iterate maps using forin loop


// FOR EACH LOOP

const coding = ["js" , "rb" , "py" , "java" , "cpp"]

coding.forEach( function (item) {
    console.log(item);              // iterate over each value of array
} )




// iterate over array of objects

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
} )