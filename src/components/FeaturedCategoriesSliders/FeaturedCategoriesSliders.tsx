"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import first from "../../../public/images/FeaturedCategories/Holder Negahdarande.png";
import second from "../../../public/images/FeaturedCategories/adaptor.png";
import third from "../../../public/images/FeaturedCategories/battery.png";
import fourth from "../../../public/images/FeaturedCategories/cable.png";
import fifth from "../../../public/images/FeaturedCategories/gaming.png";
import sixth from "../../../public/images/FeaturedCategories/handsfree.png";
import seventh from "../../../public/images/FeaturedCategories/mobadel o rabet.png";
import eighth from "../../../public/images/FeaturedCategories/powerbank.png";

// 🌀 آرایه اصلی دسته‌بندی‌ها
const baseCategories = [
  { id: 1, image: first, title: "هولدر و نگهدارنده" },
  { id: 2, image: second, title: "آداپتور" },
  { id: 3, image: third, title: "باتری" },
  { id: 4, image: fourth, title: "کابل" },
  { id: 5, image: fifth, title: "گیمینگ" },
  { id: 6, image: sixth, title: "هندزفری" },
  { id: 7, image: seventh, title: "مبدل و رابط" },
  { id: 8, image: eighth, title: "پاوربانک" },
];

export default function FeaturedCategoriesSliders() {
  return (
    <section className="w-full container mx-auto px-4 py-6">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {baseCategories.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center bg-white shadow rounded-xl p-4 cursor-pointer hover:shadow-lg transition">
              <div className="w-48 h-48 relative mb-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain hover:scale-105"
                />
              </div>
              <p className="text-sm font-medium text-center">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
