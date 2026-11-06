import TextContainer from "../../../components/TextContainer.tsx";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../components/starwind-react/accordion";

const faqData = [
  // --- FAQ UMUM ---
  {
    question: "Apa itu Halo Fisipol 2026?",
    answer: <>Halo FISIPOL adalah open house tahunan yang diselenggarakan oleh Dewan Mahasiswa Fakultas Ilmu Sosial dan Politik UGM.</>
  },
  {
    question: "Siapa saja yang bisa mengikuti acara ini?",
    answer: <>Acara ini dirancang khusus untuk siswa SMA/sederajat yang penasaran dengan kehidupan perkuliahan di FISIPOL UGM.</>
  },
  {
    question: "Di mana acara ini diselenggarakan?",
    answer: <>Acara ini akan diselenggarakan secara luring di lingkungan Fakultas Ilmu Sosial dan Ilmu Politik UGM.</>
  },
  {
    question: "Bagaimana cara mendaftar kegiatan ini?",
    answer: <>Kamu dapat mendaftar dengan membeli tiket pada laman: <a href="https://www.yesplis.com/event/halofisipol2026" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-[#AB6938] transition-colors">Yesplis Halo Fisipol 2026</a>.</>
  },

  // --- FAQ TICKETING GUIDELINES ---
  {
    question: "Bagaimana cara membeli tiket HALO FISIPOL 2026?",
    answer: <>Pembelian dapat dilakukan melalui laman <a href="https://www.yesplis.com/event/halofisipol2026" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-[#AB6938] transition-colors">Yesplis Halo Fisipol 2026</a>.</>
  },
  {
    question: "Apakah satu akun YESPLIS bisa membeli lebih dari satu tiket?",
    answer: <>Sobat Fisipol dapat membeli maksimal lima tiket per akun, ya.</>
  },
  {
    question: "Apakah tiket bisa dibeli secara offline?",
    answer: <>Tidak dapat dibeli secara offline ya Sobat Fisipol. Pembelian hanya dilakukan melalui Yesplis pada laman berikut: <a href="https://www.yesplis.com/event/halofisipol2026" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-[#AB6938] transition-colors">Yesplis Halo Fisipol 2026</a>.</>
  },
  {
    question: "Apakah tiket bisa dibatalkan/refund?",
    answer: <>Tidak ya, sobat fisipol. Tiket yang sudah dibeli bersifat final dan non-refundable (tidak dapat diuangkan kembali), kecuali jika ada pembatalan resmi atau kebijakan khusus dari pihak Halo Fisipol 2026.</>
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: <>Sobat Fisipol dapat melakukan pembayaran hanya dengan QRIS.</>
  },
  {
    question: "Apa saja data yang diperlukan untuk membeli tiket?",
    answer: <>Untuk membeli tiket Halo Fisipol dapat menyertakan nama lengkap, tahun lahir, jenis kelamin, email dan nomor telepon.</>
  },
  {
    question: "Siapa yang bisa saya hubungi saat ada kendala tiket?",
    answer: <>Sobat Fisipol dapat menghubungi contact person yang tersedia, ya.</>
  },
  // {
  //   question: "Kapan batas pembelian tiket?",
  //   answer: <>Batas pembelian tiket Halo Fisipol pada tanggal MSMSMSMMS.</>
  // },
  {
    question: "Apakah ada penukaran tiket fisik?",
    answer: <>Ada yaa, sobat fisipol! Penukaran tiket dapat dilakukan ketika Hari-H Halo Fisipol 2026.</>
  },
  {
    question: "Batas pembayaran tiket setelah pengisian data?",
    answer: <>Sobat Fisipol memiliki waktu 1x24 jam untuk menyelesaikan pembayaran.</>
  },
  {
    question: "Apakah tiket bisa dipindahtangankan?",
    answer: <>Tiket Halo Fisipol tidak dapat dipindahtangankan kepada orang lain karena tiket terdaftar sesuai dengan data peserta yang telah diinput saat pembelian.</>
  },
  // {
  //   question: "Apa yang diharus dilakukan jika terjadi kesalahan data?",
  //   answer: <>Sobat Fisipol dapat menghubungi CP berikut ….</>
  // },
  {
    question: "Apakah tiket dapat digunakan untuk dua hari?",
    answer: <>Tergantung Sobat Fisipol membeli paket yang ada. Tersedia paket Day 1 atau Day 2 secara satuan, serta Bundling Pass jika ingin mengakses kedua harinya secara penuh.</>
  },
  {
    question: "Apakah harga tiket sudah termasuk dengan pajak pembelian?",
    answer: <>Belum ya, Sobat Fisipol. Harga tiket yang ditawarkan belum termasuk dengan pajak dan biaya layanan ya, Sobat Fisipol.</>
  },
  {
    question: "Bagaimana saya bisa melihat tiket yang sudah terbeli?",
    answer: <>Tiket yang sudah dibeli dapat dilihat melalui email yang digunakan saat pembelian tiket.</>
  },
  {
    question: "Apa saja yang harus dibawa saat penukaran tiket?",
    answer: <>Sobat Fisipol dapat membawa E-Ticket dan Kartu Identitas (Kartu Pelajar, KTP, KIA, SIM, Paspor, dll).</>
  },
  {
    question: "Apakah peserta mendapatkan konsumsi?",
    answer: <>Sobat Fisipol nantinya akan mendapatkan konsumsi ya! Tetap disarankan untuk membawa tumblr/botol minum yaa.</>
  }
];

export default function FAQ() {
  return (
    <div className="w-full h-screen max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center mx-auto p-4 ">

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/faq.svg"
          alt="faq"
          className="w-full max-w-72 md:max-w-sm 2xl:max-w-lg h-auto object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 text-[#6D3929]">
        <TextContainer className="flex flex-col h-full max-h-[50vh] md:max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
          <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#6D3929]/30"
              >
                <AccordionTrigger className="text-lg  font-semibold  text-left py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed opacity-90 pb-4">
                  {/* faq.answer sekarang dirender langsung sebagai komponen React (JSX) */}
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TextContainer>
      </div>

    </div>
  );
}
