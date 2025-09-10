import ItemTime from "./ItemTime";

export default function Time() {
  return (
    <div className="bg-black w-full flex flex-col items-center p-6">
      <p className="text-4xl md:text-5xl text-[#9cff1e] font-bold mb-6">
        Horários
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-32 justify-between">
        <ItemTime day="Segunda - Sexta" time="05:00 / 00:00" />

        <ItemTime day="Sábado" time="05:00 / 15:00" />

        <ItemTime day="Domingo e Feriados" time="05:00 / 14:00" />
      </div>
    </div>
  );
}
