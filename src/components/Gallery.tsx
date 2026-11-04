import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DUMMY_PHOTOS = [
  { id: 1, src: "https://picsum.photos/id/1018/1280/720", title: "Kamar Sains 1" },
  { id: 2, src: "https://picsum.photos/id/1015/1280/720", title: "Kamar Sains 2" },
  { id: 3, src: "https://picsum.photos/id/1019/1280/720", title: "Kamar Sains 3" },
  { id: 4, src: "https://picsum.photos/id/1025/1280/720", title: "Kamar Sains 4" },
  { id: 5, src: "https://picsum.photos/id/1035/1280/720", title: "Kamar Sains 5" },
  { id: 6, src: "https://picsum.photos/id/1039/1280/720", title: "Kamar Sains 6" },
  { id: 7, src: "https://picsum.photos/id/1050/1280/720", title: "Kamar Sains 7" },
];

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export default function Gallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const tweenScale = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (scrollProgress + 1);
              if (sign === 1) diffToTarget = scrollSnap - (scrollProgress - 1);
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * 1.6);
        const scale = numberWithinRange(tweenValue, 0.75, 1).toString();
        const opacity = numberWithinRange(tweenValue, 0.4, 1).toString();

        const slideNode = emblaApi.slideNodes()[slideIndex];
        const containerNode = slideNode.querySelector(".slide-inner") as HTMLElement;

        if (containerNode) {
          containerNode.style.transform = `scale(${scale})`;
          containerNode.style.opacity = opacity;
        }
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale)
      .on("select", onSelect)
      .on("reInit", onSelect);
  }, [emblaApi, tweenScale, onSelect]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-linear-to-b from-[#71CFEB] to-[#E4F0EF]">

      {/* Background Horseshoe (Menetap di tengah layar paling belakang) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <img
          src="/horseshoe.svg"
          alt="horseshoe"
          className="w-64 md:w-96 2xl:w-[32rem]  select-none"
        />
      </div>

      <div className="relative w-full h-full flex flex-col justify-center items-center gap-y-6 md:gap-y-10 py-10 z-10">

        {/* Header Title */}
        <img
          src="/gallery-text.svg"
          alt="gallery-text"
          className="w-32 md:w-44 select-none mb-4"
        />

        {/* Carousel Area (Full Width) */}
        <div className="relative w-full  flex items-center justify-center">

          {/* Tombol Kiri */}
          <button
            onClick={scrollPrev}
            aria-label="Previous Slide"
            className="absolute left-2 md:left-8 2xl:left-16 z-30 p-2 transition-all hover:scale-110 active:scale-95 cursor-pointer drop-shadow-lg"
          >
            <img src="/left-arrow.svg" alt="left-arrow" className="w-8 h-8 md:w-14 md:h-14" />
          </button>

          {/* Embla Viewport */}
          <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            {/* Flex Container (items-center memastikan gambar di tengah secara vertikal) */}
            <div className="flex touch-pan-y items-center -ml-4 py-8">
              {DUMMY_PHOTOS.map((photo) => (
                <div
                  key={photo.id}
                  // Pengaturan kelebaran tiap slide agar proporsional
                  className="flex-[0_0_85%] sm:flex-[0_0_65%] md:flex-[0_0_55%] lg:flex-[0_0_45%] 2xl:flex-[0_0_40%] pl-4 min-w-0"
                >
                  <div className="slide-inner transition-transform duration-100 ease-out will-change-transform">
                    {/* aspect-video = 16:9 */}
                    <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden  border-4 border-white/60 bg-white/20 backdrop-blur-xs">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover pointer-events-none"
                      />
                      <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
                        <p className="text-base md:text-xl font-semibold tracking-wide drop-shadow-md">
                          {photo.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol Kanan */}
          <button
            onClick={scrollNext}
            aria-label="Next Slide"
            className="absolute right-2 md:right-8 2xl:right-16 z-30 p-2 transition-all hover:scale-110 active:scale-95 cursor-pointer drop-shadow-lg"
          >
            <img src="/right-arrow.svg" alt="right-arrow" className="w-8 h-8 md:w-14 md:h-14" />
          </button>
        </div>

        {/* Dots Indicator (Bawah) */}
        <div className="flex gap-2 md:gap-3 z-20 mt-2">
          {DUMMY_PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-3 md:h-4 rounded-full transition-all duration-300 border-2 border-white/80 shadow-md ${
                selectedIndex === idx ? "w-10 md:w-12 bg-[#AB6938]" : "w-3 md:w-4 bg-[#AB6938]/40"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
