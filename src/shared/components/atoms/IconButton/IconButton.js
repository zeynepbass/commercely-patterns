import clsx from "clsx";

import { variants } from "./iconConstants";
import { sizes } from "./iconVariants";


export default function IconButton({
  children,
  variant = "default",
  size = "md",
  className,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={clsx(
        "inline-flex items-center justify-center rounded-lg transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}