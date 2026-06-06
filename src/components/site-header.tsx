import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/urfa-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "Story" },
  { to: "/contact", label: "Visit" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-ink/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-14 items-center rounded-full bg-background/95 px-4 shadow-panel-soft ring-1 ring-accent/40">
            <img
              src={logoAsset.url}
              alt="Urfa Sofrası"
              width={885}
              height={500}
              className="h-10 w-auto sm:h-11"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-primary-foreground/70 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="rounded-full bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground transition hover:brightness-110"
        >
          Reserve
        </Link>
      </div>
    </header>
  );
}

