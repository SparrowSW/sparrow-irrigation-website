"use client";

import { motion } from "framer-motion";
// Assuming GlassCard can adapt to light theme via className or is replaced.
// For demonstration, I'll use a plain div and apply styles that simulate a light-themed card.
// If GlassCard is truly a "glass" effect, it might not fit a pure light theme and should be replaced.
// import GlassCard from "@/components/ui/GlassCard"; // Keep if GlassCard is flexible
import { ArrowDown } from "lucide-react";
// Dummy context for demonstration, assuming it's already set up correctly in a real app
// import { useLanguage } from "@/contexts/LanguageContext";
const useLanguage = () => ({ lang: 'en' as 'en' | 'ar' });

const steps = {
  en: [
    { title: "Install", desc: "Connect to water valves & power" },
    { title: "Set", desc: "Adjust stations & seasonal dial" },
    { title: "Relax", desc: "Automatic watering on schedule" },
  ],
  ar: [
    { title: "ثبت الجهاز", desc: "قم بتوصيل الصمامات والكهرباء" },
    { title: "اضبط البرنامج", desc: "حدد المحطات والضبط الموسمي" },
    { title: "استرخِ", desc: "يتولى الجهاز الري تلقائيًا" },
  ],
};

export default function HowItWorks() {
  const { lang } = useLanguage();
  const list = steps[lang];

  return (
    <section className="bg-accent py-20 px-4 sm:px-6 lg:px-8"> {/* Changed background to accent */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary"> {/* Text color set to primary */}
          {lang === "en" ? "How It Works" : "كيف يعمل"}
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          {list.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex-1"
            >
              {/* Replaced GlassCard with a div styled to mimic the light theme cards
                  from ProductShowcase. */}
              <div
                className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                dir={lang === 'ar' ? 'rtl' : 'ltr'} // Add dir for RTL support on cards
              >
                {/* Number styling - vibrant primary color */}
                <div className="text-3xl font-bold text-primary mb-2">0{i + 1}</div>
                <h3 className="text-xl font-semibold mb-1 text-text-dark">{s.title}</h3> {/* Dark text for title */}
                <p className="text-gray-600">{s.desc}</p> {/* Darker gray for description readability */}
              </div>

              {/* Arrow Icon - changed color to text-primary for consistency */}
              {i < list.length - 1 && (
                <ArrowDown className="absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 text-primary hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}