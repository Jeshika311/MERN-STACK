import jwt from 'jsonwebtoken';

const userAuth = async (req,res,next) => {
  const {token} = req.cookies;

  if(!token){
    return res.status(401).json({success: false, message: 'Unauthorized: No token provided'});
  }

  try{
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if(tokenDecode.id){
      // req.body.userId = tokenDecode.id;
      req.user = { id: tokenDecode.id };
    }
    else{
      return res.status(401).json({success: false, message: 'Not Authorized: Login again'});
    }
    next();
  }
  catch(error){
    console.log("JWT error:", error);
    return res.status(401).json({success: false, message: error.message});
  }
}

export default userAuth;