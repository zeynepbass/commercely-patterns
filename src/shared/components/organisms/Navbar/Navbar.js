"use client";

import NavbarActions from "./navbarActions";
import NavbarLogo from "./navbarLogo";
import NavbarMobileMenu from "./navbarMobileMenu";
import NavbarSearch from "./navbarSearch";
import useNavbar from "./hooks/useNavbar";

export default function Navbar() {
  const {
    search,
    setSearch,
    mobileOpen,
    setMobileOpen,
  } = useNavbar();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">


        <div className="lg:hidden">
          <NavbarMobileMenu
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        </div>


        <NavbarLogo />


        <div className="hidden flex-1 justify-center px-8 lg:flex">
          <NavbarSearch
            search={search}
            setSearch={setSearch}
          />
        </div>


        <NavbarActions />

      </div>
    </header>
  );
}