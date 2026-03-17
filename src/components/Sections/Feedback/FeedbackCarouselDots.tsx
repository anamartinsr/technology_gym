interface FeedbackCarouselDotsProps {
  totalSteps: number;
  activeStep: number;
  onDotClick: (index: number) => void;
}

export default function FeedbackCarouselDots({
  totalSteps,
  activeStep,
  onDotClick,
}: FeedbackCarouselDotsProps) {
  return (
    <div className="mt-2 flex items-center justify-center gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Ir para depoimento ${index + 1}`}
          aria-pressed={index === activeStep}
          onClick={() => onDotClick(index)}
          className={`h-3 w-3 rounded-full transition-colors ${
            index === activeStep
              ? "bg-(--secondary-color)"
              : "bg-(--primary-color) opacity-60"
          }`}
        />
      ))}
    </div>
  );
}
