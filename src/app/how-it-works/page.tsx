"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = {
  en: [
    { title: "1. Install", desc: "Mount the box, plug in power and valves. Done in minutes." },
    { title: "2. Set", desc: "Spin the dials to pick your watering schedule." },
    { title: "3. Relax", desc: "Let Sparrow water your garden — rain or shine." },
  ],
  ar: [
    { title: "الخطوة ١ – التثبيت", desc: "قم بتثبيت الجهاز وتوصيل الصمامات والكهرباء" },
    { title: "الخطوة ٢ – الإعداد", desc: "اضبط الجدول والموسم باستخدام الأزرار" },
    { title: "الخطوة ٣ – استرخِ", desc: "استمتع بري تلقائي يوميًا" },
  ],
};

export default function HowItWorksPage() {
  const { lang } = useLanguage();
  const list = steps[lang];

  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="p-6 text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          {lang === "en" ? "How It Works" : "كيفية العمل"}
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8">
          {list.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex-1 self-stretch"
            >
              <div
                className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full"
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
              >
                <h3 className="text-xl font-semibold mb-1 text-text-dark">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>

              {i < list.length - 1 && (
                <ArrowDown className="absolute top-[calc(100%+1rem)] left-1/2 -translate-x-1/2 text-primary md:hidden" />
              )}
              {i < list.length - 1 && (
                <ArrowRight className="absolute top-1/2 -translate-y-1/2 right-[-2rem] text-primary hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
