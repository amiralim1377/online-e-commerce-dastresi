import HeaderNavigationMenu from "../HeaderNavigationMenu/HeaderNavigationMenu";
import HeaderTop from "../HeaderTop";

export default function Header() {
  return (
    <header className="h-[133px] mt-4 flex items-center justify-between    border-b w-full  ">
      <section className="w-full  container mx-auto my-8 px-4 sm:px-6 lg:px-8 flex flex-col gap-2">
        <HeaderTop />
        <HeaderNavigationMenu />
      </section>
    </header>
  );
}
