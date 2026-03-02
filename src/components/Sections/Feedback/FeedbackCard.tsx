import type { Feedback } from "../../../data/feedbacks";

export default function FeedbackCard({ name, plan, message, time }: Feedback) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="w-full md:max-w-sm rounded-2xl border border-(--primary-color) bg-(--white) p-6 text-left">
      <div className="mb-4 flex items-center gap-1 text-(--primary-color)">
        <div className="flex items-center justify-center bg-(--primary-color) w-7 h-7 rounded-full">
          <span className="text-(--secondary-color) font-bold">G</span>
        </div>

        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-(--secondary-color) text-(--white) flex items-center justify-center text-sm font-bold">
          {initials}
        </div>
        <div>
          <h3 className="font-bold text-(--secondary-color)">{name}</h3>
          <p className="text-xs text-(--gray)">{time}</p>
        </div>
      </div>

      <p className="text-(--gray) leading-relaxed">{message}</p>
      <div className="bg-(--primary-color) p-2 rounded-lg mt-4 inline-block">
        <p className=" text-sm font-semibold text-(--secondary-color)">
          {plan}
        </p>
      </div>
    </article>
  );
}
