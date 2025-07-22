"use client";

import { motion } from "framer-motion";
// Assuming GlassCard can adapt to light theme via className or is replaced
// If GlassCard is fixed to a dark/glassy aesthetic, you might need to create a new 'LightCard' component
// For this redesign, I'll assume GlassCard can be styled to look like a light-themed card.
// If not, simply replace 'GlassCard' with a standard 'div' and apply the styles directly.
// import GlassCard from "@/components/ui/GlassCard"; // Keep if GlassCard is flexible
// For demonstration, I'll use a plain div and apply styles that simulate a light-themed card.
// If GlassCard is truly a "glass" effect, it might not fit a pure light theme.

// Dummy context for demonstration, assuming it's already set up correctly in a real app
// import { useLanguage } from "@/contexts/LanguageContext";
const useLanguage = () => ({ lang: 'en' as 'en' | 'ar' });

const plans = {
  en: [
    { name: "Sparrow Basic", price: "EGP 1,200", stations: "2-station" },
    { name: "Sparrow Pro", price: "EGP 1,800", stations: "4-station", popular: true },
    { name: "Sparrow Elite", price: "EGP 2,400", stations: "8-station" },
  ],
  ar: [
    { name: "سبارو بيسيك", price: "١٢٠٠ جنيه", stations: "محطتان" },
    { name: "سبارو برو", price: "١٨٠٠ جنيه", stations: "أربع محطات", popular: true },
    { name: "سبارو إيليت", price: "٢٤٠٠ جنيه", stations: "ثماني محطات" },
  ],
};

export default function PricingCards() {
  const { lang } = useLanguage();
  const list = plans[lang];

  return (
    <section className="bg-accent py-20 px-4 sm:px-6 lg:px-8"> {/* Changed background to white */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"> {/* Text color set to primary */}
          {lang === "en" ? "Choose Your Model" : "اختر جهازك"}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {list.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Replaced GlassCard with a div styled to mimic the light theme cards
                  from ProductShowcase. If GlassCard can be styled, use that instead. */}
              <div
                className={`relative p-6 rounded-xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  p.popular ? 'bg-blue-50 border-blue-300' : 'bg-white' // Slightly different background for popular card
                }`}
                dir={lang === 'ar' ? 'rtl' : 'ltr'} // Add dir for RTL support on cards
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm rounded-full shadow-lg"> {/* Added shadow for more pop */}
                    {lang === "en" ? "Most Popular" : "الأكثر مبيعًا"}
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2 text-text-dark"> {/* Text color for heading */}
                  {p.name}
                </h3>
                <p className="text-3xl font-extrabold text-success mb-2"> {/* Used text-success for prices for emphasis */}
                  {p.price}
                </p>
                <p className="text-gray-600"> {/* Changed text-slate-300 to a darker gray for readability on light background */}
                  {p.stations}
                </p>
                {/* Add a call to action button for each card, similar to a feature card */}
                <button className="mt-6 w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  {lang === "en" ? "Select Model" : "اختر الجهاز"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}