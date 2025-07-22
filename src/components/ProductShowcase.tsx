"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// Dummy context and data for demonstration
// import { useLanguage } from "@/contexts/LanguageContext";
const useLanguage = () => ({ lang: 'en' as 'en' | 'ar' });

const featuresData = {
  en: [
    "Seasonal adjustment capability",
    "Arabic & English language support",
    "Traditional reliable design with rotating switches",
    "Locally designed and sourced in Egypt",
    "Weather-resistant construction",
    "Significant price advantage over Hunter X-Core",
    "Easy installation and operation",
  ],
  ar: [
    "إمكانية الضبط الموسمي",
    "دعم اللغتين العربية والإنجليزية",
    "تصميم تقليدي موثوق بمفاتيح دوّارة",
    "تصميم وتوريد محلي في مصر",
    "هيكل مقاوم للعوامل الجوية",
    "أفضلية سعرية واضحة عن Hunter X-Core",
    "سهولة التركيب والتشغيل",
  ],
};

// Framer Motion Variants for animations (remain the same)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ProductShowcase() {
  const { lang } = useLanguage();
  const features = featuresData[lang];

  return (
    <section id="products" className="bg-accent py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary" // Light Theme: Dark text for heading
        >
          {lang === "en" ? "Professional Grade Features" : "مميزات احترافية"}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Product Image Placeholder */}
          <motion.div
             initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Light Theme: Switched to a floating card style */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
               <div className="w-full h-96 bg-light-blue rounded-lg flex items-center justify-center border border-gray-300">
                  <span className="text-secondary text-lg font-medium">
                    {lang === 'en' ? 'Sparrow Controller Image' : 'صورة جهاز سبارو'}
                  </span>
                </div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                // Light Theme: Floating card with shadow and lift-on-hover effect
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <span className="text-text-dark text-lg">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}