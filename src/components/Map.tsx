import Leveling from "./Leveling";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP  } from "@gsap/react";
import { useRef } from "react";
import HeaderTransition from "./HeaderTransition";

gsap.registerPlugin(ScrollTrigger);

export default function Map() {
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%", // Animasi mulai saat ujung atas section ini mencapai 70% tinggi layar
                toggleActions: "play none none reverse", // Mainkan saat masuk, kembalikan posisi saat scroll ke atas lagi
            }
        });

        // 1. Ornamen turun dari atas
        tl          .to(transitionRef.current, { y: -50 }, 0);



    }, { scope: containerRef });
  return (
    <div ref={containerRef} className="relative w-full h-[1620px] overflow-hidden bg-linear-to-b to-[#71CFEB] from-[#71CFEB]">
      <div ref={transitionRef} className="absolute -top-0 w-full z-10">
        <HeaderTransition/>
          </div>
      <div className="w-full h-full absolute left-0 bottom-0 scale-105 -translate-y-56">
        <Leveling />
      </div>

    </div>
  );
}
