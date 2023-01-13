import { Request, Response } from "express";
import { IProductUpdate } from "../interfaces/products";
import updateProductService from "../services/updateProducts.service";

const updateProductController = async (req: Request, res: Response) => {
  const {name, category, quantity}: IProductUpdate = req.body;

  const id: string = req.params.id;

  const updatedProduct = await updateProductService({name, category, quantity}, id);

  return res.status(200).json(updatedProduct);
};

export default updateProductController;