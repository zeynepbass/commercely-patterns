import { cn } from "@/shared/utils/cn";
import { variants, sizes } from "./buttonVariants";
import {
  DEFAULT_SIZE,
  DEFAULT_TYPE,
  DEFAULT_VARIANT,
} from "./constants";
import Spinner from "../Spinner";

export default function Button({
  children,
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  type = DEFAULT_TYPE,
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  onClick,
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        (disabled || loading) && "cursor-not-allowed opacity-50",
        className
      )}
    >
      {loading ? (
        <Spinner size="sm"/>
      ) : (
        <>
          {leftIcon}

          {children}

          {rightIcon}
        </>
      )}
    </button>
  );
}