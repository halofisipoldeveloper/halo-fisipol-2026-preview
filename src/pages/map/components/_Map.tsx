import { useState } from "react";
import Carousel from "./_Carousel";

const rundownSlides = [
  { id: 1, image: "/map-day-1.png", alt: "map-day-1" },
  { id: 2, image: "/map-day-2.png", alt: "map-day-2" },
];

export default function Map() {
  // 1. Simpan state index slide yang sedang aktif
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full min-h-[100dvh] max-w-5xl flex flex-col gap-8 md:gap-12 justify-center items-center mx-auto p-6">

      <div className="flex flex-col gap-y-2">
        {/* Judul */}
        <div className="w-full flex justify-center items-center relative z-20">
          <img
            src="/map-text.svg"
            alt="map-text"
            className="w-48 md:w-52 2xl:w-64 h-auto object-contain"
          />
        </div>

        {/* Day (Berubah otomatis berdasarkan index slide aktif: index 0 -> day-1, index 1 -> day-2) */}
        <div className="w-full flex justify-center items-center relative z-20">
          <img
            src={`/day-${currentIndex + 1}-text.svg`}
            alt={`day-${currentIndex + 1}-text`}
            className="w-24 md:w-28 2xl:w-32 h-auto object-contain transition-all duration-300"
          />
        </div>
      </div>

      {/* Carousel dengan callback onSlideChange */}
      <Carousel
        items={rundownSlides}
        onSlideChange={(index) => setCurrentIndex(index)}
      />

    </div>
  );
}
