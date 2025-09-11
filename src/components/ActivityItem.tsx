interface ActivityItemProps {
  name: string;
}

export default function ActivityItem({ name }: ActivityItemProps) {
  return <p className="text-black text-lg md:text-xl">➤ {name}</p>;
}
