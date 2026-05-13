import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Award, MapPin } from 'lucide-react';

export const OwnerMessage = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-5/12 w-full"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                alt="Owner"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-1">Meet The Owner</h3>
                <p className="text-white/80 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Gorakhpur, U.P.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-7/12 w-full flex flex-col"
          >
            <Quote className="w-12 h-12 text-primary/30 mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold text-olive-400 mb-6">
              A Message From the Owner
            </h2>

            <div className="text-base md:text-lg text-olive-400 mb-8 leading-relaxed space-y-4">
              <p>
                "I am a dedicated and experienced dog trainer with six years of expertise in providing high-quality training services. My journey began in Bhopal, where I developed my skills and established a strong foundation in various training techniques. Currently, I am based in Gorakhpur, where I continue to offer exceptional training services to a diverse range of clients."
              </p>
              <p>
                "My commitment to enhancing the bond between dogs and their owners drives my passion for dog training. I continuously seek to improve my techniques and stay updated with the latest training methods to ensure the best results for my clients."
              </p>
            </div>

            <div className="bg-accent/30 dark:bg-accent/10 p-5 rounded-2xl border border-accent">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-1">Credentials & Services</h4>
                  <p className="text-sm text-emerald-600 leading-relaxed">
                    Graduated dog behaviourist/trainer & breeder | Gorakhpur, U.P.<br />
                    Home & hostel based dog training service in Gorakhpur
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
