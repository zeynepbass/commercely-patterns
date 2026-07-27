import { Search, X } from "lucide-react";

import Input from "@/shared/components/atoms/Input";
import IconButton from "@/shared/components/atoms/IconButton";
import Spinner from "@/shared/components/atoms/Spinner";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  loading = false,
  onClear,
  className,
}) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      leftIcon={<Search size={18} />}
      rightIcon={
        loading ? (
          <Spinner size="sm" />
        ) : (
          value && (
            <IconButton
              variant="ghost"
              size="sm"
              onClick={onClear}
            >
              <X size={16} />
            </IconButton>
          )
        )
      }
    />
  );
}