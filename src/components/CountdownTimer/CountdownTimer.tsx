"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState("");
  const [timeDigits, setTimeDigits] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("پایان امروز فرا رسیده است 🌙");
        setTimeDigits("۰۰:۰۰:۰۰");
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const toPersianNumber = (num: number) =>
        num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);

      setTimeLeft(
        `${toPersianNumber(hours)} ساعت و ${toPersianNumber(
          minutes
        )} دقیقه و ${toPersianNumber(seconds)} ثانیه تا پایان امروز`
      );

      setTimeDigits(
        `${toPersianNumber(hours).padStart(2, "۰")}:${toPersianNumber(
          minutes
        ).padStart(2, "۰")}:${toPersianNumber(seconds).padStart(2, "۰")}`
      );
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="text-center font-medium text-gray-800">
      {/* برای دسکتاپ */}
      <span className="hidden sm:inline text-lg text-primary">{timeLeft}</span>

      {/* برای موبایل */}
      <span className="inline sm:hidden text-xl font-bold text-primary">
        {timeDigits}
      </span>
    </div>
  );
}
