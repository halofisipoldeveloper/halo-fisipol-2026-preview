export default function Rundown() {
  return (
    <div className="w-full min-h-dvh max-w-5xl flex flex-col gap-10 md:gap-16 justify-center items-center mx-auto p-6">

      <div className="w-full flex justify-center items-center relative z-20">
        <img
          src="/rundown-text.svg"
          alt="rundown-text"
          className="w-48 md:w-64 h-auto object-contain"
        />
      </div>

      <div className="relative w-full flex justify-center items-center text-[#6D3929]">

        <img
          src="/rundown-background.svg"
          alt="rundown-background"
          className="absolute w-full max-w-sm md:max-w-3xl h-auto object-contain z-0"
        />

        <img
          src="/rundown-table.svg"
          alt="rundown-table"
          className="relative w-full max-w-3xs md:max-w-2xl h-auto object-contain z-10 drop-shadow-xl"
        />

      </div>

    </div>
  );
}
