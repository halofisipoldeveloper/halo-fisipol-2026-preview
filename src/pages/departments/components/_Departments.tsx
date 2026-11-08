import DepartmentCard from "./_DepartmentCard";

const DepartmentsData = [
  {id: 1, title: 'DPP', color: 'bg-[#F2C15A]', route: "DPP"},
  {id: 2, title: 'MKP', color: 'bg-[#9D83C4]', route: "MKP"},
  {id: 3, title: 'HI', color: 'bg-[#E6C592]', route: "HI"},
  {id: 4, title: 'ILKOM', color: 'bg-[#73C0B0]', route: "ILKOM"},
  {id: 5, title: 'PSDK', color: 'bg-[#F5C5D1]', route: "PSDK"},
  {id: 6, title: 'SOSIO', color: 'bg-[#F7AE8E]', route: "SOSIO"},

]


export default function Packages() {
  return (
    // <div className="relative w-full my-32 md:my-0 flex flex-col gap-10 md:gap-8 justify-center items-center mx-auto p-6 pt-24 md:pt-18 pb-6 md:pb-0">
    <div className="relative w-full mt-20 mb-8 md:mt-16 md:mb-0 flex flex-col gap-6 md:gap-5 justify-start items-center mx-auto px-6 pt-4 pb-4">
      <img
        src="/department-tour-text.svg"
        alt="department-tour-text"
        className="w-60 md:w-80 select-none mb-8"
      />
      <div className="w-full  max-w-7xl flex flex-col md:flex-row gap-2 md:gap-4 justify-start items-center mx-auto">
        {DepartmentsData.map((data) => {
          return (
            <DepartmentCard key={data.id} id={data.id} title={data.title} color={data.color} href={`/departments/${data.route.toLowerCase()}`} />
          )
        })}
      </div>
   </div>
  );
}
