import { cn } from "@/shared/utils/cn";

import {
  DEFAULT_ROUNDED,
  DEFAULT_SIZE,
  DEFAULT_VARIANT,
} from "./constants";

import { variants, sizes } from "./variants";

export default function Badge({
  children,
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  rounded = DEFAULT_ROUNDED,
  className,
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-medium transition-colors",
        variants[variant],
        sizes[size],
        rounded ? "rounded-full" : "rounded-md",
        className
      )}
    >
      {children}
    </span>
  );
}