const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const userModel = require('./models/user');
const user = require('./models/user');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname , 'public')));
app.use(cookieParser());

app.get("/" , (req,res,next) => {
  res.render("index");
});

app.post("/create" , async (req,res,next) => {
  let {username , email , password , age} = req.body;

  bcrypt.genSalt(10 , async (err , salt) => {
    bcrypt.hash(password , salt , async (err , hash) => {
      let createdUser = await userModel.create({
        username,
        email,
        password: hash, 
        age
      })

      let token = jwt.sign({email} , "secretkey");
      res.cookie("token" , token);
      res.send(createdUser);
    })
  })
});

app.get("/login" , (req,res,next) => {
  res.render("login");
});

app.post("/login" , async (req,res,next) => {
  let user = await userModel.findOne({email : req.body.email})
  if(!user) return res.send("Something went wrong");
  bcrypt.compare(req.body.password , user.password , (err , result) => {
    if(result) {
      let token = jwt.sign({email : user.email} , "secretkey");
      res.cookie("token" , token);
      res.send("Login successful");
    }
    else res.send("Something went wrong");
  })
  // console.log(user);
});

app.get("/logout" , (req,res,next) => {
  res.cookie("token" , "")
})

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

// genSalt(random string) => hash(change password to hash) => mix(hash, salt) => random string => now password can't be decrypted



// ----> SET COOKIE <----

// app.get("/" , (req,res,next) =>{
//   res.cookie("name" , "jeshika");
//   res.send("cookie set");
// })


// ----> ENCODE AND DECODE PASSWORD USING BCRYPT <----

// app.get("/" , (req,res,next) => {
//   bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("jeshika", salt, function(err, hash) {
//         console.log(salt);
//         console.log(hash);
//     });
//   });
// }) 

// app.get("/" , (req,res,next) => {
//   bcrypt.compare("jeshika" , "$2b$10$rTlWbmtlYKjeFs9PYXYP2u3NpDrmXsERXT38irGYohPX6zRCdj.vu" , (err , result) => {
//     console.log(result);
//   } )
// })


// ----> ENCODE AND DECODE USING JWT <----

// app.get("/" , (req,res,next) => {
//   let token = jwt.sign({email : "jeshikaa7@gmail.com"} , "secretkey");
//   res.cookie("token" , token);
//   res.send("Done");
// })

// app.get("/read" , (req,res) =>{
//   let data  = jwt.verify(req.cookies.token , "secretkey");
//   console.log(data);
// })