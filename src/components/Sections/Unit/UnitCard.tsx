import Button from "../../ui/Button";

interface UnitCardProps {
  name: string;
  address: string;
  image: string;
  alt: string;
  buttonText: string;
}

export default function UnitCard({
  name,
  address,
  image,
  alt,
  buttonText,
}: UnitCardProps) {
  return (
    <div className="bg-(--primary-color) text-(--secondary-color) flex flex-col gap-4 p-6 rounded-2xl shadow-lg transition-transform hover:scale-105">
      <img
        src={image}
        alt={alt}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm mt-2">{address}</p>
      <Button text={buttonText} variant="secondary" />
    </div>
  );
}
