export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "TOBC Entertainment",
  description:
    "Match your brand with the perfect influencer. Find the right influencer for your brand and start building your brand influencer marketing strategy today.",
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Service", href: "/service" },
    { title: "Advertisement", href: "/advertisement" },
    { title: "Films", href: "/films" },
    { title: "Music", href: "/music" },
    { title: "Casting", href: "/casting" },
    { title: "Gallery", href: "/gallery" },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact-us" },
  ],
  links: {
    twitter: "https://x.com/HarjjotSinghh",
    github: "https://github.com/HarjjotSingh",
    docs: "https://harjot.pro",
  },
}

export const celebreties = [
  {
    name: "Sonu Sood",
    imageSrc: "/celebrities/1.webp",
    tag: "@sonu_sood",
  },
  {
    name: "Randeep Hooda",
    imageSrc: "/celebrities/2.webp",
    tag: "@randeephooda",
  },
  {
    name: "Rohit Suresh Saraf",
    imageSrc: "/celebrities/3.webp",
    tag: "@rohitsaraf",
  },
  {
    name: "Vaani Kapoor",
    imageSrc: "/celebrities/4.webp",
    tag: "@vaanikapoor",
  },
  {
    name: "Ali Fazal",
    imageSrc: "/celebrities/5.webp",
    tag: "@alifazal9",
  },
  {
    name: "Raghav Juyal",
    imageSrc: "/celebrities/6.webp",
    tag: "@raghavjuyal",
  },
  {
    name: "Sunil Grover",
    imageSrc: "/celebrities/7.webp",
    tag: "@whosunilgrover",
  },
  {
    name: "Sonali Bendre",
    imageSrc: "/celebrities/8.webp",
    tag: "@iamsonalibendre",
  },
  {
    name: "Adah Sharma",
    imageSrc: "/celebrities/9.webp",
    tag: "@adah_ki_adah",
  },
  {
    name: "Malaika Arora",
    imageSrc: "/celebrities/10.webp",
    tag: "@malaikaaroraofficial",
  },
  {
    name: "Neha Sharma",
    imageSrc: "/celebrities/11.webp",
    tag: "@nehasharmaofficial",
  },
  {
    name: "Richa Chadha",
    imageSrc: "/celebrities/12.webp",
    tag: "@the_richa_chadha",
  },
]

export const caseStudies = [
  {
    id: "product-launch",
    title: "Product Launch",
    description:
      "Innovative social media campaign for a tech startup's product launch.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "TechNova Inc.",
    challenge: "Launch a new AI-powered smart home device in a crowded market.",
    solution:
      "We orchestrated a multi-phase influencer campaign, leveraging tech enthusiasts and lifestyle bloggers to create buzz and demonstrate the product's unique features.",
    results: [
      "Reached over 5 million potential customers",
      "Generated 100,000+ pre-orders",
      "Achieved a 300% increase in brand mentions across social media platforms",
    ],
    testimonial: {
      quote:
        "The campaign exceeded our expectations. TOBC's strategy was crucial to our successful launch.",
      author: "Sarah Chen, CMO of TechNova Inc.",
    },
  },
  {
    id: "awareness-campaign",
    title: "Awareness Campaign",
    description:
      "Impactful influencer-driven awareness campaign for a non-profit organization.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "Ocean Guardian Foundation",
    challenge:
      "Raise awareness about ocean pollution and promote a global clean-up initiative.",
    solution:
      "We partnered with environmental activists, celebrities, and micro-influencers to create a viral challenge that encouraged followers to participate in local beach clean-ups.",
    results: [
      "Campaign hashtag used over 1 million times",
      "Organized 500+ beach clean-up events worldwide",
      "Raised $2 million in donations for ocean conservation efforts",
    ],
    testimonial: {
      quote:
        "TOBC's campaign transformed our reach and impact. We're grateful for their expertise and passion.",
      author: "Dr. Marina Waves, Founder of Ocean Guardian Foundation",
    },
  },
  {
    id: "brand-relaunch",
    title: "Brand Relaunch",
    description:
      "Strategic influencer partnerships to reposition a legacy brand for a younger audience.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "ClassicWear Apparel",
    challenge:
      "Revitalize a 50-year-old clothing brand to appeal to millennials and Gen Z without alienating existing customers.",
    solution:
      "We curated a diverse group of fashion influencers to showcase modern styling of classic pieces, emphasizing quality and sustainability.",
    results: [
      "40% increase in sales among under-30 demographic",
      "200% growth in Instagram followers",
      "Featured in 5 major fashion publications",
    ],
    testimonial: {
      quote:
        "TOBC brilliantly bridged the gap between our heritage and the desires of younger consumers.",
      author: "Marcus Threadgood, CEO of ClassicWear Apparel",
    },
  },
  {
    id: "product-collaboration",
    title: "Product Collaboration",
    description:
      "Successful influencer product collaboration for a beauty brand.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "Glow Cosmetics",
    challenge:
      "Create and launch a limited-edition makeup palette with a top beauty influencer.",
    solution:
      "We managed the entire collaboration process, from influencer selection and product development to marketing strategy and launch execution.",
    results: [
      "Sold out within 2 hours of launch",
      "Generated $1.5 million in revenue",
      "Increased brand's social media engagement by 500%",
    ],
    testimonial: {
      quote:
        "TOBC's expertise made this collaboration seamless and incredibly successful. They're true partners in every sense.",
      author: "Lila Shine, Founder of Glow Cosmetics",
    },
  },
  {
    id: "event-promotion",
    title: "Event Promotion",
    description:
      "High-impact influencer campaign to promote a major music festival.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "SoundWave Festival",
    challenge:
      "Boost ticket sales and create excitement for a new music festival in a competitive market.",
    solution:
      "We implemented a tiered influencer strategy, combining celebrity musicians, lifestyle influencers, and micro-influencers to create a comprehensive content campaign.",
    results: [
      "Achieved 95% ticket sell-out rate",
      "Generated 50 million impressions across social platforms",
      "Trended #1 on Twitter during the event weekend",
    ],
    testimonial: {
      quote:
        "TOBC's campaign was instrumental in making SoundWave a must-attend event from its very first year.",
      author: "Alex Rhythm, Director of SoundWave Festival",
    },
  },
  {
    id: "social-cause",
    title: "Social Cause Campaign",
    description:
      "Emotive influencer-led campaign to support mental health awareness.",
    image:
      "https://png.pngtree.com/png-clipart/20231001/original/pngtree-flat-vector-illustration-of-advertising-campaign-for-social-media-marketing-concept-png-image_12928867.png",
    client: "MindfulNow Foundation",
    challenge:
      "Destigmatize conversations around mental health and promote support resources.",
    solution:
      "We coordinated with a diverse range of influencers, from celebrities to healthcare professionals, to share personal stories and expert advice, creating a supportive online community.",
    results: [
      "Reached over 20 million people with campaign message",
      "Increased calls to mental health helplines by 30%",
      "Garnered support from 5 major corporations for ongoing initiatives",
    ],
    testimonial: {
      quote:
        "TOBC's sensitive and strategic approach helped us create a movement of openness and support around mental health.",
      author: "Dr. Sam Goodmind, CEO of MindfulNow Foundation",
    },
  },
]

export const blogPosts = [
  {
    id: "1",
    title: "The Rise of Influencer Marketing",
    description:
      "Influencer marketing has become a powerful tool for brands to reach their target audience. This blog post explores the reasons behind its popularity and effectiveness.",
    imageSrc:
      "https://www.collectivealternative.com/wp-content/uploads/2023/06/Influencer-Marketing-Indianapolis.jpg",
    content: `# The Rise of Influencer Marketing

## Introduction

Influencer marketing has become a powerful tool for brands to reach their target audience. This blog post explores the reasons behind its popularity and effectiveness.

### Key Points

- *Authenticity*: Influencers build trust with their followers
- **Targeted Reach**: Access to niche audiences
- Increased Engagement: Higher interaction rates compared to traditional advertisings
`,
  },
  {
    id: "2",
    title: "The Future of AI in Marketing",
    description:
      "AI is revolutionizing marketing. This blog post explores the latest trends and technologies in AI-powered marketing.",
    imageSrc: "https://images.mktw.net/im-65389404?width=1260&height=876",
    content: `# The Future of AI in Marketing

## Introduction

AI is revolutionizing marketing. This blog post explores the latest trends and technologies in AI-powered marketing.

### Key Points

- **Personalization**: AI enables personalized marketing experiences
- **Automation**: Reduces manual work and increases efficiency
- **Data Insights**: Provides valuable insights from data analysis

`,
  },
  {
    id: "3",
    title: "The Importance of UX in Marketing",
    description:
      "User experience is crucial in marketing. This blog post explores the importance of user experience in marketing.",
    imageSrc:
      "https://images.wondershare.com/mockitt/ux-beginner/marketing-ux-logo.jpg",
    content: `# The Importance of User Experience in Marketing

## Introduction

User experience is crucial in marketing. This blog post explores the importance of user experience in marketing.

### Key Points

- **User-Centric**: Focus on user needs and preferences
- **Engagement**: Higher user engagement and retention
- **Brand Loyalty**: Strong user experience leads to brand loyalty
`,
  },
]
