interface FeedbackAuthorProps {
  name: string;
}

export default function FeedbackAuthor({ name }: FeedbackAuthorProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-(--secondary-color) text-(--white) flex items-center justify-center text-sm font-bold">
        {initials}
      </div>
      <div>
        <h3 className="font-bold text-(--secondary-color)">{name}</h3>
      </div>
    </div>
  );
}
