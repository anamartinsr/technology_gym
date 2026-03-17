interface MobileMenuProps {
  navLinks: readonly { href: string; label: string }[];
  onLinkClick: (e: React.MouseEvent, href: string) => void;
}

export default function MobileMenu({ navLinks, onLinkClick }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-(--primary-color)/90 backdrop-blur-md px-6 py-4 space-y-4">
      {navLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={(e) => onLinkClick(e, href)}
          className="block text-(--secondary-color) hover:text-zinc-800 transition-colors font-semibold"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
