import apiClient from "@/shared/api";


export async function getProducts() {

  const response = await apiClient.get("/products");

  return response.data;

}


export async function getProductById(id) {

  const response = await apiClient.get(`/products/${id}`);

  return response.data;

}


export async function searchProducts(query) {

  const response = await apiClient.get(
    `/products/search?q=${query}`
  );

  return response.data;

}


export async function getProductsByCategory(category) {

  const response = await apiClient.get(
    `/products/category/${category}`
  );

  return response.data;

}