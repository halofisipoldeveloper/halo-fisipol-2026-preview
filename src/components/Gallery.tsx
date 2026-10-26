import MountainSilhouette from "./MountainSilhouette";
import Sand from "./Sand";
import Mountains from "./Mountains";
import Clouds from "./Clouds";
import Gate from "./Gate";
import PinkHouse from "./PinkHouse";
import Cactus from "./Cactus";


export default function Gallery() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-linear-to-b from-[#71CFEB] to-[#F7E8C5]">
        <div className="w-full flex justify-center items-center">
          <img
              src="/horseshoe.svg"
              alt="horseshoe"
              className="w-52 md:w-xl"
          />
        </div>
        </section>
    );
}
