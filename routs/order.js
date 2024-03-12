import express from "express";
import { addOrder, getAllOrders, getOrderById, deleteOrder, updateOrder } from "../controllers/order.js";
import { auth, authAdmin } from "../middlwares/auth.js";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.delete("/:id",auth, deleteOrder);
router.post("/",auth, addOrder);
router.put("/:id",authAdmin, updateOrder);

export default router;