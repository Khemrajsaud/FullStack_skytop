import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
  fullname:{
    type:String,
    required:true,
  },
  number:{
    type:Number,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  }
})

export const Admin=mongoose.model("Admin",adminSchema)
