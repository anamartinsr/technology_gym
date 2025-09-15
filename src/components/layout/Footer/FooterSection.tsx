interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h4 className="text-(--primary-color) font-bold text-lg mb-4">{title}</h4>
      {children}
    </div>
  );
}
