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
    >
      {/* Container Gambar Node dengan transform-origin di bawah */}
      <div className="relative origin-bottom transition-transform duration-300 ease-out group-hover:scale-110">
        <img
          src="/node.png"
          alt={title}
          width={110}
          height={110}
          className="w-[110px] h-auto object-contain select-none pointer-events-none drop-shadow-md"
        />
      </div>

      {/* Title Label */}
      <span className="text-sm md:text-base font-semibold text-slate-800 text-center tracking-wide transition-colors duration-200 group-hover:text-amber-600">
        {title}
      </span>
    </Component>
  );
}
