import { useEffect, useState } from 'react';
import { Live2D } from 'live2d-react';
import { navigate } from 'astro:transitions/client';

export default function Landing() {
  const [live2dModel, setLive2dModel] = useState<any>(null);

  const handleClick = () => {
    navigate('/home');
  };


  return (
    <section className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      {/* Container Canvas 1920px */}
      <div className="relative w-[1920px] h-full shrink-0 flex bg-linear-to-b from-[#71CFEB] to-[#F7E8C5] justify-center items-center">

        {/* Background Image (Full 1920px) */}
        <img
          src="/landing-background.webp"
          alt="landing-background"
          className="w-[1920px] h-full object-cover select-none pointer-events-none block max-w-none"
        />


        {/* Parent Container (Selalu Terkunci Tepat di Tengah Layar) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-y-4">

          {/* Wrapper Live2D: Digeser ke kiri saja (misal: -translate-x-12 atau -translate-x-16) */}
          <div className="relative -translate-x-68 md:-translate-x-110 translate-y-80  w-[640px] h-[640px] flex justify-center items-center">
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

          <button onClick={handleClick} className="px-8 py-3 border-dashed bg-pink-500 border-2 border-white text-white font-medium rounded-full  transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer">
            Mulai
          </button>

        </div>

      </div>
    </section>
  );
}
