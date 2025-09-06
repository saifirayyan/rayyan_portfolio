import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Rayyan Saifi. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/saifirayyan" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/rayyansaifi" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer