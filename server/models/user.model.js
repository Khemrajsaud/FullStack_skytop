import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
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
    unique:true,match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  password:{
    type:String,
    required:true
  }
})

export const User=mongoose.model("User",userSchema)