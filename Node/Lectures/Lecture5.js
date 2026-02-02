// process.exit();     stopo event loop 
const fs = require('fs');
const { URLSearchParams } = require('url');

const userRequestHandler = (req , res) => {
  console.log(req.url , req.method);

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

    const body = [];
    req.on('data' , chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end' , () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody)
      const params = new URLSearchParams(fullBody);
      // const BodyObject = {};
      // for (const [key , val] of params.entries()) {
      //   BodyObject[key] = val;
      // }
      // console.log(BodyObject);

      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject)
      fs.writeFileSync('user.txt' , JSON.stringify(bodyObject));
    })

    
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
};

module.exports = userRequestHandler;