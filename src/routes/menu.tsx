import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import menuPage1 from "@/assets/menu-page-1.png.asset.json";
import menuPage2 from "@/assets/menu-page-2.png.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menukaart — Urfa Sofrası" },
      {
        name: "description",
        content:
          "Pizza's, pides, lahmacun, schotels, kapsalon, pasta's, salades, Turkse desserts en dranken bij Urfa Sofrası.",
      },
      { property: "og:title", content: "Menukaart — Urfa Sofrası" },
      { property: "og:description", content: "Bekijk de volledige menukaart van Urfa Sofrası." },
      { property: "og:url", content: "/menu" },
      { property: "og:image", content: menuPage1.url },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

type Item = { name: string; tr?: string; desc: string; price: string };
type Section = { title: string; tr: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Pides",
    tr: "Turkse boten uit de houtoven",
    items: [
      { name: "Pide met kaas", tr: "Kaşarlı Pide", desc: "Gesmolten kaas, sesamranden", price: "12" },
      { name: "Pide met gehakt", tr: "Kıymalı Pide", desc: "Gekruid gehakt, peterselie", price: "14" },
      { name: "Pide met sucuk", tr: "Sucuklu Pide", desc: "Turkse sucuk en kaas", price: "14" },
      { name: "Gemengde pide", tr: "Karışık Pide", desc: "Kaas, gehakt, sucuk, ei", price: "16" },
    ],
  },
  {
    title: "Lahmacun",
    tr: "Turkse dunne flatbread",
    items: [
      { name: "Klassieke lahmacun", tr: "Klasik Lahmacun", desc: "Gehakt, kruiden, paprika", price: "5" },
      { name: "Pittige lahmacun", tr: "Acılı Lahmacun", desc: "Met chili en extra kruiden", price: "5,5" },
      { name: "Lahmacun menu", tr: "Lahmacun Menü", desc: "Lahmacun, ayran, salade", price: "9" },
    ],
  },
  {
    title: "Grill & schotels",
    tr: "Izgara",
    items: [
      { name: "Adana kebab", tr: "Adana Kebab", desc: "Pittig handgehakt lamsvlees", price: "18" },
      { name: "Urfa kebab", tr: "Urfa Kebab", desc: "Milde, geurige lamsspies", price: "18" },
      { name: "Kipspies", tr: "Tavuk Şiş", desc: "Gemarineerde kipspiesjes", price: "16" },
      { name: "Kapsalon", desc: "Friet, kebab, kaas, salade", price: "14" },
      { name: "Gemengde grillplank", tr: "Karışık Izgara", desc: "Voor aan tafel — om te delen", price: "28" },
    ],
  },
  {
    title: "Dessert & drank",
    tr: "Tatlı & İçecek",
    items: [
      { name: "Künefe", desc: "Krokante kadayıf, gesmolten kaas, siroop", price: "8" },
      { name: "Rijstpudding uit de oven", tr: "Fırın Sütlaç", desc: "Ovengebakken rijstpudding", price: "6" },
      { name: "Baklava (3 st.)", desc: "Met pistache of walnoot", price: "7" },
      { name: "Ayran", desc: "Huisgemaakte yoghurtdrank", price: "3" },
      { name: "Turkse koffie", tr: "Türk Kahvesi", desc: "Steengemalen Turkse koffie", price: "3,5" },
      { name: "Şalgam", desc: "Gefermenteerd raapsap", price: "3,5" },
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
            <p className="eyebrow">Menukaart</p>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl">
              Uit de oven, van de grill, naar tafel.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Prijzen in € · Service & btw inbegrepen · Allergenen op aanvraag
            </p>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {sections.map((sec) => (
              <div key={sec.title}>
                <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
                  <div>
                    <h2 className="font-display text-3xl text-ink">{sec.title}</h2>
                    <p className="text-sm italic text-muted-foreground">{sec.tr}</p>
                  </div>
                  <span className="font-display text-xl italic text-ember">€</span>
                </div>
                <ul className="space-y-5">
                  {sec.items.map((it) => (
                    <li key={it.name} className="flex items-baseline gap-4">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3">
                          <span className="font-display text-lg text-ink">{it.name}</span>
                          <span className="flex-1 border-b border-dotted border-border" />
                          <span className="font-display text-lg text-ember">{it.price}</span>
                        </div>
                        {it.tr && (
                          <p className="text-xs uppercase tracking-[0.2em] text-leaf/80">{it.tr}</p>
                        )}
                        <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-secondary/40 px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="eyebrow">Originele kaart</p>
              <h2 className="mt-3 font-display text-4xl">De volledige menukaart.</h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                Precies zoals hij in het restaurant aan de muur hangt — voor wie
                het complete plaatje wil zien.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <figure className="overflow-hidden rounded-panel border border-border shadow-panel">
                <img
                  src={menuPage1.url}
                  alt="Menukaart Urfa Sofrası — pizza's, schotels, kapsalon, frietjes, pasta's, salades en aperitief"
                  className="w-full"
                />
              </figure>
              <figure className="overflow-hidden rounded-panel border border-border shadow-panel">
                <img
                  src={menuPage2.url}
                  alt="Menukaart Urfa Sofrası — pides, lahmacun, kiremit ovenschotels, broodjes/dürüm, dranken en dessert"
                  loading="lazy"
                  className="w-full"
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
