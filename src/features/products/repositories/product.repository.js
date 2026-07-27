import { productAdapter } from "../adapters/product.adapter";

export function createProductRepository(provider) {
  return {

    async getAll() {

      const response = await provider.getProducts();

      return response.products.map(productAdapter);

    },

    async getById(id) {

      const response = await provider.getProductById(id);

      return productAdapter(response);

    },

    async search(query) {

      const response = await provider.searchProducts(query);

      return response.products.map(productAdapter);

    },

    async getByCategory(category) {

      const response = await provider.getProductsByCategory(category);

      return response.products.map(productAdapter);

    },

  };
}