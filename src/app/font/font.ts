import localFont from "next/font/local";

export const shabnam = localFont({
  src: [
    {
      path: "../../../public/font/Shabnam-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/font/Shabnam-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/font/Shabnam-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/font/Shabnam-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/font/Shabnam-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-shabnam",
  display: "swap",
});
