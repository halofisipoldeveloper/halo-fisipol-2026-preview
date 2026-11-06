import LandingAnimation from "./LandingAnimation";
import LandingText from "./LandingText";
import LandingSky from "./LandingSky";

export default function Landing() {

  return (
    <div className="relative w-full h-full flex flex-col bg-linear-to-b from-[#6caee0] to-[#a7d6e8]   justify-center items-center bg-linear-to-b from-[#71CFEB] to-[#F7E8C5]">
      <div className="absolute top-10 md:top-20 w-full pointer-events-none">
          <LandingSky />
      </div>
      <LandingAnimation />
    </div>
  );
}
