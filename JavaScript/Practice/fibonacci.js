let arr = [0,1]
let num = 10

for(let i=2; i<=num; i++){
    arr.push(arr[i-1] + arr[i-2]);
}

console.log(arr)