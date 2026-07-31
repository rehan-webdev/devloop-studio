export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  metric: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "DevLoop treated our website like a product, not a brochure. The new site books more demos in a week than the old one did in a month.",
    author: "Maya Lindqvist",
    role: "VP Marketing",
    company: "Northwind",
    initials: "ML",
    metric: "+142% demo conversions",
  },
  {
    quote:
      "We braced for a painful replatform and got the opposite — four weeks, zero downtime, and a storefront that finally matches the quality of our gear.",
    author: "Daniel Reyes",
    role: "Founder",
    company: "Atlas Outdoors",
    initials: "DR",
    metric: "+89% online revenue",
  },
  {
    quote:
      "For years our website was the firm we apologized for. Now it's the firm we lead with — the calendar fills itself.",
    author: "Priya Nair",
    role: "Managing Partner",
    company: "Meridian Legal",
    initials: "PN",
    metric: "+210% consultations",
  },
  {
    quote:
      "They made booking feel effortless. Our front desk finally spends its time with members, not passwords.",
    author: "Marcus Oyelaran",
    role: "Co-owner",
    company: "Pulse Fitness",
    initials: "MO",
    metric: "+156% trial bookings",
  },
  {
    quote:
      "They didn't just redesign our store — they redesigned how customers experience the line. People used to buy a serum. Now they buy the ritual.",
    author: "Elena Vasquez",
    role: "CEO",
    company: "Bloom & Co.",
    initials: "EV",
    metric: "+68% order value",
  },
  {
    quote:
      "The interactive demo on our homepage has closed more deals than any sales deck we've ever built. We finally look like the company we already were.",
    author: "Sarah Kimura",
    role: "CEO",
    company: "Lumen Analytics",
    initials: "SK",
    metric: "3.2× signup rate",
  },
];
