import { ArrowIcon } from "./components/arrow-icon";
import { FaqItem } from "./components/faq-item";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Fast, responsive websites with clear structure, polished presentation, and reliable performance across modern devices.",
  },
  {
    number: "02",
    title: "Custom Software",
    description:
      "Purpose-built web applications with dependable functionality, maintainable code, and clear ownership of agreed requirements.",
  },
  {
    number: "03",
    title: "Automation",
    description:
      "Reliable automations that reduce repetitive work, improve consistency, and keep important processes easy to understand and manage.",
  },
  {
    number: "04",
    title: "IT Consulting",
    description:
      "Practical technology guidance with clear recommendations, documented decisions, realistic expectations, and accountability for the agreed direction.",
  },
] as const;

const principles = [
  {
    title: "Clear communication",
    description:
      "Direct updates, honest explanations, and early notice when a decision or risk needs attention.",
  },
  {
    title: "Practical delivery",
    description:
      "Technology choices must solve a real need, support your goals, and justify their cost.",
  },
  {
    title: "Accessible partnership",
    description:
      "Scope, pricing, responsibilities, and deliverables remain clear throughout the project.",
  },
  {
    title: "Built for the long term",
    description:
      "Solutions are reliable, maintainable, documented where needed, and useful after launch.",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Define the problem, users, priorities, constraints, and requirements for the first useful release.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Deliver focused milestones with visible progress, quality checks, and clear updates.",
  },
  {
    number: "03",
    title: "Launch and support",
    description:
      "Release carefully with agreed documentation, handoff details, and support options.",
  },
] as const;

const faqs = [
  {
    question: "What can Rugby Technologies build?",
    answer:
      "Websites, web apps, automations, integrations, and practical improvements built around your needs.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Startups, small businesses, nonprofits, communities, and growing organizations.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines depend on scope. After discovery, you receive clear milestones and a realistic schedule.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing reflects scope, complexity, and support. You receive a clear proposal before work begins.",
  },
  {
    question: "Can you improve or connect existing systems?",
    answer:
      "Yes. We can improve existing workflows and connect tools through APIs and automation.",
  },
  {
    question: "Do you work with clients outside the Philippines?",
    answer:
      "Yes. We work remotely with clients in the Philippines and worldwide.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You receive a clear handoff, useful documentation, and optional ongoing support.",
  },
] as const;

const email = "seanaguilar698@gmail.com";
const emailHref =
  "mailto:seanaguilar698@gmail.com?subject=Project%20inquiry%20for%20Rugby%20Technologies&body=Hi%20Rugby%20Technologies%2C%0A%0AI%27d%20like%20help%20with%3A%0A%0AMy%20goal%20is%3A%0A%0AIdeal%20timeline%3A%0A%0AThanks%21";

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-canvas text-ink">
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-full bg-ink px-4 py-3 font-semibold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader emailHref={emailHref} />
      <main id="main">
        <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-ink/10">
          <div
            className="hero-grid absolute inset-0 -z-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,var(--color-canvas)_15%,transparent_70%)]" />
          <div className="hero-art" aria-hidden="true">
            <span className="hero-shape hero-shape-blue" />
            <span className="hero-shape hero-shape-lime" />
            <span className="hero-shape hero-shape-coral" />
          </div>
          <div className="page-shell flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-28">
            <div className="hero-copy max-w-4xl">
              <p className="eyebrow">
                Websites • Software • Automation • Consulting
              </p>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl leading-[0.95] font-bold tracking-[-0.055em] sm:text-7xl lg:text-[6.75rem]">
                Technology that works for you.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-muted sm:text-xl">
                We build quality websites, software, and automation for growing
                organizations. Every project includes clear communication,
                dependable delivery, maintainable solutions, and direct
                accountability.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a className="button button-primary" href={emailHref}>
                  Start Your Project
                  <ArrowIcon className="size-4 shrink-0" />
                </a>
                <a className="button button-secondary" href="#services">
                  Explore Services
                  <ArrowIcon className="size-4 shrink-0 rotate-[135deg]" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="scroll-mt-32 py-24 sm:py-32">
          <div className="page-shell">
            <p className="eyebrow">What we do</p>
            <h2 className="section-heading max-w-4xl">
              Useful technology. Less friction.
            </h2>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="service-card rounded-[2rem] border border-ink/10 bg-surface p-6 sm:p-8"
                >
                  <p className="font-mono text-sm font-semibold text-accent">
                    {service.number}
                  </p>
                  <h3 className="mt-14 text-3xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-ink-muted sm:text-lg">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          id="approach"
          className="scroll-mt-28 bg-ink py-24 text-white sm:py-32"
        >
          <div className="page-shell">
            <p className="eyebrow text-lime">How we work</p>
            <h2 className="section-heading max-w-3xl text-white">
              Clear from start to finish.
            </h2>
            <ol className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
              {principles.map((principle, index) => (
                <li
                  key={principle.title}
                  className="border-t border-white/20 pt-6"
                >
                  <p className="font-mono text-sm text-lime">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-5 text-2xl font-bold">{principle.title}</h3>
                  <p className="mt-3 max-w-lg leading-7 text-white/65">
                    {principle.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="bg-surface py-24 sm:py-32">
          <div className="page-shell">
            <p className="eyebrow">The process</p>
            <h2 className="section-heading max-w-3xl">From idea to launch.</h2>
            <ol className="mt-14 grid gap-6 lg:grid-cols-3">
              {process.map((step) => (
                <li
                  key={step.number}
                  className="process-card rounded-[2rem] border border-ink/10 bg-canvas p-6 sm:p-8"
                >
                  <div className="flex size-12 items-center justify-center rounded-full bg-accent font-mono text-sm font-bold text-white">
                    {step.number}
                  </div>
                  <h3 className="mt-10 text-2xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-ink-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="faq" className="scroll-mt-28 py-24 sm:py-32">
          <div className="page-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">Questions, answered</p>
              <h2 className="section-heading">
                Good questions. Clear answers.
              </h2>
            </div>
            <div className="border-t border-ink/15">
              {faqs.map((faq) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="page-shell pb-6 sm:pb-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-accent p-8 text-white sm:p-12 sm:py-24 lg:px-16">
            <div
              className="absolute -top-16 -right-12 size-56 rounded-full border-[2.5rem] border-lime/80"
              aria-hidden="true"
            />
            <div className="relative max-w-3xl">
              <p className="eyebrow text-white">Start a conversation</p>
              <h2 className="mt-6 text-balance text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
                Let&apos;s make work simpler.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white">
                Share the problem, goal, or process that needs improvement. You
                will receive a clear recommendation, realistic scope, and
                accountable next steps.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  className="button bg-white text-ink hover:bg-lime"
                  href={emailHref}
                >
                  Start Your Project
                  <ArrowIcon className="size-4 shrink-0" />
                </a>
                <a
                  className="rounded-md font-mono text-sm text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
