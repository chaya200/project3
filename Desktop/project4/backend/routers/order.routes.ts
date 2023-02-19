import express from "express";
import controller from "../controllers/order_controller";

const router=express.Router();

router.get("/all", controller.getAllOrders);
router.get("/single/:id", controller.getOrderById);
router.get("/client/:id_num", controller.getOrderByClientId);
router.get("/city/:city", controller.getOrdersByCity);
router.post("/add", controller.addOrder);
router.patch("/update/:id", controller.updateOrder);
router.delete("/del/:id", controller.deleteOrder);
router.get("/test", controller.testOrders);

export default router;