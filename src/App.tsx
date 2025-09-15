import Header from "./components/layout/Header/Header";
import Home from "./components/Home/Home";
import LogoLoop from "./components/ui/LogoLoop";
import Plan from "./components/Plan/Plan";
import Time from "./components/Schedule/Schedule";

import IconScroll from "./assets/iconScroll.png";
import Weigths from "./assets/weigths.jpg";
import TecnlogyScroll from "./assets/tecnologyScroll.png";
import Activitie from "./components/Activitie/Activitie";
import HeroSection from "./components/TextBlock/TextBlock";
import Units from "./components/Unit/Unit";
import Footer from "./components/layout/Footer/Footer";
import Text from "./components/common/Text";
import Button from "./components/ui/Button";
import Form from "./components/form/EnrollmentForm";
import Carrosel from "./components/ui/Carrosel";

import Swimming from "./assets/swimming.jpg";
import Zumba from "./assets/zumba.jpg";
import Crossfit from "./assets/crossfit.jpg";
import Yoga from "./assets/yoga.jpg";
import HomeImg from "./assets/home.png";

import Title from "./components/common/Title";

function App() {
  const imageLogos = [
    { src: IconScroll, alt: "IconScroll" },
    { src: TecnlogyScroll, alt: "TecnlogyScroll" },
  ];

  const images = [
    { src: Zumba, alt: "Zumba Technology" },
    { src: Crossfit, alt: "Crossfit Technology" },
    { src: Yoga, alt: "Yoga Technology" },
    { src: Weigths, alt: "Weigths Technology" },
    { src: Swimming, alt: "Swimming Technology" },
  ];

  return (
    <>
      <div>
        <Header />

        <section className=" bg-black p-8">
          <div className="flex flex-col">
            <div className="relative w-full md:h-80 h-screen">
              <img
                src={HomeImg}
                alt="home"
                className="w-full h-full object-cover"
              />

              <div className="absolute top-1/4 md:top-1/3 left-6 md:left-16 flex flex-col items-start md:items-start text-white max-w-xl">
                <Title variant="primary" text="Technology Gym" />

                <Text
                  pColor="text-white"
                  before="Faça sua "
                  textSpan="Matrícula "
                  after="e vem fazer parte da nossa família."
                />
              </div>
            </div>
            <Form />
          </div>
        </section>

        {/* <Home />

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

        <Plan /> */}

        <Footer />
      </div>
    </>
  );
}

export default App;
