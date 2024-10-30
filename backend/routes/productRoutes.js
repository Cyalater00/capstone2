import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsById,
  getTopProducts,
} from "../controllers/productController.js";

router.get("/top", getTopProducts);

router.route("/").get(getProducts);
router.route("/:id").get(getProductsById);

export default router;
