import "./globals.css";
import AppLayout from "@/shared/layouts/AppLayout/AppLayout";

export const metadata = {
  title: "Commercely",
  description: "Modern E-Commerce Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}