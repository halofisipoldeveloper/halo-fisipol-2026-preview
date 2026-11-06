interface SunProps {
  className?: string;
}

export default function Sun({ className = "" }: SunProps) {
  return (
    // Membawa posisi (top/right/left) dari props className
    <div className={`absolute flex justify-center items-center pointer-events-none z-0 ${className}`}>

      {/* 1. LAYER CAHAYA (BELAKANG) */}
      <img
        src="/sun-light.webp"
        alt="sun-light"
        // Ukuran responsif dari HP (w-56) hingga Desktop (w-[450px])
        className="absolute z-0 w-56 md:w-[450px] 2xl:w-[600px] min-[2560px]:w-[800px] select-none max-w-none object-contain"
      />

      {/* 2. LAYER MATAHARI INTI (DEPAN) */}
      <img
        src="/sun.webp"
        alt="sun"
        // Ukuran responsif dari HP (w-32) hingga Desktop (w-72)
        className="relative z-10 w-32 md:w-72 2xl:w-[400px] min-[2560px]:w-[550px] select-none max-w-none object-contain"
      />

    </div>
  );
}
