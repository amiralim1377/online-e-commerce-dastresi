"use client";

import { Phone, Clock, MapPin } from "lucide-react";

export default function FooterContact() {
  return (
    <section className="w-full bg-[#E2E2E2] px-6 py-6">
      <div className="custom-container flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 sm:gap-0">
        {/* 📞 تلفن */}
        <div className="flex md:w-auto  w-full flex-row items-center gap-4">
          <Phone className="w-6 h-6 text-primary" />
          <p className="text-gray-700 text-[14px] leading-[28px]">
            021-33902646
          </p>
        </div>

        {/* ⏰ ساعت کاری */}
        <div className="flex flex-row items-center gap-4">
          <Clock className="w-6 h-6 text-primary" />
          <p className="text-gray-700 text-[14px] leading-[28px]">
            شنبه تا چهارشنبه از ساعت 10 صبح الی ساعت 18 پنجشنبه‌ها از 10 صبح الی
            ساعت 16
          </p>
        </div>

        {/* 📍 آدرس */}
        <div className="flex flex-row items-center gap-4">
          <MapPin className="w-6 h-6 text-primary" />
          <p className="text-gray-700 text-[14px] leading-[28px]">
            تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3 - فروشگاه بدیع
          </p>
        </div>
      </div>
    </section>
  );
}
