import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
    const containerRef = useRef<HTMLElement>(null);
    const horseshoeRef = useRef<HTMLImageElement>(null);

    return (
        <section  className="relative w-full min-h-screen overflow-hidden bg-linear-to-b to-[#71CFEB] from-[#905532]">
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-14">
                <img
                    src="/mountain-2.svg"
                    alt="mountain-2"
                    className="w-md absolute left-0 top-0 max-w-none"
                />

                <img

                    src="/land.svg"
                    alt="land"
                    className="w-[1920px] max-w-none"
                />
            </div>
        </section>
    );
}
