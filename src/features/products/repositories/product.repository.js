import {
    getProducts,
    getProductById,
    searchProducts,
    getProductsByCategory,
  } from "../api/product.api";
  
  import { productAdapter } from "../adapters/product.adapter";
  
  const productRepository = {
    async getAll() {
      const response = await getProducts();
  
      return response.products.map(productAdapter);
    },
  
    async getById(id) {
      const response = await getProductById(id);
  
      return productAdapter(response);
    },
  
    async search(query) {
      const response = await searchProducts(query);
  
      return response.products.map(productAdapter);
    },
  
    async getByCategory(category) {
      const response = await getProductsByCategory(category);
  
      return response.products.map(productAdapter);
    },
  };
  
  export default productRepository;