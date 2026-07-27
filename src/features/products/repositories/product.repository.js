export function createProductRepository(provider) {
    return {
      async getAll() {
        const response = await provider.getProducts();
  
        return response.products;
      },
  
      async getById(id) {
        const response = await provider.getProductById(id);
  
        return response;
      },
  
      async search(query) {
        const response = await provider.searchProducts(query);
  
        return response.products;
      },
  
      async getByCategory(category) {
        const response =
          await provider.getProductsByCategory(category);
  
        return response.products;
      },
    };
  }