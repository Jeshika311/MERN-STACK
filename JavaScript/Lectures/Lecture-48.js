// Getter Setter and Stack Overflow

// with the help of class


class User {
    constructor(email , password){
        this.email = email;
        this.password = password
    }
    get password(){
        return `${this._password}` 
    }
    set password(value){
        this._password = value
    }
}

const jeshika = new User("jeshika@gmail.com" , "123")
console.log(jeshika.password)

// with the help of function


function User2(email , password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this , 'email' , {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })
    Object.defineProperty(this , 'password' , {
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value
        }
    })
}

const infoo = new User2("jeshika7@gmail.com" , "jeshika")
console.log(infoo.email);

// with the help of object

const user3 = {
    _email : 'jeshika@gmail.com',
    _password : "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const info3 = Object.create(user3)
console.log(info3.email);