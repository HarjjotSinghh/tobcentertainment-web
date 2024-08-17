export default function AboutUsPage() {
  return (
    <section className="py-24 relative lg:px-8 px-4 bg-accent/[0.01] flex lg:flex-row flex-col items-start justify-center lg:gap-16 gap-8 ">
      <div className="left">
        <h1 className="tracking-tighter text-balance text-left lg:text-6xl md:text-5xl text-4xl font-extrabold text-foreground">
          About
          <br /> <span className="text-accent">TOBC Entertainment</span>
        </h1>
        <p className="text-foreground/80 max-w-[560px] text-pretty text-left mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vitae
          ratione autem delectus consequuntur non quia ea ut exercitationem,
          quisquam possimus ducimus, cumque ullam necessitatibus minus odit
          beatae, accusantium laborum laboriosam fuga. Nobis culpa quis
          perferendis delectus, minima ullam aperiam eligendi doloribus nihil
          atque at, ex dolores consequuntur dolor vel, cum obcaecati possimus
          fuga dignissimos similique? Excepturi, maiores perferendis numquam ut
          reprehenderit incidunt id blanditiis nobis iure, harum praesentium
          sapiente quisquam deleniti quos velit sunt quidem ex eos commodi rerum
          eligendi. Explicabo doloribus consectetur quisquam alias quaerat neque
          hic. Dolorem earum nulla nostrum quisquam reiciendis iure numquam
          totam natus, consectetur aperiam harum sed mollitia pariatur nisi
          quas, dolorum quasi dolore tempore, accusantium blanditiis vitae rerum
          voluptate. Tempore officia hic repellat vel sint blanditiis magni
          facilis, excepturi quibusdam inventore cupiditate deleniti voluptates
          libero quisquam nam commodi voluptatibus, placeat velit, nulla
          perspiciatis expedita dicta aliquid labore. Ratione corrupti nihil,
          rerum recusandae odio ex architecto fugiat accusantium error quis
          assumenda accusamus optio velit nesciunt cum saepe quidem alias sint
          commodi cupiditate qui. Esse suscipit, optio accusantium enim hic
          libero doloribus? Doloribus tempora eum error similique aspernatur
          mollitia esse ea voluptate, distinctio asperiores quos maxime
          sapiente, necessitatibus, eligendi rerum! Id ut amet mollitia minus
          enim cupiditate excepturi dolor inventore eaque error! Reiciendis nemo
          labore ipsa magnam nulla facilis cum rem officiis itaque quidem optio
          excepturi aut ipsam possimus dolore, voluptate aspernatur
          exercitationem suscipit praesentium facere voluptatibus non totam
          nostrum fugiat. Aut magni corporis modi dolore neque expedita eligendi
          quaerat!
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
  )
}
