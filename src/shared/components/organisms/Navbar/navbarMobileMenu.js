import { Menu, X } from "lucide-react";

import IconButton from "@/shared/components/atoms/IconButton";

export default function NavbarMobileMenu({
  mobileOpen,
  setMobileOpen,
}) {
  return (
    <IconButton
      variant="ghost"
      onClick={() => setMobileOpen(!mobileOpen)}
    >
      {mobileOpen ? <X size={22} /> : <Menu size={22} />}
    </IconButton>
  );
}