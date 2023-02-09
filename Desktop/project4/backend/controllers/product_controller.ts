import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import  ProductModel  from "../models/productModel";


//test api
const testProds= async (request: Request, response: Response, next: NextFunction) => {
    console.log("test is working");
}

//all products
const getAllProducts= async (request: Request, response: Response, next: NextFunction) => {
    
    return ProductModel.find()
    .populate('categoryId')
    .select('-__v')
    .then((products)=>response.status(200).json(products))
    .catch((err)=> next(err));
}

//product by id
const getProductById= async (request: Request, response: Response, next: NextFunction) => {
    console.log("hey from product by id");
    const id = request.params.id;
    return ProductModel.findById(id)
    .populate('categoryId')
    .select('-__v')
    .then((product)=>{
        product?response.status(200).json(product):response.status(404).json({message:"not found"})
    })
    .catch((err)=> next(err));
}

//add product
const addProduct= async (request: Request, response: Response, next: NextFunction) => {
    console.log("added? no!");
    const product=request.body;
    const newProduct=new ProductModel({
        _id:new mongoose.Types.ObjectId(),
        ...product,
    });
    return newProduct
    .save()
    .then((product)=> response.status(201).json(product))
    .catch((err)=> next(err));
}


// update product
const updateProduct=async (request: Request, response: Response, next: NextFunction) => {
    console.log("updated???");
    const id = request.params.id;
    return ProductModel.findById(id)
    .then((product)=>{
    if(product){
        product.set(request.body);

        return product
        .save()
        .then((product)=> response.status(201).json(product))
        .catch((err)=> next(err));
    }else{
        response.status(404).json({message: "not found"})
    }
})
    .catch((err)=> next(err));
}

// delete product 
const deleteProduct=async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;

    return ProductModel.findByIdAndDelete(id)
    .then((product)=>
    (product?response.status(201).json({message:"deleted"}):response.status(404).json({message:"not found"})))
    .catch((err)=> next(err));

}

//product by name
const getProductByName= async (request: Request, response: Response, next: NextFunction) => {
    console.log("hey from product by name");
    const productName = request.params.name;
    return ProductModel.findOne({productName:"name"}).populate("categoryId")
    .then((items)=>{
        items?response.status(200).json(items):response.status(200).json({message:"not found"})
    })
    .catch((err)=> next(err));
}


//product by category
const getProductByCategory=async (request: Request, response: Response, next: NextFunction) => {
    console.log("hey from product by category");
    const productCat = request.params.category;
    return ProductModel.findOne({productCat:"category"}).populate("categoryId")
    .then((items)=>{
        items?response.status(200).json(items):response.status(200).json({message:"not found"})
    })
    .catch((err)=> next(err));
}

export default {
    addProduct,
    testProds,
    getAllProducts,
    getProductById,
    getProductByName,
    getProductByCategory,
    updateProduct,
    deleteProduct
};
