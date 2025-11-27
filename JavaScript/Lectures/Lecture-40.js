// create promises

const promiseOne = new Promise(function(resolve , reject){
    // Do an async task
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){          // then is directly related with resolve
    console.log("Promise consumed");  
})

// another way to create promise 

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


// take data in .then from promise

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "Jeshika" , email : "jeshika7@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)                   // data inside resolve is shown
})


// handle errors in promise

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "jeshika" , password : "1234"})
        }
        else{
            reject("ERROR : Something went wrong")
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username    
})
.then((username) => {
    console.log(username);    
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolve or rejected"))


// it is not mandatory to use .then , we can also use async and await

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javascript" , password : "1234"})
        }
        else{
            reject("ERROR : JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

// we can't handle errors directly with async await

async function getallusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()         // convert to json
        console.log(data);        
    }
    catch (error) {
        console.log("Error : " , error);
    }
}
getallusers()


// second way to write this code with the help of .then and .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


// NOTE : Promise is a object