import { cn } from "@/shared/utils/cn";
import {
  DEFAULT_PLACEHOLDER,
  DEFAULT_TYPE,
  DEFAULT_VARIANT,
} from "./inputConstants";
import { sizes, variants } from "./inputVariants";

export default function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  className,
  size = "md",
  variant = DEFAULT_VARIANT,
  type = DEFAULT_TYPE,
  placeholder = DEFAULT_PLACEHOLDER,
  disabled = false,
  fullWidth = false,
  required = false,
  ...props
}) {
  const currentVariant = error ? "error" : variant;

  return (
    <div className={cn("flex flex-col gap-1", fullWidth && "w-full")}>
      {label && (
        <label className="text-sm font-medium text-zinc-700">
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3 text-zinc-400">
            {leftIcon}
          </span>
        )}

        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "w-full rounded-lg outline-none transition-all",
            variants[currentVariant],
            sizes[size],
            leftIcon && "pl-10",
            rightIcon && "pr-10",
            disabled &&
              "cursor-not-allowed bg-zinc-100 opacity-60",
            className
          )}
          {...props}
        />

        {rightIcon && (
          <span className="absolute right-3 text-zinc-400">
            {rightIcon}
          </span>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}