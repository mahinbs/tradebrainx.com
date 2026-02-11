import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "markets", label: "Markets" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "testimonials", label: "Testimonials" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 80;
  const rect = el.getBoundingClientRect();
  const offsetTop = rect.top + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
};

const AiPredictionHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#05020a]/80 backdrop-blur-xl border-b border-purple-500/10 py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() =>
              pathname === "/" ? scrollToSection("hero") : navigate("/")
            }
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              {/* <img
                src="/logo.png"
                alt="tradebrainx.com"
                className="relative w-32 md:w-40 object-contain"
              /> */}
              <h1 className="text-2xl font-bold">TradeBrainXs</h1>
            </div>
          </div>

          {/* Desktop Nav */}
          {pathname === "/" && (
            <>
              <nav className="hidden lg:flex items-center gap-8">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors uppercase tracking-wider relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </nav>
            </>
          )}

          {/* CTA & Mobile Toggle */}
          {pathname === "/" && (
            <div className="lg:hidden flex items-center gap-4">
              <button
                className="p-2 text-gray-300 hover:text-white"
                onClick={() => setIsOpen(true)}
                aria-label="Open navigation"
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      {pathname === "/" && (
        <div
          className={`fixed inset-0 z-[60] transform transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 w-[80vw] max-w-sm bg-[#0a0510] border-l border-purple-500/20 shadow-2xl flex flex-col p-6">
            <div className="flex justify-end items-center mb-8">
              {/* <img src="/logo.png" alt="Logo" className="w-28 opacity-80" /> */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left text-lg font-medium text-gray-300 hover:text-purple-400 py-3 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-auto">
              <Button
                onClick={() => {
                  scrollToSection("demo");
                  setIsOpen(false);
                }}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white py-6 text-lg rounded-xl shadow-lg shadow-purple-900/20"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiPredictionHeader;
