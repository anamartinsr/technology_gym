interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

export default function ContactItem({ icon, text }: ContactItemProps) {
  return (
    <li className="flex items-center gap-2">
      {icon} {text}
    </li>
  );
}
