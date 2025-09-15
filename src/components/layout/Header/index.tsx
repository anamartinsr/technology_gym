import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import LogoHeader from "./LogoHeader";

const navLinks = [
  { href: "#activitie", label: "Atividades" },
  { href: "#unit", label: "Unidades" },
  { href: "#time", label: "Horários" },
  { href: "#plan", label: "Planos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(e: React.MouseEvent, href: string) {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  return (
    <header
      className={`w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-(--secondary-color) border-b border-white/10 shadow-sm" : "bg-(--secondary-color)"}`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          <LogoHeader />
        </h1>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <NavLink
                href={href}
                label={label}
                onClick={(e) => scrollToSection(e, href)}
              />
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <MobileMenu navLinks={navLinks} onClose={() => setOpen(false)} />
      )}
    </header>
  );
}
