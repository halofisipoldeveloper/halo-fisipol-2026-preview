import { useEffect, useRef, useState } from "react";

type Props = {
    width?: string;
    height?: string;
};

export default function Companion({ width = "300px", height = "300px" }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isVisible, setIsVisible] = useState(false); // State untuk kontrol opacity

    useEffect(() => {
        if (!canvasRef.current) return;

        let rive: InstanceType<typeof import("@rive-app/webgl2").Rive> | null = null;
        let timeoutId: NodeJS.Timeout; // Menyimpan ID timeout untuk cleanup

        import("@rive-app/webgl2").then(({ Rive }) => {
            rive = new Rive({
                src: "/animations/companion.riv",
                canvas: canvasRef.current!,
                artboard: "Artboard 1",
                stateMachines: "State Machine",
                autoplay: true,
                onLoad: () => {
                    rive?.resizeDrawingSurfaceToCanvas();
                    rive?.play();

                    // Tunggu 2 detik (2000ms) setelah animasi siap, lalu munculkan
                    timeoutId = setTimeout(() => {
                        setIsVisible(true);
                    }, 2200);
                },
            });
        });

        return () => {
            rive?.cleanup();
            if (timeoutId) clearTimeout(timeoutId); // Cegah memory leak jika user pindah halaman cepat
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center">
            <canvas
                ref={canvasRef}
                // Tailwind classes untuk handle transisi fade in-out 300ms
                className={`transition-opacity duration-300 ease-in-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                    width,
                    height,
                    imageRendering: "-webkit-optimize-contrast",
                }}
            />
        </div>
    );
}
