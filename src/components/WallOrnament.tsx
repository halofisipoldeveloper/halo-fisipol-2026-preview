export default function WallOrnament() {
  return (
    <div className="flex  justify-evenly items-center w-full pointer-events-none animate">
      <img
          src="/lentern.svg"
          alt="lentern"
          className="w-11 md:w-12 2xl:w-24  lentern-rotate-right"
      /> <img
          src="/skeleton.svg"
          alt="skeleton"
          className="w-44 md:w-66 2xl:w-86  "
      /> <img
          src="/lentern.svg"
          alt="lentern"
          className="w-11 md:w-12 2xl:w-24  lentern-rotate-left"
      />
    </div>
  )
}
