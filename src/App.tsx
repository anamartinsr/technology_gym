import CardActivitie from "./components/CardActivitie";
import Header from "./components/Header";
import Home from "./components/Home";
import LogoLoop from "./components/LogoLoop";
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
      <div className="bg-black">
        <Header />
        <Home />
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

        <Time />
        <CardActivitie />
      </div>
    </>
  );
}

export default App;
