interface NavLinkProps {
  href: string;
  label: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      className="relative py-2 px-3 text-white hover:text-(--primary-color) transition-colors
                 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-(--primary-color)
                 after:left-0 after:-bottom-1 after:transition-all after:duration-300
                 hover:after:w-full"
      onClick={onClick}
    >
      {label}
    </a>
  );
}
