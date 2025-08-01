"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { lang } = useLanguage();
  const content = {
    en: {
      title: "About Us",
      subtitle: "Smart systems built for the region. Engineered to outperform.",
      body: [
        "Sparrow is a fast-moving Egyptian technology company developing advanced control systems for water, land, and infrastructure. Our irrigation controllers are just one chapter in a growing portfolio. Each product is engineered with precision, built for Egypt’s climate, and ready for the toughest conditions across the Gulf.",
        "We combine robust hardware with IoT-ready architecture and seamless Arabic-English support. Whether you're in the heat of Riyadh, the soil salinity of Aswan, or the humidity of the Gulf, our systems are designed to perform reliably, efficiently, and intelligently.",
        "Sparrow was born from the passion of engineers who grew up under this climate. This isn’t just a product — it’s what we’ve always dreamed of building. Systems that are overengineered on purpose, because anything less wouldn’t survive the realities of the Middle East.",
        "Built to take care of your home, your farm, and everything that matters to you.",
        "The circle is growing. And we believe it’s your turn to be part of it.",
      ],
    },
    ar: {
      title: "عن سبارو",
      subtitle: "أنظمة ذكية مصممة من أجل هذه المنطقة. ومهندسة لتتفوق في الأداء.",
      body: [
        "سبارو هي شركة تكنولوجيا مصرية سريعة النمو، تطوّر أنظمة تحكم متقدمة للمياه، والأراضي، والبنية التحتية. وحدات التحكم في الري ليست سوى البداية ضمن مجموعة متوسعة من المنتجات. كل منتج نُصمّمه بدقة، ليناسب مناخ مصر ويؤدي بكفاءة في أقسى ظروف الخليج.",
        "نحن ندمج بين أجهزة قوية، وهندسة جاهزة لإنترنت الأشياء، وواجهة استخدام متكاملة باللغتين العربية والإنجليزية. سواء كنت في حرارة الرياض، أو ملوحة تربة أسوان، أو رطوبة الخليج، أنظمتنا مصممة لتعمل بثبات، وكفاءة، وذكاء.",
        "ولدت سبارو من شغف مهندسين تربّوا في هذا المناخ، وفهموا احتياجاته الحقيقية. لم يكن منتجنا مجرّد فكرة، بل رؤية لطالما حلمنا بتحقيقها. أنظمة ذكية مبنية بمستوى عالٍ من الهندسة، لأن ما نواجهه على أرض الواقع لا يُحتمل بأقل من ذلك.",
        "نصمّم لنخدم بيتك، ومزرعتك، وكل ما يعني لك الكثير.",
        "الدائرة تتوسّع. ونؤمن أن الوقت قد حان لتكون جزءًا منها..",
      ],
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
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary"> {/* Text color set to primary, added responsive font size */}
              {t.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4"> {/* Changed text-slate-300 to a darker gray for readability */}
              {t.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}