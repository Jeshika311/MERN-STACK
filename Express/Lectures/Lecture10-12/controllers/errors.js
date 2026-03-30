exports.PNF = (req,res,next) => {
  // res.status(404).send("<h1>404 Page Not Found</h1>");
  // res.sendFile(path.join(rootDir , 'views' , '404.html'));
  res.status(404).render('404' , {pageTitle : 'Page Not Found'});
}

exports.SWW = (err,req,res,next) => {
  console.error(err.stack);
  res.status(500).send("<h1>Something went wrong!</h1>");
}