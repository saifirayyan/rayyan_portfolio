import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/variants";

import { SiExpress, SiMongodb, SiReact, SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { Code2 } from "lucide-react";
import { FaCss3 } from "react-icons/fa6";

export const skills = [
  { name: "HTML", icon: <Code2 className="w-6 h-6" /> },
  { name: "CSS", icon: <FaCss3 className="w-6 h-6" /> },
  { name: "Javascript", icon: <DiJavascript1 className="w-6 h-6" /> },
  { name: "React", icon: <SiReact className="w-6 h-6" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="w-6 h-6" /> },
  { name: "Express", icon: <SiExpress className="w-6 h-6" /> },
  { name: "Git/GitHub", icon: <BsGithub className="w-6 h-6" /> },
];


function Skills() {
  return (
    <section id="skills" className="py-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-semibold text-slate-900 dark:text-slate-100"
        >
          Skills
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-2 text-slate-600 dark:text-slate-300"
        >
          Tools & technologies I use regularly
        </motion.p>
        <motion.ul
          variants={stagger}
          className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {skills.map((s) => (
            <motion.li
              variants={fadeUp}
              key={s.name}
              className="flex items-center gap-3 rounded-2xl bg-white border border-slate-200 p-4 shadow-sm dark:bg-slate-800 dark:border-slate-700"
            >
              <span className="shrink-0 text-slate-700 dark:text-slate-200">
                {s.icon}
              </span>
              <span className="font-medium text-slate-800 dark:text-slate-100">
                {s.name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
export default Skills;
