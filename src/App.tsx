import Activitie from "./components/Activitie";
import Header from "./components/Header";
import Home from "./components/Home";
import LogoLoop from "./components/LogoLoop";
import Plan from "./components/Plan";
import Time from "./components/Time";

import IconScroll from "/iconScroll.png";
import TecnlogyScroll from "/tecnologyScroll.png";

function App() {
  const imageLogos = [
    { src: IconScroll, alt: "Company 1" },
    { src: TecnlogyScroll, alt: "Company 1" },
  ];

  return (
    <>
      <div className="bg-white">
        <Header />
        <Home />

        <div className="bg-black">
          <LogoLoop
            logos={imageLogos}
            speed={120}
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

        <Time />
        <Activitie />
        <Plan />
      </div>
    </>
  );
}

export default App;
