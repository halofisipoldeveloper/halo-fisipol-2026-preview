interface NodeProps {
  title: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Node({ title, href, onClick, className = "" }: NodeProps) {
  const Component = href ? "a" : "button";

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

      {/* Title Label */}
      <span className="text-sm md:text-base font-semibold text-slate-800 text-center tracking-wide transition-colors duration-200 group-hover:text-amber-600 z-10">
        {title}
      </span>
    </Component>
  );
}
