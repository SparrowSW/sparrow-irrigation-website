import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansArabic = Noto_Sans_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Sparrow - Professional Irrigation Controllers for Egyptian Gardens",
  description: "Locally engineered irrigation controllers designed for Egyptian villas and gardens. Reliable, Arabic-supported, and built for our climate.",
  keywords: "irrigation controller, Egypt, gardening, villa irrigation, Sparrow",
  authors: [{ name: "Sparrow Irrigation" }],
  openGraph: {
    title: "Sparrow Irrigation Controllers",
    description: "Professional irrigation solutions for Egyptian gardens",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}