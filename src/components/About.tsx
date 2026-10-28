import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import WoodWall from "./WoodWall";
import Tables from "./Tables";
import WallOrnament from "./WallOrnament";
import Poster from "./Poster";
import FloorOrnament from "./FloorOrnament";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLElement>(null);
    const ornamentRef = useRef<HTMLDivElement>(null);
    const posterRef = useRef<HTMLDivElement>(null);
    const floorRef = useRef<HTMLDivElement>(null);
    const tablesRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%", // Animasi mulai saat ujung atas section ini mencapai 70% tinggi layar
                toggleActions: "play none none reverse", // Mainkan saat masuk, kembalikan posisi saat scroll ke atas lagi
            }
        });

        // 1. Ornamen turun dari atas
        tl.from(ornamentRef.current, { y: -80, opacity: 0, duration: 0.8, ease: "back.out(1.5)" })
        // 2. Poster pop-up dari tengah (mulai sedikit lebih awal dengan "-=0.4")
          .from(posterRef.current, { scale: 0.8, opacity: 0, duration: 0.6, ease: "back.out(1.5)" }, "-=0.4")
        // 3. Lantai muncul pelan
          .from(floorRef.current, { opacity: 0, duration: 0.5 }, "-=0.2")
        // 4. Meja terdorong naik dari bawah
          .from(tablesRef.current, { y: 150, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4");

    }, { scope: containerRef });

    return (
        // Mengubah h-screen menjadi h-[100dvh] agar konsisten
        <section ref={containerRef} className="relative w-full flex justify-center h-[100dvh] overflow-hidden bg-linear-to-b from-[#5e3720] to-[#905532]">
            <WoodWall />

            <div ref={ornamentRef} className="w-full absolute max-w-5xl top-16">
                <WallOrnament />
            </div>

            <div ref={posterRef} className="w-full absolute max-w-[1560px] top-56 md:top-40">
                <Poster />
            </div>

            <div ref={floorRef} className="w-full absolute bottom-32 max-w-[1740px]">
                <FloorOrnament />
            </div>

            <div ref={tablesRef} className="w-full absolute bottom-12 left-0">
                <Tables />
            </div>
        </section>
    );
}
