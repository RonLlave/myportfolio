// components/layout/Header.jsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, Layers, FolderGit2, Mail } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About", Icon: User },
  { href: "#skills", label: "Skills", Icon: Layers },
  { href: "#projects", label: "Projects", Icon: FolderGit2 },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 w-full backdrop-blur-sm transition-colors duration-300 ${
        isScrolled
          ? "border-b border-gray-800 bg-gray-900/95 shadow-lg"
          : "bg-gray-900/70"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-xl font-bold text-transparent transition-opacity hover:opacity-80 sm:text-2xl"
          >
            RON CYMOND LLAVE
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    <Icon
                      size={16}
                      className="mr-2 text-blue-500 group-hover:text-blue-400"
                    />
                    <span className="relative">
                      {label}
                      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="text-gray-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-gray-800 bg-gray-900/95 md:hidden"
        >
          <ul className="space-y-1 px-4 py-3">
            {navLinks.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 rounded-md px-2 py-3 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                >
                  <Icon size={18} className="text-blue-500" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
