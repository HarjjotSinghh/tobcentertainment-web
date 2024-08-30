"use client"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"

const images = [
  "https://etimg.etb2bimg.com/photo/70562343.cms",
  "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202203/production-house-sixteen_nine.jpg",
  "https://shineindiafilmproductionhouse.com/wp-content/uploads/2023/02/production-company.jpg",
  // Add more image paths as needed
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 pt-16 pb-32">
      <h1 className="md:text-5xl text-4xl text-center font-extrabold tracking-tight mb-8">
        Gallery
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        className="w-full max-w-3xl mx-auto"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full aspect-video object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
