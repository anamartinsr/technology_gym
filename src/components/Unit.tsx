import type { JSX } from "react";
import Title from "./Title";
import UnitCard from "./UnitCard";
import Gymfacade from "/gymfacade.jpg";
import Logo from "/logo.png";

export default function Units(): JSX.Element {
  const buttonText = "Vem pra Technology Gym";

  return (
    <section id="unit" className="bg-black py-16 px-6 md:px-20 text-center">
      <div className="flex justify-center items-center">
        <Title variant="primary" text="Nossas Unidades" />
        <img src={Logo} alt="Logo Tecnhology" />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10">
        <UnitCard
          name="Unidade Centro"
          address="Rua Exemplo, 123 - Centro"
          image={Gymfacade}
          alt="Unidade Centro"
          buttonText={buttonText}
        />
        <UnitCard
          name="Unidade Zona Sul"
          address="Av. Modelo, 456 - Zona Sul"
          image={Gymfacade}
          alt="Unidade Zona Sul"
          buttonText={buttonText}
        />
        <UnitCard
          name="Unidade Zona Norte"
          address="Rua Inspiração, 789 - Zona Norte"
          image={Gymfacade}
          alt="Unidade Zona Norte"
          buttonText={buttonText}
        />
      </div>
    </section>
  );
}
