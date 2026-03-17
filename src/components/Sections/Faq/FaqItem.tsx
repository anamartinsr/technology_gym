import type { FAQ } from "@/data/faq";

interface FaqItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export default function FaqItem({ faq, isOpen, onToggle }: FaqItemProps) {
  const buttonId = `faq-trigger-${faq.id}`;
  const panelId = `faq-panel-${faq.id}`;

  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(faq.id)}
        className="w-full flex items-center justify-between py-4 md:py-5 text-left hover:opacity-80 transition-opacity"
      >
        <span className="font-bold text-white text-sm md:text-base pr-4">
          {faq.question}
        </span>
        <span
          aria-hidden="true"
          className={`flex-shrink-0 text-(--primary-color) text-2xl transition-transform duration-300 font-bold ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="pb-4 md:pb-5 animate-in fade-in duration-200"
        >
          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}
