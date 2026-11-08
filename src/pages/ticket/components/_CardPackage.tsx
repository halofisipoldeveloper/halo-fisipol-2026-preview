import { navigate } from "astro:transitions/client";

type Props = {
  id: number;
  title: string;
  subtitle: string;
}

type TypesProps = {
  id: number;
  title: string;
  color: string;
}

const TicketTypes = [
  { id: 1, title: 'Callie', color: 'bg-[#F2C15A]', hoverColor: 'hover:bg-[#F2C15A]/80' },
  { id: 2, title: 'Pecko', color: 'bg-[#E099B1]', hoverColor: 'hover:bg-[#E099B1]/80' },
  { id: 3, title: 'Toby', color: 'bg-[#73C0B0]', hoverColor: 'hover:bg-[#73C0B0]/80' },
]

export default function CardPackage({ id, title, subtitle }: Props) {


  return (
    <div className="w-full relative max-w-lg h-full">
      <div className="absolute -right-5 -top-7 w-20 rotate-20 animate-bounce">
        {id == 3 ? BestValue() : null}
      </div>

      <img
        src="/package-card-top.svg"
        alt="package-card-top"
        className="w-full h-full pointer-none"
      />
      <div className="w-full h-full flex flex-col gap-y-4 justify-start items-center bg-[#F9EAC9] p-4  text-[#6D3929]">
        <div className="font-cowboy">
          <h1 className="text-center text-4xl uppercase">{title}</h1>
          <p className="text-center text-2xl">{subtitle}</p>
        </div>

        <PackageButton dayId={id}/>
      </div>
    </div>
  );
};

export function PackageButton({ dayId }: { dayId: number }) {
  return (
    <div className="w-full flex flex-col gap-y-4 font-satoshi">
      {TicketTypes.map((ticketType) => {
        const handleClick = (name: string) => {
          const dayRoute = dayId == 3 ? 'bundling-pass' : `day-${dayId}`;

            const routePath = `/ticket/${dayRoute}/${name.toLowerCase()}`;
            navigate(routePath);
          };

        return (
          <button
            key={ticketType.id}
            onClick={() => handleClick(ticketType.title)}
            className={`px-8 py-2.5 ${ticketType.color} text-white text-4xl font-semibold font-satoshi tracking-wide rounded-2xl shadow-md hover:${ticketType.hoverColor} hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer outline-none`}
          >
            {ticketType.title}
          </button>
        );
      })}
    </div>
  );
};


export function BestValue() {
  return (
    <div className="w-full">
      <img
        src="/best-value-text.svg"
        alt="best-value-text"
        className="w-full h-full pointer-none"
      />
    </div>
  );
};
