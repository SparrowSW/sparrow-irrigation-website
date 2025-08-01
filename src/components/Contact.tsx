"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
// Assuming GlassCard can adapt to light theme via className or is replaced.
// For demonstration, I'll use a plain div and apply styles that simulate a light-themed card.
// If GlassCard is truly a "glass" effect, it might not fit a pure light theme and should be replaced.
// import GlassCard from "@/components/ui/GlassCard"; // Keep if GlassCard is flexible
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { lang } = useLanguage();
  const { register, handleSubmit, reset } = useForm<{
    name: string; email: string; message: string;
  }>();

  const onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form:", data);
    toast.success(lang === "en" ? "Message sent!" : "تم الإرسال!");
    reset();
  };

  const content = {
    en: {
      title: "Contact Us",
      name: "Name",
      email: "Email",
      message: "Message",
      button: "Send Message",
      address: "Cairo, Egypt",
      emailInfo: "info@sparrowirrigation.com",
      phone: "+20 2 XXXX XXXX",
    },
    ar: {
      title: "اتصل بنا",
      name: "الاسم",
      email: "البريد الإلكتروني", // Corrected Arabic for Email
      message: "الرسالة",
      button: "إرسال",
      address: "القاهرة، مصر",
      emailInfo: "info@sparrowirrigation.com",
      phone: "+20 2 XXXX XXXX",
    },
  };
  const t = content[lang];

  return (
    <section id="contact" className="bg-accent py-20 px-4 sm:px-6 lg:px-8"> {/* Changed background to accent */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? 40 : -40 }} // Adjust initial x for RTL
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Replaced GlassCard with a div styled to mimic the light theme cards */}
          <div
            className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg h-full flex flex-col justify-center" // Light card styling, added flex for vertical centering
            dir={lang === 'ar' ? 'rtl' : 'ltr'} // Set direction for content
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">{t.title}</h3> {/* Text color set to primary, larger font */}
            <p className="mb-2 text-text-dark"> {/* Dark text for contact info */}
              <strong className="font-semibold">{lang === 'en' ? 'Address:' : 'العنوان:'}</strong> {t.address}
            </p>
            <p className="mb-2 text-text-dark"> {/* Dark text for contact info */}
              <strong className="font-semibold">{lang === 'en' ? 'Email:' : 'البريد الإلكتروني:'}</strong> <a href={`mailto:${t.emailInfo}`} className="text-primary hover:underline">{t.emailInfo}</a>
            </p>
            <p className="text-text-dark"> {/* Dark text for contact info */}
              <strong className="font-semibold">{lang === 'en' ? 'Phone:' : 'الهاتف:'}</strong> <a href={`tel:${t.phone}`} className="text-primary hover:underline">{t.phone}</a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: lang === 'ar' ? -40 : 40 }} // Adjust initial x for RTL
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Replaced GlassCard with a div styled to mimic the light theme cards */}
          <div
            className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg" // Light card styling
            dir={lang === 'ar' ? 'rtl' : 'ltr'} // Set direction for content
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("name", { required: true })}
                placeholder={t.name}
                className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 text-text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" // Light theme input styles
              />
              <input
                {...register("email", { required: true })}
                placeholder={t.email}
                className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 text-text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" // Light theme input styles
              />
              <textarea
                {...register("message", { required: true })}
                placeholder={t.message}
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-300 text-text-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" // Light theme input styles
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-2 rounded-md transition-colors shadow-md" // Primary button style
              >
                {t.button}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}