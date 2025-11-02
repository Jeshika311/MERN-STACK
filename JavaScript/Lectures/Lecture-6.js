// DataType Conversion

let score = "33ab"

console.log(typeof score)

let ValueInNumber = Number(score)   // string -> number

console.log(typeof ValueInNumber)

console.log(ValueInNumber)  // return NaN bcz 33ab is not completely converted into number

// NUMBER CONVERSION

// 33 -> 33
// "33ac" -> NaN
// if score = null then 0 will return
// if score = undefined then NaN is shown

// BOOLEAN CONVERSION

// 1 -> true
// 0 -> false
// "" -> false
// "jeshika" -> true