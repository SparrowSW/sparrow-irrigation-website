"use client";

import { motion } from "framer-motion";
// Assuming GlassCard can adapt to light theme via className or is replaced.
// For demonstration, I'll use a plain div and apply styles that simulate a light-themed card.
// If GlassCard is truly a "glass" effect, it might not fit a pure light theme and should be replaced.
// import GlassCard from "@/components/ui/GlassCard"; // Keep if GlassCard is flexible
import { useLanguage } from "@/contexts/LanguageContext";

const reasons = {
  en: [
    "Locally engineered for Egyptian climate",
    "Arabic language support",
    "Professional-grade reliability",
    "Proven traditional design",
    "Local support & service",
    "30% cheaper than Hunter X-Core",
  ],
  ar: [
    "مُصمّم للمناخ المصري",
    "دعم اللغة العربية",
    "موثوقية احترافية",
    "تصميم تقليدي مجرب",
    "دعم محلي وسريع",
    "أقل بنسبة 30% من Hunter X-Core",
  ],
};

export default function WhySparrow() {
  const { lang } = useLanguage();
  const list = reasons[lang];

  return (
    <section className="bg-accent py-20 px-4 sm:px-6 lg:px-8"> {/* Changed background to white */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary"> {/* Text color set to primary */}
          {lang === "en" ? "Why Choose Sparrow?" : "لماذا سبارو؟"}
        </h2>
        <p className="text-lg text-gray-700 mb-12"> {/* Changed text-slate-300 to a darker gray for readability */}
          {lang === "en"
            ? "Premium quality at 30% less cost than Hunter X-Core"
            : "جودة عالية بسعر أقل بنسبة 30٪ من Hunter X-Core"}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Replaced GlassCard with a div styled to mimic the light theme cards
                  from ProductShowcase. */}
              <div
                className="p-6 bg-accent rounded-xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-text-dark text-lg font-medium" // Added text styles
                dir={lang === 'ar' ? 'rtl' : 'ltr'} // Add dir for RTL support on cards
              >
                {r}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}