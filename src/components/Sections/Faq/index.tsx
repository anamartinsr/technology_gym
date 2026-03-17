import type { JSX } from "react";
import { useCallback, useMemo, useState } from "react";
import Title from "@/components/common/Title";
import Text from "@/components/common/Text";
import FaqContent from "@/components/Sections/Faq/FaqContent";
import { faqs, type FAQGroup } from "@/data/faq";
import { UI_TEXT } from "@/constants/uiText";

export default function FAQ(): JSX.Element {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = useCallback(
    (id: string) => {
      setOpenId(openId === id ? null : id);
    },
    [openId],
  );

  const faqGroups = useMemo<FAQGroup[]>(() => {
    const groupedFAQs = faqs.reduce<Record<string, (typeof faqs)[number][]>>(
      (acc, faq) => {
        const category = faq.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(faq);
        return acc;
      },
      {},
    );

    return Object.entries(groupedFAQs).map(([category, items]) => ({
      category: category as FAQGroup["category"],
      items,
    }));
  }, []);

  return (
    <div
      id="faq"
      className="w-full bg-(--secondary-color) py-12 md:py-16 px-6 md:px-12 flex flex-col items-center"
    >
      <Title variant="primary" text={UI_TEXT.sections.faqs} />
      <Text
        pColor="text-white"
        spanColor="text-(--primary-color)"
        before="Tire suas dúvidas e "
        textSpan="reduza objeções "
        after="antes de sair do site."
      />

      <FaqContent groups={faqGroups} openId={openId} onToggle={toggleFAQ} />

      <div className="w-full h-1 bg-(--primary-color) mt-12"></div>
    </div>
  );
}
