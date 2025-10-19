import Image from "next/image";
import HeaderInputSearch from "../HeaderInputSearch";
import CartIconWithBadge from "../CartIconWithBadge";
import NavHeaderTopLinks from "../NavHeaderTopLinks";

export default function HeaderTop() {
  return (
    <div className="flex justify-between items-center ">
      <section className="flex items-center gap-4">
        <Image src={"/dastresi-logo.svg"} width={100} height={100} alt="logo" />
        <HeaderInputSearch />
        <NavHeaderTopLinks />
      </section>
      <section className="md:flex hidden items-center gap-4 justify-between">
        <CartIconWithBadge />
        <button className="bg-brand hover:bg-secondary text-white p-3 rounded-xl transition duration-500">
          ورود و ثبت نام
        </button>
      </section>
    </div>
  );
}
