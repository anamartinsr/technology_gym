import Header from "./components/Header";
import Home from "./components/Home";
import LogoLoop from "./components/LogoLoop";
import Plan from "./components/Plan";
import Time from "./components/Time";

import IconScroll from "/iconScroll.png";
import TecnlogyScroll from "/tecnologyScroll.png";
import Activitie from "./components/Activitie";
import HeroSection from "./components/HeroSection";
import Units from "./components/Unit";
import Footer from "./components/Footer";

function App() {
  const imageLogos = [
    { src: IconScroll, alt: "IconScroll" },
    { src: TecnlogyScroll, alt: "TecnlogyScroll" },
  ];

  return (
    <>
      <div>
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

        <HeroSection />

        <Activitie />

        <Units />

        <Plan />

        <Time />

        <Footer />
      </div>
    </>
  );
}

export default App;
