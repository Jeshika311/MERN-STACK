// GLOBAL AND LOCAL SCOPE IN JS  

// {}  ->  scope

var c = 300   // outside if -> global scope 

if(true) {     // inside if -> block scope
    let a = 10
    const b = 20
    var c = 330
}

console.log(c);   // this is out of scope but it does not give error bcz of "var" and it shows 3 value of c but not 300
console.log(a);   // a and b gives error 
console.log(b);