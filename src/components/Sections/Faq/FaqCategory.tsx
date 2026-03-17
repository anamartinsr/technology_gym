import type { FAQGroup } from "@/data/faq";
import FaqItem from "@/components/Sections/Faq/FaqItem";

interface FaqCategoryProps {
  group: FAQGroup;
  openId: string | null;
  onToggle: (id: string) => void;
}

export default function FaqCategory({
  group,
  openId,
  onToggle,
}: FaqCategoryProps) {
  return (
    <div className="mb-12">
      <p className="text-(--primary-color) font-bold text-sm md:text-base mb-6 tracking-wide">
        {group.category}
      </p>

      <div className="space-y-4">
        {group.items.map((faq) => (
          <FaqItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}
