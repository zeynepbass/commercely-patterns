export default function ProductSort({
    sort,
    setSort,
  }) {
    return (
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="rounded-lg border border-zinc-300 px-3 py-2"
      >
        <option value="featured">
          Featured
        </option>
  
        <option value="priceAsc">
          Price ↑
        </option>
  
        <option value="priceDesc">
          Price ↓
        </option>
  
        <option value="rating">
          Rating
        </option>
  
        <option value="name">
          Name
        </option>
      </select>
    );
  }