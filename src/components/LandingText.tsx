import { navigate } from 'astro:transitions/client';

export default function LandingText() {

  const handleNavigate = () => {
    navigate('/home');
  };

  return (
    // Outer Wrapper: Mengatur susunan (Logo+Teks) dan (Button) agar selalu atas-bawah
    <div className="relative w-full min-h-[220px] overflow-hidden flex flex-col justify-center items-center gap-y-10 px-6 py-12 z-10 font-satoshi">

      {/* Inner Wrapper: Mengatur susunan Logo dan Teks (Mobile: atas-bawah, Desktop: kiri-kanan) */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-y-10 md:gap-x-12 w-full">

        <img
          src="/logo.svg"
          alt="HALOFISIPOL Logo"
          // Tambahkan shrink-0 agar logo tidak gepeng/tertekan oleh panjangnya teks di sebelahnya
          className="w-48 md:w-64 2xl:w-80 object-contain drop-shadow-lg shrink-0"
        />

        <div className="max-w-sm md:max-w-lg 2xl:max-w-xl">
          <p className="text-justify leading-relaxed text-[#6D3929] text-sm md:text-base 2xl:text-lg font-normal tracking-wide">
            <span className="font-bold text-base md:text-lg 2xl:text-xl">HALO FISIPOL 2026 </span>
            adalah program open house tahunan yang diselenggarakan oleh Dewan Mahasiswa (DEMA) Fakultas Ilmu Sosial dan Ilmu Politik Universitas Gadjah Mada (Fisipol UGM) untuk mengenalkan lingkungan kampus kepada siswa SMA dan sederajat dari seluruh Indonesia.
          </p>
        </div>

      </div>

      {/* Button: Warna kuning, shadow, rounded-sm (mendekati xs), text cokelat */}
      <button
        onClick={handleNavigate}
        className="p-6 py-3 bg-yellow-400 text-[#6D3929] text-xl font-bold tracking-wide rounded-2xl shadow-md hover:bg-yellow-500 hover:shadow-lg active:scale-95 transition-all duration-300 cursor-pointer"
      >
        Mulai Eksplorasi
      </button>

    </div>
  );
}
