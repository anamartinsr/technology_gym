interface ItemActiviteProps {
  src: string;
  alt: string;
  title: string;
}

export default function ItemActivite({ src, alt, title }: ItemActiviteProps) {
  return (
    <div className="bg-gradient-to-t from-[#e8fcc4] to-[#9cff1e] p-8 rounded-xl m-4 flex flex-col items-center">
      <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
      <img src={src} alt={alt} className="max-w-[300px] rounded-xl" />
    </div>
  );
}
