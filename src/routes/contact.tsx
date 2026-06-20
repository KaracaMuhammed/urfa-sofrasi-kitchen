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

const hours = [
  ["Maandag", "11:30 — 23:00"],
  ["Dinsdag", "11:30 — 23:00"],
  ["Woensdag", "11:30 — 23:00"],
  ["Donderdag", "11:30 — 23:00"],
  ["Vrijdag", "11:30 — 00:00"],
  ["Zaterdag", "11:30 — 00:00"],
  ["Zondag", "12:00 — 22:30"],
];

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
            <div className="rounded-panel border border-border bg-card p-8 shadow-panel-soft">
              <p className="eyebrow">Adres</p>
              <p className="mt-4 font-display text-2xl text-ink">Urfa Sofrası</p>
              <p className="mt-1 text-muted-foreground">
                [Straat en huisnummer]<br />
                [Postcode en plaats]
              </p>
              <p className="mt-6 eyebrow">Contact</p>
              <p className="mt-3 text-ink">
                <a href="tel:+000000000" className="hover:text-ember">+ — — —</a>
              </p>
              <p className="text-ink">
                <a href="mailto:hello@urfasofrasi.example" className="hover:text-ember">
                  hello@urfasofrasi.example
                </a>
              </p>
            </div>

            <div className="rounded-panel border border-border bg-card p-8 shadow-panel-soft">
              <p className="eyebrow">Openingstijden</p>
              <ul className="mt-4 divide-y divide-border">
                {hours.map(([day, time]) => (
                  <li key={day} className="flex justify-between py-2.5 text-sm">
                    <span className="text-ink">{day}</span>
                    <span className="text-muted-foreground">{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-5xl rounded-panel bg-ink p-10 text-center text-primary-foreground shadow-panel">
            <p className="font-display text-3xl italic text-accent">Buyurun.</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Reserveringen vanaf 4 personen
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
              Stuur ons een bericht met datum, tijd en aantal gasten — we
              bevestigen binnen enkele uren.
            </p>
            <a
              href="mailto:hello@urfasofrasi.example?subject=Reservering"
              className="mt-7 inline-flex rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition hover:brightness-110"
            >
              Tafel aanvragen
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
