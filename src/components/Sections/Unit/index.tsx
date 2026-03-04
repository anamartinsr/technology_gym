import type { JSX } from "react";
import Title from "../../common/Title";
import Text from "../../common/Text";
import UnitCard from "./UnitCard";
import Logo from "../../../assets/logo.png";
import unit from "../../../data/unit";

export default function Units(): JSX.Element {
  return (
    <section
      id="unit"
      className="bg-(--secondary-color) py-16 md:py-20 px-6 md:px-20 text-center"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
        <Title variant="primary" text="Nossas Unidades" />
        <img src={Logo} alt="Logo Tecnhology" className="h-12 md:h-16" />
      </div>

      <Text
        pColor="text-white"
        spanColor="text-(--primary-color)"
        before="Encontre a unidade mais "
        textSpan="próxima a você "
        after="e comece sua transformação hoje mesmo."
      />

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12 w-full max-w-6xl mx-auto">
        {unit.map((unit, index) => (
          <UnitCard key={index} {...unit} />
        ))}
      </div>
    </section>
  );
}
