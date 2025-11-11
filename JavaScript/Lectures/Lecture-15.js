// ARRAY2 

const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

marvel_heros.push(dc_heros)   // it push whole array and creates a 2D array which is not a good practice
console.log(marvel_heros);

all_heros = marvel_heros.concat(dc_heros)   // it creates a single array with size 6 and gives a new array
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)   // works same as concat but we prefer this

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);   // it concats all these subarrays and give a single array

console.log(Array.isArray("Hitesh"))    // not a array so return false
console.log(Array.from("Hitesh"))   // convert it into array
console.log(Array.from({name:"hitesh"}))  // give empty array bcz we have to tell the complier that we want to make array of keys or values


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));   // it also returns a array