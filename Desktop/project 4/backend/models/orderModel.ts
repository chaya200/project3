// import  CartModel  from './cartModel';
// import ClientModel  from './clientModel';
import mongoose,{Document, Schema} from 'mongoose';

export interface IOrder{
    clientId:Schema.Types.ObjectId;
    cartId:Schema.Types.ObjectId;
    sum:number;
    city:string;
    street:string;
    arrival_date:Date;
    order_date:Date;
    last_fourCC:number;
}

export interface IOrderModel extends Document, IOrder{} 

const OrderSchema: Schema=new Schema<IOrder>({
    clientId: {
        type:Schema.Types.ObjectId,
        required: [true, "Missing client"],
        ref: "clients"
    },
    cartId:{
        type:Schema.Types.ObjectId,
        required: [true, "Missing Cart number"],
        ref: "carts"
    },
    sum:{
        type:Number,
        required: [true, "Missing sum"],
        
    },
    city:{
        type:String,
        required: [true, "Missing city"],
        //actually it should be in a select
        minlength:[2, "City is..."]
    },
    street:{
        type:String,
        required: [true, "Missing street"],
        minlength:[2, "Street name is too short"],
        maxlength:[50, "Street name is too long"],
        trim: true
    },
    arrival_date:{
        type:Date,
        // required: [true, "Missing date"],
        
    },
    order_date:{
        type:Date,
        required: [true, "Missing date"],
        toDateString: [true]
    },
    last_fourCC:{
        type:Number,
        required: [true, "Missing credit card 4 last numbers"],
        minlength:[4, "Please enter last 4 numbers of your credit card"],
        maxlength:[4, "Please enter only the last 4 numbers of your credit card"],
        
    },
},{
    versionKey:false,
    
});

export default mongoose.model<IOrderModel>("orders", OrderSchema);