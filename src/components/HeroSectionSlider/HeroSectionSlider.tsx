"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSectionSlider() {
  const images = [
    {
      src: "/images/herosection/banner-dastresi-1 (1).png",
      alt: "بنر دسترسی سریع ۱",
    },
    {
      src: "/images/herosection/banner-dastresi-2-min.png",
      alt: "بنر دسترسی سریع ۲",
    },
    {
      src: "/images/herosection/banner-dastresi-4-min.png",
      alt: "بنر دسترسی سریع ۳",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="w-full max-w-full mx-auto"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[550px] rounded-lg overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
