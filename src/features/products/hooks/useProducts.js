"use client";

import { useCallback, useEffect, useState } from "react";

import productRepository from "../repositories/product.repository";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);

      setError(null);

      const data = await productRepository.getAll();

      setProducts(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    loading,
    error,
    refresh: fetchProducts,
  };
}