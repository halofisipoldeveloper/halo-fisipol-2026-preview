export default function LandingSky() {
  // Class dasar yang sama untuk semua awan agar kode lebih bersih
  const baseCloudClass = "w-48 md:w-96 2xl:w-[32rem] object-cover object-bottom max-w-none";

  return (
    // Tambahkan 'flex-col' di sini agar baris 1 dan baris 2 tersusun dari atas ke bawah
    <div className="flex flex-col w-full pointer-events-none gap-y-4 md:gap-y-12 2xl:gap-y-20">

      {/* --- BARIS 1 --- */}
      {/* justify-between melempar awan 1 ke paling kiri, dan awan 2 ke paling kanan */}
      <div className="flex justify-between items-center w-full">
        <img
          src="/cloud-2.webp"
          alt="cloud-2"
          className={`${baseCloudClass} animate-wiggle-left`}
        />
        <img
          src="/cloud-3.webp"
          alt="cloud-3"
          className={`${baseCloudClass} animate-wiggle-right`}
        />
      </div>

      {/* --- BARIS 2 --- */}
      {/*<div className="flex justify-between items-center w-full">
        <img
          src="/cloud.webp"
          alt="cloud"
          className={`${baseCloudClass} animate-wiggle-left`}
        />
        <img
          src="/cloud-1.webp"
          alt="cloud-1"
          className={`${baseCloudClass} animate-wiggle-right`}
        />
      </div>*/}

    </div>
  );
}
