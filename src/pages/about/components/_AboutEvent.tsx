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
        <TextContainer className="flex flex-col gap-y-4 lg:gap-y-6 h-auto max-h-[50vh] md:max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-cowboy tracking-widest">
            Saddle up! Petualanganmu dimulai di sini.
          </h2>

          {/* Menambahkan text-justify dan memecah paragraf agar lebih rapi dibaca */}
          <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90 text-justify">
            Halo FISIPOL adalah open house tahunan yang diselenggarakan oleh Dewan Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Gadjah Mada. Acara ini dirancang khusus untuk siswa SMA yang penasaran seperti apa rasanya kuliah di FISIPOL UGM.
          </p>

          <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90 text-justify">
            Selama dua hari, kamu bisa ikut talkshow bersama narasumber, Sit-in Class di ruang kuliah yang sebenarnya, berkeliling kampus, ngobrol langsung dengan mahasiswa di stand HMD dan UKMF, sampai menggali lebih dalam tiap departemen lewat Department Discovery. Nggak cuma lihat brosur, kamu mengalami sendiri suasana akademik dan kehidupan kemahasiswaannya.
          </p>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-cowboy tracking-widest mt-2">
            Pilih jalanmu, temukan tempatmu.
          </h2>

        </TextContainer>
      </div>

    </div>
  );
}
