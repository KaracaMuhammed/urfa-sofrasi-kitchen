import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/urfa-sofrasi-kitchen/assets/styles-DgBx1Gdy.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$5 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Urfa Sofrası — Anatolische keuken" },
      {
        name: "description",
        content: "Urfa Sofrası — pides, lahmacun, schotels en Turkse desserts in een warme, groen-gouden eetzaal."
      },
      { name: "theme-color", content: "#1f3a26" },
      { property: "og:site_name", content: "Urfa Sofrası" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Urfa Sofrası — Anatolische keuken" },
      { name: "twitter:title", content: "Urfa Sofrası — Anatolische keuken" },
      { property: "og:description", content: "Pides, lahmacun en grillschotels uit Anatolië — in een warme, groen-gouden eetzaal in Willebroek." },
      { name: "twitter:description", content: "Pides, lahmacun en grillschotels uit Anatolië — in een warme, groen-gouden eetzaal in Willebroek." }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Urfa Sofrası",
          servesCuisine: ["Turks", "Anatolisch"],
          priceRange: "$$",
          url: "https://urfa-sofrasi-kitchen.lovable.app/",
          telephone: "+3235010610",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Dokter Persoonslaan 13",
            postalCode: "2830",
            addressLocality: "Willebroek",
            addressCountry: "BE"
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday"], opens: "11:00", closes: "23:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "11:00", closes: "00:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "14:00", closes: "22:00" }
          ]
        })
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Manrope:wght@300;400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$5.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const BASE_URL = "";
const Route$4 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/menu", changefreq: "weekly", priority: "0.9" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" }
        ];
        const urls = entries.map(
          (e) => [
            "  <url>",
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            "  </url>"
          ].filter(Boolean).join("\n")
        );
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...urls,
          "</urlset>"
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const imageUrl = (path) => `${"/urfa-sofrasi-kitchen/"}${path}`;
const images = {
  logo: imageUrl("images/urfa-logo.png"),
  exterior: imageUrl("images/urfa-exterior-new.png"),
  interior: imageUrl("images/urfa-interior-new.png"),
  foodMix: imageUrl("images/urfa-food-mix.png"),
  foodLahmacun: imageUrl("images/urfa-food-lahmacun.png"),
  foodPide: imageUrl("images/urfa-food-pide.png"),
  menuPage1: imageUrl("images/menu-page-1.png"),
  menuPage2: imageUrl("images/menu-page-2.png")
};
const $$splitComponentImporter$3 = () => import("./menu-9QYp9xh2.js");
const Route$3 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Menukaart — Urfa Sofrası"
    }, {
      name: "description",
      content: "Pizza's, pides, lahmacun, schotels, kapsalon, pasta's, salades, Turkse desserts en dranken bij Urfa Sofrası."
    }, {
      property: "og:title",
      content: "Menukaart — Urfa Sofrası"
    }, {
      property: "og:description",
      content: "Bekijk de volledige menukaart van Urfa Sofrası."
    }, {
      property: "og:url",
      content: "/menu"
    }, {
      property: "og:image",
      content: images.menuPage1
    }],
    links: [{
      rel: "canonical",
      href: "/menu"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-B_-6PL3I.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Bezoek & reserveren — Urfa Sofrası"
    }, {
      name: "description",
      content: "Openingstijden, adres en reservering voor Urfa Sofrası in Willebroek. Dine-in en afhaal."
    }, {
      property: "og:title",
      content: "Bezoek & reserveren — Urfa Sofrası"
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DKPBEiR6.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Ons verhaal — Urfa Sofrası"
    }, {
      name: "description",
      content: "Het verhaal achter Urfa Sofrası: een Anatolische keuken in de buurt, met pide, lahmacun en de sfeer van een familietafel."
    }, {
      property: "og:title",
      content: "Ons verhaal — Urfa Sofrası"
    }, {
      property: "og:url",
      content: "/about"
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:image",
      content: images.interior
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CObcL0sz.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Urfa Sofrası — Pides, Lahmacun & Izgara"
    }, {
      name: "description",
      content: "Nieuw geopende Anatolische keuken: houtgebakken pides, krokante lahmacun en grillschotels in een warme, groen-gouden eetzaal."
    }, {
      property: "og:title",
      content: "Urfa Sofrası — Anatolische keuken"
    }, {
      property: "og:description",
      content: "Pides, lahmacun, izgara. Een warme Anatolische tafel in de buurt."
    }, {
      property: "og:url",
      content: "/"
    }, {
      property: "og:image",
      content: images.exterior
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$4.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$5
});
const MenuRoute = Route$3.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  MenuRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  images as i,
  router as r
};
