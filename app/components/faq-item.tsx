"use client";

import { useId, useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = useId();

  return (
    <div
      className="faq-item border-b border-ink/15"
      data-state={isOpen ? "open" : "closed"}
    >
      <button
        type="button"
        className="faq-trigger flex min-h-20 w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-bold"
        aria-controls={answerId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {question}
        <span className="faq-icon" aria-hidden="true" />
      </button>
      <div id={answerId} className="faq-answer" aria-hidden={!isOpen}>
        <div className="faq-answer-inner">
          <p className="max-w-2xl pb-6 leading-7 text-ink-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}
