import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-DWkygY31.js";
import { i as images } from "./router-DD625rHn.js";
import "@tanstack/react-query";
import "react";
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "px-5 py-16 sm:px-8 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Ons verhaal" }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-4 font-display text-5xl leading-tight sm:text-6xl", children: [
            "Een stukje ",
            /* @__PURE__ */ jsx("em", { className: "not-italic text-ember", children: "Urfa" }),
            ", op een buurttafel gezet."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-8 text-muted-foreground", children: "Şanlıurfa, in zuidoostelijk Anatolië, is een stad van brood, vuur en langzame gastvrijheid. Dat idee namen we mee naar huis: een kleine keuken met een hete oven, een lange tafel, en gerechten zoals we ze van kinds af aan kennen." }),
          /* @__PURE__ */ jsxs("p", { className: "mt-4 italic text-muted-foreground", children: [
            '"Sofra" betekent letterlijk ',
            /* @__PURE__ */ jsx("span", { className: "text-ink", children: "eettafel" }),
            " — de plek waar alles samenkomt."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-panel shadow-panel", children: /* @__PURE__ */ jsx("img", { src: images.interior, alt: "Binnen bij Urfa Sofrası", className: "w-full" }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-secondary/40 px-5 py-16 sm:px-8 lg:py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-10 md:grid-cols-3", children: [{
        k: "01",
        t: "Uit de oven",
        d: "Pides lang en langzaam gebakken tot de randen knappen en de kaas zingt."
      }, {
        k: "02",
        t: "Van de grill",
        d: "Handgehakte kebab en spiezen boven echt vuur — zonder shortcuts."
      }, {
        k: "03",
        t: "Uit het hart",
        d: "Familierecepten, Turkse gastvrijheid en een tafel om te delen."
      }].map((b) => /* @__PURE__ */ jsxs("div", { className: "rounded-panel border border-border bg-card p-7 shadow-panel-soft", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-3xl italic text-ember", children: b.k }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-2xl text-ink", children: b.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-7 text-muted-foreground", children: b.d })
      ] }, b.k)) }) }),
      /* @__PURE__ */ jsx("section", { className: "px-5 py-16 sm:px-8 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-panel shadow-panel", children: /* @__PURE__ */ jsx("img", { src: images.exterior, alt: "Voorgevel van Urfa Sofrası", loading: "lazy", className: "w-full" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Bezoek" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl", children: "Kom binnen, blijf lang, eet goed." }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-8 text-muted-foreground", children: "Of het nu een snelle lahmacun is tussen de middag of de hele tafel op zaterdagavond — je bent welkom bij Urfa Sofrası." }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "mt-8 inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground transition hover:bg-leaf", children: "Plan je bezoek" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  AboutPage as component
};
