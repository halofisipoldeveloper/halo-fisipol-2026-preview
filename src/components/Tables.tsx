import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Tambahkan 'group relative transition-all' agar animasi mulus dan bisa memicu efek di child-nya
const handleHover = 'group relative transition-all duration-500 ease-in-out hover:-translate-y-16';

gsap.registerPlugin(ScrollTrigger);


export default function Tables() {
  const containerRef = useRef<HTMLElement>(null);
  const rightTableRef = useRef<HTMLDivElement>(null);
  const leftTableRef = useRef<HTMLDivElement>(null);

  const transitionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(rightTableRef.current, { x: -80, duration: 0.8, ease: "back.out(1.5)" })
      .from(leftTableRef.current, { x: 80, duration: 0.8, ease: "back.out(1.5)" }, "<");

  }, { scope: containerRef });
    return (
        <section ref={containerRef} className="flex justify-center items-end w-full">

        <a href="/about">
          <div ref={rightTableRef}>
            <div   className={`${handleHover} hover:-translate-x-4`}>
                <div  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 2xl:w-142 md:h-80 2xl:h-142 bg-yellow-400 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out "></div>

                <img
                    src="/table.svg"
                    alt="table"
                    className="relative z-10 w-44 md:w-64 2xl:w-86 object-cover object-bottom"

                />
            </div>
         </div>
            </a>

        <a href="/about-fisipol">
          <div ref={leftTableRef}>
            <div className={`${handleHover} hover:translate-x-4`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 2xl:w-142 md:h-80 2xl:h-142 bg-yellow-400 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out "></div>

                <img
                    src="/table-1.svg"
                    alt="table-1"
                    className="relative z-10 w-44 md:w-64 2xl:w-86 object-cover object-bottom"
                />
            </div>
          </div>
            </a>

        </section>
    );
}
