import productProvider from "../../providers/product.provider";

import {
  createProductRepository,
} from "./repositories/product.repository";


const productRepository =
  createProductRepository(productProvider);


export default productRepository;