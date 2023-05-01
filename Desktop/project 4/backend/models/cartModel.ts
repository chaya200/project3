import mongoose,{Document, Schema} from 'mongoose';

export interface ICart {
    clientId:Schema.Types.ObjectId;
    created:Date;
}

export interface ICartModel extends Document, ICart{} 

const CartSchema: Schema=new Schema<ICart>({
    created: {
        type:Date,
        required: [true, "Missing date"],
        toDateString: [true]
    },
    clientId: {
        type:Schema.Types.ObjectId,
        required: [true, "Missing id"],
        ref: "clients"
    }
},{
    versionKey:false,
    
});

export default mongoose.model<ICartModel>("carts", CartSchema);