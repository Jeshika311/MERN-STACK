const express = require('express');
const app = express();
const router = express.Router();

// app.use(express.json());

app.get('/' , (req,res) => {
  res.send('Hii');
});

// app.post('/data' , (req,res) => {
//   res.json({msg : "Post request"});
// });

// ROUTE PARAMS

// app.get('/users/:id' , (req,res) => {
//   const id = req.params.id;
//   res.send(`User id : ${id}`);
// })

// MULTIPLE PARAMS

// app.get('/users/:userId/names/:name', (req, res) => {
//   res.json(req.params);
// });

// QUERY PARAMS

// app.get('/search' , (req,res) => {
//   console.log(req.query);
//   res.json(req.query);
// })

// CHAINED ROUTES

// app.route('/notes')
//   .get((req, res) => res.send('All notes'))        handle GET /notes
//   .post((req, res) => res.send('Note added'))      handle POST /notes
//   .put((req, res) => res.send('Replace notes'));   handle PUT /notes

// app.use((req, res, next) => {
//   console.log(`Request method: ${req.method}, URL: ${req.url}`);
//   next();
// });

app.use((req,res,next) => {
  if(req.url === '/blocked') {
    return res.status(403).send("Route is blocked");
  }
  next();
});

app.get('/crash' , (req,res,next) => {
  next(new Error("something went wrong!"));
});

app.use((err,req,res,next) => {
  console.error("Error : " , err.message);
  res.status(500).json({ error : err.message });
});

app.use((req, res, next) => {
  res.status(404).json({ error: "404 not found" });
});

const PORT = 3000;
app.listen(PORT , () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

// const router = express.Router();
// module.exports = Router;