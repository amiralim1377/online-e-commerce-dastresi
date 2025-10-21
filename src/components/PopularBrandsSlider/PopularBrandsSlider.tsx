"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import first from "../../../public/images/brand/1.jpg";
import second from "../../../public/images/brand/2.jpg";
import third from "../../../public/images/brand/3.jpg";
import fourth from "../../../public/images/brand/4.jpg";
import fifth from "../../../public/images/brand/5.jpg";
import sixth from "../../../public/images/brand/6.jpg";
import seventh from "../../../public/images/brand/7.jpg";
import eighth from "../../../public/images/brand/8.jpg";

const baseCategories = [
  { id: 1, image: first, title: "acefast" },
  { id: 2, image: second, title: "powerology" },
  { id: 3, image: third, title: "camelion" },
  { id: 4, image: fourth, title: "mcdodo" },
  { id: 5, image: fifth, title: "ravpower" },
  { id: 6, image: sixth, title: "inoben" },
  { id: 7, image: seventh, title: "anker" },
  { id: 8, image: eighth, title: "acefast" },
];

export default function PopularBrandsSlider() {
  return (
    <section className="w-full py-6">
      <div className="custom-container mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="w-full"
        >
          {baseCategories.map((item) => (
            <SwiperSlide className="p-4" key={item.id}>
              <div className="flex bg-white flex-col items-center justify-center shadow-md rounded-xl p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300">
                <div className="w-32 h-32 relative mb-2">
                  <Image
                    src={item.image}
                    alt={`لوگوی برند `}
                    fill
                    loading="lazy"
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <p className="text-sm font-medium text-center">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
