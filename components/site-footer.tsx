import React from "react"
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="bg-accent/[0.02]">
      <div className="relative mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:flex flex-col gap-8 lg:items-center lg:justify-center">
          <div>
            <div className="flex justify-center text-accent lg:justify-center">
              <Image
                src="/logo-wide.png"
                alt="TOBC Entertainment Logo"
                width={118}
                height={24}
              />
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
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
  )
}
