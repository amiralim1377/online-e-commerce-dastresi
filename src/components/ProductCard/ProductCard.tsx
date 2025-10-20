import Image from "next/image";
import { DailyDeal } from "@/data/dailyDealsData";

export default function ProductCard({ product }: { product: DailyDeal }) {
  const discount = product.price - product.discountPrice;

  return (
    <div className={`flex bg-white rounded-lg p-2 h-full ${product.layout}`}>
      {product.layout === "flex-col" ? (
        <>
          <div className="flex flex-col h-full justify-between ">
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={240}
                height={240}
                className="w-full h-96 object-cover rounded-md"
              />
            </div>

            <section className=" h-full flex flex-col justify-between ">
              <h3 className="mt-2 text-primary font-bold">{product.title}</h3>
              <div className="w-full  mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm line-through text-gray-500">
                    {product.price.toLocaleString()} تومان
                  </span>
                  <span className="text-red-400 font-semibold">
                    {discount.toLocaleString()} تومان تخفیف
                  </span>
                </div>
                <div className="text-blue-600 font-bold text-lg text-left">
                  {product.discountPrice.toLocaleString()} تومان
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <>
          <section className="flex flex-col sm:flex-row gap-2 items-start">
            <Image
              src={product.image}
              alt={product.title}
              width={144}
              height={144}
              className="w-full sm:w-36 h-40 sm:h-36 object-cover rounded-md"
            />

            <div className="sm:ml-4 w-full flex justify-between flex-col h-full mt-2 sm:mt-0">
              <h3 className="font-bold text-primary">{product.title}</h3>
              <section>
                <div className="flex justify-between items-center">
                  <span className="text-sm line-through text-gray-500">
                    {product.price.toLocaleString()} تومان
                  </span>
                  <span className="text-red-400 text-xs font-semibold">
                    {discount.toLocaleString()} تومان تخفیف
                  </span>
                </div>
                <div className="text-blue-600 font-bold text-lg text-left">
                  {product.discountPrice.toLocaleString()} تومان
                </div>
              </section>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
