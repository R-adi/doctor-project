import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({ message: "updated succesfully", data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "updated succesfully" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "deleted succesfully", data: deletedUser });
  } catch (error) {
    res.status(500).json({ message: "deletion failed" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    res.status(200).json({ message: "user found succesfully", data: user });
  } catch (error) {
    res.status(404).json({ message: "user not found" });
  }
};

export const getSAllUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.find({}).select("-password");
    res.status(200).json({ message: "users found succesfully", data: user   });
  } catch (error) {
    res.status(404).json({ message: "users not found" });
  }
};


export const getUserProfile = async(req,res)=>{
  const userId=req.userId

  try {
    const user=await User.findById(userId)

if(!user){
  return res.status(404).json({succes:false,message:"User not found"})
}
 const {password,...rest}=user._doc
  res.status(200).json({succes:true,message:"profile nfo is getting ",data:{...rest}})

  } catch (error) {
    res.status(500).json({succes:false,message:"something went wrong"}) 
  }
} 

export const  getMyAppointment =async (req,res) => {
try {
  
//to retrive appintment

const booking=await Booking.find({user:req.userId})

//to extract doctor id from booking

const doctorId=booking.map(el=>el.doctor.id)
//retrive doctor using id

const doctors=await Doctor.find({_id:{$in:doctorId}}).select("-password")

res.status(200).json({succes:true,message:"Appointments are getting",data:doctors})

} catch (error) {
  res.status(500).json({succes:false,message:"something went wrong"})
}  
}
