const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
  if(req.url.startsWith('/greet')){
    const queryObject = url.parse(req.url , true).query;
    const name = queryObject.name;
    const age = queryObject.age;
    res.end(`Hello ${name}, you are ${age} years old.`);
  }
  else{
    res.end("Go to /greet?name=YourName&age=YourAge");
  }
})

server.listen(3003, () => console.log("http://localhost:3003/greet?name=Jeshika&age=19"));
