// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import logic from '../Logic/logic';
import Urls from '../Utils/urls';

// generic router 
const router = express.Router();

// all products
router.get("/product", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await logic.getProducts());
})

// add product
router.post(Urls.addProductURL, async (request: Request, response: Response, next: NextFunction) => {
  const product = request.body;
  response.status(201).json( await logic.addProduct(product));
})

// delete product
router.delete(Urls.deleteProductURL, async (request: Request, response: Response, next: NextFunction) => {
  const id = +request.params.id;
  response.status(204).json( await logic.deleteProduct(id))
})

// update product
router.put(Urls.updateProductURL, async (request: Request, response: Response, next: NextFunction) => {
  const product = request.body;
  response.status(201).json( await logic.updateProduct(product));
})

//all category
router.get(Urls.getCategoriesURL, async (request: Request, response: Response, next: NextFunction) => {
  const categories = request.body;
  response.status(201).json( await logic.getCategories());
})

export default router;