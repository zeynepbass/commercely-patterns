export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 h-16 border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <h1 className="text-xl font-bold">Commercely</h1>
  
          <div className="flex items-center gap-4">
            Search
            Theme
            Profile
          </div>
        </div>
      </header>
    );
  }