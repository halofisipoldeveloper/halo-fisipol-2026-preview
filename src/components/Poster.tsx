export default function Poster() {
  return (
    <div className="flex justify-evenly md:justify-between items-center w-full  pointer-events-none animate">
      <img
          src="/wanted-poster.svg"
          alt="wanted-poster"
          className="w-30 2xl:w-52 poster-rotate-left"
      /> <img
          src="/horse-poster.svg"
          alt="horse-poster"
          className="w-30 2xl:w-52 poster-rotate-right"
      />
    </div>
  )
}
