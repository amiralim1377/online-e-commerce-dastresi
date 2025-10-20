"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { bestSellersDataType } from "@/data/bestSellersData";

interface DynamicSliderProps {
  data: bestSellersDataType;
  placeholder?: string;
}

export default function DynamicSlider({
  data = [],
  placeholder = "موردی برای نمایش وجود ندارد",
}: DynamicSliderProps) {
  const slides =
    data.length > 0
      ? data
      : [
          {
            id: "placeholder",
            title: placeholder,
            image: null,
            category: "",
            color: "",
            price: null,
          },
        ];

  return (
    <section className="w-full py-6">
      <div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={data.length > 1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center text-center p-6 bg-white border rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-[450px]">
                {/* 📸 بخش عکس محصول */}
                <div className="relative w-48 h-[300px] mb-3 flex-shrink-0">
                  {item.image ? (
                    <>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain transition-transform duration-300 hover:scale-105"
                      />
                      {item.color && (
                        <span
                          className="absolute top-1  left-0.5 w-5 h-5 rounded-full border border-gray-300 shadow-sm"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      )}
                    </>
                  ) : (
                    <div className="w-48 h-[300px] flex items-center justify-center bg-gray-200 text-gray-500">
                      بدون تصویر
                    </div>
                  )}
                </div>

                {/* 🏷️ دسته‌بندی */}
                {item.category && (
                  <p className="text-xs text-gray-500 mb-1">{item.category}</p>
                )}

                {/* 📝 عنوان محصول */}
                <h4 className="text-sm line-clamp-2 font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>

                {/* 💰 قیمت */}
                <p className="text-sm text-primary font-medium mt-auto">
                  {item.price != null
                    ? `${Number(item.price).toString()} تومان`
                    : "ناموجود"}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
