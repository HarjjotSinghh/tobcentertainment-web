"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import {
  DollarSign,
  DollarSignIcon,
  LightbulbIcon,
  LucidePersonStanding,
  TrendingUp,
  UsersIcon,
  VideoIcon,
  WebhookIcon,
} from "lucide-react"
import {
  A11y,
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper/modules"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"

import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"
import "swiper/css/free-mode"
// Import Swiper styles
import "swiper/css"
import Image from "next/image"
import { RxDashboard, RxPerson } from "react-icons/rx"

import { celebreties } from "@/config/site"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Button } from "./ui/button"

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
  const [screenSize, setScreenSize] = useState<null | "lg" | "md" | "sm">(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("sm")
      } else if (window.innerWidth < 1024) {
        setScreenSize("md")
      } else {
        setScreenSize("lg")
      }
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="w-full text-foreground">
      <section className="flex lg:flex-col flex-col lg:gap-16 gap-12 items-center justify-center bg-accent/[0.01] px-8 py-32 pt-32 relativ w-fulle relative overflow-hidden">
        <Image
          src={"/waves2.svg"}
          alt="waves"
          width={1000}
          height={600}
          className="absolute opacity-70 left-0 inset-0 -z-10 md:max-w-xl h-auto w-full scale-x-[-1] top-48"
        ></Image>
        <Image
          src={"/waves2.svg"}
          alt="waves"
          width={1000}
          height={600}
          className="absolute opacity-70 -top-24 right-0 ml-auto inset-0 -z-10 md:max-w-xl h-auto w-full"
        ></Image>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--accent)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent)/0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>{" "}
        <div className="flex flex-col items-center justify-center">
          <h1 className="tracking-tighter text-balance text-center lg:text-6xl md:text-5xl text-4xl font-extrabold text-foreground">
            Match Your <span className="text-accent">Brand</span> With
            <br /> The Perfect Influencer
          </h1>
          <p className="mt-6 text-foreground/80 max-w-sm mx-auto font-semibold text-center text-lg">
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
        <div className="">
          <img
            draggable={false}
            src="https://i.ibb.co/phBB5xk/Screenshot-2024-08-07-133311.png"
            alt="Influencers"
            className="rounded-lg select-none xl:max-w-[530px] lg:max-w-[500px] h-auto"
            width="1000"
            height="600"
          />
        </div>
      </section>
      <section className="px-8 py-24 relative">
        <div className="relative size-full max-w-7xl mx-auto">
          <Image
            src={"/circle.png"}
            alt="circle"
            width={1000}
            height={600}
            className="!opacity-60 absolute md:left-24 left-4 scale-y-90  blur-3xl inset-0 -z-10 md:max-w-sm h-auto w-full -top-24"
          ></Image>
          <Image
            src={"/circle.png"}
            alt="circle"
            width={1000}
            height={600}
            className="!opacity-60 absolute right-0 ml-auto mr-28 scale-y-90  blur-3xl inset-0 -z-10 md:max-w-sm h-auto w-full top-52"
          ></Image>
        </div>
        <div className="absolute inset-0 -z-[50] h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_0%,#fff_40%,hsl(var(--accent)/0.05)_100%)]"></div>
        <div className="mx-auto max-w-7xl z-10">
          <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-extrabold">
            <span className="font-medium">The Power Of</span>
            <br /> Authentic Influencer Relationship
          </h2>
          <p className="mt-4 text-center text-lg text-foreground/80">
            We effectively harness the credibility and sway of social media
            influencers.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 mb-16">
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <h3 className="text-center text-5xl font-extrabold">90%</h3>
              <p className="mt-2 text-center text-foreground/80">
                Engagement Rate
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <h3 className="text-center text-5xl font-extrabold">200%</h3>
              <p className="mt-2 text-center text-foreground/80">
                Increase In Views
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <h3 className="text-center text-5xl font-extrabold">85%</h3>
              <p className="mt-2 text-center text-foreground/80">
                Follower Growth
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <h3 className="text-center text-5xl font-extrabold">98%</h3>
              <p className="mt-2 text-center text-foreground/80">Brand Trust</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className=" px-8 py-24 relative
      "
      >
        <div className="relative size-full max-w-7xl mx-auto">
          <Image
            src={"/circle.png"}
            alt="circle"
            width={1000}
            height={600}
            className="!opacity-60 absolute lg:left-72 left-0 scale-y-90  blur-3xl inset-0 -z-10 md:max-w-sm h-auto w-full -top-24"
          ></Image>
          <Image
            src={"/circle.png"}
            alt="circle"
            width={1000}
            height={600}
            className="!opacity-60 absolute ml-auto right-0 left-72 scale-y-90  blur-3xl inset-0 -z-10 md:max-w-sm h-auto w-full top-24 xl:mr-56 lg:mr-44 md:mr-32 sm:mr-0"
          ></Image>
          <Image
            src={"/circle.png"}
            alt="circle"
            width={1000}
            height={600}
            className="!opacity-60 absolute mt-auto top-[900px] -left-64 scale-y-90 opacity-50 blur-3xl inset-0 -z-10 md:max-w-sm h-auto w-full"
          ></Image>
          <Image
            src={"/circle.png"}
            alt="circle"
            width={1000}
            height={600}
            className="!opacity-60 absolute mt-auto top-[1300px] ml-auto right-52 scale-y-90 opacity-50 blur-3xl inset-0 -z-10 md:max-w-sm h-auto w-full"
          ></Image>
        </div>
        <div className="absolute inset-0 -z-[50] h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_0%,#fff_40%,hsl(var(--accent)/0.05)_100%)] scale-y-[-1]"></div>
        <div className=" mx-auto max-w-7xl">
          <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-extrabold">
            <span className="font-medium">Top-tier</span>
            <br /> Influencer Marketing Solutions
          </h2>
          <p className="mt-4 text-center text-lg text-foreground/80">
            Elevate your brand with industry-leading stratergies.
          </p>
          <div className=" grid grid-cols-1 xl:gap-16 lg:gap-12 md:gap-10 gap-8 mt-16 lg:grid-cols-3  md:grid-cols-2">
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <div className="p-8 shadow-xl mb-8 shadow-accent/[0.08] bg-accent/5 mx-auto rounded-full w-fit">
                <LucidePersonStanding className="size-10 text-foreground" />
              </div>
              <h3 className="md:text-3xl sm:text-2xl text-xl text-center font-bold">
                Influencer Selection
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                We help you find the right influencers, considering the target
                audience, campaign objectives, and budget constraints.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <div className="p-8 shadow-xl mb-8 shadow-accent/[0.08] bg-accent/5 mx-auto rounded-full w-fit">
                <VideoIcon className="size-10 text-foreground" />
              </div>
              <h3 className="md:text-3xl sm:text-2xl text-xl text-center font-bold">
                Content Creation
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                Our team collaborates with influencers to create authentic,
                engaging, and high-quality content that resonates with your
                target audience.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <div className="p-8 shadow-xl mb-8 shadow-accent/[0.08] bg-accent/5 mx-auto rounded-full w-fit">
                <UsersIcon className="size-10 text-foreground" />
              </div>
              <h3 className="md:text-3xl sm:text-2xl text-xl text-center font-bold">
                Campaign Management
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                We handle the entire campaign, managing influencer
                communication, content approvals, and performance tracking.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <div className="p-8 shadow-xl mb-8 shadow-accent/[0.08] bg-accent/5 mx-auto rounded-full w-fit">
                <LightbulbIcon className="size-10 text-foreground" />
              </div>
              <h3 className="md:text-3xl sm:text-2xl text-xl text-center font-bold">
                Strategy & Ideation
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                Our expert strategists brainstorm innovative influencer
                campaigns tailored to your brand’s goals, leveraging market
                insights for maximum impact.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <div className="p-8 shadow-xl mb-8 shadow-accent/[0.08] bg-accent/5 mx-auto rounded-full w-fit">
                <TrendingUp className="size-10 text-foreground" />
              </div>
              <h3 className="md:text-3xl sm:text-2xl text-xl text-center font-bold">
                Deep Insights
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                We provide comprehensive performance analysis and reporting to
                help you understand the impact of your influencer marketing
                campaigns.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <div className="p-8 shadow-xl mb-8 shadow-accent/[0.08] bg-accent/5 mx-auto rounded-full w-fit">
                <DollarSignIcon className="size-10 text-foreground" />
              </div>
              <h3 className="md:text-3xl sm:text-2xl text-xl text-center font-bold">
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
      <section className="px-8 pt-24 pb-36 relative">
        <div className="absolute bottom-0 -z-[1] left-0 right-0 top-0 bg-[linear-gradient(to_right,hsl(var(--accent)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent)/0.08)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_25%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 -z-[100] h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_0%,#fff_40%,hsl(var(--accent)/0.05)_100%)]"></div>
        <div className="mx-auto max-w-7xl">
          <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium">
            Crafted by <span className="font-extrabold">Specialists</span>,
            <br />
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
              <div className="flex flex-col-reverse md:flex-row-reverse items-center md:items-start gap-16">
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Image
                      draggable={false}
                      src="/celebrities/8.webp"
                      alt="Influencer 3"
                      className="rounded-lg select-none"
                      width="800"
                      height="1200"
                      style={{ aspectRatio: "200/300", objectFit: "cover" }}
                    />
                  </div>
                  <div className="relative">
                    <Image
                      draggable={false}
                      src="/celebrities/9.webp"
                      alt="Influencer 4"
                      className="rounded-lg select-none"
                      width="800"
                      height="1200"
                      style={{ aspectRatio: "200/300", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className="tracking-tighter text-accent text-2xl font-bold">
                    Brand
                  </h2>
                  <h1 className="tracking-tighter text-5xl font-extrabold !mb-8">
                    Iris Home Fragrances
                  </h1>
                  <p className="text-lg">
                    <strong>Objective:</strong> Enhance brand awareness and
                    drive in-store sales.
                  </p>
                  <p className="text-lg">
                    <strong>Solution:</strong> Collaborated with 12 micro
                    lifestyle influencers to create informative and
                    aesthetically pleasing content promoting in-store discount
                    sales.
                  </p>
                  <p className="text-lg">
                    <strong>Result:</strong> Achieved a 30% increase in foot
                    traffic and a 25% boost in sales within the same month.
                  </p>
                  <p className="text-lg">
                    <strong>Highlight Festive Offers:</strong> Increase
                    visibility of festive offers through influencer promotion.
                  </p>
                  <Button
                    size={"lg"}
                    className="!mt-12 rounded-full bg-[size:300%_300%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out object-center bg-gradient-to-r from-accent via-primary to-accent lg:text-2xl text-xl py-10 px-12 bg-primary text-white font-bold shadow-[0px_6px_40px_hsl(var(--accent)/0.5)]"
                  >
                    Get Started Today!
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="relative">
                    <Image
                      draggable={false}
                      src="/celebrities/3.webp"
                      alt="Influencer 3"
                      className="rounded-lg select-none"
                      width="800"
                      height="1200"
                      style={{ aspectRatio: "200/300", objectFit: "cover" }}
                    />
                  </div>
                  <div className="relative">
                    <Image
                      draggable={false}
                      src="/celebrities/4.webp"
                      alt="Influencer 4"
                      className="rounded-lg select-none"
                      width="800"
                      height="1200"
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
                    brand recognition through strategic influencer
                    collaborations.
                  </p>
                  <p className="text-lg">
                    <strong>Increase Sales:</strong> Drive higher sales figures
                    by leveraging influencer reach.
                  </p>
                  <p className="text-lg">
                    <strong>Promote Product Range:</strong> Highlight and
                    promote various products effectively.
                  </p>
                  <p className="text-lg">
                    <strong>Highlight Festive Offers:</strong> Increase
                    visibility of festive offers through influencer promotion.
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
        </div>
      </section>
      <section className="bg-accent/[0.01] px-8 py-24 relative">
        <Image
          src={"/circle.png"}
          alt="circle"
          width={1000}
          height={600}
          className="absolute ml-auto right-48 scale-y-90  blur-3xl inset-0 -z-10 md:max-w-sm h-auto w-full top-72 mr-56"
        ></Image>
        <div className="absolute inset-0 -z-[50] h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_0%,#fff_40%,hsl(var(--accent)/0.05)_100%)] scale-y-[-1]"></div>
        <div className="flex-row sm:flex hidden -mt-44 flex-nowrap justify-center md:gap-12 gap-8 overflow-x-hidden">
          {celebreties.map((celeb, i) => (
            <div
              className={`${
                i % 2 === 0 ? (i % 3 === 0 ? "mt-48" : "mt-24") : "mt-8"
              }`}
            >
              <Image
                draggable={false}
                src={celeb.imageSrc}
                alt="Influencer"
                className="rounded-xl aspect-[3.75/5] min-w-[187px] object-cover select-none"
                width="187"
                height="250"
              />
              <div className="flex flex-row justify-center gap-2 mt-4">
                <Image
                  draggable={false}
                  src={celeb.imageSrc}
                  alt="Influencer"
                  className="rounded-full h-fit flex-1 aspect-square object-cover max-w-[40px]"
                  width="40"
                  height="40"
                />
                <div className="flex w-fit flex-col justify-start gap-2">
                  <h3 className="text-sm font-semibold">{celeb.name}</h3>
                  <p className="text-sm -mt-2">{celeb.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {screenSize === "sm" && (
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={true}
            effect="cretive"
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, bulletClass: "text-primary" }}
            centeredSlides={true}
            className="overflow-visible"
          >
            {celebreties.map((celeb, i) => (
              <SwiperSlide className="overflow-visible">
                <div className="overflow-visible grid shadow-xl shadow-foreground/5 items-start bg-accent/[0.01] rounded-xl justify-center flex-col lg:p-8 p-6 h-full">
                  <div className="grid gap-3 lg:gap-5">
                    <div className="flex flex-col justify-center gap-4 items-center space-x-3">
                      <div className="">
                        <Image
                          draggable={false}
                          src={celeb.imageSrc}
                          alt="Profile"
                          className="object-cover w-full h-full aspect-[374/500] rounded-lg"
                          width="374"
                          height="500"
                        />
                      </div>
                      <div className="text-xl font-bold tracking-tight text-center">
                        <div>{celeb.name}</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          {celeb.tag}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium mt-8">
          Our <span className="font-extrabold">Story</span>
        </h2>
        <p className="mt-8 text-center text-lg text-foreground max-w-4xl mx-auto">
          At TOBC Entertainment, we specialize in empowering brands to harness
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
      <section className="bg-background px-8 py-24 relative">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,hsl(var(--accent)/0.12)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent)/0.12)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 size-full bg-[radial-gradient(circle_850px_at_50%_0px,#fbfbfb36,hsl(var(--background)))]"></div>
        <div className="relative size-full max-w-7xl mx-auto">
          <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium">
            Setting the <span className="font-extrabold">Standard</span>
          </h2>
          <p className="mt-8 mb-8 text-center text-lg text-foreground max-w-3xl mx-auto">
            Influencer marketing is an art of connection, not just numbers. At
            TOBC Entertainment, we specialize in crafting captivating narratives
            that resonate deeply with your audience.
            <br />
            Discover what sets us apart.
          </p>
          <div className="flex lg:flex-row flex-col lg:gap-16 gap-8 items-center justify-center px-4 py-32 pt-12">
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
                    • <strong>Customized, innovative strategies</strong>{" "}
                    tailored for your brand and audience.
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
                src="https://images.pexels.com/photos/6248976/pexels-photo-6248976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Influencers"
                className="rounded-lg select-none xl:max-w-xl max-w-lg w-full h-auto"
                width="1000"
                height="600"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-accent/[0.01] px-8 py-24 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(hsl(var(--accent)/0.1)_1.5px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="mx-auto max-w-7xl">
          <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium">
            That’s <span className="font-extrabold">how we roll!</span>
          </h2>
          <p className="mt-4 text-center text-lg text-foreground/80">
            Discover how we craft top influencer strategies, start to finish.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="tracking-tight text-3xl text-left mt-4 font-bold">
                Campaign Overview
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Share campaign details for a tailored and effective strategy.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="tracking-tight text-3xl text-left mt-4 font-bold">
                Deliverables Determination
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Specify deliverables to properly design your influencer
                campaign.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="tracking-tight text-3xl text-left mt-4 font-bold">
                Budget Allocation
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Decide your budget and get the desired result.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="tracking-tight text-3xl text-left mt-4 font-bold">
                List Presentation
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Get ideal influencers for your brand in less than 48 hours.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="tracking-tight text-3xl text-left mt-4 font-bold">
                Quotation Process
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Shortlisted influencers provide transparent quotes for budgetary
                compliance.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
              <img
                draggable={false}
                src="https://growth.chingari.io/wp-content/uploads/2024/06/Campaign-Overview.png"
                alt="featue image"
                width={100}
                height={100}
                className="aspect-square -mt-16"
              />
              <h3 className="tracking-tight text-3xl text-left mt-4 font-bold">
                Finalization
              </h3>
              <p className="mt-2 text-left text-foreground/80">
                Get the final campaign delivered directly to you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 py-24 relative">
        <div className="absolute overflow-hidden inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--accent)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--accent)/0.05)_1px,transparent_1px)] bg-[size:24px_24px]">
          <div className="absolute left-0 right-0 top-12 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-accent/30 opacity-20 blur-[100px]"></div>
        </div>
        <div className="mx-auto max-w-7xl">
          <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium">
            Our <span className="font-extrabold">Clients</span>
          </h2>
          <p className="mt-4 text-center text-lg text-foreground/80">
            We help brands and agencies excel in influencer marketing, globally.
          </p>
          <section className="py-8">
            <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)] mix-blend-multiply">
              <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
                {Array.from({ length: 27 }).map((i: any, index: number) => (
                  <Image
                    draggable={false}
                    width={400}
                    height={300}
                    className="mx-8 inline h-32 rounded-lg object-cover w-auto aspect-[4/3]"
                    src={`/brands/${index + 1}.webp`}
                    alt={`Brand ${index + 1}`}
                  />
                ))}
              </div>
              <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
                {Array.from({ length: 27 }).map((i: any, index: number) => (
                  <Image
                    draggable={false}
                    width={400}
                    height={300}
                    className="mx-8 inline h-32 rounded-lg object-cover w-auto aspect-[4/3]"
                    src={`/brands/${index + 1}.webp`}
                    alt={`Brand ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className=" px-8 py-24 relative">
        <div className="absolute inset-0 -z-[50] h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_0%,#fff_40%,hsl(var(--accent)/0.05)_100%)]"></div>
        <div className="relative size-full max-w-7xl mx-auto">
          <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-medium">
            The <span className="font-extrabold">Trust We Earn</span>
          </h2>
          <p className="mt-4 text-center text-lg text-foreground/80">
            Our clients can’t stop raving about us!
          </p>
          {/* {console.log(screenSize)} */}
          <div className="w-full max-w-7xl mx-auto mt-8 rounded-xl">
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={50}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 32,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 32,
                },
                // when window width is >= 640px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              allowTouchMove={true}
              effect="cretive"
              slidesPerView={1}
              navigation
              pagination={{ clickable: true, bulletClass: "text-primary" }}
              centeredSlides={true}
            >
              {/* {console.log(screenSize)} */}
              <SwiperSlide className="overflow-visible">
                <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
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
                          src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Emily Patel</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          Marketing Manager
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="overflow-visible">
                <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
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
                          src="https://images.pexels.com/photos/20094341/pexels-photo-20094341/free-photo-of-portrait-of-man-wearing-brown-cap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Adam Turner</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          CEO, Horizon Inc
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="overflow-visible">
                <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
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
                          src="https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Sophia Lee</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          Customer Support Representative
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="overflow-visible">
                <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
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
                          src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Emily Patel</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          Marketing Manager
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="overflow-visible">
                <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
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
                          src="https://images.pexels.com/photos/20094341/pexels-photo-20094341/free-photo-of-portrait-of-man-wearing-brown-cap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Adam Turner</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          CEO, Horizon Inc
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="overflow-visible">
                <div className="rounded-xl bg-gradient-to-tl from-accent/15 from-0% to-85% bg-[size:200%_200%] to-card [box-shadow:inset_0_0_80px_0px_rgba(255,255,255,0.9),0_3px_40px_0px_hsl(var(--accent)/0.01)] backdrop-blur-md md:p-8 p-6 border-secondary border-2">
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
                          src="https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Sophia Lee</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          Customer Support Representative
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="px-8 py-24 relative">
        <Image
          src="/waves2.svg"
          alt="waves"
          width={1000}
          height={600}
          className="absolute opacity-70 left-0 inset-0 -z-10 md:max-w-xl h-auto w-full scale-x-[-1] -top-48"
        />
        <Image
          src="/waves2.svg"
          alt="waves"
          width={1000}
          height={600}
          className="absolute opacity-70 right-0 ml-auto inset-0 -z-10 md:max-w-xl h-auto w-full top-24"
        />
        <div className="absolute inset-0 -z-[50] h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_0%,#fff_40%,hsl(var(--accent)/0.05)_100%)] scale-y-[-1]"></div>
        <div className="relative size-full max-w-7xl mx-auto">
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
              className="bg-red-50/50 backdrop-blur-sm shadow-lg shadow-black/[0.02] rounded-xl py-2 px-8"
              value="item-1"
            >
              <AccordionTrigger className="text-left">
                What Types of Influencers Do You Work With?
              </AccordionTrigger>
              <AccordionContent>
                Content regarding the types of influencers the agency works
                with.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-red-50/50 backdrop-blur-sm shadow-lg shadow-black/[0.02] rounded-xl py-2 px-8"
              value="item-2"
            >
              <AccordionTrigger className="text-left">
                How does our agency select influencers?
              </AccordionTrigger>
              <AccordionContent>
                Content explaining how the agency selects influencers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-red-50/50 backdrop-blur-sm shadow-lg shadow-black/[0.02] rounded-xl py-2 px-8"
              value="item-3"
            >
              <AccordionTrigger className="text-left">
                Can I choose the influencers I want to work with?
              </AccordionTrigger>
              <AccordionContent>
                Content about choosing influencers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-red-50/50 backdrop-blur-sm shadow-lg shadow-black/[0.02] rounded-xl py-2 px-8"
              value="item-4"
            >
              <AccordionTrigger className="text-left">
                How much does an influencer marketing campaign cost?
              </AccordionTrigger>
              <AccordionContent>
                Content discussing the cost of an influencer marketing campaign.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-red-50/50 backdrop-blur-sm shadow-lg shadow-black/[0.02] rounded-xl py-2 px-8"
              value="item-5"
            >
              <AccordionTrigger className="text-left">
                How do you ensure the content aligns with our brand?
              </AccordionTrigger>
              <AccordionContent>
                Content explaining how the agency ensures content alignment with
                the brand.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
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
            className="mt-8 text-xl bg-background hover:bg-background/95 text-accent rounded-full h-14 px-10"
          >
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  )
}
