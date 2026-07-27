import Button from "@/shared/components/atoms/Buton";
import { AlertTriangle } from "lucide-react";

export default function ProductError({
  message = "Something went wrong.",
  onRetry,
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 p-10 text-center dark:border-red-900 dark:bg-red-950/20">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
        <AlertTriangle className="h-8 w-8 text-red-600 dark:text-red-400" />
      </div>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
        Failed to load products
      </h2>

      <p className="mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
        {message}
      </p>

      {onRetry && (
        <Button
          className="mt-6"
          onClick={onRetry}
        >
          Try Again
        </Button>
      )}
    </div>
  );
}