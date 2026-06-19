"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border border-[#1e1e1e]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-b border-[#1e1e1e] last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-6 p-6 text-left row-hover"
            >
              <span className="font-mono text-sm text-[#f2ede6] tracking-wide">
                {item.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#2196f3] shrink-0 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6">
                <p className="text-sm text-[#5a5a5a] leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
