import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
    const containerRef = useRef<HTMLElement>(null);
    const horseshoeRef = useRef<HTMLImageElement>(null);

    return (
        <section  className="relative w-full h-screen overflow-hidden bg-linear-to-b to-[#71CFEB] from-[#905532]">
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-14">
                <img
                    src="/gallery-text.svg"
                    alt="gallery-text"
                    className="w-32 md:w-44 z-10"
                />

                <img

                    src="/map.svg"
                    alt="map"
                    className="w-[1920px]"
                />
            </div>
        </section>
    );
}
