const navigationMenuData = [
  {
    title: "خانه",
    path: "/",
  },
  {
    title: "لوازم جانبی موبایل و کامپیوتر",
    path: "/accessories",
    children: [
      {
        title: "موس و کیبورد و پد موس",
        path: "/accessories/mouse-keyboard-pad",
      },
      { title: "اسپیکر", path: "/accessories/speaker" },
      { title: "تجهیزات ذخیره‌سازی", path: "/accessories/storage" },
      { title: "هولدر و نگهدارنده", path: "/accessories/holder" },
      { title: "کابل شارژ", path: "/accessories/charging-cable" },
      { title: "آداپتور و شارژر", path: "/accessories/adapter-charger" },
      { title: "هندزفری و هدست و میکروفون", path: "/accessories/headset-mic" },
      {
        title: "پاوربانک و جامپ استارتر",
        path: "/accessories/powerbank-jumpstarter",
      },
      {
        title: "دسته بازی و خنک‌کننده موبایل",
        path: "/accessories/gamepad-cooler",
      },
      {
        title: "انواع تبدیل‌کننده موبایل",
        path: "/accessories/mobile-converters",
      },
      { title: "انواع تبدیل برق", path: "/accessories/power-converters" },
      {
        title: "کابل و دانگل انتقال تصویر",
        path: "/accessories/display-cables",
      },
      {
        title: "انواع هاب و فن خنک‌کننده کامپیوتر",
        path: "/accessories/hubs-coolers",
      },
      { title: "قاب و گلس", path: "/accessories/case-glass" },
    ],
  },
  {
    title: "کابل - مبدل - رابط",
    path: "/cables",
    children: [
      { title: "کابل HDMI", path: "/cables/hdmi" },
      { title: "کابل پرینتر", path: "/cables/printer" },
      { title: "کابل هارد اکسترنال", path: "/cables/external-hdd" },
      { title: "انواع رابط و تبدیل", path: "/cables/adapters" },
      { title: "کابل AUX", path: "/cables/aux" },
      { title: "کابل ۲ به ۱ صدا", path: "/cables/audio-2to1" },
      { title: "کابل اپتیکال", path: "/cables/optical" },
      { title: "کابل و فیش OTG", path: "/cables/otg" },
    ],
  },
  {
    title: "لوازم تولید محتوا",
    path: "/content-tools",
    children: [
      { title: "میکروفون", path: "/content-tools/microphone" },
      { title: "رینگ لایت", path: "/content-tools/ring-light" },
      { title: "پایه", path: "/content-tools/stand" },
    ],
  },
  {
    title: "لوازم شبکه",
    path: "/networking",
    children: [
      { title: "مودم روتر", path: "/networking/router" },
      { title: "هاب شبکه", path: "/networking/hub" },
      { title: "مودم همراه", path: "/networking/mobile-modem" },
      { title: "لوازم جانبی", path: "/networking/accessories" },
    ],
  },
  {
    title: "کنسول بازی و لوازم جانبی",
    path: "/gaming",
    children: [
      { title: "کیف کنسول", path: "/gaming/console-bag" },
      { title: "دسته بازی", path: "/gaming/controller" },
      { title: "هندزفری و هدست", path: "/gaming/headset" },
      { title: "شارژر دسته بازی", path: "/gaming/controller-charger" },
    ],
  },
  {
    title: "لوازم خانگی و شخصی",
    path: "/home-personal",
    children: [
      {
        title: "انواع گجت های جذاب",
        path: "/home-personal/attractive-gadgets",
      },
      { title: "باتری و شارژر", path: "/home-personal/battery-charger" },
      {
        title: "اندروید باکس و گیرنده دیجیتال",
        path: "/home-personal/android-box-digital-receiver",
      },
      { title: "آنتن رومیزی", path: "/home-personal/desktop-antenna" },
      {
        title: "مچ‌بندی و ساعت هوشمند",
        path: "/home-personal/wristband-smartwatch",
      },
      { title: "محصولات کمبو", path: "/home-personal/combo-products" },
      { title: "رابط برق", path: "/home-personal/power-strip" },
      { title: "اف‌ام پلیر", path: "/home-personal/fm-player" },
    ],
  },
  {
    title: "برندها",
    path: "/brands",
    children: [
      { title: "سامسونگ", path: "/brands/samsung" },
      { title: "انکر", path: "/brands/anker" },
      { title: "هایلو", path: "/brands/haylou" },
      { title: "اپل", path: "/brands/apple" },
      { title: "شیائومی", path: "/brands/xiaomi" },
      { title: "هوآوی", path: "/brands/huawei" },
      { title: "جی‌بی‌ال", path: "/brands/jbl" },
      { title: "لاجیتک", path: "/brands/logitech" },
      { title: "سونی", path: "/brands/sony" },
      { title: "ایسوس", path: "/brands/asus" },
    ],
  },
];

export default navigationMenuData;
