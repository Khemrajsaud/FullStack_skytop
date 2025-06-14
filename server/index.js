import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
const app=express()
const PORT=process.env.PORT
dotenv.config()


// mongodb connection
  try {
  await mongoose.connect(process.env.MONGODB_URL)
  console.log("Mongodb connection successfully");
  
} catch (error) {
  console.log("mongodb failed",error);
  
}

app.get('/',(req,res)=>{
  res.send("hello")
})


app.listen(PORT,()=>{
  console.log(`App is running at ${PORT}`);
  
})