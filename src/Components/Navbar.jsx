import React, { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("light-theme") ? "light" : "dark";
    }
    return "dark";
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    } else {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#0a192f] rounded-md border border-teal-500 shadow-[0_0_10px_5px_rgba(20,184,166,0.9)] px-5 py-1 animate-glow-radius">
      <style>{`
        @keyframes glowRadius {
          0%, 100% {
            box-shadow: 0 0 10px 3px rgba(20, 184, 166, 0.9);
            border-radius: 0.375rem;
          }
          50% {
            box-shadow: 0 0 20px 6px rgba(20, 184, 166, 1);
            border-radius: 1rem;
          }
        }
        .animate-glow-radius {
          animation: glowRadius 3s ease-in-out infinite;
        }
      `}</style>
      <div className="flex items-center justify-between flex-wrap">
        <div
          className="text-teal-400 font-bold text-xl sm:text-2xl cursor-pointer ml-4"
          onClick={() => handleScroll("home")}
        >
          Portfolio
        </div>
        <ul
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } sm:flex sm:justify-center sm:gap-6 text-teal-300 text-base sm:text-lg font-semibold flex-wrap items-center flex-grow`}
        >
          {sections.map((section) => (
            <li
              key={section.id}
              className="hover:text-white cursor-pointer px-2 py-1 sm:py-0"
              onClick={() => handleScroll(section.id)}
            >
              {section.label}
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="cursor-pointer bg-transparent border-none text-teal-400 text-2xl sm:text-3xl"
          aria-label="Toggle Theme"
          title="Toggle Theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
        <button
          className="sm:hidden text-teal-400 text-3xl ml-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          title="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
