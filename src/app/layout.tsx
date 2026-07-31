import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Inter } from "next/font/google";
import { site } from "@/content/site";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "web design agency",
    "web development agency",
    "conversion focused websites",
    "Next.js development",
    "SEO",
    "e-commerce development",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: "/images/hero-main.png", width: 1200, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/images/hero-main.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffefd5",
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        description: site.description,
        email: site.email,
        foundingDate: site.founded,
        slogan: site.tagline,
        areaServed: "Worldwide",
        knowsAbout: [
          "Web design",
          "Web development",
          "Conversion rate optimization",
          "SEO",
          "Brand identity",
        ],
        sameAs: site.socials.map((s) => s.href),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plex.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-ink-950 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
