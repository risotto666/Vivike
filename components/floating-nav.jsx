"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function FloatingNav({ navItems }) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map((item) => item.link.substring(1));

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <motion.div
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: scrolled ? 0 : 100,
        opacity: scrolled ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="mx-auto px-4 w-full max-w-md">
        <nav className="flex items-center  justify-between rounded-full bg-white/90 backdrop-blur-md py-2 px-2 shadow-lg border border-[#e6dcc6] w-full">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`px-2 py-1.5 text-xs md:text-sm font-medium rounded-full transition-colors duration-200 ${
                activeSection === item.link.substring(1)
                  ? "bg-[#8c7851] text-white"
                  : "text-gray-600 hover:text-[#8c7851]"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}
