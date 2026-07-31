export type FAQ = { question: string; answer: string };

export const faqs: FAQ[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Our Launch package starts at $4,900 and our Growth package — a complete, conversion-focused site with copywriting and SEO — is $9,900. Complex e-commerce or web app projects typically range from $15k–$40k. Every project is quoted as a fixed price before we start, so you know exactly what you're investing and what you'll get.",
  },
  {
    question: "How does the 3-week delivery guarantee work?",
    answer:
      "For Growth-package websites, we commit to launch within 3 weeks of kickoff — or we work for free until it's live. This works because we batch feedback into structured rounds, start with content strategy on day one, and never double-book our team. Larger projects get a milestone schedule with the same accountability.",
  },
  {
    question: "What platforms do you build on?",
    answer:
      "Most sites are hand-coded on Next.js with a headless CMS — the fastest, most maintainable stack available today. For e-commerce, we build headless storefronts on Shopify. We're tool-agnostic about your CMS and will recommend whatever your team will actually enjoy using.",
  },
  {
    question: "Can you redesign our existing website?",
    answer:
      "Yes — redesigns are about half of our work. We start with a conversion audit of your current site (analytics, recordings, SEO) so the redesign fixes real problems instead of just changing the paint. We also handle full redirect mapping so you never lose search rankings in the transition.",
  },
  {
    question: "Do you work with clients outside your city?",
    answer:
      "We're remote-first and work with clients across North America, Europe, and APAC. Projects run async in a shared workspace with two structured calls per week, so time zones are a feature — progress often happens while you sleep.",
  },
  {
    question: "Who owns the website and code?",
    answer:
      "You do — 100%. Code lives in your repository, the CMS is in your name, and we hand over full documentation. If you ever want to take maintenance in-house, everything transfers cleanly. Our care plans exist because clients want them, not because they're locked in.",
  },
  {
    question: "Do you write the copy, or do we?",
    answer:
      "We do. Conversion copywriting is included in Growth and Scale packages: we interview you (and, where possible, your customers), mine reviews for the language your buyers use, and write every headline and CTA. You review and approve everything — most clients approve with minor edits.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every build includes a post-launch warranty (30–60 days) where we fix anything that comes up, free. After that, most clients move to a care plan (from $250/mo) covering hosting, security, monitoring, and a monthly improvement allowance. You're never obligated — your site will run fine without us.",
  },
];
