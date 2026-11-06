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
    <div className="relative w-full my-32 md:my-0 flex flex-col justify-center items-center">
      <img
        src="/department-tour-text.svg"
        alt="department-tour-text"
        className="w-60 md:w-80 select-none mb-8"
      />
      <div className="w-full  max-w-7xl flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center mx-auto">
        {DepartmentsData.map((data) => {
          return (
            <DepartmentCard key={data.id} id={data.id} title={data.title} color={data.color} href={`/departments/${data.route.toLowerCase()}`} />
          )
        })}
      </div>
   </div>
  );
}
