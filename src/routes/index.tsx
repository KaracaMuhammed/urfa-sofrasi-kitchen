import { createFileRoute } from "@tanstack/react-router";
import heroKebab from "@/assets/hero-kebab.jpg";
import mezze from "@/assets/mezze.jpg";
import lahmacun from "@/assets/lahmacun.jpg";
import coffee from "@/assets/coffee.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urfa Sofrası — Anatolian Fire, Local Table" },
      {
        name: "description",
        content:
          "Urfa Sofrası brings the smoke, spice and hospitality of southeastern Türkiye to our neighbourhood. Charcoal kebabs, mezze, lahmacun and Turkish coffee.",
      },
      { property: "og:title", content: "Urfa Sofrası — Anatolian Fire, Local Table" },
      { property: "og:description", content: "Charcoal kebabs, mezze and Turkish coffee from the heart of Urfa." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=Amiri:wght@400;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Urfa Sofrası",
          servesCuisine: ["Turkish", "Anatolian", "Middle Eastern"],
          priceRange: "$$",
          description:
            "Charcoal kebabs, mezze and lahmacun in the tradition of Şanlıurfa.",
        }),
      },
    ],
  }),
  component: Index,
});

const menu = [
  {
    section: "Ateşten — From the Fire",
    items: [
      { name: "Urfa Kebabı", desc: "Hand-chopped lamb, mild pepper, charcoal grilled on skewer.", price: "18" },
      { name: "Adana Acılı", desc: "Spiced minced lamb, sumac onions, grilled flatbread.", price: "17" },
      { name: "Çöp Şiş", desc: "Cubed lamb tenderloin, oregano, lemon.", price: "21" },
      { name: "Tavuk Şiş", desc: "Yogurt-marinated chicken, smoked paprika butter.", price: "16" },
    ],
  },
  {
    section: "Sofradan — From the Table",
    items: [
      { name: "Lahmacun", desc: "Thin flatbread, minced lamb, parsley, lemon.", price: "9" },
      { name: "Çiğ Köfte", desc: "Bulgur, isot pepper, walnut, lettuce wrap.", price: "11" },
      { name: "İçli Köfte", desc: "Bulgur shells, spiced lamb & walnut filling.", price: "12" },
      { name: "Mezze Sofrası", desc: "Hummus, muhammara, haydari, dolma, ezme.", price: "19" },
    ],
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="h-2 w-2 rounded-full bg-primary animate-ember" />
            <span className="font-display text-lg tracking-wide">
              Urfa <span className="text-accent italic">Sofrası</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#story" className="hover:text-foreground transition">Story</a>
            <a href="#menu" className="hover:text-foreground transition">Menu</a>
            <a href="#room" className="hover:text-foreground transition">The Room</a>
            <a href="#visit" className="hover:text-foreground transition">Visit</a>
          </nav>
          <a
            href="#visit"
            className="text-xs uppercase tracking-[0.2em] border border-accent/40 text-accent px-4 py-2 hover:bg-accent hover:text-accent-foreground transition"
          >
            Reserve
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={heroKebab}
          alt="Urfa kebab grilling over charcoal embers"
          width={1600}
          height={1800}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-grain opacity-40" />

        <div className="relative mx-auto max-w-7xl w-full px-6 pb-20 pt-32 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8 animate-rise">
            <p className="font-arabic text-accent text-xl mb-6">صفرة أورفة</p>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-balance">
              Anatolian fire,<br />
              <span className="italic text-accent">a local</span> table.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Urfa Sofrası has just opened in the neighbourhood — bringing the smoke,
              spice and hospitality of southeastern Türkiye to your evening.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="bg-gradient-ember text-primary-foreground px-7 py-4 text-sm uppercase tracking-[0.2em] shadow-ember hover:opacity-95 transition"
              >
                Explore the Menu
              </a>
              <a
                href="#visit"
                className="border border-border px-7 py-4 text-sm uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition"
              >
                Book a Table
              </a>
            </div>
          </div>
          <div className="md:col-span-4 md:text-right text-sm text-muted-foreground space-y-1">
            <p className="uppercase tracking-[0.3em] text-accent text-xs">Now Open</p>
            <p>Tue – Sun · 17:00 – 23:00</p>
            <p>Reservations recommended</p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="py-32 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">— Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
              From the courtyards of <span className="italic text-accent">Şanlıurfa</span>,
              to a corner of your street.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              In Urfa, the kebab is not a dish — it is a ritual. Lamb is chopped by hand
              at dawn, rested with isot pepper, and met with charcoal only when the
              guests have arrived.
            </p>
            <p>
              We carry that patience here. Every skewer, every flatbread, every cup of
              bitter-sweet coffee is made the way our grandmothers taught us — slowly,
              and for someone in particular.
            </p>
            <p className="font-display italic text-accent text-xl">
              "Bir lokma, bin sohbet." — one bite, a thousand conversations.
            </p>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative py-32 px-6 bg-card/40 border-y border-border">
        <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">— The Menu</p>
              <h2 className="font-display text-5xl md:text-6xl">A small, honest list.</h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Changes lightly with the season. Ask us about the grill specials —
              there is always one off the page.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {menu.map((section) => (
              <div key={section.section}>
                <h3 className="font-display text-2xl mb-8 pb-4 border-b border-border flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {section.section}
                </h3>
                <ul className="space-y-7">
                  {section.items.map((item) => (
                    <li key={item.name} className="group">
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-xl text-foreground">{item.name}</span>
                        <span className="flex-1 border-b border-dotted border-border/60 translate-y-[-4px]" />
                        <span className="font-display text-xl text-accent">€{item.price}</span>
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* food image triptych */}
          <div className="mt-20 grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-7 aspect-[4/3] md:aspect-auto overflow-hidden shadow-deep">
              <img src={mezze} alt="Turkish mezze spread with hummus, muhammara and dolma" loading="lazy" width={1400} height={1000}
                className="h-full w-full object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="col-span-7 md:col-span-5 aspect-[4/3] overflow-hidden shadow-deep">
              <img src={lahmacun} alt="Lahmacun on copper plate with lemon" loading="lazy" width={1000} height={1200}
                className="h-full w-full object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="col-span-5 md:col-span-5 md:col-start-8 aspect-square overflow-hidden shadow-deep">
              <img src={coffee} alt="Turkish coffee being poured from copper cezve" loading="lazy" width={1000} height={1200}
                className="h-full w-full object-cover hover:scale-105 transition duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* ROOM */}
      <section id="room" className="py-32 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 order-2 md:order-1 overflow-hidden shadow-deep">
            <img src={interior} alt="Warm Anatolian restaurant interior with copper lanterns and kilim rugs"
              loading="lazy" width={1600} height={1000}
              className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">— The Room</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6 text-balance">
              Copper light. Kilim shadows. Long evenings.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Forty-eight seats, a single grill, and a soundtrack that wanders between
              Erkin Koray and the call of the muezzin. Come for an hour. Stay for three.
            </p>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="relative py-32 px-6 bg-card/40 border-t border-border">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6">— Visit Us</p>
            <h2 className="font-display text-5xl md:text-6xl mb-8 text-balance">
              The grill is <span className="italic text-accent">already lit</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              Walk-ins welcome at the counter. For groups of four or more, a short
              note ahead means a better seat — and the slow-cooked things.
            </p>
            <a
              href="mailto:hello@urfasofrasi.local"
              className="inline-block bg-gradient-ember text-primary-foreground px-8 py-4 text-sm uppercase tracking-[0.2em] shadow-ember"
            >
              Reserve via Email
            </a>
          </div>
          <dl className="space-y-8 text-lg">
            <div>
              <dt className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Hours</dt>
              <dd className="text-foreground">Tuesday – Sunday</dd>
              <dd className="text-muted-foreground">17:00 – 23:00 · Closed Mondays</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Address</dt>
              <dd className="text-foreground">12 Market Lane</dd>
              <dd className="text-muted-foreground">Old Town Quarter</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Contact</dt>
              <dd className="text-foreground">+00 555 0 URFA</dd>
              <dd className="text-muted-foreground">hello@urfasofrasi.local</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-ember" />
            <span className="font-display">Urfa Sofrası</span>
            <span>· est. 2026</span>
          </div>
          <p className="font-arabic text-accent">أهلاً وسهلاً · Hoş geldiniz</p>
        </div>
      </footer>
    </main>
  );
}
