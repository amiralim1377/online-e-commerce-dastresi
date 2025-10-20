"use client";

import Image from "next/image";
import whyChooseDastresiData from "@/data/whyChooseDastresiData";

export default function WhyChooseDastresi() {
  return (
    <section className="mt-12 w-full">
      <div className="custom-container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-black mb-8">
          چرا دسترسی را برای خرید انتخاب کنیم؟
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
          {whyChooseDastresiData.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
