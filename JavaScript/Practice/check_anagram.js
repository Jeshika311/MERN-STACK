let str1 = "listen"
let str2 = "silent"

str1 = str1.toLowerCase()
str2 = str2.toLowerCase()

let sorted1 = str1.split("").sort().join("");
let sorted2 = str2.split("").sort().join("");

if(sorted1 === sorted2){
    console.log("Given strings are anagrams")
}
else{
    console.log("Given strings are not anagrams")
}