/** Case studies shown on home, /work, and /work/[slug]. */
export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  category: "Healthcare & Wellness" | "Food & Beverage" | "Real Estate" | "Personal Portfolio" | "Automotive";
  industry: string;
  year: string;
  duration: string;
  services: string[];
  summary: string;
  image: string;
  imageAlt: string;
  liveUrl: string;
  headlineMetric: { value: string; label: string };
  metrics: { value: string; label: string }[];
  challenge: string[];
  approach: string[];
  solution: string[];
  results: string[];
  quote: { text: string; author: string; role: string };
  featured: boolean;
};

const commonResults = (subject: string) => [
  `${subject} is now organized around a clear visitor journey`,
  "The content gives visitors useful context before asking for an inquiry",
  "A focused call to action makes the next step easy to understand",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "dietitian-esha", client: "Dietitian Esha", title: "Making personalized nutrition feel close, clear, and possible",
    category: "Healthcare & Wellness", industry: "Nutrition · Online consultations", year: "2026", duration: "3 weeks",
    services: ["Brand Direction", "Web Design", "Development"], summary: "A warm consultation experience for personalized weight, PCOS, diabetes, and lifestyle nutrition support from anywhere.",
    image: "/images/dietitianesha.webp", imageAlt: "Dietitian Esha Nasir consultation website", liveUrl: "https://dietitianesha.com",
    headlineMetric: { value: "4+", label: "core care pathways" }, metrics: [{ value: "4+", label: "Core pathways" }, { value: "3", label: "Consultation steps" }, { value: "24/7", label: "Online access" }, { value: "1:1", label: "Personal guidance" }],
    challenge: ["Nutrition clients arrive with very different conditions, routines, and goals. The site needed to explain that breadth without feeling like a medical directory or promising a one-size-fits-all plan.", "The key action was starting a conversation, so visitors needed a reassuring route from service discovery to WhatsApp consultation."],
    approach: ["Led with Dr. Esha and her sustainable nutrition philosophy", "Grouped care around recognizable goals including weight, PCOS, and chronic conditions", "Explained assessment, planning, and follow-up in three steps", "Placed consultation actions beside services, proof, and contact"],
    solution: ["A soft editorial landing page gives personalized care a calm digital home. Service sections answer what clients need help with, while transformation stories add context without turning health outcomes into guarantees.", "The consultation flow collects useful first-contact details and keeps WhatsApp one tap away for Pakistan and international clients."],
    results: commonResults("The nutrition practice"), quote: { text: "The site makes personalized nutrition feel as thoughtful and approachable as the care itself.", author: "Dr. Esha Nasir", role: "Consultant Dietitian & Nutritionist" }, featured: true,
  },
  {
  slug: "the-nutrition-club",
  client: "The Nutrition Club",
  title: "A modern nutrition clinic experience built around evidence",
  category: "Healthcare & Wellness",
  industry: "Clinical Nutrition · Dietetics",
  year: "2026",
  duration: "4 weeks",

  services: [
    "Brand Strategy",
    "Web Design",
    "Development"
  ],

  summary:
    "A professional digital experience designed to connect individuals with qualified nutrition support through personalized consultations, practical guidance, and sustainable health solutions.",

  image: "/images/nutrition-club-clinic-first-screen.webp",
  imageAlt: "The Nutrition Club Clinic website design",
  liveUrl: "https://thenutritionclubclinic.com",

  headlineMetric: {
    value: "10+",
    label: "health concerns supported"
  },

  metrics: [
    { value: "10+", label: "Nutrition specialties" },
    { value: "1", label: "Personalized care model" },
    { value: "100%", label: "Evidence-based guidance" },
    { value: "0", label: "Fad diet promises" }
  ],

  challenge: [
    "Many people seeking nutrition advice are overwhelmed by conflicting information online and often struggle to identify qualified professionals they can trust.",
    "The clinic needed a website that communicated credibility, expertise, and personalized care while making nutrition services feel approachable and easy to understand."
  ],

  approach: [
    "Designed a clear information architecture around nutrition services, health conditions, and consultation pathways",
    "Used clean layouts, generous spacing, and professional imagery to reinforce trust and credibility",
    "Created educational sections that explain nutrition care in simple, accessible language",
    "Focused messaging on sustainable lifestyle improvements rather than quick-fix solutions"
  ],

  solution: [
    "The final website presents nutrition care as a collaborative journey. Visitors can easily understand available services, explore areas of expertise, and take the next step toward personalized support.",
    "Educational content and service-focused pages help establish authority while making the clinic feel welcoming and approachable for first-time visitors."
  ],

  results: commonResults(
    "The clinical nutrition practice"
  ),

  quote: {
    text:
      "Our goal was to make expert nutrition support feel accessible, trustworthy, and practical. The website now reflects the standard of care we provide every day.",
    author: "The Nutrition Club Clinic",
    role: "Clinical Nutrition & Dietetics Practice"
  },

  featured: true
},
  {
    slug: "essence-coffee", client: "ESSENCE Coffee", title: "Turning a coffee ritual into a place you can almost taste",
    category: "Food & Beverage", industry: "Coffee · Artisan roastery", year: "2026", duration: "4 weeks",
    services: ["Brand Direction", "Web Design", "Development"], summary: "A ceremonial Turkish coffee experience for a Multan roastery built around small-batch craft, ritual, and an unmistakable collection.",
    image: "/images/essence-first-screen.webp", imageAlt: "ESSENCE Coffee ceremonial Turkish coffee website", liveUrl: "https://essence.devloop.site",
    headlineMetric: { value: "1998", label: "roastery story" }, metrics: [{ value: "6", label: "Signature drinks" }, { value: "3", label: "Story collections" }, { value: "120k+", label: "Coffee lovers" }, { value: "7–22", label: "Daily hours" }],
    challenge: ["ESSENCE had a rich story: heirloom cherries, copper-batch roasting, and three generations of recipes. The challenge was making heritage feel current rather than museum-like.", "The site had to move naturally between brand storytelling and useful actions such as browsing the collection, ordering ahead, and visiting the Multan roastery."],
    approach: ["Made ceremonial Turkish coffee the central narrative", "Connected each drink with a short sensory description", "Balanced editorial story sections with a scannable collection", "Carried the warmth through gallery, visit details, and newsletter"],
    solution: ["The experience opens like a ritual: deliberate type, tactile coffee imagery, and language that slows the visitor down. The collection stays easy to browse, with signature drinks and prices available without interrupting the mood.", "A clear path from story to order-ahead and roastery details turns brand desire into a visit or purchase."],
    results: commonResults("The roastery story"), quote: { text: "The website finally feels like the first pour: patient, precise, and full of character.", author: "ESSENCE Coffee", role: "Small-batch roastery, Multan" }, featured: true,
  },
  {
  slug: "dietwise-mariyam-zubair",
  client: "Dietwise by MZ.",
  title: "A personalized nutrition platform built around sustainable health",
  category: "Healthcare & Wellness",
  industry: "Clinical Nutrition · Dietetics",
  year: "2026",
  duration: "3 weeks",

  services: [
    "Brand Direction",
    "Web Design",
    "Development"
  ],

  summary:
    "A calm and professional nutrition experience designed to help individuals improve their health through practical, personalized guidance rather than short-term diet trends.",

  image: "/images/dietwise-first-screen.webp",
  imageAlt: "Dietwise by Dn. Mariyam Zubair nutrition website",
  liveUrl: "https://dietwise.devloop.site",

  headlineMetric: {
    value: "3",
    label: "nutrition pathways"
  },

  metrics: [
    { value: "3", label: "Core services" },
    { value: "1", label: "Personalized approach" },
    { value: "6", label: "Health focus areas" },
    { value: "0", label: "Crash diets" }
  ],

  challenge: [
    "Many nutrition websites focus heavily on weight-loss promises and generic meal plans. Dietwise needed a more trustworthy experience that reflected professional dietetic care and long-term health outcomes.",
    "The platform also needed to communicate services clearly while remaining approachable for people seeking help with everyday nutrition, lifestyle improvements, and clinical concerns."
  ],

  approach: [
    "Structured the experience around personalized nutrition, sustainable habits, and evidence-based guidance",
    "Used clean layouts, calming colors, and wellness-focused imagery to build trust",
    "Created clear pathways to consultations, nutrition programs, and educational content",
    "Focused messaging on practical lifestyle changes rather than restrictive dieting"
  ],

  solution: [
    "The final experience balances professionalism with warmth. Visitors are introduced to Mariyam's nutrition philosophy before exploring services tailored to different health goals.",
    "Clear navigation, approachable content, and educational resources help users feel informed and supported before booking a consultation."
  ],

  results: commonResults(
    "The nutrition and wellness brand"
  ),

  quote: {
    text:
      "We wanted nutrition to feel practical, personal, and sustainable. The website finally reflects that philosophy.",
    author: "Dn. Mariyam Zubair",
    role: "Clinical Dietitian & Nutrition Consultant"
  },

  featured: true
},
  {
    slug: "maham-wellness", client: "Maham", title: "A softer digital home for bridal nutrition and everyday glow",
    category: "Healthcare & Wellness", industry: "Nutrition · Bridal wellness", year: "2026", duration: "3 weeks",
    services: ["Brand Direction", "Web Design", "Development"], summary: "An editorial wellness experience that helps brides find thoughtful nourishment without crash diets, pressure, or noise.",
    image: "/images/maham.webp", imageAlt: "Maham bridal nutrition and wellness website", liveUrl: "https://maham.devloop.site",
    headlineMetric: { value: "3", label: "self-guided paths" }, metrics: [{ value: "3", label: "Wellness paths" }, { value: "1", label: "Free bridal guide" }, { value: "6", label: "FAQ topics" }, { value: "0", label: "Pressure promises" }],
    challenge: ["Bridal wellness is crowded with urgency and body-pressure messaging. Maham needed a site that made nourishment feel beautiful, practical, and emotionally lighter.", "The experience also needed room for programs, journal pieces, recipes, and free resources without losing its intimate tone."],
    approach: ["Built around three chapters: before the big day, everyday glow, and beyond the wedding", "Used food and floral imagery as editorial storytelling", "Created a route from philosophy to programs, resources, journal, and FAQs", "Made the no-pressure positioning explicit throughout"],
    solution: ["Maham feels more like a considered magazine than a sales funnel. Large, quiet imagery introduces the point of view, while program cards let visitors choose the chapter that matches their life.", "The free bridal guide and journal make the site useful before someone is ready for a program."],
    results: commonResults("The wellness brand"), quote: { text: "It feels like the kind of support we want people to feel when they arrive: calm, considered, and kind.", author: "Maham", role: "Bridal nutrition and wellness" }, featured: true,
  },
  {
    slug: "zamzam-icon", client: "Zamzam Icon", title: "Selling a landmark address through calm, considered detail",
    category: "Real Estate", industry: "Property · Luxury residences", year: "2026", duration: "4 weeks",
    services: ["Art Direction", "Web Design", "Development"], summary: "A premium property story for Clifton residences, combining architecture, availability, payment planning, and private viewings.",
    image: "/images/zamzam.webp", imageAlt: "Zamzam Icon luxury residence website", liveUrl: "https://zamzam.devloop.site",
    headlineMetric: { value: "48", label: "month ownership plan" }, metrics: [{ value: "2 & 3", label: "Bedroom homes" }, { value: "48 mo", label: "Payment plan" }, { value: "24/7", label: "Secure arrival" }, { value: "Clifton", label: "Karachi address" }],
    challenge: ["Zamzam Icon needed to communicate more than square footage. The site had to sell a feeling of arrival while answering practical questions about residences, payments, amenities, and location.", "Because availability changes, the experience needed a strong inquiry path instead of pretending every unit could be purchased online."],
    approach: ["Led with elevated living and iconic-by-nature positioning", "Separated residences, payment, amenities, and location into decision stages", "Used gallery moments to make the lobby, interiors, and exterior tangible", "Made private viewing and live availability the primary actions"],
    solution: ["The result is a composed property presentation that moves from aspiration to specifics. Residence cards give buyers the essentials, while the payment estimator and buyer journey make the next step understandable.", "Clifton is treated as part of the product, connecting the building to dining, retail, healthcare, and coastline landmarks."],
    results: commonResults("The project story"), quote: { text: "The experience gives the project the quiet confidence of the address it represents.", author: "Zamzam Icon", role: "Premium residences, Clifton Karachi" }, featured: true,
  },
  {
    slug: "earth-world-marketing", client: "Earth World Marketing", title: "Making Islamabad property search  from the first click",
    category: "Real Estate", industry: "Property · Sales, rent, and investment", year: "2026", duration: "4 weeks",
    services: ["Web Design", "Development", "Content Strategy"], summary: "A verified property marketplace for Islamabad and Rawalpindi with listings, sector intelligence, agents, and transfer support.",
    image: "/images/samad.webp", imageAlt: "Earth World Marketing property website", liveUrl: "https://samad.devloop.site",
    headlineMetric: { value: "11", label: "years in market" }, metrics: [{ value: "6", label: "Property types" }, { value: "8", label: "Priority sectors" }, { value: "3", label: "Buyer journeys" }, { value: "4.9/5", label: "Client rating" }],
    challenge: ["Property decisions in Islamabad depend on more than a listing photo. Buyers need confidence in documents, valuations, sectors, and the people guiding the transaction.", "Earth World needed to serve buyers, renters, sellers, overseas clients, and investors without becoming a generic classifieds page."],
    approach: ["Put sale, rent, and search intent at the top", "Built browsing around property type and familiar CDA sectors", "Added verification cues, market context, agents, and document support", "Connected listings to calculators, guides, shortlist, and contact"],
    solution: ["The site behaves like a local property desk: clear inventory up front, useful sector context alongside it, and human expertise throughout. Buyers can move from a listing to an agent, calculator, or guide without losing their place.", "Trust is made tangible through verification language, transfer support, overseas help, and stories from real transactions."],
    results: commonResults("The property portfolio"), quote: { text: "The website feels like the honest property conversation clients expect from our team.", author: "Samad", role: "Principal Realtor, Earth World Marketing" }, featured: false,
  },
  {
    slug: "property-vision", client: "Property Vision", title: "A Faisalabad-first property platform built on verified detail",
    category: "Real Estate", industry: "Property · Residential, commercial, and agricultural", year: "2026", duration: "4 weeks",
    services: ["Brand Direction", "Web Design", "Development"], summary: "A bilingual-ready brokerage experience for Faisalabad homes, plots, apartments, commercial property, and agricultural land.",
    image: "/images/property-vision.webp", imageAlt: "Property Vision Faisalabad real estate website", liveUrl: "https://property-vision.devloop.site",
    headlineMetric: { value: "16+", label: "live listings" }, metrics: [{ value: "5", label: "Property specialties" }, { value: "12", label: "Years local" }, { value: "6", label: "Specialist advisors" }, { value: "1 day", label: "Shortlist promise" }],
    challenge: ["Property Vision serves very different needs, from family homes and apartments to farmland and commercial plazas. It needed a structure that felt local and expert rather than broad and anonymous.", "Trust had to be visible: buyers needed to understand document checks, specialists, neighborhoods, and the next step before making contact."],
    approach: ["Made Faisalabad the organizing idea across inventory, neighborhoods, and content", "Separated specialties so buyers can start with the property they need", "Used bilingual labels and clear verification language", "Put advisor expertise and shortlist moments beside listings"],
    solution: ["Property Vision combines a searchable listing surface with a local point of view. The homepage moves from property types to featured inventory, then into neighborhoods and specialists who make the search credible.", "A restrained visual system and strong Urdu/English labeling support the promise: papers checked before a token."],
    results: commonResults("The Faisalabad brokerage"), quote: { text: "Property search now feels rooted in Faisalabad, with the clarity and care our clients ask for.", author: "Property Vision", role: "Faisalabad real estate brokerage" }, featured: false,
  },
  {
    slug: "northhaven-real-estate", client: "Northhaven", title: "Giving distinctive Seattle homes room to tell their story",
    category: "Real Estate", industry: "Property · Curated residential brokerage", year: "2025", duration: "3 weeks",
    services: ["Art Direction", "Web Design", "Development"], summary: "A considered real estate editorial for people choosing a home by light, proportion, landscape, and the life it makes possible.",
    image: "/images/northhaven.webp", imageAlt: "Northhaven curated Seattle homes website", liveUrl: "https://northhaven.devloop.site",
    headlineMetric: { value: "3", label: "featured residences" }, metrics: [{ value: "3", label: "Featured residences" }, { value: "4", label: "Editorial chapters" }, { value: "PNW", label: "Point of view" }, { value: "1:1", label: "Considered guidance" }],
    challenge: ["Northhaven is not a volume marketplace. Its value is discernment: homes selected for their sense of place and the lives they make possible.", "The site needed to feel like a point of view rather than a property feed, while still giving each home a clear route to details and tours."],
    approach: ["Built the story around space truly lived in", "Used residential photography with short, confident copy", "Created a paced collection experience for homes and journal content", "Kept contact focused on finding the feeling before the floor plan"],
    solution: ["Northhaven's experience is intentionally quiet. Homes get room to breathe, and the copy frames architecture through lived moments rather than specifications alone.", "Collection, approach, and contact work as one editorial journey toward a conversation or private tour."],
    results: commonResults("The residential collection"), quote: { text: "The site makes the search feel like the beginning of living there.", author: "Northhaven", role: "Private homes, Seattle" }, featured: false,
  },
  {
    slug: "estatia-real-estate", client: "ESTATIA", title: "Building an atelier for the world's most considered addresses",
    category: "Real Estate", industry: "Property · Luxury real estate atelier", year: "2026", duration: "4 weeks",
    services: ["Brand Direction", "Web Design", "Development"], summary: "A discreet luxury real estate experience spanning modern living, waterfront estates, commercial, hospitality, and retail.",
    image: "/images/estatia.webp", imageAlt: "ESTATIA curated luxury real estate website", liveUrl: "https://estatia.devloop.site",
    headlineMetric: { value: "28", label: "years of excellence" }, metrics: [{ value: "2", label: "Signature collections" }, { value: "4", label: "Property practices" }, { value: "1,400+", label: "Properties sold" }, { value: "$2.6B", label: "Portfolio value" }],
    challenge: ["ESTATIA needed to speak to a discerning international audience without the usual luxury real estate clichés. The brand had to feel private, assured, and specific.", "Its offer extends beyond homes into commercial, hospitality, and retail, so the architecture needed range without diluting curation."],
    approach: ["Positioned the studio as an atelier rather than a listing service", "Organized discovery around Modern Living and Waterfront Estate", "Gave four practices equal clarity without a crowded mega-menu", "Used proof points and private advisory language to reinforce discretion"],
    solution: ["ESTATIA opens with a strong editorial promise, then earns it through carefully paced sections. Collections set the tone, while service areas explain the breadth of the atelier.", "The contact experience is intentionally personal, framing the inquiry as the beginning of an advisory relationship."],
    results: commonResults("The real estate atelier"), quote: { text: "The experience feels selective without feeling distant, which is exactly where the brand lives.", author: "ESTATIA", role: "Curated real estate atelier" }, featured: false,
  },
  {
    slug: "rehan-tariq", client: "Rehan Tariq", title: "A developer portfolio that lets the work do the talking",
    category: "Personal Portfolio", industry: "Technology · Front-end and full-stack development", year: "2026", duration: "3 weeks",
    services: ["Portfolio Design", "Development", "Content Structure"], summary: "A personal portfolio covering skills, experience, selected projects, writing, and contact in one confident flow.",
    image: "/images/rehan.webp", imageAlt: "Rehan Tariq developer portfolio website", liveUrl: "https://rehan.devloop.site",
    headlineMetric: { value: "20+", label: "tools and technologies" }, metrics: [{ value: "4", label: "Selected projects" }, { value: "20+", label: "Technologies" }, { value: "3", label: "Experience chapters" }, { value: "1", label: "Contact path" }],
    challenge: ["Rehan's experience spans front-end, full-stack, infrastructure, AI, and product work. The portfolio needed to show range without becoming an undifferentiated list of tools.", "A hiring visitor should understand who he is, what he builds, and how to contact him in a few focused scrolls."],
    approach: ["Opened with a clear professional introduction and direct hiring action", "Separated experience, skills, education, projects, writing, and contact", "Used project descriptions to explain role, stack, and contribution", "Kept technical depth available without making the first impression feel like documentation"],
    solution: ["The portfolio turns a broad technical background into a readable narrative. Visitors can start with the headline, validate it through experience and skills, then inspect finance, travel, real estate, and newsroom products.", "Contact closes the loop with a simple message route, resume action, and professional profiles."],
    results: commonResults("The developer portfolio"), quote: { text: "The portfolio gives every part of my experience a place without making the story feel complicated.", author: "Rehan Tariq", role: "Front-end and full-stack developer" }, featured: false,
  },
  {
    slug: "detailing-lab", client: "DETAILING LAB", title: "Making premium car care feel as precise as the finish",
    category: "Automotive", industry: "Automotive · Detailing studio", year: "2026", duration: "3 weeks",
    services: ["Brand Direction", "Web Design", "Development"], summary: "A premium detailing studio website for paint correction, ceramic protection, interior care, and showroom-level results.",
    image: "/images/detailing-lab.webp", imageAlt: "DETAILING LAB premium car detailing website", liveUrl: "https://car.devloop.site",
    headlineMetric: { value: "6", label: "service packages" }, metrics: [{ value: "6", label: "Service packages" }, { value: "12 mo", label: "Ceramic protection" }, { value: "100%", label: "Premium products" }, { value: "9", label: "Core services" }],
    challenge: ["Customers need help choosing between a refresh, paint correction, ceramic protection, and future PPF. The site had to make the difference legible.", "The studio also needed to feel premium without becoming intimidating, with a booking route that captures car, package, date, and customer details."],
    approach: ["Led with restoration, protection, and showroom-level shine", "Turned services into plain-language packages with price anchors", "Used studio photography to show process, equipment, and finish", "Placed booking actions beside packages, FAQs, and studio details"],
    solution: ["DETAILING LAB gives each level of care a clear job. Visitors can compare Gloss Care, Signature Shine, Paint Revival, and Ceramic Shield packages before moving into a direct booking form.", "The gallery and FAQ answer questions that usually delay a booking, from ceramic coating lifespan to paint correction."],
    results: commonResults("The detailing studio"), quote: { text: "The site makes the level of care visible before a customer ever arrives at the studio.", author: "Alex Morgan", role: "Founder & CEO, DETAILING LAB" }, featured: false,
  },
];

export const caseCategories = ["All", "Healthcare & Wellness", "Real Estate", "Food & Beverage", "Personal Portfolio", "Automotive"] as const;

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
