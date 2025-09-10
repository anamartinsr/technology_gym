"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import Logo from "/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#time", label: "Horários" },
    { href: "#plan", label: "Planos" },
  ];

  return (
    <header
      className={`w-full  top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black border-b border-white/10 shadow-sm"
          : "bg-black"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          <img src={Logo} alt="Logo" className="w-22" />
        </h1>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="relative py-2 px-3 text-white hover:text-lime-400 transition-colors
                           after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-lime-400
                           after:left-0 after:-bottom-1 after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-lime-400/90 backdrop-blur-md px-6 py-4 space-y-4">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-white hover:text-black transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
