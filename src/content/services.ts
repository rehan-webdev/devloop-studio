/**
 * Services — one entry per service. `icon` maps to a Lucide icon name,
 * resolved in components/ui/service-icon.tsx.
 */
export type Service = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  summary: string;
  overview: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  outcomes: { value: string; label: string }[];
  priceNote: string;
};

export const services: Service[] = [
  {
    slug: "web-design",
    icon: "Palette",
    title: "Web Design",
    tagline: "Design that earns trust in 50 milliseconds",
    summary:
      "Custom, conversion-focused UI/UX design. No templates, no page-builder look — a site that feels like your brand on its best day.",
    overview: [
      "Visitors judge your business in 50 milliseconds. Before they read a single word, your design has already told them whether you're credible, current, and worth their time. That's why we treat design as a revenue lever, not decoration.",
      "Every DevLoop design starts with your customer's journey — what they need to see, in what order, to take the next step. Then we craft a visual language around it: typography, color, motion, and layout working together to move people toward your call to action.",
    ],
    deliverables: [
      "UX strategy & customer-journey mapping",
      "Wireframes and user flows",
      "Custom UI design (desktop, tablet & mobile)",
      "Clickable Figma prototype for testing",
      "Component-based design system",
      "WCAG AA accessible color & type systems",
    ],
    process: [
      {
        title: "Discover",
        description:
          "We audit your current site, competitors, and analytics to find where design is costing you conversions.",
      },
      {
        title: "Wireframe",
        description:
          "Low-fi layouts map the persuasion flow — headline hierarchy, proof placement, and CTA strategy.",
      },
      {
        title: "Design",
        description:
          "Hi-fi screens in your brand system, reviewed collaboratively in Figma with unlimited feedback rounds.",
      },
      {
        title: "Handoff",
        description:
          "Our own developers build what we design, so nothing gets lost between Figma and production.",
      },
    ],
    outcomes: [
      { value: "98%", label: "of clients approve final design with no redesign rounds" },
      { value: "2.4×", label: "average engagement increase after redesign" },
      { value: "50ms", label: "is all you get — we make it count" },
    ],
    priceNote: "From $4,900 · included in every package",
  },
  {
    slug: "web-development",
    icon: "Code2",
    title: "Web Development",
    tagline: "Blazing-fast builds on Next.js & modern stacks",
    summary:
      "Hand-coded Next.js and headless e-commerce builds that score 90+ on Lighthouse, load in under a second, and are a joy to maintain.",
    overview: [
      "Speed isn't a luxury — it's a ranking factor, a conversion factor, and a trust signal. We build with Next.js, React, and modern headless platforms because they let us ship sites that load in under a second and stay fast as you grow.",
      "No bloated themes, no plugin Jenga. You get clean, typed, component-based code with an editing experience your team will actually enjoy — plus the technical SEO foundations baked in from day one.",
    ],
    deliverables: [
      "Next.js / React development, hand-coded",
      "Headless CMS setup your team can edit",
      "Headless Shopify & e-commerce builds",
      "Performance optimization (90+ Lighthouse)",
      "Technical SEO: schema, sitemaps, metadata",
      "Analytics, events & conversion tracking",
    ],
    process: [
      {
        title: "Architect",
        description:
          "We choose the leanest stack for your goals — pages, CMS, integrations, and hosting configured upfront.",
      },
      {
        title: "Build",
        description:
          "Component-by-component development with a live staging link you can watch evolve daily.",
      },
      {
        title: "Harden",
        description:
          "Cross-browser QA, accessibility checks, performance budgets, and edge-case testing before launch.",
      },
      {
        title: "Launch",
        description:
          "DNS, redirects, monitoring, and a 30-day post-launch warranty on everything we ship.",
      },
    ],
    outcomes: [
      { value: "<1s", label: "average Largest Contentful Paint across client sites" },
      { value: "90+", label: "Lighthouse performance score, guaranteed" },
      { value: "0", label: "plugins required to keep your site running" },
    ],
    priceNote: "From $9,900 · fixed price, agreed upfront",
  },
  {
    slug: "conversion-optimization",
    icon: "TrendingUp",
    title: "Conversion Optimization",
    tagline: "More customers from the traffic you already have",
    summary:
      "Data-driven CRO: audits, A/B testing, landing pages, and funnel fixes that compound your results month after month.",
    overview: [
      "Most websites don't have a traffic problem — they have a conversion problem. Doubling your conversion rate has the same effect as doubling your ad budget, without spending another cent on clicks.",
      "We combine behavioral data, session recordings, and 120+ launches of pattern recognition to find the friction: unclear value props, buried CTAs, forms that ask too much. Then we fix, test, and measure — so every change is backed by evidence, not opinion.",
    ],
    deliverables: [
      "Full conversion audit with prioritized roadmap",
      "Heatmap & session-recording analysis",
      "High-converting landing page design & build",
      "A/B and multivariate testing program",
      "Copy & messaging optimization",
      "Monthly reporting with revenue attribution",
    ],
    process: [
      {
        title: "Measure",
        description:
          "We instrument your funnel properly — most clients discover their tracking was silently wrong.",
      },
      {
        title: "Diagnose",
        description:
          "Quantitative data plus qualitative research (polls, recordings, user tests) pinpoint the leaks.",
      },
      {
        title: "Experiment",
        description:
          "Ranked hypotheses, shipped as controlled A/B tests with clear success criteria.",
      },
      {
        title: "Compound",
        description:
          "Winners are rolled out, learnings documented, and the next test cycle begins.",
      },
    ],
    outcomes: [
      { value: "+137%", label: "average conversion lift across engagements" },
      { value: "232%", label: "best single-test lift (demo signup flow)" },
      { value: "30 days", label: "median time to first validated win" },
    ],
    priceNote: "From $2,500/mo · audits from $1,900 one-time",
  },
  {
    slug: "seo-content",
    icon: "Search",
    title: "SEO & Content",
    tagline: "Rank for the searches that make you money",
    summary:
      "Technical SEO baked into every build, plus content strategies that compound organic traffic instead of renting clicks forever.",
    overview: [
      "Paid ads stop the moment you stop paying. Organic search compounds. We build every site on a technically flawless SEO foundation — speed, schema, structure — then help you publish content that answers the questions your buyers actually type into Google.",
      "Our approach is unglamorous and effective: target bottom-of-funnel intent first, earn topical authority with genuinely useful content, and earn links with assets people want to reference. No tricks, no thin content, no penalties.",
    ],
    deliverables: [
      "Technical SEO audit & remediation",
      "Keyword & search-intent research",
      "On-page optimization & internal linking",
      "Content strategy & editorial calendar",
      "SEO copywriting that still sounds human",
      "Local SEO & Google Business optimization",
    ],
    process: [
      {
        title: "Audit",
        description:
          "Technical health, content gaps, and competitor gaps — quantified and prioritized by revenue impact.",
      },
      {
        title: "Foundation",
        description:
          "Fix crawlability, speed, schema, and site architecture so Google can actually reward you.",
      },
      {
        title: "Publish",
        description:
          "Intention-mapped content shipped on a consistent cadence, optimized before it goes live.",
      },
      {
        title: "Grow",
        description:
          "Rankings, traffic and pipeline tracked monthly; strategy compounds quarter over quarter.",
      },
    ],
    outcomes: [
      { value: "+212%", label: "average organic traffic growth in 12 months" },
      { value: "3.1%", label: "avg. visit-to-lead rate on SEO landing pages" },
      { value: "#1", label: "rankings earned for 40+ money keywords" },
    ],
    priceNote: "From $1,800/mo · technical setup included in every build",
  },
  {
    slug: "branding",
    icon: "Fingerprint",
    title: "Brand Identity",
    tagline: "Look like the obvious choice in your market",
    summary:
      "Naming, logo, visual identity, and messaging systems that make your business instantly recognizable — and instantly trusted.",
    overview: [
      "When two options feel equal, buyers pick the one that looks more established. Brand identity is the fastest way to close that trust gap — especially for startups competing against bigger players.",
      "We build identity systems, not just logos: color, type, voice, and usage rules that keep everything you ship — site, deck, social, email — looking unmistakably you. Then we apply it directly to your new website, so brand and conversion work as one.",
    ],
    deliverables: [
      "Brand strategy & positioning workshop",
      "Logo design with full lockup system",
      "Color, typography & art direction",
      "Messaging & tone-of-voice guidelines",
      "Brand guidelines document",
      "Social, deck & email template kit",
    ],
    process: [
      {
        title: "Position",
        description:
          "A structured workshop to nail who you're for, why you're different, and what you should say.",
      },
      {
        title: "Explore",
        description:
          "Two to three distinct creative directions, presented in context — on your site, not a slide.",
      },
      {
        title: "Refine",
        description:
          "One direction polished into a complete system with real-world stress tests.",
      },
      {
        title: "Systemize",
        description:
          "Guidelines and asset kits your whole team can use without breaking the brand.",
      },
    ],
    outcomes: [
      { value: "3.2×", label: "signup-rate lift after Lumen Analytics rebrand + relaunch" },
      { value: "2 weeks", label: "typical branding sprint, start to system" },
      { value: "100%", label: "of brand clients launch their site with us too" },
    ],
    priceNote: "From $6,500 · bundle with a website and save 15%",
  },
  {
    slug: "care-plans",
    icon: "ShieldCheck",
    title: "Care & Maintenance",
    tagline: "Your site, always fast, secure & up to date",
    summary:
      "Hosting, monitoring, updates, and small improvements handled proactively — so your website never becomes a liability.",
    overview: [
      "A website is an asset that depreciates the day you stop maintaining it. Dependencies age, content goes stale, and small bugs quietly eat conversions. Our care plans keep your site compounding instead of decaying.",
      "Every plan includes managed hosting, uptime and performance monitoring, security patches, and a monthly improvement allowance. You get a senior team on tap for a fraction of a hire — and you never have to think about your hosting bill again.",
    ],
    deliverables: [
      "Managed hosting & CDN on edge infrastructure",
      "24/7 uptime & performance monitoring",
      "Security patches & dependency updates",
      "Daily backups with one-click restore",
      "Monthly design/dev improvement allowance",
      "Priority support with same-day response",
    ],
    process: [
      {
        title: "Onboard",
        description:
          "We document your stack, set baselines, and automate backups and monitoring in week one.",
      },
      {
        title: "Maintain",
        description:
          "Updates shipped on a fixed weekly cadence, tested on staging before touching production.",
      },
      {
        title: "Improve",
        description:
          "Your monthly allowance covers tweaks, new sections, and experiments — prioritized by impact.",
      },
      {
        title: "Report",
        description:
          "A short monthly summary: uptime, speed trends, work shipped, and what we recommend next.",
      },
    ],
    outcomes: [
      { value: "99.99%", label: "average uptime across managed sites" },
      { value: "<4h", label: "median response time on support requests" },
      { value: "30+ days", label: "of backups kept, restorable in minutes" },
    ],
    priceNote: "From $250/mo · cancel anytime",
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
