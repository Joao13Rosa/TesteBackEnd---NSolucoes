import { Request, Response } from "express";
import deleteProductService from "../services/deleteProducts.service";

const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteProduct = await deleteProductService(id);

  return res.status(204).json({ message: 'Product Deleted' });
};

export default deleteProductController;