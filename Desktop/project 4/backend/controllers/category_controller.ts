import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import  CategoryModel  from "../models/categoryModel";


//test api
const testCat= async (request: Request, response: Response, next: NextFunction) => {
    console.log(" category test is working");
}

//all categories
const getAllCategories= async (request: Request, response: Response, next: NextFunction) => {
    
    return CategoryModel.find()
    .then((categories)=>response.status(200).json(categories))
    .catch((err)=> next(err));
}

//category by id
const getCategoryById= async (request: Request, response: Response, next: NextFunction) => {
    console.log("hey from category by id");
    const id = request.params.id;
    return CategoryModel.findById(id)
    .then((category)=>{
        category?response.status(200).json(category):response.status(404).json({message:"not found"})
    })
    .catch((err)=> next(err));
}

//add category
const addCategory= async (request: Request, response: Response, next: NextFunction) => {
    console.log("added? no!");
    const category=request.body;
    const newCategory=new CategoryModel({
        _id:new mongoose.Types.ObjectId(),
        ...category,
    });
    return newCategory
    .save()
    .then((category)=> response.status(201).json(category))
    .catch((err)=> next(err));
}


// update category
const updateCategory=async (request: Request, response: Response, next: NextFunction) => {
    console.log("updated???");
    const id = request.params.id;
    return CategoryModel.findById(id)
    .then((category)=>{
    if(category){
        category.set(request.body);

        return category
        .save()
        .then((category)=> response.status(201).json(category))
        .catch((err)=> next(err));
    }else{
        response.status(404).json({message: "not found"})
    }
})
    .catch((err)=> next(err));
}

// delete category 
const deleteCategory=async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;

    return CategoryModel.findByIdAndDelete(id)
    .then((category)=>
    (category?response.status(201).json({message:"deleted"}):response.status(404).json({message:"not found"})))
    .catch((err)=> next(err));
}

export default {
    addCategory,
    testCat,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};