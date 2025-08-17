 "use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Phone, Zap } from "lucide-react";

export default function Hero() {
 const { lang } = useLanguage();
 
 const content = {
   en: {
     badge: "Engineered in Egypt",
     title: {
       line1: "Smarter Irrigation",
       line2: "Designed for You"
     },
     subtitle: "Built to Last",
     cta: "Get Notified",
     learn: "Learn More",
     features: [
       { icon: Globe, text: "Fully Arabic" },
       { icon: Phone, text: "After-sales support" },
       { icon: Zap, text: "Plug & Play" },
     ]
   },
   ar: {
     badge: "صُنع في مصر",
     title: {
       line1: "ريّ ذكي",
       line2: "بتصميم يلبي احتياجاتك"
     },
     subtitle: "ري يدوم. أداء يبقى.",
     cta: "أعلمني",
     learn: "تعرّف أكثر",
     features: [
       { icon: Globe, text: "بدعم عربي كامل" },
       { icon: Phone, text: "دعم فني ما بعد البيع" },
       { icon: Zap, text: "سهل الاستخدام" },
     ]
   },
 };
 
 const t = content[lang];

 return (
   <section
     id="home"
     className="relative min-h-screen flex items-center justify-center p-4 bg-background"
   >
     <div className="relative z-10 max-w-5xl mx-auto pt-24 text-center">
       <motion.div
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2, ease: "easeOut" }}
       >
         <motion.h1
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight"
         >
           {t.title.line1}
           <br />
           {t.title.line2}
         </motion.h1>

         <motion.p
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="text-2xl md:text-3xl text-text-light mb-8 max-w-3xl mx-auto leading-relaxed font-semibold"
         >
           {t.subtitle}
         </motion.p>

         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="flex flex-wrap justify-center gap-6 mb-10"
         >
           {t.features.map((feature, index) => (
             <motion.div
               key={index}
               whileHover={{ scale: 1.05, y: -2 }}
               className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white"
             >
               <feature.icon className="w-5 h-5 text-primary" />
               <span className="text-text font-medium">{feature.text}</span>
             </motion.div>
           ))}
         </motion.div>

         <div className="p-8 md:p-10 max-w-2xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.0 }}
             className="flex flex-col sm:flex-row gap-4 justify-center items-center"
           >
             <motion.a
               href="/contact"
               whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(96, 165, 250, 0.3)" }}
               whileTap={{ scale: 0.98 }}
               className="bg-primary text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
             >
               <span className="flex items-center gap-2">
                 {t.cta}
                 <motion.div
                   animate={{ x: [0, 4, 0] }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                   className="w-4 h-4 flex items-center justify-center"
                 >
                   →
                 </motion.div>
               </span>
             </motion.a>

             <motion.a
               href="/about"
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="border-2 border-primary/50 text-primary font-bold px-8 py-4 rounded-full hover:bg-primary/5 transition-all duration-300"
             >
               {t.learn}
             </motion.a>
           </motion.div>
         </div>
       </motion.div>

       
     </div>
   </section>
 );
}
