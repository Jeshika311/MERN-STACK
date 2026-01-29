// first node server

const http = require('http');

// function requestListener(req , res){
//   console.log(req);
// }

// http.createServer(requestListener);


// anonomous function 
const server = http.createServer((req , res) => {
  console.log(req);
});

// server.listen(3000);        run by localhost:3000

const PORT = 3000;
server.listen(PORT , () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})