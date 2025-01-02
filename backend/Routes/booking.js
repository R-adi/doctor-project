import express from "express";
import { authenticate } from "../auth/verifyToken.js"; // Middleware to verify token
import { getCheckout } from "../Controllers/bookingController.js"; // Razorpay controller

const router = express.Router();

// Route for Razorpay checkout
router.post("/checkout/:doctorId", authenticate, getCheckout);

export default router;
