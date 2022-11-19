// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import controller from "./Routes/controller"
import config from "./Utils/config";


const server = express();
const currentPort = config.port;
server.use(cors());
server.use(express.json());
server.use("/", controller)
server.use("*", ErrorHandler);

server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )