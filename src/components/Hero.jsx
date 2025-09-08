import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";
import { Download } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="pt-8 md:pt-20">
      <div className="grid md:grid-cols-2 gap-10 items-center py-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Hi, I’m Rayyan Saifi
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed dark:text-slate-300">
            Frontend-focused MERN developer passionate about building clean, fast,
            and accessible web apps. I love React, Tailwind, and bringing ideas to life.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a
              href="https://wa.me/919760112717"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-5 py-2.5 rounded-2xl bg-slate-900 text-white shadow-md hover:shadow-lg transition-colors duration-300 dark:bg-slate-100 dark:text-slate-900"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="/rayyan-resume.pdf"
              download="Rayyan-Saifi-Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-5 py-2.5 rounded-2xl border border-slate-300 hover:border-slate-400 
             text-slate-700 dark:border-slate-600 dark:text-slate-200
             transition-colors duration-300 flex items-center justify-center gap-2"
            >
               <Download /> Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-indigo-200 via-teal-200 to-transparent rounded-full -z-10 dark:from-indigo-500/30 dark:via-teal-500/30" />
            <img
              src="/me.jpg"
              alt="Rayyan avatar placeholder"
              className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;
