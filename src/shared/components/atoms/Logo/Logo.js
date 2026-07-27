import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { cn } from "@/shared/utils/cn";

import {
  DEFAULT_HREF,
  DEFAULT_SHOW_TEXT,
  DEFAULT_SIZE,
} from "./logoConstants";

import { sizes } from "./logoVariants";

export default function Logo({
  href = DEFAULT_HREF,
  showText = DEFAULT_SHOW_TEXT,
  size = DEFAULT_SIZE,
  className,
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2",
        className
      )}
    >
      <ShoppingBag
        className={sizes[size].icon}
      />

      {showText && (
        <span
          className={cn(
            "font-bold",
            sizes[size].text
          )}
        >
          E-Commerce
        </span>
      )}
    </Link>
  );
}