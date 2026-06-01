import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit & Reserve — Urfa Sofrası" },
      {
        name: "description",
        content:
          "Hours, address and reservation contact for Urfa Sofrası. Open every day for dine-in and takeaway.",
      },
      { property: "og:title", content: "Visit & Reserve — Urfa Sofrası" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const hours = [
  ["Monday", "11:30 — 23:00"],
  ["Tuesday", "11:30 — 23:00"],
  ["Wednesday", "11:30 — 23:00"],
  ["Thursday", "11:30 — 23:00"],
  ["Friday", "11:30 — 00:00"],
  ["Saturday", "11:30 — 00:00"],
  ["Sunday", "12:00 — 22:30"],
];

function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Visit & Reserve</p>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl">
              We'd love to set the table for you.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Walk in, call, or write — we'll find you a seat.
            </p>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 lg:pb-28">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <div className="rounded-panel border border-border bg-card p-8 shadow-panel-soft">
              <p className="eyebrow">Address</p>
              <p className="mt-4 font-display text-2xl text-ink">Urfa Sofrası</p>
              <p className="mt-1 text-muted-foreground">
                [Street address]<br />
                [City, postcode]
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
              <p className="eyebrow">Opening hours</p>
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
            <p className="font-script text-3xl text-ember">Buyurun.</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Reservations for parties of 4 or more
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Drop us a line with the date, time and number of guests — we'll
              confirm within a few hours.
            </p>
            <a
              href="mailto:hello@urfasofrasi.example?subject=Reservation"
              className="mt-7 inline-flex rounded-full bg-ember px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition hover:brightness-110"
            >
              Request a Table
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
