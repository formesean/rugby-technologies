"use client";

import { useEffect, useRef, useState } from "react";

const HIDE_AFTER_SCROLL_Y = 72;
const DIRECTION_THRESHOLD = 6;

type SiteHeaderProps = {
  emailHref: string;
};

function RugbyMark() {
  return (
    <svg
      aria-hidden="true"
      className="size-full"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#17191F" />
      <path
        d="M7 8h14c4.4 0 7 2.2 7 5.6 0 2.1-1.1 3.8-3.1 4.8l3.1 5.6h-5.2l-3.6-5.3H12v5.3H7V8Zm5 6.8h8.1c1.9 0 2.9-.6 2.9-1.9s-1-1.9-2.9-1.9H12v3.8Z"
        fill="#F7F4EC"
      />
      <circle cx="25" cy="7" r="3" fill="#FF7A68" />
      <rect
        x="6"
        y="24"
        width="8"
        height="3"
        rx="1.5"
        fill="#C9F06B"
        transform="rotate(-8 6 24)"
      />
    </svg>
  );
}

export function SiteHeader({ emailHref }: SiteHeaderProps) {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lastScrollY = useRef(0);
  const animationFrame = useRef<number | null>(null);
  const menuButton = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const updateScrollState = () => {
      animationFrame.current = null;

      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        0,
      );
      const progress =
        scrollableHeight === 0
          ? 0
          : Math.min(100, (currentScrollY / scrollableHeight) * 100);
      const directionDelta = currentScrollY - lastScrollY.current;

      setScrollProgress(Math.round(progress));

      if (isMenuOpen || currentScrollY <= HIDE_AFTER_SCROLL_Y) {
        setIsHidden(false);
      } else if (Math.abs(directionDelta) >= DIRECTION_THRESHOLD) {
        setIsHidden(directionDelta > 0);
      }

      lastScrollY.current = currentScrollY;
    };

    const scheduleScrollStateUpdate = () => {
      if (animationFrame.current === null) {
        animationFrame.current =
          window.requestAnimationFrame(updateScrollState);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
      scheduleScrollStateUpdate();
    };

    lastScrollY.current = window.scrollY;
    updateScrollState();
    window.addEventListener("scroll", scheduleScrollStateUpdate, {
      passive: true,
    });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", scheduleScrollStateUpdate);
      window.removeEventListener("resize", handleResize);
      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButton.current?.focus();
      }
    };

    const closeMenuAfterNavigation = (event: MouseEvent) => {
      if (
        event.target instanceof Element &&
        event.target.closest("#mobile-navigation a, .site-brand")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeMenuOnEscape);
    document.addEventListener("click", closeMenuAfterNavigation);
    return () => {
      document.removeEventListener("keydown", closeMenuOnEscape);
      document.removeEventListener("click", closeMenuAfterNavigation);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className="site-header sticky top-0 z-40 border-b border-ink/10 bg-canvas/90 backdrop-blur-xl"
        data-hidden={isHidden}
      >
        <div className="site-header-inner mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4">
          <a
            href="#top"
            className="site-brand flex min-w-0 items-center gap-2 text-base font-bold tracking-tight sm:text-lg"
            aria-label="Rugby Technologies home"
          >
            <span className="site-brand-mark size-7 shrink-0 sm:size-8">
              <RugbyMark />
            </span>
            <span className="site-brand-copy whitespace-nowrap">
              Rugby{" "}
              <span className="site-brand-accent text-accent">
                Technologies
              </span>
            </span>
          </a>
          <nav
            aria-label="Primary navigation"
            className="site-nav hidden min-w-0 flex-1 items-center justify-center gap-5 text-sm font-medium sm:flex"
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
          <a
            className="site-header-cta button button-primary hidden shrink-0 sm:inline-flex"
            href={emailHref}
          >
            Start Your Project <span aria-hidden="true">↗</span>
          </a>
          <button
            ref={menuButton}
            type="button"
            className="mobile-menu-toggle"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="mobile-menu-icon" aria-hidden="true" />
          </button>
        </div>
        <div
          id="mobile-navigation"
          className="mobile-menu-panel sm:hidden"
          data-open={isMenuOpen}
          inert={!isMenuOpen}
        >
          <div className="mobile-menu-panel-inner">
            <nav
              aria-label="Mobile navigation"
              className="mx-auto grid max-w-6xl gap-1 px-5 pt-2 pb-5"
            >
              <a className="mobile-menu-link" href="#services">
                Services
              </a>
              <a className="mobile-menu-link" href="#approach">
                Approach
              </a>
              <a className="mobile-menu-link" href="#faq">
                FAQ
              </a>
              <a className="button button-primary mt-2 w-full" href={emailHref}>
                Start Your Project <span aria-hidden="true">↗</span>
              </a>
            </nav>
          </div>
        </div>
      </header>
      <div className="nav-rail" data-visible={isHidden} aria-hidden="true">
        <div className="nav-progress-track" aria-hidden="true">
          <div
            className="nav-progress-bar"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </>
  );
}
