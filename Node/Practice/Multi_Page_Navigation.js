const http = require('http');

const server = http.createServer((req,res) => {
  const url = req.url;
  if(url === '/'){
    res.write(`<html>
      <h1>Welcome Home</h1>
      <a href="/about">About</a><br>
      <a href="/contact">Contact</a>
    </html>`)
    return res.end();
  }
  if(url === '/about'){
    res.write('<h1>About page</h1>');
    res.end();
  }
  if (req.method === "GET" && req.url === "/contact") {
    res.write(`
      <h1>Contact Form</h1>
      <form action="/contact" method="POST">
      Message: <input type="text" name="msg">
      <button type="submit">Send</button>
      </form>
    `);   
    return res.end();
  }
  
  let body = " ";
  if(req.method === "POST" && req.url === "/contact"){
    req.on("data" , (chunk) => {
      body += chunk;
    });
    req.on("end" , () => {
      const params = new URLSearchParams(body);
      const message = params.get("msg");
      res.writeHead(200 , {"content-type" : "text/html"});
      res.end(message);
    });
  }
});

const PORT = 3000;
server.listen(PORT , () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})