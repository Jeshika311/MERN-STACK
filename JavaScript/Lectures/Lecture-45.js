// class constructor and static      ES6

class user {
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const info = new user("jeshika" , "jeshika@gmail.com" , "123")

console.log(info.encryptPassword());         // 123abc
console.log(info.changeUsername());         // JESHIKA

// behind the scene

function User(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const infoo = new User("jeshika" , "jeshika@gmail.com" , "123")

console.log(infoo.encryptPassword());         // 123abc
console.log(infoo.changeUsername());         // JESHIKA


//INHERITANCE

class userr {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends userr{
    constructor(username , email , password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const information = new Teacher("jeshika" , "jeshika@google.com" , "123")
information.addCourse()

const User2 = new userr("jashan")
// User2.addCourse()          give error bcz does not have access

User2.logMe()        // do not give error

// instance of

console.log(information instanceof Teacher);



// STATIC

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());