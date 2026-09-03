type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="faq-item border-b border-ink/15">
      <summary className="faq-trigger flex min-h-20 w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg font-bold">
        {question}
        <span className="faq-icon" aria-hidden="true" />
      </summary>
      <p className="max-w-2xl pb-6 leading-7 text-ink-muted">{answer}</p>
    </details>
  );
}
