import AppDataSource from "../data-source";
import { Product } from "../entities/products.entity";

const listProductsService = async () => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = productRepository.find();

  return products;
};

export default listProductsService;