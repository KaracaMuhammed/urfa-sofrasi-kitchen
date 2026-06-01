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
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="Urfa Sofrası"
            width={885}
            height={500}
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground transition hover:bg-ember"
        >
          Reserve
        </Link>
      </div>
    </header>
  );
}
