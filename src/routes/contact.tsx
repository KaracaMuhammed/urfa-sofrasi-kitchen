import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Bezoek & reserveren — Urfa Sofrası" },
      {
        name: "description",
        content:
          "Openingstijden, adres en reservering voor Urfa Sofrası in Willebroek. Dine-in en afhaal.",
      },
      { property: "og:title", content: "Bezoek & reserveren — Urfa Sofrası" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});


function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Bezoek & reserveren</p>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl">
              We dekken graag de tafel voor je.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Loop binnen, bel of mail — we vinden een plek voor je.
            </p>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 lg:pb-28">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-panel border border-border bg-card p-6 shadow-panel-soft self-start">
              <p className="eyebrow">Adres</p>
              <p className="mt-2 font-display text-2xl text-ink">Urfa Sofrası</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dokter+Persoonslaan+13,+2830+Willebroek"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-muted-foreground underline underline-offset-4 hover:text-ember"
              >
                Dokter Persoonslaan 13<br />
                2830 Willebroek
              </a>
              <p className="mt-4 eyebrow">Contact</p>
              <p className="mt-1 text-ink">
                <a href="tel:035010610" className="underline underline-offset-4 hover:text-ember">03 501 06 10</a>
              </p>
            </div>

            <div className="rounded-panel border border-border bg-card p-8 shadow-panel-soft">
              <p className="eyebrow">Openingsuren</p>
              <ul className="mt-6 space-y-0 text-sm text-foreground/80">
                <li className="flex justify-between border-b border-border/60 py-3.5"><span>Maandag</span> <span>11:00 – 23:00</span></li>
                <li className="flex justify-between border-b border-border/60 py-3.5"><span>Dinsdag</span> <span>11:00 – 23:00</span></li>
                <li className="flex justify-between border-b border-border/60 py-3.5"><span>Woensdag</span> <span className="text-muted-foreground">Gesloten</span></li>
                <li className="flex justify-between border-b border-border/60 py-3.5"><span>Donderdag</span> <span>11:00 – 23:00</span></li>
                <li className="flex justify-between border-b border-border/60 py-3.5"><span>Vrijdag</span> <span>11:00 – 00:00</span></li>
                <li className="flex justify-between border-b border-border/60 py-3.5"><span>Zaterdag</span> <span>11:00 – 00:00</span></li>
                <li className="flex justify-between py-3.5"><span>Zondag</span> <span>14:00 – 22:00</span></li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-panel bg-ink p-10 text-center text-primary-foreground shadow-panel">
            <p className="font-display text-3xl italic text-accent">Buyurun.</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Reserveringen
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
              Bel ons op <a href="tel:035010610" className="underline hover:text-accent">03 501 06 10</a> of loop binnen — we
              bevestigen binnen enkele uren.
            </p>
            <a
              href="tel:035010610"
              className="mt-7 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition hover:brightness-110"
            >
              Bel nu
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
