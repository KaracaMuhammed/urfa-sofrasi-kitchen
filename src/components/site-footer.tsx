import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/urfa-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img src={logoAsset.url} alt="Urfa Sofrası" className="h-12 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
            Anatolian fire, generous tables. Pides, lahmacun and grillades served
            in a green-and-gold dining room.
          </p>
          <p className="mt-6 font-script text-2xl text-ember">Hoş geldiniz.</p>
        </div>

        <div>
          <p className="eyebrow">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            <li>Open every day</li>
            <li>11:30 — 23:00</li>
            <li>Dine-in · Takeaway</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            <li><Link to="/menu" className="hover:text-ember">Menu</Link></li>
            <li><Link to="/about" className="hover:text-ember">Our story</Link></li>
            <li><Link to="/contact" className="hover:text-ember">Reservations</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Urfa Sofrası. All rights reserved.</p>
          <p className="uppercase tracking-[0.25em]">Pide · Lahmacun · Grillades</p>
        </div>
      </div>
    </footer>
  );
}
