import { cn } from "@/shared/utils/cn";

import Badge from "@/shared/components/atoms/Badge";
import IconButton from "@/shared/components/atoms/IconButton";

import {
  DEFAULT_COUNT,
  MAX_COUNT,
} from "./constants";

export default function NotificationButton({
  children,
  count = DEFAULT_COUNT,
  variant = "ghost",
  className,
  onClick,
}) {
  const displayCount =
    count > MAX_COUNT ? `${MAX_COUNT}+` : count;

  return (
    <div className="relative inline-flex">

      <IconButton
        variant={variant}
        onClick={onClick}
        className={className}
      >
        {children}
      </IconButton>

      {count > 0 && (
        <div className="absolute -right-1 -top-1">

          <Badge
            rounded
            size="sm"
            variant="danger"
          >
            {displayCount}
          </Badge>

        </div>
      )}

    </div>
  );
}