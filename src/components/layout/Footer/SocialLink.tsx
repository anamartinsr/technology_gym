interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function SocialLink({ href, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="p-2 bg-(--primary-color) rounded-full hover:bg-lime-500 transition-colors"
    >
      {children}
    </a>
  );
}
