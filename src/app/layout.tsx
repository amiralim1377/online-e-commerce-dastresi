import Header from "@/components/Header";
import { shabnam } from "./font/font";
import "./globals.css";
import Footer from "@/components/Footer";
import FooterContact from "@/components/FooterContact";
import FooterCopyright from "@/components/FooterCopyright";

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

        <FooterContact />
        <Footer />
        <FooterCopyright />
      </body>
    </html>
  );
}
