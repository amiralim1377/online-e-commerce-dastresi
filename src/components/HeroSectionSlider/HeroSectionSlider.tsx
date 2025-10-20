"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSectionSlider() {
  const images = [
    {
      src: "/images/herosection/banner-dastresi-1 (1).png",
      width: 1200,
      height: 600,
    },
    {
      src: "/images/herosection/banner-dastresi-2-min.png",
      width: 1200,
      height: 600,
    },
    {
      src: "/images/herosection/banner-dastresi-4-min.png",
      width: 1200,
      height: 600,
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="w-full rounded-lg overflow-hidden">
            <Image
              src={img.src}
              alt={`hero-${index}`}
              width={img.width}
              height={img.height}
              className="w-full h-auto object-cover"
              priority={index === 0}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
