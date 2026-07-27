export function productAdapter(product) {
  return {
    id: product.id,
    productName: product.title,
    thumbnail: product.thumbnail,
    description: product.description,
    category: product.category,
    price: product.price,
    rating: product.rating,
    stock: product.stock,
    brand: product.brand,
  };
}