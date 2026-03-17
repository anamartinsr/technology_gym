import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import NavLink from "@/components/layout/Header/NavLink";
import MobileMenu from "@/components/layout/Header/MobileMenu";
import LogoHeader from "@/components/layout/Header/LogoHeader";
import { scrollToSection } from "@/utils/scrollToSection";
import { navigationLinks } from "@/data/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = useCallback(
    (e: React.MouseEvent | null, href: string) => {
      if (location.pathname !== "/") {
        if (e) e.preventDefault();
        navigate(`/${href}`);
        setOpen(false);
        return;
      }

      scrollToSection(e, href, setOpen);
    },
    [location.pathname, navigate],
  );

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
        <Link
          to="/"
          aria-label={"Ir para a home da Technology Gym"}
          className="text-2xl font-extrabold text-white tracking-wide"
        >
          <LogoHeader />
        </Link>

        <ul className="hidden md:flex space-x-6">
          {navigationLinks.map(({ href, label }) => (
            <li key={href}>
              <NavLink
                href={href}
                label={label}
                onClick={(e) => handleNavClick(e, href)}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <MobileMenu navLinks={navigationLinks} onLinkClick={handleNavClick} />
      )}
    </header>
  );
}
