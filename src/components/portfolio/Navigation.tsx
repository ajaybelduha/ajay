import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import HireButton from "./HireButton";

import AjayImage from "@/assets/images/Ajay-Kumar.jpeg"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 80; // Offset for nav height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const darkBgSections = ["hero", "skills", "contact"];

  const getNavItemColor = (id: string) => {
    const isActive = activeSection === id;
    if (isScrolled) {
      if (isActive) {
        return "text-blue-600";
      } else {
        if (darkBgSections.includes(activeSection)) {
          return "text-slate-300 hover:text-white";
        }
        return "text-slate-600 hover:text-slate-900";
      }
    } else {
      return isActive ? "text-white" : "text-slate-300 hover:text-white";
    }
  };

  const getMobileMenuBarColor = darkBgSections.includes(activeSection)
    ? "text-white"
    : "text-slate-900";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/0 backdrop-blur-2xl shadow-2xl shadow-black/10 border-b border-white/5"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Profile Image */}
            <button
              onClick={() => scrollToSection("hero")}
              className="group relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 cursor-pointer"
              aria-label="Go to top"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 blur-xl group-hover:blur-2xl transition-all duration-300 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative w-full h-full p-0.5 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/40">
                  <img
                    src={AjayImage}
                    alt="Ajay Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1" role="menubar">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full cursor-pointer transform-gpu transition-all duration-500 hover:scale-105 active:scale-95 
                    ${getNavItemColor(item.id)}
                  `}
                  role="menuitem"
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute inset-0 rounded-full -z-10 pointer-events-none ${
                        isScrolled
                          ? "bg-blue-100/60 backdrop-blur-xl border border-blue-200/40 shadow-lg shadow-blue-500/20"
                          : "bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg shadow-white/20"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA button */}
            <div className="hidden md:block">
              <HireButton onClick={() => scrollToSection("contact")} />
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg cursor-pointer transition-colors ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white/80" />
              ) : (
                <Menu className={`w-6 h-6 ${getMobileMenuBarColor}`} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-lg md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 pt-20">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-2xl font-semibold cursor-pointer transition-colors ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-4"
              >
                <HireButton
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToSection("contact");
                  }}
                  className="px-8 py-6 text-lg cursor-pointer"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
