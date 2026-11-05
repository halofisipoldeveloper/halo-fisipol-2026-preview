interface NodeProps {
  title: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  textColor?: string; // Tambahan prop untuk custom warna teks
}

export default function Node({
  title,
  href,
  onClick,
  className = "",
  textColor = "text-[#6D3929]" // Dummy warna custom default
}: NodeProps) {
  const Component = href ? "a" : "button";

  // Kita simpan class dasar teks di variabel agar ukurannya konsisten di kedua layer (bawah dan depan)
  const textBaseClass = "text-xl md:text-2xl 2xl:text-3xl font-bold text-center tracking-wide font-cowboy";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center gap-y-3 cursor-pointer outline-none ${className}`}
    >
      {/* Container Gambar Node dengan transform-origin di bawah */}
      <div className="relative origin-bottom transition-transform duration-300 ease-out group-hover:scale-[1.15]">

        {/* Efek Cahaya (Glow) di Belakang Gambar Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-yellow-400 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-in-out pointer-events-none"></div>

        {/* Gambar Node (z-10 agar selalu di depan cahaya) */}
        <img
          src="/node.png"
          alt={title}
          width={110}
          height={110}
          className="relative z-10 w-[110px] h-auto object-contain select-none pointer-events-none drop-shadow-md"
        />
      </div>

      {/* Container Title Label (Layering Teks) */}
      <div className="relative flex justify-center items-center z-10">

        {/* LAYER BAWAH: Efek Border (Stroke) */}
        {/* Kita gunakan 4px karena 2px akan melebar ke luar dan 2px masuk ke dalam (yang akan ditimpa layer atas) */}
        <span
          className={`absolute ${textBaseClass} text-white [-webkit-text-stroke:4px_white] tracking-widest`}
          aria-hidden="true" // Mencegah screen reader membaca teks ini dua kali
        >
          {title}
        </span>

        {/* LAYER DEPAN: Warna Asli Teks yang Menimpa */}
        <span
          className={`relative ${textBaseClass} transition-colors duration-200 group-hover:text-amber-500 ${textColor} tracking-widest`}
        >
          {title}
        </span>

      </div>
    </Component>
  );
}
