import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import cartModel from "../models/cartModel";

//all carts
const getAllCarts = async (request: Request, response: Response, next: NextFunction) => {
    return cartModel.find()
    .populate('clientId')
    .then((carts) => response.status(200).json(carts))
    .catch((err) => next(err))
}


//add cart
const addCart = async(request: Request, response: Response, next: NextFunction) => {
    const cart = request.body;
    const newCart = new cartModel({
        _id:new mongoose.Types.ObjectId(),
        ...cart,
    });
    return newCart
    .save()
    .then((cart)=> response.status(201).json(cart))
    .catch((err)=> next(err));
}

// update cart
const updateCart=async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    return cartModel.findById(id)
    .then((cart)=>{
    if(cart){
        cart.set(request.body);
        return cart
        .save()
        .then((cart)=> response.status(201).json(cart))
        .catch((err)=> next(err));
    }else{
        response.status(404).json({message: "not found"})
    }
})
    .catch((err)=> next(err));
}

// delete cart 
const deleteCart=async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    return cartModel.findByIdAndDelete(id)
    .then((cart)=>
    (cart?response.status(201).json({message:"deleted"}):response.status(404).json({message:"not found"})))
    .catch((err)=> next(err));
}


//cart by id client
const getCartByClientId=async (request: Request, response: Response, next: NextFunction) => {
    console.log("hey from cart by clientId");
    const clientId = request.params.id;
    console.log(clientId);
    return cartModel.find({"clientId":clientId}).populate("clientId")
    .then((items)=>{
        items?response.status(200).json(items):response.status(200).json({message:"not found"})
    })
    .catch((err)=> next(err));
}

export default {
    getAllCarts,
    addCart,
    updateCart,
    deleteCart,
    getCartByClientId
}