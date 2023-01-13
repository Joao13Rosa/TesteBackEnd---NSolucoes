import AppDataSource from "../data-source";
import { Product } from "../entities/products.entity";
import { IProductUpdate } from "../interfaces/products";
import { AppError } from "../errors/appError";

const updateProductService = async (
  { name, category, quantity }: IProductUpdate,
  id: string
) => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  const findProduct = products.find((product) => product.id === id);

  const productsAleradyExists = products.find((product) => product.name === name);

  if (!findProduct) {
    throw new AppError("Product not found", 404);
  }

  if (findProduct.status === 'INACTIVE') {
    throw new AppError("Product is inactive", 401);
  }

  if (productsAleradyExists) {
    throw new AppError("Product already exists", 400);
  }

  await productRepository.update(id, {
    name: name ? name : findProduct.name,
    category: category ? category : findProduct.category,
    quantity: quantity ? quantity : findProduct.quantity,
    updated_at: new Date(),
  });

  const product = await productRepository.findOneBy({ id });

  return product;
};

export default updateProductService;