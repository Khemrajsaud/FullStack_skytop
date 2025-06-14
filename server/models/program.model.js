import mongoose from "mongoose";

const ProgramSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true, 
  },
    description:{
     type:String,
    required:true,
  },
  image:{ // using cloud storage like Cloudinary
    public_id:{
      type:String,
      required:true
    },
      url:{
      type:String,
      required:true
    }
  }
})
export const Program=mongoose.model("Program",ProgramSchema);