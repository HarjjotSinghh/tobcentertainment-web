import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ServicePage() {
  return (
    <div className="container mx-auto lg:px-8 px-4 pb-32 pt-16">
      <h1 className="md:text-5xl text-4xl font-extrabold tracking-tight mb-8">
        Our Services
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-3xl tracking-tight font-extrabold">
              Influencer Marketing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Influencer Identification</li>
              <li>Campaign Strategy</li>
              <li>Content Creation</li>
              <li>Performance Tracking</li>
            </ul>
          </CardContent>
          <CardFooter className="h-fit">
            <Button className="w-full mt-auto" size="lg">
              Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-3xl tracking-tight font-extrabold">
              Celebrity Endorsements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Celebrity Matching</li>
              <li>Contract Negotiation</li>
              <li>Campaign Management</li>
              <li>ROI Analysis</li>
            </ul>
          </CardContent>
          <CardFooter className="h-fit">
            <Button className="w-full mt-auto" size="lg">
              Explore Options
            </Button>
          </CardFooter>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-3xl tracking-tight font-extrabold">
              Digital Marketing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Social Media Management</li>
              <li>Content Marketing</li>
              <li>SEO Optimization</li>
              <li>PPC Advertising</li>
            </ul>
          </CardContent>
          <CardFooter className="h-fit">
            <Button className="w-full mt-auto" size="lg">
              Get Started
            </Button>
          </CardFooter>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle className="text-3xl tracking-tight font-extrabold">
              Brand Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Brand Identity Development</li>
              <li>Market Research</li>
              <li>Competitive Analysis</li>
              <li>Positioning Strategy</li>
            </ul>
          </CardContent>
          <CardFooter className="h-fit">
            <Button className="w-full mt-auto" size="lg">
              Consult Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
