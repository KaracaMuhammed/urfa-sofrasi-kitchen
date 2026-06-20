import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import exteriorAsset from "@/assets/urfa-exterior-new.png.asset.json";
import interiorAsset from "@/assets/urfa-interior-new.png.asset.json";
import foodMixAsset from "@/assets/urfa-food-mix.png.asset.json";
import foodLahmacunAsset from "@/assets/urfa-food-lahmacun.png.asset.json";
import foodPideAsset from "@/assets/urfa-food-pide.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urfa Sofrası — Pides, Lahmacun & Izgara" },
      {
        name: "description",
        content:
          "Nieuw geopende Anatolische keuken: houtgebakken pides, krokante lahmacun en grillschotels in een warme, groen-gouden eetzaal.",
      },
      { property: "og:title", content: "Urfa Sofrası — Anatolische keuken" },
      {
        property: "og:description",
        content: "Pides, lahmacun, izgara. Een warme Anatolische tafel in de buurt.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: exteriorAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const dishes = [
  {
    tag: "Uit de houtoven",
    name: "Kaşarlı Pide",
    tr: "Pide met gesmolten kaas",
    desc: "Lange boten gebakken tot de kaas borrelt en de korst knappert.",
    img: foodPideAsset.url,
  },
  {
    tag: "Uit de steenoven",
    name: "Lahmacun",
    tr: "Turkse dunne flatbread",
    desc: "Flinterdunne rondjes, gekruid gehakt, peterselie en citroen.",
    img: foodLahmacunAsset.url,
  },
  {
    tag: "Voor aan tafel",
    name: "Karışık Plank",
    tr: "Gemengde deelplank",
    desc: "Een gulle plank pide & lahmacun, gemaakt om te delen.",
    img: foodMixAsset.url,
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-24">
            <div className="flex flex-col justify-center animate-rise">
              <p className="eyebrow">Nieuw geopend · Anatolische keuken</p>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.4rem]">
                Een warme tafel uit <em className="not-italic text-ember">Urfa</em>,
                in onze buurt.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
                Houtgebakken pides, krokante lahmacun en izgara —
                geserveerd zoals het hoort: gul, met de tijd, en iedereen rond
                de tafel.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/menu"
                  className="rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-panel transition hover:bg-leaf"
                >
                  Bekijk de menukaart
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ember hover:text-ember"
                >
                  Tafel reserveren
                </Link>
              </div>

              <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                  <dt className="eyebrow">Openingsuren</dt>
                  <dd className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Maandag</span>
                      <span className="text-ink">11:00 – 23:00</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Dinsdag</span>
                      <span className="text-ink">11:00 – 23:00</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Woensdag</span>
                      <span className="text-ember">Gesloten</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Donderdag</span>
                      <span className="text-ink">11:00 – 23:00</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Vrijdag</span>
                      <span className="text-ink">11:00 – 00:00</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Zaterdag</span>
                      <span className="text-ink">11:00 – 00:00</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted-foreground">Zondag</span>
                      <span className="text-ink">14:00 – 22:00</span>
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Stijl</dt>
                  <dd className="mt-2 font-display text-2xl text-ink">Familie</dd>
                </div>
                <div>
                  <dt className="eyebrow">Herkomst</dt>
                  <dd className="mt-2 font-display text-2xl text-ink">Anatolië</dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-panel shadow-panel">
                <img
                  src={exteriorAsset.url}
                  alt="Voorgevel van Urfa Sofrası met verlichte groen-gouden uithangbord"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-hero-overlay p-6">
                  <p className="font-display text-3xl italic text-accent">
                    Afiyet olsun.
                  </p>
                  <p className="text-sm text-primary-foreground/80">Eet smakelijk.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-panel bg-leaf p-5 text-primary-foreground shadow-panel-soft lg:block">
                <p className="eyebrow text-accent">Onze klassieker</p>
                <p className="mt-1 font-display text-2xl">Kaşarlı Pide</p>
              </div>
            </div>
          </div>
        </section>

        {/* DISHES */}
        <section className="border-t border-border bg-secondary/40 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow">De gerechten</p>
                <h2 className="mt-3 max-w-2xl font-display text-4xl sm:text-5xl">
                  Drie dingen om eerst te bestellen.
                </h2>
              </div>
              <Link
                to="/menu"
                className="text-sm font-semibold uppercase tracking-[0.22em] text-ember hover:text-ink"
              >
                Hele menukaart →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {dishes.map((d, i) => (
                <article
                  key={d.name}
                  className="group overflow-hidden rounded-panel border border-border bg-card shadow-panel-soft transition hover:shadow-panel"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="eyebrow">{d.tag}</p>
                    <h3 className="mt-2 font-display text-2xl text-ink">{d.name}</h3>
                    <p className="text-sm italic text-muted-foreground">{d.tr}</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {d.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-panel shadow-panel">
              <img
                src={interiorAsset.url}
                alt="Interieur van Urfa Sofrası met houten banken en muurschilderingen"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="eyebrow">Onze eetzaal</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                Een eetzaal die meteen vertrouwd voelt.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Olijfgroene banken, geschilderde muren en patroontextiel — de
                ruimte draagt de warmte van een Anatolische avond. Kom voor
                één pide, blijf voor de thee.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-ember hover:text-ink"
              >
                Lees ons verhaal →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-ink px-5 py-20 text-primary-foreground sm:px-8 lg:py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <p className="font-display text-3xl italic text-accent">Buyurun.</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Bestel nu — de oven brandt al.
            </h2>
            <p className="mt-5 max-w-xl text-primary-foreground/70">
              Bestellen is eenvoudig: bel, mail, of loop gewoon binnen. We
              zorgen dat alles klaarstaat.
            </p>
            <Link
              to="/contact"
              className="mt-9 rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition hover:brightness-110"
            >
              Nu bestellen
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
