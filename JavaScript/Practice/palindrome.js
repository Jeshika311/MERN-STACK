const original_str = 'jeshhej'
let start = 0
let end = original_str.length-1

while(end>=start){
    if(original_str[start] != original_str[end]){
        console.log("Given number is not palindrome")
        return 
    }
    start++
    end--
}
console.log("Given number is palindrome")