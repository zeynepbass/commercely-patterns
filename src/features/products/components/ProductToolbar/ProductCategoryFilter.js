export default function ProductCategoryFilter() {
    return (
      <select className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900">
        <option>All Categories</option>
        <option>Smartphones</option>
        <option>Laptops</option>
        <option>Fragrances</option>
      </select>
    );
  }