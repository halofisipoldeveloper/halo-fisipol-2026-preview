import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
    const containerRef = useRef<HTMLElement>(null);
    const horseshoeRef = useRef<HTMLImageElement>(null);

    return (
        <section className="relative w-full min-h-screen flex   bg-linear-to-b to-[#71CFEB] from-[#905532]">

            {/* Pembungkus Kanvas 1920px Terpusat */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0  w-[1920px] h-full flex flex-col justify-center items-center">

                {/* Gunung terkunci relatif terhadap kanvas 1920px */}
                <img
                    src="/mountain-2.svg"
                    alt="mountain-2"
                    className="w-96 absolute left-0 -top-52 max-w-none"
          />

          <img
              src="/mountain-4.svg"
              alt="mountain-4"
              className="w-36 absolute left-[520px] -top-24 max-w-none"
    />

          <img
              src="/start.svg"
              alt="start"
              className="w-20 absolute left-[480px] -top-14 max-w-none"
    />

          <img
              src="/cactus.svg"
              alt="cactus"
              className="w-20 absolute left-[400px] top-0 max-w-none"
          />

          <img
              src="/blue-house.svg"
              alt="blue-house"
              className="w-46 absolute left-[350px] top-30 max-w-none"
          />


          <img
              src="/cactus-2.svg"
              alt="cactus-2"
              className="w-16 absolute left-[700px] -top-20 max-w-none"
          />


          <img
              src="/mountain-3.svg"
              alt="mountain-3"
              className="w-2xs absolute left-0 -top-10 max-w-none"
          />

          <img
              src="/pink-house-1.svg"
              alt="pink-house-1"
              className="w-xl absolute -right-[200px] -top-48 max-w-none"
          />

          <img
              src="/horses.svg"
              alt="horses"
              className="w-3xs absolute right-[300px] -top-0 max-w-none"
          />
          <img
              src="/cactus.svg"
              alt="cactus"
              className="w-16 absolute left-[200px] top-64 max-w-none"
    />



          <img
              src="/bridge.svg"
              alt="bridge"
              className="w-48 absolute right-[750px] -top-24 max-w-none"
          />

          <img
              src="/cactus-1.svg"
              alt="cactus-1"
              className="w-16 absolute right-[600px] -top-14 max-w-none"
          />

          <img
              src="/cactus-2.svg"
              alt="cactus-2"
              className="w-16 absolute right-[800px] top-20 max-w-none"
    />



                {/* Tanah */}
                <img
                    src="/land.svg"
                    alt="land"
                    className="w-full max-w-none"
                />

            </div>

        </section>
    );
}
