import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animations/variants";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      setStatus("Message sent! I will get back to you soon.");
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      setStatus("Failed to send. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="py-16">
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
          Contact
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-2 text-slate-600 dark:text-slate-300"
        >
          Have a project or opportunity? Let’s talk.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-6 grid lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm dark:bg-slate-800 dark:border-slate-700"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-300">
                    Your Name
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm text-slate-600 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-sm text-slate-600 dark:text-slate-300">
                  Subject
                </label>
                <input
                  name="subject"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
                  placeholder="Subject"
                />
              </div>
              <div className="mt-4">
                <label className="text-sm text-slate-600 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-slate-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl 
             bg-slate-900 text-white shadow-md hover:shadow-lg 
             dark:bg-slate-100 dark:text-slate-900 cursor-pointer 
             transition-colors duration-300"
              >
                <Mail className="w-4 h-4" /> Send Message
              </motion.button>
              {status && (
                <p
                  className="mt-3 text-sm text-slate-600 dark:text-slate-300"
                  role="status"
                >
                  {status}
                </p>
              )}
            </form>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm h-max dark:bg-slate-800 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">
              Elsewhere
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=saifimohdrayyan@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 
             dark:text-slate-200 dark:hover:text-slate-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" /> saifimohdrayyan@gmail.com
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://github.com/saifirayyan"
                  target="_blank"
                 rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 
             dark:text-slate-200 dark:hover:text-slate-400 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" /> github.com/saifirayyan
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://www.linkedin.com/in/rayyansaifi"
                  target="_blank"
                 rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 
             dark:text-slate-200 dark:hover:text-slate-400 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4" /> linkedin.com/in/rayyansaifi
                </motion.a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
