import WoodWall from "./WoodWall";
import Tables from "./Tables";
import WallOrnament from "./WallOrnament";
import Poster from "./Poster";
import FloorOrnament from "./FloorOrnament";

export default function About() {
  return (
    <div className="relative w-full flex justify-center  h-screen overflow-hidden bg-linear-to-b from-[#5e3720] to-[#905532]">
      <WoodWall />

      <div className="w-full absolute  max-w-5xl top-16 ">
        <WallOrnament />
      </div>

      <div className="w-full absolute max-w-[1560px] top-56 md:top-40 ">
        <Poster/>
      </div>

      <div className="w-full absolute bottom-32 max-w-[1740px]">
        <FloorOrnament/>
      </div>

      <div className="w-full absolute bottom-12 left-0 ">
        <Tables/>
      </div>

    </div>
  );
}
