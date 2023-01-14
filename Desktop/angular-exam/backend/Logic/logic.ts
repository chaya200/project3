// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql"
import { Product } from "../Models/productModel"
import { Category } from "../Models/categoryModel"
import { OkPacket } from "mysql";


//read
const getProducts = async (): Promise<Product[]> => {
    const sql = `
    SELECT product.* , category.cat_name AS category
        FROM product JOIN category
        ON product.category = category.id
    `;
    
    const products = await dal.execute(sql);
    return products;
}

const addProduct = async (product: Product): Promise<Product> => {
    // command line for the DB
    
    const sql = `
    INSERT INTO product VALUES
    (DEFAULT,
    '${product.name}',
    ${product.category},
    '${product.date}',
    ${product.amount},
    ${product.price}
    )`;
    const response : OkPacket = await dal.execute(sql);
    product.id = response.insertId;
    return product;

} 

const deleteProduct = async (id: number): Promise<void> => {
    const sql = `
    DELETE FROM product WHERE id=${id}`
    const response = await dal.execute(sql);
    
}

const updateProduct = async (product: Product): Promise<Product> => {
    const sql = `
    UPDATE product 
    SET name = '${product.name}',
    category=${product.category},
    date='${product.date}',
    amount=${product.amount},
    price=${product.price}
    WHERE id = ${product.id}
    `;
    const response : OkPacket = await dal.execute(sql);
    return product;
}
const getCategories = async (): Promise<Category[]> => {
    const sql = `
    SELECT * FROM category
    `;
    
    const products = await dal.execute(sql);
    return products;
}

// exporting 
export default {
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct,
    getCategories
}