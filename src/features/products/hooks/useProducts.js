"use client";

import { useCallback, useEffect, useState } from "react";

import productRepository from "../repositories/product.repository";
import { useMemo } from "react";

import productSortStrategies from "../strategies";
export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("featured");
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
  const sortedProducts = useMemo(() => {
    const strategy =
      productSortStrategies[sort] ||
      productSortStrategies.featured;
  
    return strategy(products);
  }, [products, sort]);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products: sortedProducts,
  
    loading,
  
    error,
  
    sort,
  
    setSort,
  
    refresh: fetchProducts,
  };
}