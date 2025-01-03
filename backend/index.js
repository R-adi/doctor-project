import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './db.js'
import authRoute from './Routes/auth.js'
import userroute from "./Routes/user.js";
import doctorroute from "./Routes/doctor.js"
import reviewroute from "./Routes/review.js"
import bookingRoute from "./Routes/booking.js"
dotenv.config()

const app=express()
const port=process.env.PORT || 8000

const cosrOption={
    origin:true
}



app.use(cors({ origin: "http://localhost:5173" },cosrOption)); // Allow frontend origin


db()

app.get('/', (req, res) => {
    res.send('api works')
});


app.use(express.json());
app.use(cookieParser());
//app.use(cors(cosrOption));
app.use('/',authRoute)
app.use('/user',userroute)
app.use('/doctors',doctorroute)
app.use('/reviews',reviewroute)
app.use('/bookings',bookingRoute)


app.listen(port,()=>{
    console.log("server is running on "+ port);
})