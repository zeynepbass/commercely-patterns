"use client";

import ProductEmpty from "../components/ProductEmpty";
import ProductError from "../components/ProductError";
import ProductGrid from "../components/ProductGrid";
import ProductLoading from "../components/ProductLoading";
import useProducts from "../hooks/useProducts";

export default function ProductsPage() {
  const {
    products,
    loading,
    error,
  } = useProducts();

  if (loading) {
    return <ProductLoading />;
  }

  if (error) {
    return <ProductError message={error} />;
  }

  if (!products.length) {
    return <ProductEmpty />;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <ProductGrid products={products} />
    </section>
  );
}