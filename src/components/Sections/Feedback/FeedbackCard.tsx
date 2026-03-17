import type { Feedback } from "@/data/feedbacks";
import FeedbackAuthor from "@/components/Sections/Feedback/FeedbackAuthor";
import FeedbackRating from "@/components/Sections/Feedback/FeedbackRating";

interface FeedbackCardProps {
  feedback: Feedback;
}

export default function FeedbackCard({ feedback }: FeedbackCardProps) {
  const { name, plan, message } = feedback;

  return (
    <article className="w-full md:max-w-sm rounded-2xl border border-(--primary-color) bg-(--white) p-6 text-left">
      <FeedbackRating />
      <FeedbackAuthor name={name} />

      <p className="text-(--gray) leading-relaxed">{message}</p>
      <div className="bg-(--primary-color) p-2 rounded-lg mt-4 inline-block">
        <p className=" text-sm font-semibold text-(--secondary-color)">
          {plan}
        </p>
      </div>
    </article>
  );
}
