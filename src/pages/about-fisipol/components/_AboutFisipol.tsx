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
        <TextContainer className="flex flex-col gap-y-4 lg:gap-y-6 h-auto max-h-[50vh] md:max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">

          <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90 text-justify">
            Fakultas Ilmu Sosial dan Ilmu Politik (FISIPOL) Universitas Gadjah Mada adalah rumah bagi enam departemen yang mempelajari masyarakat, kekuasaan, dan kebijakan dari berbagai sudut pandang: Hubungan Internasional, Ilmu Komunikasi, Manajemen dan Kebijakan Publik, Pembangunan Sosial dan Kesejahteraan, Politik dan Pemerintahan, hingga Sosiologi.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90 text-justify">
            Di sini, belajar nggak berhenti di ruang kelas. FISIPOL punya ruang-ruang yang mendukung mahasiswa berdiskusi, berkolaborasi, dan berkarya, seperti Taman Sansiro, FISIPOINT, dan BRIWork. Ada juga layanan akademik, Career Development Center untuk persiapan karir, hingga layanan psikologi untuk mendukung kesehatan mental mahasiswa. Dekan Fisipol sendiri menyebut fakultas ini berkomitmen menjadi rumah yang aman dan suportif bagi seluruh mahasiswanya.
          </p>

          <div className="mt-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-cowboy tracking-widest mb-3">
              Tiga hal yang menggambarkan FISIPOL:
            </h2>

            {/* Menggunakan <ul> dan <li> agar format list (dots) tereksekusi dengan rapi */}
            <ul className="list-disc list-outside ml-5 lg:ml-6 space-y-2 text-sm md:text-base lg:text-lg leading-relaxed opacity-90">
              <li>
                <span className="font-bold">Kritis.</span> Terbiasa bertanya, berdiskusi, dan melihat persoalan dari berbagai sisi.
              </li>
              <li>
                <span className="font-bold">Kolaboratif.</span> Belajar dan berkarya bersama, baik di kelas maupun organisasi.
              </li>
              <li>
                <span className="font-bold">Terbuka.</span> Ruang yang ramah untuk beragam latar belakang dan minat.
              </li>
            </ul>
          </div>

        </TextContainer>
      </div>

    </div>
  );
}
