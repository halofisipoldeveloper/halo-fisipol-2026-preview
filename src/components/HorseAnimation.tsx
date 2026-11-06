import { Live2D } from "live2d-react";
import { useState } from "react";

export default function HorseAnimation() {
  const [live2dModel, setLive2dModel] = useState<any>(null);

  return (
    <div className="relative
      -translate-x-48 md:-translate-x-72 2xl:-translate-x-96 min-[2560px]:-translate-x-148
      translate-y-12 md:translate-y-32 2xl:translate-y-48
      w-[640px] h-[640px] flex justify-center items-center
      scale-50 sm:scale-75 md:scale-100   origin-bottom"
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
  );
};
