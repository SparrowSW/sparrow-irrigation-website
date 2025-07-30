"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

import { useLanguage } from "@/contexts/LanguageContext";

const featuresData = {
  en: [
    {
      title: "Seasonal adjustment",
      description: "This feature allows the system to automatically adjust watering schedules based on local weather conditions, saving water and ensuring optimal plant health throughout the year.",
    },
    {
      title: "Arabic & English support",
      description: "Our controllers offer full support for both Arabic and English languages, providing a user-friendly interface for a wider range of users.",
    },
    {
      title: "Simple rotating dial",
      description: "The intuitive simple rotating dial makes programming and adjustments straightforward, even for first-time users, ensuring hassle-free operation.",
    },
    {
      title: "Engineered and manufactured in Egypt",
      description: "Proudly designed and manufactured in Egypt, our products are built to meet local needs and withstand the specific environmental conditions of the region.",
    },
    {
      title: "Weatherproof design",
      description: "Built with a robust weatherproof design, our controllers are protected against harsh outdoor elements, ensuring durability and reliable performance in all conditions.",
    },
    {
      title: "Affordable and long-lasting",
      description: "Our products offer exceptional value, combining affordability with long-lasting durability, providing a cost-effective and reliable irrigation solution.",
    },
    {
      title: "Easy to install and use",
      description: "Designed for simplicity, our systems are incredibly easy to install and operate, allowing users to set up and manage their irrigation with minimal effort.",
    },
  ],
  ar: [
    {
      title: "ضبط موسمي تلقائي",
      description: "تتيح هذه الميزة للنظام ضبط جداول الري تلقائيًا بناءً على الظروف الجوية المحلية، مما يوفر المياه ويضمن صحة النباتات المثلى على مدار العام.",
    },
    {
      title: "دعم عربي وإنجليزي",
      description: "توفر وحدات التحكم لدينا دعمًا كاملاً للغتين العربية والإنجليزية، مما يوفر واجهة سهلة الاستخدام لمجموعة واسعة من المستخدمين.",
    },
    {
      title: "مفاتيح دوّارة سهلة",
      description: "يجعل القرص الدوار البسيط والبديهي البرمجة والتعديلات سهلة ومباشرة، حتى للمستخدمين لأول مرة، مما يضمن تشغيلًا خاليًا من المتاعب.",
    },
    {
      title: "تصميم وتصنيع محلي",
      description: "تم تصميم وتصنيع منتجاتنا بفخر في مصر، وهي مصممة لتلبية الاحتياجات المحلية وتحمل الظروف البيئية الخاصة بالمنطقة.",
    },
    {
      title: "مقاوم للطقس",
      description: "تم تصميم وحدات التحكم لدينا بتصميم قوي ومقاوم للعوامل الجوية، وهي محمية ضد العوامل الخارجية القاسية، مما يضمن المتانة والأداء الموثوق به في جميع الظروف.",
    },
    {
      title: "بأسعار مناسبة وعمر طويل",
      description: "تقدم منتجاتنا قيمة استثنائية، حيث تجمع بين القدرة على تحمل التكاليف والمتانة طويلة الأمد، مما يوفر حل ري فعال من حيث التكلفة وموثوق به.",
    },
    {
      title: "سهل التركيب والتشغيل",
      description: "صُممت أنظمتنا من أجل البساطة، وهي سهلة التركيب والتشغيل بشكل لا يصدق، مما يتيح للمستخدمين إعداد وإدارة الري بأقل جهد.",
    },
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
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const handleFeatureClick = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

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
          {lang === "en" ? "Professional Features Built for Egypt" : "مميزات احترافية مناسبة لمصر"}
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
                onClick={() => handleFeatureClick(i)} // Make clickable
                className="flex flex-col items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <span className="text-text-dark text-lg font-semibold">{feature.title}</span>
                </div>
                {expandedFeature === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-text-light text-base mt-2"
                  >
                    {feature.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}