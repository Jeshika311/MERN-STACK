import { genToken } from "../config/token.js";
import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";

export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await User.findOne({ email });

    if(existUser){
      return res.status(200).send({
        success:false,
        message:"User already exists"
      });
    }

    if(!validator.isEmail(email)){
      return res.status(200).send({
        success:false,
        message:"Invalid Email"
      });
    }

    if(password.length < 6){
      return res.status(200).send({
        success:false,
        message:"Password must be at least 6 characters"
      });
    }

    let hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password:hashPassword
    });

    let token = await genToken(user._Id);

    res.cookie("token", token,{
      httpOnly:true,
      secure:false,
      sameSite: "Strict",
      maxAge:7*24*60*60*1000
    })
    return res.status(201).json(user);
  }
  catch (error) {
    console.log("Error in user registration", error);
    return res.status(500).json({message: `Registration error ${error.message}`});
  }
}

export const login = async(req,res) => {
  try{
    let {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user){
      return res.status(200).send({
        success:false,
        message:"User not found"
      });  
    }

    let isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(200).send({
        success:false,
        message:"Invalid password"
      });  
    }


    let token = await genToken(user._Id);

    res.cookie("token", token,{
      httpOnly:true,
      secure:false,
      sameSite: "Strict",
      maxAge:7*24*60*60*1000
    })
    return res.status(201).json({message:"Login successful", user});
  }

  catch(error){
    console.log("Error in user login", error);
    return res.status(500).json({message: `Login error ${error.message}`});
  }
}

export const logout = async(req,res) => {
  try{
    res.clearCookie("token");
    return res.status(200).json({message:"Logout successful"});
  }
  catch(error){
    console.log("Error in user logout", error);
    return res.status(500).json({message: `Logout error ${error.message}`});
  }
}