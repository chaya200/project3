// import  ProductModel  from './productModel';
// import CartModel  from './cartModel';
import mongoose,{Document, Schema} from 'mongoose';

export interface IItemToCart {
    product_name:Schema.Types.ObjectId;
    qty:number;
    total_price:number;
    cartId:Schema.Types.ObjectId;
    
    
}
export interface IItemToCartModel extends Document, IItemToCart{} 

const ItemSchema: Schema=new Schema<IItemToCart>({
    
    product_name: {
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


// ItemSchema.virtual("carts",{
//     ref:CartModel, //which model you are describing and connect
//     localFields:"cartId", //which filed in our model is it
//     foreignFields:"_id", //which filed in category model is it
//     justOne:true, // is a single object and not array
    
// })
export default mongoose.model<IItemToCartModel>("items", ItemSchema);