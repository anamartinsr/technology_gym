import type { JSX } from "react";
import Button from "./Button";
import Text from "./Text";
import Title from "./Title";
import HomeImg from "/home.png";

export default function Home(): JSX.Element {
  return (
    <div className="relative w-full md:h-auto h-screen">
      <img src={HomeImg} alt="home" className="w-full h-full object-cover" />

      <div className="absolute top-1/4 md:top-1/3 left-6 md:left-16 flex flex-col items-start md:items-start text-white max-w-xl">
        <Title variant="primary" text="Technology Gym" />

        <Text
          pColor="text-white"
          before="Transforme seu "
          textSpan="treino "
          after="com inovação, tecnologia e bem-estar."
        />

        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
          <Button text="MATRICULE-SE" variant="primary" />
          <Button text="UNIDADES" variant="primary" />
          <Button text="PLANOS" variant="primary" />
        </div>
      </div>
    </div>
  );
}
