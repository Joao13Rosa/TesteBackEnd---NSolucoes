import AppDataSource from "../data-source";
import { Product } from "../entities/products.entity";
import { AppError } from "../errors/appError";

const deleteProductService = async (id: string): Promise<any> => {
  const productRepository = AppDataSource.getRepository(Product);

  const findProduct = await productRepository.findOneBy({
    id,
  });

  if (!findProduct) {
    throw new AppError("Product not found", 404);
  }

  if (findProduct.status === 'INACTIVE') {
    throw new AppError("Product is inactive", 401);
  }

  await productRepository.update(id, {
    status: 'INACTIVE',
    deleted_at: new Date(),
  });

  const product = await productRepository.findOneBy({ id });

  return product!;
};

export default deleteProductService;