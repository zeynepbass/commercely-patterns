import { Grid2X2, List } from "lucide-react";

import IconButton from "@/shared/components/atoms/IconButton";

export default function ProductViewToggle() {
  return (
    <div className="flex items-center gap-2">

      <IconButton variant="ghost">
        <Grid2X2 size={18} />
      </IconButton>

      <IconButton variant="ghost">
        <List size={18} />
      </IconButton>

    </div>
  );
}