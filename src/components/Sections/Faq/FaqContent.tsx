import FaqCategory from "@/components/Sections/Faq/FaqCategory";
import FaqIllustration from "@/components/Sections/Faq/FaqIllustration";
import type { FAQGroup } from "@/data/faq";

interface FaqContentProps {
  groups: readonly FAQGroup[];
  openId: string | null;
  onToggle: (id: string) => void;
}

export default function FaqContent({
  groups,
  openId,
  onToggle,
}: FaqContentProps) {
  return (
    <div className="w-full max-w-7xl mt-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
      <div className="w-full lg:w-1/2">
        {groups.map((group) => (
          <FaqCategory
            key={group.category}
            group={group}
            openId={openId}
            onToggle={onToggle}
          />
        ))}
      </div>

      <FaqIllustration />
    </div>
  );
}
