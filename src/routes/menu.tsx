import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import menuAsset from "@/assets/urfa-menu.png.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Urfa Sofrası" },
      {
        name: "description",
        content:
          "Pides, lahmacun, schotels, kapsalon, Turkish desserts and drinks at Urfa Sofrası.",
      },
      { property: "og:title", content: "Menu — Urfa Sofrası" },
      { property: "og:description", content: "Browse the full Urfa Sofrası menu." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Pides",
    items: [
      ["Kaşarlı Pide", "Melted cheese, sesame edges", "12"],
      ["Kıymalı Pide", "Spiced minced meat, parsley", "14"],
      ["Sucuklu Pide", "Turkish sucuk & cheese", "14"],
      ["Karışık Pide", "Mixed: cheese, meat, sucuk, egg", "16"],
    ],
  },
  {
    title: "Lahmacun",
    items: [
      ["Klasik Lahmacun", "Minced meat, herbs, peppers", "5"],
      ["Acılı Lahmacun", "Spiced version with chili", "5.5"],
      ["Lahmacun Menü", "Lahmacun, ayran, salad", "9"],
    ],
  },
  {
    title: "Grillades & Schotels",
    items: [
      ["Adana Kebab", "Hand-chopped spiced lamb, grilled", "18"],
      ["Urfa Kebab", "Mild, fragrant lamb skewer", "18"],
      ["Tavuk Şiş", "Marinated chicken skewers", "16"],
      ["Kapsalon", "Fries, kebab, cheese, salad", "14"],
      ["Karışık Izgara", "Mixed grill plate to share", "28"],
    ],
  },
  {
    title: "Tatlı & Dranken",
    items: [
      ["Künefe", "Crisp kadayıf, melted cheese, syrup", "8"],
      ["Fırın Sütlaç", "Oven-baked rice pudding", "6"],
      ["Baklava (3 pcs)", "Pistachio or walnut", "7"],
      ["Ayran", "House yoghurt drink", "3"],
      ["Türk Kahvesi", "Stone-ground Turkish coffee", "3.5"],
      ["Şalgam", "Fermented turnip juice", "3.5"],
    ],
  },
];

function MenuPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Menu</p>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl">
              From the oven, the grill, the table.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Prices in € · Service & VAT included · Allergens on request
            </p>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {sections.map((sec) => (
              <div key={sec.title}>
                <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
                  <h2 className="font-display text-3xl text-ink">{sec.title}</h2>
                  <span className="font-script text-xl text-ember">€</span>
                </div>
                <ul className="space-y-5">
                  {sec.items.map(([name, desc, price]) => (
                    <li key={name} className="flex items-baseline gap-4">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3">
                          <span className="font-display text-lg text-ink">{name}</span>
                          <span className="flex-1 border-b border-dotted border-border" />
                          <span className="font-display text-lg text-ember">{price}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-secondary/30 px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow">Original board</p>
              <h2 className="mt-3 font-display text-4xl">The full printed menu.</h2>
              <p className="mt-5 text-muted-foreground">
                What's on the wall, exactly as it hangs in the restaurant — for
                anyone who wants the full picture.
              </p>
            </div>
            <div className="overflow-hidden rounded-panel border border-border shadow-panel">
              <img src={menuAsset.url} alt="Printed menu board" loading="lazy" className="w-full" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
