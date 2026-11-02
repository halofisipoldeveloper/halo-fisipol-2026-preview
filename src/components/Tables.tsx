// Tambahkan 'group relative transition-all' agar animasi mulus dan bisa memicu efek di child-nya
const handleHover = 'group relative transition-all duration-500 ease-in-out hover:-translate-y-16';

export default function Tables() {
    return (
        <div className="flex justify-center items-end w-full">

        <a href="/about">
          <div  className={`${handleHover} hover:-translate-x-4`}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 2xl:w-142 md:h-80 2xl:h-142 bg-yellow-400 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out "></div>

              <img
                  src="/table.svg"
                  alt="table"
                  className="relative z-10 w-44 md:w-64 2xl:w-86 object-cover object-bottom"
              />
          </div>
            </a>

        <a href="/about-fisipol">
          <div className={`${handleHover} hover:translate-x-4`}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 2xl:w-142 md:h-80 2xl:h-142 bg-yellow-400 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out "></div>

              <img
                  src="/table-1.svg"
                  alt="table-1"
                  className="relative z-10 w-44 md:w-64 2xl:w-86 object-cover object-bottom"
              />
          </div>
            </a>

        </div>
    );
}
