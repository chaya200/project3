import express from "express";
import controller from "../controllers/category_controller";

const router=express.Router();

router.get("/test", controller.testCat);
router.get("/all", controller.getAllCategories);
router.get("/single/:id", controller.getCategoryById);
router.post("/add", controller.addCategory);
router.patch("/update/:id", controller.updateCategory);
router.delete("/del/:id", controller.deleteCategory);

export default router;