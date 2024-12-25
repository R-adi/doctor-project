import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "15d",
    }
  );
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;
  try {
    let user = null;

    if (role == "patient") {
      user = await User.findOne({ email });
    } else if (role == "doctor") {
      user = await Doctor.findOne({ email });
    }

    if (user) {
      return res.status(400).json({ message: "user exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt); //to encrypt

    if (role == "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }

    if (role == "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "user succesfully created" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "user not succesfully created due to server",
    });
  }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
     
      let user = await User.findOne({ email });
      if (!user) {
        user = await Doctor.findOne({ email });
      }
  
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Compare passwords
      const isPasswordSame = await bcrypt.compare(password, user.password);
      if (!isPasswordSame) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid credentials" });
      }
  
      // Generate JWT token
      const token = generateToken(user);
  
     
      const { password:_, role, appointments, ...rest } = user._doc; // Exclude password from the response
      res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        data: { ...rest },
        role,
      });
    } catch (error) {
      console.error(error); 
      res.status(500).json({
        success: false,
        message: "Failed to login due to server error",
      });
    }
  };
  
