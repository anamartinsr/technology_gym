import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import LogoHeader from "./LogoHeader";
import { scrollToSection } from "../../../utils/scrollToSection";

const navLinks = [
  { href: "#activitie", label: "Atividades" },
  { href: "#unit", label: "Unidades" },
  { href: "#time", label: "Horários" },
  { href: "#plan", label: "Planos" },
  { href: "#feedback", label: "Avaliações" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent | null, href: string) => {
    if (location.pathname !== "/") {
      if (e) e.preventDefault();
      navigate(`/${href}`);
      setOpen(false);
      return;
    }

    scrollToSection(e, href, setOpen);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-(--secondary-color) border-b border-white/10 shadow-sm" : "bg-(--secondary-color)"}`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-2 px-4">
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          <LogoHeader />
        </h1>

        <ul className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <NavLink
                href={href}
                label={label}
                onClick={(e) => handleNavClick(e, href)}
              />
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && <MobileMenu navLinks={navLinks} onLinkClick={handleNavClick} />}
    </header>
  );
}
