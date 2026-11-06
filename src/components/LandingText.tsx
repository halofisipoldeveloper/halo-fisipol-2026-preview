export default function LandingText() {
  return (
    // Tambahkan md:gap-x-12 untuk memberi jarak ke samping saat mode flex-row
    <div className="relative w-full min-h-[220px] overflow-hidden flex flex-col md:flex-row justify-center items-center gap-y-10 md:gap-x-12 px-6 py-12 z-10">

      <img
        src="/logo.svg"
        alt="HALOFISIPOL Logo"
        // Tambahkan shrink-0 agar logo tidak gepeng/tertekan oleh panjangnya teks di sebelahnya
        className="w-48 md:w-64 2xl:w-80 object-contain drop-shadow-lg shrink-0"
      />

      {/* Hapus mx-auto agar flex bisa mengontrol posisinya secara absolut ke tengah */}
      {/* max-w disesuaikan sedikit agar proporsional saat bersebelahan dengan logo */}
      <div className="max-w-sm md:max-w-lg 2xl:max-w-xl">

        {/* Pisahkan text-center (untuk HP) dan md:text-justify (untuk desktop) */}
        <p className="text-justify leading-relaxed text-[#6D3929] text-sm md:text-base 2xl:text-lg font-medium tracking-wide">
          <span className="font-bold text-base md:text-lg 2xl:text-xl">HALO FISIPOL 2026 </span>
          adalah program open house tahunan yang diselenggarakan oleh Dewan Mahasiswa (Dema) Fakultas Ilmu Sosial dan Ilmu Politik Universitas Gadjah Mada (Fisipol UGM) untuk mengenalkan lingkungan kampus kepada siswa SMA dan sederajat dari seluruh Indonesia.
        </p>
      </div>

    </div>
  );
}
