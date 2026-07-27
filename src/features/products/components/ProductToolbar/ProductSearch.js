import SearchInput from "@/shared/components/molecules/SearchInput";

export default function ProductSearch() {
  return (
    <div className="w-full md:max-w-sm">
      <SearchInput
        placeholder="Search products..."
      />
    </div>
  );
}