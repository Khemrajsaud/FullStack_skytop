import express from 'express'
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import userRouter from '../server/routes/user.routes.js'
import { databaseConnection } from './config/db.js';


dotenv.config();

const app=express();
// const port=process.env.PORT;
const port =3001

app.use(express.json())
app.use(cookieParser())


// mongodb connection
await databaseConnection()

app.use("/api/v1/user",userRouter)

app.get('/', (req, res) => {
  res.send('Hello World')

  
})

app.listen(port,()=>{
  console.log(`App is running at ${port}`)
  
})