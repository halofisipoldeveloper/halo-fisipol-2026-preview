import Leveling from "./Leveling";
import HeaderTransition from "./HeaderTransition";
import Clouds from "./Clouds";

export default function Map() {

  return (
    <div  className="relative w-full h-[1620px] overflow-hidden bg-linear-to-b to-[#71CFEB] from-[#71CFEB]">
      <div  className="absolute -top-15 w-full z-10">
        <HeaderTransition/>
      </div>
      <div  className="absolute top-20 w-full">
          <Clouds />
      </div>

      <div className="w-full h-full absolute left-0 bottom-0 scale-105 -translate-y-60">
        <Leveling />
      </div>

    </div>
  );
}
