import bestSellersData from "@/data/bestSellersData";
import DynamicSliderWrapper from "../reusable/DynamicSliderWrapper";

export default function BestSellers() {
  return (
    <div className="mt-8 ">
      <DynamicSliderWrapper
        data={bestSellersData}
        title={"پرفروش ترین محصولات"}
      />
    </div>
  );
}
