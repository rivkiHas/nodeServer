import express from "express";
import { addProduct, getAllProduct, getProductById, deleteProduct, updateProduct, getProductByCategory,getTotalProductByCategory } from "../controllers/product.js";
import { authAdmin } from "../middlwares/auth.js";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/getTotalProductPerCategory/:category", getTotalProductByCategory);
router.get("/:id", getProductById);
router.delete("/:id", authAdmin, deleteProduct);
router.post("/", authAdmin, addProduct);
router.put("/:id", authAdmin, updateProduct);
router.get("/category/:category", getProductByCategory);
 
export default router;