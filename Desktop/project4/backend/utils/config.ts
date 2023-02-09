import  dotenv  from 'dotenv';
// const userName="chayushh";
// const userPass="20210mc";
const MONGO_USERNAME=process.env.MONGO_USERNAME||"";
const MONGO_PASSWORD=process.env.MONGO_PASSWORD||"";
// const MONGO_URL=`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.ps8fwc8.mongodb.net/?retryWrites=true&w=majority`;
const MONGO_URL="mongodb://127.0.0.1:27017";
const SERVER_PORT=process.env.SERVER_PORT? Number(process.env.SERVER_PORT): 1337;
dotenv.config()   

export const config = {
    mongo:{
        url: MONGO_URL
    },
    server:{
        port: SERVER_PORT
    }
}