export default function MountainSilhouette() {
  return (
    <div className="flex gap-x-40 pointer-events-none justify-center items-center animate-mountain-silhouette-up">
      <img
        src="/mountain-silhouette.svg"
        alt=""
        aria-hidden="true"
        className="  object-cover object-bottom "
      />
      <img
        src="/mountain-silhouette.svg"
        alt=""
        aria-hidden="true"
        className="  object-cover object-bottom -scale-x-100"
      />
    </div>
  );
}
