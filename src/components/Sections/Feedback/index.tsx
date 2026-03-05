import { useCallback, useEffect, useRef, useState, type JSX } from "react";
import FeedbackCard from "./FeedbackCard";
import { feedbacks } from "../../../data/feedbacks";

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

  const handleDotClick = (index: number) => {
    scrollToStep(index);
  };

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
        Testemunhos
      </p>

      <h2 className="text-3xl md:text-5xl font-bold text-(--primary-color) text-center">
        O que nossos alunos dizem
      </h2>

      <div
        ref={trackRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="w-full max-w-6xl grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc((100%-1.5rem)/2)] lg:auto-cols-[calc((100%-3rem)/3)] gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 hide-scrollbar"
      >
        {feedbacks.map((feedback, index) => (
          <div key={index} className="snap-start">
            <FeedbackCard {...feedback} />
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Ir para depoimento ${index + 1}`}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === activeStep
                ? "bg-(--secondary-color)"
                : "bg-(--primary-color) opacity-40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
