"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const plans = {
  en: [
    { name: "Sparrow Basic", price: "EGP 1,200", stations: "2", features: ["Ideal for small gardens", "2-station control"] },
    { name: "Sparrow Pro", price: "EGP 1,800", stations: "4", features: ["Perfect for most homes", "4-station control"], popular: true },
    { name: "Sparrow Elite", price: "EGP 2,400", stations: "8", features: ["For large gardens and commercial use", "8-station precision control"] },
  ],
  ar: [
    { name: "سبارو بيزيك", price: "١٢٠٠ جنيه", stations: "٢", features: ["مثالي للحدائق الصغيرة", "تحكم في منطقتين"] },
    { name: "سبارو برو", price: "١٨٠٠ جنيه", stations: "٤", features: ["مثالي لمعظم المنازل", "تحكم في ٤ مناطق"], popular: true },
    { name: "سبارو إيليت", price: "٢٤٠٠ جنيه", stations: "٨", features: ["للمساحات الكبيرة والاستخدام التجاري", "تحكم دقيق في ٨ مناطق"] },
  ],
};

export default function PricingPage() {
  const { lang } = useLanguage();
  const list = plans[lang];
  const content = {
      en: {
          title: "Explore Our Models",
          subtitle: "Different models. One standard of quality.",
          popular: "Most Popular",
          select: "Select Model",
          station: "Stations"
      },
      ar: {
          title: "استعرض نماذجنا",
          subtitle: "نماذج مختلفة. ومعيار جودة واحد.",
          popular: "الأكثر مبيعًا",
          select: "اختر الجهاز",
          station: "محطات"
      }
  }
  const t = content[lang];

  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                {t.title}
            </h2>
            <p className="text-lg text-gray-700 mt-2">
                {t.subtitle}
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {list.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex"
            >
              <div
                className={`relative p-6 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between w-full ${
                  p.popular ? 'bg-blue-50 border-blue-300 shadow-md' : 'bg-white border-gray-200'
                }`}
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
              >
                <div className="flex-grow">
                    {p.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 text-sm rounded-full shadow-lg">
                        {t.popular}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-2 text-text-dark text-center">
                      {p.name}
                    </h3>
                    <div className="text-center my-4">
                      <span className="text-6xl font-bold text-primary">{p.stations}</span>
                      <p className="text-lg text-gray-600">{t.station}</p>
                    </div>
                    <p className="text-lg font-semibold text-center text-primary mb-4">
                      {p.price}
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      {p.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                </div>
                <button className="mt-6 w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  {t.select}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
