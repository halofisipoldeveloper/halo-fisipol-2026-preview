export default function FooterBackground() {
  return (
    <div className="flex w-full  justify-between items-end gap-x-8 md:gap-x-20 opacity-10 pointer-events-none overflow-hidden">
      <img
        src="/mountain-silhouette-black.svg"
        alt="mountain-silhouette-black"
        aria-hidden="true"
        className="w-sm object-cover object-bottom "
      />
      <img
        src="/mountain-silhouette-black.svg"
        alt="mountain-silhouette-black"
        aria-hidden="true"
        className="w-sm object-cover object-bottom invisible md:visible -scale-x-100"
      />
    </div>
  );
}
