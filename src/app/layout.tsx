import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Sparrow – Professional Irrigation Control, Engineered in Egypt",
  description:
    "Premium irrigation controllers with Arabic support and competitive prices.",
  alternates: { canonical: "https://sparrowirrigation.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <LanguageProvider>
      <html lang="en" dir="ltr" className={`${inter.variable} ${arabic.variable}`}>
        <body className="bg-slate-950 text-white antialiased">
          {children}
          <Toaster richColors />
        </body>
      </html>
    </LanguageProvider>
  );
}