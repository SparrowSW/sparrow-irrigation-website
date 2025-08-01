import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "sonner";
import DynamicLayout from "@/components/DynamicLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Sparrow – Smarter Irrigation. Designed for You.",
  description:
    "Reliable, weather-resistant controllers — locally engineered in Egypt, made to last, and priced for real value.",
  alternates: { canonical: "https://sparrowirrigation.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <LanguageProvider>
      <html lang="en" dir="ltr" className={`${inter.variable} ${arabic.variable}`}>
        <body className="bg-slate-950 text-white antialiased">
          <DynamicLayout />
          {children}
          <Toaster richColors />
        </body>
      </html>
    </LanguageProvider>
  );
}