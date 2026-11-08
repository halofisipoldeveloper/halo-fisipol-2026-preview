import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import MountainSilhouette from "./MountainSilhouette";
import Sand from "./Sand";
import Companion from "./Companion";
import Mountains from "./Mountains";
import Clouds from "./Clouds";
import Houses from "./Houses";
import Cactus from "./Cactus";
import HeaderTransition from "./HeaderTransition";

// Registrasi plugin di luar komponen
gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cloudsRef = useRef<HTMLDivElement>(null);
    const silhouetteRef = useRef<HTMLDivElement>(null);
    const mountainsRef = useRef<HTMLDivElement>(null);
    const houseRef = useRef<HTMLDivElement>(null);
    const transitionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Timeline GSAP yang terikat dengan scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",      // Mulai saat ujung atas header menyentuh ujung atas layar
                end: "bottom top",     // Selesai saat ujung bawah header menyentuh ujung atas layar
                scrub: true,           // Animasi mengikuti pergerakan scroll (tidak jalan otomatis)
            }
        });

        // Terapkan pergeseran Y berdasarkan kedalaman.
        // Angka 0 di belakang berarti semua animasi berjalan bersamaan di timeline
        tl.to(cloudsRef.current, { y: 250 }, 0)       // Paling jauh, pergeseran paling besar
          .to(silhouetteRef.current, { y: 150 }, 0)   // Agak jauh
          .to(mountainsRef.current, { y: 100 }, 0)    // Tengah
          .to(houseRef.current, { y: 40 }, 0)         // Agak depan
          .to(transitionRef.current, { y: -40 }, 0);

        // Sand, Companion, Logo, dan Cactus dibiarkan tanpa ref GSAP agar scroll secara normal (paling cepat)

    }, { scope: containerRef }); // Scope membatasi GSAP mencari elemen hanya di dalam container ini

    return (
        // Ganti h-screen dengan h-[100dvh] dan pasang containerRef
        <section ref={containerRef} className="relative w-full h-[100dvh] bg-linear-to-b from-[#71CFEB] to-[#F7E8C5] overflow-hidden">            <div className="relative w-full h-full animate-gate-in">

                {/* Layer Parallax Background */}
                <div ref={silhouetteRef} className="absolute bottom-40 md:bottom-60 w-full pointer-events-none">
                    <MountainSilhouette />
                </div>

                <div ref={cloudsRef} className="absolute top-10 md:top-20 w-full pointer-events-none">
                    <Clouds />
                </div>

                <div ref={mountainsRef} className="absolute bottom-32 md:bottom-44 w-full pointer-events-none">
                    <Mountains />
                </div>

                {/* Layer Foreground */}
                <div className="absolute bottom-0 w-full pointer-events-none">
                    <Sand />
                </div>

                <div ref={houseRef} className="absolute bottom-48 md:bottom-58 2xl:bottom-52 w-full pointer-events-none">
                    <Houses />
                </div>

                {/* Logo - Diposisikan di tengah secara horizontal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center  pointer-events-none">
                    <img
                        src="/logo.svg"
                        alt="logo"
                        className="w-40 md:w-64 2xl:w-80 object-contain drop-shadow-lg"
                    />
                </div>

                {/* Karakter (Companion) - Diset di kanan bawah dengan ukuran responsif */}
                <div className="absolute -bottom-12 right-0 md:-right-40  w-full">
                    <Companion width="300px" height="300px" />
                </div>

                {/* Kaktus - Diletakkan paling depan */}
                <div className="absolute bottom-0 w-full z-30 pointer-events-none">
                    <Cactus />
                </div>
            </div>

            {/* Transisi ke section berikutnya */}
            <div ref={transitionRef} className="absolute -bottom-16 md:-bottom-24 w-full z-40 pointer-events-none">
                <HeaderTransition />
            </div>

        </section>
    );
}
