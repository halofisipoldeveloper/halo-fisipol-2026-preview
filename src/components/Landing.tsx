import { useEffect, useState } from 'react';
import { Live2D } from 'live2d-react';
import { navigate } from 'astro:transitions/client';

export default function Landing() {
  const [live2dModel, setLive2dModel] = useState<any>(null);

  const handleClick = () => {
    navigate('/home');
  };

  return (
    // Background gradient dipindah ke section utama agar layar selalu tertutup penuh
    <section className="relative w-full h-screen overflow-hidden flex justify-center items-center bg-linear-to-b from-[#71CFEB] to-[#F7E8C5]">

      {/* Container diubah menjadi w-full h-full agar fleksibel menutupi ukuran device apapun */}
      <div className="relative w-full h-full flex justify-center items-center">

        {/* Matahari: Ukuran dan posisinya dibuat bertingkat (mobile -> ultrawide) */}
        <img
          src="/sun.webp"
          alt="sun"
          className="absolute top-[10%] md:top-[15%] right-10 md:right-48 2xl:right-96 w-32 md:w-64 lg:w-96 2xl:w-[500px] min-[2560px]:w-[700px] select-none pointer-events-none block max-w-none z-0"
        />

        {/* Background Image: object-cover menjamin gambar tidak gepeng dan selalu menutupi ruang */}
        <img
          src="/landing-background.webp"
          alt="landing-background"
          className="absolute top-0 left-0 w-full h-full object-cover object-bottom select-none pointer-events-none block max-w-none z-10"
        />

        {/* Parent Container (Selalu Terkunci Tepat di Tengah Layar) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-y-4 md:gap-y-8 min-[2560px]:gap-y-16 mt-20 md:mt-32">

          {/* Wrapper Live2D:
              - Skala mengecil (scale-50) di HP, dan membesar (scale-125/150) di Ultrawide.
              - origin-bottom menjaga agar saat membesar/mengecil, kaki karakter tetap berpijak di titik yang sama.
              - translate-x dan translate-y disesuaikan proporsinya per ukuran layar.
          */}
          <div className="relative
            -translate-x-20 md:-translate-x-48 2xl:-translate-x-68 min-[2560px]:-translate-x-96
            translate-y-12 md:translate-y-32 2xl:translate-y-48
            w-[640px] h-[640px] flex justify-center items-center
            scale-50 sm:scale-75 md:scale-100 2xl:scale-[1.25] min-[2560px]:scale-[1.5] origin-bottom"
          >
            <Live2D
              modelJsonPath="/models/horse-run/horse-run.model3.json"
              coreScriptSrc="/cubism/core/live2dcubismcore.min.js"
              style={{ width: 640, height: 640 }}
              renderOptions={{
                fitMode: 'height',
                anchorY: 'bottom'
              }}
              onLoad={(model) => setLive2dModel(model)}
            />
          </div>

          {/* Button: Padding dan ukuran font menyesuaikan ukuran device */}
          <button
            onClick={handleClick}
            className="relative z-20 px-8 md:px-12 py-3 border-dashed bg-pink-500 border-2 border-white text-white text-base md:text-xl min-[2560px]:text-3xl font-medium rounded-full transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 cursor-pointer"
          >
            Mulai
          </button>

        </div>

      </div>
    </section>
  );
}
