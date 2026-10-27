import { useState, useRef, useEffect } from "react";

const pages = [
  { title: 'Tiket', value: '/ticket' },
  { title: 'Rundown', value: '/rundown' },
  { title: 'Galeri', value: '/gallery' },
  { title: 'FAQ', value: '/faq' },
];

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      setHeight(isOpen ? menuRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`w-full flex flex-col  md:max-w-2xl px-8 py-4 md:mx-4 bg-linear-to-b from-[#875033] to-[#4C2E1E] border-b-2 md:border-2 border-white drop-shadow-xl transition-all duration-500 ease-in-out md:rounded-full
      }`}
    >
      <div className="flex w-full items-center justify-between md:justify-evenly">
        <a href="/">
          <img src="/logo.svg" alt="logo" className="w-12" />
        </a>

        <div className="hidden md:flex w-full justify-evenly">
          {pages.map((page) => (
            <a
              key={page.title}
              href={page.value}
              className="text-white text-xl hover:underline font-cowboy tracking-widest"
            >
              {page.title}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden items-center justify-center focus:outline-none"
        >
          {isOpen ? (
            <img src="/close.svg" alt="close" className="w-8 h-8" />
          ) : (
            <img src="/harmburger.svg" alt="hamburger" className="w-6 h-6" />
          )}
        </button>
      </div>

      <div
        style={{ height: `${height}px` }}
        className="w-full overflow-hidden transition-[height] duration-500 ease-in-out md:hidden"
      >
        <div ref={menuRef} className="flex flex-col items-center gap-y-6 pt-8 pb-4">
          {pages.map((page) => (
            <a
              key={page.title}
              href={page.value}
              className="text-white text-xl hover:underline font-cowboy tracking-widest"
            >
              {page.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
