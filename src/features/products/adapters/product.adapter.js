export function productAdapter(product) {
    return {
      id: product.id,
  
      productName: product.title,
  
      description: product.description,
  
      image: product.thumbnail,
  
      images: product.images,
  
      price: product.price,
  
      rating: product.rating,
  
      stock: product.stock,
  
      brand: product.brand,
  
      category: product.category,
    };
  }