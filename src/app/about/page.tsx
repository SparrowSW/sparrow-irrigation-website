"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function AboutUsPage() {
  const { lang } = useLanguage();
  const content = {
    en: {
      title: "About Us",
      subtitle: "Smart systems. Engineered for our region.",
      body: [
        "Sparrow is an Egyptian technology company designing durable, intelligent control systems for water, land, and infrastructure. We build solutions that are tailored for the climate, conditions, and needs of the Middle East.",
        "Our products combine robust hardware with IoT-ready architecture and bilingual support. From the heat of Riyadh to the soil of Aswan, our systems are built to perform — reliably, efficiently, and simply.",
        "We come from this region. We understand its challenges. That's why we design with purpose, not complexity — building systems that just work, season after season.",
        "Whether you're managing a home garden, a farm, or public space — Sparrow is here to make control smarter and easier.",
      ],
      visionTitle: "Vision",
      visionText:
        "To lead the region in smart infrastructure solutions that are rooted in local experience and built for real-world challenges.",
      missionTitle: "Mission",
      missionText:
        "To simplify control systems through smart, durable, and regionally engineered products — starting with irrigation and expanding into what comes next.",
    },
    ar: {
      title: "عنّا",
      subtitle: "أنظمة ذكية. مصممة لمنطقتنا.",
      body: [
        "سبارو هي شركة تكنولوجيا مصرية تقوم بتصميم أنظمة تحكم ذكية ومتينة للمياه والأراضي والبنية التحتية. نحن نبني حلولاً مصممة خصيصًا لمناخ وظروف واحتياجات الشرق الأوسط.",
        "تجمع منتجاتنا بين الأجهزة القوية والهندسة المعمارية الجاهزة لإنترنت الأشياء والدعم ثنائي اللغة. من حرارة الرياض إلى تربة أسوان ، تم تصميم أنظمتنا لتعمل بشكل موثوق وفعال وببساطة.",
        "نحن من هذه المنطقة. نحن نتفهم تحدياتها. لهذا السبب نصمم لغرض وليس لتعقيد - بناء أنظمة تعمل فقط ، موسمًا بعد موسم.",
        "سواء كنت تدير حديقة منزلية أو مزرعة أو مساحة عامة - سبارو هنا لجعل التحكم أكثر ذكاءً وأسهل.",
      ],
      visionTitle: "رؤيتنا",
      visionText:
        "قيادة المنطقة في حلول البنية التحتية الذكية المتجذرة في الخبرة المحلية والمبنية لتحديات العالم الحقيقي.",
      missionTitle: "مهمتنا",
      missionText:
        "تبسيط أنظمة التحكم من خلال منتجات ذكية ومتينة ومصممة إقليمياً - بدءًا من الري والتوسع في ما هو قادم.",
    },
  };
  const t = content[lang];

  return (
    <section id="about" className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="p-6 bg-background rounded-xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-4">
                <Image
                  src="/Logo_Blue.svg"
                  alt="About Sparrow"
                  width={300}
                  height={300}
                  className="rounded-lg w-3/4 mx-auto"
                />
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                  {t.title}
                </h2>
                <p className="text-xl font-bold text-gray-800 mb-8">{t.subtitle}</p>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                  {t.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{t.visionTitle}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{t.visionText}</p>
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">{t.missionTitle}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{t.missionText}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}