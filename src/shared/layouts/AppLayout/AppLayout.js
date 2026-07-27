import Header from "@/shared/components/organisms/Navbar/Navbar";
import Sidebar from "@/shared/components/organisms/Sidebar/Sidebar";
import Footer from "@/shared/components/organisms/Footer";

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50">
      <Header />

      <div className="mx-auto flex w-full max-w-7xl flex-1">
        <Sidebar />

        <main className="flex-1 p-6">{children}</main>
      </div>

      <Footer />
    </div>
  );
}