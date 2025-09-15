interface BulletItemProps {
  name: string;
}

export default function BulletItem({ name }: BulletItemProps) {
  return (
    <p className="text-(--secondary-color) text-lg md:text-xl">➤ {name}</p>
  );
}
