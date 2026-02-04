const http = require("http");
const server = http.createServer((req, res) => {
let body = "";
if (req.method === "GET" && req.url === "/") {
  res.setHeader("Content-Type", "text/html");
  res.write(`<html>
    <body>
      <form action="/submit" method="POST">
        Name: <input type="text" name="name"><br>
        Email: <input type="email" name="email"><br>
        <button type="submit">Submit</button>
      </form>
    </body>
  </html>`);
  return res.end();
}
if(req.url === "/submit" && req.method === 'POST'){
  req.on('data' , (chunk) => {
    body += chunk;
  });
  req.on('end' , () => {
    const Params = new URLSearchParams(body);
    const name = Params.get('name');
    const email = Params.get('email');

    res.end(`Hello ${name} , your email is ${email}`);
  });
}
});

const PORT = 3000;
server.listen(PORT , () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})