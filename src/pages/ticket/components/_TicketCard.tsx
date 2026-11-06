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
  {id: 1, title: 'Callie', color: 'bg-[#F2C15A]'},
  {id: 2, title: 'Pecko', color: 'bg-[#E099B1]'},
  {id: 3, title: 'Toby', color: 'bg-[#73C0B0]'},
]


export default function TicketCard({ id, title, subtitle }: Props) {


  return (
    <div className="w-full relative max-w-lg h-full">
      <div className="absolute -right-5 -top-7 w-20 rotate-20 animate-bounce">
        {id == 3 ? BestValue() : null}
      </div>

      <img
        src="/ticket-card-top.svg"
        alt="ticket-card-top"
        className="w-full h-full pointer-none"
      />
      <div className="w-full h-full flex flex-col gap-y-4 justify-start items-center bg-[#F9EAC9] p-4  text-[#6D3929]">
        <div className="font-cowboy">
          <h1 className="text-center text-4xl uppercase">{title}</h1>
          <p className="text-center text-2xl">{subtitle}</p>
        </div>

        <TicketButton/>
      </div>
    </div>
  );
};

export function TicketButton() {
  return (
    <div className="w-full flex flex-col gap-y-4">
      {TicketTypes.map((ticketType) => {
        return (
          <button
            key={ticketType.id}
            className={`px-8 py-2.5 ${ticketType.color} text-white text-4xl font-bold font-satoshi tracking-wide rounded-sm shadow-md hover:${ticketType.color}/80 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer `}
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
