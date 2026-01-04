// ThemeToggle component extracted for reuse
const ThemeToggle = ({ theme, toggleTheme, className = "" }) => (
  <button
    onClick={toggleTheme}
    className={`theme-toggle-btn group ${className}`}
    aria-label="Toggle Theme"
    title="Toggle Theme"
    style={{ position: "relative" }}
  >
    <span className="theme-toggle-icon sun" style={{ opacity: theme === "light" ? 1 : 0.4 }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" fill="#ffe066" />
      </svg>
    </span>

    <span className="theme-toggle-icon moon" style={{ opacity: theme === "dark" ? 1 : 0.4 }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" fill="#6a82fb" />
      </svg>
    </span>

    <span
      className="theme-toggle-slider"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(135deg, #233554 60%, #6a82fb 100%)"
            : "linear-gradient(135deg, #ffe066 60%, #14b8a6 100%)",
        transform:
          theme === "dark"
            ? "translateX(1.7rem) rotateY(16deg)"
            : "translateX(0) rotateY(-16deg)",
        boxShadow:
          theme === "dark"
            ? "0 0 10px 2px #6a82fb"
            : "0 0 10px 2px #ffe066",
        border: theme === "dark" ? "1.5px solid #6a82fb" : "1.5px solid #ffe066",
      }}
    />
  </button>
);
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light-theme");
      document.documentElement.classList.remove("dark-theme");
    } else {
      document.documentElement.classList.add("dark-theme");
      document.documentElement.classList.remove("light-theme");
    }
  }, [theme]);

  useEffect(() => {
    // Robust Intersection Observer Scrollspy
    let observer = null;
    let timeoutId = setTimeout(() => {
      const sectionElements = sections.map((section) => document.getElementById(section.id)).filter(Boolean);
      if (sectionElements.length === 0) return;
      observer = new window.IntersectionObserver(
        (entries) => {
          let visibleSections = entries.filter(e => e.isIntersecting);
          if (visibleSections.length > 0) {
            visibleSections.sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
            setActiveSection(visibleSections[0].target.id);
          }
        },
        {
          root: null,
          rootMargin: '-30% 0px -65% 0px',
          threshold: 0.15,
        }
      );
      sectionElements.forEach((el) => observer.observe(el));
    }, 100); // Wait 100ms for DOM to be ready
    return () => {
      if (observer) observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      setActiveSection(id); // Instantly update indicator
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-2 sm:top-4 w-full z-40 px-5 py-1 glass-navbar animate-glow-radius animate-hover"
      style={{
        borderRadius: '3rem',
        margin: '10px auto 0 auto',
        maxWidth: '1100px',
        left: 0, right: 0
      }}
    >
      <style>{`
        @keyframes glowRadius {
          0%, 100% {
            box-shadow: 0 0 10px 3px rgba(20, 184, 166, 0.18);
            border-radius: 1.25rem;
          }
          50% {
            box-shadow: 0 0 24px 10px rgba(20, 184, 166, 0.25);
            border-radius: 2rem;
          }
        }
        .animate-glow-radius {
          animation: glowRadius 3.5s ease-in-out infinite;
        }
      `}</style>
      <div className="flex items-center justify-between flex-wrap w-full">
        {/* Mobile: Logo, Theme Toggle, Menu Button */}
        <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start">
          <div
            className="text-teal-400 font-bold text-lg sm:text-xl md:text-2xl cursor-pointer ml-2 sm:ml-4"
            onClick={() => handleScroll("home")}
          >
            Portfolio
          </div>
          <div className="flex-1 flex justify-center sm:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <button
            className="sm:hidden text-teal-400 text-2xl sm:text-3xl ml-2 sm:ml-4 focus:outline-none p-1"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
            title="Open Menu"
          >
            ☰
          </button>
        </div>
        {/* Desktop Menu */}
        <ul
          className="hidden sm:flex sm:justify-center sm:gap-6 text-teal-300 text-base sm:text-lg font-semibold flex-wrap items-center flex-grow relative"
        >
          {sections.map((section) => (
            <li
              key={section.id}
              className={
                "hover:text-white cursor-pointer px-2 py-1 sm:py-0 relative transition-all duration-300" +
                (activeSection === section.id ? " text-white" : "")
              }
              onClick={() => handleScroll(section.id)}
            >
              <span className="relative z-10">{section.label}</span>
              {activeSection === section.id && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute left-0 right-0 -bottom-1 h-2 flex items-center justify-center"
                  style={{ zIndex: 1 }}
                  initial={{ scale: 0.8, opacity: 0.7, filter: "blur(2px) brightness(1.2)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0.5px) brightness(1.2)" }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 180, damping: 18 }}
                >
                  <div
                    className="w-full mx-auto rounded-full"
                    style={{
                      height: "0.7rem",
                      background:
                        "linear-gradient(90deg, #6a82fb 0%, #ffe066 100%)",
                      boxShadow:
                        "0 0 16px 4px #6a82fb88, 0 0 8px 2px #ffe066",
                      border: "1.5px solid #fff",
                      filter: "blur(0.5px) brightness(1.2)",
                      transform: "perspective(60px) rotateX(18deg)",
                      opacity: 0.95
                    }}
                  />
                </motion.div>
              )}
            </li>
          ))}
        </ul>
        {/* Desktop Theme Toggle */}
        <div className="hidden sm:flex ml-4">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
      {/* Mobile Full-Screen Slide-Down Menu (outside flex row, only one instance) */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-50"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu Overlay"
          />
          <div
            className="fixed top-0 left-0 right-0 w-full bg-[var(--color-navbar-bg)] border-b-2 border-[var(--color-border)] shadow-2xl z-50 animate-slideDown"
            style={{ minHeight: '60vh', borderBottomLeftRadius: '2.5rem', borderBottomRightRadius: '2.5rem' }}
          >
            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-teal-400 font-bold text-xl">Menu</span>
              <button
                className="text-3xl text-teal-400 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                ×
              </button>
            </div>
            <ul className="flex flex-col items-center gap-2 py-2">
              {sections.map((section) => (
                <li
                  key={section.id}
                  className="w-full text-center py-4 text-teal-300 text-lg font-semibold hover:text-white cursor-pointer border-b border-[var(--color-border)] last:border-b-0 transition-colors duration-200"
                  onClick={() => { handleScroll(section.id); setIsMobileMenuOpen(false); }}
                >
                  {section.label}
                </li>
              ))}
            </ul>
          </div>
          <style>{`
            @keyframes slideDown {
              0% { transform: translateY(-100%); opacity: 0; }
              100% { transform: translateY(0); opacity: 1; }
            }
            .animate-slideDown {
              animation: slideDown 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            }
          `}</style>
        </>
      )}
      {/* Theme Toggle Button (should be inside main flex row, after menus) */}
      
      <style>{`
        .theme-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.7rem;
          height: 2.1rem;
          padding: 0.18rem;
          border-radius: 2rem;
          border: 1.5px solid var(--color-border);
          background: var(--color-navbar-bg);
          box-shadow: 0 2px 12px 0 rgba(20,184,166,0.10), 0 0 8px 2px #6a82fb22;
          position: relative;
          transition: background 0.3s, border 0.3s, box-shadow 0.3s;
          margin-left: 1.2rem;
        }
        .theme-toggle-btn:hover, .theme-toggle-btn:focus-visible {
          background: rgba(20,184,166,0.10);
          box-shadow: 0 4px 18px 0 #14b8a6, 0 0 16px 4px #6a82fb33;
          border-color: #14b8a6;
        }
        .theme-toggle-icon {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          transition: opacity 0.3s;
        }
        .theme-toggle-icon.sun {
          left: 0.45rem;
        }
        .theme-toggle-icon.moon {
          right: 0.45rem;
        }
        .theme-toggle-slider {
          position: absolute;
          left: 0.18rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          transition: background 0.3s, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s, border 0.3s;
          z-index: 3;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
