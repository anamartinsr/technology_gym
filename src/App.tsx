import Header from "./components/Header";
import Home from "./components/Home";
import LogoLoop from "./components/LogoLoop";
import Plan from "./components/Plan";
import Time from "./components/Time";

import IconScroll from "/iconScroll.png";
import TecnlogyScroll from "/tecnologyScroll.png";

import Logo from "/logo.png";

import Button from "./components/Button";
import Title from "./components/Title";
import Text from "./components/Text";
import Activitie from "./components/Activitie";

function App() {
  const imageLogos = [
    { src: IconScroll, alt: "IconScroll" },
    { src: TecnlogyScroll, alt: "TecnlogyScroll" },
  ];

  return (
    <>
      <div className="bg-gradient-to-t from-[#9cff1e] to-[#f7f6f6]">
        <Header />
        <Home />

        <div className="bg-black">
          <LogoLoop
            logos={imageLogos}
            speed={50}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>

        <section className="bg-gradient-to-r from-[#000000] to-[#000000] text-white py-20 px-6 md:px-20 text-center">
          <img src={Logo} className="w-50" alt="Technology" />
          <div className="max-w-3xl mx-auto">
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
        <Activitie />

        <Time />

        <Plan />
      </div>
    </>
  );
}

export default App;
