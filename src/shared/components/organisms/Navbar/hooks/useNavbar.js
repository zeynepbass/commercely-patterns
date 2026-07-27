"use client";

import { useState } from "react";

export default function useNavbar() {
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  return {
    search,
    setSearch,
    mobileOpen,
    setMobileOpen,
  };
}