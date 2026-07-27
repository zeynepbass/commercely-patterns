"use client";

import { useEffect, useMemo, useState } from "react";

import productRepository from "../product.container";
import productSortStrategies from "../strategies";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("featured");

  async function fetchProducts() {
    try {
      setLoading(true);
      setError(null);

      const data = await productRepository.getAll();

      setProducts(data);
    } catch (error) {
      setError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((product) =>
        product.productName.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    const strategy =
      productSortStrategies[sort] || productSortStrategies.featured;

    return strategy(result);
  }, [products, search, category, sort]);

  return {
    products: filteredProducts,
    loading,
    error,
    refresh: fetchProducts,
    search,
    setSearch,
    view, setView,
    category,
    setCategory,
    sort,
    setSort,
  };
}
