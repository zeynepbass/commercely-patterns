"use client";

import SearchInput from "@/shared/components/molecules/SearchInput";

export default function NavbarSearch({
  search,
  setSearch,
}) {
  return (
    <div className="w-full max-w-lg">
      <SearchInput
        value={search}
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        onClear={() => setSearch("")}
      />
    </div>
  );
}