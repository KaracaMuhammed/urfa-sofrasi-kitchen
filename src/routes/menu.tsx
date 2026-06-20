import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
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
              Prijzen in € · Allergenen op aanvraag
            </p>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-8 lg:py-16">
          <div className="mx-auto flex max-w-6xl flex-col gap-10">
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
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
