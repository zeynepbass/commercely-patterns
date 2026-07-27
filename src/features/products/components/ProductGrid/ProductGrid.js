import clsx from "clsx";

import ProductCard from "../ProductCard";

export default function ProductGrid({ products, view }) {
  return (
    <div
      className={clsx(
        view === "grid"
          ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          : "grid grid-cols-2 gap-4 justify-center items-center"
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} view={view} />
      ))}
    </div>
  );
}
