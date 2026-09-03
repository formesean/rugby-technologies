import type { ReactNode } from "react";
import { ArrowIcon } from "./arrow-icon";
import { SiteFooter } from "./site-footer";

type LegalPageProps = {
  children: ReactNode;
  description: string;
  title: string;
};

export function LegalPage({ children, description, title }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-20 rounded-full bg-ink px-4 py-3 font-semibold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <header className="border-b border-ink/10 py-4">
        <div className="page-shell flex items-center justify-between gap-4">
          <a href="/" className="text-lg font-bold tracking-tight">
            Rugby <span className="text-accent">Technologies</span>
          </a>
          <a className="nav-link text-sm font-semibold" href="/">
            Back home
            <ArrowIcon className="ml-2 size-4 shrink-0" />
          </a>
        </div>
      </header>

      <main id="main" className="page-shell py-16 sm:py-24">
        <article className="legal-copy mx-auto max-w-3xl">
          <p className="eyebrow text-accent">Legal</p>
          <h1 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            {description}
          </p>
          <p className="mt-4 font-mono text-sm text-ink-muted">
            Effective September 3, 2026
          </p>
          <div className="mt-14 space-y-10">{children}</div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}

type LegalSectionProps = {
  children: ReactNode;
  title: string;
};

export function LegalSection({ children, title }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-ink-muted">{children}</div>
    </section>
  );
}
