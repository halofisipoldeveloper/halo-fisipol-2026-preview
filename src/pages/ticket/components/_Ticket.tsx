import TicketCard from "./_TicketCard";

const TicketTypes = [
  {id: 1, title: 'testt', subtitle: 'testthhh'},
  {id: 2, title: 'testt', subtitle: 'testthhh'},
  {id: 3, title: 'testt', subtitle: 'testthhh'},
]


export default function Ticket() {
  return (
    <div className="relative w-full mt-32 md:mt-0 flex flex-col justify-center items-center">
      <img
        src="/ticket-text.svg"
        alt="ticket-text"
        className="w-32 md:w-44 select-none mb-4"
      />
      <div className="w-full  max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center mx-auto">
        {TicketTypes.map((ticket) => {
          return (
            <TicketCard key={ticket.id} id={ticket.id} title={ticket.title} subtitle={ticket.subtitle} />
          )
        })}
      </div>
   </div>
  );
}
