import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import interiorAsset from "@/assets/urfa-interior-new.png.asset.json";
import exteriorAsset from "@/assets/urfa-exterior-new.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Ons verhaal — Urfa Sofrası" },
      {
        name: "description",
        content:
          "Het verhaal achter Urfa Sofrası: een Anatolische keuken in de buurt, met pide, lahmacun en de sfeer van een familietafel.",
      },
      { property: "og:title", content: "Ons verhaal — Urfa Sofrası" },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: interiorAsset.url },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Ons verhaal</p>
              <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
                Een stukje <em className="not-italic text-ember">Urfa</em>, op een
                buurttafel gezet.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Şanlıurfa, in zuidoostelijk Anatolië, is een stad van brood,
                vuur en langzame gastvrijheid. Dat idee namen we mee naar huis:
                een kleine keuken met een hete oven, een lange tafel, en
                gerechten zoals we ze van kinds af aan kennen.
              </p>
              <p className="mt-4 italic text-muted-foreground">
                "Sofra" betekent letterlijk <span className="text-ink">eettafel</span> —
                de plek waar alles samenkomt.
              </p>
            </div>
            <div className="overflow-hidden rounded-panel shadow-panel">
              <img src={interiorAsset.url} alt="Binnen bij Urfa Sofrası" className="w-full" />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/40 px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
            {[
              {
                k: "01",
                t: "Uit de oven",
                d: "Pides lang en langzaam gebakken tot de randen knappen en de kaas zingt.",
              },
              {
                k: "02",
                t: "Van de grill",
                d: "Handgehakte kebab en spiezen boven echt vuur — zonder shortcuts.",
              },
              {
                k: "03",
                t: "Uit het hart",
                d: "Familierecepten, Turkse gastvrijheid en een tafel om te delen.",
              },
            ].map((b) => (
              <div key={b.k} className="rounded-panel border border-border bg-card p-7 shadow-panel-soft">
                <p className="font-display text-3xl italic text-ember">{b.k}</p>
                <h3 className="mt-3 font-display text-2xl text-ink">{b.t}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-panel shadow-panel">
              <img src={exteriorAsset.url} alt="Voorgevel van Urfa Sofrası" loading="lazy" className="w-full" />
            </div>
            <div>
              <p className="eyebrow">Bezoek</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                Kom binnen, blijf lang, eet goed.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Of het nu een snelle lahmacun is tussen de middag of de hele
                tafel op zaterdagavond — je bent welkom bij Urfa Sofrası.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-leaf"
              >
                Plan je bezoek
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
