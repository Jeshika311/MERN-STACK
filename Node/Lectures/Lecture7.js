// import { createServer } from 'http';
const http = require('http')

const server = http.createServer((req,res) => {
  console.log(req);
});

const PORT = 3030;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})