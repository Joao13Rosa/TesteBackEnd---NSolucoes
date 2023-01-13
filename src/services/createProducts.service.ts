import AppDataSource from "../data-source";
import { Product } from "../entities/products.entity";
import { IProductRequest } from "../interfaces/products";
import { AppError } from "../errors/appError";

const createProductService = async ({
  name, category, quantity,
}: IProductRequest) => {
  const productRepository = AppDataSource.getRepository(Product);

  const products = await productRepository.find();

  const productsAleradyExists = products.find((product) => product.name === name);

  if (productsAleradyExists) {
    throw new AppError("Product already exists", 400);
  }

  const product = new Product();
  product.name = name;
  product.status = 'ACTIVE';
  product.category = category;
  product.quantity = quantity;
  product.created_at = new Date();
  product.id;

  productRepository.create(product);
  await productRepository.save(product);

  return product;
};

export default createProductService;