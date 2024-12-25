import { updateUser,deleteUser,getSAllUser,getSingleUser } from "../Controllers/userController.js";
import express from "express"


const router = express.Router()

router.get("/:id",getSingleUser);
router.get("/",getSAllUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);



export default router