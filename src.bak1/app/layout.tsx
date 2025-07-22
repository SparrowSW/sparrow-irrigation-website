import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import AosInitializer from "@/components/AosInitializer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Sparrow Irrigation",
  description: "Smart Irrigation Solutions for Residential and Professional Consumers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`light ${inter.variable} ${montserrat.variable}`}>
        <Navbar />
        {children}
        <AosInitializer />
      </body>
    </html>
  );
}