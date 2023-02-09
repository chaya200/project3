
import express, {NextFunction, Request, Response} from 'express';
import mongoose from "mongoose";
import ErrorModel from "../models/errorModel";
import { IProductModel, ProductModel } from "../models/productModel";


//get all product
const getAllProducts= async (request: Request, response: Response, next: NextFunction) => {
    //get all product without virtual fields
    // return ProductModel.find().populate("categories").exec();

    //ith virtual fields
    return ProductModel.find().populate("categories").exec();
}

//get product by id
const getProductById= async(_id:string):Promise<IProductModel>=>{
    const product= await ProductModel.findById(_id).exec();
    if(!product) throw new ErrorModel(404, `_id ${_id} not found`);
    return product;
}

//get product by name
const getProductByName= async(name:string):Promise<IProductModel>=>{
    const product= await ProductModel.findOne({name:"name"}).exec();
    if(!product) throw new ErrorModel(404, `Product: ${name} not found`);
    return product;
}

//get products by category
const getProductByCategory= async(category_id:string):Promise<IProductModel[]>=>{
    const categoryProducts= await ProductModel.find({category_id:"categoryId"}).exec();
    if(!categoryProducts) throw new ErrorModel(404, `category id ${category_id} not found`);
    return categoryProducts;
}

//add product
const addProduct= async(product:IProductModel):Promise<IProductModel>=>{
    console.log("fooof");
    const errors= product.validateSync();
    if(errors) throw new ErrorModel(400, errors.message);
    return product.save();
}



//update product
const updateProduct= async(product:IProductModel):Promise<IProductModel>=>{
    const errors= product.validateSync();
    if(errors) throw new ErrorModel(400, errors.message);

    const updateProd=await ProductModel.findByIdAndUpdate(product._id, product, {returnOriginal:false}).exec();
    if(!updateProd) throw new ErrorModel(404, `_id ${product._id} not found`);
    return updateProd;
}

//delete product- no need for the project just for practice
const deleteProd= async(_id:string):Promise<void>=>{
    const productToDelete= await ProductModel.findByIdAndDelete(_id).exec();
    if(!productToDelete) throw new ErrorModel(404, `_id ${_id} not found`);
    
}
export default{
    getAllProducts,
    getProductById,
    getProductByName,
    getProductByCategory,
    addProduct,
    updateProduct,
    deleteProd
}