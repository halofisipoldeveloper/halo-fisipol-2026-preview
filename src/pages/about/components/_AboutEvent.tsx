import TextContainer from "../../../components/TextContainer.tsx";

export default function AboutEvent() {
  return (
    // Penyesuaian lebar bertingkat untuk layar besar (lg, xl, 2xl)
    <div className="w-full min-h-[100dvh] max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl flex flex-col md:flex-row gap-8 lg:gap-12 xl:gap-16 justify-center items-center mx-auto p-6">

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/logo.svg"
          alt="halo-fisipol-logo"
          // Penyesuaian ukuran logo agar lentur di setiap breakpoint
          className="w-44 md:w-56 lg:w-72 xl:w-80 2xl:w-96 h-auto object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 text-[#6D3929]">
        <TextContainer className="flex flex-col gap-y-3 lg:gap-y-4 h-auto max-h-[50vh] md:max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-cowboy tracking-widest">
            Saddle up! Petualanganmu dimulai di sini.
          </h2>

          {/* Menambahkan text-justify dan memecah paragraf agar lebih rapi dibaca */}
          <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90 text-justify">
            Halo FISIPOL merupakan open house resmi tahunan persembahan Dewan Mahasiswa FISIPOL UGM yang dirancang sebagai sarana navigasi awal bagi siswa SMA/sederajat dalam mengenali lanskap pendidikan ilmu sosial dan politik.
          </p>

          <div className="flex flex-col gap-1">
            <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90 text-justify">
              Selama dua hari penyelenggaraan, Halo FISIPOL membuka akses langsung bagi calon mahasiswa untuk membedah realitas perkuliahan sebelum menentukan pilihan jurusan:
            </p>

            <ul className="list-disc list-outside ml-5 lg:ml-6 text-sm md:text-base lg:text-lg leading-relaxed opacity-90 mt-0">
              <li>
                <span className="font-bold">Eksplorasi Kurikulum & Profil 6 Departemen</span>
                <p className="mt-0">Menyelami karakter keilmuan, perbedaan fokus studi, hingga luaran kompetensi di Hubungan Internasional, Ilmu Komunikasi, MKP, PSdK, Politik & Pemerintahan, dan Sosiologi.</p>
              </li>

              <li>
                <span className="font-bold">Dialog Interaktif bersama Pakar & Mahasiswa Aktif</span>
                <p className="mt-0">Menggali perspektif langsung dari narasumber, dosen, serta praktisi mengenai tren isu sosial-politik terkini dan pembentukan pola pikir analitis.</p>
              </li>

              <li>
                <span className="font-bold">Prospek Karier & Faculty Tour</span>
                <p className="mt-0">Memetakan arah karier lulusan FISIPOL di berbagai sektor strategis sekaligus merasakan atmosfer belajar, dinamika keorganisasian, dan budaya diskusi di lingkungan kampus UGM.</p>
              </li>
            </ul>
          </div>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90 text-justify">
          Halo FISIPOL hadir bukan sekadar untuk memperkenalkan bangunan fisik kampus, melainkan untuk membantu siswa merumuskan minat akademis, memahami tantangan studi, dan membayangkan peran yang ingin diambil di masa depan.
          </p>

        </TextContainer>
      </div>

    </div>
  );
}
