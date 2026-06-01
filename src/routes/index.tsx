import { createFileRoute } from "@tanstack/react-router";
import exteriorAsset from "@/assets/urfa-exterior.png.asset.json";
import interiorAsset from "@/assets/urfa-interior.png.asset.json";
import logoAsset from "@/assets/urfa-logo.png.asset.json";
import menuAsset from "@/assets/urfa-menu.png.asset.json";
import foodMixAsset from "@/assets/urfa-food-mix.png.asset.json";
import foodLahmacunAsset from "@/assets/urfa-food-lahmacun.png.asset.json";
import foodPideAsset from "@/assets/urfa-food-pide.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urfa Sofrası | Pide, Lahmacun & Grillades" },
      {
        name: "description",
        content:
          "Urfa Sofrası serves pides, lahmacun, grillades, kapsalon, Turkish desserts and drinks in a green-and-gold Anatolian dining room.",
      },
      { property: "og:title", content: "Urfa Sofrası | Pide, Lahmacun & Grillades" },
      {
        property: "og:description",
        content:
          "Discover the menu, dining room and signature dishes from Urfa Sofrası.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Urfa Sofrası",
          servesCuisine: ["Turkish", "Anatolian"],
          priceRange: "$$",
          description:
            "Restaurant serving pide, lahmacun, grillades, desserts and drinks in an Anatolian-inspired dining room.",
          image: exteriorAsset.url,
        }),
      },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    title: "Pides",
    description: "Long baked boats with molten cheese, minced meat, sucuk and mixed fillings.",
  },
  {
    title: "Lahmacun",
    description: "Thin crisp rounds layered with seasoned minced meat, herbs and peppers.",
  },
  {
    title: "Grillades & Schotels",
    description: "Kebab plates, kip dishes and comforting oven-style mains for bigger appetites.",
  },
  {
    title: "Tatlı & Drinks",
    description: "Fırın sütlaç, künefe, ayran, şalgam and soft drinks to finish the table well.",
  },
];

const menuColumns = [
  ["Pizza's", "Pasta's", "Salades"],
  ["Pides", "Lahmacun", "Broodjes / Dürüm / Baguette"],
  ["Schotel", "Kapsalon", "Kiremit / Ovenschotel", "Dessert", "Dranken"],
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Urfa Sofrası logo"
              width={885}
              height={500}
              className="h-9 w-auto sm:h-10"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#specialties" className="transition hover:text-foreground">
              Specialties
            </a>
            <a href="#menu" className="transition hover:text-foreground">
              Menu
            </a>
            <a href="#room" className="transition hover:text-foreground">
              Room
            </a>
            <a href="#visit" className="transition hover:text-foreground">
              Visit
            </a>
          </nav>

          <a
            href="#visit"
            className="rounded-full border border-accent/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent transition hover:bg-accent hover:text-accent-foreground"
          >
            Contact
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-border/70 pt-18">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="mx-auto grid min-h-[100svh] max-w-7xl items-stretch gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10 flex flex-col justify-end px-5 pb-16 pt-20 sm:px-6 lg:pb-20 lg:pt-24">
            <div className="max-w-2xl animate-rise">
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-accent">
                Newly opened · Anatolian kitchen
              </p>
              <h1 className="text-balance font-display text-5xl leading-[0.92] sm:text-7xl lg:text-[6.5rem]">
                Urfa Sofrası,
                <span className="block text-accent">warm plates, long tables.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                A real neighbourhood restaurant with green-and-gold identity, generous pides,
                crisp lahmacun and a dining room inspired by Urfa.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#menu"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-panel transition hover:brightness-110"
                >
                  See the Menu
                </a>
                <a
                  href="#specialties"
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition hover:border-accent hover:text-accent"
                >
                  View Dishes
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[24rem] lg:min-h-full">
            <img
              src={exteriorAsset.url}
              alt="Front entrance of Urfa Sofrası with illuminated sign"
              width={690}
              height={760}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-background/55" />
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-panel border border-border/80 bg-panel/92 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-accent">Cuisine</p>
                <p className="mt-2 text-sm text-foreground">Pides · Lahmacun · Grillades</p>
              </div>
              <div className="rounded-panel border border-border/80 bg-panel/92 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-accent">Atmosphere</p>
                <p className="mt-2 text-sm text-foreground">Booths, mural walls, warm lighting</p>
              </div>
              <div className="rounded-panel border border-border/80 bg-panel/92 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-accent">Signature</p>
                <p className="mt-2 text-sm text-foreground">Cheese pide, lahmacun, house plates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specialties" className="px-5 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Specialties</p>
              <h2 className="font-display text-4xl sm:text-5xl">The dishes people remember first.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Using your real food photos, the first version focuses on the items that visually define the brand.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="group overflow-hidden rounded-panel border border-border bg-card shadow-panel">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={foodMixAsset.url}
                  alt="Mixed pide and lahmacun board served on a patterned table"
                  width={760}
                  height={1010}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-accent">Mixed board</p>
                  <h3 className="mt-2 font-display text-3xl">Shareable pides & lahmacun</h3>
                  <p className="mt-3 max-w-xl text-muted-foreground">
                    The table-filling format that instantly shows range: bubbling cheese pide, richly topped lahmacun and a relaxed, generous serving style.
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">Best for groups</span>
              </div>
            </article>

            <div className="grid gap-4">
              <article className="overflow-hidden rounded-panel border border-border bg-card shadow-panel">
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={foodPideAsset.url}
                    alt="Cheese pide baked golden and finished with herbs"
                    width={760}
                    height={980}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-accent">Pide</p>
                  <h3 className="mt-2 font-display text-2xl">Golden cheese boats</h3>
                </div>
              </article>

              <article className="overflow-hidden rounded-panel border border-border bg-card shadow-panel">
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={foodLahmacunAsset.url}
                    alt="Lahmacun stacked on a plate with minced meat and peppers"
                    width={735}
                    height={1070}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-accent">Lahmacun</p>
                  <h3 className="mt-2 font-display text-2xl">Thin, crisp and richly seasoned</h3>
                </div>
              </article>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-panel border border-border bg-card/80 p-6 shadow-panel-soft">
                <p className="text-sm uppercase tracking-[0.25em] text-accent">{item.title}</p>
                <p className="mt-3 text-base leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="border-y border-border bg-secondary/35 px-5 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Menu overview</p>
            <h2 className="font-display text-4xl sm:text-5xl">A fuller menu, from pizza to künefe.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Your uploaded board shows a broad family-style offering, so the site presents the real scope instead of a narrow grill-only concept.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {menuColumns.map((column, index) => (
                <div key={index} className="rounded-panel border border-border bg-card/70 p-5 shadow-panel-soft">
                  <ul className="space-y-3">
                    {column.map((item) => (
                      <li key={item} className="text-sm leading-6 text-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <article className="overflow-hidden rounded-panel border border-border bg-card shadow-panel">
            <img
              src={menuAsset.url}
              alt="Urfa Sofrası printed menu board showing pizzas, pides, lahmacun, desserts and drinks"
              width={885}
              height={1280}
              loading="lazy"
              className="w-full object-cover"
            />
          </article>
        </div>
      </section>

      <section id="room" className="px-5 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <article className="overflow-hidden rounded-panel border border-border bg-card shadow-panel">
            <img
              src={interiorAsset.url}
              alt="Inside Urfa Sofrası with booth seating, mural wall and patterned placemats"
              width={885}
              height={1230}
              loading="lazy"
              className="w-full object-cover"
            />
          </article>
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Dining room</p>
            <h2 className="font-display text-4xl sm:text-5xl">A room that already has its own identity.</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Olive-toned booths, large mural walls and patterned table settings give the restaurant a recognisable atmosphere. This version of the site leans into that look instead of inventing a different brand world.
            </p>
            <div className="mt-8 rounded-panel border border-border bg-card/70 p-6 shadow-panel-soft">
              <p className="text-sm uppercase tracking-[0.25em] text-accent">Visual cues</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>Green-and-gold signage and logo treatment</li>
                <li>Patterned textiles echoing the table mats</li>
                <li>Warm presentation for casual dine-in and takeaway</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="border-t border-border bg-secondary/35 px-5 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <img
              src={logoAsset.url}
              alt="Urfa Sofrası logo in green and gold"
              width={885}
              height={500}
              loading="lazy"
              className="h-auto w-full max-w-md"
            />
            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
              If you want, next I can add the exact address, phone number, opening hours, delivery links and a cleaned-up full menu section from the photos you shared.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-panel border border-border bg-card p-6 shadow-panel-soft">
              <p className="text-sm uppercase tracking-[0.25em] text-accent">Best used for</p>
              <p className="mt-4 font-display text-3xl">Discovering the place</p>
              <p className="mt-3 text-muted-foreground">A strong first impression with real photos and a more authentic identity.</p>
            </div>
            <div className="rounded-panel border border-border bg-card p-6 shadow-panel-soft">
              <p className="text-sm uppercase tracking-[0.25em] text-accent">Next upgrade</p>
              <p className="mt-4 font-display text-3xl">Practical details</p>
              <p className="mt-3 text-muted-foreground">Address, map, phone, reservation CTA and a cleaner digitised menu.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
