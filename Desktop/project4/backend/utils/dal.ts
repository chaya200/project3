import mongoose from "mongoose";
import config from "./config";

async function connect(): Promise<void> {
    try{
        const db = await mongoose.connect(config.mongodbConnectionString);
        //show that we connect to db we choose
        console.log(`We're connected to ${db.connections[0].name} on MongoDB `);
        
    }
    catch(err:any){
        console.log(err);
        
    }
}

export default {
    connect
}