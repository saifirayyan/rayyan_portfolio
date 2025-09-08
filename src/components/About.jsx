import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/variants";

// function About() {
//   return (
//     <section id="about" className="py-32 bg-slate-50 dark:bg-slate-900">
//       <motion.div
//         variants={stagger}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         className="max-w-4xl mx-auto px-6 space-y-16"
//       >
//         {/* Heading + Intro */}
//         <motion.div variants={fadeUp} className="text-center">
          // <h2 className="text-5xl font-bold text-slate-900 dark:text-slate-100">
          //   About Me
          // </h2>
          // <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          //   I’m a BCA graduate and self-driven web developer specializing in the
          //   MERN stack. I enjoy crafting responsive, user-friendly interfaces
          //   and learning new tools.
          // </p>
//         </motion.div>

//         {/* Cards Section */}
        // <motion.div
        //   variants={fadeUp}
        //   className="grid md:grid-cols-2 gap-10"
        // >
        //   {/* Education */}
        //   <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-lg dark:bg-slate-800 dark:border-slate-700">
        //     <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        //       Education
        //     </h3>
        //     <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        //       BCA — Bachelor of Computer Applications
        //     </p>
        //     <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
        //       Rama Institute of Higher Education, Kiratpur
        //     </p>
        //   </div>

        //   {/* More About */}
        //   <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-lg dark:bg-slate-800 dark:border-slate-700">
        //     <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        //       A little about me
        //     </h3>
        //     <p className="mt-4 text-lg text-slate-600 leading-relaxed dark:text-slate-300">
        //       I build frontends in React with Tailwind, integrate APIs, and
        //       ensure clean state management. I’m comfortable with Express/Node,
        //       MongoDB, and deploying apps to platforms like Vercel/Render.
        //       Outside code, I enjoy exploring UI/UX patterns and improving
        //       performance.
        //     </p>
        //   </div>
        // </motion.div>
//       </motion.div>
//     </section>
//   );
// }

function About() {
  return (
    <section id="about" className="py-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full mx-auto space-y-16"
      >
        <motion.div variants={fadeUp} className="">
          <h2 className="text-3xl sm:text-5xl text-center font-semibold text-slate-900 dark:text-slate-100">
            About Me
          </h2>
          <p className="text-lg sm:text-xl mt-3 text-slate-600 dark:text-slate-300">
            I’m a BCA graduate and self-driven web developer specializing in the
            MERN stack. I enjoy crafting responsive, user-friendly interfaces
            and learning new tools.
          </p>
          
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Education */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-lg dark:bg-slate-800 dark:border-slate-700">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Education
            </h3>
            <p className="mt-4 text-lg font-bold text-slate-600 dark:text-slate-300">
              BCA — Bachelor of Computer Applications
            </p>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
              Rama Institute of Higher Education, Kiratpur
            </p>
            <p className="text-sm italic text-slate-600 dark:text-slate-300">2022 - 2025</p>
          </div>

          {/* More About */}
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-lg dark:bg-slate-800 dark:border-slate-700">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
              A little about me
            </h3>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed dark:text-slate-300">
              I specialize in building responsive frontends with React and Tailwind CSS, integrating APIs, and maintaining clean state management. I am skilled in Express/Node.js and MongoDB, with experience deploying applications on platforms such as Vercel and Render. Beyond development, I have a strong interest in UI/UX design principles and performance optimization.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
