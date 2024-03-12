import express from "express";
import { addUser, getAllUsers, login } from "../controllers/user.js";
import { auth, authAdmin } from "../middlwares/auth.js";

const router = express.Router();

router.get("/",authAdmin, getAllUsers);
router.post("/", addUser);
router.post("/login",login);
// router.post("/searchUser",searchUser);


export default router;