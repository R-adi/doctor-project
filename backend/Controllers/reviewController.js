import Review from "../models/ReviewSchema.js"
import Doctor from "../models/DoctorSchema.js"

//get all reviews

export const getallReviews=async (req,res) => {
    try {
        const reviews=await Review.find({})
        res.status(200).json({succes:true, message:"succesfull"})
    } catch (error) {
        res.status(404).json({succes:false, message:"Not found"})
    }
}

//create review

export const createReview=async (req,res) => {
    if(!req.body.doctor){
        req.body.doctor=req.params.doctorId
    }
    if(!req.body.user){
        req.body.user=req.params.userId
    }

    const newReview=new Review(req.body)
    try {
        const savedReview=await newReview.save()
        await Doctor.findByIdAndUpdate(req.body.doctor,{
            $push:{reviews:savedReview._id}
        })

        res.status(200).json({succes:true, message:"review submitted",data:savedReview})
    } catch (error) {
        res.status(500).json({succes:false, message:err.message})
    }
}