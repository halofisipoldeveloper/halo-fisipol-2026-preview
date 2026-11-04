import { Live2D } from 'live2d-react';

export default function Landing() {
  return (
    <div className='w-full h-full '>
      <Live2D
        modelJsonPath="/models/horse-run/horse-run.model3.json"
        coreScriptSrc="/cubism/core/live2dcubismcore.min.js"
        style={{ width: 420, height: 420 }}
        renderOptions={{
          fitMode: 'height',
          anchorY: 'bottom'
        }}
      />
    </div>
  );
}
