// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import logic from '../Logic/logic';
import Urls from '../Utils/urls';


const router = express.Router();
router.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json("controller working");
})


router.get(Urls.getSomethingURL, async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await logic.getFunction() )
})

router.post(Urls.sendSomethingURL, async (request: Request, response: Response, next: NextFunction) => {
  const someData = request.body;
  response.status(201).json( await logic.postFunction(someData))
})

export default router;