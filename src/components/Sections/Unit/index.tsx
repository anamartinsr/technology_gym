import type { JSX } from "react";
import Title from "../../common/Title";
import UnitCard from "./UnitCard";
import Logo from "../../../assets/logo.png";
import unit from "../../../data/unit";

export default function Units(): JSX.Element {
  return (
    <section
      id="unit"
      className="bg-(--secondary-color) py-16 px-6 md:px-20 text-center"
    >
      <div className="flex justify-center items-center">
        <Title variant="primary" text="Nossas Unidades" />
        <img src={Logo} alt="Logo Tecnhology" />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        {unit.map((unit, index) => (
          <UnitCard key={index} {...unit} />
        ))}
      </div>
    </section>
  );
}
