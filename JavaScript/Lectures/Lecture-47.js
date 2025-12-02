// NOW YOU KNOW OBJECTS IN JS

// mathspi ki value 3.14 se 3 or 4 ho skti hai ya nhi

const descripter = Object.getOwnPropertyDescriptor(Math , "PI")
console.log(descripter)

/* OUTPUT : 
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}  */

const info = {
    name : "John",
    price : 250,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(info , "name"))

Object.defineProperty(info , "name" , {
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(info , "name"))

for (let [key , value] of Object.entries(info)) {
    console.log(`${key} : ${value}`)
}
