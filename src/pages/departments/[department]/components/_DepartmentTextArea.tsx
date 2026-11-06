import { useMediaQuery } from "react-responsive";

type Props = {
  id: number;
  title: string;
  color: string;
  href: string;
};

export default function DepartmentCard({ title, color, href }: Props) {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  const titleClass =
    "text-center text-4xl md:text-5xl uppercase flex flex-col items-center leading-none";

  const content = isDesktop
    ? title.split("").map((char, index) => (
        <span key={index}>{char === " " ? "\u00A0" : char}</span>
      ))
    : title;

  return (
    <a
      href={href}
      aria-label={title}
      className="group block w-full relative max-w-lg h-full"
    >
      <div
        className={`w-full h-[100px] md:h-[340px] lg:h-[400px] xl:h-[480px] 2xl:h-[560px] flex flex-col gap-y-4 justify-center items-center ${color} rounded-3xl p-4 text-[#6D3929] border-3 border-white border-dashed font-cowboy shadow-md`}
      >
        <div className="relative">
          <h1
            aria-hidden="true"
            className={`absolute inset-0 ${titleClass} text-white [-webkit-text-stroke:4px_white]`}
          >
            {content}
          </h1>

          <h1 className={`relative ${titleClass}`}>{content}</h1>
        </div>
      </div>
    </a>
  );
}
