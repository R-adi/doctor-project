import { updateUser,deleteUser,getSAllUser,getSingleUser, getUserProfile, getMyAppointment } from "../Controllers/userController.js";
import express from "express"
import { authenticate,restrict } from "../auth/verifyToken.js";


const router = express.Router()

router.get("/:id",authenticate,restrict(["patient"]),getSingleUser);
router.get("/",authenticate,restrict(["admin"]),getSAllUser);
router.put("/:id",authenticate,restrict(["patient"]),updateUser);
router.delete("/:id",authenticate,restrict(["patient"]),deleteUser);
router.get("/profile/me",authenticate,restrict(["patient"]),getUserProfile);
router.get("appointments/my-appointment",authenticate,restrict(["patient"]),getMyAppointment);



export default router