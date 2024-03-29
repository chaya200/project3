// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql" 
import { OkPacket } from "mysql";
import Admin from "../Models/Admin";
import Vacation from "../Models/Vacation";

var hash = require('object-hash');

// functions( async / await ) for getting data from DB
const getAllAdmins = async (): Promise<Admin[]> => {
    // command line for the DB
    const sql = `
        SELECT * FROM admin`;
    // a promise function that connects us to the database with the command line
    const admin = await dal.execute(sql);
    return admin;
}

const addAdmin = async (newAdmin: Admin): Promise<Admin> => {
    // command line for the DB
    const sql = `
    INSERT INTO admin VALUES 
    (DEFAULT, 
    '${hash(newAdmin.admin_name)}',
    '${hash(newAdmin.admin_code)}'
    );`;
    const response : OkPacket = await dal.execute(sql);
    newAdmin.id = response.insertId;
    return newAdmin;

} 

const deleteAdmin = async (id: number): Promise<void> => {
    const sql = `
    DELETE FROM admin WHERE id=${id}`
    const response = await dal.execute(sql);
    
}

const updateAdmin = async (admin: Admin): Promise<Admin> => {
    const sql = `
    UPDATE admin 
    SET 
    admin_name='${hash(admin.admin_name)}',
    admin_code='${hash(admin.admin_code)}',
    WHERE id = ${admin.id}
    `;
    await dal.execute(sql);
    return admin;
}
// functions( async / await ) for getting data from DB
const getAllVacations = async (): Promise<Vacation[]> => {
    // command line for the DB
    const sql = `
        SELECT * FROM vacation`;
    // a promise function that connects us to the database with the command line
    const vacation = await dal.execute(sql);
    return vacation;
}

const getSingleVacation = async (id:number): Promise<Vacation> => {
    // command line for the DB
    const sql = `
        SELECT * FROM vacation
        WHERE vacation.id=${id};
    `;
    // a promise function that connects us to the database with the command line
    const something = await dal.execute(sql);
    return something;
}

const addVacation = async (newVacation: Vacation): Promise<Vacation> => {
    // command line for the DB
    const sql = `
    INSERT INTO vacation VALUES 
    (DEFAULT, 
    '${newVacation.description}',
    '${newVacation.destination}',
    ${newVacation.price},
    NULL,
    '${newVacation.start_date}',
    '${newVacation.end_date}',
    NULL);`;
    const response : OkPacket = await dal.execute(sql);
    newVacation.id = response.insertId;
    return newVacation;
//LOAD_FILE('${newVacation.vacation_img}')
} 

const deleteVacation = async (id: number): Promise<void> => {
    const sql = `
    DELETE FROM vacation WHERE id=${id}`
    const response = await dal.execute(sql);
    
}

const updateVacation = async (vacation: Vacation): Promise<Vacation> => {
    const sql = `
    UPDATE vacation 
    SET description='${vacation.description}',
    destination='${vacation.destination}',
    price=${vacation.price},
    vacation_img=NULL,
    start_date='${vacation.start_date}',
    end_date='${vacation.end_date}',
    amountOfFollowers=NULL
    WHERE id = ${vacation.id}
    `;
    await dal.execute(sql);
    return vacation;
}


export default {
    getAllAdmins,
    addAdmin,
    deleteAdmin,
    updateAdmin,
    //vacations
    getAllVacations,
    getSingleVacation,
    addVacation,
    deleteVacation,
    updateVacation

}