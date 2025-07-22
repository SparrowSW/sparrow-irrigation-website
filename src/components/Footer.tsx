"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="bg-primary-light mt-10 mx-2 mb-2 rounded-2xl shadow-lg"> {/* Changed to a light background and added shadow */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-text-light" dir={lang === 'ar' ? 'rtl' : 'ltr'}> {/* Text color set to dark, added dir */}
        <p>
          &copy; {new Date().getFullYear()} Sparrow Irrigation –{" "}
          {lang === "en" ? "All rights reserved" : "جميع الحقوق محفوظة"}
        </p>
        <div className="flex gap-4 mt-4 md:mt-0"> {/* Added margin for mobile spacing */}
          <Link href="#home" className="hover:text-white transition-colors"> {/* Added transition for smoother hover */}
            {lang === "en" ? "Home" : "الرئيسية"}
          </Link>
          <Link href="#products" className="hover:text-white transition-colors">
            {lang === "en" ? "Products" : "المنتجات"}
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            {lang === "en" ? "Contact" : "اتصل"}
          </Link>
        </div>
      </div>
    </footer>
  );
}