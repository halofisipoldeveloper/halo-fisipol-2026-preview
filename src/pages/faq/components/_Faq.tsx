import TextContainer from "../../../components/TextContainer.tsx";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../components/starwind-react/accordion";

const faqData = [
  {
    question: "Apa itu Halo Fisipol 2026?",
    answer: "Halo FISIPOL adalah open house tahunan yang diselenggarakan oleh Dewan Mahasiswa Fakultas Ilmu Sosial dan Politik UGM."
  },
  {
    question: "Siapa saja yang bisa mengikuti acara ini?",
    answer: "Acara ini dirancang khusus untuk siswa SMA/sederajat yang penasaran dengan kehidupan perkuliahan di FISIPOL UGM."
  },
  {
    question: "Apakah kegiatan ini dipungut biaya?",
    answer: "Tidak, seluruh rangkaian kegiatan Halo Fisipol tidak dipungut biaya alias gratis."
  },
  {
    question: "Di mana acara ini diselenggarakan?",
    answer: "Acara ini akan diselenggarakan secara luring di lingkungan Fakultas Ilmu Sosial dan Ilmu Politik UGM."
  },
  {
    question: "Bagaimana cara mendaftar kegiatan ini?",
    answer: "Informasi pendaftaran akan diumumkan melalui akun Instagram resmi Halo Fisipol dan website ini."
  }
];

export default function FAQ() {
  return (
    <div className="w-full h-screen max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center mx-auto p-4 ">

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/faq.svg"
          alt="faq"
          className="w-full max-w-72 md:max-w-lg h-auto object-contain"
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
                <AccordionTrigger className="text-lg font-bold font-cowboy tracking-widest text-left py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed opacity-90 pb-4">
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
