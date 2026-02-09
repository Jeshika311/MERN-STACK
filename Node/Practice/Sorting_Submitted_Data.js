const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {
  const url = req.url;
  let body = "";
  if(req.method === 'GET' && req.url === '/'){
    res.writeHead(200 , {"content-type" : "text/html"});
    res.write(`<html>
      <body>
      <form action = "/save" method = "POST">
      <label for = 'name'>Username : </label>;
      <input type ='text' id = 'name' name = 'username'>
      <button type = 'submit'>Save</button>
      </form>
      </body>
      </html>
    `)
    return res.end();
  } 
  if(req.method === 'POST' && req.url === '/save'){
    req.on('data' , (chunk) => {
      body += chunk.toString();
    });
    req.on('end' , () => {
      const params = new URLSearchParams(body);
      const username = params.get('username');

      if(username){
        fs.appendFileSync('users.txt' , username + '\n');
        res.end('User added');
      }
      else{
        res.end('Username not found');
      }
    });
  }
});

const PORT = 3000;
server.listen(PORT , () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})