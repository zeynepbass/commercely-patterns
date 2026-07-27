import Image from "next/image";
import { cn } from "@/shared/utils/cn";

import { DEFAULT_ALT, DEFAULT_SIZE } from "./constants";
import { sizes } from "./variants";

export default function Avatar({
  src,
  alt = DEFAULT_ALT,
  fallback,
  size = DEFAULT_SIZE,
  className,
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-zinc-200",
        "flex items-center justify-center",
        sizes[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 40px, 48px"
        />
      ) : (
        <span className="text-sm font-semibold uppercase text-zinc-600">
          {fallback || "?"}
        </span>
      )}
    </div>
  );
}