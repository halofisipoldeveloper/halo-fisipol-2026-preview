// Tambahkan 'group relative transition-all' agar animasi mulus dan bisa memicu efek di child-nya
const handleHover = 'group relative transition-all duration-500 ease-in-out hover:-translate-y-16';

export default function Tables() {
    return (
        <div className="flex justify-center items-end w-full">

            {/* Table 1 */}
            <div className={`${handleHover} hover:-translate-x-4`}>
                {/* Efek Glow Lingkaran */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-142 md:h-142 bg-yellow-400 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out "></div>

                <img
                    src="/table.svg"
                    alt="table"
                    // Tambahkan relative z-10 agar gambar pasti berada di atas glow
                    className="relative z-10 w-44 md:w-86 object-cover object-bottom"
                />
            </div>

            {/* Table 2 */}
            <div className={`${handleHover} hover:translate-x-4`}>
                {/* Efek Glow Lingkaran */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-142 md:h-142 bg-yellow-400 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out "></div>

                <img
                    src="/table-1.svg"
                    alt="table-1"
                    className="relative z-10 w-44 md:w-86 object-cover object-bottom"
                />
            </div>

        </div>
    );
}
