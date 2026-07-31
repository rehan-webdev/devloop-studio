/**
 * Case studies — shown on home (featured), /work grid, and /work/[slug].
 * `category` powers the portfolio filter.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  category: "SaaS" | "E-commerce" | "Professional Services";
  industry: string;
  year: string;
  duration: string;
  services: string[];
  summary: string;
  image: string;
  imageAlt: string;
  headlineMetric: { value: string; label: string };
  metrics: { value: string; label: string }[];
  challenge: string[];
  approach: string[];
  solution: string[];
  results: string[];
  quote: { text: string; author: string; role: string };
  featured: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "northwind-saas",
    client: "Northwind",
    title: "Turning a leaky demo funnel into a growth engine",
    category: "SaaS",
    industry: "B2B SaaS · Project management",
    year: "2025",
    duration: "3 weeks",
    services: ["Web Design", "Development", "CRO"],
    summary:
      "A Series A SaaS with strong traffic but a 0.9% demo conversion rate. We rebuilt the site around one job — booking demos — and lifted conversions by 142%.",
    image: "/images/case-northwind.webp",
    imageAlt:
      "Northwind SaaS marketing website shown on a laptop, with an orange analytics dashboard UI.",
    headlineMetric: { value: "+142%", label: "demo conversions in 60 days" },
    metrics: [
      { value: "+142%", label: "Demo conversion rate" },
      { value: "0.68s", label: "Largest Contentful Paint" },
      { value: "-38%", label: "Cost per qualified demo" },
      { value: "3.1×", label: "Pipeline from organic search" },
    ],
    challenge: [
      "Northwind had everything a Series A startup is supposed to have: solid product, healthy traffic from content marketing, and a sales team hungry for demos. What they didn't have was a website that could close the gap. Demo conversion sat at 0.9%, and every paid campaign was subsidizing a leaky funnel.",
      "The existing site had grown organically over two years: six competing CTAs per page, feature screenshots instead of outcomes, and a demo form with nine required fields. Prospects were arriving interested and leaving confused.",
    ],
    approach: [
      "Interviewed 8 recent customers to map the real buying triggers and objections",
      "Rebuilt the information architecture around one primary action: book a demo",
      "Replaced feature-first copy with outcome-led messaging and proof at every scroll depth",
      "Cut the demo form from 9 fields to 4 and added calendar scheduling inline",
      "Rebuilt on Next.js, taking LCP from 3.4s to 0.68s",
    ],
    solution: [
      "We designed a focused narrative for every page: problem, outcome, proof, action. Interactive product tours replaced static screenshots, so visitors could feel the product before talking to sales. Social proof was moved from a forgotten wall-of-logos to contextually placed quotes beside every claim.",
      "Under the hood, a fresh Next.js build with a headless CMS means the marketing team now ships landing pages in hours, not sprints. Every element is instrumented, so CRO experiments continuously build on the new baseline.",
    ],
    results: [
      "Demo conversion rate rose from 0.9% to 2.18% within 60 days of launch",
      "Cost per qualified demo dropped 38% across paid channels",
      "Organic pipeline grew 3.1× in two quarters on the new content architecture",
      "Marketing ships 6–8 landing pages per month without developer help",
    ],
    quote: {
      text: "DevLoop treated our website like a product, not a brochure. The new site books more demos in a week than the old one did in a month — and our team can finally move at the speed of our roadmap.",
      author: "Maya Lindqvist",
      role: "VP Marketing, Northwind",
    },
    featured: true,
  },
  {
    slug: "atlas-outdoors",
    client: "Atlas Outdoors",
    title: "A headless storefront that carries its own weight",
    category: "E-commerce",
    industry: "E-commerce · Outdoor gear",
    year: "2025",
    duration: "4 weeks",
    services: ["Development", "Web Design", "SEO"],
    summary:
      "A growing outdoor gear brand drowning in plugin debt. We rebuilt their Shopify storefront headless — 2.1s faster loads, +89% revenue, and a 90+ Lighthouse score.",
    image: "/images/case-atlas.png",
    imageAlt:
      "Atlas Outdoors e-commerce storefront on desktop and mobile with warm orange product photography.",
    headlineMetric: { value: "+89%", label: "online revenue quarter over quarter" },
    metrics: [
      { value: "+89%", label: "Online revenue (QoQ)" },
      { value: "2.1s", label: "Faster page loads" },
      { value: "+34%", label: "Add-to-cart rate" },
      { value: "96", label: "Lighthouse performance score" },
    ],
    challenge: [
      "Atlas Outdoors had outgrown their theme. Eleven plugins, a 4.2-second mobile load time, and a checkout bounce rate that made every paid click more expensive than it should be. Peak season was eight weeks away.",
      "The brand's photography and community were world-class — but the storefront felt generic, and mobile shoppers (71% of their traffic) were getting the worst of it.",
    ],
    approach: [
      "Kept Shopify for operations; rebuilt the storefront headless with Next.js for speed",
      "Designed a mobile-first shopping experience with one-tap galleries and sticky add-to-cart",
      "Rebuilt collection navigation around how people actually shop: activity, weather, skill level",
      "Preserved and enhanced SEO with full redirect mapping and structured data",
      "Launched a UGC-driven lookbook to shorten the path from inspiration to product",
    ],
    solution: [
      "The new storefront serves pre-rendered pages from the edge — product pages load in well under a second on 4G. A redesigned PDP puts reviews, sizing tools, and real trail photos within a thumb's reach, and checkout friction was cut with express payment options surfaced early.",
      "The content team publishes buying guides through a headless CMS that feeds directly into collection pages, turning SEO content into shoppable moments instead of dead-end blog posts.",
    ],
    results: [
      "Revenue up 89% quarter over quarter, with the highest Black Friday in company history",
      "Add-to-cart rate improved 34%; checkout abandonment down 21%",
      "Mobile conversion rate nearly doubled (1.1% → 2.1%)",
      "Organic product-page traffic up 61% from enriched structured data",
    ],
    quote: {
      text: "We braced for a painful replatform and got the opposite — four weeks, zero downtime, and a storefront that finally matches the quality of our gear. The numbers spoke within days.",
      author: "Daniel Reyes",
      role: "Founder, Atlas Outdoors",
    },
    featured: true,
  },
  {
    slug: "meridian-legal",
    client: "Meridian Legal",
    title: "From referral-dependent to a predictable lead engine",
    category: "Professional Services",
    industry: "Legal · Boutique commercial law",
    year: "2024",
    duration: "3 weeks",
    services: ["Web Design", "SEO & Content", "Branding"],
    summary:
      "A respected law firm invisible online. A repositioned brand, a trust-first website, and local SEO turned search into their #1 source of new clients.",
    image: "/images/case-meridian.webp",
    imageAlt:
      "Meridian Legal website in a refined cream and ink design with orange accents, displayed on a tablet.",
    headlineMetric: { value: "+210%", label: "qualified consultation requests" },
    metrics: [
      { value: "+210%", label: "Qualified consultations" },
      { value: "#1", label: "Local pack for 9 practice areas" },
      { value: "62%", label: "of new clients now arrive via search" },
      { value: "-47%", label: "Bounce rate on practice pages" },
    ],
    challenge: [
      "Meridian Legal had an excellent reputation and a website from 2016 that actively undermined it. Prospects referred by clients would search the firm, find a dated site with stock photography, and quietly choose a competitor who looked more current.",
      "Referrals were flat, and the partners wanted predictable growth without hiring a full in-house marketing team.",
    ],
    approach: [
      "Repositioned the brand around 'counsel for companies that move fast' with a refreshed identity",
      "Built practice-area pages that answer real client questions instead of listing credentials",
      "Introduced attorney profiles with personality — photos, specialties, and direct booking links",
      "Ran a full local SEO program: Google Business, citations, reviews engine",
      "Added a 3-step consultation form with qualifying questions to protect partner time",
    ],
    solution: [
      "The new site leads with outcomes and plain language — no legalese, no marble columns. Each practice page answers the five questions prospects actually ask, backed by case outcomes and client quotes, with a consultation CTA that books directly into attorney calendars.",
      "A locally optimized content hub now ranks for commercial-law queries across the metro area, and an automated review flow keeps fresh social proof flowing to their Google profile.",
    ],
    results: [
      "Qualified consultation requests up 210% year over year",
      "Local pack position #1 for 9 of 11 target practice areas",
      "62% of new-client intake now originates from organic search",
      "Average consultation booking time dropped from 4 days to same-day",
    ],
    quote: {
      text: "For years our website was the firm we apologized for. Now it's the firm we lead with. Partners used to chase referrals — today the calendar fills itself.",
      author: "Priya Nair",
      role: "Managing Partner, Meridian Legal",
    },
    featured: true,
  },
  {
    slug: "pulse-fitness",
    client: "Pulse Fitness",
    title: "Filling classes with a booking flow people actually finish",
    category: "Professional Services",
    industry: "Fitness · Boutique studios",
    year: "2025",
    duration: "3 weeks",
    services: ["Web Design", "Development", "CRO"],
    summary:
      "Two boutique gyms, one clunky booking widget, and half of trial signups abandoning. A frictionless mobile booking flow lifted trial bookings by 156%.",
    image: "/images/case-pulse.png",
    imageAlt:
      "Pulse Fitness website with energetic orange class schedule UI on a smartphone.",
    headlineMetric: { value: "+156%", label: "trial class bookings" },
    metrics: [
      { value: "+156%", label: "Trial class bookings" },
      { value: "-58%", label: "Booking abandonment" },
      { value: "41%", label: "Trial-to-member conversion" },
      { value: "0.9s", label: "Mobile page load" },
    ],
    challenge: [
      "Pulse Fitness had packed classes, great reviews, and a booking flow that felt like paperwork. Their embedded scheduling widget required account creation before a first visit — and 71% of mobile visitors gave up before finishing.",
      "With a third location opening, they needed a site that could convert Instagram traffic into booked mats without adding front-desk headcount.",
    ],
    approach: [
      "Designed a guest checkout for trial classes: pick a class, pick a time, done",
      "Rebuilt the schedule as a fast, filterable native UI instead of an iframe widget",
      "Added social proof at decision points: ratings beside every class and coach",
      " wired automated SMS reminders to cut no-shows",
      "Localized landing pages for each studio with maps, parking, and coach bios",
    ],
    solution: [
      "The new site treats booking like e-commerce: a class is a product, and reserving a spot takes three taps. First-time visitors can book as guests — accounts are created automatically after the visit, when motivation is at its peak.",
      "Coach-led storytelling and real class photos replaced generic gym stock, and each studio page now ranks and converts independently for its neighborhood.",
    ],
    results: [
      "Trial bookings up 156% in the first 90 days",
      "Booking abandonment cut by 58% after removing forced sign-up",
      "41% of trial guests convert to memberships (up from 27%)",
      "No-show rate down a third thanks to automated reminders",
    ],
    quote: {
      text: "The old widget was costing us members we'll never know about. DevLoop made booking feel effortless — our front desk finally spends its time with members, not passwords.",
      author: "Marcus Oyelaran",
      role: "Co-owner, Pulse Fitness",
    },
    featured: false,
  },
  {
    slug: "bloom-beauty",
    client: "Bloom & Co.",
    title: "A skincare brand that sells the ritual, not just the bottle",
    category: "E-commerce",
    industry: "E-commerce · Skincare & beauty",
    year: "2024",
    duration: "4 weeks",
    services: ["Web Design", "CRO", "Development"],
    summary:
      "Beautiful products, anemic average order value. A routine-builder UX, subscription nudges, and bundles lifted AOV by 68% and repeat purchase rate by 44%.",
    image: "/images/case-bloom.png",
    imageAlt:
      "Bloom & Co. skincare e-commerce site with warm cream product cards and orange highlights.",
    headlineMetric: { value: "+68%", label: "average order value" },
    metrics: [
      { value: "+68%", label: "Average order value" },
      { value: "+44%", label: "Repeat purchase rate" },
      { value: "23%", label: "of orders now subscriptions" },
      { value: "+92%", label: "Quiz completion rate" },
    ],
    challenge: [
      "Bloom & Co. had loyal customers who bought single hero products — and never discovered the rest of the line. Average order value had been flat for a year, and rising ad costs made single-item carts unprofitable.",
      "Their quiz-funnel idea had died twice in development, and subscriptions lived three clicks deep where nobody found them.",
    ],
    approach: [
      "Built a 90-second skin-quiz that outputs a personalized three-step routine",
      "Designed 'routine' product bundles with graduated savings instead of discounts",
      "Surfaced subscribe-and-save as the default choice on routine purchases",
      "Added regimen education into PDPs — how products layer, in what order",
      "Rebuilt post-purchase emails to cross-sell the next routine step",
    ],
    solution: [
      "The quiz became the site's front door: answer six questions, get a routine built from real inventory, add all three steps in one tap. PDPs now sell the system — every product shows its place in the ritual and what pairs with it.",
      "Subscriptions shifted from a buried option to the default framing on routines, with savings framed as 'never run out' rather than a discount, protecting brand positioning.",
    ],
    results: [
      "Average order value up 68% — from $41 to $69",
      "Repeat purchase rate up 44% in six months",
      "23% of all orders are now subscription replenishments",
      "Quiz drives 38% of email list growth with a 92% completion rate",
    ],
    quote: {
      text: "They didn't just redesign our store — they redesigned how customers experience the line. People used to buy a serum. Now they buy the ritual.",
      author: "Elena Vasquez",
      role: "CEO, Bloom & Co.",
    },
    featured: false,
  },
  {
    slug: "lumen-analytics",
    client: "Lumen Analytics",
    title: "A rebrand and relaunch that tripled signup rate",
    category: "SaaS",
    industry: "SaaS · Data analytics",
    year: "2024",
    duration: "4 weeks",
    services: ["Branding", "Web Design", "Development"],
    summary:
      "A powerful analytics tool that looked like a side project. Full rebrand plus website relaunch took free-trial signup rate from 1.2% to 3.8%.",
    image: "/images/case-lumen.png",
    imageAlt:
      "Lumen Analytics website with a dark dashboard UI and vivid orange data visualizations.",
    headlineMetric: { value: "3.2×", label: "free-trial signup rate" },
    metrics: [
      { value: "3.2×", label: "Trial signup rate" },
      { value: "+170%", label: "Demo requests" },
      { value: "-31%", label: "Homepage bounce rate" },
      { value: "4 wks", label: "Rebrand to relaunch" },
    ],
    challenge: [
      "Lumen's product could do things competitors couldn't — real-time anomaly detection at a fraction of the price. But the brand said otherwise: a generic logo, a developer-docs aesthetic, and a homepage headline inspired by a thesaurus ('Leverage Synergistic Data Paradigms').",
      "Investors loved the demo; prospects bounced from the site. The team needed a brand that a CFO could trust in the same quarter the product could deliver.",
    ],
    approach: [
      "Positioned Lumen around 'answers, not dashboards' — outcomes over features",
      "Designed an identity system with data-viz as the visual language",
      "Rebuilt the site with live, interactive product moments instead of screenshots",
      "Created a technical-credibility layer: docs-style content for the data team",
      "Segmented paths for product-led (free trial) and sales-led (demo) buyers",
    ],
    solution: [
      "The new brand treats data visualization as art direction — every illustration comes from real product output. The homepage leads with an interactive anomaly-detection demo visitors can play with using sample data before signing up.",
      "Dual CTAs route PLG visitors to an instant trial and enterprise visitors to a demo with calendar booking — no forms interposing between interest and action.",
    ],
    results: [
      "Free-trial signup rate lifted from 1.2% to 3.8%",
      "Demo requests up 170% with the new dual-path funnel",
      "Homepage bounce rate down 31%",
      "Closed a Series A four months after relaunch — deck and site in the same system",
    ],
    quote: {
      text: "We finally look like the company we already were. The interactive demo on our homepage has closed more deals than any sales deck we've ever built.",
      author: "Sarah Kimura",
      role: "CEO, Lumen Analytics",
    },
    featured: false,
  },
];

export const caseCategories = [
  "All",
  "SaaS",
  "E-commerce",
  "Professional Services",
] as const;

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
