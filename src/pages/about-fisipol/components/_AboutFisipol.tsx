import TextContainer from "../../../components/TextContainer.tsx";

export default function AboutFisipol() {
  return (
    // Menyamakan layout wrapper dengan AboutEvent agar konsisten (menggunakan min-h-[100dvh])
    <div className="w-full min-h-[100dvh] max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-16 justify-center items-center mx-auto p-6">

      {/* Kiri: Logo */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/about.svg"
          alt="halo-fisipol-logo"
          className="w-44 md:w-56 lg:w-72 xl:w-80 2xl:w-96 h-auto object-contain"
        />
      </div>

      {/* Kanan: Konten Teks */}
      <div className="w-full md:w-1/2 text-[#6D3929]">
        <TextContainer className="flex flex-col gap-y-3 lg:gap-y-4 h-auto max-h-[50vh] md:max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">

          <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90 text-justify">
            <span className="font-bold">FISIPOL Universitas Gadjah Mada</span> adalah ruang bertemunya gagas-gagas besar tentang masyarakat, kekuasaan, dan arah kebijakan publik. Di sini, enam bidang keilmuan bergerak saling melengkapi: Hubungan Internasional, Ilmu Komunikasi, Manajemen dan Kebijakan Publik, Pembangunan Sosial dan Kesejahteraan, Politik dan Pemerintahan, serta Sosiologi.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90 text-justify">
            Diskusi akademik di FISIPOL tidak berhenti di batas dinding ruang kuliah. Sudut-sudut kampus seperti Taman Sansiro, FISIPOINT, hingga BRIWork menjadi ruang hidup bagi lahirnya ide, perdebatan sehat, dan karya kolaboratif. Eksplorasi intelektual tersebut ditopang oleh ekosistem penunjang yang utuh: dari kemudahan layanan akademik, akselerasi karier melalui Career Development Center, hingga ruang aman pendampingan kesehatan mental. FISIPOL dirancang menjadi tempat bertumbuh yang suportif, tempat setiap mahasiswa dapat mengeksplorasi potensi terbesarnya secara matang.
          </p>

        </TextContainer>
      </div>

    </div>
  );
}
