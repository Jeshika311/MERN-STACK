// AARAY

// const myArr = [0,1,2,3,4,5,true,"jeshika"]
const myArr = [0,1,2,3,4,5]   // js arrays are resizeable

// methods to declare array

const myHeroes = ["shaktiman" , "naagraj"]
const myArr2 = new Array(1,2,3,4)

console.log(myArr[0])

// in JS Arrays always create shallow copies // changes shows in original array

// ARRAY METHODS

myArr.push(6)  // element add in array
console.log(myArr)

myArr.pop()  // remove last value

myArr.unshift(7)  // place at starting position
console.log(myArr)

myArr.shift()  // remove starting value
console.log(myArr)

console.log(myArr.includes(9))   // false
console.log(myArr.indexOf(9))  // if not available then return -1



const newArr = myArr.join()   // join converts the new array into string
console.log(typeof newArr)   // string
console.log(newArr)

// slice , splice

const myn1 = myArr.slice(1,3)   // [1,2]
console.log(myn1)
console.log("A " , myArr);   // original arrayy remains same

const myn2 = myArr.splice(1,3)   // [1,2,3]
console.log(myn2)
console.log("B" , myArr)    // splice portion cuts from original array