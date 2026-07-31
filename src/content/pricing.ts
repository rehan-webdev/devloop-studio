export type PricingTier = {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge?: string;
};

export const pricingNote =
  "Fixed pricing, agreed before we start. No hourly billing, no scope creep, no surprise invoices.";

export const pricingTiers: PricingTier[] = [
  {
    name: "Launch",
    price: "$500",
    priceNote: "one-time · 2 weeks",
    description:
      "For startups and small businesses that need a sharp, credible presence — fast.",
    features: [
      "5-page custom-designed website",
      "Conversion-focused copywriting polish",
      "Mobile-first, responsive build",
      "Technical SEO & analytics setup",
      "Contact form with lead routing",
      "CMS so you can edit everything",
      "30-day post-launch warranty",
    ],
    cta: "Start with Launch",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$800",
    priceNote: "one-time · 3 weeks",
    description:
      "Our signature package. A complete website engineered to convert — delivered in 3 weeks, guaranteed.",
    features: [
      "Everything in Launch, plus:",
      "Up to 10 pages + blog/CMS",
      "Full UX strategy & wireframes",
      "Custom design system",
      "CRO package: heatmaps, A/B-ready events",
      "Copywriting for every page",
      "On-page SEO with schema markup",
      "3-week delivery guarantee",
      "60-day post-launch warranty",
    ],
    cta: "Book your build slot",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Scale",
    price: "$1,200",
    priceNote: "per month · from",
    description:
      "An embedded design + development partner for teams that ship and iterate every month.",
    features: [
      "Everything in Growth, plus:",
      "Monthly design/dev allowance",
      "Landing pages on demand",
      "Ongoing CRO & A/B testing program",
      "SEO content strategy & execution",
      "Managed hosting, monitoring & updates",
      "Priority same-day support",
      "Quarterly growth roadmap",
    ],
    cta: "Become a partner",
    highlighted: false,
  },
];
