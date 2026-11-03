import Leveling from "./Leveling";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP  } from "@gsap/react";
import { useRef } from "react";
import HeaderTransition from "./HeaderTransition";


export default function Map() {

  return (
    <div  className="relative w-full h-[1620px] overflow-hidden bg-linear-to-b to-[#71CFEB] from-[#71CFEB]">
      <div  className="absolute -top-15 w-full z-10">
        <HeaderTransition/>
          </div>
      <div className="w-full h-full absolute left-0 bottom-0 scale-105 -translate-y-56">
        <Leveling />
      </div>

    </div>
  );
}
