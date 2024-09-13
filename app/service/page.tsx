import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ServicePage() {
  const services = [
    "Film Production Company",
    "Video Production",
    "Advertisement Shoot",
    "Artist Management",
    "Marketing and Advertising",
    "Celebrity & Influencer Marketing",
    "Casting Company",
    "Post Production Services",
    "Script Writing Services",
    "Music Video Production",
    "Social Media Marketing",
    "Events and Promotions",
    "Print Shoots and Photoshoots",
  ]

  return (
    <div className="container mx-auto lg:px-8 px-4 pb-32 pt-16">
      <h1 className="md:text-5xl text-4xl font-extrabold tracking-tight mb-8">
        Our Services
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="h-full flex flex-col border-foreground/10"
          >
            <CardHeader>
              <Image
                src="/logo.jpg"
                alt={service}
                width={200}
                height={200}
                className="mb-4 rounded-lg w-full h-auto"
              />
              <CardTitle className="text-2xl tracking-tight font-extrabold">
                {service}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full mt-auto" size="lg">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
