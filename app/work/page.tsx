"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { PlayCircle, Radio, Video } from "lucide-react"

import { advertisements, filmProjects, musicProjects } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const tabs = [
  {
    id: "advertisement",
    label: "Advertisement",
    icon: <Video className="w-5 h-5" />,
  },
  {
    id: "music",
    label: "Music",
    icon: <Radio className="w-5 h-5" />,
  },
  {
    id: "films",
    label: "Films",
    icon: <PlayCircle className="w-5 h-5" />,
  },
]

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("advertisement")

  return (
    <main className="min-h-screen">
      {/* Hero Section with Tabs */}
      <section className="relative overflow-hidden bg-accent/[0.03] lg:py-20 py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="tracking-normal text-balance lg:text-6xl md:text-5xl text-4xl font-extrabold mb-6 uppercase">
              Our <span className="text-accent">Work</span>
            </h1>
            <p className="text-lg text-foreground/80">
              Explore our diverse portfolio across advertisement, music, and
              film production. Each project represents our commitment to
              excellence and creativity.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-background/50 backdrop-blur-sm p-2 rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out",
                    activeTab === tab.id
                      ? "bg-accent text-white shadow-lg"
                      : "hover:bg-accent/10"
                  )}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "advertisement" && <AdvertisementContent />}
              {activeTab === "music" && <MusicContent />}
              {activeTab === "films" && <FilmsContent />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Individual Sections */}
      <section id="advertisement" className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <SectionHeader
            title="Advertisement"
            description="Creating compelling visual stories that captivate and convert."
          />
          <AdvertisementContent />
        </div>
      </section>

      <section id="music" className="py-24 bg-accent/[0.03]">
        <div className="container px-4 mx-auto">
          <SectionHeader
            title="Music"
            description="Producing chart-topping hits and discovering new talent."
          />
          <MusicContent />
        </div>
      </section>

      <section id="films" className="py-24 bg-background">
        <div className="container px-4 mx-auto">
          <SectionHeader
            title="Films"
            description="Crafting cinematic experiences that leave lasting impressions."
          />
          <FilmsContent />
        </div>
      </section>
    </main>
  )
}

export function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="max-w-3xl mb-16">
      <h2 className="tracking-normal text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-foreground/80">{description}</p>
    </div>
  )
}

export function AdvertisementContent() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {advertisements.map((ad, index) => (
        <motion.div
          key={ad.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <Link
            key={ad.id}
            href={`/work/advertisements/${ad.id}`}
            className="group"
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={ad.coverImage}
                    alt={ad.title}
                    className="object-cover aspect-video h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{ad.title}</CardTitle>
                <CardDescription>{ad.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export function MusicContent() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {musicProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <Link
            key={project.id}
            href={`/work/music/${project.id}`}
            className="group"
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0 relative">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={project.coverArt}
                    alt={project.title}
                    className="object-cover h-full aspect-square transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription>
                  {project.artist} • {project.genre}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export function FilmsContent() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filmProjects.map((film, index) => (
        <motion.div
          key={film.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <Link key={film.id} href={`/work/films/${film.id}`} className="group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="text-white border-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{film.title}</CardTitle>
                <CardDescription>{film.synopsis}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
