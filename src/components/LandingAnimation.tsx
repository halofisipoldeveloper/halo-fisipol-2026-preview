import { useEffect, useState } from 'react';
import { Live2D } from 'live2d-react';
import { navigate } from 'astro:transitions/client';
import HorseAnimation from './HorseAnimation';

export default function LandingAnimation() {

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex justify-center items-center bg-linear-to-b from-[#71CFEB] to-[#F7E8C5]">

      {/* Container diubah menjadi w-full h-full agar fleksibel menutupi ukuran device apapun */}
      <div className="relative w-full h-full flex justify-center items-center">

        {/* Matahari: Ukuran dan posisinya dibuat bertingkat (mobile -> ultrawide) */}
        <img
          src="/sun.webp"
          alt="sun"
          className="absolute top-[10%] right-10 w-32 select-none pointer-events-none block max-w-none z-0"
        />

        {/* Background Image: object-cover menjamin gambar tidak gepeng dan selalu menutupi ruang */}
        <img
          src="/landing-background.webp"
          alt="landing-background"
          className="absolute top-0 md:left-0 w-full h-full object-cover object-bottom select-none pointer-events-none block max-w-none z-10"
        />

        {/* Parent Container (Selalu Terkunci Tepat di Tengah Layar) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-y-4 md:gap-y-8 min-[2560px]:gap-y-16 mt-20 md:mt-32">
          <HorseAnimation/>
        </div>

      </div>
    </section>
  );
}
