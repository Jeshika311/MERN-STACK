const http = require('http');
const requestHandler = require('./Lecture5');

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT , () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})
