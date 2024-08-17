import Image from "next/image"

import { celebreties } from "@/config/site"

export default function ProductionHousePage() {
  return (
    <main>
      <section className="py-24 relative lg:px-8 px-4 bg-accent/[0.01] flex lg:flex-row flex-col items-start justify-center lg:gap-16 gap-8 ">
        <div className="left">
          <h1 className="tracking-tighter text-pretty text-left lg:text-6xl md:text-5xl text-4xl font-extrabold text-foreground">
            Production House -
            <br /> <span className="text-accent">TOBC Entertainment</span>
          </h1>
          <p className="mt-4 text-left text-lg text-foreground/80 max-w-[540px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, vel. A
            in repellat cupiditate doloribus rerum ad voluptatem magni sed
            asperiores nesciunt autem dolores vel cumque nulla rem voluptates
            laboriosam quas quod repellendus ipsam temporibus tempora natus,
            quaerat ducimus. Reiciendis exercitationem dignissimos et eius
            velit, assumenda amet corporis beatae ipsam expedita suscipit, ea
            cum modi quae nulla debitis hic fugit nemo voluptatibus dolorum a.
            Cumque aperiam natus, ullam quaerat fuga dolores sequi voluptatum
            quia aut. Repellat ab, quasi, excepturi numquam aliquam itaque,
            provident distinctio velit delectus corrupti aliquid cupiditate
            dicta temporibus dolorum voluptas in voluptates repudiandae officia
            odio amet officiis et atque obcaecati! Aperiam velit officiis cum
            recusandae provident odit nisi saepe nam asperiores facere illo
            quisquam, ratione officia quae iure unde laborum iste rerum beatae
            nobis consequatur pariatur eligendi, id suscipit! Quae cumque
            pariatur nemo deserunt, nobis quasi eius vitae veritatis repudiandae
            ipsum temporibus molestiae totam qui placeat et?
          </p>
        </div>
        <img
          draggable={false}
          src="https://i.ibb.co/phBB5xk/Screenshot-2024-08-07-133311.png"
          alt="Influencers"
          className="rounded-lg sticky top-32 select-none xl:max-w-[430px] lg:max-w-[400px] h-auto"
          width="1000"
          height="600"
        />
      </section>
      <section className="pt-48 pb-24 relative lg:px-8 px-4  flex flex-col items-center justify-center lg:gap-16 gap-8 bg-accent/[0.03]">
        <div className="flex-row sm:flex hidden -mt-44 flex-nowrap justify-center md:gap-12 gap-8 overflow-x-hidden max-w-full">
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
        <div>
          <h2 className="tracking-tighter text-center lg:text-6xl md:text-5xl text-4xl font-extrabold">
            <span className="font-medium">The Power Of</span>
            <br /> Authentic Influencer Relationship
          </h2>
          <p className="mt-4 text-center text-lg text-foreground/80 max-w-3xl mx-auto">
            We effectively harness the credibility and sway of social media
            influencers. With a team of seasoned experts and a deep
            understanding of digital trends, we’re committed to crafting
            tailored strategies that elevate your brand’s presence and drive
            tangible results.
            <br />
            <br /> From identifying the perfect influencers to executing
            seamless campaigns, we’re dedicated to helping your brand thrive in
            the ever-evolving digital landscape.
          </p>
        </div>
      </section>
    </main>
  )
}
