"use client";

import ProductError from "../components/ProductError";
import ProductGrid from "../components/ProductGrid";
import ProductToolbar from "../components/ProductToolbar";
import ProductLoading from "../components/ProductLoading";
import useProducts from "../hooks/useProducts";

export default function ProductsPage() {
  const {
    products,
    view,
    setView,
    loading,
    search,
    setSearch,
    error,
    category,
    setCategory,
    sort,

    setSort,
  } = useProducts();

  if (loading) {
    return <ProductLoading />;
  }

  if (error) {
    return <ProductError message={error} />;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <ProductToolbar
        sort={sort}
        setSort={setSort}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
      />

      <ProductGrid products={products} view={view} />
    </section>
  );
}
