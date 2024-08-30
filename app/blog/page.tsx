import Image from "next/image"
import Link from "next/link"

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

export default function BlogPage() {
  return (
    <div className="container mx-auto lg:px-8 px-4 py-16 pb-32">
      <h1 className="md:text-5xl text-4xl text-center font-extrabold tracking-tight mb-8">
        All Blog Posts
      </h1>
      <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="h-full">
            <div className="bg-background rounded-lg shadow-md shadow-black/[0.02] hover:shadow-black/[0.04] hover:shadow-lg overflow-hidden transition-all ease-in-out duration-300 border-2 border-muted">
              <img
                src={post.imageSrc}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-forgeround/70 line-clamp-3">
                  {post.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
