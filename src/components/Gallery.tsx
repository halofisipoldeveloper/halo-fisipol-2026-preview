import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
    const containerRef = useRef<HTMLElement>(null);
    const horseshoeRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        // Menggunakan gsap.from agar horseshoe ditarik dari bawah ke posisi aslinya
        gsap.from(horseshoeRef.current, {
            y: "100vh", // Berawal dari luar layar bagian bawah
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",      // Mengunci saat section menyentuh ujung atas layar
                end: "+=100%",         // Durasi scroll virtual (sepanjang 100% tinggi layar)
                pin: true,             // Membuatnya sticky / diam di tempat
                scrub: 1,              // Animasi maju/mundur mengikuti scroll dengan kehalusan 1 detik
            }
        });
    }, { scope: containerRef });

    return (
        // Gunakan h-[100dvh] untuk mobile-friendly screen height
        <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden bg-linear-to-b from-[#71CFEB] to-[#E4F0EF]">
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-14">
                <img
                    src="/gallery-text.svg"
                    alt="gallery-text"
                    className="w-32 md:w-44 z-10"
                />

                {/* Pasang ref pada horseshoe */}
                <img
                    ref={horseshoeRef}
                    src="/horseshoe.svg"
                    alt="horseshoe"
                    className="w-52 md:w-md"
                />
            </div>
        </section>
    );
}
