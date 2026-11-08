type ExperienceProps = {
  character: string;
  title: string;
  description: string;
  isBundling?: boolean;
  includes?: string[];
  includesDay1?: string[];
  includesDay2?: string[];
  bonus?: string;
}

const CHARACTER_STYLES: Record<string, { bgClass: string, img: string, imgMobile: string }> = {
  Callie: {
    bgClass: 'bg-[#F2C15A]',
    img: '/ticket-card-top-callie.svg',
    imgMobile: '/ticket-card-top-callie-mobile.svg'
  },
  Pecko: {
    bgClass: 'bg-[#E099B1]',
    img: '/ticket-card-top-pecko.svg',
    imgMobile: '/ticket-card-top-pecko-mobile.svg'
  },
  Toby: {
    bgClass: 'bg-[#73C0B0]',
    img: '/ticket-card-top-toby.svg',
    imgMobile: '/ticket-card-top-toby-mobile.svg'
  },
  All: {
    bgClass: 'bg-[#71CFEB]',
    img: '/ticket-card-top-callie.svg',
    imgMobile: '/ticket-card-top-callie-mobile.svg'
  }
};

export default function TicketCard({
  character, title, description, isBundling, includes, includesDay1, includesDay2, bonus
}: ExperienceProps) {

  const style = CHARACTER_STYLES[character] || CHARACTER_STYLES['Callie'];

  return (

    <div className="flex flex-col md:flex-row w-full max-w-sm md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl h-auto md:h-[480px] overflow-hidden rounded-xl ">

      <img
        src={style.imgMobile}
        alt={`ticket-card-top-${character.toLowerCase()}-mobile`}
        className="w-full h-auto object-cover pointer-events-none block md:hidden shrink-0"
      />

      <img
        src={style.img}
        alt={`ticket-card-top-${character.toLowerCase()}`}
        className="w-auto h-full shrink-0 object-cover pointer-events-none hidden md:block"
      />

      <div className="flex-1 h-full flex flex-col justify-center items-center bg-[#F9EAC9] p-4 md:p-5 lg:p-7 text-[#6D3929]">

        <div className={`${style.bgClass} w-full h-full p-5 md:p-6 lg:p-8 flex flex-col gap-y-3 md:gap-y-4 rounded-lg overflow-y-auto`}>

          <h1 className="text-4xl md:text-5xl font-cowboy uppercase text-center shrink-0">{title}</h1>

          <p className="text-sm lg:text-base text-justify leading-relaxed shrink-0">
            {description}
          </p>

          {isBundling ? (
            <div className="mt-2 flex flex-col gap-y-4">

              <div className="flex flex-col lg:flex-row gap-4 md:gap-6 w-full">
                <div className="flex-1">
                  <p className="font-bold text-base lg:text-lg mb-1 md:mb-2">Include Day 1:</p>
                  <ul className="list-disc list-outside ml-5 md:ml-6 space-y-1 text-xs lg:text-sm">
                    {includesDay1?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-base lg:text-lg mb-1 md:mb-2">Include Day 2:</p>
                  <ul className="list-disc list-outside ml-5 md:ml-6 space-y-1 text-xs lg:text-sm">
                    {includesDay2?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {bonus && (
                <div className="mt-2 p-2 md:p-3 bg-white/30 rounded-lg">
                  <p className="font-bold text-base lg:text-lg">Bonus:</p>
                  <p className="font-medium text-xs lg:text-sm">{bonus}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-2">
              <p className="font-bold text-base lg:text-lg mb-1 md:mb-2">Include:</p>
              <ul className="list-disc list-outside ml-5 md:ml-6 space-y-1 text-xs lg:text-sm">
                {includes?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <a
            href="https://www.yesplis.com/event/halofisipol2026"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center items-center px-6 py-3 rounded-xl bg-[#6D3929] text-white font-bold hover:opacity-80 transition-all duration-300"
          >
            Buy Ticket
          </a>
          
        </div>
      </div>
    </div>
  );
}
