import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import MountainSilhouette from "./MountainSilhouette";
import Sand from "./Sand";
import Mountains from "./Mountains";
import Clouds from "./Clouds";
import Gate from "./Gate";
import PinkHouse from "./PinkHouse";
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
  const transitionRef = useRef<HTMLDivElement>(null)

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
        .to(houseRef.current, { y: 40 }, 0)// Agak depan
        .to(transitionRef.current, { y: -50 }, 0);

        // Sand, Gate, dan Cactus dibiarkan tanpa ref GSAP agar scroll secara normal (paling cepat)

    }, { scope: containerRef }); // Scope membatasi GSAP mencari elemen hanya di dalam container ini

    return (
        // Ganti h-screen dengan h-[100dvh] dan pasang containerRef
        <section ref={containerRef} className="relative w-full h-screen  bg-linear-to-b from-[#71CFEB] to-[#F7E8C5]">
            <div className="relative w-full h-full animate-gate-in">

                {/* Tambahkan ref ke layer yang ingin diberi efek parallax */}
                <div ref={silhouetteRef} className="absolute bottom-60 w-full">
                    <MountainSilhouette />
                </div>

                <div ref={cloudsRef} className="absolute top-20 w-full">
                    <Clouds />
                </div>

                <div ref={mountainsRef} className="absolute bottom-44 w-full">
                    <Mountains />
                </div>

                {/* Elemen foreground dibiarkan biasa */}
                <div className="absolute bottom-0 w-full">
                    <Sand />
                </div>

                <div ref={houseRef} className="absolute bottom-36 md:bottom-52 w-full">
                    <PinkHouse />
                </div>

                <div className="absolute bottom-0 right-16 w-full">
                    <Gate />
          </div>

          <div className="absolute bottom-0 w-full z-10">
              <Cactus />
          </div>
            </div>

        <div ref={transitionRef} className="absolute -bottom-23 w-full z-10">
          <HeaderTransition/>
            </div>
        </section>
    );
}
