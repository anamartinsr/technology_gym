import type { JSX } from "react";
import { useState } from "react";
import Title from "../../common/Title";
import Text from "../../common/Text";
import { faqs } from "../../../data/faq";
import IconScroll from "/iconScroll.png";

export default function FAQ(): JSX.Element {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Group FAQs by category
  const groupedFAQs = faqs.reduce(
    (acc, faq) => {
      const category = faq.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(faq);
      return acc;
    },
    {} as Record<string, typeof faqs>,
  );

  return (
    <div
      id="faq"
      className="w-full bg-(--secondary-color) py-12 md:py-16 px-6 md:px-12 flex flex-col items-center"
    >
      <Title variant="primary" text="FAQS" />
      <Text
        pColor="text-white"
        spanColor="text-(--primary-color)"
        before="Tire suas dúvidas e "
        textSpan="reduza objeções "
        after="antes de sair do site."
      />

      <div className="w-full max-w-7xl mt-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        {/* Left side - FAQ Content */}
        <div className="w-full lg:w-1/2">
          {Object.entries(groupedFAQs).map(([category, categoryFaqs]) => (
            <div key={category} className="mb-12">
              {/* Category Label */}
              <p className="text-(--primary-color) font-bold text-sm md:text-base mb-6 tracking-wide">
                {category}
              </p>

              {/* FAQ Items */}
              <div className="space-y-4">
                {categoryFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border-b border-gray-700 last:border-b-0"
                  >
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between py-4 md:py-5 text-left hover:opacity-80 transition-opacity"
                    >
                      <span className="font-bold text-white text-sm md:text-base pr-4">
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 text-(--primary-color) text-2xl transition-transform duration-300 font-bold ${
                          openId === faq.id ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {/* Answer */}
                    {openId === faq.id && (
                      <div className="pb-4 md:pb-5 animate-in fade-in duration-200">
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Icon */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={IconScroll}
            alt="Icon Scroll"
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom border decoration */}
      <div className="w-full h-1 bg-(--primary-color) mt-12"></div>
    </div>
  );
}
