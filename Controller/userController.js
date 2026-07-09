import User from "../Model/User.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

//register User

export const registerUser = async(req,res)=>{
    try{
        const {name,email,address,password}=req.body
        if(!name ||!email ||!address ||!password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
 // check existing user
 const existingUser = await User.findOne({email})   
 
   if(existingUser){
    return res.status(400).json({
        success:false,
        message:"User already exists"
    })
   } 
   // hash password
 const hashedPassword = await bcrypt.hash(password, 10);
//create user 
const user = await User.create({
    name,
    email,
    address,
    password:hashedPassword
})
  res.status(201).json({
    sucess:true,
    message:"User registred sucessfully",
    user,
  })

}catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Login User
export const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
      if(!email || !password){          
        return res.status(404).json({
            success:false,
            message:"Email and password are required"
        })
      }                 
     const user = await User.findOne({email})
  if(!user){
    return res.status(404).json({
        sucess:false,
        message:"User not found"
    })
  }
   const isMatch = await bcrypt.compare(password,user.password)

   if(!isMatch){
    return res.status(401).json({
        sucess:false,
        message:"invalid password"
    })
   }
 const token =jwt.sign(
    {id:user._id},
    process.env.JWT_SECRET,
    {expiresIn:"7d"}
 )
  res.status(200).json({
    sucess:false,
    message:"Login successful",
    user:{
        id:user._id,
        name:user.name,
        email:user.email,
        address:user.address
    },
    token,
  })

    }catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};