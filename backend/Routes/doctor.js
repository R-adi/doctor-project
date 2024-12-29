import { updateDoctor,getSAllDoctor,getSingleDoctor, deleteDoctor, getDoctorProfile } from "../Controllers/doctorController.js";
import express from "express"
import { authenticate,restrict } from "../auth/verifyToken.js";
import reviewroute from "./review.js"

const router = express.Router()

router.use("/:doctorId/reviews",reviewroute)

router.get("/:id",getSingleDoctor);
router.get("/",getSAllDoctor);
router.put("/:id",authenticate,restrict(["doctor"]),updateDoctor);
router.delete("/:id",authenticate,restrict(["doctor"]),deleteDoctor);
router.get("/profile/me",authenticate,restrict(["doctor"]),getDoctorProfile);




export default router