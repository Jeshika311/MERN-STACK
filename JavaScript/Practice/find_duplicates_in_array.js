let arr = [1,2,3,4,5,6,4,2,6]
let duplicates = []

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] === arr[j]){
            // console.log(arr[i])
            duplicates.push(arr[i])
        }
    }
}

console.log(`Duplicates : ${duplicates}`)