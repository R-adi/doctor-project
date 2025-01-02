import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";
import Razorpay from "razorpay";
import jwt from 'jsonwebtoken'; 

export const getCheckout = async (req, res) => {
  try {

    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(400).json({ success: false, message: "No token provided" });
    }

   
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); 
    const userId = decoded.id; 

    
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(userId); 

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!doctor) {
      return res.status(404).json({ success: false, message: "Doctor not found" });
    }

    // Ensure the doctor ticket price is a valid number
    if (isNaN(doctor.ticketPrice) || doctor.ticketPrice <= 0) {
      return res.status(400).json({ success: false, message: "Invalid doctor ticket price" });
    }

    
    // console.log("Razorpay Key ID: ", process.env.RAZORPAY_KEY_ID);
    // console.log("Razorpay Secret Key: ", process.env.RAZORPAY_KEY_SECRET);

 
    const receipt = `receipt_${req.params.doctorId.substring(0, 10)}_${userId.substring(0, 10)}`;

    // Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Create the Razorpay order
    const order = await razorpay.orders.create({
      amount: doctor.ticketPrice * 100, //paisa conversion
      currency: "INR",
      receipt: receipt,
      notes: {
        doctorName: doctor.name,
        userName: user.name,
        email: user.email,
      },
    });

    console.log("Razorpay Order Response: ", order); 

    if (!order) {
      return res.status(500).json({ success: false, message: "Error creating Razorpay order" });
    }

 
    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: doctor.ticketPrice,
      session: order.id, 
    });

    await booking.save();

    res.status(200).json({
      success: true,
      message: "Payment order created successfully",
      order,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ success: false, message: "Error processing payment", error: error.message });
  }
};
