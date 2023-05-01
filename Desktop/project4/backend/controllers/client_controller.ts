import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import clientModel, { Role } from "../models/clientModel";

// get all client 
const getAllClients = async (request: Request, response: Response, next: NextFunction) => {
    return clientModel.find()
    .then((clients)=>response.status(200).json(clients))
    .catch((err)=> next(err));
}
//add client
const register = async (request: Request, response: Response, next: NextFunction) => {
    const client = request.body;
    const isAdmin=process.env.ADMINS.includes(client.email);
    client.role = isAdmin ? Role.admin : Role.client;
    // Check if the client already exists in the database
    const existingClient = await clientModel.findOne({ "email": client.email, "first_name": client.first_name  });
    if (existingClient) {
        // If the client already exists, return an error message
        return response.status(400).json({ message: 'Client already exists' });
    }

    // If the client doesn't exist, create a new client object and save it to the database
    const newClient = new clientModel({
        _id:new mongoose.Types.ObjectId(),
        ...client,
    });
    return newClient
    .save()
    .then((client)=> response.status(201).json(client))
    .catch((err)=> next(err));
}
// login
const login = async (request: Request, response: Response, next: NextFunction) => {
    const client = request.body;
    return clientModel.findOne({"email":client.email, "password": client.password })
    .then((client)=>{
        response.status(200).json(client)
    })
    .catch((err)=> next(err.message));
}
//get client by id num
const getClientById_num = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id;
    console.log(id);
    return clientModel.findOne({"id_num":id})
    .then((client)=>{ console.log(client);
        client?response.status(200).json(client):response.status(200).json({message:"not found"})
    })
    .catch((err)=> next(err));
}
// get client by name
const getClientByName=async (request: Request, response: Response, next: NextFunction) => {
    const name = request.params.name;
    return clientModel.findOne({"first_name":name})
    .then((client)=>{
        client?response.status(200).json(client):response.status(200).json({message:"not found"})
    })
    .catch((err)=> next(err));
}


const updateClient = async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params._id;
    return clientModel.findById(id)
    .then((client) => {
        if(client){
            client.set(request.body);
            return client
            .save()
            .then((client) => response.status(201).json(client))
            .catch((err) => next(err))
        }
        else
        {
            response.status(404).json({message:"not found"});
        }
    })
    .catch((err) => next(err));
}

const deleteClient = async (request: Request, response: Response, next: NextFunction) => {
        const id = request.params._id;
        return clientModel.findByIdAndDelete(id)
        .then((client)=>
        (client?response.status(201).json({message:"deleted"}):response.status(404).json({message:"not found"})))
        .catch((err)=> next(err));
}


export default {
    getAllClients,
    register,
    login, 
    getClientById_num,
    getClientByName, 
    updateClient, 
    deleteClient
}