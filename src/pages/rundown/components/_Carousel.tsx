import { useState } from "react";

export interface CarouselItem {
  id: string | number;
  image: string;
  alt?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  bgImage?: string;
}

export default function Carousel({
  items,
  bgImage = "/rundown-background.svg",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full flex justify-center items-center text-[#6D3929]">
      {/* Background Frame */}
      {bgImage && (
        <img
          src={bgImage}
          alt="carousel-background"
          className="absolute w-full max-w-sm md:max-w-3xl h-auto object-contain z-0 pointer-events-none"
        />
      )}

      {/* Tombol Kiri */}
      {items.length > 1 && (
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute -left-10 md:left-6 z-20 p-2   transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <img
            src="/left-arrow.svg"
            alt="left-arrow"
            className="w-6 h-6 md:w-12 md:h-12"

          />
        </button>
      )}

      {/* Area Gambar Utama (Slide Slider) */}
      <div className="relative w-full max-w-xs md:max-w-2xl z-10 flex justify-center items-center overflow-hidden px-8 md:px-12">
        <div
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full shrink-0 flex justify-center items-center p-2">
              <img
                src={item.image}
                alt={item.alt || "carousel-item"}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tombol Kanan */}
      {items.length > 1 && (
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute -right-10 md:right-6 z-20 p-2    transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <img
            src="/right-arrow.svg"
            alt="right-arrow"
            className="w-6 h-6 md:w-12 md:h-12"

          />
        </button>
      )}

      {/* Dots Indicator (Bawah) */}
      {items.length > 1 && (
        <div className="absolute -bottom-8 flex gap-2 z-20">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-4 rounded-full transition-all duration-300 border-2 border-white ${
                currentIndex === idx ? "w-12 bg-[#AB6938]" : "w-4 bg-[#AB6938]/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
