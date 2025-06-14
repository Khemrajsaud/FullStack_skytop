import express from 'express'
import dotenv from "dotenv"
const app=express()

dotenv.config()


// mongodb connection
const PORT=process.env.PORT
app.get('/',(req,res)=>{
  res.send("hello")
})


app.listen(PORT,()=>{
  console.log(`App is running at ${PORT}`);
  
})