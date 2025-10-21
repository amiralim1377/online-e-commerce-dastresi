import dailyDealsData from "@/data/dailyDealsData";
import GridWrapperDailyDeals from "../GridWrapperDailyDeals";
import CountdownTimer from "../CountdownTimer";

export default function DailyDeals() {
  return (
    <div className="bg-[#E2E2E2] rounded-xl p-12  mt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mb-3  ">
          <span className="text-hover text-base lg:text-5xl font-bold">%</span>
          <h1 className="lg:text-4xl text-base font-bold text-[#757575]">
            تخفیف های روزانه دسترسی
          </h1>
        </div>

        <CountdownTimer />
      </div>
      <GridWrapperDailyDeals products={dailyDealsData} />
    </div>
  );
}
