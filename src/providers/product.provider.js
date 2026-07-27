import * as productApi from "../features/products/api/product.api";

const productProvider = {
  getProducts: productApi.getProducts,

  getProductById: productApi.getProductById,

  searchProducts: productApi.searchProducts,

  getProductsByCategory:
    productApi.getProductsByCategory,
};

export default productProvider;