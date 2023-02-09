import ErrorModel from "../models/errorModel";
import { I_ItemToCartModel, ItemModel } from "../models/itemModel";


//get all items for specific cart
const getAllItems= async(cart_id:string):Promise<I_ItemToCartModel[]>=>{
    //get all product without virtual fields
    // return ProductModel.find().populate("categories").exec();
    //ith virtual fields
    const items= await ItemModel.find({cart_id:"_id"}).exec();
    
    if(!items) throw new ErrorModel(404, `_id ${cart_id} not found`);
    return items;
}

//add item 
const addItem= async(item:I_ItemToCartModel):Promise<I_ItemToCartModel>=>{
    const errors= item.validateSync();
    if(errors) throw new ErrorModel(400, errors.message);
    return item.save();
}

//update item
const updateItem= async(item:I_ItemToCartModel):Promise<I_ItemToCartModel>=>{
    const errors= item.validateSync();
    if(errors) throw new ErrorModel(400, errors.message);

    const updateItem=await ItemModel.findByIdAndUpdate(item._id, item, {returnOriginal:false}).exec();
    if(!updateItem) throw new ErrorModel(404, `_id ${item._id} not found`);
    return updateItem;
}

//delete item
const deleteItem= async(_id:string):Promise<void>=>{
    const itemToDelete= await ItemModel.findByIdAndDelete(_id).exec();
    if(!itemToDelete) throw new ErrorModel(404, `_id ${_id} not found`);
    
}
export default{
    getAllItems,
    addItem,
    updateItem,
    deleteItem,
}