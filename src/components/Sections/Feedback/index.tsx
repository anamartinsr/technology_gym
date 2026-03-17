import { useCallback, useEffect, useRef, useState, type JSX } from "react";
import FeedbackCarousel from "@/components/Sections/Feedback/FeedbackCarousel";
import FeedbackCarouselDots from "@/components/Sections/Feedback/FeedbackCarouselDots";
import { feedbacks } from "@/data/feedbacks";
import { UI_TEXT } from "@/constants/uiText";

export default function Feedback(): JSX.Element {
  const visibleCards = 3;
  const totalSteps = Math.max(1, feedbacks.length - visibleCards + 1);
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );

  const updateActiveStep = useCallback(() => {
    const track = trackRef.current;

    if (!track || totalSteps === 1) {
      setActiveStep(0);
      return;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;

    if (maxScroll <= 0) {
      setActiveStep(0);
      return;
    }

    const nextStep = Math.round(
      (track.scrollLeft / maxScroll) * (totalSteps - 1),
    );
    setActiveStep(Math.min(totalSteps - 1, Math.max(0, nextStep)));
  }, [totalSteps]);

  const scrollToStep = useCallback(
    (index: number) => {
      const track = trackRef.current;

      if (!track || totalSteps === 1) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      const targetLeft = (maxScroll / (totalSteps - 1)) * index;

      track.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
    },
    [totalSteps],
  );

  const handleDotClick = useCallback(
    (index: number) => {
      setActiveStep(index);
      scrollToStep(index);
    },
    [scrollToStep],
  );

  useEffect(() => {
    if (isPaused || totalSteps === 1) return;

    autoScrollInterval.current = setInterval(() => {
      setActiveStep((prev) => {
        const nextStep = (prev + 1) % totalSteps;
        scrollToStep(nextStep);
        return nextStep;
      });
    }, 3000);

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [isPaused, totalSteps, scrollToStep]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    updateActiveStep();
    track.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);

    return () => {
      track.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, [updateActiveStep]);

  return (
    <section
      id="feedback"
      className="bg-(--white) px-6 md:px-16 py-14 flex flex-col items-center gap-8"
    >
      <p className="text-(--secondary-color) text-xs tracking-[0.25em] font-semibold uppercase">
        {UI_TEXT.sections.testimonialsBadge}
      </p>

      <h2 className="text-3xl md:text-5xl font-bold text-(--primary-color) text-center">
        {UI_TEXT.sections.testimonialsTitle}
      </h2>

      <FeedbackCarousel
        items={feedbacks}
        trackRef={trackRef}
        onPauseChange={setIsPaused}
      />

      <FeedbackCarouselDots
        totalSteps={totalSteps}
        activeStep={activeStep}
        onDotClick={handleDotClick}
      />
    </section>
  );
}
