import TextContainer from "../../../components/TextContainer.tsx";

export default function Gallery() {
  return (
    <div className="w-full h-screen max-w-5xl flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center mx-auto p-4">

      <img
          src="/coming-soon.svg"
          alt="coming-soon"
    className="w-64 md:w-80 object-cover object-bottom "/>
    </div>
  );
}
