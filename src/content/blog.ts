/**
 * Blog posts in an editable data file (swap for MDX later if you prefer).
 * Article bodies are structured blocks rendered by components/blog/article-body.tsx.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "callout"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; initials: string };
  content: Block[];
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "beautiful-website-not-converting",
    title: "Why your beautiful website isn't converting (and how to fix it)",
    excerpt:
      "You invested in a stunning redesign and the needle didn't move. Design quality and conversion rate are different problems — here's how to tell which one you have.",
    category: "Conversion",
    date: "2026-01-08",
    readTime: "6 min read",
    author: { name: "Jordan Blake", role: "Head of Strategy", initials: "JB" },
    featured: true,
    content: [
      {
        type: "p",
        text: "The most expensive sentence in web design: “We just relaunched the site — it looks amazing — but conversions are flat.” It happens constantly, and it's almost never a design-talent problem. The sites that win design awards and the sites that print revenue are usually optimizing for different judges.",
      },
      {
        type: "p",
        text: "Visitors don't arrive wanting to admire your website. They arrive with a question (“can this company solve my problem?”) and a risk calculation (“what happens if I choose wrong?”). A beautiful site that doesn't answer the question in five seconds is a museum, not a funnel.",
      },
      { type: "h2", text: "The three silent conversion killers" },
      {
        type: "list",
        items: [
          "Clever headlines. “Reimagining the future of work” says nothing. “Cut your month-end close from 6 days to 2” books demos. Clarity beats cleverness every single time we've tested it.",
          "Choice paralysis. Six CTAs competing on one page means zero CTAs win. Every page gets one primary action; everything else is subordinate.",
          "Proof in the wrong place. Testimonials quarantined on a dedicated page convert nobody. Proof belongs adjacent to claims — a quote beside the feature, a metric beside the pricing.",
        ],
      },
      {
        type: "quote",
        text: "Nobody reads websites. They pattern-match for reasons to trust you, then reasons to leave.",
      },
      { type: "h2", text: "How to diagnose your site in 30 minutes" },
      {
        type: "p",
        text: "Run the five-second test with five people outside your company: show them your homepage for five seconds, hide it, and ask what the company sells and who it's for. If they can't answer, your hero section is the leak. Then install session recordings and watch twenty sessions of people reaching your pricing page — you'll find more insights there than in any strategy deck.",
      },
      {
        type: "callout",
        text: "The fix order that pays back fastest: clarify the headline → add proof beside every claim → cut competing CTAs → shorten your forms. We've seen this exact sequence lift conversion 40%+ before a single visual change.",
      },
      {
        type: "p",
        text: "Beauty and conversion aren't opposites — the best sites have both. But sequence matters: nail the persuasion architecture first, then make it gorgeous. A wireframe that converts will still convert when it's beautiful. The reverse is not true.",
      },
    ],
  },
  {
    slug: "three-week-website-process",
    title: "The 3-week website: how we ship fast without cutting corners",
    excerpt:
      "Most agency websites take four months. Ours take three weeks — with a guarantee. Here's the process that makes it possible, stolen fair and square.",
    category: "Process",
    date: "2025-12-02",
    readTime: "5 min read",
    author: { name: "Alex Rivera", role: "Founder & Design Lead", initials: "AR" },
    content: [
      {
        type: "p",
        text: "The dirty secret of web projects is that agencies don't spend four months working on your site. They spend four months waiting: waiting for feedback, waiting for content, waiting for a slot in someone's calendar. Actual production time on most sites is two to three weeks — the rest is latency.",
      },
      { type: "h2", text: "Delete the latency, keep the quality" },
      {
        type: "p",
        text: "Our process is engineered around a single insight: speed comes from sequencing and decision-batching, not from working faster.",
      },
      {
        type: "list",
        items: [
          "Day 1–2: Strategy sprint. Goals, customer research, site architecture, and message hierarchy locked in one workshop — before pixels exist.",
          "Week 1: Copy first. All page copy written and approved while design begins on the visual system. Content is never an afterthought.",
          "Week 2: Design + build in parallel. Because our designers and developers are one team using a component system, development starts the day the first design is approved.",
          "Week 3: QA, performance hardening, SEO, redirects, launch. Staging link improves daily from day 5 onward.",
        ],
      },
      {
        type: "quote",
        text: "We don't work weekends to hit three weeks. We work with fewer unknowns.",
        author: "Alex Rivera",
      },
      { type: "h2", text: "What clients have to bring" },
      {
        type: "p",
        text: "Fast projects require fast decisions. We ask for one empowered decision-maker, two structured review rounds, and 48-hour feedback turnarounds. In exchange: a launch date in writing, and if we miss it, we work free until it's live. In six years, that guarantee has cost us exactly nothing — the process does the enforcing.",
      },
      {
        type: "callout",
        text: "The paradox: shorter timelines produce better websites. Compressed feedback means decisions get made on strategy, not on taste drift after four months of looking at the same mockups.",
      },
    ],
  },
  {
    slug: "nextjs-vs-webflow-2026",
    title: "Next.js vs Webflow in 2026: an honest comparison from an agency that uses both",
    excerpt:
      "We're a Next.js shop that still recommends Webflow to some clients. Here's the decision framework we actually use — cost, speed, SEO, editing, and the traps on each side.",
    category: "Technology",
    date: "2025-11-11",
    readTime: "8 min read",
    author: { name: "Sam Chen", role: "Engineering Lead", initials: "SC" },
    content: [
      {
        type: "p",
        text: "Agencies love religious wars because certainty sells. But after 120+ builds, our honest position is boring: the right stack depends on four questions about your team and your goals. Here's the framework we use with clients, including when we tell them not to hire us.",
      },
      { type: "h2", text: "Where Webflow genuinely wins" },
      {
        type: "list",
        items: [
          "Marketing-team autonomy. If non-developers need to ship landing pages weekly, Webflow's visual editor is still the best in class.",
          "Budgets under $10k. The absence of engineering time means more of your budget lands on design and copy.",
          "Standard marketing sites. For a 5–10 page brochure site with a CMS blog, Webflow's limitations rarely bite.",
        ],
      },
      { type: "h2", text: "Where Next.js pulls away" },
      {
        type: "list",
        items: [
          "Performance ceilings. Hand-tuned Next.js on the edge beats hosted builders when you need sub-second loads at scale — and speed compounds into ad quality scores and rankings.",
          "Real functionality. Authentication, dashboards, calculators, portals: the moment your “website” is also software, you want code, not workarounds.",
          "Ownership. No platform rent, no feature gates, no export anxiety. Your site is yours.",
          "E-commerce flexibility. Headless builds let you escape theme constraints while keeping Shopify's battle-tested checkout.",
        ],
      },
      {
        type: "quote",
        text: "Choose the constraint you'd rather live with: publishing autonomy (Webflow) or capability ceiling (Next.js). Pick wrong in either direction and you'll rebuild within two years.",
      },
      { type: "h2", text: "The four questions that decide it" },
      {
        type: "p",
        text: "One: will non-developers publish weekly? Two: will the site need application-like features in the next 24 months? Three: does sub-second performance differentiate you (e-commerce, paid acquisition, SEO)? Four: what's the real three-year budget, including maintenance? Answer honestly and the choice usually makes itself. And yes — a hybrid exists: Next.js for the product, Webflow for the marketing blog. It's less heretical than the internet suggests.",
      },
      {
        type: "callout",
        text: "Rule of thumb: if your website's job is to persuade, either platform works and execution matters more. If your website's job is to also do something, start with code.",
      },
    ],
  },
  {
    slug: "seven-conversion-wins",
    title: "7 conversion rate wins we implement on every single client site",
    excerpt:
      "After 120+ launches, these are the unglamorous, repeatedly-proven changes that lift conversion on nearly every site — before any A/B test is needed.",
    category: "Conversion",
    date: "2025-10-07",
    readTime: "7 min read",
    author: { name: "Jordan Blake", role: "Head of Strategy", initials: "JB" },
    content: [
      {
        type: "p",
        text: "Some conversion tactics require testing. Others have worked so reliably, across so many industries, that we treat them as defaults — implemented on day one, tested only to measure the lift. Here are the seven we reach for first.",
      },
      {
        type: "list",
        items: [
          "1. Outcome headline, not identity headline. “We build websites” becomes “Websites that turn visitors into customers.” Say what the buyer gets, not what you are.",
          "2. One primary CTA per page, repeated every 1–2 scrolls. Same words, same button. Repetition isn't redundant; it's mercy for skimmers.",
          "3. Proof beside claims. Every bold statement gets a number, a logo, or a quote within the same viewport. Unsupported claims are just adjectives.",
          "4. Forms cut to the minimum viable fields. Every field you delete buys roughly 5–10% more completions. Qualify later; capture first.",
          "5. A face and a name next to every testimonial. Anonymous praise reads as invented praise. Specificity is credibility.",
          "6. Objection-handling FAQ on the money pages. Pricing, process, risk — answered where the decision happens, not on a distant page.",
          "7. Sub-second load times. Not sexy, rarely argued about, and still the highest-correlation technical factor with conversion we've measured.",
        ],
      },
      {
        type: "quote",
        text: "Conversion rate optimization is mostly respect for the visitor's time, made visible.",
      },
      {
        type: "p",
        text: "None of these require creativity — they require discipline. That's good news: it means the gains are available to anyone willing to treat their website as a system to be tuned rather than a poster to be admired.",
      },
      {
        type: "callout",
        text: "Audit your homepage right now against these seven. Most sites we inherit fail at least four — which is exactly why our average engagement starts with a 137% lift.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
