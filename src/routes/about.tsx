import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import interiorAsset from "@/assets/urfa-interior.png.asset.json";
import exteriorAsset from "@/assets/urfa-exterior.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Urfa Sofrası" },
      {
        name: "description",
        content:
          "The story behind Urfa Sofrası: an Anatolian kitchen brought to our neighbourhood, with pide, lahmacun and the spirit of a family table.",
      },
      { property: "og:title", content: "Our Story — Urfa Sofrası" },
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
              <p className="eyebrow">Our Story</p>
              <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
                A piece of <em className="not-italic text-ember">Urfa</em>, brought to a neighbourhood table.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Şanlıurfa, in southeastern Anatolia, is a city of bread, fire,
                and long hospitality. We brought that idea home: a small kitchen
                with a hot oven, a long table, and food made the way we grew up
                eating it.
              </p>
            </div>
            <div className="overflow-hidden rounded-panel shadow-panel">
              <img src={interiorAsset.url} alt="Inside Urfa Sofrası" className="w-full" />
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/30 px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
            {[
              {
                k: "01",
                t: "From the oven",
                d: "Pides baked long and slow until the edges crackle and the cheese sings.",
              },
              {
                k: "02",
                t: "From the grill",
                d: "Hand-chopped kebabs and skewers turned over real fire — no shortcuts.",
              },
              {
                k: "03",
                t: "From the heart",
                d: "Family recipes, Turkish hospitality, and a table built for sharing.",
              },
            ].map((b) => (
              <div key={b.k} className="rounded-panel border border-border bg-card p-7 shadow-panel-soft">
                <p className="font-script text-3xl text-ember">{b.k}</p>
                <h3 className="mt-3 font-display text-2xl text-ink">{b.t}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-panel shadow-panel">
              <img src={exteriorAsset.url} alt="Urfa Sofrası storefront" loading="lazy" className="w-full" />
            </div>
            <div>
              <p className="eyebrow">Visit</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                Come in, sit long, eat well.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Whether it's a quick lahmacun at lunch or the whole table on a
                Saturday evening, you're welcome at Urfa Sofrası.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-ember"
              >
                Plan your visit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
