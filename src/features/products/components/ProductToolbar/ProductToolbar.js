import ProductCategoryFilter from "./ProductCategoryFilter";
import ProductSearch from "./ProductSearch";
import ProductSort from "./ProductSort";
import ProductViewToggle from "./ProductViewToggle";

export default function ProductToolbar() {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between dark:border-zinc-800 dark:bg-zinc-900">

      <ProductSearch />

      <div className="flex flex-wrap items-center gap-3">
        <ProductCategoryFilter />
        <ProductSort

sort={sort}

setSort={setSort}

/>
        <ProductViewToggle />
      </div>

    </div>
  );
}