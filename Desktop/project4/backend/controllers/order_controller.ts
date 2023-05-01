import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import  OrderModel  from "../models/orderModel";

//test api
const testOrders= async (request: Request, response: Response, next: NextFunction) => {
    console.log("order is working");
}

//all orders
const getAllOrders= async (request: Request, response: Response, next: NextFunction) => {
    
    return OrderModel.find()
    .populate(['cartId', 'clientId'])
    .select('-__v')
    .then((orders)=>response.status(200).json(orders))
    .catch((err)=> next(err));
}

//order by id
const getOrderById= async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    return OrderModel.findById(id)
    .populate(['cartId', 'clientId'])
    .select('-__v')
    .then((product)=>{
        product?response.status(200).json(product):response.status(404).json({message:"not found"})
    })
    .catch((err)=> next(err));
}

//add order
const addOrder= async (request: Request, response: Response, next: NextFunction) => {
    const order=request.body;
    const newOrder=new OrderModel({
        _id:new mongoose.Types.ObjectId(),
        ...order,
    });
    return newOrder
    .save()
    .then((order)=> response.status(201).json(order))
    .catch((err)=> next(err));
}

// update order
const updateOrder=async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    return OrderModel.findById(id)
    .then((order)=>{
    if(order){
        order.set(request.body);

        return order
        .save()
        .then((order)=> response.status(201).json(order))
        .catch((err)=> next(err));
    }else{
        response.status(404).json({message: "not found"})
    }
})
    .catch((err)=> next(err));
}

// delete order 
const deleteOrder=async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;

    return OrderModel.findByIdAndDelete(id)
    .then((order)=>
    (order?response.status(201).json({message:"deleted"}):response.status(404).json({message:"not found"})))
    .catch((err)=> next(err));

}

//order by client id
const getOrderByClientId= async (request: Request, response: Response, next: NextFunction) => {
    const client_id = request.params.id_num;
    return OrderModel.find({"clientId":client_id}).populate(['cartId', 'clientId'])
    .then((items)=>{
        items?response.status(200).json(items):response.status(200).json({message:"not found"})
    })
    .catch((err)=> next(err));
}

//order by city
const getOrdersByCity=async (request: Request, response: Response, next: NextFunction) => {
    const city = request.params.city;
    return OrderModel.find({city}).populate(['cartId', 'clientId'])
    .then((items)=>{
        items?response.status(200).json(items):response.status(200).json({message:"not found"})
    })
    .catch((err)=> next(err));
}

export default {
    addOrder,
    testOrders,
    getAllOrders,
    getOrderById,
    getOrderByClientId,
    getOrdersByCity,
    updateOrder,
    deleteOrder
};
