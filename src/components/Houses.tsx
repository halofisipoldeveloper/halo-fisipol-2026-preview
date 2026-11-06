export default function Houses() {
    // Class dasar yang sama untuk semua gambar agar kodenya bersih
    const baseClass = "absolute object-cover object-bottom max-w-none w-28 sm:w-38 md:w-42 lg:w-54 xl:w-72 2xl:w-100";

    return (
        <div className="flex relative justify-center items-center w-full pointer-events-none">

            {/* --- BARIS KIRI --- */}
            {/* Rumah Paling Dalam (Render pertama agar di belakang) */}
            <img
                src="/house-2.svg"
                alt="house-2"
                className={`${baseClass} left-14 md:left-56 2xl:left-96 -bottom-3 md:-bottom-10 2xl:-bottom-20`}
            />

            {/* Rumah Tengah */}
            <img
                src="/house-1.svg"
                alt="house-1"
                className={`${baseClass} -left-2 md:left-20 2xl:left-32 -bottom-6 md:-bottom-16 2xl:-bottom-32`}
            />

            {/* Rumah Paling Luar (Efek terpotong/bleeding ke sisi kiri) */}
            <img
                src="/house.svg"
                alt="house"
                className={`${baseClass} -left-18 md:-left-16 2xl:-left-28 -bottom-10 md:-bottom-28 2xl:-bottom-48`}
            />


            {/* --- BARIS KANAN --- */}
            {/* Rumah Paling Dalam (Render pertama agar di belakang) */}
            <img
                src="/house-5.svg"
                alt="house-5"
                className={`${baseClass} right-10 md:right-48 2xl:right-80 -bottom-3 md:-bottom-10 2xl:-bottom-20`}
            />

            {/* Rumah Tengah */}
            <img
                src="/house-4.svg"
                alt="house-4"
                className={`${baseClass}  -right-2 md:right-20 2xl:right-32 -bottom-6 md:-bottom-16 2xl:-bottom-32`}
            />

            {/* Rumah Paling Luar (Efek terpotong/bleeding ke sisi kanan) */}
            <img
                src="/house-3.svg"
                alt="house-3"
                className={`${baseClass} -right-18 md:-right-16 2xl:-right-28 -bottom-10 md:-bottom-28 2xl:-bottom-48`}
            />

        </div>
    );
}
