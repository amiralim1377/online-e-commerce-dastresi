import Header from "@/components/Header/Header";
import { shabnam } from "./font/font";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${shabnam.variable}   min-h-screen flex flex-col`}>
        <Header />

        <main className="flex-1 bg-site-bg">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
