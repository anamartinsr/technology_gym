import Button from "../../ui/Button";

interface UnitCardProps {
  name: string;
  address: string;
  image: string;
  alt: string;
}

export default function UnitCard({ name, address, image, alt }: UnitCardProps) {
  return (
    <div className="bg-(--primary-color) text-(--secondary-color) flex flex-col gap-4 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full md:w-80 overflow-hidden">
      <div className="relative h-48 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>

        <div className="flex items-start gap-2 mb-4">
          <p className="text-sm leading-relaxed">{address}</p>
        </div>

        <div className="text-xs text-gray-700 space-y-1">
          <p>
            <span className="font-semibold">Segunda - Sexta</span> 05:00 / 00:00
          </p>
          <p>
            <span className="font-semibold">Sábado</span> 05:00 / 15:00
          </p>
          <p>
            <span className="font-semibold">Domingo e Feriados</span> 05:00 /
            14:00
          </p>
        </div>
      </div>

      <Button
        text="Vem pra Technology Gym"
        variant="secondary"
        to="/enrollment"
      />
    </div>
  );
}
