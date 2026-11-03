import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {



    return (
        <section  className="relative w-full h-screen overflow-hidden bg-linear-to-b from-[#71CFEB] to-[#E4F0EF]">
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-14">
                <img
                    src="/gallery-text.svg"
                    alt="gallery-text"
                    className="w-32 md:w-44 z-10"
                />

                <img

                    src="/horseshoe.svg"
                    alt="horseshoe"
                    className="w-52 md:w-md"
                />
            </div>
        </section>
    );
}
