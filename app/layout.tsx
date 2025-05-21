import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import WhatsappButton from "@/components/ui/whatsapp-button";

const open = Open_Sans({
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open",
});
export const metadata: Metadata = {
  title: "Sümeyye Başar | Avukatlık & Arabuluculuk Hizmetleri | Ankara",
  description:
    "Sümeyye Başar Hukuk Danışmanlık ve Arabuluculuk, Ankara'da uzman avukatlık ve arabuluculuk hizmetleri sunar. Güvenilir, çözüm odaklı ve etik ilkelere bağlı hukuki destek için bizimle iletişime geçin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${open.className} antialiased overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
