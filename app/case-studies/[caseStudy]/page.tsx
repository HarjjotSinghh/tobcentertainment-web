import Image from "next/image"
import { notFound } from "next/navigation"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    caseStudy: study.id,
  }))
}

export default function CaseStudy({
  params,
}: {
  params: { caseStudy: string }
}) {
  const study = caseStudies.find((s) => s.id === params.caseStudy)

  if (!study) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 pt-16 pb-32">
      <Card className="max-w-4xl mx-auto rounded-xl p-4">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold tracking-tight mb-8">
            {study.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="mb-8">
            <img
              src={study.image}
              alt={study.title}
              width={800}
              height={400}
              className="rounded-lg object-cover object-center"
            />
          </div>
          <section>
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-tight mb-4">
              Overview
            </h2>
            <p>{study.description}</p>
          </section>
          <section>
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-tight mb-4">
              Client
            </h2>
            <p>{study.client}</p>
          </section>
          <section>
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-tight mb-4">
              Challenge
            </h2>
            <p>{study.challenge}</p>
          </section>
          <section>
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-tight mb-4">
              Solution
            </h2>
            <p>{study.solution}</p>
          </section>
          <section>
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-tight mb-4">
              Results
            </h2>
            <ul className="list-disc pl-5">
              {study.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </section>
          <section className="bg-gray-50 border-2 border-muted p-6 rounded-lg">
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-tight mb-4">
              Testimonial
            </h2>
            <blockquote className="text-lg text-pretty">
              &quot;{study.testimonial.quote}&quot;
            </blockquote>
            <p className="mt-2 font-bold">- {study.testimonial.author}</p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
