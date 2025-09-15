import Header from "./components/layout/Header/Header";
import Home from "./components/Home/Home";
import LogoLoop from "./components/ui/LogoLoop";
import Plan from "./components/Plan/Plan";
import Time from "./components/Schedule/Schedule";

import IconScroll from "./assets/iconScroll.png";
import TecnlogyScroll from "./assets/tecnologyScroll.png";
import Activitie from "./components/Activitie/Activitie";
import HeroSection from "./components/TextBlock/TextBlock";
import Units from "./components/Unit/Unit";
import Footer from "./components/layout/Footer/Footer";

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

        <Time />

        <Plan />

        <Footer />
      </div>
    </>
  );
}

export default App;
