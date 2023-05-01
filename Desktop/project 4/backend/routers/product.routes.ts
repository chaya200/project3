import express from "express";
import controller from "../controllers/product_controller";

const router=express.Router();

router.get("/test", controller.testProds);
router.get("/all", controller.getAllProducts);
router.get("/single/:id", controller.getProductById);
router.get("/name/:name", controller.getProductByName);
router.get("/category/:category", controller.getProductByCategory);
router.post("/add", controller.addProduct);
router.patch("/update/:id", controller.updateProduct);
router.delete("/del/:id", controller.deleteProduct);

export default router;