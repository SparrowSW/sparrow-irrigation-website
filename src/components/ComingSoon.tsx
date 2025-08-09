"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
// Assuming GlassCard can adapt to light theme via className or is replaced.
// For demonstration, I'll use a plain div and apply styles that simulate a light-themed card.
// If GlassCard is truly a "glass" effect, it might not fit a pure light theme and should be replaced.
// import GlassCard from "@/components/ui/GlassCard"; // Keep if GlassCard is flexible
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ComingSoon() {
  const { lang } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: { email: string }) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800)); // simulate API
    console.log("Email collected:", data.email);
    toast.success(lang === "en" ? "Thanks! We'll notify you." : "شكرًا! سنُعلمك.");
    reset();
    setLoading(false);
  };

  const content = {
    en: {
      title: "Be the first to know",
      placeholder: "Enter your email to receive updates and launch notifications",
      button: "Notify Me",
    },
    ar: {
      title: "كن أول من يعرف",
      placeholder: "أدخل بريدك الإلكتروني لتصلك آخر التحديثات وإشعارات الإطلاق",
      button: "إرسال", // Changed from "أرسل" for better context in Arabic
    },
  };
  const t = content[lang];

  return (
    <section id="coming" className="bg-accent py-20 px-4 sm:px-6 lg:px-8"> {/* Changed background to white */}
      <div className="max-w-lg mx-auto">
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
            <h2 className="text-2xl font-bold mb-6 text-primary">{t.title}</h2> {/* Text color set to primary, adjusted margin */}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("email", {
                  required: true,
                  pattern: /\S+@\S+\.\S+/,
                })}
                placeholder={t.placeholder}
                className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 text-text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" // Light theme input styles
              />
              {errors.email && (
                <p className="text-red-600 text-sm text-start"> {/* Darker red for better contrast, text-start for alignment */}
                  {lang === "en" ? "Please enter a valid email address." : "يرجى إدخال عنوان بريد إلكتروني صالح."}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white font-bold py-2 rounded-md transition-colors shadow-md" // Primary button style, adjusted disabled state
              >
                {loading ? (lang === 'en' ? 'Sending...' : 'جاري الإرسال...') : t.button}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}