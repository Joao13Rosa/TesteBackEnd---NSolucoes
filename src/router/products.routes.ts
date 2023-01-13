import { Router } from "express";

import createProductController from "../controllers/createProducts.controller";
import deleteProductController from "../controllers/deleteProducts.controller";
import getProductController from "../controllers/getProducts.controller";
import updateProductController from "../controllers/updateProducts.controller";

const routes = Router();

routes.post("", createProductController);
routes.get("", getProductController);
routes.patch("/:id",updateProductController);
routes.delete("/:id", deleteProductController);

export default routes;