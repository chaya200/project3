import express from "express";
import controller from "../controllers/cart_controller";

const router = express.Router();

router.get("/all", controller.getAllCarts);
router.post("/add", controller.addCart);
router.patch("/update/:id", controller.updateCart);
router.delete("/del/:id", controller.deleteCart);

export default router;
