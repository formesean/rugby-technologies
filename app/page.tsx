const services = [
  {
    number: "01",
    title: "Websites",
    description:
      "Fast, responsive websites that explain your work clearly and make it easy for customers to take the next step.",
  },
  {
    number: "02",
    title: "Custom Software",
    description:
      "Purpose-built web applications that replace awkward processes and fit the way your organization actually works.",
  },
  {
    number: "03",
    title: "Automation",
    description:
      "Connected tools and reliable workflows that reduce repetitive work, manual handoffs, and avoidable errors.",
  },
  {
    number: "04",
    title: "IT Consulting",
    description:
      "Practical guidance on technology choices, system improvements, integrations, and the clearest path from idea to launch.",
  },
] as const;

const principles = [
  {
    title: "Clear communication",
    description: "Direct updates and explanations without unnecessary jargon.",
  },
  {
    title: "Practical delivery",
    description: "Technology choices follow the business need, not trends.",
  },
  {
    title: "Accessible partnership",
    description:
      "Scope and pricing stay understandable for smaller organizations.",
  },
  {
    title: "Built for the long term",
    description:
      "Solutions should remain reliable, maintainable, and useful after launch.",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the problem, users, constraints, and most valuable first release.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Work in focused milestones with clear communication and visible progress.",
  },
  {
    number: "03",
    title: "Launch & support",
    description:
      "Release carefully, document the result, and agree on any continuing support.",
  },
] as const;

const technologies = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "REST APIs",
  "Docker",
  "Google Cloud",
  "Make.com",
  "Xano",
] as const;

const faqs = [
  {
    question: "What can Rugby Technologies build?",
    answer:
      "Websites, custom web applications, workflow automations, system integrations, and practical technology improvements shaped around a real business need.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Startups, small businesses, nonprofits, communities, and organizations that want a clear, dependable technology partner.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Every project is different. After a short discovery conversation, you will receive a recommended scope, milestones, and a realistic timeline.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on scope, complexity, and support needs. You will receive a clear proposal before project work begins.",
  },
  {
    question: "Can you improve or connect existing systems?",
    answer:
      "Yes. Rugby Technologies can review an existing setup, improve a workflow, and connect tools through APIs and automation where appropriate.",
  },
  {
    question: "Do you work with clients outside the Philippines?",
    answer:
      "Yes. Projects can be delivered remotely for clients in the Philippines and worldwide.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The project includes an agreed handoff, documentation where needed, and optional continuing support based on the scope.",
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
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-canvas/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-8">
          <a href="#top" className="text-lg font-bold tracking-tight">
            Rugby <span className="text-accent">Technologies</span>
          </a>
          <nav
            aria-label="Primary navigation"
            className="order-3 flex w-full items-center justify-center gap-5 text-sm font-medium sm:order-none sm:w-auto"
          >
            <a className="nav-link" href="#services">
              Services
            </a>
            <a className="nav-link" href="#approach">
              Approach
            </a>
            <a className="nav-link" href="#faq">
              FAQ
            </a>
          </nav>
          <a className="button button-primary" href={emailHref}>
            Start Your Project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>
      <main id="main">
        <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden border-b border-ink/10">
          <div
            className="hero-grid absolute inset-0 -z-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,var(--color-canvas)_15%,transparent_70%)]" />
          <div aria-hidden="true">
            <span className="hero-shape hero-shape-blue" />
            <span className="hero-shape hero-shape-lime" />
            <span className="hero-shape hero-shape-coral" />
          </div>
          <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl items-center px-5 py-20 sm:px-8 sm:py-28">
            <div className="max-w-4xl">
              <p className="eyebrow">
                Websites • Software • Automation • Consulting
              </p>
              <h1 className="mt-6 max-w-4xl text-balance text-5xl leading-[0.95] font-bold tracking-[-0.055em] sm:text-7xl lg:text-[6.75rem]">
                Practical technology, built around your business.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ink-muted sm:text-xl">
                Rugby Technologies helps startups, small businesses, nonprofits,
                and organizations turn ideas and repetitive work into clear,
                reliable digital solutions—across the Philippines and worldwide.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a className="button button-primary" href={emailHref}>
                  Start Your Project <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-secondary" href="#services">
                  Explore Services <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="scroll-mt-32 px-5 py-24 sm:px-8 sm:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">What we do</p>
            <h2 className="section-heading max-w-4xl">
              Useful technology, without the unnecessary complexity.
            </h2>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="service-card rounded-[2rem] border border-ink/10 bg-surface p-7 sm:p-9"
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
          className="scroll-mt-28 bg-ink px-5 py-24 text-white sm:px-8 sm:py-32"
        >
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow text-lime">How we work</p>
            <h2 className="section-heading max-w-3xl text-white">
              A straightforward way to build.
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
        <section className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <p className="eyebrow">The process</p>
            <h2 className="section-heading max-w-3xl">
              From problem to useful solution.
            </h2>
            <ol className="mt-14 grid gap-6 lg:grid-cols-3">
              {process.map((step) => (
                <li
                  key={step.number}
                  className="rounded-[2rem] border border-ink/10 bg-canvas p-7 sm:p-9"
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
        <section className="border-y border-ink/10 px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="eyebrow">Capabilities</p>
                <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                  A production-ready toolkit.
                </h2>
              </div>
              <ul
                className="flex flex-wrap gap-3"
                aria-label="Technology capabilities"
              >
                {technologies.map((technology, index) => (
                  <li
                    key={technology}
                    className={`tech-chip ${index % 3 === 1 ? "tech-chip-lime" : ""} ${index % 3 === 2 ? "tech-chip-coral" : ""}`}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section id="faq" className="scroll-mt-28 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="eyebrow">Questions, answered</p>
              <h2 className="section-heading">Frequently asked questions.</h2>
            </div>
            <div className="border-t border-ink/15">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="faq-item border-b border-ink/15"
                >
                  <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold">
                    {faq.question}
                    <span className="faq-icon" aria-hidden="true" />
                  </summary>
                  <p className="max-w-2xl pb-6 leading-7 text-ink-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="px-5 pb-5 sm:px-8 sm:pb-8">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-accent px-6 py-20 text-white sm:px-12 sm:py-24 lg:px-16">
            <div
              className="absolute -top-16 -right-12 size-56 rounded-full border-[2.5rem] border-lime/80"
              aria-hidden="true"
            />
            <div className="relative max-w-3xl">
              <p className="eyebrow text-white">Start a conversation</p>
              <h2 className="mt-6 text-balance text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
                Have a problem technology could make simpler?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white">
                Tell Rugby Technologies what you are trying to improve. We will
                start with the problem and find the smallest useful path
                forward.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  className="button bg-white text-ink hover:bg-lime"
                  href={emailHref}
                >
                  Start Your Project <span aria-hidden="true">↗</span>
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
      <footer className="px-5 py-9 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Rugby Technologies</p>
          <a className="nav-link" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </footer>
    </div>
  );
}
