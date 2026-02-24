import type { JSX } from "react";
import Button from "../../ui/Button";
import Text from "../../common/Text";
import Title from "../../common/Title";
import Logo from "../../../assets/logo.png";

export default function TextBlock(): JSX.Element {
  return (
    <section className="bg-(--secondary-color) text-white py-20 px-6 md:px-20 text-center">
      <img src={Logo} className="w-50" alt="Technology" />
      <div className="max-w-3xl mx-auto gap-6 flex flex-col items-center">
        <Title
          variant="primary"
          text="A melhor academia para transformar sua rotina!"
        />

        <Text
          pColor="text-white"
          spanColor="text-(--primary-color)"
          before="Na "
          textSpan="Technology Gym"
          after=", oferecemos inovação, tecnologia e cuidado em cada detalhe para que você alcance seus objetivos com motivação e bem-estar."
        />

        <Button text="Comece Agora" variant="primary" to="/enrollment" />
      </div>
    </section>
  );
}
