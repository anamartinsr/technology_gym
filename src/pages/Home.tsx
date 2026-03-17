import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionLoading from "@/components/common/SectionLoading";
import LogoLoop from "@/components/ui/LogoLoop";
import { imageAssets } from "@/data/images";
import IntroSection from "@/components/Sections/IntroSection/index";
import { scrollToSection } from "@/utils/scrollToSection";

const TextBlock = lazy(() => import("@/components/Sections/TextBlock/index"));
const Activitie = lazy(() => import("@/components/Sections/Activitie/index"));
const Feedback = lazy(() => import("@/components/Sections/Feedback/index"));
const Units = lazy(() => import("@/components/Sections/Unit/index"));
const Schedule = lazy(() => import("@/components/Sections/Schedule/index"));
const Plan = lazy(() => import("@/components/Sections/Plan/index"));
const FAQ = lazy(() => import("@/components/Sections/Faq/index"));

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const timeoutId = window.setTimeout(() => {
      scrollToSection(null, location.hash);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash]);

  const imageLogos = [imageAssets.logoLoopIcon, imageAssets.logoLoopTechnology];

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

      <Suspense fallback={<SectionLoading />}>
        <TextBlock />
        <Activitie />
        <Feedback />
        <Units />
        <Schedule />
        <Plan />
        <FAQ />
      </Suspense>
    </>
  );
}
