// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import router from "./Routes/controller";
import controller from "./Routes/controller"
import config from "./Utils/config";
import sql_init from "./Utils/init";


const server = express();
sql_init();
const currentPort = config.port;
server.use(cors());
server.use(express.json());
server.use("/shop", router)
server.use("*", ErrorHandler);

server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )