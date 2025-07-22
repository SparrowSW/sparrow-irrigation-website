"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Assuming GlassCard can adapt to light theme via className or is replaced.
// For demonstration, I'll use a plain div and apply styles that simulate a light-themed card.
// If GlassCard is truly a "glass" effect, it might not fit a pure light theme and should be replaced.
// import GlassCard from "@/components/ui/GlassCard"; // Keep if GlassCard is flexible
import { ChevronLeft, ChevronRight } from "lucide-react";
// Dummy context for demonstration, assuming it's already set up correctly in a real app
// import { useLanguage } from "@/contexts/LanguageContext";
const useLanguage = () => ({ lang: 'en' as 'en' | 'ar' });


const testimonials = {
  en: [
    {
      name: "Ahmed Hassan, Cairo",
      text: "Perfect for my home garden. Easy to set and forget.",
    },
    {
      name: "Fatima Al-Rashid, Alexandria",
      text: "Beats imported brands on price and reliability.",
    },
    {
      name: "Mohamed Farouk, Giza",
      text: "Use it on all my landscaping projects. Clients love it.",
    },
  ],
  ar: [
    {
      name: "أحمد حسن، القاهرة",
      text: "مثالي لحديقة منزلي، سهل الضبط والتشغيل.",
    },
    {
      name: "فاطمة الرشيد، الإسكندرية",
      text: "يتفوّق على الماركات المستوردة في السعر والجودة.",
    },
    {
      name: "محمد فاروق، الجيزة",
      text: "أستخدمه في كل مشاريعي، العملاء راضون تمامًا.",
    },
  ],
};

export default function Testimonials() {
  const { lang } = useLanguage();
  const list = testimonials[lang];
  const [idx, setIdx] = useState(0);

  const handlePrev = () => {
    setIdx((i) => (i - 1 + list.length) % list.length);
  };

  const handleNext = () => {
    setIdx((i) => (i + 1) % list.length);
  };

  return (
    <section className="bg-accent py-20 px-4 sm:px-6 lg:px-8"> {/* Changed background to accent */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"> {/* Text color set to primary */}
          {lang === "en" ? "What Garden Owners Say" : "آراء أصحاب الحدائق"}
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }} // Adjust initial x for RTL
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }} // Adjust exit x for RTL
              transition={{ duration: 0.4 }}
              className="w-full" // Ensure motion.div takes full width for proper alignment
            >
              {/* Replaced GlassCard with a div styled to mimic the light theme cards */}
              <div
                className="p-8 text-center bg-white rounded-xl border border-gray-200 shadow-lg" // Light card styling
                dir={lang === 'ar' ? 'rtl' : 'ltr'} // Set direction for testimonial text
              >
                <p className="text-lg mb-4 text-text-dark"> {/* Dark text for testimonial quote */}
                    <span className="text-2xl font-bold text-primary mr-1">“</span>
                    {list[idx].text}
                    <span className="text-2xl font-bold text-primary ml-1">”</span>
                </p>
                <span className="text-primary font-semibold text-lg">{list[idx].name}</span> {/* Primary color for name */}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 bg-white rounded-full shadow-md text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors hidden md:block" // Light theme button style
            aria-label={lang === 'en' ? 'Previous Testimonial' : 'الشهادة السابقة'}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 bg-white rounded-full shadow-md text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors hidden md:block" // Light theme button style
            aria-label={lang === 'en' ? 'Next Testimonial' : 'الشهادة التالية'}
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile Navigation Dots (optional, but good for UX) */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {list.map((_, dotIndex) => (
              <button
                key={dotIndex}
                className={`w-3 h-3 rounded-full ${
                  dotIndex === idx ? 'bg-primary' : 'bg-gray-300'
                } transition-colors`}
                onClick={() => setIdx(dotIndex)}
                aria-label={lang === 'en' ? `Go to testimonial ${dotIndex + 1}` : `انتقل إلى الشهادة ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}