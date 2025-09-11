import Button from "./Button";
import Text from "./Text";
import Title from "./Title";
import Logo from "/logo.png";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-[#000000] to-[#000000] text-white py-20 px-6 md:px-20 text-center">
      <img src={Logo} className="w-50" alt="Technology" />
      <div className="max-w-3xl mx-auto gap-6 flex flex-col items-center">
        <Title
          variant="primary"
          text="A melhor academia para transformar sua rotina!"
        />

        <Text
          pColor="text-white"
          spanColor="text-[#9cff1e]"
          before="Na "
          textSpan="Technology Gym"
          after=", oferecemos inovação, tecnologia e cuidado em cada detalhe para que você alcance seus objetivos com motivação e bem-estar."
        />

        <Button text="Comece Agora" variant="primary" />
      </div>
    </section>
  );
}
