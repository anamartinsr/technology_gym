import Activitie from "./components/Activitie";
import Header from "./components/Header";
import Home from "./components/Home";
import LogoLoop from "./components/LogoLoop";
// import RollingGallery from './components/RollingGallery';
import Plan from "./components/Plan";
import Time from "./components/Time";

import IconScroll from "/iconScroll.png";
import TecnlogyScroll from "/tecnologyScroll.png";

import Zumba from "/zumba.jpg";
import Crossfit from "/crossfit.jpg";
import Yoga from "/yoga.jpg";

function App() {
  const imageLogos = [
    { src: IconScroll, alt: "Company 1" },
    { src: TecnlogyScroll, alt: "Company 1" },
  ];

  const image = [
    { src: Zumba, alt: "Company 1" },
    { src: Crossfit, alt: "Company 1" },
    { src: Yoga, alt: "Company 1" },
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

        {/* <Activitie /> */}

        {/* <div className="bg-[#9cff1e] h-screen p-8 ">
          <h2 className="text-white font-bold text-center text-3xl">Atividades que transformam seu treino</h2>
          <p className="text-white">Na Technology Gym, unimos inovação e movimento para oferecer uma experiência única de treino. Nossa academia tecnológica e inovadora foi pensada para quem busca saúde, bem-estar e performance em um só lugar.</p>
          <p>Aqui, você encontra aulas dinâmicas e diversificadas, que atendem a todos os estilos e objetivos</p>
          <p>Zumba e danças variadas: energia, diversão e alto gasto calórico ao som de músicas envolventes.</p>
          <p>Crossfit: treinos intensos que desafiam seus limites e desenvolvem força, resistência e explosão.</p>
          <p>Natação: benefícios completos para corpo e mente, com técnicas que vão do iniciante ao avançado.</p>
          <p>Spinning: pedale em alto ritmo com treinos motivadores que melhoram o condicionamento e queimam calorias.</p>
          <p>Yoga e meditação: equilíbrio físico e mental, promovendo relaxamento, foco e flexibilidade.</p>
          <div className="flex  items-center justify-center">
            <LogoLoop
              logos={image}
              speed={80}
              direction="left"
              logoHeight={250}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#9cff1e"
              ariaLabel="Technology partners"
            />
          </div>
        </div> */}
        <Plan />
        <Time />
      </div>
    </>
  );
}

export default App;
