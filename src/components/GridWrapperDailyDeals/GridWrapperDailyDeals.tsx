import { DailyDeal } from "@/data/dailyDealsData";
import ProductCard from "../ProductCard";

export default function GridWrapperDailyDeals({
  products: dailyDealsData,
}: {
  products: DailyDeal[];
}) {
  return (
    <section dir="rtl">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-4 lg:h-[600px]">
        {dailyDealsData.map((p) => (
          <div key={p.id} className={p.gridClass}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
