import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './db.js'
import authRoute from './Routes/auth.js'
import userroute from "./Routes/user.js";
dotenv.config()

const app=express()
const port=process.env.PORT || 8000

const cosrOption={
    origin:true
}

db()

app.get('/', (req, res) => {
    res.send('api works')
});


app.use(express.json());
app.use(cookieParser());
app.use(cors(cosrOption));
app.use('/',authRoute)
app.use('/users',userroute)

app.listen(port,()=>{
    console.log("server is running on "+ port);
})