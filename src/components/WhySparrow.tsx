"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const reasons = {
  en: [
    { text: "Premium quality, local price", icon: "/icons/affordable-and-long-lasting.png" },
    { text: "Built for Egypt’s weather & water needs", icon: "/icons/weatherproof-design.png" },
    { text: "Arabic-first interface", icon: "/icons/arabic-and-english-support.png" },
    { text: "Trusted rotating dial", icon: "/icons/simple-rotating-dial.png" },
    { text: "Durable & field-tested", icon: "/icons/easy-to-install-and-use.png" },
    { text: "Local support & easy service", icon: "/icons/seasonal-adjustment.png" },
  ],
  ar: [
    { text: "جودة ممتازة بسعر محلي", icon: "/icons/affordable-and-long-lasting.png" },
    { text: "مصمم خصيصًا لمناخ واحتياجات مصر", icon: "/icons/weatherproof-design.png" },
    { text: "واجهة استخدام باللغة العربية", icon: "/icons/arabic-and-english-support.png" },
    { text: "تحكم دوّار موثوق", icon: "/icons/simple-rotating-dial.png" },
    { text: "تصميم متين ومجرب", icon: "/icons/easy-to-install-and-use.png" },
    { text: "دعم وخدمة محلية بسهولة", icon: "/icons/seasonal-adjustment.png" },
  ],
};

export default function WhySparrow() {
  const { lang } = useLanguage();
  const list = reasons[lang];

  return (
    <section className="bg-accent py-20 px-4 sm:px-6 lg:px-8"> {/* Changed background to white */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary"> {/* Text color set to primary */}
          {lang === "en" ? "Why Choose Sparrow?" : "لماذا سبارو؟"}
        </h2>
        <p className="text-lg text-gray-700 mb-12"> {/* Changed text-slate-300 to a darker gray for readability */}
          {lang === "en"
            ? "Premium quality at 30% less cost"
            : "جودة عالية بسعر أقل بنسبة 30٪"}
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
                className="p-6 bg-accent rounded-xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-text-dark text-lg font-medium flex flex-col items-center text-center h-full" // Added flex styles for icon and text alignment
                dir={lang === 'ar' ? 'rtl' : 'ltr'} // Add dir for RTL support on cards
              >
                <img src={r.icon} alt={r.text} className="w-16 h-16 mb-4" /> {/* Icon */}
                {r.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}