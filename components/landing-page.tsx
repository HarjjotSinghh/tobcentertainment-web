"use client"

import React from "react"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import { WebhookIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Button } from "./ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"

function AppleIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}

export default function LandingPage() {
  return (
    <div className="w-full text-foreground">
      <section className="flex lg:flex-row flex-col lg:gap-16 gap-8 items-center justify-center bg-accent/5 px-8 py-32 pt-44">
        <div className="flex flex-col items-start justify-start">
          <h2 className="tracking-tighter text-left lg:text-6xl md:text-5xl text-4xl font-extrabold text-foreground">
            Match Your <span className="text-accent">Brand</span> With
            <br /> The Perfect Influencer
          </h2>
          <p className="mt-6 max-w-sm text-foreground/80 font-semibold text-left text-lg">
            Amplify your reach, and drive engagement with our influencer
            marketing services
          </p>
          <Button
            size={"lg"}
            className="mt-8 rounded-full bg-[size:300%_300%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out object-center bg-gradient-to-r from-accent via-primary to-accent lg:text-2xl text-xl py-10 px-12 bg-primary text-white font-bold shadow-[0px_6px_40px_hsl(var(--accent)/0.5)]"
          >
            Connect with Us Today!
          </Button>
        </div>
        <div className="mt-8">
          <img
            draggable={false}
            src="/placeholder.svg"
            alt="Influencers"
            className="rounded-lg select-none"
            width="500"
            height="300"
            style={{ aspectRatio: "5/3", objectFit: "cover" }}
          />
        </div>
      </section>
      <section className="px-8 py-24 mx-auto max-w-7xl">
        <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-extrabold">
          <span className="font-medium">The Power Of</span>
          <br /> Authentic Influencer Relationship
        </h2>
        <p className="mt-4 text-center text-lg text-foreground/80">
          We effectively harness the credibility and sway of social media
          influencers.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="rounded-lg bg-accent/25 md:p-8 p-6">
            <h3 className="text-center text-5xl font-extrabold">90%</h3>
            <p className="mt-2 text-center text-foreground/80">
              Engagement Rate
            </p>
          </div>
          <div className="rounded-lg bg-accent/25 md:p-8 p-6">
            <h3 className="text-center text-5xl font-extrabold">200%</h3>
            <p className="mt-2 text-center text-foreground/80">
              Increase In Views
            </p>
          </div>
          <div className="rounded-lg bg-accent/25 md:p-8 p-6">
            <h3 className="text-center text-5xl font-extrabold">85%</h3>
            <p className="mt-2 text-center text-foreground/80">
              Follower Growth
            </p>
          </div>
          <div className="rounded-lg bg-accent/25 md:p-8 p-6">
            <h3 className="text-center text-5xl font-extrabold">98%</h3>
            <p className="mt-2 text-center text-foreground/80">Brand Trust</p>
          </div>
        </div>
      </section>
      <section className="bg-accent/5 px-8 py-24">
        <div className=" mx-auto max-w-7xl">
          <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-extrabold">
            <span className="font-medium">Top-tier</span>
            <br /> Influencer Marketing Solutions
          </h2>
          <p className="mt-4 text-center text-lg text-foreground/80">
            Elevate your brand with industry-leading stratergies.
          </p>
          <div className="mt-8 grid grid-cols-1 md:gap-8 gap-6 lg:grid-cols-3">
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <div className="p-8 shadow-lg mb-8 shadow-black/5 bg-accent/[0.25] mx-auto rounded-full w-fit">
                <WebhookIcon className="size-10 text-foreground" />
              </div>
              <h3 className="text-3xl text-center font-bold">
                Influencer Selection
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                We help you find the right influencers, considering the target
                audience, campaign objectives, and budget constraints.
              </p>
            </div>
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <div className="p-8 shadow-lg mb-8 shadow-black/5 bg-accent/[0.25] mx-auto rounded-full w-fit">
                <WebhookIcon className="size-10 text-foreground" />
              </div>
              <h3 className="text-3xl text-center font-bold">
                Content Creation
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                Our team collaborates with influencers to create authentic,
                engaging, and high-quality content that resonates with your
                target audience.
              </p>
            </div>
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <div className="p-8 shadow-lg mb-8 shadow-black/5 bg-accent/[0.25] mx-auto rounded-full w-fit">
                <WebhookIcon className="size-10 text-foreground" />
              </div>
              <h3 className="text-3xl text-center font-bold">
                Campaign Management
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                We handle the entire campaign, managing influencer
                communication, content approvals, and performance tracking.
              </p>
            </div>
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <div className="p-8 shadow-lg mb-8 shadow-black/5 bg-accent/[0.25] mx-auto rounded-full w-fit">
                <WebhookIcon className="size-10 text-foreground" />
              </div>
              <h3 className="text-3xl text-center font-bold">
                Strategy & Ideation
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                Our expert strategists brainstorm innovative influencer
                campaigns tailored to your brand’s goals, leveraging market
                insights for maximum impact.
              </p>
            </div>
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <div className="p-8 shadow-lg mb-8 shadow-black/5 bg-accent/[0.25] mx-auto rounded-full w-fit">
                <WebhookIcon className="size-10 text-foreground" />
              </div>
              <h3 className="text-3xl text-center font-bold">Deep Insights</h3>
              <p className="mt-2 text-center text-foreground/80">
                We provide comprehensive performance analysis and reporting to
                help you understand the impact of your influencer marketing
                campaigns.
              </p>
            </div>
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <div className="p-8 shadow-lg mb-8 shadow-black/5 bg-accent/[0.25] mx-auto rounded-full w-fit">
                <WebhookIcon className="size-10 text-foreground" />
              </div>
              <h3 className="text-3xl text-center font-bold">
                ROI Measurement
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                Through rigorous ROI analysis, we identify an optimization
                approach to enhance the efficiency of your influencer marketing
                endeavors
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              size={"lg"}
              className="mt-24 rounded-full bg-[size:300%_300%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out object-center bg-gradient-to-r from-accent via-primary to-accent lg:text-2xl text-xl py-10 px-12 bg-primary text-white font-bold shadow-[0px_6px_40px_hsl(var(--accent)/0.5)]"
            >
              Get Started Today!
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-background px-8 py-24">
        <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium">
          Crafted by <span className="font-extrabold">Specialists</span>,<br />
          Trusted by <span className="font-extrabold">Professionals</span>
        </h2>
        <p className="mt-4 text-center max-w-4xl text-pretty   mx-auto text-lg text-foreground/80">
          Our team of expert strategists and creatives deliver customized
          influencer marketing solutions that drive real results. Trusted by
          leading brands, we excel in connecting you with the perfect
          influencers to amplify your message.
        </p>
        <div className="mt-8 p-8">
          <div className="max-w-5xl mx-auto lg:space-y-32 md:space-y-24 space-y-16">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-16 gap-16">
              <div className="flex-1 space-y-4">
                <h2 className="tracking-tighter text-accent font-bold text-2xl">
                  Brand
                </h2>
                <h1 className="tracking-tighter text-5xl font-extrabold !mb-8">
                  Iris Home Fragrances
                </h1>
                <p className="text-lg">
                  <strong>Objective:</strong> Enhance brand awareness and drive
                  in-store sales.
                </p>
                <p className="text-lg">
                  <strong>Solution:</strong> Collaborated with 12 micro
                  lifestyle influencers to create informative and aesthetically
                  pleasing content promoting in-store discount sales.
                </p>
                <p className="text-lg">
                  <strong>Result:</strong> Achieved a 30% increase in foot
                  traffic and a 25% boost in sales within the same month.
                </p>
                <Button
                  size={"lg"}
                  className="!mt-12 rounded-full bg-[size:300%_300%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out object-center bg-gradient-to-r from-accent via-primary to-accent lg:text-2xl text-xl py-10 px-12 bg-primary text-white font-bold shadow-[0px_6px_40px_hsl(var(--accent)/0.5)]"
                >
                  Get Started Today!
                </Button>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    draggable={false}
                    src="/placeholder.svg"
                    alt="Influencer 1"
                    className="rounded-lg select-none"
                    width="200"
                    height="300"
                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                  />
                </div>
                <div className="relative">
                  <img
                    draggable={false}
                    src="/placeholder.svg"
                    alt="Influencer 2"
                    className="rounded-lg select-none"
                    width="200"
                    height="300"
                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="relative">
                  <img
                    draggable={false}
                    src="/placeholder.svg"
                    alt="Influencer 3"
                    className="rounded-lg select-none"
                    width="200"
                    height="300"
                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                  />
                </div>
                <div className="relative">
                  <img
                    draggable={false}
                    src="/placeholder.svg"
                    alt="Influencer 4"
                    className="rounded-lg select-none"
                    width="200"
                    height="300"
                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="tracking-tighter text-accent text-2xl font-bold">
                  Brand
                </h2>
                <h1 className="tracking-tighter text-5xl font-extrabold !mb-8">
                  Floryo
                </h1>
                <p className="text-lg">
                  <strong>Objective:</strong> Boost Brand Awareness: Enhance
                  brand recognition through strategic influencer collaborations.
                </p>
                <p className="text-lg">
                  <strong>Increase Sales:</strong> Drive higher sales figures by
                  leveraging influencer reach.
                </p>
                <p className="text-lg">
                  <strong>Promote Product Range:</strong> Highlight and promote
                  various products effectively.
                </p>
                <p className="text-lg">
                  <strong>Highlight Festive Offers:</strong> Increase visibility
                  of festive offers through influencer promotion.
                </p>
                <Button
                  size={"lg"}
                  className="!mt-12 rounded-full bg-[size:300%_300%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out object-center bg-gradient-to-r from-accent via-primary to-accent lg:text-2xl text-xl py-10 px-12 bg-primary text-white font-bold shadow-[0px_6px_40px_hsl(var(--accent)/0.5)]"
                >
                  Get Started Today!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-accent/5 px-8 py-24 ">
        <div className="flex-row sm:flex hidden -mt-44 flex-nowrap justify-center md:gap-12 gap-8 overflow-x-hidden">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              className={`${
                i % 2 === 0 ? (i % 3 === 0 ? "mt-48" : "mt-24") : "mt-8"
              }`}
            >
              <img
                draggable={false}
                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Influencer"
                className="rounded-xl aspect-[3.75/5] object-cover select-none"
                width="187.5"
                height="250"
              />
              <div className="flex flex-row justify-center gap-2 mt-4">
                <img
                  draggable={false}
                  src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Influencer"
                  className="rounded-full h-fit flex-1 aspect-square object-cover"
                  width="40"
                  height="40"
                />
                <div className="flex w-fit flex-col justify-start gap-2">
                  <h3 className="text-sm font-semibold">Influencer Name</h3>
                  <p className="text-sm -mt-2">@influencer_name</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium">
          Our <span className="font-extrabold">Story</span>
        </h2>
        <p className="mt-8 text-center text-lg text-foreground max-w-4xl mx-auto">
          At TobCentertainment, we specialize in empowering brands to harness
          the power of influencer marketing. With a team of seasoned experts and
          a deep understanding of digital trends, we’re committed to crafting
          tailored strategies that elevate your brand’s presence and drive
          tangible results.
          <br />
          <br /> From identifying the perfect influencers to executing seamless
          campaigns, we’re dedicated to helping your brand thrive in the
          ever-evolving digital landscape.
        </p>
        <div className="justify-center flex">
          <Button
            size={"lg"}
            className="mt-10 rounded-full bg-[size:300%_300%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out object-center bg-gradient-to-r from-accent via-primary to-accent lg:text-2xl text-xl py-10 px-12 bg-primary text-white font-bold shadow-[0px_6px_40px_hsl(var(--accent)/0.5)]"
          >
            Contact Us!
          </Button>
        </div>
      </section>
      <div className="bg-background px-8 py-24">
        <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium">
          Setting the <span className="font-extrabold">Standard</span>
        </h2>
        <p className="mt-8 mb-8 text-center text-lg text-foreground max-w-3xl mx-auto">
          Discover what sets us apart.
          <br />
          Influencer marketing is an art of connection, not just numbers. At
          Chingari, we specialize in crafting captivating narratives that
          resonate deeply with your audience.
        </p>
        <section className="flex lg:flex-row flex-col lg:gap-16 gap-8 items-center justify-center px-8 py-32 pt-12">
          <div className="flex flex-col items-start justify-start">
            <p className="mt-6 max-w-lg text-foreground/80 font-semibold text-left text-xl">
              Discover why leading brands choose us as their trusted ally in
              influencer marketing:
              <br />
              <br />
              <ul className="list-none">
                <li>
                  • Network of <strong>100K+ influencers</strong> for maximum
                  reach and diverse talent.
                </li>
                <li>
                  • Influencers from nano to celebrity levels across 1
                  <strong>5+ niches</strong>
                  and <strong>12+ languages</strong>.
                </li>
                <li>
                  • <strong>Customized, innovative strategies</strong> tailored
                  for your brand and audience.
                </li>
                <li>
                  • End-to-end campaign management services for{" "}
                  <strong>a hassle-free experience</strong>
                </li>
              </ul>
            </p>
            <Button
              size={"lg"}
              className="mt-8 w-full rounded-full bg-[size:300%_300%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out object-center bg-gradient-to-r from-accent via-primary to-accent lg:text-2xl text-xl py-10 px-12 bg-primary text-white font-bold shadow-[0px_6px_40px_hsl(var(--accent)/0.5)]"
            >
              Contact Us!
            </Button>
          </div>
          <div className="mt-8">
            <img
              draggable={false}
              src="/placeholder.svg"
              alt="Influencers"
              className="rounded-lg select-none"
              width="500"
              height="300"
              style={{ aspectRatio: "5/3", objectFit: "cover" }}
            />
          </div>
        </section>
      </div>
      <section className="bg-accent/5 px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium">
            That’s <span className="font-extrabold">how we roll!</span>
          </h2>
          <p className="mt-4 text-center text-lg text-foreground/80">
            Discover how we craft top influencer strategies, start to finish.
          </p>
          <div className="mt-16 grid grid-cols-1 md:gap-8 gap-6 lg:grid-cols-3">
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="text-3xl text-left mt-4 font-bold">
                Campaign Overview
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Share campaign details for a tailored and effective strategy.
              </p>
            </div>
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="text-3xl text-left mt-4 font-bold">
                Deliverables Determination
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Specify deliverables to properly design your influencer
                campaign.
              </p>
            </div>
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="text-3xl text-left mt-4 font-bold">
                Budget Allocation
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Decide your budget and get the desired result.
              </p>
            </div>
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="text-3xl text-left mt-4 font-bold">
                List Presentation
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Get ideal influencers for your brand in less than 48 hours.
              </p>
            </div>
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="text-3xl text-left mt-4 font-bold">
                Quotation Process
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Shortlisted influencers provide transparent quotes for budgetary
                compliance.
              </p>
            </div>
            <div className="rounded-xl bg-background md:p-8 p-6 shadow-xl shadow-black/[0.02]">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="text-3xl text-left mt-4 font-bold">
                Finalization
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Get the final campaign delivered directly to you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium">
            Our <span className="font-extrabold">Clientele</span>
          </h2>
          <p className="mt-4 text-center text-lg text-foreground/80">
            We help brands and agencies excel in influencer marketing, globally.
          </p>
          <section className="py-8">
            <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
              <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
                <img
                  draggable={false}
                  className="mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                  alt="Transistor"
                />
                <img
                  draggable={false}
                  className="brightness-0 grayscale-0 mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                  alt="Reform"
                />
                <img
                  draggable={false}
                  className="brightness-0 grayscale-0 mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                  alt="Tuple"
                />
                <img
                  draggable={false}
                  className="brightness-0 grayscale-0 mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                  alt="SavvyCal"
                />
                <img
                  draggable={false}
                  className="brightness-0 grayscale-0 mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                  alt="SavvyCal"
                />
                <img
                  draggable={false}
                  className="brightness-0 grayscale-0 mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
                  alt="SavvyCal"
                />
              </div>
              <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
                <img
                  draggable={false}
                  className="brightness-0 grayscale-0 mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                  alt="Transistor"
                />
                <img
                  draggable={false}
                  className="brightness-0 grayscale-0 mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                  alt="Reform"
                />
                <img
                  draggable={false}
                  className="brightness-0 grayscale-0 mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                  alt="Tuple"
                />
                <img
                  draggable={false}
                  className="brightness-0 grayscale-0 mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                  alt="SavvyCal"
                />
                <img
                  draggable={false}
                  className="brightness-0 grayscale-0 mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                  alt="SavvyCal"
                />
                <img
                  draggable={false}
                  className="brightness-0 grayscale-0 mx-8 inline h-16"
                  src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
                  alt="SavvyCal"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="bg-accent/5 px-8 py-24">
        <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium">
          The <span className="font-extrabold">Trust We Earn</span>
        </h2>
        <p className="mt-4 text-center text-lg text-foreground/80">
          Our clients can’t stop raving about us!
        </p>
        <div className="w-full max-w-7xl mx-auto mt-8">
          <Carousel
            opts={{
              align: "start",
              dragFree: false,
              loop: true,
            }}
            plugins={[Autoplay({ delay: 3500, playOnInit: true })]}
          >
            <CarouselContent className="ml-8">
              <CarouselItem className="pl-8 lg:basis-1/3 md:basis-1/2 basis-full">
                <div className="grid items-start bg-accent/25 rounded-xl justify-center lg:p-8 p-6 h-full">
                  <div className="grid gap-3 lg:gap-5">
                    <p className="text-lg lg:text-xl">
                      &ldquo;I was amazed by the quality of service. The team
                      was professional, courteous, and efficient
                      throughout.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="/placeholder.svg"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Emily Patel</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Marketing Manager
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-8 lg:basis-1/3 md:basis-1/2 basis-full">
                <div className="grid items-start bg-accent/25 rounded-xl justify-center lg:p-8 p-6 h-full">
                  <div className="grid gap-3 lg:gap-5">
                    <p className="text-lg lg:text-xl">
                      &ldquo;The level of expertise and attention to detail
                      demonstrated by the team was truly impressive. I would
                      highly recommend their services to anyone.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="/placeholder.svg"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Adam Turner</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          CEO, Horizon Inc
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-8 lg:basis-1/3 md:basis-1/2 basis-full">
                <div className="grid items-start bg-accent/25 rounded-xl justify-center lg:p-8 p-6 h-full">
                  <div className="grid gap-3 lg:gap-5">
                    <p className="text-lg lg:text-xl">
                      &ldquo;The support team was incredibly helpful and
                      responsive. They resolved my issue in no time, and I
                      couldn&apos;t be happier with the service.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="/placeholder.svg"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Sophia Lee</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Customer Support Representative
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-8 lg:basis-1/3 md:basis-1/2 basis-full">
                <div className="grid items-start bg-accent/25 rounded-xl justify-center lg:p-8 p-6 h-full">
                  <div className="grid gap-3 lg:gap-5">
                    <p className="text-lg lg:text-xl">
                      &ldquo;I was amazed by the quality of service. The team
                      was professional, courteous, and efficient
                      throughout.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="/placeholder.svg"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Emily Patel</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Marketing Manager
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-8 lg:basis-1/3 md:basis-1/2 basis-full">
                <div className="grid items-start bg-accent/25 rounded-xl justify-center lg:p-8 p-6 h-full">
                  <div className="grid gap-3 lg:gap-5">
                    <p className="text-lg lg:text-xl">
                      &ldquo;The level of expertise and attention to detail
                      demonstrated by the team was truly impressive. I would
                      highly recommend their services to anyone.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="/placeholder.svg"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Adam Turner</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          CEO, Horizon Inc
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-8 lg:basis-1/3 md:basis-1/2 basis-full">
                <div className="grid items-start bg-accent/25 rounded-xl justify-center lg:p-8 p-6 h-full">
                  <div className="grid gap-3 lg:gap-5">
                    <p className="text-lg lg:text-xl">
                      &ldquo;The support team was incredibly helpful and
                      responsive. They resolved my issue in no time, and I
                      couldn&apos;t be happier with the service.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="/placeholder.svg"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Sophia Lee</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Customer Support Representative
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>
        </div>
      </section>
      <section className="bg-background px-8 py-24">
        <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-extrabold">
          <span className="font-medium">Frequently </span>Asked Questions
        </h2>
        <p className="mt-4 text-center text-lg text-foreground/80">
          Frequently asked questions about our influencer marketing services.
          <br />
          If you have any questions, feel free to contact us.
        </p>
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto flex flex-col gap-4 mt-8"
        >
          <AccordionItem
            className="bg-accent/25 shadow-lg shadow-black/[0.02] rounded-xl py-2 px-8"
            value="item-1"
          >
            <AccordionTrigger>
              What Types of Influencers Do You Work With?
            </AccordionTrigger>
            <AccordionContent>
              Content regarding the types of influencers the agency works with.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-accent/25 shadow-lg shadow-black/[0.02] rounded-xl py-2 px-8"
            value="item-2"
          >
            <AccordionTrigger>
              How does our agency select influencers?
            </AccordionTrigger>
            <AccordionContent>
              Content explaining how the agency selects influencers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-accent/25 shadow-lg shadow-black/[0.02] rounded-xl py-2 px-8"
            value="item-3"
          >
            <AccordionTrigger>
              Can I choose the influencers I want to work with?
            </AccordionTrigger>
            <AccordionContent>
              Content about choosing influencers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-accent/25 shadow-lg shadow-black/[0.02] rounded-xl py-2 px-8"
            value="item-4"
          >
            <AccordionTrigger>
              How much does an influencer marketing campaign cost?
            </AccordionTrigger>
            <AccordionContent>
              Content discussing the cost of an influencer marketing campaign.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-accent/25 shadow-lg shadow-black/[0.02] rounded-xl py-2 px-8"
            value="item-5"
          >
            <AccordionTrigger>
              How do you ensure the content aligns with our brand?
            </AccordionTrigger>
            <AccordionContent>
              Content explaining how the agency ensures content alignment with
              the brand.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="bg-accent px-8 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="tracking-tighter text-left font-extrabold lg:text-6xl md:text-5xl text-4xl">
            Ready To Make Waves?
          </h1>
          <p className="mt-2 max-w-xs text-left text-lg">
            Get in touch with us to start your influencer marketing journey.
          </p>
          <Button
            variant={"secondary"}
            size={"lg"}
            className="mt-8 text-xl bg-background text-primary rounded-full h-14 px-10"
          >
            Get In Touch
          </Button>
        </div>
      </section>
      <footer className="bg-gray-100">
        <div className="relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="lg:flex flex-col gap-8 lg:items-center lg:justify-center">
            <div>
              <div className="flex justify-center text-accent lg:justify-center">
                <svg
                  className="h-8"
                  viewBox="0 0 118 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.83 19.2047C37.2352 19.237 36.6469 19.0679 36.16 18.7247C35.9566 18.5739 35.7929 18.3758 35.6831 18.1476C35.5733 17.9193 35.5208 17.6678 35.53 17.4147V8.1447C35.5252 8.1055 35.5293 8.0656 35.5422 8.0282C35.555 7.9908 35.5762 7.9569 35.6042 7.9289C35.6322 7.9009 35.6661 7.8797 35.7035 7.8669C35.7409 7.854 35.7808 7.8499 35.82 7.8547H37.5C37.69 7.8547 37.78 7.9547 37.78 8.1447V16.6947C37.78 17.0747 37.95 17.2647 38.3 17.2647C38.4484 17.2708 38.5968 17.254 38.74 17.2147C38.94 17.2147 39.05 17.2747 39.06 17.4547L39.21 18.7047C39.2172 18.7412 39.2165 18.7787 39.208 18.8149C39.1995 18.851 39.1833 18.885 39.1605 18.9143C39.1378 18.9437 39.109 18.9679 39.0762 18.9852C39.0433 19.0025 39.0071 19.0126 38.97 19.0147C38.602 19.1363 38.2175 19.2004 37.83 19.2047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M47.28 18.1347C46.4359 18.8322 45.375 19.2137 44.28 19.2137C43.185 19.2137 42.1242 18.8322 41.28 18.1347C40.5381 17.3857 40.1218 16.374 40.1218 15.3197C40.1218 14.2654 40.5381 13.2537 41.28 12.5047C42.1258 11.8108 43.186 11.4316 44.28 11.4316C45.374 11.4316 46.4342 11.8108 47.28 12.5047C48.0049 13.2606 48.4096 14.2674 48.4096 15.3147C48.4096 16.362 48.0049 17.3688 47.28 18.1247V18.1347ZM42.86 16.8147C43.2518 17.1696 43.7614 17.3661 44.29 17.3661C44.8186 17.3661 45.3283 17.1696 45.72 16.8147C46.0746 16.4071 46.2698 15.885 46.2698 15.3447C46.2698 14.8045 46.0746 14.2824 45.72 13.8747C45.3283 13.5199 44.8186 13.3233 44.29 13.3233C43.7614 13.3233 43.2518 13.5199 42.86 13.8747C42.5055 14.2824 42.3102 14.8045 42.3102 15.3447C42.3102 15.885 42.5055 16.4071 42.86 16.8147Z"
                    fill="currentColor"
                  />
                  <path
                    d="M57.66 11.6847C57.85 11.6847 57.94 11.7847 57.94 11.9747V19.1447C57.9575 19.6287 57.8669 20.1104 57.6749 20.5549C57.4829 20.9995 57.1943 21.3957 56.83 21.7147C56.0214 22.4042 54.9816 22.7615 53.92 22.7147C52.9612 22.7484 52.0151 22.4866 51.21 21.9647C50.8662 21.739 50.5725 21.4449 50.3472 21.1009C50.1218 20.7568 49.9696 20.3701 49.9 19.9647C49.9 19.7647 49.9 19.6747 50.17 19.6747H51.85C51.9213 19.6771 51.9905 19.7002 52.049 19.741C52.1076 19.7818 52.1531 19.8386 52.18 19.9047C52.289 20.2084 52.5062 20.4613 52.79 20.6147C53.1359 20.7932 53.5209 20.8826 53.91 20.8747C54.1448 20.8876 54.3798 20.8535 54.6013 20.7745C54.8228 20.6956 55.0263 20.5732 55.2 20.4147C55.3587 20.2489 55.4821 20.0526 55.5629 19.8378C55.6437 19.623 55.6801 19.394 55.67 19.1647V18.5347C55.0685 18.9771 54.3364 19.2059 53.59 19.1847C53.0676 19.2037 52.5468 19.117 52.0587 18.9297C51.5707 18.7423 51.1256 18.4584 50.75 18.0947C50.0291 17.3489 49.6261 16.3521 49.6261 15.3147C49.6261 14.2774 50.0291 13.2806 50.75 12.5347C51.1274 12.1743 51.5731 11.8931 52.0608 11.7076C52.5486 11.5221 53.0685 11.4361 53.59 11.4547C54.358 11.4344 55.1098 11.678 55.72 12.1447V11.9847C55.7154 11.9464 55.7194 11.9075 55.7317 11.8709C55.744 11.8344 55.7643 11.801 55.7911 11.7732C55.8179 11.7454 55.8506 11.724 55.8867 11.7104C55.9229 11.6968 55.9616 11.6915 56 11.6947L57.66 11.6847ZM53.78 17.4047C54.0376 17.4127 54.2939 17.364 54.5306 17.262C54.7673 17.1601 54.9788 17.0074 55.15 16.8147C55.4825 16.3854 55.6629 15.8577 55.6629 15.3147C55.6629 14.7717 55.4825 14.2441 55.15 13.8147C54.9794 13.6247 54.7692 13.4742 54.5343 13.374C54.2993 13.2738 54.0453 13.2263 53.79 13.2347C53.5294 13.2265 53.2702 13.275 53.0302 13.3769C52.7902 13.4788 52.5752 13.6316 52.4 13.8247C52.0317 14.2354 51.838 14.7735 51.86 15.3247C51.842 15.8705 52.0314 16.4029 52.39 16.8147C52.5656 17.0073 52.7807 17.1598 53.0206 17.2616C53.2605 17.3634 53.5195 17.4122 53.78 17.4047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M66.57 18.1347C65.7242 18.8286 64.664 19.2078 63.57 19.2078C62.476 19.2078 61.4158 18.8286 60.57 18.1347C59.8445 17.3771 59.4395 16.3687 59.4395 15.3197C59.4395 14.2708 59.8445 13.2623 60.57 12.5047C61.4166 11.8126 62.4765 11.4345 63.57 11.4345C64.6635 11.4345 65.7234 11.8126 66.57 12.5047C67.2949 13.2606 67.6996 14.2674 67.6996 15.3147C67.6996 16.362 67.2949 17.3688 66.57 18.1247V18.1347ZM62.14 16.8147C62.3317 16.9971 62.5577 17.1396 62.8049 17.234C63.0521 17.3284 63.3155 17.3729 63.58 17.3647C63.8428 17.3715 64.1044 17.3265 64.3498 17.2321C64.5952 17.1377 64.8195 16.9959 65.01 16.8147C65.3588 16.4043 65.5503 15.8833 65.5503 15.3447C65.5503 14.8061 65.3588 14.2851 65.01 13.8747C64.8195 13.6936 64.5952 13.5517 64.3498 13.4574C64.1044 13.363 63.8428 13.3179 63.58 13.3247C63.3155 13.3166 63.0521 13.361 62.8049 13.4554C62.5577 13.5498 62.3317 13.6924 62.14 13.8747C61.7913 14.2851 61.5998 14.8061 61.5998 15.3447C61.5998 15.8833 61.7913 16.4043 62.14 16.8147Z"
                    fill="currentColor"
                  />
                  <path
                    d="M71.31 9.9847C71.0457 10.2161 70.7063 10.3436 70.355 10.3436C70.0037 10.3436 69.6644 10.2161 69.4 9.9847C69.2802 9.8716 69.1847 9.7352 69.1194 9.5839C69.0542 9.4326 69.0205 9.2695 69.0205 9.1047C69.0205 8.9399 69.0542 8.7769 69.1194 8.6255C69.1847 8.4742 69.2802 8.3378 69.4 8.2247C69.6671 7.9991 70.0054 7.8754 70.355 7.8754C70.7046 7.8754 71.0429 7.9991 71.31 8.2247C71.4299 8.3378 71.5254 8.4742 71.5906 8.6255C71.6559 8.7769 71.6895 8.9399 71.6895 9.1047C71.6895 9.2695 71.6559 9.4326 71.5906 9.5839C71.5254 9.7352 71.4299 9.8716 71.31 9.9847ZM71.52 19.2047C70.9256 19.2339 70.3383 19.0651 69.85 18.7247C69.6497 18.5717 69.4888 18.3729 69.381 18.145C69.2731 17.9171 69.2213 17.6667 69.23 17.4147V11.9747C69.2252 11.9355 69.2293 11.8956 69.2422 11.8582C69.255 11.8208 69.2762 11.7869 69.3042 11.7589C69.3322 11.7309 69.3661 11.7097 69.4035 11.6969C69.4409 11.684 69.4808 11.6799 69.52 11.6847H71.2C71.39 11.6847 71.48 11.7847 71.48 11.9747V16.6947C71.48 17.0747 71.65 17.2647 71.99 17.2647C72.1417 17.2702 72.2933 17.2533 72.44 17.2147C72.64 17.2147 72.75 17.2747 72.76 17.4547L72.91 18.7047C72.9172 18.7412 72.9165 18.7787 72.908 18.8149C72.8995 18.851 72.8833 18.885 72.8605 18.9143C72.8378 18.9437 72.809 18.9679 72.7762 18.9852C72.7433 19.0025 72.7071 19.0126 72.67 19.0147C72.2988 19.137 71.9109 19.2011 71.52 19.2047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M79.09 11.4447C79.6148 11.424 80.1383 11.5089 80.6296 11.6944C81.1209 11.88 81.57 12.1623 81.95 12.5247C82.6572 13.2837 83.0504 14.2824 83.0504 15.3197C83.0504 16.357 82.6572 17.3558 81.95 18.1147C81.5718 18.4804 81.1233 18.7655 80.6317 18.9528C80.1401 19.1402 79.6157 19.2259 79.09 19.2047C78.3412 19.2214 77.6073 18.9932 77 18.5547V22.1647C77 22.3547 76.9 22.4447 76.71 22.4447H75.03C74.9917 22.4519 74.9522 22.4496 74.9149 22.4381C74.8777 22.4265 74.8438 22.4061 74.8162 22.3785C74.7887 22.3509 74.7682 22.3171 74.7567 22.2798C74.7451 22.2426 74.7429 22.2031 74.75 22.1647V13.9647C74.7618 13.8845 74.7546 13.8027 74.7292 13.7257C74.7037 13.6488 74.6605 13.5788 74.6032 13.5215C74.5459 13.4642 74.476 13.4211 74.399 13.3956C74.3221 13.3701 74.2402 13.363 74.16 13.3747H73.83C73.61 13.3747 73.5 13.2947 73.5 13.1347V11.9547C73.4948 11.8817 73.5148 11.8091 73.5567 11.7491C73.5985 11.689 73.6597 11.6451 73.73 11.6247C74.0759 11.499 74.442 11.438 74.81 11.4447C75.177 11.4122 75.5453 11.4901 75.8678 11.6682C76.1902 11.8464 76.4522 12.1168 76.62 12.4447C76.9421 12.1189 77.3273 11.8622 77.752 11.6902C78.1767 11.5183 78.632 11.4347 79.09 11.4447ZM77.53 16.8147C77.7083 17.0011 77.9225 17.1494 78.1597 17.2507C78.3969 17.352 78.6521 17.4042 78.91 17.4042C79.1679 17.4042 79.4232 17.352 79.6603 17.2507C79.8975 17.1494 80.1117 17.0011 80.29 16.8147C80.6656 16.3958 80.8629 15.8469 80.84 15.2847C80.8662 14.7221 80.6684 14.1719 80.29 13.7547C80.1117 13.5684 79.8975 13.4201 79.6603 13.3188C79.4232 13.2174 79.1679 13.1652 78.91 13.1652C78.6521 13.1652 78.3969 13.2174 78.1597 13.3188C77.9225 13.4201 77.7083 13.5684 77.53 13.7547C77.1662 14.1793 76.9768 14.726 77 15.2847C76.9797 15.843 77.1688 16.3887 77.53 16.8147Z"
                    fill="currentColor"
                  />
                  <path
                    d="M87.77 19.2047C86.8723 19.2416 85.9822 19.0269 85.2 18.5847C84.8862 18.3957 84.619 18.1384 84.4181 17.832C84.2173 17.5256 84.0881 17.1779 84.04 16.8147C84.04 16.6147 84.11 16.5147 84.33 16.5147H85.8C85.8699 16.5175 85.9378 16.5394 85.996 16.5783C86.0542 16.6171 86.1006 16.6712 86.13 16.7347C86.34 17.2747 86.89 17.5447 87.77 17.5447C88.077 17.5588 88.3826 17.4969 88.66 17.3647C88.7558 17.3215 88.8379 17.2531 88.8978 17.1668C88.9577 17.0805 88.993 16.9795 89 16.8747C89 16.6147 88.84 16.4347 88.52 16.3147C88.1405 16.1884 87.7481 16.1045 87.35 16.0647C86.8785 16.0113 86.4109 15.9278 85.95 15.8147C85.5018 15.7133 85.0943 15.4799 84.78 15.1447C84.5949 14.9169 84.4587 14.6534 84.3797 14.3707C84.3008 14.088 84.2809 13.792 84.3212 13.5013C84.3616 13.2105 84.4613 12.9311 84.6142 12.6806C84.7671 12.43 84.9699 12.2136 85.21 12.0447C85.9308 11.5856 86.7765 11.3619 87.63 11.4047C88.4564 11.3768 89.274 11.5812 89.99 11.9947C90.2786 12.1582 90.527 12.3839 90.7173 12.6555C90.9076 12.9271 91.0349 13.2377 91.09 13.5647C91.09 13.7647 91 13.8647 90.82 13.8647H89.34C89.2777 13.8684 89.2157 13.8532 89.1622 13.8211C89.1087 13.789 89.0661 13.7414 89.04 13.6847C88.9411 13.4479 88.7549 13.2581 88.52 13.1547C88.255 13.0161 87.959 12.9472 87.66 12.9547C87.3669 12.9388 87.0745 12.9973 86.81 13.1247C86.7168 13.1607 86.6366 13.2237 86.5795 13.3057C86.5225 13.3877 86.4913 13.4849 86.49 13.5847C86.4964 13.7215 86.5465 13.8526 86.6329 13.9588C86.7193 14.065 86.8374 14.1406 86.97 14.1747C87.354 14.3195 87.7533 14.4201 88.16 14.4747C88.6277 14.5363 89.0917 14.6231 89.55 14.7347C89.9982 14.8362 90.4057 15.0695 90.72 15.4047C90.8882 15.5894 91.018 15.8055 91.1021 16.0407C91.1862 16.2758 91.2229 16.5253 91.21 16.7747C91.2186 17.1204 91.1375 17.4624 90.9745 17.7674C90.8115 18.0723 90.5722 18.3298 90.28 18.5147C89.5329 18.9944 88.6574 19.235 87.77 19.2047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M101.78 18.7047C101.786 18.7402 101.784 18.7765 101.776 18.8114C101.767 18.8464 101.752 18.8792 101.73 18.9081C101.709 18.937 101.682 18.9613 101.651 18.9796C101.62 18.9979 101.586 19.0098 101.55 19.0147C101.185 19.1339 100.804 19.198 100.42 19.2047C100.04 19.2441 99.656 19.1847 99.306 19.0323C98.955 18.8799 98.65 18.6396 98.42 18.3347C97.714 18.942 96.8 19.2536 95.87 19.2047C95.438 19.2246 95.007 19.1539 94.604 18.9972C94.201 18.8405 93.835 18.6012 93.53 18.2947C93.227 17.9736 92.9922 17.5946 92.8392 17.1805C92.6863 16.7664 92.6186 16.3257 92.64 15.8847V11.9747C92.64 11.7847 92.73 11.6847 92.92 11.6847H94.6C94.79 11.6847 94.88 11.7847 94.88 11.9747V15.5847C94.862 16.0345 95.015 16.4743 95.31 16.8147C95.457 16.9707 95.636 17.0933 95.834 17.1744C96.032 17.2555 96.246 17.2931 96.46 17.2847C96.679 17.2943 96.898 17.2604 97.104 17.1848C97.31 17.1093 97.499 16.9937 97.66 16.8447C97.812 16.6877 97.931 16.5011 98.008 16.2964C98.086 16.0917 98.12 15.8733 98.11 15.6547V11.9747C98.11 11.7847 98.2 11.6847 98.39 11.6847H100.09C100.28 11.6847 100.37 11.7847 100.37 11.9747V16.6847C100.37 17.0747 100.54 17.2647 100.87 17.2647C101.025 17.2707 101.18 17.2539 101.33 17.2147C101.368 17.2041 101.408 17.2022 101.446 17.2092C101.485 17.2161 101.521 17.2317 101.553 17.2548C101.585 17.2779 101.611 17.3079 101.63 17.3425C101.648 17.3771 101.658 17.4155 101.66 17.4547L101.78 18.7047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M117.67 18.7047C117.679 18.7405 117.68 18.7779 117.673 18.8141C117.665 18.8502 117.65 18.8844 117.628 18.914C117.606 18.9436 117.578 18.968 117.545 18.9854C117.513 19.0029 117.477 19.0129 117.44 19.0147C117.068 19.1356 116.681 19.1997 116.29 19.2047C115.695 19.2354 115.108 19.0665 114.62 18.7247C114.409 18.5783 114.238 18.3822 114.121 18.1537C114.004 17.9252 113.945 17.6713 113.95 17.4147V15.0647C113.971 14.6163 113.821 14.1766 113.53 13.8347C113.39 13.6784 113.216 13.5552 113.023 13.4739C112.829 13.3927 112.62 13.3554 112.41 13.3647C112.221 13.3576 112.033 13.3935 111.859 13.4697C111.686 13.5459 111.533 13.6605 111.41 13.8047C111.146 14.1398 111.011 14.5586 111.03 14.9847V18.6747C111.03 18.8647 110.94 18.9647 110.75 18.9647H109.06C109.021 18.9696 108.981 18.9654 108.944 18.9526C108.906 18.9397 108.872 18.9185 108.844 18.8905C108.816 18.8626 108.795 18.8286 108.782 18.7912C108.769 18.7538 108.765 18.714 108.77 18.6747V15.0647C108.792 14.6212 108.653 14.1846 108.38 13.8347C108.258 13.6877 108.105 13.5694 107.932 13.4882C107.76 13.407 107.571 13.3648 107.38 13.3647C107.176 13.3565 106.973 13.3914 106.783 13.4673C106.593 13.5431 106.422 13.6581 106.28 13.8047C105.994 14.1291 105.847 14.5529 105.87 14.9847V18.6747C105.875 18.714 105.871 18.7538 105.858 18.7912C105.845 18.8286 105.824 18.8626 105.796 18.8905C105.768 18.9185 105.734 18.9397 105.697 18.9526C105.659 18.9654 105.619 18.9696 105.58 18.9647H103.95C103.76 18.9647 103.67 18.8647 103.67 18.6747V13.9647C103.682 13.8845 103.675 13.8027 103.649 13.7257C103.624 13.6488 103.581 13.5788 103.523 13.5215C103.466 13.4642 103.396 13.4211 103.319 13.3956C103.242 13.3701 103.16 13.363 103.08 13.3747H102.75C102.53 13.3747 102.42 13.2947 102.42 13.1347V11.9547C102.415 11.8817 102.435 11.8091 102.477 11.7491C102.519 11.689 102.58 11.6451 102.65 11.6247C102.996 11.499 103.362 11.438 103.73 11.4447C104.083 11.4146 104.438 11.485 104.753 11.6478C105.068 11.8106 105.33 12.0591 105.51 12.3647C105.847 12.045 106.247 11.7982 106.684 11.6399C107.121 11.4816 107.586 11.4152 108.05 11.4447C108.501 11.4227 108.95 11.5072 109.362 11.6914C109.774 11.8756 110.136 12.1542 110.42 12.5047C110.751 12.145 111.158 11.8634 111.611 11.68C112.064 11.4967 112.552 11.4164 113.04 11.4447C113.476 11.4243 113.912 11.4946 114.32 11.6513C114.728 11.8079 115.099 12.0474 115.41 12.3547C115.714 12.6752 115.949 13.0541 116.102 13.4684C116.255 13.8826 116.323 14.3237 116.3 14.7647V16.6947C116.3 17.0747 116.47 17.2647 116.79 17.2647C116.945 17.2719 117.1 17.2551 117.25 17.2147C117.457 17.2147 117.567 17.2947 117.58 17.4547L117.67 18.7047Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-center lg:gap-12">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Services{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 lg:text-center">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
