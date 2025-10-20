"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F5F5F5] py-6">
      <div className="custom-container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/dastresi-logo.svg"
              width={190}
              height={80}
              alt="footerlogo"
            />
            <div className="flex items-center gap-2">
              <p className="text-[16px] leading-[28px] text-black">
                با ما در ارتباط باشید
              </p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-bold text-black mb-2">
              فروشگاه اینترنتی دسترسی
            </h3>
            <p className="text-[16px] text-primary leading-[28px] text-justify">
              فروشگاه دسترسی فعالیت خود را از سال 1389 به صورت فروش فیزیکی کالا
              در حوزه لوازم جانبی کامپیوتر و موبایل در تهران شروع کرد و از سال
              1398 از طریق پیج اینستاگرام وارد فروش آنلاین شد و به خاطر ارائه
              کالای اصلی و مشاوره های دقیق در بازه بسیار کوتاهی توانست اعتماد
              بسیاری از مشتریانش را جلب کند و سرانجام در سال 1399 فروش از طریق
              سایت را هم به فعالیت های خود اضافه کرد تا اینکه بتواند با بررسی
              دقیق کالاها انتخاب صحیح شما را به ارمغان آورد. و امروز دسترسی
              فعالیت خود را در زمینه آداپتور موبایل، کابل شارژ، پاوربانک، ساعت
              هوشمند، هندفری و هدست، لوازم گیمینگ، باتری و شارژر، لوازم شبکه،
              تجهیزات ذخیره سازی، گیرنده دیجیتال و هزاران گجت جذاب ادامه میدهد.
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-bold text-black mb-2">
              دسترسی سریع
            </h3>
            <div className="flex flex-col gap-2 text-[16px] leading-[28px]">
              <a href="#" className="text-primary hover:underline">
                باشگاه مشتریان
              </a>
              <a href="#" className="text-primary hover:underline">
                سوالات متداول
              </a>
              <a href="#" className="text-primary hover:underline">
                بلاگ
              </a>
              <a href="#" className="text-primary hover:underline">
                شرایط و قوانین
              </a>
              <a href="#" className="text-primary hover:underline">
                ارتباط با ما
              </a>
              <a href="#" className="text-primary hover:underline">
                درباره ما
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
