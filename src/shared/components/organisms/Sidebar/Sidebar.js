export default function Sidebar() {
    return (
      <aside className="w-64 border-r border-zinc-200 bg-white p-6">
        <nav>
          <ul className="space-y-4">
            <li>Dashboard</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Orders</li>
            <li>Profile</li>
          </ul>
        </nav>
      </aside>
    );
  }