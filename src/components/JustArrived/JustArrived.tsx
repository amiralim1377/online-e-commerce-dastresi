import justArrivedData from "@/data/justArrived";
import DynamicSliderWrapper from "../reusable/DynamicSliderWrapper";

export default function JustArrived() {
  return (
    <div className="mt-8   ">
      <DynamicSliderWrapper
        data={justArrivedData}
        title={"همین الان موجود شد..."}
      />
    </div>
  );
}
