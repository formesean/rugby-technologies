const email = "seanaguilar698@gmail.com";

const serviceLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#approach", label: "Approach" },
  { href: "/#faq", label: "FAQ" },
] as const;

const legalLinks = [
  { href: "/terms", label: "Terms and Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer relative isolate overflow-hidden border-t border-ink/10 bg-ink py-12 text-sm text-white sm:py-14 md:py-18 md:text-base">
      <div aria-hidden="true">
        <span className="footer-shape footer-shape-blue" />
        <span className="footer-shape footer-shape-lime" />
        <span className="footer-shape footer-shape-coral" />
      </div>

      <div className="page-shell relative grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-[1.5fr_0.7fr_0.9fr_1.1fr] md:gap-12">
        <div className="col-span-2 max-w-sm md:col-span-1">
          <a href="/" className="text-xl font-bold tracking-tight">
            Rugby <span className="text-lime">Technologies</span>
          </a>
          <p className="mt-4 hidden max-w-xs leading-6 text-white/70 sm:block md:max-w-sm md:leading-7">
            Quality websites, software, automation, and practical technology
            guidance for growing organizations.
          </p>
        </div>

        <FooterGroup title="Explore" links={serviceLinks} />
        <FooterGroup title="Legal" links={legalLinks} />

        <div className="col-span-2 md:col-span-1">
          <h2 className="eyebrow text-lime">Contact</h2>
          <a
            className="inline-flex min-h-11 items-center break-all text-white/75 transition-colors hover:text-white sm:mt-2"
            href={`mailto:${email}`}
          >
            {email}
          </a>
          <p className="leading-6 text-white/60 md:mt-1 md:leading-7">
            Based in the Philippines. Working worldwide.
          </p>
        </div>
      </div>

      <div className="page-shell relative mt-10 flex flex-col gap-1 border-t border-white/15 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:text-sm md:mt-14 md:gap-3 md:pt-6">
        <p>© 2026 Rugby Technologies. All rights reserved.</p>
        <p className="hidden sm:block">
          Practical technology. Clear accountability.
        </p>
      </div>
    </footer>
  );
}

type FooterGroupProps = {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
};

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <nav aria-label={`${title} links`}>
      <h2 className="eyebrow text-lime">{title}</h2>
      <ul className="mt-1 space-y-0 sm:mt-4 sm:space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <a
              className="inline-flex min-h-11 items-center text-white/70 transition-colors hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
