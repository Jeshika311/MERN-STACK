const events = require('events');
const emmiter = new events();

emmiter.on("greet" , (name) =>{
  console.log(`Hello , ${name}!`)
})

emmiter.emit("greet" , "jeshika");