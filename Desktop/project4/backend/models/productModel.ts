import mongoose,{Document, Schema} from 'mongoose';
import  CategoryModel  from './categoryModel';

export interface IProduct {
    name:string;
    categoryId:Schema.Types.ObjectId;
    price:number;
    image:string;
    
}
export interface IProductModel extends Document, IProduct{} 

const ProductSchema: Schema=new Schema<IProduct>({
    name: {
        type:String,
        required: [true, "Missing name"],
        minlength: [2, "Name is too short"],
        maxlength: [40, "Name is too long"],
        trim: true,
        unique: true
    },
    price:{
        type:Number,
        required: [true, "Missing price"],
        min: [0, "Price can't be negative"],
        max: [1000, "Price seems too expensive"],
    },
    image:{
        type:String,
        required: [true, "Missing image"],
        // minlength: [5, "Email is too short"],
        // maxlength: [40, "Email is too long"],
        // trim: true,
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        required: [true, "Missing category"],
        ref:"categories"
    }
},{
    timestamps:true,
    
    });



export default mongoose.model<IProductModel>("products", ProductSchema);
