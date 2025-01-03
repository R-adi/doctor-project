import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "updated succesfully", data: updatedDoctor });
  } catch (error) {
    res.status(500).json({ message: "updated succesfully" });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "deleted succesfully", data: deletedDoctor });
  } catch (error) {
    res.status(500).json({ message: "deletion failed" });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).populate("reviews").select("-password");
    res.status(200).json({ message: "Doctor found succesfully", data: doctor });
  } catch (error) {
    res.status(404).json({ message: "Doctor not found" });
  }
};

export const getSAllDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { specialization: { $regex: query, $options: 'i' } },
        ],
      }).select("-password");
    }else{
         doctors=await Doctor.find({isApproved:"approved"}).select("-password")
    }

    res
      .status(200)
      .json({ message: "Doctors found succesfully", data: doctors });
  } catch (error) {
    res.status(404).json({ message: "Doctors not found" });
  }
};


export const getDoctorProfile=async (req,res) => {
  const doctorId=req.userId

  try {
    const doctor=await Doctor.findById(doctorId)

if(!doctor){
  return res.status(404).json({succes:false,message:"User not found"})
}
 const {password,...rest}=doctor._doc
const appointments=await Booking.find({doctor:doctorId})

  res.status(200).json({succes:true,message:"profile info is getting ",data:{...rest,appointments}})

  } catch (error) {
    res.status(500).json({succes:false,message:"something went wrong"}) 
  }
}