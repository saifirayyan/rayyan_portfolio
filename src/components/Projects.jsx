import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import { fadeUp, stagger } from "../animations/variants";
import { ExternalLink, Github } from "lucide-react";

function Projects() {
  return (
    <section id="projects" className="py-16">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-slate-900 dark:text-slate-100">Projects</motion.h2>
        <motion.p variants={fadeUp} className="mt-2 text-slate-600 dark:text-slate-300">A few things I’ve built recently</motion.p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <motion.article
              variants={fadeUp}
              key={p.title}
              className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition dark:bg-slate-800 dark:border-slate-700"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed dark:text-slate-300">{p.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200">{t}</li>
                ))}
              </ul>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-slate-800 hover:text-slate-900 transition-all duration-200 dark:text-slate-200 dark:hover:text-slate-400 hover:scale-90">
                  <Github className="w-4 h-4" /> Code
                </a>
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-slate-800 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-400 hover:scale-90 transition-all duration-200">
                  <ExternalLink className="w-4 h-4" /> Demo
                </a>}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
export default Projects