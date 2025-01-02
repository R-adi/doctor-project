import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import Booking from "../models/BookingSchema.js"
import Razorpay from 'razorpay'

export const getCheckout=async (req,res) => {
    try {
        
const doctor = await Doctor.findById(req.params.doctorId)
const user = await User.findById(req.params.userId)

const razor=new Razorpay({key_id:process.env.RAZOR_KEY,
key_secret: process.env.RAZOR_SECRET
})


const session = await razor.checkout.sessions.create({
   paymentLink
})

    } catch (error) {
        
    }
}



