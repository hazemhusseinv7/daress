import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrelineScriptWrapper from "@/components/PrelineScriptWrapper";

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi-arabic",
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "دارس",
  description:
    "مركز بحثيُّ له مجموعة من الإصدارات المعرفية والتاريخية المتعلقة بتراجم الأعلام يطمح للريادة في الصناعة المعرفية المبتكرة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${notoKufiArabic.variable} font-noto-kufi-arabic antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
      <PrelineScriptWrapper />
    </html>
  );
}
