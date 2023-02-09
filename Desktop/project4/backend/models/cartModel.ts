import  ClientModel  from './clientModel';
import mongoose,{Document, Schema} from 'mongoose';

export interface ICart {
    client_id:Schema.Types.ObjectId;
    created:Date;
}

export interface ICartModel extends Document, ICart{} 

const CartSchema: Schema=new Schema<ICart>({
    
    created: {
        type:Date,
        required: [true, "Missing date"],
        toDateString: [true]
    },
    
    client_id:{
        type:Schema.Types.ObjectId,
        required: [true, "Missing id"],
        ref: "clients"
    }
},{
    versionKey:false,
    
});

CartSchema.virtual("clients",{
    ref:ClientModel, //which model you are describing and connect
    localField:"client_id", //which filed in our model is it
    foreignField:"id_num", //which filed in category model is it
    justOne:true, //categoty is a single object and not array
    
})
//the brackets is for the schema??
export default mongoose.model<ICartModel>("carts", CartSchema);

