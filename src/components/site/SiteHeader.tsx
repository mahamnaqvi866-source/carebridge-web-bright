import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, HeartPulse } from "lucide-react";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="CareBridge Medical Transport home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-soft transition-transform group-hover:scale-105">
            <HeartPulse className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base md:text-lg font-bold text-foreground">CareBridge</span>
            <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground">Medical Transport</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 rounded-md text-sm font-medium text-foreground/75 hover:text-primary hover:bg-accent transition-colors"
              activeProps={{ className: "px-4 py-2 rounded-md text-sm font-semibold text-primary bg-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+19095557842"
            className="hidden lg:flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            (909) 555-7842
          </a>
          <a
            href="tel:+19095557842"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:bg-accent"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-foreground/80 hover:bg-accent"
                activeProps={{ className: "px-3 py-2.5 rounded-md text-sm font-semibold text-primary bg-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+19095557842"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call (909) 555-7842
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
