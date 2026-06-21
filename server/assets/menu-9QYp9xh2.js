import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useState } from "react";
import { S as SiteHeader, a as SiteFooter } from "./site-footer-DWkygY31.js";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { i as images } from "./router-DD625rHn.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = DialogPrimitive.Root;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const sections = [{
  title: "Pides",
  tr: "Turkse boten uit de houtoven",
  items: [{
    name: "Pide met kaas",
    tr: "Kaşarlı Pide",
    desc: "Gesmolten kaas, sesamranden",
    price: "12"
  }, {
    name: "Pide met gehakt",
    tr: "Kıymalı Pide",
    desc: "Gekruid gehakt, peterselie",
    price: "14"
  }, {
    name: "Pide met sucuk",
    tr: "Sucuklu Pide",
    desc: "Turkse sucuk en kaas",
    price: "14"
  }, {
    name: "Gemengde pide",
    tr: "Karışık Pide",
    desc: "Kaas, gehakt, sucuk, ei",
    price: "16"
  }]
}, {
  title: "Lahmacun",
  tr: "Turkse dunne flatbread",
  items: [{
    name: "Klassieke lahmacun",
    tr: "Klasik Lahmacun",
    desc: "Gehakt, kruiden, paprika",
    price: "5"
  }, {
    name: "Pittige lahmacun",
    tr: "Acılı Lahmacun",
    desc: "Met chili en extra kruiden",
    price: "5,5"
  }, {
    name: "Lahmacun menu",
    tr: "Lahmacun Menü",
    desc: "Lahmacun, ayran, salade",
    price: "9"
  }]
}, {
  title: "Grill & schotels",
  tr: "Izgara",
  items: [{
    name: "Adana kebab",
    tr: "Adana Kebab",
    desc: "Pittig handgehakt lamsvlees",
    price: "18"
  }, {
    name: "Urfa kebab",
    tr: "Urfa Kebab",
    desc: "Milde, geurige lamsspies",
    price: "18"
  }, {
    name: "Kipspies",
    tr: "Tavuk Şiş",
    desc: "Gemarineerde kipspiesjes",
    price: "16"
  }, {
    name: "Kapsalon",
    desc: "Friet, kebab, kaas, salade",
    price: "14"
  }, {
    name: "Gemengde grillplank",
    tr: "Karışık Izgara",
    desc: "Voor aan tafel — om te delen",
    price: "28"
  }]
}, {
  title: "Dessert & drank",
  tr: "Tatlı & İçecek",
  items: [{
    name: "Künefe",
    desc: "Krokante kadayıf, gesmolten kaas, siroop",
    price: "8"
  }, {
    name: "Rijstpudding uit de oven",
    tr: "Fırın Sütlaç",
    desc: "Ovengebakken rijstpudding",
    price: "6"
  }, {
    name: "Baklava (3 st.)",
    desc: "Met pistache of walnoot",
    price: "7"
  }, {
    name: "Ayran",
    desc: "Huisgemaakte yoghurtdrank",
    price: "3"
  }, {
    name: "Turkse koffie",
    tr: "Türk Kahvesi",
    desc: "Steengemalen Turkse koffie",
    price: "3,5"
  }, {
    name: "Şalgam",
    desc: "Gefermenteerd raapsap",
    price: "3,5"
  }]
}];
function MenuPage() {
  const [activeImage, setActiveImage] = useState(null);
  const [activeAlt, setActiveAlt] = useState("");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx("section", { className: "border-b border-border px-5 py-16 sm:px-8 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Menukaart" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 font-display text-5xl sm:text-6xl", children: "Uit de oven, van de grill, naar tafel." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-8 text-muted-foreground", children: "Prijzen in € · Service & btw inbegrepen · Allergenen op aanvraag" })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "px-5 py-16 sm:px-8 lg:py-20", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-12 lg:grid-cols-2", children: sections.map((sec) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-baseline justify-between border-b border-border pb-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl text-ink", children: sec.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm italic text-muted-foreground", children: sec.tr })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "font-display text-xl italic text-ember", children: "€" })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-5", children: sec.items.map((it) => /* @__PURE__ */ jsx("li", { className: "flex items-baseline gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "font-display text-lg text-ink", children: it.name }),
            /* @__PURE__ */ jsx("span", { className: "flex-1 border-b border-dotted border-border" }),
            /* @__PURE__ */ jsx("span", { className: "font-display text-lg text-ember", children: it.price })
          ] }),
          it.tr && /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-leaf/80", children: it.tr }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: it.desc })
        ] }) }, it.name)) })
      ] }, sec.title)) }) }),
      /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-secondary/40 px-5 py-16 sm:px-8 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-10 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "eyebrow", children: "Originele kaart" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl", children: "De volledige menukaart." }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-xl text-muted-foreground", children: "Precies zoals hij in het restaurant aan de muur hangt — voor wie het complete plaatje wil zien." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsx("figure", { className: "cursor-zoom-in overflow-hidden rounded-panel border border-border shadow-panel", onClick: () => {
            setActiveImage(images.menuPage1);
            setActiveAlt("Menukaart Urfa Sofrası — pizza's, schotels, kapsalon, frietjes, pasta's, salades en aperitief");
          }, children: /* @__PURE__ */ jsx("img", { src: images.menuPage1, alt: "Menukaart Urfa Sofrası — pizza's, schotels, kapsalon, frietjes, pasta's, salades en aperitief", className: "w-full" }) }),
          /* @__PURE__ */ jsx("figure", { className: "cursor-zoom-in overflow-hidden rounded-panel border border-border shadow-panel", onClick: () => {
            setActiveImage(images.menuPage2);
            setActiveAlt("Menukaart Urfa Sofrası — pides, lahmacun, kiremit ovenschotels, broodjes/dürüm, dranken en dessert");
          }, children: /* @__PURE__ */ jsx("img", { src: images.menuPage2, alt: "Menukaart Urfa Sofrası — pides, lahmacun, kiremit ovenschotels, broodjes/dürüm, dranken en dessert", loading: "lazy", className: "w-full" }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Dialog, { open: !!activeImage, onOpenChange: (open) => !open && setActiveImage(null), children: /* @__PURE__ */ jsxs(DialogContent, { className: "max-h-[95vh] max-w-[95vw] border-none bg-transparent p-0 shadow-none data-[state=open]:zoom-in-95", children: [
      /* @__PURE__ */ jsx(DialogTitle, { className: "sr-only", children: activeAlt }),
      activeImage && /* @__PURE__ */ jsx("img", { src: activeImage, alt: activeAlt, className: "max-h-[90vh] max-w-full rounded-panel object-contain" })
    ] }) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  MenuPage as component
};
