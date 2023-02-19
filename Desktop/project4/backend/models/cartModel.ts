import  ClientModel  from './clientModel';
import mongoose,{Document, Schema} from 'mongoose';

export interface ICart {
    clientId:Schema.Types.ObjectId;
    created:Date;
    // products:Array<string>;
}

export interface ICartModel extends Document, ICart{} 

const CartSchema: Schema=new Schema<ICart>({
    
    created: {
        type:Date,
        required: [true, "Missing date"],
        // toDateString: [true]
    },
    
    clientId:{
        type:Schema.Types.ObjectId,
        required: [true, "Missing id"],
        ref: "clients"
    },
    // products: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: "items",
    //     },
    //   ],
    
},{
    versionKey:false,
    
});

// CartSchema.virtual("clients",{
//     ref:ClientModel, //which model you are describing and connect
//     localField:"client_id", //which filed in our model is it
//     foreignField:"id_num", //which filed in category model is it
//     justOne:true, //categoty is a single object and not array
    
// })
//the brackets is for the schema??
export default mongoose.model<ICartModel>("carts", CartSchema);

