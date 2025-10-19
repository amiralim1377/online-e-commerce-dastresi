import { ShoppingCart } from "lucide-react";

export default function CartIconWithBadge() {
  return (
    <div className="relative bg-[#F7F8FA] p-4 rounded-xl w-fit transition duration-300">
      <ShoppingCart
        size={24}
        className="text-hover hover:text-black transition duration-300"
        strokeWidth={2}
      />
      <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-hover text-white text-xs font-bold rounded-full transition duration-300">
        3
      </span>
    </div>
  );
}
