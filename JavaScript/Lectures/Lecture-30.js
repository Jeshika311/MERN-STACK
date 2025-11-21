// FILTER MAP AND REDUCE IN JS

const myNums = [1,2,3,4,,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => num>4)
console.log(newNums)    // values greater than 4 return in the form of array 

// same without use of filter

const newNumss = []
myNums.forEach( (num) => {
    if(num>4){
        newNumss.push(num)
    }
})

console.log(newNumss);


// MAP
// prefereed over forEach bcz it automatically returns value

// const newNum = myNums.map( (num) => num+10)       // automatically returns value
// console.log(newNum);

// chaining

const newNum = myNumbers.map( (num) => num*10).map( (num) => nmu+1).filter( (nmu) => nmu>=40)
console.log(newNum)


// REDUCE

const myNum = [1,2,3]
const myTotal = myNum.reduce(function (acc, currval){
    console.log(`acc : ${acc} and current value : ${currval}`)
    return acc+ currval
},0)                            // 0 is starting value of acc

// const myTotal = myNum.reduce( (acc,curr) => acc+curr , 0)    short form
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const PriceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)
console.log(PriceToPay)