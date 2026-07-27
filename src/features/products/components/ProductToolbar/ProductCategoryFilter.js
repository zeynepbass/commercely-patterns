export const categories = [
  {
    label: "All Categories",
    value: "all",
  },
  {
    label: "Beauty",
    value: "beauty",
  },
  {
    label: "Fragrances",
    value: "fragrances",
  },
  {
    label: "Furniture",
    value: "furniture",
  },
  {
    label: "Groceries",
    value: "groceries",
  },
];
export default function ProductCategory({
  category,
  setCategory,
}) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="
        h-10
        rounded-lg
        border
        border-zinc-300
        bg-white
        px-3
        text-sm
        outline-none
        transition
        focus:border-zinc-900
        dark:border-zinc-700
        dark:bg-zinc-900
        dark:text-white
      "
    >
      {categories.map((item) => (
        <option
          key={item.value}
          value={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );
}