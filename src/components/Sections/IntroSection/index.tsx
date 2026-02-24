import type { JSX } from "react";
import Button from "../../ui/Button";
import Text from "../../common/Text";
import Title from "../../common/Title";
import HomeImg from "/home.png";
import { scrollToSection } from "../../../utils/scrollToSection";

export default function IntroSection(): JSX.Element {
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
          <Button text="MATRICULE-SE" variant="primary" to="/enrollment" />
          <Button
            text="UNIDADES"
            variant="primary"
            onClick={(e) => scrollToSection(e, "#unit")}
          />
          <Button
            text="PLANOS"
            variant="primary"
            onClick={(e) => scrollToSection(e, "#plan")}
          />
        </div>
      </div>
    </div>
  );
}
