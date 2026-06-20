import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/urfa-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img src={logoAsset.url} alt="Urfa Sofrası" className="h-12 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/70">
            Anatolisch vuur, gulle tafels. Pides, lahmacun en grillschotels in een
            warme, groen-gouden eetzaal.
          </p>
          <p className="mt-6 font-display text-2xl italic text-accent">
            Hoş geldiniz <span className="text-primary-foreground/60">— welkom.</span>
          </p>
        </div>

        <div>
          <p className="eyebrow text-accent">Bezoek</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Elke dag open</li>
            <li>11:30 — 23:00</li>
            <li>Dine-in · Afhaal</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-accent">Ontdek</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-accent">Menukaart</Link></li>
            <li><Link to="/about" className="hover:text-accent">Ons verhaal</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Reserveren</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Urfa Sofrası. Alle rechten voorbehouden.</p>
          <p className="uppercase tracking-[0.25em]">Pide · Lahmacun · Izgara</p>
        </div>
      </div>
    </footer>
  );
}
