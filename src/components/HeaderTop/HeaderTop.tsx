"use client";
import Image from "next/image";
import HeaderInputSearch from "../HeaderInputSearch";
import CartIconWithBadge from "../CartIconWithBadge";
import NavHeaderTopLinks from "../NavHeaderTopLinks";
import MobileHeader from "../MobileHeader";

export default function HeaderTop() {
  return (
    <div className="flex justify-between items-center ">
      <section className="flex justify-between w-full items-center gap-4">
        <Image
          src="/dastresi-logo.svg"
          alt="logo"
          width={100}
          height={100}
          className="w-16 h-auto sm:w-16 md:w-24 lg:w-28"
        />

        <MobileHeader />

        <HeaderInputSearch />
        <NavHeaderTopLinks />
      </section>
      <section className="lg:flex hidden items-center gap-4 justify-between">
        <CartIconWithBadge />
        <button className="bg-brand hover:bg-secondary text-sm  text-white text-nowrap p-4 rounded-xl transition duration-500">
          ورود و ثبت نام
        </button>
      </section>
    </div>
  );
}
