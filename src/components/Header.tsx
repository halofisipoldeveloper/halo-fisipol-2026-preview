import MountainSilhouette from "./MountainSilhouette";
import Sand from "./Sand";
import Mountains from "./Mountains";
import Clouds from "./Clouds";
import Gate from "./Gate";
import PinkHouse from "./PinkHouse";
import Cactus from "./Cactus";

export default function Header() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-linear-to-b from-[#71CFEB] to-[#F7E8C5]">
            <div className="relative w-full h-full animate-gate-in">
                <div className="absolute bottom-60 w-full">
                    <MountainSilhouette />
                </div>

                <div className="absolute top-20 w-full">
                    <Clouds />
                </div>

                <div className="absolute bottom-44 w-full">
                    <Mountains />
                </div>

                <div className="absolute bottom-0 w-full">
                    <Sand />
                </div>

                <div className="absolute bottom-36 md:bottom-52 w-full">
                    <PinkHouse />
                </div>

                <div className="absolute bottom-0 right-16 w-full">
                    <Gate />
                </div>
            </div>

            <div className="absolute -bottom-5 w-full z-10">
                <Cactus />
            </div>
        </section>
    );
}
