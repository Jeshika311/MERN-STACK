// process.exit();     stopo event loop 
const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res) => {
  console.log(req.url , req.method , req.headers);

  if (req.url === '/'){
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete MERN Course</title></haed>');
    res.write('<body><h1>Enter your details : </h1>');

    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>')
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>')
    res.write('<br><input  type="submit" value="Submit"/>')
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');
    return res.end();   
  }
  else if(req.url.toLowerCase() === "/submit-details" && req.method ===  "POST"){
    fs.writeFileSync('user.txt' , "Jeshika sharma");
    res.statusCode = 302;        // 302 means re directing
    res.setHeader('Location' , '/');
    return res.end();
  }
  else{
  res.setHeader('Content-Type' , 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete MERN Course</title></haed>');
  res.write('<body><h1>enter your category</h1></body>');
  res.write('</html>');
  res.end();    
  }
});

const PORT = 3000;
server.listen(PORT , () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})
