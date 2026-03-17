import type { RefObject } from "react";

import FeedbackCard from "@/components/Sections/Feedback/FeedbackCard";
import type { Feedback } from "@/data/feedbacks";

interface FeedbackCarouselProps {
  items: readonly Feedback[];
  trackRef: RefObject<HTMLDivElement | null>;
  onPauseChange: (paused: boolean) => void;
}

export default function FeedbackCarousel({
  items,
  trackRef,
  onPauseChange,
}: FeedbackCarouselProps) {
  return (
    <div
      ref={trackRef}
      onMouseEnter={() => onPauseChange(true)}
      onMouseLeave={() => onPauseChange(false)}
      onTouchStart={() => onPauseChange(true)}
      onTouchEnd={() => onPauseChange(false)}
      className="w-full max-w-6xl grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc((100%-1.5rem)/2)] lg:auto-cols-[calc((100%-3rem)/3)] gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 hide-scrollbar"
    >
      {items.map((feedback, index) => (
        <div key={`${feedback.name}-${index}`} className="snap-start">
          <FeedbackCard feedback={feedback} />
        </div>
      ))}
    </div>
  );
}
