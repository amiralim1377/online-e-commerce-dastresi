import dailyDealsData from "@/data/dailyDealsData";
import GridWrapperDailyDeals from "../GridWrapperDailyDeals";

export default function DailyDeals() {
  return (
    <div className="bg-[#E2E2E2] rounded-xl p-12  mt-8">
      <div className="flex items-center gap-2 mb-3  ">
        <span className="text-hover text-5xl font-bold">%</span>
        <h1 className="text-4xl font-bold text-[#757575]">
          تخفیف های روزانه دسترسی
        </h1>
      </div>
      <GridWrapperDailyDeals products={dailyDealsData} />
    </div>
  );
}
