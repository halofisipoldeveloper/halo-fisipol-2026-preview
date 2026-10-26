export default function WoodWall() {
  return (
    <div className="absolute  w-full w-hull max-h-4/5  overflow-hidden">
      <picture>
        <source media="(min-width: 768px)" srcSet="/wood-background-desktop.svg" />

        <img
          src="/wood-background-mobile.svg"
          alt="Wood background"
          className="w-full h-full object-cover object-bottom"
        />
      </picture>


    </div>
  );
}
