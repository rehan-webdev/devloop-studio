/**
 * Global site settings — edit everything about the agency here.
 */
export const site = {
  name: "DevLoop",
  legalName: "DevLoop Studio LLC",
  tagline: "Websites that turn visitors into customers",
  description:
    "DevLoop is a conversion-focused web design & development studio. We design and build fast, beautiful websites for SaaS startups, e-commerce brands and service businesses — launched in 3 weeks, guaranteed.",
  url: "https://devloop.site",
  email: "hello@devloop.site",
  phone: "+923281098252",
  location: "Remote-first · Serving clients worldwide",
  founded: "2019",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
    { label: "Facebook", href: "https://facebook.com", icon: "Facebook" },
    { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { label: "Dribbble", href: "https://dribbble.com", icon: "Dribbble" },
    { label: "GitHub", href: "https://github.com", icon: "Github" },
  ],
  nav: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
} as const;

export const stats = [
  { value: 120, prefix: "", suffix: "+", label: "Websites designed & shipped" },
  { value: 98, prefix: "", suffix: "%", label: "Client satisfaction score" },
  { value: 137, prefix: "+", suffix: "%", label: "Average conversion lift" },
  { value: 21, prefix: "", suffix: "", label: "Days, average time to launch" },
] as const;

/** Trust-bar client wordmarks (rendered as text logos) */
export const clientLogos = [
  "Northwind",
  "Atlas Outdoors",
  "Meridian Legal",
  "Pulse Fitness",
  "Lumen Analytics",
  "Bloom & Co.",
  "Vertex Labs",
  "Hearth & Home",
] as const;

export const rotatingWords = ["visitors", "clicks", "scrolls", "readers"] as const;
