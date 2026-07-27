const productSortStrategies = {
    featured(products) {
      return [...products];
    },
  
    priceAsc(products) {
      return [...products].sort((a, b) => a.price - b.price);
    },
  
    priceDesc(products) {
      return [...products].sort((a, b) => b.price - a.price);
    },
  
    rating(products) {
      return [...products].sort((a, b) => b.rating - a.rating);
    },
  
    name(products) {
      return [...products].sort((a, b) =>
        a.productName.localeCompare(b.productName)
      );
    },
  };
  
  export default productSortStrategies;