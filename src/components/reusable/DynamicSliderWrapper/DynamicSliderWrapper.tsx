import { bestSellersDataType } from "@/data/bestSellersData";
import DynamicSlider from "../DynamicSlider/DynamicSlider";

interface DynamicSliderWrapperProps {
  title: string;
  data: bestSellersDataType;
}

export default function DynamicSliderWrapper({
  title,
  data,
}: DynamicSliderWrapperProps) {
  return (
    <div className="p-12 w-full rounded-xl bg-[#E2E2E2]">
      <div className="flex items-center justify-between w-full mb-6">
        <h3 className="text-2xl leading-9 text-primary text-right font-bold">
          {title}
        </h3>
        <span className="text-sm text-gray-600 cursor-pointer hover:text-primary transition">
          مشاهده همه محصولات
        </span>
      </div>
      <DynamicSlider data={data} placeholder="موردی برای نمایش نیست" />
    </div>
  );
}
