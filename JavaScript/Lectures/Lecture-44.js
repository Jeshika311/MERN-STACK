// call and this 

function SetUsername(username){
    // complex DB calls
    this.username = username
}

function createUser(username , email , password){
    // SetUsername(username)     only reference goes but this function doesnot call
    SetUsername.call(this , username)
    this.email = email
    this.password = password
}

const info = new createUser("jeshika" , "jeshika7@gmail.com" , "123")
console.log(info)