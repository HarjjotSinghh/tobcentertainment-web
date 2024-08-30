"use client"

import { useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  LoaderIcon,
  Twitter,
  Youtube,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { FaVimeoV } from "react-icons/fa"
import { PiArrowRightBold } from "react-icons/pi"
import { RiErrorWarningLine } from "react-icons/ri"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/send-email/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      const result = await response.json()
      if (result.status === 200) {
        toast.success("Email sent successfully!", {
          description: "We'll get back to you as soon as possible.",
          icon: <CheckCircle className="size-6" />,
        })
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Failed to send email", {
        description: "Please try again after a few minutes.",
        icon: <RiErrorWarningLine className="size-6" />,
      })
    } finally {
      setIsSubmitting(false)
      form.reset()
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 flex lg:flex-row flex-col gap-8 items-start justify-center">
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle className="md:text-5xl text-4xl font-extrabold tracking-tight mb-2">
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <div className="space-y-1.5 text-lg">
              <p>
                Address: Flat No. 12, Khodaram Building, Mumbai, Maharastra
                401501
              </p>
              <p>GST Number: 27AAKCT3388B1Z6</p>
              <p>
                Contact:{" "}
                <Link className="underline" href="tel:+918077552630">
                  +91 8077552630
                </Link>
              </p>
              <p>
                E-Mail:{" "}
                <Link
                  className="underline"
                  href="mailto:tobcentertainment@gmail.com"
                >
                  tobcentertainment@gmail.com
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-tight mb-2">
              Follow Us
            </h2>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 !mt-6">
              <a
                href="https://www.instagram.com/tobcentertainment/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xl font-bold inline-flex items-center gap-2"
              >
                <Instagram className="size-7 mt-0.5" />
                Instagram
              </a>
              <a
                href="https://in.linkedin.com/company/tobcentertainment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xl font-bold inline-flex items-center gap-2"
              >
                <Linkedin className="size-7 mt-0.5" />
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/TOBCEntertainment/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xl font-bold inline-flex items-center gap-2"
              >
                <Facebook className="size-7 mt-0.5" />
                Facebook
              </a>
              <a
                href="https://www.twitter.com/CreativesOfTOBC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xl font-bold inline-flex items-center gap-2"
              >
                <Twitter className="size-7 mt-0.5" />
                Twitter
              </a>
              <a
                href="https://vimeo.com/tobcentertainment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xl font-bold inline-flex items-center gap-2"
              >
                <FaVimeoV
                  fill="none"
                  strokeWidth={40}
                  className="size-7 mt-0.5"
                />
                Vimeo
              </a>
              <a
                href="https://www.youtube.com/@tobcmusic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xl font-bold inline-flex items-center gap-2"
              >
                <Youtube className="size-7 mt-0.5" />
                YouTube
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="max-w-3xl">
        <CardHeader>
          <CardTitle className="md:text-5xl text-4xl font-extrabold tracking-tight mb-2">
            Contact Us
          </CardTitle>
          <CardDescription className="text-base text-pretty">
            Get in touch with our team to discuss your requirements. Please fill
            and submit the form below and we will get back to you as soon as
            possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="max-h-full overflow-y-scroll">
                <div className="px-1">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-[8px]"
                            placeholder="Your Name"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your full name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-[8px]"
                            placeholder="email@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          We&apos;ll use this email to contact you.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="celebrity/influencer marketing">
                                Celebrity/Influencer Marketing
                              </SelectItem>
                              <SelectItem value="advertisements">
                                Advertisements
                              </SelectItem>
                              <SelectItem value="production">
                                Production
                              </SelectItem>
                              <SelectItem value="music">Music</SelectItem>
                              <SelectItem value="films">Films</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormDescription>
                          Please select a subject.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            className="rounded-[8px]"
                            placeholder="Your message..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Please enter your message.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </ScrollArea>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-lg font-bold tracking-tight inline-flex items-center group"
              >
                {isSubmitting ? "Sending..." : "Submit"}{" "}
                {isSubmitting ? (
                  <LoaderIcon className="size-5 ml-2 animate-spin" />
                ) : (
                  <PiArrowRightBold className="ml-2 mb-0.5 size-5 group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
