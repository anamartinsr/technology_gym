interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
  onClose: () => void;
}

export default function MobileMenu({ navLinks, onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-lime-400/90 backdrop-blur-md px-6 py-4 space-y-4">
      {navLinks.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          onClick={onClose}
          className="block text-white hover:text-black transition-colors"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
