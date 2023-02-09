import express, { NextFunction, Request, Response } from "express";
import itemToCartLogic from "../logic/itemToCartLogic";



const itemController = express.Router();


itemController.get("/test", async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json("test is working");
})

//get all items for specific cart
itemController.get("/all/:cart_id", async (request: Request, response: Response, next: NextFunction) => {
    const cart_id = request.params.cart_id;
    try {
        response.status(200).json(await itemToCartLogic.getAllItems(cart_id));
    } catch (err) {
        console.log(err);
        next(err);
    }
})

//add item 
itemController.post("/add", async (request: Request, response: Response, next: NextFunction) => {
    const newItem = request.body;
    try {
        response.status(201).json(await itemToCartLogic.addItem(newItem));
    } catch (err) {
        console.log(err);
        next(err);
    }
})

//update item
itemController.put("/update", async (request: Request, response: Response, next: NextFunction) => {
    const newItem = request.body;
    try {
        response.status(201).json(await itemToCartLogic.updateItem(newItem));
    } catch (err) {
        console.log(err);
        next(err);
    }
})


//delete item
itemController.delete("/:id", async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    try {
        response.status(200).json(await itemToCartLogic.deleteItem(id));
    } catch (err) {
        console.log(err);
        next(err);
    }
})




export default itemController;