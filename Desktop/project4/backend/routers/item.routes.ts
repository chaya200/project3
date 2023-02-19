import express from "express";
import controller from "../controllers/item_controller";

const router = express.Router();

router.get("/all/:cart", controller.getItemsByCart);
router.post("/add", controller.addItem);
router.patch("/update/:id", controller.updateItem);
router.delete("/del/:id", controller.deleteItem);

export default router;