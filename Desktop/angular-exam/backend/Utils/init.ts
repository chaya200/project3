import dal_mysql from "../Utils/dal_mysql";

const category_sql=`CREATE TABLE IF NOT EXISTS category (id INT NOT NULL AUTO_INCREMENT,cat_name VARCHAR(45) NULL,PRIMARY KEY (id))`;
const product_sql="CREATE TABLE IF NOT EXISTS product (`id` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(45) NULL,`category` INT NULL,`date` DATE NULL,`amount` INT NULL,`price` DECIMAL(5,2) NULL,PRIMARY KEY (`id`));";



const sql_init=()=>{
    dal_mysql.execute(category_sql);
    dal_mysql.execute(product_sql);
}

export default sql_init;