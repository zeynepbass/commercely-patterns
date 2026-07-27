import { Search } from "lucide-react";

import Input from "@/shared/components/atoms/Input";

export default function ProductSearch({
  search,
  setSearch,
}) {
  return (
    <div className="w-full md:max-w-sm">
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        leftIcon={<Search size={18} />}
      />
    </div>
  );
}