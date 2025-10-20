import sample1 from "../../public/images/justarrived/7.jpg";
import sample2 from "../../public/images/justarrived/2.jpg";
import sample3 from "../../public/images/justarrived/3.jpg";
import sample4 from "../../public/images/justarrived/4.jpg";
import sample5 from "../../public/images/justarrived/5.jpg";
import sample6 from "../../public/images/justarrived/6.jpg";

import { StaticImageData } from "next/image";

export interface DailyDeal {
  id: number;
  image: string | StaticImageData;
  title: string;
  price: number;
  discountPrice: number;
  layout: "flex-col" | "flex-row";
  gridClass: string;
}

const dailyDealsData: DailyDeal[] = [
  {
    id: 1,
    image: sample1,
    title: "شارژر دیواری 25 وات هادرون مدل C1011",
    price: 200000,
    discountPrice: 160000,
    layout: "flex-col",
    gridClass: "lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    id: 2,
    image: sample2,
    title: "هندزفری بلوتوث دو گوش مدل A30i",
    price: 500000,
    discountPrice: 425000,
    layout: "flex-col",
    gridClass: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
  },
  {
    id: 3,
    image: sample3,
    title: "پمپ باد گرین مدل GNTYIRNFBK",
    price: 300000,
    discountPrice: 270000,
    layout: "flex-col",
    gridClass: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    id: 4,
    image: sample4,
    title: "باتری نیم قلم 10 تایی شیائومی مدل ZI7",
    price: 150000,
    discountPrice: 105000,
    layout: "flex-row",
    gridClass: "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
  },
  {
    id: 5,
    image: sample5,
    title: "جامپ استاتر گرین مدل GN12VJUSTB",
    price: 100000,
    discountPrice: 75000,
    layout: "flex-row",
    gridClass: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
  },
  {
    id: 6,
    image: sample6,
    title: "هاب تایپ سی 6 کاره انکر مدل A8363",
    price: 250000,
    discountPrice: 150000,
    layout: "flex-row",
    gridClass: "lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-4",
  },
];

export default dailyDealsData;
