"use client";

import { motion } from "framer-motion";
// Assuming GlassCard can adapt to light theme via className or is replaced.
// For demonstration, I'll use a plain div and apply styles that simulate a light-themed card.
// If GlassCard is truly a "glass" effect, it might not fit a pure light theme and should be replaced.
// import GlassCard from "@/components/ui/GlassCard"; // Keep if GlassCard is flexible
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const content = {
    en: {
      title: "About Sparrow",
      body: "We are an Egyptian company on a mission to bring reliable irrigation technology to every garden. Our controllers combine proven traditional design with local engineering excellence. The future roadmap includes smart IoT solutions, but today we focus on delivering rock-solid, affordable hardware that simply works.",
    },
    ar: {
      title: "عن سبارو",
      body: "شركة مصرية تهدف إلى توفير تقنيات ري موثوقة لكل حديقة. منتجاتنا تجمع بين التصميم التقليدي المجرب والجودة الهندسية المحلية. خريطتنا المستقبلية تشمل حلول ذكية، لكننا اليوم نركز على تقديم أجهزة قوية وبأسعار معقولة تعمل ببساطة.",
    },
  };
  const t = content[lang];

  return (
    <section id="about" className="bg-accent py-20 px-4 sm:px-6 lg:px-8"> {/* Changed background to white */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }} // Added transition duration for smoother animation
        >
          {/* Replaced GlassCard with a div styled to mimic the light theme cards */}
          <div
            className="p-8 bg-accent rounded-xl border border-gray-200 shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1" // Light card styling, added hover effect
            dir={lang === 'ar' ? 'rtl' : 'ltr'} // Set direction for content
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary"> {/* Text color set to primary, added responsive font size */}
              {t.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed"> {/* Changed text-slate-300 to a darker gray for readability */}
              {t.body}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}