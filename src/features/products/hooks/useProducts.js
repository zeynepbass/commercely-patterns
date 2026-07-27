"use client";

import { useEffect, useState } from "react";

import productRepository 
from "../containers/product.container";


export default function useProducts() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  async function fetchProducts() {

    try {

      setLoading(true);

      const data =
        await productRepository.getAll();


      setProducts(data);

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }

  }


  useEffect(() => {

    fetchProducts();

  }, []);



  return {
    products,
    loading,
    error,
    refresh: fetchProducts,
  };

}