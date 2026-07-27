import { cn } from "@/shared/utils/cn";
import {
  DEFAULT_FULLSCREEN,
  DEFAULT_SIZE,
} from "./spinnerConstants";
import { sizes } from "./spinnerVariants";

export default function Spinner({
  size = DEFAULT_SIZE,
  fullScreen = DEFAULT_FULLSCREEN,
  className,
}) {
  const spinner = (
    <svg
      className={cn(
        "animate-spin text-blue-600",
        sizes[size],
        className
      )}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        opacity=".2"
      />

      <path
        fill="currentColor"
        d="M22 12a10 10 0 00-10-10v4a6 6 0 016 6h4z"
      />
    </svg>
  );

  if (fullScreen) {
    return (
      <div className="flex h-screen items-center justify-center">
        {spinner}
      </div>
    );
  }

  return spinner;
}