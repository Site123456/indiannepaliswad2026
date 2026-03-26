import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import Slidercomponent from "./slider";
import { CinematicProvider } from "@/components/CinematicProvider";
import { ToastProvider } from "@/components/ToastHandle";
import "leaflet/dist/leaflet.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.indian-nepaliswad.fr"),

  title: {
    default: "INDIAN NEPALI SWAD — Cuisine Indienne & Népalaise Authentique",
    template: "%s | INDIAN NEPALI SWAD",
  },

  description:
    "INDIAN NEPALI SWAD vous invite à un véritable voyage culinaire entre l’Inde et le Népal. Nos chefs préparent chaque plat avec des épices authentiques, des recettes traditionnelles et un savoir‑faire transmis depuis des générations. Nos currys parfumés mijotent lentement pour révéler toutes leurs nuances, nos biryanis mêlent riz basmati et arômes délicats, et nos momos faits maison incarnent la gourmandise népalaise dans toute sa simplicité. Les grillades tandoori, cuites dans le four traditionnel, apportent une touche fumée irrésistible, tandis que nos nombreuses spécialités végétariennes offrent des saveurs riches et généreuses. Présent à: Paris 15, Ivry, Courbevoie, Aubervilliers, Saint‑Ouen, bref dans toute l’Île‑de‑France et Bordeaux, INDIAN NEPALI SWAD partage partout la même passion : offrir une cuisine chaleureuse, authentique et pleine de caractère, directement inspirée du sous‑continent.",

  keywords: [
    "restaurant indien",
    "restaurant népalais",
    "cuisine indienne",
    "cuisine népalaise",
    "momos",
    "tandoori",
    "biryanis",
    "currys indiens",
    "gastronomie indienne",
    "gastronomie népalaise",
    "restaurant Paris",
    "INDIAN NEPALI SWAD",
    "best indian restaurant paris",
    "best nepali restaurant france",
    "restaurant indien paris 15",
    "momos paris",
    "authentic indian food paris",
    "nepali food paris",
    "tandoori paris",
    "biryani paris",
    "restaurant indien livraison",
    "restaurant népalais livraison",
    "indian food near me paris",
    "nepali momo near me",
    "top indian restaurants france",
    "cuisine indo-népalaise",
  ],

  alternates: {
    canonical: "https://www.indian-nepaliswad.fr",
    languages: {
      "fr-FR": "https://www.indian-nepaliswad.fr",
      "en-US": "https://www.indian-nepaliswad.fr/",
      "en-GB": "https://www.indian-nepaliswad.fr/",
    },
  },
  authors: [{ name: "INDIAN NEPALI SWAD", url: "https://www.indian-nepaliswad.fr" }],
  creator: "INDIAN NEPALI SWAD",
  publisher: "INDIAN NEPALI SWAD",
  category: "restaurant",
  classification: "Cuisine Indienne, Cuisine Népalaise, Gastronomie",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/etc/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/etc/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/etc/logo.png", sizes: "any", type: "image/png" },
    ],
    shortcut: "/etc/logo.png",
    apple: [{ url: "/etc/logo.png", sizes: "180x180", type: "image/png" }],
  },

  manifest: "/manifest.json",
  
  openGraph: {
    title: "INDIAN NEPALI SWAD — Cuisine Indienne & Népalaise",
    description:
      "Découvrez une cuisine indienne et népalaise authentique : momos, tandoori, currys, biryanis et spécialités traditionnelles préparées avec passion.",
    url: "https://www.indian-nepaliswad.fr",
    siteName: "INDIAN NEPALI SWAD",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "INDIAN NEPALI SWAD — Cuisine Indienne & Népalaise",
        type: "image/png",
      },
      {
        url: "/etc/logo.png",
        width: 1200,
        height: 1200,
        alt: "INDIAN NEPALI SWAD Logo",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "INDIAN NEPALI SWAD — Cuisine Indienne & Népalaise",
    description:
      "Restaurant indien et népalais proposant des plats traditionnels : momos, currys, biryanis, grillades tandoori et spécialités végétariennes.",
    images: {
      url: "/banner.png",
      alt: "INDIAN NEPALI SWAD — Cuisine Indienne & Népalaise",
    },
    site: "@indiannepaliswad",
    creator: "@indiannepaliswad",
  },

  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "INDIAN NEPALI SWAD",
    "application-name": "INDIAN NEPALI SWAD",
    "msapplication-TileColor": "#010104",
    "msapplication-tap-highlight": "no",
    "og:email": "contact@indian-nepaliswad.fr",
    "og:country-name": "France",
    rating: "general",
    distribution: "global",
    referrer: "origin-when-cross-origin",
    "format-detection": "telephone=yes, email=yes, address=yes",
    "application-category": "Food & Drink, Restaurant, Indian Restaurant, Nepali Restaurant",

  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#010104" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
  colorScheme: "dark light",
};

function StructuredData() {
  const restaurantSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "INDIAN NEPALI SWAD – Paris 15",
      url: "https://www.indian-nepaliswad.fr",
      logo: "https://www.indian-nepaliswad.fr/etc/logo.png",
      image: "https://www.indian-nepaliswad.fr/banner.png",
      servesCuisine: ["Indienne", "Népalaise"],
      description:
        "Restaurant indien et népalais à Paris 15 : momos, currys, biryanis, tandoori et spécialités végétariennes.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4 Rue Bargue",
        addressLocality: "Paris",
        postalCode: "75015",
        addressCountry: "FR"
      },
      telephone: "+33145327373",
      priceRange: "$$",
      hasMap: "https://www.google.com/maps/place/4+Rue+Bargue,+75015+Paris",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "2000"
      },
      sameAs: [
        "https://deliveroo.fr/fr/menu/paris/Pasteur/bidit-risheb/"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "INDIAN NEPALI SWAD – Bordeaux",
      url: "https://www.indian-nepaliswad.fr",
      logo: "https://www.indian-nepaliswad.fr/etc/logo.png",
      image: "https://www.indian-nepaliswad.fr/banner.png",
      servesCuisine: ["Indienne", "Népalaise"],
      description:
        "Restaurant indien et népalais à Bordeaux : momos, currys, biryanis, tandoori et spécialités végétariennes.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Éditions Cour du Médoc",
        addressLocality: "Bordeaux",
        postalCode: "33300",
        addressCountry: "FR"
      },
      telephone: "+33145327373",
      priceRange: "€€",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1500"
      },
      sameAs: [
        "https://deliveroo.fr/fr/menu/bordeaux/bordeaux-editions-cour-du-medoc/indian-nepali-swad-editions-bordeaux/"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "INDIAN NEPALI SWAD – Courbevoie / La Défense",
      url: "https://www.indian-nepaliswad.fr",
      logo: "https://www.indian-nepaliswad.fr/etc/logo.png",
      image: "https://www.indian-nepaliswad.fr/banner.png",
      servesCuisine: ["Indienne", "Népalaise"],
      description:
        "Restaurant indien et népalais en livraison à Courbevoie et La Défense.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ouest Parisien",
        addressLocality: "Courbevoie",
        postalCode: "92400",
        addressCountry: "FR"
      },
      telephone: "+33145327373",
      priceRange: "€€",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "1300"
      },
      sameAs: [
        "https://deliveroo.fr/fr/menu/paris/editions-courbevoie/indian-nepali-swad-editions-courbevoie/"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "INDIAN NEPALI SWAD – Saint‑Ouen / Aubervilliers",
      url: "https://www.indian-nepaliswad.fr",
      logo: "https://www.indian-nepaliswad.fr/etc/logo.png",
      image: "https://www.indian-nepaliswad.fr/banner.png",
      servesCuisine: ["Indienne", "Népalaise"],
      description:
        "Restaurant indien et népalais en livraison à Saint‑Ouen et Aubervilliers.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nord Parisien",
        addressLocality: "Saint-Ouen",
        postalCode: "93400",
        addressCountry: "FR"
      },
      telephone: "+33145327373",
      priceRange: "€€",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        reviewCount: "1100"
      },
      sameAs: [
        "https://deliveroo.fr/fr/menu/paris/editions-saint-ouen/indian-nepali-swad-editions-aubervilliers/"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "INDIAN NEPALI SWAD – Bagneux",
      url: "https://www.indian-nepaliswad.fr",
      logo: "https://www.indian-nepaliswad.fr/etc/logo.png",
      image: "https://www.indian-nepaliswad.fr/banner.png",
      servesCuisine: ["Indienne", "Népalaise"],
      description:
        "Restaurant indien et népalais en livraison à Bagneux.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Éditions Bagneux",
        addressLocality: "Bagneux",
        postalCode: "92220",
        addressCountry: "FR"
      },
      telephone: "+33145327373",
      priceRange: "€€",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "900"
      },
      sameAs: [
        "https://deliveroo.fr/fr/menu/paris/editions-site-bagneux/indian-nepali-swad-editions-bagneux/"
      ]
    },

    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      name: "INDIAN NEPALI SWAD – Ivry",
      url: "https://www.indian-nepaliswad.fr",
      logo: "https://www.indian-nepaliswad.fr/etc/logo.png",
      image: "https://www.indian-nepaliswad.fr/banner.png",
      servesCuisine: ["Indienne", "Népalaise"],
      description:
        "Restaurant indien et népalais en livraison à Ivry-sur-Seine.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Éditions Ivry",
        addressLocality: "Ivry-sur-Seine",
        postalCode: "94200",
        addressCountry: "FR"
      },
      telephone: "+33145327373",
      priceRange: "€€",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        reviewCount: "950"
      },
      sameAs: [
        "https://deliveroo.fr/fr/menu/paris/editions-ivry/indian-nepali-swad-editions-ivry/"
      ]
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "INDIAN NEPALI SWAD",
    url: "https://www.indian-nepaliswad.fr",
    logo: "https://www.indian-nepaliswad.fr/etc/logo.png",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://search.indian-nepaliswad.fr"
    ],
    description:
      "Indian Nepali Swad — meilleur restaurant indien et népalais en France. Livraison rapide : Paris, Bordeaux, Courbevoie, Saint-Ouen, Bagneux, Aubervilliers, Ivry."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "INDIAN NEPALI SWAD",
    url: "https://www.indian-nepaliswad.fr",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.indian-nepaliswad.fr/search/{search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.indian-nepaliswad.fr"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Commander",
        item: "https://www.indian-nepaliswad.fr/#deliveroo"
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchemas) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="auto" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="preconnect" href="https://deliveroo.fr" />
        <link rel="preconnect" href="https://search.indian-nepaliswad.fr" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/etc/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <StructuredData />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>

      <body id="top"
        className="antialiased bg-[#010104] text-neutral-50 min-h-screen"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        <noscript>Veuillez activer JavaScript pour profiter pleinement du site INDIAN NEPALI SWAD.</noscript>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Aller au contenu principal
        </a>

        <CinematicProvider>
          <ToastProvider>
            <Slidercomponent>
              <div id="main-content" role="main">
                {children}
              </div>
            </Slidercomponent>
          </ToastProvider>
        </CinematicProvider>
      </body>
    </html>
  );
}
