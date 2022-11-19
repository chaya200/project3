// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql"
import { SomeModel } from "../Models/someModel"
import { OkPacket } from "mysql";
import dal_mysql from "../Utils/dal_mysql";


// functions( async / await ) for getting data from DB
const getFunction = async (): Promise<SomeModel> => {
    // command line for the DB
    const sql = `
        SELECT * FROM SOMETHING
    `;
    // a promise function that connects us to the database with the command line
    const something = await dal.execute(sql);
    return something;
}

const postFunction = async (something: SomeModel): Promise<SomeModel> => {
    // command line for the DB
    const sql = `
    INSERT INTO something VALUES
    (DEFAULT,
    '${something.firstName}')
    `
    const response : OkPacket = await dal.execute(sql);
    something.id = response.insertId;
    return something;

} 

// exporting 
export default {
    getFunction,
    postFunction,
}