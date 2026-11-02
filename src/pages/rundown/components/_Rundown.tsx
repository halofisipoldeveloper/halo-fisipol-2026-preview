import Carousel from "./_Carousel";

const rundownSlides = [
  { id: 1, image: "/rundown-table.svg", alt: "Rundown Day 1" },
  { id: 2, image: "/rundown-table.svg", alt: "Rundown Day 2" }, // Ganti ke gambar Day 2 jika ada
];

export default function Rundown() {
  return (
    <div className="w-full min-h-[100dvh] max-w-5xl flex flex-col gap-10 md:gap-16 justify-center items-center mx-auto p-6">

      {/* Judul */}
      <div className="w-full flex justify-center items-center relative z-20">
        <img
          src="/rundown-text.svg"
          alt="rundown-text"
          className="w-48 md:w-52 2xl:w-64 h-auto object-contain"
        />
      </div>

      {/* Carousel */}
      <Carousel items={rundownSlides} />

    </div>
  );
}
