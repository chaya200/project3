import mongoose,{Document, Schema} from 'mongoose';

export interface IItemToCart {
    productId:Schema.Types.ObjectId;
    qty:number;
    total_price:number;
    cartId:Schema.Types.ObjectId;
}
export interface IItemToCartModel extends Document, IItemToCart{} 

const ItemSchema: Schema=new Schema<IItemToCart>({
    
    productId: {
        type:Schema.Types.ObjectId,
        required: [true, "Missing name"],
        ref: "products"
    },
    qty:{
        type:Number,
        required: [true, "Missing quantity"],
        min: [0, "quantity can't be negative"],
        max: [100, "quantity is limited"],
    },
    total_price:{
        type:Number,
        
    },
    cartId:{
        type:Schema.Types.ObjectId,
        ref: "carts",
        required: [true, "Missing cart id"],
    }
},{
    versionKey:false,
    timestamps:true
});
export default mongoose.model<IItemToCartModel>("items", ItemSchema);