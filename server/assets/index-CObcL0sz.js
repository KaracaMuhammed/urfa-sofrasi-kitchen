import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-DWkygY31.js";
import { i as images } from "./router-DD625rHn.js";
import "@tanstack/react-query";
import "react";
const dishes = [{
  tag: "Uit de houtoven",
  name: "Kaşarlı Pide",
  tr: "Pide met gesmolten kaas",
  desc: "Lange boten gebakken tot de kaas borrelt en de korst knappert.",
  img: images.foodPide
}, {
  tag: "Uit de steenoven",
  name: "Lahmacun",
  tr: "Turkse dunne flatbread",
  desc: "Flinterdunne rondjes, gekruid gehakt, peterselie en citroen.",
  img: images.foodLahmacun
}, {
  tag: "Voor aan tafel",
  name: "Karışık Plank",
  tr: "Gemengde deelplank",
  desc: "Een gulle plank pide & lahmacun, gemaakt om te delen.",
  img: images.foodMix
}];
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center animate-rise", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Nieuw geopend · Anatolische keuken" }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.4rem]", children: [
            "Een warme tafel uit ",
            /* @__PURE__ */ jsx("em", { className: "not-italic text-ember", children: "Urfa" }),
            ", in onze buurt."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-7 max-w-xl text-lg leading-8 text-muted-foreground", children: "Houtgebakken pides, krokante lahmacun en izgara — geserveerd zoals het hoort: gul, met de tijd, en iedereen rond de tafel." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsx(Link, { to: "/menu", className: "rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-panel transition hover:bg-leaf", children: "Bekijk de menukaart" }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: "rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ember hover:text-ember", children: "Tafel reserveren" })
          ] }),
          /* @__PURE__ */ jsxs("dl", { className: "mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("dt", { className: "eyebrow", children: "Open" }),
              /* @__PURE__ */ jsx("dd", { className: "mt-2 font-display text-2xl text-ink", children: "Do – Di" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("dt", { className: "eyebrow", children: "Stijl" }),
              /* @__PURE__ */ jsx("dd", { className: "mt-2 font-display text-2xl text-ink", children: "Familie" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("dt", { className: "eyebrow", children: "Herkomst" }),
              /* @__PURE__ */ jsx("dd", { className: "mt-2 font-display text-2xl text-ink", children: "Anatolië" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-panel shadow-panel", children: [
            /* @__PURE__ */ jsx("img", { src: images.exterior, alt: "Voorgevel van Urfa Sofrası met verlichte groen-gouden uithangbord", className: "h-full w-full object-cover" }),
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 bg-hero-overlay p-6", children: [
              /* @__PURE__ */ jsx("p", { className: "font-display text-3xl italic text-accent", children: "Afiyet olsun." }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-foreground/80", children: "Eet smakelijk." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-6 -left-6 hidden rounded-panel bg-leaf p-5 text-primary-foreground shadow-panel-soft lg:block", children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow text-accent", children: "Onze klassieker" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-2xl", children: "Kaşarlı Pide" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-secondary/40 px-5 py-20 sm:px-8 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-14 flex flex-wrap items-end justify-between gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "De gerechten" }),
            /* @__PURE__ */ jsx("h2", { className: "mt-3 max-w-2xl font-display text-4xl sm:text-5xl", children: "Drie dingen om eerst te bestellen." })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/menu", className: "text-sm font-semibold uppercase tracking-[0.22em] text-ember hover:text-ink", children: "Hele menukaart →" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: dishes.map((d, i) => /* @__PURE__ */ jsxs("article", { className: "group overflow-hidden rounded-panel border border-border bg-card shadow-panel-soft transition hover:shadow-panel", children: [
          /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: d.img, alt: d.name, loading: i === 0 ? "eager" : "lazy", className: "h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("p", { className: "eyebrow", children: d.tag }),
            /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl text-ink", children: d.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm italic text-muted-foreground", children: d.tr }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-muted-foreground", children: d.desc })
          ] })
        ] }, d.name)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "px-5 py-20 sm:px-8 lg:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-panel shadow-panel", children: /* @__PURE__ */ jsx("img", { src: images.interior, alt: "Interieur van Urfa Sofrası met houten banken en muurschilderingen", loading: "lazy", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Onze eetzaal" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl", children: "Een eetzaal die meteen vertrouwd voelt." }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-8 text-muted-foreground", children: "Olijfgroene banken, geschilderde muren en patroontextiel — de ruimte draagt de warmte van een Anatolische avond. Kom voor één pide, blijf voor de thee." }),
          /* @__PURE__ */ jsx(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-ember hover:text-ink", children: "Lees ons verhaal →" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-ink px-5 py-20 text-primary-foreground sm:px-8 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-5xl flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-3xl italic text-accent", children: "Buyurun." }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-4xl sm:text-5xl", children: "Bestel nu — de oven brandt al." }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xl text-primary-foreground/70", children: "Bestellen is eenvoudig: bel, mail, of loop gewoon binnen. We zorgen dat alles klaarstaat." }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "mt-9 rounded-full bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground transition hover:brightness-110", children: "Nu bestellen" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
