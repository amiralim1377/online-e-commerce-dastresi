import { StaticImageData } from "next/image";
import first from "../../public/images/bestSellers/1.jpg";
import second from "../../public/images/bestSellers/2.jpg";
import third from "../../public/images/bestSellers/3.jpg";
import fourth from "../../public/images/bestSellers/4.jpg";
import fifth from "../../public/images/bestSellers/5.jpg";
import sixth from "../../public/images/bestSellers/6.jpg";
import seventh from "../../public/images/bestSellers/7.jpg";
import eighth from "../../public/images/bestSellers/8.jpg";
import ninth from "../../public/images/bestSellers/9.jpg";

export type bestSellersDataType = {
  id: number;
  image: string | StaticImageData;
  category: string;
  title: string;
  color?: string;
  price: number;
}[];

const bestSellersData = [
  {
    id: 1,
    image: first,
    category: "انواع گجت های جذاب",
    title: "جامپ استاتر و پمپ باد گرین مدل Green Lion GN12VJUSTB",
    color: "blue",
    price: 1600000,
  },
  {
    id: 2,
    image: second,
    category: "باتری آلکالاین",
    title: "باتری قلمی 10تایی شیائومی مدل Xiaomi ZI5",
    color: "pink",
    price: 600000,
  },
  {
    id: 3,
    image: third,
    category: "انواع گجت های جذاب",
    title: "هاب تایپ سی 6 کاره انکر مدل Anker A8363",
    price: 1200000,
  },
  {
    id: 4,
    image: fourth,
    category: "هندزفری بلوتوث دو گوش",
    title: "هندزفری بلوتوثی A30i انکر مدل Anker A3958",
    color: "black",
    price: 1800000,
  },
  {
    id: 5,
    image: fifth,
    category: "شارژر",
    title: "شارژر دیواری گان 100 واتی الدینیو مدل Ldnio Q408",
    color: "balck",
    price: 1300000,
  },
  {
    id: 6,
    image: sixth,
    category: "انواع گجت های جذاب",
    title: "پمپ باد گرین INFLATOR مدل Green Lion GNTYIRNFBK",
    color: "balck",
    price: 2000000,
  },
  {
    id: 7,
    image: seventh,
    category: "شارژر دیواری",
    title: "شارژر دیواری 67 واتی گان با کابل تایپ سی مک دودو مدل Mcdodo CH-410",
    color: "balck",
    price: 1300000,
  },
  {
    id: 8,
    image: eighth,
    category: "شارژر دیواری",
    title: "شارژر دیواری 25 وات هادرون مدل Hadron C1011",
    color: "white",
    price: 1600000,
  },
  {
    id: 9,
    image: ninth,
    category: "باتری آلکالاین",
    title: "باتری نیم قلم 10 تایی شیائومی مدل Xiaomi ZI7",
    price: 1600000,
  },
];

export default bestSellersData;
