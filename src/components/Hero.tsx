 "use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import GlassCard from "@/components/ui/GlassCard";
import { Droplets, Zap, Globe } from "lucide-react";

export default function Hero() {
 const { lang } = useLanguage();
 
 const content = {
   en: {
     badge: "Engineered in Egypt",
     title: "Smarter Irrigation. Designed for You.",
     subtitle: "Reliable, weather-resistant controllers — locally engineered in Egypt, made to last, and priced for real value.",
     cta: "Get Notified",
     learn: "Learn More",
     features: [
       { icon: Droplets, text: "Weatherproof" },
       { icon: Zap, text: "Plug & Play" },
       { icon: Globe, text: "Fully Arabic" }
     ]
   },
   ar: {
     badge: "صُنع في مصر",
     title: "ريّ ذكي بتصميم يلبي احتياجاتك.",
     subtitle: "أجهزة موثوقة ومقاومة للطقس – مصممة محليًا في مصر لتدوم وبسعر يناسب الجميع.",
     cta: "أعلمني",
     learn: "تعرّف أكثر",
     features: [
       { icon: Droplets, text: "مقاوم للطقس" },
       { icon: Zap, text: "سهل الاستخدام" },
       { icon: Globe, text: "بدعم عربي كامل" }
     ]
   },
 };
 
 const t = content[lang];

 return (
   <section
     id="home"
     className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden"
   >
     {/* Animated Gradient Background */}
     <div className="absolute inset-0 bg-gradient-to-br from-accent via-light-blue to-secondary/20 animate-gradient" />
     
     {/* Floating Blobs with Viewport-Relative Movement */}
     <motion.div 
       className="absolute w-96 h-96 bg-primary/30 rounded-full blur-3xl"
       animate={{
         x: ["0vw", "8vw", "-4vw", "6vw", "0vw"],
         y: ["0vh", "-6vh", "-12vh", "-3vh", "0vh"],
         scale: [1, 1.1, 0.9, 1.05, 1],
       }}
       transition={{
         duration: 15,
         repeat: Infinity,
         ease: "easeInOut",
       }}
       style={{ top: "-10%", left: "-10%" }}
     />
     
     <motion.div 
       className="absolute w-80 h-80 bg-secondary/30 rounded-full blur-3xl"
       animate={{
         x: ["0vw", "-6vw", "9vw", "-3vw", "0vw"],
         y: ["0vh", "-8vh", "-4vh", "-11vh", "0vh"],
         scale: [1, 0.95, 1.08, 0.98, 1],
       }}
       transition={{
         duration: 18,
         repeat: Infinity,
         ease: "easeInOut",
         delay: 3,
       }}
       style={{ bottom: "10%", right: "5%" }}
     />
     
     <motion.div 
       className="absolute w-64 h-64 bg-primary/15 rounded-full blur-2xl"
       animate={{
         x: ["0vw", "4vw", "-7vw", "5vw", "0vw"],
         y: ["0vh", "-5vh", "-9vh", "-7vh", "0vh"],
         rotate: [0, 180, 360],
       }}
       transition={{
         duration: 12,
         repeat: Infinity,
         ease: "easeInOut",
         delay: 6,
       }}
       style={{ top: "20%", right: "10%" }}
     />

     {/* Floating Icons */}
     <motion.div
       className="absolute text-success/30 w-8 h-8"
       animate={{
         x: ["0vw", "3vw", "-2vw", "0vw"],
         y: ["0vh", "-4vh", "-2vh", "0vh"],
       }}
       transition={{
         duration: 8,
         repeat: Infinity,
         ease: "easeInOut",
       }}
       style={{ top: "30%", left: "15%" }}
     >
       <Droplets className="w-full h-full" />
     </motion.div>

     <motion.div
       className="absolute text-warning/40 w-6 h-6"
       animate={{
         x: ["0vw", "-2vw", "4vw", "0vw"],
         y: ["0vh", "-3vh", "-6vh", "0vh"],
       }}
       transition={{
         duration: 10,
         repeat: Infinity,
         ease: "easeInOut",
         delay: 2,
       }}
       style={{ bottom: "40%", right: "20%" }}
     >
       <Zap className="w-full h-full" />
     </motion.div>

     {/* Main Content */}
     <div className="relative z-10 max-w-5xl mx-auto pt-24">
       <motion.div
         initial={{ opacity: 0, y: 100 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.2, ease: "easeOut" }}
         className="text-center mb-8"
       >
         {/* Badge */}


         {/* Main Title */}
         <motion.h1
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="text-5xl md:text-7xl font-bold text-text-dark mb-6 leading-tight"
         >
           <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-300% bg-left">
             {t.title}
           </span>
         </motion.h1>

         {/* Subtitle */}
         <motion.p
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="text-xl md:text-2xl text-text-light mb-8 max-w-3xl mx-auto leading-relaxed"
         >
           {t.subtitle}
         </motion.p>

         {/* Features */}
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
               className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-primary/20"
             >
               <feature.icon className="w-5 h-5 text-primary" />
               <span className="text-text-dark font-medium">{feature.text}</span>
             </motion.div>
           ))}
         </motion.div>
       </motion.div>

       {/* CTA Section */}
       <GlassCard className="p-8 md:p-10 max-w-2xl mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1.0 }}
           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
         >
           <motion.a
             href="#coming"
             whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(25, 41, 82, 0.3)" }}
             whileTap={{ scale: 0.98 }}
             className="bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
           >
             <span className="flex items-center gap-2">
               {t.cta}
               <motion.div
                 animate={{ x: [0, 4, 0] }}
                 transition={{ duration: 1.5, repeat: Infinity }}
                 className="w-4 h-4"
               >
                 →
               </motion.div>
             </span>
           </motion.a>

           <motion.a
             href="#products"
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="glass border-2 border-primary/50 text-primary font-bold px-8 py-4 rounded-full hover:bg-primary/5 transition-all duration-300"
           >
             {t.learn}
           </motion.a>
         </motion.div>

         {/* Product Preview */}
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 1.2 }}
           className="mt-8 p-6 glass rounded-2xl border border-primary/20"
         >
           <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
             <motion.div
               animate={{ rotate: [0, 5, -5, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="text-primary/60 text-6xl"
             >
               🎛️
             </motion.div>
           </div>
           <p className="text-center text-text-light text-sm mt-4 italic">
             Sparrow Irrigation Controller Preview
           </p>
         </motion.div>
       </GlassCard>
     </div>

     {/* Scroll Indicator */}
     <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 2 }}
       className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
     >
       <motion.div
         animate={{ y: [0, 8, 0] }}
         transition={{ duration: 2, repeat: Infinity }}
         className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
       >
         <motion.div
           animate={{ y: [0, 12, 0] }}
           transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
           className="w-1 h-3 bg-primary/70 rounded-full mt-2"
         />
       </motion.div>
     </motion.div>
   </section>
 );
}
