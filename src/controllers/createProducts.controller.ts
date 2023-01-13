import { Request, Response } from "express";
import createProductService from "../services/createProducts.service";

const createProductController = async (req: Request, res: Response) => {
  const { name, category, quantity } = req.body;

  const newProduct = await createProductService({ name, category, quantity });

  return res.status(201).json(newProduct);
};

export default createProductController;