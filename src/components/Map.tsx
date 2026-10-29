import Leveling from "./leveling";

export default function Map() {
  return (
    <div className="relative w-full h-[1920px] overflow-hidden bg-linear-to-b to-[#71CFEB] from-[#905532]">

      <div className="w-full h-full absolute left-0 bottom-0 scale-105 translate-y-[150px]">
        <Leveling />
      </div>

    </div>
  );
}
