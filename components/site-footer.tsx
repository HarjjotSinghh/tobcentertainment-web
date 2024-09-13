import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="bg-accent/[0.03]">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <p className=" text-center text-sm text-foreground lg:text-center">
          Copyright &copy; {new Date().getFullYear()} Tobc Entertainment OPC
          Private limited. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
