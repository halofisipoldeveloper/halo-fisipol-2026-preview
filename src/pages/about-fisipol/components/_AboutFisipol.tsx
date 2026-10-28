import TextContainer from "../../../components/TextContainer.tsx";

export default function AboutFisipol() {
  return (
    <div className="w-full h-screen max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center mx-auto p-4">

      {/* Kiri: Logo */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/about.svg"
          alt="halo-fisipol-logo"
          className="w-full max-w-44 md:max-w-sm h-auto object-contain"
        />
      </div>

      {/* Kanan: Konten Teks */}
      <div className="w-full md:w-1/2 text-[#6D3929]">

        {/* Perbaikan: Ganti visible jadi auto, tambah pr-4 untuk jarak scrollbar */}
        <TextContainer className="flex flex-col gap-y-6 h-full max-h-[50vh] md:max-h-[156] overflow-y-auto pr-4 custom-scrollbar">

          <p className="text-base leading-relaxed opacity-90">
            Fakultas Ilmu Sosial dan Ilmu Politik (FISIPOL) Universitas Gadjah Mada adalah rumah bagi enam departemen yang mempelajari masyarakat, kekuasaan, dan kebijakan dari berbagai sudut pandang:, mulai dari Hubungan Internasional, Ilmu Komunikasi, Manajemen dan Kebijakan Publik, Pembangunan Sosial dan Kesejahteraan, Politik dan Pemerintahan, hingga Sosiologi. Di sini, belajar nggak berhenti di ruang kelas. FISIPOL punya ruang-ruang yang mendukung mahasiswa berdiskusi, berkolaborasi, dan berkarya, seperti Taman Sansiro, FISIPOINT, dan BRIWork. Ada juga layanan akademik, Career Development Center untuk persiapan karir, hingga layanan psikologi untuk mendukung kesehatan mental mahasiswa. Dekan Fisipol sendiri menyebut fakultas ini berkomitmen menjadi rumah yang aman dan suportif bagi seluruh mahasiswanya.
          </p>

          <span>
            <h2 className="text-2xl font-bold font-cowboy tracking-widest">
              Tiga hal yang menggambarkan FISIPOL:
            </h2>

            <p className="text-base leading-relaxed opacity-90">
             Kritis. Terbiasa bertanya, berdiskusi, dan melihat persoalan dari berbagai sisi.
            </p>

            <p className="text-base leading-relaxed opacity-90">
              Kolaboratif. Belajar dan berkarya bersama, baik di kelas maupun organisasi.
            </p>

            <p className="text-base leading-relaxed opacity-90">
             Terbuka. Ruang yang ramah untuk beragam latar belakang dan minat.
            </p>
         </span>







        </TextContainer>
      </div>

    </div>
  );
}
