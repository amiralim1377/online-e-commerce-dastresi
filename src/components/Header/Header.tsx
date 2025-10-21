import HeaderNavigationMenu from "../HeaderNavigationMenu";
import HeaderTop from "../HeaderTop";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm h-[150px] flex items-center justify-between border-b w-full">
      <section className="w-full custom-container mx-auto my-8 flex flex-col gap-2">
        <HeaderTop />
        <HeaderNavigationMenu />
      </section>
    </header>
  );
}
