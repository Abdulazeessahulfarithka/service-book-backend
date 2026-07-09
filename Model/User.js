import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        role: {
  type: String,
  enum: ["user", "admin"],
  default: "user",
}
    },
    {timestamp:true}
)
export default mongoose.model("users",userSchema)