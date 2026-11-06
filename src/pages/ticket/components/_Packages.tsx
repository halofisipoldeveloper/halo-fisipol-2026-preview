import TicketCard from "./_CardPackage";

const TicketPackages = [
  {id: 1, title: 'Day 1', subtitle: '28 NOVEMBER 2026'},
  {id: 2, title: 'Day 2', subtitle: '29 NOVEMBER 2026'},
  {id: 3, title: 'Bundling Pass', subtitle: '28-29 NOVEMBER 2026'},
]


export default function Packages() {
  return (
    <div className="relative w-full my-32 md:my-0 flex flex-col justify-center items-center">
      <img
        src="/ticket-text.svg"
        alt="ticket-text"
        className="w-32 md:w-44 select-none mb-4"
      />
      <div className="w-full  max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center mx-auto">
        {TicketPackages.map((ticketPackage) => {
          return (
            <TicketCard key={ticketPackage.id} id={ticketPackage.id} title={ticketPackage.title} subtitle={ticketPackage.subtitle} />
          )
        })}
      </div>
   </div>
  );
}
