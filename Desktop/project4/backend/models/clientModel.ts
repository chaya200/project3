import mongoose,{Document, Schema} from 'mongoose';

export enum Role {
    admin = 1,
    client = 2,
    guest = 3,
}


export interface IClient {
    first_name:string;
    last_name:string;
    email:string;
    id_num:number;
    password:string;
    city:string;
    street:string;
    role:number;
    
    
}
export interface IClientModel extends Document, IClient{} 

const ClientSchema: Schema=new Schema<IClient>({
    first_name: {
        type:String,
        required: [true, "Missing first name"],
        minlength: [2, "First name is too short"],
        maxlength: [40, "First name is too long"],
        trim: true
    },
    last_name:{
        type:String,
        required: [true, "Missing last name"],
        minlength: [2, "Last name is too short"],
        maxlength: [40, "Last name is too long"],
        trim: true
    },
    email:{
        type:String,
        required: [true, "Missing email"],
        minlength: [5, "Email is too short"],
        maxlength: [40, "Email is too long"],
        // trim: true,
        unique: true
    },
    id_num:{
        type:Number,
        required: [true, "Missing id"],
        minlength: [6, "Id is too short"],
        maxlength: [10, "Id  is too long"],
        trim: true,
        unique: true,
    },
    password:{
        type:String,
        required: [true, "Missing password"],
        minlength: [8, "Password is too short, should contain at lest 8 chars"],
        maxlength: [25, "Password  is too long"],
        trim: true,
        // lowercase: [true,"PAssword should contains lowercase"],
        // uppercase:[true,""],
        //unique: true,
        unique: false,
    },
    city:{
        type:String,
        required: [true, "Missing city"],
        minlength: [1, "City is too short"],
        maxlength: [20, "City  is too long"],
    },
    street:{
        type:String,
        required: [true, "Missing street"],
        minlength: [1, "Street is too short"],
        maxlength: [20, "Street  is too long"],
    },
    role:{
        type:Number,
        required: [true, "Missing role"],
    }
    },{
        versionKey:false,
    
    });
    

export default mongoose.model<IClientModel>("clients", ClientSchema);
