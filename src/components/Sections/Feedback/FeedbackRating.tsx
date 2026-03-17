interface FeedbackRatingProps {
  stars?: number;
}

export default function FeedbackRating({ stars = 5 }: FeedbackRatingProps) {
  return (
    <div className="mb-4 flex items-center gap-1 text-(--primary-color)">
      <div className="flex items-center justify-center bg-(--primary-color) w-7 h-7 rounded-full">
        <span className="text-(--secondary-color) font-bold">G</span>
      </div>

      {Array.from({ length: stars }).map((_, index) => (
        <span key={index}>★</span>
      ))}
    </div>
  );
}
