import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Train() {
  const trainRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        trainRef.current,
        { x: 1050 },
        {
          x: -1050,
          duration: 12,
          ease: "none",
          repeat: -1,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full flex justify-center items-center">
      <img
        ref={trainRef}
        src="/train.svg"
        alt="train"
        className="absolute left-1/2 -translate-x-1/2 -bottom-17 z-10 w-xs max-w-none select-none pointer-events-none"
      />

      <img
        src="/rail.svg"
        alt="rail"
        className="w-[1920px] max-w-none block relative z-0 select-none"
      />
    </div>
  );
}
