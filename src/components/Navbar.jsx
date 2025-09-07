import { Github , Linkedin, Moon, Sun } from "lucide-react";

function Navbar({ darkMode, setDarkMode }) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200 dark:bg-slate-900/70 dark:border-slate-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-semibold text-slate-900 dark:text-slate-100 text-lg"
        >
          Rayyan<span className="text-slate-500 dark:text-slate-400">.dev</span>
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <a
            href="https://github.com/saifirayyan"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rayyansaifi"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;