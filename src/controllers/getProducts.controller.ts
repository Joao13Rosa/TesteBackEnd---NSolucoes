import { Request, Response } from "express";
import listProductsService from "../services/getProducts.service";

const getProductController = async (req: Request, res: Response) => {
  const users = await listProductsService();

  return res.status(200).json(users);
};

export default getProductController;