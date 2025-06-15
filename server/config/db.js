import mongoose from "mongoose";

export const databaseConnection=async()=>{
    try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Mongodb connection successfully");
    
  } catch (error) {
    console.log("mongodb failed",error);  
  }
}