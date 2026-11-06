type Props = {
  id: number;
  title: string;
  subtitle: string;
}


export default function TicketCard({id, title, subtitle}: Props) {
  return (
    <div className="w-full max-w-lg h-full">
      <img
        src="/ticket-card-top.svg"
        alt="ticket-card-top"
        className="w-full h-full pointer-none"
      />
      <div className="w-full h-96 justify-center items-center bg-[#F9EAC9] p-4">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
