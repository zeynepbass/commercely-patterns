import clsx from "clsx";
import { Grid2X2, List } from "lucide-react";

import IconButton from "@/shared/components/atoms/IconButton";

export default function ProductViewToggle({
  view,
  setView,
}) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-zinc-200 p-1 dark:border-zinc-700">

      <IconButton
        variant={view === "grid" ? "default" : "ghost"}
        onClick={() => setView("grid")}
        aria-label="Grid View"
      >
        <Grid2X2 size={18} />
      </IconButton>

      <IconButton
        variant={view === "list" ? "default" : "ghost"}
        onClick={() => setView("list")}
        aria-label="List View"
      >
        <List size={18} />
      </IconButton>

    </div>
  );
}