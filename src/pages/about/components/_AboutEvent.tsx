import TextContainer from "../../../components/TextContainer.tsx";

export default function AboutEvent() {
  return (
    <div className="w-full h-screen max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center mx-auto p-4">

      {/* Kiri: Logo */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/logo.svg"
          alt="halo-fisipol-logo"
          className="w-full max-w-44 md:max-w-sm h-auto object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 text-[#6D3929]">

        <TextContainer className="flex flex-col gap-y-6 h-full max-h-[50vh] md:max-h-[156] overflow-y-auto pr-4 ">

          <h2 className="text-2xl font-bold font-cowboy tracking-widest">
            Saddle up! Petualanganmu dimulai di sini.
          </h2>

          <p className="text-base leading-relaxed opacity-90">
            Halo FISIPOL adalah open house tahunan yang diselenggarakan oleh Dewan Mahasiswa Fakultas Ilmu Sosial dan Politik Universitas Gadjah Mada. Acara ini dirancang khusus untuk siswa SMA yang penasaran seperti apa rasanya kuliah di FISIPOL UGM. Selama dua hari, kamu bisa ikut talkshow bersama narasumber, Sit-in Class di ruang kuliah yang sebenarnya, berkeliling kampus, ngobrol langsung dengan mahasiswa di stand HMD dan UKMF, sampai menggali lebih dalam tiap departemen lewat Department Discovery. Nggak cuma lihat brosur, kamu mengalami sendiri suasana akademik dan kehidupan kemahasiswaannya.
          </p>

          <h2 className="text-2xl font-bold font-cowboy tracking-widest">
            Pilih jalanmu, temukan tempatmu.
          </h2>

        </TextContainer>
      </div>

    </div>
  );
}
