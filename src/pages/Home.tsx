import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Activitie from "../components/Sections/Activitie/index";
import Feedback from "../components/Sections/Feedback/index";
import Plan from "../components/Sections/Plan/index";
import Schedule from "../components/Sections/Schedule/index";
import TextBlock from "../components/Sections/TextBlock/index";
import LogoLoop from "../components/ui/LogoLoop";
import Units from "../components/Sections/Unit/index";
import IntroSection from "../components/Sections/IntroSection/index";
import FAQ from "../components/Sections/Faq/index";
import { scrollToSection } from "../utils/scrollToSection";

import IconScroll from "/iconScroll.png";
import TecnlogyScroll from "/tecnologyScroll.png";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const timeoutId = window.setTimeout(() => {
      scrollToSection(null, location.hash);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash]);

  const imageLogos = [
    { src: IconScroll, alt: "IconScroll" },
    { src: TecnlogyScroll, alt: "TecnlogyScroll" },
  ];

  return (
    <>
      <IntroSection />

      <div className="bg-(--secondary-color)">
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

      <TextBlock />

      <Activitie />

      <Feedback />

      <Units />

      <Schedule />

      <Plan />

      <FAQ />
    </>
  );
}
