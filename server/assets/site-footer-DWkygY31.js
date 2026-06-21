import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { i as images } from "./router-DD625rHn.js";
const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menukaart" },
  { to: "/about", label: "Verhaal" },
  { to: "/contact", label: "Bezoek" }
];
function SiteHeader() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-border bg-ink/95 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-3", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: images.logo,
        alt: "Urfa Sofrası",
        width: 885,
        height: 500,
        className: "h-12 w-auto sm:h-14"
      }
    ) }),
    /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-8 text-sm font-medium text-primary-foreground/75 md:flex", children: nav.map((item) => /* @__PURE__ */ jsx(
      Link,
      {
        to: item.to,
        className: "transition hover:text-accent",
        activeProps: { className: "text-accent" },
        activeOptions: { exact: item.to === "/" },
        children: item.label
      },
      item.to
    )) }),
    /* @__PURE__ */ jsx(
      Link,
      {
        to: "/contact",
        className: "rounded-full bg-accent px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-foreground transition hover:brightness-110",
        children: "Bestellen"
      }
    )
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxs("footer", { className: "border-t border-border bg-ink text-primary-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("img", { src: images.logo, alt: "Urfa Sofrası", className: "h-12 w-auto" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 max-w-xs text-sm leading-7 text-primary-foreground/70", children: "Anatolisch vuur, gulle tafels. Pides, lahmacun en grillschotels in een warme, groen-gouden eetzaal." }),
        /* @__PURE__ */ jsxs("p", { className: "mt-6 font-display text-2xl italic text-accent", children: [
          "Hoş geldiniz ",
          /* @__PURE__ */ jsx("span", { className: "text-primary-foreground/60", children: "— welkom." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-accent", children: "Bezoek" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://www.google.com/maps/search/?api=1&query=Dokter+Persoonslaan+13,+2830+Willebroek",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "underline underline-offset-4 hover:text-accent",
              children: [
                "Dokter Persoonslaan 13",
                /* @__PURE__ */ jsx("br", {}),
                "2830 Willebroek"
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:035010610", className: "underline underline-offset-4 hover:text-accent", children: "03 501 06 10" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-accent", children: "Openingsuren" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsx("span", { children: "Maandag" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary-foreground/60", children: "11:00–23:00" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsx("span", { children: "Dinsdag" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary-foreground/60", children: "11:00–23:00" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsx("span", { children: "Woensdag" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary-foreground/60", children: "Gesloten" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsx("span", { children: "Donderdag" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary-foreground/60", children: "11:00–23:00" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsx("span", { children: "Vrijdag" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary-foreground/60", children: "11:00–00:00" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsx("span", { children: "Zaterdag" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary-foreground/60", children: "11:00–00:00" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex justify-between gap-4", children: [
            /* @__PURE__ */ jsx("span", { children: "Zondag" }),
            /* @__PURE__ */ jsx("span", { className: "text-primary-foreground/60", children: "14:00–22:00" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow text-accent", children: "Ontdek" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-4 space-y-2 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/menu", className: "hover:text-accent", children: "Menukaart" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-accent", children: "Ons verhaal" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-accent", children: "Bestellen" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-primary-foreground/10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:px-8", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Urfa Sofrası. Alle rechten voorbehouden."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "uppercase tracking-[0.25em]", children: "Pide · Lahmacun · Izgara" })
    ] }) })
  ] });
}
export {
  SiteHeader as S,
  SiteFooter as a
};
