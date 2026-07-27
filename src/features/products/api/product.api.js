const BASE_URL = "https://dummyjson.com/products";

export async function getProducts() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Products could not be fetched.");
  }

  return response.json();
}

export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Product could not be fetched.");
  }

  return response.json();
}
export async function searchProducts(query) {
    const response = await fetch(
      `${BASE_URL}/search?q=${encodeURIComponent(query)}`
    );
  
    if (!response.ok) {
      throw new Error("Search failed.");
    }
  
    return response.json();
  }
  export async function getProductsByCategory(category) {
    const response = await fetch(
      `${BASE_URL}/category/${category}`
    );
  
    if (!response.ok) {
      throw new Error("Category products could not be fetched.");
    }
  
    return response.json();
  }