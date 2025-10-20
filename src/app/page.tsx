import BestSellers from "@/components/BestSellers";
import DailyDeals from "@/components/DailyDeals";
import FeaturedCategories from "@/components/FeaturedCategories";
import HeroSection from "@/components/HeroSection";
import JustArrived from "@/components/JustArrived";
import LatestArticles from "@/components/LatestArticles";
import PopularBrands from "@/components/PopularBrands";
import WhyChooseDastresi from "@/components/WhyChooseDastresi";

export default function Home() {
  return (
    <div className="custom-container">
      <HeroSection />
      <DailyDeals />
      <FeaturedCategories />
      <JustArrived />
      <WhyChooseDastresi />
      <BestSellers />
      <PopularBrands />
      <LatestArticles />
    </div>
  );
}
