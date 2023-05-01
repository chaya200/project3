
import mongoose,{Document, Schema} from 'mongoose';

export interface ICategory {
    name:string;
}
export interface ICategoryModel extends Document, ICategory{} 

const CategorySchema: Schema=new Schema<ICategory>({
    name: {
        type:String,
        required: [true, "Missing Category"],
        minlength: [2, "Category name is too short"],
        maxlength: [40, "Category name is too long"],
        trim: true,
        unique: true
    }
},{
        versionKey:false //don't create _v filed for versioning
    
    
});

export default mongoose.model<ICategoryModel>("categories", CategorySchema);
