// components/layout/Header.jsx
"use client";

import { useState, useEffect } from "react";
import { FaCode, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              RON CYMOND LLAVE
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <FaUser className="mr-2 text-blue-500 group-hover:text-blue-400" />
                  <span className="relative">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <FaProjectDiagram className="mr-2 text-purple-500 group-hover:text-purple-400" />
                  <span className="relative">
                    Projects
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <FaEnvelope className="mr-2 text-blue-500 group-hover:text-blue-400" />
                  <span className="relative">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
