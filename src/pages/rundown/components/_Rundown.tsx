import { useState } from "react";
import Carousel from "./_Carousel";

const rundownSlides = [
  {
    id: 1,
    image: "/rundown-table-day-1.svg",
    alt: "Rundown Day 1",
  },
  {
    id: 2,
    image: "/rundown-day-2.svg",
    alt: "Rundown Day 2",
  },
];

export default function Rundown() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full min-h-screen max-w-5xl flex flex-col gap-10 md:gap-3 justify-start items-center mx-auto p-6 pt-24 md:pt-22 pb-6">

      {/* Judul Rundown */}
      <div className="w-full flex flex-col justify-start items-center relative z-20">
        <img
          src="/rundown-text.svg"
          alt="rundown-text"
          className="w-48 md:w-52 2xl:w-64 h-auto object-contain"
        />

        {/* Day Label */}
        <img
          src={`/day-${currentIndex + 1}-text.svg`}
          alt={`day-${currentIndex + 1}-text`}
          className="w-24 md:w-28 2xl:w-32 h-auto object-contain transition-all duration-300"
        />
      </div>

      {/* Carousel */}
      <Carousel
        items={rundownSlides}
        onSlideChange={setCurrentIndex}
      />

    </div>
  );
}

// import { useState } from "react";
// import Carousel from "./_Carousel";

// const rundownSlides = [
//   { id: 1, image: "/rundown-table-day-1.svg", alt: "Rundown Day 1"},
//   { id: 2, image: "/rundown-day-2.svg", alt: "Rundown Day 2" }, // Ganti ke gambar Day 2 jika ada
// ];

// export default function Rundown() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <div className="w-full min-h-screem max-w-5xl flex flex-col gap-10 md:gap-16 justify-center items-center mx-auto p-6">

//       {/* Judul */}
//       <div className="w-full flex justify-center items-center relative z-20">
//         <img
//           src="/rundown-text.svg"
//           alt="rundown-text"
//           className="w-48 md:w-52 2xl:w-64 h-auto object-contain"
//         />

//         <img
//             src={`/day-${currentIndex + 1}-text.svg`}
//             alt={`day-${currentIndex + 1}-text`}
//             className="w-24 md:w-28 2xl:w-32 h-auto object-contain transition-all duration-300"
//           />

//         {/* Day (Berubah otomatis berdasarkan index slide aktif: index 0 -> day-1, index 1 -> day-2) */}
        
//       </div>

//       {/* Carousel */}
//       <Carousel items={rundownSlides} onSlideChange={setCurrentIndex}/>

//     </div>
//   );
// }
